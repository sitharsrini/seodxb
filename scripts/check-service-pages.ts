// Quality gate for the service pages. Run: node_modules/.bin/tsx scripts/check-service-pages.ts [file-fragment]
import { SERVICE_PAGES } from "../src/service-pages";
import { INDUSTRIES } from "../src/industries";
import { POSTS } from "../src/blog/posts";

const only = process.argv[2];
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const industrySlugs = new Set(INDUSTRIES.map((i) => i.slug));
const postSlugs = new Set(POSTS.map((p) => p.slug));
const pillars = new Set(["strategy", "search", "ads", "web-content-social"]);
const banned = /\b(leverage|unlock|elevate|seamless|robust|delve|game-changer|cutting-edge|world-class|best-in-class|guarantee[sd]?)\b|—| - /i;
let bad = 0;
const seenSlug = new Set<string>();
const seenId = new Set<string>();
const seenTitle = new Set<string>();
for (const p of SERVICE_PAGES) {
  const errs: string[] = [];
  const e = (c: boolean, m: string) => { if (!c) errs.push(m); };
  e(!seenSlug.has(p.slug), "duplicate slug"); seenSlug.add(p.slug);
  e(!seenId.has(p.id), "duplicate id"); seenId.add(p.id);
  e(!seenTitle.has(p.title), "duplicate title"); seenTitle.add(p.title);
  e(/^[a-z0-9-]+$/.test(p.slug), "slug must be lower-case hyphenated");
  if (p.parent) {
    e(pillars.has(p.parent), `parent must be one of ${[...pillars].join(", ")}`);
    e(!!p.name && p.name.length >= 8 && p.name.length <= 48, "name required, 8-48 chars");
    e(p.title.endsWith(" | SEODXB"), "title must end with ' | SEODXB'");
    e(p.title.length <= 62, `title ${p.title.length} chars (max 62 with brand)`);
    e(!p.title.includes(":"), "no colon in title (it feeds the H1)");
    e(p.description.length >= 115 && p.description.length <= 160, `description ${p.description.length} chars (115-160)`);
    e(words(p.heroTitle) >= 5 && words(p.heroTitle) <= 14, "heroTitle 5-14 words");
    e(words(p.heroIntro) >= 28 && words(p.heroIntro) <= 70, `heroIntro ${words(p.heroIntro)} words (28-70)`);
    e(words(p.answer) >= 50 && words(p.answer) <= 100, `answer ${words(p.answer)} words (50-100)`);
    e(p.signs.length === 4 && p.signs.every((x) => words(x) >= 8), "signs: exactly 4, each 8+ words");
    e(p.deliverables.length === 6 && p.deliverables.every((d) => words(d.title) >= 2 && words(d.body) >= 14), "deliverables: exactly 6, body 14+ words");
    e(p.process.length >= 4 && p.process.length <= 5 && p.process.every((d) => words(d.body) >= 14), "process: 4-5 steps, body 14+ words");
    e(p.first90.length === 3 && p.first90.every((d) => words(d.body) >= 12), "first90: exactly 3, body 12+ words");
    e(p.faqs.length === 5 && p.faqs.every((f) => f.q.endsWith("?") && words(f.a) >= 32 && words(f.a) <= 95), "faqs: exactly 5, question ends with ?, answer 32-95 words");
    e(p.industries.length >= 3 && p.industries.length <= 4 && p.industries.every((s) => industrySlugs.has(s)), "industries: 3-4 valid slugs " + p.industries.filter((s) => !industrySlugs.has(s)).join(","));
    e(p.posts.length >= 2 && p.posts.length <= 3 && p.posts.every((s) => postSlugs.has(s)), "posts: 2-3 valid slugs " + p.posts.filter((s) => !postSlugs.has(s)).join(","));
    const all = [p.heroIntro, p.answer, ...p.signs, ...p.deliverables.flatMap((d) => [d.title, d.body]), ...p.process.flatMap((d) => [d.title, d.body]), ...p.first90.map((d) => d.body), ...p.faqs.flatMap((f) => [f.q, f.a])].join(" ");
    e(words(all) >= 700, `total body ${words(all)} words (min 700)`);
    e(!banned.test(`${p.title} ${p.description} ${p.heroTitle} ${all}`), "banned word, em dash or spaced hyphen: " + (`${p.title} ${p.description} ${p.heroTitle} ${all}`.match(banned) || [""])[0]);
  }
  if (only && !(p.parent && (p.slug.includes(only) || (p.parent === only)))) continue;
  if (p.parent || !only) console.log(`${errs.length ? "FAIL" : "ok  "} ${p.parent ? "  " : ""}${p.slug}${errs.length ? "\n       - " + errs.join("\n       - ") : ""}`);
  bad += errs.length;
}
console.log(`\n${SERVICE_PAGES.length} pages, ${SERVICE_PAGES.filter((p) => p.parent).length} sub-service pages, ${bad} problems`);
process.exit(bad ? 1 : 0);
