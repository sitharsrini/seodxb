import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import type { KeywordPageConfig } from "@/data/keywordPages";
import { dubaiKeywordPages } from "@/data/keywordPages";
import { uaeKeywordPages } from "@/data/keywordPagesUAE";
import { gccKeywordPages } from "@/data/keywordPagesGCC";
import { usKeywordPages } from "@/data/keywordPagesUS";
import { ukKeywordPages } from "@/data/keywordPagesUK";
import { euKeywordPages } from "@/data/keywordPagesEU";
import { apacKeywordPages } from "@/data/keywordPagesAPAC";
import { globalKeywordPages } from "@/data/keywordPagesGlobal";
import { leadsKeywordPages } from "@/data/keywordPagesLeads";

const SITE = "https://seodxb.com";
const PAGE_URL = `${SITE}/seo-services`;

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": PAGE_URL,
      "name": "SEO Services Directory",
      "description":
        "Browse all SEODXB SEO services by location and industry. Dubai, UAE cities, GCC, US, UK, Europe, APAC and global coverage.",
      "url": PAGE_URL,
      "publisher": { "@type": "Organization", "name": "SEODXB", "url": SITE },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
        { "@type": "ListItem", "position": 2, "name": "SEO Services Directory", "item": PAGE_URL },
      ],
    },
  ],
});

function Section({ title, pages }: { title: string; pages: KeywordPageConfig[] }) {
  if (pages.length === 0) return null;
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
        {pages.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`} className="text-primary hover:underline text-sm leading-snug block">
              {p.keyword}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ServicesDirectory() {
  const dubaiPages = Object.values(dubaiKeywordPages);
  const uaePages = Object.values(uaeKeywordPages);
  const globalAndLeads = [...globalKeywordPages, ...leadsKeywordPages];

  return (
    <>
      <Helmet>
        <title>SEO Services Directory - All Locations and Industries | SEODXB</title>
        <meta
          name="description"
          content="Browse all SEODXB SEO services by location and industry. Dubai, UAE cities, GCC, US, UK, Europe, APAC and global coverage."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="SEO Services Directory | SEODXB" />
        <meta
          property="og:description"
          content="Browse all SEODXB SEO services by location and industry. Dubai, UAE cities, GCC, US, UK, Europe, APAC and global coverage."
        />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json">{schema}</script>
      </Helmet>

      <section className="pt-24 pb-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SEO Services Directory</h1>
          <p className="text-lg text-gray-600 mb-3 max-w-3xl">
            A complete index of every SEO, AEO, and GEO service SEODXB provides, organised by
            location and industry. If you need help finding the right page for your market, go to{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact
            </Link>{" "}
            or browse the{" "}
            <Link href="/blog" className="text-primary hover:underline">
              SEO blog
            </Link>{" "}
            for strategy guides.
          </p>
          <p className="text-sm text-gray-500 mb-2">
            All services include SEO, AEO (Answer Engine Optimisation), and GEO (Generative Engine
            Optimisation). No lock-in contracts.{" "}
            <Link href="/pricing" className="text-primary hover:underline">
              View pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-10">
        <Section title="Dubai SEO Services" pages={dubaiPages} />
        <Section title="UAE Cities, Emirates and Areas" pages={uaePages} />
        <Section title="Saudi Arabia and the Gulf (GCC)" pages={gccKeywordPages} />
        <Section title="United States" pages={usKeywordPages} />
        <Section title="United Kingdom" pages={ukKeywordPages} />
        <Section title="Europe" pages={euKeywordPages} />
        <Section title="Asia-Pacific" pages={apacKeywordPages} />
        <Section title="Global and Specialist Services" pages={globalAndLeads} />

        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-xl font-bold mb-2">Not sure where to start?</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Book a free 30-minute SEO consultation. We will review your site, identify your highest-value
            keyword opportunities, and recommend the right services for your market.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/seo-audit"
              className="inline-block border border-primary text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors"
            >
              Get Free SEO Audit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
