// Quality gate for the long-form worked examples. Run: node_modules/.bin/tsx scripts/check-worked-examples.ts [slug-fragment]
import { readFileSync, readdirSync } from "node:fs";
import { POSTS, wordCount } from "../src/blog/posts";

const only = process.argv[2];
const known = new Set<string>();
for (const f of ["src/images.ts", ...readdirSync("src/blog").filter((x) => x.endsWith(".ts") && !x.startsWith("posts-example-")).map((x) => `src/blog/${x}`)])
  for (const m of readFileSync(f, "utf8").matchAll(/photo-[0-9a-z-]+/g)) known.add(m[0]);
const banned = /\b(leverage|unlock|elevate|seamless|robust|delve|game-changer|cutting-edge|world-class|guarantee[sd]?)\b|—| - /i;
let bad = 0;
const posts = POSTS.filter((p) => p.category === "Worked Examples");
for (const p of posts) {
  if (only && !p.slug.includes(only)) continue;
  const errs: string[] = [];
  const e = (c: boolean, m: string) => { if (!c) errs.push(m); };
  const wc = wordCount(p);
  e(wc >= 4800 && wc <= 6200, `word count ${wc} (need 4800-6200)`);
  e(p.slug.startsWith("worked-example-"), "slug must start with worked-example-");
  e(/^Worked Example: /.test(p.title), 'title must start with "Worked Example: "');
  e(!!p.seoTitle && p.seoTitle.length <= 51 && p.seoTitle.includes("Worked Example"), "seoTitle required, max 51 chars, contains Worked Example");
  e(p.description.length >= 120 && p.description.length <= 158, `description ${p.description.length} chars (120-158)`);
  e(/illustrative/i.test(p.description), "description must say illustrative");
  e(/illustrative/i.test(p.answer) && /not (a |an )?(real )?client/i.test(p.answer), "answer must say it is illustrative and not a client result");
  const first = p.body[0];
  e(first?.t === "callout" && /illustrative/i.test(first.text) && /not (a |an )?(real )?client/i.test(first.text), "first block must be a callout stating the scenario is illustrative, not a client result");
  const h2 = p.body.filter((b) => b.t === "h2") as { text: string; id: string }[];
  e(h2.length >= 9, `h2 count ${h2.length} (need 9+)`);
  e(new Set(h2.map((h) => h.id)).size === h2.length && new Set(h2.map((h) => h.text.toLowerCase())).size === h2.length, "h2 ids and texts must be unique");
  e(!h2.some((h) => /^(frequently asked questions|short answer|key takeaways|sources and further reading|keep reading)$/i.test(h.text)), "h2 must not reuse template headings");
  const imgs = p.body.filter((b) => b.t === "img") as { photo: { id: string; alt: string }; caption?: string }[];
  e(imgs.length >= 4 && imgs.length <= 6, `img count ${imgs.length} (need 4-6)`);
  e(imgs.every((i) => known.has(i.photo.id)), "img ids must be copied from photos already in the repo: " + imgs.filter((i) => !known.has(i.photo.id)).map((i) => i.photo.id).join(","));
  e(new Set(imgs.map((i) => i.photo.id)).size === imgs.length, "img ids must be unique in the post");
  e(imgs.every((i) => i.photo.alt.length > 20 && !!i.caption), "each img needs alt and caption");
  e(p.faqs.length >= 5 && p.faqs.length <= 6 && p.faqs.every((f) => f.q.endsWith("?")), "5-6 faqs ending with ?");
  e(p.takeaways.length >= 4 && p.takeaways.length <= 6, "4-6 takeaways");
  e(p.keywords.length >= 4, "4+ keywords");
  e(p.body.filter((b) => b.t === "callout").length >= 3, "3+ callouts");
  const all = JSON.stringify(p);
  e(!banned.test(all), "banned word, em dash or spaced hyphen: " + (all.match(banned) || [""])[0]);
  e(!/testimonial|"[^"]{0,40}said the (owner|founder|ceo|manager)/i.test(all), "no invented testimonials or quotes");
  e((all.match(/\/services\/[a-z-]+/g) || []).length >= 3, "3+ internal links to /services/... pages");
  console.log(`${errs.length ? "FAIL" : "ok  "} ${p.slug} (${wc} words)${errs.length ? "\n   - " + errs.join("\n   - ") : ""}`);
  bad += errs.length;
}
console.log(`${posts.length} worked examples, ${bad} problems`);
process.exit(bad ? 1 : 0);
