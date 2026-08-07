import type { KeywordPageConfig } from "./keywordPages";

// Business-district landing pages for genuinely distinct commercial hubs that
// were not yet covered: Canary Wharf and Shoreditch (London), Lusail (Qatar),
// KAFD (Riyadh) and the IFSC (Dublin). Each carries district-specific local
// context (sectors, business environment, search behaviour) so it deserves to
// exist independently rather than as a duplicate city page. British English.

// Honest stat callouts: framed as capability, coverage or grounded market fact,
// never fabricated client results, rankings or case studies.
const COVERAGE_STATS = [
  { value: "Google + AI", label: "Search Coverage" },
  { value: "SEO · AEO · GEO", label: "3 Search Surfaces" },
  { value: "Free", label: "SEO Audit" },
  { value: "No Lock-in", label: "Contracts" },
];
const BILINGUAL_STATS = [
  { value: "EN + AR", label: "Bilingual SEO" },
  { value: "Google + AI", label: "Search Coverage" },
  { value: "Free", label: "SEO Audit" },
  { value: "No Lock-in", label: "Contracts" },
];

export const districtKeywordPages: Record<string, KeywordPageConfig> = {
  // ── London: Canary Wharf ──────────────────────────────────────────────────
  "seo-canary-wharf": {
    slug: "seo-canary-wharf",
    keyword: "SEO Agency Canary Wharf",
    badge: "SEO for Canary Wharf Businesses",
    title: "SEO Agency Canary Wharf | Finance & Professional Services SEO",
    metaDesc: "SEO for Canary Wharf firms: rank on Google and get cited by AI search. Finance, fintech and professional services SEO from SEODXB.",
    h1: "SEO for Canary Wharf Businesses That Compete for Serious Clients",
    intro: "Canary Wharf is one of London's two great financial centres, home to global banks, asset managers, fintechs and the professional services firms that support them. Search here is unusually competitive and unusually high-value: a single new client can be worth far more than in most sectors. SEODXB helps Canary Wharf businesses rank on Google, earn citations from AI search engines, and reach the decision makers who research providers before they ever make contact.",
    svgVariant: "analytics",
    featuresTitle: "SEO Built for the Canary Wharf Market",
    featuresSubtitle: "A financial district demands precision, compliance-aware content, and visibility across both Google and AI search.",
    features: [
      { title: "Finance-Sector Content", desc: "Clear, accurate, compliance-aware content that ranks and reads as credibly to the FCA as it does to Google and AI engines. No inflated claims, no guaranteed-return language." },
      { title: "High-Intent Keyword Strategy", desc: "We target the specific, high-value queries Canary Wharf buyers actually search, rather than broad terms that global institutions and comparison sites already dominate." },
      { title: "District-Level Local SEO", desc: "An accurate Google Business Profile and consistent listings capture the strong local intent of people searching for a provider near their Canary Wharf office." },
      { title: "AEO & GEO for Finance", desc: "We structure your expertise so ChatGPT, Perplexity, Gemini and Google AI Mode can quote it when buyers ask for guidance in your specialism." },
      { title: "Technical SEO for Corporate Sites", desc: "Core Web Vitals, crawlability, indexation and schema on the often large, template-heavy sites financial firms run, so nothing blocks your rankings." },
      { title: "Qualified-Enquiry Reporting", desc: "We report on rankings, AI citations and the quality of enquiries generated, not vanity traffic that never converts into a client." },
    ],
    stats: COVERAGE_STATS,
    faqTitle: "SEO in Canary Wharf - Common Questions",
    faqs: [
      { q: "Why does a Canary Wharf business need specialist SEO?", a: "Canary Wharf is a crowded, high-value financial market where a single client can be very valuable and where regulated firms face financial promotion rules. Specialist SEO targets specific high-intent queries and produces compliant content that satisfies both the regulator and the way AI engines assess trustworthy sources." },
      { q: "Can financial firms in Canary Wharf do SEO under FCA rules?", a: "Yes. Content that promotes investment activity must be clear, fair and not misleading. In practice that honesty aligns closely with what Google and AI engines reward, so compliant content and effective content are largely the same thing." },
      { q: "How do Canary Wharf firms compete against global institutions in search?", a: "Not by chasing the broadest terms, which large institutions dominate, but through depth and specificity. Content answering precise, high-intent client questions, combined with district-level local presence, ranks more readily and attracts better-qualified enquiries." },
      { q: "Do you optimise for AI search as well as Google?", a: "Yes. We optimise for AEO and GEO so your firm can be cited by ChatGPT, Perplexity, Gemini and Google AI Mode. AI engines are cautious about financial sources, so demonstrable, clearly authored expertise is what earns citations." },
      { q: "Does SEODXB guarantee rankings?", a: "No reputable agency can, just as no regulated firm can promise guaranteed returns. Rankings depend on competition and Google's judgement. We commit to sound method, honest reporting and steady progress, not to guarantees." },
    ],
    extendedContent: [
      {
        heading: "What Search Looks Like in a Financial District",
        paragraphs: [
          "Canary Wharf concentrates an enormous amount of commercial value into a small area. Global banks, hedge funds, asset managers, insurers, fintechs and the law, accountancy and consulting firms that serve them all sit within a few streets. The buyers here are sophisticated and cautious, and they research thoroughly online before engaging a provider. By the time an enquiry lands, the shortlist has usually already formed, which means being visible during that research is what determines whether you are considered at all.",
          "This makes district-specific visibility genuinely valuable. Someone searching for an adviser, a service or a firm near their Canary Wharf office is signalling strong intent, and a business with an accurate local presence can capture searches that broad national competitors overlook. The combination of tight geographic targeting and deep, specific content is how a focused firm competes against much larger marketing budgets.",
        ],
      },
      {
        heading: "Why Compliance and AI Search Pull in the Same Direction",
        paragraphs: [
          "Regulated firms often see financial promotion rules as a constraint on marketing, but in the AI search era they are closer to an advantage. AI engines are built to favour accurate, balanced, well-sourced content and to distrust exaggerated claims. Content written to satisfy a compliance team, with risk stated plainly and benefits described fairly, is exactly the kind of content an AI system is comfortable quoting. The regulator and the algorithm want the same thing.",
          "The practical work is to turn the expertise your team already holds into clear, answer-first content that addresses the real questions your clients ask, with visible authorship and valid structured data. That is how a Canary Wharf firm becomes a source Google ranks and an AI engine trusts enough to name when a serious buyer asks for guidance in its field.",
        ],
      },
    ],
    ctaTitle: "Make Your Canary Wharf Firm Visible to Serious Buyers",
    ctaDesc: "Book a free SEO audit. We will show you where you stand in Google and AI search, and how to reach the high-value clients researching providers in Canary Wharf.",
    ctaButton: "Get a Free SEO Audit",
    areaServed: "Canary Wharf, London, UK",
  },

  // ── London: Shoreditch ────────────────────────────────────────────────────
  "seo-shoreditch": {
    slug: "seo-shoreditch",
    keyword: "SEO Agency Shoreditch",
    badge: "SEO for Shoreditch Businesses",
    title: "SEO Agency Shoreditch | Tech, Startup & Creative SEO London",
    metaDesc: "SEO for Shoreditch tech, startups and creative firms: rank on Google and get cited by AI search. Growth-focused SEO from SEODXB.",
    h1: "SEO for Shoreditch Startups, Tech and Creative Businesses",
    intro: "Shoreditch is East London's tech and creative heart, packed with startups, SaaS companies, digital agencies, and the bars and restaurants that keep the area busy well past office hours. It is a market that moves fast and expects marketing to earn its keep. SEODXB helps Shoreditch businesses rank on Google, get cited by AI search engines, and turn organic search into a predictable, measurable source of growth rather than a cost centre.",
    svgVariant: "growth",
    featuresTitle: "SEO That Fits How Shoreditch Businesses Grow",
    featuresSubtitle: "Fast-moving companies need SEO tied to pipeline and product, not vanity metrics.",
    features: [
      { title: "SaaS & Startup SEO", desc: "Topic-cluster content, product-led pages and technical foundations that compound into qualified pipeline as your company scales, not just traffic that never converts." },
      { title: "Creative & Agency SEO", desc: "Positioning content and portfolio pages structured to rank for the services and specialisms clients actually search, so your work is found before a pitch begins." },
      { title: "AEO & GEO for Tech", desc: "We structure your content so ChatGPT, Perplexity, Gemini and Google AI Mode cite you when founders and buyers ask AI assistants for recommendations." },
      { title: "Technical SEO for Modern Stacks", desc: "JavaScript rendering, Core Web Vitals, crawlability and schema on the React and headless setups Shoreditch teams tend to build, so search engines can actually read your site." },
      { title: "Local SEO for Hospitality", desc: "For the bars, restaurants and venues in the area, an optimised Google Business Profile and reviews capture the high local intent of people searching nearby." },
      { title: "Measurable, Fast Reporting", desc: "Clear reporting on rankings, AI citations and qualified enquiries, at a cadence that suits teams used to shipping and iterating quickly." },
    ],
    stats: COVERAGE_STATS,
    faqTitle: "SEO in Shoreditch - Common Questions",
    faqs: [
      { q: "What kind of Shoreditch businesses do you help with SEO?", a: "Primarily tech startups, SaaS companies, digital and creative agencies, and hospitality venues in the area. Each has different search intent, so we tailor the approach: pipeline-focused content for tech, positioning content for agencies, and local SEO for hospitality." },
      { q: "How is SEO for a startup different from SEO for an established firm?", a: "Startups need SEO that builds toward qualified pipeline as they scale, with topic clusters and product-led pages that compound over time, rather than broad traffic. It also has to respect fast-changing products and modern technical stacks that can otherwise block search engines." },
      { q: "Do you handle technical SEO for JavaScript-heavy sites?", a: "Yes. Many Shoreditch teams build on React or headless setups where rendering, crawlability and Core Web Vitals need care, or search engines struggle to read the site. We fix the technical foundations so content and authority can pay off." },
      { q: "Can you help my business get recommended by AI assistants?", a: "Yes, through AEO and GEO. We structure clear, answer-first content and keep your information consistent so ChatGPT, Perplexity, Gemini and Google AI Mode can cite you when founders and buyers ask for recommendations in your category." },
      { q: "How quickly will we see results?", a: "Local and long-tail terms can improve within a few months, while more competitive terms take longer. SEO compounds, so results build steadily. We report clearly throughout so you can see progress rather than wait in the dark." },
    ],
    extendedContent: [
      {
        heading: "Why Shoreditch Is a Distinct SEO Market",
        paragraphs: [
          "Shoreditch does not behave like the rest of London. It is dense with early-stage and scaling technology companies, independent creative studios, and a hospitality scene that serves both. The businesses here tend to be marketing-literate, sceptical of fluff, and quick to drop anything that does not demonstrably work. SEO in this market has to prove its contribution to pipeline or footfall, not just to a traffic chart, and it has to keep pace with companies that change their product and positioning frequently.",
          "That culture rewards a particular kind of SEO. For technology firms it means content mapped to how buyers actually research a solution, built into durable topic clusters, on a technical foundation that a modern stack does not accidentally break. For agencies it means being genuinely findable for the specific services you sell. For hospitality it means owning local search in an area where a large, mobile audience decides where to go on the spot.",
        ],
      },
      {
        heading: "Search and AI Visibility for Fast-Moving Companies",
        paragraphs: [
          "Founders and buyers in Shoreditch increasingly begin research by asking an AI assistant to compare tools or recommend a provider. For a considered purchase, appearing in those answers puts you on the shortlist before a formal process starts, which is a durable advantage. Because many competitors have not yet structured their content for AI search, an organised company can claim that position now while the field is still catching up.",
          "The work that earns AI citations is the same work that builds sustainable Google rankings: clear, answer-first content that responds to real questions, consistent business information, valid structured data, and genuine authority from credible sources. We build that once and let it compound, so your visibility grows as an asset rather than resetting every time a campaign ends.",
        ],
      },
    ],
    ctaTitle: "Turn Search Into a Growth Channel for Your Shoreditch Business",
    ctaDesc: "Book a free SEO audit. We will show you where you stand in Google and AI search, and how to turn organic search into predictable, measurable growth.",
    ctaButton: "Get a Free SEO Audit",
    areaServed: "Shoreditch, London, UK",
  },

  // ── Qatar: Lusail ─────────────────────────────────────────────────────────
  "seo-lusail": {
    slug: "seo-lusail",
    keyword: "SEO Agency Lusail",
    badge: "SEO for Lusail Businesses",
    title: "SEO Agency Lusail Qatar | Get Found in Qatar's New City",
    metaDesc: "SEO for Lusail businesses: rank on Google and get cited by AI search in Arabic and English. Early-mover visibility from SEODXB.",
    h1: "SEO for Businesses in Lusail, Qatar's New City",
    intro: "Lusail has grown from a construction site into a genuine business and residential city north of Doha, filling with retail, hospitality, real estate, offices and services. Because the district is new, its search footprint is still forming, which makes this an unusual opportunity: an organised business can become the visible default for its category and location before competitors catch on. SEODXB helps Lusail businesses build that visibility on Google and AI search, in both Arabic and English.",
    svgVariant: "local",
    featuresTitle: "SEO Built for a New District",
    featuresSubtitle: "New areas reward early movers who claim local and AI visibility before the competition arrives.",
    features: [
      { title: "Early-Mover Local SEO", desc: "A precise, district-specific Google Business Profile and consistent listings that begin capturing Lusail local-intent searches quickly, while competition is still thin." },
      { title: "Bilingual Arabic & English SEO", desc: "Genuine bilingual content, not machine translation, that captures the high-intent searches of Qatari nationals, residents and expatriates who search in both languages." },
      { title: "District-Specific Content", desc: "Content that names Lusail, references nearby landmarks and developments, and answers the practical questions newcomers ask about finding and reaching you." },
      { title: "AEO & GEO Visibility", desc: "We structure your content so ChatGPT, Perplexity, Gemini and Google AI Mode name your business when customers ask for recommendations in the district." },
      { title: "Reviews & Reputation", desc: "A plan to earn genuine early reviews that build a local track record in an area with no established search history to fall back on." },
      { title: "Enquiry-Focused Reporting", desc: "We measure real outcomes for a new location, enquiries, calls, bookings and visits, rather than impressions that flatter without informing." },
    ],
    stats: BILINGUAL_STATS,
    faqTitle: "SEO in Lusail - Common Questions",
    faqs: [
      { q: "Is SEO different for a business in a new district like Lusail?", a: "Yes. Lusail has few established search signals, so you help create the local results rather than fight to rank above mature competitors. Competition for district-specific searches is often thin, which lets organised early movers claim visible positions quickly." },
      { q: "What is the fastest way to get found in Lusail?", a: "Local SEO. A complete, accurate Google Business Profile that names Lusail precisely, uses the right category and carries genuine early reviews will start capturing local-intent searches quickly, especially where few competitors have done the same." },
      { q: "Do I need Arabic content for a Lusail business?", a: "In most cases yes. Qatar is bilingual and Lusail draws nationals, residents and expatriates who search in both Arabic and English. Genuine bilingual content, not machine translation, captures high-intent searches that English-only sites miss." },
      { q: "How do Lusail businesses get recommended by AI engines?", a: "By publishing clear, answer-first content about what they offer and where, keeping business information consistent, and earning genuine reviews and mentions. In a new district where few competitors have done this, being the AI's recommendation is unusually attainable." },
      { q: "Why is consistency so important for a new-district business?", a: "Because there is no established record for search engines to fall back on. Every listing and mention of your name, address and details needs to agree exactly, or you confuse the very local signals you are trying to establish from scratch." },
    ],
    extendedContent: [
      {
        heading: "Why a New District Is an Opportunity, Not a Disadvantage",
        paragraphs: [
          "An established area has years of accumulated search signals: mature listings, reviews built up over time, and content that has been indexed and refined. Lusail has almost none of that yet. When a business opens here, it is not slotting into an existing web of local results, it is helping to create one. That changes the usual assumption that you are fighting to rank above entrenched competitors, because for many district-specific searches the competition is surprisingly thin.",
          "This is the opening. In an area where few businesses have yet built a proper search presence, an organised newcomer can become the visible default for its category and location faster than would ever be possible in a mature market such as central Doha. The window will not stay open forever, so the businesses that treat search seriously from day one can establish positions that later arrivals struggle to displace.",
        ],
      },
      {
        heading: "Getting the Foundations Right in Lusail",
        paragraphs: [
          "The quickest wins come from local SEO done carefully. A complete, verified Google Business Profile that names Lusail precisely, consistent listings across every platform, and a steady flow of genuine reviews will begin capturing local intent quickly. Consistency matters more than usual, because in a new area there is no established record to fall back on, so every signal you create needs to reinforce the others rather than contradict them.",
          "From there, bilingual, district-specific content that answers real customer questions positions you for both human searchers and the AI engines building their own understanding of what exists in Lusail and where. Measured against genuine enquiries rather than vanity metrics, this is how a new business turns a blank search footprint into a durable local advantage.",
        ],
      },
    ],
    ctaTitle: "Claim Your Place in Lusail Before Competitors Do",
    ctaDesc: "Book a free SEO review. We will show you how businesses in Lusail can become the default answer on Google and AI search, in Arabic and English.",
    ctaButton: "Request a Free Local SEO Review",
    areaServed: "Lusail, Qatar",
  },

  // ── Saudi Arabia: KAFD, Riyadh ────────────────────────────────────────────
  "seo-kafd-riyadh": {
    slug: "seo-kafd-riyadh",
    keyword: "SEO Agency KAFD Riyadh",
    badge: "SEO for KAFD & Riyadh Finance Firms",
    title: "SEO Agency KAFD Riyadh | Finance & RHQ Search Visibility",
    metaDesc: "SEO for KAFD and Riyadh financial firms: rank on Google and get cited by AI search in Arabic and English, from SEODXB.",
    h1: "SEO for Financial and Professional Firms in KAFD, Riyadh",
    intro: "The King Abdullah Financial District is the centre of Riyadh's ambition to be the region's financial capital, home to banks, regulators, investment firms and the regional headquarters that Saudi Arabia's RHQ programme is drawing to the city. As decision making concentrates in Riyadh, so does high-value B2B search. SEODXB helps firms in KAFD and across Riyadh rank on Google and earn citations from AI search engines, in both Arabic and English.",
    svgVariant: "analytics",
    featuresTitle: "SEO for Riyadh's Financial Centre",
    featuresSubtitle: "A concentration of regional decision makers demands precise, bilingual, AI-ready search visibility.",
    features: [
      { title: "Saudi-Specific Strategy", desc: "Purpose-built Saudi pages that target genuine Saudi search intent, not lightly edited Dubai pages that read as generic to Riyadh buyers and search engines alike." },
      { title: "Bilingual Arabic & English SEO", desc: "Genuine Arabic content, correct hreflang and English visibility, because a large share of high-intent B2B research in the Kingdom happens in Arabic." },
      { title: "Finance & Professional Services Content", desc: "Clear, credible, answer-first content that defines your services and outcomes for the procurement-style research serious B2B buyers carry out." },
      { title: "AEO & GEO for B2B", desc: "We structure your expertise so ChatGPT, Perplexity, Gemini and Google AI Mode cite you when buyers ask AI assistants to compare or recommend providers." },
      { title: "Authority & Trust Signals", desc: "A plan to earn mentions from credible Saudi and regional sources, which carry disproportionate weight for considered B2B purchases." },
      { title: "Enquiry-Quality Reporting", desc: "We report on rankings, AI citations and the quality of B2B enquiries, not raw traffic that never reaches a real buyer." },
    ],
    stats: BILINGUAL_STATS,
    faqTitle: "SEO in KAFD Riyadh - Common Questions",
    faqs: [
      { q: "Why is search visibility in Riyadh increasingly important?", a: "Saudi Arabia's RHQ programme is drawing regional headquarters and their decision makers to Riyadh, and an RHQ licence is now the gateway to most large government contracts. As decision making concentrates in the city, more high-value B2B research carries Saudi intent, in both Arabic and English." },
      { q: "Can I reuse my Dubai pages for the Riyadh market?", a: "It rarely works well. Saudi buyers search with different intent and context, and lightly edited Dubai pages read as generic. Purpose-built Saudi pages that reflect the realities of the Kingdom perform far better in both Google and AI search." },
      { q: "Do I need Arabic SEO for a KAFD or Riyadh firm?", a: "In most cases yes. A large share of high-intent B2B research in Saudi Arabia happens in Arabic. Genuine Arabic content, not machine translation, captures buyers that English-only sites never reach, and is often where the least competition sits." },
      { q: "How do B2B firms in Riyadh get recommended by AI engines?", a: "By publishing clear, answer-first content about their services and outcomes, keeping information consistent, and earning mentions from credible Saudi and regional sources. For considered B2B purchases, trust and corroboration carry more weight than for consumer queries." },
      { q: "Does SEODXB guarantee rankings in Saudi Arabia?", a: "No credible agency can guarantee rankings, which depend on competition and Google's judgement. We commit to a Saudi-specific method, genuine bilingual content, and honest reporting that shows real progress over time." },
    ],
    extendedContent: [
      {
        heading: "How the RHQ Programme Reshapes Riyadh Search",
        paragraphs: [
          "Saudi Arabia's Regional Headquarters programme is one of the most consequential business policies in the Gulf. It grants multinationals a licence to base their regional leadership in Riyadh, with a long tax incentive package and, since the start of 2024, access to most government contracts above a set threshold. The design deliberately rewards firms that genuinely operate from the city, requiring senior staff, real functions and board decisions on Saudi soil, rather than symbolic offices.",
          "When regional decision making concentrates in one city, so does the search demand around it. Procurement leads and functional heads research suppliers the same way everyone does, by searching and increasingly by asking AI assistants. As more of those people operate from Riyadh, more high-value B2B searches carry Saudi intent, and a supplier who is invisible in Saudi search results is quietly excluded from a growing pool of serious opportunities.",
        ],
      },
      {
        heading: "Winning Considered B2B Search in the Kingdom",
        paragraphs: [
          "For considered B2B purchases, trust signals matter more than for impulse buying, so demonstrable expertise and third-party corroboration do a disproportionate amount of the work. That means clear service definitions, case-relevant content, consistent business information, and genuine mentions from credible Saudi and regional sources. Built well, this earns rankings on Google and the confidence AI engines need to name you when a buyer asks for a recommendation.",
          "Because many competitors have not yet adapted their content for AI search in the Kingdom, there is a real chance for organised suppliers to establish themselves as the trusted, quotable source in their category now, before the field catches up. In a market where policy is actively concentrating buyers in one place, being the default answer to a Saudi buyer's question is a genuinely valuable position to hold.",
        ],
      },
    ],
    ctaTitle: "Be Visible to Riyadh's Concentrating B2B Buyers",
    ctaDesc: "Book a free SEO audit. We will show you where your firm stands in Saudi Google and AI search, in Arabic and English, and how to reach the buyers moving to Riyadh.",
    ctaButton: "Get a Free SEO Audit",
    areaServed: "King Abdullah Financial District, Riyadh, Saudi Arabia",
  },

  // ── Ireland: IFSC, Dublin ─────────────────────────────────────────────────
  "seo-ifsc-dublin": {
    slug: "seo-ifsc-dublin",
    keyword: "SEO Agency IFSC Dublin",
    badge: "SEO for IFSC & Dublin Finance Firms",
    title: "SEO Agency IFSC Dublin | Funds, Fintech & Financial SEO",
    metaDesc: "SEO for Dublin IFSC firms: rank on Google and get cited by AI search. Funds, fintech and financial services SEO from SEODXB.",
    h1: "SEO for Financial and Fintech Firms in Dublin's IFSC",
    intro: "Dublin's International Financial Services Centre anchors Ireland's position as a European hub for funds, banking, fintech, aircraft leasing and the professional services that surround them. It is a specialised, internationally competitive market where buyers research carefully and where being found by both Google and AI search engines shapes the shortlist. SEODXB helps IFSC and Dublin financial firms build genuine, credible search visibility that reaches decision makers during their research.",
    svgVariant: "analytics",
    featuresTitle: "SEO for Dublin's Financial Centre",
    featuresSubtitle: "A specialised European finance hub demands precise, credible, AI-ready content.",
    features: [
      { title: "Financial Services Content", desc: "Clear, accurate, credible content that ranks and reads as trustworthy to regulators, buyers and AI engines alike, with no inflated claims or guaranteed-return language." },
      { title: "Funds & Fintech Specialism", desc: "Content built around the specific services and specialisms the IFSC is known for, from fund administration and asset management to payments and regtech." },
      { title: "High-Intent Keyword Strategy", desc: "We target the precise, high-value queries decision makers search, rather than broad terms that global players and directories already dominate." },
      { title: "AEO & GEO for Finance", desc: "We structure your expertise so ChatGPT, Perplexity, Gemini and Google AI Mode can cite you when buyers ask for guidance or providers in your field." },
      { title: "Technical SEO for Corporate Sites", desc: "Core Web Vitals, crawlability, indexation and schema on the large, template-heavy sites financial firms run, so nothing blocks your rankings." },
      { title: "Qualified-Enquiry Reporting", desc: "We report on rankings, AI citations and the quality of enquiries generated, not vanity traffic that never converts into a client relationship." },
    ],
    stats: COVERAGE_STATS,
    faqTitle: "SEO in Dublin's IFSC - Common Questions",
    faqs: [
      { q: "Why do IFSC firms need specialist SEO?", a: "The IFSC is a specialised, internationally competitive finance hub where buyers research carefully and where regulated firms must communicate accurately. Specialist SEO targets specific high-intent queries and produces credible content that both ranks on Google and earns citations from cautious AI engines." },
      { q: "How do Dublin financial firms compete against global players in search?", a: "Through depth and specificity rather than broad terms that global institutions and directories dominate. Content answering precise, high-intent questions in your specialism, on a sound technical foundation, ranks more readily and attracts better-qualified enquiries." },
      { q: "Do you optimise for AI search as well as Google?", a: "Yes. We optimise for AEO and GEO so your firm can be cited by ChatGPT, Perplexity, Gemini and Google AI Mode. AI engines are cautious about financial sources, so clearly authored, demonstrable expertise is what earns citations." },
      { q: "Can you handle technical SEO for a large financial services website?", a: "Yes. Financial firms often run large, template-heavy sites where crawlability, indexation, Core Web Vitals and schema need attention. We fix those foundations so your content and authority can actually pay off in rankings." },
      { q: "Does SEODXB guarantee rankings?", a: "No credible agency can, just as no regulated firm can promise guaranteed returns. Rankings depend on competition and Google's judgement. We commit to sound method, honest reporting and steady progress, not to guarantees." },
    ],
    extendedContent: [
      {
        heading: "What Makes the IFSC a Distinct SEO Market",
        paragraphs: [
          "The IFSC concentrates a specialised slice of global finance into Dublin's docklands: fund administration and asset management, international banking, payments and fintech, insurance, and aircraft leasing, alongside the law and accountancy firms that serve them. The buyers are institutional and careful, and they research thoroughly before engaging a provider. Being visible during that research, for the specific specialisms the district is known for, is what determines whether a firm makes the shortlist at all.",
          "This rewards depth over breadth. A firm rarely wins by chasing the most contested finance terms, which global institutions and comparison sites already own. It wins by being genuinely findable for the precise services it offers, with content that demonstrates real expertise and a technical foundation that a large corporate site does not accidentally undermine.",
        ],
      },
      {
        heading: "Credible Content Wins Both Rankings and AI Citations",
        paragraphs: [
          "Financial questions are among the most common things people now ask AI assistants, and the engines are deliberately cautious about which sources they draw on for money matters. They favour firms that demonstrate genuine expertise, cite their reasoning, keep information consistent, and are corroborated by credible outside sources. For a regulated firm, this rewards exactly the professionalism the business already practises, provided that expertise is actually published rather than hidden behind a contact form.",
          "The work is to turn the knowledge your team holds into clear, structured, answer-first content that addresses real client questions, with visible authorship and valid structured data. Kept consistent across your website and professional profiles, this is how an IFSC firm becomes a source Google ranks and an AI engine trusts enough to name when a serious buyer asks for guidance in its specialism.",
        ],
      },
    ],
    ctaTitle: "Make Your IFSC Firm Visible Where Buyers Research",
    ctaDesc: "Book a free SEO audit. We will show you where your firm stands in Google and AI search, and how to reach the decision makers researching providers in Dublin's financial centre.",
    ctaButton: "Get a Free SEO Audit",
    areaServed: "IFSC, Dublin, Ireland",
  },
};
