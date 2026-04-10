import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Globe, Languages, BarChart2, Search, Map, ArrowRight } from "lucide-react";

const intlServices = [
  { icon: <Globe size={22} />, title: "Hreflang Implementation", desc: "Correct hreflang tags signal to Google which version of your content targets which country and language — preventing duplicate content penalties." },
  { icon: <Languages size={22} />, title: "International Keyword Research", desc: "Keywords vary significantly by country and language. We research search volumes and intent for each target market independently." },
  { icon: <Map size={22} />, title: "Country Targeting Strategy", desc: "Should you use ccTLDs, subdomains, or subdirectories? We advise the right structure for your goals, team size, and budget." },
  { icon: <Search size={22} />, title: "Global Content Strategy", desc: "Localised content for each market — not just translated, but adapted for cultural relevance, local idioms, and market-specific search intent." },
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
  { q: "What is an hreflang tag and why does it matter?", a: "Hreflang is an HTML attribute that tells search engines which language and country a page targets. Without correct hreflang implementation, Google may show the wrong version of your page to international users — for example, showing your US English page to French speakers in France. Incorrect hreflang is one of the most common and costly international SEO mistakes." },
  { q: "Should I use ccTLDs, subdomains, or subdirectories for international SEO?", a: "ccTLDs (example.co.uk) send the strongest geographic signal to Google and users, but require separate domain authority building. Subdirectories (example.com/uk/) share the main domain's authority and are easiest to manage. Subdomains (uk.example.com) are a middle ground. We recommend subdirectories for most businesses, ccTLDs for strong brand investments in key markets." },
  { q: "Do you offer content translation as part of international SEO?", a: "We partner with native-speaker translators and locally-based content writers in each market. We go beyond translation — content is adapted for local search intent, cultural context, and market-specific keyword opportunities. Machine translation alone is not sufficient for international SEO." },
  { q: "We already have traffic from international markets. Do we still need international SEO?", a: "Yes, especially if you're not actively targeting those markets. You're likely capturing a fraction of the available traffic. Proper international SEO — with localised content, correct hreflang, and market-specific keyword targeting — can typically 3–5× the organic traffic from markets you're already incidentally appearing in." },
];

export function InternationalSEO() {
  return (
    <>
      <Helmet>
        <title>International SEO Services — Global Organic Traffic for Businesses Worldwide | SEODXB</title>
        <meta name="description" content="International SEO: hreflang, multi-country strategy, global keyword research, and localised content. Rank in Google across the UAE, UK, US, Europe, and beyond." />
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
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">International SEO</span>
              <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                Rank in Every Market<br />You Serve. Anywhere.
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Your customers are global. Your SEO should be too. We build the technical infrastructure and content strategy to rank your business in every country and language that matters to your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                  <Link href="/contact">Plan My Global SEO Strategy <ArrowRight size={16} className="ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
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
                "Based in Dubai — a global crossroads — gives us natural fluency in multi-market, cross-cultural business contexts.",
                "We serve clients in 20+ countries simultaneously, managing complex multi-market SEO campaigns from a single team.",
                "Our team includes native-speaker content writers and SEO specialists for Arabic, English, French, German, and more.",
                "We combine international SEO with AEO and GEO — your brand ranks on traditional search AND in AI engines globally.",
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
              <Link href="/contact">Start My Global SEO Strategy <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
