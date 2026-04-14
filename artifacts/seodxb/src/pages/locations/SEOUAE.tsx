import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Globe, BarChart2, Search, MapPin, Zap, ArrowRight } from "lucide-react";

const emirates = [
  { name: "Dubai", desc: "Our HQ market. Hyper-competitive across real estate, hospitality, finance, and services." },
  { name: "Abu Dhabi", desc: "Capital market with strong Arabic-language search and enterprise buyer base." },
  { name: "Sharjah", desc: "Growing SMB market with lower competition and fast ranking opportunities." },
  { name: "Ajman", desc: "Emerging business hub with untapped SEO potential in manufacturing and trade." },
  { name: "Ras Al Khaimah", desc: "Tourism and industrial growth driving new search demand year on year." },
  { name: "Fujairah & UAQ", desc: "Port cities with niche B2B and logistics SEO opportunities." },
];

const services = [
  { icon: <Search size={22} />, title: "UAE-Wide Keyword Strategy", desc: "We map keywords across all seven emirates - identifying where your customers search and what intent drives them to buy." },
  { icon: <MapPin size={22} />, title: "Multi-Emirate Local SEO", desc: "Separate GBP profiles, local landing pages, and citation networks for each emirate you operate in." },
  { icon: <Globe size={22} />, title: "Bilingual SEO (EN + AR)", desc: "Dual-language content strategy targeting both English expat and Arabic national audiences across the UAE." },
  { icon: <Zap size={22} />, title: "Technical SEO Foundation", desc: "Hreflang, site speed, crawlability, and schema across all your UAE location pages - built for multi-location businesses." },
  { icon: <BarChart2 size={22} />, title: "Nationwide Link Building", desc: "Backlinks from UAE national media (Gulf News, Khaleej Times, The National), industry bodies, and free zone directories." },
  { icon: <CheckCircle2 size={22} />, title: "GEO + AEO for UAE", desc: "Appear in Google AI Overviews and ChatGPT citations for UAE-relevant queries - the fastest-growing new search channel in the region." },
];

const faqs = [
  { q: "Can you manage SEO across multiple UAE locations?", a: "Yes - this is one of our specialisms. We manage multi-location SEO for businesses with 2 to 200+ locations across the UAE. Each location gets its own Google Business Profile, local landing page, and citation strategy, all managed under a unified SEO framework." },
  { q: "Should I target Arabic keywords for UAE SEO?", a: "Yes for most businesses. Arabic-language searches in the UAE have significantly less competition than English equivalents, and Arabic speakers represent a large, underserved audience. We recommend bilingual SEO for any business serving UAE nationals and the GCC market." },
  { q: "Which UAE emirate has the most SEO opportunity?", a: "Dubai has the highest search volume but the most competition. Abu Dhabi has large untapped search demand in Arabic. Sharjah, RAK, and the Northern Emirates have low competition and fast ranking potential. We tailor the strategy to where your opportunity is greatest." },
  { q: "Is UAE SEO different from international SEO?", a: "The UAE market has unique characteristics: Google.ae as the dominant engine, high mobile search rates, bilingual audience, and Google My Business critical for local conversions. International SEO techniques still apply, but local market knowledge is essential to get the most out of any UAE campaign." },
];

export function SEOUAE() {
  return (
    <>
      <Helmet>
        <title>SEO Agency UAE - SEO Services Across All 7 Emirates | SEODXB</title>
        <meta name="description" content="UAE-wide SEO services covering Dubai, Abu Dhabi, Sharjah, and all emirates. Bilingual English & Arabic SEO, multi-location strategy, and AI search optimisation." />
        <link rel="canonical" href="https://seodxb.com/seo-uae" />
        <meta property="og:title" content="SEO Agency UAE - All 7 Emirates | SEODXB" />
        <meta property="og:description" content="Complete UAE SEO coverage. Multi-emirate strategy, bilingual Arabic/English targeting, and AI search visibility across Dubai, Abu Dhabi, and beyond." />
        <meta property="og:url" content="https://seodxb.com/seo-uae" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "SEODXB - SEO Agency UAE",
          "description": "UAE-wide SEO services across all seven emirates. Bilingual SEO, multi-location strategy, and AI search optimisation.",
          "url": "https://seodxb.com/seo-uae",
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" }
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">SEO UAE</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  SEO Across All 7 Emirates. One Unified Strategy.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  Whether you operate in one emirate or all seven, SEODXB delivers a coordinated UAE-wide SEO strategy - with bilingual targeting, multi-location Google Business Profiles, and national authority building.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <Link href="/contact">Get UAE SEO Strategy <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="UAE map showing SEO coverage across all 7 emirates with green checkmarks: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="340" rx="16" fill="#F8FAFC" />
                  <text x="240" y="36" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0F172A">UAE SEO Coverage</text>
                  {/* UAE outline simplified */}
                  <rect x="40" y="60" width="400" height="230" rx="12" fill="#E2E8F0" />
                  {/* Water */}
                  <rect x="40" y="200" width="400" height="90" rx="0" fill="#BFDBFE" opacity="0.4" />
                  <rect x="40" y="280" width="400" height="10" rx="0" fill="#BFDBFE" opacity="0.6" />
                  {/* Land mass simplified */}
                  <path d="M80 200 L80 140 L200 100 L380 80 L420 120 L440 180 L380 220 L200 240 Z" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1.5" />
                  {/* Emirates labels with pins */}
                  {[
                    { name: "Dubai", x: 320, y: 180, color: "#2563EB" },
                    { name: "Abu Dhabi", x: 160, y: 190, color: "#16A34A" },
                    { name: "Sharjah", x: 340, y: 140, color: "#7C3AED" },
                    { name: "Ajman", x: 360, y: 120, color: "#DC2626" },
                    { name: "RAK", x: 380, y: 95, color: "#EA580C" },
                    { name: "Fujairah", x: 410, y: 150, color: "#0891B2" },
                  ].map((e, i) => (
                    <g key={i}>
                      <circle cx={e.x} cy={e.y} r="14" fill={e.color} opacity="0.15" />
                      <circle cx={e.x} cy={e.y} r="7" fill={e.color} />
                      <text x={e.x} y={e.y + 4} textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">✓</text>
                      <rect x={e.x - 22} y={e.y + 10} width="44" height="13" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                      <text x={e.x} y={e.y + 20} textAnchor="middle" fontSize="7" fill="#0F172A" fontWeight="bold">{e.name}</text>
                    </g>
                  ))}
                  {/* Stats */}
                  <rect x="40" y="62" width="120" height="40" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="100" y="78" textAnchor="middle" fontSize="16" fontWeight="black" fill="#2563EB">7</text>
                  <text x="100" y="93" textAnchor="middle" fontSize="8" fill="#64748B">Emirates Covered</text>
                  <rect x="320" y="62" width="120" height="40" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="380" y="78" textAnchor="middle" fontSize="16" fontWeight="black" fill="#16A34A">EN+AR</text>
                  <text x="380" y="93" textAnchor="middle" fontSize="8" fill="#64748B">Bilingual SEO</text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emirates grid */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-heading font-bold mb-10 text-center">Every Emirate, Covered</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {emirates.map((e, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <p className="font-bold text-gray-900">{e.name}</p>
                  </div>
                  <p className="text-sm text-gray-500">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">UAE SEO Services</h2>
            <p className="text-lg text-muted-foreground">National reach with hyper-local precision across every UAE market.</p>
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
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">UAE SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">One Agency. Whole UAE.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Get a free multi-emirate SEO audit and see exactly where your biggest ranking opportunities are across the UAE.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Get My UAE SEO Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
