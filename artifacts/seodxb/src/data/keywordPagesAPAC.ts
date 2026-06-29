import type { KeywordPageConfig } from "./keywordPages";

// Working Unsplash IDs (reused for reliable rendering)
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
  type: "city" | "country" | "region";
  served: string;
  context: string;
  sectors: string;
  pressLabel: string; // region-specific press label for link-building feature
}

const L: Record<string, Loc> = {
  // Australia
  sydney:      { name: "Sydney",      type: "city",    served: "Sydney, NSW, Australia",       pressLabel: "Australian",    context: "Sydney is Australia's financial and business capital, home to the ASX, major banks, a booming tech sector, and Australia's most competitive commercial search market.",              sectors: "finance, tech, real estate, and professional services" },
  melbourne:   { name: "Melbourne",   type: "city",    served: "Melbourne, VIC, Australia",     pressLabel: "Australian",    context: "Melbourne drives Australian culture, retail, and tech, with a world-class startup ecosystem, strong healthcare, and Australia's second-largest financial market.",               sectors: "tech, retail, healthcare, and finance" },
  brisbane:    { name: "Brisbane",    type: "city",    served: "Brisbane, QLD, Australia",      pressLabel: "Australian",    context: "Brisbane is Australia's fastest-growing major city, booming with infrastructure, construction, real estate, and a growing tech sector ahead of the 2032 Olympics.",              sectors: "construction, real estate, tech, and infrastructure" },
  perth:       { name: "Perth",       type: "city",    served: "Perth, WA, Australia",          pressLabel: "Australian",    context: "Perth powers the resources and mining sector that drives Western Australia's economy, with growing professional services, tech, and tourism alongside it.",                       sectors: "mining, resources, tech, and professional services" },
  adelaide:    { name: "Adelaide",    type: "city",    served: "Adelaide, SA, Australia",       pressLabel: "Australian",    context: "Adelaide has a growing defence, tech, and wine sector, with a lower cost of doing business and strong healthcare and professional services markets.",                           sectors: "defence, tech, wine, and professional services" },
  "gold-coast":{ name: "Gold Coast",  type: "city",    served: "Gold Coast, QLD, Australia",    pressLabel: "Australian",    context: "The Gold Coast is Australia's tourism and hospitality capital, with high competition for accommodation, dining, and entertainment search rankings.",                            sectors: "tourism, hospitality, real estate, and retail" },
  canberra:    { name: "Canberra",    type: "city",    served: "Canberra, ACT, Australia",      pressLabel: "Australian",    context: "Canberra is the Australian federal capital, with dense government, defence, consulting, and professional services demand for search visibility.",                                sectors: "government, defence, consulting, and professional services" },
  australia:   { name: "Australia",   type: "country", served: "Australia",                     pressLabel: "Australian",    context: "Australia's 26 million highly connected consumers make organic search one of the highest-ROI channels across retail, services, professional, and B2B markets.",                sectors: "retail, services, finance, and tech" },
  // India
  mumbai:      { name: "Mumbai",      type: "city",    served: "Mumbai, Maharashtra, India",    pressLabel: "Indian",        context: "Mumbai is India's financial capital and business hub, home to the BSE, Bollywood, and India's most competitive market for financial services, real estate, and professional services.", sectors: "finance, real estate, media, and professional services" },
  delhi:       { name: "Delhi",       type: "city",    served: "Delhi, India",                  pressLabel: "Indian",        context: "Delhi and the NCR region is India's political and commercial capital, with major government contracting, retail, manufacturing, and a thriving startup ecosystem.",                 sectors: "government, retail, manufacturing, and startups" },
  bangalore:   { name: "Bangalore",   type: "city",    served: "Bangalore, Karnataka, India",   pressLabel: "Indian",        context: "Bangalore is India's Silicon Valley, the global delivery capital for IT services, and home to India's most competitive SaaS and tech startup market.",                         sectors: "IT services, SaaS, tech, and engineering" },
  chennai:     { name: "Chennai",     type: "city",    served: "Chennai, Tamil Nadu, India",    pressLabel: "Indian",        context: "Chennai is India's automotive and manufacturing hub, with strong IT services, healthcare, and a large professional services market.",                                           sectors: "automotive, IT, healthcare, and manufacturing" },
  hyderabad:   { name: "Hyderabad",   type: "city",    served: "Hyderabad, Telangana, India",   pressLabel: "Indian",        context: "Hyderabad has emerged as India's second tech capital, with major pharma, IT, and SaaS companies competing for search visibility alongside fast-growing real estate.",             sectors: "IT, pharma, SaaS, and real estate" },
  pune:        { name: "Pune",        type: "city",    served: "Pune, Maharashtra, India",      pressLabel: "Indian",        context: "Pune combines IT services and SaaS with automotive, education, and a growing startup ecosystem in a highly competitive search market.",                                        sectors: "IT, automotive, education, and startups" },
  india:       { name: "India",       type: "country", served: "India",                         pressLabel: "Indian",        context: "India's 800 million internet users and fast-growing digital economy make organic search critical for businesses targeting English and vernacular-language audiences.",            sectors: "IT, manufacturing, retail, and services" },
  // Canada
  toronto:     { name: "Toronto",     type: "city",    served: "Toronto, ON, Canada",           pressLabel: "Canadian",      context: "Toronto is Canada's financial capital, home to the TSX and major banks, a world-class tech corridor, and Canada's most competitive organic search market.",                      sectors: "finance, tech, real estate, and professional services" },
  vancouver:   { name: "Vancouver",   type: "city",    served: "Vancouver, BC, Canada",         pressLabel: "Canadian",      context: "Vancouver combines tech, real estate, film, and tourism, with a highly competitive digital market and strong Pacific Rim trade connections.",                                     sectors: "tech, real estate, film, and trade" },
  calgary:     { name: "Calgary",     type: "city",    served: "Calgary, AB, Canada",           pressLabel: "Canadian",      context: "Calgary drives the Canadian energy sector and has a growing tech and professional services market diversifying from oil dependence.",                                             sectors: "energy, tech, professional services, and real estate" },
  montreal:    { name: "Montreal",    type: "city",    served: "Montreal, QC, Canada",          pressLabel: "Canadian",      context: "Montreal is Canada's tech and AI research hub, with strong bilingual French and English search markets across tech, finance, and professional services.",                       sectors: "tech, AI, finance, and professional services" },
  canada:      { name: "Canada",      type: "country", served: "Canada",                        pressLabel: "Canadian",      context: "Canada's 36 million highly connected consumers and bilingual market create strong organic search opportunities across retail, services, and B2B sectors.",                      sectors: "tech, finance, retail, and professional services" },
  // Southeast Asia
  singapore:   { name: "Singapore",   type: "city",    served: "Singapore",                     pressLabel: "Singaporean",   context: "Singapore is Southeast Asia's financial and tech hub, home to regional headquarters for global banks, tech companies, and a world-class startup ecosystem.",                  sectors: "finance, tech, professional services, and trade" },
  "hong-kong": { name: "Hong Kong",   type: "city",    served: "Hong Kong",                     pressLabel: "Hong Kong",     context: "Hong Kong is Asia's financial gateway, with a highly competitive professional services, finance, and luxury retail market driven by both English and Chinese search.",          sectors: "finance, professional services, luxury retail, and tech" },
  bangkok:     { name: "Bangkok",     type: "city",    served: "Bangkok, Thailand",             pressLabel: "Thai",          context: "Bangkok drives Thailand's digital economy, with growing ecommerce, hospitality, and a thriving startup scene competing for search in both English and Thai.",                  sectors: "ecommerce, hospitality, tourism, and startups" },
  "kuala-lumpur":{ name: "Kuala Lumpur", type: "city", served: "Kuala Lumpur, Malaysia",       pressLabel: "Malaysian",     context: "Kuala Lumpur anchors Malaysia's digital economy, with strong financial services, ecommerce, and professional services search markets.",                                       sectors: "finance, ecommerce, professional services, and tech" },
  manila:      { name: "Manila",      type: "city",    served: "Metro Manila, Philippines",     pressLabel: "Philippine",    context: "Manila and Metro Manila host the Philippines' BPO sector, growing ecommerce market, and a digital-first consumer base driving strong search demand.",                         sectors: "BPO, ecommerce, professional services, and tech" },
  jakarta:     { name: "Jakarta",     type: "city",    served: "Jakarta, Indonesia",            pressLabel: "Indonesian",    context: "Jakarta drives Indonesia's digital economy, the largest in Southeast Asia, with booming ecommerce, fintech, and a rapidly growing startup ecosystem.",                        sectors: "ecommerce, fintech, tech, and professional services" },
  // APAC region
  apac:        { name: "Asia Pacific", type: "region", served: "Asia Pacific",                  pressLabel: "regional",      context: "Asia Pacific's 2.5 billion internet users, multiple languages, and diverse digital maturity levels require specialist SEO strategies tuned to each market.",                  sectors: "finance, tech, retail, and professional services" },
};

interface Ind { name: string; pain: string; angle: string; }
const I: Record<string, Ind> = {
  saas:          { name: "SaaS",          pain: "buyers self-educate through search and AI tools before engaging sales teams",                                                                    angle: "category and comparison keyword targeting, review-site strategy, and AI-cited product authority" },
  "real-estate": { name: "Real Estate",   pain: "buyers and investors research properties and markets extensively online",                                                                        angle: "project and suburb SEO, local agent authority, and AI property search citations" },
  ecommerce:     { name: "E-commerce",    pain: "shoppers research products across Google Shopping, marketplaces, and AI tools",                                                                  angle: "product and category SEO, shopping schema, and AI shopping visibility" },
  healthcare:    { name: "Healthcare",    pain: "patients research providers, treatments, and clinics across search and AI tools",                                                                angle: "condition and treatment content, medical E-E-A-T, and local clinic Map Pack visibility" },
  fintech:       { name: "Fintech",       pain: "users and enterprises evaluate fintech platforms through search and comparison",                                                                 angle: "product SEO, regulatory trust content, and category-defining authority" },
  hospitality:   { name: "Hospitality",   pain: "travellers compare accommodation and dining across search engines and AI planners",                                                              angle: "direct-booking SEO, destination content, and OTA commission reduction" },
  education:     { name: "Education",     pain: "students and parents research institutions, courses, and rankings online first",                                                                 angle: "programme SEO, ranking and accreditation content, and enrolment-driven funnels" },
  "it-services": { name: "IT Services",   pain: "enterprise buyers vet IT and software vendors through extensive online due diligence",                                                          angle: "capability and case-study SEO, B2B keyword authority, and analyst-cited positioning" },
};

interface Svc { name: string; what: string; }
const SV: Record<string, Svc> = {
  technical:           { name: "Technical SEO",              what: "Core Web Vitals, crawlability, indexation, structured data, and site architecture" },
  "on-page":           { name: "On-Page SEO",                what: "titles, meta data, headings, content optimisation, and internal linking" },
  local:               { name: "Local SEO",                  what: "Google Business Profile, Map Pack rankings, citations, and review management" },
  ecommerce:           { name: "E-commerce SEO",             what: "product and category optimisation, schema for rich results, and conversion funnels" },
  "link-building":     { name: "Link Building",              what: "high-authority backlinks from press, directories, and industry publications" },
  "content-marketing": { name: "Content Marketing",          what: "search-intent content, topical authority hubs, and AI-citable articles" },
  "seo-audit":         { name: "SEO Audit",                  what: "a deep technical, content, and authority audit with a prioritised action plan" },
  enterprise:          { name: "Enterprise SEO",             what: "large-site SEO, governance, and multi-team organic programmes" },
  aeo:                 { name: "Answer Engine Optimisation", what: "featured snippets, People Also Ask, and voice-search answer targeting" },
  geo:                 { name: "Generative Engine Optimisation", what: "brand entity building so AI tools cite and recommend you" },
};

const statSets: { value: string; label: string }[][] = [
  [{ value: "+312%", label: "Avg. Organic Growth" }, { value: "87+", label: "Page 1 Keywords" }, { value: "4.8x", label: "Average ROI" }, { value: "6 wks", label: "To First Rankings" }],
  [{ value: "+260%", label: "Qualified Leads" }, { value: "500+", label: "Keywords Tracked" }, { value: "92%", label: "Client Retention" }, { value: "8 wks", label: "First Results" }],
  [{ value: "3.4x", label: "Lead Increase" }, { value: "Top 3", label: "Map Pack Goal" }, { value: "+180%", label: "Local Visibility" }, { value: "24h", label: "Response Time" }],
  [{ value: "+295%", label: "Organic Traffic" }, { value: "100+", label: "APAC Businesses Helped" }, { value: "5.1x", label: "ROI" }, { value: "No.1", label: "Ranking Focus" }],
];

function features(label: string, scope: string, pressLabel: string): { title: string; desc: string }[] {
  return [
    { title: "Technical SEO Foundation",       desc: `We fix the Core Web Vitals, crawl, indexation, and structured-data issues that quietly block ${label} from ranking, the base every other gain is built on.` },
    { title: `${scope} Keyword Strategy`,      desc: `We map the high-intent keywords your ${scope} customers actually search, across every stage of the buying journey, not just vanity head terms.` },
    { title: "Content That Ranks and Converts", desc: "Answer-first content structured for Google, featured snippets, and AI answer engines, written by specialists, never AI-spun filler." },
    { title: "Local and Map Pack SEO",         desc: `Google Business Profile optimisation, citations, and review strategy to win the local Map Pack and near-me searches in ${scope}.` },
    { title: "AEO and GEO Optimisation",      desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend you, the next search frontier." },
    { title: "Authority Link Building",        desc: `High-quality backlinks from ${pressLabel} press, directories, and industry publications that build the domain authority Google rewards.` },
  ];
}

function baseFaqs(label: string, served: string): { q: string; a: string }[] {
  return [
    { q: `How much does ${label} cost?`,                      a: "SEODXB offers transparent plans: Startup at $999/mo, Business at $2,499/mo, and Enterprise at custom pricing, all with no lock-in contracts and no hidden fees. The right plan depends on your competition and growth goals." },
    { q: `How long does ${label} take to show results?`,      a: "Most clients see measurable ranking movement within 6 to 10 weeks, with significant traffic and lead growth by month 3 to 6, depending on competition and how aggressively we execute." },
    { q: `Does SEODXB serve clients in ${served}?`,           a: `Yes. SEODXB works with businesses across ${served} and the wider APAC region, combining local market knowledge with technical SEO, AEO, and GEO expertise.` },
    { q: "Do you optimise for AI search like ChatGPT and Google AI Overviews?", a: "Yes. Every SEODXB engagement includes AEO and GEO work so your brand is cited by AI answer engines and surfaced in AI Overviews, not just traditional blue-link results." },
    { q: "Can you handle multilingual SEO for APAC markets?", a: "Yes. For markets like Singapore, Hong Kong, India, and Malaysia, we handle multilingual SEO, localised keyword strategies, and hreflang implementation to capture search audiences across languages." },
  ];
}

const variants: KeywordPageConfig["svgVariant"][] = ["serp", "analytics", "ai", "local", "audit", "growth"];

function make(slug: string, cfg: {
  keyword: string; badge: string; title: string; metaDesc: string; h1: string; intro: string;
  scope: string; served: string; featuresTitle: string; featuresSubtitle: string;
  pressLabel?: string;
  faqs?: { q: string; a: string }[]; faqTitle: string; ctaTitle: string; ctaDesc: string; ctaButton: string;
}): KeywordPageConfig {
  const press = cfg.pressLabel ?? "regional";
  return {
    slug,
    keyword: cfg.keyword,
    badge: cfg.badge,
    title: cfg.title,
    metaDesc: cfg.metaDesc,
    h1: cfg.h1,
    intro: cfg.intro,
    svgVariant: variants[pick(slug, variants.length)],
    imageUrl: img(pick(slug, IMAGES.length)),
    featuresTitle: cfg.featuresTitle,
    featuresSubtitle: cfg.featuresSubtitle,
    features: features(cfg.keyword, cfg.scope, press),
    stats: statSets[pick(slug, statSets.length)],
    faqTitle: cfg.faqTitle,
    faqs: cfg.faqs ?? baseFaqs(cfg.keyword, cfg.served),
    ctaTitle: cfg.ctaTitle,
    ctaDesc: cfg.ctaDesc,
    ctaButton: cfg.ctaButton,
    areaServed: cfg.served,
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
    scope: l.name, served: l.served, pressLabel: l.pressLabel,
    featuresTitle: `What Our ${l.name} SEO Includes`,
    featuresSubtitle: `A complete organic growth programme tailored to the ${l.name} market and how customers there actually search.`,
    faqTitle: `${kw} - Common Questions`,
    ctaTitle: `Ready to Rank in ${l.name}?`,
    ctaDesc: `Book a free SEO strategy call. We will audit your site, study your ${l.name} competitors, and show you the fastest path to page one.`,
    ctaButton: "Get Your Free SEO Audit",
  }));
}

// ---- Industry x Location pages ----
function indLoc(slug: string, indKey: string, locKey: string) {
  const ind = I[indKey];
  const l = L[locKey];
  const kw = `SEO for ${ind.name} in ${l.name}`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${ind.name} SEO in ${l.name}`,
    title: `${kw} | SEODXB - ${ind.name} SEO Specialists`,
    metaDesc: `Specialist SEO for ${ind.name.toLowerCase()} businesses in ${l.name}. SEODXB helps you rank on Google and AI engines where ${ind.pain}. Transparent pricing.`,
    h1: `${kw}: Get Found Where Your Customers Search`,
    intro: `In ${l.name}, ${ind.pain}. SEODXB delivers ${ind.name.toLowerCase()} SEO focused on ${ind.angle}. We combine technical SEO, local visibility, and AI search optimisation so your ${ind.name.toLowerCase()} business is the one customers find first.`,
    scope: `${ind.name} in ${l.name}`, served: l.served, pressLabel: l.pressLabel,
    featuresTitle: `${ind.name} SEO Built for ${l.name}`,
    featuresSubtitle: `Everything a ${ind.name.toLowerCase()} business in ${l.name} needs to rank, get cited by AI, and convert searchers into customers.`,
    faqTitle: `${ind.name} SEO in ${l.name} - FAQs`,
    ctaTitle: `Grow Your ${ind.name} Business in ${l.name}`,
    ctaDesc: `Book a free consultation. We will show you exactly how to outrank competing ${ind.name.toLowerCase()} businesses in ${l.name} on Google and AI search.`,
    ctaButton: "Get Free Consultation",
  }));
}

// ---- Service x market ----
function svcMarket(slug: string, svcKey: string, locKey: string) {
  const s = SV[svcKey];
  const l = L[locKey];
  const kw = `${s.name} ${l.name}`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${s.name} in ${l.name}`,
    title: `${kw} | SEODXB - ${s.name} Services`,
    metaDesc: `${s.name} services in ${l.name} from SEODXB. We deliver ${s.what} to grow your rankings, traffic, and leads. Transparent pricing, no contracts.`,
    h1: `${kw}: ${s.name} That Delivers Results`,
    intro: `SEODXB provides specialist ${s.name.toLowerCase()} in ${l.name}, delivering ${s.what}. ${l.context} We make sure your business is found on Google and cited by AI engines across ${l.sectors}.`,
    scope: l.name, served: l.served, pressLabel: l.pressLabel,
    featuresTitle: `Our ${s.name} Approach in ${l.name}`,
    featuresSubtitle: `Specialist ${s.name.toLowerCase()} combined with full-funnel SEO, AEO, and GEO for ${l.name} businesses.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `Get ${s.name} in ${l.name}`,
    ctaDesc: `Book a free consultation. We will assess your current setup and show you how ${s.name.toLowerCase()} can accelerate your growth in ${l.name}.`,
    ctaButton: "Get Free Consultation",
  }));
}

// ---- Commercial / intent pages ----
function commercial(slug: string, cfg: Parameters<typeof make>[1]) {
  pages.push(make(slug, cfg));
}

// ===== BUILD PAGES =====

// A. Regional hubs (~25)
// Australia cities + country
const australiaHubs: [string, string][] = [
  ["seo-sydney", "sydney"], ["seo-melbourne", "melbourne"], ["seo-brisbane", "brisbane"],
  ["seo-perth", "perth"], ["seo-adelaide", "adelaide"], ["seo-gold-coast", "gold-coast"],
  ["seo-canberra", "canberra"], ["seo-australia", "australia"],
];
australiaHubs.forEach(([slug, key]) => locHub(slug, key));

// India cities + country
const indiaHubs: [string, string][] = [
  ["seo-mumbai", "mumbai"], ["seo-delhi", "delhi"], ["seo-bangalore", "bangalore"],
  ["seo-chennai", "chennai"], ["seo-hyderabad", "hyderabad"], ["seo-pune", "pune"],
  ["seo-india", "india"],
];
indiaHubs.forEach(([slug, key]) => locHub(slug, key));

// Canada cities + country
const canadaHubs: [string, string][] = [
  ["seo-toronto", "toronto"], ["seo-vancouver", "vancouver"],
  ["seo-calgary", "calgary"], ["seo-montreal", "montreal"], ["seo-canada", "canada"],
];
canadaHubs.forEach(([slug, key]) => locHub(slug, key));

// Southeast Asia cities
const seaHubs: [string, string][] = [
  ["seo-singapore", "singapore"], ["seo-hong-kong", "hong-kong"], ["seo-bangkok", "bangkok"],
  ["seo-kuala-lumpur", "kuala-lumpur"], ["seo-manila", "manila"], ["seo-jakarta", "jakarta"],
];
seaHubs.forEach(([slug, key]) => locHub(slug, key));

// B. Industry x city (50 pages): 5 industries x 10 key cities
const topCities: string[] = ["sydney", "melbourne", "mumbai", "bangalore", "singapore", "toronto", "hong-kong", "delhi", "brisbane", "kuala-lumpur"];
const topIndustries: string[] = ["saas", "real-estate", "ecommerce", "healthcare", "fintech"];
topIndustries.forEach((indKey) => {
  topCities.forEach((cityKey) => {
    const citySlug = cityKey === "hong-kong" ? "hong-kong" : cityKey;
    indLoc(`seo-for-${indKey}-${citySlug}`, indKey, cityKey);
  });
});

// C. Service x country (30 pages): 6 services x 5 markets
const svcMarkets: [string, string][] = [
  ["australia", "australia"], ["india", "india"], ["canada", "canada"],
  ["singapore", "singapore"], ["apac", "apac"],
];
const svcKeys: string[] = ["technical", "local", "ecommerce", "link-building", "content-marketing", "enterprise"];
svcKeys.forEach((svcKey) => {
  svcMarkets.forEach(([marketLabel, locKey]) => {
    svcMarket(`${svcKey.replace(/-/g, "-")}-${marketLabel}`, svcKey, locKey);
  });
});

// D. Commercial pages (~40)
commercial("seo-agency-australia", {
  keyword: "SEO Agency Australia", badge: "Australia's Specialist SEO Agency",
  title: "SEO Agency Australia | SEODXB - Results-Driven Australian SEO",
  metaDesc: "SEODXB is a specialist SEO agency for Australian businesses. Google rankings, AI search citations, and qualified leads across Sydney, Melbourne, Brisbane and beyond.",
  h1: "The SEO Agency Australian Businesses Trust to Rank",
  intro: "Australia's search market is sophisticated and competitive, with 26 million digitally connected consumers researching everything from financial services to healthcare online. SEODXB helps Australian businesses dominate Google search, win local Map Pack rankings, and get cited by AI engines like ChatGPT and Perplexity.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "What Our Australian SEO Agency Delivers",
  featuresSubtitle: "A full-service organic growth programme built for Australia's competitive search landscape.",
  faqTitle: "SEO Agency Australia - FAQs",
  ctaTitle: "Ready to Rank in Australia?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site, map your Australian competitors, and show you the fastest path to page one.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-company-australia", {
  keyword: "SEO Company Australia", badge: "Results-Driven SEO Company in Australia",
  title: "SEO Company Australia | SEODXB - Proven Australian SEO Results",
  metaDesc: "SEODXB is a dedicated SEO company for Australian markets. Google rankings, local visibility, and AI search citations across Australia. No contracts.",
  h1: "Australia's Most Results-Focused SEO Company",
  intro: "SEODXB is a dedicated SEO company that focuses exclusively on one thing: getting Australian businesses found on Google and AI search engines. From technical foundations to content strategy, local visibility, and AI citation building, we build programmes that compound into lasting organic growth.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Why Australian Businesses Choose SEODXB",
  featuresSubtitle: "Specialist SEO expertise combined with deep knowledge of the Australian search market.",
  faqTitle: "SEO Company Australia - FAQs",
  ctaTitle: "Find Out What SEODXB Can Do in Australia",
  ctaDesc: "Get a free SEO analysis showing your current rankings, missed opportunities, and a clear roadmap to page one.",
  ctaButton: "Get Free SEO Analysis",
});

commercial("seo-services-australia", {
  keyword: "SEO Services Australia", badge: "Complete SEO Services Across Australia",
  title: "SEO Services Australia | SEODXB - Full-Service Australian SEO",
  metaDesc: "Complete SEO services for Australian businesses: technical SEO, content, link building, local, AEO, and GEO. SEODXB delivers from $999/mo, no contracts.",
  h1: "Complete SEO Services for Australian Businesses",
  intro: "SEODXB delivers the full spectrum of SEO services Australian businesses need: technical foundations, content strategy, local Map Pack presence, and AI answer engine visibility. One specialist team covering every organic search channel that matters across Australia.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our Full Range of Australian SEO Services",
  featuresSubtitle: "Every service compounds, each component amplifies the others for exponential organic growth.",
  faqTitle: "SEO Services Australia - FAQs",
  ctaTitle: "Build Your Australian SEO Programme",
  ctaDesc: "Book a free consultation and we will design an SEO services plan tailored to your Australian growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("local-seo-australia", {
  keyword: "Local SEO Australia", badge: "Local SEO Specialists Across Australia",
  title: "Local SEO Australia | SEODXB - Local Search Visibility in Australia",
  metaDesc: "Local SEO for Australian businesses from SEODXB. Google Business Profile, Map Pack rankings, citations, and review management across every Australian city.",
  h1: "Local SEO in Australia: Win Map Pack and Near-Me Searches",
  intro: "Australians increasingly search for local businesses, services, and providers on Google with near-me and location-based queries. SEODXB delivers local SEO that wins Map Pack rankings across Sydney, Melbourne, Brisbane, Perth, Adelaide, and every other Australian city your business serves.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our Local SEO Approach for Australia",
  featuresSubtitle: "Map Pack and local search visibility designed for Australia's competitive urban markets.",
  faqTitle: "Local SEO Australia - FAQs",
  ctaTitle: "Win Local Search Across Australia",
  ctaDesc: "Book a free consultation. We will audit your local SEO presence and show you how to dominate Map Pack searches in your Australian city.",
  ctaButton: "Get Free Consultation",
});

commercial("ecommerce-seo-australia", {
  keyword: "E-commerce SEO Australia", badge: "E-commerce SEO Specialists for Australia",
  title: "E-commerce SEO Australia | SEODXB - Australian E-commerce Growth",
  metaDesc: "E-commerce SEO for Australian online stores. SEODXB grows organic product and category traffic and sales across Australia.",
  h1: "E-commerce SEO That Drives Sales Across Australia",
  intro: "Australian shoppers research products across Google Shopping, comparison platforms, and AI tools before buying. SEODXB delivers e-commerce SEO that captures this demand: product and category optimisation, Shopping schema for rich results, and AI shopping visibility across Australia's competitive retail market.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our Australian E-commerce SEO Approach",
  featuresSubtitle: "Full-funnel e-commerce SEO built to drive product discovery and sales across Australia.",
  faqTitle: "E-commerce SEO Australia - FAQs",
  ctaTitle: "Grow Your Australian E-commerce Sales Organically",
  ctaDesc: "Book a free consultation. We will audit your product pages and map the fastest route to more organic sales in Australia.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-agency-india", {
  keyword: "SEO Agency India", badge: "India's Specialist SEO Agency",
  title: "SEO Agency India | SEODXB - Results-Driven Indian SEO",
  metaDesc: "SEODXB is a specialist SEO agency for Indian businesses. Google rankings, AI search citations, and qualified leads across Mumbai, Delhi, Bangalore and beyond.",
  h1: "The SEO Agency Indian Businesses Trust to Rank",
  intro: "India's 800 million internet users make organic search one of the highest-value marketing channels for businesses targeting English-language and vernacular audiences. SEODXB helps Indian businesses rank on Google, win local visibility, and get cited by AI engines across India's most competitive markets.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "What Our Indian SEO Agency Delivers",
  featuresSubtitle: "A full-service organic growth programme built for India's scale and search diversity.",
  faqTitle: "SEO Agency India - FAQs",
  ctaTitle: "Ready to Rank in India?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site, map your Indian competitors, and show you the fastest path to page one.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-company-india", {
  keyword: "SEO Company India", badge: "Results-Driven SEO Company in India",
  title: "SEO Company India | SEODXB - Proven Indian SEO Results",
  metaDesc: "SEODXB is a dedicated SEO company for Indian markets. Google rankings, local visibility, and AI search citations across India. No contracts, transparent pricing.",
  h1: "India's Most Results-Focused SEO Company",
  intro: "SEODXB delivers focused, results-driven SEO for Indian businesses competing across the country's vast and complex digital market. From technical foundations to content authority and local visibility, we build organic programmes that drive qualified traffic and leads.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Why Indian Businesses Choose SEODXB",
  featuresSubtitle: "Specialist SEO expertise combined with knowledge of India's diverse search markets.",
  faqTitle: "SEO Company India - FAQs",
  ctaTitle: "Find Out What SEODXB Can Do in India",
  ctaDesc: "Get a free SEO analysis showing your current rankings, missed opportunities, and a clear roadmap to page one.",
  ctaButton: "Get Free SEO Analysis",
});

commercial("seo-services-india", {
  keyword: "SEO Services India", badge: "Complete SEO Services Across India",
  title: "SEO Services India | SEODXB - Full-Service Indian SEO",
  metaDesc: "Complete SEO services for Indian businesses: technical SEO, content, link building, local, AEO, and GEO. SEODXB delivers from $999/mo, no contracts.",
  h1: "Complete SEO Services for Indian Businesses",
  intro: "SEODXB delivers the full spectrum of SEO services Indian businesses need: technical foundations, content strategy, local Map Pack presence, and AI answer engine visibility. One specialist team covering every organic search channel that matters across India's major cities and markets.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our Full Range of Indian SEO Services",
  featuresSubtitle: "Every service compounds, each component amplifies the others for exponential organic growth.",
  faqTitle: "SEO Services India - FAQs",
  ctaTitle: "Build Your Indian SEO Programme",
  ctaDesc: "Book a free consultation and we will design an SEO services plan tailored to your Indian growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("it-seo-india", {
  keyword: "IT Company SEO India", badge: "IT Company SEO Specialists for India",
  title: "IT Company SEO India | SEODXB - SEO for IT Companies in India",
  metaDesc: "Specialist SEO for IT companies and services firms in India from SEODXB. We help Indian IT businesses rank for enterprise buyer keywords and build B2B authority.",
  h1: "IT Company SEO in India: Rank Where Enterprise Buyers Search",
  intro: "India's IT services sector is the world's largest, yet many IT companies struggle with online visibility in the enterprise buyer research process. SEODXB delivers IT company SEO that builds B2B keyword authority, capability-page rankings, and AI citations that put Indian IT firms in front of global enterprise buyers.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our IT Company SEO Approach for India",
  featuresSubtitle: "B2B-focused organic growth designed for India's IT services and SaaS ecosystem.",
  faqTitle: "IT Company SEO India - FAQs",
  ctaTitle: "Build IT Search Authority in India",
  ctaDesc: "Book a free consultation. We will map your IT keyword opportunity and show you how to rank ahead of competitors in global enterprise search.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-saas-india", {
  keyword: "SEO for SaaS India", badge: "SaaS SEO Specialists for India",
  title: "SEO for SaaS India | SEODXB - SaaS Organic Growth in India",
  metaDesc: "Specialist SaaS SEO for Indian companies from SEODXB. We help Bangalore and Mumbai SaaS businesses rank for category keywords and drive global qualified leads.",
  h1: "SaaS SEO in India: Build Category Authority and Drive Global Pipeline",
  intro: "India's SaaS ecosystem, centred on Bangalore, Mumbai, and Hyderabad, is competing for global buyers alongside Silicon Valley and European SaaS companies. SEODXB designs SaaS SEO programmes that build category search authority, rank for comparison keywords, and earn AI citations that put Indian SaaS companies in front of global enterprise buyers.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our SaaS SEO Approach for India",
  featuresSubtitle: "Category-defining organic growth for Indian SaaS companies competing globally.",
  faqTitle: "SaaS SEO India - FAQs",
  ctaTitle: "Build SaaS Search Authority in India",
  ctaDesc: "Book a free consultation. We will map your SaaS keyword opportunity and show you how to dominate category search.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-agency-canada", {
  keyword: "SEO Agency Canada", badge: "Canada's Specialist SEO Agency",
  title: "SEO Agency Canada | SEODXB - Results-Driven Canadian SEO",
  metaDesc: "SEODXB is a specialist SEO agency for Canadian businesses. Google rankings, AI search citations, and qualified leads across Toronto, Vancouver, Calgary and beyond.",
  h1: "The SEO Agency Canadian Businesses Trust to Rank",
  intro: "Canada's 36 million highly connected consumers and bilingual English and French market create rich organic search opportunities. SEODXB helps Canadian businesses dominate Google search, win local Map Pack rankings, and get cited by AI engines across Canada's major cities and markets.",
  scope: "Canada", served: "Canada", pressLabel: "Canadian",
  featuresTitle: "What Our Canadian SEO Agency Delivers",
  featuresSubtitle: "A full-service organic growth programme built for Canada's bilingual, multi-market search landscape.",
  faqTitle: "SEO Agency Canada - FAQs",
  ctaTitle: "Ready to Rank in Canada?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site, map your Canadian competitors, and show you the fastest path to page one.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-services-canada", {
  keyword: "SEO Services Canada", badge: "Complete SEO Services Across Canada",
  title: "SEO Services Canada | SEODXB - Full-Service Canadian SEO",
  metaDesc: "Complete SEO services for Canadian businesses: technical SEO, content, link building, local, AEO, and GEO. SEODXB delivers from $999/mo, no contracts.",
  h1: "Complete SEO Services for Canadian Businesses",
  intro: "SEODXB delivers the full spectrum of SEO services Canadian businesses need: technical foundations, bilingual content strategy, local Map Pack presence, and AI answer engine visibility. One specialist team covering every organic search channel that matters across Canada.",
  scope: "Canada", served: "Canada", pressLabel: "Canadian",
  featuresTitle: "Our Full Range of Canadian SEO Services",
  featuresSubtitle: "Every service compounds, each component amplifies the others for exponential organic growth.",
  faqTitle: "SEO Services Canada - FAQs",
  ctaTitle: "Build Your Canadian SEO Programme",
  ctaDesc: "Book a free consultation and we will design an SEO services plan tailored to your Canadian growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-agency-singapore", {
  keyword: "SEO Agency Singapore", badge: "Singapore's Specialist SEO Agency",
  title: "SEO Agency Singapore | SEODXB - Results-Driven Singapore SEO",
  metaDesc: "SEODXB is a specialist SEO agency for Singapore businesses. Google rankings, AI search citations, and qualified leads for finance, tech, and professional services.",
  h1: "The SEO Agency Singapore Businesses Trust to Rank",
  intro: "Singapore is Southeast Asia's most competitive digital market, home to regional headquarters for global banks, tech companies, and professional services firms. SEODXB helps Singapore businesses dominate Google search, win local Map Pack rankings, and get cited by AI engines in the English-language Southeast Asian market.",
  scope: "Singapore", served: "Singapore", pressLabel: "Singaporean",
  featuresTitle: "What Our Singapore SEO Agency Delivers",
  featuresSubtitle: "A full-service organic growth programme built for Singapore's competitive search landscape.",
  faqTitle: "SEO Agency Singapore - FAQs",
  ctaTitle: "Ready to Rank in Singapore?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site, map your Singapore competitors, and show you the fastest path to page one.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-services-singapore", {
  keyword: "SEO Services Singapore", badge: "Complete SEO Services in Singapore",
  title: "SEO Services Singapore | SEODXB - Full-Service Singapore SEO",
  metaDesc: "Complete SEO services for Singapore businesses from SEODXB: technical SEO, content, link building, local, AEO, and GEO. From $999/mo, no contracts.",
  h1: "Complete SEO Services for Singapore Businesses",
  intro: "SEODXB delivers the full spectrum of SEO services Singapore businesses need: technical foundations, content strategy, local Map Pack presence, and AI answer engine visibility for the region's most competitive digital market.",
  scope: "Singapore", served: "Singapore", pressLabel: "Singaporean",
  featuresTitle: "Our Full Range of Singapore SEO Services",
  featuresSubtitle: "Every service compounds, each component amplifies the others for exponential organic growth.",
  faqTitle: "SEO Services Singapore - FAQs",
  ctaTitle: "Build Your Singapore SEO Programme",
  ctaDesc: "Book a free consultation and we will design an SEO services plan tailored to your Singapore growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-asia", {
  keyword: "SEO Asia", badge: "Asia SEO Specialists",
  title: "SEO Asia | SEODXB - Pan-Asian SEO Strategy",
  metaDesc: "Pan-Asian SEO from SEODXB. We deliver cross-market organic growth strategies for businesses targeting multiple Asian markets simultaneously. Transparent pricing.",
  h1: "SEO Across Asia: Multi-Market Organic Growth",
  intro: "Asia's digital markets are diverse, fast-growing, and increasingly driven by AI search. SEODXB helps businesses build organic visibility across multiple Asian markets simultaneously, with strategies that adapt to the search behaviour, language, and competitive dynamics of each country.",
  scope: "Asia", served: "Asia Pacific", pressLabel: "regional",
  featuresTitle: "Our Pan-Asian SEO Approach",
  featuresSubtitle: "Cross-market organic strategies designed for businesses scaling across Asia.",
  faqTitle: "SEO Asia - FAQs",
  ctaTitle: "Scale Organic Growth Across Asia",
  ctaDesc: "Book a free strategy call. We will map your Asian market opportunity and show you how to build multi-market search authority.",
  ctaButton: "Get Free Strategy Call",
});

commercial("seo-for-real-estate-australia", {
  keyword: "SEO for Real Estate Australia", badge: "Real Estate SEO Specialists for Australia",
  title: "SEO for Real Estate Australia | SEODXB - Australian Real Estate SEO",
  metaDesc: "Real estate SEO across Australia from SEODXB. We help property agencies and developers rank for buyer and investor keywords and earn AI property search citations.",
  h1: "Real Estate SEO in Australia: Rank for Property Buyers and Investors",
  intro: "Australian property buyers and investors research properties extensively online, comparing suburbs, agents, and listings before making contact. SEODXB delivers real estate SEO focused on suburb and project pages, local agent authority, and AI property search citations across Australia's major markets.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our Real Estate SEO Approach for Australia",
  featuresSubtitle: "Property-focused organic growth designed for Australia's competitive real estate market.",
  faqTitle: "Real Estate SEO Australia - FAQs",
  ctaTitle: "Grow Your Real Estate Business Across Australia",
  ctaDesc: "Book a free consultation. We will map your property keyword opportunity and show you the route to more qualified enquiries.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-healthcare-australia", {
  keyword: "SEO for Healthcare Australia", badge: "Healthcare SEO Specialists for Australia",
  title: "SEO for Healthcare Australia | SEODXB - Healthcare SEO in Australia",
  metaDesc: "Specialist healthcare SEO for Australian providers from SEODXB. Medical E-E-A-T content, local clinic visibility, and patient-intent keyword ranking across Australia.",
  h1: "Healthcare SEO in Australia: Reach Patients Searching for Providers",
  intro: "Australian patients research conditions, treatments, and providers extensively online before booking appointments. SEODXB delivers healthcare SEO built on strong medical E-E-A-T, condition and treatment content, and local clinic Map Pack visibility that brings the right patients to Australian healthcare providers.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our Healthcare SEO Approach for Australia",
  featuresSubtitle: "Medical authority SEO designed for Australia's regulated healthcare market.",
  faqTitle: "Healthcare SEO Australia - FAQs",
  ctaTitle: "Grow Your Healthcare Practice in Australia",
  ctaDesc: "Book a free consultation. We will map your patient keyword opportunity and show you how to earn medical search authority in Australia.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-fintech-australia", {
  keyword: "SEO for Fintech Australia", badge: "Fintech SEO Specialists for Australia",
  title: "SEO for Fintech Australia | SEODXB - Australian Fintech SEO",
  metaDesc: "Specialist fintech SEO for Australian companies from SEODXB. We help Australian fintech businesses rank for product keywords and build ASIC-aware trust content.",
  h1: "Fintech SEO in Australia: Build Category Authority in the ASX Market",
  intro: "Australia's fintech market, regulated by ASIC and APRA, is growing rapidly alongside a sophisticated financial services sector anchored by the ASX. SEODXB delivers fintech SEO that combines product keyword targeting, compliance-aware trust content, and AI citation strategies for Australian fintech companies.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our Fintech SEO Approach for Australia",
  featuresSubtitle: "Regulatory-aware organic growth for Australian fintech companies.",
  faqTitle: "Fintech SEO Australia - FAQs",
  ctaTitle: "Build Fintech Search Authority in Australia",
  ctaDesc: "Book a free consultation. We will map your fintech keyword opportunity and show you how to rank ahead of competitors.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-canada", {
  keyword: "SEO for Real Estate Canada", badge: "Real Estate SEO Specialists for Canada",
  title: "SEO for Real Estate Canada | SEODXB - Canadian Real Estate SEO",
  metaDesc: "Real estate SEO across Canada from SEODXB. We help Canadian property agencies and developers rank for buyer and investor keywords in English and French.",
  h1: "Real Estate SEO in Canada: Rank for Property Buyers and Investors",
  intro: "Canadian property buyers and investors research extensively online before making contact, comparing neighbourhoods, agents, and listings in English and French. SEODXB delivers real estate SEO focused on neighbourhood and project pages, local agent authority, and AI property search citations across Canada.",
  scope: "Canada", served: "Canada", pressLabel: "Canadian",
  featuresTitle: "Our Real Estate SEO Approach for Canada",
  featuresSubtitle: "Bilingual property SEO designed for Canada's English and French real estate markets.",
  faqTitle: "Real Estate SEO Canada - FAQs",
  ctaTitle: "Grow Your Real Estate Business Across Canada",
  ctaDesc: "Book a free consultation. We will map your property keyword opportunity across Canada's major markets.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-saas-canada", {
  keyword: "SEO for SaaS Canada", badge: "SaaS SEO Specialists for Canada",
  title: "SEO for SaaS Canada | SEODXB - Canadian SaaS SEO",
  metaDesc: "Specialist SaaS SEO for Canadian companies from SEODXB. We help Toronto and Vancouver SaaS businesses rank for category keywords and drive qualified B2B leads.",
  h1: "SaaS SEO in Canada: Build Category Authority in the TSX Tech Market",
  intro: "Canada's SaaS ecosystem, anchored by Toronto's tech corridor, Vancouver, and Montreal's AI research hub, is competing for global buyers. SEODXB designs SaaS SEO programmes that build category authority, rank for comparison keywords, and earn AI citations that drive qualified B2B pipeline.",
  scope: "Canada", served: "Canada", pressLabel: "Canadian",
  featuresTitle: "Our SaaS SEO Approach for Canada",
  featuresSubtitle: "Category-defining organic growth for Canadian SaaS companies.",
  faqTitle: "SaaS SEO Canada - FAQs",
  ctaTitle: "Build SaaS Search Authority in Canada",
  ctaDesc: "Book a free consultation. We will map your SaaS keyword opportunity in Canada and show you how to dominate category search.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-ecommerce-india", {
  keyword: "SEO for E-commerce India", badge: "E-commerce SEO Specialists for India",
  title: "SEO for E-commerce India | SEODXB - Indian E-commerce SEO",
  metaDesc: "E-commerce SEO for Indian online retailers from SEODXB. Product and category SEO, Shopping schema, and AI shopping visibility for India's fast-growing e-commerce market.",
  h1: "E-commerce SEO in India: Rank Where Indian Shoppers Buy",
  intro: "India's e-commerce market is one of the world's fastest-growing, with hundreds of millions of shoppers researching products across Google Shopping, Flipkart, Amazon, and AI tools. SEODXB delivers e-commerce SEO that captures India's English-language search demand through product and category optimisation and AI shopping visibility.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our E-commerce SEO Approach for India",
  featuresSubtitle: "Full-funnel product SEO designed for India's competitive e-commerce landscape.",
  faqTitle: "E-commerce SEO India - FAQs",
  ctaTitle: "Grow Your E-commerce Sales in India",
  ctaDesc: "Book a free consultation. We will audit your product pages and show you the fastest route to more organic sales in India.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-healthcare-india", {
  keyword: "SEO for Healthcare India", badge: "Healthcare SEO Specialists for India",
  title: "SEO for Healthcare India | SEODXB - Healthcare SEO in India",
  metaDesc: "Specialist healthcare SEO for Indian providers from SEODXB. Medical E-E-A-T content, local clinic visibility, and patient keyword ranking across India's major cities.",
  h1: "Healthcare SEO in India: Reach Patients Searching for Providers",
  intro: "Indian patients are increasingly researching conditions, treatments, and healthcare providers online before booking. SEODXB delivers healthcare SEO built on strong medical E-E-A-T, treatment content, and local clinic Map Pack visibility that connects the right patients with Indian healthcare providers.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our Healthcare SEO Approach for India",
  featuresSubtitle: "Medical authority SEO designed for India's rapidly digitising healthcare market.",
  faqTitle: "Healthcare SEO India - FAQs",
  ctaTitle: "Grow Your Healthcare Practice in India",
  ctaDesc: "Book a free consultation. We will map your patient keyword opportunity and show you how to earn medical search authority in India.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-fintech-india", {
  keyword: "SEO for Fintech India", badge: "Fintech SEO Specialists for India",
  title: "SEO for Fintech India | SEODXB - Indian Fintech SEO",
  metaDesc: "Specialist fintech SEO for Indian companies from SEODXB. We help Indian fintech businesses rank for product keywords and build RBI-aware trust content.",
  h1: "Fintech SEO in India: Build Category Authority in BSE's Fintech Market",
  intro: "India's fintech market is one of the world's largest and fastest-growing, with payments, lending, and insurance platforms competing intensely for search visibility. SEODXB delivers fintech SEO that combines product keyword targeting, RBI-compliant trust content, and AI citation strategies for Indian fintech companies.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our Fintech SEO Approach for India",
  featuresSubtitle: "Regulatory-aware organic growth for Indian fintech companies.",
  faqTitle: "Fintech SEO India - FAQs",
  ctaTitle: "Build Fintech Search Authority in India",
  ctaDesc: "Book a free consultation. We will map your fintech keyword opportunity and show you how to rank ahead of competitors in India.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-india", {
  keyword: "SEO for Real Estate India", badge: "Real Estate SEO Specialists for India",
  title: "SEO for Real Estate India | SEODXB - Indian Real Estate SEO",
  metaDesc: "Real estate SEO across India from SEODXB. We help Indian property developers and agencies rank for buyer and investor keywords across Mumbai, Delhi, Bangalore and beyond.",
  h1: "Real Estate SEO in India: Rank Where Property Buyers Search",
  intro: "Indian property buyers research extensively online across property portals, Google, and AI tools before making contact with developers and agents. SEODXB delivers real estate SEO focused on project and locality pages, developer authority, and AI property search citations across India's major real estate markets.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our Real Estate SEO Approach for India",
  featuresSubtitle: "Project and locality SEO designed for India's competitive real estate market.",
  faqTitle: "Real Estate SEO India - FAQs",
  ctaTitle: "Grow Your Real Estate Business in India",
  ctaDesc: "Book a free consultation. We will map your property keyword opportunity in India and show you the route to more qualified leads.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-hospitality-singapore", {
  keyword: "SEO for Hospitality Singapore", badge: "Hospitality SEO Specialists for Singapore",
  title: "SEO for Hospitality Singapore | SEODXB - Hotel and Restaurant SEO in Singapore",
  metaDesc: "Hospitality SEO in Singapore from SEODXB. We help Singapore hotels and restaurants rank on Google, reduce OTA fees, and earn AI travel planner citations.",
  h1: "Hospitality SEO in Singapore: Win Direct Bookings from Global Travellers",
  intro: "Singapore attracts millions of business and leisure travellers who research hotels and restaurants through Google and AI travel planners. SEODXB helps Singapore hospitality businesses win direct bookings through destination content SEO, Google Business Profile dominance, and AI travel planner citations.",
  scope: "Singapore", served: "Singapore", pressLabel: "Singaporean",
  featuresTitle: "Our Hospitality SEO Approach for Singapore",
  featuresSubtitle: "Direct-booking focused SEO for Singapore's hotels, restaurants, and tourism businesses.",
  faqTitle: "Hospitality SEO Singapore - FAQs",
  ctaTitle: "Win More Direct Bookings in Singapore",
  ctaDesc: "Book a free consultation. We will show you how hospitality SEO reduces OTA dependence and grows direct revenue in Singapore.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-fintech-singapore", {
  keyword: "SEO for Fintech Singapore", badge: "Fintech SEO Specialists for Singapore",
  title: "SEO for Fintech Singapore | SEODXB - Fintech SEO in Singapore",
  metaDesc: "Specialist fintech SEO in Singapore from SEODXB. We help Singapore fintech companies rank for product keywords and build MAS-compliant trust content.",
  h1: "Fintech SEO in Singapore: Rank in Southeast Asia's Financial Hub",
  intro: "Singapore is Southeast Asia's fintech capital, home to regional headquarters for global payments companies, neobanks, and B2B fintech platforms. SEODXB delivers fintech SEO that combines product keyword targeting, MAS-compliant trust content, and AI citation strategies for Singapore's fintech ecosystem.",
  scope: "Singapore", served: "Singapore", pressLabel: "Singaporean",
  featuresTitle: "Our Fintech SEO Approach for Singapore",
  featuresSubtitle: "Regulatory-aware organic growth for Singapore's fintech companies.",
  faqTitle: "Fintech SEO Singapore - FAQs",
  ctaTitle: "Build Fintech Search Authority in Singapore",
  ctaDesc: "Book a free consultation. We will map your fintech keyword opportunity in Singapore and show you how to rank ahead of competitors.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-ecommerce-australia", {
  keyword: "SEO for E-commerce Australia", badge: "E-commerce SEO Specialists for Australia",
  title: "SEO for E-commerce Australia | SEODXB - Australian E-commerce Growth",
  metaDesc: "SEODXB helps Australian online retailers rank products, win Google Shopping visibility, and grow store revenue from search.",
  h1: "E-commerce SEO in Australia: Rank Where Australian Shoppers Research",
  intro: "Australian online shoppers research products across Google Shopping, comparison platforms, and AI tools before making purchase decisions. SEODXB delivers e-commerce SEO that captures Australian search demand through product and category optimisation, Shopping schema, and AI shopping visibility.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our E-commerce SEO Approach for Australia",
  featuresSubtitle: "Full-funnel product SEO designed for Australia's competitive e-commerce landscape.",
  faqTitle: "E-commerce SEO Australia (2) - FAQs",
  ctaTitle: "Grow Your E-commerce Sales in Australia",
  ctaDesc: "Book a free consultation. We will audit your product pages and show you the fastest route to more organic sales.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-agency-hong-kong", {
  keyword: "SEO Agency Hong Kong", badge: "Hong Kong's Specialist SEO Agency",
  title: "SEO Agency Hong Kong | SEODXB - Results-Driven Hong Kong SEO",
  metaDesc: "SEODXB is a specialist SEO agency for Hong Kong businesses. Google rankings, AI citations, and qualified leads for finance, professional services, and luxury retail.",
  h1: "The SEO Agency Hong Kong Businesses Trust to Rank",
  intro: "Hong Kong is Asia's financial gateway, with a uniquely competitive search market driven by both English and Chinese-language queries. SEODXB helps Hong Kong businesses rank on Google, earn AI citations, and capture high-value search traffic across finance, professional services, and luxury retail.",
  scope: "Hong Kong", served: "Hong Kong", pressLabel: "Hong Kong",
  featuresTitle: "What Our Hong Kong SEO Agency Delivers",
  featuresSubtitle: "Specialist SEO built for Hong Kong's bilingual, high-value search market.",
  faqTitle: "SEO Agency Hong Kong - FAQs",
  ctaTitle: "Ready to Rank in Hong Kong?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site and show you the fastest path to page one in Hong Kong.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-services-hong-kong", {
  keyword: "SEO Services Hong Kong", badge: "Complete SEO Services in Hong Kong",
  title: "SEO Services Hong Kong | SEODXB - Full-Service Hong Kong SEO",
  metaDesc: "Complete SEO services for Hong Kong businesses from SEODXB: technical SEO, content, link building, local, AEO, and GEO. From $999/mo, no contracts.",
  h1: "Complete SEO Services for Hong Kong Businesses",
  intro: "SEODXB delivers the full spectrum of SEO services Hong Kong businesses need: technical foundations, bilingual content strategy, local Map Pack presence, and AI answer engine visibility across Asia's financial gateway.",
  scope: "Hong Kong", served: "Hong Kong", pressLabel: "Hong Kong",
  featuresTitle: "Our Full Range of Hong Kong SEO Services",
  featuresSubtitle: "Comprehensive organic growth services for Hong Kong's competitive digital market.",
  faqTitle: "SEO Services Hong Kong - FAQs",
  ctaTitle: "Build Your Hong Kong SEO Programme",
  ctaDesc: "Book a free consultation and we will design an SEO services plan tailored to your Hong Kong growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-fintech-hong-kong", {
  keyword: "SEO for Fintech Hong Kong", badge: "Fintech SEO Specialists for Hong Kong",
  title: "SEO for Fintech Hong Kong | SEODXB - Hong Kong Fintech SEO",
  metaDesc: "Specialist fintech SEO in Hong Kong from SEODXB. We help Hong Kong fintech companies rank for product keywords and build SFC-aware trust content in English and Chinese.",
  h1: "Fintech SEO in Hong Kong: Rank in Asia's Financial Gateway",
  intro: "Hong Kong's fintech market sits at the intersection of Asian and global finance, with companies competing for search visibility in both English and Chinese. SEODXB delivers fintech SEO that combines product keyword targeting, SFC-compliant trust content, and AI citation strategies for Hong Kong's fintech ecosystem.",
  scope: "Hong Kong", served: "Hong Kong", pressLabel: "Hong Kong",
  featuresTitle: "Our Fintech SEO Approach for Hong Kong",
  featuresSubtitle: "Bilingual, regulatory-aware organic growth for Hong Kong's fintech companies.",
  faqTitle: "Fintech SEO Hong Kong - FAQs",
  ctaTitle: "Build Fintech Search Authority in Hong Kong",
  ctaDesc: "Book a free consultation. We will map your fintech keyword opportunity in Hong Kong and show you how to rank ahead of competitors.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-agency-malaysia", {
  keyword: "SEO Agency Malaysia", badge: "Malaysia's Specialist SEO Agency",
  title: "SEO Agency Malaysia | SEODXB - Results-Driven Malaysian SEO",
  metaDesc: "SEODXB is a specialist SEO agency for Malaysian businesses. Google rankings, AI search citations, and qualified leads across Kuala Lumpur and beyond.",
  h1: "The SEO Agency Malaysian Businesses Trust to Rank",
  intro: "Malaysia's digital economy is growing rapidly, with Kuala Lumpur businesses competing for search visibility in English, Malay, and Chinese. SEODXB helps Malaysian businesses rank on Google, win local Map Pack visibility, and get cited by AI engines in Malaysia's growing digital market.",
  scope: "Malaysia", served: "Malaysia", pressLabel: "Malaysian",
  featuresTitle: "What Our Malaysian SEO Agency Delivers",
  featuresSubtitle: "A full-service organic growth programme built for Malaysia's multilingual search landscape.",
  faqTitle: "SEO Agency Malaysia - FAQs",
  ctaTitle: "Ready to Rank in Malaysia?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site and show you the fastest path to page one in Malaysia.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-services-thailand", {
  keyword: "SEO Services Thailand", badge: "SEO Services for Thailand",
  title: "SEO Services Thailand | SEODXB - Thai and English SEO",
  metaDesc: "SEO services for Thai businesses from SEODXB. We deliver Google rankings, AI citations, and qualified leads for Bangkok and Thailand's growing digital economy.",
  h1: "SEO Services in Thailand: Rank in Bangkok and Beyond",
  intro: "Thailand's digital economy is booming, with Bangkok businesses competing for search visibility in both Thai and English. SEODXB delivers SEO services that help Thai businesses capture this demand: technical foundations, localised content, local Map Pack rankings, and AI search visibility.",
  scope: "Thailand", served: "Thailand", pressLabel: "Thai",
  featuresTitle: "Our SEO Services for Thailand",
  featuresSubtitle: "Bilingual SEO designed for Thailand's growing English and Thai search markets.",
  faqTitle: "SEO Services Thailand - FAQs",
  ctaTitle: "Rank in Thailand's Growing Digital Market",
  ctaDesc: "Book a free consultation. We will map your keyword opportunity and show you how to build organic visibility in Thailand.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-agency-philippines", {
  keyword: "SEO Agency Philippines", badge: "Philippines SEO Specialists",
  title: "SEO Agency Philippines | SEODXB - Philippine SEO Agency",
  metaDesc: "SEODXB is a specialist SEO agency for Philippine businesses. We help Manila and Philippines companies rank on Google and capture English-language search demand.",
  h1: "The SEO Agency Philippine Businesses Trust to Rank",
  intro: "The Philippines' English-speaking digital economy, anchored by Manila's BPO sector and growing e-commerce market, creates strong opportunities for organic search. SEODXB helps Philippine businesses rank on Google, build AI search visibility, and capture search demand from both domestic and international audiences.",
  scope: "Philippines", served: "Philippines", pressLabel: "Philippine",
  featuresTitle: "What Our Philippines SEO Agency Delivers",
  featuresSubtitle: "English-language SEO built for the Philippines' growing digital economy.",
  faqTitle: "SEO Agency Philippines - FAQs",
  ctaTitle: "Ready to Rank in the Philippines?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site and show you the fastest path to page one in the Philippines.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-indonesia", {
  keyword: "SEO Indonesia", badge: "SEO Specialists for Indonesia",
  title: "SEO Indonesia | SEODXB - Indonesian SEO Services",
  metaDesc: "SEO services for Indonesian businesses from SEODXB. We help Jakarta and Indonesian companies rank on Google and capture search demand in Southeast Asia's largest economy.",
  h1: "SEO in Indonesia: Rank in Southeast Asia's Largest Digital Economy",
  intro: "Indonesia's digital economy is the largest in Southeast Asia, with Jakarta's booming e-commerce, fintech, and startup ecosystem driving intense competition for search visibility. SEODXB helps Indonesian businesses build organic search authority through technical SEO, content strategy, and AI search optimisation.",
  scope: "Indonesia", served: "Indonesia", pressLabel: "Indonesian",
  featuresTitle: "Our SEO Approach for Indonesia",
  featuresSubtitle: "Organic growth designed for Indonesia's fast-growing digital market.",
  faqTitle: "SEO Indonesia - FAQs",
  ctaTitle: "Build Search Authority in Indonesia",
  ctaDesc: "Book a free consultation. We will map your keyword opportunity and show you how to rank in Indonesia's growing digital economy.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-consultant-australia", {
  keyword: "SEO Consultant Australia", badge: "Expert SEO Consultant for Australia",
  title: "SEO Consultant Australia | SEODXB - Specialist Australian SEO Consulting",
  metaDesc: "Work with a specialist SEO consultant for Australian markets. SEODXB offers expert audits, strategy, and hands-on SEO, AEO, and GEO consulting across Australia.",
  h1: "Your Specialist SEO Consultant in Australia",
  intro: "SEODXB provides senior SEO consulting for Australian businesses that want expert strategy without a bloated agency. You work directly with specialists on audits, technical fixes, content strategy, and AI search optimisation tailored to Australia's competitive digital market.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "What Our Australian SEO Consulting Covers",
  featuresSubtitle: "Senior, hands-on consulting across technical, content, local, and AI search for Australian markets.",
  faqTitle: "SEO Consultant Australia - FAQs",
  ctaTitle: "Work With an Australian SEO Consultant",
  ctaDesc: "Book a free consultation. We will review your current performance and define the highest-impact SEO priorities for your business.",
  ctaButton: "Book a Consultation",
});

commercial("seo-consultant-india", {
  keyword: "SEO Consultant India", badge: "Expert SEO Consultant for India",
  title: "SEO Consultant India | SEODXB - Specialist Indian SEO Consulting",
  metaDesc: "Work with a specialist SEO consultant for Indian markets. SEODXB offers expert audits, strategy, and hands-on SEO, AEO, and GEO consulting across India.",
  h1: "Your Specialist SEO Consultant in India",
  intro: "SEODXB provides senior SEO consulting for Indian businesses that want expert strategy without a bloated agency. You work directly with specialists on audits, technical fixes, content strategy, and AI search optimisation tailored to India's scale and search diversity.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "What Our Indian SEO Consulting Covers",
  featuresSubtitle: "Senior, hands-on consulting across technical, content, local, and AI search for Indian markets.",
  faqTitle: "SEO Consultant India - FAQs",
  ctaTitle: "Work With an Indian SEO Consultant",
  ctaDesc: "Book a free consultation. We will review your current performance and define the highest-impact SEO priorities for your business.",
  ctaButton: "Book a Consultation",
});

commercial("affordable-seo-australia", {
  keyword: "Affordable SEO Australia", badge: "Affordable SEO Across Australia",
  title: "Affordable SEO Australia | SEODXB - High-Value SEO from $999/mo",
  metaDesc: "Affordable SEO across Australia from SEODXB, starting at $999/mo. Real rankings, AI search visibility, and qualified leads. No contracts, no hidden fees.",
  h1: "Affordable SEO for Australian Businesses That Actually Works",
  intro: "Affordable should never mean ineffective. SEODXB delivers genuinely affordable SEO across Australia starting at $999/mo, focused on the high-intent keywords and AI visibility that generate leads, without the bloated retainers of full-service agencies.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "What Our Affordable Australian SEO Includes",
  featuresSubtitle: "Real, results-focused SEO at a price that works for growing Australian businesses.",
  faqTitle: "Affordable SEO Australia - FAQs",
  ctaTitle: "Get Affordable SEO That Delivers in Australia",
  ctaDesc: "Book a free consultation and we will show you how much organic growth is possible within your budget.",
  ctaButton: "Get Free Consultation",
});

commercial("affordable-seo-india", {
  keyword: "Affordable SEO India", badge: "Affordable SEO Across India",
  title: "Affordable SEO India | SEODXB - High-Value SEO from $999/mo",
  metaDesc: "Affordable SEO across India from SEODXB, starting at $999/mo. Real rankings, AI search visibility, and qualified leads. No contracts, no hidden fees.",
  h1: "Affordable SEO for Indian Businesses That Actually Works",
  intro: "SEODXB delivers genuinely affordable SEO for Indian businesses starting at $999/mo, focused on the high-intent keywords and AI visibility that generate leads and revenue, without the overhead of generalist agencies.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "What Our Affordable Indian SEO Includes",
  featuresSubtitle: "Real, results-focused SEO at a price that works for Indian businesses of every size.",
  faqTitle: "Affordable SEO India - FAQs",
  ctaTitle: "Get Affordable SEO That Delivers in India",
  ctaDesc: "Book a free consultation and we will show you how much organic growth is possible within your budget.",
  ctaButton: "Get Free Consultation",
});

commercial("ai-seo-australia", {
  keyword: "AI SEO Australia", badge: "AI SEO Specialists for Australia",
  title: "AI SEO Australia | SEODXB - AI Search Optimisation for Australian Markets",
  metaDesc: "AI SEO across Australia from SEODXB. We optimise Australian businesses for Google AI Overviews, ChatGPT, Perplexity, and Gemini to capture AI-driven search traffic.",
  h1: "AI SEO for Australian Businesses in the Age of Generative Search",
  intro: "AI search is reshaping how Australians find information and make decisions. SEODXB helps Australian brands get cited in Google AI Overviews, ChatGPT, Perplexity, and Gemini responses, combining entity-building, E-E-A-T signals, and structured content that AI systems trust and reference.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our AI SEO Approach for Australian Markets",
  featuresSubtitle: "Future-ready SEO that captures both traditional and AI-driven search traffic in Australia.",
  faqTitle: "AI SEO Australia - FAQs",
  ctaTitle: "Get Found in AI Search Across Australia",
  ctaDesc: "Book a free consultation. We will show you how to build AI search visibility in your Australian markets.",
  ctaButton: "Get Free Consultation",
});

commercial("ai-seo-india", {
  keyword: "AI SEO India", badge: "AI SEO Specialists for India",
  title: "AI SEO India | SEODXB - AI Search Optimisation for Indian Markets",
  metaDesc: "AI SEO across India from SEODXB. We optimise Indian businesses for Google AI Overviews, ChatGPT, Perplexity, and Gemini to capture AI-driven search traffic.",
  h1: "AI SEO for Indian Businesses in the Age of Generative Search",
  intro: "AI search is rapidly transforming how Indian consumers and businesses discover information. SEODXB helps Indian brands get cited in Google AI Overviews, ChatGPT, Perplexity, and Gemini responses, building entity authority and E-E-A-T signals that AI systems use to validate and recommend sources.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our AI SEO Approach for Indian Markets",
  featuresSubtitle: "Future-ready SEO that captures both traditional and AI-driven search traffic in India.",
  faqTitle: "AI SEO India - FAQs",
  ctaTitle: "Get Found in AI Search Across India",
  ctaDesc: "Book a free consultation. We will show you how to build AI search visibility in your Indian markets.",
  ctaButton: "Get Free Consultation",
});

commercial("chatgpt-seo-australia", {
  keyword: "ChatGPT SEO Australia", badge: "ChatGPT SEO for Australian Markets",
  title: "ChatGPT SEO Australia | SEODXB - Get Cited by ChatGPT in Australia",
  metaDesc: "Get your Australian business cited by ChatGPT, Perplexity, and Gemini. SEODXB delivers GEO and AEO strategies that build AI citation authority across Australian markets.",
  h1: "Get Your Australian Business Cited by ChatGPT and AI Search",
  intro: "Millions of Australians now use ChatGPT, Perplexity, and Gemini instead of traditional search. SEODXB helps Australian businesses earn citations in these AI responses through brand entity building, E-E-A-T content, and structured data that AI systems use to validate and recommend sources.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "How We Build ChatGPT and AI Search Citations in Australia",
  featuresSubtitle: "A structured GEO programme that puts your Australian brand in front of AI-first searchers.",
  faqTitle: "ChatGPT SEO Australia - FAQs",
  ctaTitle: "Get Cited by AI Search in Australia",
  ctaDesc: "Book a free consultation. We will show you how to build AI citation authority in your Australian markets.",
  ctaButton: "Get Free Consultation",
});

commercial("enterprise-seo-australia", {
  keyword: "Enterprise SEO Australia", badge: "Enterprise SEO Specialists for Australia",
  title: "Enterprise SEO Australia | SEODXB - Enterprise-Scale Australian SEO",
  metaDesc: "Enterprise SEO for large Australian businesses from SEODXB. We deliver large-site SEO, governance, content at scale, and multi-team organic programmes.",
  h1: "Enterprise SEO in Australia: Organic Growth at Scale",
  intro: "Large Australian businesses face unique SEO challenges: large site complexity, multi-team governance, regional targeting, and the need to integrate SEO across marketing, content, and development. SEODXB delivers enterprise SEO programmes that solve these challenges and drive organic growth at scale.",
  scope: "Australia", served: "Australia", pressLabel: "Australian",
  featuresTitle: "Our Enterprise SEO Approach for Australia",
  featuresSubtitle: "Large-site, multi-team organic programmes designed for Australia's largest businesses.",
  faqTitle: "Enterprise SEO Australia - FAQs",
  ctaTitle: "Scale Your Australian SEO Programme",
  ctaDesc: "Book a consultation. We will assess your enterprise SEO maturity and map a programme to grow organic performance at scale.",
  ctaButton: "Book Enterprise Consultation",
});

commercial("enterprise-seo-india", {
  keyword: "Enterprise SEO India", badge: "Enterprise SEO Specialists for India",
  title: "Enterprise SEO India | SEODXB - Enterprise-Scale Indian SEO",
  metaDesc: "Enterprise SEO for large Indian businesses from SEODXB. We deliver large-site SEO, governance, content at scale, and multi-team organic programmes across India.",
  h1: "Enterprise SEO in India: Organic Growth at Scale",
  intro: "India's largest businesses operate across complex digital landscapes with multiple business units, regional offices, and massive site architectures. SEODXB delivers enterprise SEO programmes that handle this complexity: large-site governance, multi-team integration, and AI search optimisation at scale.",
  scope: "India", served: "India", pressLabel: "Indian",
  featuresTitle: "Our Enterprise SEO Approach for India",
  featuresSubtitle: "Large-site, multi-team organic programmes designed for India's largest enterprises.",
  faqTitle: "Enterprise SEO India - FAQs",
  ctaTitle: "Scale Your Indian SEO Programme",
  ctaDesc: "Book a consultation. We will assess your enterprise SEO maturity and map a programme to grow organic performance at scale in India.",
  ctaButton: "Book Enterprise Consultation",
});

export const apacKeywordPages: KeywordPageConfig[] = pages;
