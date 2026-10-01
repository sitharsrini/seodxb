export interface Industry {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroTitle: string;
  heroIntro: string;
  answer: string;
  searches: string[];
  challenges: { title: string; body: string }[];
  plan: { service: string; points: string[] }[];
  measure: string[];
  faqs: { q: string; a: string }[];
  postSlug: string;
  extraPostSlugs?: string[];
  // Landing page layout; "editorial" is the default, "classic" is the original.
  layout?: "classic" | "editorial";
}
