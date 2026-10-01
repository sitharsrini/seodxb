// Splits post and industry content into small JSON files for the browser bundle.
// The server render uses the full TypeScript data; the browser gets a light index
// and loads only the current page's full content before hydrating.
import { mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { POSTS, readingMinutes } from "../src/blog/posts";
import { INDUSTRIES } from "../src/industries";

const out = path.resolve(import.meta.dirname, "../src/generated");

// Write only when content changed, so dev servers and builds are not retriggered needlessly.
const write = (file: string, data: unknown) => {
  const json = JSON.stringify(data);
  if (existsSync(file) && readFileSync(file, "utf8") === json) return;
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, json);
};

rmSync(path.join(out, "posts"), { recursive: true, force: true });
rmSync(path.join(out, "industries"), { recursive: true, force: true });

write(
  path.join(out, "posts-meta.json"),
  POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
    ...(p.seoTitle ? { seoTitle: p.seoTitle } : {}),
    description: p.description,
    category: p.category,
    date: p.date,
    updated: p.updated,
    keywords: p.keywords,
    minutes: readingMinutes(p),
  })),
);
for (const p of POSTS) write(path.join(out, "posts", `${p.slug}.json`), { ...p, minutes: readingMinutes(p) });

write(
  path.join(out, "industries-meta.json"),
  INDUSTRIES.map((i) => ({
    slug: i.slug,
    name: i.name,
    title: i.title,
    description: i.description,
    heroTitle: i.heroTitle,
    postSlug: i.postSlug,
    ...(i.extraPostSlugs ? { extraPostSlugs: i.extraPostSlugs } : {}),
    ...(i.layout ? { layout: i.layout } : {}),
  })),
);
for (const i of INDUSTRIES) write(path.join(out, "industries", `${i.slug}.json`), i);

console.log(`Client data: ${POSTS.length} posts, ${INDUSTRIES.length} industries`);
