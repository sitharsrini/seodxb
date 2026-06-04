import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, TrendingUp, Globe, BarChart2, Search, Zap, ArrowRight } from "lucide-react";

const services = [
  { icon: <Search size={22} />, title: "Keyword Research", desc: "Deep analysis of what Dubai customers search for. We map keywords to every page, targeting high-volume, commercial-intent terms in your market." },
  { icon: <TrendingUp size={22} />, title: "On-Page Optimisation", desc: "Title tags, meta descriptions, headings, internal links, and content - every element tuned for Google's UAE crawlers." },
  { icon: <Globe size={22} />, title: "Local SEO & Map Pack", desc: "Google Business Profile, citations across UAE directories, and location pages that put you in the top 3 Map Pack results." },
  { icon: <Zap size={22} />, title: "Technical SEO", desc: "Core Web Vitals, crawlability, schema markup, and site speed fixes that form the foundation of lasting rankings." },
  { icon: <BarChart2 size={22} />, title: "Link Building", desc: "High-authority backlinks from UAE news sites, local directories, and industry publications that build domain trust." },
  { icon: <CheckCircle2 size={22} />, title: "Monthly Reporting", desc: "Transparent reports showing rankings, traffic, leads generated, and ROI - no vanity metrics, only what matters to your business." },
];

const stats = [
  { value: "3.2M+", label: "Google searches happen in Dubai every day" },
  { value: "91%", label: "Of Dubai residents use Google as their primary search engine" },
  { value: "5x", label: "More leads from organic search vs paid ads over 12 months" },
  { value: "Top 3", label: "Positions capture 75% of all clicks in search results" },
];

const faqs = [
  { q: "How long does SEO take to show results in Dubai?", a: "Most Dubai businesses start seeing measurable ranking improvements within 3–4 months. Significant traffic increases typically appear at 6 months, with compounding growth through month 12. Competitive industries like real estate, legal, and finance can take longer due to established players. We share honest timelines during your free audit." },
  { q: "What makes SEO in Dubai different from other markets?", a: "Dubai's search landscape is unique: a multilingual audience (English and Arabic), high mobile usage (87%+ of searches), a competitive landscape of global and regional businesses, and Google's UAE-specific algorithm signals including local business verification. We account for all of this in every campaign." },
  { q: "Do you work with businesses across all industries?", a: "Yes. We work across real estate, hospitality, healthcare, legal, e-commerce, B2B, retail, and professional services. Each campaign is built around your specific industry's competitive landscape and buyer journey - not a one-size-fits-all template." },
  { q: "What's included in your Dubai SEO service?", a: "Every campaign includes: full technical audit and fixes, keyword research and mapping, on-page optimisation, local SEO and GBP management, link building, monthly content, and detailed reporting. Optional add-ons include AEO (featured snippets), GEO (AI search visibility), and paid search." },
  { q: "Can you guarantee first page rankings?", a: "No ethical SEO agency can guarantee specific rankings - Google's algorithm is their property. What we guarantee is applying every proven best practice, providing full transparency on progress, and delivering measurable improvements in traffic and leads. Our average client sees a 3.1x increase in organic traffic within 12 months." },
];

export function SEODubai() {
  return (
    <>
      <Helmet>
        <title>SEO Agency Dubai - #1 Rated SEO Company in Dubai, UAE | SEODXB</title>
        <meta name="description" content="Dubai's results-driven SEO agency. Rank on Google page one with on-page, technical, local SEO, and link building." />
        <link rel="canonical" href="https://seodxb.com/seo-dubai" />
        <meta property="og:title" content="SEO Agency Dubai | #1 SEO Company Dubai | SEODXB" />
        <meta property="og:description" content="Top-rated SEO agency in Dubai. First page rankings, more organic traffic, and measurable leads. Get your free SEO audit today." />
        <meta property="og:url" content="https://seodxb.com/seo-dubai" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "SEODXB - SEO Agency Dubai",
          "description": "A Dubai-based SEO agency delivering first-page Google rankings, increased organic traffic, and measurable business growth.",
          "url": "https://seodxb.com/seo-dubai",
          "areaServed": { "@type": "City", "name": "Dubai" },
          "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
          "telephone": "+971521551198",
          "priceRange": "$$"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">SEO Agency Dubai</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  Dubai's SEO Agency. Real Rankings. Real Revenue.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  We help Dubai businesses rank on Google's first page, attract qualified traffic, and convert visitors into customers - with SEO strategies built specifically for the UAE market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <Link href="/contact">Get Free SEO Audit <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 360" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="Google search results showing SEODXB ranked #1 in Dubai for SEO agency searches, with 5-star rating, organic position 1 above competitors, demonstrating proven SEO results for Dubai businesses"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="360" rx="16" fill="white" />
                  {/* Search bar */}
                  <rect x="20" y="16" width="440" height="44" rx="22" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <text x="52" y="43" fontSize="20" fill="#4285F4">G</text>
                  <text x="78" y="42" fontSize="12" fill="#5F6368">SEO agency Dubai</text>
                  {/* Ads label */}
                  <rect x="20" y="72" width="36" height="14" rx="3" fill="none" stroke="#5F6368" strokeWidth="1" />
                  <text x="38" y="82" textAnchor="middle" fontSize="8" fill="#5F6368">Ads</text>
                  <rect x="64" y="76" width="200" height="6" rx="3" fill="#E2E8F0" />
                  {/* #1 Organic result - SEODXB */}
                  <rect x="20" y="100" width="440" height="88" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
                  <rect x="20" y="100" width="4" height="88" rx="2" fill="#16A34A" />
                  <text x="36" y="118" fontSize="9" fill="#16A34A">seodxb.com › seo-dubai</text>
                  <text x="36" y="134" fontSize="13" fontWeight="bold" fill="#1D4ED8">SEODXB - #1 SEO Agency in Dubai, UAE</text>
                  <rect x="36" y="142" width="320" height="6" rx="3" fill="#DCFCE7" />
                  <rect x="36" y="154" width="280" height="6" rx="3" fill="#DCFCE7" />
                  <text x="36" y="173" fontSize="9" fill="#F59E0B">★★★★★</text>
                  <text x="96" y="173" fontSize="9" fill="#64748B">4.9 · 127 reviews · SEO Agency</text>
                  {/* Rank badge */}
                  <rect x="410" y="108" width="42" height="22" rx="11" fill="#DCFCE7" />
                  <text x="431" y="122" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#15803D">#1 Rank</text>
                  {/* #2 result */}
                  <rect x="20" y="198" width="440" height="60" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="36" y="216" fontSize="9" fill="#64748B">competitor-agency.com</text>
                  <text x="36" y="230" fontSize="12" fontWeight="bold" fill="#1558D6">Competitor SEO Agency Dubai</text>
                  <rect x="36" y="238" width="260" height="6" rx="3" fill="#E2E8F0" />
                  {/* #3 result */}
                  <rect x="20" y="268" width="440" height="60" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="36" y="286" fontSize="9" fill="#64748B">another-seo.ae</text>
                  <text x="36" y="300" fontSize="12" fontWeight="bold" fill="#1558D6">Another SEO Company UAE</text>
                  <rect x="36" y="308" width="240" height="6" rx="3" fill="#E2E8F0" />
                  {/* Growth arrow overlay */}
                  <path d="M420 340 L460 280 L460 340 Z" fill="#16A34A" opacity="0.1" />
                  <path d="M420 340 L460 280" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="442" y="296" fontSize="8" fill="#16A34A" fontWeight="bold">↑ 312%</text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-primary mb-1">{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">What Our Dubai SEO Service Includes</h2>
            <p className="text-lg text-muted-foreground">End-to-end SEO built for Dubai's competitive search landscape.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="text-primary mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why SEODXB */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-heading font-bold mb-6 text-center">Why Dubai Businesses Choose SEODXB</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {[
                { title: "Dubai-First Strategy", desc: "We know the UAE market - Arabic search behaviour, local ranking factors, and the competitive landscape of Business Bay to DIFC." },
                { title: "No Lock-In Contracts", desc: "Monthly rolling agreements. We keep your business because of results, not because you're stuck in a 12-month contract." },
                { title: "Transparent Reporting", desc: "Weekly rank updates, monthly traffic reports, and direct access to your team - no black boxes, ever." },
                { title: "AEO + GEO Included", desc: "We optimise for Google's AI Overviews and ChatGPT citations - the search layer your competitors aren't targeting yet." },
                { title: "Human-Written Content", desc: "Every blog post, landing page, and meta description is written by SEO specialists - no AI-spun filler content." },
                { title: "Results-Linked Reporting", desc: "We tie every SEO metric back to leads and revenue. Rankings matter. What they generate matters more." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">Industries We Serve in Dubai</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Real Estate", "Hospitality", "Healthcare", "Legal", "E-commerce", "B2B & SaaS", "Retail", "Finance", "Education", "Construction"].map((ind) => (
                <span key={ind} className="bg-slate-50 text-gray-700 text-sm px-4 py-2 rounded-full border border-slate-200">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Dubai SEO FAQ</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm">
                  <AccordionTrigger className="font-semibold text-left py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Rank #1 in Dubai?</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Get a free, no-obligation SEO audit. We'll show you exactly where you rank, why competitors outperform you, and how to fix it.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Get My Free Dubai SEO Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
