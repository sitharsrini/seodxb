import type { KeywordPageConfig } from "./keywordPages";

// City-level commercial landing pages filling genuine geographic gaps:
// Business Bay (Dubai district), Riyadh, Manchester and Dublin. Each page
// is hand-authored with location-specific content, sectors, competition notes
// and local FAQs so it deserves to rank on its own rather than being a doorway
// clone. British English. No em dashes, no double hyphens as dashes.

const heroImg = (id: string) =>
  `https://images.unsplash.com/${id}?w=640&h=480&fit=crop&q=80&auto=format`;

// Honest service-fact stat tiles (no fabricated performance metrics or client
// results). These describe how SEODXB works, not invented outcomes.
const serviceStats = (extra: { value: string; label: string }): { value: string; label: string }[] => [
  { value: "Google + AI", label: "Search surfaces covered" },
  extra,
  { value: "No contracts", label: "Month to month" },
  { value: "Free audit", label: "To get started" },
];

export const cityKeywordPages: KeywordPageConfig[] = [
  // ── 1. SEO Agency Business Bay (Dubai district) ───────────────────────────
  {
    slug: "seo-agency-business-bay",
    keyword: "SEO Agency Business Bay",
    badge: "Local SEO Specialists for Business Bay",
    title: "SEO Agency Business Bay | SEODXB - Rank in Dubai's Business District",
    metaDesc: "SEODXB is an SEO agency for Business Bay companies. We win the Dubai Map Pack and AI answers for firms in one of the city's most competitive districts.",
    h1: "The SEO Agency Business Bay Companies Trust to Get Found",
    intro: "Business Bay packs an extraordinary density of companies into a small stretch of Dubai, which makes local search there genuinely competitive. SEODXB helps Business Bay firms rank on Google, win the Map Pack, and get cited by AI answer engines, with district-level content and local SEO built for one of the city's tightest commercial markets rather than a generic Dubai page.",
    svgVariant: "local",
    imageUrl: heroImg("photo-1512453979798-5ea266f8880c"),
    featuresTitle: "What Makes SEODXB the Right SEO Agency for Business Bay",
    featuresSubtitle: "Local SEO depth and district-specific content tuned to how customers search around Business Bay.",
    features: [
      { title: "Google Business Profile Optimisation", desc: "We complete and optimise your profile so you appear in the Map Pack for high-intent searches near Business Bay, with accurate categories, services and a steady review process." },
      { title: "District-Level Content", desc: "We build pages that reference Business Bay genuinely and answer the questions local customers ask, so Google and AI engines treat them as relevant rather than thin." },
      { title: "Technical SEO Foundations", desc: "We fix the crawl, indexing, speed and structured-data issues that quietly hold back rankings before any content work can pay off." },
      { title: "AEO and GEO Visibility", desc: "We structure your content answer-first so ChatGPT, Perplexity, Gemini and Google AI Overviews can cite your business when customers ask for a recommendation." },
      { title: "Bilingual Reach", desc: "Where it matters for your audience, we build Arabic and English visibility so you capture high-intent searches in both languages, not just one." },
      { title: "Enquiry-Focused Reporting", desc: "We report against calls, forms and enquiries rather than vanity rankings, so you can see what search is actually contributing." },
    ],
    stats: serviceStats({ value: "Map Pack", label: "Local focus" }),
    faqTitle: "SEO Agency Business Bay - Common Questions",
    faqs: [
      { q: "Why is SEO harder in Business Bay?", a: "Business Bay concentrates a high number of competing businesses into a small area, so proximity alone will not carry you. Google chooses between similar nearby options on relevance, prominence and signal quality, which means the firms that have done the local SEO groundwork out-rank those that simply have an address in the district." },
      { q: "Do I need a Business Bay page or is a Dubai page enough?", a: "District-specific content performs better for nearby, high-intent searches because it signals genuine local relevance. A generic Dubai page with a district name swapped in reads as thin. We build pages a local customer would find genuinely useful, with clear answers near the top for both Google and AI engines." },
      { q: "How do you get my Business Bay company into the Map Pack?", a: "Map Pack visibility rests on a complete, accurate Google Business Profile, consistent name, address and phone details across the web, genuine reviews and real photos. In a district this dense those signals decide which similar businesses Google shows, so we put that groundwork on a steady footing first." },
      { q: "Can you help me get cited by AI search tools?", a: "Yes. When customers ask an AI assistant to recommend a provider near Business Bay they often get a single answer rather than a list. We structure your content answer-first, keep your business facts consistent across the web, and build credible mentions so AI engines can quote you." },
      { q: "How quickly can we see results?", a: "Foundational work such as optimising your Google Business Profile and fixing technical issues can move local visibility within a few months. Content and authority compound more slowly. We sequence foundations first for early wins, then district content and AI-answer authority for durable growth. No agency can guarantee specific rankings." },
    ],
    ctaTitle: "Ready to Get Found in Business Bay?",
    ctaDesc: "Book a free SEO audit and we will show you exactly where you stand in Business Bay's Map Pack and AI answers, and the fastest path to visibility.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Business Bay, Dubai, United Arab Emirates",
    extendedContent: [
      {
        heading: "Why Business Bay Is One of Dubai's Toughest Local Markets",
        paragraphs: [
          "Business Bay sits at the commercial heart of Dubai, a dense cluster of towers housing professional services, real estate, clinics, fitness studios, hospitality and more. That density is exactly what makes local search there so competitive: a large number of similar businesses are chasing the same nearby customers, and the ones that appear in Google and in AI answers capture a disproportionate share of the enquiries.",
          "Because the searches are so specific, the commercial stakes are high. Someone searching near Business Bay for a service is usually ready to act, so the gap between appearing in the top few results and being invisible is often the gap between winning the enquiry and losing it. Winning here is about the quality of your local SEO signals, not simply your postcode.",
        ],
      },
      {
        heading: "How We Build Business Bay Visibility",
        paragraphs: [
          "We start with the foundations that pay back fastest. That means fixing technical issues that block indexing, completing and optimising your Google Business Profile, and putting your review process on a steady footing so your Map Pack presence strengthens. These moves often shift local visibility within a few months.",
          "From there we build the district-level and service content that captures nearby searches, and we structure it so AI engines can cite it directly. Throughout, we measure against enquiries and calls rather than rankings alone, because in a market this dense the only metric that matters is whether the right customers are finding and contacting you.",
        ],
      },
    ],
  },

  // ── 2. SEO Agency Riyadh (Saudi Arabia) ───────────────────────────────────
  {
    slug: "seo-agency-riyadh",
    keyword: "SEO Agency Riyadh",
    badge: "Bilingual SEO Specialists for Riyadh",
    title: "SEO Agency Riyadh | SEODXB - Arabic and English SEO for Riyadh",
    metaDesc: "SEODXB is an SEO agency for Riyadh businesses. Bilingual Arabic and English SEO, local Map Pack visibility and AI search citations across the capital.",
    h1: "The SEO Agency Riyadh Businesses Trust to Rank in Two Languages",
    intro: "Riyadh is Saudi Arabia's capital and business hub, home to major financial institutions, government bodies and a fast-growing tech and services economy. SEODXB helps Riyadh businesses rank on Google and get cited by AI answer engines, combining Arabic and English SEO, local Map Pack optimisation and technical depth built for one of the Kingdom's most competitive search markets.",
    svgVariant: "serp",
    imageUrl: heroImg("photo-1486406146926-c627a92ad1ab"),
    featuresTitle: "What Makes SEODXB the Right SEO Agency for Riyadh",
    featuresSubtitle: "Bilingual SEO expertise combined with a genuine understanding of how Riyadh searches in Arabic and English.",
    features: [
      { title: "Bilingual Arabic and English SEO", desc: "We run separate Arabic and English keyword research and write native content in each, with correct hreflang, because the two languages surface different results in Riyadh." },
      { title: "Local SEO and the Map Pack", desc: "We optimise your Google Business Profile and listings so you appear for high-intent local searches across Riyadh and its business districts." },
      { title: "Technical SEO Audits", desc: "We fix crawlability, indexing, Core Web Vitals and structured-data issues so the site can compete for the terms that matter in the capital." },
      { title: "Sector-Aware Content", desc: "We build content tuned to Riyadh's finance, government, energy and technology sectors, answering the questions those buyers actually search." },
      { title: "AEO and GEO Optimisation", desc: "We structure content so ChatGPT, Perplexity, Gemini and Google AI Overviews can cite your business when customers ask for a recommendation." },
      { title: "Outcome-Focused Reporting", desc: "We report on qualified enquiries, calls and bookings, not vanity metrics, so you can see the commercial contribution of search." },
    ],
    stats: serviceStats({ value: "Arabic + English", label: "Bilingual SEO" }),
    faqTitle: "SEO Agency Riyadh - Common Questions",
    faqs: [
      { q: "How much does an SEO agency cost in Riyadh?", a: "There is no single rate. Pricing depends on your sector, how competitive your keywords are, whether you need Arabic as well as English, and the condition of your site. Judge a fee by what it actually funds in technical work, content and links, and whether that scope can reach the terms that drive your enquiries." },
      { q: "Do I need Arabic SEO in Riyadh?", a: "For most Riyadh businesses, yes. Arabic and English searches surface different results, and ignoring Arabic leaves a large share of high-intent local traffic uncaptured, particularly among Saudi nationals and Arabic-speaking residents. We build genuine bilingual SEO rather than machine translation." },
      { q: "Is Riyadh a competitive market for SEO?", a: "Yes. As the capital and business hub, Riyadh is among the Kingdom's most competitive search markets, especially in finance and professional services. That means the fastest early wins usually come from local and long-tail terms, with competitive head terms reached as authority builds." },
      { q: "How long does SEO take to work in Riyadh?", a: "Local and long-tail terms can improve within a few months, while competitive terms take longer. Because content and authority compound, results build steadily rather than arriving at once. No agency can guarantee specific rankings, and Google states plainly that no one can." },
      { q: "Do you work with businesses across Saudi Arabia?", a: "Yes. While this page focuses on Riyadh, we serve businesses across the Kingdom, including Jeddah, Dammam, Al Khobar and beyond, with bilingual SEO tuned to each market's sectors and search behaviour." },
    ],
    ctaTitle: "Ready to Rank in Riyadh?",
    ctaDesc: "Book a free SEO audit and we will map the fastest path to visibility across Google and AI search, in Arabic and English, for your Riyadh business.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Riyadh, Saudi Arabia",
    extendedContent: [
      {
        heading: "How Riyadh Searches in 2026",
        paragraphs: [
          "Riyadh is a genuinely bilingual search market. Arabic is the primary language for much of the local audience, while English dominates in B2B, international business and many professional services. The two do not overlap neatly, and a business that invests only in English misses a large body of high-intent Arabic searches that its Arabic-speaking customers actually use.",
          "The capital is also mobile-first and fast-moving. Customers move from a need to a shortlist quickly, checking Google, maps and, increasingly, AI assistants before they contact a business. By the time an enquiry lands, much of the decision is already made, which is why appearing early across both Google and AI answers matters so much.",
        ],
      },
      {
        heading: "Where the Wins Come From First",
        paragraphs: [
          "In a competitive capital, the sensible sequence is to fix technical and local foundations, then win achievable local and long-tail terms to build momentum, before reinvesting into the more contested head terms. This order produces early results while compounding over time, rather than front-loading effort into the hardest terms in the market.",
          "Because many competitors have not yet adapted to AI search, structuring content for AI answers now is a real opportunity in Riyadh. Businesses that establish themselves as the default citation in their category can hold that position against later entrants, which is difficult to overturn once earned.",
        ],
      },
    ],
  },

  // ── 4. SEO Agency Manchester (United Kingdom) ─────────────────────────────
  {
    slug: "seo-agency-manchester",
    keyword: "SEO Agency Manchester",
    badge: "SEO Specialists for Manchester Businesses",
    title: "SEO Agency Manchester | SEODXB - Google and AI Search Visibility",
    metaDesc: "SEODXB is an SEO agency for Manchester businesses. We grow Google rankings, local Map Pack visibility and AI search citations with clear scope and honest reporting.",
    h1: "The SEO Agency Manchester Businesses Choose for Honest, Effective SEO",
    intro: "Manchester has one of the busiest SEO markets in the UK outside London, which makes choosing the right partner harder than it should be. SEODXB helps Manchester businesses grow across Google and AI search with clear scope, honest reporting and no guaranteed-ranking promises, combining technical SEO, local visibility and content built for both traditional rankings and AI answers.",
    svgVariant: "audit",
    imageUrl: heroImg("photo-1516321318423-f06f85e504b3"),
    featuresTitle: "What Makes SEODXB the Right SEO Agency for Manchester",
    featuresSubtitle: "Substance over pitch: clear scope, honest reporting and modern SEO across Google and AI search.",
    features: [
      { title: "Technical SEO Audits", desc: "We run deep crawl audits covering indexing, Core Web Vitals, structured data and site architecture, and fix the issues that quietly block rankings." },
      { title: "Local SEO for Manchester", desc: "We optimise your Google Business Profile and local signals so you appear in the Map Pack for high-intent searches across Manchester and the North West." },
      { title: "Content Built to Rank and Convert", desc: "We write content around the questions your customers actually search, structured to earn snippets, People Also Ask spots and AI citations." },
      { title: "AEO and GEO Optimisation", desc: "We make your business citable by ChatGPT, Perplexity, Gemini and Google AI Overviews, which is now a standard part of a credible SEO brief." },
      { title: "Transparent Reporting", desc: "You get clear reporting tied to enquiries and revenue, not impressions and rankings alone, so you always know what search is contributing." },
      { title: "No Lock-In, No False Promises", desc: "We work month to month and never guarantee number one rankings, because no agency honestly can. We keep clients through results, not contracts." },
    ],
    stats: serviceStats({ value: "Local + national", label: "Coverage" }),
    faqTitle: "SEO Agency Manchester - Common Questions",
    faqs: [
      { q: "How much should a Manchester business pay for SEO?", a: "It depends on your competition, goals and the condition of your site, so judge a fee by what it funds rather than the headline number. A clear scope covering technical work, content and links, delivered by senior people, beats a cheaper retainer that produces thin output. We connect the spend to expected enquiries." },
      { q: "Does my SEO agency need to be based in Manchester?", a: "Not necessarily. Proximity matters less than understanding of your market. For locally focused businesses, an agency that knows how Manchester and the North West search and can build local and Google Business Profile visibility has an advantage. For national sellers, sector and technical expertise matter more than location." },
      { q: "Can you guarantee first-page rankings in Manchester?", a: "No, and you should be wary of any agency that does. Google states plainly that no one can guarantee rankings. What we can do is show a clear plan, realistic timelines and honest progress against the terms that matter to your business." },
      { q: "Do you include AI search visibility?", a: "Yes. Customers increasingly ask AI tools for recommendations, so a credible brief now covers being cited in AI answers alongside traditional rankings. We build the answer-first content, consistent facts and structured data that make your business citable by AI engines." },
      { q: "How is your reporting different?", a: "We report against enquiries, calls and revenue rather than impressions and rankings in isolation. Vanity-metric reporting can look impressive while contributing nothing commercially, so we keep the focus on what actually moves your business." },
    ],
    ctaTitle: "Want SEO That Actually Delivers in Manchester?",
    ctaDesc: "Book a free SEO audit and we will show you where you stand across Google and AI search, and give you an honest plan with no guaranteed-ranking nonsense.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Manchester, United Kingdom",
    extendedContent: [
      {
        heading: "Choosing Well in a Crowded Manchester Market",
        paragraphs: [
          "Manchester's SEO market is competitive, which is both good and bad. Good, because there is genuine expertise to hire. Bad, because the noise makes it hard to separate agencies that deliver from those that sell a convincing pitch and little else. The strongest signal of a good agency is not a low headline price but a clear, readable scope you can actually understand.",
          "We believe the questions that reveal competence are simple: how will you measure success and how does it connect to my revenue, what will you do in the first ninety days and why, and how do you approach AI search. We answer those specifically, because vague answers, secret tactics and guaranteed rankings are reliable warning signs.",
        ],
      },
      {
        heading: "Modern SEO Is Four Strands, Not One",
        paragraphs: [
          "Real SEO rests on technical health so search engines can crawl and index your site, content built around the questions your customers ask, and authority earned through genuine links and mentions. In 2026 a fourth strand has become standard: visibility in AI answers, because customers increasingly ask ChatGPT and Google AI Overviews for recommendations.",
          "We build all four deliberately and report against enquiries rather than vanity metrics. A slightly higher fee that funds genuine work and honest reporting almost always beats a cheaper retainer that quietly under-delivers, because the cost of a wasted year is far higher than the difference in monthly price.",
        ],
      },
    ],
  },

  // ── 5. SEO Agency Dublin (Ireland) ────────────────────────────────────────
  {
    slug: "seo-agency-dublin",
    keyword: "SEO Agency Dublin",
    badge: "SEO Specialists for Dublin Businesses",
    title: "SEO Agency Dublin | SEODXB - Google and AI Search Visibility",
    metaDesc: "SEODXB is an SEO agency for Dublin businesses. We grow Google rankings, local Map Pack visibility and AI search citations with clear scope and honest reporting.",
    h1: "The SEO Agency Dublin Businesses Trust to Get Found",
    intro: "Dublin is Ireland's commercial and technology capital, home to multinational headquarters and a dense base of ambitious small and mid-sized businesses. SEODXB helps Dublin businesses rank on Google, win the local Map Pack and get cited by AI answer engines, with technical SEO, local optimisation and answer-first content built for both traditional search and the AI tools customers increasingly rely on.",
    svgVariant: "ai",
    imageUrl: heroImg("photo-1526481280693-3bfa7568e0f3"),
    featuresTitle: "What Makes SEODXB the Right SEO Agency for Dublin",
    featuresSubtitle: "Modern SEO across Google and AI search, built on clear scope and honest reporting.",
    features: [
      { title: "Local SEO for Dublin", desc: "We optimise your Google Business Profile and local signals so you appear in the Map Pack for the high-intent searches that drive enquiries across Dublin." },
      { title: "Technical SEO Audits", desc: "We fix crawlability, indexing, Core Web Vitals and structured-data issues so your site can compete for the terms that matter in a busy capital." },
      { title: "Answer-First Content", desc: "We build content around real customer questions, structured so both Google and AI engines can lift a clear answer from it." },
      { title: "AEO and GEO Visibility", desc: "We make your business citable by ChatGPT, Perplexity, Gemini and Google AI Overviews, an opening many Irish competitors have not yet taken." },
      { title: "Sector-Aware Strategy", desc: "We tune content to Dublin's mix of technology, professional services, hospitality and local trades, answering the questions those buyers search." },
      { title: "Enquiry-Focused Reporting", desc: "We report against calls, forms and bookings rather than vanity metrics, so you can see search's commercial contribution." },
    ],
    stats: serviceStats({ value: "Local + national", label: "Coverage" }),
    faqTitle: "SEO Agency Dublin - Common Questions",
    faqs: [
      { q: "Do Dublin businesses still need SEO with AI search growing?", a: "Yes. AI answer engines synthesise their recommendations from content that is already well structured and trusted, much of it already ranking, so the work that earns a good Google position is also what makes you citable by AI. Neglecting SEO makes you less visible on every surface at once." },
      { q: "How much does an SEO agency cost in Dublin?", a: "It depends on your competition, goals and the condition of your site, so judge a fee by what it funds rather than the headline number. A clear scope covering technical work, content and links beats a cheaper retainer producing thin output. We connect the spend to expected enquiries." },
      { q: "Can you help my Dublin business get cited by AI tools?", a: "Yes. We focus on clear, answer-first content, consistent business facts across the web, a complete Google Business Profile with genuine reviews, and structured data. Because many Irish competitors have not yet adapted to AI search, acting now is a real advantage." },
      { q: "Is local SEO worth it for a small Dublin business?", a: "For most, yes. Local search is one of the most direct routes to enquiries, and much of what drives it is achievable without a large budget: a complete Google Business Profile, consistent listings, genuine reviews and a few useful local pages. That same groundwork feeds your AI visibility too." },
      { q: "Do you guarantee rankings?", a: "No, and you should be cautious of anyone who does. Google states plainly that no one can guarantee rankings. We provide a clear plan, realistic timelines and honest reporting against the terms that matter to your business." },
    ],
    ctaTitle: "Ready to Get Found in Dublin?",
    ctaDesc: "Book a free SEO audit and we will show you where you stand across Google and AI search in Dublin, and give you an honest plan to improve it.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Dublin, Ireland",
    extendedContent: [
      {
        heading: "SEO and AI Search Are Two Ends of the Same Work",
        paragraphs: [
          "A fair question among Dublin business owners is whether traditional SEO still matters now that customers ask ChatGPT and Google's AI Overviews for recommendations. It does, because these tools do not invent recommendations from nothing. They synthesise from content across the web and lean heavily on pages that are already well structured, trusted and often already ranking.",
          "For a Dublin business, that means SEO is the foundation both surfaces build on. Do it well and you become more visible on Google and in AI answers at once. Neglect it and you fade from both. The sensible view is not one or the other but both, built on shared foundations such as a strong Google Business Profile and clear, answer-first content.",
        ],
      },
      {
        heading: "The Opening Most Dublin Competitors Have Not Taken",
        paragraphs: [
          "Because AI search still feels new, many businesses in Dublin have not adapted to it, which is precisely the opportunity. Those that structure their content for AI answers now, on top of solid local SEO, can become the default recommendation in their area and category before their competitors even start.",
          "This does not require reinventing your marketing. It requires doing the foundations well and structuring content so it can be quoted, which is a modest, achievable step. We measure everything against enquiries, calls and bookings rather than rankings alone, because that is the only measure of whether search is actually working for your business.",
        ],
      },
    ],
  },
];
