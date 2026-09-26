// Inline text supports **bold** and [link text](/url).
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string; id: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "callout"; title: string; text: string };

export interface Post {
  slug: string;
  title: string;
  // Shorter title for the <title> tag when the headline is too long for search results.
  seoTitle?: string;
  description: string;
  category: string;
  date: string;
  updated: string;
  // One-paragraph direct answer to the title, shown first and marked speakable for AI answers.
  answer: string;
  keywords: string[];
  takeaways: string[];
  body: Block[];
  faqs: { q: string; a: string }[];
}
