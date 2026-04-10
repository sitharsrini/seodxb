import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, MapPin, Star, Globe, Building2, BarChart2, ArrowRight } from "lucide-react";

const localServices = [
  { icon: <Building2 size={22} />, title: "Google Business Profile", desc: "Full optimisation of your GBP listing — category selection, service areas, photos, posts, Q&A, and review strategy." },
  { icon: <MapPin size={22} />, title: "Local Citations & NAP", desc: "Consistent Name, Address, Phone across 50+ directories. Inconsistent citations confuse Google and suppress local rankings." },
  { icon: <Star size={22} />, title: "Review Management", desc: "Strategies to ethically earn more positive reviews and respond professionally to all feedback — a direct local ranking signal." },
  { icon: <Globe size={22} />, title: "Local Landing Pages", desc: "Geo-targeted pages for each location or neighbourhood you serve, with unique content that Google can rank locally." },
  { icon: <BarChart2 size={22} />, title: "Local Schema Markup", desc: "LocalBusiness schema with your exact address, phone, hours, and geo-coordinates — the data Google uses for map listings." },
  { icon: <CheckCircle2 size={22} />, title: "Local Link Building", desc: "Citations and backlinks from local chambers, directories, newspapers, and community sites that boost local authority." },
];

const faqs = [
  { q: "What is Local SEO?", a: "Local SEO is the process of optimising a business's online presence to appear in local search results — specifically the Google Map Pack (the 3 map listings shown for searches with local intent like 'SEO agency Dubai' or 'plumber near me'). It involves optimising your Google Business Profile, ensuring consistent citations, earning local backlinks, and creating locally relevant content." },
  { q: "How is Local SEO different from standard SEO?", a: "Standard SEO targets organic rankings in the 10 blue links. Local SEO specifically targets the Google Map Pack and the local knowledge panel. Local SEO relies more heavily on your Google Business Profile, reviews, and local citations — factors that don't affect standard organic rankings much. The two strategies complement each other: a strong on-page SEO foundation makes local SEO more effective." },
  { q: "How long does Local SEO take to show results?", a: "Local SEO typically shows results faster than standard SEO. Most businesses see improvement in their Map Pack rankings within 2–8 weeks of a full optimisation. Google Business Profile changes can have an effect within days. Building consistent citations and reviews takes longer but compounds significantly over time." },
  { q: "Do I need a physical address to do Local SEO?", a: "A physical address (or service-area setup in Google Business Profile) is required to appear in the Map Pack. Service-area businesses (those that travel to customers) can hide their address in GBP but still rank locally for their service areas. Virtual offices and PO boxes violate Google's guidelines and can get your listing suspended." },
  { q: "Can you help with multiple locations?", a: "Yes. We manage multi-location local SEO for businesses across Dubai, UAE, and internationally. Each location gets its own Google Business Profile optimisation, local landing page, and citation strategy. We have experience scaling local SEO from 2 to 200+ locations." },
];

const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Al Ain"];

export function LocalSEO() {
  return (
    <>
      <Helmet>
        <title>Local SEO Services Dubai — Google Business Profile & Map Pack Ranking | SEODXB</title>
        <meta name="description" content="Local SEO services in Dubai and across the UAE. Google Business Profile optimisation, Map Pack rankings, local citations, and review management. Serving UAE businesses globally." />
        <link rel="canonical" href="https://seodxb.com/local-seo" />
        <meta property="og:title" content="Local SEO Services Dubai | SEODXB" />
        <meta property="og:description" content="Dominate Google's Map Pack in Dubai and across the UAE. Full local SEO: GBP, citations, reviews, local landing pages, and schema markup." />
        <meta property="og:url" content="https://seodxb.com/local-seo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Local SEO",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Local SEO for Dubai and UAE businesses: Google Business Profile, Map Pack rankings, local citations, reviews, and geo-targeted landing pages.",
          "areaServed": ["Dubai", "Abu Dhabi", "UAE", "Worldwide"],
          "url": "https://seodxb.com/local-seo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-950 text-white py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Local SEO</span>
              <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
                Own the Map Pack.<br />
                <span className="text-[#C8FF00]">Win Local Customers.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                When someone searches for your service in Dubai — or any city you serve — we make sure your business appears in the top 3 map results, above your competitors and below the ads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-8" asChild>
                  <Link href="/contact">Boost My Local Visibility <ArrowRight size={16} className="ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-10 bg-slate-900 text-white border-b border-slate-800">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">We Cover Across the UAE & Beyond</p>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((c) => (
                <span key={c} className="bg-slate-800 text-white/80 text-sm px-4 py-2 rounded-full border border-slate-700">{c}</span>
              ))}
              <span className="bg-primary/20 text-primary text-sm px-4 py-2 rounded-full border border-primary/30">+ Any Location Worldwide</span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Local SEO Services</h2>
            <p className="text-lg text-muted-foreground">Everything you need to dominate local search in your city.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {localServices.map((s, i) => (
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

        {/* Map Pack explainer */}
        <section className="py-24 bg-slate-950 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-heading font-bold mb-6 text-center">Why the Map Pack Is Worth Fighting For</h2>
            <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-12">
              The Google Map Pack captures 44% of all clicks for local searches — more than the entire first page of organic results combined.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { stat: "46%", desc: "of all Google searches have local intent" },
                { stat: "76%", desc: "of people who search locally on mobile visit a business within 24 hours" },
                { stat: "28%", desc: "of local searches result in a purchase" },
                { stat: "Top 3", desc: "Map Pack positions get 70%+ of local search clicks" },
              ].map((s, i) => (
                <div key={i} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <p className="text-4xl font-black text-[#C8FF00] mb-2">{s.stat}</p>
                  <p className="text-white/70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Local SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Rank #1 in Your City</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Get a free local SEO audit. We'll show you exactly why competitors outrank you in the Map Pack — and how to fix it.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Get My Local SEO Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
