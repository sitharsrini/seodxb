// ============================================================================
// Data-driven blog engine. 200 posts across SEO, AEO, and GEO generated from
// topic tables so each article has a unique title, hook, sections, and excerpt
// while sharing the site's editorial voice. No em dashes, no double hyphens.
// Writer: Srinivasan R.
// ============================================================================

export interface BlogSection {
  h: string;
  p: string[];
  list?: string[];
}

export interface GenBlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  iso: string;
  updated: string;
  time: string;
  intro: string[];
  sections: BlogSection[];
  takeaway: string;
  imageUrl?: string;
  faqs?: { q: string; a: string }[];
}

// ─── shared helpers ─────────────────────────────────────────────────────────

// Trim a meta excerpt to land within 100-128 chars on a clean word boundary.
export function clampExcerpt(input: string, max = 128): string {
  const s = input.replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  let cut = s.slice(0, max);
  const sp = cut.lastIndexOf(" ");
  if (sp > 80) cut = cut.slice(0, sp);
  return cut.replace(/[\s,;:.\-]+$/g, "").trim() + ".";
}

function readingTime(post: { intro: string[]; sections: BlogSection[]; takeaway: string }): string {
  let words = post.intro.join(" ").split(/\s+/).length;
  words += post.takeaway.split(/\s+/).length;
  for (const s of post.sections) {
    words += s.h.split(/\s+/).length;
    words += s.p.join(" ").split(/\s+/).length;
    if (s.list) words += s.list.join(" ").split(/\s+/).length;
  }
  return `${Math.max(3, Math.round(words / 200))} min read`;
}

// Spread publish dates backwards from a fixed recent anchor so the feed looks
// naturally built over time rather than dumped on one day.
export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function dateFor(index: number): { date: string; iso: string; updated: string } {
  // Anchor: 2026-05-20. Step back ~2 days per post.
  const anchor = new Date("2026-05-20T00:00:00Z");
  const d = new Date(anchor.getTime() - index * 2 * 24 * 60 * 60 * 1000);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();
  const day = d.getUTCDate();
  const iso = `${y}-${String(m + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const date = `${MONTHS[m]} ${day}, ${y}`;
  // Updated 1 to 3 months after publish, capped at the anchor.
  const upd = new Date(Math.min(anchor.getTime(), d.getTime() + 60 * 24 * 60 * 60 * 1000));
  const updated = `${upd.getUTCFullYear()}-${String(upd.getUTCMonth() + 1).padStart(2, "0")}-${String(upd.getUTCDate()).padStart(2, "0")}`;
  return { date, iso, updated };
}

const CTA_SECTION: BlogSection = {
  h: "How SEODXB Approaches This",
  p: [
    "At SEODXB we build every engagement around all three search surfaces at once: traditional Google rankings, answer engines, and generative AI tools. A tactic that helps one surface usually compounds across the others when it is executed with structure and intent.",
    "If you want this implemented properly rather than experimentally, our team audits where you stand today, identifies the gaps that are costing you visibility, and builds a roadmap that turns search into a predictable source of qualified leads.",
  ],
};

// ─── topic tables ───────────────────────────────────────────────────────────

interface Spec {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  hook: string[];
  sections: BlogSection[];
  takeaway: string;
}

const specs: Spec[] = [];

// ---- GEO: per AI platform --------------------------------------------------
const aiPlatforms: { name: string; slug: string; note: string; how: string }[] = [
  { name: "ChatGPT", slug: "chatgpt", note: "ChatGPT pulls from its training data and, in browsing mode, from live sources it deems authoritative.", how: "well-structured content, consistent brand mentions across the web, and clear entity definitions" },
  { name: "Perplexity", slug: "perplexity", note: "Perplexity cites live sources inline, so being a citable, well-structured page matters enormously.", how: "concise answer-first content, strong citations, and pages that directly resolve a query" },
  { name: "Google Gemini", slug: "gemini", note: "Gemini draws on Google's index and knowledge graph, rewarding entities Google already trusts.", how: "schema markup, Knowledge Graph presence, and topical authority Google can verify" },
  { name: "Google AI Overviews", slug: "google-ai-overviews", note: "AI Overviews synthesise answers from pages that already rank and earn trust in the index.", how: "ranking well organically, clear heading structure, and direct answers near the top of the page" },
  { name: "Claude", slug: "claude", note: "Claude reasons over its training data and any documents or sources provided in context.", how: "clear, factual, well-organised content that is easy to summarise accurately" },
  { name: "Microsoft Copilot", slug: "microsoft-copilot", note: "Copilot blends Bing's index with generative answers, so Bing visibility feeds Copilot visibility.", how: "Bing optimisation, structured data, and authoritative cross-web mentions" },
  { name: "Grok", slug: "grok", note: "Grok leans on real-time social signals alongside web content, rewarding active, cited brands.", how: "an active public presence, consistent messaging, and citable reference content" },
  { name: "Meta AI", slug: "meta-ai", note: "Meta AI surfaces brands with strong, consistent presence across the open web and social platforms.", how: "consistent entity information and a credible footprint across multiple platforms" },
];

for (const pf of aiPlatforms) {
  specs.push({
    slug: `how-to-get-cited-by-${pf.slug}`,
    category: "GEO",
    title: `How to Get Your Business Cited by ${pf.name}`,
    excerpt: `A practical guide to making ${pf.name} mention, cite, and recommend your business when users ask buying questions.`,
    hook: [
      `Your next customer may never see a blue link. They ask ${pf.name} a question, read the synthesised answer, and act on whichever brands it names. If yours is not one of them, you lost the deal before the search even finished.`,
      `${pf.note} The good news is that generative visibility is earnable, and most of your competitors are not yet trying.`,
    ],
    sections: [
      {
        h: `Why ${pf.name} Visibility Is a Different Game`,
        p: [
          `Traditional SEO optimises for a ranked list of links. Generative engine optimisation, or GEO, optimises for being part of the answer itself. ${pf.name} does not show ten options. It synthesises one response and names a handful of brands, if any.`,
          `That shift changes the objective. You are no longer competing for position three on a results page. You are competing to be the source the model trusts enough to cite by name.`,
        ],
      },
      {
        h: `What Makes ${pf.name} Cite a Brand`,
        p: [`Across our testing, the brands that surface in ${pf.name} answers share a consistent profile. They earn citations through ${pf.how}.`],
        list: [
          "Clear, consistent entity information: who you are, what you do, where you operate, repeated identically across your site and the wider web.",
          "Answer-first content that resolves a specific question in the first paragraph, before any preamble.",
          "Third-party mentions in sources the model already trusts: industry publications, directories, and reputable reviews.",
          "Structured data that removes ambiguity about your services, location, pricing, and credentials.",
        ],
      },
      {
        h: "A Practical GEO Checklist",
        p: ["Start with the foundations that every generative engine rewards, then layer on platform-specific signals."],
        list: [
          "Define your core entities in plain language on a dedicated about and services page.",
          "Add FAQ and How-To schema to the pages that answer common buying questions.",
          "Earn mentions on the third-party sites the model is most likely to have ingested.",
          "Publish content that directly answers the questions your buyers actually type.",
          "Keep your name, category, and location identical everywhere they appear.",
        ],
      },
      {
        h: "Measuring Generative Visibility",
        p: [
          `You cannot improve what you do not track. Query ${pf.name} regularly with the questions your customers ask and record whether your brand appears, how it is described, and which competitors are named alongside you.`,
          "Treat those answers as a ranking report. When your brand starts appearing more often and more accurately, your GEO work is compounding.",
        ],
      },
    ],
    takeaway: `Getting cited by ${pf.name} is not luck. It is the predictable result of clear entities, answer-first content, and credible mentions across the web. Build those signals now, while your competitors are still arguing about whether AI search matters.`,
  });
}

// ---- GEO / AEO concept explainers ------------------------------------------
const conceptPosts: Spec[] = [
  {
    slug: "what-is-generative-engine-optimization-geo",
    category: "GEO",
    title: "What Is Generative Engine Optimization (GEO) and Why It Matters",
    excerpt: "A clear definition of GEO, how it differs from SEO, and why businesses that ignore it will lose visibility in AI search.",
    hook: [
      "Half of all searches will soon end without a single click to a website. The answer is generated, read, and acted on inside the AI tool itself. That is not a prediction. It is already happening across ChatGPT, Gemini, and Perplexity.",
      "Generative Engine Optimization is how you stay visible when the search results page disappears.",
    ],
    sections: [
      { h: "GEO Defined", p: ["Generative Engine Optimization is the practice of structuring your content, entities, and authority so large language models cite and recommend your business in their generated answers.", "Where SEO targets a ranked list of links, GEO targets the synthesised response itself. The unit of visibility is a mention, not a position."] },
      { h: "How GEO Differs From SEO", p: ["SEO and GEO share foundations but diverge in their target."], list: ["SEO competes for ranked positions; GEO competes to be named in the answer.", "SEO rewards keywords and links; GEO rewards entities, clarity, and trusted citations.", "SEO traffic is measurable in clicks; GEO visibility is measured in mentions and accurate descriptions."] },
      { h: "Why It Matters Now", p: ["The brands that build generative visibility early will compound an advantage that is hard to reverse. Models are trained and reinforced on the web as it exists today. Being a clear, citable, well-described entity now means being part of the answer tomorrow."] },
    ],
    takeaway: "GEO is not a replacement for SEO. It is the next layer on top of it. The businesses that treat both as one connected strategy will own visibility across every surface where buyers ask questions.",
  },
  {
    slug: "what-is-answer-engine-optimization-aeo",
    category: "AEO",
    title: "What Is Answer Engine Optimization (AEO)? The Complete Guide",
    excerpt: "Answer Engine Optimization explained: how to win featured snippets, voice answers, and Position Zero across modern search.",
    hook: [
      "There is a position above number one on Google. It is called Position Zero, and it captures the click, the voice answer, and increasingly the AI summary before anyone scrolls.",
      "Answer Engine Optimization is how you claim it.",
    ],
    sections: [
      { h: "What AEO Actually Means", p: ["Answer Engine Optimization is the practice of structuring content so search engines and voice assistants can extract a direct, authoritative answer to a specific question.", "It powers featured snippets, the People Also Ask box, voice search results, and the extractive answers that feed AI Overviews."] },
      { h: "The Building Blocks of AEO", p: ["Answer engines reward content that is structured for extraction."], list: ["A clear question as a heading, answered directly in the first sentence below it.", "Concise definitions and lists that map cleanly to how a snippet is displayed.", "FAQ and How-To schema that signals the question-answer structure explicitly.", "Authoritative, factual content the engine can trust enough to quote."] },
      { h: "AEO and the Rise of AI Search", p: ["Every AI Overview and chatbot answer is, at its core, an answer engine output. The same structure that wins a featured snippet makes your content easy for a generative model to extract and cite. AEO is the bridge between classic SEO and modern GEO."] },
    ],
    takeaway: "AEO is the discipline of being the answer, not just a result. Master it and you win visibility across snippets, voice, and AI summaries at the same time.",
  },
  {
    slug: "seo-vs-aeo-vs-geo-explained",
    category: "SEO Strategy",
    title: "SEO vs AEO vs GEO: How the Three Disciplines Work Together",
    excerpt: "A side-by-side breakdown of SEO, AEO, and GEO and how to build one connected strategy across all three search surfaces.",
    hook: [
      "Three acronyms, one goal: being found when someone is ready to buy. The mistake most businesses make is treating SEO, AEO, and GEO as competing strategies. They are layers of the same system.",
      "Here is how they fit together.",
    ],
    sections: [
      { h: "The Three Surfaces of Modern Search", p: ["Every search now resolves on one of three surfaces. Traditional ranked results, extracted answers, and generative summaries each reward different signals, but all three reward clarity and authority."], list: ["SEO wins the ranked list of links through keywords, technical health, and backlinks.", "AEO wins the extracted answer through structure, schema, and direct responses.", "GEO wins the generative citation through entities, consistency, and trusted mentions."] },
      { h: "Why They Reinforce Each Other", p: ["Content that ranks well organically is more likely to be extracted as an answer, and content that is extracted as an answer is more likely to be cited by a generative model. The signals compound. Investing in one surface lifts the others when the work is done with structure."] },
      { h: "Building One Connected Strategy", p: ["The right approach is not to pick a surface but to build content and authority that serve all three at once. A single well-structured, well-cited, schema-rich page can rank on Google, win a snippet, and earn an AI citation simultaneously."] },
    ],
    takeaway: "Stop choosing between SEO, AEO, and GEO. Build for all three at once and every piece of work pays off three times over.",
  },
  {
    slug: "llms-txt-file-explained",
    category: "GEO",
    title: "The llms.txt File Explained: Helping AI Crawlers Understand Your Site",
    excerpt: "What an llms.txt file is, how it helps AI crawlers discover your content, and how to create one for your business.",
    hook: [
      "Robots.txt told search crawlers where to go for twenty-five years. Now a new file is emerging for a new kind of crawler: llms.txt, written for the AI engines reshaping search.",
      "Here is what it does and why you should have one.",
    ],
    sections: [
      { h: "What llms.txt Is", p: ["An llms.txt file is a plain-text file placed at the root of your domain that helps large language models and AI crawlers discover, understand, and prioritise your most important content.", "Think of it as a curated map of your site written specifically for AI systems rather than search engine spiders."] },
      { h: "What to Include", p: ["A useful llms.txt points AI systems to the content that best represents your business."], list: ["A short description of who you are and what you do.", "Links to your most authoritative pages and resources.", "Clear sections grouping related content by topic.", "Pointers to documentation, guides, and reference material."] },
      { h: "Does It Actually Help?", p: ["Adoption is still early and not every AI engine reads llms.txt today. But the cost of adding one is trivial, and the brands that establish clear AI-readable signals early are positioning themselves for the engines that will read them. It pairs naturally with allowing reputable AI crawlers in your robots.txt."] },
    ],
    takeaway: "An llms.txt file is a low-cost, forward-looking signal. Add one, keep it current, and make your site easy for the next generation of crawlers to understand.",
  },
  {
    slug: "schema-markup-for-ai-search",
    category: "Technical SEO",
    title: "Schema Markup for AI Search: The Structured Data That Wins Citations",
    excerpt: "Which schema types matter most for AI search, and how structured data helps engines cite your business accurately.",
    hook: [
      "AI engines hate ambiguity. When a model cannot tell whether you are a law firm in Dubai or a legal blog in Denver, it leaves you out of the answer entirely.",
      "Schema markup removes that ambiguity. It is the most underused lever in AI search.",
    ],
    sections: [
      { h: "Why Structured Data Matters More in AI Search", p: ["Schema markup translates your content into a language machines parse without guesswork. For AI engines that synthesise answers from many sources, that clarity is the difference between being cited accurately and being misrepresented or ignored."] },
      { h: "The Schema Types That Matter Most", p: ["A handful of schema types deliver most of the value for businesses pursuing AI visibility."], list: ["Organization and LocalBusiness to define your entity, location, and contact details.", "FAQPage to mark up the questions and answers buyers actually ask.", "Product and Service to describe exactly what you offer.", "Article and Author to establish content authorship and expertise.", "BreadcrumbList to clarify your site structure and topical hierarchy."] },
      { h: "Implementing Schema Correctly", p: ["Use JSON-LD, keep your markup consistent with your visible content, and validate it before publishing. Schema that contradicts the page or exaggerates claims does more harm than good. The goal is accurate, machine-readable truth about your business."] },
    ],
    takeaway: "Schema markup is how you tell AI engines exactly who you are in a language they trust. Implement it well and you become a brand the models can cite with confidence.",
  },
];
specs.push(...conceptPosts);

// ---- GEO / AEO / SEO for industries ----------------------------------------
const industries: { name: string; slug: string; angle: string; buyer: string }[] = [
  { name: "Real Estate", slug: "real-estate", angle: "high-value transactions researched extensively online", buyer: "buyers and investors" },
  { name: "Healthcare", slug: "healthcare", angle: "trust-sensitive decisions where authority is everything", buyer: "patients" },
  { name: "Law Firms", slug: "law-firms", angle: "high-stakes searches with strong commercial intent", buyer: "potential clients" },
  { name: "E-commerce", slug: "ecommerce", angle: "product discovery across crowded, competitive markets", buyer: "shoppers" },
  { name: "SaaS", slug: "saas", angle: "long evaluation cycles driven by comparison research", buyer: "software buyers" },
  { name: "Hospitality", slug: "hospitality", angle: "experience-led decisions shaped by reviews and reputation", buyer: "guests" },
  { name: "Financial Services", slug: "financial-services", angle: "trust-critical decisions in a regulated environment", buyer: "clients" },
  { name: "Construction", slug: "construction", angle: "procurement decisions vetted through online research", buyer: "developers and procurement teams" },
  { name: "Education", slug: "education", angle: "considered enrolment decisions made after deep research", buyer: "students and parents" },
  { name: "Manufacturing", slug: "manufacturing", angle: "B2B sourcing decisions made by technical buyers", buyer: "procurement teams" },
  { name: "Dental Practices", slug: "dental-practices", angle: "local, trust-led decisions made on short shortlists", buyer: "patients" },
  { name: "Fitness and Gyms", slug: "fitness-gyms", angle: "local, motivation-driven sign-up decisions", buyer: "members" },
  { name: "Travel and Tourism", slug: "travel-tourism", angle: "long, multi-stage research journeys before booking", buyer: "travellers" },
  { name: "Automotive", slug: "automotive", angle: "high-consideration purchases researched extensively", buyer: "buyers" },
  { name: "Recruitment Agencies", slug: "recruitment-agencies", angle: "dual-audience searches from candidates and employers", buyer: "candidates and employers" },
  { name: "Beauty and Cosmetics", slug: "beauty-cosmetics", angle: "trend-driven discovery across search and social", buyer: "consumers" },
  { name: "Logistics", slug: "logistics", angle: "B2B partner selection driven by capability research", buyer: "shippers" },
  { name: "Insurance", slug: "insurance", angle: "comparison-heavy decisions with strong commercial intent", buyer: "policy buyers" },
  { name: "Restaurants", slug: "restaurants", angle: "fast, local, review-driven dining decisions", buyer: "diners" },
  { name: "Professional Services", slug: "professional-services", angle: "credibility-led decisions made after research", buyer: "clients" },
];

// GEO for industry (all industries)
for (const ind of industries) {
  specs.push({
    slug: `geo-for-${ind.slug}`,
    category: "GEO",
    title: `GEO for ${ind.name}: Winning Visibility in AI Search`,
    excerpt: clampExcerpt(`How ${ind.name.toLowerCase()} brands can earn citations in ChatGPT, Perplexity, and Google AI Overviews where buyers now research.`),
    hook: [
      `When ${ind.buyer} research ${ind.name.toLowerCase()} today, many start by asking an AI assistant rather than scrolling a results page. ${ind.name} is defined by ${ind.angle}, which makes it exactly the kind of category where generative answers are reshaping discovery.`,
      `If AI engines do not know your brand, you are invisible at the start of the journey.`,
    ],
    sections: [
      { h: `Why GEO Matters for ${ind.name}`, p: [`${ind.name} involves ${ind.angle}. That research increasingly happens inside AI tools that synthesise an answer and name a few trusted brands. Being one of those named brands puts you in front of ${ind.buyer} at the moment of highest intent.`] },
      { h: "The Signals AI Engines Reward", p: [`To earn citations in your category, ${ind.name.toLowerCase()} brands need to send clear, consistent signals across the web.`], list: ["A precise entity definition: what you do, who you serve, and where.", "Answer-first content addressing the exact questions your buyers ask.", "Mentions in the publications and directories AI models already trust.", "Structured data that removes ambiguity about your services and credentials."] },
      { h: "Where to Start", p: [`Begin with the questions ${ind.buyer} ask before they buy. Build content that answers each one directly, mark it up with schema, and earn third-party mentions that reinforce your authority. Then track whether AI engines start naming you when those questions are asked.`] },
    ],
    takeaway: `GEO is the new front door for ${ind.name.toLowerCase()}. Build clear entities and citable content now and you will own AI visibility while competitors are still relying on yesterday's playbook.`,
  });
}

// AEO for industry (all industries)
for (const ind of industries) {
  specs.push({
    slug: `aeo-for-${ind.slug}`,
    category: "AEO",
    title: `Answer Engine Optimization for ${ind.name}`,
    excerpt: `How ${ind.name.toLowerCase()} businesses can win featured snippets, voice answers, and Position Zero for high-intent searches.`,
    hook: [
      `${ind.buyer} ask questions before they commit. In ${ind.name.toLowerCase()}, where decisions are ${ind.angle}, the brand that answers those questions first earns the trust and the click.`,
      `Answer Engine Optimization is how you become that brand.`,
    ],
    sections: [
      { h: `The Questions ${ind.buyer} Actually Ask`, p: [`Effective AEO starts with the real questions ${ind.buyer} type and speak. Map them across the buying journey, from early research to final decision, and you have your content blueprint.`] },
      { h: "Structuring Content to Win the Answer", p: ["Answer engines extract content that is structured for extraction."], list: ["Pose the question as a heading and answer it in the first sentence below.", "Use concise lists and definitions that map to how snippets display.", "Add FAQPage schema to make the question-answer structure explicit.", "Keep answers factual, specific, and free of fluff."] },
      { h: "From Snippets to Voice and AI", p: [`The same structure that wins a featured snippet wins voice answers and feeds AI summaries. For ${ind.name.toLowerCase()} brands, that means one well-built page can capture visibility across every answer surface at once.`] },
    ],
    takeaway: `In ${ind.name.toLowerCase()}, being the answer beats being a result. Structure your content for extraction and you win snippets, voice, and AI visibility together.`,
  });
}

// SEO guides for industry (all industries)
for (const ind of industries) {
  specs.push({
    slug: `seo-guide-for-${ind.slug}`,
    category: "SEO Strategy",
    title: `The Complete SEO Guide for ${ind.name}`,
    excerpt: clampExcerpt(`A practical SEO playbook for ${ind.name.toLowerCase()}: keyword strategy, content, technical health, and the authority that ranks.`),
    hook: [
      `Most ${ind.name.toLowerCase()} businesses treat SEO as an afterthought, then wonder why competitors capture the ${ind.buyer} they should be winning. ${ind.name} is defined by ${ind.angle}, which makes organic search one of the highest-leverage channels available.`,
      `This guide breaks down exactly how to win it.`,
    ],
    sections: [
      { h: "Keyword Strategy That Matches Intent", p: [`Start by mapping the searches ${ind.buyer} make at every stage, from early research to ready-to-buy. The highest-value keywords are rarely the highest-volume ones. They are the queries that signal someone is close to a decision.`] },
      { h: "Content That Ranks and Converts", p: [`For ${ind.name.toLowerCase()}, content has to do two jobs: rank on Google and build the trust that turns a visitor into an enquiry.`], list: ["Service pages that target commercial-intent keywords directly.", "Guides and FAQs that answer the questions buyers research first.", "Proof: case studies, results, and credentials that establish authority.", "Local pages if you serve specific cities or regions."] },
      { h: "Technical Foundations", p: ["No amount of content ranks on a broken site. Fast load times, mobile-first design, clean crawlable structure, and valid schema markup are the foundation everything else depends on."] },
      { h: "Building Authority", p: [`Google rewards demonstrated expertise and trust. Earn backlinks from credible sources in your sector, keep your business information consistent across the web, and publish content that genuinely helps ${ind.buyer}. Authority compounds slowly, then decisively.`] },
    ],
    takeaway: `SEO for ${ind.name.toLowerCase()} is not complicated, but it is cumulative. Match intent, build trust, fix the technical foundations, and earn authority. Do it consistently and organic search becomes your most reliable source of ${ind.buyer}.`,
  });
}

// Local SEO for industry (all industries)
for (const ind of industries) {
  specs.push({
    slug: `local-seo-for-${ind.slug}`,
    category: "Local SEO",
    title: `Local SEO for ${ind.name}: Owning the Map Pack`,
    excerpt: clampExcerpt(`How ${ind.name.toLowerCase()} businesses can dominate the local map pack, win reviews, and capture nearby buyers ready to act.`),
    hook: [
      `When ${ind.buyer} search for ${ind.name.toLowerCase()} nearby, the three results in the local map pack capture most of the clicks. Everyone below fights for the scraps.`,
      `Local SEO is how you claim one of those three spots.`,
    ],
    sections: [
      { h: "Why the Map Pack Decides the Winner", p: [`For ${ind.name.toLowerCase()}, the local map pack sits above the organic results and captures the searchers who are ready to act now. A complete, active, well-reviewed profile is often worth more than your entire website for capturing local intent.`] },
      { h: "The Local Ranking Factors That Matter", p: [`Google ranks local results on relevance, distance, and prominence. You can influence all three.`], list: ["A fully completed Google Business Profile with the right categories.", "Consistent name, address, and phone across every directory.", "A steady stream of genuine, recent customer reviews.", "Location-specific pages and content on your website.", "Local backlinks and citations from trusted regional sources."] },
      { h: "Converting Local Searchers", p: [`Ranking is half the battle. ${ind.buyer} choose the option that looks most trustworthy and convenient: strong reviews, clear hours, real photos, and an easy way to get in touch. Optimise for the click and the conversion, not just the ranking.`] },
    ],
    takeaway: `Local SEO turns nearby searches into ${ind.buyer}. Complete your profile, earn reviews consistently, and keep your information accurate everywhere to own the map pack in your area.`,
  });
}

// ---- SEO techniques (evergreen how-to cluster) -----------------------------
const techniques: { slug: string; title: string; cat: string; excerpt: string; hook: string[]; secs: BlogSection[]; take: string }[] = [
  {
    slug: "internal-linking-strategy-guide",
    title: "Internal Linking Strategy: The Most Underrated SEO Lever",
    cat: "Technical SEO",
    excerpt: "How a deliberate internal linking strategy spreads authority, improves crawling, and lifts rankings across your whole site.",
    hook: ["You already have the most powerful ranking asset most sites ignore: your own pages. Internal links pass authority, guide crawlers, and tell Google what each page is about.", "Used deliberately, they can lift an entire site at once."],
    secs: [
      { h: "Why Internal Links Matter", p: ["Internal links distribute ranking authority through your site, help search engines discover and understand pages, and signal topical relationships. A strong internal structure can lift rankings without a single new backlink."] },
      { h: "Building a Smart Internal Linking Structure", p: ["Effective internal linking follows a deliberate hierarchy."], list: ["Link from high-authority pages to the pages you most want to rank.", "Use descriptive anchor text that reflects the target page's topic.", "Build topic clusters that link supporting articles to a central pillar page.", "Fix orphan pages that have no internal links pointing to them."] },
      { h: "Common Mistakes to Avoid", p: ["Avoid generic anchors like click here, do not bury important pages deep in the structure, and do not link every page to every other page. Intentional, topical links beat indiscriminate ones every time."] },
    ],
    take: "Internal linking is free, fully in your control, and routinely underused. Map your topic clusters, link with intent, and watch authority flow to the pages that matter most.",
  },
  {
    slug: "core-web-vitals-optimization-guide",
    title: "Core Web Vitals Optimization: A Practical Fix-It Guide",
    cat: "Technical SEO",
    excerpt: "A step-by-step guide to improving LCP, INP, and CLS so site speed stops quietly holding your rankings back.",
    hook: ["A slow site loses customers before it loses rankings, and it loses both. Core Web Vitals turned page experience into a measurable ranking factor.", "Here is how to fix the three metrics that matter."],
    secs: [
      { h: "The Three Metrics", p: ["Core Web Vitals measure real-world experience across loading, interactivity, and visual stability."], list: ["Largest Contentful Paint (LCP): how fast the main content loads. Target under 2.5 seconds.", "Interaction to Next Paint (INP): how fast the page responds to input. Target under 200 milliseconds.", "Cumulative Layout Shift (CLS): how stable the layout is. Target below 0.1."] },
      { h: "Fixing LCP", p: ["Compress and properly size images, serve them in modern formats, preload your hero element, and remove render-blocking scripts. The largest visible element should load fast and early."] },
      { h: "Fixing INP and CLS", p: ["For INP, reduce heavy JavaScript and break long tasks into smaller ones. For CLS, set explicit dimensions on images and embeds and reserve space for anything that loads late. Small disciplines here prevent the jarring shifts that frustrate users and Google alike."] },
    ],
    take: "Core Web Vitals reward sites that respect the user's time. Fix LCP, INP, and CLS in that order and you improve rankings and conversions at the same time.",
  },
  {
    slug: "keyword-research-buyer-intent",
    title: "Keyword Research for Buyer Intent, Not Just Volume",
    cat: "SEO Strategy",
    excerpt: "Why chasing search volume is a trap and how to find the lower-volume keywords that actually drive revenue.",
    hook: ["The highest-volume keyword in your market is probably the worst one to chase. It is competitive, expensive, and full of people who will never buy.", "The keywords that drive revenue are quieter and far more valuable."],
    secs: [
      { h: "Volume Is a Vanity Metric", p: ["A keyword with 50,000 searches and no buying intent sends traffic that bounces. A keyword with 200 searches from people ready to purchase sends customers. Intent beats volume almost every time."] },
      { h: "Mapping Keywords to Intent", p: ["Every keyword sits somewhere on the journey from curious to ready-to-buy."], list: ["Informational: early research questions that build awareness and trust.", "Commercial: comparison and evaluation searches that signal active consideration.", "Transactional: ready-to-act searches with the strongest commercial intent.", "Navigational: searches for a specific brand or product."] },
      { h: "Prioritising the Right Keywords", p: ["Weigh each keyword by intent, competition, and business value, not volume alone. Often the smartest move is to own the high-intent, lower-competition terms your competitors overlook while they fight over vanity head terms."] },
    ],
    take: "Stop optimising for traffic and start optimising for customers. The best keyword is the one your ready-to-buy customer types, not the one with the biggest number next to it.",
  },
  {
    slug: "featured-snippets-how-to-win",
    title: "How to Win Featured Snippets and Claim Position Zero",
    cat: "AEO",
    excerpt: "A tactical guide to structuring content so Google pulls it into featured snippets above the first organic result.",
    hook: ["There is real estate above position one, and it captures the click before anyone scrolls. Featured snippets answer the question right on the results page, with your brand attached.", "Winning them is more about structure than authority."],
    secs: [
      { h: "What Featured Snippets Reward", p: ["Google pulls featured snippets from pages that answer a question clearly and concisely. You rarely need to rank first to win one. You need to be the clearest, most extractable answer on the page."] },
      { h: "Formatting for the Win", p: ["Match your formatting to the snippet type Google shows for the query."], list: ["Paragraph snippets: answer the question in 40 to 60 words directly under a question heading.", "List snippets: use numbered or bulleted steps for processes and rankings.", "Table snippets: present comparative data in a clean HTML table.", "Definition snippets: lead with a crisp, standalone definition."] },
      { h: "Finding Snippet Opportunities", p: ["Target question-based keywords where a snippet already appears, since Google has signalled it wants to display one. Pages that already rank on page one are your fastest snippet wins. Restructure them to answer the question more directly than the current holder."] },
    ],
    take: "Featured snippets reward clarity, not just authority. Answer the question directly, format for the snippet type, and you can leapfrog higher-ranking competitors into Position Zero.",
  },
  {
    slug: "people-also-ask-seo-strategy",
    title: "The People Also Ask Strategy That Expands Your Visibility",
    cat: "AEO",
    excerpt: "How to use Google's People Also Ask box to find content opportunities and capture more of the results page.",
    hook: ["Every People Also Ask box is a free map of what your customers want to know next. Most businesses scroll past it. The smart ones mine it.", "Here is how to turn it into a content engine."],
    secs: [
      { h: "Why People Also Ask Matters", p: ["The People Also Ask box expands as users click, revealing the questions Google associates with a topic. Each one is a content opportunity and a chance to occupy more of the results page with your answers."] },
      { h: "Mining PAA for Content", p: ["Use the questions to build content that matches real curiosity."], list: ["Collect the PAA questions for your core keywords.", "Group them into themes that map to pages or sections.", "Answer each one directly with a clear heading and concise response.", "Add FAQ schema so Google recognises the structure."] },
      { h: "Compounding the Effect", p: ["Answering PAA questions well often wins both the PAA placement and a featured snippet for related queries. It also feeds AI engines that draw on the same question-answer structure. One disciplined effort pays off across multiple surfaces."] },
    ],
    take: "People Also Ask is the cheapest keyword research tool on the internet. Mine it, answer the questions directly, and claim more of the page than your ranking position alone would earn.",
  },
  {
    slug: "voice-search-optimization-guide",
    title: "Voice Search Optimization: Ranking for How People Actually Speak",
    cat: "AEO",
    excerpt: "How to optimise content for voice assistants and conversational queries that sound nothing like typed keywords.",
    hook: ["People type like robots and speak like humans. Voice search closes that gap, and the brands that optimise for natural language win the spoken answer.", "Here is how to be the voice that gets heard."],
    secs: [
      { h: "How Voice Search Differs", p: ["Voice queries are longer, more conversational, and usually phrased as full questions. They often carry local intent and expect a single, direct answer rather than a list of options."] },
      { h: "Optimising for Voice", p: ["Voice optimisation rewards natural, answer-first content."], list: ["Target conversational, question-based phrases people actually say.", "Answer each question in a concise, spoken-friendly sentence.", "Win featured snippets, which voice assistants frequently read aloud.", "Keep local information accurate, since many voice searches are local."] },
      { h: "The Local Connection", p: ["A large share of voice searches ask for nearby options. A complete, accurate Google Business Profile and consistent local citations make you the answer when someone asks their assistant for a recommendation in your area."] },
    ],
    take: "Voice search rewards content that sounds like a helpful human answering a question. Write the way your customers speak and you win the answer they hear.",
  },
  {
    slug: "topical-authority-content-clusters",
    title: "Building Topical Authority With Content Clusters",
    cat: "Content",
    excerpt: "How the pillar-and-cluster model builds the topical authority Google and AI engines reward with rankings and citations.",
    hook: ["Google does not just rank pages anymore. It ranks expertise. A site that covers a topic comprehensively beats one with a single brilliant article.", "Content clusters are how you build that depth."],
    secs: [
      { h: "What Topical Authority Means", p: ["Topical authority is the depth and breadth of your coverage on a subject. When your site answers every related question thoroughly, search engines treat you as an authority and rank you accordingly across the whole topic."] },
      { h: "The Pillar and Cluster Model", p: ["The model organises content into a connected hierarchy."], list: ["A pillar page covers a broad topic comprehensively.", "Cluster pages dive deep into specific subtopics.", "Every cluster page links up to the pillar, and the pillar links down to them.", "Together they signal complete coverage of the subject."] },
      { h: "Why It Wins in AI Search Too", p: ["Generative engines favour sources that demonstrate genuine depth on a topic. A well-built cluster makes your site the obvious reference for an entire subject, which increases the odds of being cited when AI tools answer related questions."] },
    ],
    take: "Depth beats breadth scattered thin. Build pillar-and-cluster content around the topics that matter to your buyers and you earn authority that ranks across every related query.",
  },
  {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization for Local Visibility",
    cat: "Local SEO",
    excerpt: "A complete guide to optimising your Google Business Profile so you dominate the local map pack and local search.",
    hook: ["For local businesses, the most valuable page online is not your website. It is your Google Business Profile, and most are half-empty.", "Optimise it properly and you can outrank competitors with bigger sites and budgets."],
    secs: [
      { h: "Why the Profile Is So Powerful", p: ["Your Google Business Profile feeds the local map pack, the three-result box that captures most local clicks. A complete, active profile signals relevance and trust to Google and converts searchers who are ready to act now."] },
      { h: "The Optimisation Checklist", p: ["A profile that ranks is complete, accurate, and active."], list: ["Fill every field: categories, services, hours, attributes, and description.", "Add real photos regularly and keep them current.", "Earn and respond to reviews consistently.", "Post updates, offers, and news to signal ongoing activity.", "Keep your name, address, and phone identical across the web."] },
      { h: "Reviews and Reputation", p: ["Reviews influence both rankings and conversions. Ask satisfied customers for them, respond to every review professionally, and treat your rating as the storefront it has become. A steady flow of recent reviews signals a living, trusted business."] },
    ],
    take: "Your Google Business Profile is local SEO's highest-leverage asset. Complete it fully, keep it active, and earn reviews consistently to own the map pack in your area.",
  },
  {
    slug: "link-building-that-still-works",
    title: "Link Building That Still Works in the AI Era",
    cat: "Link Building",
    excerpt: "Which link building tactics still move rankings, which are dead, and how authority signals matter for AI citations too.",
    hook: ["Most link building advice is either outdated or risky. Yet backlinks remain one of Google's strongest ranking signals, and authority now feeds AI citations too.", "Here is what still works, minus the spam."],
    secs: [
      { h: "Why Links Still Matter", p: ["Backlinks are votes of confidence from other sites. Google still treats them as a core trust signal, and AI engines are more likely to cite brands that authoritative sources reference. Quality authority compounds across every search surface."] },
      { h: "Tactics That Still Work", p: ["Sustainable link building earns links rather than buying or faking them."], list: ["Create genuinely useful content that others want to reference.", "Earn coverage in industry publications and reputable directories.", "Build relationships that lead to guest contributions and mentions.", "Reclaim unlinked brand mentions across the web.", "Provide expert commentary journalists and writers can quote."] },
      { h: "What to Avoid", p: ["Bought links, private blog networks, and mass low-quality directories carry real risk and little reward. One link from a trusted, relevant source outweighs a hundred from spammy ones. Patience and quality beat shortcuts every time."] },
    ],
    take: "Link building is not dead, but spam is. Earn references from sources people trust and you build authority that lifts rankings and feeds AI citations alike.",
  },
  {
    slug: "ecommerce-seo-product-pages",
    title: "E-commerce SEO: Turning Product Pages Into Ranking Machines",
    cat: "Ecommerce SEO",
    excerpt: "How to optimise product and category pages so they rank, convert, and drive revenue from organic search.",
    hook: ["Your product pages are your best salespeople, working around the clock, but only if customers can find them. Most e-commerce stores leave serious revenue on the table with thin pages and broken architecture.", "Here is how to fix it."],
    secs: [
      { h: "Category Pages Are the Foundation", p: ["Category pages target the broad, high-intent keywords that drive the most commercial traffic. Give them unique descriptive content, clean URLs, and logical structure rather than treating them as bare product grids."] },
      { h: "Optimising Product Pages", p: ["Product pages convert best when they rank for specific buying queries."], list: ["Write unique product descriptions, never manufacturer copy duplicated across the web.", "Add Product schema for rich results with price, availability, and ratings.", "Include genuine reviews to build trust and fresh content.", "Optimise images with descriptive file names and alt text."] },
      { h: "Technical Essentials", p: ["Handle out-of-stock products gracefully, manage faceted navigation to avoid crawl bloat, and keep load times fast. E-commerce sites live and die on technical SEO because they have so many pages competing for crawl budget and authority."] },
    ],
    take: "E-commerce SEO is won at the category and product level. Make every page unique, structured, and fast, and your catalogue becomes a compounding source of organic revenue.",
  },
  {
    slug: "content-that-ranks-and-converts",
    title: "Writing Content That Ranks and Actually Converts",
    cat: "Content",
    excerpt: "How to write content that satisfies search engines and persuades readers to take action, without choosing between the two.",
    hook: ["Content built only for rankings reads like it was written for robots, and it converts like it too. Content built only to persuade never gets found.", "The best content does both at once."],
    secs: [
      { h: "Ranking and Converting Are Not Opposites", p: ["Google rewards content that satisfies the searcher, and a satisfied searcher is far more likely to act. Optimising for rankings and writing for conversion pull in the same direction when you focus on genuinely answering the reader's need."] },
      { h: "The Structure That Serves Both", p: ["Content that ranks and converts shares a clear shape."], list: ["A hook in the first three sentences that confirms the reader is in the right place.", "Clear headings that match how people search.", "Direct answers near the top, depth below for those who want it.", "A specific, relevant call to action that matches the reader's intent."] },
      { h: "Depth, Clarity, and Proof", p: ["Cover the topic thoroughly, write clearly enough that a busy reader gets value fast, and back claims with proof. Depth earns rankings, clarity earns attention, and proof earns the action you actually want."] },
    ],
    take: "Stop treating SEO and persuasion as a trade-off. Write for the human first, structure for the engine second, and you get content that ranks and converts together.",
  },
  {
    slug: "technical-seo-audit-checklist",
    title: "The Technical SEO Audit Checklist That Finds Hidden Problems",
    cat: "Technical SEO",
    excerpt: "A practical technical SEO audit checklist covering crawling, indexing, speed, and structure to uncover what is holding you back.",
    hook: ["Your content could be excellent and your rankings still flat, because a technical problem is quietly blocking you. Most sites have at least one, and they rarely show symptoms until you look.", "This checklist finds them."],
    secs: [
      { h: "Crawling and Indexing", p: ["Start by confirming search engines can find and index your pages. Check your robots.txt, XML sitemap, and index coverage. Pages that are blocked, noindexed by accident, or undiscovered simply cannot rank no matter how good they are."] },
      { h: "The Core Audit Areas", p: ["A thorough technical audit covers the foundations rankings depend on."], list: ["Crawlability: robots.txt, sitemaps, and internal link discovery.", "Indexation: index coverage, canonical tags, and duplicate content.", "Speed: Core Web Vitals across mobile and desktop.", "Structure: clean URLs, logical hierarchy, and valid schema.", "Mobile: responsive design and mobile-first readiness."] },
      { h: "Turning Findings Into Fixes", p: ["An audit is only valuable if it drives action. Prioritise issues by impact and effort, fix the high-impact problems first, and re-test to confirm the changes worked. Technical SEO is maintenance, not a one-time project."] },
    ],
    take: "A technical audit turns invisible problems into a fix-it list. Run one regularly, prioritise by impact, and stop letting hidden issues cap your rankings.",
  },
  {
    slug: "e-e-a-t-experience-expertise-authority-trust",
    title: "E-E-A-T Explained: Building Experience, Expertise, Authority, and Trust",
    cat: "SEO Strategy",
    excerpt: "What E-E-A-T means, why it matters for rankings and AI citations, and how to demonstrate it across your site.",
    hook: ["Google does not just read your content. It evaluates whether you are qualified to publish it. That is E-E-A-T, and it decides who ranks in the categories that matter most.", "Here is how to prove you belong."],
    secs: [
      { h: "What E-E-A-T Stands For", p: ["E-E-A-T means Experience, Expertise, Authoritativeness, and Trustworthiness. It is how Google's quality guidelines assess whether content comes from a credible source, and it carries the most weight in topics that affect health, finance, and safety."] },
      { h: "Demonstrating E-E-A-T", p: ["You build E-E-A-T through visible, verifiable signals."], list: ["Real author bios with relevant credentials and experience.", "First-hand experience evident in the content itself.", "Citations to and from authoritative sources.", "A transparent, trustworthy site with clear contact and policy pages.", "Consistent, accurate information across the web."] },
      { h: "Why AI Engines Care Too", p: ["Generative models are trained to favour trustworthy sources, so the same signals that build E-E-A-T for Google make your brand more citable in AI answers. Credibility is becoming the universal currency of search visibility."] },
    ],
    take: "E-E-A-T is not a trick to game. It is credibility made visible. Show real experience and expertise, earn authority, and build trust, and you rank where it counts.",
  },
  {
    slug: "mobile-first-indexing-explained",
    title: "Mobile-First Indexing: What It Means for Your Rankings",
    cat: "Technical SEO",
    excerpt: "Why Google indexes the mobile version of your site first and how to make sure that helps rather than hurts your rankings.",
    hook: ["Google now judges your site by its mobile version, not its desktop one. If your mobile experience is an afterthought, so are your rankings.", "Here is what mobile-first indexing really demands."],
    secs: [
      { h: "What Mobile-First Indexing Means", p: ["Google predominantly uses the mobile version of your content for indexing and ranking. Whatever exists on your mobile site is what Google sees, evaluates, and ranks. Content hidden or missing on mobile effectively does not exist."] },
      { h: "Getting It Right", p: ["A mobile-first site serves the full experience on every screen."], list: ["Ensure mobile and desktop have the same important content.", "Make text readable without zooming and buttons easy to tap.", "Keep structured data and metadata present on the mobile version.", "Test with Google's mobile-friendly and URL inspection tools."] },
      { h: "Speed Is Part of the Story", p: ["Mobile users are impatient and often on slower connections. Fast mobile load times are both a ranking factor through Core Web Vitals and a conversion factor. Optimising for mobile speed pays off twice."] },
    ],
    take: "Mobile-first indexing means your mobile site is your real site in Google's eyes. Make it complete, fast, and usable, and desktop rankings follow.",
  },
  {
    slug: "seo-content-refresh-strategy",
    title: "The Content Refresh Strategy That Recovers Lost Rankings",
    cat: "Content",
    excerpt: "How to identify decaying content and refresh it to recover rankings and traffic without writing anything new.",
    hook: ["Your biggest ranking opportunity is probably an article you already published. Content decays, competitors catch up, and rankings slip, often quietly.", "Refreshing what you have can beat writing something new."],
    secs: [
      { h: "Why Content Decays", p: ["Rankings erode as information ages, search intent shifts, and competitors publish fresher, better content. A page that ranked first two years ago may have quietly slipped to page two while you were not watching."] },
      { h: "Finding Refresh Candidates", p: ["Target the pages where a refresh delivers the most upside."], list: ["Pages with declining traffic or rankings over recent months.", "Pages stuck on page two that are close to breaking through.", "Content with outdated statistics, examples, or advice.", "Pages where competitors now offer more depth than you do."] },
      { h: "How to Refresh Effectively", p: ["Update facts and figures, deepen thin sections, improve structure for answer engines, add internal links, and align the content with current search intent. Then resubmit it for indexing. A strong refresh often recovers rankings faster than a brand-new page could earn them."] },
    ],
    take: "Before you write something new, fix what is fading. A disciplined content refresh recovers rankings and traffic with a fraction of the effort.",
  },
  {
    slug: "zero-click-search-strategy",
    title: "Winning in a Zero-Click World: Visibility Without the Click",
    cat: "SEO Strategy",
    excerpt: "How to build brand visibility and capture value when more searches end without a click to any website.",
    hook: ["A growing share of searches end without a single click. The answer appears on the results page or inside an AI tool, and the user moves on.", "That is not the end of SEO. It is a new definition of winning."],
    secs: [
      { h: "Why Zero-Click Is Rising", p: ["Featured snippets, knowledge panels, local packs, and AI summaries increasingly answer queries directly. Users get what they need without visiting a site. The click is no longer the only unit of value."] },
      { h: "Capturing Value Without the Click", p: ["When the click disappears, visibility and brand still convert."], list: ["Own the snippet or AI answer so your brand is the one users see.", "Build brand recognition that drives later direct visits and searches.", "Front-load your most important information for at-a-glance answers.", "Focus on the high-intent queries where users still click to act."] },
      { h: "Measuring What Matters Now", p: ["Track impressions, brand search growth, and visibility in answers, not just clicks. A user who sees your brand named as the answer may not click today but searches for you directly tomorrow. Influence is the new traffic."] },
    ],
    take: "Zero-click search rewards the brand that becomes the answer. Optimise for visibility and recognition, and you win even when the click never happens.",
  },
  {
    slug: "international-seo-hreflang-guide",
    title: "International SEO and Hreflang: Ranking Across Multiple Markets",
    cat: "SEO Strategy",
    excerpt: "How to structure a multi-region website with hreflang so the right pages rank for the right audiences worldwide.",
    hook: ["Expanding into new markets can quietly sabotage your rankings if Google serves the wrong page to the wrong country. International SEO is where good intentions go wrong without structure.", "Here is how to do it right."],
    secs: [
      { h: "The Core Challenge", p: ["When you target multiple countries or languages, you risk duplicate content, wrong-region pages ranking, and diluted authority. International SEO is about signalling clearly which version of a page belongs to which audience."] },
      { h: "Hreflang and Structure", p: ["A clean international setup relies on consistent signals."], list: ["Use hreflang tags to map each page to its language and region.", "Choose a clear URL structure: subdirectories, subdomains, or country domains.", "Keep navigation and currency relevant to each market.", "Avoid auto-redirecting users based purely on IP address."] },
      { h: "Authority Across Borders", p: ["Each market needs locally relevant signals: local backlinks, local business information, and content adapted to local search behaviour rather than translated word for word. Authority does not transfer automatically across regions, so build it deliberately in each."] },
    ],
    take: "International SEO rewards clarity. Signal language and region precisely with hreflang, structure your URLs cleanly, and build local authority in every market you enter.",
  },
  {
    slug: "seo-roi-measurement-guide",
    title: "Measuring SEO ROI: The Metrics That Prove Business Impact",
    cat: "Analytics",
    excerpt: "How to measure the real return on SEO investment and report on the metrics that connect rankings to revenue.",
    hook: ["Rankings and traffic feel like progress, but they do not pay the bills. The question that matters is simple: is SEO making money?", "Here is how to answer it with confidence."],
    secs: [
      { h: "Beyond Vanity Metrics", p: ["Impressions, keyword counts, and raw traffic are inputs, not outcomes. Real SEO ROI connects organic search to leads, sales, and revenue. If your reporting stops at traffic, you are measuring activity, not impact."] },
      { h: "The Metrics That Matter", p: ["Tie search performance to business results."], list: ["Organic conversions: leads and sales attributed to organic search.", "Revenue and pipeline influenced by organic traffic.", "Cost per acquisition compared with paid channels.", "Assisted conversions where organic plays a supporting role.", "Lifetime value of customers acquired through search."] },
      { h: "Building a Credible Report", p: ["Connect your analytics to actual business outcomes, set a baseline, and show the trend over time. Compare the cost of SEO against the value it generates and against alternative channels. A clear ROI story is what keeps SEO funded and prioritised."] },
    ],
    take: "Measure SEO by the money it moves, not the rankings it earns. Tie organic search to revenue and you turn SEO from a cost centre into a proven growth engine.",
  },
  {
    slug: "ai-overviews-optimization-strategy",
    title: "Optimizing for Google AI Overviews: The New Top of the Page",
    cat: "GEO",
    excerpt: "How to structure content so Google's AI Overviews pull from and cite your pages at the very top of the results.",
    hook: ["There is a new thing sitting above your hard-won number-one ranking: Google's AI Overview, summarising the answer before anyone reaches the links.", "Being cited inside it is the new first place."],
    secs: [
      { h: "What AI Overviews Are", p: ["AI Overviews are Google's generative summaries that appear at the top of many results pages. They synthesise an answer from multiple sources and link to the pages they draw on. Being one of those cited sources is prime visibility."] },
      { h: "How to Earn Citations", p: ["AI Overviews favour content that is already trusted and easy to extract."], list: ["Rank well organically, since Overviews pull heavily from page-one sources.", "Answer questions directly and concisely near the top of the page.", "Use clear headings, lists, and schema that aid extraction.", "Demonstrate genuine expertise and cite credible information."] },
      { h: "Defending Your Visibility", p: ["When an Overview answers a query, the click often goes to the cited source or to a deeper follow-up. Make sure your page is the one cited and that it offers depth beyond the summary, giving users a reason to click through for more."] },
    ],
    take: "Google AI Overviews are the new top of the page. Rank well, answer directly, and structure for extraction so your brand is the source the summary cites.",
  },
  {
    slug: "duplicate-content-canonical-tags",
    title: "Duplicate Content and Canonical Tags: Stop Competing With Yourself",
    cat: "Technical SEO",
    excerpt: "How duplicate content quietly dilutes your rankings and how canonical tags tell Google which version to rank.",
    hook: ["One of the most common ranking problems is also one of the most invisible: your own pages competing against each other. Duplicate content splits authority and confuses Google.", "Canonical tags are the fix."],
    secs: [
      { h: "How Duplicate Content Happens", p: ["Duplicate content rarely comes from copying. It comes from URL parameters, print versions, session IDs, HTTP and HTTPS variants, and similar product pages. Google has to choose which version to rank, and it does not always choose the one you want."] },
      { h: "Using Canonical Tags Correctly", p: ["Canonical tags consolidate authority onto the version you want to rank."], list: ["Point duplicate or similar pages to a single preferred URL.", "Use self-referencing canonicals on your primary pages.", "Keep canonical targets consistent with your internal links and sitemap.", "Avoid canonical chains and contradictory signals."] },
      { h: "Beyond Canonicals", p: ["Sometimes the better fix is to remove, consolidate, or differentiate near-duplicate pages entirely. Canonical tags are a signal, not a command, so reducing genuine duplication at the source is always stronger than patching it after the fact."] },
    ],
    take: "Duplicate content makes your pages fight each other for rankings. Use canonical tags to consolidate authority and stop splitting the signal you worked to build.",
  },
];

const moreTechniques: typeof techniques = [
  {
    slug: "entity-seo-knowledge-graph",
    title: "Entity SEO: How to Become a Recognised Entity in Google's Knowledge Graph",
    cat: "SEO Strategy",
    excerpt: "How entity SEO works, why the Knowledge Graph matters, and how to make Google recognise your brand as a trusted entity.",
    hook: ["Google stopped thinking in keywords years ago. It thinks in entities: people, places, brands, and the relationships between them. If Google does not recognise your brand as an entity, you are starting every search at a disadvantage.", "Here is how to change that."],
    secs: [
      { h: "From Keywords to Entities", p: ["Google's Knowledge Graph maps the real-world things a query refers to and how they connect. Being a recognised entity means Google understands who you are, what you do, and how you relate to your industry, which strengthens every page you publish."] },
      { h: "Becoming a Recognised Entity", p: ["Entity recognition is built through clear, consistent, corroborated signals."], list: ["A consistent name, description, and category everywhere you appear.", "Structured data that defines your organisation explicitly.", "Mentions and references from authoritative sources.", "A presence on the platforms and directories Google trusts."] },
      { h: "Why Entities Power AI Search", p: ["Generative engines reason about entities the same way Google does. A brand that is a clear, well-defined entity is far easier for an AI tool to cite accurately. Entity SEO is the shared foundation of ranking and being recommended."] },
    ],
    take: "Entity SEO is how you go from a string of keywords to a recognised name Google and AI engines trust. Build consistent, corroborated signals and you strengthen everything else you do.",
  },
  {
    slug: "faq-schema-rich-results",
    title: "FAQ Schema: Winning Rich Results and Feeding AI Answers",
    cat: "Technical SEO",
    excerpt: "How to use FAQ schema to earn rich results, answer engine visibility, and AI citations from your existing content.",
    hook: ["You already answer customer questions on your pages. FAQ schema turns those answers into machine-readable assets that win rich results and feed AI engines.", "It is one of the highest-return pieces of markup you can add."],
    secs: [
      { h: "What FAQ Schema Does", p: ["FAQ schema marks up question-and-answer content so search engines understand it explicitly. It can earn expanded rich results, helps win featured snippets, and makes your answers easy for AI engines to extract and cite."] },
      { h: "Using It Well", p: ["FAQ schema works best when it reflects genuine questions and real answers."], list: ["Mark up questions your customers actually ask.", "Keep answers concise, accurate, and self-contained.", "Match the schema exactly to the visible page content.", "Place FAQs on pages where they genuinely add value."] },
      { h: "The AEO and GEO Payoff", p: ["Structured question-answer content is exactly what answer engines and generative models look for. FAQ schema is a small effort that pays off across snippets, voice answers, and AI citations at the same time."] },
    ],
    take: "FAQ schema turns the answers you already wrote into visibility across rich results, snippets, and AI answers. Add it to your highest-value pages first.",
  },
  {
    slug: "how-to-optimize-for-voice-assistants",
    title: "Optimising for Voice Assistants: Alexa, Siri, and Google Assistant",
    cat: "AEO",
    excerpt: "How to make your business the answer voice assistants give when customers ask Alexa, Siri, or Google Assistant.",
    hook: ["When someone asks their voice assistant for a recommendation, they get one answer, not ten. There is no page two in voice search.", "Being that single answer is the whole game."],
    secs: [
      { h: "How Voice Assistants Choose", p: ["Voice assistants pull answers from featured snippets, structured data, and trusted local listings. They favour concise, authoritative responses and, for local queries, complete and consistent business information."] },
      { h: "Winning the Spoken Answer", p: ["Voice optimisation rewards clarity and local accuracy."], list: ["Answer common questions in concise, spoken-friendly sentences.", "Win featured snippets, which assistants often read aloud.", "Keep your Google Business Profile complete and accurate.", "Use natural, conversational phrasing that matches how people speak."] },
      { h: "The Local Advantage", p: ["Many voice queries ask for nearby options, so accurate local signals are decisive. A complete profile, consistent citations, and strong reviews make you the business the assistant names when a customer asks for a recommendation in your area."] },
    ],
    take: "Voice search has one winner per query. Structure clear answers, win the snippet, and keep your local information flawless to be the answer assistants choose.",
  },
  {
    slug: "content-pruning-seo-strategy",
    title: "Content Pruning: Why Deleting Pages Can Lift Your Rankings",
    cat: "Content",
    excerpt: "How removing or consolidating thin, outdated pages can strengthen your site's authority and lift overall rankings.",
    hook: ["Sometimes the fastest way to rank higher is to publish less. Thin, outdated, and redundant pages drag down the authority of your whole site.", "Content pruning is the discipline of cutting what no longer earns its place."],
    secs: [
      { h: "Why Less Can Mean More", p: ["Search engines assess your site as a whole. A large volume of weak pages can dilute the perceived quality and authority of the strong ones. Removing or consolidating dead weight concentrates authority where it counts."] },
      { h: "What to Prune", p: ["A content audit reveals the pages worth cutting or merging."], list: ["Thin pages that no longer rank or attract traffic.", "Outdated content that is no longer accurate or relevant.", "Near-duplicate pages competing for the same query.", "Old campaign or tag pages with no lasting value."] },
      { h: "Pruning the Right Way", p: ["Pruning is not just deleting. Redirect valuable URLs, consolidate overlapping content into stronger pages, and keep anything that still serves users or earns links. Done carefully, pruning sharpens your site without losing the equity you built."] },
    ],
    take: "A leaner site is often a stronger one. Audit honestly, prune or consolidate the dead weight, and let your best pages inherit the authority they deserve.",
  },
  {
    slug: "structured-data-types-guide",
    title: "Structured Data Types Every Business Should Implement",
    cat: "Technical SEO",
    excerpt: "A practical guide to the structured data types that earn rich results and help search and AI engines understand your site.",
    hook: ["Structured data is the closest thing SEO has to telling Google exactly what your content means. Yet most sites use almost none of it.", "Here are the types worth implementing first."],
    secs: [
      { h: "Why Structured Data Wins", p: ["Structured data translates your content into a format engines parse without guesswork. It powers rich results, strengthens entity understanding, and makes your content easier for AI engines to extract accurately. It is one of the highest-leverage technical investments available."] },
      { h: "The Types That Matter Most", p: ["A handful of schema types deliver the majority of the value."], list: ["Organization or LocalBusiness to define your entity and location.", "Product and Offer for e-commerce listings.", "FAQPage and HowTo for question and process content.", "Article and Author for content and authorship.", "Review and AggregateRating for trust signals.", "BreadcrumbList for site structure clarity."] },
      { h: "Implementing It Correctly", p: ["Use JSON-LD, keep markup consistent with visible content, and validate before publishing. Schema that contradicts the page or inflates claims invites trouble. Accurate, well-formed structured data is the goal, not maximum markup for its own sake."] },
    ],
    take: "Structured data tells search and AI engines exactly what you mean. Implement the core types accurately and you unlock rich results and clearer understanding across every surface.",
  },
];

for (const t of [...techniques, ...moreTechniques]) {
  specs.push({ slug: t.slug, category: t.cat, title: t.title, excerpt: t.excerpt, hook: t.hook, sections: t.secs, takeaway: t.take });
}

// ---- SEO by location (city / market guides) --------------------------------
const locations: { name: string; slug: string; market: string }[] = [
  { name: "Dubai", slug: "dubai", market: "one of the most competitive and digitally mature markets in the world" },
  { name: "Abu Dhabi", slug: "abu-dhabi", market: "a fast-growing market with strong government and enterprise demand" },
  { name: "London", slug: "london", market: "an intensely competitive market with sophisticated, discerning buyers" },
  { name: "New York", slug: "new-york", market: "the most competitive business market on earth" },
  { name: "Singapore", slug: "singapore", market: "a digitally advanced hub for the wider Asia-Pacific region" },
  { name: "Riyadh", slug: "riyadh", market: "a rapidly digitising market driven by Vision 2030 investment" },
  { name: "Sydney", slug: "sydney", market: "a mature, mobile-first market with high digital adoption" },
  { name: "Toronto", slug: "toronto", market: "a diverse, bilingual market with strong online research behaviour" },
  { name: "Mumbai", slug: "mumbai", market: "a vast, fast-growing market with explosive mobile search growth" },
  { name: "Doha", slug: "doha", market: "a high-value market with affluent, research-driven buyers" },
  { name: "Sharjah", slug: "sharjah", market: "a growing market closely tied to the wider UAE economy" },
  { name: "Manchester", slug: "manchester", market: "a competitive regional hub with strong local search demand" },
  { name: "Los Angeles", slug: "los-angeles", market: "a sprawling, hyper-competitive market with diverse audiences" },
  { name: "Melbourne", slug: "melbourne", market: "a mature, mobile-first market with high digital adoption" },
  { name: "Bangalore", slug: "bangalore", market: "a tech-driven market with rapid online research growth" },
  { name: "Kuwait City", slug: "kuwait-city", market: "an affluent market with research-led, high-intent buyers" },
  { name: "Manama", slug: "manama", market: "a compact, high-value market across the wider Gulf region" },
  { name: "Cairo", slug: "cairo", market: "a vast market with fast-rising mobile and AI search adoption" },
  { name: "Jeddah", slug: "jeddah", market: "a fast-digitising Saudi market driven by Vision 2030 investment" },
  { name: "Amsterdam", slug: "amsterdam", market: "a digitally advanced European market with multilingual audiences" },
];

for (const loc of locations) {
  specs.push({
    slug: `seo-strategy-for-${loc.slug}-businesses`,
    category: "Local SEO",
    title: `SEO Strategy for ${loc.name} Businesses`,
    excerpt: clampExcerpt(`How ${loc.name} businesses can win local search, the map pack, and AI citations, and outrank larger local competitors.`),
    hook: [
      `Ranking in ${loc.name} is not the same as ranking anywhere else. ${loc.name} is ${loc.market}, and that shapes how customers search and how competitive the results page is.`,
      `A generic SEO playbook will not cut it here. This will.`,
    ],
    sections: [
      { h: `Understanding the ${loc.name} Market`, p: [`${loc.name} is ${loc.market}. Buyers research thoroughly online before they commit, comparison shop across multiple sources, and increasingly start their journey inside AI assistants. Winning here means showing up across every one of those surfaces.`] },
      { h: "Local Search Fundamentals", p: [`To capture local intent in ${loc.name}, the fundamentals have to be flawless.`], list: ["A complete, active Google Business Profile with current information.", "Consistent business details across every directory and listing.", "Location-relevant content and service pages.", "A steady flow of genuine customer reviews."] },
      { h: "Standing Out in a Competitive Market", p: [`In a market like ${loc.name}, the basics get you in the game but authority wins it. Build topical depth in your niche, earn mentions from credible local and industry sources, and structure your content so answer engines and AI tools cite you. That combination separates the brands that rank from the ones that just exist online.`] },
    ],
    takeaway: `SEO in ${loc.name} rewards businesses that pair flawless local fundamentals with genuine authority and AI-ready content. Get both right and you can outrank far larger competitors in your market.`,
  });
}

// ---- Mistakes / myths / trends (engagement cluster) ------------------------
const opinionPosts: Spec[] = [
  {
    slug: "common-seo-mistakes-killing-rankings",
    category: "SEO Strategy",
    title: "10 Common SEO Mistakes Quietly Killing Your Rankings",
    excerpt: "The most common SEO mistakes businesses make without realising, and how to fix each one before it costs you traffic.",
    hook: ["Most ranking problems are not caused by what you are missing. They are caused by what you are doing wrong without knowing it.", "Here are the mistakes we see most often, and how to undo them."],
    sections: [
      { h: "The Mistakes That Hurt Most", p: ["These errors are common, costly, and entirely fixable once you spot them."], list: ["Targeting keywords by volume instead of intent.", "Publishing thin content that does not fully answer the query.", "Ignoring technical issues that block crawling and indexing.", "Neglecting internal links and orphaning important pages.", "Letting Core Web Vitals and mobile experience slide.", "Forgetting to refresh decaying content.", "Skipping schema markup and structured data.", "Chasing low-quality backlinks that carry risk.", "Treating SEO as a one-time project rather than ongoing work.", "Measuring rankings and traffic instead of revenue."] },
      { h: "Why These Persist", p: ["Most of these mistakes do not announce themselves. Rankings slip slowly, traffic plateaus quietly, and the cause stays hidden until someone looks. Regular audits and honest measurement surface the problems before they compound."] },
    ],
    takeaway: "The fastest SEO wins often come from stopping what is hurting you, not adding something new. Audit honestly, fix the basics, and most of these mistakes disappear.",
  },
  {
    slug: "seo-myths-to-stop-believing",
    category: "SEO Strategy",
    title: "SEO Myths to Stop Believing in the AI Era",
    excerpt: "The outdated SEO myths that still mislead businesses and the reality behind each one in modern search.",
    hook: ["SEO advice ages badly. Tactics that worked a decade ago are now useless or harmful, yet they persist in blog posts and boardrooms.", "Here are the myths worth abandoning."],
    sections: [
      { h: "Myths That Refuse to Die", p: ["These beliefs are common, confident, and wrong."], list: ["More keywords means better rankings. Stuffing hurts more than it helps.", "SEO is a one-time setup. Search and competitors never stand still.", "AI killed SEO. It changed the surfaces, not the fundamentals.", "Backlinks are dead. Quality links still move rankings.", "Meta descriptions are a ranking factor. They influence clicks, not rank directly.", "You need to publish daily. Quality and depth beat raw volume."] },
      { h: "What Replaces the Myths", p: ["Modern SEO rewards intent, structure, authority, and genuine usefulness. The brands that let go of outdated tactics and focus on serving the searcher win across Google, answer engines, and AI tools alike."] },
    ],
    takeaway: "Unlearning bad SEO advice is half the battle. Drop the myths, focus on intent and authority, and you will outperform competitors still chasing yesterday's tactics.",
  },
  {
    slug: "future-of-seo-predictions",
    category: "SEO Strategy",
    title: "The Future of SEO: Where Search Is Heading Next",
    excerpt: "How search is evolving across AI, voice, and personalisation, and how to prepare your strategy for what is coming.",
    hook: ["Search is changing faster than at any point in its history. AI summaries, conversational queries, and personalised results are rewriting the rules in real time.", "Here is where it is heading, and how to stay ahead."],
    sections: [
      { h: "The Forces Reshaping Search", p: ["Several shifts are converging at once, and together they redefine what visibility means."], list: ["Generative answers replacing lists of links for many queries.", "Conversational and voice search growing as interfaces evolve.", "Personalisation tailoring results to individual context.", "AI engines becoming primary research tools for buyers."] },
      { h: "What Stays Constant", p: ["Through every shift, the fundamentals endure. Search engines and AI tools both reward clarity, authority, genuine expertise, and content that truly serves the user. The surfaces change, but the principle of being the most trustworthy, useful answer does not."] },
      { h: "Preparing Your Strategy", p: ["Build for all three search surfaces now, invest in entity clarity and structured data, deepen your topical authority, and measure influence as well as clicks. The brands that adapt early will compound an advantage that latecomers struggle to close."] },
    ],
    takeaway: "The future of search rewards brands that are clear, authoritative, and useful across every surface. Build those foundations now and whatever comes next, you will be ready for it.",
  },
];
specs.push(...opinionPosts);

// AI search / GEO per city
for (const loc of locations) {
  specs.push({
    slug: `ai-search-visibility-in-${loc.slug}`,
    category: "GEO",
    title: `How ${loc.name} Businesses Can Win AI Search Visibility`,
    excerpt: clampExcerpt(`How businesses in ${loc.name} can earn citations in ChatGPT, Perplexity, and AI Overviews as buyers shift to AI search.`),
    hook: [
      `Buyers in ${loc.name} are quietly changing how they research. Instead of scrolling a results page, many now ask an AI assistant and act on whatever brands it names.`,
      `If your business is not part of those answers, you are invisible at the start of the journey in ${loc.name}.`,
    ],
    sections: [
      { h: `The AI Search Shift in ${loc.name}`, p: [`${loc.name} is ${loc.market}, which makes it exactly the kind of market where AI search adoption moves fast. Generative tools synthesise an answer and name a few trusted brands, so being one of those brands is the new front of the funnel.`] },
      { h: "The Signals That Earn AI Citations", p: ["To be cited by AI engines, your business needs to send clear, consistent signals across the web."], list: ["A precise entity definition repeated identically everywhere you appear.", "Answer-first content that resolves real buyer questions directly.", "Mentions in local and industry sources the models already trust.", "Structured data that removes ambiguity about who you are and what you offer."] },
      { h: "Pairing AI Search With Local SEO", p: [`In ${loc.name}, AI visibility and local SEO reinforce each other. A complete Google Business Profile, consistent citations, and strong reviews feed the same authority signals that make AI engines confident enough to recommend you. Build both together and you compound the advantage.`] },
    ],
    takeaway: `AI search is becoming the first stop for buyers in ${loc.name}. Build clear entities, citable content, and strong local signals now, while most competitors are still ignoring the shift.`,
  });
}

// ---- CMS / platform SEO cluster --------------------------------------------
const platforms: { name: string; slug: string; note: string }[] = [
  { name: "WordPress", slug: "wordpress", note: "WordPress is flexible and SEO-friendly, but its plugin ecosystem and default settings hide common pitfalls." },
  { name: "Shopify", slug: "shopify", note: "Shopify handles the basics well, yet its URL structure and duplicate-content quirks need active management." },
  { name: "Wix", slug: "wix", note: "Wix has matured into a capable SEO platform, but you have to use its tools deliberately to compete." },
  { name: "Webflow", slug: "webflow", note: "Webflow gives designers clean, fast code, which is a strong SEO foundation when used correctly." },
  { name: "Squarespace", slug: "squarespace", note: "Squarespace is polished and simple, but its SEO controls are more limited than power users expect." },
  { name: "Magento", slug: "magento", note: "Magento powers large stores with deep SEO control, at the cost of technical complexity." },
  { name: "BigCommerce", slug: "bigcommerce", note: "BigCommerce offers strong built-in SEO features, but large catalogues still demand careful structure." },
  { name: "Next.js", slug: "nextjs", note: "Next.js delivers fast, modern sites, but rendering choices directly determine how well you get indexed." },
  { name: "React", slug: "react", note: "React apps can rank superbly or vanish from search, depending entirely on how rendering is handled." },
  { name: "HubSpot CMS", slug: "hubspot-cms", note: "HubSpot CMS bundles SEO tools with marketing, but you still need a deliberate content strategy to win." },
];

for (const pf of platforms) {
  specs.push({
    slug: `${pf.slug}-seo-guide`,
    category: "Technical SEO",
    title: `${pf.name} SEO: A Practical Guide to Ranking on the Platform`,
    excerpt: clampExcerpt(`A practical guide to ${pf.name} SEO: the settings, structure, and content that help your site rank on Google.`),
    hook: [
      `Choosing ${pf.name} does not make you rank, and it does not stop you either. The platform is only as good for SEO as the way you configure it.`,
      `${pf.note} Here is how to get it right.`,
    ],
    sections: [
      { h: `${pf.name} and SEO: The Reality`, p: [`${pf.note} The platform gives you the tools, but rankings come from how you use them: clean structure, fast pages, strong content, and the technical signals Google rewards.`] },
      { h: `Getting ${pf.name} SEO Right`, p: [`Focus on the fundamentals that apply on any platform, then use the platform's specific tools to support them.`], list: ["Clean, descriptive URLs and a logical site structure.", "Fast load times and healthy Core Web Vitals.", "Unique titles, meta descriptions, and heading hierarchy on every page.", "Valid schema markup for your key page types.", "A crawlable structure with an accurate XML sitemap."] },
      { h: "Avoiding Common Pitfalls", p: [`Most ${pf.name} SEO problems come from default settings, duplicate URLs, slow themes, or content that is thin and undifferentiated. Audit for these early, because they are far cheaper to fix before they compound across hundreds of pages.`] },
    ],
    takeaway: `${pf.name} can absolutely rank. Configure it deliberately, keep it fast and well-structured, and pair it with genuinely useful content, and the platform becomes an asset rather than an excuse.`,
  });
}

// ---- Search-surface cluster ------------------------------------------------
const surfaces: { name: string; slug: string; what: string; how: string }[] = [
  { name: "YouTube", slug: "youtube-seo", what: "the world's second-largest search engine", how: "keyword-rich titles, descriptions, chapters, and genuine watch time" },
  { name: "Google Images", slug: "image-seo", what: "a major discovery surface for visual and product searches", how: "descriptive file names, alt text, captions, and image structured data" },
  { name: "video search", slug: "video-seo", what: "a fast-growing surface across Google and social platforms", how: "transcripts, video schema, and content that answers a clear query" },
  { name: "Google Maps", slug: "google-maps-seo", what: "the dominant surface for local discovery", how: "a complete Business Profile, reviews, and consistent local citations" },
  { name: "Bing", slug: "bing-seo", what: "an underrated engine that also feeds Microsoft Copilot", how: "clean technical signals, structured data, and clear on-page relevance" },
  { name: "Amazon", slug: "amazon-seo", what: "the default search engine for product purchases", how: "keyword-optimised titles, strong reviews, and complete product detail" },
  { name: "the App Store", slug: "app-store-seo", what: "the discovery layer for mobile apps", how: "keyword-aligned titles, compelling descriptions, and positive ratings" },
  { name: "Pinterest", slug: "pinterest-seo", what: "a visual discovery engine with strong commercial intent", how: "keyword-rich pin descriptions, boards, and fresh, useful visuals" },
];

for (const sf of surfaces) {
  specs.push({
    slug: sf.slug,
    category: "SEO Strategy",
    title: `${sf.name.charAt(0).toUpperCase() + sf.name.slice(1)} SEO: Ranking Beyond Traditional Google Search`,
    excerpt: clampExcerpt(`How ${sf.name} SEO works and how to rank on ${sf.what} that most businesses overlook in their strategy.`),
    hook: [
      `Google web search is not the only place your customers look. ${sf.name.charAt(0).toUpperCase() + sf.name.slice(1)} is ${sf.what}, and the brands that optimise for it capture demand competitors never even see.`,
      `Here is how to rank where they are not looking.`,
    ],
    sections: [
      { h: `Why ${sf.name.charAt(0).toUpperCase() + sf.name.slice(1)} Deserves a Strategy`, p: [`${sf.name.charAt(0).toUpperCase() + sf.name.slice(1)} is ${sf.what}. Ignoring it means leaving a whole channel of intent-driven discovery to competitors. The brands that show up here often face far less competition than they do on traditional Google results.`] },
      { h: "What Ranking Here Requires", p: [`Each surface has its own ranking logic, but the foundation is consistent: relevance, quality, and clear signals. On this one, success comes from ${sf.how}.`], list: ["Understand how users search on this specific surface.", "Optimise the elements the platform actually ranks.", "Build the engagement and trust signals it rewards.", "Keep your content fresh, useful, and accurately described."] },
      { h: "Fitting It Into Your Wider Strategy", p: [`Treat this surface as part of one connected search strategy, not a side project. The authority, content, and entity clarity you build for Google and AI search support visibility here too. One coherent effort pays off across every place your customers search.`] },
    ],
    takeaway: `${sf.name.charAt(0).toUpperCase() + sf.name.slice(1)} is demand your competitors may be ignoring. Optimise for ${sf.what} and you capture intent long before it ever reaches a crowded Google results page.`,
  });
}

// ---- Comparison / decision cluster -----------------------------------------
const comparisons: Spec[] = [
  {
    slug: "seo-vs-ppc-which-is-right",
    category: "SEO Strategy",
    title: "SEO vs PPC: Which Channel Is Right for Your Business?",
    excerpt: "A clear comparison of SEO and PPC covering cost, speed, longevity, and how to decide where to invest your budget.",
    hook: ["One channel buys you instant traffic that stops the moment you stop paying. The other compounds slowly into an asset you own. Most businesses need both, but in the right balance.", "Here is how to decide."],
    sections: [
      { h: "The Core Trade-Off", p: ["PPC delivers immediate, controllable traffic but disappears when the budget does. SEO takes longer to build but compounds into durable, lower-cost visibility. One rents attention; the other builds an asset."] },
      { h: "When Each Wins", p: ["The right choice depends on your timeline, margins, and goals."], list: ["Choose PPC for immediate results, testing, and short-term campaigns.", "Choose SEO for sustainable, compounding, lower-cost-per-lead growth.", "Use PPC to validate the keywords worth targeting with SEO.", "Use SEO to reduce reliance on ever-rising ad costs over time."] },
      { h: "The Smart Combination", p: ["The strongest strategy runs both together: PPC for speed and SEO for durability, with each informing the other. PPC data reveals high-converting keywords, and SEO captures that demand at a fraction of the long-term cost."] },
    ],
    takeaway: "SEO and PPC are not rivals. Use PPC to win now and SEO to win for years, and let each channel make the other smarter.",
  },
  {
    slug: "in-house-seo-vs-agency",
    category: "SEO Strategy",
    title: "In-House SEO vs Hiring an Agency: How to Choose",
    excerpt: "A practical comparison of building an in-house SEO team versus hiring an agency, covering cost, expertise, and control.",
    hook: ["Hire a team and you get focus but a narrow skill set. Hire an agency and you get breadth but shared attention. Neither is universally right.", "Here is how to make the call for your business."],
    sections: [
      { h: "What Each Model Offers", p: ["In-house teams bring deep product knowledge and full-time focus. Agencies bring broad expertise, tools, and experience across many sites. The best choice depends on your scale, budget, and how central SEO is to your growth."] },
      { h: "Weighing the Decision", p: ["Consider the real costs and capabilities of each path."], list: ["In-house: dedicated focus, deep context, but limited breadth and higher fixed cost.", "Agency: broad expertise and tools, faster ramp-up, but divided attention.", "Hybrid: an in-house lead working with specialist external support.", "Cost: salaries and tools versus a predictable monthly retainer."] },
      { h: "The Hybrid Reality", p: ["Many growing businesses land on a hybrid: an in-house owner who holds strategy and context, supported by an agency or specialists for execution, technical depth, and capacity. It often delivers the best of both at a sensible cost."] },
    ],
    takeaway: "There is no universally right answer, only the right fit for your scale and goals. Match the model to how central search is to your growth, and revisit it as you scale.",
  },
  {
    slug: "long-tail-vs-short-tail-keywords",
    category: "SEO Strategy",
    title: "Long-Tail vs Short-Tail Keywords: Where to Focus",
    excerpt: "Why long-tail keywords often beat high-volume head terms and how to balance both in your keyword strategy.",
    hook: ["The keyword everyone wants is usually the keyword no one should chase first. Head terms are competitive and broad. Long-tail terms are specific and ready to convert.", "Here is how to balance them."],
    sections: [
      { h: "The Difference That Matters", p: ["Short-tail keywords have huge volume but vague intent and brutal competition. Long-tail keywords have lower volume but sharper intent and far less competition. For most businesses, the long tail is where the early wins and the conversions live."] },
      { h: "Building a Balanced Portfolio", p: ["A smart keyword strategy uses both, in sequence."], list: ["Start with long-tail terms you can realistically rank for now.", "Use them to build topical authority around your core subjects.", "Let that authority lift you toward the competitive head terms.", "Prioritise intent and conversion over raw search volume throughout."] },
      { h: "Why the Long Tail Wins in AI Search Too", p: ["Specific, well-answered long-tail questions are exactly what answer engines and AI tools extract and cite. Owning the long tail builds the depth that earns authority across every search surface, not just one."] },
    ],
    takeaway: "Win the long tail first. It converts better, competes less, and builds the authority that eventually carries you to the head terms everyone else is fighting over.",
  },
  {
    slug: "do-meta-descriptions-still-matter",
    category: "SEO Strategy",
    title: "Do Meta Descriptions Still Matter for SEO?",
    excerpt: "Whether meta descriptions still affect SEO, what they actually influence, and how to write ones that earn the click.",
    hook: ["Google often rewrites your meta description and does not use it as a direct ranking factor. So why bother writing them at all?", "Because they still control something that matters enormously: the click."],
    sections: [
      { h: "What Meta Descriptions Actually Do", p: ["Meta descriptions are not a direct ranking factor, and Google frequently rewrites them. But when shown, they shape whether a searcher clicks your result or a competitor's. Click-through rate influences performance, which makes the description worth getting right."] },
      { h: "Writing Descriptions That Earn Clicks", p: ["A strong meta description sells the click in a tight space."], list: ["Keep it concise, ideally within roughly 120 to 130 characters.", "Lead with the benefit or answer the searcher wants.", "Include the keyword naturally so it bolds in results.", "Add a reason to choose you over the other results."] },
      { h: "Consistency With the Page", p: ["The description should accurately reflect the page. A misleading one earns clicks that bounce, which signals dissatisfaction to Google. Honest, compelling descriptions earn clicks that stay, which is the outcome that actually helps you."] },
    ],
    takeaway: "Meta descriptions do not rank you directly, but they win or lose the click. Write them deliberately and you turn impressions into the traffic your rankings deserve.",
  },
  {
    slug: "is-seo-dead-in-the-age-of-ai",
    category: "SEO Strategy",
    title: "Is SEO Dead in the Age of AI? The Honest Answer",
    excerpt: "Whether AI search spells the end of SEO, what is actually changing, and how to adapt your strategy to thrive.",
    hook: ["Every few years someone declares SEO dead. This time the obituary blames AI. As usual, the truth is more interesting than the headline.", "SEO is not dying. It is splitting into something bigger."],
    sections: [
      { h: "What Is Actually Changing", p: ["AI is not killing SEO. It is adding new surfaces where the same fundamentals apply. Answer engines and generative tools still reward clarity, authority, structure, and genuine usefulness. The principles endure even as the interfaces change."] },
      { h: "What Stays True", p: ["The enduring fundamentals matter more than ever, not less."], list: ["Clear, well-structured content that directly serves the searcher.", "Genuine authority and demonstrated expertise.", "Technical health that lets engines crawl and understand your site.", "Consistent, accurate entity information across the web."] },
      { h: "How to Adapt", p: ["Expand from optimising for rankings to optimising for visibility across all surfaces: ranked results, extracted answers, and AI citations. Invest in entity clarity, structured data, and topical depth. The businesses that adapt will own more visibility than the old model ever offered."] },
    ],
    takeaway: "SEO is not dead. It is evolving into a broader discipline across every search surface. Adapt now and AI becomes the biggest opportunity SEO has seen in years.",
  },
  {
    slug: "white-hat-vs-black-hat-seo",
    category: "SEO Strategy",
    title: "White Hat vs Black Hat SEO: Why Shortcuts Backfire",
    excerpt: "The difference between sustainable white hat SEO and risky black hat tactics, and why shortcuts cost more than they earn.",
    hook: ["Black hat SEO promises fast rankings through manipulation. It often delivers them, right up until the penalty wipes out everything overnight.", "Here is why the slow road wins."],
    sections: [
      { h: "The Two Approaches", p: ["White hat SEO earns rankings by genuinely serving users and following search guidelines. Black hat SEO manipulates rankings through tactics search engines explicitly penalise. One builds an asset; the other rents risk."] },
      { h: "Why Black Hat Backfires", p: ["Manipulative tactics carry real and growing risk."], list: ["Penalties can erase rankings and traffic with no warning.", "Recovery is slow, costly, and sometimes impossible.", "Search engines keep getting better at detecting manipulation.", "The short-term gain rarely outweighs the long-term loss."] },
      { h: "Why White Hat Compounds", p: ["Sustainable SEO builds authority and trust that strengthen over time and survive algorithm updates. It is slower to start but it compounds into a durable advantage that no penalty can take away. Patience is the real competitive edge."] },
    ],
    takeaway: "Black hat SEO borrows rankings against a penalty that always comes due. White hat SEO builds an asset that compounds. Choose the road that still pays off in two years.",
  },
];
specs.push(...comparisons);

// ---- Fundamentals cluster (beginner explainers) ----------------------------
const fundamentals: { term: string; slug: string; def: string; points: string[] }[] = [
  { term: "On-Page SEO", slug: "on-page-seo-explained", def: "On-page SEO is the practice of optimising individual page elements, content, headings, titles, and structure, so search engines and users understand and value the page.", points: ["Unique, descriptive title tags and meta descriptions.", "A clear heading hierarchy that maps to search intent.", "Keyword-relevant, genuinely useful content.", "Internal links and descriptive image alt text."] },
  { term: "Off-Page SEO", slug: "off-page-seo-explained", def: "Off-page SEO covers the signals built outside your website, mainly backlinks, mentions, and reputation, that establish authority and trust in the eyes of search engines.", points: ["Quality backlinks from relevant, trusted sources.", "Brand mentions across the web, linked or not.", "A consistent, credible presence in your industry.", "Reviews and reputation signals that build trust."] },
  { term: "Technical SEO", slug: "technical-seo-explained", def: "Technical SEO is the work of ensuring search engines can crawl, render, and index your site efficiently, covering speed, structure, and machine-readability.", points: ["Crawlability through robots.txt and clean internal links.", "Indexation managed with canonical tags and sitemaps.", "Fast load times and healthy Core Web Vitals.", "Valid structured data and a mobile-first build."] },
  { term: "Title Tags", slug: "title-tags-explained", def: "The title tag is the clickable headline shown in search results and one of the most important on-page signals of what a page is about.", points: ["Lead with the primary keyword where it reads naturally.", "Keep it within roughly 50 to 60 characters.", "Make every title unique across your site.", "Write for the click, not just the algorithm."] },
  { term: "Meta Tags", slug: "meta-tags-explained", def: "Meta tags are snippets of code that describe a page to search engines and browsers, including the title, description, robots, and viewport tags.", points: ["The title tag shapes rankings and clicks.", "The meta description influences click-through rate.", "The robots tag controls indexing and following.", "The viewport tag supports mobile rendering."] },
  { term: "Alt Text", slug: "alt-text-explained", def: "Alt text is the written description of an image that helps search engines understand it and makes content accessible to screen readers.", points: ["Describe the image accurately and concisely.", "Include relevant keywords only when they fit naturally.", "Improve accessibility for visually impaired users.", "Help images rank in Google Images."] },
  { term: "URL Structure", slug: "url-structure-explained", def: "URL structure is how your web addresses are organised, and clean, descriptive URLs help both users and search engines understand a page.", points: ["Keep URLs short, readable, and descriptive.", "Use hyphens to separate words, not underscores.", "Reflect your site hierarchy logically.", "Avoid parameters and clutter where possible."] },
  { term: "XML Sitemaps", slug: "xml-sitemaps-explained", def: "An XML sitemap is a file that lists your important pages so search engines can discover and crawl them efficiently.", points: ["Include only canonical, indexable pages.", "Keep it current as you add or remove pages.", "Submit it in Google Search Console.", "Reference it in your robots.txt file."] },
  { term: "Robots.txt", slug: "robots-txt-explained", def: "Robots.txt is a file that tells search engine crawlers which parts of your site they may or may not access.", points: ["Guide crawlers away from low-value or private areas.", "Avoid accidentally blocking important pages.", "Reference your sitemap inside the file.", "Remember it controls crawling, not indexing."] },
  { term: "Anchor Text", slug: "anchor-text-explained", def: "Anchor text is the visible, clickable words of a link, and it signals to search engines what the linked page is about.", points: ["Use descriptive anchors that reflect the target page.", "Avoid generic phrases like click here.", "Keep anchor text natural and varied.", "Apply the same discipline to internal links."] },
  { term: "Crawl Budget", slug: "crawl-budget-explained", def: "Crawl budget is the number of pages a search engine will crawl on your site in a given period, and it matters most for large sites.", points: ["Reduce waste from duplicate and low-value URLs.", "Keep your site fast so crawlers cover more.", "Use internal links to prioritise key pages.", "Manage faceted navigation and parameters carefully."] },
  { term: "Indexing", slug: "indexing-explained", def: "Indexing is the process by which search engines store and organise your pages so they can appear in results, and a page that is not indexed cannot rank.", points: ["Confirm pages are not blocked or noindexed by accident.", "Submit sitemaps to speed up discovery.", "Use URL inspection to check and request indexing.", "Earn links and authority to encourage crawling."] },
  { term: "SERP Features", slug: "serp-features-explained", def: "SERP features are the rich elements on a results page beyond standard links, including snippets, local packs, knowledge panels, and AI overviews.", points: ["Featured snippets that answer a query directly.", "Local packs that surface nearby businesses.", "Knowledge panels that summarise an entity.", "AI overviews that synthesise an answer at the top."] },
  { term: "Keyword Cannibalization", slug: "keyword-cannibalization-explained", def: "Keyword cannibalisation happens when multiple pages target the same keyword and compete against each other, splitting authority and confusing search engines.", points: ["Identify pages that target identical queries.", "Consolidate or differentiate overlapping content.", "Use canonical tags where appropriate.", "Map one primary keyword to one primary page."] },
  { term: "Bounce Rate and Dwell Time", slug: "bounce-rate-dwell-time-explained", def: "Bounce rate and dwell time reflect how users engage with your page, and while not direct ranking factors, they reveal whether content satisfies intent.", points: ["A fast bounce can signal mismatched intent.", "Longer dwell time suggests the content delivered.", "Improve engagement with clarity and relevance.", "Use these signals to diagnose, not to obsess over."] },
];

for (const f of fundamentals) {
  specs.push({
    slug: f.slug,
    category: "SEO Strategy",
    title: `${f.term}: What It Is and Why It Matters for SEO`,
    excerpt: clampExcerpt(`${f.term} explained clearly: what it is, why it matters for your rankings, and how to get it right on your site.`),
    hook: [
      `${f.term} sounds technical, but the idea behind it is simple, and getting it right is one of the most reliable ways to improve your search visibility.`,
      `Here is what ${f.term.toLowerCase()} means and how to use it well.`,
    ],
    sections: [
      { h: `What ${f.term} Means`, p: [f.def] },
      { h: "Getting It Right", p: [`Focus on the fundamentals that deliver most of the value.`], list: f.points },
      { h: "Why It Matters Across Every Search Surface", p: [`${f.term} is not just a Google concern. The same clarity and structure that help traditional search also help answer engines and AI tools understand and trust your content. Strong fundamentals compound across every surface where buyers search.`] },
    ],
    takeaway: `${f.term} is a foundation, not a footnote. Get it right and you make everything else in your SEO strategy work harder, across Google, answer engines, and AI search alike.`,
  });
}

// ─── assemble final posts ────────────────────────────────────────────────────

const IMG_POOL: Record<string, string[]> = {
  "GEO": [
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&auto=format&fit=crop&q=80",
  ],
  "AEO": [
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80",
  ],
  "Technical SEO": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
  ],
  "Local SEO": [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&auto=format&fit=crop&q=80",
  ],
  "SEO Strategy": [
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
  ],
  "Content": [
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&auto=format&fit=crop&q=80",
  ],
  "Analytics": [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&auto=format&fit=crop&q=80",
  ],
  "Link Building": [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80",
  ],
  "Ecommerce SEO": [
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80",
  ],
};

function imgFor(category: string, slug: string): string {
  const pool = IMG_POOL[category] ?? IMG_POOL["SEO Strategy"];
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = ((hash * 31) + slug.charCodeAt(i)) & 0xfffffff;
  return pool[hash % pool.length];
}

function specToPost(spec: Spec, index: number): GenBlogPost {
  const { date, iso, updated } = dateFor(index);
  const sections = [...spec.sections, CTA_SECTION];
  const base = { intro: spec.hook, sections, takeaway: spec.takeaway };
  return {
    slug: spec.slug,
    category: spec.category,
    title: spec.title,
    excerpt: spec.excerpt,
    date,
    iso,
    updated,
    time: readingTime(base),
    intro: spec.hook,
    sections,
    takeaway: spec.takeaway,
    imageUrl: imgFor(spec.category, spec.slug),
  };
}

// De-duplicate slugs defensively, then build.
const seen = new Set<string>();
export const generatedBlogPosts: GenBlogPost[] = specs
  .filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  })
  .map((s, i) => specToPost(s, i));

export const generatedBlogMeta: Record<string, { title: string; desc: string }> = Object.fromEntries(
  generatedBlogPosts.map((p) => [p.slug, { title: `${p.title} | SEODXB Blog`, desc: p.excerpt }]),
);
