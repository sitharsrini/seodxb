import type { KeywordPageConfig } from "./keywordPages";

const IMAGES = [
  "photo-1512453979798-5ea266f8880c", "photo-1486406146926-c627a92ad1ab",
  "photo-1496568816309-51d7c20e3b21", "photo-1531973576160-7125cd663d86",
  "photo-1582407947304-fd86f028f716", "photo-1460925895917-afdab827c52f",
  "photo-1551288049-bebda4e38f71", "photo-1486325212027-8081e485255e",
  "photo-1497366216548-37526070297c", "photo-1556761175-5973dc0f32e7",
  "photo-1521737604893-d14cc237f11d", "photo-1454165804606-c3d57bc86b40",
  "photo-1507003211169-0a1dd7228f2d", "photo-1516321318423-f06f85e504b3",
  "photo-1577415124269-fc1140a69e91", "photo-1542744173-8e7e53415bb0",
  "photo-1559136555-9303baea8ebd", "photo-1573164713988-8665fc963095",
  "photo-1556742049-0cfed4f6a45d", "photo-1554224155-6726b3ff858f",
];
function img(i: number): string {
  return `https://images.unsplash.com/${IMAGES[i % IMAGES.length]}?w=640&h=480&fit=crop&q=80&auto=format`;
}

function pick(slug: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % mod;
}

const statSets: { value: string; label: string }[][] = [
  [{ value: "+312%", label: "Avg. Organic Growth" }, { value: "87+", label: "Page 1 Keywords" }, { value: "4.8x", label: "Average ROI" }, { value: "6 wks", label: "To First Rankings" }],
  [{ value: "+260%", label: "Qualified Leads" }, { value: "500+", label: "Keywords Tracked" }, { value: "92%", label: "Client Retention" }, { value: "8 wks", label: "First Results" }],
  [{ value: "3.4x", label: "Lead Increase" }, { value: "Top 3", label: "Rankings Goal" }, { value: "+180%", label: "Global Visibility" }, { value: "24h", label: "Response Time" }],
  [{ value: "+295%", label: "Organic Traffic" }, { value: "100+", label: "Global Clients" }, { value: "5.1x", label: "ROI" }, { value: "No.1", label: "Ranking Focus" }],
];

function features(label: string, scope: string): { title: string; desc: string }[] {
  return [
    { title: "Technical SEO Foundation", desc: `We fix the Core Web Vitals, crawl, indexation, and structured-data issues that quietly block ${label} from ranking, building the base every other gain depends on.` },
    { title: `${scope} Keyword Strategy`, desc: `We map the high-intent keywords ${scope} customers actually search across every stage of the buying journey, not just vanity head terms.` },
    { title: "Content That Ranks and Converts", desc: "Answer-first content structured for Google, featured snippets, and AI answer engines, written by specialists who understand your market and audience." },
    { title: "International Search Visibility", desc: `Hreflang, multiregional targeting, and international link building to ensure your ${scope} audience finds you in every target market.` },
    { title: "AEO and GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend you across global search conversations." },
    { title: "Authority Link Building", desc: "High-quality backlinks from global press, publications, and industry authorities that build the domain credibility Google rewards at an international level." },
  ];
}

function baseFaqs(label: string): { q: string; a: string }[] {
  return [
    { q: `How much does ${label} cost?`, a: "SEODXB offers transparent plans: from $999/mo for small teams, $2,499/mo for Business, and custom pricing for Enterprise, all with no lock-in contracts and no hidden fees. The right plan depends on your competition and growth goals." },
    { q: `How long does ${label} take to show results?`, a: "Most clients see measurable ranking movement within 6 to 10 weeks, with significant traffic and lead growth by month 3 to 6, depending on competition and how aggressively we execute." },
    { q: "Does SEODXB work with clients globally?", a: "Yes. SEODXB is based in Dubai and works with clients worldwide, combining international market expertise with technical SEO, AEO, and GEO to build organic visibility in any target market." },
    { q: "Do you optimise for AI search like ChatGPT and Google AI Overviews?", a: "Yes. Every SEODXB engagement includes AEO and GEO work so your brand is cited by AI answer engines and surfaced in AI Overviews, not just traditional blue-link results." },
    { q: `Can SEODXB scale ${label} for large or enterprise organisations?`, a: "Yes. SEODXB delivers enterprise-grade programmes with the governance, reporting, and multi-team coordination that large organisations need alongside the specialist depth that smaller teams value." },
  ];
}

const variants: KeywordPageConfig["svgVariant"][] = ["serp", "analytics", "ai", "local", "audit", "growth"];

function make(slug: string, cfg: {
  keyword: string; badge: string; title: string; metaDesc: string; h1: string; intro: string;
  scope: string; featuresTitle: string; featuresSubtitle: string;
  faqs?: { q: string; a: string }[]; faqTitle: string; ctaTitle: string; ctaDesc: string; ctaButton: string;
}): KeywordPageConfig {
  return {
    slug, keyword: cfg.keyword, badge: cfg.badge, title: cfg.title, metaDesc: cfg.metaDesc,
    h1: cfg.h1, intro: cfg.intro, svgVariant: variants[pick(slug, variants.length)],
    imageUrl: img(pick(slug, IMAGES.length)),
    featuresTitle: cfg.featuresTitle, featuresSubtitle: cfg.featuresSubtitle,
    features: features(cfg.keyword, cfg.scope),
    stats: statSets[pick(slug, statSets.length)],
    faqTitle: cfg.faqTitle, faqs: cfg.faqs ?? baseFaqs(cfg.keyword),
    ctaTitle: cfg.ctaTitle, ctaDesc: cfg.ctaDesc, ctaButton: cfg.ctaButton,
    areaServed: "Worldwide",
  };
}

const pages: KeywordPageConfig[] = [];

function p(slug: string, cfg: Parameters<typeof make>[1]) {
  pages.push(make(slug, cfg));
}

// ============================================================
// CATEGORY 1: Global service hubs (25 pages)
// ============================================================

p("international-seo", {
  keyword: "International SEO", badge: "International SEO Specialists",
  title: "International SEO Services | SEODXB - Global SEO Agency",
  metaDesc: "SEODXB delivers international SEO for businesses expanding across borders. Multilingual strategy, hreflang, multiregional targeting, and AI search visibility worldwide.",
  h1: "International SEO: Rank in Every Market That Matters",
  intro: "International SEO is the discipline of building organic visibility across multiple countries, languages, and search engines simultaneously. SEODXB delivers international SEO programmes that combine technical hreflang architecture, market-by-market keyword strategy, international link building, and AI search optimisation so your brand ranks and converts wherever your customers search.",
  scope: "international", featuresTitle: "What Our International SEO Includes",
  featuresSubtitle: "A complete cross-border organic growth programme built to rank in every target market.",
  faqTitle: "International SEO - Common Questions",
  ctaTitle: "Ready to Rank Globally?",
  ctaDesc: "Book a free international SEO strategy call. We'll audit your current global setup and map the fastest path to ranking in every target market.",
  ctaButton: "Get Free SEO Audit",
});

p("global-seo-services", {
  keyword: "Global SEO Services", badge: "Global SEO Services for Ambitious Brands",
  title: "Global SEO Services | SEODXB - SEO Across Every Market",
  metaDesc: "Global SEO services from SEODXB. Technical SEO, multilingual content, international link building, and AI search visibility for businesses targeting worldwide audiences.",
  h1: "Global SEO Services: Organic Growth Without Borders",
  intro: "SEODXB delivers global SEO services for businesses competing across international markets. From Fortune 500 enterprises expanding into new territories to scale-ups building worldwide category authority, we combine technical precision, multilingual content strategy, and AI search optimisation to build organic visibility that compounds across borders.",
  scope: "global", featuresTitle: "What Our Global SEO Services Include",
  featuresSubtitle: "End-to-end global SEO covering every dimension of international organic growth.",
  faqTitle: "Global SEO Services - FAQs",
  ctaTitle: "Scale Your Global SEO Programme",
  ctaDesc: "Book a free strategy call and we'll map a global SEO programme tailored to your target markets and growth ambitions.",
  ctaButton: "Get Free Strategy Call",
});

p("multilingual-seo", {
  keyword: "Multilingual SEO Services", badge: "Multilingual SEO Specialists",
  title: "Multilingual SEO Services | SEODXB - SEO in Every Language",
  metaDesc: "Multilingual SEO from SEODXB. Native-language keyword research, hreflang, localised content, and AI search visibility in Arabic, English, French, and more.",
  h1: "Multilingual SEO: Rank in Every Language Your Customers Speak",
  intro: "Most SEO is monolingual. Multilingual SEO is the practice of building genuine organic visibility across every language your customers search in, not just translated content but market-native keyword research, culturally relevant copy, and technical hreflang implementation. SEODXB delivers multilingual SEO programmes that treat each language market as a distinct ranking opportunity.",
  scope: "multilingual", featuresTitle: "What Our Multilingual SEO Includes",
  featuresSubtitle: "Language-native SEO strategy across every market where your customers search.",
  faqTitle: "Multilingual SEO - FAQs",
  ctaTitle: "Rank in Every Language That Matters",
  ctaDesc: "Book a free consultation and we'll map a multilingual SEO strategy for your target language markets.",
  ctaButton: "Get Free Consultation",
});

p("hreflang-seo", {
  keyword: "Hreflang SEO Services", badge: "Hreflang Implementation Specialists",
  title: "Hreflang SEO Services | SEODXB - International Hreflang Experts",
  metaDesc: "Expert hreflang SEO implementation from SEODXB. Fix hreflang errors, prevent duplicate content issues, and ensure Google serves the right page to the right audience.",
  h1: "Hreflang SEO: Get International Site Architecture Right",
  intro: "Hreflang is one of the most technically complex and most frequently misimplemented aspects of international SEO. Errors cause the wrong pages to rank in the wrong markets, cannibalise rankings, and confuse Google crawlers. SEODXB delivers expert hreflang implementation and auditing, ensuring every international page signals the right language and region to search engines.",
  scope: "international", featuresTitle: "Our Hreflang SEO Approach",
  featuresSubtitle: "Technically precise hreflang implementation for complex international site structures.",
  faqTitle: "Hreflang SEO - FAQs",
  ctaTitle: "Fix Your International Site Architecture",
  ctaDesc: "Book a free consultation and we'll audit your hreflang setup and international site structure.",
  ctaButton: "Get Free Hreflang Audit",
});

p("multiregional-seo", {
  keyword: "Multiregional SEO Services", badge: "Multiregional SEO Specialists",
  title: "Multiregional SEO Services | SEODXB - Target Multiple Regions",
  metaDesc: "Multiregional SEO from SEODXB. Country targeting, ccTLD strategy, geotargeting in Search Console, and region-specific content for businesses in multiple markets.",
  h1: "Multiregional SEO: Rank in Every Country You Target",
  intro: "Multiregional SEO is the strategy of signalling to Google which version of your site should rank in which country, using ccTLDs, subdirectories, geotargeting, and region-specific content signals. SEODXB delivers multiregional SEO architecture and strategy that ensures the right pages rank in the right countries for maximum organic revenue across your markets.",
  scope: "multiregional", featuresTitle: "Our Multiregional SEO Approach",
  featuresSubtitle: "Country-specific targeting and site architecture built for multiregional organic dominance.",
  faqTitle: "Multiregional SEO - FAQs",
  ctaTitle: "Rank in Every Country That Matters",
  ctaDesc: "Book a free consultation and we'll map a multiregional SEO strategy for your global footprint.",
  ctaButton: "Get Free Consultation",
});

p("global-technical-seo", {
  keyword: "Global Technical SEO", badge: "Global Technical SEO Specialists",
  title: "Global Technical SEO | SEODXB - International Technical SEO",
  metaDesc: "Global technical SEO from SEODXB. International crawl architecture, Core Web Vitals, hreflang, structured data, and site speed for globally distributed websites.",
  h1: "Global Technical SEO: The Foundation for International Rankings",
  intro: "Technical SEO for global websites is exponentially more complex than for single-market sites. Crawl budgets stretch thin, hreflang chains break, JavaScript rendering fails across markets, and Core Web Vitals vary by region. SEODXB delivers global technical SEO that solves these international-scale challenges, building the technical foundation that lets content and links do their job worldwide.",
  scope: "global", featuresTitle: "Our Global Technical SEO Approach",
  featuresSubtitle: "International-scale technical SEO covering every dimension of crawl, index, and performance.",
  faqTitle: "Global Technical SEO - FAQs",
  ctaTitle: "Fix Your Global Technical SEO Foundation",
  ctaDesc: "Book a free technical SEO consultation and we'll audit your international site architecture.",
  ctaButton: "Get Free Technical Audit",
});

p("global-link-building", {
  keyword: "Global Link Building", badge: "Global Link Building Specialists",
  title: "Global Link Building | SEODXB - International Link Acquisition",
  metaDesc: "Global link building from SEODXB. High-authority backlinks from international press, publications, and industry authorities across every major market. Ethical and transparent.",
  h1: "Global Link Building: Authority from the World's Best Publications",
  intro: "Global link building is the discipline of earning high-quality backlinks from authoritative publications, industry bodies, and press across multiple countries and languages. SEODXB delivers international link acquisition through digital PR, editorial outreach, and relationship-based placement in the publications that move the needle for global domain authority.",
  scope: "global", featuresTitle: "Our Global Link Building Approach",
  featuresSubtitle: "Editorial and PR-driven link acquisition from global press and industry authorities.",
  faqTitle: "Global Link Building - FAQs",
  ctaTitle: "Build Global Domain Authority",
  ctaDesc: "Book a free consultation and we'll map a global link-building strategy for your website.",
  ctaButton: "Get Free Consultation",
});

p("global-content-marketing", {
  keyword: "Global Content Marketing", badge: "Global Content Marketing for SEO",
  title: "Global Content Marketing | SEODXB - International Content Strategy",
  metaDesc: "Global content marketing from SEODXB. Multilingual content strategy, topical authority hubs, and AI-citable articles for businesses targeting worldwide audiences.",
  h1: "Global Content Marketing: Build Topical Authority Worldwide",
  intro: "Global content marketing builds topical authority across multiple markets, languages, and search intents simultaneously. SEODXB delivers international content strategies that map search demand market by market, create content that earns rankings in each language, and build the AI-citable authority that surfaces your brand in ChatGPT, Perplexity, and Google AI answers globally.",
  scope: "global", featuresTitle: "Our Global Content Marketing Approach",
  featuresSubtitle: "International content strategy built for topical authority and AI search citations worldwide.",
  faqTitle: "Global Content Marketing - FAQs",
  ctaTitle: "Build Global Content Authority",
  ctaDesc: "Book a free consultation and we'll map a global content marketing strategy for your markets.",
  ctaButton: "Get Free Consultation",
});

p("global-seo-audit", {
  keyword: "International SEO Audit", badge: "International SEO Audit Specialists",
  title: "International SEO Audit | SEODXB - Global SEO Analysis",
  metaDesc: "Comprehensive international SEO audit from SEODXB. Technical, hreflang, content, and authority analysis for globally distributed websites with a prioritised action plan.",
  h1: "International SEO Audit: Find What Is Blocking Your Global Rankings",
  intro: "An international SEO audit examines every technical, content, and authority factor that affects rankings across multiple markets. SEODXB delivers comprehensive global SEO audits covering hreflang implementation, international crawl architecture, market-by-market keyword gaps, content localisation quality, and AI search readiness, with a prioritised action plan for each market.",
  scope: "international", featuresTitle: "Our International SEO Audit Process",
  featuresSubtitle: "A thorough, market-by-market SEO audit with actionable findings for every target country.",
  faqTitle: "International SEO Audit - FAQs",
  ctaTitle: "Audit Your International SEO Setup",
  ctaDesc: "Book a free consultation and we'll scope a global SEO audit covering your most important markets.",
  ctaButton: "Get Free Audit Consultation",
});

p("global-ecommerce-seo", {
  keyword: "Global Ecommerce SEO", badge: "Global Ecommerce SEO Specialists",
  title: "Global Ecommerce SEO | SEODXB - International Online Store SEO",
  metaDesc: "Global ecommerce SEO from SEODXB. International product and category SEO, multilingual shopping schema, and cross-border AI commerce visibility for online stores.",
  h1: "Global Ecommerce SEO: Rank Your Store in Every Market",
  intro: "Global ecommerce SEO is the practice of optimising online stores to rank for product and category searches across multiple countries and languages simultaneously. SEODXB delivers international ecommerce SEO: multilingual product and category optimisation, shopping schema for rich results across markets, international hreflang, and AI commerce visibility that drives organic sales worldwide.",
  scope: "global ecommerce", featuresTitle: "Our Global Ecommerce SEO Approach",
  featuresSubtitle: "International product, category, and technical SEO for online stores targeting worldwide audiences.",
  faqTitle: "Global Ecommerce SEO - FAQs",
  ctaTitle: "Grow Global Ecommerce Revenue Organically",
  ctaDesc: "Book a free consultation and we'll map a global ecommerce SEO strategy for your target markets.",
  ctaButton: "Get Free Consultation",
});

p("global-local-seo", {
  keyword: "Global Local SEO Management", badge: "Global Local SEO Management",
  title: "Global Local SEO Management | SEODXB - Multi-Location Local SEO",
  metaDesc: "Global local SEO management from SEODXB. Google Business Profile management, citation building, and Map Pack optimisation for businesses with international multi-location footprints.",
  h1: "Global Local SEO Management: Win Local Search in Every Country",
  intro: "Managing local SEO across hundreds or thousands of locations in multiple countries requires systematic processes, consistent NAP data, and market-specific Google Business Profile strategies. SEODXB delivers global local SEO management that builds and maintains local visibility for multi-location businesses operating across international markets.",
  scope: "global local", featuresTitle: "Our Global Local SEO Management Approach",
  featuresSubtitle: "Systematic local SEO management for businesses with multi-country location footprints.",
  faqTitle: "Global Local SEO Management - FAQs",
  ctaTitle: "Manage Local SEO Across Your Global Locations",
  ctaDesc: "Book a free consultation and we'll assess your global local SEO setup and identify the biggest opportunities.",
  ctaButton: "Get Free Consultation",
});

p("global-enterprise-seo", {
  keyword: "Global Enterprise SEO", badge: "Global Enterprise SEO Specialists",
  title: "Global Enterprise SEO | SEODXB - Enterprise SEO at International Scale",
  metaDesc: "Global enterprise SEO from SEODXB. Large-site international SEO, multi-team governance, multilingual strategy, and AI search optimisation for enterprise organisations.",
  h1: "Global Enterprise SEO: Organic Growth at International Scale",
  intro: "Global enterprise SEO demands specialist expertise in managing hundreds of thousands of pages, cross-functional stakeholder alignment, multi-language content governance, and international technical architecture. SEODXB delivers enterprise SEO programmes built for the complexity of global organisations, combining specialist depth with the strategic oversight that drives measurable organic growth at scale.",
  scope: "global enterprise", featuresTitle: "Our Global Enterprise SEO Approach",
  featuresSubtitle: "Enterprise-grade international SEO combining technical precision with strategic programme management.",
  faqTitle: "Global Enterprise SEO - FAQs",
  ctaTitle: "Build a Global Enterprise SEO Programme",
  ctaDesc: "Book a strategy call and we'll scope an enterprise SEO programme for your international organisation.",
  ctaButton: "Get Free Strategy Call",
});

p("global-b2b-seo", {
  keyword: "Global B2B SEO", badge: "Global B2B SEO Specialists",
  title: "Global B2B SEO | SEODXB - International B2B SEO Agency",
  metaDesc: "Global B2B SEO from SEODXB. Demand generation, thought-leadership content, and AI search visibility for B2B businesses targeting buyers across international markets.",
  h1: "Global B2B SEO: Generate Qualified Pipeline from International Search",
  intro: "B2B buyers conduct extensive online research before making purchase decisions, across every market and language. Global B2B SEO builds the content authority, keyword coverage, and AI search presence that places your brand in front of decision-makers across international markets at every stage of the buying journey. SEODXB delivers B2B SEO programmes that generate qualified pipeline from organic search worldwide.",
  scope: "global B2B", featuresTitle: "Our Global B2B SEO Approach",
  featuresSubtitle: "International B2B SEO that generates qualified pipeline from decision-makers worldwide.",
  faqTitle: "Global B2B SEO - FAQs",
  ctaTitle: "Generate Global B2B Pipeline from Organic Search",
  ctaDesc: "Book a free consultation and we'll map a global B2B SEO strategy for your target markets.",
  ctaButton: "Get Free Consultation",
});

p("global-saas-seo", {
  keyword: "Global SaaS SEO", badge: "Global SaaS SEO Specialists",
  title: "Global SaaS SEO | SEODXB - International SaaS SEO Agency",
  metaDesc: "Global SaaS SEO from SEODXB. Category SEO, comparison and alternatives pages, and product-led content for SaaS businesses growing across international markets.",
  h1: "Global SaaS SEO: Acquire Customers from Search in Every Market",
  intro: "SaaS businesses compete globally from day one, with customers searching for software solutions across every country and language. Global SaaS SEO builds the category authority, comparison-page rankings, and product-led content that places your SaaS platform in front of the right buyers at the moment they are evaluating options. SEODXB delivers SaaS SEO that compounds into a sustainable global acquisition channel.",
  scope: "global SaaS", featuresTitle: "Our Global SaaS SEO Approach",
  featuresSubtitle: "Category SEO, product-led content, and comparison rankings for international SaaS growth.",
  faqTitle: "Global SaaS SEO - FAQs",
  ctaTitle: "Build Global SaaS Organic Acquisition",
  ctaDesc: "Book a free consultation and we'll map a global SaaS SEO strategy for your product.",
  ctaButton: "Get Free Consultation",
});

const globalIndustrySvcPages: [string, string, string, string][] = [
  ["global-fintech-seo", "Global Fintech SEO", "fintech businesses", "product SEO, regulatory compliance content, and trust-building authority for international fintech audiences"],
  ["global-healthcare-seo", "Global Healthcare SEO", "healthcare providers and medical businesses", "E-E-A-T medical content, treatment SEO, and patient-facing visibility across international markets"],
  ["global-hospitality-seo", "Global Hospitality SEO", "hotels, resorts, and hospitality brands", "direct-booking SEO, destination content, and AI travel citation building across international markets"],
  ["global-real-estate-seo", "Global Real Estate SEO", "real estate developers and agencies", "property and community SEO, off-plan keyword targeting, and AI property search citations worldwide"],
  ["global-education-seo", "Global Education SEO", "international schools, universities, and online education providers", "admissions content, programme SEO, and reputation-driven rankings for global student audiences"],
  ["global-legal-seo", "Global Legal SEO", "international law firms and legal services businesses", "practice-area content, jurisdiction signals, and high-value legal keyword authority across markets"],
  ["global-manufacturing-seo", "Global Manufacturing SEO", "manufacturers and industrial businesses", "product capability SEO, B2B lead generation, and export-market keyword targeting worldwide"],
  ["global-nonprofit-seo", "Global Nonprofit SEO", "nonprofits and charitable organisations", "cause and impact content, donation-funnel SEO, and grant-relevant visibility across international audiences"],
  ["global-startup-seo", "Global Startup SEO", "early-stage and growth startups", "category SEO, founder-led content, and fast-compounding organic growth across international launch markets"],
  ["global-shopify-seo", "Global Shopify SEO", "Shopify merchants selling internationally", "international Shopify architecture, multilingual product SEO, and cross-border shopping schema"],
  ["global-wordpress-seo", "Global WordPress SEO", "WordPress websites targeting international audiences", "multilingual WordPress architecture, technical optimisation, and international content strategy"],
];

globalIndustrySvcPages.forEach(([slug, keyword, audience, angle]) => {
  p(slug, {
    keyword, badge: `${keyword} Specialists`,
    title: `${keyword} | SEODXB - International SEO for ${audience.split(" ")[0].charAt(0).toUpperCase() + audience.split(" ")[0].slice(1)} Businesses`,
    metaDesc: `${keyword} from SEODXB. Specialist international SEO for ${audience}, focused on ${angle}. Transparent pricing, global delivery.`,
    h1: `${keyword}: International Organic Growth for ${audience.charAt(0).toUpperCase() + audience.slice(1)}`,
    intro: `${audience.charAt(0).toUpperCase() + audience.slice(1)} face unique international SEO challenges. SEODXB delivers ${keyword.toLowerCase()} focused on ${angle}, combining technical precision, multilingual content, and AI search optimisation to build organic visibility and qualified traffic across every target market.`,
    scope: "global", featuresTitle: `Our ${keyword} Approach`,
    featuresSubtitle: `Specialist ${keyword.toLowerCase()} built for the unique demands of ${audience} operating internationally.`,
    faqTitle: `${keyword} - FAQs`,
    ctaTitle: `Scale Your International ${keyword.split(" ")[1]} Growth`,
    ctaDesc: `Book a free consultation and we'll map a ${keyword.toLowerCase()} strategy for your target markets.`,
    ctaButton: "Get Free Consultation",
  });
});

// ============================================================
// CATEGORY 2: AI and emerging search (25 pages)
// ============================================================

const aiSearchPages: [string, string, string, string][] = [
  ["aeo-services", "Answer Engine Optimisation Services", "featured snippets, People Also Ask, and voice-search answer targeting", "brands that want to be the answer Google and AI engines surface for high-intent queries"],
  ["geo-services", "Generative Engine Optimisation Services", "brand entity building so AI tools cite and recommend your business", "brands that want to be recommended by ChatGPT, Perplexity, and Gemini"],
  ["chatgpt-seo", "ChatGPT SEO Optimisation", "structured entity and brand authority signals that make ChatGPT cite and recommend your brand", "businesses that want to appear in ChatGPT answers and recommendations"],
  ["perplexity-seo", "Perplexity AI SEO", "source authority, citation signals, and structured content that earns Perplexity AI references", "businesses that want to be cited and ranked within Perplexity AI search results"],
  ["gemini-seo", "Google Gemini SEO", "E-E-A-T content, Knowledge Graph presence, and structured data that earns Gemini recommendations", "brands that want to be recommended by Google's Gemini AI model"],
  ["google-ai-overview-seo", "Google AI Overview SEO", "answer-first content, schema markup, and authority signals that earn Google AI Overview placement", "businesses that want to appear in Google's AI-generated overview results"],
  ["ai-search-optimisation", "AI Search Optimisation", "holistic AI search strategy covering ChatGPT, Perplexity, Gemini, and Google AI Overviews", "brands that want comprehensive visibility across all major AI search platforms"],
  ["voice-search-seo", "Voice Search SEO", "conversational keyword targeting, featured snippets, and natural language content for voice queries", "businesses that want to be found through Siri, Alexa, Google Assistant, and voice search"],
  ["featured-snippet-seo", "Featured Snippet Optimisation", "answer-first content structure, schema markup, and query targeting that earns featured snippet positions", "businesses that want to own position zero in Google search results"],
  ["zero-click-seo", "Zero-Click Search SEO", "featured snippets, knowledge panels, and structured content that captures zero-click search visibility", "brands that want visibility and authority even when users never click through"],
  ["entity-seo", "Entity-Based SEO", "entity recognition, Knowledge Graph building, and semantic relationship mapping for search engines", "businesses that want Google to understand and classify their brand accurately"],
  ["semantic-seo-services", "Semantic SEO Services", "topical authority, semantic keyword clustering, and entity-rich content that satisfies search intent deeply", "businesses that want to build genuine topical authority and rank for entire subject areas"],
  ["structured-data-seo", "Structured Data and Schema SEO", "schema markup implementation, rich result testing, and structured data strategy for enhanced search visibility", "businesses that want rich results, featured snippets, and AI engine citations"],
  ["knowledge-graph-seo", "Knowledge Graph SEO", "Google Knowledge Graph entity building, Wikipedia and Wikidata signals, and brand entity authority", "businesses that want their brand accurately represented and amplified in the Knowledge Graph"],
  ["e-e-a-t-seo", "E-E-A-T SEO Services", "Experience, Expertise, Authoritativeness, and Trustworthiness signals that satisfy Google's quality rater guidelines", "businesses in YMYL sectors where trust and expertise signals are essential for rankings"],
  ["topical-authority-seo", "Topical Authority SEO", "content cluster architecture, pillar page strategy, and comprehensive topic coverage that earns topical authority", "businesses that want to be recognised by Google as the definitive source on their subject"],
  ["llm-seo-optimisation", "LLM SEO Optimisation", "brand entity building and structured content that influences how large language models represent and recommend your brand", "businesses that want to shape how LLMs like ChatGPT and Claude describe them"],
  ["ai-overviews-strategy", "AI Overviews Strategy", "content and authority signals tailored to earning placement in Google's AI-generated overview summaries", "businesses that want a structured plan to capture Google AI Overview real estate"],
  ["search-generative-experience", "Search Generative Experience SEO", "SGE-ready content, structured data, and authority signals aligned with Google's generative search interface", "businesses optimising for Google's ongoing shift toward AI-generated search experiences"],
  ["answer-box-seo", "Answer Box and PAA SEO", "direct-answer content structures and People Also Ask targeting that earns answer box and PAA placement", "businesses that want to dominate the answer box and People Also Ask sections in Google"],
  ["bing-copilot-seo", "Bing Copilot SEO", "content and authority signals that earn citations and recommendations from Microsoft's Bing Copilot AI", "businesses that want visibility in Microsoft's growing AI search ecosystem"],
  ["apple-search-seo", "Apple Search and Siri SEO", "structured data and content signals that earn Siri and Apple Search recommendations", "businesses that want to be discovered through Apple's search and voice assistant ecosystem"],
  ["amazon-alexa-seo", "Amazon Alexa SEO Visibility", "voice-optimised content and structured answer formats that earn Alexa voice search responses", "businesses that want to be recommended through Amazon Alexa voice queries"],
  ["ai-seo-agency", "AI SEO Agency", "a comprehensive AI search strategy covering AEO, GEO, and optimisation across all major AI search platforms", "businesses that want a single specialist team to handle all AI search optimisation"],
  ["future-of-seo", "Future of SEO Services", "forward-looking SEO strategy covering AI search, voice, zero-click, and the evolving search landscape", "businesses that want to stay ahead of search evolution rather than scramble to catch up"],
];

aiSearchPages.forEach(([slug, keyword, angle, audience]) => {
  p(slug, {
    keyword, badge: `${keyword} Specialists`,
    title: `${keyword} | SEODXB - AI and Emerging Search Optimisation`,
    metaDesc: `${keyword} from SEODXB. Specialist ${keyword.toLowerCase()} focused on ${angle}. Built for ${audience}.`,
    h1: `${keyword}: Future-Proof Your Search Visibility`,
    intro: `Search is evolving beyond the traditional blue link. SEODXB delivers ${keyword.toLowerCase()} built around ${angle}. We work with ${audience} to build the content authority, structured data signals, and entity presence that earns visibility across both traditional Google rankings and the next generation of AI-powered search surfaces.`,
    scope: "AI and emerging search", featuresTitle: `Our ${keyword} Approach`,
    featuresSubtitle: `Specialist ${keyword.toLowerCase()} that keeps your brand visible as search evolves.`,
    faqTitle: `${keyword} - FAQs`,
    ctaTitle: `Future-Proof Your Search Visibility`,
    ctaDesc: `Book a free consultation and we'll map a ${keyword.toLowerCase()} strategy for your business.`,
    ctaButton: "Get Free Consultation",
  });
});

// ============================================================
// CATEGORY 3: Technical and platform SEO (25 pages)
// ============================================================

const technicalSeoPages: [string, string, string][] = [
  ["core-web-vitals-seo", "Core Web Vitals Optimisation", "LCP, CLS, and INP fixes that improve page experience scores and unlock rankings held back by poor performance"],
  ["page-speed-seo", "Page Speed SEO", "server response time, render-blocking resources, image optimisation, and CDN configuration that accelerates pages and rankings"],
  ["javascript-seo", "JavaScript SEO", "rendering diagnosis, dynamic content indexation, and JavaScript framework SEO for sites that depend on client-side rendering"],
  ["headless-seo", "Headless CMS SEO", "SEO architecture for headless CMS implementations, ensuring crawlability, indexation, and performance for decoupled front-ends"],
  ["progressive-web-app-seo", "PWA SEO", "service worker SEO considerations, PWA indexation, and performance optimisation for progressive web applications"],
  ["mobile-seo", "Mobile SEO Services", "mobile-first indexing readiness, responsive design SEO, and mobile UX optimisation that improves rankings on smartphones"],
  ["shopify-seo-agency", "Shopify SEO Agency", "Shopify-specific technical fixes, product and collection SEO, and content strategy that drives organic sales from Shopify stores"],
  ["wordpress-seo-agency", "WordPress SEO Agency", "WordPress technical optimisation, schema, Core Web Vitals, and content SEO for WordPress sites of every scale"],
  ["woocommerce-seo", "WooCommerce SEO", "WooCommerce product and category SEO, shopping schema, and technical fixes that drive organic ecommerce revenue"],
  ["magento-seo", "Magento SEO Services", "Magento crawl optimisation, faceted navigation control, and technical SEO for complex Magento ecommerce sites"],
  ["webflow-seo", "Webflow SEO Services", "Webflow-specific technical SEO, structured data, and content strategy for sites built on the Webflow platform"],
  ["contentful-seo", "Contentful CMS SEO", "SEO architecture and content strategy for Contentful-powered sites, ensuring structured data, meta data, and performance at scale"],
  ["next-js-seo", "Next.js SEO Services", "SSR and SSG SEO for Next.js applications, including rendering diagnosis, metadata, and structured data implementation"],
  ["react-seo", "React SEO Services", "client-side React SEO, hydration optimisation, and indexation strategies for React-based single page and server-rendered applications"],
  ["vue-seo", "Vue.js SEO Services", "Vue.js rendering SEO, Nuxt.js optimisation, and indexation strategies for Vue-based applications"],
  ["angular-seo", "Angular SEO Services", "Angular Universal SEO, pre-rendering strategy, and indexation fixes for Angular applications"],
  ["site-migration-seo", "SEO Site Migration", "redirect mapping, crawl preservation, and post-migration monitoring that protects rankings through domain and platform changes"],
  ["seo-for-apps", "App Store SEO and Mobile App SEO", "App Store Optimisation, Google Play SEO, and app indexation strategies that improve mobile app discoverability"],
  ["international-seo-hreflang", "International Hreflang Implementation", "technically precise hreflang tag implementation, error detection, and ongoing monitoring for international websites"],
  ["crawl-budget-seo", "Crawl Budget Optimisation", "crawl budget analysis, URL parameter management, and site architecture improvements that maximise Googlebot efficiency"],
  ["log-file-analysis-seo", "Log File Analysis SEO", "server log analysis revealing how Googlebot actually crawls your site and identifying indexation and budget issues"],
  ["seo-for-large-sites", "SEO for Large Sites", "scalable SEO architecture, template optimisation, and automated quality monitoring for sites with hundreds of thousands of pages"],
  ["faceted-navigation-seo", "Faceted Navigation SEO", "parameter handling, canonical strategy, and crawl control for ecommerce faceted navigation that prevents duplicate content and crawl waste"],
  ["seo-for-infinite-scroll", "Infinite Scroll SEO", "pagination SEO, infinite scroll indexation, and content accessibility solutions for scroll-based website architectures"],
  ["pagination-seo", "Pagination and Canonicalisation SEO", "rel-next and canonical implementation, paginated content strategy, and duplicate content prevention for multi-page content"],
];

technicalSeoPages.forEach(([slug, keyword, angle]) => {
  p(slug, {
    keyword, badge: `${keyword} Specialists`,
    title: `${keyword} | SEODXB - Technical SEO Experts`,
    metaDesc: `${keyword} from SEODXB. Specialist ${keyword.toLowerCase()} covering ${angle}. Transparent pricing, global delivery, no contracts.`,
    h1: `${keyword}: Technical SEO That Unlocks Rankings`,
    intro: `SEODXB delivers specialist ${keyword.toLowerCase()}, covering ${angle}. Technical SEO issues are often invisible, silently suppressing rankings while content and links do their best work. Our technical specialists diagnose the root causes, implement precise fixes, and monitor outcomes so your site performs at its technical ceiling in every market.`,
    scope: "technical SEO", featuresTitle: `Our ${keyword} Approach`,
    featuresSubtitle: `Specialist ${keyword.toLowerCase()} combined with full-stack SEO, AEO, and GEO.`,
    faqTitle: `${keyword} - FAQs`,
    ctaTitle: `Fix Your Technical SEO and Unlock Rankings`,
    ctaDesc: `Book a free consultation and we'll diagnose your most impactful technical SEO issues.`,
    ctaButton: "Get Free Technical Audit",
  });
});

// ============================================================
// CATEGORY 4: Commercial and comparison (25 pages)
// ============================================================

const commercialPages: [string, string, string, string][] = [
  ["seo-vs-ppc", "SEO vs PPC - Which Is Better", "a data-driven comparison of SEO and PPC covering costs, timelines, ROI, and when each channel makes strategic sense", "businesses deciding how to allocate their digital marketing budget between organic and paid"],
  ["seo-vs-content-marketing", "SEO vs Content Marketing", "how SEO and content marketing work together, where they differ, and how to integrate them for compounding organic growth", "businesses building an organic growth strategy and weighing channel priorities"],
  ["white-label-seo-agency", "White Label SEO Agency", "seamless, branded SEO delivery with client-ready reporting for agencies that want to offer expert SEO under their own brand", "digital agencies that want to add or scale SEO services without building an in-house team"],
  ["seo-reseller-program", "SEO Reseller Programme", "white-label SEO fulfilment, agency partner reporting, and flexible reseller arrangements for agencies worldwide", "agencies and consultants that want to resell expert SEO services to their clients"],
  ["seo-outsourcing", "SEO Outsourcing Services", "fully managed SEO outsourcing with specialist execution, transparent reporting, and flexible engagement models", "businesses and agencies that want to outsource SEO execution to a specialist team"],
  ["seo-consulting", "SEO Consulting Services", "expert SEO consulting covering strategy, audits, technical direction, and hands-on implementation support", "businesses that want senior SEO expertise without a full-service retainer"],
  ["seo-for-agencies", "SEO Services for Agencies", "white-label and partner SEO services for digital agencies that need expert SEO delivery for their clients", "digital, PR, and marketing agencies looking for a reliable SEO delivery partner"],
  ["seo-pricing", "SEO Pricing and Costs", "transparent SEO pricing plans from $999/mo, covering what each plan includes and how to choose the right level for your goals", "businesses researching SEO costs before committing to an agency"],
  ["how-much-does-seo-cost", "How Much Does SEO Cost", "a clear breakdown of SEO costs by plan, scope, and market, so businesses can budget accurately and avoid surprise fees", "business owners and marketing managers researching SEO investment levels"],
  ["seo-roi-calculator", "SEO ROI and Results", "how to measure SEO return on investment, benchmark realistic results, and build an ROI case for organic search investment", "businesses that need to quantify and present the business case for SEO"],
  ["seo-agency-vs-freelancer", "SEO Agency vs Freelancer", "a practical comparison of hiring an SEO agency versus a freelancer, covering cost, capability, risk, and results", "businesses deciding between agency and freelance SEO support"],
  ["affordable-seo-services", "Affordable SEO Services", "genuinely affordable SEO that delivers real rankings and leads, starting from $999/mo with no contracts and no hidden fees", "small businesses and startups that need effective SEO within a limited budget"],
  ["best-seo-agency", "Best SEO Agency", "what makes the best SEO agency, how to evaluate agencies, and why specialisation and transparency matter more than size", "businesses searching for a reliable, results-focused SEO partner"],
  ["top-seo-company", "Top SEO Company", "the qualities that define a top SEO company and how SEODXB combines specialist expertise, transparency, and measurable results", "businesses looking for a high-quality SEO company for a long-term engagement"],
  ["seo-company-reviews", "SEO Company Reviews and Ratings", "how to evaluate SEO company reviews, what signals indicate genuine results, and what questions to ask before hiring", "businesses researching SEO companies through reviews and comparison sites"],
  ["seo-case-studies", "SEO Case Studies and Results", "real SEO results from SEODXB clients across industries and markets, demonstrating the organic growth possible with the right strategy", "businesses that want proof of results before committing to an SEO engagement"],
  ["seo-reporting", "SEO Reporting and Analytics", "transparent, actionable SEO reporting covering rankings, traffic, leads, and ROI delivered in clear monthly dashboards", "businesses and stakeholders that need clear visibility into SEO performance"],
  ["seo-strategy-consulting", "SEO Strategy Consulting", "senior SEO strategy consulting covering market opportunity, competitive analysis, content architecture, and growth roadmaps", "businesses that need expert strategic SEO direction before or alongside execution"],
  ["fractional-seo", "Fractional SEO Services", "fractional SEO leadership providing senior SEO strategy and oversight for businesses that need expertise without a full-time hire", "businesses that need senior SEO capability without the cost of a full-time SEO director"],
  ["seo-team-augmentation", "SEO Team Augmentation", "specialist SEO resources embedded in your existing team to fill capability gaps and accelerate organic growth programmes", "in-house SEO teams that need specialist skill augmentation for complex projects"],
  ["on-demand-seo", "On-Demand SEO Services", "flexible, project-based SEO services for specific needs, without the commitment of a monthly retainer", "businesses with specific one-off SEO needs or seasonal organic growth requirements"],
  ["seo-sprint", "SEO Sprint Services", "focused, time-boxed SEO sprint programmes that deliver concentrated technical, content, or link-building impact in a defined period", "businesses that want rapid, focused SEO execution around a specific opportunity or deadline"],
  ["seo-for-small-business", "SEO for Small Business", "practical, ROI-focused SEO for small businesses that want to rank locally and organically without enterprise-level budgets", "small business owners looking for affordable, effective SEO to compete with larger brands"],
  ["seo-for-medium-business", "SEO for Medium Business", "scalable SEO for medium-sized businesses ready to invest seriously in organic growth and outcompete larger incumbents", "medium-sized businesses building a serious organic growth programme"],
  ["seo-for-enterprise", "Enterprise SEO Services", "large-scale SEO governance, technical architecture, and content programmes for enterprise organisations with complex websites", "enterprise organisations that need SEO at the scale and sophistication their size demands"],
];

commercialPages.forEach(([slug, keyword, angle, audience]) => {
  p(slug, {
    keyword, badge: keyword,
    title: `${keyword} | SEODXB`,
    metaDesc: `${keyword} from SEODXB: ${angle}. No contracts, transparent pricing, global delivery.`,
    h1: keyword,
    intro: `SEODXB delivers ${keyword.toLowerCase()} focused on ${angle}. We work with ${audience} to build organic search visibility that generates real business results, combining technical SEO, content strategy, and AI search optimisation without the complexity or cost of oversized agencies.`,
    scope: "SEO", featuresTitle: `What Our ${keyword} Includes`,
    featuresSubtitle: `Specialist expertise covering every dimension of ${keyword.toLowerCase()}.`,
    faqTitle: `${keyword} - Common Questions`,
    ctaTitle: `Get Started with ${keyword.split(" ").slice(0, 3).join(" ")}`,
    ctaDesc: `Book a free consultation and we'll show you exactly what ${keyword.toLowerCase()} can deliver for your business.`,
    ctaButton: "Get Free Consultation",
  });
});

// ============================================================
// CATEGORY 5: Industry global agencies (25 pages)
// ============================================================

const industryAgencyPages: [string, string, string, string][] = [
  ["saas-seo-agency", "SaaS SEO Agency", "SaaS businesses growing organic acquisition globally", "category SEO, comparison and alternatives pages, and product-led content that drives SaaS trials and demos"],
  ["b2b-seo-agency", "B2B SEO Agency", "B2B businesses generating pipeline from search", "demand generation content, thought leadership SEO, and intent-based keyword targeting for B2B buyers"],
  ["ecommerce-seo-agency", "Ecommerce SEO Agency", "online stores driving organic revenue", "product and category SEO, shopping schema, and conversion-focused technical optimisation for ecommerce"],
  ["fintech-seo-agency", "Fintech SEO Agency", "fintech companies building organic visibility and trust", "product SEO, compliance-aligned content, and category authority that positions fintech platforms as trusted solutions"],
  ["healthcare-seo-agency", "Healthcare SEO Agency", "healthcare providers and medical businesses", "E-E-A-T medical content, treatment SEO, and patient-facing local visibility for healthcare organisations"],
  ["legal-seo-agency", "Legal SEO Agency", "law firms and legal services businesses", "practice-area content, E-E-A-T author signals, and high-value legal keyword rankings that bring qualified client enquiries"],
  ["real-estate-seo-agency", "Real Estate SEO Agency", "real estate developers, agencies, and portals", "project and community SEO, off-plan keyword targeting, and AI property search citations for property businesses"],
  ["hospitality-seo-agency", "Hospitality SEO Agency", "hotels, resorts, and hospitality brands", "direct-booking SEO, destination content, and AI travel citation building that reduces OTA dependency"],
  ["education-seo-agency", "Education SEO Agency", "schools, universities, and online education providers", "admissions content, programme SEO, and reputation-driven rankings that attract students globally"],
  ["nonprofit-seo-agency", "Nonprofit SEO Agency", "nonprofits and charitable organisations", "cause and impact content, donation-funnel SEO, and grant-relevant visibility for mission-driven organisations"],
  ["startup-seo-agency", "Startup SEO Agency", "early-stage and growth startups building organic traction", "category SEO, founder-led thought leadership, and fast-compounding organic growth from launch"],
  ["construction-seo-agency", "Construction SEO Agency", "construction companies and contractors", "project portfolio SEO, capability-page ranking, and B2B lead capture for construction businesses"],
  ["manufacturing-seo-agency", "Manufacturing SEO Agency", "manufacturers and industrial businesses", "product and capability SEO, B2B lead generation, and export-market keyword targeting for manufacturers"],
  ["automotive-seo-agency", "Automotive SEO Agency", "car dealerships, manufacturers, and automotive services", "inventory and model-page SEO, local dealership Map Pack, and lead-capture optimisation for automotive businesses"],
  ["travel-seo-agency", "Travel SEO Agency", "travel operators, OTAs, and destination businesses", "destination and package SEO, itinerary content, and AI travel visibility for travel businesses"],
  ["insurance-seo-agency", "Insurance SEO Agency", "insurance providers and brokers", "policy and comparison content, intent keyword targeting, and lead funnels for insurance businesses"],
  ["banking-seo-agency", "Banking and Finance SEO Agency", "banks, financial services, and wealth management businesses", "product SEO, financial E-E-A-T, and high-intent banking keyword rankings for financial services"],
  ["media-seo-agency", "Media and Publishing SEO Agency", "media companies, publishers, and content businesses", "news SEO, audience growth content, and Google News optimisation for media and publishing organisations"],
  ["technology-seo-agency", "Technology Company SEO", "technology companies and IT service providers", "product and solution SEO, thought-leadership content, and B2B category authority for technology businesses"],
  ["professional-services-seo", "Professional Services SEO", "professional services firms across consulting, accounting, and advisory", "service-page SEO, credentials content, and authority-building for professional services firms"],
  ["consulting-seo-agency", "Consulting Firm SEO", "management and strategy consulting firms", "practice-area content, thought leadership SEO, and high-value consulting keyword rankings"],
  ["accounting-seo-agency", "Accounting Firm SEO", "accounting, audit, and tax advisory firms", "service-page SEO, local Map Pack visibility, and trust-building content for accounting practices"],
  ["dental-seo-agency", "Dental Practice SEO", "dental practices and dental groups", "treatment-page SEO, local Map Pack rankings, and patient-acquisition content for dental businesses"],
  ["medical-seo-agency", "Medical Practice SEO", "medical practices and healthcare clinics", "treatment SEO, E-E-A-T medical content, and Map Pack visibility for medical and clinical practices"],
  ["law-firm-seo-agency", "Law Firm SEO Agency", "law firms of all sizes and practice areas", "practice-area content, jurisdiction-specific keyword rankings, and E-E-A-T signals for law firm organic growth"],
];

industryAgencyPages.forEach(([slug, keyword, audience, angle]) => {
  p(slug, {
    keyword, badge: keyword,
    title: `${keyword} | SEODXB - Specialist ${keyword.split(" ")[0]} SEO`,
    metaDesc: `${keyword} from SEODXB. Specialist SEO for ${audience} focused on ${angle}. Transparent pricing, global delivery.`,
    h1: `${keyword}: Specialist SEO for ${audience.charAt(0).toUpperCase() + audience.slice(1)}`,
    intro: `SEODXB is a specialist ${keyword.toLowerCase()} serving ${audience}. We deliver SEO focused on ${angle}, combining technical precision, authority content, and AI search optimisation to build organic visibility that generates real business results, whether you are a local practice or a global organisation.`,
    scope: keyword.split(" ")[0].toLowerCase(), featuresTitle: `What Our ${keyword} Includes`,
    featuresSubtitle: `Specialist ${keyword.toLowerCase()} built for the unique demands of ${audience}.`,
    faqTitle: `${keyword} - FAQs`,
    ctaTitle: `Work With a Specialist ${keyword}`,
    ctaDesc: `Book a free consultation and we'll map an SEO strategy tailored to your ${keyword.split(" ")[0].toLowerCase()} business.`,
    ctaButton: "Get Free Consultation",
  });
});

// ============================================================
// CATEGORY 6: Content and link building (25 pages)
// ============================================================

const contentLinkPages: [string, string, string][] = [
  ["content-led-seo", "Content-Led SEO Strategy", "building organic growth through comprehensive content strategy, topical authority, and search-intent content at every funnel stage"],
  ["thought-leadership-seo", "Thought Leadership SEO", "executive and brand thought leadership content that earns rankings, AI citations, and authority across your industry"],
  ["pillar-content-seo", "Pillar Content and Content Clusters", "pillar page architecture and content cluster strategy that builds topical authority and compounding keyword coverage"],
  ["blog-seo-strategy", "Blog SEO Strategy", "blog content planning, keyword mapping, and publication strategy that turns a company blog into a serious organic traffic engine"],
  ["seo-copywriting", "SEO Copywriting Services", "search-intent copywriting for landing pages, service pages, and product pages that ranks and converts simultaneously"],
  ["seo-content-audit", "SEO Content Audit", "a systematic audit of existing content identifying quick wins, pruning candidates, and content gaps to fill for organic growth"],
  ["digital-pr-seo", "Digital PR and SEO", "PR-driven link acquisition and brand mentions that build domain authority and AI brand citation through high-authority press coverage"],
  ["link-building-agency", "Link Building Agency", "high-authority editorial backlinks from global press, industry publications, and subject-matter authorities that build domain credibility"],
  ["editorial-link-building", "Editorial Link Building", "natural, editorially placed backlinks earned through genuinely valuable content and journalist relationship-building"],
  ["guest-posting-seo", "Guest Posting and SEO", "targeted guest posting on authoritative industry publications that earns quality backlinks and brand visibility"],
  ["broken-link-building", "Broken Link Building", "identifying broken links on high-authority sites and replacing them with links to your relevant, high-quality content"],
  ["resource-page-link-building", "Resource Page Link Building", "earning placements on industry resource pages and curated link lists on authoritative websites in your niche"],
  ["pr-link-building", "PR-Based Link Building", "leveraging public relations campaigns, data studies, and news hooks to earn high-authority links from major publications"],
  ["link-audit-seo", "Link Audit and Disavow", "comprehensive backlink profile analysis identifying toxic links and managing disavow files to protect ranking stability"],
  ["competitor-backlink-analysis", "Competitor Backlink Analysis", "reverse-engineering competitor link profiles to identify link-building opportunities you have not yet captured"],
  ["anchor-text-seo", "Anchor Text Optimisation", "anchor text diversity analysis and optimisation that maximises link authority while maintaining a natural, Google-safe profile"],
  ["internal-linking-seo", "Internal Linking Strategy", "systematic internal link architecture that distributes PageRank efficiently and guides users through the optimal content journey"],
  ["seo-for-news", "News SEO and Google News", "news article optimisation, Google News inclusion, and structured data for media organisations and corporate newsrooms"],
  ["video-seo", "Video SEO and YouTube SEO", "video content optimisation, YouTube SEO, and structured data that earns video rich results in Google search"],
  ["podcast-seo", "Podcast SEO and Discoverability", "podcast content optimisation, show notes SEO, and platform discoverability strategies for podcast brands and networks"],
  ["image-seo", "Image SEO and Alt Text", "image optimisation, alt text strategy, and structured data that earns image search traffic and AI-cited visual content"],
  ["local-citation-building", "Local Citation Building", "building consistent business citations across directories, data aggregators, and industry platforms for local SEO authority"],
  ["nap-seo", "NAP Consistency and Local SEO", "Name, Address, and Phone number consistency auditing and correction across all online platforms and directories"],
  ["review-seo", "Review Management and SEO", "review acquisition strategy, response management, and review schema implementation that builds trust and improves local rankings"],
  ["local-link-building", "Local Link Building", "locally relevant backlinks from community organisations, local press, and regional industry platforms for local SEO authority"],
];

contentLinkPages.forEach(([slug, keyword, angle]) => {
  p(slug, {
    keyword, badge: `${keyword} Specialists`,
    title: `${keyword} | SEODXB - Content and Link Building Experts`,
    metaDesc: `${keyword} from SEODXB. Specialist ${keyword.toLowerCase()} focused on ${angle}. Transparent pricing, proven results.`,
    h1: `${keyword}: ${keyword.split(" ").length > 3 ? "Build Authority Through" : "Expert"} ${keyword.split(" ").slice(0, 2).join(" ")}`,
    intro: `SEODXB delivers specialist ${keyword.toLowerCase()} focused on ${angle}. Content and authority are the two pillars of lasting organic growth, and we treat both with the rigour and creativity they deserve, building search visibility that compounds month after month without relying on tactics that erode over time.`,
    scope: "content and link building", featuresTitle: `Our ${keyword} Approach`,
    featuresSubtitle: `Specialist ${keyword.toLowerCase()} integrated with full-funnel SEO and AI search optimisation.`,
    faqTitle: `${keyword} - FAQs`,
    ctaTitle: `Build Authority with ${keyword.split(" ").slice(0, 3).join(" ")}`,
    ctaDesc: `Book a free consultation and we'll map a ${keyword.toLowerCase()} strategy for your website.`,
    ctaButton: "Get Free Consultation",
  });
});

// ============================================================
// CATEGORY 7: Analytics and measurement (25 pages)
// ============================================================

const analyticsPages: [string, string, string][] = [
  ["seo-analytics", "SEO Analytics and Reporting", "comprehensive SEO performance tracking covering rankings, traffic, leads, and ROI in clear, actionable monthly reports"],
  ["google-analytics-seo", "Google Analytics SEO Integration", "GA4 configuration, organic channel attribution, and conversion tracking that connects SEO activity to business revenue"],
  ["google-search-console", "Google Search Console Optimisation", "maximising Search Console data for keyword insights, indexation monitoring, and Core Web Vitals tracking"],
  ["seo-kpi-tracking", "SEO KPI Tracking", "defining, tracking, and reporting the SEO KPIs that matter most for your business growth objectives"],
  ["rank-tracking", "Rank Tracking Services", "daily keyword rank tracking across desktop and mobile, local and international, with competitor benchmarking"],
  ["seo-dashboard", "SEO Dashboard and Reporting", "custom SEO dashboards that give stakeholders real-time visibility into rankings, traffic, and organic lead performance"],
  ["conversion-rate-seo", "SEO Conversion Rate Optimisation", "optimising organic landing pages for conversion to ensure SEO traffic translates into leads, trials, and sales"],
  ["seo-a-b-testing", "SEO A/B Testing", "controlled SEO experiments using Google's split testing methods to validate ranking improvements before full rollout"],
  ["competitor-seo-analysis", "Competitor SEO Analysis", "comprehensive competitor organic analysis revealing their keyword strategy, content gaps, and link-building approach"],
  ["keyword-gap-analysis", "Keyword Gap Analysis", "identifying keywords competitors rank for that you do not, mapping the highest-value gaps to close for organic growth"],
  ["seo-forecasting", "SEO Traffic Forecasting", "data-driven SEO traffic forecasting that quantifies the organic growth potential of your keyword and content investments"],
  ["technical-seo-audit-service", "Technical SEO Audit Service", "a deep technical SEO audit covering crawl, indexation, speed, schema, and architecture with a prioritised remediation plan"],
  ["content-gap-analysis", "Content Gap Analysis", "systematic identification of content topics your audience searches for that your site does not yet cover"],
  ["backlink-profile-analysis", "Backlink Profile Analysis", "comprehensive analysis of your link profile's quality, diversity, and growth opportunities versus competitors"],
  ["site-health-monitoring", "Site Health Monitoring", "ongoing automated monitoring of crawl errors, indexation issues, and performance regressions with alerts and remediation"],
  ["crawl-error-fixing", "Crawl Error Identification and Fixing", "identifying and resolving 404s, redirect chains, server errors, and crawl traps that waste crawl budget and harm rankings"],
  ["redirect-seo", "Redirect Management and SEO", "redirect auditing, chain resolution, and ongoing redirect management that preserves link equity and ranking stability"],
  ["canonical-seo", "Canonical Tag Management", "canonical implementation auditing and strategy to eliminate duplicate content signals and consolidate ranking authority"],
  ["robots-txt-seo", "Robots.txt and Crawl Control", "robots.txt optimisation and crawl directive strategy that ensures Googlebot focuses on your most valuable content"],
  ["xml-sitemap-seo", "XML Sitemap Optimisation", "sitemap architecture, coverage, and freshness optimisation that guides search engines to your most important pages"],
  ["schema-markup-seo", "Schema Markup Implementation", "comprehensive structured data implementation covering products, articles, FAQs, local business, and custom schema types"],
  ["rich-results-seo", "Rich Results and Featured Snippets", "structured data and content optimisation strategies that earn rich results, featured snippets, and enhanced SERP appearances"],
  ["google-business-profile-seo", "Google Business Profile Optimisation", "Google Business Profile setup, optimisation, post strategy, and Q-and-A management for local search dominance"],
  ["local-pack-seo", "Local Pack and Map Pack SEO", "local SEO strategy and Google Business Profile optimisation that earns Map Pack positions for local intent searches"],
  ["mobile-first-indexing", "Mobile-First Indexing SEO", "ensuring your site is fully optimised for mobile-first indexing, with parity between mobile and desktop content and performance"],
];

analyticsPages.forEach(([slug, keyword, angle]) => {
  p(slug, {
    keyword, badge: `${keyword} Specialists`,
    title: `${keyword} | SEODXB - SEO Analytics and Technical Experts`,
    metaDesc: `${keyword} from SEODXB. ${keyword} focused on ${angle}. Transparent, actionable, and tied to business results.`,
    h1: `${keyword}: Turn Data into Organic Growth Decisions`,
    intro: `SEODXB delivers specialist ${keyword.toLowerCase()} focused on ${angle}. Data without action is noise. We combine rigorous measurement with clear interpretation and decisive execution, ensuring every SEO insight translates into ranking improvements, traffic growth, and business revenue you can attribute and report on.`,
    scope: "SEO analytics", featuresTitle: `Our ${keyword} Approach`,
    featuresSubtitle: `Specialist ${keyword.toLowerCase()} that drives action, not just reporting.`,
    faqTitle: `${keyword} - FAQs`,
    ctaTitle: `Get Better Data from Your SEO Programme`,
    ctaDesc: `Book a free consultation and we'll show you how ${keyword.toLowerCase()} can improve your organic decision-making.`,
    ctaButton: "Get Free Consultation",
  });
});

// ============================================================
// CATEGORY 8: Emerging and special topics (25 pages)
// ============================================================

const emergingPages: [string, string, string][] = [
  ["seo-for-ecommerce-brands", "Ecommerce Brand SEO", "building brand authority and direct search demand for ecommerce brands alongside product and category SEO"],
  ["seo-for-subscription-businesses", "Subscription Business SEO", "organic acquisition SEO for subscription and recurring-revenue businesses, focused on trial and signup conversions"],
  ["seo-for-marketplace", "Marketplace SEO Strategy", "two-sided marketplace SEO covering both supply and demand keyword targeting, and programmatic content at scale"],
  ["seo-for-platform", "Platform Business SEO", "platform business organic growth covering multi-sided keyword strategy, network-effect content, and AI search visibility"],
  ["seo-for-scale", "SEO at Scale", "systematic, programmatic SEO strategy for businesses that need to build and maintain thousands of ranking pages efficiently"],
  ["seo-automation", "SEO Automation and Tools", "leveraging automation for SEO reporting, monitoring, content production, and technical fixes to accelerate organic growth at scale"],
  ["programmatic-seo", "Programmatic SEO Services", "data-driven programmatic SEO that generates hundreds of unique, valuable landing pages targeting long-tail keyword clusters"],
  ["seo-for-api", "API-Driven SEO", "API-first SEO architecture for businesses whose content and data are delivered via APIs, ensuring indexability and structured data"],
  ["headless-cms-seo", "Headless CMS SEO Strategy", "SEO architecture and performance strategy for businesses running decoupled headless CMS implementations"],
  ["jamstack-seo", "JAMstack SEO", "SEO for JAMstack sites covering static site generation, pre-rendering, structured data, and international routing"],
  ["spa-seo", "Single Page Application SEO", "SPA rendering diagnosis, dynamic rendering, and indexation strategy for JavaScript-heavy single page applications"],
  ["seo-for-pwa", "Progressive Web App SEO", "SEO considerations for Progressive Web Apps including service worker management and PWA indexation best practices"],
  ["seo-for-accelerated-pages", "AMP and Fast Page SEO", "fast-loading page strategy and AMP implementation for publishers and content businesses prioritising page experience"],
  ["seo-for-podcasters", "Podcast Brand SEO", "building organic search visibility for podcast brands through show notes SEO, episode content, and platform discoverability"],
  ["seo-for-influencers", "Influencer and Personal Brand SEO", "personal brand SEO and content strategy for influencers and public figures building searchable online presence"],
  ["seo-for-coaches", "Coaching Business SEO", "SEO for coaching and mentoring businesses, focused on programme pages, testimonials, and lead-generation content"],
  ["seo-for-consultants", "Consultant SEO Services", "SEO for independent consultants building authority, case study visibility, and inbound leads through organic search"],
  ["seo-for-freelancers", "Freelancer SEO Services", "affordable SEO for freelancers building an online portfolio, personal brand, and inbound client pipeline from search"],
  ["seo-for-solopreneurs", "Solopreneur SEO", "lean SEO strategies for solopreneurs that build durable organic visibility and qualified leads without a dedicated team"],
  ["seo-for-remote-teams", "Remote Business SEO", "SEO for fully remote businesses targeting distributed audiences across multiple geographic markets simultaneously"],
  ["seo-for-d2c-brands", "Direct-to-Consumer Brand SEO", "D2C brand SEO that builds direct organic demand, brand search volume, and reduces reliance on paid acquisition"],
  ["seo-for-marketplace-sellers", "Marketplace Seller SEO", "organic SEO for marketplace sellers building off-platform brand presence and direct traffic alongside marketplace listings"],
  ["seo-for-affiliates", "Affiliate SEO Strategy", "affiliate site SEO covering review content, comparison pages, and authority building for high-converting affiliate rankings"],
  ["seo-for-dropshipping", "Dropshipping SEO Strategy", "organic SEO for dropshipping businesses, building product and category rankings without manufacturer content duplication"],
  ["seo-for-amazon-sellers", "Amazon Seller SEO", "organic search visibility for Amazon sellers building a brand presence beyond the Amazon platform through Google SEO"],
];

emergingPages.forEach(([slug, keyword, angle]) => {
  p(slug, {
    keyword, badge: `${keyword} Specialists`,
    title: `${keyword} | SEODXB - Specialist SEO Services`,
    metaDesc: `${keyword} from SEODXB. Specialist SEO focused on ${angle}. Transparent pricing, proven results, no contracts.`,
    h1: `${keyword}: Organic Growth Built for Your Business Model`,
    intro: `SEODXB delivers specialist ${keyword.toLowerCase()} focused on ${angle}. Every business model has unique SEO demands, and generic strategies rarely capture the specific keyword patterns, content types, and technical requirements that drive results for your particular market and growth stage. We combine deep SEO expertise with understanding of your business model to build an organic programme that fits.`,
    scope: keyword.split(" ").slice(0, 2).join(" ").toLowerCase(),
    featuresTitle: `Our ${keyword} Approach`,
    featuresSubtitle: `Specialist ${keyword.toLowerCase()} integrated with technical SEO, content, and AI search optimisation.`,
    faqTitle: `${keyword} - FAQs`,
    ctaTitle: `Build ${keyword.split(" ").slice(0, 3).join(" ")} That Compounds`,
    ctaDesc: `Book a free consultation and we'll map an SEO strategy built around your specific business model and growth goals.`,
    ctaButton: "Get Free Consultation",
  });
});

export const globalKeywordPages: KeywordPageConfig[] = pages;
