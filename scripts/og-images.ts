// Generates missing Open Graph images (1200x630 JPEG) in public/og for posts,
// industry pages and service pages. Existing images are left untouched.
// Run: npx tsx scripts/og-images.ts   (needs Playwright with Chromium installed)
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
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

const card = (kicker: string, title: string, footer: string) => `<!doctype html><html><head><meta charset="utf-8"><style>
  body{margin:0;width:1200px;height:630px;font-family:Inter,"Segoe UI",Arial,sans-serif;background:#fff;color:#0a1f44;position:relative;overflow:hidden}
  .grid{position:absolute;inset:0;background-image:linear-gradient(to right,rgba(29,91,255,.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(29,91,255,.08) 1px,transparent 1px);background-size:56px 56px}
  .b1{position:absolute;left:-160px;top:-160px;width:520px;height:520px;border-radius:50%;background:rgba(29,91,255,.22);filter:blur(70px)}
  .b2{position:absolute;right:-120px;bottom:-180px;width:520px;height:520px;border-radius:50%;background:rgba(187,247,208,.95);filter:blur(70px)}
  .wrap{position:absolute;inset:0;padding:64px 72px;display:flex;flex-direction:column;justify-content:space-between}
  .top{display:flex;align-items:center;justify-content:space-between}
  .brand{display:flex;align-items:center;gap:16px;font:700 30px Georgia,"Times New Roman",serif}
  .logo{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#1d5bff,#0b3fc7);color:#fff;font:800 22px Inter,Arial,sans-serif;display:grid;place-items:center;position:relative}
  .logo i{position:absolute;right:-5px;top:-5px;width:14px;height:14px;border-radius:50%;background:#4ade80;border:3px solid #fff}
  .pill{background:#bbf7d0;color:#047857;font-weight:700;font-size:20px;padding:8px 18px;border-radius:999px}
  .kicker{display:flex;align-items:center;gap:12px;color:#1d5bff;font-weight:700;font-size:20px;letter-spacing:.2em;text-transform:uppercase}
  .kicker i{width:10px;height:10px;border-radius:50%;background:#4ade80}
  h1{margin:22px 0 0;font:700 ${title.length > 70 ? 54 : 62}px/1.12 Georgia,"Times New Roman",serif;max-width:1000px}
  .foot{display:flex;justify-content:space-between;color:#475a7a;font-size:22px}
  .bar{position:absolute;left:0;right:0;bottom:0;height:12px;background:linear-gradient(90deg,#1d5bff,#4ade80)}
</style></head><body><div class="grid"></div><div class="b1"></div><div class="b2"></div>
<div class="wrap">
  <div class="top"><div class="brand"><div class="logo">S<i></i></div>SEODXB</div><div class="pill">Powered by Listi</div></div>
  <div><div class="kicker"><i></i>${esc(kicker)}</div><h1>${esc(title)}</h1></div>
  <div class="foot"><span>seodxb.com</span><span>${esc(footer)}</span></div>
</div><div class="bar"></div></body></html>`;

const jobs: { file: string; html: string }[] = [
  ...POSTS.map((p) => ({ file: `${p.slug}.jpg`, html: card("From the SEODXB blog", p.title, p.category) })),
  ...INDUSTRIES.map((i) => ({ file: `industry-${i.slug}.jpg`, html: card(`${i.name} · UAE`, i.heroTitle, `${i.name} marketing`) })),
  ...SERVICE_PAGES.map((s) => ({ file: `service-${s.slug}.jpg`, html: card("SEODXB services", s.title.replace(/ \| SEODXB$/, ""), "Dubai, UAE") })),
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
