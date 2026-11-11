import type { ServicePage } from "./service-pages";

export const SEARCH_EXTRA: ServicePage[] = [
  {
    id: "technical-seo",
    slug: "technical-seo-services",
    name: "Technical SEO",
    parent: "search",
    title: "Technical SEO Services in Dubai | SEODXB",
    description:
      "Technical SEO for Dubai and UAE websites: crawling, indexing, site speed, structured data, redirects, migrations and English and Arabic hreflang.",
    heroTitle: "A website Google can crawl, understand and trust",
    heroIntro:
      "Great content cannot rank if search engines cannot reach it, render it or understand it. We find what is blocking your site, fix the problems in order of impact, and set up checks so they do not come back after the next update or redesign.",
    answer:
      "Technical SEO is the work that makes a website easy for search engines to crawl, render, index and understand. It covers site structure, speed, mobile usability, structured data, redirects and language settings. SEODXB audits and fixes the technical foundations of websites for UAE businesses, including bilingual English and Arabic sites and moves from older platforms, so that good pages can be found and ranked.",
    signs: [
      "Pages you published months ago still do not appear in Google's results.",
      "Your site is slow on mobile, or Google reports poor Core Web Vitals.",
      "You are planning a redesign or a move to a new platform and fear losing rankings.",
      "Your English and Arabic pages compete with each other or show the wrong language in results.",
    ],
    deliverables: [
      {
        title: "Crawl and indexing audit",
        body: "We crawl the site the way search engines do and compare it with what Google has indexed, then list blocked pages, duplicates, orphan pages and wasted crawl paths.",
      },
      {
        title: "Speed and Core Web Vitals",
        body: "Fixes for slow loading, layout shifts and sluggish interactions, from image and font handling to script weight, tested on real mobile connections and not only on fast office Wi-Fi.",
      },
      {
        title: "Structured data",
        body: "Schema markup for your organisation, services, articles, FAQs and breadcrumbs, checked against the visible content so it is accurate and eligible for rich results.",
      },
      {
        title: "Site architecture and internal links",
        body: "A clear page hierarchy, clean URLs and internal links that point authority to the pages that earn revenue, with no important page buried many clicks from the homepage.",
      },
      {
        title: "Redirects and migrations",
        body: "A full URL map, one-to-one 301 redirects and checks before and after launch when you change platform, domain or URL structure, so existing rankings and links carry over.",
      },
      {
        title: "English and Arabic hreflang",
        body: "Correct language and region tags, matching URLs and canonical rules, so the right version of each page appears for the right searcher and the two versions do not compete.",
      },
    ],
    process: [
      { title: "Audit", body: "Crawl the site, then review Google Search Console, server logs where available and speed data to build a full picture of how search engines see it." },
      { title: "Prioritise", body: "Rank every issue by impact and effort, and write a plain-language fix list that your developers or ours can act on straight away." },
      { title: "Fix", body: "Apply the changes in a staging copy first where possible, covering templates, redirects, markup and performance, and test them before they go live." },
      { title: "Verify", body: "Re-crawl after release, check indexing and rendering in Search Console and confirm that no important page has been blocked, wrongly redirected or dropped." },
      { title: "Monitor", body: "Set alerts for crawl errors, indexing drops and speed regressions, and review them every month so new problems are caught early." },
    ],
    first90: [
      { period: "Month 1", body: "Full technical audit, a prioritised fix list and the highest-impact repairs, such as blocked pages, broken redirects and critical errors." },
      { period: "Month 2", body: "Speed work, structured data, internal linking improvements and language tags, with each change tested and checked in Search Console." },
      { period: "Month 3", body: "Re-crawl, indexing review, monitoring alerts in place and a clear roadmap for the next quarter of technical work." },
    ],
    faqs: [
      {
        q: "What does a technical SEO audit include?",
        a: "It covers crawling and indexing, site structure, internal links, URL and redirect rules, page speed and Core Web Vitals, mobile usability, structured data, duplicate content and language settings. You receive a prioritised list of fixes in plain language, with the likely effect of each one, so you can decide what to do first.",
      },
      {
        q: "Will redesigning my website hurt my rankings?",
        a: "It can, if URLs change without redirects or if pages lose content, titles or internal links. A redesign planned with SEO in mind keeps the URLs that already rank, redirects the ones that must change, and is checked before and after launch. Some movement in the first weeks is normal.",
      },
      {
        q: "Can you move us off WordPress or another CMS without losing traffic?",
        a: "Yes, with careful planning. We map every existing URL, decide where each should go, set up one-to-one 301 redirects, keep the titles, headings and content of pages that rank, and test the new site before launch. After launch we watch indexing and rankings closely. Old URLs that show an error instead of a redirect are the most common cause of lost traffic.",
      },
      {
        q: "How do you handle English and Arabic versions of a site?",
        a: "Each language gets its own crawlable URL, a self-referencing canonical tag and hreflang tags that link the two versions to each other. Content is written or edited for each language, not machine translated. This helps Google show the Arabic page to Arabic searchers and the English page to English searchers.",
      },
      {
        q: "How long does technical SEO take to show results?",
        a: "Fixing a blocked or broken section can change indexing within days to weeks once Google recrawls it. Speed and structure improvements usually build over weeks to months. Technical work makes ranking possible, but content, links and competition still decide how high you rank, so we report on both.",
      },
    ],
    industries: ["real-estate", "hotels", "restaurants", "car-dealers"],
    posts: ["website-traffic-but-no-enquiries-conversion-checklist", "arabic-english-bilingual-website-seo-uae", "dubai-community-pages-real-estate-seo"],
  },
  {
    id: "local-seo",
    slug: "local-seo-services",
    name: "Local SEO",
    parent: "search",
    title: "Local SEO Agency in Dubai | SEODXB",
    description:
      "Local SEO for Dubai and UAE businesses: map rankings, Google Business Profile, area pages, directory listings and reviews that bring nearby customers.",
    heroTitle: "Be the business nearby customers find first",
    heroIntro:
      "When someone searches for a clinic, a restaurant or a contractor near them, Google shows a map and a short list. We help you earn a place on that list and turn the people who see it into calls, visits and enquiries.",
    answer:
      "Local SEO helps a business appear in map results and location-based searches, such as a service near me or in a named area of Dubai. It combines a well-managed Google Business Profile, accurate listings, area-specific pages and genuine reviews. SEODXB runs local SEO for UAE businesses with one location or many, and measures it by calls, direction requests and enquiries.",
    signs: [
      "Competitors appear in the map results for your service and area, and you do not.",
      "Your business details differ between Google, your website and UAE directories.",
      "You have several branches but only one page or one profile for all of them.",
      "Customers search for you by area name, such as Dubai Marina or Business Bay, and find others.",
    ],
    deliverables: [
      {
        title: "Local ranking audit",
        body: "We check where you appear for your main service and area searches, which competitors take the map spots, and what separates them from you, from reviews and categories to page content.",
      },
      {
        title: "Profile optimisation",
        body: "Correct categories, services, hours, photos, products and posts on every profile, set up under accounts that you own and keep control of.",
      },
      {
        title: "Location and area pages",
        body: "Unique pages for each branch and each area you serve, with real local detail, opening hours, directions, photos and structured data, written to help customers and not to repeat a template.",
      },
      {
        title: "UAE citations and listings",
        body: "Consistent name, address and phone details across the main UAE directories, maps and industry listings, with duplicate and outdated entries found and corrected.",
      },
      {
        title: "Review strategy",
        body: "A simple, honest process for asking happy customers for reviews, replying to every review in your brand voice, and handling negative feedback calmly.",
      },
      {
        title: "Local reporting",
        body: "Monthly reporting on map visibility, profile calls, direction requests, website clicks and the enquiries that came from them, shown branch by branch.",
      },
    ],
    process: [
      { title: "Research", body: "Find the searches your customers use, including area names and Arabic terms, and map them to the branches and pages that should answer them." },
      { title: "Foundation", body: "Claim and clean up profiles and listings so every detail about your business is accurate, consistent and under your control." },
      { title: "Build", body: "Create or improve location pages, service pages and profile content so each one clearly matches a search and a place." },
      { title: "Earn", body: "Collect reviews, local mentions and links from relevant UAE sources that show Google your business is active and trusted nearby." },
      { title: "Measure", body: "Track map rankings by area, profile actions and enquiries, then adjust pages and profiles based on what brings real customers." },
    ],
    first90: [
      { period: "Month 1", body: "Local audit, profile ownership and clean-up, listing corrections and a plan for each branch and service area." },
      { period: "Month 2", body: "New or improved location pages, a refresh of profile content and a review request routine running in each branch." },
      { period: "Month 3", body: "First local ranking review, citation and mention building, and a report that links profile actions to enquiries." },
    ],
    faqs: [
      {
        q: "How is local SEO different from regular SEO?",
        a: "Regular SEO aims to rank pages for searches from anywhere. Local SEO targets searches with a place attached, such as near me or an area name, and competes for the map results as well as the normal listings. It relies on your Google Business Profile, listings, location pages and reviews as well as your website.",
      },
      {
        q: "Does my business need a shop to do local SEO?",
        a: "Not always. Service businesses can show a service area instead of a street address, if that suits how they work. What matters is that your details are accurate and that you follow Google's rules on how a business may be represented. Do not use a mailbox or shared address that customers cannot actually visit.",
      },
      {
        q: "Do reviews really affect local rankings?",
        a: "Reviews are one of several signals. Their number, quality and recency, and your replies, all matter, and they strongly influence whether people choose you after they find you. We help you ask for reviews honestly and reply to all of them. We never buy or fake reviews, which breaks platform rules and can get a profile removed.",
      },
      {
        q: "Can you manage local SEO for several branches?",
        a: "Yes. Each branch needs its own profile, its own page with unique local content, and consistent details everywhere. We set up a repeatable structure so new branches can be added cleanly, then report visibility, calls and enquiries branch by branch so you can see which locations need more attention.",
      },
      {
        q: "How long does local SEO take to work?",
        a: "Profile and listing fixes can change visibility within weeks. Building reviews, local mentions and strong location pages usually takes a few months. Results depend on competition in your area and category, so we report progress through map positions, profile actions and enquiries, not only rankings.",
      },
    ],
    industries: ["dental-clinics", "restaurants", "cleaning-companies", "hospitals-clinics"],
    posts: ["google-business-profile-setup-checklist-dubai", "hospital-local-seo-multiple-locations-departments", "seo-for-restaurants-dubai"],
  },
  {
    id: "google-business-profile",
    slug: "google-business-profile-management",
    name: "Google Business Profile management",
    parent: "search",
    title: "Google Business Profile Management in Dubai | SEODXB",
    description:
      "Set-up, ownership, optimisation and weekly management of your Google Business Profile in Dubai, with reviews, posts, photos and call tracking.",
    heroTitle: "A Google Business Profile that brings calls and visits",
    heroIntro:
      "Your profile is often the first thing a customer sees, before your website. We set it up properly, keep it under your control, and manage it every week so it stays accurate, active and persuasive.",
    answer:
      "Google Business Profile management is the ongoing work of setting up, verifying, optimising and maintaining the free business listing that appears in Google Search and Maps. It covers categories, services, photos, posts, questions, reviews and replies. SEODXB manages profiles for UAE businesses, keeping ownership with the client and reporting on calls, direction requests and website clicks.",
    signs: [
      "Someone else, such as an old agency or a former employee, controls your profile.",
      "Your profile shows wrong hours, an old phone number or a duplicate listing.",
      "Reviews sit unanswered, or you have far fewer reviews than nearby competitors.",
      "You do not know how many calls and direction requests your profile brings.",
    ],
    deliverables: [
      {
        title: "Ownership and verification",
        body: "We make sure the profile is claimed and verified under an account your business owns, with the right people as owners and managers, and access that survives staff changes.",
      },
      {
        title: "Categories and services",
        body: "A primary category that matches how customers search, relevant secondary categories, and a complete list of services and products written in clear, natural language.",
      },
      {
        title: "Photos and posts",
        body: "A steady stream of real photos and short updates, such as offers, events and new services, that show customers the business is open and active.",
      },
      {
        title: "Reviews and replies",
        body: "A simple review request routine and thoughtful replies to every review, positive or negative, in your brand voice and in the language the customer used.",
      },
      {
        title: "Questions and messaging",
        body: "Monitoring of customer questions and messages so they get quick, accurate answers, and common questions are answered in advance on the profile.",
      },
      {
        title: "Duplicates and spam",
        body: "Finding duplicate listings, closed or moved locations and false edits, then reporting and resolving them so the correct profile is the one that shows.",
      },
    ],
    process: [
      { title: "Access", body: "Find every profile connected to your business, confirm who owns each one, and take control of ownership before making any changes." },
      { title: "Audit", body: "Compare every field on the profile with your real business details and with the profiles of the top competitors in your area and category." },
      { title: "Optimise", body: "Update categories, services, descriptions, attributes, photos and links, using tagged links so profile visits can be measured on your website." },
      { title: "Maintain", body: "Post updates, add photos, answer questions and reply to reviews on a weekly rhythm so the profile never looks abandoned." },
      { title: "Report", body: "Share monthly numbers for searches, calls, direction requests and website clicks, and connect them to enquiries where your tracking allows." },
    ],
    first90: [
      { period: "Month 1", body: "Ownership checked, duplicates reported, every field optimised and a first batch of photos and posts live." },
      { period: "Month 2", body: "Weekly posting and review replies running, a review request routine in place and tagged links measuring website visits." },
      { period: "Month 3", body: "First performance report, a comparison with competitor profiles and a plan to improve the weakest areas." },
    ],
    faqs: [
      {
        q: "Is a Google Business Profile free?",
        a: "Yes. Creating and managing a profile costs nothing. You only pay if you want help with set-up and ongoing management. A well-managed free profile is often one of the most cost-effective ways for a local business to be found, because it appears right where customers search and compare.",
      },
      {
        q: "Who should own our Google Business Profile?",
        a: "Your business should own it, using a company email address that more than one trusted person can reach. Agencies and staff are added as managers, so access can be removed later without losing the profile. We never take ownership from a client, and we help recover control if an old supplier still holds it.",
      },
      {
        q: "How do we get more reviews without breaking Google's rules?",
        a: "Ask real customers soon after a good experience, give them a direct link to your review page, and make it easy. Do not pay for reviews, offer rewards in exchange for positive ones, or write them yourself. Reply to every review, because replies show future customers how you treat people.",
      },
      {
        q: "Can you track WhatsApp and phone enquiries from the profile?",
        a: "Calls and direction requests appear in the profile's own insights. For website and WhatsApp clicks we use tagged links, so your analytics can show which visits and chats began on the profile. Call tracking numbers can help too, but they must be set up carefully so your main number stays correct everywhere.",
      },
      {
        q: "What if there is a duplicate or fake listing for my business?",
        a: "We report duplicates and unwanted edits through Google's tools, supply proof such as licences and photos where needed, and follow up until the correct listing is the only one showing. Google makes the final decision, so timing varies, but a clean profile with strong ownership makes disputes easier to win.",
      },
    ],
    industries: ["dental-clinics", "restaurants", "cleaning-companies", "gyms-fitness"],
    posts: ["google-business-profile-setup-checklist-dubai", "track-whatsapp-call-form-leads-uae", "seo-for-restaurants-dubai"],
  },
  {
    id: "geo",
    slug: "generative-engine-optimization",
    name: "Generative engine optimization (GEO)",
    parent: "search",
    title: "Generative Engine Optimization in Dubai | SEODXB",
    description:
      "GEO for Dubai and UAE brands: help ChatGPT, Gemini, Perplexity and Google AI Overviews find, trust and recommend your business accurately.",
    heroTitle: "Be the business AI assistants recommend",
    heroIntro:
      "More buyers now ask an AI assistant who to hire before they ever open Google. We make sure these tools know who you are, describe you correctly and have good reasons to mention you when your customers ask.",
    answer:
      "Generative engine optimization (GEO) is the work of making a business easy for AI assistants and AI search features to find, understand, trust and cite. It covers consistent brand facts, clear and quotable content, crawler access, structured data and mentions on credible third-party sites. SEODXB helps UAE businesses improve how tools such as ChatGPT, Gemini and Perplexity describe them.",
    signs: [
      "You asked ChatGPT or Gemini about your category and your business was not mentioned.",
      "An assistant describes your services wrongly, or uses old prices, addresses or details.",
      "Few trusted websites outside your own mention or describe your business.",
      "You do not know whether AI crawlers can read your website at all.",
    ],
    deliverables: [
      {
        title: "AI visibility baseline",
        body: "We ask the main assistants the questions your customers ask, record whether you are mentioned, how you are described and which competitors appear, and repeat this on a regular schedule.",
      },
      {
        title: "Entity and fact consistency",
        body: "One clear set of facts about your business, such as name, services, locations, leaders and credentials, kept identical across your website, profiles and directories.",
      },
      {
        title: "Quotable content",
        body: "Pages and FAQs written so that a short, accurate passage can be lifted out as an answer, with clear headings, definitions, sources and visible dates.",
      },
      {
        title: "Crawler access and llms.txt",
        body: "A review of robots rules and server settings so that legitimate AI crawlers can read your site, plus an llms.txt summary file, an emerging convention that some tools may use.",
      },
      {
        title: "Third-party mentions",
        body: "Earning accurate mentions on respected industry sites, directories, review platforms and news sources, since assistants often rely on what others say about you.",
      },
      {
        title: "Monitoring and correction",
        body: "Monthly checks of what assistants say about you, with fixes to the sources behind wrong answers, so mistakes are traced to their cause and corrected.",
      },
    ],
    process: [
      { title: "Baseline", body: "Test a defined list of customer questions across several assistants and record mentions, descriptions, sources and competitors." },
      { title: "Fix the facts", body: "Make your own website, profiles and listings consistent and complete, because assistants cannot describe clearly what is unclear at the source." },
      { title: "Create", body: "Publish and improve pages that answer real buyer questions directly, with evidence, authorship and structured data that machines can read." },
      { title: "Earn mentions", body: "Build credible mentions and reviews on third-party sources that your customers and AI tools already trust." },
      { title: "Track", body: "Repeat the same tests every month, compare results with the baseline and adjust content and sources based on what changes." },
    ],
    first90: [
      { period: "Month 1", body: "Baseline testing, a crawler access review, fact clean-up and the first set of quotable pages and FAQs." },
      { period: "Month 2", body: "Structured data, entity consistency across profiles, and a plan for mentions on trusted third-party sites." },
      { period: "Month 3", body: "A second round of assistant testing, a comparison with the baseline and corrections to any wrong answers." },
    ],
    faqs: [
      {
        q: "What is the difference between GEO and SEO?",
        a: "SEO earns rankings in a list of search results. GEO aims to have your business mentioned and described correctly inside AI-written answers. They share foundations, such as clear content, technical health and trust, but GEO adds a focus on consistent facts, quotable passages and mentions on other credible sites. Most businesses need both.",
      },
      {
        q: "Can you make ChatGPT recommend my business?",
        a: "No one can control what an assistant says, and anyone who promises a mention is overstating what is possible. What we can do is improve the signals these tools rely on: accurate facts, clear content, crawlable pages and credible third-party mentions. Then we measure how your visibility changes over time.",
      },
      {
        q: "Do I need an llms.txt file?",
        a: "It is a low-cost addition but not a requirement, and not every AI tool reads it. It is a plain text summary of your site that can help tools find your key pages. We add one alongside the more important work, which is clear content, consistent facts and open access for crawlers.",
      },
      {
        q: "How do you measure AI search visibility?",
        a: "We run a fixed set of customer questions through the main assistants on a regular schedule and record whether you are mentioned, how you are described, which sources are cited and which competitors appear. We also check referral traffic from AI tools in your analytics, although many answers send no visit at all.",
      },
      {
        q: "Should we block AI crawlers on our website?",
        a: "That depends on your goals. If you want to be found and cited, legitimate AI crawlers need access. Some publishers choose to block them to protect their content. We review your robots rules and server settings, explain the trade-off in plain language and set access to match your decision.",
      },
    ],
    industries: ["law-firms", "hospitals-clinics", "real-estate", "hotels"],
    posts: ["get-recommended-by-chatgpt-google-ai-overviews", "seo-vs-aeo-vs-geo-explained", "medical-content-eeat-hospital-websites"],
  },
  {
    id: "aeo",
    slug: "answer-engine-optimization",
    name: "Answer engine optimization (AEO)",
    parent: "search",
    title: "Answer Engine Optimization in Dubai | SEODXB",
    description:
      "AEO for Dubai businesses: win featured snippets, People Also Ask boxes and direct answers with clear FAQ content and structured data.",
    heroTitle: "Be the direct answer at the top of the page",
    heroIntro:
      "Many searches now end on the results page itself, with a snippet, a list or a question box that answers the query. We shape your content so that the answer Google shows comes from your website.",
    answer:
      "Answer engine optimization (AEO) is the practice of structuring content so that search engines and voice assistants can lift a short, accurate answer from your page, for example in a featured snippet or a People Also Ask box. It relies on direct answers, question-style headings and structured data. SEODXB writes and marks up answer-ready content for UAE businesses.",
    signs: [
      "Competitors hold the featured snippet for questions your customers ask all the time.",
      "Your pages explain the topic well but bury the answer under long introductions.",
      "Your FAQ pages are thin, or the questions in them are ones nobody actually asks.",
      "More searches end on Google's results page and you want visibility, not just clicks.",
    ],
    deliverables: [
      {
        title: "Question research",
        body: "A list of the real questions your buyers type, grouped by stage and topic, drawn from search data, People Also Ask boxes, customer emails and sales conversations.",
      },
      {
        title: "Answer-first rewrites",
        body: "A short, direct answer near the top of each key page, followed by the detail, so both people and search features can find the answer quickly.",
      },
      {
        title: "Question-style headings",
        body: "Clear headings written as the questions customers ask, with a concise answer beneath each one, formatted as a short paragraph, steps, a table or a list to suit the query.",
      },
      {
        title: "FAQ sections",
        body: "Useful FAQs on service, industry and guide pages, with specific answers about prices, process and local rules, instead of generic filler.",
      },
      {
        title: "Structured data for answers",
        body: "FAQ, how-to, article and breadcrumb markup that matches the visible content exactly, so machines can read the structure without any mismatch.",
      },
      {
        title: "Snippet tracking",
        body: "Monitoring of which target questions show a snippet or question box, who holds it, and whether your pages gain or lose those positions over time.",
      },
    ],
    process: [
      { title: "Research", body: "Collect questions around each service and industry, and check which ones already show snippets, lists or People Also Ask boxes." },
      { title: "Choose", body: "Pick the questions where a direct answer can win, based on search demand, buying intent and how close you are to the current answer." },
      { title: "Write", body: "Rewrite or create content with the answer first, in the format the search result favours, such as a paragraph, a numbered list or a table." },
      { title: "Mark up", body: "Add structured data that mirrors the visible text, then test it so the markup is valid and honest." },
      { title: "Review", body: "Check snippet positions every month, refresh pages that lose them and extend the approach to the next group of questions." },
    ],
    first90: [
      { period: "Month 1", body: "Question research, selection of priority pages and answer-first rewrites for the highest-intent services." },
      { period: "Month 2", body: "FAQ sections, question headings and structured data added across service and industry pages." },
      { period: "Month 3", body: "First snippet tracking report, refreshes where competitors hold the answer and a plan for the next topic group." },
    ],
    faqs: [
      {
        q: "What is a featured snippet?",
        a: "A featured snippet is a highlighted answer that Google shows at the top of some results, taken from a web page. It might be a paragraph, a list or a table, and the page it comes from is shown with a link. Winning one depends on giving a clear, accurate answer to the exact question.",
      },
      {
        q: "How is AEO different from GEO?",
        a: "AEO focuses on traditional search results and voice answers, such as featured snippets and question boxes. GEO focuses on AI assistants that write their own answers from many sources. The skills overlap, because clear answers help both, but the goals, tools and ways of measuring them differ.",
      },
      {
        q: "Does FAQ markup still help?",
        a: "Google now shows FAQ rich results for only a limited set of sites, so you should not expect them. FAQ markup that matches visible questions still helps machines understand a page. The main value comes from useful questions and clear answers on the page itself, which people read and search features can use.",
      },
      {
        q: "How long should an answer be?",
        a: "For a snippet, the core answer is often one short paragraph of around forty to sixty words, or a tight list. Then add the detail below it. Longer explanation still belongs on the page, but the opening answer must stand alone and make sense without the rest.",
      },
      {
        q: "Will AEO bring more clicks to my site?",
        a: "Sometimes a snippet raises visits, and sometimes the searcher gets the answer and does not click. Either way, being the named source builds recognition and trust, and people who do click are often further along in their decision. We measure impressions, clicks and enquiries together, not clicks alone.",
      },
    ],
    industries: ["law-firms", "dental-clinics", "education", "real-estate"],
    posts: ["seo-vs-aeo-vs-geo-explained", "law-firm-practice-area-pages-seo", "school-website-pages-that-rank-uae"],
  },
  {
    id: "arabic-seo",
    slug: "arabic-seo-services",
    name: "Arabic SEO",
    parent: "search",
    title: "Arabic SEO Services in Dubai | SEODXB",
    description:
      "Arabic SEO for UAE businesses: separate Arabic keyword research, RTL pages, bilingual site structure and native-speaker content that ranks.",
    heroTitle: "Reach Arabic-speaking customers where they actually search",
    heroIntro:
      "Arabic searchers use different words, different spellings and different habits from English searchers. We research how Arabic speakers in the UAE really search, then build pages that are written, structured and tagged for them, not translated from English.",
    answer:
      "Arabic SEO is the process of researching, writing and structuring a website so that it ranks for searches made in Arabic. It differs from English SEO because of different keywords, dialects, spelling variants and right-to-left layout. SEODXB provides Arabic and bilingual SEO for UAE businesses, using native-speaker writers and editors and correct language tagging so that each version reaches the right audience.",
    signs: [
      "Your Arabic pages are a direct translation and read awkwardly to native speakers.",
      "Arabic searches bring no traffic, or the Arabic site is only a few pages.",
      "Layouts break in right-to-left mode, or Arabic text looks wrong on mobile.",
      "English and Arabic pages show up in the wrong language in search results.",
    ],
    deliverables: [
      {
        title: "Arabic keyword research",
        body: "Research done in Arabic, not translated from English lists, covering spelling variants, Gulf and Modern Standard Arabic phrasing, and the terms your customers actually type or speak.",
      },
      {
        title: "Bilingual site structure",
        body: "A clear URL and navigation plan for the English and Arabic versions, with language switchers, matching pages and canonical rules that keep both versions healthy.",
      },
      {
        title: "Native-speaker content",
        body: "Arabic pages written or edited by native speakers who know your industry, with a natural tone, correct terminology and none of the stiffness of machine translation.",
      },
      {
        title: "Right-to-left checks",
        body: "Testing of layouts, forms, fonts, numbers, icons and buttons in right-to-left mode on phones and desktops, so Arabic pages look and work correctly.",
      },
      {
        title: "Hreflang and technical tags",
        body: "Language and region tags, correct page language and direction attributes, and sitemaps that help Google serve the right version to each searcher.",
      },
      {
        title: "Arabic local and voice search",
        body: "Arabic names and descriptions on your Google Business Profile and listings, plus phrasing for spoken searches made on phones and smart speakers.",
      },
    ],
    process: [
      { title: "Research", body: "Study Arabic search behaviour in your market, including dialect differences, transliteration of brand and product names, and competitor pages." },
      { title: "Plan", body: "Decide which pages need Arabic versions first, how URLs and navigation will work, and where Arabic content should differ from English." },
      { title: "Write", body: "Create Arabic content with native-speaker writers and editors, matching intent, tone and terminology for your industry." },
      { title: "Build", body: "Implement right-to-left layouts, language tags, canonical rules and internal links, then test them on real devices." },
      { title: "Measure", body: "Track Arabic rankings, traffic and enquiries separately from English, and expand to more pages where results justify it." },
    ],
    first90: [
      { period: "Month 1", body: "Arabic keyword research, a competitor review, a bilingual structure plan and technical checks of any existing Arabic pages." },
      { period: "Month 2", body: "First priority Arabic pages written and published with correct tags, and right-to-left fixes applied." },
      { period: "Month 3", body: "Arabic profile and listing updates, first reporting on Arabic traffic and a roadmap for further pages." },
    ],
    faqs: [
      {
        q: "Is Arabic SEO the same as translating my English site?",
        a: "No. Translation gives you Arabic words, but not necessarily the words Arabic speakers search with. Keyword research, intent, tone and examples often differ. We research in Arabic first, then write or adapt pages for native readers, and use the English pages only as a starting point where they fit.",
      },
      {
        q: "Which Arabic should the website use?",
        a: "Most websites use Modern Standard Arabic, which readers across the region understand, with a friendly tone and no heavy formality. Some marketing lines and spoken search phrases lean on Gulf expressions. We choose based on your audience and your brand, and a native editor reviews the result.",
      },
      {
        q: "Should Arabic content be on the same domain as English?",
        a: "In most cases, yes. One domain with separate language folders, such as an /ar/ path, keeps authority together and is easier to maintain. Each Arabic page links to its English equivalent with hreflang tags. A separate domain can work, but it needs more effort and more links to build up.",
      },
      {
        q: "Do Arabic searches really matter in the UAE?",
        a: "Yes, for many categories. Arabic is the official language of the UAE, and many residents and visitors search in it, especially for government, legal, healthcare, education and property topics. Competition in Arabic can be lower than in English, though volumes vary by industry, so we check the data before investing.",
      },
      {
        q: "Can you fix right-to-left layout problems on our current site?",
        a: "Yes. We test your pages in right-to-left mode, list issues such as mirrored icons, broken forms, misaligned text or mixed-direction numbers, and either fix them with your developers or supply exact instructions. We also check that the page language and direction attributes are set correctly for search engines and screen readers.",
      },
    ],
    industries: ["law-firms", "hospitals-clinics", "real-estate", "education"],
    posts: ["arabic-english-bilingual-website-seo-uae", "school-website-pages-that-rank-uae", "healthcare-marketing-hospitals-clinics-uae"],
  },
];
