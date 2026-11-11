// Serves dist/public with clean URLs (/services -> services.html), like production. Run: node scripts/preview.mjs [port]
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../dist/public");
const port = Number(process.argv[2]) || 4180;
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain" };
const pick = (p) => [p, p + ".html", path.join(p, "index.html")].find((f) => f.startsWith(root) && existsSync(f) && statSync(f).isFile());

createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  const file = pick(path.join(root, url === "/" ? "index.html" : url.replace(/\/$/, "")));
  if (!file) {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    return res.end(existsSync(path.join(root, "404.html")) ? readFileSync(path.join(root, "404.html")) : "Not found");
  }
  res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
  res.end(readFileSync(file));
}).listen(port, "0.0.0.0", () => console.log(`Preview on http://localhost:${port}`));
