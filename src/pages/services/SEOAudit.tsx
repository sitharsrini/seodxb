import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Zap, Search, Globe, Shield, BarChart2, AlertTriangle, ArrowRight } from "lucide-react";
import { clampTitle } from "@/lib/title";

const auditAreas = [
  { icon: <Zap size={22} />, title: "Technical Health Check", desc: "Core Web Vitals, crawlability, indexation errors, redirect chains, HTTPS, robots.txt, and XML sitemap - 80+ technical checks." },
  { icon: <Search size={22} />, title: "On-Page SEO Analysis", desc: "Title tags, meta descriptions, heading structure, keyword usage, internal linking, image optimisation, and content quality scoring." },
  { icon: <Globe size={22} />, title: "Competitor Gap Analysis", desc: "We compare your rankings, backlinks, and content against your top 3 competitors to identify exactly where they outperform you - and how to close the gap." },
  { icon: <Shield size={22} />, title: "Backlink Profile Audit", desc: "Full analysis of your current backlink profile - toxic links, anchor text diversity, and link building opportunities your competitors are exploiting." },
  { icon: <BarChart2 size={22} />, title: "Keyword Opportunity Map", desc: "We identify every keyword within your ranking reach - current rankings, estimated traffic value, and which pages need to be created or optimised." },
  { icon: <AlertTriangle size={22} />, title: "Priority Action Plan", desc: "Every audit ends with a ranked, actionable list of fixes - sorted by impact and effort. You know exactly what to do first." },
];

const faqs = [
  { q: "What is included in a free SEO audit?", a: "Our free SEO audit covers: top-level technical health (Core Web Vitals, indexation, crawl errors), on-page scoring for your top 5 landing pages, current keyword rankings snapshot, a competitor comparison for 2 main competitors, and a priority action summary. It's a genuine analysis - not a lead-gen report with no substance." },
  { q: "How long does an SEO audit take?", a: "Our free audit is delivered within 48–72 business hours. A full comprehensive audit (200+ checks, full keyword gap analysis, complete backlink profile) takes 5–7 business days and is included in our paid retainers or available as a standalone project." },
  { q: "Do I need to give you access to my website?", a: "For the free audit, we only need your domain URL. For a comprehensive audit, Google Search Console and Google Analytics read access allows us to use your first-party data alongside our tools - giving much more accurate and actionable results." },
  { q: "What happens after the audit?", a: "We deliver the audit in a clear report with a ranked action list. If you'd like us to implement the fixes, we discuss a retainer proposal. If you want to implement them yourself, you keep the report - no strings attached. Most clients start seeing ranking improvements within 4–8 weeks of implementing audit recommendations." },
  { q: "How is your audit different from free tools like SEMrush or Ubersuggest?", a: "Free tools give you data - our audit gives you interpretation and a priority plan. We don't just list issues; we tell you which ones actually impact your rankings, in what order to fix them, and specifically how to fix them for your site. That contextual expertise is what makes the difference between knowing you have a problem and fixing it." },
];

const whatYouGet = [
  "Technical health score (out of 100)",
  "Top 5 page on-page analysis",
  "Keyword ranking snapshot",
  "2 competitor comparison",
  "Core Web Vitals assessment",
  "Indexation & crawl status",
  "Priority action list (top 10)",
  "Backlink overview",
];

export function SEOAudit() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("Free SEO Audit Dubai - Website SEO Audit UAE | SEODXB")}</title>
        <meta name="description" content="Free, comprehensive SEO audit for your Dubai website: technical health, keyword gaps, and a prioritised 48-hour action plan." />
        <link rel="canonical" href="https://seodxb.com/seo-audit" />
        <meta property="og:title" content="Free SEO Audit Dubai | Website SEO Analysis UAE | SEODXB" />
        <meta property="og:description" content="Free SEO audit: technical health check, keyword opportunity mapping, competitor gap analysis, and priority action plan for Dubai businesses." />
        <meta property="og:url" content="https://seodxb.com/seo-audit" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Free SEO Audit Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Free SEO audit for Dubai businesses: technical health, on-page analysis, competitor gaps, keyword opportunities, and priority action plan.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "areaServed": ["Dubai", "UAE", "Worldwide"],
          "url": "https://seodxb.com/seo-audit"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Free SEO Audit</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  See Exactly What's Holding Your Site Back.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  Our free SEO audit reveals the technical issues, content gaps, and competitor advantages that are suppressing your Google rankings - with a clear, prioritised action plan to fix them.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <a href="/contact">Get My Free SEO Audit <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <a href="/pricing">View Full Packages</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 360" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="SEO audit report showing a website health score of 73 out of 100 with critical issues flagged: slow Core Web Vitals in red, missing meta descriptions in amber, broken internal links in red, and a priority fix list with estimated traffic impact"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="360" rx="16" fill="white" />
                  <rect x="20" y="20" width="440" height="320" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="36" y="46" fontSize="13" fontWeight="bold" fill="#0F172A">SEO Audit Report - yourdomain.com</text>
                  <rect x="36" y="54" width="90" height="18" rx="9" fill="#FEF3C7" />
                  <text x="81" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400E">⚠ Needs Work</text>
                  {/* Score */}
                  <circle cx="120" cy="150" r="60" fill="none" stroke="#E2E8F0" strokeWidth="10" />
                  <circle cx="120" cy="150" r="60" fill="none" stroke="#F59E0B" strokeWidth="10"
                    strokeDasharray="340" strokeDashoffset="90" strokeLinecap="round"
                    transform="rotate(-90 120 150)" />
                  <text x="120" y="144" textAnchor="middle" fontSize="30" fontWeight="900" fill="#0F172A">73</text>
                  <text x="120" y="162" textAnchor="middle" fontSize="10" fill="#64748B">SEO Score</text>
                  <text x="120" y="176" textAnchor="middle" fontSize="9" fill="#F59E0B">Needs Improvement</text>
                  {/* Issues found */}
                  <rect x="200" y="80" width="240" height="140" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="214" y="98" fontSize="10" fontWeight="bold" fill="#0F172A">Issues Found</text>
                  {[
                    { label: "Slow Core Web Vitals", severity: "Critical", color: "#FEE2E2", text: "#DC2626" },
                    { label: "Missing Meta Descriptions", severity: "High", color: "#FEF3C7", text: "#D97706" },
                    { label: "Broken Internal Links", severity: "Critical", color: "#FEE2E2", text: "#DC2626" },
                    { label: "No Schema Markup", severity: "Medium", color: "#EFF6FF", text: "#2563EB" },
                    { label: "Thin Content Pages", severity: "High", color: "#FEF3C7", text: "#D97706" },
                  ].map((issue, i) => (
                    <g key={i}>
                      <rect x="208" y={106 + i * 22} width="224" height="16" rx="4" fill={issue.color} />
                      <text x="216" y={118 + i * 22} fontSize="8" fill={issue.text}>{issue.label}</text>
                      <rect x={392} y={108 + i * 22} width="32" height="12" rx="6" fill={issue.text} opacity="0.15" />
                      <text x={408} y={118 + i * 22} textAnchor="middle" fontSize="7" fill={issue.text}>{issue.severity}</text>
                    </g>
                  ))}
                  {/* Priority actions */}
                  <rect x="36" y="236" width="404" height="88" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="50" y="254" fontSize="10" fontWeight="bold" fill="#0F172A">Priority Action Plan</text>
                  {[
                    { action: "Fix LCP - compress images & enable caching", impact: "+18% traffic", effort: "Low" },
                    { action: "Write meta descriptions for 23 pages", impact: "+12% CTR", effort: "Low" },
                    { action: "Implement Product & FAQ schema markup", impact: "+Rich snippets", effort: "Medium" },
                  ].map((action, i) => (
                    <g key={i}>
                      <circle cx="54" cy={268 + i * 22} r="6" fill="#2563EB" />
                      <text x="54" y={272 + i * 22} textAnchor="middle" fontSize="7" fill="white">{i + 1}</text>
                      <text x="68" y={271 + i * 22} fontSize="8" fill="#374151">{action.action}</text>
                      <rect x="350" y={261 + i * 22} width="68" height="14" rx="7" fill="#DCFCE7" />
                      <text x="384" y={271 + i * 22} textAnchor="middle" fontSize="7" fill="#15803D">{action.impact}</text>
                    </g>
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">What's in Your Free Audit</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {whatYouGet.map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit areas */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">What We Analyse</h2>
            <p className="text-lg text-muted-foreground">A comprehensive look at every factor holding your site back from page 1.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {auditAreas.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="text-primary mb-4">{a.icon}</div>
                <h3 className="font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">SEO Audit FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Your Free SEO Audit is Ready in 48 Hours</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              No credit card. No obligation. Just a clear picture of why your site isn't ranking - and exactly how to fix it.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <a href="/contact">Request My Free Audit <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
