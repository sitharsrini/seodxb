// Local preview of the built site through the real Cloudflare worker (dist/public/_worker.js).
// Supabase, Resend and ntfy calls are mocked and logged, so forms can be tested safely.
// Run after `npm run build`: node scripts/serve-local.mjs  ->  http://localhost:4173
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "../dist/public");
const { default: worker } = await import(pathToFileURL(path.join(root, "_worker.js")).href);
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".xml": "application/xml", ".txt": "text/plain", ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/x-icon", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".json": "application/json" };

const ASSETS = {
  fetch: async (req) => {
    let p = decodeURIComponent(new URL(req.url).pathname);
    if (p === "/") p = "/index.html";
    for (const c of [p, p + ".html"]) {
      const f = path.join(root, c);
      if (f.startsWith(root) && fs.existsSync(f) && fs.statSync(f).isFile())
        return new Response(fs.readFileSync(f), { headers: { "content-type": types[path.extname(f)] || "application/octet-stream" } });
    }
    return new Response("not found", { status: 404 });
  },
};

const realFetch = globalThis.fetch;
globalThis.fetch = (u, o) => {
  const s = String(u);
  if (s.includes("rpc/get_seodxb_leads"))
    return Promise.resolve(new Response(JSON.stringify([{ id: 1, name: "Test Lead", email: "lead@example.com", phone: "+971 50 000 0000", company_url: "example.ae", message: "[SEO, AEO & GEO] Test message", source: "contact-page", channel: "Organic search (google.com)", page_url: "https://seodxb.com/contact", created_at: new Date().toISOString() }]), { status: 200 }));
  if (s.includes("supabase.co")) { console.log("SUPABASE", o?.body); return Promise.resolve(new Response(null, { status: 201 })); }
  if (s.includes("api.resend.com")) { console.log("RESEND", o?.body); return Promise.resolve(new Response("{}", { status: 200 })); }
  if (s.includes("ntfy.sh")) { console.log("NTFY", o?.body); return Promise.resolve(new Response("ok")); }
  return realFetch(u, o);
};

http
  .createServer(async (req, res) => {
    const body = await new Promise((r) => { let d = ""; req.on("data", (c) => (d += c)); req.on("end", () => r(d)); });
    const r = await worker.fetch(
      new Request("http://localhost:4173" + req.url, { method: req.method, headers: req.headers, body: ["GET", "HEAD"].includes(req.method) ? undefined : body }),
      { ASSETS },
      { waitUntil(p) { p?.catch?.(() => {}); } },
    );
    res.writeHead(r.status, Object.fromEntries(r.headers));
    res.end(Buffer.from(await r.arrayBuffer()));
  })
  .listen(4173, () => console.log("Local preview on http://localhost:4173"));
