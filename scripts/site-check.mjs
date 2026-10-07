// End-to-end check of the built site in a real browser (run scripts/serve-local.mjs first).
// Every sitemap page: hydrates, no console errors, same H1 as the prerendered HTML,
// no horizontal overflow on mobile. Also: internal links resolve and an enquiry form submits.
// Run: node scripts/site-check.mjs [path-filter]
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
let pw;
try { pw = require("playwright"); } catch { pw = require(path.join(execSync("npm root -g").toString().trim(), "playwright")); }
const BASE = "http://localhost:4173";
const dist = path.resolve(import.meta.dirname, "../dist/public");
const filter = process.argv[2] || "";
const urls = ["pages", "industries", "blog"]
  .flatMap((n) => [...readFileSync(path.join(dist, "sitemaps", `${n}.xml`), "utf8").matchAll(/<loc>https:\/\/seodxb\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/"))
  .filter((u) => u.includes(filter));

const exe = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const browser = await pw.chromium.launch(existsSync(exe) ? { executablePath: exe } : {});
const problems = [];
const links = new Set();
for (const [name, viewport] of [["desktop", { width: 1366, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const ctx = await browser.newContext({ viewport });
  // Stock photos come from Unsplash's CDN; stub them so tests do not depend on the network.
  await ctx.route("https://images.unsplash.com/**", (r) => r.fulfill({ status: 200, contentType: "image/svg+xml", body: "<svg xmlns='http://www.w3.org/2000/svg'/>" }));
  const page = await ctx.newPage();
  let errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(e.message));
  for (const u of urls) {
    errors = [];
    const html = await (await ctx.request.get(BASE + u)).text();
    const ssrH1 = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').trim();
    await page.goto(BASE + u, { waitUntil: "networkidle" });
    const r = await page.evaluate(() => ({
      hydrated: window.__hydrated === true,
      h1: document.querySelector("h1")?.textContent?.trim() ?? "",
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      hrefs: [...document.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href")),
    }));
    r.hrefs.forEach((h) => links.add(h.split("#")[0].split("?")[0]));
    const p = [];
    if (!r.hydrated) p.push("not hydrated");
    if (r.h1 !== ssrH1) p.push(`H1 changed after hydration`);
    if (r.overflow) p.push("horizontal overflow");
    if (errors.length) p.push("console: " + errors.slice(0, 2).join(" | ").slice(0, 200));
    if (p.length) problems.push(`[${name}] ${u}: ${p.join("; ")}`);
  }
  await ctx.close();
}

let badLinks = 0;
for (const l of links) {
  const s = (await fetch(BASE + l, { redirect: "manual" })).status;
  if (s !== 200) { badLinks++; problems.push(`link ${l} -> ${s}`); }
}

// Submit one enquiry form on an industry page.
const formPage = urls.find((u) => u.startsWith("/industries/")) || "/contact";
const ctx = await browser.newContext();
await ctx.route("https://images.unsplash.com/**", (r) => r.fulfill({ status: 200, contentType: "image/svg+xml", body: "<svg xmlns='http://www.w3.org/2000/svg'/>" }));
const page = await ctx.newPage();
await page.goto(BASE + formPage, { waitUntil: "networkidle" });
const scope = (await page.locator("#enquire").count()) ? "#enquire " : "";
await page.fill(`${scope}input[name=name]`, "Site Check");
await page.fill(`${scope}input[name=email]`, "check@example.com");
await page.fill(`${scope}textarea[name=message]`, "Automated site check.");
await page.click(`${scope}button[type=submit]`);
await page.waitForTimeout(2000);
const sent = (await page.locator("[role=status]").count()) > 0;
if (!sent) problems.push(`form on ${formPage} did not submit`);
await browser.close();

console.log(`Pages: ${urls.length} x 2 viewports | internal links: ${links.size} (${badLinks} bad) | form: ${sent ? "sent" : "FAILED"}`);
console.log(problems.length ? `Problems (${problems.length}):\n` + problems.slice(0, 30).join("\n") : "No problems found.");
process.exit(problems.length ? 1 : 0);
