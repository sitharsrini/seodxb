import type { LongFormSpec } from "./types";

// Daily batch (2026-08-15): a trending explainer on whether Google AI Overviews
// reduce your traffic, a high-intent fix guide for crawled currently not
// indexed, a commercial Shopify vs WooCommerce SEO comparison, a local
// problem-solver on a suspended Google Business Profile, and an evergreen guide
// to improving organic click-through rate. Mixed intent, British English.
// Writer: Srinivasan R. No em dashes, no double hyphens as dashes. No fabricated
// stats, prices, clients, offices, reviews or rankings; outcomes framed honestly.

const img = (id: string) => `https://images.unsplash.com/${id}?w=1200&auto=format&fit=crop&q=80`;

export const batch26: LongFormSpec[] = [
  // ── 1. Will Google AI Overviews reduce my traffic (trending / AI) ─────────
  {
    slug: "will-ai-overviews-reduce-my-website-traffic",
    category: "AI Search",
    title: "Will Google AI Overviews Reduce My Website Traffic?",
    excerpt: "An honest 2026 look at whether Google AI Overviews reduce your website traffic, which pages are affected, and how to respond sensibly.",
    heroImage: img("photo-1551288049-bebda4e38f71"),
    heroAlt: "A business owner studying a search results page and a traffic chart on a laptop",
    intro: [
      "Google AI Overviews, the AI-generated summaries that increasingly sit at the top of the results page, have made many business owners anxious that their organic traffic will fall. The honest answer is that the impact is real but uneven: some queries and pages are affected more than others, and the effect depends heavily on the kind of content you publish and the intent behind the searches you rank for. Reacting with panic, or ignoring the shift entirely, are both mistakes.",
      "This guide sets out a measured view of what AI Overviews are, which pages tend to lose visibility and which are more insulated, how to measure the real effect on your own site rather than guessing, and how to respond in a way that protects and even grows qualified traffic. It avoids both the doom-laden and the dismissive takes, because your business needs a realistic plan, not a headline.",
    ],
    keyStats: [
      "AI Overviews summarise answers at the top of some results, which can reduce clicks on affected queries.",
      "Informational, easily-summarised queries are most exposed; commercial and local intent tends to be more resilient.",
      "The real impact varies by site, so measuring your own data matters more than general predictions.",
      "Nobody can guarantee traffic levels, so the sensible response is to adapt content and diversify demand.",
    ],
    sections: [
      {
        h: "What AI Overviews Actually Change",
        p: [
          "An AI Overview is a short, AI-generated summary that Google may place at the top of the results for certain queries, drawing on and often linking to web sources. For the searcher, it can answer a simple question without a click, which is where the concern about lost traffic comes from. It is essentially an evolution of the zero-click trend that featured snippets and knowledge panels began years ago, now more capable and more prominent.",
          "Crucially, AI Overviews do not appear for every query, and Google shows them more for some kinds of searches than others. Simple, factual, informational questions are the most likely to be summarised, because they have a clean answer that an AI can compose confidently. More complex, commercial, transactional or local searches, where the user wants to compare, buy, or contact a specific business, are less easily replaced by a summary and tend to still send clicks.",
          "So the change is not a blanket reduction in all traffic, but a reshaping of which clicks survive. Pages that existed mainly to answer a quick factual question are the most exposed, while pages that help someone make a decision, complete a purchase, or reach a local provider are far more resilient. Understanding that distinction is the foundation of a sensible response.",
        ],
        image: {
          url: img("photo-1460925895917-afdab827c52f"),
          alt: "A search results page with an AI-generated summary above the traditional links",
          caption: "AI Overviews appear on some queries, most often simple informational ones, not on everything.",
        },
      },
      {
        h: "Which Pages Are Most and Least Affected",
        p: [
          "The pages most at risk are thin, purely informational ones that answer a single simple question a summary can fully satisfy. If a page's only job is to state a basic fact or definition that an AI Overview now provides directly, its clicks are vulnerable. This is uncomfortable, but it is also a prompt to ask whether such pages were ever strong assets or merely traffic that was easy to capture and easy to lose.",
          "The pages that hold up best are those tied to genuine decisions and actions. Commercial research content, comparisons, detailed guides that go well beyond a one-line answer, product and service pages, and local pages where someone wants a specific provider all tend to retain their clicks, because a short summary cannot do the job the searcher actually needs. Depth, specificity and commercial or local intent are protective.",
          "There is also an opportunity hidden in the shift. Being cited within an AI Overview can put your brand in front of users at the very top of the page, and content structured to be quotable is more likely to be drawn on. So the same content qualities that make a page resilient, clear structure, genuine depth and direct answers, also improve your chances of being one of the sources the Overview references.",
        ],
        list: [
          "Most exposed: thin, single-fact informational pages a summary can replace",
          "More resilient: comparisons, detailed guides, and commercial content",
          "Resilient: product, service and local pages tied to a decision or action",
          "Opportunity: quotable, well-structured content can be cited within an Overview",
        ],
      },
      {
        h: "Measure the Real Impact on Your Site",
        p: [
          "General predictions are no substitute for your own data, because the effect of AI Overviews varies enormously between sites and sectors. Google Search Console is the right place to start, since it shows impressions, clicks and average position for your queries. Look for pages where impressions hold up but clicks and click-through rate fall, which is the signature of a query where a summary is capturing the answer while your page still ranks.",
          "Segment the analysis rather than judging the site as a whole. Separate your informational content from your commercial and local pages, and watch how each group behaves over time. If your quick-answer articles are softening while your service and comparison pages are steady, that tells you exactly where the pressure is and where your resilient value lies, which is far more useful than a single sitewide number.",
          "Be careful not to attribute every fluctuation to AI Overviews. Seasonality, algorithm updates, competitor moves and your own site changes all affect traffic, so compare like periods, check whether declines coincide with other events, and confirm your tracking is intact. A disciplined read of the data prevents both false alarm and false comfort, and gives you a real basis for decisions.",
        ],
      },
      {
        h: "How to Respond Without Panicking",
        p: [
          "The strategic response is to shift effort towards content that AI Overviews cannot easily replace. Deepen your commercial and comparison content, strengthen the service and local pages that convert, and make sure your genuinely useful guides go beyond what a summary can say. Where you keep informational content, structure it to be the clear, quotable source an Overview might cite, and use it to move readers towards your commercial pages rather than treating the visit as an end in itself.",
          "Diversify how demand reaches you, so no single surface controls your fortunes. A strong Google Business Profile and local presence, an email list, referrals, a genuine brand that people search for by name, and visibility across both traditional and AI search all reduce your exposure to any one change in the results page. Businesses that depend entirely on one type of click are the most fragile in a shifting landscape.",
          "Finally, set honest expectations. No one can guarantee your traffic will be unaffected, and anyone promising immunity from AI Overviews is overselling. What you can do is understand your own data, protect and grow the content that holds real value, and build a broader base of demand. If you would like a grounded assessment of your exposure and a plan to protect qualified traffic, SEODXB offers a free SEO audit and works without long lock-in contracts.",
        ],
        list: [
          "Invest in commercial, comparison and local content that resists summarisation",
          "Structure informational content to be quotable and to guide readers onward",
          "Diversify demand across local, brand, email, referral and AI search",
          "Judge the effect from your own Search Console data, not headlines",
        ],
      },
    ],
    takeaway: "Google AI Overviews do affect traffic, but not uniformly. They appear mainly on simple informational queries, where a summary can answer without a click, and much less on commercial, transactional and local searches where the user wants to compare, buy or reach a specific business. So thin, single-fact pages are the most exposed, while comparisons, detailed guides, and product, service and local pages tend to hold up, and well-structured content can even be cited within an Overview. Measure the real impact from your own Google Search Console data, segmenting informational from commercial pages, rather than trusting general predictions. Respond by deepening resilient content, structuring informational pages to be quotable and to guide readers onward, and diversifying demand across local, brand, email and AI search. No one can guarantee traffic levels. SEODXB offers a free SEO audit to assess your exposure, with no lock-in contracts.",
    faqs: [
      { q: "Do AI Overviews appear for every search?", a: "No. Google shows AI Overviews for some queries and not others, and they appear most often on simple, factual, informational searches that have a clean answer an AI can summarise confidently. More complex, commercial, transactional and local searches, where the user wants to compare, buy or contact a specific business, are far less likely to be replaced by a summary and tend to keep sending clicks." },
      { q: "Which of my pages are most at risk from AI Overviews?", a: "Thin, purely informational pages whose only job is to answer a single simple question are the most exposed, because a summary can now provide that answer directly. Pages tied to decisions and actions, such as comparisons, detailed guides, product and service pages, and local pages where someone wants a specific provider, are much more resilient because a short summary cannot do the job the searcher actually needs." },
      { q: "How do I measure whether AI Overviews are reducing my traffic?", a: "Use Google Search Console and look for pages where impressions hold steady but clicks and click-through rate fall, which is the signature of a query where a summary is capturing the answer while you still rank. Segment informational content from commercial and local pages to see where the pressure is, and rule out seasonality, algorithm updates and site changes before attributing declines to AI Overviews." },
      { q: "Can being cited in an AI Overview help my business?", a: "Yes, potentially. Being referenced within an AI Overview can place your brand at the very top of the results page, in front of users at the start of their journey. Content that is clearly structured, genuinely deep and directly answers questions is more likely to be drawn on, so the same qualities that make a page resilient also improve your chances of being one of the sources an Overview cites." },
      { q: "Should I stop publishing informational content?", a: "No, but you should make it earn its place. Purely thin, single-fact pages are vulnerable, so focus informational content on genuine depth that goes beyond a summary, structure it to be quotable, and use it to guide readers towards your commercial pages rather than treating the visit as the goal. Well-made informational content still builds authority and supports the pages that convert." },
      { q: "Can you guarantee my traffic will not fall because of AI Overviews?", a: "No honest provider can guarantee traffic levels, because they depend on Google, your competitors and factors outside anyone's control. What you can do is understand your own data, protect and deepen the content that holds real value, structure content to be citable, and diversify how demand reaches you across local, brand, email and AI search. That is the realistic way to protect qualified traffic, not a promise of immunity." },
    ],
    references: [
      { title: "Google Search Central: Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", publisher: "Google" },
      { title: "Google Search Central: AI features and your website", url: "https://developers.google.com/search/docs/appearance/ai-features", publisher: "Google" },
      { title: "Google Search Console Help: Performance report", url: "https://support.google.com/webmasters/answer/7576553", publisher: "Google" },
    ],
    related: [
      { label: "Generative Engine Optimisation Dubai", href: "/generative-engine-optimisation-dubai" },
      { label: "Google AI Overviews for UAE Businesses in 2026", href: "/blog/google-ai-overviews-uae-businesses-2026" },
      { label: "Measuring AI Search Visibility in Search Console", href: "/blog/measuring-ai-search-visibility-search-console-2026" },
    ],
  },

  // ── 2. Crawled currently not indexed, how to fix (technical / high-intent) ─
  {
    slug: "crawled-currently-not-indexed-how-to-fix",
    category: "Technical SEO",
    title: "Crawled, Currently Not Indexed: What It Means and How to Fix It",
    excerpt: "A clear 2026 guide to the Crawled currently not indexed status in Search Console, what causes it, and how to get pages indexed.",
    heroImage: img("photo-1467232004584-a241de8bcf5d"),
    heroAlt: "A developer reviewing Google Search Console index coverage on a screen",
    intro: [
      "Few things frustrate site owners more than seeing pages marked Crawled, currently not indexed in Google Search Console. It means Google has visited the page but chosen not to add it to its index, so the page cannot rank or receive organic traffic. Unlike a technical error, this status is usually a quality and priority judgement, which makes it both more common and more fixable than people assume, once you understand what Google is really telling you.",
      "This guide explains what the status means, why Google withholds indexing even after crawling, and the practical steps that improve a page's chances of being indexed. It also covers what not to do, because repeatedly forcing indexing requests without addressing the underlying reasons wastes effort. The goal is a clear, honest process for getting genuinely valuable pages indexed, while accepting that not every page deserves to be.",
    ],
    keyStats: [
      "The status means Google crawled the page but decided not to index it, so it cannot rank.",
      "It is usually a signal about quality, value or priority, not a technical error on the page.",
      "Thin, duplicate or low-value pages are the most common candidates for this status.",
      "Improving content quality and internal signals matters more than repeatedly requesting indexing.",
    ],
    sections: [
      {
        h: "What the Status Actually Means",
        p: [
          "Crawled, currently not indexed appears in Google Search Console's page indexing report, and it tells you that Googlebot successfully accessed the page but has not, at least for now, added it to the index. The page is not blocked and there is no crawl error; Google simply decided the page did not warrant indexing at the time it looked. The word currently matters, because the decision can change if the page or its context improves.",
          "This is different from statuses that indicate a technical block, such as a page excluded by a noindex tag or disallowed in robots. Those are instructions Google is following, whereas Crawled, currently not indexed is a discretionary decision Google has made about value and priority. Recognising this distinction is important, because the fix is not to remove a block but to give Google a reason to reconsider.",
          "It is also worth accepting that some pages carrying this status genuinely should not be indexed. Thin tag pages, near-duplicate variants, and low-value automatically generated pages often sit here for good reason. Part of resolving the status well is deciding honestly which affected pages truly deserve to rank and which are better consolidated, improved or removed rather than forced into the index.",
        ],
        image: {
          url: img("photo-1551288049-bebda4e38f71"),
          alt: "A Search Console report showing page indexing statuses",
          caption: "The status is a discretionary quality and priority judgement, not a technical block.",
        },
      },
      {
        h: "Why Google Chooses Not to Index a Page",
        p: [
          "The most common reason is perceived low value or thin content. If a page offers little that is unique or useful, especially compared with pages already in the index, Google may decide it is not worth storing and serving. This is frequently the case with pages that were created to target a keyword but do not genuinely satisfy the intent behind it, or that largely repeat content found elsewhere on the site or the web.",
          "Duplication and near-duplication are a related cause. When many pages are very similar, Google may index some and leave others in this state, effectively choosing a representative and setting the rest aside. Faceted navigation, parameter variations, boilerplate location pages and lightly-differentiated product variants are classic sources of this, because they multiply pages without multiplying genuine value.",
          "Priority and site authority also play a part. Google allocates finite resources to indexing, and on a large or newer site with limited authority, weaker pages may simply not clear the bar, particularly if they are poorly linked internally. A page that no other important page links to, sitting deep in the structure with little to signal its importance, gives Google little reason to prioritise it.",
        ],
        list: [
          "Thin or low-value content that does not add something unique",
          "Duplicate or near-duplicate pages competing with stronger versions",
          "Boilerplate pages, faceted or parameter URLs multiplied without value",
          "Weak internal linking and low site authority deprioritising the page",
        ],
      },
      {
        h: "How to Improve a Page's Chances of Being Indexed",
        p: [
          "Start with the content itself, because quality is the most common lever. Make the page genuinely useful and distinct: answer the intent fully, add original detail, examples or data, and remove anything that merely repeats what exists elsewhere. A page that clearly deserves to be in the index because it is the best available answer to a real query is far more likely to be indexed than one that was thin to begin with.",
          "Strengthen the internal signals that tell Google the page matters. Link to it from relevant, already-indexed pages using descriptive anchor text, make sure it sits within a logical site structure rather than orphaned, and include it in your XML sitemap. Internal links pass importance and help Google discover and value the page, so a well-linked page has a materially better chance than an isolated one.",
          "Address duplication and consolidation deliberately. Where several pages overlap, consider merging them into one stronger page and redirecting the rest, or using canonical tags correctly so Google understands which version to prefer. Once you have genuinely improved a page, you can request indexing through the URL Inspection tool, but treat that as a nudge after the real work, not a substitute for it.",
        ],
      },
      {
        h: "What Not to Do, and When to Let It Go",
        p: [
          "Resist the temptation to repeatedly submit the same unchanged page for indexing in the hope of wearing Google down. Requesting indexing does not override Google's judgement about value, and hammering the button without improving the page achieves nothing except your own frustration. The request is useful only after you have given Google a genuine reason to reconsider by improving the page or its context.",
          "Avoid manipulative shortcuts, such as artificially inflating a thin page or spinning near-duplicate variants to seem more substantial. These do not create real value and can undermine trust in the wider site. Similarly, do not assume more pages are always better; publishing large numbers of weak pages tends to increase, not decrease, the share of content stuck in this status.",
          "Finally, accept that some pages should simply be left unindexed, consolidated or removed. Not every URL deserves to rank, and a leaner site of genuinely valuable pages usually performs better than a bloated one full of thin content. If you would like an audit that identifies which of your pages deserve indexing and how to get them there, SEODXB offers a free SEO audit and works without long lock-in contracts.",
        ],
        list: [
          "Do not resubmit an unchanged page repeatedly for indexing",
          "Do not inflate thin pages or spin near-duplicate variants",
          "Do not assume more pages are better; weak pages worsen the problem",
          "Do consolidate or remove pages that genuinely should not be indexed",
        ],
      },
    ],
    takeaway: "Crawled, currently not indexed means Google visited a page but decided, for now, not to add it to its index, so it cannot rank. It is usually a quality and priority judgement rather than a technical error, most often caused by thin or low-value content, duplication, boilerplate pages, or weak internal linking and site authority. Fix it by making the page genuinely useful and distinct, strengthening internal links from relevant indexed pages, including it in your sitemap, and consolidating or canonicalising duplicates, then requesting indexing as a nudge once the real work is done. Do not repeatedly resubmit unchanged pages or inflate thin ones, and accept that some pages are better consolidated or removed than forced into the index. A leaner site of valuable pages usually performs best. SEODXB offers a free SEO audit to identify which pages deserve indexing, with no lock-in contracts.",
    faqs: [
      { q: "What does Crawled, currently not indexed mean?", a: "It means Googlebot successfully accessed the page but has decided, at least for now, not to add it to its index, so the page cannot rank or receive organic traffic. There is no technical block or crawl error; it is a discretionary judgement Google has made about the page's value and priority. The word currently signals that the decision can change if the page or its context improves." },
      { q: "Why would Google crawl a page but not index it?", a: "Usually because it judges the page low in value, too similar to pages already indexed, or not a priority. Thin content that does not add anything unique, near-duplicate pages, boilerplate location or faceted pages, and pages with weak internal linking on a lower-authority site are the most common causes. It is Google choosing not to store and serve a page it does not consider worth indexing." },
      { q: "How do I fix Crawled, currently not indexed?", a: "Improve the page's genuine value so it fully answers the intent and adds something unique, then strengthen the internal links pointing to it from relevant indexed pages, ensure it is in your XML sitemap, and consolidate or canonicalise any duplicates. Once the page genuinely deserves indexing, request it through the URL Inspection tool. The content and linking work matters far more than the request itself." },
      { q: "Should I keep clicking Request Indexing?", a: "No. Repeatedly submitting the same unchanged page does not override Google's judgement about its value and achieves little. The Request Indexing tool is useful only as a nudge after you have given Google a real reason to reconsider, by improving the page or its internal signals. Hammering the button without changing anything wastes effort and will not force a low-value page into the index." },
      { q: "Is Crawled, currently not indexed always a problem?", a: "Not always. Some pages carrying this status genuinely should not be indexed, such as thin tag pages, near-duplicate variants and low-value generated pages. Part of handling it well is deciding honestly which affected pages truly deserve to rank and which are better consolidated, improved or removed. A leaner site of valuable pages usually outperforms a bloated one full of thin content." },
      { q: "How long does it take to get a page indexed after fixing it?", a: "There is no fixed timeframe. After you genuinely improve a page and its internal signals and request indexing, Google needs to recrawl and reassess it, which can take days or longer depending on the site and its priority. Be patient and avoid repeatedly resubmitting. If a genuinely improved, well-linked page still is not indexed after a reasonable period, revisit its quality and its place in your site structure." },
    ],
    references: [
      { title: "Google Search Console Help: Page indexing report", url: "https://support.google.com/webmasters/answer/7440203", publisher: "Google" },
      { title: "Google Search Central: Ask Google to recrawl your URLs", url: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl", publisher: "Google" },
      { title: "Google Search Central: Consolidate duplicate URLs with canonicalization", url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls", publisher: "Google" },
    ],
    related: [
      { label: "Technical SEO Dubai", href: "/technical-seo-dubai" },
      { label: "SEO Audit Dubai", href: "/seo-audit-dubai" },
      { label: "Why a New Website Is Not Getting Traffic", href: "/blog/new-website-not-getting-traffic" },
    ],
  },

  // ── 3. Shopify vs WooCommerce for SEO (commercial comparison) ─────────────
  {
    slug: "shopify-vs-woocommerce-for-seo",
    category: "E-commerce",
    title: "Shopify vs WooCommerce for SEO: Which Is Better in 2026?",
    excerpt: "An honest 2026 comparison of Shopify and WooCommerce for SEO, covering control, speed, structure and which suits which kind of store.",
    heroImage: img("photo-1556742049-0cfed4f6a45d"),
    heroAlt: "An online store dashboard on a laptop next to shopping and shipping items",
    intro: [
      "Shopify and WooCommerce are two of the most popular ways to build an online store, and the question of which is better for SEO comes up constantly when a business is choosing a platform. The honest answer is that both can rank well, and neither has a hidden SEO advantage that guarantees results. What differs is how much control you have, how the platform handles speed and structure, and how much technical work falls to you, and those differences matter more to some businesses than others.",
      "This comparison looks at the SEO-relevant strengths and trade-offs of each platform in 2026, without declaring a single winner for everyone. It covers control and flexibility, performance, URL and site structure, content and blogging, and the practical maintenance burden. The right choice depends on your team, your catalogue and your appetite for technical management, so the aim here is to help you decide rather than to sell you one platform.",
    ],
    keyStats: [
      "Both Shopify and WooCommerce can achieve strong SEO results when set up and maintained well.",
      "WooCommerce offers deeper technical control, while Shopify handles more of the infrastructure for you.",
      "Site speed and Core Web Vitals depend heavily on theme, apps or plugins, and hosting choices.",
      "The best platform for SEO is usually the one your team can maintain consistently over time.",
    ],
    sections: [
      {
        h: "Control and Flexibility",
        p: [
          "WooCommerce is an open-source plugin for WordPress, which gives you close to full control over your store's code, structure and SEO configuration. You can edit almost anything, install specialist SEO plugins, and shape URLs, metadata and schema in detail. That flexibility is a genuine advantage for teams with technical capability, because there are very few SEO changes you simply cannot make.",
          "Shopify is a hosted platform, so it manages much of the underlying infrastructure and imposes some conventions in return for that convenience. You have strong but more bounded control: you can edit titles, descriptions, alt text and much of the theme, but certain structural elements, such as parts of the URL format, are fixed. For many merchants this is an acceptable trade, because the platform removes a great deal of technical burden.",
          "The right framing is not that one platform is powerful and the other limited, but that they distribute effort differently. WooCommerce hands you the controls and the responsibility, while Shopify keeps the guardrails on and does more for you. Neither approach is universally better for SEO; the better fit depends on whether you value maximum control or minimum maintenance.",
        ],
        image: {
          url: img("photo-1554224155-6726b3ff858f"),
          alt: "A workspace comparing two e-commerce platform dashboards",
          caption: "The platforms distribute effort differently: WooCommerce gives control, Shopify removes burden.",
        },
      },
      {
        h: "Speed and Core Web Vitals",
        p: [
          "Site speed is an SEO and conversion factor, and both platforms can be fast or slow depending on how they are built. Shopify runs on managed infrastructure with a global content delivery network, which gives many stores a solid performance baseline without the owner managing servers. That baseline is helpful, but heavy themes and an over-reliance on third-party apps can still slow a Shopify store considerably.",
          "WooCommerce performance depends heavily on your hosting, theme and plugin choices, which is both its risk and its opportunity. Good hosting, a lean theme, caching and image optimisation can produce a very fast store, while cheap hosting and a pile of plugins can produce a slow one. Because you control these variables, you can tune WooCommerce hard, but you are also responsible when it underperforms.",
          "For either platform, Core Web Vitals come down to disciplined choices rather than the logo on the box. Limit the apps or plugins you install to those that earn their place, choose a performance-minded theme, optimise images, and measure real-world performance regularly. A business unwilling or unable to manage this will often find Shopify's managed baseline the safer default, while a capable team can push WooCommerce further.",
        ],
      },
      {
        h: "URLs, Structure and On-Page SEO",
        p: [
          "Both platforms let you control the on-page basics that matter most: title tags, meta descriptions, image alt text, headings and product content. You can implement clean, descriptive URLs, structured product data and internal linking on either, so the core on-page toolkit is broadly comparable and neither leaves you unable to do fundamental SEO.",
          "The differences are at the edges. Shopify enforces certain URL structures, for example prefixes in product and collection paths, which some SEOs dislike but which rarely prevent good rankings in practice. WooCommerce lets you shape URLs and taxonomy more freely, which suits complex catalogues and content-led stores, at the cost of you having to plan that structure sensibly rather than relying on sane defaults.",
          "Structured data is available on both, whether through built-in support, apps or plugins, and is worth implementing for rich results on product pages. As with speed, the platform sets the starting conditions, but the quality of your category structure, internal linking and product content determines whether you actually rank. Those fundamentals are platform-agnostic and deserve most of your attention.",
        ],
        list: [
          "Both platforms fully support titles, meta descriptions, alt text and headings",
          "Shopify fixes some URL structures; WooCommerce lets you shape URLs freely",
          "Product schema is achievable on both, via built-in features, apps or plugins",
          "Category structure, internal linking and product content matter more than the platform",
        ],
      },
      {
        h: "Content, Maintenance and Which to Choose",
        p: [
          "Content is where platform heritage shows. WooCommerce sits on WordPress, the most established content management system, so blogging and content marketing are mature and flexible, which helps stores that compete partly on informational and long-tail search. Shopify includes a capable blog, which is adequate for most merchants, though teams with heavy content ambitions sometimes find WordPress more comfortable.",
          "Maintenance is the quiet deciding factor for many businesses. WooCommerce requires you to manage updates, security, hosting and plugin compatibility, which is manageable with the right support but is real ongoing work. Shopify absorbs most of that maintenance in exchange for its subscription and platform conventions, which is exactly why time-poor merchants often prefer it. Be honest about who will look after the store month after month.",
          "So which is better for SEO in 2026? For a business that wants maximum control, has technical support and values a content-led strategy, WooCommerce is a strong choice. For a business that wants a reliable, fast baseline with minimal technical upkeep, Shopify is an excellent default. Both can rank; the better platform is the one your team will actually maintain well. If you would like help deciding or optimising either store, SEODXB offers a free SEO audit and works without long lock-in contracts.",
        ],
      },
    ],
    takeaway: "Shopify and WooCommerce can both rank well, so there is no universal SEO winner. WooCommerce, built on WordPress, offers deeper control over structure, URLs, content and configuration, which rewards teams with technical support and a content-led strategy, but it hands you responsibility for hosting, speed and maintenance. Shopify manages much of the infrastructure and provides a strong performance baseline with minimal upkeep, at the cost of some fixed conventions such as URL formats. Speed and Core Web Vitals depend on themes, apps or plugins and hosting rather than the platform badge, and the on-page fundamentals are comparable on both. Choose the platform your team can maintain consistently. For help deciding or optimising either, SEODXB offers a free SEO audit with no lock-in contracts.",
    faqs: [
      { q: "Is Shopify or WooCommerce better for SEO?", a: "Neither is universally better; both can rank strongly when built and maintained well. WooCommerce offers deeper technical control and mature content tools, which suit capable, content-led teams, while Shopify provides a reliable, fast baseline with far less maintenance. The right choice depends on your team's technical capacity, your catalogue and how much upkeep you can sustain, not on a hidden SEO advantage in either platform." },
      { q: "Does Shopify's fixed URL structure hurt SEO?", a: "In practice, no. Shopify enforces certain URL prefixes on product and collection paths, which some SEOs dislike, but this rarely prevents good rankings. Search engines handle these structures fine, and your category organisation, internal linking and content quality influence rankings far more than the exact URL format. It is a minor trade-off rather than a genuine barrier to ranking well." },
      { q: "Which platform is faster for SEO and Core Web Vitals?", a: "Both can be fast or slow depending on how they are built. Shopify runs on managed infrastructure with a global content delivery network, giving many stores a solid baseline. WooCommerce speed depends on your hosting, theme and plugins, so it can be tuned to be very fast or left slow. Disciplined theme and app or plugin choices matter more than the platform itself." },
      { q: "Is WooCommerce harder to maintain than Shopify?", a: "Generally yes. WooCommerce requires you to manage WordPress updates, security, hosting and plugin compatibility, which is manageable with support but is ongoing work. Shopify absorbs most of that maintenance as a hosted platform, in exchange for its subscription and conventions. If your team is time-poor or non-technical, Shopify's lower maintenance burden is often the more realistic choice." },
      { q: "Can I do product schema on both platforms?", a: "Yes. Structured data for products is achievable on both Shopify and WooCommerce, whether through built-in support, apps or plugins. Implementing valid Product schema helps you qualify for rich results such as price and availability in search. As always, follow Google's structured data guidelines and only mark up content that is genuinely visible on the page." },
      { q: "Should I switch platforms to improve my SEO?", a: "Rarely just for SEO. Migrations carry real risk, including lost rankings if redirects and structure are handled poorly, so switching should be driven by broader business needs rather than a belief that the other platform ranks better. Usually you will gain more by fixing speed, structure, content and technical issues on your current platform than by migrating in search of an SEO edge." },
    ],
    references: [
      { title: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", publisher: "Google" },
      { title: "Google Search Central: Product structured data", url: "https://developers.google.com/search/docs/appearance/structured-data/product", publisher: "Google" },
      { title: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals", publisher: "Google" },
    ],
    related: [
      { label: "E-commerce SEO Dubai", href: "/ecommerce-seo-dubai" },
      { label: "Shopify SEO Dubai", href: "/shopify-seo-dubai" },
      { label: "Wix vs WordPress for SEO in 2026", href: "/blog/wix-vs-wordpress-for-seo-2026" },
    ],
  },

  // ── 4. Google Business Profile suspended, what to do (local problem) ──────
  {
    slug: "google-business-profile-suspended-what-to-do",
    category: "Local SEO",
    title: "Google Business Profile Suspended? What to Do Next",
    excerpt: "A calm, practical 2026 guide to what to do when your Google Business Profile is suspended, from diagnosis to reinstatement.",
    heroImage: img("photo-1524492412937-b28074a5d7da"),
    heroAlt: "A business owner reviewing a map listing on a phone and laptop",
    intro: [
      "Discovering that your Google Business Profile has been suspended is alarming, because it can remove your business from Google Maps and the local results that drive calls, directions and footfall. The good news is that suspension is often recoverable, especially when you understand why it happened and respond calmly rather than making hurried changes that make things worse. Panic edits are one of the most common ways a fixable suspension becomes a drawn-out one.",
      "This guide sets out what to do next, in order, when your profile is suspended. It explains the two types of suspension, the usual reasons Google takes action, the guideline review you should carry out before touching anything, and how the reinstatement process works. It also covers how to reduce the risk of it happening again, because prevention is far less stressful than appeal. Nobody can promise reinstatement, but a methodical response gives you the best realistic chance.",
    ],
    keyStats: [
      "Suspensions come in two forms: a soft suspension that hides the profile, and a hard suspension that removes it.",
      "Most suspensions trace back to a breach, real or perceived, of Google's guidelines for representing your business.",
      "Reviewing the guidelines before making any edits is the single most important first step.",
      "Reinstatement is possible but never guaranteed, so accurate, honest information is your best protection.",
    ],
    sections: [
      {
        h: "First, Understand Which Suspension You Have",
        p: [
          "There are two kinds of suspension, and knowing which you face shapes your response. A soft suspension means your profile still exists and you can access it, but it no longer appears publicly and you may lose the verified status and the ability to be found on Maps. A hard suspension is more serious: the profile is removed entirely and you lose access to manage it. The distinction matters because the recovery path differs.",
          "Before doing anything else, resist the urge to immediately edit the profile, delete information or create a new listing. Hurried changes can complicate an appeal, and creating duplicate profiles to work around a suspension typically breaches the guidelines and can make matters worse. The correct first move is to pause, confirm the type of suspension, and understand what triggered it.",
          "It also helps to remember that suspensions are not always the result of something you did today. Google reviews profiles against its guidelines continuously, and a suspension can follow an edit, a category change, an address issue, or a wider sweep of a category or area. Treat it as a problem to diagnose rather than a punishment to argue with, and you will make better decisions.",
        ],
        image: {
          url: img("photo-1556761175-b413da4baf72"),
          alt: "A person calmly reviewing guidelines on a laptop before taking action",
          caption: "The best first response to a suspension is to diagnose calmly, not to make hurried edits.",
        },
      },
      {
        h: "Why Profiles Get Suspended",
        p: [
          "Most suspensions come back to Google's guidelines for representing your business, which exist to keep the map trustworthy. Common triggers include an address that does not match a genuine physical presence for a customer-facing business, using a virtual office or a home address against the rules for your business type, keyword-stuffing the business name, or listing a business in a category or model that Google restricts. Recent significant edits to core details can also prompt a review.",
          "Certain business types attract closer scrutiny because they have historically seen more spam, including some service-area businesses, and sectors that Google treats cautiously. If you operate in one of these, your profile needs to be scrupulously accurate and well documented, because the margin for error is smaller. This is not unfair so much as a reflection of where abuse has concentrated in the past.",
          "The practical lesson is that accuracy and honesty are your best defence. A profile that reflects a real business, at a real location it is entitled to list, with a real name and correct category, is far less likely to be suspended and far easier to reinstate if it is. Most avoidable suspensions come from cutting corners on the business name, address or category, so those are the first things to examine.",
        ],
        list: [
          "Business name that adds keywords beyond the real, legal name",
          "Address that does not reflect a genuine, eligible physical presence",
          "Incorrect or restricted business category or model",
          "Recent major edits to name, address or category triggering a review",
        ],
      },
      {
        h: "The Reinstatement Process, Step by Step",
        p: [
          "Start by reading Google's guidelines for representing your business in full and comparing them honestly against your profile. Identify anything that does not comply, from a keyword in the business name to an address or category that does not fit the rules. This review is the foundation of a successful appeal, because you must be able to show that your profile now genuinely meets the guidelines before you ask for reinstatement.",
          "Gather evidence that your business is real and eligible to be listed as it is. Depending on the business type, this can include signage, licences or registration, utility bills, and other proof of a genuine presence at the address. Having clear documentation ready makes the appeal smoother, because reinstatement often hinges on demonstrating legitimacy rather than merely asserting it.",
          "Then submit a reinstatement request through Google's official process and provide the requested information accurately and concisely. Explain that you have reviewed the guidelines and corrected any issues, and supply your evidence. After submitting, avoid making further edits or creating new profiles while the request is reviewed, and be patient, as decisions can take time. If reinstatement is refused, you can usually address the stated reasons and appeal again rather than giving up.",
        ],
      },
      {
        h: "How to Reduce the Risk of It Happening Again",
        p: [
          "Prevention is far less painful than appeal, and it starts with keeping your profile scrupulously within the guidelines. Use your real business name without added keywords, list only an address you are genuinely entitled to use for your business type, choose the most accurate primary category, and keep your details consistent with your website and other listings. Consistency and honesty are not just good practice, they materially lower suspension risk.",
          "Be careful with edits, especially to core information like name, address and category, since significant changes can trigger a review. When you do need to change something important, make the change accurately and avoid stacking many edits at once. Keep documentation of your legitimacy on hand, so that if a review ever occurs you can respond quickly rather than scrambling.",
          "Finally, treat your Business Profile as a genuine asset that deserves ongoing care, not a one-off setup. Monitor it for unexpected changes, respond to reviews, and keep information current. If you would like help auditing your profile against the guidelines, recovering a suspended listing, or strengthening your local presence more broadly, SEODXB offers a free local SEO review and works without long lock-in contracts. We cannot promise reinstatement, but we can help you present the strongest, most compliant case.",
        ],
        list: [
          "Use your real business name with no added keywords",
          "List only an address and category you are genuinely eligible for",
          "Keep details consistent across your site and other listings",
          "Avoid stacking major edits and keep proof of legitimacy ready",
        ],
      },
    ],
    takeaway: "A suspended Google Business Profile is often recoverable if you respond methodically. First confirm whether it is a soft suspension, which hides the profile, or a hard suspension, which removes it, and resist making hurried edits or creating duplicate listings. Most suspensions trace back to Google's guidelines for representing your business, commonly an inaccurate name, address or category, so review those guidelines in full and correct anything that does not comply. Gather evidence that your business is real and eligible, submit an official reinstatement request, and be patient without making further changes while it is reviewed. Prevent recurrence by keeping your name, address and category honest and consistent. Reinstatement is never guaranteed, but a compliant, well-documented profile gives the best chance. SEODXB offers a free local SEO review with no lock-in contracts.",
    faqs: [
      { q: "Why was my Google Business Profile suspended?", a: "Almost always because of a real or perceived breach of Google's guidelines for representing your business. The most common causes are a business name with added keywords, an address that does not reflect a genuine eligible presence, an incorrect or restricted category, or a recent major edit that triggered a review. Comparing your profile honestly against the guidelines usually reveals the likely cause." },
      { q: "What is the difference between a soft and hard suspension?", a: "A soft suspension means your profile still exists and you can access it, but it no longer appears publicly and may lose verified status and Maps visibility. A hard suspension removes the profile entirely and you lose the ability to manage it. Knowing which you have matters because the recovery path and urgency differ, though both are addressed through the reinstatement process." },
      { q: "How do I get my suspended profile reinstated?", a: "Review Google's guidelines in full, correct anything on your profile that does not comply, and gather evidence that your business is genuine and eligible, such as signage, licences or utility bills. Then submit an official reinstatement request, explain the corrections, and provide your evidence accurately. Avoid further edits or new profiles while it is reviewed, and appeal again addressing the stated reasons if refused." },
      { q: "Should I create a new profile if mine is suspended?", a: "No. Creating a duplicate profile to work around a suspension typically breaches Google's guidelines and can make your situation worse, including further action against your listings. The correct route is to fix the original profile so it complies with the guidelines and pursue reinstatement through the official process, rather than trying to bypass the suspension with a new listing." },
      { q: "How long does reinstatement take?", a: "It varies, and there is no fixed timeframe. Some requests are resolved reasonably quickly while others take longer, particularly for business types Google scrutinises more closely. The best approach is to submit a complete, accurate request with supporting evidence, then avoid making further edits and wait for the decision. If refused, you can usually address the reasons given and appeal again." },
      { q: "Can you guarantee my profile will be reinstated?", a: "No honest provider can guarantee reinstatement, because the decision rests with Google and depends on your specific circumstances and compliance. What can be done is to review your profile against the guidelines, correct every issue, document your legitimacy, and present the clearest, most compliant appeal possible. That methodical approach gives you the best realistic chance, but the outcome is never certain." },
    ],
    references: [
      { title: "Google Business Profile Help: Guidelines for representing your business on Google", url: "https://support.google.com/business/answer/3038177", publisher: "Google" },
      { title: "Google Business Profile Help: Request reinstatement", url: "https://support.google.com/business/answer/4569145", publisher: "Google" },
      { title: "Google Business Profile Help: Edit your Business Profile", url: "https://support.google.com/business/answer/3039617", publisher: "Google" },
    ],
    related: [
      { label: "Google Business Profile Dubai", href: "/google-business-profile-dubai" },
      { label: "Local SEO Abu Dhabi", href: "/local-seo-abu-dhabi" },
      { label: "Why You Are Not Showing on Google Maps and How to Fix It", href: "/blog/why-not-showing-google-maps-fixes" },
    ],
  },

  // ── 5. How to improve organic click-through rate (evergreen high-intent) ──
  {
    slug: "how-to-improve-organic-click-through-rate",
    category: "On-Page SEO",
    title: "How to Improve Your Organic Click-Through Rate (2026 Guide)",
    excerpt: "A practical 2026 guide to improving organic click-through rate: earn more clicks from the rankings you already have, without gaming it.",
    heroImage: img("photo-1454165804606-c3d57bc86b40"),
    heroAlt: "A marketer reviewing search click-through data and headlines on a laptop",
    intro: [
      "Organic click-through rate, the share of searchers who click your result after seeing it, is one of the most overlooked levers in SEO. Two pages can rank in the same position yet earn very different numbers of visitors, purely because one presents itself more compellingly in the results. Improving click-through rate lets you win more traffic from rankings you already hold, which is often faster and cheaper than fighting for higher positions.",
      "This guide explains what click-through rate is, why it varies, and the practical, honest ways to improve it: sharper titles and descriptions, matching the searcher's intent, earning rich results, and using Search Console to find your best opportunities. It also warns against manipulative tactics like clickbait, which win the click but lose the trust. The aim is more qualified clicks, not just more clicks.",
    ],
    keyStats: [
      "Click-through rate is the share of searchers who click your result after seeing it in the results.",
      "Position strongly influences click-through rate, but presentation and intent match also matter a great deal.",
      "Titles, descriptions and rich results are the main on-page levers you directly control.",
      "Google Search Console shows exactly where higher click-through rate would win you the most traffic.",
    ],
    sections: [
      {
        h: "What Click-Through Rate Is and Why It Varies",
        p: [
          "Click-through rate in organic search is simply the proportion of people who click your listing out of everyone who saw it. If your page appeared in the results one hundred times and was clicked five times, its click-through rate is five per cent. It is a measure of how effectively your result converts visibility into visits, independent of how many times you appear.",
          "The single biggest driver is position, because higher-ranking results are seen and clicked far more often than lower ones. But position is not the whole story. At any given position, results vary widely in the clicks they earn depending on how appealing and relevant they look, what else surrounds them on the page, and how well they match what the searcher actually wants. That variation is where your opportunity lies.",
          "The results page itself shapes click-through rate too. Features like AI Overviews, featured snippets, ads, local packs and image or video carousels change how much attention the traditional links receive. You cannot control the whole page, but you can control how your own listing looks and how well it fits the query, which is enough to make a meaningful difference to the clicks you capture.",
        ],
        image: {
          url: img("photo-1460925895917-afdab827c52f"),
          alt: "A search results page highlighting how different listings present themselves",
          caption: "At the same position, presentation and intent match still swing how many clicks a listing earns.",
        },
      },
      {
        h: "Write Titles and Descriptions That Earn the Click",
        p: [
          "Your title link is the headline searchers read, so it does the most to win or lose the click. Make it clear, specific and relevant to the query, lead with the words that matter, and give a reason to choose your result, whether that is the benefit, the location, or the specific thing the page offers. A vague or generic title wastes your ranking, while a sharp, honest one converts visibility into visits.",
          "The meta description, though not a direct ranking factor, is your chance to expand on the title and reinforce why your page answers the search. Write a concise, compelling summary that matches the intent and includes the relevant terms, since Google often bolds words that match the query. When your description clearly promises what the searcher wants, more of them click, so treat it as ad copy for a click you are not paying for.",
          "Keep both honest and aligned with the page. Titles and descriptions that oversell or misrepresent the content may win a click but lose the visitor immediately, which helps no one and can be counterproductive. The goal is not the most clicks at any cost, but the most qualified clicks from people who will be glad they chose your result, which is what genuinely benefits your business.",
        ],
        list: [
          "Lead titles with the words that matter and a clear reason to click",
          "Write descriptions as persuasive, accurate summaries matching intent",
          "Include relevant query terms so Google can bold the match",
          "Keep titles and descriptions honest and aligned with the page",
        ],
      },
      {
        h: "Match Intent and Earn Rich Results",
        p: [
          "A result earns more clicks when it obviously fits what the searcher wants, so matching intent is as important as clever wording. If the query is a question, signal that your page answers it; if it is commercial, make the value clear; if it is local, surface the location. When your listing visibly matches the intent behind the search, it stands out as the obvious choice among similar-looking results.",
          "Rich results can make your listing more prominent and informative, which often lifts click-through rate. Valid structured data can enable enhancements such as review stars where genuinely applicable, FAQ or how-to details, product price and availability, and breadcrumbs, all of which give searchers more reason and more surface area to click. Only mark up content that genuinely appears on the page, and follow Google's guidelines, since misused schema can be ignored or penalised.",
          "Do not neglect the small trust signals either. A clean, readable URL, a recognisable brand, and a date where freshness matters all subtly reassure the searcher. None of these is a magic lever on its own, but together they make your result look like the credible, relevant answer, which is exactly what turns an impression into a click.",
        ],
      },
      {
        h: "Use Search Console to Find and Fix the Biggest Opportunities",
        p: [
          "Google Search Console is the single best tool for improving click-through rate, because it shows the impressions, clicks, average position and click-through rate for each of your queries and pages. The most valuable opportunities are usually queries where you already rank reasonably well and earn plenty of impressions but a low click-through rate, because a better title and description can capture clicks you are currently leaving on the table.",
          "Work through these systematically. Identify the pages with high impressions and underwhelming click-through, review how their titles and descriptions read against the queries they rank for, and rewrite them to be sharper and more intent-matched. Because these pages already rank, improvements can show up relatively quickly, making this one of the higher-return activities in day-to-day SEO.",
          "Measure and iterate rather than guessing. After changing a title or description, watch the click-through rate for that query over the following weeks to see whether it improved, and refine further if needed. Treat it as an ongoing optimisation, not a one-off edit, and keep a record of what you changed. If you would like help finding and capturing these click-through opportunities across your site, SEODXB offers a free SEO audit and works without long lock-in contracts.",
        ],
        list: [
          "Find queries with high impressions but low click-through rate",
          "Rewrite the titles and descriptions of already-ranking pages first",
          "Track click-through rate per query after each change and refine",
          "Treat it as ongoing optimisation, keeping a record of what you changed",
        ],
      },
    ],
    takeaway: "Improving organic click-through rate lets you win more traffic from rankings you already hold, often faster than chasing higher positions. Click-through rate is the share of searchers who click your result, and while position is the biggest driver, presentation and intent match swing the clicks you earn at any position. The levers you control are your title link, which should lead with what matters and give a clear reason to click; your meta description, written as an accurate, persuasive summary; a visible match to the searcher's intent; and rich results earned through valid structured data on content that genuinely appears on the page. Keep everything honest, because clickbait wins the click but loses the visitor. Use Google Search Console to find queries with high impressions but low click-through and rewrite those pages first, then measure and iterate. SEODXB offers a free SEO audit to find these opportunities, with no lock-in contracts.",
    faqs: [
      { q: "What is a good organic click-through rate?", a: "There is no single good number, because click-through rate depends heavily on position, query type and what else appears on the results page. A result in a top position naturally earns a much higher rate than one lower down, and branded searches behave differently from informational ones. Rather than chasing a benchmark, compare each of your pages against its own position and look for queries where the rate is lower than the position would suggest." },
      { q: "Does click-through rate affect my rankings?", a: "This is debated, and Google has not confirmed click-through rate as a direct ranking factor you can rely on. The dependable benefit of improving it is more immediate and practical: you win more traffic from the rankings you already have. Focus on click-through rate to capture more of your existing visibility, rather than as a supposed shortcut to higher positions, which is uncertain and easily misused." },
      { q: "How do I improve my click-through rate without clickbait?", a: "Write titles and descriptions that are sharp, specific and genuinely match what the page delivers, leading with the benefit, location or answer the searcher wants. Match the search intent clearly and earn rich results with valid structured data where applicable. Honesty matters because clickbait wins the click but loses the visitor instantly, which helps no one. The aim is more qualified clicks from people glad they chose your result." },
      { q: "Which pages should I optimise for click-through rate first?", a: "Start with pages that already rank reasonably well and earn plenty of impressions but have a low click-through rate, which you can find in Google Search Console. These are the biggest opportunities, because the ranking is already there and only the presentation is holding back clicks. Rewriting their titles and descriptions can capture traffic quickly, making it one of the higher-return SEO tasks available." },
      { q: "Do rich results really increase clicks?", a: "They often help, because enhancements such as review stars where genuinely applicable, FAQ details, product price and availability, or breadcrumbs make your listing more prominent and informative, giving searchers more reason and more surface area to click. You must only mark up content that genuinely appears on the page and follow Google's guidelines, since misused structured data can be ignored, and rich results are never guaranteed even with valid markup." },
      { q: "How long before click-through rate improvements show?", a: "Because you are optimising pages that already rank, improvements can appear relatively quickly, often within a few weeks, once Google has recrawled the updated title and description and searchers respond to them. Watch the click-through rate for the affected queries in Search Console over the following weeks, and refine further if the change did not help. Treat it as ongoing optimisation rather than a single edit." },
    ],
    references: [
      { title: "Google Search Central: Influencing your title links in search results", url: "https://developers.google.com/search/docs/appearance/title-link", publisher: "Google" },
      { title: "Google Search Central: Control your snippets in search results", url: "https://developers.google.com/search/docs/appearance/snippet", publisher: "Google" },
      { title: "Google Search Console Help: Performance report", url: "https://support.google.com/webmasters/answer/7576553", publisher: "Google" },
    ],
    related: [
      { label: "On-Page SEO Dubai", href: "/on-page-seo-dubai" },
      { label: "SEO Services Dubai", href: "/seo-services-dubai" },
      { label: "How to Do Keyword Research for a Small Business", href: "/blog/how-to-do-keyword-research-small-business" },
    ],
  },
];
