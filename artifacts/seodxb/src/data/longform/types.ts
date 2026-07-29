// ============================================================================
// Long-form article system. Each article is a researched, ~2000-word piece with
// a hero image, key-stats callout, deep sections (some with inline images),
// a YouTube embed, FAQs (drive FAQPage schema), and real external references.
// Writer: Srinivasan R. No em dashes. No double hyphens as dashes.
// ============================================================================

export interface ArticleRef {
  title: string;
  url: string;
  publisher: string;
}

export interface ArticleImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ArticleSection {
  h: string;
  p: string[];
  list?: string[];
  image?: ArticleImage;
}

export interface ArticleFAQ {
  q: string;
  a: string;
}

// Recommended providers rendered as a dofollow-linked block (real backlinks,
// unlike the nofollow reference citations).
export interface PartnerLink {
  name: string;
  url: string;
  role: string;
  blurb: string;
}

// What the writing agents produce (no dates / reading time; the index assigns
// those so they stay unique and accurate across the whole set).
export interface LongFormSpec {
  slug: string;
  category: string;
  title: string;
  excerpt: string; // meta description, 100-128 chars
  heroImage: string;
  heroAlt: string;
  intro: string[];
  keyStats: string[];
  sections: ArticleSection[];
  takeaway: string;
  faqs: ArticleFAQ[];
  references: ArticleRef[];
  partners?: PartnerLink[];
  youtubeId?: string;
  youtubeTitle?: string;
}

// Fully-built article with dates and reading time resolved.
export interface LongFormArticle extends LongFormSpec {
  date: string;
  iso: string;
  updated: string;
  time: string;
}
