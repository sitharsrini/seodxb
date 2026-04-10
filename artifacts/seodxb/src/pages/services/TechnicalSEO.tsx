import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Zap, Globe, Shield, BarChart2, Code2, Smartphone, ArrowRight } from "lucide-react";

const audits = [
  { icon: <Zap size={22} />, title: "Core Web Vitals", desc: "LCP, CLS, and INP measured and fixed. Faster load times directly correlate with higher rankings and lower bounce rates." },
  { icon: <Globe size={22} />, title: "Crawlability & Indexation", desc: "We ensure Google can discover, crawl, and index every important page — and that nothing that should be hidden is visible." },
  { icon: <Code2 size={22} />, title: "Structured Data / Schema", desc: "Implement JSON-LD schema for your site type: products, articles, FAQs, breadcrumbs, local business, and more." },
  { icon: <Shield size={22} />, title: "Site Architecture & URLs", desc: "Clean URL structures, logical site hierarchy, and canonical tags that prevent duplicate content diluting your authority." },
  { icon: <Smartphone size={22} />, title: "Mobile Usability", desc: "Google uses mobile-first indexing. We verify your site passes all mobile usability tests in Google Search Console." },
  { icon: <BarChart2 size={22} />, title: "Log File Analysis", desc: "Advanced crawl budget analysis using server logs — understanding exactly how Google's bots traverse your site." },
];

const faqs = [
  { q: "What is Technical SEO?", a: "Technical SEO refers to improvements made to the infrastructure of a website that help search engines crawl, render, and index it correctly. This includes site speed, mobile usability, HTTPS, crawl budget, structured data, canonical tags, XML sitemaps, and more. It's the foundation that on-page and off-page SEO efforts build upon." },
  { q: "How do I know if my site has technical SEO issues?", a: "Common signs include: pages not appearing in Google despite being published, low click-through rates on search listings, Google Search Console errors, slow load times, duplicate content warnings, and sudden drops in organic traffic. We offer a free technical audit to identify every issue on your site." },
  { q: "How long does a technical SEO audit take?", a: "A comprehensive audit for a standard site (under 10,000 pages) typically takes 5–7 business days. We deliver a prioritised report with exact recommendations, not just a list of issues. Implementation timelines depend on the number and complexity of fixes required." },
  { q: "Do you fix the issues or just report them?", a: "Both. We deliver a detailed audit report AND implement all the fixes — directly in your CMS, codebase, or via your developer team. You choose the level of involvement you prefer." },
  { q: "Is technical SEO a one-time task?", a: "No. Sites evolve — new pages are added, redesigns happen, plugins update. We include ongoing technical monitoring in our monthly retainers to catch issues before they cause ranking drops." },
];

export function TechnicalSEO() {
  return (
    <>
      <Helmet>
        <title>Technical SEO Services — Site Audits, Core Web Vitals & Schema | SEODXB</title>
        <meta name="description" content="Expert Technical SEO: site audits, Core Web Vitals optimisation, crawlability fixes, schema markup, and mobile usability. For businesses worldwide." />
        <link rel="canonical" href="https://seodxb.com/technical-seo" />
        <meta property="og:title" content="Technical SEO Services | SEODXB" />
        <meta property="og:description" content="Fix the technical foundations of your site. Crawlability, Core Web Vitals, structured data, and more — the bedrock of lasting SEO gains." />
        <meta property="og:url" content="https://seodxb.com/technical-seo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Technical SEO",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Technical SEO audit and implementation: Core Web Vitals, crawlability, schema markup, mobile usability, and site architecture.",
          "areaServed": "Worldwide",
          "url": "https://seodxb.com/technical-seo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-950 text-white py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Technical SEO</span>
              <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
                Fix the Foundation.<br />
                <span className="text-[#C8FF00]">Everything Ranks Better.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                No amount of great content can compensate for a crawl error, a 4-second load time, or a missing canonical. We find and fix every technical issue that's silently holding your site back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-8" asChild>
                  <Link href="/contact">Get a Free Technical Audit <ArrowRight size={16} className="ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Audit Items */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">What We Audit & Fix</h2>
            <p className="text-lg text-muted-foreground">200+ technical checks. Prioritised by impact. Fixed by our team.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {audits.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="text-primary mb-4">{a.icon}</div>
                <h3 className="font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="py-24 bg-slate-950 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">200+ Technical Checks Include</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "XML sitemap accuracy & submission", "robots.txt configuration", "HTTPS/SSL certificate validity",
                "Redirect chains & loops", "Orphan pages discovery", "Duplicate content & canonicals",
                "Hreflang for international sites", "Image compression & lazy loading", "JavaScript render issues",
                "Structured data validation", "Google Search Console error resolution", "404 error mapping & redirects",
                "Page speed (mobile & desktop)", "Browser caching & compression", "Internal link depth analysis",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={16} className="text-[#C8FF00] shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Technical SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Stop Leaving Rankings on the Table</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              One free technical audit. Zero obligation. We'll show you exactly what's broken and how to fix it.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Get My Free Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
