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

import { readFileSync, writeFileSync, mkdirSync } from "fs";
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
        `  <script type="application/ld+json">${serviceSchema(page)}</script>\n  <script type="application/ld+json">${faqSchema(page)}</script>\n</head>`,
      )
  );
}

function buildBody(page: KeywordPageConfig, html: string): string {
  // Inject a <noscript> block with key content for AI/no-JS crawlers
  const noscript = `
<noscript>
  <article>
    <h1>${escape(page.h1)}</h1>
    <p>${escape(page.intro)}</p>
    <section>
      <h2>${escape(page.featuresTitle ?? "Our Services")}</h2>
      <ul>
        ${page.features.map((f) => `<li><strong>${escape(f.title)}</strong> — ${escape(f.desc)}</li>`).join("\n        ")}
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
    const dir = join(DIST, page.slug);
    mkdirSync(dir, { recursive: true });

    let html = buildHead(page, shell);
    html = buildBody(page, html);

    writeFileSync(join(dir, "index.html"), html, "utf-8");
    console.log(`  ✓ /${page.slug}`);
    count++;
  }

  console.log(`\n✅ Prerendered ${count} pages to dist/public/\n`);
}

prerender();
