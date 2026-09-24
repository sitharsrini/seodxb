import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "dist/public");
const serverDir = path.join(root, "dist/server");

type Route = { path: string; file: string; title: string; description: string; ogType?: string; jsonLd?: object[] };
const { render, ROUTES, SITE_URL } = (await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href)) as {
  render: (p: string) => string;
  ROUTES: Route[];
  SITE_URL: string;
};
const template = readFileSync(path.join(out, "index.html"), "utf8");

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const ld = (o: object) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`;

for (const r of ROUTES) {
  const url = SITE_URL + (r.path === "/" ? "/" : r.path);
  const html = template
    .replace(/<title>.*?<\/title>/, () => `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, (_, a) => `${a}${esc(r.description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, (_, a) => `${a}${url}"`)
    .replace(/(<meta property="og:type" content=")[^"]*"/, (_, a) => `${a}${r.ogType ?? "website"}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, (_, a) => `${a}${esc(r.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, (_, a) => `${a}${esc(r.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, (_, a) => `${a}${url}"`)
    .replace("</head>", () => `${(r.jsonLd ?? []).map(ld).join("\n    ")}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${render(r.path)}</div>`);
  const file = path.join(out, r.file);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, html);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTES.map((r) => `  <url><loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
  `\n</urlset>\n`;
writeFileSync(path.join(out, "sitemap.xml"), sitemap);

// The worker only serves known pages; everything else is 410 Gone.
const workerPath = path.join(out, "_worker.js");
const worker = readFileSync(workerPath, "utf8");
const pagesLine = `const PAGES = new Set(${JSON.stringify(ROUTES.map((r) => r.path))});`;
if (!/^const PAGES = new Set\(.*\);$/m.test(worker)) throw new Error("PAGES line not found in _worker.js");
writeFileSync(workerPath, worker.replace(/^const PAGES = new Set\(.*\);$/m, () => pagesLine));

rmSync(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length} pages and sitemap.xml`);
