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
import { keywordPages, clampMetaDesc, type KeywordPageConfig } from "../src/data/keywordPages";
import { generatedBlogMeta } from "../src/data/blogPosts";

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

// ─── static + blog page metadata ────────────────────────────────────────────
// Title/description for non-keyword routes, mirroring each component's <Helmet>
// so the prerendered HTML carries correct meta + a self-referencing canonical.

const STATIC_META: Record<string, { title: string; desc: string }> = {
  "about": { title: "About SEODXB - Dubai SEO Agency | On-Page SEO & AI Search Specialists", desc: "Meet SEODXB, a Dubai SEO agency specialising in On-Page SEO, Answer Engine Optimisation, and Generative Engine Optimisation." },
  "blog": { title: "SEO Blog Dubai - Insights on SEO, AEO & AI Search | SEODXB", desc: "Expert SEO insights for Dubai businesses: On-Page SEO, AEO, GEO, Core Web Vitals, and local search strategies that rank." },
  "pricing": { title: "SEO Pricing Dubai - Transparent Plans for On-Page SEO & AEO | SEODXB", desc: "Transparent SEO pricing for Dubai businesses. No contracts, no hidden fees. Starter, Growth, and Authority plans available." },
  "contact": { title: "Contact SEODXB - Get a Free SEO Consultation | Dubai SEO Agency", desc: "Contact SEODXB, Dubai's leading SEO agency. Book a free consultation on strategy, pricing, and growing your organic traffic." },
  "on-page-seo": { title: "On-Page SEO Services - Keyword Optimisation & Content Strategy | SEODXB", desc: "On-Page SEO services: keyword research, content optimisation, meta tags, schema markup, and internal linking that ranks." },
  "technical-seo": { title: "Technical SEO Services - Site Audits, Core Web Vitals & Schema | SEODXB", desc: "Technical SEO services: site audits, Core Web Vitals, crawlability fixes, schema markup, and mobile usability for any site." },
  "aeo": { title: "Answer Engine Optimisation (AEO) - Position Zero & Featured Snippets | SEODXB", desc: "AEO services to win featured snippets, People Also Ask boxes, and voice search. Rank at Position Zero for buyer questions." },
  "geo": { title: "Generative Engine Optimisation (GEO) - Get Cited by ChatGPT, Gemini & Perplexity | SEODXB", desc: "GEO services to get your brand cited by ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini in AI search results." },
  "local-seo": { title: "Local SEO Services Dubai - Google Business Profile & Map Pack Ranking | SEODXB", desc: "Local SEO in Dubai and across the UAE: Google Business Profile, Map Pack rankings, citations, and review management." },
  "international-seo": { title: "International SEO Services - Global Organic Traffic for Businesses Worldwide | SEODXB", desc: "International SEO: hreflang, multi-country strategy, global keyword research, and localised content for worldwide reach." },
  "seo-audit": { title: "Free SEO Audit Dubai - Website SEO Audit UAE | SEODXB", desc: "Free, comprehensive SEO audit for your Dubai website: technical health, keyword gaps, and a prioritised 48-hour action plan." },
  "seo-packages": { title: "SEO Packages Dubai - SEO Pricing & Monthly Plans UAE | SEODXB", desc: "Transparent SEO packages for Dubai businesses. Startup from $999/mo, Business from $2,499/mo. No lock-in contracts." },
  "seo-dubai": { title: "SEO Agency Dubai - #1 Rated SEO Company in Dubai, UAE | SEODXB", desc: "Dubai's results-driven SEO agency. Rank on Google page one with on-page, technical, local SEO, and link building." },
  "seo-abu-dhabi": { title: "SEO Agency Abu Dhabi - SEO Company & Services in Abu Dhabi UAE | SEODXB", desc: "Expert SEO services in Abu Dhabi: local SEO, keyword research, on-page optimisation, and Google Map Pack rankings." },
  "seo-uae": { title: "SEO Agency UAE - SEO Services Across All 7 Emirates | SEODXB", desc: "UAE-wide SEO across Dubai, Abu Dhabi, Sharjah, and all emirates. Bilingual English and Arabic SEO with AI optimisation." },
  "ecommerce-seo": { title: "E-commerce SEO Dubai - Shopify, WooCommerce & Online Store SEO | SEODXB", desc: "E-commerce SEO in Dubai. Rank products on Google and grow organic sales from Shopify, WooCommerce, and custom stores." },
  "real-estate-seo": { title: "Real Estate SEO Dubai - Property SEO Agency UAE | SEODXB", desc: "Real estate SEO in Dubai. Rank property listings, development pages, and agency sites to attract serious buyers and renters." },
  "b2b-seo": { title: "B2B SEO Agency Dubai - Startup & Enterprise SEO UAE | SEODXB", desc: "B2B SEO in Dubai for startups, scale-ups, and enterprise. Generate qualified leads from targeted organic search strategies." },
  "seo-for-restaurants": { title: "SEO for Restaurants & Hotels Dubai - Hospitality SEO Agency UAE | SEODXB", desc: "SEO for restaurants and hotels in Dubai. Map Pack rankings, review management, and booking-focused SEO that fills seats." },
  "seo-for-healthcare": { title: "Healthcare SEO Dubai - SEO for Clinics, Hospitals & Doctors UAE | SEODXB", desc: "Medical SEO in Dubai for clinics, hospitals, and doctors. Map Pack rankings, E-E-A-T content, and patient acquisition." },
  "seo-for-law-firms": { title: "SEO for Law Firms Dubai - Legal SEO Agency UAE | SEODXB", desc: "Legal SEO for Dubai law firms. Rank for high-value client queries and generate consultations with E-E-A-T content." },
  "website-20-aed": { title: "Professional Website from 5 AED | Listi.ae Business Offer | SEODXB", desc: "Listi.ae business users get a professional, SEO-ready website from just 5 AED. Free plan 20 AED, one page. Terms apply." },
  "admin": { title: "Site Index | SEODXB Admin", desc: "Internal site index of every SEODXB page and blog post. Private admin directory, not indexed by search engines." },
};

const BLOG_META: Record<string, { title: string; desc: string }> = {
  "future-of-search-generative-ai-dubai": { title: "The Future of Search: Preparing for Generative AI in Dubai | SEODXB Blog", desc: "How generative engine optimisation (GEO) is reshaping search visibility for businesses across Dubai and the UAE." },
  "core-web-vitals-matter": { title: "Why Core Web Vitals Matter More Than Ever | SEODXB Blog", desc: "A deep dive into site speed, interactivity, and visual stability as crucial Google ranking factors for your website." },
  "answer-engines-position-zero": { title: "Optimizing for Answer Engines: Position Zero Explained | SEODXB Blog", desc: "How to structure content so answer engines, voice assistants, and featured snippets surface it at Position Zero." },
  "local-search-dubai": { title: "Dominating Local Search in Dubai: A Practical Guide | SEODXB Blog", desc: "Actionable steps to improve your Google Business Profile and local citations for maximum visibility in Dubai search." },
  "semantic-seo-entities-keywords": { title: "Semantic SEO: Writing for Entities, Not Just Keywords | SEODXB Blog", desc: "Move beyond keyword stuffing and build topical authority through entity-based, semantic content optimisation." },
  "tracking-seo-metrics-revenue": { title: "Tracking What Matters: Metrics That Actually Drive Revenue | SEODXB Blog", desc: "Stop chasing vanity metrics. Learn how to measure SEO ROI and the metrics that actually drive business revenue." },
  // Merge the 200 generated SEO, AEO, and GEO posts. Inline entries above win
  // on any slug collision because the spread comes second only for new keys.
  ...Object.fromEntries(Object.entries(generatedBlogMeta).filter(([slug]) => !["future-of-search-generative-ai-dubai", "core-web-vitals-matter", "answer-engines-position-zero", "local-search-dubai", "semantic-seo-entities-keywords", "tracking-seo-metrics-revenue"].includes(slug))),
};

// Bake correct title/description/canonical/OG/Twitter into a copy of the shell.
function buildStaticHead(shell: string, url: string, title: string, descRaw: string, ogType = "website"): string {
  // Guard: keep meta descriptions inside the 100 to 128 character SEO range.
  const desc = descRaw ? clampMetaDesc(descRaw) : descRaw;
  return shell
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escape(desc)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${ogType}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escape(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escape(desc)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escape(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escape(desc)}" />`);
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
  // Each route gets its OWN title/description/self-canonical baked into the
  // raw HTML, so SEO tools and crawlers don't see the homepage canonical.
  const NOINDEX_ROUTES = new Set(["admin"]);
  for (const [route, meta] of Object.entries(STATIC_META)) {
    const file = join(DIST, `${route}.html`);
    if (!existsSync(file)) {
      let html = buildStaticHead(shell, `${SITE}/${route}`, meta.title, meta.desc);
      if (NOINDEX_ROUTES.has(route)) {
        html = html.replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="noindex, nofollow" />`);
      }
      writeFileSync(file, html, "utf-8");
    }
  }
  mkdirSync(join(DIST, "blog"), { recursive: true });
  for (const [slug, meta] of Object.entries(BLOG_META)) {
    writeFileSync(
      join(DIST, "blog", `${slug}.html`),
      buildStaticHead(shell, `${SITE}/blog/${slug}`, meta.title, meta.desc, "article"),
      "utf-8",
    );
  }
  console.log(`  ✓ ${Object.keys(STATIC_META).length} static + ${Object.keys(BLOG_META).length} blog pages`);

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
