import type { ReactNode } from "react";
import { matchRoute } from "./route-match";
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
import ServiceDetail from "./pages/ServiceDetail";
import { POSTS, postPath } from "./blog/posts";
import { INDUSTRIES, industryPath } from "./industries";
import { SERVICE_PAGES, servicePath } from "./service-pages";

// Server render only. The browser loads the matching page through load-page.tsx.
export function renderPage(path: string): ReactNode {
  const match = matchRoute(path);
  switch (match.kind) {
    case "home":
      return <Home />;
    case "services":
      return <Services />;
    case "results":
      return <Results />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    case "blog":
      return <Blog />;
    case "admin":
      return <Admin />;
    case "industries":
      return <Industries />;
    case "post": {
      const post = POSTS.find((p) => postPath(p) === path);
      return post ? <BlogPost post={post} /> : <Home />;
    }
    case "industry": {
      const industry = INDUSTRIES.find((i) => industryPath(i) === path);
      return industry ? <Industry industry={industry} /> : <Home />;
    }
    case "service": {
      const page = SERVICE_PAGES.find((s) => servicePath(s) === path);
      return page ? <ServiceDetail page={page} /> : <Home />;
    }
  }
}
