/**
 * Post-build static prerender script.
 *
 * After `vite build`, this script generates a standalone index.html for every
 * route — keyword pages + key static pages — so that:
 *  - AI crawlers (GPTBot, PerplexityBot, ClaudeBot) read content without JS
 *  - Meta tags, H1, intro, FAQs are visible in raw HTML source
 *  - Core Web Vitals improve (correct <title>/<meta> on first byte)
 *
 * Usage (automatically run as part of `npm run build`):
 *   npx tsx scripts/prerender.ts
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import { keywordPages, type KeywordPageConfig } from "../src/data/keywordPages";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST = resolve(__dirname, "../dist/public");
const SITE = "https://seodxb.com";

// ─── helpers ──────────────────────────────────────────────────────────────────

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function serviceSchema(page: KeywordPageConfig): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.keyword,
    provider: {
      "@type": "ProfessionalService",
      name: "SEODXB",
      url: SITE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: page.areaServed ?? "Dubai, UAE",
    url: `${SITE}/${page.slug}`,
    description: page.metaDesc,
  });
}

function faqSchema(page: KeywordPageConfig): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

const LINK_STOPWORDS = new Set([
  "seo", "for", "the", "in", "a", "and", "services", "service",
  "agency", "company", "best", "top", "hire", "marketing", "digital",
]);

function slugTokens(slug: string): string[] {
  return slug.split("-").filter((t) => !LINK_STOPWORDS.has(t));
}

function getRelated(page: KeywordPageConfig, all: KeywordPageConfig[], limit = 6): KeywordPageConfig[] {
  const mine = new Set(slugTokens(page.slug));
  return all
    .filter((p) => p.slug !== page.slug)
    .map((p) => ({
      p,
      score: slugTokens(p.slug).reduce((n, t) => n + (mine.has(t) ? 1 : 0), 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}

function breadcrumbSchema(page: KeywordPageConfig): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "SEO Services", item: `${SITE}/seo-dubai` },
      { "@type": "ListItem", position: 3, name: page.h1, item: `${SITE}/${page.slug}` },
    ],
  });
}

function buildHead(page: KeywordPageConfig, shell: string): string {
  const canonical = `${SITE}/${page.slug}`;
  const injection = [
    // Replace title
    // (handled separately via string replace below)

    // Meta
    `<meta name="description" content="${escape(page.metaDesc)}" />`,
    `<link rel="canonical" href="${canonical}" />`,

    // OG
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escape(page.title)}" />`,
    `<meta property="og:description" content="${escape(page.metaDesc)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${SITE}/opengraph.jpg" />`,

    // Twitter
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(page.title)}" />`,
    `<meta name="twitter:description" content="${escape(page.metaDesc)}" />`,

    // JSON-LD
    `<script type="application/ld+json">${serviceSchema(page)}</script>`,
    `<script type="application/ld+json">${faqSchema(page)}</script>`,
  ].join("\n    ");

  return (
    shell
      // Replace the homepage title with the page-specific title
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${escape(page.title)}</title>`,
      )
      // Replace homepage meta description
      .replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${escape(page.metaDesc)}" />`,
      )
      // Replace canonical
      .replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${canonical}" />`,
      )
      // Replace og:title
      .replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${escape(page.title)}" />`,
      )
      // Replace og:description
      .replace(
        /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${escape(page.metaDesc)}" />`,
      )
      // Replace og:url
      .replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${canonical}" />`,
      )
      // Replace twitter:title
      .replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${escape(page.title)}" />`,
      )
      // Replace twitter:description
      .replace(
        /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${escape(page.metaDesc)}" />`,
      )
      // Inject Service + FAQ JSON-LD before </head>
      .replace(
        "</head>",
        `  <script type="application/ld+json">${serviceSchema(page)}</script>\n  <script type="application/ld+json">${faqSchema(page)}</script>\n  <script type="application/ld+json">${breadcrumbSchema(page)}</script>\n</head>`,
      )
  );
}

function buildBody(page: KeywordPageConfig, html: string, related: KeywordPageConfig[]): string {
  const relatedLinks = related.length
    ? `
    <nav aria-label="Related SEO services">
      <h2>Related SEO Services</h2>
      <ul>
        ${related.map((r) => `<li><a href="${SITE}/${r.slug}">${escape(r.keyword)}</a></li>`).join("\n        ")}
        <li><a href="${SITE}/seo-services-dubai">All SEO services</a></li>
        <li><a href="${SITE}/seo-agency-uae">SEO across the UAE</a></li>
        <li><a href="${SITE}/blog">SEO insights and guides</a></li>
      </ul>
    </nav>`
    : "";
  // Inject a <noscript> block with key content for AI/no-JS crawlers
  const noscript = `
<noscript>
  <article>
    <h1>${escape(page.h1)}</h1>
    <p>${escape(page.intro)}</p>
    <section>
      <h2>${escape(page.featuresTitle ?? "Our Services")}</h2>
      <ul>
        ${page.features.map((f) => `<li><strong>${escape(f.title)}</strong> - ${escape(f.desc)}</li>`).join("\n        ")}
      </ul>
    </section>
    <section>
      <h2>${escape(page.faqTitle ?? "Frequently Asked Questions")}</h2>
      ${page.faqs
        .map(
          (f) => `<details><summary>${escape(f.q)}</summary><p>${escape(f.a)}</p></details>`,
        )
        .join("\n      ")}
    </section>
    <p><a href="${SITE}/contact">${escape(page.ctaButton)}</a></p>
    ${relatedLinks}
  </article>
</noscript>`;

  return html.replace('<div id="root"></div>', `<div id="root"></div>${noscript}`);
}

// ─── main ─────────────────────────────────────────────────────────────────────

function prerender() {
  const shell = readFileSync(join(DIST, "index.html"), "utf-8");
  const pages = Object.values(keywordPages);

  console.log(`\n🔧 Prerendering ${pages.length} keyword pages...\n`);

  let count = 0;
  for (const page of pages) {
    const related = getRelated(page, pages);
    let html = buildHead(page, shell);
    html = buildBody(page, html, related);

    // Flat <slug>.html so Cloudflare Pages serves it at /<slug> with a 200
    // (no trailing-slash 308), matching the canonical tag exactly.
    writeFileSync(join(DIST, `${page.slug}.html`), html, "utf-8");
    console.log(`  ✓ /${page.slug}`);
    count++;
  }

  // Static + blog routes are rendered client-side by the SPA. Once a 404.html
  // exists, Cloudflare Pages stops serving the SPA shell for unmatched paths,
  // so we must emit a 200 shell for every known route or they would 404.
  // (Keyword-page slugs that collide, e.g. seo-abu-dhabi, keep their richer
  // prerendered file - existsSync guards against overwriting them.)
  const STATIC_ROUTES = [
    "about", "blog", "pricing", "contact",
    "on-page-seo", "technical-seo", "aeo", "geo", "local-seo",
    "international-seo", "seo-audit", "seo-packages",
    "seo-dubai", "seo-abu-dhabi", "seo-uae",
    "ecommerce-seo", "real-estate-seo", "b2b-seo",
    "seo-for-restaurants", "seo-for-healthcare", "seo-for-law-firms",
  ];
  const BLOG_SLUGS = [
    "future-of-search-generative-ai-dubai", "core-web-vitals-matter",
    "answer-engines-position-zero", "local-search-dubai",
    "semantic-seo-entities-keywords", "tracking-seo-metrics-revenue",
  ];
  for (const route of STATIC_ROUTES) {
    const file = join(DIST, `${route}.html`);
    if (!existsSync(file)) writeFileSync(file, shell, "utf-8");
  }
  mkdirSync(join(DIST, "blog"), { recursive: true });
  for (const slug of BLOG_SLUGS) {
    writeFileSync(join(DIST, "blog", `${slug}.html`), shell, "utf-8");
  }
  console.log(`  ✓ ${STATIC_ROUTES.length} static + ${BLOG_SLUGS.length} blog shells`);

  // Real 404 page so unknown URLs return a 404 status, not a soft 200.
  const notFound = shell
    .replace(/<title>[^<]*<\/title>/, "<title>Page Not Found | SEODXB</title>")
    .replace(
      /<meta name="robots" content="[^"]*" \/>/,
      `<meta name="robots" content="noindex, follow" />`,
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n<noscript><h1>Page not found</h1><p>The page you requested does not exist. <a href="${SITE}/">Return to the SEODXB homepage</a> or browse our <a href="${SITE}/blog">SEO insights</a>.</p></noscript>`,
    );
  writeFileSync(join(DIST, "404.html"), notFound, "utf-8");
  console.log(`  ✓ /404.html`);

  console.log(`\n✅ Prerendered ${count} pages to dist/public/\n`);
}

prerender();
