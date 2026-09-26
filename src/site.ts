import { POSTS, postPath, wordCount } from "./blog/posts";
import { INDUSTRIES, industryPath } from "./industries";
import { SERVICE_PAGES, servicePath } from "./service-pages";
import { CORE_FAQS } from "./core-faqs";

export const SITE_URL = "https://seodxb.com";

// sameAs: add the author's Listonics profile and LinkedIn URLs so search engines can link the same person across sites.
export const AUTHOR: { name: string; url: string; sameAs: string[] } = {
  name: "Srinivasan Ramachandran",
  url: `${SITE_URL}/about#author`,
  sameAs: [],
};

const authorLd = () => ({
  "@type": "Person",
  name: AUTHOR.name,
  url: AUTHOR.url,
  ...(AUTHOR.sameAs.length ? { sameAs: AUTHOR.sameAs } : {}),
});

const ORG = { "@type": "Organization", name: "SEODXB", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-192.png` } };

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

const breadcrumbs = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: SITE_URL + it.path })),
});

const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

const PAGE_ROUTES: Route[] = [
  {
    path: "/",
    file: "index.html",
    title: "Marketing Consultancy & SEO Agency in Dubai | SEODXB",
    description:
      "Dubai marketing consultancy for strategy, SEO and AI search, performance ads, websites, content and social. Plans built around revenue, not vanity metrics.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "SEODXB",
        url: SITE_URL,
        inLanguage: "en",
        publisher: ORG,
      },
      faqLd(CORE_FAQS["/"]),
    ],
  },
  {
    path: "/services",
    file: "services.html",
    title: "Marketing & SEO Services in Dubai | SEODXB",
    description:
      "Marketing strategy, SEO, AEO and GEO, Google and Meta ads, websites, content and social media management for growing businesses in the UAE.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "SEODXB services",
        itemListElement: SERVICE_PAGES.map((sp, i) => ({ "@type": "ListItem", position: i + 1, name: sp.title.replace(/ \| SEODXB$/, ""), url: SITE_URL + servicePath(sp) })),
      },
      faqLd(CORE_FAQS["/services"]),
      breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
    ],
  },
  {
    path: "/results",
    file: "results.html",
    title: "How We Deliver Results | SEODXB",
    description:
      "How SEODXB plans, runs and measures marketing work: clear KPIs per channel, monthly reporting and decisions tied to leads and revenue.",
    jsonLd: [faqLd(CORE_FAQS["/results"])],
  },
  {
    path: "/about",
    file: "about.html",
    title: "About SEODXB | Dubai Marketing Consultancy",
    description:
      "SEODXB is a Dubai marketing consultancy, powered by Listi, helping UAE businesses turn search, ads and content into a steady flow of enquiries.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        url: `${SITE_URL}/about`,
        mainEntity: ORG,
      },
      {
        "@context": "https://schema.org",
        ...authorLd(),
        worksFor: ORG,
        knowsAbout: ["Marketing strategy", "Search engine optimization", "Generative engine optimization", "Performance advertising"],
      },
      faqLd(CORE_FAQS["/about"]),
    ],
  },
  {
    path: "/contact",
    file: "contact.html",
    title: "Contact SEODXB | Book a Marketing Consultation",
    description:
      "Tell us about your business and goals. We reply within one working day with a clear next step. Call, WhatsApp or send an enquiry.",
    jsonLd: [
      { "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE_URL}/contact` },
      faqLd(CORE_FAQS["/contact"]),
    ],
  },
];

const BLOG_ROUTES: Route[] = [
  {
    path: "/blog",
    file: "blog.html",
    title: "Marketing Insights Blog | SEODXB Dubai",
    description:
      "Practical guides on marketing strategy, SEO and AI search, performance ads and lead tracking for businesses in Dubai and the UAE.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "SEODXB Blog",
        url: `${SITE_URL}/blog`,
        description: "Practical guides on marketing strategy, SEO and AI search, performance ads and lead tracking for businesses in Dubai and the UAE.",
        inLanguage: "en",
        publisher: ORG,
        blogPost: POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: SITE_URL + postPath(p),
          datePublished: p.date,
          author: authorLd(),
        })),
      },
      breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]),
    ],
  },
  ...POSTS.map((p): Route => ({
    path: postPath(p),
    file: `blog/${p.slug}.html`,
    title: `${p.seoTitle ?? p.title} | SEODXB`,
    description: p.description,
    ogType: "article",
    image: `/og/${p.slug}.jpg`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
        abstract: p.answer,
        image: `${SITE_URL}/og/${p.slug}.jpg`,
        datePublished: p.date,
        dateModified: p.updated,
        inLanguage: "en",
        wordCount: wordCount(p),
        keywords: p.keywords.join(", "),
        articleSection: p.category,
        mainEntityOfPage: { "@type": "WebPage", "@id": SITE_URL + postPath(p) },
        isPartOf: { "@type": "Blog", name: "SEODXB Blog", url: `${SITE_URL}/blog` },
        author: { ...authorLd(), worksFor: ORG },
        publisher: ORG,
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#short-answer", "h1"] },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: p.title, path: postPath(p) },
      ]),
    ],
  })),
];

const INDUSTRY_ROUTES: Route[] = [
  {
    path: "/industries",
    file: "industries.html",
    title: "Industries We Serve | SEODXB Marketing Consultancy Dubai",
    description:
      "SEO, AI search, ads and websites for 34 UAE industries: healthcare, home services, professional services, education, property, tourism and more.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Industries served by SEODXB",
        itemListElement: INDUSTRIES.map((ind, i) => ({ "@type": "ListItem", position: i + 1, name: ind.name, url: SITE_URL + industryPath(ind) })),
      },
      breadcrumbs([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]),
    ],
  },
  ...INDUSTRIES.map((ind): Route => ({
    path: industryPath(ind),
    file: `industries/${ind.slug}.html`,
    title: ind.title,
    description: ind.description,
    image: `/og/industry-${ind.slug}.jpg`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Marketing and SEO for ${ind.name} businesses`,
        serviceType: ["Search engine optimization", "Generative engine optimization", "Performance advertising", "Website design", "Marketing strategy"],
        description: ind.answer,
        audience: { "@type": "BusinessAudience", name: `${ind.name} businesses` },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
        provider: { ...ORG, "@type": "ProfessionalService", telephone: "+971521551198", address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" } },
        url: SITE_URL + industryPath(ind),
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ind.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: ind.name, path: industryPath(ind) },
      ]),
    ],
  })),
];

const ADMIN_ROUTE: Route = {
  path: "/admin",
  file: "admin.html",
  title: "Admin | SEODXB",
  description: "SEODXB leads dashboard.",
  hidden: true,
};

const SERVICE_ROUTES: Route[] = SERVICE_PAGES.map((sp) => ({
  path: servicePath(sp),
  file: `services/${sp.slug}.html`,
  title: sp.title,
  description: sp.description,
  image: `/og/service-${sp.slug}.jpg`,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: sp.title.replace(/ \| SEODXB$/, ""),
      description: sp.answer,
      serviceType: sp.title.replace(/ \| SEODXB$/, ""),
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
      provider: { ...ORG, "@type": "ProfessionalService", telephone: "+971521551198", address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" } },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "What is included",
        itemListElement: sp.deliverables.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d.title, description: d.body } })),
      },
      url: SITE_URL + servicePath(sp),
    },
    faqLd(sp.faqs),
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: sp.title.replace(/ \| SEODXB$/, ""), path: servicePath(sp) },
    ]),
  ],
}));

// Keep the brand suffix only when the full title still fits in search results.
const fitTitle = (t: string) => (t.length > 60 && t.endsWith(" | SEODXB") ? t.slice(0, -" | SEODXB".length) : t);

export const ROUTES: Route[] = [...PAGE_ROUTES, ...SERVICE_ROUTES, ...INDUSTRY_ROUTES, ...BLOG_ROUTES, ADMIN_ROUTE].map((r) => ({
  ...r,
  title: fitTitle(r.title),
}));

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
