import React from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink, Copy, Check } from "lucide-react";
import { keywordPages } from "@/data/keywordPages";
import { generatedBlogPosts } from "@/data/blogPosts";
import { generatedBlogPosts2 } from "@/data/blogPosts2";
import { clampTitle } from "@/lib/title";

const SITE = "https://seodxb.com";

type Item = { title: string; path: string };

const staticPages: Item[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Pricing", path: "/pricing" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const servicePages: Item[] = [
  { title: "On-Page SEO", path: "/on-page-seo" },
  { title: "Technical SEO", path: "/technical-seo" },
  { title: "Answer Engine Optimisation (AEO)", path: "/aeo" },
  { title: "Generative Engine Optimisation (GEO)", path: "/geo" },
  { title: "Local SEO", path: "/local-seo" },
  { title: "International SEO", path: "/international-seo" },
  { title: "SEO Audit", path: "/seo-audit" },
  { title: "SEO Packages", path: "/seo-packages" },
];

const hubPages: Item[] = [
  { title: "SEO Dubai", path: "/seo-dubai" },
  { title: "SEO Abu Dhabi", path: "/seo-abu-dhabi" },
  { title: "SEO UAE", path: "/seo-uae" },
];

const industryPages: Item[] = [
  { title: "Ecommerce SEO", path: "/ecommerce-seo" },
  { title: "Real Estate SEO", path: "/real-estate-seo" },
  { title: "B2B SEO", path: "/b2b-seo" },
  { title: "Hospitality / Restaurants SEO", path: "/seo-for-restaurants" },
  { title: "Healthcare SEO", path: "/seo-for-healthcare" },
  { title: "Legal / Law Firms SEO", path: "/seo-for-law-firms" },
];

const inlineBlogPosts: Item[] = [
  { title: "The Future of Search: Preparing for Generative AI in Dubai", path: "/blog/future-of-search-generative-ai-dubai" },
  { title: "Why Core Web Vitals Matter More Than Ever", path: "/blog/core-web-vitals-matter" },
  { title: "Optimizing for Answer Engines: Position Zero Explained", path: "/blog/answer-engines-position-zero" },
  { title: "Dominating Local Search in Dubai: A Practical Guide", path: "/blog/local-search-dubai" },
  { title: "Semantic SEO: Writing for Entities, Not Just Keywords", path: "/blog/semantic-seo-entities-keywords" },
  { title: "Tracking What Matters: Metrics That Actually Drive Revenue", path: "/blog/tracking-seo-metrics-revenue" },
];

const inlineSlugs = new Set(inlineBlogPosts.map((p) => p.path));
const allGenerated = [...generatedBlogPosts, ...generatedBlogPosts2];
const seenSlugs = new Set<string>();
const generatedItems: Item[] = allGenerated
  .filter((p) => {
    if (seenSlugs.has(p.slug)) return false;
    seenSlugs.add(p.slug);
    return true;
  })
  .filter((p) => !inlineSlugs.has(`/blog/${p.slug}`))
  .map((p) => ({ title: p.title, path: `/blog/${p.slug}` }));

const blogPosts: Item[] = [...inlineBlogPosts, ...generatedItems];

// Group the 200 keyword landing pages by region for easier scanning.
function regionOf(slug: string): string {
  if (slug.includes("abu-dhabi")) return "Abu Dhabi";
  if (slug.includes("sharjah")) return "Sharjah";
  if (/ajman|ras-al-khaimah|fujairah|umm-al-quwain|al-ain/.test(slug)) return "Other Emirates";
  if (slug.includes("uae")) return "UAE-Wide";
  if (slug.includes("dubai")) return "Dubai";
  return "General / Service";
}

const REGION_ORDER = ["Dubai", "Abu Dhabi", "Sharjah", "Other Emirates", "UAE-Wide", "General / Service"];

const keywordItems: Item[] = Object.values(keywordPages)
  .map((p) => ({ title: p.keyword, path: `/${p.slug}` }))
  .sort((a, b) => a.title.localeCompare(b.title));

const keywordGroups: { region: string; items: Item[] }[] = REGION_ORDER.map((region) => ({
  region,
  items: keywordItems.filter((i) => regionOf(i.path.slice(1)) === region),
})).filter((g) => g.items.length > 0);

function Row({ item }: { item: Item }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-gray-100 py-2.5">
      <a href={item.path} className="font-medium text-sm text-gray-800 hover:text-primary truncate">
        {item.title}
      </a>
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary shrink-0"
      >
        <span className="font-mono">{item.path}</span>
        <ExternalLink size={12} />
      </a>
    </li>
  );
}

export function Admin() {
  const [query, setQuery] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const q = query.trim().toLowerCase();
  const match = (i: Item) => !q || i.title.toLowerCase().includes(q) || i.path.toLowerCase().includes(q);

  const allItems: Item[] = [
    ...staticPages, ...servicePages, ...hubPages, ...industryPages, ...keywordItems, ...blogPosts,
  ];
  const total = allItems.length;

  const copyAll = async () => {
    const urls = allItems.map((i) => `${SITE}${i.path === "/" ? "" : i.path}`).join("\n");
    try {
      await navigator.clipboard.writeText(urls);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const Section = ({ title, items }: { title: string; items: Item[] }) => {
    const filtered = items.filter(match);
    if (filtered.length === 0) return null;
    return (
      <div className="mb-10">
        <h2 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          {title}
          <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-0.5">{filtered.length}</span>
        </h2>
        <ul>
          {filtered.map((i) => <Row key={i.path} item={i} />)}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("All Pages &amp; Blogs | SEODXB Admin")}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pt-28 pb-24 min-h-screen bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
            <h1 className="text-3xl font-black tracking-tight">Site Index</h1>
            <Button onClick={copyAll} variant="outline" className="rounded-full gap-2">
              {copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy all URLs</>}
            </Button>
          </div>
          <p className="text-gray-500 mb-6 text-sm">
            {total} pages total. Click a title to open in-app, or the URL to open in a new tab.
          </p>

          <div className="relative mb-10 sticky top-20 z-10">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages and blogs..."
              className="pl-11 py-5 rounded-full border-gray-200 shadow-sm bg-white"
            />
          </div>

          <Section title="Core Pages" items={staticPages} />
          <Section title="Service Pages" items={servicePages} />
          <Section title="Location Hubs" items={hubPages} />
          <Section title="Industry Pages" items={industryPages} />
          <Section title="Blog Posts" items={blogPosts} />

          <div className="mt-12 mb-4">
            <h2 className="text-xl font-black text-black">SEO Landing Pages ({keywordItems.length})</h2>
            <p className="text-gray-500 text-sm">Grouped by region.</p>
          </div>
          {keywordGroups.map((g) => (
            <Section key={g.region} title={g.region} items={g.items} />
          ))}
        </div>
      </div>
    </>
  );
}
