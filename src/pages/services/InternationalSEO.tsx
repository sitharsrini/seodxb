import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Globe, Languages, BarChart2, Search, Map, ArrowRight } from "lucide-react";
import { clampTitle } from "@/lib/title";

const intlServices = [
  { icon: <Globe size={22} />, title: "Hreflang Implementation", desc: "Correct hreflang tags signal to Google which version of your content targets which country and language - preventing duplicate content penalties." },
  { icon: <Languages size={22} />, title: "International Keyword Research", desc: "Keywords vary significantly by country and language. We research search volumes and intent for each target market independently." },
  { icon: <Map size={22} />, title: "Country Targeting Strategy", desc: "Should you use ccTLDs, subdomains, or subdirectories? We advise the right structure for your goals, team size, and budget." },
  { icon: <Search size={22} />, title: "Global Content Strategy", desc: "Localised content for each market - not just translated, but adapted for cultural relevance, local idioms, and market-specific search intent." },
  { icon: <BarChart2 size={22} />, title: "Multi-Market Rank Tracking", desc: "We track rankings separately in each target country, with Google data centres simulated per region so results reflect real local SERPs." },
  { icon: <CheckCircle2 size={22} />, title: "International Technical SEO", desc: "Sitemaps, canonical strategy, URL structures, and crawl budget management optimised for multi-country site architectures." },
];

const markets = [
  { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Egypt" },
  { region: "Europe", countries: "UK, Germany, France, Netherlands, Spain, Italy, Sweden" },
  { region: "North America", countries: "United States, Canada" },
  { region: "Asia Pacific", countries: "Australia, Singapore, India, Japan" },
  { region: "South Asia", countries: "India, Pakistan, Bangladesh, Sri Lanka" },
  { region: "Africa", countries: "South Africa, Nigeria, Kenya, Ghana" },
];

const faqs = [
  { q: "What is International SEO?", a: "International SEO is the process of optimising a website to rank in multiple countries and/or languages. It involves technical configurations (hreflang tags, international URL structures), market-specific keyword research, localised content, and building authority in each target market. It's essential for any business that serves customers across more than one country." },
  { q: "What is an hreflang tag and why does it matter?", a: "Hreflang is an HTML attribute that tells search engines which language and country a page targets. Without correct hreflang implementation, Google may show the wrong version of your page to international users - for example, showing your US English page to French speakers in France. Incorrect hreflang is one of the most common and costly international SEO mistakes." },
  { q: "Should I use ccTLDs, subdomains, or subdirectories for international SEO?", a: "ccTLDs (example.co.uk) send the strongest geographic signal to Google and users, but require separate domain authority building. Subdirectories (example.com/uk/) share the main domain's authority and are easiest to manage. Subdomains (uk.example.com) are a middle ground. We recommend subdirectories for most businesses, ccTLDs for strong brand investments in key markets." },
  { q: "Do you offer content translation as part of international SEO?", a: "We partner with native-speaker translators and locally-based content writers in each market. We go beyond translation - content is adapted for local search intent, cultural context, and market-specific keyword opportunities. Machine translation alone is not sufficient for international SEO." },
  { q: "We already have traffic from international markets. Do we still need international SEO?", a: "Yes, especially if you're not actively targeting those markets. You're likely capturing a fraction of the available traffic. Proper international SEO - with localised content, correct hreflang, and market-specific keyword targeting - can typically 3–5× the organic traffic from markets you're already incidentally appearing in." },
];

export function InternationalSEO() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("International SEO Services - Global Organic Traffic for Businesses Worldwide | SEODXB")}</title>
        <meta name="description" content="International SEO: hreflang, multi-country strategy, global keyword research, and localised content for worldwide reach." />
        <link rel="canonical" href="https://seodxb.com/international-seo" />
        <meta property="og:title" content="International SEO Services | SEODXB" />
        <meta property="og:description" content="Rank in every market you serve. International SEO strategy for hreflang, global keyword research, multi-country site architecture, and localised content." />
        <meta property="og:url" content="https://seodxb.com/international-seo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "International SEO",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "International SEO: hreflang implementation, multi-country strategy, global keyword research, and market-specific content for businesses worldwide.",
          "areaServed": "Worldwide",
          "url": "https://seodxb.com/international-seo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">International SEO</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  Rank in Every Market You Serve. Anywhere.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  Your customers are global. Your SEO should be too. We build the technical infrastructure and content strategy to rank your business in every country and language that matters to your growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <a href="/contact">Plan My Global SEO Strategy <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <a href="/pricing">View Pricing</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg
                  viewBox="0 0 480 360"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  role="img"
                  aria-label="International SEO world map showing connected markets across UAE, UK, US, Europe, India, and Australia with ranking indicators and hreflang language targeting labels for each region"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="480" height="360" rx="16" fill="#F0F9FF" />
                  {/* World map simplified continents */}
                  {/* North America */}
                  <ellipse cx="105" cy="155" rx="72" ry="55" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1" />
                  {/* South America */}
                  <ellipse cx="135" cy="250" rx="40" ry="52" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1" />
                  {/* Europe */}
                  <ellipse cx="232" cy="130" rx="36" ry="30" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1" />
                  {/* Africa */}
                  <ellipse cx="245" cy="230" rx="38" ry="58" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1" />
                  {/* Middle East */}
                  <ellipse cx="302" cy="168" rx="28" ry="22" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1" />
                  {/* Asia */}
                  <ellipse cx="370" cy="150" rx="68" ry="48" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1" />
                  {/* Australia */}
                  <ellipse cx="400" cy="265" rx="44" ry="34" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1" />

                  {/* Connection lines */}
                  <line x1="302" y1="168" x2="232" y2="130" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
                  <line x1="302" y1="168" x2="105" y2="155" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
                  <line x1="302" y1="168" x2="370" y2="150" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
                  <line x1="302" y1="168" x2="400" y2="265" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
                  <line x1="302" y1="168" x2="232" y2="230" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />

                  {/* UAE hub (larger, highlighted) */}
                  <circle cx="302" cy="168" r="14" fill="#2563EB" />
                  <text x="302" y="173" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">UAE</text>
                  <rect x="320" y="156" width="52" height="16" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <text x="346" y="167" textAnchor="middle" fontSize="8" fill="#1D4ED8">Hub ★</text>

                  {/* UK node */}
                  <circle cx="232" cy="122" r="10" fill="#22C55E" />
                  <text x="232" y="126" textAnchor="middle" fontSize="8" fill="white">UK</text>
                  <rect x="214" y="107" width="56" height="14" rx="7" fill="white" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="242" y="117" textAnchor="middle" fontSize="7" fill="#15803D">↑ #3 → #1</text>

                  {/* US node */}
                  <circle cx="100" cy="148" r="10" fill="#22C55E" />
                  <text x="100" y="152" textAnchor="middle" fontSize="8" fill="white">US</text>
                  <rect x="82" y="133" width="56" height="14" rx="7" fill="white" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="110" y="143" textAnchor="middle" fontSize="7" fill="#15803D">↑ #8 → #2</text>

                  {/* India node */}
                  <circle cx="365" cy="188" r="9" fill="#F59E0B" />
                  <text x="365" y="192" textAnchor="middle" fontSize="7" fill="white">IN</text>
                  <rect x="348" y="200" width="50" height="13" rx="6" fill="white" stroke="#FDE68A" strokeWidth="1" />
                  <text x="373" y="210" textAnchor="middle" fontSize="7" fill="#92400E">Growing</text>

                  {/* AU node */}
                  <circle cx="400" cy="265" r="9" fill="#22C55E" />
                  <text x="400" y="269" textAnchor="middle" fontSize="7" fill="white">AU</text>

                  {/* Hreflang indicator */}
                  <rect x="12" y="12" width="200" height="52" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="24" y="28" fontSize="9" fontWeight="bold" fill="#0F172A">Hreflang Tags Active</text>
                  <text x="24" y="42" fontSize="8" fill="#64748B">en-AE · en-GB · en-US</text>
                  <text x="24" y="54" fontSize="8" fill="#64748B">en-AU · en-IN · ar-AE</text>

                  {/* Rankings card */}
                  <rect x="12" y="290" width="456" height="56" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="24" y="308" fontSize="9" fontWeight="bold" fill="#0F172A">Rankings across markets</text>
                  {[
                    { label: "UAE", pos: "#1", color: "#22C55E" },
                    { label: "UK", pos: "#3", color: "#22C55E" },
                    { label: "US", pos: "#5", color: "#F59E0B" },
                    { label: "IN", pos: "#7", color: "#F59E0B" },
                    { label: "AU", pos: "#4", color: "#22C55E" },
                  ].map((m, i) => (
                    <g key={i}>
                      <text x={24 + i * 88} y="328" fontSize="9" fill="#64748B">{m.label}</text>
                      <text x={24 + i * 88} y="342" fontSize="12" fontWeight="bold" fill={m.color}>{m.pos}</text>
                    </g>
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Markets */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-8">Markets We Serve</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {markets.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="font-bold text-primary mb-1">{m.region}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.countries}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Our International SEO Services</h2>
            <p className="text-lg text-muted-foreground">The complete toolkit for sustainable global organic growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {intlServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
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
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Why SEODXB for International SEO</h2>
            <div className="space-y-4">
              {[
                "Based in Dubai - a global crossroads - gives us natural fluency in multi-market, cross-cultural business contexts.",
                "We serve clients in 20+ countries simultaneously, managing complex multi-market SEO campaigns from a single team.",
                "Our team includes native-speaker content writers and SEO specialists for Arabic, English, French, German, and more.",
                "We combine international SEO with AEO and GEO - your brand ranks on traditional search AND in AI engines globally.",
                "No lock-in. Transparent pricing. Monthly reporting that shows traffic, rankings, and conversions broken down by country.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">International SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Go Global?</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Tell us which markets you want to crack. We'll build a strategy that makes your brand visible wherever your customers search.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <a href="/contact">Start My Global SEO Strategy <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
