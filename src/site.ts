// Site-wide constants shared by the browser and the build. Routes and structured
// data live in ./routes (build only), so they stay out of the browser bundle.
export const SITE_URL = "https://seodxb.com";

// Date the core pages (home, services, about, contact, results) last changed in a meaningful way.
// Used as their sitemap lastmod, so update it when those pages are edited.
export const PAGES_UPDATED = "2026-10-01";

// Stable IDs that connect the structured data on every page into one graph.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const AUTHOR_ID = `${SITE_URL}/about#author`;

// sameAs: add the author's Listonics profile and LinkedIn URLs so search engines can link the same person across sites.
export const AUTHOR: { name: string; url: string; sameAs: string[] } = {
  name: "Srinivasan Ramachandran",
  url: `${SITE_URL}/about#author`,
  sameAs: [],
};

export const CONTACT = {
  email: "hi@Listi.ae",
  phone: "+971 52 155 1198",
  phoneHref: "tel:+971521551198",
  whatsapp: "https://wa.me/971521551198",
  linkedin: "https://www.linkedin.com/company/soegeodubai/",
  city: "Dubai, United Arab Emirates",
};

export const LISTI_URL = "https://listi.ae";

export interface Route {
  path: string;
  file: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  image?: string;
  jsonLd?: object[];
  // Private pages: noindex, and left out of the sitemap and llms.txt.
  hidden?: boolean;
}

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function normalizePath(pathname: string): string {
  const p = pathname.replace(/\.html$/, "").replace(/\/index$/, "/").replace(/\/+$/, "");
  return p === "" ? "/" : p;
}
