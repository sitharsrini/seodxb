import { renderToString } from "react-dom/server";
import App from "./App";

export { ROUTES, SITE_URL, AUTHOR, CONTACT } from "./site";
export { POSTS, postPath, postText } from "./blog/posts";
export { SERVICES } from "./services";

export function render(path: string): string {
  return renderToString(<App path={path} />);
}
