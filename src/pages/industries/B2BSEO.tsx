import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Briefcase, Search, TrendingUp, Globe2, BarChart2, Zap, ArrowRight } from "lucide-react";
import { clampTitle } from "@/lib/title";

const services = [
  { icon: <Search size={22} />, title: "B2B Keyword Strategy", desc: "We target decision-maker search queries - C-suite, procurement managers, and technical buyers - not mass-market terms that attract the wrong audience." },
  { icon: <Briefcase size={22} />, title: "Solution & Service Pages", desc: "Deep, authoritative service pages that rank for 'enterprise [solution] Dubai' queries and clearly communicate ROI to B2B buyers." },
  { icon: <Globe2 size={22} />, title: "Thought Leadership Content", desc: "SEO-led whitepapers, guides, and industry reports that rank for informational queries and position your brand as the authority in your sector." },
  { icon: <TrendingUp size={22} />, title: "Lead Generation SEO", desc: "Every page is built to convert qualified leads - demo requests, consultation bookings, and form submissions - not just rack up traffic." },
  { icon: <Zap size={22} />, title: "LinkedIn + Google Integration", desc: "We align your SEO with your LinkedIn presence - ensuring brand consistency across the channels your B2B buyers use most." },
  { icon: <BarChart2 size={22} />, title: "Pipeline Attribution", desc: "We track organic leads through your CRM to measure SEO's contribution to pipeline and closed revenue - not just top-of-funnel metrics." },
];

const faqs = [
  { q: "Does SEO work for B2B companies in Dubai?", a: "Yes - and it's underutilised by most Dubai B2B companies, making it a significant competitive advantage for early movers. B2B buyers in the UAE do extensive Google research before reaching out. Being present at every stage of that research journey - from awareness to vendor comparison - puts you inside the buying process before the RFP is issued." },
  { q: "How do you measure B2B SEO ROI?", a: "We track organic leads (form fills, demo requests, calls), pipeline value generated from organic leads (via CRM integration where available), and closed revenue attributed to organic. Monthly reports map every organic conversion to a keyword, page, and business value - no vanity metrics." },
  { q: "What about startups - is SEO right for an early-stage business?", a: "Yes, but with the right strategy. Startups should focus on long-tail, high-intent keywords where they can rank quickly, invest in category-defining content to own informational search, and build domain authority systematically. Our Startup SEO package is designed exactly for this stage." },
  { q: "Can SEO generate leads in a niche B2B market?", a: "Especially in niche markets. Lower search volume means less competition, faster rankings, and higher lead quality - because anyone searching for your specific service is already a qualified prospect. A B2B company that ranks for 10 niche keywords with 200 monthly searches each can generate 20+ qualified leads per month." },
];

export function B2BSEO() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("B2B SEO Agency Dubai - Startup & Enterprise SEO UAE | SEODXB")}</title>
        <meta name="description" content="B2B SEO in Dubai for startups, scale-ups, and enterprise. Generate qualified leads from targeted organic search strategies." />
        <link rel="canonical" href="https://seodxb.com/b2b-seo" />
        <meta property="og:title" content="B2B SEO Agency Dubai | Startup & Enterprise SEO | SEODXB" />
        <meta property="og:description" content="SEO built for B2B. Target decision-maker keywords, rank solution pages, and generate qualified pipeline from organic search in Dubai and across the UAE." />
        <meta property="og:url" content="https://seodxb.com/b2b-seo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "B2B SEO Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "B2B SEO for Dubai startups and enterprises: decision-maker keyword targeting, solution page optimisation, and pipeline-attributed lead generation.",
          "areaServed": ["Dubai", "UAE", "Worldwide"],
          "url": "https://seodxb.com/b2b-seo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">B2B & Startup SEO</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  SEO That Fills Your B2B Pipeline.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  B2B buyers in Dubai Google their vendors before they ever pick up the phone. We make sure your solution ranks at every stage of their research - so you're in the room before the RFP lands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <a href="/contact">Start B2B SEO Campaign <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <a href="/pricing">View Pricing</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="B2B SEO funnel showing awareness to conversion stages: 847 organic visitors at top, 124 qualified leads in middle, 18 demo bookings, and 7 closed deals at bottom - demonstrating B2B pipeline generation from SEO"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="340" rx="16" fill="#F8FAFC" />
                  <text x="240" y="32" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0F172A">B2B SEO Pipeline - This Month</text>
                  {/* Funnel stages */}
                  {[
                    { label: "Organic Visitors", value: "847", color: "#DBEAFE", border: "#93C5FD", text: "#1D4ED8", w: 420, x: 30 },
                    { label: "Qualified Leads", value: "124", color: "#D1FAE5", border: "#6EE7B7", text: "#065F46", w: 300, x: 90 },
                    { label: "Demo Requests", value: "18", color: "#FEF3C7", border: "#FCD34D", text: "#92400E", w: 200, x: 140 },
                    { label: "Deals Closed", value: "7", color: "#FCE7F3", border: "#F9A8D4", text: "#9D174D", w: 120, x: 180 },
                  ].map((stage, i) => (
                    <g key={i}>
                      <rect x={stage.x} y={54 + i * 60} width={stage.w} height={44} rx="8"
                        fill={stage.color} stroke={stage.border} strokeWidth="1.5" />
                      <text x={stage.x + 16} y={80 + i * 60} fontSize="10" fill={stage.text} fontWeight="bold">{stage.label}</text>
                      <text x={stage.x + stage.w - 16} y={80 + i * 60} textAnchor="end" fontSize="20" fontWeight="black" fill={stage.text}>{stage.value}</text>
                    </g>
                  ))}
                  {/* Arrows between funnel stages */}
                  {[1,2,3].map(i => (
                    <text key={i} x="240" y={106 + i * 60 - 16} textAnchor="middle" fontSize="14" fill="#94A3B8">↓</text>
                  ))}
                  {/* Revenue metric */}
                  <rect x="30" y="302" width="420" height="30" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="240" y="321" textAnchor="middle" fontSize="11" fill="#0F172A">
                    <tspan fontWeight="bold">AED 2.4M</tspan>
                    <tspan fill="#64748B"> pipeline attributed to organic SEO this month</tspan>
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Segments */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">We Work With</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["SaaS & Tech", "Professional Services", "Logistics & Supply Chain", "Manufacturing", "Consulting Firms", "Financial Services", "Healthcare B2B", "Construction & Facilities", "Startups (Series A+)", "Free Zone Businesses"].map(seg => (
                <span key={seg} className="bg-slate-50 text-gray-700 text-sm px-4 py-2 rounded-full border border-slate-200">{seg}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">B2B SEO Services</h2>
            <p className="text-lg text-muted-foreground">Built around buyer journeys, not just keyword volumes.</p>
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

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">B2B SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Put Your B2B Brand In Front of Decision-Makers</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Get a free B2B SEO audit. We'll identify the decision-maker queries you're missing and map out your pipeline opportunity.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <a href="/contact">Get B2B SEO Strategy <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
