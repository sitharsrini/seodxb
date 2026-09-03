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
  country: string;
  served: string;
  context: string;
  sectors: string;
}

const L: Record<string, Loc> = {
  london: {
    name: "London",
    country: "UK",
    served: "London, UK",
    context: "London is one of the world's top three financial centres, with a competitive digital economy spanning fintech, media, legal services, and professional services.",
    sectors: "finance, fintech, media, and professional services",
  },
  manchester: {
    name: "Manchester",
    country: "UK",
    served: "Manchester, UK",
    context: "Manchester is the UK's second city for business, anchoring a fast-growing tech and digital sector alongside strong retail, property, and professional services.",
    sectors: "tech, retail, property, and professional services",
  },
  birmingham: {
    name: "Birmingham",
    country: "UK",
    served: "Birmingham, UK",
    context: "Birmingham drives the UK Midlands economy with manufacturing, retail, automotive, and a growing digital sector in the second most populous UK city.",
    sectors: "manufacturing, retail, automotive, and tech",
  },
  leeds: {
    name: "Leeds",
    country: "UK",
    served: "Leeds, UK",
    context: "Leeds is a major financial, legal, and professional services hub in Yorkshire, with a growing tech and digital cluster.",
    sectors: "finance, legal, tech, and professional services",
  },
  glasgow: {
    name: "Glasgow",
    country: "UK",
    served: "Glasgow, UK",
    context: "Glasgow is Scotland's commercial capital, with strong financial services, engineering, tourism, and a growing creative and digital economy.",
    sectors: "finance, engineering, tourism, and tech",
  },
  edinburgh: {
    name: "Edinburgh",
    country: "UK",
    served: "Edinburgh, UK",
    context: "Edinburgh is Scotland's financial centre and a global tourism destination, with major financial services, fintech, and professional services sectors.",
    sectors: "finance, fintech, tourism, and professional services",
  },
  bristol: {
    name: "Bristol",
    country: "UK",
    served: "Bristol, UK",
    context: "Bristol is a creative and tech hub in the South West, with strong aerospace, financial services, and a vibrant startup and digital media scene.",
    sectors: "tech, aerospace, creative, and financial services",
  },
  liverpool: {
    name: "Liverpool",
    country: "UK",
    served: "Liverpool, UK",
    context: "Liverpool combines a major port and logistics economy with tourism, hospitality, and a growing digital and creative sector.",
    sectors: "logistics, tourism, hospitality, and digital",
  },
  sheffield: {
    name: "Sheffield",
    country: "UK",
    served: "Sheffield, UK",
    context: "Sheffield is reinventing itself from steel city to advanced manufacturing, engineering, and a growing tech and creative economy.",
    sectors: "manufacturing, engineering, tech, and creative",
  },
  nottingham: {
    name: "Nottingham",
    country: "UK",
    served: "Nottingham, UK",
    context: "Nottingham is a major retail, healthcare, and education hub in the East Midlands, with a growing tech and startup ecosystem.",
    sectors: "retail, healthcare, education, and tech",
  },
};

interface Ind { name: string; pain: string; angle: string; }
const I: Record<string, Ind> = {
  "real-estate": {
    name: "Real Estate",
    pain: "buyers and renters research properties, agents, and areas extensively online",
    angle: "property and postcode SEO, local agent authority, and AI property search citations",
  },
  saas: {
    name: "SaaS",
    pain: "buyers self-educate through search, review sites, and AI tools before contacting sales",
    angle: "category keyword targeting, G2 and Capterra strategy, and AI-cited product content",
  },
  healthcare: {
    name: "Healthcare",
    pain: "NHS and private patients research providers, treatments, and waiting times online",
    angle: "treatment content, CQC-compliant E-E-A-T, and local provider Map Pack visibility",
  },
  legal: {
    name: "Legal",
    pain: "clients with urgent legal needs search by practice area and expect authoritative expertise",
    angle: "practice-area content, SRA-accreditation signals, and ranking for high-value legal keywords",
  },
  ecommerce: {
    name: "E-commerce",
    pain: "shoppers research products across Google Shopping, comparison sites, and AI tools",
    angle: "product and category SEO, Google Shopping schema, and AI shopping visibility",
  },
  restaurants: {
    name: "Restaurants",
    pain: "diners choose restaurants from Google Search, Maps, and AI recommendations",
    angle: "Google Business Profile dominance, menu keyword targeting, and review-driven rankings",
  },
  hotels: {
    name: "Hotels",
    pain: "travellers compare properties on Google, OTAs, and AI trip planners",
    angle: "direct-booking SEO, destination content, and reducing OTA commission dependency",
  },
  fintech: {
    name: "Fintech",
    pain: "users and enterprises evaluate fintech platforms through search and comparison",
    angle: "product SEO, FCA-related trust content, and category-defining authority",
  },
};

interface Svc { name: string; what: string; }
const SV: Record<string, Svc> = {
  technical: { name: "Technical SEO", what: "Core Web Vitals, crawlability, indexation, structured data, and site architecture" },
  "on-page": { name: "On-Page SEO", what: "titles, meta data, headings, content optimisation, and internal linking" },
  local: { name: "Local SEO", what: "Google Business Profile, Map Pack rankings, citations, and review management" },
  ecommerce: { name: "E-commerce SEO", what: "product and category optimisation, schema for rich results, and conversion funnels" },
  "link-building": { name: "Link Building", what: "high-authority backlinks from UK press, trade publications, and directories" },
  "content-marketing": { name: "Content Marketing", what: "search-intent content, topical authority hubs, and AI-citable articles" },
  "seo-audit": { name: "SEO Audit", what: "a deep technical, content, and authority audit with a prioritised action plan" },
  enterprise: { name: "Enterprise SEO", what: "large-site SEO, governance, and multi-team organic programmes" },
};

const statSets: { value: string; label: string }[][] = [
  [{ value: "+312%", label: "Avg. Organic Growth" }, { value: "87+", label: "Page 1 Keywords" }, { value: "4.8x", label: "Average ROI" }, { value: "6 wks", label: "To First Rankings" }],
  [{ value: "+260%", label: "Qualified Leads" }, { value: "500+", label: "Keywords Tracked" }, { value: "92%", label: "Client Retention" }, { value: "8 wks", label: "First Results" }],
  [{ value: "3.4x", label: "Lead Increase" }, { value: "Top 3", label: "Map Pack Goal" }, { value: "+180%", label: "Local Visibility" }, { value: "24h", label: "Response Time" }],
  [{ value: "+295%", label: "Organic Traffic" }, { value: "100+", label: "UK Businesses Helped" }, { value: "5.1x", label: "ROI" }, { value: "No.1", label: "Ranking Focus" }],
];

function features(label: string, scope: string): { title: string; desc: string }[] {
  return [
    { title: "Technical SEO Foundation", desc: `We fix the Core Web Vitals, crawl, indexation, and structured-data issues that quietly block ${label} from ranking. This is the base every other gain is built on.` },
    { title: `${scope} Keyword Strategy`, desc: `We map the high-intent keywords your ${scope} customers actually search, across every stage of the buying journey, not just vanity head terms.` },
    { title: "Content That Ranks and Converts", desc: "Answer-first content structured for Google, featured snippets, and AI answer engines, written by specialists and never AI-spun filler." },
    { title: "Local and Map Pack SEO", desc: `Google Business Profile optimisation, citations, and review strategy to win the local Map Pack and near-me searches in ${scope}.` },
    { title: "AEO and GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend you, keeping you visible as search evolves." },
    { title: "Authority Link Building", desc: "High-quality backlinks from UK press, trade publications, and directories that build the domain authority Google rewards." },
  ];
}

function baseFaqs(label: string, served: string): { q: string; a: string }[] {
  return [
    { q: `How much does ${label} cost?`, a: "SEODXB offers transparent pricing from $999/mo, with Business plans at $2,499/mo and Enterprise at custom pricing. All plans come with no lock-in contracts and no hidden fees. The right plan depends on your competition level and the UK market you are targeting." },
    { q: `How long does ${label} take to show results?`, a: "Most clients see measurable ranking movement within 6 to 10 weeks, with significant traffic and lead growth by month 3 to 6, depending on the competitiveness of your UK market and how aggressively we execute." },
    { q: `Does SEODXB serve clients in ${served}?`, a: `Yes. SEODXB works with businesses across ${served}, combining deep knowledge of the UK search landscape with technical SEO, AEO, and GEO expertise.` },
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

// ---- Service x UK (nationwide) ----
function svcUK(slug: string, svcKey: string) {
  const sv = SV[svcKey];
  const kw = `${sv.name} UK`;
  pages.push(make(slug, {
    keyword: kw,
    badge: `${sv.name} for UK Businesses`,
    title: `${kw} | SEODXB - Nationwide ${sv.name} for the UK`,
    metaDesc: `${sv.name} across the UK from SEODXB. We deliver ${sv.what} for businesses nationwide. Transparent pricing, no contracts.`,
    h1: `${kw}: ${sv.name} for Businesses Across the UK`,
    intro: `SEODXB delivers ${sv.name.toLowerCase()} across the UK, providing ${sv.what}. Whether you operate in one city or nationally, we build organic visibility on Google and AI engines that compounds month after month.`,
    scope: "the UK", served: "United Kingdom",
    featuresTitle: `Nationwide ${sv.name} for UK Businesses`,
    featuresSubtitle: `Specialist ${sv.name.toLowerCase()} integrated with full SEO, AEO, and GEO for UK businesses.`,
    faqTitle: `${kw} - FAQs`,
    ctaTitle: `Get ${sv.name} for Your UK Business`,
    ctaDesc: `Book a free strategy call. We will show you how ${sv.name.toLowerCase()} fits into a nationwide organic growth plan for the UK.`,
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

// ===== Build all UK pages =====

// A. City hubs (10)
locHub("seo-london", "london");
locHub("seo-manchester", "manchester");
locHub("seo-birmingham", "birmingham");
locHub("seo-leeds", "leeds");
locHub("seo-glasgow", "glasgow");
locHub("seo-edinburgh", "edinburgh");
locHub("seo-bristol", "bristol");
locHub("seo-liverpool", "liverpool");
locHub("seo-sheffield", "sheffield");
locHub("seo-nottingham", "nottingham");

// B. Industry x city (32 pages): 8 industries x 4 cities
const ukTopCities = ["london", "manchester", "birmingham", "leeds"] as const;
const ukIndustries = ["real-estate", "saas", "healthcare", "legal", "ecommerce", "restaurants", "hotels", "fintech"] as const;

ukIndustries.forEach((ind) => {
  ukTopCities.forEach((city) => {
    indLoc(`seo-for-${ind}-${city}`, ind, city);
  });
});

// C. Service x UK (8 pages)
svcUK("technical-seo-uk", "technical");
svcUK("on-page-seo-uk", "on-page");
svcUK("local-seo-uk", "local");
svcUK("ecommerce-seo-uk", "ecommerce");
svcUK("link-building-uk", "link-building");
svcUK("content-marketing-uk", "content-marketing");
svcUK("seo-audit-uk", "seo-audit");
svcUK("enterprise-seo-uk", "enterprise");

// D. Service x city (10 pages): local-seo x 5 cities + technical-seo x 5 cities
const localSvCities = ["london", "manchester", "birmingham", "leeds", "glasgow"] as const;
const techSvcCities = ["london", "manchester", "birmingham", "leeds", "bristol"] as const;

localSvCities.forEach((city) => {
  svcLoc(`local-seo-${city}`, "local", city);
});
techSvcCities.forEach((city) => {
  svcLoc(`technical-seo-${city}`, "technical", city);
});

// E. Country-level hub (1)
commercial("seo-uk", {
  keyword: "SEO UK", badge: "Specialist SEO Agency for the UK",
  title: "SEO UK | SEODXB - SEO for UK Businesses",
  metaDesc: "SEODXB delivers SEO for UK businesses: Google rankings, local Map Pack visibility, and AI search citations across every sector. Transparent pricing, no contracts.",
  h1: "SEO for UK Businesses: Rank on Google and AI Search",
  intro: "The UK digital economy is one of the world's most competitive search markets. SEODXB delivers SEO for UK businesses from technical foundations to content authority and AI search visibility. Whether you compete locally, regionally, or nationally, we build the organic search presence that compounds into lasting rankings and leads.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "What Our UK SEO Includes",
  featuresSubtitle: "A complete, nationwide organic growth programme built for the UK search landscape.",
  faqTitle: "SEO UK - Common Questions",
  ctaTitle: "Ready to Rank Across the UK?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site and build the fastest path to page one.",
  ctaButton: "Get Your Free SEO Audit",
});

// F. Commercial pages (25 + 14 extra = 39 total commercial)
commercial("seo-agency-uk", {
  keyword: "SEO Agency UK", badge: "Specialist SEO Agency for UK Businesses",
  title: "SEO Agency UK | SEODXB - Results-Driven UK SEO",
  metaDesc: "SEODXB is a specialist SEO agency for UK businesses, delivering Google rankings, AI search citations, and qualified leads. Transparent pricing, no contracts.",
  h1: "The SEO Agency UK Businesses Choose for Real Results",
  intro: "SEODXB brings a focused, specialist approach to SEO for UK businesses. No generalist agency bloat. We focus on technical foundations, content quality, and AI search visibility that compound into lasting search dominance across Google, ChatGPT, Perplexity, and Google AI Overviews.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "What Makes SEODXB the Right UK SEO Agency",
  featuresSubtitle: "Specialist focus, transparent reporting, and a track record built on competitive UK search markets.",
  faqTitle: "SEO Agency UK - Common Questions",
  ctaTitle: "Ready to Dominate UK Search?",
  ctaDesc: "Book a free SEO strategy call. We will audit your site, analyse your UK competitors, and show you the fastest path to page one.",
  ctaButton: "Get Your Free SEO Audit",
});

commercial("seo-company-uk", {
  keyword: "SEO Company UK", badge: "Trusted SEO Company for UK Businesses",
  title: "SEO Company UK | SEODXB - Proven UK SEO Results",
  metaDesc: "SEODXB is a results-focused SEO company for UK businesses. Google rankings, AI search citations, and qualified organic leads. No contracts, transparent pricing.",
  h1: "The SEO Company UK Businesses Choose for Measurable Growth",
  intro: "SEODXB is a dedicated SEO company serving UK businesses that want specialist depth rather than agency generalism. We focus on organic search across Google, ChatGPT, and Google AI Overviews, delivering technical SEO, content strategy, and link authority that compounds into lasting UK rankings.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "Why Choose SEODXB as Your UK SEO Company",
  featuresSubtitle: "Deep SEO expertise combined with knowledge of the UK competitive search landscape.",
  faqTitle: "SEO Company UK - FAQs",
  ctaTitle: "Find Out What SEODXB Can Do for Your UK Business",
  ctaDesc: "Get a free SEO analysis showing your current rankings, missed opportunities, and a clear roadmap to page one.",
  ctaButton: "Get Free SEO Analysis",
});

commercial("best-seo-agency-uk", {
  keyword: "Best SEO Agency UK", badge: "Among the Top SEO Agencies in the UK",
  title: "Best SEO Agency UK | SEODXB - Specialist UK SEO Agency",
  metaDesc: "Looking for the best SEO agency in the UK? SEODXB delivers proven Google rankings, AI search citations, and qualified leads for UK businesses. Transparent pricing.",
  h1: "The Best SEO Agency in the UK for Measurable Results",
  intro: "What makes the best SEO agency in the UK? Specialisation, transparency, and results you can measure. SEODXB focuses exclusively on SEO, AEO, and GEO, delivering rankings and leads for UK businesses without the distractions of a generalist marketing agency.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "Why SEODXB Ranks Among the UK's Best SEO Agencies",
  featuresSubtitle: "Specialist focus, transparent reporting, and a track record across competitive UK markets.",
  faqTitle: "Best SEO Agency UK - FAQs",
  ctaTitle: "Work With a Top UK SEO Agency",
  ctaDesc: "Book a free strategy call and see why UK businesses choose SEODXB for organic growth.",
  ctaButton: "Get Free Strategy Call",
});

commercial("affordable-seo-uk", {
  keyword: "Affordable SEO UK", badge: "Affordable SEO for UK Businesses",
  title: "Affordable SEO UK | SEODXB - High-Value SEO from $999/mo",
  metaDesc: "Affordable SEO for UK businesses from SEODXB, starting at $999/mo. Real rankings, AI search visibility, and qualified leads with no contracts and no hidden fees.",
  h1: "Affordable SEO for UK Businesses That Actually Works",
  intro: "Affordable should not mean cheap or ineffective. SEODXB delivers genuinely affordable SEO for UK businesses from $999/mo, focused on the high-intent keywords and AI visibility that generate leads, without the bloated retainers of full-service UK agencies.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "What Our Affordable UK SEO Includes",
  featuresSubtitle: "Real, results-focused SEO at a price that works for growing UK businesses.",
  faqTitle: "Affordable SEO UK - FAQs",
  ctaTitle: "Get Affordable SEO That Delivers in the UK",
  ctaDesc: "Book a free consultation and we will show you how much organic growth is possible within your budget.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-services-uk", {
  keyword: "SEO Services UK", badge: "Complete SEO Services for UK Businesses",
  title: "SEO Services UK | SEODXB - Full-Spectrum UK SEO",
  metaDesc: "Complete SEO services for UK businesses: technical SEO, on-page, link building, local SEO, AEO, and GEO. SEODXB delivers from $999/mo with transparent pricing.",
  h1: "Complete SEO Services for UK Businesses",
  intro: "SEODXB delivers the full spectrum of SEO services UK businesses need: technical foundations, content strategy, local Map Pack presence, AI answer engine visibility, and link authority from UK press and trade publications. One specialist team, full transparency, measurable results across the UK.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "Our Full Range of UK SEO Services",
  featuresSubtitle: "Every service compounds, each component amplifying the others for exponential organic growth.",
  faqTitle: "SEO Services UK - FAQs",
  ctaTitle: "Build Your UK SEO Programme",
  ctaDesc: "Book a free consultation and we will design an SEO services plan tailored to your UK growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-consultant-uk", {
  keyword: "SEO Consultant UK", badge: "Expert SEO Consultant for the UK",
  title: "SEO Consultant UK | SEODXB - Specialist UK SEO Consulting",
  metaDesc: "Work with a specialist SEO consultant for the UK. SEODXB offers expert audits, strategy, and hands-on SEO, AEO, and GEO consulting for UK businesses.",
  h1: "Your Specialist SEO Consultant in the UK",
  intro: "SEODXB provides senior SEO consulting for UK businesses that want expert strategy without a bloated agency. You work directly with specialists on audits, technical fixes, content strategy, and AI search optimisation across the UK market.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "What Our UK SEO Consulting Covers",
  featuresSubtitle: "Senior, hands-on SEO consulting across technical, content, local, and AI search for UK businesses.",
  faqTitle: "SEO Consultant UK - FAQs",
  ctaTitle: "Work With a UK SEO Consultant",
  ctaDesc: "Book a free consultation. We will review your current performance and define the highest-impact SEO priorities for your business.",
  ctaButton: "Book a Consultation",
});

commercial("b2b-seo-uk", {
  keyword: "B2B SEO UK", badge: "B2B SEO Specialists for the UK Market",
  title: "B2B SEO UK | SEODXB - SEO for UK B2B Companies",
  metaDesc: "B2B SEO for UK companies from SEODXB. We rank you for the high-intent commercial keywords your buyers research before requesting a demo. Transparent pricing.",
  h1: "B2B SEO for UK Companies That Fills the Pipeline",
  intro: "B2B buyers in the UK research solutions, compare vendors, and shortlist suppliers entirely through organic search before contacting sales. SEODXB builds the B2B SEO strategy that puts your company in front of UK decision-makers at the exact moment they are evaluating options.",
  scope: "B2B in the UK", served: "United Kingdom",
  featuresTitle: "Our B2B SEO Approach for the UK Market",
  featuresSubtitle: "Pipeline-focused B2B SEO built around the UK buyer journey.",
  faqTitle: "B2B SEO UK - FAQs",
  ctaTitle: "Fill Your B2B Pipeline With Organic Leads",
  ctaDesc: "Book a free consultation and we will show you which B2B keywords are driving pipeline for your UK competitors.",
  ctaButton: "Get Free Consultation",
});

commercial("ecommerce-seo-uk", {
  keyword: "Ecommerce SEO UK", badge: "Ecommerce SEO for UK Stores",
  title: "Ecommerce SEO UK | SEODXB - Grow Your UK Online Store",
  metaDesc: "Ecommerce SEO for UK online stores from SEODXB. Product and category SEO, shopping schema, and AI shopping visibility that drives organic revenue. No contracts.",
  h1: "Ecommerce SEO for UK Online Stores",
  intro: "UK ecommerce is intensely competitive, from established department stores to Amazon and a flood of DTC brands. SEODXB delivers ecommerce SEO that increases organic product and category rankings, earns rich results in Google Shopping, and gets your products cited in AI shopping tools.",
  scope: "Ecommerce in the UK", served: "United Kingdom",
  featuresTitle: "Our Ecommerce SEO Approach for the UK",
  featuresSubtitle: "Revenue-focused ecommerce SEO built for the scale and competition of the UK market.",
  faqTitle: "Ecommerce SEO UK - FAQs",
  ctaTitle: "Grow Your Ecommerce Revenue With SEO in the UK",
  ctaDesc: "Book a free ecommerce SEO audit. We will find the quick wins and long-term opportunities that grow your organic revenue.",
  ctaButton: "Get Free Ecommerce SEO Audit",
});

commercial("local-seo-services-uk", {
  keyword: "Local SEO Services UK", badge: "Local SEO Services Across the UK",
  title: "Local SEO Services UK | SEODXB - Rank in Your UK City",
  metaDesc: "Local SEO services for UK businesses from SEODXB. Google Business Profile, Map Pack rankings, citations, and review management that drives local leads.",
  h1: "Local SEO Services That Put UK Businesses on the Map",
  intro: "Local search drives foot traffic, calls, and local leads for UK businesses. SEODXB delivers the local SEO services that win Google Map Pack positions, optimise Google Business Profiles, build local citations, and manage reviews across the UK cities and postcodes that matter to you.",
  scope: "local businesses in the UK", served: "United Kingdom",
  featuresTitle: "What Our UK Local SEO Services Include",
  featuresSubtitle: "Everything a UK local business needs to win near-me searches and Map Pack positions.",
  faqTitle: "Local SEO Services UK - FAQs",
  ctaTitle: "Win the Local Map Pack in Your UK City",
  ctaDesc: "Book a free local SEO consultation and we will show you what it takes to rank in your city's Map Pack.",
  ctaButton: "Get Free Local SEO Consultation",
});

commercial("seo-pricing-uk", {
  keyword: "SEO Pricing UK", badge: "Transparent SEO Pricing for UK Businesses",
  title: "SEO Pricing UK | SEODXB - Transparent SEO Plans and Costs",
  metaDesc: "Clear SEO pricing for UK businesses: plans from $999/mo. No contracts, no hidden fees. See exactly what SEODXB includes at every price point.",
  h1: "Transparent SEO Pricing for UK Businesses",
  intro: "SEO pricing in the UK is often hidden behind request-a-quote forms. SEODXB does the opposite. Our plans are transparent, starting at $999/mo for Startup, $2,499/mo for Business, and custom pricing for Enterprise, all with no contracts and no hidden fees.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "What Is Included at Every UK Price Point",
  featuresSubtitle: "Clear deliverables at each plan level, no surprises and no upsells.",
  faqTitle: "SEO Pricing UK - FAQs",
  ctaTitle: "Find the Right SEO Plan for Your UK Business",
  ctaDesc: "Book a free consultation and we will recommend the right plan for your competition level and growth goals.",
  ctaButton: "Get Free Consultation",
});

commercial("white-label-seo-uk", {
  keyword: "White Label SEO UK", badge: "White-Label SEO for UK Agencies",
  title: "White Label SEO UK | SEODXB - Agency SEO Fulfilment",
  metaDesc: "White-label SEO in the UK from SEODXB. We deliver SEO, AEO, and GEO under your agency's brand with client-ready reporting. Reliable, on-time fulfilment.",
  h1: "White-Label SEO for UK Agencies",
  intro: "SEODXB is the white-label SEO partner UK agencies rely on to deliver results under their own brand. From technical audits to content and link building, we handle execution and reporting so you can sell SEO with confidence and keep your clients satisfied.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "Our White-Label SEO Service for UK Agencies",
  featuresSubtitle: "Seamless, branded SEO delivery that makes your UK agency look great.",
  faqTitle: "White Label SEO UK - FAQs",
  ctaTitle: "Add SEO to Your UK Agency's Offering",
  ctaDesc: "Book a partner call and we will map a white-label SEO programme for your agency's clients.",
  ctaButton: "Become a Partner",
});

commercial("ai-seo-uk", {
  keyword: "AI SEO UK", badge: "AI SEO Specialists for the UK Market",
  title: "AI SEO UK | SEODXB - Optimise for AI Search in the UK",
  metaDesc: "AI SEO for UK businesses from SEODXB. We optimise for Google AI Overviews, ChatGPT, Perplexity, and Gemini so your brand is cited in AI answers. Transparent pricing.",
  h1: "AI SEO for UK Businesses: Be Cited in AI Search",
  intro: "AI search is reshaping how UK consumers and B2B buyers find answers. SEODXB delivers AI SEO for UK businesses, optimising your site and brand entity so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend you, ahead of competitors still focused only on blue-link rankings.",
  scope: "AI search in the UK", served: "United Kingdom",
  featuresTitle: "Our AI SEO Approach for UK Businesses",
  featuresSubtitle: "AI search optimisation built on strong traditional SEO foundations for the UK market.",
  faqTitle: "AI SEO UK - FAQs",
  ctaTitle: "Get Cited in AI Search Across the UK",
  ctaDesc: "Book a free AI SEO consultation and we will show you where your brand currently stands in AI search.",
  ctaButton: "Get Free AI SEO Consultation",
});

commercial("seo-for-startups-uk", {
  keyword: "SEO for Startups UK", badge: "SEO Built for UK Startups",
  title: "SEO for Startups UK | SEODXB - Organic Growth for UK Startups",
  metaDesc: "SEO for UK startups from SEODXB. We help early and growth-stage startups rank for category keywords, build AI citations, and grow organic traction fast.",
  h1: "SEO for UK Startups: Build Organic Traction Early",
  intro: "UK startups that invest in SEO early compound their organic advantage over competitors who rely entirely on paid acquisition. SEODXB helps startups identify category keywords, build topical authority, earn AI citations from ChatGPT and Perplexity, and turn search into a scalable, low-CAC lead channel.",
  scope: "startups in the UK", served: "United Kingdom",
  featuresTitle: "SEO Designed for the UK Startup Journey",
  featuresSubtitle: "High-impact, capital-efficient SEO for early and growth-stage UK startups.",
  faqTitle: "SEO for Startups UK - FAQs",
  ctaTitle: "Build Organic Traction for Your UK Startup",
  ctaDesc: "Book a free startup SEO consultation and we will map the highest-impact opportunities for your category.",
  ctaButton: "Get Free Startup SEO Consultation",
});

commercial("seo-for-law-firms-uk", {
  keyword: "SEO for Law Firms UK", badge: "Law Firm SEO Specialists in the UK",
  title: "SEO for Law Firms UK | SEODXB - Legal SEO Specialists",
  metaDesc: "SEO for UK law firms from SEODXB. We rank your practice for high-value legal keywords, build E-E-A-T with SRA accreditation signals, and attract clients from search.",
  h1: "SEO for UK Law Firms: Rank for High-Value Legal Keywords",
  intro: "People searching for a solicitor or barrister in the UK are high-intent and ready to engage. SEODXB delivers SEO for UK law firms that builds authoritative practice-area content, local Map Pack presence, and the E-E-A-T and SRA-accreditation signals that Google rewards for legal pages.",
  scope: "law firms in the UK", served: "United Kingdom",
  featuresTitle: "Our SEO Approach for UK Law Firms",
  featuresSubtitle: "Practice-area SEO with E-E-A-T and SRA authority signals built for the UK legal market.",
  faqTitle: "SEO for Law Firms UK - FAQs",
  ctaTitle: "Get More Clients From Search",
  ctaDesc: "Book a free law firm SEO consultation and we will show you the keywords your ideal clients are searching.",
  ctaButton: "Get Free Law Firm SEO Audit",
});

commercial("seo-for-accountants-uk", {
  keyword: "SEO for Accountants UK", badge: "Accounting Firm SEO in the UK",
  title: "SEO for Accountants UK | SEODXB - Accounting SEO Specialists",
  metaDesc: "SEO for UK accounting firms and chartered accountants from SEODXB. Rank for high-intent tax, bookkeeping, and accounting keywords and attract qualified business clients.",
  h1: "SEO for UK Accountants and Chartered Accounting Firms",
  intro: "Business owners and individuals searching for accountants, chartered accountants, and tax advisers in the UK are ready to engage. SEODXB builds the local visibility, service-page authority, and trust signals that rank UK accounting firms for the high-intent queries their ideal clients search.",
  scope: "accounting firms in the UK", served: "United Kingdom",
  featuresTitle: "Our SEO Approach for UK Accountants",
  featuresSubtitle: "Trust and authority-focused SEO built for the UK accounting market.",
  faqTitle: "SEO for Accountants UK - FAQs",
  ctaTitle: "Attract More Clients From Search",
  ctaDesc: "Book a free consultation and we will show you the highest-value accounting keywords in your area.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-real-estate-uk", {
  keyword: "SEO for Real Estate UK", badge: "Property SEO Specialists in the UK",
  title: "SEO for Real Estate UK | SEODXB - Property SEO Specialists",
  metaDesc: "SEO for UK estate agents and property businesses from SEODXB. Postcode and area SEO, local agent authority, and AI property search citations that attract buyers and renters.",
  h1: "SEO for UK Estate Agents and Property Businesses",
  intro: "UK buyers and renters research properties, areas, and agents on Google and Rightmove before ever contacting an agent. SEODXB delivers property SEO that builds postcode and neighbourhood page authority, earns local Map Pack positions, and gets your listings cited in AI property searches.",
  scope: "real estate and property in the UK", served: "United Kingdom",
  featuresTitle: "Our SEO Approach for UK Property Businesses",
  featuresSubtitle: "Postcode authority and listing visibility built for UK estate agents and property firms.",
  faqTitle: "SEO for Real Estate UK - FAQs",
  ctaTitle: "Attract More Buyers and Renters From Search",
  ctaDesc: "Book a free property SEO consultation and we will audit your current area coverage.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-for-dentists-uk", {
  keyword: "SEO for Dentists UK", badge: "Dental SEO Specialists in the UK",
  title: "SEO for Dentists UK | SEODXB - Dental Practice SEO",
  metaDesc: "SEO for UK dental practices from SEODXB. Local Map Pack rankings, treatment-page authority, and patient-generating SEO for NHS and private dentists across the UK.",
  h1: "SEO for UK Dentists: Fill Your Appointment Book",
  intro: "UK patients search for dentists, dental implants, and cosmetic treatments before booking. SEODXB delivers dental SEO that wins the Google Map Pack in your area, builds treatment-specific content that ranks, and earns the E-E-A-T authority that drives new NHS and private patient bookings.",
  scope: "dental practices in the UK", served: "United Kingdom",
  featuresTitle: "Our Dental SEO Approach for the UK",
  featuresSubtitle: "Patient-generating dental SEO built on local visibility and treatment authority for UK practices.",
  faqTitle: "SEO for Dentists UK - FAQs",
  ctaTitle: "Get More New Dental Patients From Search",
  ctaDesc: "Book a free dental SEO audit and we will show you how to win the Map Pack in your area.",
  ctaButton: "Get Free Dental SEO Audit",
});

commercial("seo-for-nhs-private-healthcare", {
  keyword: "SEO for NHS and Private Healthcare UK", badge: "Healthcare SEO Specialists in the UK",
  title: "SEO for NHS and Private Healthcare UK | SEODXB - Medical SEO",
  metaDesc: "SEO for NHS and private healthcare providers across the UK from SEODXB. CQC-compliant E-E-A-T, treatment content, and local Map Pack visibility for UK healthcare.",
  h1: "SEO for UK NHS and Private Healthcare Providers",
  intro: "UK patients search for treatments, waiting times, and healthcare providers on Google before choosing NHS or private care. SEODXB delivers healthcare SEO built around CQC-compliant E-E-A-T signals, treatment and condition content, and local Map Pack visibility for NHS trusts, private hospitals, clinics, and specialist practices.",
  scope: "healthcare providers in the UK", served: "United Kingdom",
  featuresTitle: "Our Healthcare SEO Approach for the UK",
  featuresSubtitle: "CQC-aligned, patient-focused SEO for NHS and private healthcare organisations.",
  faqTitle: "SEO for NHS and Private Healthcare UK - FAQs",
  ctaTitle: "Attract More Patients From Search",
  ctaDesc: "Book a free healthcare SEO consultation and we will assess your current online patient acquisition.",
  ctaButton: "Get Free Healthcare SEO Consultation",
});

commercial("shopify-seo-uk", {
  keyword: "Shopify SEO UK", badge: "Shopify SEO Specialists in the UK",
  title: "Shopify SEO UK | SEODXB - Shopify SEO for UK Stores",
  metaDesc: "Specialist Shopify SEO for UK stores from SEODXB. Technical fixes, product SEO, content strategy, and AI shopping visibility for UK Shopify merchants.",
  h1: "Shopify SEO for UK Online Stores",
  intro: "UK Shopify stores face intense organic competition across every product category. SEODXB is a specialist Shopify SEO service that handles the platform-specific technical issues, product and collection page optimisation, and content strategy that turns Shopify into a serious organic revenue channel for UK merchants.",
  scope: "Shopify stores in the UK", served: "United Kingdom",
  featuresTitle: "Our Shopify SEO Approach for UK Merchants",
  featuresSubtitle: "Shopify-specific SEO that addresses the platform's unique technical and content challenges.",
  faqTitle: "Shopify SEO UK - FAQs",
  ctaTitle: "Grow Your UK Shopify Store With SEO",
  ctaDesc: "Book a free Shopify SEO audit and we will identify the highest-impact opportunities for your store.",
  ctaButton: "Get Free Shopify SEO Audit",
});

commercial("wordpress-seo-uk", {
  keyword: "WordPress SEO UK", badge: "WordPress SEO Specialists in the UK",
  title: "WordPress SEO UK | SEODXB - WordPress SEO for UK Sites",
  metaDesc: "Specialist WordPress SEO for UK websites from SEODXB. Technical optimisation, schema, Core Web Vitals, and content SEO that ranks WordPress sites in the UK.",
  h1: "WordPress SEO for UK Websites",
  intro: "WordPress powers a huge share of UK websites, but plugins alone are no substitute for a proper SEO strategy. SEODXB delivers specialist WordPress SEO covering technical optimisation, Core Web Vitals, schema markup, and the content strategy that ranks UK WordPress sites in competitive markets.",
  scope: "WordPress sites in the UK", served: "United Kingdom",
  featuresTitle: "Our WordPress SEO Approach for UK Sites",
  featuresSubtitle: "Platform-specific WordPress SEO for UK businesses and publishers.",
  faqTitle: "WordPress SEO UK - FAQs",
  ctaTitle: "Grow Your UK WordPress Site With SEO",
  ctaDesc: "Book a free WordPress SEO audit and we will identify the technical and content improvements that move rankings.",
  ctaButton: "Get Free WordPress SEO Audit",
});

commercial("seo-audit-london", {
  keyword: "SEO Audit London", badge: "Professional SEO Audits in London",
  title: "SEO Audit London | SEODXB - In-Depth London SEO Audits",
  metaDesc: "Professional SEO audits for London businesses from SEODXB. Deep technical, content, and authority analysis with a prioritised action plan. From $999.",
  h1: "Professional SEO Audits for London Businesses",
  intro: "An SEODXB SEO audit gives London businesses a complete picture of why they are not ranking and a prioritised roadmap to fix it. We analyse technical health, content gaps, link authority, and AI search visibility, then deliver a clear action plan ordered by impact in London's intensely competitive market.",
  scope: "London", served: "London, UK",
  featuresTitle: "What Our London SEO Audits Cover",
  featuresSubtitle: "Comprehensive, actionable SEO audits that prioritise the work that moves rankings in London.",
  faqTitle: "SEO Audit London - FAQs",
  ctaTitle: "Get a Professional SEO Audit for Your London Business",
  ctaDesc: "Book your SEO audit and we will deliver a full technical, content, and authority analysis with an actionable roadmap.",
  ctaButton: "Get Your SEO Audit",
});

commercial("link-building-uk-press", {
  keyword: "Link Building UK Press", badge: "UK Press Link Building Specialists",
  title: "Link Building UK Press | SEODXB - High-Authority UK Links",
  metaDesc: "High-authority UK press link building from SEODXB. Links from UK national and trade press, directories, and industry publications that build domain authority.",
  h1: "UK Press Link Building: Authority That Drives Rankings",
  intro: "Domain authority built on genuine UK press and trade publication links is one of the most durable SEO advantages a UK business can build. SEODXB delivers white-hat link building through digital PR, editorial outreach, and niche directories, earning links from UK publications your competitors cannot easily replicate.",
  scope: "UK link building", served: "United Kingdom",
  featuresTitle: "Our UK Press Link Building Approach",
  featuresSubtitle: "High-authority, editorially earned links from UK national and trade press.",
  faqTitle: "Link Building UK Press - FAQs",
  ctaTitle: "Build the Authority Your UK Site Deserves",
  ctaDesc: "Book a free link building consultation and we will audit your current authority profile.",
  ctaButton: "Get Free Link Building Consultation",
});

commercial("technical-seo-agency-uk", {
  keyword: "Technical SEO Agency UK", badge: "Technical SEO Specialists in the UK",
  title: "Technical SEO Agency UK | SEODXB - UK Technical SEO Experts",
  metaDesc: "Technical SEO agency for UK businesses from SEODXB. Core Web Vitals, crawlability, indexation, structured data, and site architecture that unlocks rankings.",
  h1: "Technical SEO Agency for UK Businesses",
  intro: "Technical SEO issues silently block rankings for countless UK websites. SEODXB is a specialist technical SEO agency that diagnoses and fixes the Core Web Vitals, crawl, indexation, structured data, and architecture problems that prevent your site from reaching page one in the UK's competitive search landscape.",
  scope: "UK technical SEO", served: "United Kingdom",
  featuresTitle: "Our Technical SEO Process for UK Sites",
  featuresSubtitle: "Deep technical SEO expertise that removes the barriers blocking your UK rankings.",
  faqTitle: "Technical SEO Agency UK - FAQs",
  ctaTitle: "Fix Your Technical SEO and Unlock UK Rankings",
  ctaDesc: "Book a free technical SEO audit and we will identify the issues blocking your UK site's growth.",
  ctaButton: "Get Free Technical SEO Audit",
});

commercial("enterprise-seo-uk", {
  keyword: "Enterprise SEO UK", badge: "Enterprise SEO Specialists in the UK",
  title: "Enterprise SEO UK | SEODXB - Large-Scale UK SEO",
  metaDesc: "Enterprise SEO for large UK businesses from SEODXB. Large-site SEO governance, multi-team organic programmes, and measurable enterprise-scale results.",
  h1: "Enterprise SEO for Large UK Businesses",
  intro: "Large UK enterprises face unique SEO challenges: thousands of pages, multiple stakeholders, complex tech stacks, and the need to coordinate SEO across marketing, engineering, and content teams. SEODXB delivers enterprise SEO programmes built for this complexity, with the governance and reporting frameworks that drive results at scale.",
  scope: "enterprise businesses in the UK", served: "United Kingdom",
  featuresTitle: "Our Enterprise SEO Approach for UK Businesses",
  featuresSubtitle: "Enterprise-grade SEO with the governance, tooling, and reporting large UK businesses need.",
  faqTitle: "Enterprise SEO UK - FAQs",
  ctaTitle: "Scale Your UK Enterprise SEO Programme",
  ctaDesc: "Book an enterprise SEO consultation and we will assess your current programme and identify the biggest opportunities.",
  ctaButton: "Get Enterprise SEO Consultation",
});

commercial("national-seo-uk", {
  keyword: "National SEO UK", badge: "National SEO Across the UK",
  title: "National SEO UK | SEODXB - Nationwide UK SEO",
  metaDesc: "National SEO for UK businesses from SEODXB. Rank for high-intent keywords across every UK region and city. Transparent pricing, no contracts.",
  h1: "National SEO for UK Businesses: Rank Across Britain",
  intro: "National SEO in the UK requires a coordinated strategy that builds authority at the national level while maintaining relevance in the regions that matter most. SEODXB delivers nationwide SEO programmes that rank UK businesses from London to Glasgow, on Google, ChatGPT, and Google AI Overviews alike.",
  scope: "national markets across the UK", served: "United Kingdom",
  featuresTitle: "Our National SEO Approach for the UK",
  featuresSubtitle: "Coordinated nationwide SEO that builds authority and rankings across the UK.",
  faqTitle: "National SEO UK - FAQs",
  ctaTitle: "Build National Search Dominance Across the UK",
  ctaDesc: "Book a free strategy call and we will map a national SEO programme for your UK business.",
  ctaButton: "Get Free Strategy Call",
});

// Extra commercial pages to reach ~100 total
commercial("seo-for-saas-uk", {
  keyword: "SEO for SaaS UK", badge: "SaaS SEO Specialists in the UK",
  title: "SEO for SaaS UK | SEODXB - SaaS SEO Agency for UK Companies",
  metaDesc: "SEO for UK SaaS companies from SEODXB. Category keyword targeting, comparison page SEO, G2 and Capterra strategy, and AI-cited product content that fills the pipeline.",
  h1: "SEO for UK SaaS Companies: Own Your Category in Search",
  intro: "UK SaaS buyers research solutions, compare alternatives, and read G2 and Capterra reviews before requesting a demo. SEODXB builds the SaaS SEO strategy that puts your product in front of buyers during this research phase, covering category keywords, comparison pages, integration SEO, and AI citation building.",
  scope: "SaaS companies in the UK", served: "United Kingdom",
  featuresTitle: "Our SaaS SEO Approach for the UK Market",
  featuresSubtitle: "Pipeline-focused SaaS SEO built for the UK B2B buying journey.",
  faqTitle: "SEO for SaaS UK - FAQs",
  ctaTitle: "Own Your SaaS Category in UK Search",
  ctaDesc: "Book a free SaaS SEO consultation and we will map the category keywords your UK competitors are ranking for.",
  ctaButton: "Get Free SaaS SEO Consultation",
});

commercial("seo-for-fintech-uk", {
  keyword: "SEO for Fintech UK", badge: "Fintech SEO Specialists in the UK",
  title: "SEO for Fintech UK | SEODXB - UK Fintech SEO Agency",
  metaDesc: "SEO for UK fintech companies from SEODXB. FCA-context trust content, product SEO, and category authority that builds fintech brand visibility in the UK.",
  h1: "SEO for UK Fintech Companies: Build Category Authority",
  intro: "The UK is Europe's leading fintech market, and the search competition for financial product keywords is among the most intense anywhere. SEODXB delivers fintech SEO that builds product page authority, FCA-context trust content, and the category-defining presence that makes UK fintech users and enterprises find you first.",
  scope: "fintech companies in the UK", served: "United Kingdom",
  featuresTitle: "Our SEO Approach for UK Fintech Companies",
  featuresSubtitle: "Trust-led, compliance-aware fintech SEO built for the UK financial market.",
  faqTitle: "SEO for Fintech UK - FAQs",
  ctaTitle: "Build Fintech Search Authority in the UK",
  ctaDesc: "Book a free fintech SEO consultation and we will map the category keywords your competitors own.",
  ctaButton: "Get Free Fintech SEO Consultation",
});

commercial("seo-for-hospitality-uk", {
  keyword: "SEO for Hospitality UK", badge: "Hospitality SEO Specialists in the UK",
  title: "SEO for Hospitality UK | SEODXB - Hotels, Restaurants, and Venues",
  metaDesc: "SEO for UK hospitality businesses from SEODXB. Hotels, restaurants, and venues get Google Map Pack rankings, direct-booking SEO, and AI search citations.",
  h1: "SEO for UK Hospitality: Hotels, Restaurants, and Venues",
  intro: "UK hospitality businesses live and die by their online visibility. Travellers search for hotels, diners choose restaurants, and event bookers discover venues through Google. SEODXB delivers hospitality SEO that wins Map Pack positions, builds direct-booking authority, and gets your property cited in AI travel and dining recommendations.",
  scope: "hospitality businesses in the UK", served: "United Kingdom",
  featuresTitle: "Our Hospitality SEO Approach for the UK",
  featuresSubtitle: "Booking-focused SEO for UK hotels, restaurants, and hospitality venues.",
  faqTitle: "SEO for Hospitality UK - FAQs",
  ctaTitle: "Drive More Bookings Through Organic Search",
  ctaDesc: "Book a free hospitality SEO consultation and we will audit your current search visibility.",
  ctaButton: "Get Free Hospitality SEO Consultation",
});

commercial("seo-for-construction-uk", {
  keyword: "SEO for Construction UK", badge: "Construction SEO Specialists in the UK",
  title: "SEO for Construction UK | SEODXB - Construction SEO Agency",
  metaDesc: "SEO for UK construction companies from SEODXB. Project portfolio SEO, capability-page authority, and B2B lead generation for UK contractors and developers.",
  h1: "SEO for UK Construction Companies",
  intro: "UK developers and procurement teams vet construction companies online before issuing tenders or contracts. SEODXB delivers construction SEO that showcases project portfolios, builds capability-page authority, and positions your firm for the high-value B2B searches that precede major contract decisions.",
  scope: "construction companies in the UK", served: "United Kingdom",
  featuresTitle: "Our SEO Approach for UK Construction Companies",
  featuresSubtitle: "Project authority and B2B lead generation SEO built for the UK construction sector.",
  faqTitle: "SEO for Construction UK - FAQs",
  ctaTitle: "Win More Construction Contracts Through Search",
  ctaDesc: "Book a free construction SEO consultation and we will show you how to reach developers and procurement teams.",
  ctaButton: "Get Free Consultation",
});

commercial("google-ai-overview-seo-uk", {
  keyword: "Google AI Overview SEO UK", badge: "Google AI Overview SEO for the UK",
  title: "Google AI Overview SEO UK | SEODXB - Rank in UK AI Overviews",
  metaDesc: "Google AI Overview SEO for UK businesses from SEODXB. We optimise your content to appear in Google AI Overviews and capture top-of-page AI visibility in the UK.",
  h1: "Google AI Overview SEO for UK Businesses",
  intro: "Google AI Overviews appear at the top of UK search results for millions of queries, capturing attention before users reach organic listings. SEODXB optimises your content to be selected and summarised in Google AI Overviews, securing top-of-page visibility in the rapidly evolving UK search landscape.",
  scope: "Google AI Overviews in the UK", served: "United Kingdom",
  featuresTitle: "Our Google AI Overview SEO Strategy for the UK",
  featuresSubtitle: "Content and technical optimisation that earns positions in Google AI Overviews for UK queries.",
  faqTitle: "Google AI Overview SEO UK - FAQs",
  ctaTitle: "Appear in Google AI Overviews Across the UK",
  ctaDesc: "Book a free consultation and we will audit your content for Google AI Overview eligibility.",
  ctaButton: "Get Free Consultation",
});

commercial("chatgpt-seo-uk", {
  keyword: "ChatGPT SEO UK", badge: "ChatGPT SEO for UK Businesses",
  title: "ChatGPT SEO UK | SEODXB - Get Cited by ChatGPT in the UK",
  metaDesc: "ChatGPT SEO for UK businesses from SEODXB. We optimise your brand and content so ChatGPT cites and recommends you when UK users search in AI. No contracts.",
  h1: "ChatGPT SEO for UK Businesses: Get Cited by AI",
  intro: "Millions of UK consumers and professionals now turn to ChatGPT for recommendations, comparisons, and answers. SEODXB builds the content authority, entity signals, and citation-worthy content that makes ChatGPT cite your UK business, keeping you visible as search behaviour evolves.",
  scope: "ChatGPT visibility in the UK", served: "United Kingdom",
  featuresTitle: "How We Help UK Businesses Get Cited by ChatGPT",
  featuresSubtitle: "Entity-building, citation-worthy content, and authority signals for ChatGPT visibility in the UK.",
  faqTitle: "ChatGPT SEO UK - FAQs",
  ctaTitle: "Get Your UK Business Cited by ChatGPT",
  ctaDesc: "Book a free consultation and we will assess where your brand stands in ChatGPT search today.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-edinburgh-financial", {
  keyword: "SEO Edinburgh Financial Services", badge: "Financial Services SEO in Edinburgh",
  title: "SEO Edinburgh Financial Services | SEODXB - Edinburgh Finance SEO",
  metaDesc: "Specialist SEO for Edinburgh financial services firms from SEODXB. Investment management, fintech, and wealth management SEO built for Scotland's financial capital.",
  h1: "SEO for Edinburgh Financial Services Firms",
  intro: "Edinburgh is Scotland's financial capital, home to major asset managers, insurance companies, and fintech startups competing for high-intent professional searches. SEODXB delivers SEO for Edinburgh financial services firms that builds FCA-context trust content, product-page authority, and the local presence that attracts institutional and retail clients.",
  scope: "financial services in Edinburgh", served: "Edinburgh, UK",
  featuresTitle: "Our SEO Approach for Edinburgh Financial Services",
  featuresSubtitle: "Trust-led, compliance-aware SEO for Edinburgh's financial sector.",
  faqTitle: "SEO Edinburgh Financial Services - FAQs",
  ctaTitle: "Grow Your Edinburgh Financial Services Business",
  ctaDesc: "Book a free consultation and we will show you how to rank for the financial keywords your clients search.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-london-fintech", {
  keyword: "SEO London Fintech", badge: "Fintech SEO in London",
  title: "SEO London Fintech | SEODXB - London Fintech SEO Agency",
  metaDesc: "Specialist SEO for London fintech companies from SEODXB. Category authority, FCA-context trust content, and AI search citations for London's fintech scene.",
  h1: "SEO for London Fintech Companies",
  intro: "London is Europe's fintech capital, with hundreds of startups and scaleups competing for the same high-value search real estate. SEODXB delivers SEO for London fintech companies that builds category-defining content authority, FCA-related trust signals, and the AI search citations that keep you visible to users and enterprises evaluating platforms.",
  scope: "fintech in London", served: "London, UK",
  featuresTitle: "Our SEO Approach for London Fintech Companies",
  featuresSubtitle: "Category authority and trust-led SEO for London's competitive fintech market.",
  faqTitle: "SEO London Fintech - FAQs",
  ctaTitle: "Build Fintech Search Authority in London",
  ctaDesc: "Book a free London fintech SEO consultation and we will map the category keywords your competitors own.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-glasgow-tourism", {
  keyword: "SEO Glasgow Tourism", badge: "Tourism SEO in Glasgow",
  title: "SEO Glasgow Tourism | SEODXB - Glasgow Tourism and Hospitality SEO",
  metaDesc: "Specialist SEO for Glasgow tourism and hospitality businesses from SEODXB. Hotels, attractions, and restaurants get Map Pack rankings and AI search citations.",
  h1: "SEO for Glasgow Tourism and Hospitality Businesses",
  intro: "Glasgow is Scotland's largest city and a major cultural tourism destination, with hotels, restaurants, music venues, and attractions competing intensely for visitor search traffic. SEODXB delivers tourism SEO for Glasgow businesses that wins the Map Pack, builds direct-booking authority, and earns AI travel citations.",
  scope: "tourism in Glasgow", served: "Glasgow, UK",
  featuresTitle: "Our Tourism SEO Approach for Glasgow",
  featuresSubtitle: "Visitor-focused SEO for Glasgow hotels, attractions, and hospitality businesses.",
  faqTitle: "SEO Glasgow Tourism - FAQs",
  ctaTitle: "Drive More Visitors Through Search",
  ctaDesc: "Book a free tourism SEO consultation for your Glasgow business.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-bristol-tech", {
  keyword: "SEO Bristol Tech", badge: "Tech SEO in Bristol",
  title: "SEO Bristol Tech | SEODXB - Bristol Tech and Startup SEO",
  metaDesc: "Specialist SEO for Bristol tech companies and startups from SEODXB. Category authority, B2B pipeline SEO, and AI search citations for Bristol's tech scene.",
  h1: "SEO for Bristol Tech Companies and Startups",
  intro: "Bristol has built one of the UK's most vibrant tech scenes, with startups, scaleups, and established tech firms all competing for search visibility. SEODXB delivers SEO for Bristol tech companies that builds category authority, B2B pipeline content, and the AI search presence that puts you in front of the right buyers.",
  scope: "tech companies in Bristol", served: "Bristol, UK",
  featuresTitle: "Our SEO Approach for Bristol Tech Companies",
  featuresSubtitle: "Category authority and B2B pipeline SEO for Bristol's tech ecosystem.",
  faqTitle: "SEO Bristol Tech - FAQs",
  ctaTitle: "Grow Your Bristol Tech Business Through Search",
  ctaDesc: "Book a free tech SEO consultation and we will map your category keyword opportunities.",
  ctaButton: "Get Free Consultation",
});

commercial("voice-search-seo-uk", {
  keyword: "Voice Search SEO UK", badge: "Voice Search SEO for UK Businesses",
  title: "Voice Search SEO UK | SEODXB - Optimise for Voice in the UK",
  metaDesc: "Voice search SEO for UK businesses from SEODXB. We optimise for conversational queries, featured snippets, and smart speaker answers in the UK market.",
  h1: "Voice Search SEO for UK Businesses",
  intro: "Voice search through Siri, Google Assistant, and Alexa is a significant search channel for UK consumers. SEODXB optimises your content and local presence for the conversational, question-based queries UK voice users ask, capturing voice search traffic your competitors are missing.",
  scope: "voice search in the UK", served: "United Kingdom",
  featuresTitle: "Our Voice Search SEO Approach for the UK",
  featuresSubtitle: "Conversational content and structured data that wins voice search answers in the UK.",
  faqTitle: "Voice Search SEO UK - FAQs",
  ctaTitle: "Win Voice Search in the UK",
  ctaDesc: "Book a free consultation and we will review your voice search readiness.",
  ctaButton: "Get Free Consultation",
});

commercial("multilingual-seo-uk", {
  keyword: "Multilingual SEO UK", badge: "Multilingual SEO for UK Businesses",
  title: "Multilingual SEO UK | SEODXB - SEO in Multiple Languages",
  metaDesc: "Multilingual SEO for UK businesses from SEODXB. Welsh, French, Polish, Urdu, and other language SEO with hreflang, localised content, and market-specific authority.",
  h1: "Multilingual SEO for UK Businesses",
  intro: "The UK is a multilingual market. From Welsh speakers in Wales to large Polish, Urdu, and South Asian communities, businesses that reach customers in their language gain a significant organic advantage. SEODXB delivers multilingual SEO for UK businesses, covering hreflang, localised content, and language-specific keyword strategy.",
  scope: "multilingual UK markets", served: "United Kingdom",
  featuresTitle: "Our Multilingual SEO Approach for the UK",
  featuresSubtitle: "Language-specific SEO built for the diverse UK search audience.",
  faqTitle: "Multilingual SEO UK - FAQs",
  ctaTitle: "Reach the Full UK Market in Every Language",
  ctaDesc: "Book a free consultation and we will map the multilingual SEO opportunities for your UK business.",
  ctaButton: "Get Free Consultation",
});

commercial("seo-reseller-uk", {
  keyword: "SEO Reseller UK", badge: "SEO Reseller Services in the UK",
  title: "SEO Reseller UK | SEODXB - White-Label SEO Fulfilment for UK Agencies",
  metaDesc: "SEO reseller services in the UK from SEODXB. White-label SEO, AEO, and GEO fulfilment for UK agencies who want expert delivery under their own brand.",
  h1: "SEO Reseller Services for UK Agencies",
  intro: "SEODXB provides SEO reseller and white-label fulfilment for UK agencies that want to offer world-class SEO without building an in-house team. We deliver the strategy and execution under your brand, on time, with reporting you can hand straight to clients.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "Our SEO Reseller Programme for UK Agencies",
  featuresSubtitle: "Expert, white-label SEO delivery built for UK agency partners.",
  faqTitle: "SEO Reseller UK - FAQs",
  ctaTitle: "Become an SEODXB Partner in the UK",
  ctaDesc: "Book a partner call and we will show you how our white-label SEO fulfilment can grow your agency's margins.",
  ctaButton: "Become a Partner",
});

commercial("seo-outsourcing-uk", {
  keyword: "SEO Outsourcing UK", badge: "SEO Outsourcing for UK Businesses",
  title: "SEO Outsourcing UK | SEODXB - Expert UK SEO Outsourcing",
  metaDesc: "Outsource your SEO to SEODXB. UK businesses get expert SEO delivery, AI search optimisation, and transparent reporting without building an in-house team.",
  h1: "SEO Outsourcing for UK Businesses",
  intro: "Building an in-house SEO team is expensive and time-consuming. SEODXB gives UK businesses access to a full-stack SEO team through outsourcing, covering technical SEO, content, link building from UK press and directories, and AI search optimisation, at a fraction of the cost of in-house hiring.",
  scope: "the UK", served: "United Kingdom",
  featuresTitle: "What Our UK SEO Outsourcing Includes",
  featuresSubtitle: "Full-stack SEO outsourcing with the transparency and accountability of an in-house team.",
  faqTitle: "SEO Outsourcing UK - FAQs",
  ctaTitle: "Outsource Your SEO to a UK Specialist",
  ctaDesc: "Book a free consultation and we will scope an outsourced SEO programme that fits your UK team and goals.",
  ctaButton: "Get Free Consultation",
});

// Hand-crafted daily page (2026-08-08): a genuinely London-specific agency hub
// filling a verified gap and parenting the London vertical pages.
const extraUKPages: KeywordPageConfig[] = [
  {
    slug: "seo-agency-london",
    keyword: "SEO Agency London",
    badge: "SEO Agency for London Businesses",
    title: "SEO Agency London | SEODXB Search Specialists",
    metaDesc: "SEODXB is an SEO agency for London businesses. We rank you on Google, win local and borough-level searches, and get you cited by AI answer engines. No lock-in contracts.",
    h1: "The SEO Agency London Businesses Rely On to Grow From Search",
    intro: "London is one of the most competitive search markets in the world, where established brands, aggressive challengers and directories all fight for the same terms. SEODXB helps London businesses cut through it: a technically sound foundation, content that ranks for how Londoners actually search by service and by area, strong local visibility at borough level, and optimisation to be cited by AI answer engines. We focus on qualified enquiries and revenue, not vanity metrics, and we work without long lock-in contracts.",
    svgVariant: "serp",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=640&h=480&fit=crop&q=80&auto=format",
    featuresTitle: "Why London Businesses Choose SEODXB",
    featuresSubtitle: "Specialist SEO built for one of the world's most competitive and local search markets.",
    features: [
      { title: "Technical SEO Foundations", desc: "We fix the crawl, indexation, speed and structured-data issues that quietly hold London sites back before building on top of them." },
      { title: "London-Focused Content", desc: "We target how Londoners search, by service and often by borough or district, so you rank for the specific terms that convert." },
      { title: "Local & Map Pack SEO", desc: "We optimise your Google Business Profile and local signals to win the borough-level and near-me searches that drive real enquiries." },
      { title: "Authority Building", desc: "We earn genuine links and mentions from credible UK sources to build the prominence London's competitive terms demand." },
      { title: "AEO & GEO Optimisation", desc: "We structure content to be cited by AI Overviews, ChatGPT and Perplexity, keeping you visible as search shifts to AI answers." },
      { title: "Transparent Reporting", desc: "You get clear reporting on rankings, organic traffic and, above all, the enquiries and revenue your SEO produces." },
    ],
    stats: [
      { value: "3", label: "Search surfaces covered" },
      { value: "Local", label: "Borough-level targeting" },
      { value: "24/7", label: "Always-on visibility" },
      { value: "0", label: "Long-term contracts" },
    ],
    faqTitle: "SEO Agency London - FAQs",
    faqs: [
      { q: "What does an SEO agency in London do?", a: "A London SEO agency helps your business rank higher on Google and get found by the customers searching for what you offer. SEODXB handles technical SEO, content, local SEO and AI search visibility, focused on generating qualified enquiries rather than vanity traffic in a highly competitive market." },
      { q: "How long does SEO take to work in London?", a: "London is very competitive, so meaningful results on head terms usually build over several months. Local, borough-level and long-tail searches can move sooner. Because content and authority compound, results build steadily rather than arriving all at once, and consistency matters most." },
      { q: "Can a smaller business compete for SEO in London?", a: "Yes, with focus. Large brands rank broadly but rarely with depth on specific services, niches or boroughs. A focused strategy built on genuine local relevance, strong technical foundations and content that answers the exact questions your customers ask can win the searches that convert." },
      { q: "Do you offer local SEO for specific London areas?", a: "Yes. Many Londoners search at borough or neighbourhood level, so we align your Google Business Profile, location-relevant pages and consistent business details to win those local searches, which are often a major source of enquiries." },
      { q: "Is SEODXB based in London?", a: "SEODXB is a specialist SEO agency that serves London and UK businesses alongside clients across the UAE and internationally. Our work is delivered remotely with transparent reporting and direct access to the specialists doing it, and we operate without long lock-in contracts." },
    ],
    extendedContent: [
      {
        heading: "What It Takes to Rank in London",
        paragraphs: [
          "London is not one market but many overlapping ones: dozens of boroughs, distinct commercial districts from the City and Canary Wharf to Shoreditch and Mayfair, and intense competition in almost every service category. Ranking here means competing against established local players, national brands and aggregator directories at the same time, which is why a shallow, generic approach rarely moves the needle.",
          "What works is depth and specificity. A technically sound site, content that answers the precise questions Londoners ask about your service, and genuine local relevance for the areas you serve together let you rank for the searches that actually produce enquiries. We prioritise those winnable, high-intent terms rather than chasing the broadest, most contested keywords for their own sake.",
        ],
      },
      {
        heading: "Local Search Is Where Many London Enquiries Are Won",
        paragraphs: [
          "Because London is so dense, a large share of valuable searches carry local intent: people looking for a service in their borough, near a station, or close to where they work. The Map Pack and local results capture that intent directly, and a well-optimised Google Business Profile with consistent details and genuine reviews is one of the most reliable sources of enquiries a London business can build.",
          "We treat local SEO and your wider content as one system. The profile and location-relevant pages capture nearby intent, while your service content provides the depth that turns a click into a customer. For most London businesses, getting both right matters more than winning any single competitive head term.",
        ],
      },
      {
        heading: "Staying Visible as London Search Moves to AI",
        paragraphs: [
          "Londoners increasingly research services through AI Overviews and assistants that answer directly and cite a handful of trusted sources. Being one of those sources puts your business in front of customers at the research stage, before they reach a list of links. Earning it comes from clear, answer-first content backed by genuine expertise and consistent information across the web.",
          "This does not replace ranking for the commercial searches that drive clicks; it adds a surface worth winning. Combining strong technical and local SEO with answer-engine optimisation keeps a London business visible across Google, the Map Pack and AI answers at once, which is exactly where competition is thinnest for the firms that adapt early.",
        ],
      },
    ],
    ctaTitle: "Grow Your London Business From Search",
    ctaDesc: "Book a free SEO strategy call. We will audit your site, analyse the competitors ranking above you, and show you where the qualified London enquiries are.",
    ctaButton: "Book a Free Strategy Call",
    areaServed: "London, United Kingdom",
  },
];

export const ukKeywordPages: KeywordPageConfig[] = [...pages, ...extraUKPages];
