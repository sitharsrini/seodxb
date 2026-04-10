import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Building2, Search, MapPin, TrendingUp, Globe, BarChart2, ArrowRight } from "lucide-react";

const services = [
  { icon: <Search size={22} />, title: "Property Keyword Research", desc: "We target buyer and renter intent keywords — 'villas for sale in Palm Jumeirah', 'off-plan apartments Dubai' — matching search demand to your listings." },
  { icon: <Building2 size={22} />, title: "Development & Project Pages", desc: "SEO-optimised landing pages for every development, tower, or community you sell — each targeting specific location, property type, and buyer stage." },
  { icon: <MapPin size={22} />, title: "Area & Community Pages", desc: "Dedicated pages for Dubai Marina, Downtown, JVC, JBR, and every neighbourhood you operate in — the pages buyers use to research locations." },
  { icon: <TrendingUp size={22} />, title: "Agent & Agency Profile SEO", desc: "Agent profile pages optimised to rank for personal name searches — the digital calling card that wins mandate-ready clients." },
  { icon: <Globe size={22} />, title: "International Buyer Targeting", desc: "Multilingual SEO targeting UK, European, Russian, Indian, and Chinese buyer audiences who research Dubai property from abroad." },
  { icon: <BarChart2 size={22} />, title: "Property Schema & Rich Results", desc: "RealEstateListing schema, FAQ schema, and breadcrumb markup that get your listings rich snippets in Google search results." },
];

const faqs = [
  { q: "How competitive is real estate SEO in Dubai?", a: "Extremely competitive. Property Finder, Bayut, and Dubizzle dominate high-volume queries. However, long-tail property searches ('2-bedroom off-plan in Sobha Hartland 2'), neighbourhood research queries, and developer brand searches all offer strong ranking opportunities for individual agencies and developers." },
  { q: "Can you help rank against Property Finder and Bayut?", a: "We can't outrank portals for their own brand terms, but we can rank alongside them for specific developments, communities, and long-tail buyer queries. The strategy is to capture the 60% of property searches that portals don't rank for — neighbourhood guides, project-specific pages, and buyer journey content." },
  { q: "Can you target international property buyers?", a: "Yes. We build multilingual landing pages targeting buyers from the UK, India, Russia, China, and Europe. This includes geo-targeted content, hreflang tags, and link building from international property media — the same strategy used by Dubai's largest developers." },
  { q: "How do you measure success for real estate SEO?", a: "We track: rankings for target property keywords, organic form submissions and valuation requests, organic phone calls (via call tracking), and enquiry quality (lead scoring). The goal is qualified buyer and seller enquiries — not just traffic." },
  { q: "Do you work with developers or agencies?", a: "Both. Developers need project-level SEO for off-plan launches. Agencies need area pages, agent profiles, and a secondary search channel alongside portals. We've built SEO campaigns for boutique agencies and large developer teams." },
];

export function RealEstateSEO() {
  return (
    <>
      <Helmet>
        <title>Real Estate SEO Dubai — Property SEO Agency UAE | SEODXB</title>
        <meta name="description" content="Real estate SEO services in Dubai. Rank your property listings, development pages, and agency website on Google to attract serious buyers and renters." />
        <link rel="canonical" href="https://seodxb.com/real-estate-seo" />
        <meta property="og:title" content="Real Estate SEO Dubai | Property SEO Agency UAE | SEODXB" />
        <meta property="og:description" content="SEO for Dubai real estate agencies and developers. Rank for property searches, attract international buyers, and reduce portal dependence." />
        <meta property="og:url" content="https://seodxb.com/real-estate-seo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Real Estate SEO Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Real estate SEO for Dubai agencies and developers: property keyword targeting, development pages, area guides, and international buyer campaigns.",
          "areaServed": ["Dubai", "UAE"],
          "url": "https://seodxb.com/real-estate-seo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Real Estate SEO</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  Property SEO That Brings Buyers to You.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  Over 80% of Dubai property searches start online. We put your agency, developments, and listings in front of buyers and investors the moment they search — without paying for every click.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <Link href="/contact">Get Property SEO Audit <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 360" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="Real estate SEO results showing Google search for Dubai villas with property listings ranked at positions 1 through 3, featuring location maps and enquiry metrics"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="360" rx="16" fill="white" />
                  {/* Search */}
                  <rect x="16" y="16" width="448" height="40" rx="20" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <text x="44" y="40" fontSize="20" fill="#4285F4">G</text>
                  <text x="70" y="40" fontSize="12" fill="#5F6368">villas for sale Palm Jumeirah Dubai</text>
                  {/* Map pack */}
                  <rect x="16" y="68" width="290" height="130" rx="10" fill="#E8F4FD" stroke="#BFDBFE" strokeWidth="1" />
                  <text x="30" y="86" fontSize="9" fontWeight="bold" fill="#1D4ED8">📍 Top Properties Near Palm Jumeirah</text>
                  {[
                    { name: "Luxury Villa — SEODXB Client", price: "AED 8.5M", beds: "5 BR" },
                    { name: "Beachfront Residence", price: "AED 12M", beds: "6 BR" },
                    { name: "Palm View Mansion", price: "AED 15M", beds: "7 BR" },
                  ].map((prop, i) => (
                    <g key={i}>
                      <rect x="26" y={96 + i * 32} width="268" height="26" rx="6" fill={i === 0 ? "#DBEAFE" : "white"} stroke="#E2E8F0" strokeWidth="1" />
                      <rect x="26" y={96 + i * 32} width="30" height="26" rx="6" fill={i === 0 ? "#2563EB" : "#94A3B8"} opacity="0.3" />
                      <text x="41" y={113 + i * 32} textAnchor="middle" fontSize="8" fill={i === 0 ? "#2563EB" : "#64748B"}>{i + 1}</text>
                      <text x="62" y={109 + i * 32} fontSize="8" fontWeight={i === 0 ? "bold" : "normal"} fill="#0F172A">{prop.name}</text>
                      <text x="62" y={119 + i * 32} fontSize="8" fill="#16A34A">{prop.price} · {prop.beds}</text>
                    </g>
                  ))}
                  {/* Map thumbnail */}
                  <rect x="316" y="68" width="148" height="130" rx="10" fill="#E2F5E0" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="390" y="120" textAnchor="middle" fontSize="10" fill="#374151">Palm</text>
                  <text x="390" y="134" textAnchor="middle" fontSize="10" fill="#374151">Jumeirah</text>
                  <circle cx="390" cy="152" r="10" fill="#EA4335" />
                  <text x="390" y="156" textAnchor="middle" fontSize="8" fill="white">✓</text>
                  {/* Stats */}
                  <rect x="16" y="210" width="140" height="58" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="86" y="234" textAnchor="middle" fontSize="20" fontWeight="black" fill="#16A34A">127</text>
                  <text x="86" y="250" textAnchor="middle" fontSize="9" fill="#64748B">Enquiries / month</text>
                  <text x="86" y="262" textAnchor="middle" fontSize="8" fill="#94A3B8">from organic search</text>
                  <rect x="168" y="210" width="140" height="58" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <text x="238" y="234" textAnchor="middle" fontSize="20" fontWeight="black" fill="#2563EB">43%</text>
                  <text x="238" y="250" textAnchor="middle" fontSize="9" fill="#64748B">Int'l Buyer Traffic</text>
                  <text x="238" y="262" textAnchor="middle" fontSize="8" fill="#94A3B8">UK, India, Russia</text>
                  <rect x="320" y="210" width="144" height="58" rx="8" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1" />
                  <text x="392" y="234" textAnchor="middle" fontSize="20" fontWeight="black" fill="#EA580C">6.2x</text>
                  <text x="392" y="250" textAnchor="middle" fontSize="9" fill="#64748B">ROI vs Portals</text>
                  <text x="392" y="262" textAnchor="middle" fontSize="8" fill="#94A3B8">after 12 months</text>
                  {/* Areas */}
                  <rect x="16" y="282" width="448" height="62" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="240" y="300" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F172A">Communities Covered</text>
                  {["Palm Jumeirah", "Dubai Marina", "Downtown", "JVC", "JBR", "DIFC", "Business Bay"].map((area, i) => (
                    <rect key={i} x={22 + (i % 4) * 110} y={307 + Math.floor(i / 4) * 22} width="100" height="14" rx="7" fill="#DBEAFE" />
                  ))}
                  {["Palm Jumeirah", "Dubai Marina", "Downtown", "JVC", "JBR", "DIFC", "Business Bay"].map((area, i) => (
                    <text key={i} x={72 + (i % 4) * 110} y={318 + Math.floor(i / 4) * 22} textAnchor="middle" fontSize="7" fill="#1D4ED8">{area}</text>
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Real Estate SEO Services</h2>
            <p className="text-lg text-muted-foreground">Built for Dubai property agencies, developers, and portals.</p>
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
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Real Estate SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Attract More Property Buyers Online</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Free real estate SEO audit: we'll show you which property searches you're missing and how to capture them.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Get Property SEO Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
