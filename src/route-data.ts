import { loadPostData } from "./blog/posts.client";
import { loadIndustryData } from "./industries.client";

// Loads the full content of the current page before the app hydrates, so the
// browser renders exactly what the server prerendered.
export async function loadRouteData(path: string) {
  const post = path.match(/^\/blog\/([^/]+)$/);
  if (post) return loadPostData(post[1]);
  const industry = path.match(/^\/industries\/([^/]+)$/);
  if (industry) return loadIndustryData(industry[1]);
}
