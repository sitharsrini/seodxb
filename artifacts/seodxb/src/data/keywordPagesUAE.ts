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

// Deterministic index from slug so variant selection is stable per page
function pick(slug: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % mod;
}

type LocType = "emirate" | "area" | "city";
interface Loc {
  name: string;        // e.g. "Abu Dhabi"
  short?: string;      // e.g. "AD"
  type: LocType;
  emirate: string;     // parent emirate name
  served: string;      // areaServed value
  context: string;     // one sentence of real local economic context
  sectors: string;     // key local sectors
}

const L: Record<string, Loc> = {
  // Emirates / cities
  ajman: { name: "Ajman", type: "emirate", emirate: "Ajman", served: "Ajman, UAE", context: "Ajman is the UAE's most affordable emirate for business setup, with Ajman Free Zone home to thousands of SMEs, traders, and manufacturers.", sectors: "manufacturing, trading, real estate, and professional services" },
  "ras-al-khaimah": { name: "Ras Al Khaimah", short: "RAK", type: "emirate", emirate: "Ras Al Khaimah", served: "Ras Al Khaimah, UAE", context: "Ras Al Khaimah blends industry and tourism, from RAK Ceramics and RAKEZ free zone businesses to Jebel Jais adventure tourism and beach resorts.", sectors: "manufacturing, tourism, real estate, and adventure hospitality" },
  fujairah: { name: "Fujairah", type: "emirate", emirate: "Fujairah", served: "Fujairah, UAE", context: "Fujairah is the UAE's east coast gateway, anchored by one of the world's largest bunkering ports plus growing dive tourism and hospitality.", sectors: "shipping, logistics, tourism, and hospitality" },
  "umm-al-quwain": { name: "Umm Al Quwain", short: "UAQ", type: "emirate", emirate: "Umm Al Quwain", served: "Umm Al Quwain, UAE", context: "Umm Al Quwain is a quieter emirate known for aquatic tourism, the UAQ Free Trade Zone, and a growing base of small businesses and leisure operators.", sectors: "leisure tourism, trading, and small business" },
  "al-ain": { name: "Al Ain", type: "city", emirate: "Abu Dhabi", served: "Al Ain, Abu Dhabi, UAE", context: "Al Ain, the Garden City, is a UNESCO World Heritage hub with strong education, healthcare, agriculture, and family-services demand inland from the coast.", sectors: "education, healthcare, agriculture, and retail" },
  // Dubai areas
  "dubai-marina": { name: "Dubai Marina", type: "area", emirate: "Dubai", served: "Dubai Marina, Dubai, UAE", context: "Dubai Marina is one of the city's densest waterfront communities, packed with restaurants, fitness studios, clinics, and real estate competing for resident searches.", sectors: "hospitality, fitness, real estate, and retail" },
  "business-bay": { name: "Business Bay", type: "area", emirate: "Dubai", served: "Business Bay, Dubai, UAE", context: "Business Bay is Dubai's central business district, dense with corporate offices, startups, agencies, and B2B service providers.", sectors: "professional services, startups, and B2B" },
  jlt: { name: "JLT", type: "area", emirate: "Dubai", served: "Jumeirah Lakes Towers, Dubai, UAE", context: "Jumeirah Lakes Towers, home to the DMCC free zone, hosts thousands of trading, commodities, and SME businesses across its cluster towers.", sectors: "trading, commodities, and SMEs" },
  "downtown-dubai": { name: "Downtown Dubai", type: "area", emirate: "Dubai", served: "Downtown Dubai, Dubai, UAE", context: "Downtown Dubai, anchored by Burj Khalifa and Dubai Mall, is a premium retail, hospitality, and luxury services destination with intense local competition.", sectors: "luxury retail, hospitality, and dining" },
  deira: { name: "Deira", type: "area", emirate: "Dubai", served: "Deira, Dubai, UAE", context: "Deira is Dubai's historic trading heart, from the Gold Souk to wholesale, electronics, and import-export businesses serving the wider region.", sectors: "trading, wholesale, and retail" },
  "bur-dubai": { name: "Bur Dubai", type: "area", emirate: "Dubai", served: "Bur Dubai, Dubai, UAE", context: "Bur Dubai mixes heritage districts with dense textile, electronics, and small-trader commerce alongside clinics and professional services.", sectors: "retail, trading, and professional services" },
  "jumeirah-village-circle": { name: "Jumeirah Village Circle", short: "JVC", type: "area", emirate: "Dubai", served: "Jumeirah Village Circle, Dubai, UAE", context: "JVC is one of Dubai's fastest-growing residential communities, with high demand for local clinics, salons, nurseries, and home services.", sectors: "real estate, family services, and retail" },
  difc: { name: "DIFC", type: "area", emirate: "Dubai", served: "Dubai International Financial Centre, Dubai, UAE", context: "The Dubai International Financial Centre is the region's leading financial hub, dense with banks, law firms, fintechs, and wealth managers.", sectors: "finance, legal, and fintech" },
  "dubai-silicon-oasis": { name: "Dubai Silicon Oasis", short: "DSO", type: "area", emirate: "Dubai", served: "Dubai Silicon Oasis, Dubai, UAE", context: "Dubai Silicon Oasis is a technology free zone and community hub for IT companies, startups, and electronics businesses.", sectors: "technology, IT, and startups" },
  "dubai-media-city": { name: "Dubai Media City", type: "area", emirate: "Dubai", served: "Dubai Media City, Dubai, UAE", context: "Dubai Media City is the regional base for media, advertising, PR, and marketing agencies competing for high-value B2B clients.", sectors: "media, marketing, and creative services" },
  "dubai-internet-city": { name: "Dubai Internet City", type: "area", emirate: "Dubai", served: "Dubai Internet City, Dubai, UAE", context: "Dubai Internet City is the MENA technology cluster, home to global tech firms, SaaS companies, and IT service providers.", sectors: "technology, SaaS, and IT services" },
  "al-quoz": { name: "Al Quoz", type: "area", emirate: "Dubai", served: "Al Quoz, Dubai, UAE", context: "Al Quoz fuses industry and culture, from warehouses and manufacturing to art galleries, showrooms, and creative studios.", sectors: "manufacturing, warehousing, and creative retail" },
  jumeirah: { name: "Jumeirah", type: "area", emirate: "Dubai", served: "Jumeirah, Dubai, UAE", context: "Jumeirah is a premium beachfront residential district with strong demand for clinics, beauty salons, boutique retail, and luxury services.", sectors: "healthcare, beauty, and luxury retail" },
  "al-barsha": { name: "Al Barsha", type: "area", emirate: "Dubai", served: "Al Barsha, Dubai, UAE", context: "Al Barsha, home to Mall of the Emirates, mixes residential demand with hotels, retail, clinics, and education providers.", sectors: "retail, hospitality, and education" },
  tecom: { name: "TECOM", type: "area", emirate: "Dubai", served: "TECOM, Dubai, UAE", context: "TECOM districts cluster media, technology, education, and knowledge businesses across Dubai's innovation free zones.", sectors: "media, technology, and education" },
  "dubai-south": { name: "Dubai South", type: "area", emirate: "Dubai", served: "Dubai South, Dubai, UAE", context: "Dubai South, around Al Maktoum International and the Expo legacy site, is a fast-rising logistics, aviation, and residential growth zone.", sectors: "logistics, aviation, and real estate" },
  "palm-jumeirah": { name: "Palm Jumeirah", type: "area", emirate: "Dubai", served: "Palm Jumeirah, Dubai, UAE", context: "Palm Jumeirah is a flagship luxury destination of resorts, fine dining, wellness, and high-end real estate competing for premium searches.", sectors: "luxury hospitality, wellness, and real estate" },
  "motor-city": { name: "Motor City", type: "area", emirate: "Dubai", served: "Motor City, Dubai, UAE", context: "Motor City blends automotive businesses and a family residential community with demand for local services, clinics, and retail.", sectors: "automotive, retail, and family services" },
  // Abu Dhabi areas
  "yas-island": { name: "Yas Island", type: "area", emirate: "Abu Dhabi", served: "Yas Island, Abu Dhabi, UAE", context: "Yas Island is Abu Dhabi's entertainment capital, from the F1 circuit and theme parks to hotels, dining, and leisure operators.", sectors: "tourism, entertainment, and hospitality" },
  "al-reem-island": { name: "Al Reem Island", type: "area", emirate: "Abu Dhabi", served: "Al Reem Island, Abu Dhabi, UAE", context: "Al Reem Island is a dense Abu Dhabi residential and commercial hub with high demand for clinics, retail, and professional services.", sectors: "real estate, healthcare, and retail" },
  "khalifa-city": { name: "Khalifa City", type: "area", emirate: "Abu Dhabi", served: "Khalifa City, Abu Dhabi, UAE", context: "Khalifa City is a sprawling Abu Dhabi family community with strong demand for nurseries, clinics, salons, and home services.", sectors: "family services, healthcare, and retail" },
  mussafah: { name: "Mussafah", type: "area", emirate: "Abu Dhabi", served: "Mussafah, Abu Dhabi, UAE", context: "Mussafah is Abu Dhabi's industrial backbone, dense with manufacturing, automotive workshops, and logistics companies.", sectors: "manufacturing, automotive, and logistics" },
  "saadiyat-island": { name: "Saadiyat Island", type: "area", emirate: "Abu Dhabi", served: "Saadiyat Island, Abu Dhabi, UAE", context: "Saadiyat Island is Abu Dhabi's cultural and luxury district, home to the Louvre, premium resorts, and high-end real estate.", sectors: "culture, luxury hospitality, and real estate" },
  "abu-dhabi-corniche": { name: "Abu Dhabi Corniche", type: "area", emirate: "Abu Dhabi", served: "Abu Dhabi Corniche, Abu Dhabi, UAE", context: "The Abu Dhabi Corniche waterfront concentrates hotels, dining, clinics, and tourism businesses along the capital's seafront.", sectors: "hospitality, tourism, and healthcare" },
};

interface Ind { name: string; pain: string; angle: string; }
const I: Record<string, Ind> = {
  "real-estate": { name: "Real Estate", pain: "buyers and tenants research listings on Google and AI tools long before they call an agent", angle: "ranking project and community pages, capturing high-intent property keywords, and earning AI citations for off-plan and resale searches" },
  restaurants: { name: "Restaurants", pain: "diners decide where to eat from Google Maps, reviews, and AI recommendations in seconds", angle: "Google Business Profile dominance, menu and dish keyword targeting, and review-driven local rankings" },
  "dental-clinics": { name: "Dental Clinics", pain: "patients search for specific treatments and compare clinics before booking", angle: "treatment-page SEO, Map Pack visibility, and trust signals that convert searchers into appointments" },
  "law-firms": { name: "Law Firms", pain: "clients with urgent legal needs search by practice area and expect authoritative answers", angle: "practice-area content, E-E-A-T author signals, and ranking for high-value legal keywords" },
  construction: { name: "Construction", pain: "developers and procurement teams vet contractors online before issuing tenders", angle: "project portfolio SEO, capability-page ranking, and B2B lead capture" },
  healthcare: { name: "Healthcare", pain: "patients research symptoms, treatments, and providers across Google and AI engines", angle: "condition and treatment content, medical E-E-A-T, and local clinic visibility" },
  hotels: { name: "Hotels", pain: "travellers compare properties across Google, OTAs, and AI trip planners", angle: "direct-booking SEO, destination content, and reducing dependence on commission-heavy OTAs" },
  ecommerce: { name: "E-commerce", pain: "shoppers start product research on Google and increasingly on AI assistants", angle: "product and category SEO, structured data for rich results, and AI shopping visibility" },
  "oil-gas": { name: "Oil & Gas", pain: "procurement and partnership decisions begin with online supplier research", angle: "capability and compliance content, B2B keyword targeting, and authority building" },
  clinics: { name: "Clinics", pain: "patients search for nearby specialists and same-day appointments", angle: "service-line SEO, Map Pack rankings, and conversion-focused booking funnels" },
  schools: { name: "Schools", pain: "parents research curricula, fees, and reviews months before enrolment", angle: "admissions content, curriculum and FAQ schema, and reputation-driven local rankings" },
  "car-dealers": { name: "Car Dealers", pain: "buyers research models, prices, and dealers extensively online", angle: "inventory and model-page SEO, local visibility, and lead-capture optimisation" },
  manufacturing: { name: "Manufacturing", pain: "buyers and distributors source suppliers through search and B2B research", angle: "product and capability SEO, export-market targeting, and B2B authority" },
  furniture: { name: "Furniture", pain: "shoppers browse collections and compare showrooms online before visiting", angle: "collection and category SEO, local showroom visibility, and rich product results" },
  logistics: { name: "Logistics", pain: "shippers and businesses compare freight and fulfilment partners online", angle: "service-page SEO, route and solution keywords, and B2B lead generation" },
  fintech: { name: "Fintech", pain: "users and partners evaluate platforms through search and AI comparison", angle: "product SEO, trust and compliance content, and category-defining authority" },
  insurance: { name: "Insurance", pain: "customers compare policies and providers across Google and aggregators", angle: "policy and comparison content, intent keyword targeting, and lead funnels" },
  education: { name: "Education", pain: "students and parents research programmes and institutions online first", angle: "programme and course SEO, FAQ and review signals, and enrolment-driven funnels" },
  automotive: { name: "Automotive", pain: "vehicle owners search for services, parts, and workshops locally", angle: "service and Map Pack SEO, model-specific content, and local lead capture" },
  travel: { name: "Travel", pain: "travellers plan and book across search engines and AI trip planners", angle: "destination and package SEO, itinerary content, and AI travel visibility" },
  banks: { name: "Banks", pain: "customers research products and rates before choosing a provider", angle: "product SEO, financial E-E-A-T, and ranking for high-intent banking keywords" },
  government: { name: "Government & Public Sector", pain: "citizens and businesses search for services, information, and processes", angle: "service-information SEO, accessibility, and clear answer-engine optimisation" },
  nonprofits: { name: "Nonprofits", pain: "donors and volunteers discover causes through search and social", angle: "cause and impact content, donation-funnel SEO, and grant-relevant visibility" },
  startups: { name: "Startups", pain: "early traction depends on being found by customers, investors, and talent", angle: "category SEO, founder-led content, and fast-compounding organic growth" },
};

interface Svc { name: string; what: string; }
const SV: Record<string, Svc> = {
  technical: { name: "Technical SEO", what: "Core Web Vitals, crawlability, indexation, structured data, and site architecture" },
  "on-page": { name: "On-Page SEO", what: "titles, meta data, headings, content optimisation, and internal linking" },
  local: { name: "Local SEO", what: "Google Business Profile, Map Pack rankings, citations, and review management" },
  ecommerce: { name: "E-commerce SEO", what: "product and category optimisation, schema for rich results, and conversion funnels" },
  "link-building": { name: "Link Building", what: "high-authority backlinks from UAE press, directories, and industry publications" },
  "content-marketing": { name: "Content Marketing", what: "search-intent content, topical authority hubs, and AI-citable articles" },
  "keyword-research": { name: "Keyword Research", what: "high-intent keyword mapping across the full buying journey" },
  "seo-audit": { name: "SEO Audit", what: "a deep technical, content, and authority audit with a prioritised action plan" },
  shopify: { name: "Shopify SEO", what: "Shopify-specific technical fixes, product SEO, and content strategy" },
  wordpress: { name: "WordPress SEO", what: "WordPress technical optimisation, schema, speed, and content SEO" },
  arabic: { name: "Arabic SEO", what: "bilingual Arabic and English optimisation, hreflang, and culturally relevant content" },
  ai: { name: "AI SEO", what: "optimisation for Google AI Overviews, ChatGPT, Perplexity, and Gemini" },
  aeo: { name: "Answer Engine Optimisation", what: "featured snippets, People Also Ask, and voice-search answer targeting" },
  geo: { name: "Generative Engine Optimisation", what: "brand entity building so AI tools cite and recommend you" },
  enterprise: { name: "Enterprise SEO", what: "large-site SEO, governance, and multi-team organic programmes" },
};

const statSets: { value: string; label: string }[][] = [
  [{ value: "+312%", label: "Avg. Organic Growth" }, { value: "87+", label: "Page 1 Keywords" }, { value: "4.8x", label: "Average ROI" }, { value: "6 wks", label: "To First Rankings" }],
  [{ value: "+260%", label: "Qualified Leads" }, { value: "500+", label: "Keywords Tracked" }, { value: "92%", label: "Client Retention" }, { value: "8 wks", label: "First Results" }],
  [{ value: "3.4x", label: "Lead Increase" }, { value: "Top 3", label: "Map Pack Goal" }, { value: "+180%", label: "Local Visibility" }, { value: "24h", label: "Response Time" }],
  [{ value: "+295%", label: "Organic Traffic" }, { value: "100+", label: "UAE Businesses Helped" }, { value: "5.1x", label: "ROI" }, { value: "No.1", label: "Ranking Focus" }],
];

function features(label: string, scope: string): { title: string; desc: string }[] {
  return [
    { title: "Technical SEO Foundation", desc: `We fix the Core Web Vitals, crawl, indexation, and structured-data issues that quietly block ${label} from ranking - the base every other gain is built on.` },
    { title: `${scope} Keyword Strategy`, desc: `We map the high-intent keywords your ${scope} customers actually search, across every stage of the buying journey, not just vanity head terms.` },
    { title: "Content That Ranks & Converts", desc: "Answer-first content structured for Google, featured snippets, and AI answer engines - written by specialists, never AI-spun filler." },
    { title: "Local & Map Pack SEO", desc: `Google Business Profile optimisation, citations, and review strategy to win the local Map Pack and "near me" searches in ${scope}.` },
    { title: "AEO & GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend you - the next search frontier." },
    { title: "Authority Link Building", desc: "High-quality backlinks from UAE press, directories, and industry publications that build the domain authority Google rewards." },
  ];
}

function baseFaqs(label: string, served: string): { q: string; a: string }[] {
  return [
    { q: `How much does ${label} cost?`, a: "SEODXB offers transparent plans: Startup at $999/mo, Business at $2,499/mo, and Enterprise at custom pricing - all with no lock-in contracts and no hidden fees. The right plan depends on your competition and growth goals." },
    { q: `How long does ${label} take to show results?`, a: "Most clients see measurable ranking movement within 6 to 10 weeks, with significant traffic and lead growth by month 3 to 6, depending on competition and how aggressively we execute." },
    { q: `Does SEODXB serve clients in ${served}?`, a: `Yes. SEODXB works with businesses across ${served} and the wider UAE, combining local market knowledge with technical SEO, AEO, and GEO expertise.` },
    { q: "Do you optimise for AI search like ChatGPT and Google AI Overviews?", a: "Yes. Every SEODXB engagement includes AEO and GEO work so your brand is cited by AI answer engines and surfaced in AI Overviews, not just traditional blue-link results." },
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
    ctaDesc: `Book a free SEO strategy call. We'll audit your site, study your ${l.name} competitors, and show you the fastest path to page one.`,
    ctaButton: "Get Your Free SEO Audit",
  }));
}

// ---- Industry x Location pages ----
function indLoc(slug: string, indKey: string, locKey: string) {
  const ind = I[indKey]; const l = L[locKey];
  const kw = `SEO for ${ind.name} ${l.name}`;
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
    ctaDesc: `Book a free consultation. We'll show you exactly how to outrank competing ${ind.name.toLowerCase()} businesses in ${l.name} on Google and AI search.`,
    ctaButton: "Get Free Consultation",
  }));
}

// ---- Industry x UAE (national) ----
function indUAE(slug: string, indKey: string) {
  const ind = I[indKey];
  const kw = `SEO for ${ind.name} UAE`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${ind.name} SEO across the UAE`,
    title: `${kw} | SEODXB - Nationwide ${ind.name} SEO`,
    metaDesc: `Nationwide SEO for ${ind.name.toLowerCase()} businesses across the UAE. SEODXB ranks you on Google and AI engines in Dubai, Abu Dhabi, Sharjah and beyond.`,
    h1: `${kw}: Rank Nationwide Across the Emirates`,
    intro: `Across the UAE, ${ind.pain}. SEODXB delivers ${ind.name.toLowerCase()} SEO across all seven emirates, focused on ${ind.angle}. One coordinated strategy for Dubai, Abu Dhabi, Sharjah and the wider UAE - on Google and AI search alike.`,
    scope: `${ind.name} across the UAE`, served: "United Arab Emirates",
    featuresTitle: `Nationwide ${ind.name} SEO`,
    featuresSubtitle: `A coordinated organic growth programme for ${ind.name.toLowerCase()} businesses operating across multiple emirates.`,
    faqTitle: `${ind.name} SEO in the UAE - FAQs`,
    ctaTitle: `Scale Your ${ind.name} Brand Across the UAE`,
    ctaDesc: `Book a free strategy call. We'll map a nationwide ${ind.name.toLowerCase()} SEO plan covering every emirate that matters to your business.`,
    ctaButton: "Get Free Strategy Call",
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
    intro: `SEODXB provides specialist ${s.name.toLowerCase()} in ${l.name}, delivering ${s.what}. ${l.context} We make sure your business is found on Google and cited by AI engines across ${l.sectors}.`,
    scope: l.name, served: l.served,
    featuresTitle: `Our ${s.name} Approach in ${l.name}`,
    featuresSubtitle: `Specialist ${s.name.toLowerCase()} combined with full-funnel SEO, AEO, and GEO for ${l.name} businesses.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `Get ${s.name} in ${l.name}`,
    ctaDesc: `Book a free consultation. We'll assess your current setup and show you how ${s.name.toLowerCase()} can accelerate your growth in ${l.name}.`,
    ctaButton: "Get Free Consultation",
  }));
}

// ---- Service x UAE ----
function svcUAE(slug: string, svcKey: string) {
  const s = SV[svcKey];
  const kw = `${s.name} UAE`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${s.name} across the UAE`,
    title: `${kw} | SEODXB - Nationwide ${s.name}`,
    metaDesc: `${s.name} across the UAE from SEODXB. We deliver ${s.what} for businesses in Dubai, Abu Dhabi, Sharjah and beyond. Transparent pricing.`,
    h1: `${kw}: ${s.name} for Businesses Nationwide`,
    intro: `SEODXB delivers ${s.name.toLowerCase()} across the UAE, providing ${s.what}. Whether you operate in one emirate or all seven, we build organic visibility on Google and AI engines that compounds month after month.`,
    scope: "the UAE", served: "United Arab Emirates",
    featuresTitle: `Nationwide ${s.name}`,
    featuresSubtitle: `Specialist ${s.name.toLowerCase()} integrated with full SEO, AEO, and GEO for UAE businesses.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `Get ${s.name} for Your UAE Business`,
    ctaDesc: `Book a free strategy call. We'll show you how ${s.name.toLowerCase()} fits into a nationwide organic growth plan.`,
    ctaButton: "Get Free Strategy Call",
  }));
}

// ---- Commercial / intent pages (custom) ----
function commercial(slug: string, cfg: Parameters<typeof make>[1]) {
  pages.push(make(slug, cfg));
}

// ===== Build the 100 pages =====

// A. Emirate & city hubs + AD/Sharjah company variants (12)
locHub("seo-ajman", "ajman");
locHub("seo-ras-al-khaimah", "ras-al-khaimah");
locHub("seo-fujairah", "fujairah");
locHub("seo-umm-al-quwain", "umm-al-quwain");
locHub("seo-al-ain", "al-ain");
commercial("seo-company-abu-dhabi", {
  keyword: "SEO Company Abu Dhabi", badge: "Top-Rated SEO Company in Abu Dhabi",
  title: "SEO Company Abu Dhabi | SEODXB - Results-Driven SEO",
  metaDesc: "SEODXB is a results-focused SEO company in Abu Dhabi delivering Google rankings, local visibility, and AI search citations. No contracts, transparent pricing.",
  h1: "Abu Dhabi's Most Results-Focused SEO Company",
  intro: "SEODXB is a dedicated SEO company serving Abu Dhabi, the UAE capital where finance, energy, government, and real estate drive intense online competition. We focus exclusively on organic search - technical SEO, content, local visibility, and AI optimisation that turns rankings into revenue.",
  scope: "Abu Dhabi", served: "Abu Dhabi, UAE",
  featuresTitle: "Why Choose SEODXB in Abu Dhabi", featuresSubtitle: "Deep SEO expertise combined with knowledge of the Abu Dhabi market and how its customers search.",
  faqTitle: "SEO Company Abu Dhabi - FAQs",
  ctaTitle: "Find Out What SEODXB Can Do in Abu Dhabi", ctaDesc: "Get a free SEO analysis of your current rankings, missed opportunities, and a roadmap to page one in Abu Dhabi.", ctaButton: "Get Free SEO Analysis",
});
commercial("seo-services-abu-dhabi", {
  keyword: "SEO Services Abu Dhabi", badge: "Complete SEO Services in Abu Dhabi",
  title: "SEO Services Abu Dhabi | SEODXB - Full-Service SEO",
  metaDesc: "Complete SEO services in Abu Dhabi: technical SEO, on-page, link building, local SEO, AEO, and GEO. SEODXB delivers from $999/mo with transparent pricing.",
  h1: "Complete SEO Services in Abu Dhabi",
  intro: "SEODXB delivers the full spectrum of SEO services Abu Dhabi businesses need: technical foundations, content strategy, local Map Pack presence, and visibility in AI answer engines. One specialist team, full transparency, measurable results across the capital.",
  scope: "Abu Dhabi", served: "Abu Dhabi, UAE",
  featuresTitle: "Our Full Range of Abu Dhabi SEO Services", featuresSubtitle: "Every service compounds - each component amplifies the others for exponential organic growth.",
  faqTitle: "SEO Services Abu Dhabi - FAQs",
  ctaTitle: "Build Your Abu Dhabi SEO Programme", ctaDesc: "Book a free consultation and we'll design an SEO services plan tailored to your Abu Dhabi growth goals.", ctaButton: "Get Free Consultation",
});
commercial("seo-agency-sharjah", {
  keyword: "SEO Agency Sharjah", badge: "Sharjah's Trusted SEO Agency",
  title: "SEO Agency Sharjah | SEODXB - Top SEO Specialists",
  metaDesc: "SEODXB is a specialist SEO agency for Sharjah businesses. We deliver Google rankings, local visibility, and AI citations for manufacturing, retail, and services.",
  h1: "The SEO Agency Sharjah Businesses Trust",
  intro: "Sharjah is the UAE's cultural and industrial heartland, home to major manufacturing, education, and trading businesses. SEODXB helps Sharjah companies rank on Google, win local search, and get cited by AI engines - with strategies built for the emirate's competitive sectors.",
  scope: "Sharjah", served: "Sharjah, UAE",
  featuresTitle: "What Makes SEODXB Sharjah's SEO Choice", featuresSubtitle: "Proven SEO fundamentals plus AI-era optimisation, tuned to how Sharjah customers search.",
  faqTitle: "SEO Agency Sharjah - FAQs",
  ctaTitle: "Ready to Rank in Sharjah?", ctaDesc: "Book a free SEO strategy call. We'll audit your site and show you the fastest path to page one in Sharjah.", ctaButton: "Get Your Free SEO Audit",
});
commercial("seo-company-sharjah", {
  keyword: "SEO Company Sharjah", badge: "Results-Driven SEO Company in Sharjah",
  title: "SEO Company Sharjah | SEODXB - Proven SEO Results",
  metaDesc: "SEODXB is a results-focused SEO company in Sharjah. Google rankings, local Map Pack visibility, and AI search citations. No contracts, transparent pricing.",
  h1: "Sharjah's Results-Focused SEO Company",
  intro: "SEODXB is a dedicated SEO company serving Sharjah's manufacturers, retailers, schools, and service businesses. We focus solely on organic search, delivering technical SEO, content, and AI optimisation that compounds into lasting rankings and leads.",
  scope: "Sharjah", served: "Sharjah, UAE",
  featuresTitle: "Why Choose SEODXB in Sharjah", featuresSubtitle: "Specialist SEO expertise combined with knowledge of the Sharjah market.",
  faqTitle: "SEO Company Sharjah - FAQs",
  ctaTitle: "Grow Your Sharjah Business", ctaDesc: "Get a free SEO analysis showing your rankings, opportunities, and a clear roadmap to page one in Sharjah.", ctaButton: "Get Free SEO Analysis",
});
commercial("digital-marketing-abu-dhabi", {
  keyword: "Digital Marketing Abu Dhabi", badge: "SEO-Led Digital Marketing in Abu Dhabi",
  title: "Digital Marketing Abu Dhabi | SEODXB - SEO-Led Growth",
  metaDesc: "SEODXB delivers SEO-led digital marketing in Abu Dhabi: organic search, AEO, GEO, content, and link building that drives qualified leads without ad dependency.",
  h1: "SEO-Led Digital Marketing in Abu Dhabi",
  intro: "Most Abu Dhabi digital marketing burns budget on ads that stop the moment you stop paying. SEODXB takes an SEO-led approach: organic search, content, and AI optimisation that builds a compounding asset, generating leads long after the work is done.",
  scope: "Abu Dhabi", served: "Abu Dhabi, UAE",
  featuresTitle: "Our SEO-Led Digital Marketing in Abu Dhabi", featuresSubtitle: "Organic-first marketing that builds durable visibility, not rented attention.",
  faqTitle: "Digital Marketing Abu Dhabi - FAQs",
  ctaTitle: "Build Durable Growth in Abu Dhabi", ctaDesc: "Book a free consultation and we'll show you how SEO-led marketing outperforms ad-dependent strategies over time.", ctaButton: "Get Free Consultation",
});
commercial("digital-marketing-sharjah", {
  keyword: "Digital Marketing Sharjah", badge: "SEO-Led Digital Marketing in Sharjah",
  title: "Digital Marketing Sharjah | SEODXB - Organic Growth",
  metaDesc: "SEO-led digital marketing in Sharjah from SEODXB: organic search, AEO, GEO, content, and link building that drives leads without ad dependency.",
  h1: "SEO-Led Digital Marketing in Sharjah",
  intro: "SEODXB delivers digital marketing for Sharjah businesses built on a foundation of SEO rather than paid ads. We grow organic search, content, and AI visibility so your marketing compounds into a lasting lead engine instead of a monthly ad bill.",
  scope: "Sharjah", served: "Sharjah, UAE",
  featuresTitle: "Our SEO-Led Digital Marketing in Sharjah", featuresSubtitle: "Organic-first marketing tuned to Sharjah's industrial and retail economy.",
  faqTitle: "Digital Marketing Sharjah - FAQs",
  ctaTitle: "Grow Sharjah Leads Organically", ctaDesc: "Book a free consultation to see how SEO-led marketing builds durable growth for your Sharjah business.", ctaButton: "Get Free Consultation",
});
commercial("seo-consultant-uae", {
  keyword: "SEO Consultant UAE", badge: "Expert SEO Consultant for the UAE",
  title: "SEO Consultant UAE | SEODXB - Specialist SEO Consulting",
  metaDesc: "Work with a specialist SEO consultant for the UAE. SEODXB offers expert audits, strategy, and hands-on SEO, AEO, and GEO consulting across all emirates.",
  h1: "Your Specialist SEO Consultant in the UAE",
  intro: "SEODXB provides senior SEO consulting for UAE businesses that want expert strategy without a bloated agency. You work directly with specialists on audits, technical fixes, content strategy, and AI search optimisation across all seven emirates.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "What Our UAE SEO Consulting Covers", featuresSubtitle: "Senior, hands-on SEO consulting across technical, content, local, and AI search.",
  faqTitle: "SEO Consultant UAE - FAQs",
  ctaTitle: "Work With a UAE SEO Consultant", ctaDesc: "Book a free consultation. We'll review your current performance and define the highest-impact SEO priorities for your business.", ctaButton: "Book a Consultation",
});

// B. Dubai area pages (18)
([
  "dubai-marina","business-bay","jlt","downtown-dubai","deira","bur-dubai",
  "jumeirah-village-circle","difc","dubai-silicon-oasis","dubai-media-city",
  "dubai-internet-city","al-quoz","jumeirah","al-barsha","tecom","dubai-south",
  "palm-jumeirah","motor-city",
] as const).forEach((k) => locHub(`seo-${k}`, k));

// C. Abu Dhabi area pages (6)
([
  "yas-island","al-reem-island","khalifa-city","mussafah","saadiyat-island","abu-dhabi-corniche",
] as const).forEach((k) => locHub(`seo-${k}`, k));

// D. Industry x Abu Dhabi (12)
L["abu-dhabi"] = { name: "Abu Dhabi", type: "emirate", emirate: "Abu Dhabi", served: "Abu Dhabi, UAE", context: "Abu Dhabi, the UAE capital, is driven by energy, finance, government, real estate, and a fast-growing tourism and healthcare sector.", sectors: "energy, finance, real estate, and healthcare" };
indLoc("seo-for-real-estate-abu-dhabi", "real-estate", "abu-dhabi");
indLoc("seo-for-restaurants-abu-dhabi", "restaurants", "abu-dhabi");
indLoc("seo-for-dental-clinics-abu-dhabi", "dental-clinics", "abu-dhabi");
indLoc("seo-for-law-firms-abu-dhabi", "law-firms", "abu-dhabi");
indLoc("seo-for-construction-abu-dhabi", "construction", "abu-dhabi");
indLoc("seo-for-healthcare-abu-dhabi", "healthcare", "abu-dhabi");
indLoc("seo-for-hotels-abu-dhabi", "hotels", "abu-dhabi");
indLoc("seo-for-ecommerce-abu-dhabi", "ecommerce", "abu-dhabi");
indLoc("seo-for-oil-gas-abu-dhabi", "oil-gas", "abu-dhabi");
indLoc("seo-for-clinics-abu-dhabi", "clinics", "abu-dhabi");
indLoc("seo-for-schools-abu-dhabi", "schools", "abu-dhabi");
indLoc("seo-for-car-dealers-abu-dhabi", "car-dealers", "abu-dhabi");

// E. Industry x Sharjah (8) - use a Sharjah loc shim
L["sharjah"] = { name: "Sharjah", type: "emirate", emirate: "Sharjah", served: "Sharjah, UAE", context: "Sharjah is the UAE's industrial and cultural hub, with major manufacturing, education, and trading sectors.", sectors: "manufacturing, retail, and education" };
indLoc("seo-for-real-estate-sharjah", "real-estate", "sharjah");
indLoc("seo-for-restaurants-sharjah", "restaurants", "sharjah");
indLoc("seo-for-manufacturing-sharjah", "manufacturing", "sharjah");
indLoc("seo-for-clinics-sharjah", "clinics", "sharjah");
indLoc("seo-for-furniture-sharjah", "furniture", "sharjah");
indLoc("seo-for-logistics-sharjah", "logistics", "sharjah");
indLoc("seo-for-schools-sharjah", "schools", "sharjah");
indLoc("seo-for-ecommerce-sharjah", "ecommerce", "sharjah");

// F. Industry x UAE (18)
indUAE("seo-for-real-estate-uae", "real-estate");
indUAE("seo-for-restaurants-uae", "restaurants");
indUAE("seo-for-healthcare-uae", "healthcare");
indUAE("seo-for-hotels-uae", "hotels");
indUAE("seo-for-clinics-uae", "clinics");
indUAE("seo-for-dental-uae", "dental-clinics");
indUAE("seo-for-construction-uae", "construction");
indUAE("seo-for-logistics-uae", "logistics");
indUAE("seo-for-manufacturing-uae", "manufacturing");
indUAE("seo-for-fintech-uae", "fintech");
indUAE("seo-for-insurance-uae", "insurance");
indUAE("seo-for-education-uae", "education");
indUAE("seo-for-automotive-uae", "automotive");
indUAE("seo-for-travel-uae", "travel");
indUAE("seo-for-banks-uae", "banks");
indUAE("seo-for-government-uae", "government");
indUAE("seo-for-nonprofits-uae", "nonprofits");
indUAE("seo-for-startups-uae", "startups");

// G. Service x UAE / Abu Dhabi / Sharjah (16)
svcUAE("technical-seo-uae", "technical");
svcUAE("on-page-seo-uae", "on-page");
svcLoc("local-seo-abu-dhabi", "local", "abu-dhabi");
svcLoc("local-seo-sharjah", "local", "sharjah");
svcUAE("ecommerce-seo-uae", "ecommerce");
svcUAE("link-building-uae", "link-building");
svcUAE("content-marketing-uae", "content-marketing");
svcUAE("keyword-research-uae", "keyword-research");
svcUAE("seo-audit-uae", "seo-audit");
svcUAE("shopify-seo-uae", "shopify");
svcUAE("wordpress-seo-uae", "wordpress");
svcUAE("arabic-seo-uae", "arabic");
svcUAE("ai-seo-uae", "ai");
svcUAE("aeo-agency-uae", "aeo");
svcUAE("geo-agency-uae", "geo");
svcUAE("enterprise-seo-uae", "enterprise");

// H. Commercial / intent pages (10)
commercial("affordable-seo-uae", {
  keyword: "Affordable SEO UAE", badge: "Affordable SEO Across the UAE",
  title: "Affordable SEO UAE | SEODXB - High-Value SEO from $999/mo",
  metaDesc: "Affordable SEO across the UAE from SEODXB, starting at $999/mo. Real rankings, AI search visibility, and qualified leads - no contracts, no hidden fees.",
  h1: "Affordable SEO for UAE Businesses That Actually Works",
  intro: "Affordable should not mean cheap or ineffective. SEODXB delivers genuinely affordable SEO across the UAE starting at $999/mo, focused on the high-intent keywords and AI visibility that generate leads - without the bloated retainers of full-service agencies.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "What Our Affordable UAE SEO Includes", featuresSubtitle: "Real, results-focused SEO at a price that works for growing businesses.",
  faqTitle: "Affordable SEO UAE - FAQs",
  ctaTitle: "Get Affordable SEO That Delivers", ctaDesc: "Book a free consultation and we'll show you how much organic growth is possible within your budget.", ctaButton: "Get Free Consultation",
});
commercial("best-seo-company-uae", {
  keyword: "Best SEO Company UAE", badge: "Among the UAE's Top SEO Companies",
  title: "Best SEO Company UAE | SEODXB - Top-Rated SEO Specialists",
  metaDesc: "Looking for the best SEO company in the UAE? SEODXB delivers proven Google rankings, AI search citations, and qualified leads across all emirates.",
  h1: "The Best SEO Company in the UAE for Measurable Results",
  intro: "What makes the best SEO company in the UAE? Specialisation, transparency, and results. SEODXB focuses exclusively on SEO, AEO, and GEO - no diluted attention across a dozen services - delivering rankings and leads for businesses across every emirate.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "Why SEODXB Ranks Among the UAE's Best", featuresSubtitle: "Specialist focus, transparent reporting, and a track record across UAE markets.",
  faqTitle: "Best SEO Company UAE - FAQs",
  ctaTitle: "Work With a Top UAE SEO Company", ctaDesc: "Book a free strategy call and see why UAE businesses choose SEODXB for organic growth.", ctaButton: "Get Free Strategy Call",
});
commercial("seo-pricing-uae", {
  keyword: "SEO Pricing UAE", badge: "Transparent SEO Pricing for the UAE",
  title: "SEO Pricing UAE | SEODXB - Transparent SEO Plans & Costs",
  metaDesc: "Clear SEO pricing for UAE businesses: Startup $999/mo, Business $2,499/mo, Enterprise custom. No contracts, no hidden fees. See exactly what you get.",
  h1: "Transparent SEO Pricing for UAE Businesses",
  intro: "SEO pricing in the UAE is often hidden behind 'request a quote' forms. SEODXB does the opposite. Our plans are public: Startup at $999/mo, Business at $2,499/mo, and Enterprise at custom pricing - all with no contracts and no hidden fees, so you know exactly what you pay for.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "What's Included at Every Price Point", featuresSubtitle: "Clear deliverables at each plan level - no surprises, no upsells.",
  faqTitle: "SEO Pricing UAE - FAQs",
  ctaTitle: "See Which SEO Plan Fits You", ctaDesc: "Book a free consultation and we'll recommend the right plan for your competition and growth goals.", ctaButton: "Get Free Consultation",
});
commercial("seo-reseller-uae", {
  keyword: "SEO Reseller UAE", badge: "SEO Reseller Services in the UAE",
  title: "SEO Reseller UAE | SEODXB - White-Label SEO Fulfilment",
  metaDesc: "SEO reseller services in the UAE from SEODXB. White-label SEO, AEO, and GEO fulfilment for agencies who want expert delivery under their own brand.",
  h1: "SEO Reseller Services for UAE Agencies",
  intro: "SEODXB provides SEO reseller and white-label fulfilment for UAE agencies that want to offer world-class SEO without building an in-house team. We deliver the strategy and execution under your brand, on time, with reporting you can hand straight to clients.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "Our SEO Reseller Programme", featuresSubtitle: "Expert, white-label SEO delivery built for agency partners.",
  faqTitle: "SEO Reseller UAE - FAQs",
  ctaTitle: "Become an SEODXB Partner", ctaDesc: "Book a partner call and we'll show you how our white-label SEO fulfilment can grow your agency's margins.", ctaButton: "Become a Partner",
});
commercial("white-label-seo-uae", {
  keyword: "White Label SEO UAE", badge: "White-Label SEO for UAE Agencies",
  title: "White Label SEO UAE | SEODXB - Agency SEO Fulfilment",
  metaDesc: "White-label SEO in the UAE from SEODXB. We deliver SEO, AEO, and GEO under your agency's brand with client-ready reporting. Reliable, on-time fulfilment.",
  h1: "White-Label SEO for UAE Agencies",
  intro: "SEODXB is the white-label SEO partner UAE agencies rely on to deliver results under their own brand. From technical audits to content and link building, we handle execution and reporting so you can sell SEO with confidence and keep your clients happy.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "Our White-Label SEO Service", featuresSubtitle: "Seamless, branded SEO delivery that makes your agency look great.",
  faqTitle: "White Label SEO UAE - FAQs",
  ctaTitle: "Add SEO to Your Agency's Offering", ctaDesc: "Book a partner call and we'll map a white-label SEO programme for your agency's clients.", ctaButton: "Become a Partner",
});
commercial("small-business-seo-uae", {
  keyword: "Small Business SEO UAE", badge: "SEO Built for UAE Small Businesses",
  title: "Small Business SEO UAE | SEODXB - Affordable Local SEO",
  metaDesc: "SEO for small businesses across the UAE. SEODXB helps SMEs rank locally on Google and AI engines, generate leads, and compete with bigger budgets.",
  h1: "SEO That Helps UAE Small Businesses Punch Above Their Weight",
  intro: "Small businesses across the UAE compete against brands with far bigger budgets. SEODXB levels the field with focused small-business SEO: local rankings, Map Pack visibility, and AI search presence that brings in customers without enterprise-level spend.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "Small Business SEO Essentials", featuresSubtitle: "The high-impact SEO work that moves the needle fastest for SMEs.",
  faqTitle: "Small Business SEO UAE - FAQs",
  ctaTitle: "Grow Your Small Business Online", ctaDesc: "Book a free consultation and we'll show you the fastest, most affordable path to more local customers.", ctaButton: "Get Free Consultation",
});
commercial("seo-for-smes-uae", {
  keyword: "SEO for SMEs UAE", badge: "SEO for UAE SMEs",
  title: "SEO for SMEs UAE | SEODXB - Growth SEO for SMEs",
  metaDesc: "SEO for SMEs across the UAE. SEODXB delivers focused, affordable organic growth for small and medium enterprises in every emirate. No contracts.",
  h1: "SEO Built for the Realities of UAE SMEs",
  intro: "SMEs are the backbone of the UAE economy, yet most lack the time and in-house skills for SEO. SEODXB delivers practical, ROI-focused SEO for SMEs: the technical fixes, content, and local visibility that turn search into a dependable lead channel.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "SME SEO That Delivers ROI", featuresSubtitle: "Pragmatic SEO prioritised by impact, built for lean teams and tight budgets.",
  faqTitle: "SEO for SMEs UAE - FAQs",
  ctaTitle: "Make Search Work for Your SME", ctaDesc: "Book a free consultation and we'll prioritise the SEO work that drives the most leads for your budget.", ctaButton: "Get Free Consultation",
});
commercial("monthly-seo-packages-uae", {
  keyword: "Monthly SEO Packages UAE", badge: "Monthly SEO Packages for the UAE",
  title: "Monthly SEO Packages UAE | SEODXB - Flexible SEO Plans",
  metaDesc: "Flexible monthly SEO packages for UAE businesses from $999/mo. SEODXB offers no-contract plans covering SEO, AEO, GEO, content, and link building.",
  h1: "Monthly SEO Packages for UAE Businesses",
  intro: "SEODXB offers flexible monthly SEO packages designed for UAE businesses that want predictable investment and compounding results. No long contracts, no hidden fees - just clear monthly deliverables across technical SEO, content, local visibility, and AI optimisation.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "What's in Each Monthly Package", featuresSubtitle: "Clear, recurring deliverables that build organic growth month after month.",
  faqTitle: "Monthly SEO Packages UAE - FAQs",
  ctaTitle: "Choose Your Monthly SEO Package", ctaDesc: "Book a free consultation and we'll recommend the monthly package that matches your goals and budget.", ctaButton: "Get Free Consultation",
});
commercial("seo-consultant-abu-dhabi", {
  keyword: "SEO Consultant Abu Dhabi", badge: "Expert SEO Consultant in Abu Dhabi",
  title: "SEO Consultant Abu Dhabi | SEODXB - Specialist Consulting",
  metaDesc: "Work with a specialist SEO consultant in Abu Dhabi. SEODXB offers expert audits, strategy, and hands-on SEO, AEO, and GEO consulting for the capital.",
  h1: "Your Specialist SEO Consultant in Abu Dhabi",
  intro: "SEODXB provides senior SEO consulting for Abu Dhabi businesses that want expert guidance without an oversized agency. You work directly with specialists on audits, technical strategy, content, and AI search optimisation tailored to the capital's competitive sectors.",
  scope: "Abu Dhabi", served: "Abu Dhabi, UAE",
  featuresTitle: "What Our Abu Dhabi SEO Consulting Covers", featuresSubtitle: "Senior, hands-on consulting across technical, content, local, and AI search.",
  faqTitle: "SEO Consultant Abu Dhabi - FAQs",
  ctaTitle: "Work With an Abu Dhabi SEO Consultant", ctaDesc: "Book a free consultation. We'll review your performance and define your highest-impact SEO priorities.", ctaButton: "Book a Consultation",
});
commercial("freelance-seo-uae", {
  keyword: "Freelance SEO UAE", badge: "Specialist SEO, Freelance Flexibility",
  title: "Freelance SEO UAE | SEODXB - Expert SEO, Flexible Engagement",
  metaDesc: "Need freelance SEO in the UAE? SEODXB offers specialist, flexible SEO engagements with agency-level expertise across all emirates. No long contracts.",
  h1: "Freelance-Style SEO With Agency-Level Expertise",
  intro: "Many UAE businesses want the flexibility of a freelance SEO with the depth of a specialist team. SEODXB bridges both: flexible, project-based or monthly SEO engagements backed by genuine technical, content, and AI search expertise across the UAE.",
  scope: "the UAE", served: "United Arab Emirates",
  featuresTitle: "Flexible SEO Engagements", featuresSubtitle: "The flexibility of freelance with the capability of a specialist team.",
  faqTitle: "Freelance SEO UAE - FAQs",
  ctaTitle: "Get Flexible, Expert SEO", ctaDesc: "Book a free consultation and we'll scope a flexible SEO engagement that fits your needs.", ctaButton: "Get Free Consultation",
});

export const uaeKeywordPages: Record<string, KeywordPageConfig> = Object.fromEntries(
  pages.map((p) => [p.slug, p]),
);
