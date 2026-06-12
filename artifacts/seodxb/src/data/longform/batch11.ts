// Batch 11: uploaded publishing packages (Jun 2026). AEO/GEO explainer and the
// 20-minute AI visibility audit, both with diagram images served from /images/.
import type { LongFormSpec } from "./types";

export const batch11: LongFormSpec[] = [
  {
    slug: "aeo-vs-seo-vs-geo-differences-explained",
    category: "GEO",
    title: "AEO vs SEO vs GEO: The Differences Nobody Explains Clearly (With Examples)",
    excerpt: "SEO ranks pages, AEO wins answer boxes, GEO earns AI citations. A plain breakdown with examples and what to do first.",
    heroImage: "https://seodxb.com/images/seo-aeo-geo-comparison.png",
    heroAlt: "Comparison diagram of SEO, AEO and GEO showing different goals, units of content and user actions",
    intro: [
      "The short answer: SEO gets your page ranked in search results so a person clicks through. AEO (answer engine optimisation) gets a specific passage of your page pulled into an answer box, snippet or voice response. GEO (generative engine optimisation) gets your brand cited inside AI-generated answers on ChatGPT, Perplexity, Google AI Overviews and similar tools, often without any click at all. They overlap heavily, but they reward different things, and treating them as one discipline is why most AI SEO advice falls flat.",
      "If you run a business in Dubai or anywhere in the UAE, you have probably noticed the shift yourself. You ask ChatGPT for a good corporate tax consultant in Dubai instead of Googling it. Your customers are doing the same. This article explains, in plain terms, what each of the three disciplines actually optimises for, where they differ, where they overlap, and what to do first if your budget only stretches to one priority.",
    ],
    keyStats: [
      "SEO competes at the page level; the prize is the click",
      "AEO competes at the passage level; the prize is the answer position",
      "GEO competes at the chunk level; the prize is the AI citation",
      "Roughly 70 percent of the groundwork is shared across all three",
    ],
    sections: [
      {
        h: "What is SEO?",
        p: [
          "Search engine optimisation (SEO) is the practice of improving a website so its pages rank higher in traditional search engine results, primarily Google. The unit of competition is the page, the prize is the click, and the core signals are relevance (content and keywords), authority (backlinks and brand) and technical health (speed, crawlability, indexability).",
          "SEO is the oldest of the three and still the foundation. Everything AEO and GEO do sits on top of a site that search engines and AI crawlers can actually access, crawl and trust. A site with broken indexing or no authority does not get cited by AI engines either; the credibility problem follows you across all three.",
          "Example: a Dubai accounting firm publishes a guide titled Corporate tax registration in the UAE. Classic SEO success looks like that page ranking on page one for corporate tax registration Dubai and earning clicks from people searching that phrase.",
        ],
      },
      {
        h: "What is AEO?",
        p: [
          "Answer engine optimisation (AEO) is the practice of structuring content so that search engines can lift a specific passage and present it as a direct answer. That includes featured snippets, People Also Ask boxes and voice assistant responses. The unit of competition is no longer the page; it is the passage. The prize is occupying the answer position, which sometimes earns the click and sometimes satisfies the user without one.",
          "AEO rewards a very particular writing style. Ask the question the way a real person asks it, often as a heading. Answer it immediately in one to three tight sentences. Expand afterwards, not before. That structure is the opposite of how most marketers write. The typical blog post warms up for four paragraphs before getting to the point. Answer engines skip those posts entirely.",
          "Example: the same accounting firm adds a section headed How long does corporate tax registration take in the UAE, followed by a direct two-sentence answer. That passage is now eligible for the snippet and voice answers, even if the page itself ranks third or fourth.",
        ],
      },
      {
        h: "What is GEO?",
        p: [
          "Generative engine optimisation (GEO) is the practice of making your content extractable, credible and citable by AI systems that generate answers: ChatGPT, Perplexity, Claude, Gemini, Copilot and Google's AI Overviews. The unit of competition is the extractable chunk (a definition, a table, a numbered list, an attributed statistic), and the prize is being named as a source inside the AI's answer.",
          "GEO differs from SEO in one uncomfortable way: the user may never visit your site. The AI reads your page, decides your content answers the question, and presents it. Your win is brand visibility and a citation link, not a guaranteed session in your analytics. That sounds like a loss until you consider the alternative: your competitor being the cited source while you are invisible.",
          "Example: someone asks Perplexity what the corporate tax deadlines are for Dubai free zone companies. Perplexity assembles an answer and cites three sources. GEO is the work of making sure your firm is one of those three.",
        ],
        list: [
          "Extractability: self-contained definitions, tables, steps and Q&A blocks that can be lifted whole and still make sense. Answers buried in paragraph twelve of a 4,000-word essay do not get found.",
          "Authority: AI systems prefer credible sources, meaning established domains, named authors, content that cites its own sources, and original data nobody else has.",
          "Access: AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) must be allowed in your robots.txt. Block them, accidentally or otherwise, and you are invisible on those platforms regardless of how good the content is.",
        ],
        image: {
          url: "https://seodxb.com/images/seo-aeo-geo-comparison.png",
          alt: "Comparison diagram of SEO, AEO and GEO showing different goals, units of content and user actions",
          caption: "SEO, AEO and GEO compared: different units of competition, different prizes",
        },
      },
      {
        h: "SEO vs AEO vs GEO: the quick comparison",
        p: [
          "SEO optimises for rankings in results pages; its unit of content is the page; the primary prize is the click; the key signals are keywords, backlinks and technical health; the user clicks through to your site; success is measured in positions and organic traffic.",
          "AEO optimises for answer boxes, snippets and voice; its unit is the passage; the prize is the answer position; the key signals are question-and-answer structure and schema; the user reads the answer and may click; success is measured in snippet ownership and People Also Ask presence.",
          "GEO optimises for citations in AI-generated answers; its unit is the extractable chunk; the prize is the citation and brand mention; the key signals are structure, authority, crawler access and original data; the user often never visits your site; success is measured in citation frequency across AI platforms.",
        ],
      },
      {
        h: "Where the three overlap (and why you cannot skip SEO)",
        p: [
          "Here is the part most GEO replaces SEO articles get wrong. The three disciplines share roughly 70 per cent of their groundwork (that figure is a working estimate from practice, not a published statistic, so treat it as directional).",
          "Crawlability and speed matter to Googlebot and to GPTBot alike. AI crawlers are, if anything, less patient with JavaScript-heavy sites. Authority transfers: domains with strong backlink profiles get cited by AI engines more readily. There is no separate AI authority you can build in isolation. Good structure wins everywhere: a clean comparison table helps a human reader, earns a snippet and gets lifted by Perplexity. One asset, three wins.",
          "The practical conclusion: GEO is not a replacement for SEO. It is a layer on top. A business with weak fundamentals that buys a GEO package is paying for a roof with no walls.",
        ],
      },
      {
        h: "Which should a Dubai business prioritise in 2026?",
        p: [
          "Based on what we see across UAE client work (interpretation, not universal fact), the sensible order is below.",
          "If you only do one thing this month: open yourdomain.com/robots.txt and check that GPTBot, PerplexityBot, ClaudeBot and Google-Extended are not blocked. It takes two minutes and a block there makes every other effort pointless on those platforms.",
        ],
        list: [
          "Fix SEO fundamentals first if your site has indexing problems, no schema, thin service pages or near-zero authority. Nothing else works without this.",
          "Add AEO structure next. Rewrite key pages so every important question gets a direct, quotable answer near the top. Add FAQ sections with FAQPage schema. This is cheap and fast.",
          "Layer GEO on top. Confirm AI crawlers are allowed, add definition blocks and comparison tables, attribute every statistic to a named source, and start testing your buyer queries on Perplexity and ChatGPT weekly to see who gets cited.",
        ],
      },
      {
        h: "Common mistakes we keep seeing",
        p: [
          "The same handful of mistakes shows up in almost every audit we run, regardless of industry.",
        ],
        list: [
          "Writing AI content instead of extractable content. GEO is about structure and credibility, not about using AI to write more words. Generic AI-written filler performs poorly precisely because it contains nothing worth citing.",
          "Quoting statistics without sources. Studies show 80% of buyers with no named source is less citable than a properly attributed figure. AI engines favour claims they can trace.",
          "Burying answers. If your answer to a question appears after 600 words of preamble, you have written for neither humans nor machines.",
          "Blocking AI bots by accident. Some security plugins and CDN settings block AI crawlers by default. Check your actual live robots.txt, not what you think it says.",
          "Measuring GEO with traffic alone. AI citations often produce brand searches and direct visits rather than referral clicks. Watch branded search volume and run weekly citation tests, not just Google Analytics sessions.",
        ],
      },
    ],
    takeaway: "SEO, AEO and GEO are not competing disciplines; they are three layers of the same visibility stack. Fix crawl and authority fundamentals first, restructure key pages so questions get direct answers, then make your best content extractable and verifiable for AI engines. The businesses that win AI citations in 2026 are the ones whose content can be lifted whole and trusted, not the ones producing the most words.",
    faqs: [
      { q: "Is GEO the same as AEO?", a: "No, though they are related. AEO targets answer features inside traditional search (snippets, People Also Ask, voice). GEO targets generative AI platforms that compose answers from multiple sources (ChatGPT, Perplexity, AI Overviews). The writing techniques overlap heavily; the platforms and measurement differ." },
      { q: "Does GEO replace SEO?", a: "No. GEO depends on the same authority, crawlability and content quality that SEO builds. Think of GEO as an additional distribution layer on top of SEO, not a substitute for it." },
      { q: "How do I know if AI engines can see my site?", a: "Check yourdomain.com/robots.txt for rules blocking GPTBot, PerplexityBot, ClaudeBot or Google-Extended. Then ask Perplexity a question your site should answer and check whether you appear in the sources panel." },
      { q: "How long does GEO take to show results?", a: "There is no reliable published benchmark yet; the field is too new. In practice, structural fixes (definitions, FAQs, schema, bot access) can influence citations within weeks because AI engines re-crawl frequently, while authority-driven gains take months, the same as SEO. Treat any agency promising exact timelines with caution." },
      { q: "Can a small Dubai business compete with big brands in AI answers?", a: "Often yes, and sometimes more easily than in traditional rankings. AI engines reward the clearest, most specific, best-structured answer to a query. A focused local page that directly answers a question like the cost of setting up a mainland company in Dubai can outcompete a multinational's vague overview page for that specific question." },
    ],
    references: [
      { title: "GPTBot documentation", url: "https://platform.openai.com/docs/bots", publisher: "OpenAI" },
      { title: "PerplexityBot crawler documentation", url: "https://docs.perplexity.ai/guides/bots", publisher: "Perplexity" },
      { title: "Google-Extended and AI crawler controls", url: "https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers", publisher: "Google Search Central" },
      { title: "FAQPage structured data", url: "https://developers.google.com/search/docs/appearance/structured-data/faqpage", publisher: "Google Search Central" },
    ],
  },
  {
    slug: "audit-brand-ai-visibility-20-minutes",
    category: "GEO",
    title: "How to Audit Your Brand's AI Visibility in 20 Minutes (Free Method)",
    excerpt: "A free 20 minute method to check whether ChatGPT, Perplexity and Google AI Overviews can see and cite your brand.",
    heroImage: "https://seodxb.com/images/ai-visibility-audit-flow.png",
    heroAlt: "Four-step 20-minute AI visibility audit process: bot access check, citation test, structure check, score and fix list",
    intro: [
      "The short answer: an AI visibility audit checks three things. Whether AI crawlers can access your site, whether AI engines actually cite you for the questions your buyers ask, and whether your content is structured in a way AI systems can extract. You can do all three in about 20 minutes with no paid tools, using the four-step method below. Repeat it weekly, because AI citations change far more often than Google rankings.",
      "Most businesses in Dubai have no idea whether they exist in AI search. They check their Google rankings monthly, sometimes obsessively, while a growing share of their customers ask ChatGPT or Perplexity directly and never see a results page at all. If the AI does not mention you, you were never in the running. This guide gives you a fast, free, repeatable way to find out where you stand.",
      "One honest caveat before we start: AI search is young and volatile. The same query can return different sources on different days, and the platforms change their behaviour without notice. Treat a single audit as a snapshot, not a verdict. The weekly repetition is what makes the data meaningful.",
    ],
    keyStats: [
      "Full audit takes about 20 minutes with no paid tools",
      "Step 1 (bot access) takes 3 minutes and gates everything else",
      "Five buyer questions across three platforms gives 15 data points",
      "Score your top pages against a 7-point extractability checklist",
    ],
    sections: [
      {
        h: "What you need before you start",
        p: [
          "The whole method needs four things, and none of them cost money.",
        ],
        list: [
          "Your website URL",
          "Five real buyer questions. Not keywords, questions. Write them the way a customer would actually type them: who is the best fit-out company in Business Bay, how much does VAT registration cost in the UAE, is your brand legit. If you are unsure, pull them from your sales enquiries or WhatsApp messages.",
          "Free accounts on ChatGPT and Perplexity (the free tiers are enough)",
          "A simple spreadsheet or notes file to log results",
        ],
        image: {
          url: "https://seodxb.com/images/ai-visibility-audit-flow.png",
          alt: "Four-step 20-minute AI visibility audit process: bot access check, citation test, structure check, score and fix list",
          caption: "The four-step audit: access, citations, structure, fixes",
        },
      },
      {
        h: "Step 1: Check AI bot access (3 minutes)",
        p: [
          "This step comes first because a failure here makes everything else irrelevant. If AI crawlers are blocked from your site, you cannot be cited no matter how good your content is.",
          "Open yourdomain.com/robots.txt in a browser. Search the file for each of these user agents: GPTBot (OpenAI and ChatGPT), PerplexityBot (Perplexity), ClaudeBot and anthropic-ai (Anthropic and Claude), Google-Extended (Google's AI training and Overviews signal), and Applebot-Extended (Apple Intelligence). For each one, check whether it appears under a Disallow rule. Also check whether a blanket User-agent: * followed by Disallow: / exists, which blocks everyone.",
          "Common trap: some security plugins, firewalls and CDN bot-protection settings block AI crawlers even when robots.txt allows them. If your robots.txt looks fine but you never appear anywhere in step 2, ask your developer to check server logs or your CDN's bot rules for blocked requests from these user agents.",
          "If you found a block: stop the audit, fix it, and re-run in a week. Nothing else matters until crawlers can reach you.",
        ],
      },
      {
        h: "Step 2: Run the citation test (8 minutes)",
        p: [
          "Now test whether AI engines actually mention you. Take your five buyer questions and run each one on three platforms. First, Perplexity: type the question, then examine the Sources panel. Perplexity is the most transparent about citations, which makes it the best diagnostic platform. Second, ChatGPT with search or browsing enabled: ask the question and check the cited links in the response. Third, Google: search the question and check whether an AI Overview appears at the top, and if so, which sites it cites.",
          "For each question on each platform, log four things in your spreadsheet: whether your domain was cited, which two or three domains were cited, what content type won the citation (definition, list, table, FAQ, directory, review site), and whether the AI describes your business correctly if it mentions you at all.",
          "Fifteen data points (five questions, three platforms) is a small sample, but it is enough to see the pattern. The content type column is the most valuable one: it tells you what format is winning for your queries, which is exactly what you should build.",
        ],
        list: [
          "Directories beating businesses: in many UAE service categories, AI engines cite aggregator and directory sites rather than the businesses themselves. If that is your pattern, getting listed (and well-described) on the directories being cited is a faster win than any blog post.",
          "Wrong information about your brand: if an AI describes your services, prices or location incorrectly, that usually traces back to outdated third-party pages. Find and fix the source.",
        ],
      },
      {
        h: "Step 3: Check your content structure (6 minutes)",
        p: [
          "Pick your two most important pages (usually your main service page and your best guide) and score each against this seven-point checklist. One point per yes.",
          "Scoring: 0 to 3 means the page needs restructuring before it will earn citations. 4 to 5 is a workable baseline. 6 to 7 is strong, and at that point your visibility ceiling is set by authority rather than structure.",
          "The honest pattern behind this checklist: AI systems extract chunks, not essays. A definition, a table, a numbered list and a Q&A pair are chunks. Four paragraphs of warm-up prose are not.",
        ],
        list: [
          "Does the page state what it is about, in a self-contained one-to-two sentence definition, within the first 200 words?",
          "Is there at least one numbered list or step-by-step section?",
          "Is there a FAQ section with direct question-and-answer pairs?",
          "Are comparisons presented in a table rather than buried in paragraphs?",
          "Is every statistic attributed to a named source and year? Unattributed stats are weak citations.",
          "Is there a named author or clear organisational authorship?",
          "Does the page have schema markup? Paste the URL into validator.schema.org and look for Article, FAQPage or HowTo types.",
        ],
      },
      {
        h: "Step 4: Score it and pick three fixes (3 minutes)",
        p: [
          "You now have three data sets: bot access, citation results and structure scores. Convert them into a fix list of exactly three items, assigned and dated. More than three and nothing gets done.",
          "Then put a 20-minute recurring slot in your calendar and re-run the citation test weekly. Log the results in the same spreadsheet. Over four to six weeks you will see whether your fixes are moving anything, and you will catch it quickly when a competitor takes your spot, which in AI search happens without warning.",
        ],
        list: [
          "Any bot block found in step 1. Highest priority, fastest fix.",
          "The structure gap on your most-tested page. If your main service page scored 3 out of 7, add the missing definition block and FAQ section this week.",
          "One presence gap from step 2. If a directory keeps getting cited instead of you, claim and optimise your listing there.",
        ],
      },
      {
        h: "What this audit will not tell you",
        p: [
          "Worth stating plainly, because the limits matter.",
        ],
        list: [
          "It will not give you a citation rank. AI platforms do not expose one, and any tool claiming to track it precisely is approximating.",
          "It will not predict revenue. AI citations drive brand awareness and trust; attributing dirhams to them is currently guesswork.",
          "A single week's result is weak evidence either way. The trend over a month is the signal.",
          "Google Search Console now offers some AI Overview impression data; check the search appearance filters in your account, as this is the only first-party data source currently available and it should be independently verified against your own query testing.",
        ],
      },
    ],
    takeaway: "Twenty minutes a week is enough to know where you stand in AI search: confirm the crawlers can reach you, test your five most valuable buyer questions on Perplexity, ChatGPT and Google, score your key pages for extractability, and commit to exactly three fixes. The trend over a month matters more than any single result, and the businesses that test weekly catch competitor takeovers that everyone else discovers months too late.",
    faqs: [
      { q: "How often should I run an AI visibility audit?", a: "Run the full four-step audit monthly and the citation test (step 2) weekly. AI citations are volatile, so weekly testing of your top queries is the minimum needed to spot real trends rather than noise." },
      { q: "Why does ChatGPT not mention my business at all?", a: "The usual causes, roughly in order of likelihood: AI crawlers are blocked at robots.txt or CDN level, your site lacks the structured and extractable content AI engines lift, your domain has little authority relative to competitors, or third-party sources (directories, reviews) describe your category better than you do." },
      { q: "Do I need paid tools to track AI visibility?", a: "No. Manual weekly testing on Perplexity, ChatGPT and Google, logged in a spreadsheet, is currently as reliable as most paid trackers. Tooling in this space is immature, so verify any paid tool's claims against your own manual tests before relying on it." },
      { q: "Can I block AI training but still get cited?", a: "Only partially, and it is messy. For several platforms the same crawler feeds both training and answer citation, so blocking it removes you from answers too. If citations matter to your business, the practical position is to allow the major AI bots." },
      { q: "Does schema markup directly cause AI citations?", a: "No direct causal guarantee exists, and anyone claiming one is overstating the evidence. Schema helps machines understand your content type and structure, which supports extraction. Treat it as a strong supporting signal, not a switch." },
    ],
    references: [
      { title: "Robots.txt specification", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro", publisher: "Google Search Central" },
      { title: "GPTBot and OpenAI crawler documentation", url: "https://platform.openai.com/docs/bots", publisher: "OpenAI" },
      { title: "PerplexityBot documentation", url: "https://docs.perplexity.ai/guides/bots", publisher: "Perplexity" },
      { title: "Schema.org validator", url: "https://validator.schema.org/", publisher: "Schema.org" },
    ],
  },
];
