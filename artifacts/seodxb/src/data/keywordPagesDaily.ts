import type { KeywordPageConfig } from "./keywordPages";

// Daily batch of hand-authored commercial landing pages. Each page carries
// genuinely location-specific context, features, FAQs and extended content so
// it deserves to exist independently rather than being a templated doorway.
// Markets: Saudi Arabia (Jeddah), Qatar (Doha), Kuwait (Kuwait City),
// Ireland (Cork) and a UAE short-term-rental vertical (Dubai holiday homes).
// British English. No em dashes, no double hyphens as dashes.

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

export const dailyKeywordPages: KeywordPageConfig[] = [
  // ── 1. SEO Agency Jeddah (Saudi Arabia) ───────────────────────────────────
  {
    slug: "seo-agency-jeddah",
    keyword: "SEO Agency Jeddah",
    badge: "Specialist SEO Agency for Jeddah",
    title: "SEO Agency Jeddah | SEODXB - Bilingual SEO, AEO & GEO",
    metaDesc:
      "SEODXB is a specialist SEO agency for Jeddah businesses. Rank on Google, win the local pack, and get cited by AI engines in Arabic and English. Free SEO audit.",
    h1: "The SEO Agency Built for Jeddah Businesses",
    intro:
      "Jeddah is Saudi Arabia's commercial gateway, a Red Sea port city of established trading houses, dense retail and a fast-growing tourism ambition under Vision 2030. Its customers are young, mobile-first and increasingly let AI assistants shortlist businesses for them. SEODXB helps Jeddah companies rank on Google, win the local Map Pack, and get cited by AI engines like ChatGPT and Google AI Overviews, in both Arabic and English.",
    svgVariant: "local",
    imageUrl: img("photo-1590060766050-3c0f45b3d5b6"),
    featuresTitle: "What Our Jeddah SEO Agency Delivers",
    featuresSubtitle:
      "A complete organic growth programme built around how Jeddah customers actually search, in Arabic and English.",
    features: [
      { title: "Bilingual Arabic & English SEO", desc: "Genuine Arabic keyword research and hreflang implementation, not machine translation, so you capture the high-intent Arabic searches Saudi nationals use alongside English B2B and expatriate demand." },
      { title: "Jeddah Local & Map Pack SEO", desc: "Google Business Profile optimisation, accurate citations and review strategy to win the local pack across Al Rawdah, Al Hamra, Al Salamah and the Corniche." },
      { title: "Technical SEO Foundation", desc: "We fix Core Web Vitals, crawl, indexation and structured-data issues, essential in a market where most searches happen on a phone." },
      { title: "Answer-First Content", desc: "Content structured for Google, featured snippets and AI answer engines, written by specialists who understand the Jeddah market, never AI-spun filler." },
      { title: "AEO & GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini and Google AI Overviews cite you, a real first-mover advantage while Jeddah competitors lag." },
      { title: "Authority Building for Saudi Search", desc: "High-quality backlinks and mentions from credible Saudi and Gulf publications and directories that build the domain authority Google rewards." },
    ],
    stats: gccStats,
    faqTitle: "SEO Agency Jeddah - FAQs",
    faqs: [
      { q: "Do I need Arabic SEO for my Jeddah business?", a: "In most cases, yes. Saudi Arabia is an Arabic-first search market and many high-intent searches happen in Arabic, particularly among Saudi nationals. Proper Arabic SEO, not translation, captures customers English-only sites miss, while English remains important for B2B, luxury and expatriate audiences. We build both properly." },
      { q: "How long does SEO take to work in Jeddah?", a: "Local and long-tail terms can improve within a few months, while competitive terms take longer. Content and authority compound, so results build steadily rather than arriving all at once. Consistency over several months matters more than any single change." },
      { q: "How does SEODXB get Jeddah businesses cited by AI engines?", a: "By publishing clear, answer-first content, keeping your business facts consistent across the web, and earning mentions from credible third parties. AI engines draw on sources they can parse and trust, and many Jeddah competitors have not yet adapted, which is the opening we help you take." },
      { q: "Is local SEO important in Jeddah?", a: "Very. A large share of searches have local intent, and an optimised Google Business Profile with accurate listings and genuine reviews captures ready-to-act customers across Jeddah's districts. It is often the highest-return focus for a local business." },
      { q: "Does SEODXB work with businesses in Jeddah remotely?", a: "Yes. SEODXB works with businesses across Jeddah and the wider Kingdom, combining Saudi market knowledge with technical SEO, AEO and GEO expertise. We start with a free audit of where you stand on Google and in AI answers." },
    ],
    ctaTitle: "Grow Your Jeddah Business in Search",
    ctaDesc:
      "Book a free SEO audit. We'll review your Google and AI search visibility, study your Jeddah competitors, and show you the fastest path to more qualified enquiries.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Jeddah, Saudi Arabia",
    extendedContent: [
      {
        heading: "Why Jeddah Businesses Need a Specialist SEO Partner",
        paragraphs: [
          "Jeddah's economy mixes generations-old family trading houses with a new wave of retail, hospitality and tourism ventures driven by Vision 2030 investment such as Jeddah Central. That combination makes search unusually competitive: legacy brands with strong offline reputations sit alongside newer, digitally native challengers, and both are chasing the same mobile-first customers. Ranking here requires more than a translated Dubai playbook; it requires an approach tuned to how Jeddawi and expatriate audiences actually search.",
          "A specialist partner matters because the two biggest levers in this market, Arabic-first search and AI citation, are exactly the two that generalist agencies handle poorly. Many competitors rank in English while missing the Arabic searches that drive a large share of local demand, and almost none have structured their content for the AI answers customers increasingly rely on. SEODXB treats both as core, not add-ons.",
        ],
      },
      {
        heading: "How We Approach SEO in Jeddah",
        paragraphs: [
          "We begin with an audit of where you stand on Google and in AI answers, then fix technical and local foundations before building content and authority around your highest-intent topics. This sequence produces early wins, an optimised Google Business Profile and a set of pages that answer real buyer questions, while the compounding work builds a durable advantage over time.",
          "Throughout, we measure against business outcomes rather than vanity metrics: rankings and AI citations for your priority terms, growth in qualified organic traffic, and the enquiries, calls and bookings that follow. Search in Jeddah rewards consistency, and a focused, bilingual, AI-aware programme is how a business builds visibility its competitors find hard to reverse.",
        ],
      },
    ],
  },

  // ── 2. SEO Agency Doha (Qatar) ────────────────────────────────────────────
  {
    slug: "seo-agency-doha",
    keyword: "SEO Agency Doha",
    badge: "Specialist SEO Agency for Doha",
    title: "SEO Agency Doha | SEODXB - Bilingual SEO, AEO & GEO",
    metaDesc:
      "SEODXB is a specialist SEO agency for Doha businesses. Rank on Google, win the local pack, and get cited by AI engines in Arabic and English. Free SEO audit.",
    h1: "The SEO Agency Built for Doha Businesses",
    intro:
      "Doha is a compact, high-spending market with one of the most connected populations in the world. World Cup legacy investment, an ongoing diversification away from LNG, and a young, mobile-first audience mean most meaningful purchases now begin with a search. SEODXB helps Doha businesses rank on Google, win the local Map Pack across West Bay, Lusail and Al Wakrah, and get cited by AI engines like ChatGPT and Google AI Overviews, in both Arabic and English.",
    svgVariant: "serp",
    imageUrl: img("photo-1512453979798-5ea266f8880c"),
    featuresTitle: "What Our Doha SEO Agency Delivers",
    featuresSubtitle:
      "A complete organic growth programme built around how Qatar customers actually search, in Arabic and English.",
    features: [
      { title: "Bilingual Arabic & English SEO", desc: "Genuine Arabic keyword research and hreflang, so you capture high-intent Arabic searches from Qatari nationals alongside the English B2B and expatriate demand that dominates finance and energy." },
      { title: "Doha Local & Map Pack SEO", desc: "Google Business Profile optimisation, accurate citations and reviews to win local and near-me searches across West Bay, Lusail, The Pearl and Al Wakrah." },
      { title: "Technical SEO Foundation", desc: "We fix Core Web Vitals, crawl, indexation and structured-data issues so your site is fast and fully indexable on the mobile devices Qatar searches on." },
      { title: "Answer-First Content", desc: "Content structured for Google, featured snippets and AI answer engines, written by specialists who understand Qatar's sectors, never AI-spun filler." },
      { title: "AEO & GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini and Google AI Overviews cite you, a genuine advantage while many Doha competitors have not adapted." },
      { title: "Authority Building for Gulf Search", desc: "Backlinks and mentions from credible Qatari and Gulf publications and directories that build the domain authority Google and AI engines reward." },
    ],
    stats: gccStats,
    faqTitle: "SEO Agency Doha - FAQs",
    faqs: [
      { q: "Do I need Arabic SEO for my Doha business?", a: "Usually, yes. Qatar is a bilingual search market and many high-intent searches happen in Arabic. Proper Arabic SEO captures customers English-only sites miss, while English stays essential for finance, energy and expatriate-facing businesses. We build both to read naturally, not by translation." },
      { q: "How long does SEO take to work in Doha?", a: "Local and long-tail terms can improve within a few months, while competitive head terms take longer. Because content and authority compound, results build steadily. Consistency over several months matters more than any single change." },
      { q: "How does SEODXB get Doha businesses cited by AI engines?", a: "By publishing clear, answer-first content, keeping your business facts consistent across the web, and earning mentions from credible sources. AI engines cite what they can parse and trust, and because many Qatar competitors have not adapted, there is real first-mover advantage." },
      { q: "Is local SEO important in Doha?", a: "Very. A large share of searches have local intent, and an optimised Google Business Profile with accurate listings and genuine reviews captures ready-to-act customers across West Bay, Lusail and Al Wakrah." },
      { q: "Does SEODXB work with Doha businesses remotely?", a: "Yes. We work with businesses across Doha and Qatar, combining Gulf market knowledge with technical SEO, AEO and GEO expertise, starting with a free audit of your Google and AI search visibility." },
    ],
    ctaTitle: "Grow Your Doha Business in Search",
    ctaDesc:
      "Book a free SEO audit. We'll review your Google and AI search visibility, study your Doha competitors, and map the fastest path to more qualified enquiries.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Doha, Qatar",
    extendedContent: [
      {
        heading: "Why Doha Businesses Need a Specialist SEO Partner",
        paragraphs: [
          "Qatar concentrates enormous spending power in a small, connected population, and post-World-Cup investment has widened the field of businesses competing online across hospitality, retail, finance, energy services and professional sectors. In a market this compact, the difference between appearing and being invisible in search is stark, because there simply are not many players in any given category to dilute the winners.",
          "The two decisive levers, bilingual visibility and AI citation, are precisely where generalist agencies underperform. International competitors often rank in English but lack Arabic depth and Qatar-specific signals, and few have structured their content for AI answers. SEODXB treats both as core to the strategy, which is how a focused Doha business wins searches its larger rivals never appear for.",
        ],
      },
      {
        heading: "How We Approach SEO in Doha",
        paragraphs: [
          "We audit where you stand on Google and in AI answers, fix technical and local foundations, then build content and AI-answer authority around your highest-intent topics. That order delivers early wins, an optimised profile and pages that answer real buyer questions, while the compounding work builds a durable position.",
          "We report against outcomes that matter to your business: rankings and AI citations for your priority terms, qualified organic traffic, and the enquiries and bookings that follow. In a market where interest is rising and competitors are slow to adapt, consistent, AI-aware SEO is how a Doha business establishes itself as the default choice in its category.",
        ],
      },
    ],
  },

  // ── 3. SEO Agency Kuwait City (Kuwait) ────────────────────────────────────
  {
    slug: "seo-agency-kuwait-city",
    keyword: "SEO Agency Kuwait City",
    badge: "Specialist SEO Agency for Kuwait City",
    title: "SEO Agency Kuwait City | SEODXB - Bilingual SEO, AEO & GEO",
    metaDesc:
      "SEODXB is a specialist SEO agency for Kuwait City businesses. Rank on Google, win the local pack, and get cited by AI engines in Arabic and English. Free audit.",
    h1: "The SEO Agency Built for Kuwait City Businesses",
    intro:
      "Kuwait City anchors one of the world's wealthiest markets, with high income per capita, heavy smartphone use and a strong appetite for online research and shopping. From retail and automotive to finance and professional services, customers here compare and shortlist online before they buy. SEODXB helps Kuwait City businesses rank on Google, win the local Map Pack across Salmiya, Hawally and beyond, and get cited by AI engines like ChatGPT and Google AI Overviews, in Arabic and English.",
    svgVariant: "growth",
    imageUrl: img("photo-1518684079-3c830dcef090"),
    featuresTitle: "What Our Kuwait City SEO Agency Delivers",
    featuresSubtitle:
      "A complete organic growth programme built around how Kuwait customers actually search, in Arabic and English.",
    features: [
      { title: "Bilingual Arabic & English SEO", desc: "Genuine Arabic keyword research and hreflang so you capture high-intent Arabic searches from Kuwaiti nationals alongside English demand from the large expatriate and B2B audience." },
      { title: "Kuwait City Local & Map Pack SEO", desc: "Google Business Profile optimisation, citations and reviews to win local and near-me searches across Kuwait City, Salmiya, Hawally and Farwaniya." },
      { title: "Technical SEO Foundation", desc: "We fix Core Web Vitals, crawl, indexation and structured-data issues so your site performs on the mobile devices Kuwaiti customers overwhelmingly use." },
      { title: "Answer-First Content", desc: "Content structured for Google, featured snippets and AI answer engines, written by specialists, tuned to Kuwait's retail, automotive and services demand." },
      { title: "AEO & GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini and Google AI Overviews cite you, an advantage in a market where local SEO competition is still maturing." },
      { title: "Authority Building for Gulf Search", desc: "Backlinks and mentions from credible Kuwaiti and Gulf sources that build the domain authority Google and AI engines reward." },
    ],
    stats: gccStats,
    faqTitle: "SEO Agency Kuwait City - FAQs",
    faqs: [
      { q: "Do I need Arabic SEO for my Kuwait business?", a: "Usually, yes. Kuwait is a bilingual search market and many high-intent searches happen in Arabic among Kuwaiti nationals, while English serves the large expatriate and B2B audience. Proper Arabic SEO, not translation, captures demand English-only sites miss. We build both." },
      { q: "How long does SEO take to work in Kuwait City?", a: "Local and long-tail terms can improve within a few months, while competitive terms take longer. Content and authority compound, so results build steadily. Because local SEO competition in Kuwait is still maturing, focused work can move rankings faster than in more saturated markets." },
      { q: "How does SEODXB get Kuwait businesses cited by AI engines?", a: "By publishing clear, answer-first content, keeping your business facts consistent across the web, and earning credible mentions. AI engines cite what they can parse and trust, and few Kuwait competitors have adapted, so early movers can claim category authority." },
      { q: "Is local SEO important in Kuwait City?", a: "Very. A large share of searches have local intent, and an optimised Google Business Profile with accurate listings and genuine reviews captures ready-to-act customers across Kuwait City, Salmiya and Hawally." },
      { q: "Does SEODXB work with Kuwait businesses remotely?", a: "Yes. We work with businesses across Kuwait City and the wider country, combining Gulf market knowledge with technical SEO, AEO and GEO expertise, starting with a free audit of your Google and AI search visibility." },
    ],
    ctaTitle: "Grow Your Kuwait City Business in Search",
    ctaDesc:
      "Book a free SEO audit. We'll review your Google and AI search visibility, study your Kuwait competitors, and map the fastest path to more qualified enquiries.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Kuwait City, Kuwait",
    extendedContent: [
      {
        heading: "Why Kuwait City Businesses Need a Specialist SEO Partner",
        paragraphs: [
          "Kuwait combines high spending power with heavy online research, yet its local SEO landscape is less saturated than markets such as Dubai. That creates a genuine opportunity: businesses that invest in proper search visibility now often face fewer well-optimised competitors, which means focused work can produce results more quickly. The window, however, is not permanent, and it favours those who move while it is open.",
          "As in the rest of the Gulf, the decisive levers are bilingual visibility and AI citation. Many Kuwaiti businesses rely on social media alone and neglect search entirely, while international competitors rank in English but miss Arabic demand. SEODXB builds Arabic and English SEO together and structures your content for AI answers, so you capture the searches your rivals overlook.",
        ],
      },
      {
        heading: "How We Approach SEO in Kuwait City",
        paragraphs: [
          "We start with a free audit of where you stand on Google and in AI answers, fix technical and local foundations, then build content and authority around your highest-intent topics. Because the market is still maturing, the early wins, an optimised profile and pages answering real buyer questions, tend to arrive sooner here than in more contested markets.",
          "We measure against business outcomes: rankings and AI citations for your priority terms, qualified organic traffic, and the enquiries, calls and bookings that follow. Consistent, bilingual, AI-aware SEO is how a Kuwait City business turns a maturing market into a lasting advantage.",
        ],
      },
    ],
  },

  // ── 4. SEO Agency Cork (Ireland) ──────────────────────────────────────────
  {
    slug: "seo-agency-cork",
    keyword: "SEO Agency Cork",
    badge: "Specialist SEO Agency for Cork",
    title: "SEO Agency Cork | SEODXB - SEO, AEO & GEO for Irish Business",
    metaDesc:
      "SEODXB is a specialist SEO agency for Cork businesses. Rank on Google, win the local pack, and get cited by AI engines like ChatGPT and AI Overviews. Free audit.",
    h1: "The SEO Agency Built for Cork Businesses",
    intro:
      "Cork is Ireland's second city and a genuine economic powerhouse, home to global pharma and technology employers alongside a deep base of ambitious SMEs and a strong tourism draw across Cork and Kerry. Its customers are digitally mature and quick to use AI assistants when they research. SEODXB helps Cork businesses rank on Google, win the local pack, and get cited by AI engines like ChatGPT, Perplexity and Google AI Overviews, without competing on price against generic Dublin agencies.",
    svgVariant: "ai",
    imageUrl: img("photo-1526129318478-62ed807ebdf9"),
    featuresTitle: "What Our Cork SEO Agency Delivers",
    featuresSubtitle:
      "A complete organic growth programme built around how Cork and Munster customers actually search.",
    features: [
      { title: "Cork Local & Map Pack SEO", desc: "Google Business Profile optimisation, consistent citations and review strategy to win the local pack and near-me searches across Cork city, the suburbs and wider Munster." },
      { title: "Technical SEO Foundation", desc: "We fix Core Web Vitals, crawl, indexation and structured-data issues, the base every ranking gain is built on, and a common weakness in older Irish SME sites." },
      { title: "Content That Ranks & Converts", desc: "Answer-first content structured for Google, featured snippets and AI answer engines, reflecting the real Cork and Irish market rather than generic filler." },
      { title: "AEO & GEO Optimisation", desc: "We structure your site and brand so ChatGPT, Perplexity, Gemini and Google AI Overviews cite you, essential in an English-language market where you compete against global sources." },
      { title: "Authority & Digital PR", desc: "Backlinks and mentions from credible Irish publications, industry bodies and local media that build the domain authority Google and AI engines reward." },
      { title: "Distinct Location & Service Pages", desc: "Genuinely useful area and service pages, not thin duplicated templates, so you rank across the districts and services that matter without doorway-page risk." },
    ],
    stats: enStats,
    faqTitle: "SEO Agency Cork - FAQs",
    faqs: [
      { q: "Why choose a specialist SEO agency for a Cork business?", a: "Cork businesses often compete for the same customers as Dublin-based firms and large global sources, so generic SEO rarely cuts through. A specialist approach that combines strong local SEO, genuinely useful content and AI-search optimisation is what wins in a mature, English-language market like Ireland." },
      { q: "How long does SEO take to work in Cork?", a: "Local and long-tail terms can improve within a few months, while competitive terms take longer. Content and authority compound, so results build steadily over six to twelve months. Consistency and focus on your strongest services and areas first produce results faster." },
      { q: "How do Cork businesses get cited by AI search engines?", a: "By leading pages with direct answers, using question-based headings, keeping business facts consistent across the web, and earning authority from credible Irish and international sources. Because Ireland operates in English, distinctly local, specific content is what lets you stand out against global competitors." },
      { q: "Is local SEO important for Cork businesses?", a: "Very. The map pack captures a large share of high-intent local clicks and calls, especially on mobile. An optimised Google Business Profile, consistent citations and genuine reviews are often the single highest-return focus for a Cork business." },
      { q: "Does SEODXB work with Irish businesses remotely?", a: "Yes. We work with businesses across Cork, Munster and Ireland, combining Irish market understanding with technical SEO, AEO and GEO expertise, starting with a free audit of your Google and AI search visibility." },
    ],
    ctaTitle: "Grow Your Cork Business in Search",
    ctaDesc:
      "Book a free SEO audit. We'll review your Google and AI search visibility, study your Cork competitors, and map the fastest path to more qualified enquiries.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Cork, Ireland",
    extendedContent: [
      {
        heading: "Why Cork Businesses Need a Specialist SEO Partner",
        paragraphs: [
          "Cork sits at the centre of one of Ireland's strongest regional economies, from the pharmaceutical cluster around Ringaskiddy and the technology employers in and around the city to a dense base of independent SMEs and a tourism sector that draws visitors across Cork and Kerry. That mix means real competition for search visibility, both from other Cork businesses and from Dublin firms and global brands chasing the same customers.",
          "Because Ireland operates in English, an unusual dynamic applies: your content competes for AI citations against large international publishers, not just local rivals. The businesses that win are those with genuinely useful, distinctly Irish content and a well-managed local presence. SEODXB focuses on exactly that, so a Cork business can hold its own without trying to outspend national agencies.",
        ],
      },
      {
        heading: "How We Approach SEO in Cork",
        paragraphs: [
          "We audit where you stand on Google and in AI answers, fix the technical and local foundations that older SME sites often neglect, then build the content and authority that compound over time. We concentrate first on your strongest services and areas to build momentum, rather than spreading effort thinly across everything at once.",
          "Throughout, we measure against outcomes that matter: local pack visibility and organic rankings for your priority terms, AI citations in your category, qualified organic traffic, and the enquiries and bookings that follow. For a Cork business, a focused, AI-aware SEO programme is a more durable investment than paid search, because the advantage it builds keeps working after the work is done.",
        ],
      },
    ],
  },

  // ── 5. SEO for Holiday Homes Dubai (UAE short-term rental vertical) ───────
  {
    slug: "seo-for-holiday-homes-dubai",
    keyword: "SEO for Holiday Homes Dubai",
    badge: "SEO for Dubai Holiday Home Operators",
    title: "SEO for Holiday Homes Dubai | SEODXB - Direct Bookings",
    metaDesc:
      "Specialist SEO for Dubai holiday home and short-term rental operators. Win direct bookings, cut OTA commission, and get found on Google and AI search. Free audit.",
    h1: "SEO for Holiday Homes in Dubai: Win Direct Bookings",
    intro:
      "Dubai's licensed holiday home market is one of the busiest short-term rental sectors in the world, from Marina and JBR apartments to Downtown, Palm Jumeirah and Business Bay. Most operators hand a large share of every booking to online travel agencies in commission. SEODXB helps Dubai holiday home operators rank on Google, get found in AI travel research, and build a direct-booking channel that keeps more of each reservation, without relying solely on OTAs.",
    svgVariant: "growth",
    imageUrl: img("photo-1512453979798-5ea266f8880c"),
    featuresTitle: "What Our Holiday Home SEO Covers",
    featuresSubtitle:
      "A direct-booking growth programme built for licensed Dubai short-term rental operators.",
    features: [
      { title: "Direct-Booking SEO Strategy", desc: "We build your website into a booking channel that ranks for the searches travellers use, so you capture reservations directly and reduce the commission paid to OTAs on every stay." },
      { title: "Area & Property-Type Pages", desc: "Genuinely useful pages for the communities and property types you operate, from Marina and JBR to Downtown and Palm Jumeirah, matching how guests actually search." },
      { title: "Technical & Speed SEO", desc: "Fast, mobile-first, crawlable pages with clean structured data, because travellers research and book on phones and abandon slow sites." },
      { title: "Local & Map Visibility", desc: "Google Business Profile and local signals so your holiday home brand appears in maps and near-me searches around Dubai's key tourist districts." },
      { title: "AEO & GEO for Travel Research", desc: "We structure your content so AI tools recommending Dubai stays can cite you, capturing travellers who now plan trips through ChatGPT, Gemini and AI Overviews." },
      { title: "Review & Trust Signals", desc: "A strategy for genuine guest reviews and clear trust signals, the factors that convert holiday-home searches into direct bookings." },
    ],
    stats: enStats,
    faqTitle: "Holiday Home SEO in Dubai - FAQs",
    faqs: [
      { q: "Can SEO really reduce my reliance on Airbnb and Booking.com?", a: "Yes, over time. SEO builds a direct-booking channel where travellers find and book you through your own website, so you keep the commission an OTA would otherwise take. It rarely replaces OTAs entirely, but a strong direct channel meaningfully improves margins and gives you a guest relationship you own." },
      { q: "How do travellers search for Dubai holiday homes?", a: "They search by community and property type, such as a Marina apartment or a Palm villa, by dates and budget, and increasingly by asking AI tools for recommendations. Content that matches those searches, backed by fast pages and genuine reviews, is what captures the booking." },
      { q: "How long does holiday home SEO take to show results?", a: "Long-tail and community-specific terms can improve within a few months, while more competitive travel terms take longer. Because content and authority compound, the direct-booking channel strengthens steadily. Seasonal demand also means timing content ahead of peak periods matters." },
      { q: "Do I need a separate page for each community I operate in?", a: "Where each page is genuinely useful and distinct, yes, because guests search by area and property type. What we avoid is thin, duplicated templates with the location swapped, which Google holds back. Each page should reflect the real character and appeal of that community." },
      { q: "Does SEODXB work with licensed Dubai holiday home operators?", a: "Yes. We work with licensed short-term rental operators across Dubai, combining travel-sector SEO with technical, local and AI search expertise. We start with a free audit of your current visibility and direct-booking potential." },
    ],
    ctaTitle: "Build a Direct-Booking Channel for Your Dubai Rentals",
    ctaDesc:
      "Book a free SEO audit. We'll review your visibility, benchmark your direct-booking potential against OTA reliance, and map the fastest path to more direct reservations.",
    ctaButton: "Get Your Free SEO Audit",
    areaServed: "Dubai, United Arab Emirates",
    extendedContent: [
      {
        heading: "Why Dubai Holiday Home Operators Should Invest in SEO",
        paragraphs: [
          "Dubai's short-term rental market is large, licensed and fiercely competitive, and most operators depend heavily on online travel agencies that take a significant share of every booking. That dependence is convenient but costly: it compresses margins and leaves the guest relationship in the OTA's hands rather than yours. A direct-booking channel built on search visibility is the most durable way to change that balance.",
          "Search is where the shift happens. Travellers researching a Dubai stay move from broad ideas, a community, a property type, a set of dates, to a shortlist, and increasingly they ask AI tools for recommendations along the way. Holiday home operators whose websites rank for those searches and whose content AI can cite capture bookings directly, at a fraction of the effective cost of OTA commission.",
        ],
      },
      {
        heading: "How We Approach Holiday Home SEO in Dubai",
        paragraphs: [
          "We build genuinely useful pages for the communities and property types you operate, ensure the site is fast and mobile-first, and structure content so it ranks on Google and can be cited by AI travel research. We pair that with local visibility and a genuine review strategy, because trust signals are what turn a holiday-home search into a confirmed booking.",
          "We plan content around Dubai's seasonal demand so you are visible ahead of peak periods rather than chasing them, and we measure against the metric that matters most for your business: the growth of direct bookings relative to OTA reliance. The result is a channel you own, that compounds over time, and that keeps more of every reservation in your business.",
        ],
      },
    ],
  },
];
