// Renders the glossy 3D objects used on the site (public/3d/*.webp) with three.js in headless Chromium.
// Needs Playwright installed globally and three.js (not a site dependency): npm i --no-save three
// Run: node scripts/render-3d.mjs
import { spawn, execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require(path.join(execSync("npm root -g").toString().trim(), "playwright"));
const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "public/3d");
mkdirSync(out, { recursive: true });

const PORT = 4488;
const server = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1", "--directory", root], { stdio: "ignore" });
await new Promise((r) => setTimeout(r, 1200));

try {
  const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
  const page = await browser.newPage({ viewport: { width: 760, height: 760 } });
  page.on("pageerror", (e) => console.log("page error:", e.message));
  await page.goto(`http://127.0.0.1:${PORT}/scripts/render-3d.html`);
  await page.waitForFunction(() => window.ready === true, null, { timeout: 60000 });
  const names = await page.evaluate(() => window.shapeNames);
  for (const name of names) {
    const dataUrl = await page.evaluate((n) => window.renderShape(n), name);
    const buf = Buffer.from(dataUrl.split(",")[1], "base64");
    writeFileSync(path.join(out, `${name}.webp`), buf);
    console.log(name.padEnd(9), `${(buf.length / 1024).toFixed(1)} KB`);
  }
  await browser.close();
} finally {
  server.kill();
}
