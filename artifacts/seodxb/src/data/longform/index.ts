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
];

const seen = new Set<string>();
export const longFormArticles: LongFormArticle[] = allSpecs
  .filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  })
  .map((spec, i) => {
    const { date, iso, updated } = dateFor(i);
    return { ...spec, date, iso, updated, time: readingTime(spec) };
  });

export const longFormMeta: Record<string, { title: string; desc: string }> = Object.fromEntries(
  longFormArticles.map((a) => [a.slug, { title: `${a.title} | SEODXB Blog`, desc: a.excerpt }]),
);

// Plain-text content for static prerender injection (intro, sections, takeaway,
// FAQs) so non-JS and AI crawlers can read the full article from raw HTML.
export const longFormContent: Record<string, { intro: string[]; sections: ArticleSection[]; takeaway: string; faqs: ArticleFAQ[] }> =
  Object.fromEntries(
    longFormArticles.map((a) => [a.slug, { intro: a.intro, sections: a.sections, takeaway: a.takeaway, faqs: a.faqs }]),
  );
