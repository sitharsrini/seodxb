import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { POSTS, postPath } from "./blog/posts";

const PAGES: Record<string, () => React.JSX.Element> = {
  "/": Home,
  "/services": Services,
  "/results": Results,
  "/about": About,
  "/contact": Contact,
  "/blog": Blog,
};

export default function App({ path }: { path: string }) {
  const post = POSTS.find((p) => postPath(p) === path);
  const Page = PAGES[path] ?? Home;
  return <Layout path={path}>{post ? <BlogPost post={post} /> : <Page />}</Layout>;
}
