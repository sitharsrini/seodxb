// ============================================================================
// Assembles every long-form article batch into one deduplicated set, assigns
// publish dates and reading time, and exposes meta + plain-text content maps
// used by the prerender script for AI-crawler-visible static HTML.
// ============================================================================

import type { LongFormSpec, LongFormArticle, ArticleSection, ArticleFAQ } from "./types";
import { batch01 } from "./batch01";
import { batch02 } from "./batch02";
import { batch03 } from "./batch03";
import { batch04 } from "./batch04";
import { batch05 } from "./batch05";
import { batch06 } from "./batch06";
import { batch07 } from "./batch07";
import { batch08 } from "./batch08";
import { batch09 } from "./batch09";
import { batch10 } from "./batch10";
import { batch11 } from "./batch11";
import { batch12 } from "./batch12";
import { batch13 } from "./batch13";
import { batch14 } from "./batch14";
import { batch15 } from "./batch15";
import { batch16 } from "./batch16";
import { batch17 } from "./batch17";
import { batch18 } from "./batch18";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Anchor after the hand-written June posts; step back ~1 day per article so the
// feed looks built over time. 150 articles spans roughly five months back.
function dateFor(index: number): { date: string; iso: string; updated: string } {
  const anchor = new Date("2026-06-03T00:00:00Z");
  const d = new Date(anchor.getTime() - index * 24 * 60 * 60 * 1000);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();
  const day = d.getUTCDate();
  const iso = `${y}-${String(m + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const date = `${MONTHS[m]} ${day}, ${y}`;
  const upd = new Date(Math.min(anchor.getTime(), d.getTime() + 35 * 24 * 60 * 60 * 1000));
  const updated = `${upd.getUTCFullYear()}-${String(upd.getUTCMonth() + 1).padStart(2, "0")}-${String(upd.getUTCDate()).padStart(2, "0")}`;
  return { date, iso, updated };
}

function readingTime(spec: LongFormSpec): string {
  let words = spec.intro.join(" ").split(/\s+/).length;
  words += spec.takeaway.split(/\s+/).length;
  words += spec.keyStats.join(" ").split(/\s+/).length;
  for (const s of spec.sections) {
    words += s.h.split(/\s+/).length;
    words += s.p.join(" ").split(/\s+/).length;
    if (s.list) words += s.list.join(" ").split(/\s+/).length;
  }
  for (const f of spec.faqs) words += (f.q + " " + f.a).split(/\s+/).length;
  return `${Math.max(6, Math.round(words / 200))} min read`;
}

const allSpecs: LongFormSpec[] = [
  ...batch01, ...batch02, ...batch03, ...batch04, ...batch05,
  ...batch06, ...batch07, ...batch08, ...batch09, ...batch10,
  ...batch11, ...batch12, ...batch13, ...batch14, ...batch15, ...batch16,
  ...batch17, ...batch18,
];

// Explicit publish dates for posts uploaded on a known day, so adding them
// never shifts the synthetic dates already assigned to earlier articles.
const DATE_OVERRIDES: Record<string, { date: string; iso: string; updated: string }> = {
  "aeo-vs-seo-vs-geo-differences-explained": { date: "Jun 12, 2026", iso: "2026-06-12", updated: "2026-06-12" },
  "audit-brand-ai-visibility-20-minutes": { date: "Jun 12, 2026", iso: "2026-06-12", updated: "2026-06-12" },
  "best-accounting-valuation-difc-firms-dubai": { date: "Jul 15, 2026", iso: "2026-07-15", updated: "2026-07-15" },
  "best-accounting-firm-dubai": { date: "Jul 16, 2026", iso: "2026-07-16", updated: "2026-07-16" },
  "best-business-valuation-company-dubai": { date: "Jul 17, 2026", iso: "2026-07-17", updated: "2026-07-17" },
  "best-difc-business-setup-company-dubai": { date: "Jul 18, 2026", iso: "2026-07-18", updated: "2026-07-18" },
  "ai-search-automotive-companies-kuwait": { date: "Aug 1, 2026", iso: "2026-08-01", updated: "2026-08-01" },
  "healthcare-seo-ai-search-kuwait": { date: "Aug 2, 2026", iso: "2026-08-02", updated: "2026-08-02" },
  "ai-tech-companies-seo-kuwait": { date: "Aug 3, 2026", iso: "2026-08-03", updated: "2026-08-03" },
  "seo-in-kuwait-complete-guide-2026": { date: "Aug 4, 2026", iso: "2026-08-04", updated: "2026-08-04" },
  "seo-for-real-estate-kuwait": { date: "Aug 5, 2026", iso: "2026-08-05", updated: "2026-08-05" },
  "seo-for-finance-banking-kuwait": { date: "Aug 6, 2026", iso: "2026-08-06", updated: "2026-08-06" },
  "ai-search-optimization-saudi-arabia-2026": { date: "Aug 7, 2026", iso: "2026-08-07", updated: "2026-08-07" },
  "seo-in-riyadh-complete-guide": { date: "Aug 8, 2026", iso: "2026-08-08", updated: "2026-08-08" },
  "arabic-seo-saudi-arabia-guide": { date: "Aug 9, 2026", iso: "2026-08-09", updated: "2026-08-09" },
  "uae-map-pack-local-ranking-factors": { date: "Aug 4, 2026", iso: "2026-08-04", updated: "2026-08-04" },
  "difc-finance-firms-seo-compliance": { date: "Aug 5, 2026", iso: "2026-08-05", updated: "2026-08-05" },
  "saudi-arabic-english-seo-hreflang": { date: "Aug 6, 2026", iso: "2026-08-06", updated: "2026-08-06" },
  "doha-b2b-lead-sources": { date: "Aug 7, 2026", iso: "2026-08-07", updated: "2026-08-07" },
  "kuwait-website-speed-core-web-vitals": { date: "Aug 8, 2026", iso: "2026-08-08", updated: "2026-08-08" },
  "seo-in-qatar-complete-guide-2026": { date: "Aug 10, 2026", iso: "2026-08-10", updated: "2026-08-10" },
  "seo-for-real-estate-qatar": { date: "Aug 11, 2026", iso: "2026-08-11", updated: "2026-08-11" },
  "ai-search-optimization-uk-businesses-2026": { date: "Aug 12, 2026", iso: "2026-08-12", updated: "2026-08-12" },
  "seo-in-dublin-complete-guide-2026": { date: "Aug 13, 2026", iso: "2026-08-13", updated: "2026-08-13" },
  "google-ai-overviews-uae-businesses-2026": { date: "Aug 14, 2026", iso: "2026-08-14", updated: "2026-08-14" },
  "seo-in-london-complete-guide-2026": { date: "Aug 5, 2026", iso: "2026-08-05", updated: "2026-08-05" },
  "ai-search-optimization-ireland-2026": { date: "Aug 5, 2026", iso: "2026-08-05", updated: "2026-08-05" },
  "google-ai-mode-business-guide-2026": { date: "Aug 5, 2026", iso: "2026-08-05", updated: "2026-08-05" },
  "why-not-showing-google-maps-fixes": { date: "Aug 5, 2026", iso: "2026-08-05", updated: "2026-08-05" },
  "local-seo-vs-national-seo-guide": { date: "Aug 5, 2026", iso: "2026-08-05", updated: "2026-08-05" },
};

const seen = new Set<string>();
export const longFormArticles: LongFormArticle[] = allSpecs
  .filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  })
  .map((spec, i) => {
    const { date, iso, updated } = DATE_OVERRIDES[spec.slug] ?? dateFor(i);
    return { ...spec, date, iso, updated, time: readingTime(spec) };
  });

export const longFormMeta: Record<string, { title: string; desc: string }> = Object.fromEntries(
  longFormArticles.map((a) => [a.slug, { title: `${a.title} | SEODXB Blog`, desc: a.excerpt }]),
);

// Plain-text content for static prerender injection (intro, sections, takeaway,
// FAQs) so non-JS and AI crawlers can read the full article from raw HTML.
export const longFormContent: Record<string, { intro: string[]; sections: ArticleSection[]; takeaway: string; faqs: ArticleFAQ[]; partners?: { name: string; url: string; role: string; blurb: string }[]; related?: { label: string; href: string }[] }> =
  Object.fromEntries(
    longFormArticles.map((a) => [a.slug, { intro: a.intro, sections: a.sections, takeaway: a.takeaway, faqs: a.faqs, partners: a.partners ?? [], related: a.related ?? [] }]),
  );

// Schema data for static JSON-LD injection (Article, FAQPage, Breadcrumb) so the
// structured data lives in raw HTML, not only in React-rendered Helmet tags.
export const longFormSchemaData: Record<string, { title: string; excerpt: string; iso: string; updated: string; heroImage: string; faqs: ArticleFAQ[] }> =
  Object.fromEntries(
    longFormArticles.map((a) => [a.slug, { title: a.title, excerpt: a.excerpt, iso: a.iso, updated: a.updated, heroImage: a.heroImage, faqs: a.faqs }]),
  );
