export const SITE_URL = "https://seodxb.com";

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
}

export const ROUTES: Route[] = [
  {
    path: "/",
    file: "index.html",
    title: "SEODXB | Marketing Consultancy in Dubai",
    description:
      "Dubai marketing consultancy for strategy, SEO and AI search, performance ads, websites, content and social. Plans built around revenue, not vanity metrics.",
  },
  {
    path: "/services",
    file: "services.html",
    title: "Marketing Services | SEODXB Dubai",
    description:
      "Marketing strategy, SEO, AEO and GEO, Google and Meta ads, websites, content and social media management for growing businesses in the UAE.",
  },
  {
    path: "/results",
    file: "results.html",
    title: "How We Deliver Results | SEODXB",
    description:
      "How SEODXB plans, runs and measures marketing work: clear KPIs per channel, monthly reporting and decisions tied to leads and revenue.",
  },
  {
    path: "/about",
    file: "about.html",
    title: "About SEODXB | Dubai Marketing Consultancy",
    description:
      "SEODXB is a Dubai marketing consultancy, powered by Listi, helping UAE businesses turn search, ads and content into a steady flow of enquiries.",
  },
  {
    path: "/contact",
    file: "contact.html",
    title: "Contact SEODXB | Book a Marketing Consultation",
    description:
      "Tell us about your business and goals. We reply within one working day with a clear next step. Call, WhatsApp or send an enquiry.",
  },
];

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export function normalizePath(pathname: string): string {
  const p = pathname.replace(/\.html$/, "").replace(/\/index$/, "/").replace(/\/+$/, "");
  return p === "" ? "/" : p;
}
