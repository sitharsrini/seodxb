// Generates missing Open Graph images (1200x630 JPEG) in public/og for the default card, posts,
// industry pages and service pages. Existing images are left untouched; delete public/og/*.jpg to redo them all.
// Run: npx tsx scripts/og-images.ts   (needs Playwright with Chromium installed)
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { POSTS } from "../src/blog/posts";
import { INDUSTRIES } from "../src/industries";
import { SERVICE_PAGES } from "../src/service-pages";

const require = createRequire(import.meta.url);
const loadPlaywright = () => {
  try {
    return require("playwright");
  } catch {
    return require(path.join(execSync("npm root -g").toString().trim(), "playwright"));
  }
};
const { chromium } = loadPlaywright();

const outDir = path.resolve(import.meta.dirname, "../public/og");
mkdirSync(outDir, { recursive: true });

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Brand assets are embedded so the cards render the same anywhere: Roboto and the 3D objects from public/3d.
const b64 = (file: string) => readFileSync(path.resolve(import.meta.dirname, "..", file)).toString("base64");
const FONT = b64("public/fonts/roboto-latin.woff2");
const SHAPES = ["torus", "knot", "capsules", "planet", "cube", "gem", "rings", "duo"];
const SHAPE_DATA = Object.fromEntries(SHAPES.map((n) => [n, b64(`public/3d/${n}.webp`)]));
const shapeFor = (key: string) => SHAPES[[...key].reduce((a, c) => a + c.charCodeAt(0), 0) % SHAPES.length];

const card = (kicker: string, title: string, footer: string, key: string) => `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face{font-family:Roboto;font-weight:100 900;src:url(data:font/woff2;base64,${FONT}) format('woff2')}
  *{box-sizing:border-box}
  body{margin:0;width:1200px;height:630px;font-family:Roboto,Arial,sans-serif;background:#fff;color:#151515;position:relative;overflow:hidden;
    background-image:radial-gradient(rgba(21,21,21,.11) 2px,transparent 2.6px);background-size:44px 44px;background-position:22px 22px}
  .glow{position:absolute;right:-60px;top:70px;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(29,91,255,.20),transparent 68%)}
  .obj{position:absolute;right:46px;top:112px;width:470px;height:470px;filter:drop-shadow(0 38px 34px rgba(29,91,255,.30))}
  .wrap{position:absolute;inset:0;padding:60px 72px;display:flex;flex-direction:column;justify-content:space-between}
  .brand{font-size:40px;font-weight:700;letter-spacing:-.06em}
  .brand b{color:#1d5bff}
  .kicker{display:inline-block;background:#1d5bff;color:#fff;font-weight:700;font-size:19px;letter-spacing:.07em;text-transform:uppercase;padding:11px 22px;border-radius:999px}
  h1{margin:26px 0 0;font-weight:500;letter-spacing:-.045em;max-width:640px;font-size:${title.length > 90 ? 46 : title.length > 60 ? 54 : 66}px;line-height:1.06}
  .foot{display:flex;gap:18px;align-items:center;color:#5e6068;font-size:22px}
  .foot i{width:6px;height:6px;border-radius:50%;background:#1d5bff;display:inline-block}
  .bar{position:absolute;left:0;right:0;bottom:0;height:12px;background:#1d5bff}
</style></head><body><div class="glow"></div><img class="obj" src="data:image/webp;base64,${SHAPE_DATA[shapeFor(key)]}">
<div class="wrap">
  <div class="brand">SEO<b>DXB</b></div>
  <div><span class="kicker">${esc(kicker)}</span><h1>${esc(title)}</h1></div>
  <div class="foot"><span>seodxb.com</span><i></i><span>${esc(footer)}</span></div>
</div><div class="bar"></div></body></html>`;

const jobs: { file: string; html: string }[] = [
  { file: "default.jpg", html: card("Marketing agency & consultancy", "Marketing planned around revenue, not activity", "Dubai, UAE", "default") },
  ...POSTS.map((p) => ({ file: `${p.slug}.jpg`, html: card("From the SEODXB blog", p.title, p.category, p.slug) })),
  ...INDUSTRIES.map((i) => ({ file: `industry-${i.slug}.jpg`, html: card(`${i.name} · UAE`, i.heroTitle, `${i.name} marketing`, i.slug) })),
  ...SERVICE_PAGES.map((s) => ({ file: `service-${s.slug}.jpg`, html: card("SEODXB services", s.title.replace(/ \| SEODXB$/, ""), "Dubai, UAE", s.slug) })),
].filter((j) => !existsSync(path.join(outDir, j.file)));

if (jobs.length) {
  const browser = await chromium.launch(existsSync("/opt/pw-browsers/chromium-1194/chrome-linux/chrome") ? { executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" } : {});
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const j of jobs) {
    await page.setContent(j.html);
    await page.screenshot({ path: path.join(outDir, j.file), type: "jpeg", quality: 82 });
    console.log("created", j.file);
  }
  await browser.close();
}
console.log(`Open Graph images: ${jobs.length} created`);
