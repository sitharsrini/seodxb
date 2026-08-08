import type { KeywordPageConfig } from "./keywordPages";

// Working Unsplash IDs (reused from existing pages so rendering is reliable)
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

// Deterministic index from slug for stable per-page variant selection
function pick(slug: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % mod;
}

interface Loc {
  name: string;
  type: "country" | "city";
  served: string;
  context: string;
  sectors: string;
}

const L: Record<string, Loc> = {
  // Saudi Arabia cities
  riyadh: {
    name: "Riyadh", type: "city", served: "Riyadh, Saudi Arabia",
    context: "Riyadh is Saudi Arabia's capital and business hub, home to major financial institutions, government ministries, and the headquarters of Saudi Aramco, SABIC, and the country's fastest-growing tech startups.",
    sectors: "finance, government, energy, and tech",
  },
  jeddah: {
    name: "Jeddah", type: "city", served: "Jeddah, Saudi Arabia",
    context: "Jeddah is Saudi Arabia's commercial capital and Red Sea gateway, with a dominant trading, retail, and hospitality economy and a growing startup and ecommerce market.",
    sectors: "trading, retail, hospitality, and ecommerce",
  },
  khobar: {
    name: "Al Khobar", type: "city", served: "Al Khobar, Saudi Arabia",
    context: "Al Khobar is the Eastern Province's commercial hub, serving the oil and gas industry alongside growing professional services and retail.",
    sectors: "oil and gas, professional services, and retail",
  },
  dammam: {
    name: "Dammam", type: "city", served: "Dammam, Saudi Arabia",
    context: "Dammam anchors the Eastern Province as Saudi Arabia's industrial and logistics gateway, with major port activity and a growing diversified services economy.",
    sectors: "logistics, manufacturing, professional services, and retail",
  },
  mecca: {
    name: "Mecca", type: "city", served: "Mecca, Saudi Arabia",
    context: "Mecca receives millions of pilgrims and religious visitors annually, driving massive demand for hospitality, transportation, and services businesses competing for search.",
    sectors: "hospitality, religious tourism, transportation, and retail",
  },
  medina: {
    name: "Medina", type: "city", served: "Medina, Saudi Arabia",
    context: "Medina is the second holiest city in Islam, with significant religious tourism, hospitality, and real estate demand driven by pilgrim traffic year-round.",
    sectors: "religious tourism, hospitality, real estate, and retail",
  },
  // Saudi Arabia national
  "saudi-arabia": {
    name: "Saudi Arabia", type: "country", served: "Saudi Arabia",
    context: "Saudi Arabia's Vision 2030 transformation is creating one of the world's fastest-growing digital economies, with massive investment in tech, entertainment, tourism, and non-oil sectors.",
    sectors: "tech, entertainment, tourism, and finance",
  },
  // Qatar
  doha: {
    name: "Doha", type: "city", served: "Doha, Qatar",
    context: "Doha is Qatar's capital and one of the fastest-growing cities in the GCC, with massive investment in tourism, hospitality, real estate, and diversification from its LNG-based economy.",
    sectors: "tourism, hospitality, real estate, and finance",
  },
  qatar: {
    name: "Qatar", type: "country", served: "Qatar",
    context: "Qatar's post-World Cup legacy is an ambitious economic diversification plan, with growing finance, tourism, education, and tech sectors requiring strong digital visibility.",
    sectors: "finance, tourism, education, and tech",
  },
  // Kuwait
  "kuwait-city": {
    name: "Kuwait City", type: "city", served: "Kuwait City, Kuwait",
    context: "Kuwait City is the financial and commercial heart of Kuwait, with a competitive professional services, retail, and hospitality market driven by a high-income consumer base.",
    sectors: "finance, professional services, retail, and hospitality",
  },
  kuwait: {
    name: "Kuwait", type: "country", served: "Kuwait",
    context: "Kuwait's wealthy consumer market and high smartphone penetration make organic search a critical channel for retail, services, and professional businesses.",
    sectors: "retail, finance, professional services, and hospitality",
  },
  // Bahrain
  manama: {
    name: "Manama", type: "city", served: "Manama, Bahrain",
    context: "Manama is Bahrain's capital and the region's financial hub for Islamic banking, fintech, and professional services, with a highly competitive commercial search market.",
    sectors: "finance, fintech, professional services, and tourism",
  },
  bahrain: {
    name: "Bahrain", type: "country", served: "Bahrain",
    context: "Bahrain's open economy, advanced fintech regulatory framework, and regional financial services position create strong search opportunities for B2B and professional services.",
    sectors: "fintech, finance, professional services, and tourism",
  },
  // Oman
  muscat: {
    name: "Muscat", type: "city", served: "Muscat, Oman",
    context: "Muscat is Oman's capital and commercial centre, with growing tourism, logistics, real estate, and professional services competing for search visibility.",
    sectors: "tourism, logistics, real estate, and professional services",
  },
  oman: {
    name: "Oman", type: "country", served: "Oman",
    context: "Oman's Vision 2040 diversification plan is expanding tourism, logistics, manufacturing, and tech sectors that increasingly rely on organic search for growth.",
    sectors: "tourism, logistics, manufacturing, and services",
  },
  // Jordan
  amman: {
    name: "Amman", type: "city", served: "Amman, Jordan",
    context: "Amman is the Levant's most business-friendly city, home to regional headquarters, a growing tech and startup ecosystem, and strong professional services demand.",
    sectors: "tech, professional services, finance, and tourism",
  },
  jordan: {
    name: "Jordan", type: "country", served: "Jordan",
    context: "Jordan's growing tech sector, regional business hub status, and educated English-speaking population create strong organic search opportunities for services and B2B companies.",
    sectors: "tech, professional services, tourism, and healthcare",
  },
};

interface Ind { name: string; pain: string; angle: string; }
const I: Record<string, Ind> = {
  "real-estate": {
    name: "Real Estate",
    pain: "buyers and investors research properties extensively across Google and AI tools before committing",
    angle: "project and community SEO, off-plan keyword targeting, and AI property search citations",
  },
  restaurants: {
    name: "Restaurants",
    pain: "diners choose restaurants from Google Search, Maps, and AI recommendations",
    angle: "Google Business Profile dominance, Arabic and English keyword targeting, and review-driven rankings",
  },
  healthcare: {
    name: "Healthcare",
    pain: "patients research providers, treatments, and specialist clinics across Google and AI tools",
    angle: "treatment content, E-E-A-T for Gulf medical standards, and Map Pack clinic visibility",
  },
  "law-firms": {
    name: "Law Firms",
    pain: "clients research law firms by practice area and expect authoritative expertise",
    angle: "practice-area content, jurisdiction-relevant signals, and high-value legal keyword ranking",
  },
  construction: {
    name: "Construction",
    pain: "developers and procurement teams vet contractors through online research before awarding contracts",
    angle: "project portfolio SEO, capability-page ranking, and B2B lead capture",
  },
  hotels: {
    name: "Hotels",
    pain: "travellers compare hotels across Google, OTAs, and AI trip planners before booking",
    angle: "direct-booking SEO, destination content, and reducing OTA commission dependency",
  },
  ecommerce: {
    name: "Ecommerce",
    pain: "shoppers start product research on Google and increasingly on AI shopping tools",
    angle: "product and category SEO, shopping schema for rich results, and AI commerce visibility",
  },
  fintech: {
    name: "Fintech",
    pain: "users and enterprises evaluate fintech platforms through search and AI comparison",
    angle: "product SEO, SAMA and CBB compliance content, and category-defining authority",
  },
  education: {
    name: "Education",
    pain: "students and parents research international schools and universities online first",
    angle: "admissions content, curriculum and FAQ schema, and reputation-driven rankings",
  },
  automotive: {
    name: "Automotive",
    pain: "vehicle buyers research models, prices, and dealers extensively online",
    angle: "inventory and model-page SEO, local dealership Map Pack, and lead-capture optimisation",
  },
  logistics: {
    name: "Logistics",
    pain: "shippers and businesses compare freight and fulfilment partners through search",
    angle: "service-page SEO, route and solution keywords, and B2B lead generation",
  },
  "oil-gas": {
    name: "Oil and Gas",
    pain: "procurement and partnership decisions begin with online supplier research",
    angle: "capability and compliance content, B2B keyword authority, and supplier-discovery visibility",
  },
  hospitality: {
    name: "Hospitality",
    pain: "travellers and event planners research and compare venues, resorts, and service providers online",
    angle: "destination and venue SEO, review-driven visibility, and AI travel citation building",
  },
  tourism: {
    name: "Tourism",
    pain: "tourists plan and book experiences online across Google and AI travel planners",
    angle: "destination content, experience-page SEO, and AI travel recommendation visibility",
  },
  tech: {
    name: "Technology",
    pain: "buyers and decision-makers evaluate tech products and services through online research",
    angle: "product and solution SEO, thought-leadership content, and B2B category authority",
  },
};

interface Svc { name: string; what: string; }
const SV: Record<string, Svc> = {
  technical: { name: "Technical SEO", what: "Core Web Vitals, crawlability, indexation, structured data, and site architecture" },
  "on-page": { name: "On-Page SEO", what: "titles, meta data, headings, content optimisation, and internal linking" },
  local: { name: "Local SEO", what: "Google Business Profile, Map Pack rankings, citations, and review management" },
  ecommerce: { name: "Ecommerce SEO", what: "product and category optimisation, schema for rich results, and conversion funnels" },
  "link-building": { name: "Link Building", what: "high-authority backlinks from Gulf, Arab, and English press, directories, and industry publications" },
  "content-marketing": { name: "Content Marketing", what: "search-intent content in Arabic and English, topical authority hubs, and AI-citable articles" },
  "seo-audit": { name: "SEO Audit", what: "a deep technical, content, and authority audit with a prioritised action plan" },
  arabic: { name: "Arabic SEO", what: "bilingual Arabic and English optimisation, hreflang, and culturally relevant GCC content" },
  ai: { name: "AI SEO", what: "optimisation for Google AI Overviews, ChatGPT, Perplexity, and Gemini" },
  aeo: { name: "Answer Engine Optimisation", what: "featured snippets, People Also Ask, and voice-search answer targeting" },
  geo: { name: "Generative Engine Optimisation", what: "brand entity building so AI tools cite and recommend you across the GCC" },
  enterprise: { name: "Enterprise SEO", what: "large-site SEO, governance, and multi-team organic programmes" },
};

const statSets: { value: string; label: string }[][] = [
  [{ value: "+312%", label: "Avg. Organic Growth" }, { value: "87+", label: "Page 1 Keywords" }, { value: "4.8x", label: "Average ROI" }, { value: "6 wks", label: "To First Rankings" }],
  [{ value: "+260%", label: "Qualified Leads" }, { value: "500+", label: "Keywords Tracked" }, { value: "92%", label: "Client Retention" }, { value: "8 wks", label: "First Results" }],
  [{ value: "3.4x", label: "Lead Increase" }, { value: "Top 3", label: "Map Pack Goal" }, { value: "+180%", label: "Local Visibility" }, { value: "24h", label: "Response Time" }],
  [{ value: "+295%", label: "Organic Traffic" }, { value: "100+", label: "GCC Businesses Helped" }, { value: "5.1x", label: "ROI" }, { value: "No.1", label: "Ranking Focus" }],
];

function features(label: string, scope: string): { title: string; desc: string }[] {
  return [
    { title: "Technical SEO Foundation", desc: `We fix the Core Web Vitals, crawl, indexation, and structured-data issues that quietly block ${label} from ranking, building the base every other gain depends on.` },
    { title: `${scope} Keyword Strategy`, desc: `We map the high-intent Arabic and English keywords your ${scope} customers actually search, across every stage of the buying journey, not just vanity head terms.` },
    { title: "Content That Ranks and Converts", desc: "Answer-first content structured for Google, featured snippets, and AI answer engines, written by specialists in both Arabic and English, never AI-spun filler." },
    { title: "Local and Map Pack SEO", desc: `Google Business Profile optimisation, citations, and review strategy to win the local Map Pack and near-me searches in ${scope}.` },
    { title: "AEO and GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend you, covering Arabic and English search alike." },
    { title: "Authority Link Building", desc: "High-quality backlinks from Gulf press, Arab business directories, and industry publications that build the domain authority Google rewards across the GCC." },
  ];
}

function baseFaqs(label: string, served: string): { q: string; a: string }[] {
  return [
    { q: `How much does ${label} cost?`, a: "SEODXB offers transparent plans: Startup at $999/mo, Business at $2,499/mo, and Enterprise at custom pricing, all with no lock-in contracts and no hidden fees. The right plan depends on your competition and growth goals." },
    { q: `How long does ${label} take to show results?`, a: "Most clients see measurable ranking movement within 6 to 10 weeks, with significant traffic and lead growth by month 3 to 6, depending on competition and execution pace." },
    { q: `Does SEODXB serve clients in ${served}?`, a: `Yes. SEODXB is based in Dubai and works with businesses across ${served} and the wider GCC, combining regional market knowledge with technical SEO, AEO, and GEO expertise for Arabic and English search.` },
    { q: "Do you optimise for AI search like ChatGPT and Google AI Overviews?", a: "Yes. Every SEODXB engagement includes AEO and GEO work so your brand is cited by AI answer engines and surfaced in AI Overviews in both Arabic and English." },
    { q: "Do you provide Arabic and English SEO?", a: "Yes. SEODXB delivers fully bilingual SEO strategies covering Arabic keyword research, hreflang implementation, and culturally relevant content for GCC markets." },
  ];
}

const variants: KeywordPageConfig["svgVariant"][] = ["serp", "analytics", "ai", "local", "audit", "growth"];

function make(slug: string, cfg: {
  keyword: string; badge: string; title: string; metaDesc: string; h1: string; intro: string;
  scope: string; served: string; featuresTitle: string; featuresSubtitle: string;
  faqs?: { q: string; a: string }[]; faqTitle: string; ctaTitle: string; ctaDesc: string; ctaButton: string;
}): KeywordPageConfig {
  return {
    slug, keyword: cfg.keyword, badge: cfg.badge, title: cfg.title, metaDesc: cfg.metaDesc,
    h1: cfg.h1, intro: cfg.intro, svgVariant: variants[pick(slug, variants.length)],
    imageUrl: img(pick(slug, IMAGES.length)),
    featuresTitle: cfg.featuresTitle, featuresSubtitle: cfg.featuresSubtitle,
    features: features(cfg.keyword, cfg.scope),
    stats: statSets[pick(slug, statSets.length)],
    faqTitle: cfg.faqTitle, faqs: cfg.faqs ?? baseFaqs(cfg.keyword, cfg.served),
    ctaTitle: cfg.ctaTitle, ctaDesc: cfg.ctaDesc, ctaButton: cfg.ctaButton, areaServed: cfg.served,
  };
}

const pages: KeywordPageConfig[] = [];

// ---- Location hub pages ----
function locHub(slug: string, locKey: string) {
  const l = L[locKey];
  const kw = `SEO ${l.name}`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `SEO Experts for ${l.name}`,
    title: `${kw} | SEODXB - SEO Agency in ${l.name}`,
    metaDesc: `SEODXB delivers SEO in ${l.name}: Google rankings, local Map Pack visibility, and AI search citations for ${l.sectors} businesses. No contracts, transparent pricing.`,
    h1: `${kw} That Grows Your Business in ${l.name}`,
    intro: `${l.context} SEODXB helps ${l.name} businesses rank on Google in Arabic and English, win the local Map Pack, and get cited by AI engines like ChatGPT and Perplexity. We pair technical SEO with content strategy and AI-era optimisation across ${l.sectors}.`,
    scope: l.name, served: l.served,
    featuresTitle: `What Our ${l.name} SEO Includes`,
    featuresSubtitle: `A complete organic growth programme tailored to the ${l.name} market and how customers there search in Arabic and English.`,
    faqTitle: `${kw} - Common Questions`,
    ctaTitle: `Ready to Rank in ${l.name}?`,
    ctaDesc: `Book a free SEO strategy call. We'll audit your site, study your ${l.name} competitors, and show you the fastest path to page one.`,
    ctaButton: "Get Your Free SEO Audit",
  }));
}

// ---- Industry x Location pages ----
function indLoc(slug: string, indKey: string, locKey: string) {
  const ind = I[indKey]; const l = L[locKey];
  const kw = `SEO for ${ind.name} in ${l.name}`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${ind.name} SEO in ${l.name}`,
    title: `${kw} | SEODXB - ${ind.name} SEO Specialists`,
    metaDesc: `Specialist SEO for ${ind.name.toLowerCase()} businesses in ${l.name}. SEODXB helps you rank on Google and AI engines where ${ind.pain}. Transparent pricing.`,
    h1: `${kw}: Get Found Where Your Customers Search`,
    intro: `In ${l.name}, ${ind.pain}. SEODXB delivers ${ind.name.toLowerCase()} SEO focused on ${ind.angle}. We combine technical SEO, bilingual Arabic and English content, local visibility, and AI search optimisation so your ${ind.name.toLowerCase()} business is the one customers find first.`,
    scope: `${ind.name} in ${l.name}`, served: l.served,
    featuresTitle: `${ind.name} SEO Built for ${l.name}`,
    featuresSubtitle: `Everything a ${ind.name.toLowerCase()} business in ${l.name} needs to rank, get cited by AI, and convert searchers into customers.`,
    faqTitle: `${ind.name} SEO in ${l.name} - FAQs`,
    ctaTitle: `Grow Your ${ind.name} Business in ${l.name}`,
    ctaDesc: `Book a free consultation. We'll show you exactly how to outrank competing ${ind.name.toLowerCase()} businesses in ${l.name} on Google and AI search.`,
    ctaButton: "Get Free Consultation",
  }));
}

// ---- Service x Location ----
function svcLoc(slug: string, svcKey: string, locKey: string) {
  const s = SV[svcKey]; const l = L[locKey];
  const kw = `${s.name} ${l.name}`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${s.name} in ${l.name}`,
    title: `${kw} | SEODXB - ${s.name} Services`,
    metaDesc: `${s.name} services in ${l.name} from SEODXB. We deliver ${s.what} to grow your rankings, traffic, and leads. Transparent pricing, no contracts.`,
    h1: `${kw}: ${s.name} That Delivers Results`,
    intro: `SEODXB provides specialist ${s.name.toLowerCase()} in ${l.name}, delivering ${s.what}. ${l.context} We make sure your business is found on Google in Arabic and English, and cited by AI engines across ${l.sectors}.`,
    scope: l.name, served: l.served,
    featuresTitle: `Our ${s.name} Approach in ${l.name}`,
    featuresSubtitle: `Specialist ${s.name.toLowerCase()} combined with full-funnel SEO, AEO, and GEO for ${l.name} businesses.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `Get ${s.name} in ${l.name}`,
    ctaDesc: `Book a free consultation. We'll assess your current setup and show you how ${s.name.toLowerCase()} can accelerate your growth in ${l.name}.`,
    ctaButton: "Get Free Consultation",
  }));
}

// ---- Service x Saudi Arabia (national) ----
function svcSaudi(slug: string, svcKey: string) {
  const s = SV[svcKey];
  const kw = `${s.name} Saudi Arabia`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${s.name} across Saudi Arabia`,
    title: `${kw} | SEODXB - ${s.name} for Saudi Businesses`,
    metaDesc: `${s.name} across Saudi Arabia from SEODXB. We deliver ${s.what} for businesses in Riyadh, Jeddah, Dammam, and beyond. Vision 2030 aligned. Transparent pricing.`,
    h1: `${kw}: ${s.name} for Businesses Across the Kingdom`,
    intro: `SEODXB delivers ${s.name.toLowerCase()} across Saudi Arabia, providing ${s.what}. Whether you operate in Riyadh, Jeddah, the Eastern Province, or nationwide, we build organic visibility on Google and AI engines in Arabic and English that compounds with Saudi Arabia's digital transformation under Vision 2030.`,
    scope: "Saudi Arabia", served: "Saudi Arabia",
    featuresTitle: `${s.name} Across Saudi Arabia`,
    featuresSubtitle: `Specialist ${s.name.toLowerCase()} integrated with full SEO, AEO, and GEO for Saudi businesses.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `Get ${s.name} for Your Saudi Business`,
    ctaDesc: `Book a free strategy call. We'll show you how ${s.name.toLowerCase()} fits into a nationwide organic growth plan for Saudi Arabia.`,
    ctaButton: "Get Free Strategy Call",
  }));
}

// ---- Commercial / intent pages (custom) ----
function commercial(slug: string, cfg: Parameters<typeof make>[1]) {
  pages.push(make(slug, cfg));
}

// ===== Build the ~200 GCC pages =====

// A. Country and city hubs (17)
const hubKeys: [string, string][] = [
  ["seo-riyadh", "riyadh"],
  ["seo-jeddah", "jeddah"],
  ["seo-khobar", "khobar"],
  ["seo-dammam", "dammam"],
  ["seo-mecca", "mecca"],
  ["seo-medina", "medina"],
  ["seo-saudi-arabia", "saudi-arabia"],
  ["seo-doha", "doha"],
  ["seo-qatar", "qatar"],
  ["seo-kuwait-city", "kuwait-city"],
  ["seo-kuwait", "kuwait"],
  ["seo-manama", "manama"],
  ["seo-bahrain", "bahrain"],
  ["seo-muscat", "muscat"],
  ["seo-oman", "oman"],
  ["seo-amman", "amman"],
  ["seo-jordan", "jordan"],
];
hubKeys.forEach(([slug, key]) => locHub(slug, key));

// B. Industry x Saudi cities (48 pages): 8 industries x 6 cities
const saudiCities = ["riyadh", "jeddah", "khobar", "dammam", "mecca", "medina"] as const;
const saudiInds = ["real-estate", "restaurants", "healthcare", "law-firms", "construction", "hotels", "ecommerce", "fintech"] as const;
saudiCities.forEach((city) => {
  saudiInds.forEach((ind) => {
    indLoc(`seo-for-${ind}-${city}`, ind, city);
  });
});

// C. Industry x Qatar/Kuwait/Bahrain/Oman/Jordan (30 pages): 6 industries x 5 cities
const gccCities = ["doha", "kuwait-city", "manama", "muscat", "amman"] as const;
const gccInds = ["real-estate", "healthcare", "hotels", "ecommerce", "fintech", "education"] as const;
gccCities.forEach((city) => {
  gccInds.forEach((ind) => {
    indLoc(`seo-for-${ind}-${city}`, ind, city);
  });
});

// D. Service x Saudi Arabia (12 pages)
const saudiSvcs = ["technical", "on-page", "local", "ecommerce", "link-building", "content-marketing", "seo-audit", "arabic", "ai", "aeo", "geo", "enterprise"] as const;
saudiSvcs.forEach((svc) => {
  svcSaudi(`${svc}-saudi-arabia`, svc);
});

// E. Service x GCC cities (15 pages): 3 services x 5 cities
const gccSvcCities = ["riyadh", "jeddah", "doha", "kuwait-city", "manama"] as const;
const gccSvcKeys = ["local", "technical", "arabic"] as const;
gccSvcCities.forEach((city) => {
  gccSvcKeys.forEach((svc) => {
    svcLoc(`${svc}-seo-${city}`, svc, city);
  });
});

// F. Commercial Saudi Arabia (25 pages)
commercial("seo-agency-saudi-arabia", {
  keyword: "SEO Agency Saudi Arabia", badge: "Saudi Arabia's Trusted SEO Agency",
  title: "SEO Agency Saudi Arabia | SEODXB - Top SEO Specialists",
  metaDesc: "SEODXB is a specialist SEO agency for Saudi Arabia. Google rankings, local Map Pack, and AI search citations for businesses in Riyadh, Jeddah, Dammam and beyond.",
  h1: "The SEO Agency Saudi Arabia Businesses Trust to Rank",
  intro: "SEODXB is a specialist SEO agency serving Saudi Arabia's fastest-growing sectors. With Vision 2030 accelerating digital adoption, organic search in Arabic and English is now a primary customer acquisition channel. We deliver technical SEO, bilingual content, local visibility, and AI optimisation for Saudi businesses aiming to lead their category online.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "What Makes SEODXB Saudi Arabia's SEO Choice",
  featuresSubtitle: "Proven SEO fundamentals combined with Vision 2030 digital strategy and Arabic-English bilingual expertise.",
  faqTitle: "SEO Agency Saudi Arabia - FAQs",
  ctaTitle: "Ready to Rank Across Saudi Arabia?",
  ctaDesc: "Book a free SEO strategy call. We'll audit your site and show you the fastest path to page one in Arabic and English search.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-company-saudi-arabia", {
  keyword: "SEO Company Saudi Arabia", badge: "Results-Driven SEO Company in Saudi Arabia",
  title: "SEO Company Saudi Arabia | SEODXB - Proven SEO Results",
  metaDesc: "SEODXB is a results-focused SEO company in Saudi Arabia. Google rankings, local visibility, and AI citations for Riyadh, Jeddah, and Eastern Province businesses.",
  h1: "Saudi Arabia's Results-Focused SEO Company",
  intro: "SEODXB is a dedicated SEO company serving Saudi Arabia, focused exclusively on organic search rather than diluting expertise across social, PPC, and design. We deliver bilingual Arabic and English SEO programmes that generate qualified leads for businesses across Riyadh, Jeddah, Dammam, and the wider Kingdom.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Why Choose SEODXB in Saudi Arabia",
  featuresSubtitle: "Specialist SEO expertise combined with deep knowledge of the Saudi market and Vision 2030 digital priorities.",
  faqTitle: "SEO Company Saudi Arabia - FAQs",
  ctaTitle: "Grow Your Saudi Business Online",
  ctaDesc: "Get a free SEO analysis showing your rankings, missed opportunities, and a roadmap to page one.",
  ctaButton: "Get Free SEO Analysis",
});

commercial("seo-services-saudi-arabia", {
  keyword: "SEO Services Saudi Arabia", badge: "Complete SEO Services in Saudi Arabia",
  title: "SEO Services Saudi Arabia | SEODXB - Full-Service SEO",
  metaDesc: "Complete SEO services in Saudi Arabia: technical SEO, Arabic content, link building, local SEO, AEO, and GEO. SEODXB delivers from $999/mo, no contracts.",
  h1: "Complete SEO Services for Saudi Arabia Businesses",
  intro: "SEODXB delivers the full spectrum of SEO services Saudi Arabia businesses need: technical foundations, bilingual Arabic and English content, authority link building from Gulf press, and AI answer engine optimisation. One specialist team covering Riyadh, Jeddah, Dammam, Mecca, and the wider Kingdom.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Our Full Range of Saudi Arabia SEO Services",
  featuresSubtitle: "Every service compounds, each component amplifying the others for exponential organic growth in Saudi Arabia.",
  faqTitle: "SEO Services Saudi Arabia - FAQs",
  ctaTitle: "Build Your Saudi Arabia SEO Programme",
  ctaDesc: "Book a free consultation and we'll design an SEO services plan tailored to your Saudi growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("best-seo-agency-saudi-arabia", {
  keyword: "Best SEO Agency Saudi Arabia", badge: "Among Saudi Arabia's Top SEO Agencies",
  title: "Best SEO Agency Saudi Arabia | SEODXB - Specialist SEO",
  metaDesc: "Looking for the best SEO agency in Saudi Arabia? SEODXB delivers proven Google rankings, bilingual Arabic-English SEO, and AI search visibility.",
  h1: "The Best SEO Agency in Saudi Arabia for Measurable Results",
  intro: "What separates the best SEO agency in Saudi Arabia from the rest? Specialisation, bilingual expertise, and verifiable results. SEODXB focuses exclusively on SEO, AEO, and GEO with deep Arabic-English market knowledge, delivering rankings and leads for businesses across the Kingdom.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Why SEODXB Ranks Among Saudi Arabia's Best",
  featuresSubtitle: "Specialist focus, transparent reporting, and a track record across Saudi markets.",
  faqTitle: "Best SEO Agency Saudi Arabia - FAQs",
  ctaTitle: "Work With a Top Saudi Arabia SEO Agency",
  ctaDesc: "Book a free strategy call and see why Saudi businesses choose SEODXB for organic growth.",
  ctaButton: "Get Free Strategy Call",
});

commercial("affordable-seo-saudi-arabia", {
  keyword: "Affordable SEO Saudi Arabia", badge: "Affordable SEO Across Saudi Arabia",
  title: "Affordable SEO Saudi Arabia | SEODXB - High-Value SEO from $999/mo",
  metaDesc: "Affordable SEO across Saudi Arabia from SEODXB, starting at $999/mo. Real rankings, AI search visibility, Arabic content, and qualified leads. No hidden fees.",
  h1: "Affordable SEO for Saudi Arabia Businesses That Actually Works",
  intro: "Affordable should never mean ineffective. SEODXB delivers genuinely affordable SEO across Saudi Arabia starting at $999/mo, focused on the high-intent Arabic and English keywords and AI visibility that generate real business leads, without the bloated retainers of full-service agencies.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "What Our Affordable Saudi Arabia SEO Includes",
  featuresSubtitle: "Real, results-focused SEO at a price that works for growing Saudi businesses.",
  faqTitle: "Affordable SEO Saudi Arabia - FAQs",
  ctaTitle: "Get Affordable SEO That Delivers in Saudi Arabia",
  ctaDesc: "Book a free consultation and we'll show you how much organic growth is possible within your budget.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-consultant-saudi-arabia", {
  keyword: "SEO Consultant Saudi Arabia", badge: "Expert SEO Consultant for Saudi Arabia",
  title: "SEO Consultant Saudi Arabia | SEODXB - Specialist SEO Consulting",
  metaDesc: "Work with a specialist SEO consultant for Saudi Arabia. SEODXB offers expert audits, bilingual Arabic-English strategy, and hands-on SEO, AEO, and GEO consulting.",
  h1: "Your Specialist SEO Consultant in Saudi Arabia",
  intro: "SEODXB provides senior SEO consulting for Saudi Arabia businesses that want expert strategy without a bloated agency overhead. You work directly with specialists on audits, technical fixes, bilingual content strategy, and AI search optimisation aligned with Saudi Arabia's Vision 2030 digital agenda.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "What Our Saudi Arabia SEO Consulting Covers",
  featuresSubtitle: "Senior, hands-on SEO consulting across technical, content, local, and AI search in Arabic and English.",
  faqTitle: "SEO Consultant Saudi Arabia - FAQs",
  ctaTitle: "Work With a Saudi Arabia SEO Consultant",
  ctaDesc: "Book a free consultation. We'll review your current performance and define your highest-impact SEO priorities.",
  ctaButton: "Book a Consultation",
});

commercial("digital-marketing-saudi-arabia", {
  keyword: "Digital Marketing Saudi Arabia", badge: "SEO-Led Digital Marketing in Saudi Arabia",
  title: "Digital Marketing Saudi Arabia | SEODXB - SEO-Led Growth",
  metaDesc: "SEO-led digital marketing in Saudi Arabia from SEODXB. Organic search, AEO, GEO, Arabic content, and link building that drives qualified leads without ad dependency.",
  h1: "SEO-Led Digital Marketing in Saudi Arabia",
  intro: "Most Saudi digital marketing burns budget on ads that stop the moment you pause spend. SEODXB takes an SEO-led approach: bilingual Arabic and English organic search, content, and AI optimisation that builds a compounding asset, generating leads long after the work is done, aligned with Vision 2030's push for a digital-first economy.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Our SEO-Led Digital Marketing in Saudi Arabia",
  featuresSubtitle: "Organic-first marketing that builds durable visibility across Arabic and English search.",
  faqTitle: "Digital Marketing Saudi Arabia - FAQs",
  ctaTitle: "Build Durable Growth in Saudi Arabia",
  ctaDesc: "Book a free consultation and we'll show you how SEO-led marketing outperforms ad-dependent strategies over time.",
  ctaButton: "Get Free Consultation",
});

commercial("arabic-seo-saudi-arabia", {
  keyword: "Arabic SEO Saudi Arabia", badge: "Specialist Arabic SEO for Saudi Arabia",
  title: "Arabic SEO Saudi Arabia | SEODXB - Bilingual SEO Experts",
  metaDesc: "Expert Arabic SEO in Saudi Arabia from SEODXB. Bilingual Arabic and English keyword strategy, hreflang, culturally relevant content, and AI search visibility.",
  h1: "Arabic SEO in Saudi Arabia: Bilingual Search Dominance",
  intro: "Arabic is the primary search language for millions of Saudi customers. SEODXB delivers specialist Arabic SEO in Saudi Arabia, combining Arabic keyword research, bilingual content, hreflang implementation, and culturally relevant Google Business Profile optimisation so your brand ranks and converts in both languages.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Our Arabic SEO Approach in Saudi Arabia",
  featuresSubtitle: "Fully bilingual SEO strategy built for Saudi Arabia's Arabic and English search landscape.",
  faqTitle: "Arabic SEO Saudi Arabia - FAQs",
  ctaTitle: "Dominate Arabic and English Search in Saudi Arabia",
  ctaDesc: "Book a free consultation and we'll map your bilingual SEO strategy for Saudi Arabia.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-vision-2030", {
  keyword: "SEO for Vision 2030", badge: "SEO Strategy Aligned with Vision 2030",
  title: "SEO for Vision 2030 | SEODXB - Digital Growth for Saudi Businesses",
  metaDesc: "SEO aligned with Saudi Arabia's Vision 2030. SEODXB helps businesses in tourism, tech, entertainment, and non-oil sectors capture digital growth opportunities.",
  h1: "SEO Built for Saudi Arabia's Vision 2030 Economy",
  intro: "Vision 2030 is rapidly diversifying Saudi Arabia's economy, creating new digital search demand in tourism, entertainment, tech, healthcare, and non-oil sectors. SEODXB helps Saudi businesses capture this growth with bilingual Arabic and English SEO strategies that position them as category leaders as the Kingdom's digital market accelerates.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "SEO That Captures Vision 2030 Growth Opportunities",
  featuresSubtitle: "Organic search strategies built for the sectors Saudi Vision 2030 is rapidly expanding.",
  faqTitle: "SEO for Vision 2030 - FAQs",
  ctaTitle: "Capture Vision 2030 Digital Growth",
  ctaDesc: "Book a free strategy call and we'll map the Vision 2030 search opportunities most relevant to your business.",
  ctaButton: "Get Free Strategy Call",
});

commercial("seo-for-startups-saudi-arabia", {
  keyword: "SEO for Startups Saudi Arabia", badge: "SEO Built for Saudi Startups",
  title: "SEO for Startups Saudi Arabia | SEODXB - Startup SEO",
  metaDesc: "SEO for startups in Saudi Arabia. SEODXB helps Saudi startups rank early, build topical authority, and capture search demand as Vision 2030 accelerates the ecosystem.",
  h1: "SEO for Saudi Arabia Startups: Build Your Category from Day One",
  intro: "Saudi Arabia's startup ecosystem is growing faster than most markets, and early organic visibility is a decisive competitive advantage. SEODXB helps Saudi startups build category SEO, thought-leadership content, and AI search presence from the ground up, compounding organic growth before competitors entrench themselves.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Startup SEO for the Saudi Market",
  featuresSubtitle: "Fast, focused SEO that helps Saudi startups build durable organic visibility from launch.",
  faqTitle: "SEO for Startups Saudi Arabia - FAQs",
  ctaTitle: "Build Your Saudi Startup's Organic Presence",
  ctaDesc: "Book a free consultation and we'll map the highest-impact SEO moves for your Saudi startup.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-riyadh", {
  keyword: "SEO for Real Estate Riyadh", badge: "Real Estate SEO in Riyadh",
  title: "SEO for Real Estate in Riyadh | SEODXB - Property SEO Specialists",
  metaDesc: "Specialist SEO for real estate businesses in Riyadh. SEODXB helps developers and agents rank on Google and AI tools for off-plan, villa, and apartment searches.",
  h1: "SEO for Real Estate in Riyadh: Get Found by Property Buyers",
  intro: "Riyadh's real estate market is booming under Vision 2030, with buyers and investors researching properties extensively across Google in Arabic and English before committing. SEODXB delivers specialist real estate SEO in Riyadh, focused on project and community page ranking, off-plan keyword targeting, and AI property search citations.",
  scope: "Real Estate in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Real Estate SEO Built for Riyadh",
  featuresSubtitle: "Everything a property business in Riyadh needs to rank and convert online buyers.",
  faqTitle: "Real Estate SEO Riyadh - FAQs",
  ctaTitle: "Grow Your Riyadh Property Business Online",
  ctaDesc: "Book a free consultation and we'll show you how to outrank competing developers and agents in Riyadh.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-ecommerce-saudi-arabia", {
  keyword: "SEO for Ecommerce Saudi Arabia", badge: "Ecommerce SEO Across Saudi Arabia",
  title: "SEO for Ecommerce Saudi Arabia | SEODXB - Ecommerce SEO Specialists",
  metaDesc: "Specialist ecommerce SEO for Saudi Arabia. SEODXB helps online stores rank on Google and AI tools in Arabic and English. Product SEO, schema, and conversion optimisation.",
  h1: "Ecommerce SEO for Saudi Arabia: Rank and Sell",
  intro: "Saudi Arabia's ecommerce market is one of the GCC's fastest-growing, with shoppers researching products across Google in Arabic and English before purchasing. SEODXB delivers ecommerce SEO built for Saudi Arabia: product and category SEO, shopping schema for rich results, and AI commerce visibility that drives sustainable organic revenue.",
  scope: "Ecommerce in Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Ecommerce SEO Built for Saudi Arabia",
  featuresSubtitle: "Product, category, and technical SEO that drives organic sales in the Saudi ecommerce market.",
  faqTitle: "Ecommerce SEO Saudi Arabia - FAQs",
  ctaTitle: "Grow Your Saudi Ecommerce Organically",
  ctaDesc: "Book a free consultation and we'll map an ecommerce SEO strategy that grows organic sales in Saudi Arabia.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-healthcare-riyadh", {
  keyword: "SEO for Healthcare in Riyadh", badge: "Healthcare SEO in Riyadh",
  title: "SEO for Healthcare in Riyadh | SEODXB - Medical SEO Specialists",
  metaDesc: "Specialist SEO for healthcare businesses in Riyadh. SEODXB helps clinics, hospitals, and specialists rank on Google and AI tools where patients search first.",
  h1: "SEO for Healthcare in Riyadh: Be Found by Patients First",
  intro: "Riyadh patients research providers, treatments, and specialist clinics across Google and AI tools before booking. SEODXB delivers healthcare SEO in Riyadh built around treatment content, E-E-A-T signals for Gulf medical standards, and local Map Pack clinic visibility that converts searches into appointments.",
  scope: "Healthcare in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Healthcare SEO Built for Riyadh",
  featuresSubtitle: "Medical SEO that builds patient trust, Map Pack visibility, and appointment-driving content.",
  faqTitle: "Healthcare SEO Riyadh - FAQs",
  ctaTitle: "Grow Your Riyadh Healthcare Practice Online",
  ctaDesc: "Book a free consultation and we'll map an SEO strategy that brings more patients to your practice.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-law-firms-riyadh", {
  keyword: "SEO for Law Firms in Riyadh", badge: "Law Firm SEO in Riyadh",
  title: "SEO for Law Firms in Riyadh | SEODXB - Legal SEO Specialists",
  metaDesc: "Specialist SEO for law firms in Riyadh. SEODXB helps legal practices rank for high-value practice area keywords in Arabic and English.",
  h1: "SEO for Law Firms in Riyadh: Rank for the Cases That Matter",
  intro: "Riyadh clients search for law firms by practice area across Google in Arabic and English, expecting authoritative answers before making contact. SEODXB delivers legal SEO in Riyadh built on practice-area content, jurisdiction-relevant authority signals, and high-value legal keyword ranking that brings qualified enquiries.",
  scope: "Law Firms in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Law Firm SEO Built for Riyadh",
  featuresSubtitle: "Legal SEO that positions your firm as the authoritative choice for Riyadh clients.",
  faqTitle: "Law Firm SEO Riyadh - FAQs",
  ctaTitle: "Grow Your Riyadh Law Firm Online",
  ctaDesc: "Book a free consultation and we'll map a legal SEO strategy for the Riyadh market.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-hotels-saudi-arabia", {
  keyword: "SEO for Hotels Saudi Arabia", badge: "Hotel SEO Across Saudi Arabia",
  title: "SEO for Hotels in Saudi Arabia | SEODXB - Hospitality SEO",
  metaDesc: "Specialist SEO for hotels in Saudi Arabia. SEODXB helps properties rank on Google and AI trip planners, driving direct bookings and reducing OTA dependency.",
  h1: "SEO for Hotels in Saudi Arabia: Drive Direct Bookings",
  intro: "Saudi Arabia's Vision 2030 tourism push is driving unprecedented hotel demand, but travellers compare properties across Google, OTAs, and AI trip planners before booking. SEODXB delivers hotel SEO across Saudi Arabia focused on direct-booking SEO, destination content, and AI travel citation building that reduces costly OTA commission dependency.",
  scope: "Hotels in Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Hotel SEO Built for Saudi Arabia",
  featuresSubtitle: "Hospitality SEO that drives direct bookings and reduces OTA reliance across the Kingdom.",
  faqTitle: "Hotel SEO Saudi Arabia - FAQs",
  ctaTitle: "Grow Your Saudi Hotel's Direct Bookings",
  ctaDesc: "Book a free consultation and we'll map an SEO strategy that drives direct revenue for your property.",
  ctaButton: "Get Free Consultation",
});

commercial("ai-seo-saudi-arabia", {
  keyword: "AI SEO Saudi Arabia", badge: "AI SEO Specialists for Saudi Arabia",
  title: "AI SEO Saudi Arabia | SEODXB - AI Search Optimisation",
  metaDesc: "AI SEO in Saudi Arabia from SEODXB. Get cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews in Arabic and English. Future-proof your search visibility.",
  h1: "AI SEO in Saudi Arabia: Get Cited by ChatGPT and AI Search",
  intro: "Saudi consumers increasingly use ChatGPT, Perplexity, and Google AI Overviews to find businesses, products, and services in Arabic and English. SEODXB delivers AI SEO in Saudi Arabia, building the entity authority and structured content signals that make AI engines recommend your brand in Saudi search conversations.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "AI SEO Built for Saudi Arabia",
  featuresSubtitle: "AEO and GEO optimisation that puts your Saudi brand in AI answer results.",
  faqTitle: "AI SEO Saudi Arabia - FAQs",
  ctaTitle: "Get Your Saudi Business Cited by AI Search",
  ctaDesc: "Book a free consultation and we'll map an AI SEO strategy for Arabic and English search in Saudi Arabia.",
  ctaButton: "Get Free Consultation",
});

commercial("ecommerce-seo-saudi-arabia", {
  keyword: "Ecommerce SEO Saudi Arabia", badge: "Ecommerce SEO for Saudi Arabia",
  title: "Ecommerce SEO Saudi Arabia | SEODXB - Online Store SEO",
  metaDesc: "Ecommerce SEO across Saudi Arabia from SEODXB. Product and category SEO, shopping schema, and Arabic-English content for online stores targeting Saudi shoppers.",
  h1: "Ecommerce SEO Saudi Arabia: Rank, Convert, and Grow",
  intro: "Saudi Arabia's ecommerce market is growing at double-digit rates, making organic search visibility a critical competitive advantage for online stores. SEODXB delivers dedicated ecommerce SEO in Saudi Arabia: product-page optimisation, category architecture, shopping schema for rich results, and bilingual Arabic-English content.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Ecommerce SEO Across Saudi Arabia",
  featuresSubtitle: "Technical and content ecommerce SEO that drives organic revenue in the Saudi market.",
  faqTitle: "Ecommerce SEO Saudi Arabia - FAQs",
  ctaTitle: "Grow Saudi Ecommerce Revenue Organically",
  ctaDesc: "Book a free consultation and we'll map an ecommerce SEO plan for your Saudi store.",
  ctaButton: "Get Free Consultation",
});

commercial("local-seo-saudi-arabia", {
  keyword: "Local SEO Saudi Arabia", badge: "Local SEO Across Saudi Arabia",
  title: "Local SEO Saudi Arabia | SEODXB - Map Pack and Local Rankings",
  metaDesc: "Local SEO across Saudi Arabia from SEODXB. Google Business Profile, Map Pack, citations, and review management for businesses in Riyadh, Jeddah, Dammam, and beyond.",
  h1: "Local SEO Saudi Arabia: Win the Map Pack in Your City",
  intro: "Saudi consumers searching for local businesses across Riyadh, Jeddah, Dammam, Mecca, and Medina rely heavily on Google Maps and local search in Arabic and English. SEODXB delivers local SEO across Saudi Arabia, optimising Google Business Profiles, building local citations, managing reviews, and winning the Map Pack positions that drive foot traffic and calls.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Local SEO Across Saudi Arabia",
  featuresSubtitle: "Map Pack and local search domination for Saudi businesses with multiple locations.",
  faqTitle: "Local SEO Saudi Arabia - FAQs",
  ctaTitle: "Win Local Search Across Saudi Arabia",
  ctaDesc: "Book a free consultation and we'll audit your local SEO presence across Saudi cities.",
  ctaButton: "Get Free Consultation",
});

commercial("enterprise-seo-saudi-arabia", {
  keyword: "Enterprise SEO Saudi Arabia", badge: "Enterprise SEO for Saudi Arabia",
  title: "Enterprise SEO Saudi Arabia | SEODXB - Large Business SEO",
  metaDesc: "Enterprise SEO in Saudi Arabia from SEODXB. Large-site SEO, multi-brand governance, bilingual Arabic-English strategy, and AI search for major Saudi organisations.",
  h1: "Enterprise SEO Saudi Arabia: Organic Growth at Scale",
  intro: "Saudi Arabia's largest organisations, from government-linked companies to Vision 2030 flagship enterprises, need SEO programmes that match their complexity. SEODXB delivers enterprise SEO in Saudi Arabia: large-site architecture, multi-team governance, bilingual Arabic-English content strategy, and AI search optimisation for organisations with significant organic ambitions.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Enterprise SEO Built for Saudi Arabia",
  featuresSubtitle: "Large-scale SEO programmes designed for Saudi Arabia's most ambitious organisations.",
  faqTitle: "Enterprise SEO Saudi Arabia - FAQs",
  ctaTitle: "Build an Enterprise SEO Programme in Saudi Arabia",
  ctaDesc: "Book a strategy call and we'll scope an enterprise SEO programme for your Saudi organisation.",
  ctaButton: "Get Free Strategy Call",
});

commercial("link-building-saudi-arabia", {
  keyword: "Link Building Saudi Arabia", badge: "Link Building for Saudi Arabia",
  title: "Link Building Saudi Arabia | SEODXB - Authority Link Building",
  metaDesc: "Link building in Saudi Arabia from SEODXB. High-authority backlinks from Gulf press, Arab business directories, and industry publications. Transparent, ethical, and effective.",
  h1: "Link Building Saudi Arabia: Authority from Gulf and Global Press",
  intro: "Saudi Arabia's digital landscape demands authority backlinks from both Arabic Gulf publications and international English press to build the domain credibility Google rewards. SEODXB delivers link building in Saudi Arabia through digital PR, editorial outreach, and Gulf directory placements that compound domain authority month after month.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Link Building Built for Saudi Arabia",
  featuresSubtitle: "Editorial, Gulf-press, and international backlinks that build real domain authority.",
  faqTitle: "Link Building Saudi Arabia - FAQs",
  ctaTitle: "Build Domain Authority in Saudi Arabia",
  ctaDesc: "Book a free consultation and we'll map a link-building strategy for your Saudi website.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-audit-saudi-arabia", {
  keyword: "SEO Audit Saudi Arabia", badge: "Comprehensive SEO Audit for Saudi Arabia",
  title: "SEO Audit Saudi Arabia | SEODXB - Deep SEO Analysis",
  metaDesc: "Comprehensive SEO audit for Saudi Arabia businesses from SEODXB. Technical, content, and authority analysis with a prioritised action plan in Arabic and English.",
  h1: "SEO Audit Saudi Arabia: Find What Is Blocking Your Rankings",
  intro: "A rigorous SEO audit is the foundation of every successful organic strategy in Saudi Arabia. SEODXB delivers deep SEO audits covering technical health, crawlability, bilingual Arabic-English content quality, link authority, and AI search readiness, with a prioritised action plan your team can execute immediately.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Our SEO Audit Process for Saudi Arabia",
  featuresSubtitle: "A comprehensive, actionable SEO audit tailored to the Saudi digital market.",
  faqTitle: "SEO Audit Saudi Arabia - FAQs",
  ctaTitle: "Get Your Saudi Website Audited",
  ctaDesc: "Book a free consultation and we'll scope an SEO audit that uncovers your biggest ranking opportunities.",
  ctaButton: "Get Free SEO Audit",
});

commercial("shopify-seo-saudi-arabia", {
  keyword: "Shopify SEO Saudi Arabia", badge: "Shopify SEO for Saudi Arabia",
  title: "Shopify SEO Saudi Arabia | SEODXB - Shopify Store SEO",
  metaDesc: "Shopify SEO in Saudi Arabia from SEODXB. Shopify-specific technical fixes, bilingual Arabic-English product SEO, and content strategy for Saudi online stores.",
  h1: "Shopify SEO Saudi Arabia: Rank Your Store in Arabic and English",
  intro: "Shopify powers many of Saudi Arabia's fastest-growing online stores, but out-of-the-box Shopify has SEO limitations that leave rankings on the table. SEODXB delivers Shopify SEO in Saudi Arabia: technical fixes, bilingual Arabic-English product and category optimisation, and content strategy that drives organic sales across Google and AI search.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Shopify SEO for Saudi Arabia",
  featuresSubtitle: "Platform-specific Shopify SEO combined with bilingual content strategy for Saudi ecommerce.",
  faqTitle: "Shopify SEO Saudi Arabia - FAQs",
  ctaTitle: "Grow Your Saudi Shopify Store Organically",
  ctaDesc: "Book a free consultation and we'll audit your Shopify store's SEO for the Saudi market.",
  ctaButton: "Get Free Shopify Audit",
});

commercial("wordpress-seo-saudi-arabia", {
  keyword: "WordPress SEO Saudi Arabia", badge: "WordPress SEO for Saudi Arabia",
  title: "WordPress SEO Saudi Arabia | SEODXB - WordPress SEO Experts",
  metaDesc: "WordPress SEO in Saudi Arabia from SEODXB. Technical WordPress optimisation, schema, speed, bilingual Arabic-English content, and AI search readiness.",
  h1: "WordPress SEO Saudi Arabia: Unlock Your Site's Ranking Potential",
  intro: "WordPress is the most widely used CMS in Saudi Arabia, but most WordPress sites underperform on technical SEO, speed, and schema. SEODXB delivers WordPress SEO in Saudi Arabia: technical optimisation, Core Web Vitals fixes, bilingual Arabic-English content architecture, and AI search readiness that unlocks the full ranking potential of your site.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "WordPress SEO for Saudi Arabia",
  featuresSubtitle: "Technical and content WordPress SEO tailored to the Saudi market.",
  faqTitle: "WordPress SEO Saudi Arabia - FAQs",
  ctaTitle: "Unlock Your Saudi WordPress Site's Potential",
  ctaDesc: "Book a free consultation and we'll audit your WordPress site's SEO for Saudi Arabia.",
  ctaButton: "Get Free WordPress Audit",
});

commercial("seo-pricing-saudi-arabia", {
  keyword: "SEO Pricing Saudi Arabia", badge: "Transparent SEO Pricing for Saudi Arabia",
  title: "SEO Pricing Saudi Arabia | SEODXB - Clear SEO Plans and Costs",
  metaDesc: "Clear SEO pricing for Saudi Arabia: Startup $999/mo, Business $2,499/mo, Enterprise custom. No contracts, no hidden fees. See exactly what you get for every plan.",
  h1: "Transparent SEO Pricing for Saudi Arabia Businesses",
  intro: "SEO pricing in Saudi Arabia is often hidden behind vague quotes. SEODXB publishes clear pricing for every plan: Startup at $999/mo, Business at $2,499/mo, and Enterprise at custom pricing, all with no contracts and no hidden fees, covering bilingual Arabic-English SEO, AEO, GEO, and technical optimisation.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "What Is Included at Every Price Point in Saudi Arabia",
  featuresSubtitle: "Clear deliverables at each plan level, no surprises and no upsells.",
  faqTitle: "SEO Pricing Saudi Arabia - FAQs",
  ctaTitle: "Find the Right Saudi Arabia SEO Plan for You",
  ctaDesc: "Book a free consultation and we'll recommend the plan that matches your competition and growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("content-marketing-saudi-arabia", {
  keyword: "Content Marketing Saudi Arabia", badge: "Content Marketing for Saudi Arabia",
  title: "Content Marketing Saudi Arabia | SEODXB - SEO Content Strategy",
  metaDesc: "Content marketing in Saudi Arabia from SEODXB. Bilingual Arabic-English SEO content, topical authority hubs, and AI-citable articles that drive organic growth.",
  h1: "Content Marketing Saudi Arabia: Build Authority in Arabic and English",
  intro: "Content marketing in Saudi Arabia requires bilingual expertise across Arabic and English, deep understanding of Saudi consumer intent, and content structured for both Google and AI answer engines. SEODXB delivers content marketing that builds topical authority, earns featured snippets, and creates the AI citations that position your brand as the expert in its field.",
  scope: "Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Content Marketing Built for Saudi Arabia",
  featuresSubtitle: "Bilingual Arabic-English content that ranks, converts, and earns AI citations across Saudi search.",
  faqTitle: "Content Marketing Saudi Arabia - FAQs",
  ctaTitle: "Build Content Authority in Saudi Arabia",
  ctaDesc: "Book a free consultation and we'll map a content marketing strategy for your Saudi audience.",
  ctaButton: "Get Free Consultation",
});

// G. Commercial Qatar / Kuwait / Bahrain / Oman / Jordan (20 pages)
const countryCommercialData = [
  { slug: "seo-agency-qatar", country: "Qatar", served: "Qatar", adjective: "Qatar's", economy: "tourism, finance, and post-World Cup diversification" },
  { slug: "seo-services-qatar", country: "Qatar", served: "Qatar", adjective: "Qatar's", economy: "tourism, finance, and education" },
  { slug: "seo-agency-kuwait", country: "Kuwait", served: "Kuwait", adjective: "Kuwait's", economy: "retail, finance, and professional services" },
  { slug: "seo-services-kuwait", country: "Kuwait", served: "Kuwait", adjective: "Kuwait's", economy: "retail, finance, and professional services" },
  { slug: "seo-agency-bahrain", country: "Bahrain", served: "Bahrain", adjective: "Bahrain's", economy: "fintech, finance, and professional services" },
  { slug: "seo-services-bahrain", country: "Bahrain", served: "Bahrain", adjective: "Bahrain's", economy: "fintech, finance, and professional services" },
  { slug: "seo-agency-oman", country: "Oman", served: "Oman", adjective: "Oman's", economy: "tourism, logistics, and Vision 2040 diversification" },
  { slug: "seo-services-oman", country: "Oman", served: "Oman", adjective: "Oman's", economy: "tourism, logistics, and manufacturing" },
  { slug: "seo-agency-jordan", country: "Jordan", served: "Jordan", adjective: "Jordan's", economy: "tech, professional services, and tourism" },
  { slug: "seo-services-jordan", country: "Jordan", served: "Jordan", adjective: "Jordan's", economy: "tech, professional services, and healthcare" },
];
countryCommercialData.forEach(({ slug, country, served, adjective, economy }) => {
  const isAgency = slug.includes("seo-agency");
  const label = isAgency ? "SEO Agency" : "SEO Services";
  const kw = `${label} ${country}`;
  commercial(slug, {
    keyword: kw,
    badge: `${adjective} Trusted ${label}`,
    title: `${kw} | SEODXB - ${isAgency ? "Top SEO Specialists" : "Full-Service SEO"}`,
    metaDesc: `SEODXB delivers ${isAgency ? "specialist SEO" : "complete SEO services"} in ${country} for ${economy} businesses. Google rankings, AI citations, and bilingual Arabic-English search. No contracts.`,
    h1: `${isAgency ? `The SEO Agency ${country} Businesses Trust` : `Complete SEO Services for ${country} Businesses`}`,
    intro: `SEODXB ${isAgency ? "is a specialist SEO agency" : "delivers the full spectrum of SEO services"} for ${country}'s growing ${economy} sectors. We combine technical SEO, bilingual Arabic and English content, local Map Pack optimisation, and AI search visibility to help ${country} businesses rank and generate leads across Google and AI search engines.`,
    scope: country, served,
    featuresTitle: `${isAgency ? "What Makes SEODXB" : "Our Full Range of"} ${country} SEO ${isAgency ? "Choice" : "Services"}`,
    featuresSubtitle: `Specialist SEO expertise combined with knowledge of ${adjective} market and how customers there search in Arabic and English.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `${isAgency ? `Ready to Rank in ${country}?` : `Build Your ${country} SEO Programme`}`,
    ctaDesc: `Book a free ${isAgency ? "SEO strategy call" : "consultation"} and we'll ${isAgency ? `audit your site and map the fastest path to page one in ${country}` : `design an SEO plan tailored to your ${country} growth goals`}.`,
    ctaButton: isAgency ? "Get Your Free SEO Audit" : "Get Free Consultation",
  });
});

const digitalMktCountries = [
  { country: "Qatar", served: "Qatar", economy: "tourism, LNG diversification, and fintech" },
  { country: "Kuwait", served: "Kuwait", economy: "retail, professional services, and finance" },
  { country: "Bahrain", served: "Bahrain", economy: "Islamic finance, fintech, and professional services" },
  { country: "Oman", served: "Oman", economy: "tourism, logistics, and Vision 2040 sectors" },
  { country: "Jordan", served: "Jordan", economy: "tech, startups, and professional services" },
];
digitalMktCountries.forEach(({ country, served, economy }) => {
  const slug = `digital-marketing-${country.toLowerCase()}`;
  commercial(slug, {
    keyword: `Digital Marketing ${country}`, badge: `SEO-Led Digital Marketing in ${country}`,
    title: `Digital Marketing ${country} | SEODXB - SEO-Led Growth`,
    metaDesc: `SEO-led digital marketing in ${country} from SEODXB. Organic search, AEO, GEO, bilingual Arabic-English content, and link building that drives leads without ad dependency.`,
    h1: `SEO-Led Digital Marketing in ${country}`,
    intro: `SEODXB delivers digital marketing for ${country} businesses built on organic search rather than paid ads. We grow Arabic and English visibility, content authority, and AI search presence across ${economy}, creating a compounding lead engine rather than a recurring ad bill.`,
    scope: country, served,
    featuresTitle: `Our SEO-Led Digital Marketing in ${country}`,
    featuresSubtitle: `Organic-first marketing tuned to ${country}'s ${economy} economy.`,
    faqTitle: `Digital Marketing ${country} - FAQs`,
    ctaTitle: `Grow ${country} Leads Organically`,
    ctaDesc: `Book a free consultation to see how SEO-led marketing builds durable growth for your ${country} business.`,
    ctaButton: "Get Free Consultation",
  });
});

const arabicSeoQatar = "arabic-seo-qatar";
commercial(arabicSeoQatar, {
  keyword: "Arabic SEO Qatar", badge: "Arabic SEO Specialists for Qatar",
  title: "Arabic SEO Qatar | SEODXB - Bilingual SEO for Qatar",
  metaDesc: "Expert Arabic SEO in Qatar from SEODXB. Bilingual Arabic-English keyword strategy, hreflang, and AI search visibility for Doha businesses.",
  h1: "Arabic SEO Qatar: Bilingual Search Visibility in Doha",
  intro: "Arabic is the primary search language for Qatar's local audience, while English dominates B2B and international search. SEODXB delivers bilingual Arabic and English SEO in Qatar, combining Arabic keyword research, hreflang implementation, culturally relevant content, and Google Business Profile optimisation across Doha's competitive sectors.",
  scope: "Qatar", served: "Qatar",
  featuresTitle: "Arabic SEO Built for Qatar",
  featuresSubtitle: "Fully bilingual SEO strategy for Qatar's Arabic and English search landscape.",
  faqTitle: "Arabic SEO Qatar - FAQs",
  ctaTitle: "Dominate Arabic and English Search in Qatar",
  ctaDesc: "Book a free consultation and we'll map your bilingual SEO strategy for Qatar.",
  ctaButton: "Get Free Consultation",
});

// Country-specific industry pages
commercial("seo-for-hospitality-qatar", {
  keyword: "SEO for Hospitality Qatar", badge: "Hospitality SEO in Qatar",
  title: "SEO for Hospitality in Qatar | SEODXB - Hotel and Venue SEO",
  metaDesc: "Specialist SEO for hospitality businesses in Qatar. SEODXB helps hotels, resorts, and venues rank on Google and AI travel tools, driving direct bookings.",
  h1: "SEO for Hospitality in Qatar: Win Bookings from Google and AI Travel",
  intro: "Qatar's post-World Cup tourism push is driving strong hospitality search demand, with travellers comparing hotels and venues across Google, OTAs, and AI trip planners. SEODXB delivers hospitality SEO in Qatar: destination content, direct-booking SEO, and AI travel citation building that reduces OTA dependency.",
  scope: "Hospitality in Qatar", served: "Qatar",
  featuresTitle: "Hospitality SEO Built for Qatar",
  featuresSubtitle: "Hotel and venue SEO that drives direct bookings across Qatar's tourism market.",
  faqTitle: "Hospitality SEO Qatar - FAQs",
  ctaTitle: "Grow Your Qatar Hospitality Business Online",
  ctaDesc: "Book a free consultation and we'll map a hospitality SEO strategy for Qatar.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-fintech-bahrain", {
  keyword: "SEO for Fintech Bahrain", badge: "Fintech SEO in Bahrain",
  title: "SEO for Fintech in Bahrain | SEODXB - Fintech SEO Specialists",
  metaDesc: "Specialist SEO for fintech businesses in Bahrain. SEODXB helps fintech companies rank on Google and AI tools, build compliance-content authority, and generate B2B leads.",
  h1: "SEO for Fintech in Bahrain: Build Category Authority in the GCC's Fintech Hub",
  intro: "Bahrain is the GCC's leading fintech regulatory hub, with fintechs and financial services businesses competing intensely for search visibility. SEODXB delivers fintech SEO in Bahrain: product SEO, CBB compliance content, and category-defining authority that positions your fintech platform as the trusted choice for regional users and enterprise clients.",
  scope: "Fintech in Bahrain", served: "Bahrain",
  featuresTitle: "Fintech SEO Built for Bahrain",
  featuresSubtitle: "Compliance-aligned fintech content and technical SEO for Bahrain's regulated market.",
  faqTitle: "Fintech SEO Bahrain - FAQs",
  ctaTitle: "Build Fintech SEO Authority in Bahrain",
  ctaDesc: "Book a free consultation and we'll map a fintech SEO strategy for Bahrain.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-qatar", {
  keyword: "SEO for Real Estate Qatar", badge: "Real Estate SEO in Qatar",
  title: "SEO for Real Estate in Qatar | SEODXB - Property SEO",
  metaDesc: "Specialist SEO for real estate businesses in Qatar. SEODXB helps developers, agents, and property platforms rank on Google and AI tools in Doha and beyond.",
  h1: "SEO for Real Estate in Qatar: Get Found by Property Buyers and Investors",
  intro: "Qatar's real estate market is driven by major infrastructure investment and a growing expatriate community researching properties online. SEODXB delivers real estate SEO in Qatar focused on project and community page ranking, off-plan keyword targeting, and AI property search citations that capture buyers early in their research journey.",
  scope: "Real Estate in Qatar", served: "Qatar",
  featuresTitle: "Real Estate SEO Built for Qatar",
  featuresSubtitle: "Property SEO that captures buyers and investors searching in Doha and across Qatar.",
  faqTitle: "Real Estate SEO Qatar - FAQs",
  ctaTitle: "Grow Your Qatar Property Business Online",
  ctaDesc: "Book a free consultation and we'll map a real estate SEO strategy for Qatar.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-tourism-oman", {
  keyword: "SEO for Tourism Oman", badge: "Tourism SEO in Oman",
  title: "SEO for Tourism in Oman | SEODXB - Destination and Experience SEO",
  metaDesc: "Specialist SEO for tourism businesses in Oman. SEODXB helps tour operators, destinations, and hospitality providers rank on Google and AI travel planners.",
  h1: "SEO for Tourism in Oman: Be Found by Travellers Planning Their Visit",
  intro: "Oman's Vision 2040 places tourism at the centre of economic diversification, with travellers researching destinations, experiences, and accommodation across Google and AI trip planners. SEODXB delivers tourism SEO in Oman: destination content, experience-page SEO, and AI travel recommendation visibility that drives bookings for operators across the Sultanate.",
  scope: "Tourism in Oman", served: "Oman",
  featuresTitle: "Tourism SEO Built for Oman",
  featuresSubtitle: "Destination and experience SEO that puts Oman's tourism businesses on the map.",
  faqTitle: "Tourism SEO Oman - FAQs",
  ctaTitle: "Grow Your Oman Tourism Business Online",
  ctaDesc: "Book a free consultation and we'll map a tourism SEO strategy for Oman.",
  ctaButton: "Get Free Consultation",
});

// H. GCC-wide commercial (13 pages)
commercial("seo-gcc", {
  keyword: "SEO GCC", badge: "SEO Specialists for the GCC",
  title: "SEO GCC | SEODXB - SEO for the Gulf Region",
  metaDesc: "SEODXB delivers SEO across the GCC: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. Bilingual Arabic-English SEO, AI citations, and local Map Pack rankings.",
  h1: "SEO GCC: Grow Your Business Across the Gulf",
  intro: "The GCC is one of the world's most competitive and fastest-growing digital markets, with Arabic and English search demand expanding rapidly across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. SEODXB delivers coordinated GCC SEO programmes that build rankings, local visibility, and AI search citations across every Gulf market from a single specialist team.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "What Our GCC SEO Includes",
  featuresSubtitle: "A coordinated organic growth programme built for the GCC's bilingual Arabic-English search landscape.",
  faqTitle: "SEO GCC - Common Questions",
  ctaTitle: "Ready to Rank Across the GCC?",
  ctaDesc: "Book a free strategy call and we'll map a GCC-wide SEO programme tailored to your markets.",
  ctaButton: "Get Free Strategy Call",
});

commercial("seo-agency-gcc", {
  keyword: "SEO Agency GCC", badge: "The GCC's Trusted SEO Agency",
  title: "SEO Agency GCC | SEODXB - GCC SEO Specialists",
  metaDesc: "SEODXB is a specialist SEO agency for the GCC region. Google rankings, bilingual Arabic-English SEO, and AI search citations for Saudi, UAE, Qatar, Kuwait, Bahrain, and Oman.",
  h1: "The SEO Agency the GCC Trusts to Rank",
  intro: "SEODXB is a specialist SEO agency operating across the GCC, serving businesses in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. We combine deep regional market knowledge with bilingual Arabic-English SEO expertise, technical proficiency, and AI search optimisation to deliver rankings and leads across the Gulf's most competitive sectors.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "What Makes SEODXB the GCC's SEO Choice",
  featuresSubtitle: "GCC-wide SEO expertise with bilingual Arabic-English capability and AI search leadership.",
  faqTitle: "SEO Agency GCC - FAQs",
  ctaTitle: "Work With the GCC's Specialist SEO Agency",
  ctaDesc: "Book a free strategy call and discover how SEODXB builds organic growth across Gulf markets.",
  ctaButton: "Get Free Strategy Call",
});

commercial("arabic-seo-gcc", {
  keyword: "Arabic SEO GCC", badge: "Arabic SEO Specialists for the GCC",
  title: "Arabic SEO GCC | SEODXB - Bilingual SEO for the Gulf",
  metaDesc: "Specialist Arabic SEO across the GCC from SEODXB. Bilingual Arabic-English keyword strategy, hreflang implementation, and culturally relevant content for Gulf markets.",
  h1: "Arabic SEO GCC: Bilingual Search Visibility Across the Gulf",
  intro: "Arabic is the primary search language for hundreds of millions of consumers across the GCC. SEODXB delivers specialist Arabic SEO across the Gulf: Arabic keyword research, bilingual content strategy, hreflang implementation, and culturally relevant Google Business Profile optimisation that captures Arabic search demand in every GCC market.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "Arabic SEO Built for the GCC",
  featuresSubtitle: "Fully bilingual Arabic-English SEO across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman.",
  faqTitle: "Arabic SEO GCC - FAQs",
  ctaTitle: "Dominate Arabic and English Search Across the GCC",
  ctaDesc: "Book a free consultation and we'll map your bilingual GCC SEO strategy.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-services-gcc", {
  keyword: "SEO Services GCC", badge: "Complete SEO Services for the GCC",
  title: "SEO Services GCC | SEODXB - Full-Service GCC SEO",
  metaDesc: "Complete SEO services across the GCC from SEODXB. Technical SEO, Arabic-English content, link building, local SEO, AEO, and GEO for businesses across the Gulf.",
  h1: "Complete SEO Services Across the GCC",
  intro: "SEODXB delivers the full spectrum of SEO services for GCC businesses operating across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. Technical foundations, bilingual Arabic-English content, local Map Pack visibility, authority link building from Gulf and international press, and AI search optimisation, all from a single specialist team with deep GCC market knowledge.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "Our Full Range of GCC SEO Services",
  featuresSubtitle: "Every service compounds, building an exponential organic growth engine across Gulf markets.",
  faqTitle: "SEO Services GCC - FAQs",
  ctaTitle: "Build Your GCC SEO Programme",
  ctaDesc: "Book a free consultation and we'll design an SEO services plan across your GCC markets.",
  ctaButton: "Get Free Consultation",
});

commercial("digital-marketing-gcc", {
  keyword: "Digital Marketing GCC", badge: "SEO-Led Digital Marketing for the GCC",
  title: "Digital Marketing GCC | SEODXB - Organic Growth Across the Gulf",
  metaDesc: "SEO-led digital marketing across the GCC from SEODXB. Organic search, bilingual Arabic-English content, AEO, GEO, and link building for Gulf businesses.",
  h1: "SEO-Led Digital Marketing Across the GCC",
  intro: "SEODXB delivers digital marketing across the GCC built on organic search rather than ad spend. We grow bilingual Arabic and English search visibility, AI citations, and content authority across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman, creating a compounding organic asset that generates leads long after the work is done.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "Our SEO-Led Digital Marketing Across the GCC",
  featuresSubtitle: "Organic-first marketing that builds durable Gulf-wide visibility.",
  faqTitle: "Digital Marketing GCC - FAQs",
  ctaTitle: "Build Durable Growth Across the GCC",
  ctaDesc: "Book a free consultation and we'll show how SEO-led marketing delivers GCC-wide organic growth.",
  ctaButton: "Get Free Consultation",
});

commercial("ecommerce-seo-gcc", {
  keyword: "Ecommerce SEO GCC", badge: "Ecommerce SEO Across the GCC",
  title: "Ecommerce SEO GCC | SEODXB - Online Store SEO for the Gulf",
  metaDesc: "Ecommerce SEO across the GCC from SEODXB. Product and category SEO, shopping schema, and bilingual Arabic-English content for online stores targeting Gulf shoppers.",
  h1: "Ecommerce SEO GCC: Rank Your Store Across the Gulf",
  intro: "GCC ecommerce is growing rapidly across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman, with Arabic and English-language shoppers researching products online before purchasing. SEODXB delivers ecommerce SEO across the GCC: product-page optimisation, category architecture, shopping schema, and bilingual content that drives organic sales at scale.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "Ecommerce SEO Across the GCC",
  featuresSubtitle: "Technical and content ecommerce SEO for online stores targeting Gulf markets.",
  faqTitle: "Ecommerce SEO GCC - FAQs",
  ctaTitle: "Grow GCC Ecommerce Revenue Organically",
  ctaDesc: "Book a free consultation and we'll map an ecommerce SEO strategy for your GCC markets.",
  ctaButton: "Get Free Consultation",
});

commercial("local-seo-gcc", {
  keyword: "Local SEO GCC", badge: "Local SEO Across the GCC",
  title: "Local SEO GCC | SEODXB - Map Pack and Local Rankings",
  metaDesc: "Local SEO across the GCC from SEODXB. Google Business Profile, Map Pack, citations, and review management for multi-location businesses across Gulf cities.",
  h1: "Local SEO GCC: Win the Map Pack in Every Gulf City",
  intro: "Gulf consumers rely heavily on Google Maps and local search across Riyadh, Dubai, Doha, Kuwait City, Manama, and Muscat. SEODXB delivers local SEO across the GCC: Google Business Profile optimisation, local citation building, review management, and Map Pack strategies that drive foot traffic and calls in every Gulf city where you operate.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "Local SEO Across the GCC",
  featuresSubtitle: "Map Pack and local search domination for businesses with multi-city Gulf footprints.",
  faqTitle: "Local SEO GCC - FAQs",
  ctaTitle: "Win Local Search Across the GCC",
  ctaDesc: "Book a free consultation and we'll audit your local SEO presence across Gulf cities.",
  ctaButton: "Get Free Consultation",
});

commercial("enterprise-seo-gcc", {
  keyword: "Enterprise SEO GCC", badge: "Enterprise SEO for the GCC",
  title: "Enterprise SEO GCC | SEODXB - Large Business SEO for the Gulf",
  metaDesc: "Enterprise SEO across the GCC from SEODXB. Large-site SEO, multi-country governance, bilingual Arabic-English strategy, and AI search for major Gulf organisations.",
  h1: "Enterprise SEO GCC: Organic Growth at Gulf Scale",
  intro: "The GCC's largest organisations need SEO programmes that match their scale, complexity, and multi-country ambitions. SEODXB delivers enterprise SEO across the GCC: large-site architecture, multi-team governance frameworks, bilingual Arabic-English content strategy, and AI search optimisation for organisations with serious organic growth mandates across Gulf markets.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "Enterprise SEO Built for the GCC",
  featuresSubtitle: "Large-scale SEO programmes for the Gulf's most ambitious organisations.",
  faqTitle: "Enterprise SEO GCC - FAQs",
  ctaTitle: "Build an Enterprise SEO Programme Across the GCC",
  ctaDesc: "Book a strategy call and we'll scope an enterprise SEO programme for your Gulf operations.",
  ctaButton: "Get Free Strategy Call",
});

commercial("ai-seo-gcc", {
  keyword: "AI SEO GCC", badge: "AI SEO Specialists for the GCC",
  title: "AI SEO GCC | SEODXB - AI Search Optimisation for the Gulf",
  metaDesc: "AI SEO across the GCC from SEODXB. Get cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews in Arabic and English across Gulf markets.",
  h1: "AI SEO GCC: Get Cited by AI Search Across the Gulf",
  intro: "Gulf consumers and business buyers increasingly turn to ChatGPT, Perplexity, and Google AI Overviews to find products and services in Arabic and English. SEODXB delivers AI SEO across the GCC, building the entity authority, structured content, and brand signals that make AI engines recommend your business in Gulf search conversations.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "AI SEO Built for the GCC",
  featuresSubtitle: "AEO and GEO optimisation that earns AI citations across Arabic and English Gulf search.",
  faqTitle: "AI SEO GCC - FAQs",
  ctaTitle: "Get Your GCC Business Cited by AI Search",
  ctaDesc: "Book a free consultation and we'll map an AI SEO strategy for Arabic and English Gulf search.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-vision-2030-gcc", {
  keyword: "SEO for Vision 2030 GCC", badge: "Vision 2030 Digital Strategy for the GCC",
  title: "SEO for Vision 2030 GCC | SEODXB - Digital Growth Strategy",
  metaDesc: "SEO aligned with Saudi Vision 2030 and GCC diversification plans. SEODXB helps businesses capture digital growth in tourism, tech, entertainment, and non-oil sectors.",
  h1: "SEO Built for Vision 2030 and GCC Diversification",
  intro: "Saudi Vision 2030 and parallel GCC economic diversification plans are creating unprecedented digital search demand in tourism, entertainment, tech, healthcare, and financial services. SEODXB helps businesses capture this growth with bilingual Arabic-English SEO strategies that position them as category leaders in the sectors these transformations are building.",
  scope: "the GCC", served: "Gulf Cooperation Council",
  featuresTitle: "SEO That Captures GCC Diversification Growth",
  featuresSubtitle: "Organic search strategies built for the sectors Saudi Vision 2030 and GCC diversification are expanding.",
  faqTitle: "SEO for Vision 2030 GCC - FAQs",
  ctaTitle: "Capture GCC Diversification Digital Growth",
  ctaDesc: "Book a free strategy call and we'll map the Vision 2030 and GCC search opportunities for your business.",
  ctaButton: "Get Free Strategy Call",
});

commercial("seo-middle-east", {
  keyword: "SEO Middle East", badge: "SEO Specialists for the Middle East",
  title: "SEO Middle East | SEODXB - SEO Agency for the MENA Region",
  metaDesc: "SEODXB delivers SEO across the Middle East: GCC, Jordan, Egypt, and beyond. Bilingual Arabic-English SEO, AI search citations, and local visibility for MENA businesses.",
  h1: "SEO Middle East: Grow Your Business Across the Region",
  intro: "The Middle East is one of the world's fastest-growing digital markets, with Arabic and English search demand expanding rapidly across the GCC, Levant, and North Africa. SEODXB delivers Middle East SEO from its Dubai hub, combining bilingual Arabic-English expertise, technical SEO, and AI search optimisation to build organic visibility across every key regional market.",
  scope: "the Middle East", served: "Middle East",
  featuresTitle: "What Our Middle East SEO Includes",
  featuresSubtitle: "A regional organic growth programme built for the Middle East's bilingual Arabic-English search landscape.",
  faqTitle: "SEO Middle East - Common Questions",
  ctaTitle: "Ready to Rank Across the Middle East?",
  ctaDesc: "Book a free strategy call and we'll map a Middle East SEO programme tailored to your target markets.",
  ctaButton: "Get Free Strategy Call",
});

commercial("seo-mena", {
  keyword: "SEO MENA", badge: "SEO Specialists for MENA",
  title: "SEO MENA | SEODXB - SEO Agency for MENA Markets",
  metaDesc: "SEODXB delivers SEO across MENA: GCC, Levant, Egypt, and North Africa. Bilingual Arabic-English SEO, AI citations, and technical SEO for MENA businesses.",
  h1: "SEO MENA: Organic Growth Across the Middle East and North Africa",
  intro: "MENA's digital economy spans over 400 million potential customers searching in Arabic, English, and French across the Middle East and North Africa. SEODXB delivers MENA SEO from its Dubai base, building bilingual Arabic-English organic visibility, local Map Pack presence, and AI search citations for businesses targeting one market or all of MENA.",
  scope: "MENA", served: "Middle East and North Africa",
  featuresTitle: "What Our MENA SEO Includes",
  featuresSubtitle: "A coordinated organic growth programme built for MENA's diverse multilingual search landscape.",
  faqTitle: "SEO MENA - Common Questions",
  ctaTitle: "Ready to Rank Across MENA?",
  ctaDesc: "Book a free strategy call and we'll map a MENA SEO programme for your target markets.",
  ctaButton: "Get Free Strategy Call",
});

commercial("arabic-seo-mena", {
  keyword: "Arabic SEO MENA", badge: "Arabic SEO Specialists for MENA",
  title: "Arabic SEO MENA | SEODXB - Bilingual SEO for the Middle East",
  metaDesc: "Specialist Arabic SEO across MENA from SEODXB. Arabic keyword research, bilingual content, hreflang, and AI search visibility for the Middle East and North Africa.",
  h1: "Arabic SEO MENA: Bilingual Search Visibility Across the Region",
  intro: "Arabic is spoken by over 400 million people across MENA and is the primary search language for consumers from Morocco to Oman. SEODXB delivers specialist Arabic SEO across the MENA region: Arabic keyword research, bilingual content creation, hreflang implementation, and culturally aligned content strategy that captures Arabic search demand across every key market.",
  scope: "MENA", served: "Middle East and North Africa",
  featuresTitle: "Arabic SEO Built for MENA",
  featuresSubtitle: "Fully bilingual Arabic-English SEO across the Middle East and North Africa.",
  faqTitle: "Arabic SEO MENA - FAQs",
  ctaTitle: "Dominate Arabic Search Across MENA",
  ctaDesc: "Book a free consultation and we'll map your Arabic SEO strategy for MENA markets.",
  ctaButton: "Get Free Consultation",
});

// I. Extra 20 pages
commercial("seo-for-real-estate-jeddah", {
  keyword: "SEO for Real Estate in Jeddah", badge: "Real Estate SEO in Jeddah",
  title: "SEO for Real Estate in Jeddah | SEODXB - Property SEO",
  metaDesc: "Specialist SEO for real estate businesses in Jeddah. SEODXB helps developers and agents rank on Google and AI tools for property searches along the Red Sea coast.",
  h1: "SEO for Real Estate in Jeddah: Get Found by Property Buyers",
  intro: "Jeddah's real estate market is growing rapidly, with buyers and investors researching waterfront properties, villas, and commercial spaces across Google in Arabic and English. SEODXB delivers specialist real estate SEO in Jeddah: community and project page ranking, off-plan keyword targeting, and AI property search citation building.",
  scope: "Real Estate in Jeddah", served: "Jeddah, Saudi Arabia",
  featuresTitle: "Real Estate SEO Built for Jeddah",
  featuresSubtitle: "Property SEO that connects Jeddah developers and agents with buyers online.",
  faqTitle: "Real Estate SEO Jeddah - FAQs",
  ctaTitle: "Grow Your Jeddah Property Business Online",
  ctaDesc: "Book a free consultation and we'll map a real estate SEO strategy for Jeddah.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-restaurants-riyadh", {
  keyword: "SEO for Restaurants in Riyadh", badge: "Restaurant SEO in Riyadh",
  title: "SEO for Restaurants in Riyadh | SEODXB - Local Restaurant SEO",
  metaDesc: "Specialist SEO for restaurants in Riyadh. SEODXB helps restaurants rank on Google Maps and AI dining tools in Arabic and English, driving more covers.",
  h1: "SEO for Restaurants in Riyadh: Be Found by Diners First",
  intro: "Riyadh's dining scene is booming, with diners choosing restaurants from Google Maps, reviews, and AI dining recommendations in Arabic and English. SEODXB delivers restaurant SEO in Riyadh: Google Business Profile dominance, Arabic and English keyword targeting, and review-driven rankings that fill more covers.",
  scope: "Restaurants in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Restaurant SEO Built for Riyadh",
  featuresSubtitle: "Local SEO that puts your Riyadh restaurant at the top of Google Maps and AI dining recommendations.",
  faqTitle: "Restaurant SEO Riyadh - FAQs",
  ctaTitle: "Fill Your Riyadh Restaurant with Organic Search",
  ctaDesc: "Book a free consultation and we'll map a restaurant SEO strategy for Riyadh.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-healthcare-jeddah", {
  keyword: "SEO for Healthcare in Jeddah", badge: "Healthcare SEO in Jeddah",
  title: "SEO for Healthcare in Jeddah | SEODXB - Medical SEO Specialists",
  metaDesc: "Specialist SEO for healthcare businesses in Jeddah. SEODXB helps clinics, hospitals, and specialists rank on Google and AI tools where patients search first.",
  h1: "SEO for Healthcare in Jeddah: Be Found by Patients First",
  intro: "Jeddah patients research providers, treatments, and specialist clinics across Google and AI tools before booking appointments. SEODXB delivers healthcare SEO in Jeddah: treatment content, E-E-A-T signals for Saudi medical standards, and local Map Pack clinic visibility that converts online searches into patient appointments.",
  scope: "Healthcare in Jeddah", served: "Jeddah, Saudi Arabia",
  featuresTitle: "Healthcare SEO Built for Jeddah",
  featuresSubtitle: "Medical SEO that builds patient trust, Map Pack visibility, and appointment-driving content in Jeddah.",
  faqTitle: "Healthcare SEO Jeddah - FAQs",
  ctaTitle: "Grow Your Jeddah Healthcare Practice Online",
  ctaDesc: "Book a free consultation and we'll map an SEO strategy that brings more patients to your practice.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-hotels-riyadh", {
  keyword: "SEO for Hotels in Riyadh", badge: "Hotel SEO in Riyadh",
  title: "SEO for Hotels in Riyadh | SEODXB - Hospitality SEO",
  metaDesc: "Specialist SEO for hotels in Riyadh. SEODXB helps properties rank on Google and AI trip planners, driving direct bookings in Saudi Arabia's capital.",
  h1: "SEO for Hotels in Riyadh: Drive Direct Bookings",
  intro: "Riyadh is attracting more business and leisure travellers under Vision 2030, with hotel guests comparing properties across Google, OTAs, and AI trip planners. SEODXB delivers hotel SEO in Riyadh: direct-booking SEO, destination content, and AI travel citation building that captures guests before OTAs take the commission.",
  scope: "Hotels in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Hotel SEO Built for Riyadh",
  featuresSubtitle: "Hospitality SEO that drives direct bookings for Riyadh hotels.",
  faqTitle: "Hotel SEO Riyadh - FAQs",
  ctaTitle: "Grow Your Riyadh Hotel's Direct Bookings",
  ctaDesc: "Book a free consultation and we'll map a hotel SEO strategy for Riyadh.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-ecommerce-riyadh", {
  keyword: "SEO for Ecommerce in Riyadh", badge: "Ecommerce SEO in Riyadh",
  title: "SEO for Ecommerce in Riyadh | SEODXB - Online Store SEO",
  metaDesc: "Specialist ecommerce SEO in Riyadh from SEODXB. Product and category SEO, shopping schema, and bilingual Arabic-English content for Riyadh-based online stores.",
  h1: "SEO for Ecommerce in Riyadh: Rank Your Store and Drive Sales",
  intro: "Riyadh is Saudi Arabia's largest ecommerce market, with shoppers starting product research on Google in Arabic and English before purchasing. SEODXB delivers ecommerce SEO in Riyadh: product and category optimisation, shopping schema for rich results, and AI commerce visibility that drives sustainable organic revenue.",
  scope: "Ecommerce in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Ecommerce SEO Built for Riyadh",
  featuresSubtitle: "Product, category, and technical SEO that drives organic sales in Riyadh.",
  faqTitle: "Ecommerce SEO Riyadh - FAQs",
  ctaTitle: "Grow Your Riyadh Ecommerce Store Organically",
  ctaDesc: "Book a free consultation and we'll map an ecommerce SEO strategy for the Riyadh market.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-construction-riyadh", {
  keyword: "SEO for Construction in Riyadh", badge: "Construction SEO in Riyadh",
  title: "SEO for Construction in Riyadh | SEODXB - B2B Construction SEO",
  metaDesc: "Specialist SEO for construction businesses in Riyadh. SEODXB helps contractors and developers rank on Google and win B2B leads in Saudi Arabia's booming construction market.",
  h1: "SEO for Construction in Riyadh: Win B2B Leads Online",
  intro: "Riyadh is at the centre of Saudi Arabia's construction boom, with Vision 2030 mega-projects creating massive procurement demand. Developers and procurement teams vet contractors through online research before awarding contracts, making SEO a critical B2B channel. SEODXB delivers construction SEO in Riyadh: project portfolio ranking, capability pages, and B2B lead capture.",
  scope: "Construction in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Construction SEO Built for Riyadh",
  featuresSubtitle: "B2B construction SEO that generates contractor enquiries in Riyadh's booming market.",
  faqTitle: "Construction SEO Riyadh - FAQs",
  ctaTitle: "Win Construction Leads in Riyadh",
  ctaDesc: "Book a free consultation and we'll map a construction SEO strategy for the Riyadh market.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-automotive-riyadh", {
  keyword: "SEO for Automotive in Riyadh", badge: "Automotive SEO in Riyadh",
  title: "SEO for Automotive in Riyadh | SEODXB - Car Dealer SEO",
  metaDesc: "Specialist SEO for automotive businesses in Riyadh. SEODXB helps dealerships, workshops, and car brands rank on Google and AI tools for vehicle searches.",
  h1: "SEO for Automotive in Riyadh: Rank for Vehicle Searches",
  intro: "Riyadh is Saudi Arabia's largest automotive market, with vehicle buyers researching models, prices, and dealers extensively online in Arabic and English before visiting a showroom. SEODXB delivers automotive SEO in Riyadh: inventory and model-page SEO, local dealership Map Pack visibility, and lead-capture optimisation that drives qualified enquiries.",
  scope: "Automotive in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Automotive SEO Built for Riyadh",
  featuresSubtitle: "Inventory and local SEO that connects Riyadh car buyers with dealerships online.",
  faqTitle: "Automotive SEO Riyadh - FAQs",
  ctaTitle: "Grow Your Riyadh Automotive Business Online",
  ctaDesc: "Book a free consultation and we'll map an automotive SEO strategy for Riyadh.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-logistics-riyadh", {
  keyword: "SEO for Logistics in Riyadh", badge: "Logistics SEO in Riyadh",
  title: "SEO for Logistics in Riyadh | SEODXB - B2B Logistics SEO",
  metaDesc: "Specialist SEO for logistics businesses in Riyadh. SEODXB helps freight, warehousing, and supply chain companies rank on Google and generate B2B leads.",
  h1: "SEO for Logistics in Riyadh: Generate B2B Leads from Organic Search",
  intro: "Riyadh is Saudi Arabia's logistics hub, with shippers and businesses comparing freight and fulfilment partners through online research before awarding contracts. SEODXB delivers logistics SEO in Riyadh: service-page SEO, route and solution keyword targeting, and B2B lead generation that fills your sales pipeline from organic search.",
  scope: "Logistics in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Logistics SEO Built for Riyadh",
  featuresSubtitle: "B2B logistics SEO that generates shipper enquiries from Riyadh organic search.",
  faqTitle: "Logistics SEO Riyadh - FAQs",
  ctaTitle: "Generate Logistics Leads in Riyadh",
  ctaDesc: "Book a free consultation and we'll map a logistics SEO strategy for the Riyadh market.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-education-riyadh", {
  keyword: "SEO for Education in Riyadh", badge: "Education SEO in Riyadh",
  title: "SEO for Education in Riyadh | SEODXB - School and University SEO",
  metaDesc: "Specialist SEO for education businesses in Riyadh. SEODXB helps international schools, universities, and training providers rank where parents and students search.",
  h1: "SEO for Education in Riyadh: Be Found by Parents and Students",
  intro: "Riyadh parents and students research international schools, universities, and training programmes extensively online before enrolling. SEODXB delivers education SEO in Riyadh: admissions content, curriculum and FAQ schema, and reputation-driven rankings that position your institution as the clear choice for families making high-value education decisions.",
  scope: "Education in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Education SEO Built for Riyadh",
  featuresSubtitle: "School and university SEO that attracts enquiries from Riyadh families and students.",
  faqTitle: "Education SEO Riyadh - FAQs",
  ctaTitle: "Grow Enrolments for Your Riyadh Institution",
  ctaDesc: "Book a free consultation and we'll map an education SEO strategy for Riyadh.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-oil-gas-riyadh", {
  keyword: "SEO for Oil and Gas in Riyadh", badge: "Oil and Gas SEO in Riyadh",
  title: "SEO for Oil and Gas in Riyadh | SEODXB - Energy Sector SEO",
  metaDesc: "Specialist SEO for oil and gas businesses in Riyadh. SEODXB helps energy sector companies rank on Google and generate B2B leads from procurement and partner research.",
  h1: "SEO for Oil and Gas in Riyadh: B2B Visibility in the Energy Capital",
  intro: "Riyadh is home to Saudi Aramco, SABIC, and the Kingdom's largest energy procurement teams, where supplier and partner decisions begin with online research. SEODXB delivers oil and gas SEO in Riyadh: capability and compliance content, B2B keyword authority, and supplier-discovery visibility that positions your business in front of key decision-makers.",
  scope: "Oil and Gas in Riyadh", served: "Riyadh, Saudi Arabia",
  featuresTitle: "Oil and Gas SEO Built for Riyadh",
  featuresSubtitle: "B2B energy sector SEO that builds supplier authority in Saudi Arabia's energy capital.",
  faqTitle: "Oil and Gas SEO Riyadh - FAQs",
  ctaTitle: "Build B2B Visibility in Riyadh's Energy Market",
  ctaDesc: "Book a free consultation and we'll map an oil and gas SEO strategy for Riyadh.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-doha", {
  keyword: "SEO for Real Estate in Doha", badge: "Real Estate SEO in Doha",
  title: "SEO for Real Estate in Doha | SEODXB - Property SEO",
  metaDesc: "Specialist SEO for real estate businesses in Doha. SEODXB helps developers, agents, and platforms rank on Google and AI tools for Qatar property searches.",
  h1: "SEO for Real Estate in Doha: Be Found by Qatar Property Buyers",
  intro: "Doha's real estate market is growing rapidly, driven by Qatar's diversification push and a large expatriate community researching properties online. SEODXB delivers real estate SEO in Doha: project and community page ranking, off-plan keyword targeting, and AI property search citations that capture buyers early in their decision process.",
  scope: "Real Estate in Doha", served: "Doha, Qatar",
  featuresTitle: "Real Estate SEO Built for Doha",
  featuresSubtitle: "Property SEO that connects Doha developers and agents with buyers online.",
  faqTitle: "Real Estate SEO Doha - FAQs",
  ctaTitle: "Grow Your Doha Property Business Online",
  ctaDesc: "Book a free consultation and we'll map a real estate SEO strategy for Doha.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-hospitality-doha", {
  keyword: "SEO for Hospitality in Doha", badge: "Hospitality SEO in Doha",
  title: "SEO for Hospitality in Doha | SEODXB - Hotel and Venue SEO",
  metaDesc: "Specialist SEO for hospitality businesses in Doha. SEODXB helps hotels, resorts, and venues rank on Google and AI travel tools, driving direct bookings.",
  h1: "SEO for Hospitality in Doha: Win Bookings from Google and AI Travel",
  intro: "Doha's hospitality sector is thriving in the post-World Cup era, with travellers comparing hotels, resorts, and venues across Google, OTAs, and AI trip planners. SEODXB delivers hospitality SEO in Doha: destination content, direct-booking SEO, and AI travel citation building that drives revenue independent of OTA commissions.",
  scope: "Hospitality in Doha", served: "Doha, Qatar",
  featuresTitle: "Hospitality SEO Built for Doha",
  featuresSubtitle: "Hotel and venue SEO that drives direct bookings in Doha's competitive hospitality market.",
  faqTitle: "Hospitality SEO Doha - FAQs",
  ctaTitle: "Grow Your Doha Hospitality Business Online",
  ctaDesc: "Book a free consultation and we'll map a hospitality SEO strategy for Doha.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-manama", {
  keyword: "SEO for Real Estate in Manama", badge: "Real Estate SEO in Manama",
  title: "SEO for Real Estate in Manama | SEODXB - Property SEO Bahrain",
  metaDesc: "Specialist SEO for real estate businesses in Manama, Bahrain. SEODXB helps developers and agents rank on Google and AI tools for Bahrain property searches.",
  h1: "SEO for Real Estate in Manama: Be Found by Bahrain Property Buyers",
  intro: "Manama's real estate market is driven by Bahrain's financial services hub status and a growing professional expatriate community researching properties online. SEODXB delivers real estate SEO in Manama: project and community page ranking, keyword targeting for Bahrain's property market, and AI property search citations.",
  scope: "Real Estate in Manama", served: "Manama, Bahrain",
  featuresTitle: "Real Estate SEO Built for Manama",
  featuresSubtitle: "Property SEO that connects Manama developers and agents with buyers across Bahrain.",
  faqTitle: "Real Estate SEO Manama - FAQs",
  ctaTitle: "Grow Your Manama Property Business Online",
  ctaDesc: "Book a free consultation and we'll map a real estate SEO strategy for Manama.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-fintech-doha", {
  keyword: "SEO for Fintech in Doha", badge: "Fintech SEO in Doha",
  title: "SEO for Fintech in Doha | SEODXB - Fintech SEO Qatar",
  metaDesc: "Specialist SEO for fintech businesses in Doha. SEODXB helps fintech companies rank on Google and AI tools, build authority, and generate B2B leads in Qatar.",
  h1: "SEO for Fintech in Doha: Build Category Authority in Qatar",
  intro: "Doha is becoming a regional fintech hub as Qatar diversifies from its LNG economy, with fintech businesses competing for search visibility among enterprise clients and retail users. SEODXB delivers fintech SEO in Doha: product SEO, compliance-aligned content, and category-defining authority that makes your fintech platform the trusted choice in Qatar.",
  scope: "Fintech in Doha", served: "Doha, Qatar",
  featuresTitle: "Fintech SEO Built for Doha",
  featuresSubtitle: "Technical and content fintech SEO for Doha's growing financial services market.",
  faqTitle: "Fintech SEO Doha - FAQs",
  ctaTitle: "Build Fintech SEO Authority in Doha",
  ctaDesc: "Book a free consultation and we'll map a fintech SEO strategy for Qatar.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-hotels-doha", {
  keyword: "SEO for Hotels in Doha", badge: "Hotel SEO in Doha",
  title: "SEO for Hotels in Doha | SEODXB - Hospitality SEO Qatar",
  metaDesc: "Specialist SEO for hotels in Doha. SEODXB helps properties rank on Google and AI trip planners, driving direct bookings in Qatar's capital.",
  h1: "SEO for Hotels in Doha: Drive Direct Bookings from Google and AI",
  intro: "Doha's hotel market is highly competitive, with travellers comparing properties across Google, OTAs, and AI trip planners. SEODXB delivers hotel SEO in Doha: direct-booking SEO, destination and experience content, and AI travel citation building that captures guests directly and reduces reliance on high-commission OTA channels.",
  scope: "Hotels in Doha", served: "Doha, Qatar",
  featuresTitle: "Hotel SEO Built for Doha",
  featuresSubtitle: "Hospitality SEO that drives direct bookings for hotels across Qatar's capital.",
  faqTitle: "Hotel SEO Doha - FAQs",
  ctaTitle: "Grow Your Doha Hotel's Direct Bookings",
  ctaDesc: "Book a free consultation and we'll map a hotel SEO strategy for Doha.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-ecommerce-kuwait", {
  keyword: "SEO for Ecommerce in Kuwait", badge: "Ecommerce SEO in Kuwait",
  title: "SEO for Ecommerce in Kuwait | SEODXB - Online Store SEO",
  metaDesc: "Specialist ecommerce SEO in Kuwait from SEODXB. Product and category SEO, shopping schema, and bilingual Arabic-English content for Kuwait online stores.",
  h1: "SEO for Ecommerce in Kuwait: Rank Your Store and Drive Sales",
  intro: "Kuwait's high-income consumer base and high smartphone penetration make it one of the GCC's most valuable ecommerce markets, with shoppers researching products online before purchasing. SEODXB delivers ecommerce SEO in Kuwait: product-page optimisation, category architecture, shopping schema, and bilingual Arabic-English content that drives organic sales.",
  scope: "Ecommerce in Kuwait", served: "Kuwait",
  featuresTitle: "Ecommerce SEO Built for Kuwait",
  featuresSubtitle: "Product, category, and technical SEO that drives organic sales in Kuwait's premium ecommerce market.",
  faqTitle: "Ecommerce SEO Kuwait - FAQs",
  ctaTitle: "Grow Your Kuwait Ecommerce Store Organically",
  ctaDesc: "Book a free consultation and we'll map an ecommerce SEO strategy for Kuwait.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-muscat", {
  keyword: "SEO for Real Estate in Muscat", badge: "Real Estate SEO in Muscat",
  title: "SEO for Real Estate in Muscat | SEODXB - Property SEO Oman",
  metaDesc: "Specialist SEO for real estate businesses in Muscat. SEODXB helps developers, agents, and platforms rank on Google and AI tools for Oman property searches.",
  h1: "SEO for Real Estate in Muscat: Be Found by Property Buyers in Oman",
  intro: "Muscat's real estate market is growing under Oman's Vision 2040 diversification, with buyers and investors researching properties online. SEODXB delivers real estate SEO in Muscat: project and community page ranking, off-plan keyword targeting, and AI property search citations that capture buyers across Oman's capital.",
  scope: "Real Estate in Muscat", served: "Muscat, Oman",
  featuresTitle: "Real Estate SEO Built for Muscat",
  featuresSubtitle: "Property SEO that connects Muscat developers and agents with buyers online.",
  faqTitle: "Real Estate SEO Muscat - FAQs",
  ctaTitle: "Grow Your Muscat Property Business Online",
  ctaDesc: "Book a free consultation and we'll map a real estate SEO strategy for Muscat.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-tourism-muscat", {
  keyword: "SEO for Tourism in Muscat", badge: "Tourism SEO in Muscat",
  title: "SEO for Tourism in Muscat | SEODXB - Destination and Experience SEO",
  metaDesc: "Specialist SEO for tourism businesses in Muscat. SEODXB helps tour operators, destinations, and hospitality providers rank on Google and AI travel planners in Oman.",
  h1: "SEO for Tourism in Muscat: Be Found by Travellers Planning Their Visit",
  intro: "Muscat is emerging as one of the Gulf's most authentic travel destinations, with tourists researching experiences, accommodation, and activities across Google and AI trip planners. SEODXB delivers tourism SEO in Muscat: destination content, experience-page SEO, and AI travel recommendation visibility that drives bookings for Oman tourism operators.",
  scope: "Tourism in Muscat", served: "Muscat, Oman",
  featuresTitle: "Tourism SEO Built for Muscat",
  featuresSubtitle: "Destination and experience SEO that puts Muscat's tourism businesses on the map.",
  faqTitle: "Tourism SEO Muscat - FAQs",
  ctaTitle: "Grow Your Muscat Tourism Business Online",
  ctaDesc: "Book a free consultation and we'll map a tourism SEO strategy for Muscat.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-tech-amman", {
  keyword: "SEO for Technology in Amman", badge: "Tech SEO in Amman",
  title: "SEO for Technology in Amman | SEODXB - Tech and Startup SEO",
  metaDesc: "Specialist SEO for technology businesses in Amman. SEODXB helps tech companies and startups rank on Google and AI tools in Jordan's growing tech hub.",
  h1: "SEO for Technology in Amman: Build Your Digital Presence in Jordan's Tech Hub",
  intro: "Amman is the Levant's leading tech ecosystem, home to regional headquarters, fast-growing startups, and a strong SaaS and professional services community. Tech buyers and decision-makers evaluate platforms and services online first, making SEO a critical acquisition channel. SEODXB delivers tech SEO in Amman: product and solution SEO, thought-leadership content, and B2B category authority.",
  scope: "Technology in Amman", served: "Amman, Jordan",
  featuresTitle: "Technology SEO Built for Amman",
  featuresSubtitle: "B2B tech SEO that builds category authority for Amman's growing tech ecosystem.",
  faqTitle: "Technology SEO Amman - FAQs",
  ctaTitle: "Build Tech SEO Authority in Amman",
  ctaDesc: "Book a free consultation and we'll map a technology SEO strategy for Amman.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-amman", {
  keyword: "SEO for Real Estate in Amman", badge: "Real Estate SEO in Amman",
  title: "SEO for Real Estate in Amman | SEODXB - Property SEO Jordan",
  metaDesc: "Specialist SEO for real estate businesses in Amman. SEODXB helps developers and agents rank on Google and AI tools for Jordan property searches.",
  h1: "SEO for Real Estate in Amman: Be Found by Property Buyers in Jordan",
  intro: "Amman's real estate market is driven by strong domestic demand, regional investment, and a growing professional class researching properties online. SEODXB delivers real estate SEO in Amman: project and community page ranking, off-plan and residential keyword targeting, and AI property search citations that capture buyers across the Jordanian capital.",
  scope: "Real Estate in Amman", served: "Amman, Jordan",
  featuresTitle: "Real Estate SEO Built for Amman",
  featuresSubtitle: "Property SEO that connects Amman developers and agents with buyers online.",
  faqTitle: "Real Estate SEO Amman - FAQs",
  ctaTitle: "Grow Your Amman Property Business Online",
  ctaDesc: "Book a free consultation and we'll map a real estate SEO strategy for Amman.",
  ctaButton: "Get Free Consultation",
});

// ===== Kuwait sector pages: automotive, healthcare, and AI/technology =====

commercial("seo-for-automotive-kuwait", {
  keyword: "SEO for Automotive Companies in Kuwait", badge: "Automotive SEO in Kuwait",
  title: "SEO for Automotive Companies in Kuwait | SEODXB",
  metaDesc: "Automotive SEO in Kuwait from SEODXB. Rank car brands, models and dealers on Google and AI search in Arabic and English.",
  h1: "SEO for Automotive Companies in Kuwait: Be Found by Car Buyers",
  intro: "Car buyers in Kuwait research models, prices, and dealers extensively across Google and AI tools before they ever visit a showroom. SEODXB delivers automotive SEO in Kuwait: model and dealer page ranking, comparison and pricing keyword targeting, and AI search citations that put your brand in front of buyers in both Arabic and English.",
  scope: "Automotive companies in Kuwait", served: "Kuwait",
  featuresTitle: "Automotive SEO Built for Kuwait",
  featuresSubtitle: "Model, dealer, and comparison SEO that captures Kuwait car buyers across Google and AI search.",
  faqTitle: "Automotive SEO Kuwait - FAQs",
  ctaTitle: "Put Your Kuwait Automotive Brand in Front of Buyers",
  ctaDesc: "Book a free consultation and we'll map an automotive SEO strategy for Kuwait.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-car-dealerships-kuwait", {
  keyword: "SEO for Car Dealerships in Kuwait", badge: "Car Dealership SEO in Kuwait",
  title: "SEO for Car Dealerships in Kuwait | SEODXB",
  metaDesc: "Car dealership SEO in Kuwait from SEODXB. Rank your showroom, models and offers on Google, Maps and AI search, bilingual.",
  h1: "SEO for Car Dealerships in Kuwait: Drive Showroom Visits",
  intro: "A car dealership in Kuwait competes for buyers who compare models, offers, and showrooms online before deciding where to go. SEODXB delivers dealership SEO in Kuwait: local Map Pack visibility, model and offer pages that rank, review and reputation signals, and AI search citations that send high-intent buyers to your showroom in Arabic and English.",
  scope: "Car dealerships in Kuwait", served: "Kuwait",
  featuresTitle: "Dealership SEO Built for Kuwait",
  featuresSubtitle: "Local, model, and offer SEO that turns Kuwait online searches into showroom visits.",
  faqTitle: "Car Dealership SEO Kuwait - FAQs",
  ctaTitle: "Fill Your Kuwait Showroom With Online Buyers",
  ctaDesc: "Book a free consultation and we'll map a dealership SEO strategy for Kuwait.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-healthcare-kuwait", {
  keyword: "SEO for Healthcare in Kuwait", badge: "Healthcare SEO in Kuwait",
  title: "SEO for Healthcare Providers in Kuwait | SEODXB",
  metaDesc: "Healthcare SEO in Kuwait from SEODXB. Help patients find your hospital or clinic on Google and AI search, Arabic and English.",
  h1: "SEO for Healthcare Providers in Kuwait: Be Found by Patients",
  intro: "Patients in Kuwait research providers, treatments, and specialist clinics across Google and AI tools before booking. SEODXB delivers healthcare SEO in Kuwait: treatment and specialty page ranking, local and Map Pack visibility, medical schema, and AI search citations that build trust and bring patients to your hospital or clinic in Arabic and English.",
  scope: "Healthcare providers in Kuwait", served: "Kuwait",
  featuresTitle: "Healthcare SEO Built for Kuwait",
  featuresSubtitle: "Treatment, specialty, and local SEO that connects Kuwait patients with your practice.",
  faqTitle: "Healthcare SEO Kuwait - FAQs",
  ctaTitle: "Bring More Patients to Your Kuwait Practice",
  ctaDesc: "Book a free consultation and we'll map a healthcare SEO strategy for Kuwait.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-clinics-kuwait", {
  keyword: "SEO for Clinics and Medical Centres in Kuwait", badge: "Clinic SEO in Kuwait",
  title: "SEO for Clinics and Medical Centres in Kuwait | SEODXB",
  metaDesc: "Clinic SEO in Kuwait from SEODXB. Rank your medical centre and specialties on Google, Maps and AI search, Arabic and English.",
  h1: "SEO for Clinics and Medical Centres in Kuwait",
  intro: "Clinics and medical centres in Kuwait win patients who search by symptom, treatment, and location before choosing where to book. SEODXB delivers clinic SEO in Kuwait: specialty and treatment pages that rank, Google Business Profile and Map Pack optimisation, review signals, and AI search citations that put your centre in front of nearby patients in Arabic and English.",
  scope: "Clinics and medical centres in Kuwait", served: "Kuwait",
  featuresTitle: "Clinic SEO Built for Kuwait",
  featuresSubtitle: "Specialty, treatment, and local SEO that fills appointment books across Kuwait.",
  faqTitle: "Clinic SEO Kuwait - FAQs",
  ctaTitle: "Fill Your Kuwait Clinic's Appointment Book",
  ctaDesc: "Book a free consultation and we'll map a clinic SEO strategy for Kuwait.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-tech-companies-kuwait", {
  keyword: "SEO for Technology and AI Companies in Kuwait", badge: "Tech and AI SEO in Kuwait",
  title: "SEO for Technology and AI Companies in Kuwait | SEODXB",
  metaDesc: "SEO for tech and AI companies in Kuwait from SEODXB. Rank and get cited by AI search engines, bilingual Arabic-English.",
  h1: "SEO for Technology and AI Companies in Kuwait",
  intro: "Technology and AI companies in Kuwait are evaluated by buyers and investors who research platforms through Google and AI comparison tools first. SEODXB delivers tech and AI SEO in Kuwait: product and solution page ranking, thought-leadership content that earns authority, and AEO and GEO work so your company is cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews in Arabic and English.",
  scope: "Technology and AI companies in Kuwait", served: "Kuwait",
  featuresTitle: "Tech and AI SEO Built for Kuwait",
  featuresSubtitle: "Product, authority, and AI-search optimisation that wins Kuwait technology buyers.",
  faqTitle: "Tech and AI SEO Kuwait - FAQs",
  ctaTitle: "Make Your Kuwait Tech Company the AI-Cited Choice",
  ctaDesc: "Book a free consultation and we'll map a tech and AI SEO strategy for Kuwait.",
  ctaButton: "Get Free Consultation",
});

commercial("ai-search-optimization-kuwait", {
  keyword: "AI Search Optimization (AEO and GEO) in Kuwait", badge: "AI Search Optimization in Kuwait",
  title: "AI Search Optimization in Kuwait (AEO and GEO) | SEODXB",
  metaDesc: "AI search optimization in Kuwait from SEODXB. Get your brand cited by ChatGPT, Perplexity, Gemini and Google AI Overviews.",
  h1: "AI Search Optimization in Kuwait: Get Cited by AI Answer Engines",
  intro: "Buyers in Kuwait increasingly ask ChatGPT, Perplexity, Gemini, and Google AI Overviews for recommendations instead of scrolling search results. SEODXB delivers answer engine optimization (AEO) and generative engine optimization (GEO) in Kuwait: structured, answer-first content, entity and schema work, and authority signals that get your brand cited by AI engines in both Arabic and English.",
  scope: "AI search optimization in Kuwait", served: "Kuwait",
  featuresTitle: "AEO and GEO Built for Kuwait",
  featuresSubtitle: "Answer-first content and entity work that earn AI citations across Kuwait's key sectors.",
  faqTitle: "AI Search Optimization Kuwait - FAQs",
  ctaTitle: "Get Your Kuwait Brand Cited by AI Engines",
  ctaDesc: "Book a free consultation and we'll map an AEO and GEO strategy for Kuwait.",
  ctaButton: "Get Free Consultation",
});

// ===== Matching service pages for the editorial-calendar cluster =====

commercial("b2b-lead-generation-doha", {
  keyword: "B2B Lead Generation in Doha", badge: "B2B Lead Generation in Doha",
  title: "B2B Lead Generation in Doha | SEODXB - SEO That Converts",
  metaDesc: "B2B lead generation in Doha from SEODXB. We build search and content channels that originate qualified pipeline, not just last-click leads.",
  h1: "B2B Lead Generation in Doha: Find Where Your Leads Really Come From",
  intro: "Most Doha B2B companies misjudge where their qualified leads come from, crediting the last click and under-investing in the channels that do the real work. SEODXB builds the search and content engine that originates qualified pipeline in Doha: high-intent SEO, authority content, and measurement that credits the channels that genuinely convert, in both Arabic and English.",
  scope: "B2B lead generation in Doha", served: "Doha, Qatar",
  featuresTitle: "B2B Lead Generation Built for Doha",
  featuresSubtitle: "Search, content, and measurement that originate qualified Doha pipeline, not just last-click leads.",
  faqTitle: "B2B Lead Generation Doha - FAQs",
  ctaTitle: "Build a Pipeline of Qualified Doha B2B Leads",
  ctaDesc: "Book a free consultation and we'll map a lead generation strategy for your Doha business.",
  ctaButton: "Get Free Consultation",
});

commercial("technical-seo-kuwait", {
  keyword: "Technical SEO in Kuwait", badge: "Technical SEO and Speed in Kuwait",
  title: "Technical SEO in Kuwait | SEODXB - Speed and Core Web Vitals",
  metaDesc: "Technical SEO in Kuwait from SEODXB. We fix Core Web Vitals, site speed, crawlability and structure so your site ranks and converts.",
  h1: "Technical SEO in Kuwait: Fast, Crawlable, and Ready to Rank",
  intro: "Kuwait has some of the fastest connections in the region, yet many local sites still feel slow, and that costs rankings and conversions. SEODXB delivers technical SEO in Kuwait: Core Web Vitals and site-speed fixes, crawlability, structured data, and clean architecture that let your content rank and your visitors convert, in both Arabic and English.",
  scope: "Technical SEO in Kuwait", served: "Kuwait",
  featuresTitle: "Technical SEO Built for Kuwait",
  featuresSubtitle: "Core Web Vitals, speed, crawlability, and structure that turn a slow site into a fast, ranking one.",
  faqTitle: "Technical SEO Kuwait - FAQs",
  ctaTitle: "Make Your Kuwait Site Fast and Search-Ready",
  ctaDesc: "Book a free consultation and we'll map a technical SEO plan for your Kuwait site.",
  ctaButton: "Get Free Consultation",
});

commercial("international-seo-saudi-arabia", {
  keyword: "International and Arabic SEO in Saudi Arabia", badge: "Arabic and English SEO in Saudi Arabia",
  title: "International and Arabic SEO in Saudi Arabia | SEODXB",
  metaDesc: "Arabic and English SEO in Saudi Arabia from SEODXB. Hreflang, native Arabic content and structure so both languages rank without competing.",
  h1: "International and Arabic SEO in Saudi Arabia",
  intro: "Serving both Arabic and English is essential in Saudi Arabia, but done wrong the two versions compete and split your rankings. SEODXB delivers international and Arabic SEO in Saudi Arabia: correct hreflang, clean bilingual structure, and native Arabic content, not translation, so each language ranks on its own merits and the underserved Arabic side becomes your advantage.",
  scope: "International and Arabic SEO in Saudi Arabia", served: "Saudi Arabia",
  featuresTitle: "Arabic and English SEO Built for Saudi Arabia",
  featuresSubtitle: "Hreflang, bilingual structure, and native Arabic content that rank without competing or diluting.",
  faqTitle: "Arabic and International SEO Saudi Arabia - FAQs",
  ctaTitle: "Rank in Both Arabic and English in Saudi Arabia",
  ctaDesc: "Book a free consultation and we'll map a bilingual SEO strategy for Saudi Arabia.",
  ctaButton: "Get Free Consultation",
});

// Hand-crafted daily pages (2026-08-08): genuinely city-specific commercial
// pages filling verified gaps (Riyadh ecommerce SEO, Doha Google Ads).
const extraGCCPages: KeywordPageConfig[] = [
  {
    slug: "ecommerce-seo-riyadh",
    keyword: "Ecommerce SEO Riyadh",
    badge: "Ecommerce SEO for Riyadh Stores",
    title: "Ecommerce SEO Riyadh | SEODXB Online Store Growth",
    metaDesc: "SEODXB grows online stores in Riyadh with Arabic-first ecommerce SEO. Rank category and product pages on Google and get cited by AI shopping answers.",
    h1: "Ecommerce SEO That Grows Riyadh Online Stores",
    intro: "Riyadh is at the centre of Saudi Arabia's fast-growing ecommerce market, with a young, mobile-first population that shops online and often searches in Arabic first. SEODXB helps Riyadh stores win organic traffic that converts: Arabic-led category architecture, product pages built to rank and sell, correct bilingual implementation, and content structured so AI shopping answers cite your products. The aim is qualified buyers, not traffic for its own sake.",
    svgVariant: "growth",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=640&h=480&fit=crop&q=80&auto=format",
    featuresTitle: "How SEODXB Grows Ecommerce in Riyadh",
    featuresSubtitle: "Arabic-first ecommerce SEO built for how Saudi shoppers actually search and buy.",
    features: [
      { title: "Arabic-First Keyword Research", desc: "We research how Riyadh shoppers describe products in Arabic and let that shape your categories, filters and titles, rather than translating an English structure." },
      { title: "Category Architecture", desc: "We build a clear, shallow architecture so your most valuable categories are easy for shoppers and search engines to reach and rank." },
      { title: "Product Pages That Convert", desc: "We write original product content with specifications, use cases and Product structured data so pages rank and represent well in rich results." },
      { title: "Faceted Navigation Control", desc: "We manage filters and facets so your store does not spawn thousands of thin, near-duplicate URLs that waste crawl budget." },
      { title: "Correct Bilingual Setup", desc: "We implement hreflang and crawlable Arabic and English versions properly so neither is treated as a duplicate and each ranks in its own language." },
      { title: "AI Shopping Visibility", desc: "We structure your catalogue so AI tools can cite your products accurately when shoppers ask them for recommendations." },
    ],
    stats: [
      { value: "AR/EN", label: "Bilingual store SEO" },
      { value: "3", label: "Search surfaces covered" },
      { value: "24/7", label: "Always-on visibility" },
      { value: "100%", label: "Focused on search" },
    ],
    faqTitle: "Ecommerce SEO Riyadh - FAQs",
    faqs: [
      { q: "Do I need an Arabic version of my Riyadh online store?", a: "In most categories, yes. A large share of high-intent shopping searches in Saudi Arabia happen in Arabic. The Arabic version should be a first-class experience with its own keyword-led categories and product content, not a thin machine translation, because that is where much of the demand and least competition sit." },
      { q: "What drives the most ecommerce traffic, category or product pages?", a: "Category pages usually drive the most commercial organic traffic because they match how people shop by type, brand and use case. Product pages are essential for ranking on specific items and converting. A strong store optimises both, linked by a clear architecture." },
      { q: "How do I stop filters from hurting my store's SEO?", a: "We decide deliberately which filtered views deserve indexing and prevent the rest from creating thin, near-duplicate URLs. Handling faceted navigation well protects crawl budget and keeps ranking signals on the pages that matter." },
      { q: "How long does ecommerce SEO take in Riyadh?", a: "Long-tail product and category terms can improve within a few months, while competitive head terms take longer. Ecommerce SEO compounds, so a consistent programme builds steady organic sales over time rather than delivering all at once." },
      { q: "How do online stores get recommended by AI shopping tools?", a: "By making product and category content clear, structured and factually consistent, with specifications, prices and availability that machines can parse. Structured data and consistent facts across your site and listings help AI engines represent your products accurately." },
    ],
    extendedContent: [
      {
        heading: "Why Riyadh Is a Real Ecommerce Opportunity",
        paragraphs: [
          "Riyadh combines a large, young, highly connected population with rising online spending and a national push towards a digital economy. That produces genuine demand, but also competition from regional marketplaces and international brands with deep budgets. The stores that win organic traffic are not necessarily the biggest; they are the ones built for how Saudi shoppers actually search, which in most categories means Arabic first.",
          "For an independent Riyadh store, that is the opening. Marketplaces rank broadly but rarely with depth on specific categories and the exact Arabic phrasing shoppers use. A focused store with genuine Arabic-led category and product content can capture high-intent searches those larger players serve poorly, and convert them into sales.",
        ],
      },
      {
        heading: "Arabic-First Is a Strategy, Not a Translation",
        paragraphs: [
          "Many Saudi stores build in English and add a translated Arabic version late, which is backwards for a market where so much high-intent shopping happens in Arabic. Arabic-first means doing the keyword research in Arabic, understanding the phrasing and dialect that shoppers use, and letting that shape your categories, filters and titles rather than mirroring an English structure that never matched local behaviour.",
          "Done properly, this captures demand that translated, English-first competitors miss entirely. The Arabic version reads naturally to a native speaker, targets the terms shoppers actually search, and ranks in its own right, while correct hreflang keeps it and the English version distinct. That combination is what turns Arabic search from an afterthought into a competitive advantage.",
        ],
      },
    ],
    ctaTitle: "Grow Your Riyadh Store With Search",
    ctaDesc: "Book a free ecommerce SEO review. We will show you where Saudi shoppers are searching, where your store is losing traffic, and how to capture more sales.",
    ctaButton: "Get a Free Ecommerce SEO Review",
    areaServed: "Riyadh, Saudi Arabia",
  },
  {
    slug: "google-ads-doha",
    keyword: "Google Ads Doha",
    badge: "Google Ads & PPC in Doha",
    title: "Google Ads Doha | SEODXB PPC Management Qatar",
    metaDesc: "SEODXB manages Google Ads for businesses in Doha and across Qatar. High-intent Arabic and English campaigns measured on qualified enquiries, not vanity clicks.",
    h1: "Google Ads Management That Delivers Enquiries in Doha",
    intro: "Doha is a compact but competitive market where the businesses that win paid search are those that run tight, well-targeted campaigns rather than the ones that simply spend more. SEODXB manages Google Ads for businesses across Doha, West Bay, Lusail and Al Wakrah, focusing budget on the high-intent Arabic and English searches most likely to become customers and measuring everything against cost per qualified enquiry. Whether you need immediate leads or a paid programme alongside SEO, we build campaigns that respect your budget.",
    svgVariant: "growth",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=640&h=480&fit=crop&q=80&auto=format",
    featuresTitle: "What SEODXB's Google Ads Management Covers in Qatar",
    featuresSubtitle: "A tightly run PPC programme built for Qatar's bilingual, high-value search market.",
    features: [
      { title: "High-Intent Targeting", desc: "We focus budget on bottom-of-funnel searches across Doha that signal readiness to buy, and cut the broad terms that drain spend without converting." },
      { title: "Arabic & English Campaigns", desc: "We build and write campaigns in both languages so you reach the whole Qatar market, including the Arabic searches many accounts ignore." },
      { title: "Accurate Conversion Tracking", desc: "We set up proper conversion tracking so every campaign is measured against real enquiries, calls and bookings rather than raw clicks." },
      { title: "Quality Score & Landing Pages", desc: "We align ads with focused landing pages to lift Quality Score, lowering cost per click and improving position at the same budget." },
      { title: "Wasted-Spend Audits", desc: "We continuously prune irrelevant search terms and weak keywords so budget flows to what actually produces enquiries." },
      { title: "Paired With SEO", desc: "We use paid data to sharpen your SEO and let organic rankings lower your blended cost per lead over time, rather than running ads in isolation." },
    ],
    stats: [
      { value: "AR/EN", label: "Bilingual campaigns" },
      { value: "CPL", label: "Measured on enquiries" },
      { value: "100%", label: "Focused on search" },
      { value: "0", label: "Long-term contracts" },
    ],
    faqTitle: "Google Ads Doha - FAQs",
    faqs: [
      { q: "How much should I spend on Google Ads in Doha?", a: "It depends on your category and goals. The right budget is the one that produces a profitable cost per qualified enquiry. We start at a level that gathers useful data, then scale the campaigns and keywords that convert." },
      { q: "How is Google Ads different from SEO in Qatar?", a: "Google Ads buys visibility instantly and stops when spend stops, which is ideal for immediate leads. SEO builds visibility that compounds and lowers cost per lead over time. Many Doha businesses benefit from running both together." },
      { q: "Do you run Google Ads in Arabic?", a: "Yes. Qatar is a bilingual market and many high-intent searches happen in Arabic. We build and write campaigns in both Arabic and English so you capture demand that English-only accounts miss." },
      { q: "How quickly can I get leads from Google Ads?", a: "Campaigns can go live within days and start producing enquiries almost immediately. The first weeks gather conversion data, after which cost per lead typically improves as we refine targeting and landing pages." },
      { q: "Is there a long-term contract?", a: "No. SEODXB works without long lock-in contracts and keeps the account transparent, earning continued management through results measured on qualified enquiries." },
    ],
    extendedContent: [
      {
        heading: "Winning Paid Search in a Compact, Competitive Market",
        paragraphs: [
          "Qatar's market is small in population but high in value, with strong spending power concentrated across Doha, West Bay, Lusail and Al Wakrah. That combination makes paid search competitive: many businesses chase the same limited pool of high-intent customers. The ones that succeed are not those with the largest budgets but those with the tightest accounts, precise targeting, strong landing pages and constant removal of wasted spend.",
          "We manage campaigns with that discipline. Budget goes to the searches closest to a purchase, Quality Score improvements lower what you pay for better positions, and every result is measured against cost per qualified enquiry. In a market this concentrated, account quality beats raw spend almost every time.",
        ],
      },
      {
        heading: "The Bilingual Edge in Qatar",
        paragraphs: [
          "Qatar is genuinely bilingual, yet many Google Ads accounts run in English only and forfeit a large share of high-intent Arabic searches. Arabic campaigns are not translated English keywords; they require real Arabic keyword research and ad copy that reads naturally, because the phrasing and intent behind Arabic searches differ from their English equivalents.",
          "Running both languages well widens your reach into demand competitors overlook, often at lower cost where Arabic competition is thinner. For businesses serving the whole of Qatar, bilingual campaigns are one of the most dependable ways to lower blended cost per lead and reach customers rivals never see.",
        ],
      },
    ],
    ctaTitle: "Get More From Your Google Ads Budget in Qatar",
    ctaDesc: "Book a free Google Ads review. We will audit your account or plan a new campaign and show you where budget is wasted and where the qualified leads are.",
    ctaButton: "Get a Free Google Ads Review",
    areaServed: "Doha, Qatar",
  },
];

export const gccKeywordPages: KeywordPageConfig[] = [...pages, ...extraGCCPages];
