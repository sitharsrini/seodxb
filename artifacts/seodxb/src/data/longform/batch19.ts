import type { LongFormSpec } from "./types";

// Daily batch: current AI-search developments and commercial-intent market
// guides. Google AI Mode as the default search experience, Saudi Arabia's RHQ
// programme and B2B search, SEO for London financial services firms, measuring
// AI search visibility in Search Console, and SEO for Qatar's new city
// districts. British English. No em dashes. Writer: Srinivasan R.

const img = (id: string) => `https://images.unsplash.com/${id}?w=1200&auto=format&fit=crop&q=80`;

export const batch19: LongFormSpec[] = [
  // ── 1. Google AI Mode is now the default (trending) ───────────────────────
  {
    slug: "google-ai-mode-default-search-what-it-means-2026",
    category: "AI Search",
    title: "Google AI Mode Is Now the Default: What It Means for Your Business",
    excerpt: "Google AI Mode is the default search experience in 2026. What changes for rankings, clicks and how you get found.",
    heroImage: img("photo-1573804633927-bfcbcd909acd"),
    heroAlt: "Person using an AI-powered search interface on a laptop in 2026",
    intro: [
      "At Google I/O in May 2026, Google confirmed what the industry had watched coming for two years: AI Mode, its conversational, answer-first search experience, is now the default rather than an opt-in tab. It runs on Gemini 3.5 Flash, has passed a billion monthly users, and has rolled out across nearly two hundred countries and territories. For a business owner, the headline is simple. The way customers search has changed, and the page of ten blue links you optimised for over the past decade is no longer the whole game.",
      "This guide explains what AI Mode actually changes, what it does not, and what a sensible business should do about it in the second half of 2026. The short version is that the fundamentals of good SEO still matter, but the reward now goes to content that an AI system can read, trust and quote, not just content that ranks in a list a human scrolls through.",
    ],
    keyStats: [
      "Google AI Mode became the default search experience globally in 2026, powered by Gemini 3.5 Flash.",
      "AI Mode has passed one billion monthly users across roughly two hundred countries and territories.",
      "Google Search Console added Search Generative AI performance reports in June 2026.",
      "A single AI answer increasingly replaces a page of links for many informational queries.",
    ],
    sections: [
      {
        h: "What Actually Changed in 2026",
        p: [
          "For years, AI Overviews sat at the top of an otherwise familiar results page, and AI Mode lived behind a separate tab you had to choose. The change in 2026 is that the separation has effectively gone. For a growing share of queries, a searcher now receives an AI-generated, conversational answer whether or not they asked for one, with links and sources woven into and beneath that answer rather than listed as the main event.",
          "This matters because attention now lands first on the AI response. If your business is named, described or cited inside that answer, you are part of the customer's shortlist before they click anything. If you are not, you may never be seen, even when your website would have ranked perfectly well in the old ten-link format. Visibility has moved from position on a page to inclusion in an answer.",
        ],
        image: {
          url: img("photo-1518770660439-4636190af475"),
          alt: "Abstract representation of an AI language model processing search queries",
          caption: "AI Mode answers questions directly, so being cited in the answer now matters as much as ranking.",
        },
      },
      {
        h: "What Did Not Change",
        p: [
          "It would be a mistake to conclude that SEO is finished. AI Mode does not invent its answers from nothing. It draws on the same open web that Google has always crawled, and it favours sources it can parse cleanly and corroborate against other reputable pages. That means the disciplines that produced good rankings still produce good AI visibility: a fast, crawlable, well-structured site, content that genuinely answers real questions, accurate and consistent business information, and authority signals from credible third parties.",
          "What has changed is the emphasis. Clarity, structure and factual consistency now carry more weight than clever keyword placement. An article that states its answer plainly in the first two sentences, backs it with specifics, and is marked up with clean structured data is far easier for an AI system to lift and cite than a 2,000-word piece that buries its point beneath an introduction about the digital landscape.",
        ],
      },
      {
        h: "How to Earn a Place Inside AI Answers",
        p: [
          "Getting cited in an AI answer is the practical goal, and it follows a recognisable pattern. AI systems reward answer-first content, entity clarity, and third-party corroboration. Answer-first means leading each section with a direct, self-contained response to the question a buyer would actually ask. Entity clarity means describing who you are, what you do and where you operate consistently across your website, Google Business Profile, LinkedIn and any directories you appear in, so the machine can resolve you to a single confident entity.",
          "Corroboration is the part most businesses neglect. AI engines are more willing to name a business that credible outside sources also mention, whether that is regional press, an industry body, or a well-regarded directory. Earning genuine mentions from trusted sources is slow work, but it is what separates a business the AI names with confidence from one it leaves out because it cannot verify the claim.",
        ],
        list: [
          "Lead every important section with a direct 40 to 80 word answer",
          "Keep your name, category and location identical everywhere they appear",
          "Add clean, valid structured data for organisation, service and FAQ content",
          "Earn mentions from credible third parties, not just self-published pages",
          "Publish specifics, examples and figures rather than vague claims",
        ],
      },
      {
        h: "Measuring the New Reality",
        p: [
          "One genuinely useful development arrived alongside AI Mode. In June 2026, Google added Search Generative AI performance reports to Search Console, so you can begin to see how your content performs inside generative results rather than guessing. This does not give you a complete picture of every AI engine, but it is the first official window into how Google's own AI surfaces your pages, and it belongs in every serious reporting routine.",
          "Beyond Google, treat AI visibility as something you test rather than assume. Ask ChatGPT, Perplexity and Gemini the questions your customers ask, in the markets you serve, and record whether you appear. Repeating that test each month turns a vague worry into a measurable trend you can act on, and it tells you quickly whether the work you are doing is moving the needle.",
        ],
      },
      {
        h: "What a Sensible Business Should Do Now",
        p: [
          "Do not panic and do not overhaul everything at once. Start by making sure your foundations are sound, because AI Mode punishes technical weakness just as hard as classic search did. Then work through your most commercially important pages, rewriting them to answer the questions buyers actually ask, clearly and early, with structured data in place. Finally, invest steadily in the credibility signals that make an AI comfortable naming you.",
          "The businesses that will do well in the AI Mode era are not the ones chasing every new feature announcement. They are the ones that were already publishing genuinely useful, well-structured, verifiable content, and who have adjusted the emphasis rather than thrown out the discipline. That is a position any focused business can still reach in 2026.",
        ],
      },
    ],
    takeaway: "Google AI Mode becoming the default in 2026 shifts the prize from ranking in a list of links to being cited inside an AI answer. The fundamentals still hold: a sound technical site, clear answer-first content, consistent business information and genuine third-party authority. What changes is the emphasis on clarity, structure and verifiability. Fix your foundations, rewrite your key pages to answer real questions plainly, add clean structured data, and measure your visibility across Google's new generative reports and the major AI engines. SEODXB helps businesses adapt to AI search without abandoning what already works.",
    faqs: [
      { q: "Is SEO dead now that Google AI Mode is the default?", a: "No. AI Mode still draws its answers from the open web and favours sources it can parse and trust. The fundamentals of good SEO, a fast structured site, clear content and genuine authority, are exactly what earn citations in AI answers. The tactics shift toward clarity and structure, but the discipline remains." },
      { q: "What is the difference between AI Overviews and AI Mode?", a: "AI Overviews were AI summaries shown at the top of an otherwise standard results page. AI Mode is a fuller conversational search experience that, as of 2026, is the default rather than a separate tab, so many searchers now receive an AI answer whether or not they requested one." },
      { q: "How do I get my business cited in AI search answers?", a: "Publish answer-first content that responds directly to buyer questions, keep your business details consistent across your site, Google Business Profile and directories, add valid structured data, and earn mentions from credible third parties. AI engines name businesses they can parse and corroborate." },
      { q: "Can I track how my site performs in Google AI Mode?", a: "Partly. Google added Search Generative AI performance reports to Search Console in June 2026, which show how your pages perform in generative results. For other engines such as ChatGPT and Perplexity, test manually by asking the questions your customers ask and recording whether you appear." },
      { q: "Should I stop writing long articles for AI search?", a: "Not necessarily, but length for its own sake no longer helps. Lead with a clear, self-contained answer, then expand with specifics. AI systems lift concise, well-structured passages far more readily than long introductions that delay the point." },
      { q: "Does AI Mode affect local businesses?", a: "Yes. When someone asks an AI engine for the best provider in their area, it returns a short recommendation drawn from sources it trusts. An optimised Google Business Profile, consistent local listings and genuine reviews make a local business far more likely to be the one named." },
    ],
    references: [
      { title: "Google I/O 2026: Search updates", url: "https://blog.google/products-and-platforms/products/search/search-io-2026/", publisher: "Google" },
      { title: "Search Generative AI performance reports in Search Console", url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports", publisher: "Google" },
      { title: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", publisher: "Google" },
    ],
    related: [
      { label: "Generative Engine Optimisation (GEO)", href: "/geo" },
      { label: "Answer Engine Optimisation (AEO)", href: "/aeo" },
      { label: "How to Get Cited in Google AI Overviews", href: "/blog/how-to-get-cited-in-google-ai-overviews" },
    ],
  },

  // ── 2. Saudi RHQ programme and B2B search (Saudi, commercial) ─────────────
  {
    slug: "saudi-rhq-programme-b2b-search-riyadh",
    category: "Industry Guides",
    title: "The Saudi RHQ Programme and What It Means for B2B Search in Riyadh",
    excerpt: "Saudi Arabia's RHQ programme is pulling regional HQs to Riyadh. Why that reshapes B2B search and how to be found.",
    heroImage: img("photo-1578662996442-48f60103fc96"),
    heroAlt: "Riyadh skyline representing the growth of regional headquarters in Saudi Arabia",
    intro: [
      "Saudi Arabia's Regional Headquarters programme has quietly become one of the most consequential business policies in the Gulf. It is the scheme that persuades multinational companies to base their Middle East and North Africa leadership in Riyadh rather than elsewhere in the region, and since the start of 2024 it has carried real commercial teeth. An RHQ licence is now the gateway to most Saudi government contracts above a set threshold, which means a growing number of large organisations have a direct financial reason to establish a genuine Riyadh presence.",
      "For any business that sells to those organisations, or that competes for the same buyers, this changes the search landscape. More decision makers are now based in, or reporting into, Riyadh. More procurement happens through Saudi entities. This guide explains what the RHQ programme involves and, more usefully, what it means for how B2B companies should approach search and AI visibility in the Kingdom.",
    ],
    keyStats: [
      "Since 1 January 2024, an RHQ licence is the gateway to most Saudi government contracts above SAR 1 million.",
      "An RHQ must employ at least 15 full-time staff, including three C-suite executives, within its first year.",
      "The programme is designed to make companies genuinely operate from Riyadh, not maintain symbolic offices.",
      "Riyadh concentrates a rising share of regional B2B decision making as a result.",
    ],
    sections: [
      {
        h: "What the RHQ Programme Actually Requires",
        p: [
          "The Regional Headquarters programme, run through Saudi Arabia's investment ministry, grants a licence that carries a long tax incentive package and, crucially, access to government tenders that non-RHQ firms are largely shut out of. In return, the company must genuinely operate from Riyadh. Within a year of the licence being issued, it must employ at least fifteen full-time staff, including three C-suite executives, begin its mandatory strategic and management activities within six months, and take on additional functions such as sales and marketing support or financial management.",
          "The design intent is important for anyone selling into this market. The programme deliberately discourages symbolic offices and rewards real operations, which means the people who make regional buying decisions are increasingly physically in Riyadh, holding board meetings on Saudi soil and running functions from the Kingdom rather than from a hub elsewhere in the Gulf.",
        ],
        image: {
          url: img("photo-1541354329998-f4d9a9f9297f"),
          alt: "King Abdullah Financial District towers in Riyadh, a hub for regional headquarters",
          caption: "Riyadh's financial districts are drawing regional headquarters and the decision makers that come with them.",
        },
      },
      {
        h: "Why This Reshapes B2B Search",
        p: [
          "When regional decision making concentrates in one city, so does the search demand that surrounds it. Procurement leads, functional heads and their teams research suppliers, partners and service providers the same way everyone else does, by searching and, increasingly, by asking AI assistants. As more of those people operate from Riyadh, more high-value B2B searches carry Saudi intent, whether or not the searcher types the city name.",
          "The practical consequence is that a supplier who is invisible in Saudi search results, or absent from the AI answers Saudi buyers receive, is quietly excluded from a growing pool of serious opportunities. This is not about consumer volume. It is about being present at the moment a well-funded organisation researches who to work with, and that moment now happens in and around Riyadh far more than it did three years ago.",
        ],
      },
      {
        h: "What B2B Companies Should Do",
        p: [
          "The first move is to make sure your Saudi-facing content genuinely targets Saudi search intent rather than reusing Dubai or generic Gulf pages. That means content that speaks to Saudi buyers, references the realities of doing business in the Kingdom, and is available in Arabic as well as English, because a large share of high-intent B2B research still happens in Arabic. A supplier that only ranks in English is missing part of its own audience.",
          "The second move is to build the kind of authority that both Google and AI engines reward for considered B2B purchases. Case-relevant content, clear service definitions, consistent business information, and mentions from credible Saudi and regional sources all contribute. For considered B2B buying, trust signals matter more than for impulse purchases, so demonstrable expertise and third-party corroboration do a disproportionate amount of the work.",
        ],
        list: [
          "Build Saudi-specific pages, not lightly edited Dubai pages",
          "Invest in genuine Arabic content, not machine translation",
          "Define your services and outcomes clearly for procurement-style research",
          "Earn credibility signals from Saudi and regional sources",
          "Structure content so AI engines can quote your expertise directly",
        ],
      },
      {
        h: "The AI Search Angle for Saudi B2B",
        p: [
          "B2B buyers increasingly begin supplier research by asking an AI assistant to compare options or recommend providers for a specific need. For a considered purchase, the businesses that appear in those answers gain an early and durable advantage, because they enter the shortlist before a formal process begins. In a market where a policy shift is actively concentrating buyers in one place, being the default answer to a Saudi buyer's question is a genuinely valuable position.",
          "Because many competitors have not yet adapted their content for AI search in the Kingdom, there is a real opportunity for organised suppliers to establish themselves as the trusted, quotable source in their category now, before the field catches up. That window will not stay open indefinitely, which is the usual pattern whenever a search behaviour shifts faster than the supply of well-optimised content.",
        ],
      },
    ],
    takeaway: "Saudi Arabia's RHQ programme is pulling regional headquarters, and the decision makers who run them, into Riyadh, and since 2024 it has been tied directly to access to government contracts. That concentration of buyers reshapes B2B search: more high-value research now carries Saudi intent, in both Arabic and English. Suppliers who build genuinely Saudi-specific content, invest in real Arabic visibility, and structure their expertise so AI engines can quote it will be present at the moment serious buyers research who to work with. SEODXB helps B2B companies build that Saudi search and AI visibility.",
    faqs: [
      { q: "What is Saudi Arabia's RHQ programme?", a: "The Regional Headquarters programme grants multinationals a licence to base their Middle East and North Africa leadership in Riyadh, with tax incentives and, since 2024, access to most Saudi government contracts above SAR 1 million. In return the company must genuinely operate from Riyadh, including employing senior staff there." },
      { q: "Why does the RHQ programme matter for SEO and search?", a: "It concentrates regional decision making in Riyadh, so more high-value B2B research now carries Saudi intent. Suppliers who are invisible in Saudi search results or absent from AI answers are quietly excluded from a growing pool of serious opportunities in the Kingdom." },
      { q: "Do I need Arabic content to sell B2B in Saudi Arabia?", a: "In most cases yes. A large share of high-intent B2B research in the Kingdom happens in Arabic. Genuine Arabic content, not machine translation, captures buyers that English-only sites never reach, and it is often where the least competition sits." },
      { q: "Can I reuse my Dubai pages for the Saudi market?", a: "It rarely works well. Saudi buyers search with different intent and context, and lightly edited Dubai pages read as generic. Purpose-built Saudi pages that reflect the realities of the Kingdom perform far better in both Google and AI search." },
      { q: "How do B2B suppliers get recommended by AI engines in Saudi Arabia?", a: "By publishing clear, answer-first content about their services and outcomes, keeping business information consistent, and earning mentions from credible Saudi and regional sources. For considered B2B purchases, trust and corroboration carry more weight than for consumer queries." },
      { q: "Is now a good time to invest in Saudi search visibility?", a: "For many suppliers, yes. Because a policy shift is actively concentrating buyers in Riyadh while many competitors have not yet adapted their content for AI search, organised suppliers can establish themselves as the trusted source in their category before the field catches up." },
    ],
    references: [
      { title: "Invest Saudi: Regional Headquarters Programme", url: "https://investsaudi.sa/", publisher: "Ministry of Investment of Saudi Arabia" },
      { title: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", publisher: "Google" },
      { title: "General Authority for Statistics", url: "https://www.stats.gov.sa/en", publisher: "Kingdom of Saudi Arabia" },
    ],
    related: [
      { label: "SEO Agency Saudi Arabia", href: "/seo-agency-saudi-arabia" },
      { label: "SEO in Riyadh: Complete Guide", href: "/blog/seo-in-riyadh-complete-guide" },
      { label: "SEO for KAFD Riyadh Financial Firms", href: "/seo-kafd-riyadh" },
    ],
  },

  // ── 3. SEO for London financial services firms (UK, commercial) ───────────
  {
    slug: "seo-for-financial-services-firms-london",
    category: "Industry Guides",
    title: "SEO for Financial Services Firms in London",
    excerpt: "How London financial firms rank on Google and get cited by AI search while meeting FCA financial promotion rules.",
    heroImage: img("photo-1529101091764-c3526daf38fe"),
    heroAlt: "The City of London financial district representing SEO for financial services firms",
    intro: [
      "London remains one of the world's leading financial centres, and the firms that operate there, from wealth managers in Mayfair to fintechs in Shoreditch and banks in Canary Wharf and the City, face an unusual SEO challenge. They compete in one of the most crowded and sophisticated search markets anywhere, and they do it under financial promotion rules that most other industries never have to consider. Getting search right in this sector means being genuinely visible while staying firmly on the right side of the regulator.",
      "This guide sets out how financial services firms in London can rank on Google and earn citations from AI search engines, without falling foul of the compliance obligations that govern how regulated firms communicate with the public. The good news is that the disciplines that satisfy the regulator, clarity, accuracy and fair balance, are largely the same disciplines that AI search now rewards.",
    ],
    keyStats: [
      "London is one of the world's top financial centres, with intense competition across finance, fintech and professional services.",
      "Regulated firms must ensure financial promotions are clear, fair and not misleading under FCA rules.",
      "Financial buyers research extensively online before contacting a regulated firm.",
      "AI engines increasingly answer financial questions directly, drawing on sources they can trust.",
    ],
    sections: [
      {
        h: "The Compliance Constraint Comes First",
        p: [
          "For regulated firms, SEO cannot be separated from compliance. Any content that invites people to engage in investment activity is a financial promotion, and it must be clear, fair and not misleading. That rules out the exaggerated claims and pressure tactics that pass unremarked in other sectors. A financial services firm cannot promise guaranteed returns any more than a good SEO agency should promise guaranteed rankings, and the discipline of writing honestly is the same in both cases.",
          "This constraint is often treated as a limitation, but in the AI search era it is closer to an advantage. AI engines are built to favour accurate, balanced, well-sourced content and to be wary of overblown claims. Content written to satisfy a compliance team, with risk stated plainly and benefits described fairly, is exactly the kind of content an AI system is comfortable quoting. The regulator and the algorithm are, unusually, pulling in the same direction.",
        ],
        image: {
          url: img("photo-1554224155-6726b3ff858f"),
          alt: "Financial analyst reviewing data, representing compliant content for regulated firms",
          caption: "For regulated firms, clear and fair content satisfies both the FCA and the way AI engines assess sources.",
        },
      },
      {
        h: "Winning the London Search Market",
        p: [
          "London is fiercely competitive, so a financial firm rarely wins by chasing the broadest, most contested terms head on. The more productive route is depth and specificity. A wealth manager is better served by content that answers the precise questions a particular client type asks, about a particular situation, than by a generic page targeting a term that established institutions and comparison sites already dominate. Specific, high-intent content ranks more readily and attracts better-qualified enquiries.",
          "Local and district-level intent matters more than firms expect. Someone searching for an adviser or a firm near their office in Canary Wharf, the City or Mayfair is signalling strong intent, and a firm with genuine district-specific presence and an accurate, active Google Business Profile can capture searches that national competitors overlook. The combination of tight geographic targeting and deep topical content is how a focused firm competes against larger budgets.",
        ],
      },
      {
        h: "Earning AI Citations in Finance",
        p: [
          "Financial questions are among the most common things people now ask AI assistants, and the engines are deliberately cautious about which sources they draw on for money matters. They favour firms that demonstrate genuine expertise, cite their reasoning, keep their information consistent, and are corroborated by credible outside sources. For a regulated firm, this rewards exactly the professionalism the business already practises, provided that expertise is actually published rather than kept behind a login or a contact form.",
          "The practical work is to turn the knowledge your advisers already have into clear, structured, answer-first content that addresses real client questions. Add valid structured data, keep your firm's details identical across your website, LinkedIn and any professional directories, and ensure your authorship and credentials are visible. This is how a London firm becomes a source an AI engine trusts enough to name when someone asks for guidance in its specialism.",
        ],
        list: [
          "Write compliant, answer-first content that states risk fairly",
          "Target specific client questions rather than broad, contested terms",
          "Use district-level local intent across the City, Canary Wharf and Mayfair",
          "Publish genuine expertise with visible authorship and credentials",
          "Keep firm information consistent and add valid structured data",
        ],
      },
      {
        h: "Measuring What Matters for a Regulated Firm",
        p: [
          "For financial services, vanity metrics are especially misleading. Broad traffic to informational content means little if it does not convert into qualified enquiries from the right kind of client. The metrics worth tracking are rankings and AI citations for the specific, high-intent terms that matter to your specialism, the quality of enquiries generated, and the eventual conversion of those enquiries into clients. A smaller volume of well-qualified enquiries is almost always more valuable than a large volume of poorly matched interest.",
          "It is also worth measuring AI visibility directly. Ask the AI engines the questions your ideal clients ask, in the context they ask them, and record whether your firm is named. For a sector where a single new client can be highly valuable, being the firm an AI recommends to a serious enquirer is a position that repays the effort of getting the content and compliance right.",
        ],
      },
    ],
    takeaway: "Financial services firms in London compete in one of the world's toughest search markets under financial promotion rules that most industries never face. The constraint is really an advantage: clear, fair, accurate content satisfies both the FCA and the way AI engines assess trustworthy sources. Win by targeting specific, high-intent client questions rather than broad contested terms, using district-level local intent across the City, Canary Wharf and Mayfair, and publishing genuine expertise that AI engines can quote. Measure qualified enquiries and AI citations, not raw traffic. SEODXB helps regulated firms build compliant, effective search visibility.",
    faqs: [
      { q: "Can financial services firms do SEO under FCA rules?", a: "Yes, provided any content that promotes investment activity is a compliant financial promotion, meaning clear, fair and not misleading. In practice the honesty and balance the regulator requires align well with what AI search engines reward, so compliant content and effective content are largely the same thing." },
      { q: "How do London financial firms compete in such a crowded market?", a: "Not by chasing the broadest terms, which established institutions already dominate, but through depth and specificity. Content that answers precise, high-intent client questions, combined with genuine district-level local presence, ranks more readily and attracts better-qualified enquiries." },
      { q: "Does local SEO matter for financial firms in London?", a: "Yes. District-level intent is strong, so a firm with genuine presence and an accurate Google Business Profile in areas such as the City, Canary Wharf or Mayfair can capture high-intent searches that broader national competitors overlook." },
      { q: "How do regulated firms get cited by AI engines?", a: "AI engines are cautious about financial sources and favour firms that demonstrate real expertise, cite their reasoning, keep information consistent, and are corroborated by credible sources. Publishing genuine, clearly authored expertise rather than hiding it is what earns citations." },
      { q: "What SEO metrics should a financial services firm track?", a: "Rankings and AI citations for specific high-intent terms in your specialism, the quality of enquiries generated, and their conversion into clients. Broad traffic is a poor guide in finance, where a small number of well-matched enquiries is worth more than high volume." },
      { q: "Can an SEO agency guarantee rankings for my financial firm?", a: "No reputable agency can, just as no regulated firm can promise guaranteed returns. Rankings depend on competition and Google's judgement. A credible agency commits to sound method and honest reporting, not to guarantees." },
    ],
    references: [
      { title: "FCA: Financial promotions and adverts", url: "https://www.fca.org.uk/firms/financial-promotions-and-adverts", publisher: "Financial Conduct Authority" },
      { title: "Google Search Central: Creating helpful, reliable content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", publisher: "Google" },
      { title: "Google Business Profile", url: "https://www.google.com/business/", publisher: "Google" },
    ],
    related: [
      { label: "SEO for Canary Wharf Financial Firms", href: "/seo-canary-wharf" },
      { label: "SEO for the City of London", href: "/seo-city-of-london" },
      { label: "SEO in London", href: "/seo-london" },
    ],
  },

  // ── 4. Measuring AI search visibility (how-to, all markets) ───────────────
  {
    slug: "measuring-ai-search-visibility-search-console-2026",
    category: "AI Search",
    title: "How to Measure Your AI Search Visibility in 2026",
    excerpt: "A practical way to measure whether AI engines cite your business, using Search Console reports and repeatable tests.",
    heroImage: img("photo-1551288049-bebda4e38f71"),
    heroAlt: "Analytics dashboard representing measurement of AI search visibility in 2026",
    intro: [
      "For most of the last two years, businesses investing in AI search visibility have been working partly blind. They understood that being cited by ChatGPT, Perplexity and Google's AI answers mattered, but they had no reliable way to measure whether their efforts were working. That has started to change. In June 2026, Google added Search Generative AI performance reports to Search Console, giving businesses their first official view of how content performs inside generative results, and a handful of practical testing methods now fill the remaining gaps.",
      "This guide sets out a repeatable way to measure AI search visibility that does not rely on guesswork or on tools that overpromise. It combines what Google now reports directly with simple, disciplined manual testing across the major AI engines, so you can tell whether your visibility is improving, holding steady or slipping, and act accordingly.",
    ],
    keyStats: [
      "Google added Search Generative AI performance reports to Search Console in June 2026.",
      "No single tool yet reports citations across every AI engine, so manual testing still matters.",
      "AI answers vary by phrasing and location, so tests must be consistent to be comparable.",
      "Tracking visibility monthly turns a vague worry into a measurable trend.",
    ],
    sections: [
      {
        h: "Start With What Google Now Reports",
        p: [
          "The first place to look is Search Console. Google's Search Generative AI performance reports, introduced in June 2026, show how your pages perform within generative results rather than only in the traditional link listings. This is the closest thing to an authoritative source, because it comes from Google itself and reflects your actual pages against real queries, not a third party's estimate. Reviewing it regularly tells you which of your pages Google's own AI is surfacing and for what.",
          "Treat this as your baseline, but understand its limits. It covers Google's generative surfaces, not ChatGPT, Perplexity, Claude or Copilot, and it reflects Google's evolving reporting rather than a complete census of every AI mention. It is a genuine window, and the first official one, but it is one window, not the whole view. That is why manual testing across other engines remains necessary.",
        ],
        image: {
          url: img("photo-1460925895917-afdab827c52f"),
          alt: "Person reviewing search performance data on a screen",
          caption: "Search Console's generative reports are the authoritative baseline, but they cover only Google's surfaces.",
        },
      },
      {
        h: "Build a Repeatable Manual Test",
        p: [
          "For the engines Google does not report on, disciplined manual testing is still the most honest method. The key word is disciplined. Write down the exact questions your customers ask, in the exact wording they would use, for the markets you serve. Then ask each major engine those same questions on a fixed schedule, and record whether your business is named, how it is described, and which of your pages, if any, is cited. Consistency is what makes the results comparable month to month.",
          "Keep the conditions stable. AI answers vary with phrasing, with location, and with the account and history behind the session, so change as little as possible between tests. Use the same question set, note the date, and where possible test from the location you are targeting. A messy, inconsistent test tells you almost nothing, while a stable one quickly reveals whether your visibility is trending up or down.",
        ],
        list: [
          "List the exact questions your customers ask, in their own words",
          "Ask each engine the same set on a fixed monthly schedule",
          "Record whether you are named, how, and which page is cited",
          "Hold phrasing, location and account conditions as steady as you can",
          "Log every result with a date so you can see the trend",
        ],
      },
      {
        h: "Watch the Signals That Precede Citations",
        p: [
          "Citations are the outcome, but several upstream signals move first and are worth tracking because they tell you whether you are building the foundations that citations rest on. These include how consistently your business is described across the web, whether credible third parties mention you, whether your structured data is valid, and whether your key pages answer questions clearly and early. Improvement in these signals typically precedes improvement in citations, so watching them gives you an earlier read than waiting for the citation itself.",
          "Branded search is another useful leading indicator. When AI engines begin surfacing a business, curious searchers often follow up by searching its name directly, so a steady rise in branded impressions and clicks in Search Console can be an early sign that AI visibility is growing even before it shows clearly in the generative reports. No single signal is definitive, but together they form a reliable picture.",
        ],
      },
      {
        h: "Turn Measurement Into Action",
        p: [
          "Measurement only earns its keep if it changes what you do. If a set of questions consistently fails to name you, that is a precise brief: those are the topics where your content is not yet clear, structured or authoritative enough to be quoted. Rewrite the relevant pages to answer those exact questions plainly, strengthen the supporting signals, and re-test the following month. Over time this loop, measure, identify gaps, improve, re-measure, is what steadily expands the range of questions for which you are the answer.",
          "Resist the temptation to over-invest in tooling that claims to track every AI mention automatically. The honest state of measurement in 2026 is that Google's own reports plus a disciplined manual routine will tell you what you need to know, at a fraction of the cost and with far less false precision than tools that imply certainty they cannot deliver.",
        ],
      },
    ],
    takeaway: "You can no longer treat AI search visibility as unmeasurable. Start with Google's Search Generative AI performance reports in Search Console, added in June 2026, as your authoritative baseline for Google's surfaces. Fill the gaps with a disciplined, repeatable manual test across ChatGPT, Perplexity and other engines, holding conditions steady so results are comparable. Track upstream signals such as consistency, third-party mentions and branded search, which move before citations do. Then close the loop by rewriting the pages that fail to earn a mention. SEODXB helps businesses measure and improve their visibility across every search surface.",
    faqs: [
      { q: "Can I see how my site performs in Google's AI results?", a: "Yes, in part. Google added Search Generative AI performance reports to Search Console in June 2026, which show how your pages perform within generative results. It covers Google's surfaces rather than every AI engine, so it is a baseline rather than a complete view." },
      { q: "How do I know if ChatGPT or Perplexity cites my business?", a: "Test manually and consistently. Ask each engine the exact questions your customers ask, on a fixed schedule, and record whether you are named and which page is cited. Holding phrasing and location steady makes the results comparable over time." },
      { q: "Is there a tool that tracks all AI citations automatically?", a: "No single tool reliably reports citations across every AI engine in 2026. Some claim to, but the honest position is that Google's own reports combined with a disciplined manual routine give you a trustworthy picture without the false precision such tools imply." },
      { q: "How often should I measure AI search visibility?", a: "Monthly is a sensible cadence for most businesses. It is frequent enough to reveal trends and to test whether changes are working, without generating noise from the natural week-to-week variation in how AI engines answer." },
      { q: "What signals improve before AI citations do?", a: "Consistency of your business information, credible third-party mentions, valid structured data, clear answer-first content, and rising branded search. These foundations typically strengthen before citations increase, so tracking them gives you an earlier read than citations alone." },
      { q: "What should I do if AI engines never mention my business?", a: "Treat the failing questions as a brief. They mark the topics where your content is not yet clear, structured or authoritative enough to be quoted. Rewrite those pages to answer the exact questions plainly, strengthen supporting signals, and re-test the following month." },
    ],
    references: [
      { title: "Search Generative AI performance reports in Search Console", url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports", publisher: "Google" },
      { title: "Google Search Central: Search Console", url: "https://developers.google.com/search/docs/monitor-debug/search-console-start", publisher: "Google" },
      { title: "Google Search Central: Creating helpful, reliable content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", publisher: "Google" },
    ],
    related: [
      { label: "Generative Engine Optimisation (GEO)", href: "/geo" },
      { label: "Google AI Mode Is Now the Default", href: "/blog/google-ai-mode-default-search-what-it-means-2026" },
      { label: "How to Get Cited in Google AI Overviews", href: "/blog/how-to-get-cited-in-google-ai-overviews" },
    ],
  },

  // ── 5. SEO for Qatar's new city districts (Qatar, local) ──────────────────
  {
    slug: "seo-for-qatar-new-city-districts-lusail",
    category: "Industry Guides",
    title: "SEO for Businesses in Qatar's New City Districts",
    excerpt: "As commerce shifts to Lusail and Qatar's new districts, here is how businesses there get found on Google and AI.",
    heroImage: img("photo-1518684079-3c830dcef090"),
    heroAlt: "Lusail city skyline representing SEO for businesses in Qatar's new districts",
    intro: [
      "Qatar's commercial centre of gravity is moving. Lusail, the purpose-built city just north of Doha, has grown from a construction site into a genuine business and residential district, and areas such as West Bay and the developments around them continue to fill with new companies, retail and services. For a business opening in one of these districts, the challenge is immediate: the customers exist, but discovery happens online, and a new location with no search presence is effectively invisible however impressive the physical premises.",
      "This guide explains how businesses in Lusail and Qatar's other new districts can build search visibility quickly, on both Google and the AI engines that Qatari and expatriate customers increasingly rely on. The particular difficulty of a new district is that the place itself is still establishing its search footprint, which is both a challenge and, for the businesses that move early, a real opportunity.",
    ],
    keyStats: [
      "Lusail has grown into a genuine business and residential district north of Doha.",
      "Customers in Qatar research online before visiting, in both Arabic and English.",
      "New districts have a thinner search footprint, which early movers can claim.",
      "AI engines answer location and neighbourhood questions directly.",
    ],
    sections: [
      {
        h: "Why New Districts Are a Distinct SEO Problem",
        p: [
          "An established area has years of accumulated search signals: businesses with mature listings, reviews built up over time, and content that has been indexed and refined. A new district has almost none of that. When a business opens in Lusail, it is not slotting into an existing web of local search results, it is helping to create one. That means the usual assumption, that you are fighting to rank above established competitors, often does not hold. The competition for district-specific searches can be surprisingly thin.",
          "This is the opportunity. In an area where few businesses have yet built a proper search presence, an organised newcomer can become the visible default for its category and location faster than would ever be possible in a mature market. The window does not stay open forever, because others will eventually catch on, but for now the businesses that treat search seriously from day one can establish positions that later arrivals will struggle to displace.",
        ],
        image: {
          url: img("photo-1512453979798-5ea266f8880c"),
          alt: "Modern Doha and Lusail cityscape representing Qatar's growing commercial districts",
          caption: "New districts start with a thin search footprint, so early movers can claim positions cheaply.",
        },
      },
      {
        h: "Get the Local Foundations Right First",
        p: [
          "The fastest wins in a new district come from local SEO. A complete, accurate Google Business Profile that names the district precisely, uses the correct category, and carries genuine early reviews will begin capturing local-intent searches quickly. Consistency matters more than usual here, because in a new area there is no established record for search engines to fall back on, so every listing, citation and mention of your address and details needs to agree exactly. Inconsistency confuses the very signals you are trying to establish.",
          "Because the district itself is new, be explicit about location in your content. Name the district, reference nearby landmarks and developments, and answer the practical questions newcomers ask about finding and reaching you. This helps both human searchers who are still learning the area and the search and AI systems that are building their own understanding of what exists there and where.",
        ],
        list: [
          "Complete and verify a precise, district-specific Google Business Profile",
          "Keep your name, address and details identical across every listing",
          "Gather genuine early reviews to build a local track record",
          "Name the district and nearby landmarks explicitly in your content",
          "Answer the practical location questions newcomers actually ask",
        ],
      },
      {
        h: "Build Content and AI Visibility for a Bilingual Audience",
        p: [
          "Qatar is a bilingual search market, and new districts like Lusail draw a mix of Qatari nationals, long-term residents and newly arrived expatriates, all searching in Arabic or English depending on who they are. A business that publishes only in English misses a meaningful share of high-intent local searches. Genuine bilingual content, written to read naturally in each language rather than translated mechanically, captures customers that single-language competitors never see.",
          "The same content that serves human searchers well also positions a business to be named by AI engines when someone asks for a recommendation in the district. Clear, answer-first content about what you offer and where, combined with consistent business information and genuine reviews, is what makes an AI comfortable naming you. In a new district where few competitors have done this work, being the business the AI recommends is an unusually attainable position.",
        ],
      },
      {
        h: "How to Sequence the Work",
        p: [
          "A sensible order avoids wasted effort. Begin with the local foundations, because they produce the quickest returns and establish the consistent signals everything else builds on. Then add district-specific content that answers real customer questions and names your location clearly. Finally, structure that content so AI engines can quote it, and begin earning the third-party mentions that build lasting authority. This sequence delivers early visibility while compounding into a durable position.",
          "Measure against outcomes that matter for a new location: enquiries, calls, bookings and visits, not raw impressions. In a district that is still growing, steady month-on-month growth in genuine local enquiries is the clearest sign that your search presence is doing its job, and it is a far more reliable guide than vanity metrics that flatter without informing.",
        ],
      },
    ],
    takeaway: "As commerce shifts to Lusail and Qatar's other new districts, businesses there face a distinct SEO problem: the area itself is still building its search footprint, so there is little to slot into and, crucially, little competition for district-specific searches. Early movers can claim visible positions cheaply. Start with precise, consistent local foundations and genuine early reviews, add district-specific bilingual content that names your location clearly, then structure it so AI engines can quote you. Measure real enquiries, not impressions. SEODXB helps businesses in Qatar's new districts become the default answer before competitors catch on.",
    faqs: [
      { q: "Is SEO different for a business in a new district like Lusail?", a: "Yes. A new district has few established search signals, so you are helping to create the local results rather than fighting to rank above mature competitors. Competition for district-specific searches is often thin, which lets organised early movers claim visible positions quickly." },
      { q: "What is the fastest way to get found in Lusail or West Bay?", a: "Local SEO. A complete, accurate Google Business Profile that names the district precisely, uses the right category and carries genuine early reviews will start capturing local-intent searches quickly, especially where few competitors have done the same." },
      { q: "Do I need Arabic content for a business in Qatar's new districts?", a: "In most cases yes. Qatar is bilingual and new districts draw nationals, residents and expatriates who search in both Arabic and English. Genuine bilingual content, not machine translation, captures high-intent searches that English-only sites miss." },
      { q: "How do businesses in new Qatari districts get recommended by AI engines?", a: "By publishing clear, answer-first content about what they offer and where, keeping business information consistent, and earning genuine reviews and third-party mentions. In a new district where few competitors have done this, being the AI's recommendation is unusually attainable." },
      { q: "Why is consistency so important for a new-district business?", a: "Because there is no established record for search engines to fall back on. Every listing, citation and mention of your name, address and details needs to agree exactly, or you confuse the very local signals you are trying to establish from scratch." },
      { q: "What should a new-district business measure?", a: "Real outcomes: enquiries, calls, bookings and visits, rather than impressions. In a growing district, steady month-on-month growth in genuine local enquiries is the clearest sign your search presence is working." },
    ],
    references: [
      { title: "Google Business Profile", url: "https://www.google.com/business/", publisher: "Google" },
      { title: "Google Search Central: Local SEO", url: "https://developers.google.com/search/docs/appearance/local-business", publisher: "Google" },
      { title: "Qatar Planning and Statistics Authority", url: "https://www.psa.gov.qa/en/pages/default.aspx", publisher: "State of Qatar" },
    ],
    related: [
      { label: "SEO for Lusail Businesses", href: "/seo-lusail" },
      { label: "SEO in Qatar: Complete Guide", href: "/blog/seo-in-qatar-complete-guide-2026" },
      { label: "SEO Agency Qatar", href: "/seo-agency-qatar" },
    ],
  },
];
