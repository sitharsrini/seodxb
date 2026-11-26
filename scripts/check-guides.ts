// Quality gate for the buyer guides added in November 2026. Run: node_modules/.bin/tsx scripts/check-guides.ts [slug-fragment]
import { readFileSync, readdirSync } from "node:fs";
import { POSTS, wordCount } from "../src/blog/posts";
import { POST_SOURCES } from "../src/sources";

const GUIDES: Record<string, "cost" | "rules"> = {
  "seo-cost-dubai": "cost",
  "website-cost-dubai": "cost",
  "google-ads-cost-dubai": "cost",
  "dha-mohap-healthcare-advertising-rules-clinics": "rules",
  "uae-advertiser-permit-influencer-marketing-businesses": "rules",
};
const only = process.argv[2];
const known = new Set<string>();
for (const f of ["src/images.ts", ...readdirSync("src/blog").filter((x) => x.endsWith(".ts") && !x.startsWith("posts-guide-")).map((x) => `src/blog/${x}`)])
  for (const m of readFileSync(f, "utf8").matchAll(/photo-[0-9a-z-]+/g)) known.add(m[0]);
const banned = /\b(leverage|unlock|elevate|seamless|robust|delve|game-changer|cutting-edge|world-class|guarantee[sd]?)\b|—| - /i;
let bad = 0, seen = 0;
for (const [slug, kind] of Object.entries(GUIDES)) {
  if (only && !slug.includes(only)) continue;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) { console.log(`MISSING ${slug}`); bad++; continue; }
  seen++;
  const errs: string[] = [];
  const e = (c: boolean, m: string) => { if (!c) errs.push(m); };
  const wc = wordCount(p);
  e(wc >= 1500 && wc <= 2500, `word count ${wc} (need 1500-2500)`);
  e(!!p.seoTitle && p.seoTitle.length <= 58 && p.seoTitle !== p.title, "seoTitle required, max 58 chars, different from title");
  e(p.title.length <= 95, "title max 95 chars");
  e(p.description.length >= 120 && p.description.length <= 158, `description ${p.description.length} chars (120-158)`);
  e(p.date === "2026-11-26" && p.updated === "2026-11-26", "date and updated must be 2026-11-26");
  e(p.answer.split(/\s+/).length >= 45 && p.answer.split(/\s+/).length <= 95, "answer 45-95 words");
  const h2 = p.body.filter((b) => b.t === "h2") as { text: string; id: string }[];
  e(h2.length >= 6, `h2 count ${h2.length} (need 6+)`);
  e(new Set(h2.map((h) => h.id)).size === h2.length && new Set(h2.map((h) => h.text.toLowerCase())).size === h2.length, "h2 ids and texts must be unique");
  e(!h2.some((h) => /^(frequently asked questions|short answer|key takeaways|sources and further reading|keep reading)$/i.test(h.text)), "h2 must not reuse template headings");
  e(p.body[0]?.t === "p", "first block must be a paragraph");
  const imgs = p.body.filter((b) => b.t === "img") as { photo: { id: string; alt: string }; caption?: string }[];
  e(imgs.length >= 2 && imgs.length <= 3, `img count ${imgs.length} (need 2-3)`);
  e(imgs.every((i) => known.has(i.photo.id)), "img ids must be copied from photos already in the repo: " + imgs.filter((i) => !known.has(i.photo.id)).map((i) => i.photo.id).join(","));
  e(new Set(imgs.map((i) => i.photo.id)).size === imgs.length && imgs.every((i) => i.photo.alt.length > 20 && !!i.caption), "img ids unique, each with alt and caption");
  e(p.faqs.length === 5 && p.faqs.every((f) => f.q.endsWith("?")), "exactly 5 faqs ending with ?");
  e(p.takeaways.length >= 4 && p.takeaways.length <= 5, "4-5 takeaways");
  e(p.keywords.length >= 4 && p.keywords[0] === p.keywords[0].toLowerCase(), "4+ keywords, first one lower case");
  e(p.body.filter((b) => b.t === "callout").length >= 2, "2+ callouts");
  const all = JSON.stringify(p);
  e(!banned.test(all), "banned word, em dash or spaced hyphen: " + (all.match(banned) || [""])[0]);
  e((all.match(/\]\(\/(services|industries|blog)\/[a-z0-9-]+\)/g) || []).length >= 3, "3+ internal links to /services/, /industries/ or /blog/ pages");
  e(/\]\(\/contact\)/.test(all), "one link to /contact");
  const src = POST_SOURCES[slug] ?? [];
  e(src.length >= 3 && src.length <= 7 && src.every((s) => /^https:\/\//.test(s.url) && s.name.length > 8), `sources: 3-7 entries with https urls (have ${src.length})`);
  if (kind === "cost") {
    e(/\bAED\b/.test(all), "cost guides must give ranges in AED");
    e(/published|estimate/i.test(all) && /not (an? )?(SEODXB|our) (price|quote|rate)/i.test(all), 'cost guides must say figures are published estimates and "not SEODXB prices" (or similar)');
  } else {
    e(src.filter((s) => /\.gov\.ae|\bu\.ae\b|uaelegislation|mediaoffice|wam\.ae/.test(s.url)).length >= 2, "rules guides need 2+ official UAE government sources");
    e(/not legal advice/i.test(all) && /confirm/i.test(all), 'rules guides must say "not legal advice" and tell readers to confirm with the authority');
  }
  console.log(`${errs.length ? "FAIL" : "ok  "} ${slug} (${wc} words, ${src.length} sources)${errs.length ? "\n   - " + errs.join("\n   - ") : ""}`);
  bad += errs.length;
}
console.log(`${seen} guides checked, ${bad} problems`);
process.exit(bad ? 1 : 0);
