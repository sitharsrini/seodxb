import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Search, FileText, BarChart2, Globe, Zap, Layout, Link2, ArrowRight } from "lucide-react";

const benefits = [
  { icon: <Search size={22} />, title: "Keyword Strategy", desc: "We identify the exact queries your customers type, map them to pages, and optimise for search intent - not just volume." },
  { icon: <FileText size={22} />, title: "Content Optimisation", desc: "Every page title, H1, meta description, and body paragraph is tuned to rank - while remaining compelling for real readers." },
  { icon: <Layout size={22} />, title: "On-Page Structure", desc: "Correct heading hierarchy (H1–H4), semantic HTML, and clear content structure that search engines can parse at a glance." },
  { icon: <Link2 size={22} />, title: "Internal Linking", desc: "Strategic links between your pages pass authority where it matters most and guide visitors deeper into your site." },
  { icon: <Zap size={22} />, title: "Core Web Vitals", desc: "LCP, CLS, INP scores optimised so Google sees a fast, stable experience - a direct ranking signal since 2021." },
  { icon: <Globe size={22} />, title: "Schema Markup", desc: "Structured data that makes your listings stand out with rich snippets: stars, FAQs, prices, and breadcrumbs." },
];

const process = [
  { step: "01", title: "Technical Crawl", desc: "We audit your site with enterprise-grade crawlers to find every indexability issue, broken link, and missed opportunity." },
  { step: "02", title: "Keyword Mapping", desc: "Each page gets a primary keyword and a cluster of supporting terms matched to the right search intent." },
  { step: "03", title: "On-Page Fixes", desc: "We rewrite titles, descriptions, headings, and body content - and implement schema markup and internal links." },
  { step: "04", title: "Monitor & Iterate", desc: "Monthly ranking reports track progress. We adjust targeting as search trends evolve so you never fall behind." },
];

const faqs = [
  { q: "What is On-Page SEO?", a: "On-Page SEO is the practice of optimising individual web pages to rank higher in search engines. It covers content, HTML elements (title tags, meta descriptions, headings), URL structure, internal linking, images, and page speed. Unlike off-page SEO (backlinks), on-page SEO is entirely within your control." },
  { q: "How long does it take to see results from On-Page SEO?", a: "Most clients see measurable ranking improvements within 4–12 weeks. Competitive keywords on newer domains may take 3–6 months. On-page changes are typically faster to see than link building, because they directly affect how Google crawls and evaluates your pages." },
  { q: "How is On-Page SEO different from Technical SEO?", a: "On-Page SEO focuses on content and HTML elements visible to users and search engines. Technical SEO covers the server-side infrastructure - crawlability, indexation, site speed, Core Web Vitals, and mobile usability. Our service combines both for maximum impact." },
  { q: "Do you work with any CMS?", a: "Yes. We've optimised sites built on WordPress, Shopify, Webflow, Squarespace, Wix, custom React/Next.js apps, and enterprise platforms like Sitecore and Adobe Experience Manager." },
  { q: "Can I do On-Page SEO myself?", a: "You can handle the basics - writing a keyword-rich title tag, adding alt text to images. But high-performance on-page SEO requires deep keyword research, competitive analysis, content strategy, schema implementation, and an understanding of search intent nuances that take years to develop." },
];

export function OnPageSEO() {
  return (
    <>
      <Helmet>
        <title>On-Page SEO Services - Keyword Optimisation & Content Strategy | SEODXB</title>
        <meta name="description" content="Professional On-Page SEO services: keyword research, content optimisation, meta tags, schema markup, Core Web Vitals, and internal linking. Serving businesses globally." />
        <link rel="canonical" href="https://seodxb.com/on-page-seo" />
        <meta property="og:title" content="On-Page SEO Services | SEODXB" />
        <meta property="og:description" content="Turn every page into a ranking asset. Expert On-Page SEO covering keyword strategy, content, schema, and Core Web Vitals for global businesses." />
        <meta property="og:url" content="https://seodxb.com/on-page-seo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "On-Page SEO",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "On-Page SEO covering keyword research, content optimisation, meta tags, schema markup, internal linking and Core Web Vitals.",
          "areaServed": "Worldwide",
          "url": "https://seodxb.com/on-page-seo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">On-Page SEO</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  Turn Every Page Into a Ranking Asset
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  We optimise every element on your pages - content, headings, meta tags, schema, and internal links - so Google ranks you above competitors for the searches that drive revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <Link href="/contact">Get a Free Audit <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg
                  viewBox="0 0 480 360"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  role="img"
                  aria-label="On-page SEO diagram showing optimised webpage structure with H1 heading, meta description, keyword-rich paragraphs, internal links, and schema markup"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Browser chrome */}
                  <rect width="480" height="360" rx="16" fill="#F8FAFC" />
                  <rect x="0" y="0" width="480" height="44" rx="16" fill="#E2E8F0" />
                  <rect x="0" y="28" width="480" height="16" fill="#E2E8F0" />
                  <circle cx="20" cy="22" r="6" fill="#FC8181" />
                  <circle cx="38" cy="22" r="6" fill="#F6AD55" />
                  <circle cx="56" cy="22" r="6" fill="#68D391" />
                  {/* URL bar */}
                  <rect x="80" y="12" width="280" height="20" rx="10" fill="white" />
                  <text x="220" y="26" textAnchor="middle" fontSize="10" fill="#94A3B8">seodxb.com/your-page</text>
                  {/* Page content */}
                  <rect x="24" y="58" width="432" height="288" rx="8" fill="white" />
                  {/* H1 tag badge */}
                  <rect x="36" y="72" width="30" height="18" rx="4" fill="#DBEAFE" />
                  <text x="51" y="84" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563EB">H1</text>
                  {/* H1 text */}
                  <rect x="72" y="72" width="200" height="18" rx="3" fill="#EFF6FF" />
                  <text x="82" y="84" fontSize="11" fontWeight="bold" fill="#1E40AF">Best SEO Agency in Dubai</text>
                  {/* Meta badge */}
                  <rect x="36" y="102" width="42" height="16" rx="4" fill="#F0FDF4" />
                  <text x="57" y="113" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16A34A">META</text>
                  {/* Meta text */}
                  <rect x="84" y="102" width="240" height="16" rx="3" fill="#F0FDF4" />
                  <text x="94" y="113" fontSize="9" fill="#15803D">Award-winning SEO agency based in Dubai...</text>
                  {/* Divider */}
                  <line x1="36" y1="130" x2="432" y2="130" stroke="#E2E8F0" strokeWidth="1" />
                  {/* Body paragraph lines */}
                  <rect x="36" y="142" width="380" height="8" rx="4" fill="#F1F5F9" />
                  {/* Keyword highlight */}
                  <rect x="36" y="158" width="140" height="8" rx="4" fill="#FEF9C3" />
                  <rect x="182" y="158" width="200" height="8" rx="4" fill="#F1F5F9" />
                  <rect x="36" y="174" width="320" height="8" rx="4" fill="#F1F5F9" />
                  <rect x="36" y="190" width="260" height="8" rx="4" fill="#F1F5F9" />
                  {/* H2 */}
                  <rect x="36" y="212" width="20" height="14" rx="3" fill="#EDE9FE" />
                  <text x="46" y="222" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#7C3AED">H2</text>
                  <rect x="62" y="212" width="160" height="14" rx="3" fill="#EDE9FE" />
                  <text x="72" y="222" fontSize="10" fontWeight="bold" fill="#5B21B6">Our Core SEO Services</text>
                  {/* More lines */}
                  <rect x="36" y="236" width="370" height="8" rx="4" fill="#F1F5F9" />
                  <rect x="36" y="252" width="300" height="8" rx="4" fill="#F1F5F9" />
                  {/* Internal link */}
                  <rect x="36" y="270" width="130" height="16" rx="4" fill="#DBEAFE" />
                  <text x="44" y="281" fontSize="10" fill="#2563EB">→ View Our Pricing Plans</text>
                  {/* Schema badge */}
                  <rect x="340" y="308" width="96" height="20" rx="10" fill="#FEF3C7" />
                  <text x="388" y="321" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400E">✦ Schema Markup</text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
              {[
                { value: "3.5×", label: "Avg. organic traffic increase" },
                { value: "93%", label: "Of pages we touch rank in 90 days" },
                { value: "40+", label: "Industries served globally" },
                { value: "100%", label: "Transparent monthly reporting" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">What's Included in On-Page SEO</h2>
            <p className="text-lg text-muted-foreground">A comprehensive service covering every ranking factor you control directly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="text-primary mb-4">{b.icon}</div>
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Our On-Page SEO Process</h2>
              <p className="text-gray-500 text-lg">Systematic, repeatable, and built for long-term compounding gains.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((p, i) => (
                <div key={i} className="flex gap-6 bg-white rounded-2xl p-7 border border-gray-100">
                  <span className="text-5xl font-black text-primary/20 leading-none">{p.step}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-24 container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">Why Choose SEODXB for On-Page SEO</h2>
          <ul className="space-y-4">
            {[
              "We combine on-page with AEO & GEO - your content ranks on Google AND gets cited by AI engines like ChatGPT and Perplexity.",
              "No black-hat tactics. Every optimisation follows Google's Quality Rater Guidelines.",
              "We work across all time zones and serve clients from the UAE, UK, US, Europe, Australia, and beyond.",
              "Monthly deliverables with clear before/after comparisons - you always know what we changed and why.",
              "No lock-in contracts. Cancel anytime (though most clients stay years).",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">On-Page SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Rank Higher?</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Get a free on-page SEO audit. We'll identify every issue holding your pages back - no strings attached.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Request Your Free Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
