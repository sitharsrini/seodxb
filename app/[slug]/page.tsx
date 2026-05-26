import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPageBySlug, getAllPageSlugs, PageData } from "@/lib/page-data";
import { Calendar, MapPin, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 100 pages at build time (best SEO)
export async function generateStaticParams() {
  const slugs = getAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate perfect metadata for every page (critical for SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return { title: "Page Not Found | SEODXB" };
  }

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `https://seodxb.com/${slug}`,
      images: [{ url: "/og-default.png" }],
    },
  };
}

// JSON-LD Structured Data Component - E-E-A-T gold
function StructuredData({ page }: { page: PageData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.title,
        provider: {
          "@type": "Organization",
          name: "SEODXB",
          url: "https://seodxb.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: page.location || "Dubai",
            addressCountry: "AE",
          },
        },
        areaServed: {
          "@type": "City",
          name: page.location || "Dubai",
        },
        description: page.metaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "Article",
        headline: page.h1,
        author: {
          "@type": "Person",
          name: "Kowmiya Annamalai",
          jobTitle: "Co-Founder & SEO Strategist",
          worksFor: { "@type": "Organization", name: "SEODXB" },
        },
        dateModified: page.lastUpdated,
        publisher: {
          "@type": "Organization",
          name: "SEODXB",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function DynamicSEOServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-white">
      <StructuredData page={page} />

      {/* Hero */}
      <section className="bg-[#0A2540] text-white pt-14 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[2.5px] text-[#00A896] mb-4">
            {page.industry} {page.location && `• ${page.location}`}
          </div>
          <h1 className="text-5xl md:text-6xl tracking-[-2.4px] font-semibold leading-[1.05] max-w-[18ch]">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl text-white/75 tracking-[-0.3px]">{page.intro}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#00A896] hover:bg-[#008F7A] px-9 py-3.5 rounded-full font-semibold text-lg transition">Get Free Strategy Call</Link>
            <a href="#case-study" className="px-8 py-3.5 border border-white/30 rounded-full font-medium hover:bg-white/5 transition">See Case Study</a>
          </div>

          <div className="mt-6 text-xs text-white/50 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" /> Last updated {new Date(page.lastUpdated).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      {page.stats.length > 0 && (
        <section className="border-b py-7">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-y-6">
            {page.stats.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <div className="text-4xl font-semibold tracking-[-1.5px] text-[#0A2540]">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pain Points */}
      {page.painPoints.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16 border-b">
          <div className="text-sm uppercase tracking-widest text-[#00A896] mb-4">THE PROBLEM WE SOLVE</div>
          <h2 className="text-4xl tracking-[-1.5px] font-semibold mb-8">Why most {page.industry.toLowerCase()} businesses in {page.location || "Dubai"} struggle to rank</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {page.painPoints.map((point, i) => (
              <div key={i} className="p-6 rounded-2xl bg-red-50/60 border border-red-100 text-red-900/90">
                {point}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Our Approach - High value, specific */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-sm uppercase tracking-widest text-[#00A896] mb-4">OUR PROVEN PROCESS</div>
        <h2 className="text-4xl tracking-[-1.6px] font-semibold mb-10">How we deliver measurable rankings for {page.industry} in {page.location || 'Dubai'}</h2>

        <div className="space-y-6">
          {page.ourApproach.map((step, index) => (
            <div key={index} className="flex gap-5 p-7 border rounded-3xl group hover:border-[#00A896]/40 transition">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0A2540] text-white flex items-center justify-center text-sm font-mono">{index + 1}</div>
              <div className="text-lg leading-snug pt-0.5">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AEO / GEO Specific Section (Critical for brand) */}
      <section className="bg-[#F8FAFC] py-16 border-y">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase text-xs tracking-[3px] text-emerald-600 font-medium">AI SEARCH VISIBILITY</div>
          <h3 className="text-4xl tracking-[-1.5px] font-semibold mt-3 mb-7">Generative Engine Optimisation (GEO) &amp; Answer Engine Strategy</h3>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>{page.aeoGeoSection}</p>
          </div>
          <div className="mt-7 inline-flex items-center gap-2 text-sm px-5 py-2 rounded-full bg-emerald-100 text-emerald-800">
            <CheckCircle size={16} /> Engineered to be cited by ChatGPT, Gemini, Perplexity &amp; Google AI Overviews
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="max-w-5xl mx-auto px-6 py-16 border-b">
        <div className="uppercase tracking-widest text-xs text-[#00A896]">CLIENT RESULT</div>
        <div className="mt-3 text-5xl tracking-[-2px] font-semibold">{page.caseStudy.result}</div>
        <div className="text-xl mt-1 text-gray-600">{page.caseStudy.client}</div>

        <div className="mt-8 bg-white border p-8 rounded-3xl text-lg leading-relaxed">
          {page.caseStudy.details}
        </div>
      </section>

      {/* E-E-A-T Author Box */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 p-9 rounded-3xl">
          <div className="w-24 h-24 bg-[#0A2540] rounded-2xl flex-shrink-0 flex items-center justify-center text-white text-4xl font-bold">KA</div>
          <div>
            <div className="font-semibold text-xl">Kowmiya Annamalai</div>
            <div className="text-[#00A896]">Co-Founder, SEODXB • 7+ years UAE SEO experience</div>
            <div className="mt-4 text-gray-600 max-w-prose">
              I have personally led SEO strategy for over 150 brands in Dubai and the wider region. My focus is building genuine topical authority and E-E-A-T signals that survive algorithm updates and win in AI search.
            </div>
            <div className="text-xs mt-4 text-gray-500">Last updated on this page: {new Date(page.lastUpdated).toLocaleDateString()}</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq, idx) => (
              <details key={idx} className="group border rounded-2xl p-6 open:bg-gray-50 transition">
                <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#00A896] group-open:rotate-45 transition">＋</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-[#0A2540] text-white py-16 text-center">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-3xl font-semibold tracking-tight mb-4">Ready to dominate {page.primaryKeyword}?</div>
          <p className="text-white/70 mb-8">Book a 25-minute strategy call. We’ll audit your current visibility and show you the exact opportunities.</p>
          <Link href="/contact" className="inline-block bg-white text-[#0A2540] font-semibold px-10 py-3.5 rounded-full text-lg hover:bg-[#00A896] hover:text-white transition">Book My Free Audit</Link>
          <div className="text-xs text-white/50 mt-4">No pressure. Real insights delivered.</div>
        </div>
      </section>

      {/* Internal links for crawlability & topical authority */}
      <div className="max-w-5xl mx-auto px-6 py-8 text-xs text-gray-500 flex flex-wrap gap-x-5 gap-y-1">
        <Link href="/seo-agency-dubai" className="hover:text-[#00A896]">SEO Agency Dubai</Link>
        <Link href="/aeo-geo" className="hover:text-[#00A896]">AEO &amp; GEO Services</Link>
        <Link href="/locations" className="hover:text-[#00A896]">All Dubai Locations</Link>
        <Link href="/results" className="hover:text-[#00A896]">Client Results</Link>
      </div>
    </div>
  );
}
