import { KEYWORD_SLUGS } from "./keywordSlugs.ts";

const KEEP = new Set([
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/seo-audit",
  "/free-seo-audit",
  "/on-page-seo",
  "/technical-seo",
  "/local-seo",
  "/aeo",
  "/geo",
  "/international-seo",
  "/seo-dubai",
  "/seo-abu-dhabi",
  "/seo-uae",
  "/real-estate-seo",
  "/seo-for-healthcare",
  "/seo-for-restaurants",
  "/ecommerce-seo",
  "/seo-for-law-firms",
  "/b2b-seo",
  "/seo-services",
  "/website-20-aed",
  "/icp-finder",
  "/seo-optimizer",
  "/blog",
  "/privacy",
  "/terms",
  "/blog/the-honest-guide-to-seo-timelines-in-dubai",
  "/blog/core-web-vitals-matter",
  "/blog/local-search-dubai",
  "/blog/future-of-search-generative-ai-dubai",
  "/blog/answer-engines-position-zero",
  "/blog/semantic-seo-entities-keywords",
  "/blog/tracking-seo-metrics-revenue",
  "/blog/what-chatgpt-sees-when-it-looks-for-your-dubai-business",
  "/blog/two-dubai-businesses-one-invisible-online",
]);

const EXACT: Record<string, string> = {
  "/seo-company-dubai": "/seo-agency-dubai",
  "/best-seo-agency-dubai": "/seo-agency-dubai",
  "/seo-packages": "/pricing",
  "/thank-you": "/contact",
  "/sitemap-index.xml": "/sitemap.xml",
  "/sitemap-0.xml": "/sitemap.xml",
};

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function isKept(pathname: string): boolean {
  const path = normalizePath(pathname);
  if (KEEP.has(path)) return true;
  // Every /blog/:slug is a real article (prerendered). Do not 301 the archive.
  if (path === "/blog" || path.startsWith("/blog/")) return true;
  const slug = path.replace(/^\//, "");
  return KEYWORD_SLUGS.has(slug);
}

export function shouldRedirect(pathname: string): boolean {
  const path = normalizePath(pathname).toLowerCase();
  if (isKept(path)) return false;
  if (EXACT[path]) return true;
  return /seo|website-|social-|digital-|global-|local-|technical|on-page|ecommerce|arabic|\/aeo|\/geo|shopify|wordpress|llms|schema|chatgpt|audit|packages|agency|consultant|hreflang|multilingual|link-building|content-marketing|keyword|organic|featured|voice-search|mobile-seo|programmatic|headless|jamstack|landing-page|instagram|linkedin|facebook|affordable|white-label|best-seo|hire-seo|icp-finder|free-seo|b2b-seo|real-estate|healthcare|restaurant|law-firm/.test(
    path,
  );
}

export function mapRedirect(pathname: string): string {
  const path = normalizePath(pathname).toLowerCase();
  if (isKept(path)) return path;
  if (EXACT[path]) return EXACT[path];

  if (path.startsWith("/blog/")) {
    if (
      path.includes("cited") ||
      path.includes("chatgpt") ||
      path.includes("perplexity") ||
      path.includes("gemini") ||
      path.includes("claude") ||
      path.includes("copilot") ||
      path.includes("grok") ||
      path.includes("meta-ai") ||
      path.includes("ai-overview")
    ) {
      return "/blog/what-chatgpt-sees-when-it-looks-for-your-dubai-business";
    }
    if (path.includes("geo") || path.includes("generative")) {
      return "/blog/what-is-generative-engine-optimization-geo";
    }
    if (path.includes("aeo") || path.includes("answer-engine") || path.includes("snippet")) {
      return "/blog/what-is-answer-engine-optimization-aeo";
    }
    if (path.includes("core-web") || path.includes("vitals") || path.includes("speed")) {
      return "/blog/core-web-vitals-matter";
    }
    if (path.includes("local") || path.includes("map")) return "/blog/local-search-dubai";
    if (path.includes("llms")) return "/blog/llms-txt-file-explained";
    if (path.includes("schema")) return "/blog/schema-markup-for-ai-search";
    if (path.includes("timeline") || path.includes("how-long")) {
      return "/blog/the-honest-guide-to-seo-timelines-in-dubai";
    }
    return "/blog";
  }

  if (path.includes("real-estate") || path.includes("property")) return "/real-estate-seo";
  if (
    path.includes("health") ||
    path.includes("clinic") ||
    path.includes("dental") ||
    path.includes("medical") ||
    path.includes("hospital") ||
    path.includes("pharma")
  ) {
    return "/seo-for-healthcare";
  }
  if (
    path.includes("restaurant") ||
    path.includes("hotel") ||
    path.includes("hospitality") ||
    path.includes("catering") ||
    path.includes("food")
  ) {
    return "/seo-for-restaurants";
  }
  if (path.includes("law") || path.includes("legal")) return "/seo-for-law-firms";
  if (
    path.includes("ecommerce") ||
    path.includes("e-commerce") ||
    path.includes("shopify") ||
    path.includes("woocommerce")
  ) {
    return "/ecommerce-seo";
  }
  if (path.includes("abu-dhabi") || path.includes("abudhabi")) return "/seo-abu-dhabi";
  if (path.includes("local-seo")) return "/local-seo";
  if (path.includes("technical-seo") || path.includes("javascript-seo")) return "/technical-seo";
  if (path.includes("on-page") || path.includes("onpage")) return "/on-page-seo";
  if (path.includes("/aeo") || path.endsWith("-aeo") || path.includes("answer-engine")) return "/aeo";
  if (path.includes("/geo") || path.includes("generative") || path.includes("chatgpt-seo") || path.includes("ai-search") || path.includes("ai-overview")) {
    return "/geo";
  }
  if (path.includes("international") || path.includes("hreflang") || path.includes("multilingual") || path.includes("arabic-seo")) {
    return "/international-seo";
  }
  if (path.includes("pricing") || path.includes("packages") || path.includes("how-much")) return "/contact";
  if (path.includes("audit")) return "/seo-audit";
  if (path.includes("contact")) return "/contact";
  if (path.includes("about")) return "/about";
  if (
    path.includes("dubai") ||
    path.includes("uae") ||
    path.includes("sharjah") ||
    path.includes("ajman") ||
    path.includes("seo-agency") ||
    path.startsWith("/seo-")
  ) {
    if (
      path.includes("uae") ||
      path.includes("sharjah") ||
      path.includes("ajman") ||
      path.includes("ras-al") ||
      path.includes("fujairah") ||
      path.includes("al-ain")
    ) {
      return "/seo-uae";
    }
    return "/seo-dubai";
  }

  return "/";
}
