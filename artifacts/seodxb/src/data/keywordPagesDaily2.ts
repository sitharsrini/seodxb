import type { KeywordPageConfig } from "./keywordPages";

// Daily batch (2026-08-10) of hand-authored commercial landing pages. Each page
// carries genuinely location-specific context, features, FAQs and extended
// content so it deserves to exist independently rather than being a templated
// doorway. Markets: UAE (Abu Dhabi local SEO), Saudi Arabia (Dammam), Qatar
// (ecommerce), United Kingdom (Manchester) and Ireland (Dublin).
// British English. No em dashes, no double hyphens as dashes. No invented stats,
// clients, offices, reviews or rankings.

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=640&h=480&fit=crop&q=80&auto=format`;

// Goal-framed house stats, consistent with the rest of the site. These are
// positioned as objectives and standing offers, not claimed past results.
const gccStats = [
  { value: "Top 3", label: "Map Pack Goal" },
  { value: "AR + EN", label: "Bilingual SEO" },
  { value: "Free", label: "SEO Audit" },
  { value: "No Lock-in", label: "Contracts" },
];
const enStats = [
  { value: "Top 3", label: "Local Pack Goal" },
  { value: "AEO + GEO", label: "AI Search Built In" },
  { value: "Free", label: "SEO Audit" },
  { value: "No Lock-in", label: "Contracts" },
];

export const dailyKeywordPages2: KeywordPageConfig[] = [
  // ── 1. Local SEO Abu Dhabi (UAE) ──────────────────────────────────────────
  {
    slug: "local-seo-abu-dhabi",
    keyword: "Local SEO Abu Dhabi",
    badge: "Local SEO Specialists for Abu Dhabi",
    title: "Local SEO Abu Dhabi | SEODXB - Win the Map Pack & AI Answers",
    metaDesc:
      "SEODXB delivers local SEO for Abu Dhabi businesses: Google Business Profile optimisation, Map Pack rankings and AI citations. Free local SEO review.",
    h1: "Local SEO Abu Dhabi: Get Found by Customers Nearby",
    intro:
      "Most Abu Dhabi customers who are ready to act search with local intent: they look for a clinic, contractor, restaurant or professional service near them and choose from the map results before they ever scroll. SEODXB helps Abu Dhabi businesses win that moment. We optimise your Google Business Profile, build the local signals Google trusts, and structure your information so AI assistants recommend you too, across the corniche, the islands and the mainland districts where your customers actually are.",
    svgVariant: "local",
    imageUrl: img("photo-1512632578888-169bbbc64f33"),
    featuresTitle: "What Our Abu Dhabi Local SEO Delivers",
    featuresSubtitle:
      "A focused local programme built around how Abu Dhabi customers search on their phones, in Arabic and English.",
    features: [
      { title: "Google Business Profile Optimisation", desc: "We rebuild your profile properly: correct categories, service areas, attributes, photos, products and a review strategy so you compete for the Map Pack rather than sitting below it." },
      { title: "Abu Dhabi Map Pack Rankings", desc: "We target the local pack across Al Reem Island, Al Maryah, Khalifa City, Mussafah, Yas Island and the wider capital, where proximity and prominence decide who gets the call." },
      { title: "Accurate Local Citations", desc: "We fix inconsistent name, address and phone details across UAE directories and listings, a common and quietly damaging problem that confuses Google and suppresses rankings." },
      { title: "Bilingual Arabic & English Local SEO", desc: "Genuine Arabic optimisation alongside English, not machine translation, so you capture both the Emirati and expatriate searches that make up Abu Dhabi's customer base." },
      { title: "Review Generation & Response", desc: "A practical, policy-compliant system to earn genuine reviews and respond to them, since review volume, recency and sentiment strongly influence local ranking and click-through." },
      { title: "AEO & GEO for Local Queries", desc: "We structure your site and profile so ChatGPT, Gemini and Google AI Overviews cite you for near me and best in Abu Dhabi style questions, a lead source most local competitors ignore." },
    ],
    stats: enStats,
    faqTitle: "Local SEO Abu Dhabi - FAQs",
    faqs: [
      { q: "What is local SEO and why does it matter in Abu Dhabi?", a: "Local SEO is the work that gets your business into Google's map results and near me searches for your area. In Abu Dhabi, where most high-intent searches happen on a phone with local intent, an optimised Google Business Profile and consistent listings often deliver a better return than any other single SEO activity." },
      { q: "How long does local SEO take to work in Abu Dhabi?", a: "Profile and citation fixes can lift visibility within weeks, while competitive Map Pack positions and review-driven prominence build over a few months. Local SEO tends to show results faster than national organic rankings because the competing set is smaller and more location-bound." },
      { q: "Do I need Arabic for local SEO in Abu Dhabi?", a: "Often yes. Abu Dhabi has a large Arabic-speaking audience alongside its expatriate communities, and many local searches happen in Arabic. Proper bilingual optimisation captures customers an English-only presence misses, which matters most for consumer-facing and public-facing services." },
      { q: "How do reviews affect my Abu Dhabi rankings?", a: "Reviews influence both ranking and the decision to click or call. Google weighs review quantity, freshness and, to a degree, keywords within them, and prospective customers use your rating and recent comments as a trust signal. A steady, genuine review flow is one of the highest-return local activities." },
      { q: "Can SEODXB help a multi-location Abu Dhabi business?", a: "Yes. We structure separate optimised profiles and location pages for each branch so they rank in their own districts without competing against each other, and we keep the underlying data consistent so Google understands your business as one trusted entity with several locations." },
    ],
    ctaTitle: "Win Local Search in Abu Dhabi",
    ctaDesc:
      "Book a free local SEO review. We'll audit your Google Business Profile, check your listings for the errors that suppress rankings, and show you the fastest route to the Map Pack.",
    ctaButton: "Get a Free Local SEO Review",
    areaServed: "Abu Dhabi, United Arab Emirates",
    extendedContent: [
      {
        heading: "Why Local SEO Is Different in Abu Dhabi",
        paragraphs: [
          "Abu Dhabi is geographically spread and administratively distinct from Dubai, and that shapes how local search behaves. Customers on Al Reem or Yas Island, in Khalifa City, or out in Mussafah are looking for businesses that serve their specific area, and Google's local results reward proximity and prominence accordingly. A campaign copied from a Dubai playbook, or run without service-area precision, tends to miss the neighbourhoods that actually convert.",
          "The capital also has a large government, energy and institutional employment base, which means a healthy mix of B2B and public-sector-adjacent demand alongside consumer services. Local SEO here is not only about restaurants and clinics; it is about being the visible, credible choice when a procurement lead, an office manager or a resident searches for a supplier nearby. Getting the fundamentals right, accurate listings, an optimised profile and genuine reviews, is what separates the businesses that appear from the ones that do not.",
        ],
      },
      {
        heading: "How SEODXB Runs Local SEO for Abu Dhabi Businesses",
        paragraphs: [
          "We start with a free review of your Google Business Profile and your presence across the directories that matter in the UAE, identifying the inconsistencies and gaps that hold you back. From there we optimise the profile, correct your citations, and put a realistic review process in place, the changes that move local visibility fastest, before layering on location-specific content and the answer-first structure that AI engines draw on.",
          "Throughout, we measure against outcomes that matter to a local business: Map Pack positions for your priority terms, profile views, direction requests, calls and enquiries. Search in Abu Dhabi rewards consistency and accuracy, and a disciplined local programme, run in both Arabic and English, is how a business builds a lead that competitors find hard to reverse.",
        ],
      },
    ],
  },

  // ── 2. SEO Agency Dammam (Saudi Arabia) ───────────────────────────────────
  {
    slug: "seo-agency-dammam",
    keyword: "SEO Agency Dammam",
    badge: "Specialist SEO Agency for Dammam & the Eastern Province",
    title: "SEO Agency Dammam | SEODXB - Bilingual SEO, AEO & GEO",
    metaDesc:
      "SEODXB is a specialist SEO agency for Dammam and the Eastern Province. Rank on Google, win the local pack and get cited by AI engines in Arabic and English.",
    h1: "The SEO Agency Built for Dammam and the Eastern Province",
    intro:
      "Dammam anchors Saudi Arabia's Eastern Province, the industrial and energy heartland that includes Dhahran, Khobar and the wider metropolitan area. Its economy is built on oil, gas, logistics, construction and a growing base of B2B services, and its buyers are increasingly mobile-first and comfortable letting AI assistants shortlist suppliers. SEODXB helps Dammam businesses rank on Google, win the local Map Pack, and get cited by AI engines like ChatGPT and Google AI Overviews, in both Arabic and English.",
    svgVariant: "serp",
    imageUrl: img("photo-1578662996442-48f60103fc96"),
    featuresTitle: "What Our Dammam SEO Agency Delivers",
    featuresSubtitle:
      "A complete organic growth programme built around how Eastern Province customers and procurement teams actually search.",
    features: [
      { title: "Bilingual Arabic & English SEO", desc: "Real Arabic keyword research and hreflang implementation, not machine translation, so you capture the Arabic searches that drive local demand alongside the English terms used in B2B and expatriate procurement." },
      { title: "Eastern Province Local & Map Pack SEO", desc: "Google Business Profile optimisation, accurate citations and reviews to win the local pack across Dammam, Khobar, Dhahran and the wider metro area." },
      { title: "B2B & Industrial SEO", desc: "Search strategy tuned to the province's energy, logistics, construction and industrial-services base, where a small number of well-qualified enquiries matters more than raw traffic." },
      { title: "Technical SEO Foundation", desc: "We resolve Core Web Vitals, crawl, indexation and structured-data issues so your site is fast and fully indexable, essential in a phone-first market." },
      { title: "Answer-First Content", desc: "Content structured for Google, featured snippets and AI answer engines, written by specialists who understand the Saudi market rather than AI-spun filler." },
      { title: "AEO & GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini and Google AI Overviews cite you, a genuine first-mover advantage while Eastern Province competitors lag." },
    ],
    stats: gccStats,
    faqTitle: "SEO Agency Dammam - FAQs",
    faqs: [
      { q: "Do I need Arabic SEO for my Dammam business?", a: "In most cases, yes. Saudi Arabia is an Arabic-first search market and many high-intent searches happen in Arabic, particularly among Saudi nationals. Proper Arabic SEO, not translation, captures customers English-only sites miss, while English stays important for B2B, industrial and expatriate audiences in the Eastern Province." },
      { q: "How long does SEO take to work in Dammam?", a: "Local and long-tail terms can improve within a few months, while competitive terms take longer. Content and authority compound over time, so results build steadily rather than arriving at once. Consistency across several months matters more than any single change." },
      { q: "Is SEO worth it for a B2B or industrial business in the Eastern Province?", a: "Often more so than for consumer businesses. B2B and industrial buyers research heavily online before contacting suppliers, and ranking for specific, high-intent terms puts you in front of them at the decision stage. A handful of qualified enquiries can be worth far more than high-volume, low-intent traffic." },
      { q: "How does SEODXB get Dammam businesses cited by AI engines?", a: "By publishing clear, answer-first content, keeping your business facts consistent across the web, and earning mentions from credible third parties. AI engines rely on sources they can parse and trust, and many Eastern Province competitors have not yet adapted, which is the opening we help you take." },
      { q: "Does SEODXB work with businesses in Dammam remotely?", a: "Yes. SEODXB works with businesses across Dammam, Khobar, Dhahran and the wider Kingdom, combining Saudi market knowledge with technical SEO, AEO and GEO expertise. We start with a free audit of where you stand on Google and in AI answers." },
    ],
    ctaTitle: "Grow Your Dammam Business in Search",
    ctaDesc:
      "Book a free SEO audit. We'll review your Google and AI search visibility, study your Eastern Province competitors, and show you the fastest path to more qualified enquiries.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Dammam, Eastern Province, Saudi Arabia",
    extendedContent: [
      {
        heading: "Why Dammam Businesses Need a Specialist SEO Partner",
        paragraphs: [
          "The Eastern Province is unlike the rest of Saudi Arabia. Its economy is anchored by the energy sector and the industrial and logistics activity that surrounds it, which gives Dammam a heavier B2B and procurement character than a consumer-led market such as Jeddah. Search here is often about being the credible, findable supplier when a buyer researches a service, a component or a contractor, and that requires content and technical foundations built for considered, comparison-driven decisions.",
          "A specialist partner matters because the two levers that decide this market, Arabic-first search and AI citation, are exactly the two that generalist agencies handle poorly. Many competitors rank in English while missing the Arabic searches that drive a large share of local demand, and almost none have structured their content for the AI answers buyers increasingly rely on. SEODXB treats both as core, alongside the technical and local work that underpins them.",
        ],
      },
      {
        heading: "How We Approach SEO in Dammam",
        paragraphs: [
          "We begin with an audit of where you stand on Google and in AI answers, then fix technical and local foundations before building content and authority around your highest-intent topics. This sequence produces early wins, an optimised Google Business Profile and pages that answer real buyer questions, while the compounding work builds a durable advantage over time.",
          "Throughout, we measure against business outcomes rather than vanity metrics: rankings and AI citations for your priority terms, growth in qualified organic traffic, and the enquiries and calls that follow. Search in the Eastern Province rewards consistency, and a focused, bilingual, AI-aware programme is how a Dammam business builds visibility its competitors find hard to reverse.",
        ],
      },
    ],
  },

  // ── 3. Ecommerce SEO Qatar (Qatar) ────────────────────────────────────────
  {
    slug: "ecommerce-seo-qatar",
    keyword: "Ecommerce SEO Qatar",
    badge: "Ecommerce SEO Specialists for Qatar",
    title: "Ecommerce SEO Qatar | SEODXB - Rank Products, Grow Online Sales",
    metaDesc:
      "SEODXB provides ecommerce SEO for Qatar online stores: category and product optimisation, technical SEO and AI search visibility in Arabic and English.",
    h1: "Ecommerce SEO Qatar: Turn Product Searches Into Sales",
    intro:
      "Qatar has one of the region's most affluent, connected and mobile-first consumer bases, and online retail has moved from novelty to expectation. But a fast-loading store is not the same as a findable one. SEODXB helps Qatari online retailers rank their categories and products on Google, fix the technical issues that quietly cost sales, and get their catalogue surfaced by AI shopping assistants, in both Arabic and English, so more of Doha's high-intent buyers find you before they find a competitor.",
    svgVariant: "growth",
    imageUrl: img("photo-1556742049-0cfed4f6a45d"),
    featuresTitle: "What Our Qatar Ecommerce SEO Delivers",
    featuresSubtitle:
      "A programme built for online stores, where category pages, product data and site speed decide who wins the sale.",
    features: [
      { title: "Category & Collection Page SEO", desc: "We optimise the pages that carry most commercial intent, your categories and collections, with the right structure, copy and internal linking so they rank for how Qatari shoppers actually search." },
      { title: "Product Page Optimisation at Scale", desc: "Clean titles, unique descriptions, structured product data and image SEO across your catalogue, so individual products can rank and earn rich results rather than sitting invisible." },
      { title: "Technical Ecommerce SEO", desc: "We fix the issues that plague online stores: faceted-navigation crawl traps, duplicate and thin variants, slow mobile load, indexation bloat and broken canonicalisation." },
      { title: "Bilingual Arabic & English Store SEO", desc: "Proper Arabic optimisation and hreflang across a bilingual storefront, so you capture both Arabic and English product searches without duplicate-content problems." },
      { title: "Product Schema & Rich Results", desc: "Valid Product, Offer and Review structured data so eligible listings can show price, availability and ratings in search, lifting click-through on commercial queries." },
      { title: "AEO & GEO for Shopping Queries", desc: "We structure your catalogue and content so AI assistants can retrieve and recommend your products, an emerging channel most Qatari retailers have not yet optimised for." },
    ],
    stats: gccStats,
    faqTitle: "Ecommerce SEO Qatar - FAQs",
    faqs: [
      { q: "How is ecommerce SEO different from normal SEO?", a: "Ecommerce SEO focuses on the pages that drive sales, categories and products, and on technical problems specific to online stores such as faceted navigation, duplicate variants and indexation bloat. It also relies heavily on structured data so listings can earn rich results. The goal is qualified traffic that converts, not traffic for its own sake." },
      { q: "Do I need an Arabic version of my Qatar store?", a: "For most consumer-facing stores it is worth it. Qatar has a large Arabic-speaking audience alongside its expatriate communities, and a properly optimised bilingual store with correct hreflang captures searches an English-only site misses. The key is genuine Arabic optimisation and clean technical implementation, not a bolted-on translation." },
      { q: "Which ecommerce platforms does SEODXB work with?", a: "We work across the major platforms, including Shopify, WooCommerce and custom builds. The platform matters less than how it is configured; each has its own SEO strengths and pitfalls, and much of our work is fixing platform-specific issues around duplicate URLs, crawl efficiency and site speed." },
      { q: "How long does ecommerce SEO take in Qatar?", a: "Technical fixes and category improvements can lift visibility within a few months, while broader authority and competitive product terms build over longer. Because ecommerce SEO compounds across a whole catalogue, the gains tend to accumulate steadily as more pages become eligible to rank." },
      { q: "Can AI shopping assistants really send me sales?", a: "It is an emerging but real channel. As more buyers ask AI assistants for product recommendations, stores with clean structured data, clear content and consistent information are more likely to be surfaced. Most Qatari retailers have not optimised for this yet, which is exactly why early movers can gain an advantage." },
    ],
    ctaTitle: "Grow Your Qatar Online Store",
    ctaDesc:
      "Book a free ecommerce SEO audit. We'll review your category and product pages, find the technical issues costing you sales, and show you where the fastest organic growth is.",
    ctaButton: "Get a Free Ecommerce SEO Audit",
    areaServed: "Qatar",
    extendedContent: [
      {
        heading: "Why Ecommerce SEO Matters for Qatari Retailers",
        paragraphs: [
          "Qatar combines high purchasing power, near-universal smartphone use and a young, brand-aware population, which makes it a strong market for online retail. It is also increasingly competitive: regional and international stores compete for the same Doha shoppers, and paid advertising costs climb as more brands bid for attention. Organic search is the channel that keeps working after the ad budget is spent, and for a store with a broad catalogue it can become the single largest source of qualified, ready-to-buy traffic.",
          "The difficulty is that ecommerce SEO is technically demanding. Online stores generate huge numbers of URLs through filters, sorts and variants, and without careful control they waste crawl budget, dilute authority and bury the pages that should rank. Add a bilingual storefront and the complexity multiplies. This is where most Qatari retailers lose ground: the storefront looks good but the underlying structure quietly holds it back in search.",
        ],
      },
      {
        heading: "How SEODXB Approaches Ecommerce SEO in Qatar",
        paragraphs: [
          "We start with a technical audit of the store, mapping how it is crawled and indexed and finding the faceted-navigation traps, duplicate variants and speed problems that suppress rankings. In parallel we prioritise your highest-value categories and products, optimise them properly, and implement clean structured data so eligible listings can earn rich results. For bilingual stores we make sure Arabic and English versions are correctly separated with hreflang so neither cannibalises the other.",
          "From there the work compounds. As category and product pages become technically sound and well-optimised, more of them become eligible to rank, and a growing body of supporting content answers the questions buyers ask before purchase. We measure against commercial outcomes, organic revenue, qualified sessions and conversion, rather than vanity traffic, because for an online store the only metric that ultimately matters is sales.",
        ],
      },
    ],
  },

  // ── 4. SEO Services Manchester (United Kingdom) ───────────────────────────
  {
    slug: "seo-services-manchester",
    keyword: "SEO Services Manchester",
    badge: "SEO Services for Manchester Businesses",
    title: "SEO Services Manchester | SEODXB - SEO, AEO & GEO Specialists",
    metaDesc:
      "SEODXB provides SEO services for Manchester businesses: technical SEO, local rankings, content and AI search visibility. Free SEO audit, no lock-in contracts.",
    h1: "SEO Services in Manchester That Grow Organic Enquiries",
    intro:
      "Manchester is one of the UK's most competitive digital markets, home to a dense professional-services sector, a fast-growing tech and media scene around MediaCityUK and the Northern Quarter, and thousands of ambitious SMEs chasing the same customers. Standing out on Google here takes more than a tidy website. SEODXB provides SEO services for Manchester businesses that combine technical SEO, local visibility and content with AEO and GEO, so you rank on Google and get recommended by the AI assistants a growing share of buyers now use.",
    svgVariant: "serp",
    imageUrl: img("photo-1587918842454-b2b5f4f2c2b6"),
    featuresTitle: "What Our Manchester SEO Services Cover",
    featuresSubtitle:
      "A complete organic growth programme for Manchester businesses, from technical foundations to AI search visibility.",
    features: [
      { title: "Technical SEO Audits & Fixes", desc: "Deep audits of Core Web Vitals, crawlability, indexation, structured data and site architecture, fixing the issues that quietly cap your rankings before any content work pays off." },
      { title: "Manchester Local SEO", desc: "Google Business Profile optimisation and local signals to win the Map Pack across the city centre, Salford, Trafford, Didsbury and the wider Greater Manchester area." },
      { title: "Content That Ranks & Converts", desc: "Search-led content written for Google and AI answer engines, built to earn featured snippets, People Also Ask spots and qualified enquiries rather than vanity traffic." },
      { title: "Authority Link Building", desc: "Genuine, relevant links from UK publications, industry sites and local sources that build the domain authority Google rewards in a competitive market like Manchester." },
      { title: "AEO & GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini and Google AI Overviews cite you, a lead source most Manchester competitors have not yet addressed." },
      { title: "Transparent Reporting", desc: "Clear monthly reporting on rankings, organic traffic, AI visibility and enquiries, tied to business outcomes, with no long lock-in contracts." },
    ],
    stats: enStats,
    faqTitle: "SEO Services Manchester - FAQs",
    faqs: [
      { q: "How much do SEO services cost in Manchester?", a: "It varies with competition, the state of your site and how aggressively you want to grow. Rather than a fixed package, we scope the work to your goals and market after a free audit, so you pay for what will actually move rankings. We work without long lock-in contracts, so the results have to justify the investment each month." },
      { q: "How long does SEO take to work in Manchester?", a: "Manchester is competitive, so timelines depend on your starting point. Local and long-tail terms often improve within a few months, while competitive city-wide terms take longer. SEO compounds, so the value builds over time rather than arriving all at once, which is why consistency matters more than any single change." },
      { q: "Do you offer local SEO for Manchester businesses?", a: "Yes. For businesses serving a local catchment, local SEO is usually the highest-return activity. We optimise your Google Business Profile, fix inconsistent listings and build a review process so you compete for the Map Pack across the city centre and the surrounding Greater Manchester districts." },
      { q: "What is AEO and GEO, and why do they matter in Manchester?", a: "AEO (answer engine optimisation) and GEO (generative engine optimisation) are about being found and cited in AI answers from tools like ChatGPT, Gemini and Google AI Overviews, not just in the blue links. As more Manchester buyers research this way, being retrievable by AI is becoming a real competitive advantage, and most local competitors have not adapted yet." },
      { q: "Do you work with businesses outside Manchester?", a: "Yes. SEODXB works with businesses across Manchester, the North West and the wider UK, as well as internationally. Our approach combines technical SEO, content, local visibility and AI search optimisation, and we start every engagement with a free audit of where you stand." },
    ],
    ctaTitle: "Grow Your Manchester Business in Search",
    ctaDesc:
      "Book a free SEO audit. We'll review your Google and AI search visibility, benchmark your Manchester competitors, and show you the fastest path to more qualified enquiries.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Manchester, United Kingdom",
    extendedContent: [
      {
        heading: "Why SEO Is Competitive in Manchester",
        paragraphs: [
          "Manchester punches above its weight digitally. It has one of the largest tech and media clusters outside London, a deep professional-services base in law, finance and property, and a thriving SME and startup scene. That concentration of ambitious businesses means many of them invest in SEO, so ranking for valuable city-wide terms is genuinely hard and rewards a rigorous, technically sound approach rather than surface-level tactics.",
          "It also means the fundamentals decide who wins. In a competitive market, a fast, well-structured, authoritative site that answers real buyer questions will out-rank a prettier one that neglects the basics. The businesses that succeed are those that fix their technical foundations, earn genuine authority, and increasingly make themselves retrievable by AI answer engines while their competitors are still focused only on the blue links.",
        ],
      },
      {
        heading: "How SEODXB Delivers SEO Services in Manchester",
        paragraphs: [
          "We begin with a free audit that benchmarks you against the competitors already ranking for your terms and identifies the technical and content gaps holding you back. We then fix foundations first, site speed, crawlability, indexation and structured data, before building the content and authority that lift rankings, and we add the answer-first structure that helps AI engines cite you.",
          "We report against outcomes that matter to your business: rankings for your priority terms, growth in qualified organic traffic, AI visibility and, above all, enquiries. Because we work without long lock-in contracts, the programme has to keep earning its place, which keeps the focus firmly on results rather than activity.",
        ],
      },
    ],
  },

  // ── 5. SEO Services Dublin (Ireland) ──────────────────────────────────────
  {
    slug: "seo-services-dublin",
    keyword: "SEO Services Dublin",
    badge: "SEO Services for Dublin Businesses",
    title: "SEO Services Dublin | SEODXB - SEO, AEO & GEO Specialists",
    metaDesc:
      "SEODXB provides SEO services for Dublin businesses: technical SEO, local rankings, content and AI search visibility. Free SEO audit, no lock-in contracts.",
    h1: "SEO Services in Dublin That Grow Organic Enquiries",
    intro:
      "Dublin is the commercial engine of Ireland and one of Europe's most concentrated hubs for technology, finance and professional services, with the European headquarters of major global firms sitting alongside a large base of ambitious local SMEs. That makes search both valuable and demanding. SEODXB provides SEO services for Dublin businesses that combine technical SEO, local visibility and content with AEO and GEO, so you rank on Google and get recommended by the AI assistants a growing share of Irish buyers now rely on.",
    svgVariant: "growth",
    imageUrl: img("photo-1549918864-48ac978761a4"),
    featuresTitle: "What Our Dublin SEO Services Cover",
    featuresSubtitle:
      "A complete organic growth programme for Dublin businesses, from technical foundations to AI search visibility.",
    features: [
      { title: "Technical SEO Audits & Fixes", desc: "Deep audits of Core Web Vitals, crawlability, indexation, structured data and site architecture, resolving the issues that cap rankings before content work can pay off." },
      { title: "Dublin Local SEO", desc: "Google Business Profile optimisation and local signals to win the Map Pack across the city centre, the docklands, Sandyford, Dun Laoghaire and the wider Dublin area." },
      { title: "Content That Ranks & Converts", desc: "Search-led content written for Google and AI answer engines, built to earn featured snippets, People Also Ask spots and qualified enquiries rather than vanity traffic." },
      { title: "Authority Link Building", desc: "Genuine, relevant links from Irish publications, industry sites and local sources that build the domain authority Google rewards in a competitive market like Dublin." },
      { title: "AEO & GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini and Google AI Overviews cite you, a lead source most Dublin competitors have not yet addressed." },
      { title: "Transparent Reporting", desc: "Clear monthly reporting on rankings, organic traffic, AI visibility and enquiries, tied to business outcomes, with no long lock-in contracts." },
    ],
    stats: enStats,
    faqTitle: "SEO Services Dublin - FAQs",
    faqs: [
      { q: "How much do SEO services cost in Dublin?", a: "It depends on your market's competitiveness, the state of your site and your growth goals. Instead of a fixed package, we scope the work after a free audit so you invest in what will actually move rankings. We work without long lock-in contracts, so the programme has to justify itself on results each month." },
      { q: "How long does SEO take to work in Dublin?", a: "Dublin is competitive, particularly in tech, finance and professional services, so timelines depend on your starting point. Local and long-tail terms often improve within a few months, while competitive terms take longer. SEO compounds over time, so consistency matters more than any single change." },
      { q: "Do you offer local SEO for Dublin businesses?", a: "Yes. For businesses serving a local catchment, local SEO is usually the highest-return activity. We optimise your Google Business Profile, correct inconsistent listings and build a review process so you compete for the Map Pack across Dublin city and the surrounding areas." },
      { q: "What is AEO and GEO, and why do they matter in Dublin?", a: "AEO (answer engine optimisation) and GEO (generative engine optimisation) are about being found and cited in AI answers from tools like ChatGPT, Gemini and Google AI Overviews, not only in the traditional links. As more Irish buyers research this way, being retrievable by AI is becoming a genuine advantage, and most Dublin competitors have not adapted yet." },
      { q: "Do you work with businesses outside Dublin?", a: "Yes. SEODXB works with businesses across Dublin and the wider Republic of Ireland, as well as internationally. Our approach combines technical SEO, content, local visibility and AI search optimisation, and we start every engagement with a free audit of where you stand." },
    ],
    ctaTitle: "Grow Your Dublin Business in Search",
    ctaDesc:
      "Book a free SEO audit. We'll review your Google and AI search visibility, benchmark your Dublin competitors, and show you the fastest path to more qualified enquiries.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Dublin, Ireland",
    extendedContent: [
      {
        heading: "Why SEO Matters for Dublin Businesses",
        paragraphs: [
          "Dublin concentrates a remarkable amount of economic activity into a small area. It hosts the European operations of many of the world's largest technology and financial firms, a deep professional-services sector, and a dense population of SMEs competing for local and national customers. That mix makes organic search both high-value and demanding: the audience is sophisticated and mobile-first, and competitors in valuable categories are often well-resourced.",
          "For local and service businesses, the opportunity is that many competitors still treat SEO superficially. A Dublin business that fixes its technical foundations, earns genuine authority, keeps its local listings accurate and structures content so AI engines can cite it can build visibility that is hard to displace. The fundamentals, done consistently, still decide who ranks in a market this competitive.",
        ],
      },
      {
        heading: "How SEODXB Delivers SEO Services in Dublin",
        paragraphs: [
          "We start with a free audit that benchmarks you against the competitors already ranking for your terms and identifies the technical and content gaps holding you back. We fix foundations first, site speed, crawlability, indexation and structured data, then build the content and authority that lift rankings, and we add the answer-first structure that helps AI engines cite you across both traditional and AI search.",
          "We measure against outcomes that matter to your business: rankings for your priority terms, growth in qualified organic traffic, AI visibility and, above all, enquiries. Because we work without long lock-in contracts, the programme has to keep proving its value, which keeps the focus on results rather than activity.",
        ],
      },
    ],
  },
];
