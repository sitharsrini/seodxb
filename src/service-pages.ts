export interface ServicePage {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroIntro: string;
  answer: string;
  signs: string[];
  deliverables: { title: string; body: string }[];
  process: { title: string; body: string }[];
  first90: { period: string; body: string }[];
  faqs: { q: string; a: string }[];
  industries: string[];
  posts: string[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    id: "strategy",
    slug: "marketing-strategy",
    title: "Marketing Strategy Consultant in Dubai | SEODXB",
    description:
      "A marketing strategy built around revenue: positioning, ideal customer, channel plan, budget and KPIs for businesses in Dubai and the UAE.",
    heroTitle: "Marketing strategy that tells you where to spend, and where not to",
    heroIntro:
      "Before you spend on ads, SEO or content, you need to know who you are selling to, why they should choose you and which channels can realistically pay back. That is what a marketing strategy is for.",
    answer:
      "A marketing strategy defines who your ideal customers are, how you are positioned against competitors, which channels will reach those customers at a cost you can afford, how much to spend and how success will be measured. SEODXB builds strategies for UAE businesses around revenue targets rather than activity, then helps execute them across search, ads, websites and content.",
    signs: [
      "You spend on marketing every month but cannot say which channel brings customers.",
      "You are launching, entering the UAE or adding a new service.",
      "Several suppliers run separate channels and nobody owns the overall plan.",
      "Growth has stalled and more of the same is not working.",
    ],
    deliverables: [
      { title: "Market and competitor review", body: "Who else your customers consider, how they position themselves, where they are strong and where the gaps are." },
      { title: "Ideal customer profile", body: "The customers most worth winning, what triggers them to buy, what they worry about and where they look for answers." },
      { title: "Positioning and messaging", body: "A clear statement of why you are the better choice, and the core messages every channel should repeat." },
      { title: "Channel plan and budget", body: "Which channels to use first, how much to spend on each, and what results would justify scaling." },
      { title: "KPI framework and tracking plan", body: "The handful of numbers that matter, such as cost per qualified lead and pipeline value, and how to measure them." },
      { title: "90-day action plan", body: "Priorities, owners and dates for the first quarter, so the strategy turns into work immediately." },
    ],
    process: [
      { title: "Discovery", body: "Interviews with you and your sales team, a review of your numbers, website, tracking and current marketing." },
      { title: "Research", body: "Competitor, search demand and customer research for your market in the UAE and any target regions." },
      { title: "Strategy workshop", body: "We present findings and options and agree the direction together." },
      { title: "Plan and handover", body: "A written strategy and 90-day plan, with the option for SEODXB to run the execution." },
    ],
    first90: [
      { period: "Weeks 1 to 2", body: "Discovery, data review and tracking audit." },
      { period: "Weeks 3 to 4", body: "Research, strategy workshop and agreed plan." },
      { period: "Months 2 to 3", body: "Priority actions launched and first monthly review against the agreed KPIs." },
    ],
    faqs: [
      { q: "What does a marketing strategy include?", a: "A market and competitor review, ideal customer profile, positioning and messaging, a channel plan with budget, a KPI framework and a 90-day action plan." },
      { q: "How long does it take to build a marketing strategy?", a: "Most strategies take three to four weeks from discovery to a written plan, depending on how much data and research is involved." },
      { q: "Do you also execute the strategy?", a: "Yes. Many clients ask SEODXB to run the plan across SEO, ads, websites and content, but you can also use the strategy with your own team or other suppliers." },
      { q: "Is a strategy worth it for a small business?", a: "Often more so, because small budgets cannot afford to be spread across channels that do not work. A focused plan usually saves more than it costs." },
      { q: "Can you build a strategy for entering the UAE market?", a: "Yes. We help international companies understand UAE buyers, competitors, channels and budgets before launch, and can then run the go-to-market campaigns." },
    ],
    industries: ["real-estate", "construction", "education", "hotels"],
    posts: ["how-much-should-a-uae-business-spend-on-marketing", "questions-to-ask-before-hiring-a-marketing-agency-dubai", "seo-vs-google-ads-dubai-which-first"],
  },
  {
    id: "search",
    slug: "seo-aeo-geo",
    title: "SEO, AEO & GEO Agency in Dubai | SEODXB",
    description:
      "SEO services in Dubai that cover Google rankings, answer boxes and AI search visibility in ChatGPT, Gemini and Google AI Overviews.",
    heroTitle: "Be found on Google, in answers and inside AI tools",
    heroIntro:
      "Your customers search on Google, read direct answers, and increasingly ask ChatGPT, Gemini or Perplexity for recommendations. We build one search programme that makes your business visible and credible on all three.",
    answer:
      "SEO (search engine optimisation) helps your website rank in Google's results, AEO (answer engine optimisation) helps your content appear as direct answers and featured snippets, and GEO (generative engine optimisation) helps AI assistants such as ChatGPT, Gemini and Google AI Overviews find, trust and recommend your business. SEODXB delivers all three as one programme for UAE businesses, starting with technical health and the pages that match real buying intent.",
    signs: [
      "Competitors appear on Google, in the map results or in AI answers, and you do not.",
      "You rely on paid ads or portals for almost all enquiries.",
      "Your website gets visitors but few of them are buyers.",
      "You have never checked what ChatGPT or Google AI Overviews say about your business.",
    ],
    deliverables: [
      { title: "Technical SEO audit and fixes", body: "Crawling, indexing, speed, mobile usability, structured data and site structure, fixed in priority order." },
      { title: "Keyword and intent research", body: "The searches and questions your buyers use in English and, where relevant, Arabic, mapped to the right pages." },
      { title: "Service and location pages", body: "Pages written to rank and convert for your core services and the areas you serve." },
      { title: "Local SEO", body: "Google Business Profile optimisation, reviews strategy and consistent citations across UAE directories." },
      { title: "AEO: answer-ready content", body: "Clear question-and-answer content, FAQs and structured data that earn featured snippets and People Also Ask placements." },
      { title: "GEO: AI search visibility", body: "Entity consistency, llms.txt, AI crawler access, trusted third-party mentions and regular monitoring of what AI assistants say about you." },
    ],
    process: [
      { title: "Audit", body: "Technical, content, local and AI visibility audit, including how ChatGPT, Gemini and Perplexity currently describe you." },
      { title: "Plan", body: "A prioritised roadmap of fixes, pages and authority building tied to your commercial goals." },
      { title: "Build", body: "Technical fixes, new and improved pages, structured data and local optimisation." },
      { title: "Earn", body: "Reviews, digital PR and credible mentions that build authority for both Google and AI tools." },
      { title: "Measure", body: "Monthly reporting on enquiries from search, rankings for buying-intent terms and AI answer visibility." },
    ],
    first90: [
      { period: "Month 1", body: "Full audit, tracking setup, critical technical fixes and Google Business Profile optimisation." },
      { period: "Month 2", body: "Priority service and location pages improved or created, structured data and FAQ content added." },
      { period: "Month 3", body: "Authority building begins, AI visibility baseline recorded and first review of enquiries from search." },
    ],
    faqs: [
      { q: "What is the difference between SEO, AEO and GEO?", a: "SEO earns rankings in search results, AEO earns direct answers and featured snippets, and GEO earns mentions and recommendations inside AI assistants. They share the same foundations and work best together." },
      { q: "How long does SEO take to work in Dubai?", a: "Technical and local improvements can show results within weeks. Ranking for competitive commercial searches usually takes several months of consistent work, depending on your starting point and competition." },
      { q: "Can you guarantee first-page rankings or AI mentions?", a: "No honest agency can guarantee rankings or AI recommendations, because search engines and AI tools decide. We commit to the work, transparent reporting and measurable progress in enquiries." },
      { q: "Do you do Arabic SEO?", a: "Yes. We research Arabic keywords separately and help structure bilingual websites correctly, with native-speaker content." },
      { q: "How do you measure AI search visibility?", a: "We regularly ask the main AI assistants the questions your customers ask and record whether you are mentioned, how you are described and which competitors appear, alongside traffic from AI tools where it can be measured." },
    ],
    industries: ["real-estate", "dental-clinics", "restaurants", "cleaning-companies"],
    posts: ["seo-vs-aeo-vs-geo-explained", "get-recommended-by-chatgpt-google-ai-overviews", "google-business-profile-setup-checklist-dubai", "arabic-english-bilingual-website-seo-uae"],
  },
  {
    id: "ads",
    slug: "performance-advertising",
    title: "Google Ads & Meta Ads Agency in Dubai | SEODXB",
    description:
      "Google, Meta, LinkedIn and TikTok ads managed against cost per qualified lead, with conversion tracking for forms, calls and WhatsApp.",
    heroTitle: "Ads managed against cost per lead, not clicks",
    heroIntro:
      "Paid media is the fastest way to fill a pipeline, and the fastest way to waste money. We set up tracking first, launch focused campaigns, and scale only what produces qualified enquiries at a cost you can afford.",
    answer:
      "Performance advertising means running paid campaigns on platforms such as Google, Meta, LinkedIn and TikTok and managing them against business results like cost per qualified lead and revenue, rather than clicks or impressions. SEODXB sets up reliable tracking for forms, calls and WhatsApp before spending, then tests, optimises and scales campaigns for UAE businesses based on real enquiry data.",
    signs: [
      "Your ad platforms report conversions, but your sales team disagrees.",
      "You are not sure how many enquiries come from WhatsApp or calls.",
      "Costs per lead keep rising and nobody can explain why.",
      "You need enquiries this quarter while SEO builds.",
    ],
    deliverables: [
      { title: "Tracking and analytics setup", body: "Google Analytics 4 key events, ad platform conversions and call and WhatsApp tracking, tested before launch." },
      { title: "Google Ads", body: "Search, Performance Max, Shopping and YouTube campaigns built around high-intent searches." },
      { title: "Meta, LinkedIn and TikTok", body: "Audience strategy, creative testing and lead campaigns for the platforms your buyers use." },
      { title: "Landing pages", body: "Focused pages that continue the conversation the ad started and make enquiring easy." },
      { title: "Creative testing", body: "Structured tests of messages, formats and offers so budget moves to what works." },
      { title: "Weekly optimisation and monthly reviews", body: "Bids, budgets, keywords and audiences managed weekly, with a monthly review of cost per qualified lead." },
    ],
    process: [
      { title: "Tracking first", body: "We confirm every enquiry type is measured correctly before spending." },
      { title: "Focused launch", body: "A small number of well-structured campaigns aimed at the highest-intent audiences." },
      { title: "Learn", body: "Weekly analysis of search terms, audiences and creative against real lead quality." },
      { title: "Scale", body: "Budget moves to proven campaigns and new tests are added steadily." },
    ],
    first90: [
      { period: "Weeks 1 to 2", body: "Account audit, tracking setup and testing, campaign and landing page build." },
      { period: "Weeks 3 to 6", body: "Launch, daily monitoring and weekly optimisation, with lead quality feedback from your team." },
      { period: "Weeks 7 to 12", body: "Scale what works, pause what does not, and agree targets for the next quarter." },
    ],
    faqs: [
      { q: "How much should we spend on Google Ads in Dubai?", a: "It depends on your sector's click costs, your close rate and how many leads you need. We recommend working backwards from your revenue target and starting with a test budget before scaling." },
      { q: "Who owns the ad accounts?", a: "You do. Accounts are set up in your company's name with SEODXB as a user, and ad spend is billed by the platforms directly to you." },
      { q: "How soon do ads produce enquiries?", a: "Campaigns can produce enquiries within days of launch. It usually takes several weeks of data to optimise cost per qualified lead." },
      { q: "Do you run ads for regulated sectors like healthcare and real estate?", a: "Yes, within the rules. That includes health authority approvals for medical ads and Trakheesi permits for property ads in Dubai." },
      { q: "Do you track WhatsApp and phone leads?", a: "Yes. WhatsApp clicks, calls and forms are all tracked, and we recommend recording lead outcomes so campaigns are judged on real business results." },
    ],
    industries: ["car-dealers", "real-estate", "hotels", "gyms-fitness"],
    posts: ["track-whatsapp-call-form-leads-uae", "seo-vs-google-ads-dubai-which-first", "how-much-should-a-uae-business-spend-on-marketing"],
  },
  {
    id: "web-content-social",
    slug: "websites-content-social",
    title: "Website Design, Content & Social Media in Dubai | SEODXB",
    description:
      "Fast, conversion-focused websites, content that earns trust and consistent social media management for businesses in Dubai and the UAE.",
    heroTitle: "Websites, content and social that turn attention into enquiries",
    heroIntro:
      "Every channel sends people somewhere. We build websites that load fast and convert, content that answers what buyers ask, and social media that keeps your brand credible between sales conversations.",
    answer:
      "A business website should load quickly on mobile, explain clearly what you do and for whom, show proof that you can be trusted and make enquiring easy, including by WhatsApp. SEODXB designs and improves websites for UAE businesses, writes content that ranks and answers real buyer questions, and manages social media so every channel supports search and advertising.",
    signs: [
      "Your website gets traffic but few enquiries.",
      "The site is slow, hard to update or looks outdated on mobile.",
      "Your content is generic and does not answer buyers' questions.",
      "Social media is inconsistent or disconnected from your sales goals.",
    ],
    deliverables: [
      { title: "Website design and development", body: "Fast, mobile-first websites built for search and conversion, in English and Arabic where needed." },
      { title: "Conversion improvements", body: "Clearer messaging, trust signals, WhatsApp and form improvements on your existing site." },
      { title: "Landing pages", body: "Campaign and service pages designed to turn visitors into enquiries." },
      { title: "Content writing", body: "Service pages, guides, case studies and FAQs written by people who understand your subject and market." },
      { title: "Social media management", body: "Content calendars, design, video and community management for Instagram, LinkedIn, TikTok and more." },
      { title: "Brand templates", body: "Reusable design templates so your team can produce on-brand content quickly." },
    ],
    process: [
      { title: "Discover", body: "Goals, audience, competitors and a review of your current site and content." },
      { title: "Structure", body: "Sitemap, page plan and messaging, designed around search intent and conversion." },
      { title: "Design and write", body: "Design, copy and content produced together so every page has a clear job." },
      { title: "Launch and improve", body: "Launch with tracking in place, then improve based on real visitor behaviour." },
    ],
    first90: [
      { period: "Month 1", body: "Discovery, structure and messaging, with quick conversion fixes on your current site." },
      { period: "Month 2", body: "Design, content writing and build of priority pages or the new website." },
      { period: "Month 3", body: "Launch, tracking, social content rhythm and the first conversion review." },
    ],
    faqs: [
      { q: "Do we need a new website or can you improve the current one?", a: "Often the current site can be improved with clearer messaging, trust signals, speed fixes and better enquiry options. We recommend a rebuild only when the structure or platform is holding you back." },
      { q: "Will we own the website?", a: "Yes. You own the domain, hosting account, code, design files and content." },
      { q: "Do you write content in Arabic?", a: "Yes. Arabic content is written or edited by native speakers, not machine translated." },
      { q: "Which social platforms should we be on?", a: "The ones your buyers use. For many B2B businesses that is LinkedIn; for consumer brands it is usually Instagram and TikTok. We recommend fewer platforms done well." },
      { q: "How do you use AI in content creation?", a: "AI can help with research and drafts, but every piece is reviewed and edited by people who understand your business, and facts are checked before publishing." },
    ],
    industries: ["home-furniture", "beauty-salons", "education", "construction"],
    posts: ["website-traffic-but-no-enquiries-conversion-checklist", "arabic-english-bilingual-website-seo-uae", "get-recommended-by-chatgpt-google-ai-overviews"],
  },
];

export const servicePath = (s: { slug: string }) => `/services/${s.slug}`;
