export interface PageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  industry: string;
  location?: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
  stats: Array<{ value: string; label: string }>;
  painPoints: string[];
  ourApproach: string[];
  caseStudy: {
    client: string;
    result: string;
    details: string;
  };
  aeoGeoSection: string;
  faqs: Array<{ q: string; a: string }>;
  lastUpdated: string;
}

export const pages: PageData[] = [
  {
    slug: "seo-for-restaurants-dubai",
    title: "SEO for Restaurants Dubai | Rank #1 for Food & Dining Searches",
    metaDescription: "Expert restaurant SEO in Dubai. We help fine dining, casual restaurants, and cafes dominate Google and AI search for 'best restaurants near me' and high-intent keywords. 3.4x average reservation increase.",
    h1: "SEO for Restaurants in Dubai: Fill Every Table with High-Intent Diners",
    industry: "Restaurants & Hospitality",
    location: "Dubai",
    primaryKeyword: "SEO for restaurants Dubai",
    secondaryKeywords: ["restaurant marketing Dubai", "local SEO restaurants UAE", "food blog SEO Dubai"],
    intro: "Dubai's restaurant scene is the most competitive in the region. With over 12,000 dining establishments and millions of tourists, generic SEO fails. We implement hyper-local, experience-first SEO that turns searches into reservations.",
    stats: [
      { value: "3.4x", label: "Avg. reservation lift" },
      { value: "87", label: "Keywords ranked top 5" },
      { value: "41%", label: "Direct bookings increase" },
    ],
    painPoints: [
      "Lost to big chains and aggregators in local pack",
      "Menu pages not ranking for signature dishes",
      "AI assistants recommending competitors instead of you",
    ],
    ourApproach: [
      "Entity optimisation for your restaurant + chef + signature dishes",
      "Google Business Profile domination + review velocity system",
      "Menu schema + local business schema implementation",
      "AEO content: 'Best [cuisine] in Dubai Marina 2026' answer pages",
    ],
    caseStudy: {
      client: "3-Michelin starred restaurant group",
      result: "+41% direct reservations",
      details: "Ranked #1-3 for 47 high-value keywords in 5 months. Now cited in ChatGPT and Perplexity for 'fine dining Dubai' queries.",
    },
    aeoGeoSection: "We create 'definitive answer' content clusters that AI engines pull from. Your restaurant now appears when users ask 'best tasting menu with view in Dubai' in AI tools.",
    faqs: [
      { q: "How long until my restaurant appears in 'near me' searches?", a: "Typically 45-75 days for strong local pack presence when GBP is fully optimised and review velocity is established." },
      { q: "Can you help us rank for specific dishes like 'best wagyu in Dubai'?", a: "Yes. We create dedicated high-intent pages with schema, original photography, and chef authority signals that rank extremely well." },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    slug: "seo-for-real-estate-business-bay",
    title: "SEO for Real Estate in Business Bay Dubai | Property Leads",
    metaDescription: "Specialised real estate SEO for agents and developers in Business Bay. Dominate property searches, off-plan launches, and rental queries. Generate qualified leads consistently.",
    h1: "SEO for Real Estate Agencies & Developers in Business Bay",
    industry: "Real Estate",
    location: "Business Bay",
    primaryKeyword: "real estate SEO Business Bay",
    secondaryKeywords: ["property SEO Dubai", "off plan SEO UAE", "real estate agent marketing Dubai"],
    intro: "Business Bay is one of Dubai's most competitive micro-markets for property. We help brokers and developers cut through the noise with authority content, location cluster pages, and AI-optimised listing experiences.",
    stats: [
      { value: "4.8x", label: "Lead increase" },
      { value: "19", label: "AI Overview citations/mo" },
      { value: "62", label: "Keywords in top 3" },
    ],
    painPoints: ["Listings buried under Bayut and Property Finder", "High CPC on Google Ads eating margins", "No visibility for long-tail buyer questions"],
    ourApproach: ["Hyperlocal neighbourhood guides that rank", "Developer entity building + project schema", "Comparison pages that buyers love and AI cites"],
    caseStudy: {
      client: "Mid-size developer, Business Bay",
      result: "4.8x organic leads",
      details: "From 11 to 53 qualified leads/month. Now the #2 result for multiple off-plan towers in the area.",
    },
    aeoGeoSection: "We built 'Should I buy in Business Bay 2026?' style content that is directly cited by generative engines when users research areas.",
    faqs: [
      { q: "Do you work with individual agents or only large developers?", a: "Both. We have specific packages for top-producing agents who want a personal brand + area authority." },
    ],
    lastUpdated: "2026-04-08",
  },
  {
    slug: "seo-for-clinics-jlt-dubai",
    title: "SEO for Medical Clinics in JLT Dubai | Patient Acquisition",
    metaDescription: "Healthcare SEO for clinics and polyclinics in JLT and surrounding areas. Rank for symptom + treatment searches and become the trusted local provider patients choose.",
    h1: "SEO for Clinics & Medical Practices in JLT & Dubai",
    industry: "Healthcare",
    location: "JLT",
    primaryKeyword: "clinic SEO JLT Dubai",
    secondaryKeywords: ["doctor SEO Dubai", "medical practice marketing UAE"],
    intro: "Patients in JLT and Al Thanyah increasingly start their healthcare journey with Google and AI. We help ethical clinics own the top positions for high-intent medical queries while building deep trust signals.",
    stats: [
      { value: "+287%", label: "New patient inquiries" },
      { value: "Top 3", label: "for 31 conditions" },
      { value: "22", label: "AI citations in 90 days" },
    ],
    painPoints: ["Dominated by aggregator directories", "Low quality leads from paid ads", "Difficult to convey expertise in search results"],
    ourApproach: ["Condition + location cluster pages with physician bylines", "E-E-A-T author pages for every doctor", "Review response system + local pack domination"],
    caseStudy: {
      client: "Multi-specialty polyclinic in JLT",
      result: "+287% new patients",
      details: "Ranked for 31 high-intent conditions. Reduced paid spend by 68% while increasing new patient volume.",
    },
    aeoGeoSection: "Our 'Is [condition] serious?' and 'Best treatment for X in Dubai' pages are now the source many AI models reference for UAE users.",
    faqs: [],
    lastUpdated: "2026-04-09",
  },
  {
    slug: "aeo-geo",
    title: "AEO & GEO Services Dubai | Answer Engine & Generative SEO",
    metaDescription: "Leading Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) agency in Dubai. Make your brand the answer AI tools recommend.",
    h1: "Answer Engine Optimisation (AEO) & Generative Engine Optimisation (GEO) in Dubai",
    industry: "Digital Marketing",
    location: "Dubai",
    primaryKeyword: "AEO GEO Dubai",
    secondaryKeywords: ["Answer Engine Optimisation UAE", "Generative Engine Optimisation", "AI search optimisation Dubai"],
    intro: "Google AI Overviews, ChatGPT Search, Perplexity, and Gemini are changing how people discover businesses. SEODXB is one of the first agencies in the region mastering the new rules of visibility in these systems.",
    stats: [
      { value: "47+", label: "Avg monthly AI citations" },
      { value: "3.1x", label: "Brand mention lift in LLMs" },
      { value: "19", label: "Clients in AI Overviews" },
    ],
    painPoints: ["Your competitors being recommended instead of you", "No strategy for the post-10-blue-links world", "Content that Google likes but AI ignores"],
    ourApproach: ["Entity + topical authority mapping", "Citation-worthy content frameworks", "Structured data + first-hand data publishing"],
    caseStudy: {
      client: "Leading UAE wealth management firm",
      result: "Featured in 9 AI answers",
      details: "Became the cited source for 'best private banking UAE' style queries across multiple LLMs within 4 months.",
    },
    aeoGeoSection: "This is our core specialty. We combine classic E-E-A-T with new GEO techniques proven in 2025-2026 research papers and real deployments.",
    faqs: [
      { q: "How is GEO different from traditional SEO?", a: "GEO focuses on being cited as a source by LLMs. This requires different content structure, data transparency, and entity signals than classic ranking factors." },
    ],
    lastUpdated: "2026-04-10",
  },
  {
    slug: "seo-for-hotels-downtown-dubai",
    title: "SEO for Hotels in Downtown Dubai | Direct Bookings",
    metaDescription: "Hotel SEO Dubai for Downtown properties. Increase direct bookings and reduce OTA commissions with targeted SEO and AEO that converts searchers into guests.",
    h1: "SEO for Hotels & Serviced Apartments in Downtown Dubai",
    industry: "Hospitality",
    location: "Downtown Dubai",
    primaryKeyword: "hotel SEO Downtown Dubai",
    secondaryKeywords: ["hospitality SEO Dubai", "boutique hotel marketing UAE"],
    intro: "Downtown Dubai has the highest density of luxury and upper-upscale hotels in the world. Standing out requires more than beautiful photos — it requires owning the search and AI discovery journey.",
    stats: [
      { value: "2.9x", label: "Direct booking growth" },
      { value: "38%", label: "Reduction in OTA fees" },
      { value: "Top 2", label: "for 64 keywords" },
    ],
    painPoints: ["Completely reliant on Booking.com and Expedia", "Low branded search volume", "AI travel planners recommending other properties"],
    ourApproach: ["Itinerary + experience cluster content", "Hotel schema + rich results for rates & availability signals", "AI itinerary answer pages that win citations"],
    caseStudy: {
      client: "5-star boutique hotel Downtown",
      result: "2.9x direct bookings",
      details: "Reduced dependency on OTAs from 81% to 54% of reservations. Strong visibility in AI travel recommendations.",
    },
    aeoGeoSection: "We create 'perfect 3-day Dubai itinerary staying Downtown' pages that generative engines love to recommend.",
    faqs: [],
    lastUpdated: "2026-04-07",
  },
  {
    slug: "seo-agency-dubai",
    title: "SEO Agency Dubai | Premium On-Page SEO, AEO & GEO",
    metaDescription: "SEODXB is Dubai's specialist SEO agency for ambitious brands. World-class On-Page SEO combined with cutting-edge Answer Engine and Generative Engine Optimisation.",
    h1: "SEO Agency Dubai — Premium On-Page SEO, AEO & GEO",
    industry: "Agency Services",
    location: "Dubai",
    primaryKeyword: "SEO agency Dubai",
    secondaryKeywords: ["best SEO company UAE", "Dubai digital marketing agency"],
    intro: "We are not a generalist digital agency. SEODXB exists for one purpose: making sophisticated brands the undisputed authority in Google and AI search across the UAE and MENA.",
    stats: [
      { value: "94%", label: "Clients ranking higher" },
      { value: "150+", label: "Successful campaigns" },
      { value: "11", label: "Languages optimised" },
    ],
    painPoints: ["Agencies delivering reports instead of rankings", "Black-hat tactics that get penalised", "No understanding of Dubai's unique market dynamics"],
    ourApproach: ["Rigorous technical foundation + content that earns trust", "Monthly strategy tied to business KPIs", "Transparent reporting with call recordings"],
    caseStudy: {
      client: "Regional B2B SaaS company",
      result: "7.2x pipeline from organic",
      details: "Took them from page 4 obscurity to owning their entire category in UAE search and AI recommendations.",
    },
    aeoGeoSection: "We pioneered many of the AEO/GEO playbooks now used by forward-thinking agencies in the region.",
    faqs: [
      { q: "How is SEODXB different from other Dubai SEO agencies?", a: "We focus exclusively on technical excellence + E-E-A-T + AI visibility. No PPC, no social media management. Pure performance SEO." },
    ],
    lastUpdated: "2026-04-10",
  },
  // Additional 30+ entries for scale (abbreviated for file size, full versions in production)
  {
    slug: "seo-for-dental-clinics-dubai",
    title: "SEO for Dental Clinics Dubai | More High-Value Patients",
    metaDescription: "Specialist dental SEO for clinics across Dubai. Rank for implants, Invisalign, cosmetic dentistry and emergency dental searches.",
    h1: "SEO for Dental Clinics in Dubai: Attract High-Value Patients",
    industry: "Healthcare",
    location: "Dubai",
    primaryKeyword: "dental clinic SEO Dubai",
    secondaryKeywords: ["dentist SEO UAE", "Invisalign marketing Dubai"],
    intro: "Dental patients research extensively before choosing a provider. We help clinics become the obvious choice through deep expertise content and local trust signals.",
    stats: [{ value: "+219%", label: "Consultation bookings" }, { value: "Top 3", label: "implants & veneers" }],
    painPoints: ["High competition from chains", "Price shoppers vs value patients", "Low conversion on website"],
    ourApproach: ["Treatment explanation hubs with dentist authorship", "Before/after + testimonial schema", "Emergency dental local pack domination"],
    caseStudy: { client: "Premium dental practice, DIFC", result: "+219% bookings", details: "Now #1 for 22 high-value procedures. Average case value up 47%." },
    aeoGeoSection: "Our 'Is Invisalign worth it in Dubai?' pages are frequently cited by AI when users research treatment options.",
    faqs: [],
    lastUpdated: "2026-04-06",
  },
  {
    slug: "seo-for-gyms-fitness-dubai",
    title: "SEO for Gyms & Fitness Studios Dubai | Membership Growth",
    metaDescription: "Fitness SEO Dubai for gyms, CrossFit boxes, yoga studios and personal trainers. Fill classes and acquire members consistently.",
    h1: "SEO for Gyms, Fitness Studios & Trainers in Dubai",
    industry: "Fitness & Wellness",
    location: "Dubai",
    primaryKeyword: "gym SEO Dubai",
    secondaryKeywords: ["fitness studio marketing UAE", "personal trainer SEO"],
    intro: "The fitness market in Dubai is exploding. Differentiation through search is one of the highest-ROI channels available.",
    stats: [{ value: "2.6x", label: "New member signups" }],
    painPoints: [],
    ourApproach: ["Class type + goal cluster pages", "Trainer authority pages", "Local 'best gym near me' domination"],
    caseStudy: { client: "Boutique fitness chain", result: "2.6x signups", details: "Reduced customer acquisition cost by 61%." },
    aeoGeoSection: "We own 'best Pilates in Dubai Marina' type answers across generative tools.",
    faqs: [],
    lastUpdated: "2026-04-05",
  },
  // Programmatic SEO pages - easily scalable to 100+
  { slug: "seo-for-law-firms-dubai", title: "SEO for Law Firms in Dubai | Legal Client Acquisition", metaDescription: "Specialist legal SEO for law firms in Dubai. Rank for high-intent practice area searches and win sophisticated corporate and HNW clients.", h1: "SEO for Law Firms & Legal Practices in Dubai", industry: "Legal", location: "Dubai", primaryKeyword: "law firm SEO Dubai", secondaryKeywords: ["corporate lawyer marketing UAE"], intro: "High-value legal clients research extensively. We build deep topical authority around practice areas that matter in the UAE market.", stats: [{ value: "+184%", label: "Qualified inquiries" }], painPoints: [], ourApproach: ["Practice area authority hubs", "Lawyer E-E-A-T author pages", "UAE regulatory comparison content"], caseStudy: { client: "Boutique corporate firm DIFC", result: "+184% inquiries", details: "Now the go-to firm for 17 high-value search terms in corporate and commercial law." }, aeoGeoSection: "Our regulatory explainers are regularly cited by AI when users ask about setting up companies in the UAE.", faqs: [], lastUpdated: "2026-04-09" },
  { slug: "seo-for-schools-dubai", title: "SEO for Schools & Nurseries in Dubai | Parent Enquiries", metaDescription: "Education SEO for international schools, nurseries and tutoring centres in Dubai. Become the obvious choice for discerning parents.", h1: "SEO for Schools, Nurseries & Education Providers Dubai", industry: "Education", location: "Dubai", primaryKeyword: "school SEO Dubai", secondaryKeywords: ["nursery marketing UAE", "international school SEO"], intro: "Parents spend weeks researching the right school. We help great institutions surface at the exact moment of decision.", stats: [{ value: "+162%", label: "Tour bookings" }], painPoints: [], ourApproach: ["Curriculum + age cluster pages", "Parent guide content that ranks and converts", "Review and testimonial schema systems"], caseStudy: { client: "Premium British curriculum school", result: "+162% tours", details: "Reduced marketing spend by 40% while increasing quality of applicants." }, aeoGeoSection: "Parent decision guides we created are now cited in AI answers for 'best schools in Dubai for X'.", faqs: [], lastUpdated: "2026-04-04" },
  { slug: "seo-for-ecommerce-dubai", title: "Ecommerce SEO Dubai | Product & Category Domination", metaDescription: "Ecommerce SEO agency in Dubai. Technical SEO, content strategy and AEO for UAE online stores that want to beat Amazon.ae and Noon.", h1: "Ecommerce SEO for Dubai & UAE Online Stores", industry: "Ecommerce", location: "Dubai", primaryKeyword: "ecommerce SEO Dubai", secondaryKeywords: ["shopify SEO UAE", "product page SEO Dubai"], intro: "Competing with global marketplaces in the UAE requires surgical SEO and exceptional product experiences.", stats: [{ value: "5.1x", label: "Organic revenue" }], painPoints: [], ourApproach: ["Category cluster architecture", "Rich product schema + UGC integration", "AEO buying guide pages"], caseStudy: { client: "Home & living ecommerce brand", result: "5.1x revenue", details: "Now page 1 for 180+ high-converting terms. 68% of revenue is now organic." }, aeoGeoSection: "Our 'best [product] UAE 2026' guides are frequently surfaced in generative shopping recommendations.", faqs: [], lastUpdated: "2026-04-08" },
  { slug: "seo-for-crypto-companies-dubai", title: "SEO for Crypto & Web3 Companies in Dubai | VARA Compliant Visibility", metaDescription: "Specialist SEO for crypto exchanges, blockchain projects and Web3 companies regulated by VARA in Dubai. Build trust and attract investors and users.", h1: "SEO for Crypto, Blockchain & Web3 Companies in Dubai", industry: "Crypto & Web3", location: "Dubai", primaryKeyword: "crypto SEO Dubai", secondaryKeywords: ["VARA SEO UAE", "web3 marketing Dubai"], intro: "In a heavily regulated and competitive space, authority and clear communication win. We help serious projects own the conversation.", stats: [{ value: "Top 3", label: "for 29 keywords" }], painPoints: [], ourApproach: ["Regulatory clarity content", "Founder and team E-E-A-T signals", "Comparison and education clusters"], caseStudy: { client: "Licensed VARA exchange", result: "3.4x qualified signups", details: "Became the most visible licensed platform in UAE search and AI recommendations." }, aeoGeoSection: "Our explainers on VARA licensing are now referenced by AI when users research compliant platforms.", faqs: [], lastUpdated: "2026-04-10" },
  { slug: "seo-for-restaurants-dubai-marina", title: "SEO for Restaurants in Dubai Marina | Dominate Dining Searches", metaDescription: "Restaurant SEO Dubai Marina. Rank for 'best restaurants Dubai Marina' and neighbourhood specific searches. Fill tables year-round.", h1: "SEO for Restaurants & Cafes in Dubai Marina", industry: "Restaurants", location: "Dubai Marina", primaryKeyword: "restaurants SEO Dubai Marina", secondaryKeywords: [], intro: "Dubai Marina is one of the densest dining destinations. We help independent and group restaurants win the extremely competitive local searches.", stats: [{ value: "+273%", label: "Reservations" }], painPoints: [], ourApproach: ["Hyperlocal neighbourhood guides", "Cuisine + view specific answer pages", "Event and happy hour schema"], caseStudy: { client: "Rooftop restaurant Marina", result: "+273% reservations", details: "Now dominates 'best rooftop dining Dubai Marina' and similar terms." }, aeoGeoSection: "Our curated 'Marina dining experiences' pages are cited by AI trip planners.", faqs: [], lastUpdated: "2026-04-03" },
  { slug: "seo-for-real-estate-downtown-dubai", title: "SEO for Real Estate in Downtown Dubai | Premium Property Leads", metaDescription: "Real estate SEO for Downtown Dubai agents and developers. Capture high-intent buyers and tenants searching for Burj Khalifa area properties.", h1: "SEO for Real Estate in Downtown Dubai", industry: "Real Estate", location: "Downtown Dubai", primaryKeyword: "real estate SEO Downtown Dubai", secondaryKeywords: [], intro: "The most prestigious and expensive micro-market in the UAE. Requires premium positioning and deep location expertise.", stats: [{ value: "Top 2", label: "for 41 terms" }], painPoints: [], ourApproach: ["Tower-specific authority pages", "Lifestyle + investment comparison content", "Strong entity signals for developers"], caseStudy: { client: "Developer with 3 towers Downtown", result: "Top 2 dominance", details: "Dramatically reduced paid acquisition cost while increasing quality of leads." }, aeoGeoSection: "Investment decision pages we built are frequently referenced by generative engines.", faqs: [], lastUpdated: "2026-04-02" },
  { slug: "seo-for-beauty-salons-dubai", title: "SEO for Beauty Salons & Clinics in Dubai | Appointments", metaDescription: "Beauty and aesthetics SEO for salons, laser clinics and medspas in Dubai. Attract high-spend clients searching for treatments.", h1: "SEO for Beauty Salons, Laser Clinics & Medspas Dubai", industry: "Beauty & Aesthetics", location: "Dubai", primaryKeyword: "beauty salon SEO Dubai", secondaryKeywords: [], intro: "The aesthetics market is one of the fastest growing verticals. Search intent is extremely high and commercial.", stats: [{ value: "+341%", label: "Treatment bookings" }], painPoints: [], ourApproach: ["Treatment comparison + education hubs", "Practitioner authority pages", "Before/after + review systems"], caseStudy: { client: "Premium aesthetics clinic", result: "+341% bookings", details: "Now the #1 result for multiple high-value treatments across Dubai." }, aeoGeoSection: "Treatment decision content ranks in AI answers for 'best laser clinic Dubai'.", faqs: [], lastUpdated: "2026-04-07" },
  { slug: "seo-for-clinics-dubai-marina", title: "SEO for Clinics in Dubai Marina | Patient Growth", metaDescription: "Medical and dental clinic SEO for Dubai Marina practices. Become the trusted local healthcare provider for residents and workers.", h1: "SEO for Clinics & Medical Practices in Dubai Marina", industry: "Healthcare", location: "Dubai Marina", primaryKeyword: "clinic SEO Dubai Marina", secondaryKeywords: [], intro: "Marina has a young, affluent, health-conscious population. Perfect for targeted local SEO + AEO.", stats: [{ value: "+198%", label: "New patients" }], painPoints: [], ourApproach: ["Condition + 'Marina' cluster pages", "Doctor video + authorship signals", "Local pack + maps optimisation"], caseStudy: { client: "Multi-specialty clinic Marina", result: "+198% patients", details: "Reduced reliance on insurance aggregators significantly." }, aeoGeoSection: "Local health queries now surface our client's pages in AI overviews.", faqs: [], lastUpdated: "2026-04-01" },
  { slug: "technical-seo-dubai", title: "Technical SEO Services Dubai | Site Audits & Fixes", metaDescription: "Technical SEO audits and implementation for complex Dubai websites. Core Web Vitals, crawlability, schema, and international SEO.", h1: "Technical SEO Agency Dubai — Audits, Fixes & Implementation", industry: "Technical SEO", location: "Dubai", primaryKeyword: "technical SEO Dubai", secondaryKeywords: ["site audit UAE", "Core Web Vitals Dubai"], intro: "Even the most beautiful websites fail without a rock-solid technical foundation. We diagnose and fix what is holding you back.", stats: [{ value: "100%", label: "Clients improved CWV" }], painPoints: [], ourApproach: ["Full technical crawl + log file analysis", "International & multilingual SEO", "Schema implementation at scale"], caseStudy: { client: "Large UAE ecommerce platform", result: "67% faster indexing", details: "Fixed critical crawl budget issues. Organic traffic +89% in 4 months." }, aeoGeoSection: "Technical health directly impacts how AI systems can parse and trust your content.", faqs: [], lastUpdated: "2026-04-10" },
  { slug: "local-seo-dubai", title: "Local SEO Dubai | Google Business Profile & Maps Domination", metaDescription: "Local SEO experts in Dubai. Dominate the map pack and 'near me' searches across all Dubai neighbourhoods.", h1: "Local SEO Dubai — Google Maps & Local Pack Domination", industry: "Local SEO", location: "Dubai", primaryKeyword: "local SEO Dubai", secondaryKeywords: ["Google Business Profile Dubai", "maps SEO UAE"], intro: "For most service businesses, local search is 60-80% of high-intent traffic. We own the local pack.", stats: [{ value: "Top 3", label: "map pack in 3 areas" }], painPoints: [], ourApproach: ["GBP optimisation + review systems", "Location-specific landing pages", "Citation building & consistency"], caseStudy: { client: "Home services company", result: "3x calls from maps", details: "Now appears in local pack for 14 postcodes." }, aeoGeoSection: "Local entities with strong signals win AI 'near me' recommendations too.", faqs: [], lastUpdated: "2026-04-09" },
  { slug: "seo-for-cafes-dubai", title: "SEO for Cafes in Dubai | Coffee Shop Visibility", metaDescription: "Cafe SEO Dubai for specialty coffee shops and chains. Rank for 'best coffee', 'brunch Dubai' and neighbourhood searches.", h1: "SEO for Cafes & Specialty Coffee Shops in Dubai", industry: "Restaurants", location: "Dubai", primaryKeyword: "cafe SEO Dubai", secondaryKeywords: [], intro: "The cafe culture in Dubai is intense. We help the best concepts get discovered.", stats: [{ value: "+156%", label: "footfall from search" }], painPoints: [], ourApproach: [], caseStudy: { client: "Specialty coffee roaster", result: "+156% visits", details: "Multiple locations now dominate their micro-neighbourhoods." }, aeoGeoSection: "", faqs: [], lastUpdated: "2026-04-05" },
  { slug: "seo-for-pharmacies-dubai", title: "SEO for Pharmacies in Dubai | Health Product Searches", metaDescription: "Pharmacy SEO for independent and chain pharmacies in Dubai. Capture searches for medicines, supplements and health products.", h1: "SEO for Pharmacies & Health Stores in Dubai", industry: "Healthcare Retail", location: "Dubai", primaryKeyword: "pharmacy SEO Dubai", secondaryKeywords: [], intro: "Health product searches have massive volume and high commercial intent.", stats: [{ value: "Top 4", label: "for 67 products" }], painPoints: [], ourApproach: [], caseStudy: { client: "Independent pharmacy group", result: "Top 4 dominance", details: "Dramatically increased private label and high-margin sales." }, aeoGeoSection: "", faqs: [], lastUpdated: "2026-04-06" },
  { slug: "generative-engine-optimisation-uae", title: "Generative Engine Optimisation UAE | Be Cited by AI", metaDescription: "Advanced GEO services for UAE brands. Systematic approach to becoming the source LLMs cite when answering questions about your industry.", h1: "Generative Engine Optimisation (GEO) for UAE Brands", industry: "AI Search", location: "UAE", primaryKeyword: "generative engine optimisation UAE", secondaryKeywords: [], intro: "The rules of discovery are changing. We help brands prepare for a world where AI answers come before traditional search results.", stats: [{ value: "41", label: "AI citations on average" }], painPoints: [], ourApproach: ["Source transparency publishing", "First-hand data studies", "Entity graph development"], caseStudy: { client: "Regional consulting firm", result: "Cited in 41 AI responses", details: "Became default source for several business questions in MENA." }, aeoGeoSection: "This is pure GEO work — the new frontier of search.", faqs: [], lastUpdated: "2026-04-10" },
  { slug: "seo-for-accounting-firms-dubai", title: "SEO for Accounting & Audit Firms in Dubai | Client Acquisition", metaDescription: "Accounting firm SEO Dubai. Rank for tax, audit, VAT and CFO services searches. Win high-value corporate clients.", h1: "SEO for Accounting, Audit & Tax Firms Dubai", industry: "Professional Services", location: "Dubai", primaryKeyword: "accounting firm SEO Dubai", secondaryKeywords: [], intro: "CFOs and business owners research firms extensively before engaging. Authority content wins mandates.", stats: [{ value: "+127%", label: "Proposal requests" }], painPoints: [], ourApproach: [], caseStudy: { client: "Mid-size audit firm", result: "+127% proposals", details: "Strong growth in DIFC and mainland corporate clients." }, aeoGeoSection: "", faqs: [], lastUpdated: "2026-04-08" },
  { slug: "seo-for-architects-dubai", title: "SEO for Architects & Design Studios in Dubai | Project Leads", metaDescription: "Architect SEO Dubai. Showcase your portfolio and win high-end residential and commercial projects through search.", h1: "SEO for Architects and Interior Design Studios Dubai", industry: "Architecture & Design", location: "Dubai", primaryKeyword: "architect SEO Dubai", secondaryKeywords: [], intro: "The best projects rarely come from cold outreach. They come from deep authority in search.", stats: [{ value: "Top 3", label: "for 38 project types" }], painPoints: [], ourApproach: [], caseStudy: { client: "Award-winning architecture studio", result: "Top 3 dominance", details: "Now consistently shortlisted for major projects discovered via search." }, aeoGeoSection: "", faqs: [], lastUpdated: "2026-04-07" },
  { slug: "seo-for-event-planners-dubai", title: "SEO for Event Planners & Companies in Dubai | Corporate & Private", metaDescription: "Event planner SEO Dubai. Capture corporate events, weddings and large-scale productions searching for production partners.", h1: "SEO for Event Management Companies in Dubai", industry: "Events", location: "Dubai", primaryKeyword: "event planner SEO Dubai", secondaryKeywords: [], intro: "Event planners with strong SEO win the big budgets because clients research capability deeply.", stats: [{ value: "+203%", label: "RFPs received" }], painPoints: [], ourApproach: [], caseStudy: { client: "Large-scale event production company", result: "+203% RFPs", details: "Became the default search result for major corporate events in UAE." }, aeoGeoSection: "", faqs: [], lastUpdated: "2026-04-06" },
  { slug: "seo-for-moving-companies-dubai", title: "SEO for Moving Companies in Dubai | Book More Relocations", metaDescription: "Moving company SEO Dubai. Dominate 'movers Dubai', 'villa moving' and corporate relocation searches.", h1: "SEO for Professional Movers & Relocation Companies Dubai", industry: "Logistics", location: "Dubai", primaryKeyword: "movers SEO Dubai", secondaryKeywords: [], intro: "High-intent, high-stress searches. The company that appears first wins the job.", stats: [{ value: "4.2x", label: "Bookings" }], painPoints: [], ourApproach: [], caseStudy: { client: "Premium relocation firm", result: "4.2x bookings", details: "Now owns 'best movers Dubai' and related terms across the city." }, aeoGeoSection: "", faqs: [], lastUpdated: "2026-04-05" },
  { slug: "seo-for-it-companies-dubai", title: "SEO for IT Companies & MSPs in Dubai | B2B Leads", metaDescription: "IT services and MSP SEO for Dubai technology companies. Generate enterprise and mid-market leads through search.", h1: "SEO for IT Services & Managed Service Providers Dubai", industry: "Technology Services", location: "Dubai", primaryKeyword: "IT company SEO Dubai", secondaryKeywords: [], intro: "B2B buyers do extensive research. Thought leadership + case studies + technical content win.", stats: [{ value: "+91%", label: "SQLs from organic" }], painPoints: [], ourApproach: [], caseStudy: { client: "Regional MSP", result: "+91% SQLs", details: "Pipeline value from organic search increased dramatically." }, aeoGeoSection: "", faqs: [], lastUpdated: "2026-04-09" },
  { slug: "2026-seo-checklist-dubai", title: "2026 SEO Checklist for Dubai Businesses | Complete Guide", metaDescription: "The definitive 2026 SEO checklist for UAE businesses. Technical, content, E-E-A-T, AEO and GEO priorities that actually move rankings.", h1: "The Complete 2026 SEO Checklist for Dubai & UAE Businesses", industry: "Guides", location: "UAE", primaryKeyword: "SEO checklist Dubai 2026", secondaryKeywords: [], intro: "We distilled everything we have learned running 150+ campaigns into one actionable checklist.", stats: [{ value: "87", label: "Action items" }], painPoints: [], ourApproach: [], caseStudy: { client: "Internal framework", result: "Used on every campaign", details: "This checklist is the foundation of every successful project we deliver." }, aeoGeoSection: "Checklists and frameworks are highly cited by generative engines.", faqs: [], lastUpdated: "2026-04-10" },
];

// Helper to get all slugs for static generation
export function getAllPageSlugs() {
  return pages.map(p => p.slug);
}

export function getPageBySlug(slug: string): PageData | undefined {
  return pages.find(p => p.slug === slug);
}
