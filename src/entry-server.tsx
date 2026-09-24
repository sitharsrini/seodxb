import { renderToString } from "react-dom/server";
import App from "./App";

export { ROUTES, SITE_URL, AUTHOR, CONTACT } from "./site";
export { POSTS, postPath, postText } from "./blog/posts";
export { SERVICES } from "./services";
export { INDUSTRIES, industryPath } from "./industries";
export { SERVICE_PAGES } from "./service-pages";
export { KEYWORD_TARGETS, KEYWORD_METRICS, SEMRUSH_SNAPSHOT } from "./seo-data";

export function render(path: string): string {
  return renderToString(<App path={path} />);
}
