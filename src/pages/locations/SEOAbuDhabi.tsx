import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, MapPin, Globe, BarChart2, Search, TrendingUp, ArrowRight } from "lucide-react";
import { clampTitle } from "@/lib/title";

const services = [
  { icon: <Search size={22} />, title: "Abu Dhabi Keyword Research", desc: "We identify the exact search terms Abu Dhabi customers use - from Khalidiyah to Yas Island - mapping intent to every page on your site." },
  { icon: <MapPin size={22} />, title: "Local SEO Abu Dhabi", desc: "Google Business Profile setup, Abu Dhabi directory citations, and neighbourhood-level landing pages that dominate the local Map Pack." },
  { icon: <TrendingUp size={22} />, title: "On-Page Optimisation", desc: "Every meta tag, heading, and content block optimised for Abu Dhabi's competitive market - plus bilingual targeting for Arabic-speaking audiences." },
  { icon: <Globe size={22} />, title: "Government & Enterprise SEO", desc: "Abu Dhabi has a large government and enterprise sector. We understand the decision-making journey and build SEO that reaches the right audience." },
  { icon: <BarChart2 size={22} />, title: "Link Authority Building", desc: "Backlinks from Abu Dhabi-specific news sites, ADNEC, ADGM directories, and government-linked publications that build local trust." },
  { icon: <CheckCircle2 size={22} />, title: "AI Search Optimisation", desc: "AEO and GEO strategies that put your Abu Dhabi business in featured snippets and AI-generated answers in ChatGPT, Gemini, and Google AI Overviews." },
];

const faqs = [
  { q: "Is the Abu Dhabi SEO market different from Dubai?", a: "Yes. Abu Dhabi's search landscape has a higher proportion of Arabic-language searches, a stronger government and enterprise buyer base, and less competition in many niches compared to Dubai. This means faster ranking opportunities in Abu Dhabi for businesses that invest in SEO early." },
  { q: "Do you have experience with Abu Dhabi government or free-zone clients?", a: "Yes. We work with businesses in ADGM, Masdar City, Yas Creative Hub, and Khalifa Industrial Zone. We understand the procurement and digital visibility needs of regulated and government-adjacent businesses in the emirate." },
  { q: "Can you target both English and Arabic searches in Abu Dhabi?", a: "Absolutely. Abu Dhabi has a higher percentage of Arabic-first searches than Dubai. We offer bilingual keyword research and content strategies targeting both English and Arabic speakers to maximise your market coverage." },
  { q: "How long does SEO take in Abu Dhabi?", a: "Similar to Dubai - 3–6 months for meaningful ranking improvements, 6–12 months for significant organic traffic growth. Abu Dhabi niches with less incumbent competition can see results faster." },
];

export function SEOAbuDhabi() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("SEO Agency Abu Dhabi - SEO Company & Services in Abu Dhabi UAE | SEODXB")}</title>
        <meta name="description" content="Expert SEO services in Abu Dhabi: local SEO, keyword research, on-page optimisation, and Google Map Pack rankings." />
        <link rel="canonical" href="https://seodxb.com/seo-abu-dhabi" />
        <meta property="og:title" content="SEO Agency Abu Dhabi | SEODXB" />
        <meta property="og:description" content="Abu Dhabi SEO services that drive first-page rankings, organic traffic, and measurable leads. Bilingual English & Arabic SEO strategies." />
        <meta property="og:url" content="https://seodxb.com/seo-abu-dhabi" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "SEODXB - SEO Agency Abu Dhabi",
          "description": "SEO services for Abu Dhabi businesses: local SEO, keyword research, on-page optimisation, and AI search visibility.",
          "url": "https://seodxb.com/seo-abu-dhabi",
          "areaServed": { "@type": "City", "name": "Abu Dhabi" },
          "address": { "@type": "PostalAddress", "addressLocality": "Abu Dhabi", "addressCountry": "AE" }
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">SEO Abu Dhabi</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  SEO Services Built for Abu Dhabi's Market.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  Abu Dhabi has unique search behaviour, less competition in key niches, and a strong Arabic-language audience. We build SEO strategies that dominate both English and Arabic search in the capital.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <a href="/contact">Get Free Abu Dhabi SEO Audit <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <a href="/pricing">View Pricing</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="Abu Dhabi skyline illustration with Google search results overlay showing SEO rankings for Abu Dhabi businesses in both English and Arabic"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="340" rx="16" fill="#F8FAFC" />
                  {/* Abu Dhabi skyline silhouette */}
                  <rect x="0" y="200" width="480" height="140" rx="0" fill="#E2E8F0" />
                  <rect x="0" y="196" width="480" height="4" fill="#CBD5E1" />
                  {/* Buildings */}
                  <rect x="20" y="140" width="40" height="60" rx="2" fill="#CBD5E1" />
                  <rect x="70" y="110" width="30" height="90" rx="2" fill="#94A3B8" />
                  <rect x="110" y="130" width="50" height="70" rx="2" fill="#CBD5E1" />
                  {/* Etihad Tower style */}
                  <rect x="170" y="80" width="28" height="120" rx="2" fill="#64748B" />
                  <rect x="173" y="70" width="22" height="14" rx="2" fill="#475569" />
                  <rect x="208" y="100" width="35" height="100" rx="2" fill="#94A3B8" />
                  <rect x="253" y="120" width="25" height="80" rx="2" fill="#CBD5E1" />
                  <rect x="288" y="90" width="40" height="110" rx="2" fill="#64748B" />
                  <rect x="338" y="130" width="30" height="70" rx="2" fill="#94A3B8" />
                  <rect x="378" y="115" width="45" height="85" rx="2" fill="#CBD5E1" />
                  <rect x="433" y="140" width="35" height="60" rx="2" fill="#94A3B8" />
                  {/* Search results overlay */}
                  <rect x="40" y="16" width="290" height="120" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <rect x="52" y="28" width="200" height="28" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="70" y="46" fontSize="11" fill="#5F6368">SEO company Abu Dhabi</text>
                  {/* Result 1 */}
                  <rect x="52" y="66" width="265" height="30" rx="6" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="64" y="82" fontSize="9" fontWeight="bold" fill="#1D4ED8">SEODXB - Abu Dhabi SEO Agency</text>
                  <text x="64" y="91" fontSize="8" fill="#F59E0B">★★★★★</text>
                  <text x="100" y="91" fontSize="8" fill="#64748B">4.9 · SEO Agency</text>
                  {/* Arabic result */}
                  <rect x="52" y="104" width="265" height="24" rx="6" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <text x="64" y="119" fontSize="9" fill="#1D4ED8">شركة SEO في أبوظبي - SEODXB</text>
                  {/* Abu Dhabi badge */}
                  <rect x="345" y="24" width="100" height="54" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="395" y="46" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F172A">Abu Dhabi</text>
                  <text x="395" y="60" textAnchor="middle" fontSize="9" fill="#64748B">UAE Capital</text>
                  <text x="395" y="72" textAnchor="middle" fontSize="8" fill="#22C55E">✓ Covered</text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Abu Dhabi SEO Services</h2>
            <p className="text-lg text-muted-foreground">Tailored for Abu Dhabi's multilingual, enterprise-heavy market.</p>
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

        {/* Coverage */}
        <section className="py-12 bg-slate-50 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Abu Dhabi Areas We Cover</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Khalidiyah", "Corniche", "Al Reem Island", "Yas Island", "Saadiyat Island", "ADGM", "Masdar City", "Mussafah", "Khalifa City", "Al Ain"].map(area => (
                <span key={area} className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full border border-slate-200">{area}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Abu Dhabi SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Dominate Abu Dhabi Search Results</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Get a free audit specific to Abu Dhabi's market. We'll identify your ranking opportunities and show you how to outrank the competition.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <a href="/contact">Get My Abu Dhabi SEO Audit <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
