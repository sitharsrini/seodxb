import type { KeywordPageConfig } from "./keywordPages";

// Saudi Arabia website-development cluster. Focused, deep, genuinely
// Saudi-specific pages (Vision 2030, Arabic/RTL, ZATCA e-invoicing, Mada/STC Pay,
// PDPL) rather than thin location duplicates, so they are worth indexing and
// build trust with Saudi buyers. SEODXB delivers website projects from $2,500.

const STATS: { value: string; label: string }[] = [
  { value: "99%", label: "Saudi internet penetration" },
  { value: "2 to 4 wks", label: "Typical build timeline" },
  { value: "AR + EN", label: "Bilingual by default" },
  { value: "$2,500+", label: "Projects start from" },
];

const webFeatures = (place: string): { title: string; desc: string }[] => [
  { title: "Arabic and English From Day One", desc: `Every ${place} build ships bilingual with proper right-to-left layout, Arabic typography, and language switching that Google can crawl in both languages.` },
  { title: "Built on a Fast, SEO-Ready Base", desc: "Clean code, Core Web Vitals in mind, structured data, and a crawlable structure so the site can rank rather than just look good." },
  { title: "Local Payment and Compliance Ready", desc: "Mada, STC Pay, and Apple Pay integration for stores, plus ZATCA e-invoicing and PDPL data-handling considerations built into the plan." },
  { title: "Mobile-First for a Mobile Market", desc: "Saudi Arabia is one of the most mobile-heavy markets in the world, so we design for the phone first and the desktop second." },
  { title: "Content and Structure That Converts", desc: "Clear service pages, trust signals, and calls to action mapped to how Saudi buyers actually decide, not just a pretty template." },
  { title: "Handover You Can Run", desc: "You get a site your team can update, with training and documentation, rather than a black box that locks you to one agency." },
];

const webFaqs = (place: string, city = "Saudi Arabia"): { q: string; a: string }[] => [
  { q: `How much does a website cost in ${city}?`, a: "SEODXB website projects start from $2,500 for a focused business site and scale to $15,000 and above for larger multi-page or e-commerce builds. Every project includes SEO foundations and a bilingual base. The final price depends on page count, features, and integrations." },
  { q: `How long does it take to build a ${place}?`, a: "A focused business website usually takes two to four weeks. E-commerce or custom builds with payment and compliance integrations take longer, typically four to eight weeks depending on scope. We agree a clear timeline before we start." },
  { q: "Will the website be in Arabic and English?", a: "Yes. We build bilingual by default, with proper right-to-left layout for Arabic, correct typography, and a language switch that search engines can read. This is essential for reaching the full Saudi audience." },
  { q: "Can you handle Mada, STC Pay, and ZATCA e-invoicing?", a: "Yes. For online stores we integrate local payment methods such as Mada, STC Pay, and Apple Pay, and we build with ZATCA e-invoicing and PDPL data-protection requirements in mind so the store is ready to operate compliantly." },
  { q: "Do you also do the SEO after the site is built?", a: "Yes. Every site is built on an SEO-ready foundation, and SEODXB offers ongoing SEO to grow your organic traffic and AI-search visibility once the site is live. Building and ranking under one roof keeps the work aligned." },
];

export const saudiWebPages: KeywordPageConfig[] = [
  {
    slug: "website-development-saudi-arabia",
    keyword: "Website Development Saudi Arabia",
    badge: "Website Development for Saudi Businesses",
    title: "Website Development Saudi Arabia | SEODXB",
    metaDesc: "Website development in Saudi Arabia from SEODXB. Bilingual, fast, SEO-ready sites built for Vision 2030 businesses. Projects from $2,500.",
    h1: "Website Development in Saudi Arabia, Built to Rank and Convert",
    intro: "SEODXB builds websites for Saudi businesses that need more than a good-looking template. Every site is bilingual in Arabic and English, fast, and built on an SEO-ready foundation so it can earn traffic from day one. As Vision 2030 pushes more of the Saudi economy online, the businesses that win are the ones whose sites load quickly, read naturally in both languages, and answer buyer questions clearly. Projects start from $2,500 and include the SEO groundwork most agencies leave out.",
    svgVariant: "growth",
    featuresTitle: "What a Saudi Website Build Includes",
    featuresSubtitle: "Bilingual, compliant, and built to be found, not just admired.",
    features: webFeatures("Saudi website"),
    stats: STATS,
    faqTitle: "Website Development Saudi Arabia - Common Questions",
    faqs: webFaqs("business website"),
    ctaTitle: "Build a Website That Works in Saudi Arabia",
    ctaDesc: "Book a free consultation and we will scope a bilingual, SEO-ready website for your Saudi business, with a clear timeline and price.",
    ctaButton: "Get a Free Website Consultation",
    areaServed: "Saudi Arabia",
    extendedContent: [
      {
        heading: "Why Saudi Websites Have Different Requirements",
        paragraphs: [
          "Building a website for the Saudi market is not the same as building one for a Western audience with the text translated afterwards. Arabic reads right to left, which changes layout, navigation, and the entire visual flow of a page. Typography, spacing, and even where the eye lands first all shift. A site that treats Arabic as an afterthought feels broken to a Saudi visitor, and it shows.",
          "On top of language, the Saudi market has its own payment habits, compliance rules, and buying behaviour. Mada is the dominant local card scheme, STC Pay and Apple Pay are widely used, and e-invoicing through ZATCA is a legal requirement for businesses selling online. A site built without these in mind needs expensive rework before it can trade.",
        ],
      },
      {
        heading: "Built for Vision 2030 Digital Growth",
        paragraphs: [
          "Vision 2030 is moving a large share of Saudi commerce, services, and government interaction online. That has created a fast-growing audience of people who research and buy through search and, increasingly, through AI assistants. The businesses capturing that demand are the ones whose sites are fast, structured, and easy for both Google and AI engines to read.",
          "We build with that shift in mind. Clean code, structured data, and a crawlable bilingual structure mean your site is ready not just for today's Google but for the AI answers that a growing number of Saudi buyers now rely on.",
        ],
      },
      {
        heading: "One Team for Building and Ranking",
        paragraphs: [
          "A website that looks good but cannot be found is a brochure nobody opens. Because SEODXB does both the build and the SEO, the site is structured to rank from the first day rather than being handed to a separate agency to fix later. Titles, headings, internal links, and page speed are all set up correctly at build time.",
          "After launch, the same team can grow your organic traffic and AI-search visibility, so the investment in the site keeps compounding rather than sitting still.",
        ],
      },
    ],
  },
  {
    slug: "website-design-riyadh",
    keyword: "Website Design Riyadh",
    badge: "Website Design for Riyadh Businesses",
    title: "Website Design Riyadh | SEODXB",
    metaDesc: "Website design in Riyadh from SEODXB. Bilingual, fast, SEO-ready business websites for the Saudi capital. Projects from $2,500.",
    h1: "Website Design in Riyadh for Businesses That Want to Be Found",
    intro: "Riyadh is the business and government capital of Saudi Arabia, and its market is crowded with companies competing for the same clients. A website that loads slowly, reads awkwardly in Arabic, or cannot be found on Google puts you a step behind before the first conversation. SEODXB designs bilingual, SEO-ready websites for Riyadh businesses, built to look credible and to rank. Projects start from $2,500 and include the technical and SEO foundations that most template builders skip.",
    svgVariant: "local",
    featuresTitle: "What a Riyadh Website Build Includes",
    featuresSubtitle: "Credible, bilingual, and built to compete in the capital.",
    features: webFeatures("Riyadh website"),
    stats: STATS,
    faqTitle: "Website Design Riyadh - Common Questions",
    faqs: webFaqs("Riyadh website", "Riyadh"),
    ctaTitle: "Design a Website That Competes in Riyadh",
    ctaDesc: "Book a free consultation and we will scope a bilingual, SEO-ready website for your Riyadh business, with a clear timeline and price.",
    ctaButton: "Get a Free Website Consultation",
    areaServed: "Riyadh, Saudi Arabia",
    extendedContent: [
      {
        heading: "Competing for Attention in the Capital",
        paragraphs: [
          "Riyadh concentrates a large share of Saudi corporate headquarters, government-adjacent businesses, and professional services. That density means buyers have many options and little patience for a site that is slow or hard to trust. First impressions are formed in seconds, and a dated or sluggish website quietly sends prospects to a competitor.",
          "We design Riyadh sites to establish credibility fast: clear positioning above the fold, visible trust signals, and a bilingual experience that feels native to both Arabic and English readers. The goal is a site that makes a serious business look serious.",
        ],
      },
      {
        heading: "Found on Google, Not Just Built",
        paragraphs: [
          "Many Riyadh businesses pay for a website and then wonder why no enquiries arrive. The usual reason is that the site was never built to be found. Search engines could not crawl it cleanly, pages had no clear structure, and speed was poor on mobile, where most Saudi searches happen.",
          "Every site we build for Riyadh starts on an SEO-ready base: fast loading, structured data, a logical page hierarchy, and content mapped to what local buyers search for. That is what turns a website from a cost into a source of leads.",
        ],
      },
    ],
  },
  {
    slug: "website-design-jeddah",
    keyword: "Website Design Jeddah",
    badge: "Website Design for Jeddah Businesses",
    title: "Website Design Jeddah | SEODXB",
    metaDesc: "Website design in Jeddah from SEODXB. Bilingual, fast, SEO-ready sites for the Red Sea commercial hub. Projects from $2,500.",
    h1: "Website Design in Jeddah for Trade, Retail, and Services",
    intro: "Jeddah is Saudi Arabia's commercial gateway, a city built on trade, retail, logistics, and a fast-growing services sector. Its businesses often sell to customers who research on their phones and expect to buy or enquire online. SEODXB designs bilingual, SEO-ready websites for Jeddah companies that want their online presence to match their reputation. Projects start from $2,500 and are built to load fast, read naturally in Arabic and English, and be found on search.",
    svgVariant: "serp",
    featuresTitle: "What a Jeddah Website Build Includes",
    featuresSubtitle: "Commerce-ready, bilingual, and built to be found.",
    features: webFeatures("Jeddah website"),
    stats: STATS,
    faqTitle: "Website Design Jeddah - Common Questions",
    faqs: webFaqs("Jeddah website", "Jeddah"),
    ctaTitle: "Design a Website That Sells in Jeddah",
    ctaDesc: "Book a free consultation and we will scope a bilingual, SEO-ready website for your Jeddah business, with a clear timeline and price.",
    ctaButton: "Get a Free Website Consultation",
    areaServed: "Jeddah, Saudi Arabia",
    extendedContent: [
      {
        heading: "A Trading City That Buys Online",
        paragraphs: [
          "Jeddah has always been a commercial hub, from the historic port to today's retail, import, and logistics businesses. That commercial culture has moved online quickly. Customers compare suppliers, check reputations, and place orders from their phones, often without ever calling first. A weak website loses that customer silently.",
          "We design Jeddah sites with commerce in mind, whether that means a clean lead-generating business site or a full online store. The focus is on making it easy for a buyer to understand what you offer and take the next step.",
        ],
      },
      {
        heading: "Speed and Trust on Mobile",
        paragraphs: [
          "Most Jeddah customers will meet your business first on a phone screen, often on a mobile network rather than fast office wifi. A heavy, slow site loses them before it loads. We build lightweight, fast pages that hold up on real mobile connections, because speed is both a ranking factor and a conversion factor.",
          "Trust matters just as much. Clear contact details, visible credentials, Arabic that reads naturally, and a professional design all tell a cautious buyer that you are a real, established business worth dealing with.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-website-development-saudi-arabia",
    keyword: "Ecommerce Website Development Saudi Arabia",
    badge: "E-commerce Builds for Saudi Arabia",
    title: "Ecommerce Website Development Saudi Arabia | SEODXB",
    metaDesc: "E-commerce website development in Saudi Arabia. Mada, STC Pay, and ZATCA-ready stores that rank and sell. SEODXB builds from $2,500.",
    h1: "E-commerce Website Development for Saudi Arabia",
    intro: "Selling online in Saudi Arabia takes more than a shopping cart. A store needs local payment methods, ZATCA e-invoicing, Arabic-first design, and fast mobile performance to compete. SEODXB builds e-commerce websites for Saudi businesses that are ready to trade compliantly and to rank on both Google and AI search. Whether you need a focused store or a larger catalogue, we build on an SEO-ready base so your products can actually be found, not just listed.",
    svgVariant: "analytics",
    featuresTitle: "What a Saudi E-commerce Build Includes",
    featuresSubtitle: "Local payments, compliance, and search visibility built in.",
    features: [
      { title: "Mada, STC Pay, and Apple Pay", desc: "We integrate the payment methods Saudi shoppers actually use, so you are not losing carts at checkout to a missing option." },
      { title: "ZATCA E-invoicing Ready", desc: "Stores are built with Saudi e-invoicing requirements in mind, so your online sales are compliant from launch rather than after a costly retrofit." },
      { title: "Arabic-First Store Design", desc: "Right-to-left product pages, Arabic search, and bilingual listings so the full Saudi market can browse and buy comfortably." },
      { title: "Product SEO and Schema", desc: "Category and product pages built with structured data and clean URLs so they rank on Google and appear in AI shopping answers." },
      { title: "Fast on Mobile", desc: "Optimised images and lightweight code so the store stays fast on the phones where most Saudi shopping happens." },
      { title: "Room to Grow", desc: "Built to scale from a small catalogue to a large one without a rebuild, whether on a platform like Salla and Zid or a custom stack." },
    ],
    stats: STATS,
    faqTitle: "Saudi E-commerce Development - Common Questions",
    faqs: [
      { q: "Which payment methods can you integrate for a Saudi store?", a: "We integrate the payment methods Saudi shoppers use most, including Mada, STC Pay, Apple Pay, and international cards. Offering local options reduces abandoned carts, because many buyers will not complete a purchase if their preferred method is missing." },
      { q: "Do you handle ZATCA e-invoicing compliance?", a: "We build stores with ZATCA e-invoicing requirements in mind so your online sales can be issued compliantly. We plan the compliance approach at the start of the project rather than bolting it on later, which is slower and more expensive." },
      { q: "Should I use Salla, Zid, or a custom build?", a: "It depends on your catalogue, budget, and how much control you need. Platforms like Salla and Zid are fast to launch and Saudi-friendly, while a custom build gives more flexibility for complex needs. We advise on the right fit rather than pushing one option." },
      { q: "How much does an e-commerce site cost in Saudi Arabia?", a: "SEODXB projects start from $2,500 and scale to $15,000 and above for larger stores with custom features and integrations. The price depends on catalogue size, payment and compliance needs, and how much custom design you want." },
      { q: "Will my products show up on Google and AI search?", a: "Yes. We build category and product pages with structured data, clean URLs, and Arabic and English content so they are eligible to rank on Google and to be surfaced in AI shopping answers, which a growing share of Saudi buyers now use." },
    ],
    ctaTitle: "Build a Saudi Store That Sells",
    ctaDesc: "Book a free consultation and we will scope a compliant, bilingual e-commerce build for your Saudi business, with clear timelines and pricing.",
    ctaButton: "Get a Free E-commerce Consultation",
    areaServed: "Saudi Arabia",
    extendedContent: [
      {
        heading: "Local Payments Decide Whether Carts Convert",
        paragraphs: [
          "The fastest way to lose a Saudi online sale is to reach checkout without the buyer's preferred payment method. Mada dominates local card payments, STC Pay is widely used, and Apple Pay is common on the phones most people shop from. A store that only offers international cards leaves money on the table at the last step.",
          "We integrate these methods from the start so checkout feels normal to a Saudi shopper. Reducing friction at the final step is often the single biggest lever on an e-commerce site's revenue.",
        ],
      },
      {
        heading: "Compliance Is Cheaper When Planned Early",
        paragraphs: [
          "ZATCA e-invoicing and PDPL data-protection rules are not optional for businesses selling online in Saudi Arabia. Retrofitting compliance onto a store built without it in mind is slow and expensive. Planning for it at the design stage keeps the build clean and the launch on schedule.",
          "We treat compliance as part of the build brief rather than an afterthought, so your store can trade properly from the day it goes live.",
        ],
      },
    ],
  },
  {
    slug: "arabic-website-design-saudi-arabia",
    keyword: "Arabic Website Design Saudi Arabia",
    badge: "Arabic and Bilingual Web Design",
    title: "Arabic Website Design Saudi Arabia | SEODXB",
    metaDesc: "Arabic and bilingual website design for Saudi Arabia. Proper right-to-left layout, Arabic typography, SEO-ready. SEODXB builds from $2,500.",
    h1: "Arabic Website Design That Feels Native, Not Translated",
    intro: "An Arabic website is not an English site with the words swapped. Arabic reads right to left, which changes layout, navigation, typography, and the whole visual flow of a page. Done poorly, it feels broken to a Saudi visitor. SEODXB designs Arabic and bilingual websites for Saudi businesses that read naturally, look professional, and rank in both languages. Projects start from $2,500 and are built on an SEO-ready foundation so your Arabic content can be found, not just displayed.",
    svgVariant: "ai",
    featuresTitle: "What Proper Arabic Web Design Includes",
    featuresSubtitle: "Right-to-left done properly, in both languages.",
    features: [
      { title: "True Right-to-Left Layout", desc: "Navigation, columns, forms, and reading flow all mirrored correctly, not a left-to-right template forced into Arabic." },
      { title: "Arabic Typography Done Right", desc: "Fonts, sizing, and spacing chosen for Arabic readability, so text looks intentional rather than cramped or awkward." },
      { title: "Bilingual by Design", desc: "Clean Arabic and English versions with a language switch that search engines can crawl, so you reach the whole audience." },
      { title: "SEO in Both Languages", desc: "Arabic and English pages each optimised with the right structure and metadata so both can rank on Google." },
      { title: "Culturally Considered Design", desc: "Imagery, tone, and layout that feel appropriate to a Saudi audience rather than borrowed from a Western template." },
      { title: "Fast and Mobile-First", desc: "Lightweight pages that stay fast in Arabic and English on the mobile devices most Saudi users browse from." },
    ],
    stats: STATS,
    faqTitle: "Arabic Website Design - Common Questions",
    faqs: [
      { q: "Is an Arabic website just a translated English site?", a: "No. Arabic reads right to left, which changes layout, navigation, typography, and visual flow. A proper Arabic site is designed for that from the start. Simply translating the words on a left-to-right template produces a site that feels broken to Arabic readers." },
      { q: "Can the site be in both Arabic and English?", a: "Yes, and for most Saudi businesses that is the right choice. We build a clean bilingual site with proper right-to-left Arabic, a language switch search engines can read, and both versions optimised so each can rank in its own language." },
      { q: "Will the Arabic pages rank on Google?", a: "Yes. We structure and optimise the Arabic pages with the correct metadata, headings, and content so they are eligible to rank for Arabic searches, which many Saudi buyers use as their first language online." },
      { q: "How much does an Arabic website cost?", a: "SEODXB projects start from $2,500 for a focused bilingual business site and scale with page count and features. Building bilingual from the start is more efficient than adding Arabic later, so it is worth planning for both languages up front." },
      { q: "Do you write the Arabic content or do I provide it?", a: "Either works. We can build around content you provide, or advise on structure and messaging so the Arabic reads naturally and supports search visibility. The priority is that the Arabic feels native rather than machine-translated." },
    ],
    ctaTitle: "Build an Arabic Website That Reads Naturally",
    ctaDesc: "Book a free consultation and we will scope a bilingual, right-to-left website for your Saudi business, built to look native and to rank.",
    ctaButton: "Get a Free Website Consultation",
    areaServed: "Saudi Arabia",
    extendedContent: [
      {
        heading: "Why Right-to-Left Changes Everything",
        paragraphs: [
          "In an Arabic layout the reading flow starts on the right, so navigation, columns, buttons, and forms all mirror across the page. Icons that imply direction, progress bars, and even the position of a logo need rethinking. When a site gets this wrong, Arabic readers feel the friction immediately, even if they cannot name what is off.",
          "Getting it right means designing the Arabic experience deliberately rather than flipping an English template. The result is a site that feels made for its audience, which is exactly the impression a serious Saudi business wants to give.",
        ],
      },
      {
        heading: "Bilingual Sites Reach the Whole Market",
        paragraphs: [
          "Saudi Arabia is a bilingual market. Many buyers search and read in Arabic first, while business and international audiences often use English. A site that serves only one language leaves part of the market to competitors. A well-built bilingual site captures both without feeling bolted together.",
          "We build each language version to stand on its own, properly structured and optimised, so both Arabic and English visitors get a natural experience and both versions can earn search visibility.",
        ],
      },
    ],
  },
];
