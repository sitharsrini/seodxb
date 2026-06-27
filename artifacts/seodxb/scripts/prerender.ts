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
import { uaeKeywordPages } from "../src/data/keywordPagesUAE";
import { gccKeywordPages } from "../src/data/keywordPagesGCC";
import { usKeywordPages } from "../src/data/keywordPagesUS";
import { ukKeywordPages } from "../src/data/keywordPagesUK";
import { euKeywordPages } from "../src/data/keywordPagesEU";
import { apacKeywordPages } from "../src/data/keywordPagesAPAC";
import { globalKeywordPages } from "../src/data/keywordPagesGlobal";
import { leadsKeywordPages } from "../src/data/keywordPagesLeads";
import { generatedBlogMeta, generatedBlogContent } from "../src/data/blogPosts";
import { generatedBlogMeta2, generatedBlogContent2 } from "../src/data/blogPosts2";
import { longFormMeta, longFormContent, longFormSchemaData } from "../src/data/longform";

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
      "@type": "Organization",
      name: "SEODXB",
      url: SITE,
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
  // Note: JSON-LD schemas are intentionally NOT injected here.
  // KeywordPage.tsx adds Service + FAQPage + BreadcrumbList via React Helmet.
  // Injecting them here too would create duplicate schemas in the rendered DOM.
  return (
    shell
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${escape(page.title)}</title>`,
      )
      .replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${escape(page.metaDesc)}" />`,
      )
      .replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${canonical}" />`,
      )
      .replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${escape(page.title)}" />`,
      )
      .replace(
        /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${escape(page.metaDesc)}" />`,
      )
      .replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${canonical}" />`,
      )
      .replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${escape(page.title)}" />`,
      )
      .replace(
        /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${escape(page.metaDesc)}" />`,
      )
  );
}

function buildBody(page: KeywordPageConfig, html: string, related: KeywordPageConfig[]): string {
  // Always include core service links so every keyword page has outgoing links.
  const relatedLinks = `
    <nav aria-label="Related SEO services">
      <h2>Related SEO Services</h2>
      <ul>
        ${related.map((r) => `<li><a href="${SITE}/${r.slug}">${escape(r.keyword)}</a></li>`).join("\n        ")}
        <li><a href="${SITE}/seo-services-dubai">All SEO services</a></li>
        <li><a href="${SITE}/seo-agency-uae">SEO across the UAE</a></li>
        <li><a href="${SITE}/blog">SEO insights and guides</a></li>
        <li><a href="${SITE}/contact">Contact SEODXB</a></li>
      </ul>
    </nav>`;
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
  "pricing": { title: "SEO Pricing Dubai - Transparent Plans for On-Page SEO & AEO | SEODXB", desc: "SEO pricing Dubai: Startup plan from $999/mo, Business from $2,999/mo. Transparent pricing, no lock-in contracts. Includes GEO and AEO." },
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
  "free-seo-audit": { title: "Free SEO Audit Dubai - Request Your Report in 2 Minutes | SEODXB", desc: "Get a free SEO audit for your Dubai website. Technical health, keyword gaps, competitor analysis, and a priority action list." },
  "seo-services": { title: "SEO Services Directory - All Locations and Industries | SEODXB", desc: "Browse all SEODXB SEO services by location and industry. Dubai, UAE cities, GCC, US, UK, Europe, APAC and global coverage." },
  "admin": { title: "Site Index | SEODXB Admin", desc: "Internal site index of every SEODXB page and blog post. Private admin directory, not indexed by search engines." },
};

const BLOG_META: Record<string, { title: string; desc: string }> = {
  "future-of-search-generative-ai-dubai": { title: "The Future of Search: Preparing for Generative AI in Dubai | SEODXB Blog", desc: "AI-referred traffic in the UAE grew 527% YoY. How Dubai businesses can build GEO authority before competitors." },
  "core-web-vitals-matter": { title: "Why Core Web Vitals Matter More Than Ever | SEODXB Blog", desc: "43% of sites still fail INP in 2026. Fix LCP, INP, and CLS with specific techniques that improve rankings." },
  "answer-engines-position-zero": { title: "Optimizing for Answer Engines: Position Zero Explained | SEODXB Blog", desc: "60% of searches end without a click. How to structure content that wins featured snippets and AI citations." },
  "local-search-dubai": { title: "Dominating Local Search in Dubai: A Practical Guide | SEODXB Blog", desc: "Google Business Profile, UAE citation strategy, and review generation to dominate Dubai Map Pack results." },
  "semantic-seo-entities-keywords": { title: "Semantic SEO: Writing for Entities, Not Just Keywords | SEODXB Blog", desc: "Google AI Overviews reach 1B users monthly. Build topical authority and entity signals that earn citations." },
  "tracking-seo-metrics-revenue": { title: "Tracking What Matters: Metrics That Actually Drive Revenue | SEODXB Blog", desc: "Average position and DA hide more than they reveal. The 2026 SEO metrics that actually connect to revenue." },
  "what-chatgpt-sees-when-it-looks-for-your-dubai-business": { title: "What ChatGPT Sees When Someone Asks It to Find Your Dubai Business | SEODXB Blog", desc: "A walk through what AI engines actually see when searching for Dubai businesses, and why most are invisible." },
  "two-dubai-businesses-one-invisible-online": { title: "Two Dubai Businesses, Same Quality, One Invisible Online | SEODXB Blog", desc: "The gap between Dubai businesses that rank and those that do not is rarely quality. It is almost always visibility." },
  "the-honest-guide-to-seo-timelines-in-dubai": { title: "The Honest Guide to SEO Timelines: What Dubai Businesses Should Actually Expect | SEODXB Blog", desc: "Specific, honest expectations for how long SEO takes in the Dubai market, month by month." },
  // Merge the 200 + 500 generated posts. Inline entries above always win on
  // any slug collision because the spread comes second only for new keys.
  ...Object.fromEntries(Object.entries(generatedBlogMeta).filter(([slug]) => !["future-of-search-generative-ai-dubai", "core-web-vitals-matter", "answer-engines-position-zero", "local-search-dubai", "semantic-seo-entities-keywords", "tracking-seo-metrics-revenue", "what-chatgpt-sees-when-it-looks-for-your-dubai-business", "two-dubai-businesses-one-invisible-online", "the-honest-guide-to-seo-timelines-in-dubai"].includes(slug))),
  ...Object.fromEntries(Object.entries(generatedBlogMeta2).filter(([slug]) => !["future-of-search-generative-ai-dubai", "core-web-vitals-matter", "answer-engines-position-zero", "local-search-dubai", "semantic-seo-entities-keywords", "tracking-seo-metrics-revenue", "what-chatgpt-sees-when-it-looks-for-your-dubai-business", "two-dubai-businesses-one-invisible-online", "the-honest-guide-to-seo-timelines-in-dubai"].includes(slug))),
  // 150 long-form researched articles win on their own unique slugs.
  ...longFormMeta,
};

// Return a hidden-but-crawlable HTML block for key static pages.
// Wrapped in an off-screen div so it is invisible to sighted users but fully
// readable by AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Googlebot).
function buildStaticBody(slug: string): string {
  const wrapperOpen = `<div id="static-content" aria-hidden="true" style="position:absolute;left:-9999px;top:0;width:1px;height:1px;overflow:hidden;">`;
  const wrapperClose = `</div>`;

  let inner = "";

  if (slug === "" || slug === "index") {
    inner = `
<h1>SEODXB - SEO Agency Dubai | AEO and GEO Specialists</h1>
<p>SEODXB is a Dubai-based SEO agency specialising in On-Page SEO, Answer Engine Optimisation (AEO), and Generative Engine Optimisation (GEO). We help businesses across Dubai and the UAE rank on Google and get cited by ChatGPT, Perplexity, and Google AI Overviews.</p>
<p>SEO packages start from $999 per month. No lock-in contracts. Free SEO audit available.</p>
<p>Services: On-Page SEO, Technical SEO, Local SEO, International SEO, AEO, GEO, Link Building</p>
<p>Locations served: Dubai, Abu Dhabi, Sharjah, UAE, Saudi Arabia, GCC</p>
`;
  } else if (slug === "about") {
    inner = `
<h1>About SEODXB - Dubai SEO Agency</h1>
<p>SEODXB is a Dubai SEO agency founded by Srinivasan R, an SEO strategist specialising in Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO). We help UAE businesses dominate search across Google, ChatGPT, and Perplexity.</p>
<p>Founder: Srinivasan R - SEO Strategist, AEO and GEO Specialist, Dubai UAE</p>
<p>We specialise in the full SEO, AEO, and GEO trilogy - traditional search rankings, AI citation optimisation, and generative engine visibility.</p>
`;
  } else if (slug === "pricing") {
    inner = `
<h1>SEO Pricing Dubai - Transparent SEO Packages UAE</h1>
<p>SEODXB offers transparent SEO pricing with no lock-in contracts. Startup plan from $999 per month (10-15 pages, 20 keywords, GEO and AEO included). Business plan from $2,999 per month (up to 50 pages, 75 keywords tracked).</p>
<p>All plans include: Keyword Research, Technical SEO, Local SEO, GEO optimisation, AEO optimisation, Monthly Reports, Google Business Profile, Schema Markup, Human-written blog articles.</p>
`;
  }

  // Hand-written blog posts: inject their intro paragraphs as static body
  // since their content is JSX in BlogPost.tsx and not in generatedBlogContent.
  else if (slug === "what-chatgpt-sees-when-it-looks-for-your-dubai-business") {
    inner = `
<article>
<h1>What ChatGPT Sees When Someone Asks It to Find Your Dubai Business</h1>
<p>A few weeks ago I ran an experiment. I opened ChatGPT, Perplexity, and Google Gemini, and I typed variations of the same question into each one: "Who are the best physiotherapists in Dubai?" Then "Which property consultants are worth talking to in Business Bay?" Then "What SEO agencies in Dubai actually get results?"</p>
<p>I did this for fifteen different service categories across Dubai. Then I went and visited the websites of every business that was named, and every business that was not named but should have been by any reasonable measure. The AI engines were not simply citing the most popular businesses. They were citing businesses that had made it easy to be cited.</p>
<h2>The Problem With Invisible Confidence</h2>
<p>When a business does not appear in an AI-generated answer, nobody sends them a notification. The enquiries that would have arrived simply never do. You cannot optimise for what you cannot see losing. And in the UAE market right now, a significant and growing share of service discovery is happening inside AI tools that most businesses have not even begun to think about.</p>
<h2>What Got Businesses Named in My Tests</h2>
<p>Three factors separated the cited from the uncited. Entity clarity at scale: described consistently and specifically across website, Google Business Profile, LinkedIn, and industry directories. Third-party mentions from trusted UAE sources: Gulf News, Khaleej Times, The National, Zawya, and sector-specific platforms. Content that answers specific buyer questions: not generic service listings but direct answers to the queries buyers actually type.</p>
<h2>Why Dubai Businesses Are Particularly Exposed</h2>
<p>Roughly 89% of Dubai's population is expatriate. Every year hundreds of thousands of new residents arrive with no existing network of trusted local recommendations. For an expat who landed in Dubai three months ago and needs a financial adviser, asking ChatGPT is the obvious first step. Whoever AI names in that answer gets the enquiry, often without any further research.</p>
<p>The businesses that are most visible in AI search are not always the best in their category. But they are the ones that made it easiest for an AI to understand them, trust them, and name them with confidence.</p>
</article>
`;
  } else if (slug === "two-dubai-businesses-one-invisible-online") {
    inner = `
<article>
<h1>Two Dubai Businesses, Same Quality, One Invisible Online</h1>
<p>A law firm came to me frustrated. Their work was genuinely excellent. Strong client retention, referrals from satisfied clients, a reputation in their specific practice area that their peers in the legal community knew well. But online, they were invisible. Searches for the exact services they offered, in the exact areas of Dubai they served, returned their competitors on the first page and buried my client somewhere on page four.</p>
<p>Across town, a rival firm was visible everywhere. First-page Google rankings for a dozen relevant terms. Featured in AI answers on Perplexity. Cited in legal directories. This rival was not demonstrably better at the actual legal work. But they were infinitely better at being found.</p>
<h2>What Visibility Infrastructure Actually Means</h2>
<p>The visible firm had a website that loaded in under two seconds on mobile, had no broken pages, and had structured data markup on every important page. The invisible firm's website loaded in six seconds on mobile with broken internal links, pages not being indexed, and a page structure that Google could not parse into a coherent picture of what the firm did.</p>
<h2>The Seven Differences</h2>
<p>Page speed and Core Web Vitals. Indexed content volume and depth. Schema markup. Google Business Profile activity. Third-party mentions from credible sources. Review recency and volume. Content that answers buyer questions rather than describes the business to itself.</p>
<p>These seven differences appear with remarkable consistency across every comparable business pair I have looked at. The gap between them is almost never about quality. It is almost entirely about visibility infrastructure.</p>
</article>
`;
  } else if (slug === "the-honest-guide-to-seo-timelines-in-dubai") {
    inner = `
<article>
<h1>The Honest Guide to SEO Timelines: What Dubai Businesses Should Actually Expect</h1>
<p>The most common lie in SEO is also the most damaging. Not the lie told by bad agencies. The most damaging lie is the one businesses tell themselves: that SEO is a short project with a defined end point, after which the rankings appear and the enquiries flow.</p>
<h2>Month One: You Are Mostly Cleaning Up</h2>
<p>Technical audit, crawl analysis, indexing review, site speed assessment, schema implementation, Google Search Console cleanup. This work is not glamorous and it does not directly produce visible ranking improvements. But it is the reason that months four and five produce visible improvements instead of months eight and nine.</p>
<h2>Months Two and Three: The First Content Goes Live</h2>
<p>New service pages, revised existing pages structured for search intent, FAQ content targeting the questions your buyers actually research, blog articles targeting informational queries. Google starts seeing this new content and indexing it, but it does not immediately rank it.</p>
<h2>Month Four: The First Real Signal</h2>
<p>Around month four, pages built on solid keyword research start to move. Not to page one. But from page six to page three. From position forty to position eighteen. These movements are meaningful even when they do not yet produce traffic. They tell you Google is assessing the pages positively.</p>
<h2>The Twelve-Month Inflection</h2>
<p>Month twelve looks meaningfully different from month six in a way that month six did not look different from month three. The compounding has had enough time to work. Twelve months of consistent, well-structured SEO work typically results in meaningful first-page presence and organic leads that have shifted from a trickle to a consistent, predictable channel.</p>
<p>The businesses in Dubai that have built strong organic positions did not get there by finding a shortcut. They got there by starting, staying consistent, and waiting out the months where the dashboard did not tell an exciting story.</p>
</article>
`;
  }

  if (!inner) return "";
  return `${wrapperOpen}${inner}${wrapperClose}`;
}

// Build the services directory static body linking to all keyword pages by region.
function buildServicesDirectoryBody(): string {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const renderSection = (title: string, pages: { slug: string; keyword: string }[]) => {
    if (pages.length === 0) return "";
    const links = pages.map((p) => `<li><a href="${SITE}/${p.slug}">${esc(p.keyword)}</a></li>`).join("");
    return `<h2>${esc(title)}</h2><ul>${links}</ul>`;
  };
  const knownUAE = new Set(Object.keys(uaeKeywordPages));
  const knownGCC = new Set(gccKeywordPages.map((p) => p.slug));
  const knownUS = new Set(usKeywordPages.map((p) => p.slug));
  const knownUK = new Set(ukKeywordPages.map((p) => p.slug));
  const knownEU = new Set(euKeywordPages.map((p) => p.slug));
  const knownAPAC = new Set(apacKeywordPages.map((p) => p.slug));
  const knownGlobal = new Set([...globalKeywordPages, ...leadsKeywordPages].map((p) => p.slug));
  const allOtherSlugs = new Set([...knownUAE, ...knownGCC, ...knownUS, ...knownUK, ...knownEU, ...knownAPAC, ...knownGlobal]);
  const dubaiPages = Object.values(keywordPages).filter((p) => !allOtherSlugs.has(p.slug));

  const body = [
    `<h1>SEO Services Directory</h1>`,
    `<p>A complete index of every SEO, AEO, and GEO service SEODXB provides, organised by location and industry.</p>`,
    renderSection("Dubai SEO Services", dubaiPages),
    renderSection("UAE Cities, Emirates and Areas", Object.values(uaeKeywordPages)),
    renderSection("Saudi Arabia and the Gulf (GCC)", gccKeywordPages),
    renderSection("United States", usKeywordPages),
    renderSection("United Kingdom", ukKeywordPages),
    renderSection("Europe", euKeywordPages),
    renderSection("Asia-Pacific", apacKeywordPages),
    renderSection("Global and Specialist Services", [...globalKeywordPages, ...leadsKeywordPages]),
    `<p><a href="${SITE}/contact">Book a free SEO consultation</a></p>`,
    `<p><a href="${SITE}/seo-audit">Get a free SEO audit</a></p>`,
  ].join("\n");
  return `<div id="static-content" aria-hidden="true" style="position:absolute;left:-9999px;top:0;width:1px;height:1px;overflow:hidden;">${body}</div>`;
}

// Inject static body content before <div id="root"> for crawler visibility.
function injectStaticBody(html: string, slug: string): string {
  const block = buildStaticBody(slug);
  if (!block) return html;
  return html.replace('<div id="root"></div>', `${block}\n<div id="root"></div>`);
}

const AUTHOR_NAME = "Srinivasan R";
const AUTHOR_URL = "https://www.linkedin.com/in/srinivasanram163/";

// Build raw-HTML JSON-LD (Article + BreadcrumbList + FAQPage) for a blog post so
// the structured data lives in the served source, not only in React Helmet tags.
// Only emitted for long-form articles where full data (dates, image, FAQs) exists.
function buildBlogSchema(slug: string, url: string): string {
  const d = longFormSchemaData[slug];
  if (!d) return "";
  const blocks: string[] = [];

  blocks.push(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: d.title,
    description: d.excerpt,
    url,
    datePublished: d.iso,
    dateModified: d.updated,
    author: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_URL },
    publisher: { "@type": "Organization", name: "SEODXB", url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/favicon.png` } },
    image: d.heroImage,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }));

  blocks.push(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: d.title, item: url },
    ],
  }));

  if (d.faqs && d.faqs.length > 0) {
    blocks.push(JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }));
  }

  return blocks.map((b) => `<script type="application/ld+json">${b}</script>`).join("\n    ");
}

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

// Merge all blog content maps for lookup in the blog loop. Long-form entries
// carry FAQs too, which we render into the static body for AEO visibility.
type BlogStaticContent = {
  intro: string[];
  sections: { h: string; p: string[]; list?: string[] }[];
  takeaway: string;
  faqs?: { q: string; a: string }[];
};
const ALL_BLOG_CONTENT: Record<string, BlogStaticContent> = {
  ...generatedBlogContent,
  ...generatedBlogContent2,
  ...longFormContent,
};

// Outgoing service links added to every blog static body so no blog page
// is flagged as having zero outgoing links by audit tools.
const BLOG_OUTGOING_LINKS = `
<nav aria-label="SEO services">
  <h2>SEO Services</h2>
  <ul>
    <li><a href="${SITE}/on-page-seo">On-Page SEO Services</a></li>
    <li><a href="${SITE}/technical-seo">Technical SEO Services</a></li>
    <li><a href="${SITE}/local-seo">Local SEO Services Dubai</a></li>
    <li><a href="${SITE}/aeo">Answer Engine Optimisation (AEO)</a></li>
    <li><a href="${SITE}/geo">Generative Engine Optimisation (GEO)</a></li>
    <li><a href="${SITE}/seo-audit">Free SEO Audit</a></li>
    <li><a href="${SITE}/blog">More SEO Insights</a></li>
    <li><a href="${SITE}/contact">Get a Free SEO Consultation</a></li>
  </ul>
</nav>`;

// Build an off-screen article body from the post's plain-text data so AI
// crawlers and non-JS bots can read the article content without executing React.
function buildBlogStaticBody(slug: string, title?: string): string {
  const c = ALL_BLOG_CONTENT[slug];
  if (!c) return "";
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const parts: string[] = [];
  if (title) parts.push(`<h1>${esc(title)}</h1>`);
  for (const para of c.intro) parts.push(`<p>${esc(para)}</p>`);
  for (const sec of c.sections) {
    parts.push(`<h2>${esc(sec.h)}</h2>`);
    for (const para of sec.p) parts.push(`<p>${esc(para)}</p>`);
    if (sec.list) {
      parts.push(`<ul>${sec.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>`);
    }
  }
  parts.push(`<p>${esc(c.takeaway)}</p>`);
  if (c.faqs && c.faqs.length > 0) {
    parts.push(`<h2>Frequently asked questions</h2>`);
    for (const f of c.faqs) {
      parts.push(`<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`);
    }
  }
  parts.push(BLOG_OUTGOING_LINKS);
  return `<div id="blog-static-body" aria-hidden="true" style="position:absolute;left:-9999px;top:0;width:1px;height:1px;overflow:hidden;"><article>${parts.join("\n")}</article></div>`;
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

    // Inline the page's own config so KeywordPage renders it without importing
    // the ~1MB keywordPages dataset. Escaping < prevents a </script> breakout.
    const kwData = JSON.stringify(page).replace(/</g, "\\u003c");
    html = html.replace("</head>", `  <script>window.__KW_DATA__=${kwData}</script>\n  </head>`);

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
  // Patch the homepage (index.html) with static body content for AI crawlers.
  const homepageFile = join(DIST, "index.html");
  const homepageHtml = injectStaticBody(shell, "");
  writeFileSync(homepageFile, homepageHtml, "utf-8");

  const NOINDEX_ROUTES = new Set(["admin"]);
  // Routes that already have H1 injected via buildStaticBody() or a dedicated builder
  const HAS_STATIC_BODY = new Set(["", "index", "about", "pricing",
    "seo-services",
    "what-chatgpt-sees-when-it-looks-for-your-dubai-business",
    "two-dubai-businesses-one-invisible-online",
    "the-honest-guide-to-seo-timelines-in-dubai"]);
  for (const [route, meta] of Object.entries(STATIC_META)) {
    const file = join(DIST, `${route}.html`);
    if (!existsSync(file)) {
      let html = buildStaticHead(shell, `${SITE}/${route}`, meta.title, meta.desc);
      if (route === "seo-services") {
        html = html.replace('<div id="root"></div>', `${buildServicesDirectoryBody()}\n<div id="root"></div>`);
      } else {
        html = injectStaticBody(html, route);
      }
      // Inject a minimal H1 + service links for pages that don't already have a static body
      if (!HAS_STATIC_BODY.has(route)) {
        const h1Text = meta.title.replace(/\s*\|.*$/, "").trim();
        const staticBlock = `<div id="static-content" aria-hidden="true" style="position:absolute;left:-9999px;top:0;width:1px;height:1px;overflow:hidden;"><h1>${escape(h1Text)}</h1><nav aria-label="SEO services"><ul><li><a href="${SITE}/on-page-seo">On-Page SEO</a></li><li><a href="${SITE}/technical-seo">Technical SEO</a></li><li><a href="${SITE}/aeo">AEO Services</a></li><li><a href="${SITE}/geo">GEO Services</a></li><li><a href="${SITE}/seo-dubai">SEO Dubai</a></li><li><a href="${SITE}/blog">SEO Blog</a></li><li><a href="${SITE}/contact">Contact SEODXB</a></li></ul></nav></div>`;
        html = html.replace('<div id="root"></div>', `${staticBlock}\n<div id="root"></div>`);
      }
      if (NOINDEX_ROUTES.has(route)) {
        html = html.replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="noindex, nofollow" />`);
      }
      writeFileSync(file, html, "utf-8");
    }
  }
  mkdirSync(join(DIST, "blog"), { recursive: true });
  for (const [slug, meta] of Object.entries(BLOG_META)) {
    const blogUrl = `${SITE}/blog/${slug}`;
    // Plain title without the " | SEODXB Blog" suffix for the H1.
    const h1Title = meta.title.replace(/\s*\|\s*SEODXB Blog\s*$/, "");
    let blogHtml = buildStaticHead(shell, blogUrl, meta.title, meta.desc, "article");
    // Inject Article + Breadcrumb + FAQPage JSON-LD into raw HTML head where available.
    const schema = buildBlogSchema(slug, blogUrl);
    if (schema) {
      blogHtml = blogHtml.replace("</head>", `    ${schema}\n  </head>`);
    }
    // Try generated content first, then fall back to hand-written static body.
    const bodyBlock = buildBlogStaticBody(slug, h1Title) || buildStaticBody(slug);
    if (bodyBlock) {
      blogHtml = blogHtml.replace('<div id="root"></div>', `${bodyBlock}\n<div id="root"></div>`);
    }
    writeFileSync(join(DIST, "blog", `${slug}.html`), blogHtml, "utf-8");
  }
  console.log(`  ✓ ${Object.keys(STATIC_META).length} static + ${Object.keys(BLOG_META).length} blog pages`);

  // Regenerate sitemap-blog.xml from the full BLOG_META set so it always stays
  // in sync with the actual post count without manual maintenance.
  const today = new Date().toISOString().split("T")[0];
  const sitemapBlog = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...Object.keys(BLOG_META).map((slug) =>
      `<url>\n    <loc>${SITE}/blog/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
    ),
    "</urlset>",
  ].join("\n");
  writeFileSync(join(DIST, "sitemap-blog.xml"), sitemapBlog, "utf-8");
  console.log(`  ✓ sitemap-blog.xml with ${Object.keys(BLOG_META).length} URLs`);

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
