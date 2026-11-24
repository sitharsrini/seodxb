// Downloads blog hero photos from Unsplash (Unsplash Licence) and writes resized
// AVIF and WebP srcset files under public/photos, plus src/photo-manifest.json.
// Attribution stays on the page. Re-run when a hero id changes:
// npx tsx scripts/host-photos.ts
import { createHash } from "node:crypto";
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { POST_PHOTOS } from "../src/images";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public/photos");
const manifestPath = path.join(root, "src/photo-manifest.json");
const WIDTHS = [480, 800, 1200, 1600];
const RATIO = 16 / 9;
const UA = "Mozilla/5.0 (compatible; SEODXB/1.0; +https://seodxb.com)";

type Entry = { widths: number[]; avif: Record<string, string>; webp: Record<string, string> };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function downloadMaster(id: string): Promise<Buffer> {
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&h=900&q=80`;
  let last = "";
  for (let attempt = 0; attempt < 6; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "image/jpeg" } });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    last = `${res.status}`;
    await sleep(800 * (attempt + 1));
  }
  throw new Error(`${id} failed (${last})`);
}

async function pool<T>(items: T[], n: number, fn: (item: T, i: number) => Promise<void>) {
  let cursor = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (cursor < items.length) {
        const i = cursor++;
        await fn(items[i], i);
      }
    }),
  );
}

const ids = [...new Set(Object.values(POST_PHOTOS).map((p) => p.id))];
mkdirSync(outDir, { recursive: true });
const manifest: Record<string, Entry> = {};
const kept = new Set<string>();
let failed = 0;

await pool(ids, 4, async (id, i) => {
  try {
    const master = await downloadMaster(id);
    const hash = createHash("sha256").update(master).digest("hex").slice(0, 10);
    const entry: Entry = { widths: WIDTHS, avif: {}, webp: {} };
    for (const w of WIDTHS) {
      const h = Math.round(w / RATIO);
      const base = sharp(master).resize(w, h, { fit: "cover" });
      const webp = await base.clone().webp({ quality: 68 }).toBuffer();
      const avif = await base.clone().avif({ quality: 45, effort: 4 }).toBuffer();
      for (const [ext, buf] of [["webp", webp], ["avif", avif]] as const) {
        const file = `${hash}-${w}.${ext}`;
        writeFileSync(path.join(outDir, file), buf);
        kept.add(file);
        entry[ext][String(w)] = `/photos/${file}`;
      }
    }
    manifest[id] = entry;
    console.log(`${i + 1}/${ids.length} ${id}`);
  } catch (err) {
    failed++;
    console.error(`skip ${id}: ${(err as Error).message}`);
  }
});

for (const file of readdirSync(outDir)) {
  if (!kept.has(file)) rmSync(path.join(outDir, file));
}
writeFileSync(manifestPath, JSON.stringify(manifest));
console.log(`Hosted ${Object.keys(manifest).length} heroes, ${failed} failed`);
if (!Object.keys(manifest).length) process.exit(1);
