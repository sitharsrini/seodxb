// Browser version of ./posts: a light index of every post, with the full content
// of the current post loaded on demand (see src/route-data.ts). The build swaps
// this file in for ./posts in the client bundle (vite.config.ts).
import type { Post } from "./types";
import meta from "../generated/posts-meta.json";

export type { Block, Post } from "./types";
export { postText, wordCount, readingMinutes, formatDate, postPath } from "./post-utils";

// Only the loaded post has body, answer, takeaways and faqs.
export const POSTS = meta as unknown as Post[];

const full = import.meta.glob<Post>("../generated/posts/*.json", { import: "default" });

export async function loadPostData(slug: string) {
  const target = POSTS.find((p) => p.slug === slug);
  const load = full[`../generated/posts/${slug}.json`];
  if (target && load) Object.assign(target, await load());
}
