import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import Industries from "./pages/Industries";
import Industry from "./pages/Industry";
import { INDUSTRIES, industryPath } from "./industries";
import { POSTS, postPath } from "./blog/posts";
import ServiceDetail from "./pages/ServiceDetail";
import { SERVICE_PAGES, servicePath } from "./service-pages";

const PAGES: Record<string, () => React.JSX.Element> = {
  "/": Home,
  "/services": Services,
  "/results": Results,
  "/about": About,
  "/contact": Contact,
  "/blog": Blog,
  "/admin": Admin,
  "/industries": Industries,
};

export default function App({ path }: { path: string }) {
  const post = POSTS.find((p) => postPath(p) === path);
  const industry = INDUSTRIES.find((i) => industryPath(i) === path);
  const service = SERVICE_PAGES.find((s) => servicePath(s) === path);
  const Page = PAGES[path] ?? Home;
  return (
    <Layout path={path}>
      {post ? <BlogPost post={post} /> : industry ? <Industry industry={industry} /> : service ? <ServiceDetail page={service} /> : <Page />}
    </Layout>
  );
}
