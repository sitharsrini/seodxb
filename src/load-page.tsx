import type { ReactNode } from "react";
import { matchRoute } from "./route-match";

async function home(): Promise<ReactNode> {
  const { default: Home } = await import("./pages/Home");
  return <Home />;
}

// Client-only. Each branch is its own chunk so a page does not download the others.
export async function loadPage(path: string): Promise<ReactNode> {
  const match = matchRoute(path);
  switch (match.kind) {
    case "home":
      return home();
    case "services": {
      const { default: Services } = await import("./pages/Services");
      return <Services />;
    }
    case "results": {
      const { default: Results } = await import("./pages/Results");
      return <Results />;
    }
    case "about": {
      const { default: About } = await import("./pages/About");
      return <About />;
    }
    case "contact": {
      const { default: Contact } = await import("./pages/Contact");
      return <Contact />;
    }
    case "blog": {
      const { default: Blog } = await import("./pages/Blog");
      return <Blog />;
    }
    case "admin": {
      const { default: Admin } = await import("./pages/Admin");
      return <Admin />;
    }
    case "industries": {
      const { default: Industries } = await import("./pages/Industries");
      return <Industries />;
    }
    case "post": {
      const [{ default: BlogPost }, posts] = await Promise.all([import("./pages/BlogPost"), import("./blog/posts")]);
      const post = posts.POSTS.find((p) => posts.postPath(p) === path);
      if (!post) return home();
      return <BlogPost post={post} />;
    }
    case "industry": {
      const [{ default: Industry }, data] = await Promise.all([import("./pages/Industry"), import("./industries")]);
      const industry = data.INDUSTRIES.find((i) => data.industryPath(i) === path);
      if (!industry) return home();
      return <Industry industry={industry} />;
    }
    case "service": {
      const [{ default: ServiceDetail }, data] = await Promise.all([import("./pages/ServiceDetail"), import("./service-pages")]);
      const page = data.SERVICE_PAGES.find((s) => data.servicePath(s) === path);
      if (!page) return home();
      return <ServiceDetail page={page} />;
    }
  }
}
