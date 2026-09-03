/** Keyword-aware hero images for blog articles and landing pages. */

const LOCAL: Record<string, string> = {
  dubai: "/images/topics/dubai.jpg",
  ai: "/images/topics/ai.jpg",
  local: "/images/topics/local.jpg",
  "real-estate": "/images/topics/real-estate.jpg",
  healthcare: "/images/topics/healthcare.jpg",
  hospitality: "/images/topics/hospitality.jpg",
  technical: "/images/topics/technical.jpg",
  ecommerce: "/images/topics/ecommerce.jpg",
  law: "/images/topics/law.jpg",
  finance: "/images/topics/finance.jpg",
  content: "/images/topics/content.jpg",
  analytics: "/images/topics/analytics.jpg",
  international: "/images/topics/international.jpg",
  construction: "/images/topics/construction.jpg",
  automotive: "/images/topics/automotive.jpg",
  education: "/images/topics/education.jpg",
};

const STOCK: Record<string, string[]> = {
  dubai: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  ai: [
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  local: [
    "https://images.unsplash.com/photo-1526778548328-8c4c5ecb1e6e?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  "real-estate": [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  healthcare: [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  hospitality: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  technical: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  ecommerce: [
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  law: [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  finance: [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  content: [
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  analytics: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  international: [
    "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  construction: [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  automotive: [
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
  education: [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=675&fit=crop&q=80&auto=format",
  ],
};

const RULES: [RegExp, string][] = [
  [/real-estate|property|villa|apartment|broker|realtor/, "real-estate"],
  [/health|clinic|dental|hospital|pharma|physio|medical|doctor/, "healthcare"],
  [/restaurant|hotel|hospitality|food|catering|cafe|dining/, "hospitality"],
  [/law-firm|legal|attorney|solicitor|lawyer/, "law"],
  [/ecommerce|e-commerce|shopify|woocommerce|online-store/, "ecommerce"],
  [/chatgpt|generative|perplexity|gemini|llm|ai-search|ai-overview|geo\b|answer-engine|\baeo\b|snippet|position-zero/, "ai"],
  [/technical|core-web|vitals|javascript-seo|page-speed|cwv|schema|crawl|indexability/, "technical"],
  [/local-seo|google-business|gbp|map-pack|near-me|citations/, "local"],
  [/analytics|tracking|metrics|ga4|revenue/, "analytics"],
  [/content|copywriting|writing|semantic|entity/, "content"],
  [/international|hreflang|multilingual|arabic-seo/, "international"],
  [/construction|contractor|architect/, "construction"],
  [/auto|car-dealer|vehicle/, "automotive"],
  [/educat|school|university|training/, "education"],
  [/financ|bank|insurance|invest|difc|accounting/, "finance"],
  [/dubai|marina|downtown|jumeirah|business-bay|abu-dhabi|sharjah|uae/, "dubai"],
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function topicFor(text: string): string {
  const hay = text.toLowerCase();
  for (const [re, topic] of RULES) {
    if (re.test(hay)) return topic;
  }
  return "dubai";
}

export function imageForPage(opts: {
  slug: string;
  category?: string;
  keyword?: string;
  title?: string;
}): { src: string; alt: string; topic: string } {
  const hay = [opts.slug, opts.category, opts.keyword, opts.title].filter(Boolean).join(" ");
  const topic = topicFor(hay);
  const local = LOCAL[topic] || LOCAL.dubai;
  const stock = STOCK[topic] || STOCK.dubai;
  const h = hash(opts.slug);
  const src = h % 5 < 2 ? local : stock[h % stock.length];
  const label = opts.keyword || opts.title || opts.slug.replace(/-/g, " ");
  return { src, topic, alt: `${label} — ${topic.replace(/-/g, " ")} in Dubai` };
}

export function absoluteImage(src: string): string {
  if (src.startsWith("http")) return src;
  return `https://seodxb.com${src}`;
}
