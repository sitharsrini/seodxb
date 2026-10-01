import { renderToString } from "react-dom/server";
import App from "./App";

export { SITE_URL, AUTHOR, CONTACT } from "./site";
export { ROUTES } from "./routes";
export { POSTS, postPath, postText } from "./blog/posts";
export { SERVICES } from "./services";
export { INDUSTRIES, industryPath } from "./industries";
export { SERVICE_PAGES } from "./service-pages";
export { KEYWORD_TARGETS, KEYWORD_METRICS, SEMRUSH_SNAPSHOT } from "./seo-data";
export { INDUSTRY_REVIEWED } from "./sources";
export { INDUSTRY_PHOTOS, POST_PHOTOS, photoUrl } from "./images";
export { PAGES_UPDATED } from "./site";

export function render(path: string): string {
  return renderToString(<App path={path} />);
}
