import { readFileSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "dist/public");
const serverDir = path.join(root, "dist/server");

const { render, ROUTES, SITE_URL } = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);
const template = readFileSync(path.join(out, "index.html"), "utf8");

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const r of ROUTES) {
  const url = SITE_URL + (r.path === "/" ? "/" : r.path);
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(r.description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(r.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(r.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace('<div id="root"></div>', `<div id="root">${render(r.path)}</div>`);
  writeFileSync(path.join(out, r.file), html);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTES.map((r: { path: string }) => `  <url><loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
  `\n</urlset>\n`;
writeFileSync(path.join(out, "sitemap.xml"), sitemap);

rmSync(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length} pages and sitemap.xml`);
