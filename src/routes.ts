// Build-only: every route with its title, description and structured data.
import { POSTS, postPath, wordCount } from "./blog/posts";
import { SITE_URL, AUTHOR, AUTHOR_ID, ORG_ID, WEBSITE_ID, type Route } from "./site";
import { INDUSTRIES, industryPath } from "./industries";
import { SERVICE_PAGES, servicePath } from "./service-pages";
import { CORE_FAQS } from "./core-faqs";
import { citationLd, industrySources, postSources } from "./citations";
import { INDUSTRY_REVIEWED } from "./sources";
import { INDUSTRY_PHOTOS, POST_PHOTOS, photoUrl, photographerUrl, type Photo } from "./images";

const photoLd = (ph: Photo) => ({
  "@type": "ImageObject",
  url: photoUrl(ph, 1200, 675),
  caption: ph.alt,
  creditText: `Photo by ${ph.by} on Unsplash`,
  creator: { "@type": "Person", name: ph.by, url: photographerUrl(ph) },
  license: "https://unsplash.com/license",
  acquireLicensePage: "https://unsplash.com/license",
});

const authorLd = () => ({
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: AUTHOR.name,
  url: AUTHOR.url,
  ...(AUTHOR.sameAs.length ? { sameAs: AUTHOR.sameAs } : {}),
});

// Full organisation details live in index.html (on every page) under the same @id.
const ORG = { "@type": "Organization", "@id": ORG_ID, name: "SEODXB", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 } };
const WEBSITE_REF = { "@type": "WebSite", "@id": WEBSITE_ID, name: "SEODXB", url: SITE_URL };


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
        "@id": WEBSITE_ID,
        name: "SEODXB",
        alternateName: "SEO DXB",
        url: SITE_URL,
        description: "Marketing consultancy in Dubai: strategy, SEO, AEO and GEO, performance advertising, websites, content and social media.",
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
        "@id": `${SITE_URL}/about`,
        url: `${SITE_URL}/about`,
        isPartOf: WEBSITE_REF,
        mainEntity: ORG,
      },
      {
        "@context": "https://schema.org",
        ...authorLd(),
        description: "Marketing consultant in Dubai working on SEO, AI search, advertising and lead tracking for UAE businesses, and author of the Listonics guides.",
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
      { "@context": "https://schema.org", "@type": "ContactPage", "@id": `${SITE_URL}/contact`, url: `${SITE_URL}/contact`, isPartOf: WEBSITE_REF, about: ORG },
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
        "@id": `${SITE_URL}/blog#blog`,
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
        "@id": `${SITE_URL}${postPath(p)}#article`,
        url: SITE_URL + postPath(p),
        headline: p.title,
        description: p.description,
        abstract: p.answer,
        image: POST_PHOTOS[p.slug] ? [`${SITE_URL}/og/${p.slug}.jpg`, photoLd(POST_PHOTOS[p.slug])] : `${SITE_URL}/og/${p.slug}.jpg`,
        datePublished: p.date,
        dateModified: p.updated,
        inLanguage: "en",
        wordCount: wordCount(p),
        keywords: p.keywords.join(", "),
        articleSection: p.category,
        mainEntityOfPage: { "@type": "WebPage", "@id": SITE_URL + postPath(p), isPartOf: WEBSITE_REF },
        isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog`, name: "SEODXB Blog", url: `${SITE_URL}/blog` },
        author: { ...authorLd(), worksFor: ORG },
        publisher: ORG,
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#short-answer", "h1"] },
        citation: citationLd(postSources(p.slug)),
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
      `SEO, AI search, ads and websites for ${INDUSTRIES.length} UAE industries: healthcare, home services, professional services, education, property, tourism and more.`,
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
        "@id": `${SITE_URL}${industryPath(ind)}#service`,
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
        "@type": "WebPage",
        "@id": SITE_URL + industryPath(ind),
        url: SITE_URL + industryPath(ind),
        name: ind.title,
        isPartOf: WEBSITE_REF,
        about: { "@id": `${SITE_URL}${industryPath(ind)}#service` },
        description: ind.description,
        inLanguage: "en",
        dateModified: INDUSTRY_REVIEWED,
        lastReviewed: INDUSTRY_REVIEWED,
        author: authorLd(),
        reviewedBy: authorLd(),
        publisher: ORG,
        citation: citationLd(industrySources(ind.slug)),
        ...(INDUSTRY_PHOTOS[ind.slug] ? { primaryImageOfPage: photoLd(INDUSTRY_PHOTOS[ind.slug]) } : {}),
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#short-answer", "h1"] },
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
      "@id": `${SITE_URL}${servicePath(sp)}#service`,
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

