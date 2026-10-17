// On-page SEO audit of the built site (dist/public): titles, meta descriptions,
// H1/H2 structure, heading order, canonicals, Open Graph tags and image alt text.
// Run after `npm run build`: node scripts/seo-audit.mjs [--json out.json]
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../dist/public");
const SITE = "https://seodxb.com";
const files = [];
const walk = (d) => { for (const f of readdirSync(d)) { const p = path.join(d, f); if (statSync(p).isDirectory()) { if (!f.startsWith("_") && f !== "assets") walk(p); } else if (f.endsWith(".html")) files.push(p); } };
walk(root);

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const text = (h) => decode(h.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
const meta = (h, attr, name) => { const m = h.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`)) || h.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`)); return m ? decode(m[1]) : null; };

const pages = [];
for (const f of files) {
  const rel = "/" + path.relative(root, f).replace(/\\/g, "/").replace(/(index)?\.html$/, "").replace(/\/$/, "");
  const h = readFileSync(f, "utf8");
  if (/<meta[^>]*name="robots"[^>]*noindex/.test(h)) continue;
  const p = rel === "/" ? "/" : rel;
  const body = h.slice(h.indexOf("<body"));
  const headings = [...body.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({ l: +m[1], t: text(m[2]) }));
  const imgs = [...body.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  pages.push({
    path: p,
    title: text((h.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || ""),
    desc: meta(h, "name", "description"),
    canonical: (h.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/) || [])[1] || null,
    ogTitle: meta(h, "property", "og:title"),
    ogDesc: meta(h, "property", "og:description"),
    ogImage: meta(h, "property", "og:image"),
    headings,
    noAlt: imgs.filter((i) => !/\balt="/.test(i)).length,
  });
}

const issues = [];
const add = (page, sev, msg) => issues.push({ page, sev, msg });
const count = (arr) => arr.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());
const titles = count(pages.map((p) => p.title.toLowerCase()));
const descs = count(pages.map((p) => (p.desc || "").toLowerCase()));
const h1s = count(pages.map((p) => (p.headings.find((x) => x.l === 1)?.t || "").toLowerCase()));
const ignore404 = (p) => p.path === "/404";

for (const p of pages) {
  if (ignore404(p)) continue;
  const tl = p.title.length;
  if (!tl) add(p.path, "error", "missing <title>");
  else if (tl > 65) add(p.path, "warn", `title ${tl} chars (over 65, likely truncated): "${p.title}"`);
  else if (tl < 30) add(p.path, "warn", `title ${tl} chars (under 30): "${p.title}"`);
  if (titles.get(p.title.toLowerCase()) > 1) add(p.path, "error", `duplicate title: "${p.title}"`);
  const dl = (p.desc || "").length;
  if (!dl) add(p.path, "error", "missing meta description");
  else if (dl > 160) add(p.path, "warn", `description ${dl} chars (over 160)`);
  else if (dl < 110) add(p.path, "info", `description ${dl} chars (under 110, room to add detail)`);
  if (dl && descs.get(p.desc.toLowerCase()) > 1) add(p.path, "error", "duplicate meta description");
  const h1 = p.headings.filter((x) => x.l === 1);
  if (h1.length === 0) add(p.path, "error", "no H1");
  if (h1.length > 1) add(p.path, "error", `${h1.length} H1s: ${h1.map((x) => `"${x.t}"`).join(", ")}`);
  if (h1[0] && !h1[0].t) add(p.path, "error", "empty H1");
  if (h1[0] && h1s.get(h1[0].t.toLowerCase()) > 1) add(p.path, "error", `duplicate H1: "${h1[0].t}"`);
  if (h1[0] && h1[0].t.toLowerCase() === p.title.replace(/\s*\|\s*SEODXB.*$/i, "").toLowerCase()) add(p.path, "warn", `H1 duplicates the title: "${h1[0].t}"`);
  if (h1[0] && h1[0].t.length > 120) add(p.path, "info", `H1 ${h1[0].t.length} chars`);
  const h2 = p.headings.filter((x) => x.l === 2);
  if (!h2.length) add(p.path, "warn", "no H2");
  const dupH2 = [...count(h2.map((x) => x.t.toLowerCase()))].filter(([, n]) => n > 1).map(([t]) => t);
  if (dupH2.length) add(p.path, "warn", `repeated H2 on page: ${dupH2.map((t) => `"${t}"`).join(", ")}`);
  if (p.headings.some((x) => !x.t)) add(p.path, "error", "empty heading");
  let prev = 0;
  for (const x of p.headings) { if (prev && x.l > prev + 1) { add(p.path, "warn", `heading skips level: h${prev} -> h${x.l} ("${x.t}")`); break; } prev = x.l; }
  if (p.headings[0] && p.headings[0].l !== 1) add(p.path, "info", `first heading is h${p.headings[0].l} ("${p.headings[0].t}"), before the H1`);
  const want = SITE + (p.path === "/" ? "/" : p.path);
  if (!p.canonical) add(p.path, "error", "missing canonical");
  else if (p.canonical !== want) add(p.path, "error", `canonical ${p.canonical} != ${want}`);
  if (!p.ogTitle || !p.ogDesc || !p.ogImage) add(p.path, "warn", "missing og:title/description/image");
  if (p.noAlt) add(p.path, "error", `${p.noAlt} <img> without alt`);
  if (/\b(leverage|unlock|elevate|seamless|robust|delve|game-changer)\b|—| - /i.test(p.title + " " + p.desc + " " + p.headings.map((x) => x.t).join(" "))) add(p.path, "warn", "style: banned word or dash in title/description/headings");
}

const by = { error: 0, warn: 0, info: 0 };
for (const i of issues) by[i.sev]++;
console.log(`Pages audited: ${pages.length} | errors ${by.error} | warnings ${by.warn} | info ${by.info}`);
for (const sev of ["error", "warn", "info"]) for (const i of issues.filter((x) => x.sev === sev)) console.log(`${sev.toUpperCase().padEnd(5)} ${i.page}  ${i.msg}`);
const j = process.argv.indexOf("--json");
if (j > 0) writeFileSync(process.argv[j + 1], JSON.stringify({ pages, issues }, null, 1));
if (by.error) process.exitCode = 1;
