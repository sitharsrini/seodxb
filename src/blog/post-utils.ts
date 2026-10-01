import type { Post } from "./types";

const strip = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

// Plain-text version of a post, used for word counts, RSS and llms-full.txt.
export function postText(post: Post): string {
  const parts: string[] = [post.answer];
  for (const b of post.body) {
    if (b.t === "h2" || b.t === "h3") parts.push(`\n## ${b.text}\n`);
    else if (b.t === "p") parts.push(strip(b.text));
    else if (b.t === "callout") parts.push(`${b.title}: ${strip(b.text)}`);
    else parts.push(b.items.map((it, i) => (b.t === "ol" ? `${i + 1}. ` : "- ") + strip(it)).join("\n"));
  }
  parts.push("\n## Frequently asked questions\n");
  for (const f of post.faqs) parts.push(`Q: ${f.q}\nA: ${f.a}`);
  return parts.join("\n\n");
}

export function wordCount(post: Post): number {
  return postText(post).split(/\s+/).filter(Boolean).length;
}

// The browser only has the post index for most posts, which carries a precomputed "minutes".
export function readingMinutes(post: Post & { minutes?: number }): number {
  return post.minutes ?? Math.max(3, Math.round(wordCount(post) / 220));
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export const postPath = (p: Post) => `/blog/${p.slug}`;
