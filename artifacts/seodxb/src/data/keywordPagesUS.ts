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

function pick(slug: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % mod;
}

interface Loc {
  name: string;
  state: string;
  served: string;
  context: string;
  sectors: string;
}

const L: Record<string, Loc> = {
  "new-york": {
    name: "New York",
    state: "NY",
    served: "New York, NY, USA",
    context: "New York is the world's financial and media capital, where professional services, SaaS, and brands fight for visibility in an intensely competitive organic search market.",
    sectors: "finance, media, professional services, and SaaS",
  },
  "los-angeles": {
    name: "Los Angeles",
    state: "CA",
    served: "Los Angeles, CA, USA",
    context: "Los Angeles drives entertainment, fashion, and tech, from Hollywood studios to the Silicon Beach startup scene and one of the US's largest ecommerce markets.",
    sectors: "entertainment, fashion, tech, and real estate",
  },
  chicago: {
    name: "Chicago",
    state: "IL",
    served: "Chicago, IL, USA",
    context: "Chicago is the Midwest's business capital, home to Fortune 500 headquarters, a booming fintech scene, and competitive markets in healthcare, logistics, and professional services.",
    sectors: "finance, logistics, healthcare, and professional services",
  },
  houston: {
    name: "Houston",
    state: "TX",
    served: "Houston, TX, USA",
    context: "Houston is the US energy capital with the largest medical complex in the world, a diversified economy, and a growing tech and aerospace sector.",
    sectors: "energy, healthcare, aerospace, and tech",
  },
  dallas: {
    name: "Dallas",
    state: "TX",
    served: "Dallas, TX, USA",
    context: "Dallas anchors one of the US's fastest-growing metros, with major finance, telecom, tech, and real estate markets competing for high-intent search traffic.",
    sectors: "finance, telecom, tech, and real estate",
  },
  "san-francisco": {
    name: "San Francisco",
    state: "CA",
    served: "San Francisco, CA, USA",
    context: "San Francisco and the Bay Area is the global hub for SaaS, venture capital, and tech innovation, where B2B companies compete fiercely for developer and enterprise audiences.",
    sectors: "SaaS, venture capital, fintech, and enterprise tech",
  },
  seattle: {
    name: "Seattle",
    state: "WA",
    served: "Seattle, WA, USA",
    context: "Seattle hosts Amazon, Microsoft, and a deep bench of tech and logistics companies, driving intense B2B SaaS, cloud, and ecommerce search competition.",
    sectors: "tech, ecommerce, logistics, and SaaS",
  },
  miami: {
    name: "Miami",
    state: "FL",
    served: "Miami, FL, USA",
    context: "Miami has become a fast-growing tech and finance hub alongside its traditional strength in tourism, real estate, and Latin American business.",
    sectors: "tech, finance, real estate, and tourism",
  },
  boston: {
    name: "Boston",
    state: "MA",
    served: "Boston, MA, USA",
    context: "Boston's economy is anchored by world-class universities, a leading biotech and healthcare cluster, and a mature financial services market.",
    sectors: "biotech, healthcare, finance, and education",
  },
  austin: {
    name: "Austin",
    state: "TX",
    served: "Austin, TX, USA",
    context: "Austin is the fastest-growing major US tech city, home to a booming startup ecosystem, major enterprise tech campuses, and a vibrant SME economy.",
    sectors: "tech, startups, SaaS, and real estate",
  },
  denver: {
    name: "Denver",
    state: "CO",
    served: "Denver, CO, USA",
    context: "Denver sits at the centre of the Mountain West's growing tech, cannabis, outdoor, and professional services economy.",
    sectors: "tech, outdoor, healthcare, and professional services",
  },
  atlanta: {
    name: "Atlanta",
    state: "GA",
    served: "Atlanta, GA, USA",
    context: "Atlanta is the Southeast's commercial capital, with major media, fintech, logistics, and healthcare clusters competing for search visibility.",
    sectors: "media, fintech, logistics, and healthcare",
  },
  phoenix: {
    name: "Phoenix",
    state: "AZ",
    served: "Phoenix, AZ, USA",
    context: "Phoenix is one of the US's fastest-growing cities, with strong real estate, construction, healthcare, and manufacturing demand.",
    sectors: "real estate, construction, healthcare, and manufacturing",
  },
  philadelphia: {
    name: "Philadelphia",
    state: "PA",
    served: "Philadelphia, PA, USA",
    context: "Philadelphia combines a major healthcare and education economy with financial services, manufacturing, and a growing tech sector.",
    sectors: "healthcare, education, finance, and tech",
  },
  "san-diego": {
    name: "San Diego",
    state: "CA",
    served: "San Diego, CA, USA",
    context: "San Diego has a strong biotech, defence, tourism, and military services economy alongside a rapidly growing startup and ecommerce scene.",
    sectors: "biotech, defence, tourism, and tech",
  },
  portland: {
    name: "Portland",
    state: "OR",
    served: "Portland, OR, USA",
    context: "Portland is a hub for outdoor retail, sustainable brands, tech, and creative agencies with a progressive consumer base that researches brands online.",
    sectors: "tech, outdoor retail, sustainability, and creative services",
  },
  "las-vegas": {
    name: "Las Vegas",
    state: "NV",
    served: "Las Vegas, NV, USA",
    context: "Las Vegas is beyond casinos: a massive hospitality, events, and convention economy where restaurants, hotels, and entertainment businesses compete fiercely for search.",
    sectors: "hospitality, entertainment, events, and real estate",
  },
  minneapolis: {
    name: "Minneapolis",
    state: "MN",
    served: "Minneapolis, MN, USA",
    context: "Minneapolis is a Fortune 500 hub for healthcare, retail, financial services, and food and agriculture businesses in the Upper Midwest.",
    sectors: "healthcare, retail, finance, and food",
  },
  charlotte: {
    name: "Charlotte",
    state: "NC",
    served: "Charlotte, NC, USA",
    context: "Charlotte is the US's second-largest banking city after New York, with a growing fintech, healthcare, and tech ecosystem in the Southeast.",
    sectors: "finance, fintech, healthcare, and tech",
  },
  "washington-dc": {
    name: "Washington DC",
    state: "DC",
    served: "Washington DC, USA",
    context: "Washington DC and the surrounding DMV region is home to government, defence, consulting, and association industries, with high-intent professional services search traffic.",
    sectors: "government, defence, consulting, and professional services",
  },
};

interface StateEntry {
  name: string;
  served: string;
  context: string;
  sectors: string;
}

const STATES: Record<string, StateEntry> = {
  california: {
    name: "California",
    served: "California, USA",
    context: "California is the world's innovation hub, home to Silicon Valley, Hollywood, and the US's largest ecommerce and retail markets.",
    sectors: "tech, entertainment, retail, and real estate",
  },
  "new-york-state": {
    name: "New York State",
    served: "New York State, USA",
    context: "New York State powers the US financial system, media industry, and hosts a diverse economy from Manhattan's skyscrapers to Buffalo's manufacturing.",
    sectors: "finance, media, healthcare, and manufacturing",
  },
  texas: {
    name: "Texas",
    served: "Texas, USA",
    context: "Texas has overtaken many countries with its energy, tech, aerospace, and finance economy, drawing business from California and beyond.",
    sectors: "energy, tech, aerospace, and finance",
  },
  florida: {
    name: "Florida",
    served: "Florida, USA",
    context: "Florida's 22 million people span a diverse economy of tourism, healthcare, real estate, international trade, and a growing tech sector.",
    sectors: "tourism, healthcare, real estate, and international trade",
  },
  illinois: {
    name: "Illinois",
    served: "Illinois, USA",
    context: "Illinois anchors the Midwest economy with Chicago's financial markets, a leading manufacturing base, and a growing startup and SaaS ecosystem.",
    sectors: "finance, manufacturing, SaaS, and healthcare",
  },
  "washington-state": {
    name: "Washington State",
    served: "Washington State, USA",
    context: "Washington State powers global tech through Amazon and Microsoft, drives international trade through its ports, and hosts a booming direct-to-consumer sector.",
    sectors: "tech, ecommerce, trade, and aerospace",
  },
  colorado: {
    name: "Colorado",
    served: "Colorado, USA",
    context: "Colorado attracts outdoor, tech, cannabis, and clean-energy businesses, with Boulder and Denver hosting a thriving startup and SaaS ecosystem.",
    sectors: "tech, outdoor, cannabis, and healthcare",
  },
  georgia: {
    name: "Georgia",
    served: "Georgia, USA",
    context: "Georgia is the Southeast's logistics hub, with Atlanta's Fortune 500 companies, a major film industry, and a fast-growing tech cluster.",
    sectors: "logistics, finance, media, and tech",
  },
  ohio: {
    name: "Ohio",
    served: "Ohio, USA",
    context: "Ohio's diverse economy spans advanced manufacturing, healthcare, financial services, and a growing tech sector across Cleveland, Columbus, and Cincinnati.",
    sectors: "manufacturing, healthcare, finance, and tech",
  },
  massachusetts: {
    name: "Massachusetts",
    served: "Massachusetts, USA",
    context: "Massachusetts leads in biotech, higher education, finance, and clean energy, with Boston anchoring a world-class innovation economy.",
    sectors: "biotech, education, finance, and clean energy",
  },
};

interface Ind { name: string; pain: string; angle: string; }
const I: Record<string, Ind> = {
  saas: {
    name: "SaaS",
    pain: "buyers self-educate through search, G2, and AI tools before contacting sales",
    angle: "category and comparison keyword targeting, G2 review strategy, and AI-cited product content",
  },
  "real-estate": {
    name: "Real Estate",
    pain: "buyers and sellers research listings, agents, and neighbourhoods extensively online",
    angle: "neighbourhood and listing SEO, local agent authority, and AI search citations for property searches",
  },
  healthcare: {
    name: "Healthcare",
    pain: "patients search for providers, treatments, and symptoms on Google and increasingly on AI engines",
    angle: "condition and treatment content, medical E-E-A-T, and local provider visibility",
  },
  legal: {
    name: "Legal",
    pain: "clients with urgent legal needs search by practice area and expect authoritative answers",
    angle: "practice-area content, E-E-A-T signals, and ranking for high-value legal keywords",
  },
  ecommerce: {
    name: "E-commerce",
    pain: "shoppers start product discovery on Google and AI shopping tools",
    angle: "product and category SEO, shopping schema for rich results, and AI shopping visibility",
  },
  restaurants: {
    name: "Restaurants",
    pain: "diners decide where to eat from Google Search, Maps, and AI recommendations",
    angle: "Google Business Profile dominance, menu keyword targeting, and review-driven local rankings",
  },
  hotels: {
    name: "Hotels",
    pain: "travellers compare properties across Google, OTAs, and AI trip planners",
    angle: "direct-booking SEO, destination content, and reducing OTA commission dependency",
  },
  fintech: {
    name: "Fintech",
    pain: "users and enterprises evaluate platforms through search and AI comparison",
    angle: "product SEO, trust and compliance content, and category-defining authority",
  },
  education: {
    name: "Education",
    pain: "students and parents research programmes and institutions online first",
    angle: "programme and course SEO, FAQ schema, and enrolment-driven content funnels",
  },
  construction: {
    name: "Construction",
    pain: "developers and procurement teams vet contractors online before issuing tenders",
    angle: "project portfolio SEO, capability-page ranking, and B2B lead capture",
  },
};

interface Svc { name: string; what: string; }
const SV: Record<string, Svc> = {
  technical: { name: "Technical SEO", what: "Core Web Vitals, crawlability, indexation, structured data, and site architecture" },
  "on-page": { name: "On-Page SEO", what: "titles, meta data, headings, content optimisation, and internal linking" },
  local: { name: "Local SEO", what: "Google Business Profile, Map Pack rankings, citations, and review management" },
  ecommerce: { name: "E-commerce SEO", what: "product and category optimisation, schema for rich results, and conversion funnels" },
  "link-building": { name: "Link Building", what: "high-authority backlinks from US press, industry publications, and niche directories" },
  "content-marketing": { name: "Content Marketing", what: "search-intent content, topical authority hubs, and AI-citable articles" },
  "seo-audit": { name: "SEO Audit", what: "a deep technical, content, and authority audit with a prioritised action plan" },
  shopify: { name: "Shopify SEO", what: "Shopify-specific technical fixes, product SEO, and content strategy" },
  wordpress: { name: "WordPress SEO", what: "WordPress technical optimisation, schema, speed, and content SEO" },
  enterprise: { name: "Enterprise SEO", what: "large-site SEO, governance, and multi-team organic programmes" },
  aeo: { name: "Answer Engine Optimisation", what: "featured snippets, People Also Ask, and voice-search answer targeting" },
  geo: { name: "Generative Engine Optimisation", what: "brand entity building so AI tools cite and recommend you" },
};

const statSets: { value: string; label: string }[][] = [
  [{ value: "+312%", label: "Avg. Organic Growth" }, { value: "87+", label: "Page 1 Keywords" }, { value: "4.8x", label: "Average ROI" }, { value: "6 wks", label: "To First Rankings" }],
  [{ value: "+260%", label: "Qualified Leads" }, { value: "500+", label: "Keywords Tracked" }, { value: "92%", label: "Client Retention" }, { value: "8 wks", label: "First Results" }],
  [{ value: "3.4x", label: "Lead Increase" }, { value: "Top 3", label: "Map Pack Goal" }, { value: "+180%", label: "Local Visibility" }, { value: "24h", label: "Response Time" }],
  [{ value: "+295%", label: "Organic Traffic" }, { value: "100+", label: "US Businesses Helped" }, { value: "5.1x", label: "ROI" }, { value: "No.1", label: "Ranking Focus" }],
];

function features(label: string, scope: string): { title: string; desc: string }[] {
  return [
    { title: "Technical SEO Foundation", desc: `We fix the Core Web Vitals, crawl, indexation, and structured-data issues that quietly block ${label} from ranking. This is the base every other gain is built on.` },
    { title: `${scope} Keyword Strategy`, desc: `We map the high-intent keywords your ${scope} customers actually search, across every stage of the buying journey, not just vanity head terms.` },
    { title: "Content That Ranks and Converts", desc: "Answer-first content structured for Google, featured snippets, and AI answer engines, written by specialists and never AI-spun filler." },
    { title: "Local and Map Pack SEO", desc: `Google Business Profile optimisation, citations, and review strategy to win the local Map Pack and near-me searches in ${scope}.` },
    { title: "AEO and GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend you, placing you at the next frontier of search." },
    { title: "Authority Link Building", desc: "High-quality backlinks from US press, industry publications, and niche directories that build the domain authority Google rewards." },
  ];
}

function baseFaqs(label: string, served: string): { q: string; a: string }[] {
  return [
    { q: `How much does ${label} cost?`, a: "SEODXB offers transparent pricing plans from $999/mo, with Business plans at $2,499/mo and Enterprise at custom pricing. All plans come with no lock-in contracts and no hidden fees. The right plan depends on your competition level and growth goals in the US market." },
    { q: `How long does ${label} take to show results?`, a: "Most clients see measurable ranking movement within 6 to 10 weeks, with significant traffic and lead growth by month 3 to 6, depending on competition and how aggressively we execute." },
    { q: `Does SEODXB serve clients in ${served}?`, a: `Yes. SEODXB works with businesses across ${served}, combining deep knowledge of US market competition with technical SEO, AEO, and GEO expertise.` },
    { q: "Do you optimise for AI search like ChatGPT and Google AI Overviews?", a: "Yes. Every SEODXB engagement includes AEO and GEO work so your brand is cited by AI answer engines and surfaced in Google AI Overviews, not just traditional blue-link results." },
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
    intro: `${l.context} SEODXB helps ${l.name} businesses rank on Google, win the local Map Pack, and get cited by AI engines like ChatGPT and Perplexity. We pair technical SEO with content strategy and AI-era optimisation across ${l.sectors}.`,
    scope: l.name, served: l.served,
    featuresTitle: `What Our ${l.name} SEO Includes`,
    featuresSubtitle: `A complete organic growth programme tailored to the ${l.name} market and how customers there actually search.`,
    faqTitle: `${kw} - Common Questions`,
    ctaTitle: `Ready to Rank in ${l.name}?`,
    ctaDesc: `Book a free SEO strategy call. We will audit your site, study your ${l.name} competitors, and show you the fastest path to page one.`,
    ctaButton: "Get Your Free SEO Audit",
  }));
}

// ---- State hub pages ----
function stateHub(slug: string, stateKey: string) {
  const s = STATES[stateKey];
  const kw = `SEO ${s.name}`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `SEO Experts for ${s.name}`,
    title: `${kw} | SEODXB - SEO Agency for ${s.name} Businesses`,
    metaDesc: `SEODXB delivers SEO across ${s.name}: Google rankings, local Map Pack visibility, and AI search citations for ${s.sectors} businesses. Transparent pricing, no contracts.`,
    h1: `${kw}: Grow Your Business Across the State`,
    intro: `${s.context} SEODXB helps ${s.name} businesses rank on Google, win local Map Pack visibility, and get cited by AI engines like ChatGPT and Perplexity. We combine technical SEO, content strategy, and AI-era optimisation across ${s.sectors}.`,
    scope: s.name, served: s.served,
    featuresTitle: `What Our ${s.name} SEO Includes`,
    featuresSubtitle: `A statewide organic growth programme built around how ${s.name} customers search.`,
    faqTitle: `${kw} - Common Questions`,
    ctaTitle: `Ready to Rank Across ${s.name}?`,
    ctaDesc: `Book a free SEO strategy call. We will audit your site, study your ${s.name} competitors, and build the fastest path to page one.`,
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
    intro: `In ${l.name}, ${ind.pain}. SEODXB delivers ${ind.name.toLowerCase()} SEO focused on ${ind.angle}. We combine technical SEO, local visibility, and AI search optimisation so your ${ind.name.toLowerCase()} business is the one customers find first.`,
    scope: `${ind.name} in ${l.name}`, served: l.served,
    featuresTitle: `${ind.name} SEO Built for ${l.name}`,
    featuresSubtitle: `Everything a ${ind.name.toLowerCase()} business in ${l.name} needs to rank, get cited by AI, and convert searchers into customers.`,
    faqTitle: `${ind.name} SEO in ${l.name} - FAQs`,
    ctaTitle: `Grow Your ${ind.name} Business in ${l.name}`,
    ctaDesc: `Book a free consultation. We will show you exactly how to outrank competing ${ind.name.toLowerCase()} businesses in ${l.name} on Google and AI search.`,
    ctaButton: "Get Free Consultation",
  }));
}

// ---- Service x USA (nationwide) ----
function svcUSA(slug: string, svcKey: string) {
  const sv = SV[svcKey];
  const kw = `${sv.name} USA`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${sv.name} for US Businesses`,
    title: `${kw} | SEODXB - Nationwide ${sv.name}`,
    metaDesc: `${sv.name} across the USA from SEODXB. We deliver ${sv.what} for businesses nationwide. Transparent pricing, no contracts.`,
    h1: `${kw}: ${sv.name} for Businesses Across America`,
    intro: `SEODXB delivers ${sv.name.toLowerCase()} across the USA, providing ${sv.what}. Whether you operate in one city or coast to coast, we build organic visibility on Google and AI engines that compounds month after month.`,
    scope: "the USA", served: "United States",
    featuresTitle: `Nationwide ${sv.name}`,
    featuresSubtitle: `Specialist ${sv.name.toLowerCase()} integrated with full SEO, AEO, and GEO for US businesses.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `Get ${sv.name} for Your US Business`,
    ctaDesc: `Book a free strategy call. We will show you how ${sv.name.toLowerCase()} fits into a nationwide organic growth plan.`,
    ctaButton: "Get Free Strategy Call",
  }));
}

// ---- Service x City ----
function svcLoc(slug: string, svcKey: string, locKey: string) {
  const sv = SV[svcKey]; const l = L[locKey];
  const kw = `${sv.name} ${l.name}`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${sv.name} in ${l.name}`,
    title: `${kw} | SEODXB - ${sv.name} Services`,
    metaDesc: `${sv.name} services in ${l.name} from SEODXB. We deliver ${sv.what} to grow your rankings, traffic, and leads. Transparent pricing, no contracts.`,
    h1: `${kw}: ${sv.name} That Delivers Results`,
    intro: `SEODXB provides specialist ${sv.name.toLowerCase()} in ${l.name}, delivering ${sv.what}. ${l.context} We make sure your business is found on Google and cited by AI engines across ${l.sectors}.`,
    scope: l.name, served: l.served,
    featuresTitle: `Our ${sv.name} Approach in ${l.name}`,
    featuresSubtitle: `Specialist ${sv.name.toLowerCase()} combined with full-funnel SEO, AEO, and GEO for ${l.name} businesses.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `Get ${sv.name} in ${l.name}`,
    ctaDesc: `Book a free consultation. We will assess your current setup and show you how ${sv.name.toLowerCase()} can accelerate your growth in ${l.name}.`,
    ctaButton: "Get Free Consultation",
  }));
}

// ---- Commercial / intent pages ----
function commercial(slug: string, cfg: Parameters<typeof make>[1]) {
  pages.push(make(slug, cfg));
}

// ===== Build all US pages =====

// A. City hubs (20)
locHub("seo-new-york", "new-york");
locHub("seo-los-angeles", "los-angeles");
locHub("seo-chicago", "chicago");
locHub("seo-houston", "houston");
locHub("seo-dallas", "dallas");
locHub("seo-san-francisco", "san-francisco");
locHub("seo-seattle", "seattle");
locHub("seo-miami", "miami");
locHub("seo-boston", "boston");
locHub("seo-austin", "austin");
locHub("seo-denver", "denver");
locHub("seo-atlanta", "atlanta");
locHub("seo-phoenix", "phoenix");
locHub("seo-philadelphia", "philadelphia");
locHub("seo-san-diego", "san-diego");
locHub("seo-portland", "portland");
locHub("seo-las-vegas", "las-vegas");
locHub("seo-minneapolis", "minneapolis");
locHub("seo-charlotte", "charlotte");
locHub("seo-washington-dc", "washington-dc");

// B. Industry x city (80 pages): 10 industries x 8 top cities
const topCities = ["new-york", "los-angeles", "chicago", "houston", "dallas", "san-francisco", "miami", "boston"] as const;
const industries = ["saas", "real-estate", "healthcare", "legal", "ecommerce", "restaurants", "hotels", "fintech", "education", "construction"] as const;

industries.forEach((ind) => {
  topCities.forEach((city) => {
    const citySlug = city.replace(/-/g, "-");
    indLoc(`seo-for-${ind}-${citySlug}`, ind, city);
  });
});

// C. Service x USA (12 pages)
svcUSA("technical-seo-usa", "technical");
svcUSA("on-page-seo-usa", "on-page");
svcUSA("local-seo-usa", "local");
svcUSA("ecommerce-seo-usa", "ecommerce");
svcUSA("link-building-usa", "link-building");
svcUSA("content-marketing-usa", "content-marketing");
svcUSA("seo-audit-usa", "seo-audit");
svcUSA("shopify-seo-usa", "shopify");
svcUSA("wordpress-seo-usa", "wordpress");
svcUSA("enterprise-seo-usa", "enterprise");
svcUSA("aeo-usa", "aeo");
svcUSA("geo-usa", "geo");

// D. Service x city (20 pages): 4 services x 5 cities
const svcCityServices = ["local", "technical", "on-page", "ecommerce"] as const;
const svcCities = ["new-york", "los-angeles", "chicago", "miami", "houston"] as const;

svcCityServices.forEach((svc) => {
  svcCities.forEach((city) => {
    const svcSlugPart = svc === "on-page" ? "on-page-seo" : svc === "technical" ? "technical-seo" : svc === "local" ? "local-seo" : "ecommerce-seo";
    svcLoc(`${svcSlugPart}-${city}`, svc, city);
  });
});

// E. State-level hubs (10)
stateHub("seo-california", "california");
stateHub("seo-new-york-state", "new-york-state");
stateHub("seo-texas", "texas");
stateHub("seo-florida", "florida");
stateHub("seo-illinois", "illinois");
stateHub("seo-washington-state", "washington-state");
stateHub("seo-colorado", "colorado");
stateHub("seo-georgia", "georgia");
stateHub("seo-ohio", "ohio");
stateHub("seo-massachusetts", "massachusetts");

// F. Commercial intent pages (40)
commercial("seo-agency-usa", {
  keyword: "SEO Agency USA", badge: "Top-Rated SEO Agency in the USA",
  title: "SEO Agency USA | SEODXB - Results-Driven US SEO",
  metaDesc: "SEODXB is a specialist SEO agency for US businesses, delivering Google rankings, AI search citations, and qualified leads. Transparent pricing, no contracts.",
  h1: "The SEO Agency US Businesses Choose for Real Results",
  intro: "SEODXB brings a focused, specialist approach to SEO for US businesses. No generalist agency bloat. We focus on the technical foundations, content quality, and AI search visibility that compound into lasting search dominance across Google, ChatGPT, Perplexity, and AI Overviews.",
  scope: "the USA", served: "United States",
  featuresTitle: "What Makes SEODXB the Right US SEO Agency",
  featuresSubtitle: "Specialist focus on search, transparent reporting, and a track record built on US market competition.",
  faqTitle: "SEO Agency USA - Common Questions",
  ctaTitle: "Ready to Dominate US Search?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site, analyse your US competitors, and show you the fastest path to page one.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-company-usa", {
  keyword: "SEO Company USA", badge: "Trusted SEO Company for US Businesses",
  title: "SEO Company USA | SEODXB - Proven US SEO Results",
  metaDesc: "SEODXB is a results-focused SEO company for US businesses. Google rankings, AI search citations, and qualified organic leads. No contracts, transparent pricing.",
  h1: "The SEO Company US Businesses Choose for Measurable Growth",
  intro: "SEODXB is a dedicated SEO company serving US businesses that want specialist depth, not agency generalism. We focus on organic search across Google, ChatGPT, Perplexity, and Google AI Overviews, delivering technical SEO, content strategy, and link authority that compounds into lasting rankings.",
  scope: "the USA", served: "United States",
  featuresTitle: "Why Choose SEODXB as Your US SEO Company",
  featuresSubtitle: "Deep SEO expertise combined with knowledge of the US competitive search landscape.",
  faqTitle: "SEO Company USA - FAQs",
  ctaTitle: "Find Out What SEODXB Can Do for Your US Business",
  ctaDesc: "Get a free SEO analysis showing your current rankings, missed opportunities, and a clear roadmap to page one.",
  ctaButton: "Get Free SEO Analysis",
});

commercial("best-seo-agency-usa", {
  keyword: "Best SEO Agency USA", badge: "Among the Top SEO Agencies in the USA",
  title: "Best SEO Agency USA | SEODXB - Top-Rated US SEO Specialists",
  metaDesc: "Looking for the best SEO agency in the USA? SEODXB delivers proven Google rankings, AI search citations, and qualified leads for US businesses. Transparent pricing.",
  h1: "The Best SEO Agency in the USA for Measurable Results",
  intro: "What makes the best SEO agency in the USA? Specialisation, transparency, and results you can measure. SEODXB focuses exclusively on SEO, AEO, and GEO, delivering rankings and leads for businesses from New York to Los Angeles without the distractions of a generalist agency.",
  scope: "the USA", served: "United States",
  featuresTitle: "Why SEODXB Ranks Among the USA's Best SEO Agencies",
  featuresSubtitle: "Specialist focus, transparent reporting, and a track record across competitive US markets.",
  faqTitle: "Best SEO Agency USA - FAQs",
  ctaTitle: "Work With a Top US SEO Agency",
  ctaDesc: "Book a free strategy call and see why US businesses choose SEODXB for organic growth.",
  ctaButton: "Get Free Strategy Call",
});

commercial("affordable-seo-usa", {
  keyword: "Affordable SEO USA", badge: "Affordable SEO for US Businesses",
  title: "Affordable SEO USA | SEODXB - High-Value SEO from $999/mo",
  metaDesc: "Affordable SEO across the USA from SEODXB, starting at $999/mo. Real rankings, AI search visibility, and qualified leads with no contracts and no hidden fees.",
  h1: "Affordable SEO for US Businesses That Actually Works",
  intro: "Affordable should not mean cheap or ineffective. SEODXB delivers genuinely affordable SEO for US businesses from $999/mo, focused on the high-intent keywords and AI visibility that generate leads, without the bloated retainers of full-service agencies.",
  scope: "the USA", served: "United States",
  featuresTitle: "What Our Affordable US SEO Includes",
  featuresSubtitle: "Real, results-focused SEO at a price that works for growing US businesses.",
  faqTitle: "Affordable SEO USA - FAQs",
  ctaTitle: "Get Affordable SEO That Delivers in the US",
  ctaDesc: "Book a free consultation and we will show you how much organic growth is possible within your budget.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-services-usa", {
  keyword: "SEO Services USA", badge: "Complete SEO Services for US Businesses",
  title: "SEO Services USA | SEODXB - Full-Spectrum US SEO",
  metaDesc: "Complete SEO services for US businesses: technical SEO, on-page, link building, local SEO, AEO, and GEO. SEODXB delivers from $999/mo with transparent pricing.",
  h1: "Complete SEO Services for US Businesses",
  intro: "SEODXB delivers the full spectrum of SEO services US businesses need: technical foundations, content strategy, local Map Pack presence, AI answer engine visibility, and link authority. One specialist team, full transparency, and measurable results across the US.",
  scope: "the USA", served: "United States",
  featuresTitle: "Our Full Range of US SEO Services",
  featuresSubtitle: "Every service compounds, each component amplifying the others for exponential organic growth.",
  faqTitle: "SEO Services USA - FAQs",
  ctaTitle: "Build Your US SEO Programme",
  ctaDesc: "Book a free consultation and we will design an SEO services plan tailored to your US growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-consultant-usa", {
  keyword: "SEO Consultant USA", badge: "Expert SEO Consultant for the USA",
  title: "SEO Consultant USA | SEODXB - Specialist US SEO Consulting",
  metaDesc: "Work with a specialist SEO consultant for the USA. SEODXB offers expert audits, strategy, and hands-on SEO, AEO, and GEO consulting for US businesses.",
  h1: "Your Specialist SEO Consultant in the USA",
  intro: "SEODXB provides senior SEO consulting for US businesses that want expert strategy without a bloated agency. You work directly with specialists on audits, technical fixes, content strategy, and AI search optimisation across the US market.",
  scope: "the USA", served: "United States",
  featuresTitle: "What Our US SEO Consulting Covers",
  featuresSubtitle: "Senior, hands-on SEO consulting across technical, content, local, and AI search.",
  faqTitle: "SEO Consultant USA - FAQs",
  ctaTitle: "Work With a US SEO Consultant",
  ctaDesc: "Book a free consultation. We will review your current performance and define the highest-impact SEO priorities for your business.",
  ctaButton: "Book a Consultation",
});

commercial("b2b-seo-usa", {
  keyword: "B2B SEO USA", badge: "B2B SEO Specialists for the US Market",
  title: "B2B SEO USA | SEODXB - SEO for B2B Companies",
  metaDesc: "B2B SEO for US companies from SEODXB. We rank you for the high-intent commercial keywords your buyers search before requesting a demo. Transparent pricing.",
  h1: "B2B SEO for US Companies That Fills the Pipeline",
  intro: "B2B buyers in the US research solutions, compare vendors, and shortlist suppliers entirely through organic search before ever contacting sales. SEODXB builds the B2B SEO strategy that puts your company in front of decision-makers at the exact moment they are evaluating options.",
  scope: "B2B in the USA", served: "United States",
  featuresTitle: "Our B2B SEO Approach for the US Market",
  featuresSubtitle: "Pipeline-focused B2B SEO built around the US buyer journey.",
  faqTitle: "B2B SEO USA - FAQs",
  ctaTitle: "Fill Your B2B Pipeline With Organic Leads",
  ctaDesc: "Book a free consultation and we will show you which B2B keywords are driving pipeline for your competitors.",
  ctaButton: "Get Free Consultation",
});

commercial("ecommerce-seo-usa", {
  keyword: "Ecommerce SEO USA", badge: "Ecommerce SEO for US Stores",
  title: "Ecommerce SEO USA | SEODXB - Grow Your US Online Store",
  metaDesc: "Ecommerce SEO for US online stores from SEODXB. Product and category SEO, shopping schema, and AI shopping visibility that drives organic revenue. No contracts.",
  h1: "Ecommerce SEO for US Online Stores",
  intro: "US ecommerce is the most competitive search landscape in the world. SEODXB delivers ecommerce SEO that increases organic product and category rankings, earns rich results in Google Shopping, and gets your products cited in AI shopping tools, compounding into revenue month after month.",
  scope: "Ecommerce in the USA", served: "United States",
  featuresTitle: "Our Ecommerce SEO Approach for the US",
  featuresSubtitle: "Revenue-focused ecommerce SEO built for the scale and competition of the US market.",
  faqTitle: "Ecommerce SEO USA - FAQs",
  ctaTitle: "Grow Your Ecommerce Revenue With SEO",
  ctaDesc: "Book a free ecommerce SEO audit. We will find the quick wins and long-term opportunities that grow your organic revenue.",
  ctaButton: "Get Free Ecommerce SEO Audit",
});

commercial("local-seo-services-usa", {
  keyword: "Local SEO Services USA", badge: "Local SEO Services Across the USA",
  title: "Local SEO Services USA | SEODXB - Rank in Your City",
  metaDesc: "Local SEO services for US businesses from SEODXB. Google Business Profile, Map Pack rankings, citations, and review management that drives in-store and local leads.",
  h1: "Local SEO Services That Put US Businesses on the Map",
  intro: "Local search drives foot traffic, phone calls, and local leads for US businesses. SEODXB delivers the local SEO services that win Google Map Pack positions, optimise Google Business Profiles, build local citations, and manage reviews across the US cities and neighbourhoods that matter to you.",
  scope: "local businesses in the USA", served: "United States",
  featuresTitle: "What Our US Local SEO Services Include",
  featuresSubtitle: "Everything a US local business needs to win near-me searches and Map Pack positions.",
  faqTitle: "Local SEO Services USA - FAQs",
  ctaTitle: "Win the Local Map Pack in Your City",
  ctaDesc: "Book a free local SEO consultation and we will show you what it takes to rank in your city's Map Pack.",
  ctaButton: "Get Free Local SEO Consultation",
});

commercial("international-seo-usa", {
  keyword: "International SEO USA", badge: "International SEO for US Businesses",
  title: "International SEO USA | SEODXB - Rank in Multiple Markets",
  metaDesc: "International SEO for US businesses expanding globally. SEODXB handles hreflang, multi-region content, and global authority building for US brands.",
  h1: "International SEO for US Businesses Going Global",
  intro: "US businesses expanding internationally need SEO that goes beyond their home market. SEODXB delivers international SEO for US companies, covering hreflang implementation, market-specific content strategy, and global link authority, so your brand ranks in every country that matters.",
  scope: "international markets from the USA", served: "United States",
  featuresTitle: "Our International SEO Service for US Businesses",
  featuresSubtitle: "Global organic growth built on a strong US SEO foundation.",
  faqTitle: "International SEO USA - FAQs",
  ctaTitle: "Take Your US Brand to Global Markets",
  ctaDesc: "Book a free consultation and we will map the international SEO strategy that fits your expansion goals.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-pricing-usa", {
  keyword: "SEO Pricing USA", badge: "Transparent SEO Pricing for US Businesses",
  title: "SEO Pricing USA | SEODXB - Transparent SEO Plans and Costs",
  metaDesc: "Clear SEO pricing for US businesses: plans from $999/mo. No contracts, no hidden fees. See exactly what SEODXB includes at every price point.",
  h1: "Transparent SEO Pricing for US Businesses",
  intro: "SEO pricing in the USA is often obscured behind request-a-quote forms. SEODXB does the opposite. Our plans are transparent, starting at $999/mo for Startup, $2,499/mo for Business, and custom pricing for Enterprise, all with no contracts and no hidden fees.",
  scope: "the USA", served: "United States",
  featuresTitle: "What Is Included at Every Price Point",
  featuresSubtitle: "Clear deliverables at each plan level, no surprises and no upsells.",
  faqTitle: "SEO Pricing USA - FAQs",
  ctaTitle: "Find the Right SEO Plan for Your Budget",
  ctaDesc: "Book a free consultation and we will recommend the right plan for your competition level and growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("white-label-seo-usa", {
  keyword: "White Label SEO USA", badge: "White-Label SEO for US Agencies",
  title: "White Label SEO USA | SEODXB - Agency SEO Fulfilment",
  metaDesc: "White-label SEO in the USA from SEODXB. We deliver SEO, AEO, and GEO under your agency's brand with client-ready reporting. Reliable, on-time fulfilment.",
  h1: "White-Label SEO for US Agencies",
  intro: "SEODXB is the white-label SEO partner US agencies rely on to deliver results under their own brand. From technical audits to content and link building, we handle execution and reporting so you can sell SEO with confidence and keep your clients satisfied.",
  scope: "the USA", served: "United States",
  featuresTitle: "Our White-Label SEO Service for US Agencies",
  featuresSubtitle: "Seamless, branded SEO delivery that makes your agency look great.",
  faqTitle: "White Label SEO USA - FAQs",
  ctaTitle: "Add SEO to Your US Agency's Offering",
  ctaDesc: "Book a partner call and we will map a white-label SEO programme for your agency's clients.",
  ctaButton: "Become a Partner",
});

commercial("seo-outsourcing-usa", {
  keyword: "SEO Outsourcing USA", badge: "SEO Outsourcing for US Businesses",
  title: "SEO Outsourcing USA | SEODXB - Expert US SEO Outsourcing",
  metaDesc: "Outsource your SEO to SEODXB. US businesses get expert SEO delivery, AI search optimisation, and transparent reporting without building an in-house team.",
  h1: "SEO Outsourcing for US Businesses",
  intro: "Building an in-house SEO team is expensive and slow. SEODXB gives US businesses access to a full-stack SEO team through outsourcing, covering technical SEO, content, link building, and AI search optimisation, at a fraction of the cost of in-house hiring.",
  scope: "the USA", served: "United States",
  featuresTitle: "What Our SEO Outsourcing Includes",
  featuresSubtitle: "Full-stack SEO outsourcing with the transparency and accountability of an in-house team.",
  faqTitle: "SEO Outsourcing USA - FAQs",
  ctaTitle: "Outsource Your SEO to a US Specialist",
  ctaDesc: "Book a free consultation and we will scope an outsourced SEO programme that fits your team and goals.",
  ctaButton: "Get Free Consultation",
});

commercial("ai-seo-usa", {
  keyword: "AI SEO USA", badge: "AI SEO Specialists for the US Market",
  title: "AI SEO USA | SEODXB - Optimise for AI Search in the US",
  metaDesc: "AI SEO for US businesses from SEODXB. We optimise for Google AI Overviews, ChatGPT, Perplexity, and Gemini so your brand is cited in AI answers. Transparent pricing.",
  h1: "AI SEO for US Businesses: Be Cited in AI Search",
  intro: "AI search is reshaping how US consumers and B2B buyers find answers. SEODXB delivers AI SEO, optimising your site and brand entity so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend you, putting you ahead of competitors still focused only on blue-link rankings.",
  scope: "AI search in the USA", served: "United States",
  featuresTitle: "Our AI SEO Approach for US Businesses",
  featuresSubtitle: "AI search optimisation built on strong traditional SEO foundations for the US market.",
  faqTitle: "AI SEO USA - FAQs",
  ctaTitle: "Get Cited in AI Search Across the US",
  ctaDesc: "Book a free AI SEO consultation and we will show you where your brand currently stands in AI search.",
  ctaButton: "Get Free AI SEO Consultation",
});

commercial("chatgpt-seo-usa", {
  keyword: "ChatGPT SEO USA", badge: "ChatGPT SEO for US Businesses",
  title: "ChatGPT SEO USA | SEODXB - Get Cited by ChatGPT",
  metaDesc: "ChatGPT SEO for US businesses from SEODXB. We optimise your brand and content so ChatGPT cites and recommends you when US users search in AI. No contracts.",
  h1: "ChatGPT SEO for US Businesses: Get Cited by AI",
  intro: "Millions of US consumers and professionals now turn to ChatGPT for recommendations, comparisons, and answers. SEODXB builds the content authority, entity signals, and citation-worthy content that makes ChatGPT cite your business, keeping you visible as search behaviour evolves.",
  scope: "ChatGPT visibility in the USA", served: "United States",
  featuresTitle: "How We Help US Businesses Get Cited by ChatGPT",
  featuresSubtitle: "Entity-building, citation-worthy content, and authority signals for ChatGPT visibility.",
  faqTitle: "ChatGPT SEO USA - FAQs",
  ctaTitle: "Get Your Business Cited by ChatGPT",
  ctaDesc: "Book a free consultation and we will assess where your brand stands in ChatGPT search today.",
  ctaButton: "Get Free Consultation",
});

commercial("google-ai-overview-seo-usa", {
  keyword: "Google AI Overview SEO USA", badge: "Google AI Overview SEO for the US",
  title: "Google AI Overview SEO USA | SEODXB - Rank in AI Overviews",
  metaDesc: "Google AI Overview SEO for US businesses from SEODXB. We optimise your content to appear in Google AI Overviews and capture top-of-page AI visibility.",
  h1: "Google AI Overview SEO for US Businesses",
  intro: "Google AI Overviews now appear at the top of search results for millions of US queries, capturing clicks before users ever reach organic listings. SEODXB optimises your content to be selected and summarised in Google AI Overviews, securing top-of-page visibility in the new search landscape.",
  scope: "Google AI Overviews in the USA", served: "United States",
  featuresTitle: "Our Google AI Overview SEO Strategy",
  featuresSubtitle: "Content and technical optimisation that earns positions in Google AI Overviews.",
  faqTitle: "Google AI Overview SEO USA - FAQs",
  ctaTitle: "Appear in Google AI Overviews",
  ctaDesc: "Book a free consultation and we will audit your content for Google AI Overview eligibility.",
  ctaButton: "Get Free Consultation",
});

commercial("voice-search-seo-usa", {
  keyword: "Voice Search SEO USA", badge: "Voice Search SEO for US Businesses",
  title: "Voice Search SEO USA | SEODXB - Optimise for Voice in the US",
  metaDesc: "Voice search SEO for US businesses from SEODXB. We optimise for conversational queries, featured snippets, and smart speaker answers in the US market.",
  h1: "Voice Search SEO for US Businesses",
  intro: "Voice search through Siri, Google Assistant, and Alexa is a major search channel for US consumers. SEODXB optimises your content and local presence for the conversational, question-based queries voice users ask, capturing voice search traffic your competitors are missing.",
  scope: "voice search in the USA", served: "United States",
  featuresTitle: "Our Voice Search SEO Approach for the US",
  featuresSubtitle: "Conversational content and structured data that wins voice search answers.",
  faqTitle: "Voice Search SEO USA - FAQs",
  ctaTitle: "Win Voice Search in the US",
  ctaDesc: "Book a free consultation and we will review your voice search readiness.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-startups-usa", {
  keyword: "SEO for Startups USA", badge: "SEO Built for US Startups",
  title: "SEO for Startups USA | SEODXB - Organic Growth for US Startups",
  metaDesc: "SEO for US startups from SEODXB. We help early and growth-stage startups rank for category keywords, build AI citations, and grow organic traction fast.",
  h1: "SEO for US Startups: Build Organic Traction Early",
  intro: "US startups that invest in SEO early compound their organic advantage over competitors who rely entirely on paid acquisition. SEODXB helps startups identify category keywords, build topical authority, earn AI citations from ChatGPT and Perplexity, and turn search into a scalable, low-CAC lead channel.",
  scope: "startups in the USA", served: "United States",
  featuresTitle: "SEO Designed for the US Startup Journey",
  featuresSubtitle: "High-impact, capital-efficient SEO for early and growth-stage US startups.",
  faqTitle: "SEO for Startups USA - FAQs",
  ctaTitle: "Build Organic Traction for Your US Startup",
  ctaDesc: "Book a free startup SEO consultation and we will map the highest-impact opportunities for your category.",
  ctaButton: "Get Free Startup SEO Consultation",
});

commercial("seo-for-law-firms-usa", {
  keyword: "SEO for Law Firms USA", badge: "Law Firm SEO Specialists in the USA",
  title: "SEO for Law Firms USA | SEODXB - Legal SEO Specialists",
  metaDesc: "SEO for US law firms from SEODXB. We rank your practice for high-value legal keywords, build E-E-A-T, and capture clients searching for legal help online.",
  h1: "SEO for US Law Firms: Rank for High-Value Legal Keywords",
  intro: "People searching for a lawyer in the US are high-intent and ready to hire. SEODXB delivers SEO for US law firms that builds authoritative practice-area content, local Map Pack presence, and the E-E-A-T signals that Google rewards for legal pages, turning search into a reliable client acquisition channel.",
  scope: "law firms in the USA", served: "United States",
  featuresTitle: "Our SEO Approach for US Law Firms",
  featuresSubtitle: "Practice-area SEO with E-E-A-T authority signals built for the US legal market.",
  faqTitle: "SEO for Law Firms USA - FAQs",
  ctaTitle: "Get More Clients From Search",
  ctaDesc: "Book a free law firm SEO consultation and we will show you the keywords your ideal clients are searching.",
  ctaButton: "Get Free Law Firm SEO Audit",
});

commercial("seo-for-doctors-usa", {
  keyword: "SEO for Doctors USA", badge: "Medical SEO for US Doctors",
  title: "SEO for Doctors USA | SEODXB - Healthcare SEO Specialists",
  metaDesc: "SEO for doctors and medical practices across the USA. SEODXB builds E-E-A-T authority, local Map Pack visibility, and patient-generating content for US physicians.",
  h1: "SEO for Doctors and Medical Practices Across the USA",
  intro: "Patients in the US search for doctors, specialists, and treatments online before booking. SEODXB delivers healthcare SEO for US physicians and medical practices, building the local visibility, treatment-page authority, and E-E-A-T signals that turn search into a consistent stream of new patient appointments.",
  scope: "doctors and medical practices in the USA", served: "United States",
  featuresTitle: "Our SEO Approach for US Doctors",
  featuresSubtitle: "Patient-focused SEO built on medical E-E-A-T and local visibility.",
  faqTitle: "SEO for Doctors USA - FAQs",
  ctaTitle: "Attract More Patients From Search",
  ctaDesc: "Book a free healthcare SEO consultation and we will audit your medical practice's online presence.",
  ctaButton: "Get Free Healthcare SEO Audit",
});

commercial("seo-for-dentists-usa", {
  keyword: "SEO for Dentists USA", badge: "Dental SEO Specialists in the USA",
  title: "SEO for Dentists USA | SEODXB - Dental Practice SEO",
  metaDesc: "SEO for US dental practices from SEODXB. Local Map Pack rankings, treatment-page authority, and patient-generating SEO for dentists across the USA.",
  h1: "SEO for US Dentists: Fill Your Appointment Book",
  intro: "US patients search for dentists and dental treatments before booking. SEODXB delivers dental SEO that wins the Google Map Pack in your area, builds treatment-specific content that ranks, and earns the E-E-A-T authority that drives new patient bookings at scale.",
  scope: "dental practices in the USA", served: "United States",
  featuresTitle: "Our Dental SEO Approach for the USA",
  featuresSubtitle: "Patient-generating dental SEO built on local visibility and treatment authority.",
  faqTitle: "SEO for Dentists USA - FAQs",
  ctaTitle: "Get More New Dental Patients From Search",
  ctaDesc: "Book a free dental SEO audit and we will show you how to win the Map Pack in your area.",
  ctaButton: "Get Free Dental SEO Audit",
});

commercial("seo-for-accountants-usa", {
  keyword: "SEO for Accountants USA", badge: "Accounting Firm SEO in the USA",
  title: "SEO for Accountants USA | SEODXB - Accounting SEO Specialists",
  metaDesc: "SEO for US accounting firms and CPAs from SEODXB. Rank for high-intent tax, bookkeeping, and accounting keywords and attract qualified business clients.",
  h1: "SEO for US Accountants and CPA Firms",
  intro: "Business owners and individuals searching for accountants, CPAs, and tax specialists in the US are ready to engage. SEODXB builds the local visibility, service-page authority, and trust signals that rank US accounting firms for the high-intent queries their ideal clients search.",
  scope: "accounting firms in the USA", served: "United States",
  featuresTitle: "Our SEO Approach for US Accountants",
  featuresSubtitle: "Trust and authority-focused SEO built for the US accounting market.",
  faqTitle: "SEO for Accountants USA - FAQs",
  ctaTitle: "Attract More Clients From Search",
  ctaDesc: "Book a free consultation and we will show you the highest-value accounting keywords in your area.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-plumbers-usa", {
  keyword: "SEO for Plumbers USA", badge: "Plumbing SEO Across the USA",
  title: "SEO for Plumbers USA | SEODXB - Local SEO for Plumbing Companies",
  metaDesc: "SEO for US plumbing companies from SEODXB. Google Map Pack rankings, local service-area pages, and review strategy that drives emergency and scheduled calls.",
  h1: "SEO for US Plumbers: Rank in Your Local Market",
  intro: "US homeowners and businesses search for plumbers at the moment they need help. SEODXB delivers local SEO for US plumbing companies that wins the Google Map Pack in your service areas, builds the review authority that drives call volume, and captures both emergency and scheduled-service searches.",
  scope: "plumbing businesses in the USA", served: "United States",
  featuresTitle: "Our Local SEO Approach for US Plumbers",
  featuresSubtitle: "Map Pack dominance and local authority for US plumbing companies.",
  faqTitle: "SEO for Plumbers USA - FAQs",
  ctaTitle: "Get More Local Calls From Search",
  ctaDesc: "Book a free local SEO consultation for your plumbing business.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-agents-usa", {
  keyword: "SEO for Real Estate Agents USA", badge: "Real Estate Agent SEO in the USA",
  title: "SEO for Real Estate Agents USA | SEODXB - Agent SEO Specialists",
  metaDesc: "SEO for US real estate agents and brokers from SEODXB. Neighbourhood pages, local authority, and AI search citations that attract buyers and sellers organically.",
  h1: "SEO for US Real Estate Agents: Attract Buyers and Sellers",
  intro: "US buyers and sellers research agents, neighbourhoods, and listings online for weeks before reaching out. SEODXB delivers real estate agent SEO that builds neighbourhood and community page authority, earns local Map Pack positions, and gets your listings cited in AI property searches.",
  scope: "real estate agents in the USA", served: "United States",
  featuresTitle: "Our SEO Approach for US Real Estate Agents",
  featuresSubtitle: "Neighbourhood authority and listing visibility built for US real estate agents.",
  faqTitle: "SEO for Real Estate Agents USA - FAQs",
  ctaTitle: "Attract More Buyers and Sellers From Search",
  ctaDesc: "Book a free real estate SEO consultation and we will audit your current neighbourhood coverage.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-insurance-agents-usa", {
  keyword: "SEO for Insurance Agents USA", badge: "Insurance Agent SEO in the USA",
  title: "SEO for Insurance Agents USA | SEODXB - Insurance SEO Specialists",
  metaDesc: "SEO for US insurance agents and brokers from SEODXB. Rank for high-intent policy and coverage keywords and attract qualified leads from search.",
  h1: "SEO for US Insurance Agents: Rank for High-Value Policy Keywords",
  intro: "US consumers compare insurance policies and agents through Google before buying. SEODXB delivers SEO for insurance agents that ranks your site for the high-intent coverage and policy keywords your prospects search, building trust signals and local visibility that turns search into a dependable lead source.",
  scope: "insurance agents in the USA", served: "United States",
  featuresTitle: "Our SEO Approach for US Insurance Agents",
  featuresSubtitle: "High-intent keyword targeting and trust authority built for US insurance agents.",
  faqTitle: "SEO for Insurance Agents USA - FAQs",
  ctaTitle: "Get More Insurance Leads From Search",
  ctaDesc: "Book a free consultation and we will show you the highest-value insurance keywords in your market.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-saas-companies-usa", {
  keyword: "SEO for SaaS Companies USA", badge: "SaaS SEO Specialists in the USA",
  title: "SEO for SaaS Companies USA | SEODXB - SaaS SEO Agency",
  metaDesc: "SEO for US SaaS companies from SEODXB. Category keyword targeting, comparison page SEO, G2 strategy, and AI-cited product content that fills the pipeline.",
  h1: "SEO for US SaaS Companies: Own Your Category in Search",
  intro: "US SaaS buyers research solutions, compare alternatives, and read G2 reviews before ever requesting a demo. SEODXB builds the SaaS SEO strategy that puts your product in front of buyers during this research phase, covering category keywords, comparison pages, integration SEO, and AI citation building.",
  scope: "SaaS companies in the USA", served: "United States",
  featuresTitle: "Our SaaS SEO Approach for the US Market",
  featuresSubtitle: "Pipeline-focused SaaS SEO built for the US B2B buying journey.",
  faqTitle: "SEO for SaaS Companies USA - FAQs",
  ctaTitle: "Own Your SaaS Category in US Search",
  ctaDesc: "Book a free SaaS SEO consultation and we will map the category keywords your competitors are ranking for.",
  ctaButton: "Get Free SaaS SEO Consultation",
});

commercial("seo-for-b2b-companies-usa", {
  keyword: "SEO for B2B Companies USA", badge: "B2B SEO Agency in the USA",
  title: "SEO for B2B Companies USA | SEODXB - B2B SEO Specialists",
  metaDesc: "SEO for B2B companies across the USA from SEODXB. We rank you for the commercial keywords your buyers research and help you build AI search authority.",
  h1: "SEO for B2B Companies in the USA",
  intro: "B2B buyers in the US conduct extensive research across Google and AI tools before shortlisting suppliers. SEODXB delivers B2B SEO that ranks your company for the decision-stage keywords your ideal buyers search, builds the content authority that earns AI citations, and turns organic search into a reliable pipeline channel.",
  scope: "B2B companies in the USA", served: "United States",
  featuresTitle: "Our B2B SEO Framework for the US Market",
  featuresSubtitle: "Buyer-journey SEO that builds pipeline for US B2B companies.",
  faqTitle: "SEO for B2B Companies USA - FAQs",
  ctaTitle: "Build a B2B SEO Pipeline in the US",
  ctaDesc: "Book a free consultation and we will show you where you are losing pipeline to organic search competitors.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-nonprofits-usa", {
  keyword: "SEO for Nonprofits USA", badge: "Nonprofit SEO Specialists in the USA",
  title: "SEO for Nonprofits USA | SEODXB - SEO for US Nonprofits",
  metaDesc: "SEO for US nonprofits from SEODXB. We help nonprofit organisations rank for cause-related keywords, attract donors and volunteers, and build online authority.",
  h1: "SEO for US Nonprofits: Reach Donors and Volunteers",
  intro: "US donors, volunteers, and grant-makers search for causes and organisations online. SEODXB delivers nonprofit SEO that builds the content authority, cause keyword rankings, and AI visibility that helps US nonprofits attract more supporters and funding through organic search.",
  scope: "nonprofits in the USA", served: "United States",
  featuresTitle: "Our SEO Approach for US Nonprofits",
  featuresSubtitle: "Mission-driven SEO built to attract donors, volunteers, and community support.",
  faqTitle: "SEO for Nonprofits USA - FAQs",
  ctaTitle: "Help Your Cause Get Found Online",
  ctaDesc: "Book a free nonprofit SEO consultation and we will map the highest-impact opportunities for your mission.",
  ctaButton: "Get Free Nonprofit SEO Consultation",
});

commercial("seo-for-universities-usa", {
  keyword: "SEO for Universities USA", badge: "Higher Education SEO in the USA",
  title: "SEO for Universities USA | SEODXB - Education SEO Specialists",
  metaDesc: "SEO for US universities and colleges from SEODXB. Programme and course SEO, FAQ schema, and enrolment-driven content funnels for US higher education institutions.",
  h1: "SEO for US Universities: Drive Enrolment From Organic Search",
  intro: "US students research universities, programmes, and financial aid extensively before applying. SEODXB delivers higher education SEO that ranks programme and course pages for the search terms prospective students use, builds institution authority, and creates enrolment-driving content funnels across the full applicant journey.",
  scope: "universities in the USA", served: "United States",
  featuresTitle: "Our SEO Approach for US Universities",
  featuresSubtitle: "Enrolment-focused SEO built for the US higher education search landscape.",
  faqTitle: "SEO for Universities USA - FAQs",
  ctaTitle: "Drive More Enrolments From Organic Search",
  ctaDesc: "Book a free education SEO consultation and we will show you the programme keywords your institution is missing.",
  ctaButton: "Get Free Education SEO Consultation",
});

commercial("shopify-seo-agency-usa", {
  keyword: "Shopify SEO Agency USA", badge: "Shopify SEO Specialists in the USA",
  title: "Shopify SEO Agency USA | SEODXB - Shopify SEO for US Stores",
  metaDesc: "Specialist Shopify SEO agency for US stores from SEODXB. Technical fixes, product SEO, content strategy, and AI shopping visibility for Shopify merchants.",
  h1: "Shopify SEO Agency for US Stores",
  intro: "Shopify stores in the US face intense organic competition across every product category. SEODXB is a specialist Shopify SEO agency that handles the platform-specific technical issues, product and collection page optimisation, and content strategy that turns Shopify into a serious organic revenue channel.",
  scope: "Shopify stores in the USA", served: "United States",
  featuresTitle: "Our Shopify SEO Approach for US Merchants",
  featuresSubtitle: "Shopify-specific SEO that addresses the platform's unique technical and content challenges.",
  faqTitle: "Shopify SEO Agency USA - FAQs",
  ctaTitle: "Grow Your Shopify Store With SEO",
  ctaDesc: "Book a free Shopify SEO audit and we will identify the highest-impact opportunities for your store.",
  ctaButton: "Get Free Shopify SEO Audit",
});

commercial("wordpress-seo-agency-usa", {
  keyword: "WordPress SEO Agency USA", badge: "WordPress SEO Specialists in the USA",
  title: "WordPress SEO Agency USA | SEODXB - WordPress SEO for US Sites",
  metaDesc: "Specialist WordPress SEO agency for US websites from SEODXB. Technical optimisation, schema, speed, and content SEO that ranks WordPress sites in the US.",
  h1: "WordPress SEO Agency for US Websites",
  intro: "WordPress powers a huge share of US websites, but Yoast and basic plugins are no substitute for a proper SEO strategy. SEODXB delivers specialist WordPress SEO covering technical optimisation, Core Web Vitals, schema markup, and the content strategy that ranks US WordPress sites in competitive markets.",
  scope: "WordPress sites in the USA", served: "United States",
  featuresTitle: "Our WordPress SEO Approach for US Sites",
  featuresSubtitle: "Platform-specific WordPress SEO for US businesses and publishers.",
  faqTitle: "WordPress SEO Agency USA - FAQs",
  ctaTitle: "Grow Your WordPress Site With SEO",
  ctaDesc: "Book a free WordPress SEO audit and we will identify the technical and content improvements that move rankings.",
  ctaButton: "Get Free WordPress SEO Audit",
});

commercial("seo-audit-usa", {
  keyword: "SEO Audit USA", badge: "Professional SEO Audits for US Businesses",
  title: "SEO Audit USA | SEODXB - In-Depth SEO Audits for US Sites",
  metaDesc: "Professional SEO audits for US businesses from SEODXB. Deep technical, content, and authority analysis with a prioritised action plan. From $999.",
  h1: "Professional SEO Audits for US Businesses",
  intro: "An SEODXB SEO audit gives US businesses a complete picture of why they are not ranking and a prioritised roadmap to fix it. We analyse technical health, content gaps, link authority, and AI search visibility, then deliver a clear action plan ordered by impact.",
  scope: "US websites", served: "United States",
  featuresTitle: "What Our US SEO Audits Cover",
  featuresSubtitle: "Comprehensive, actionable SEO audits that prioritise the work that moves rankings.",
  faqTitle: "SEO Audit USA - FAQs",
  ctaTitle: "Get a Professional SEO Audit",
  ctaDesc: "Book your SEO audit and we will deliver a full technical, content, and authority analysis with an actionable roadmap.",
  ctaButton: "Get Your SEO Audit",
});

commercial("link-building-agency-usa", {
  keyword: "Link Building USA", badge: "Link Building Specialists in the USA",
  title: "Link Building USA | SEODXB - High-Authority US Link Building",
  metaDesc: "High-authority link building for US businesses from SEODXB. US press, industry publications, and niche directories that build domain authority and rankings.",
  h1: "Link Building for US Businesses: Authority That Drives Rankings",
  intro: "Domain authority built on genuine, high-quality US press and publication links is one of the most durable SEO advantages a US business can build. SEODXB delivers white-hat link building through digital PR, guest content, and niche directories that earn links from publications your competitors cannot easily replicate.",
  scope: "US link building", served: "United States",
  featuresTitle: "Our US Link Building Approach",
  featuresSubtitle: "High-authority, editorially earned links from US press and industry publications.",
  faqTitle: "Link Building USA - FAQs",
  ctaTitle: "Build the Authority Your US Site Deserves",
  ctaDesc: "Book a free link building consultation and we will audit your current authority profile.",
  ctaButton: "Get Free Link Building Consultation",
});

commercial("content-marketing-agency-usa", {
  keyword: "Content Marketing Agency USA", badge: "Content Marketing Specialists in the USA",
  title: "Content Marketing Agency USA | SEODXB - SEO-Led Content Marketing",
  metaDesc: "SEO-led content marketing for US businesses from SEODXB. Search-intent articles, topical authority hubs, and AI-citable content that drives organic traffic and leads.",
  h1: "Content Marketing Agency for US Businesses",
  intro: "Content marketing in the US only delivers ROI when it is built around search intent and AI citation potential. SEODXB creates content that ranks on Google, earns featured snippets, builds topical authority, and gets cited by ChatGPT and Perplexity, turning your content investment into a compounding organic asset.",
  scope: "content marketing in the USA", served: "United States",
  featuresTitle: "Our Content Marketing Approach for US Businesses",
  featuresSubtitle: "Search-first content that builds authority, earns AI citations, and drives qualified traffic.",
  faqTitle: "Content Marketing Agency USA - FAQs",
  ctaTitle: "Build a Content Machine That Ranks",
  ctaDesc: "Book a free content strategy consultation and we will map the topical authority opportunities in your niche.",
  ctaButton: "Get Free Content Strategy Consultation",
});

commercial("technical-seo-agency-usa", {
  keyword: "Technical SEO Agency USA", badge: "Technical SEO Specialists in the USA",
  title: "Technical SEO Agency USA | SEODXB - US Technical SEO Experts",
  metaDesc: "Technical SEO agency for US businesses from SEODXB. Core Web Vitals, crawlability, indexation, structured data, and site architecture that unlocks rankings.",
  h1: "Technical SEO Agency for US Businesses",
  intro: "Technical SEO issues silently block rankings for countless US websites. SEODXB is a specialist technical SEO agency that diagnoses and fixes the Core Web Vitals, crawl, indexation, structured data, and architecture problems that prevent your site from reaching page one, regardless of how good your content is.",
  scope: "US technical SEO", served: "United States",
  featuresTitle: "Our Technical SEO Process for US Sites",
  featuresSubtitle: "Deep technical SEO expertise that removes the barriers blocking your rankings.",
  faqTitle: "Technical SEO Agency USA - FAQs",
  ctaTitle: "Fix Your Technical SEO and Unlock Rankings",
  ctaDesc: "Book a free technical SEO audit and we will identify the issues blocking your US site's growth.",
  ctaButton: "Get Free Technical SEO Audit",
});

commercial("enterprise-seo-agency-usa", {
  keyword: "Enterprise SEO Agency USA", badge: "Enterprise SEO Specialists in the USA",
  title: "Enterprise SEO Agency USA | SEODXB - Large-Scale US SEO",
  metaDesc: "Enterprise SEO agency for large US businesses from SEODXB. Large-site SEO governance, multi-team organic programmes, and measurable enterprise-scale results.",
  h1: "Enterprise SEO Agency for Large US Businesses",
  intro: "Large US enterprises face unique SEO challenges: thousands of pages, multiple stakeholders, complex tech stacks, and the need to coordinate SEO across marketing, engineering, and content teams. SEODXB delivers enterprise SEO programmes built for this complexity, with the governance and reporting frameworks that drive results at scale.",
  scope: "enterprise businesses in the USA", served: "United States",
  featuresTitle: "Our Enterprise SEO Approach for US Businesses",
  featuresSubtitle: "Enterprise-grade SEO with the governance, tooling, and reporting large US businesses need.",
  faqTitle: "Enterprise SEO Agency USA - FAQs",
  ctaTitle: "Scale Your Enterprise SEO Programme",
  ctaDesc: "Book an enterprise SEO consultation and we will assess your current programme and identify the biggest opportunities.",
  ctaButton: "Get Enterprise SEO Consultation",
});

commercial("seo-reseller-usa", {
  keyword: "SEO Reseller USA", badge: "SEO Reseller Services in the USA",
  title: "SEO Reseller USA | SEODXB - White-Label SEO Fulfilment",
  metaDesc: "SEO reseller services in the USA from SEODXB. White-label SEO, AEO, and GEO fulfilment for US agencies who want expert delivery under their own brand.",
  h1: "SEO Reseller Services for US Agencies",
  intro: "SEODXB provides SEO reseller and white-label fulfilment for US agencies that want to offer world-class SEO without building an in-house team. We deliver the strategy and execution under your brand, on time, with reporting you can hand straight to clients.",
  scope: "the USA", served: "United States",
  featuresTitle: "Our SEO Reseller Programme for US Agencies",
  featuresSubtitle: "Expert, white-label SEO delivery built for US agency partners.",
  faqTitle: "SEO Reseller USA - FAQs",
  ctaTitle: "Become an SEODXB Partner in the US",
  ctaDesc: "Book a partner call and we will show you how our white-label SEO fulfilment can grow your agency's margins.",
  ctaButton: "Become a Partner",
});

commercial("multilingual-seo-usa", {
  keyword: "Multilingual SEO USA", badge: "Multilingual SEO for US Businesses",
  title: "Multilingual SEO USA | SEODXB - SEO in Multiple Languages",
  metaDesc: "Multilingual SEO for US businesses from SEODXB. Spanish, French, Chinese, and other language SEO with hreflang, market-specific content, and local authority.",
  h1: "Multilingual SEO for US Businesses",
  intro: "The US is a multilingual market. Spanish-speaking consumers alone represent a huge search audience, and businesses that reach them in their language gain a significant organic advantage. SEODXB delivers multilingual SEO for US businesses, covering hreflang, translated and localised content, and market-specific keyword strategy.",
  scope: "multilingual US markets", served: "United States",
  featuresTitle: "Our Multilingual SEO Approach for the US",
  featuresSubtitle: "Language-specific SEO built for the diverse US search audience.",
  faqTitle: "Multilingual SEO USA - FAQs",
  ctaTitle: "Reach the Full US Market in Every Language",
  ctaDesc: "Book a free consultation and we will map the multilingual SEO opportunities for your US business.",
  ctaButton: "Get Free Consultation",
});

commercial("national-seo-usa", {
  keyword: "National SEO USA", badge: "National SEO Across the USA",
  title: "National SEO USA | SEODXB - Nationwide US SEO",
  metaDesc: "National SEO for US businesses from SEODXB. Rank for high-intent keywords across every US state and metro. Transparent pricing, no contracts.",
  h1: "National SEO for US Businesses: Rank Across America",
  intro: "National SEO in the US requires a coordinated strategy that builds authority at the national level while maintaining relevance in the markets that matter most to your business. SEODXB delivers nationwide SEO programmes that rank US businesses from coast to coast, on Google, ChatGPT, and Google AI Overviews alike.",
  scope: "national markets across the USA", served: "United States",
  featuresTitle: "Our National SEO Approach for the USA",
  featuresSubtitle: "Coordinated nationwide SEO that builds authority and rankings across the US.",
  faqTitle: "National SEO USA - FAQs",
  ctaTitle: "Build National Search Dominance",
  ctaDesc: "Book a free strategy call and we will map a national SEO programme for your US business.",
  ctaButton: "Get Free Strategy Call",
});

export const usKeywordPages: KeywordPageConfig[] = pages;
