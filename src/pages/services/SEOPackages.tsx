import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, ArrowRight, Plane, Globe2, Zap } from "lucide-react";
import { clampTitle } from "@/lib/title";

const packages = [
  {
    icon: <Plane size={28} className="text-primary" />,
    name: "STARTUP",
    price: "$999",
    tagline: "New businesses entering Dubai search",
    ideal: "Startups, new websites, early-stage brands",
    features: [
      { text: "Keyword Research & Brand Analysis", included: true },
      { text: "Up to 10–15 pages optimised", included: true },
      { text: "Up to 20 keywords tracked", included: true },
      { text: "GEO & AEO Optimisation", included: true },
      { text: "Monthly ranking & traffic reports", included: true },
      { text: "Technical & Local SEO", included: true },
      { text: "Google Business Profile & Schema", included: true },
      { text: "2 Human-written articles / month", included: true },
      { text: "Up to 75 keywords tracked", included: false },
      { text: "Advanced link building", included: false },
    ],
  },
  {
    icon: <Globe2 size={28} className="text-white" />,
    name: "BUSINESS",
    price: "$2,499",
    tagline: "Established businesses scaling organic growth",
    ideal: "SMBs, agencies, and growing e-commerce",
    featured: true,
    features: [
      { text: "Keyword Research & Brand Analysis", included: true },
      { text: "Up to 50 pages optimised", included: true },
      { text: "Up to 75 keywords tracked", included: true },
      { text: "GEO & AEO Optimisation", included: true },
      { text: "Monthly ranking & traffic reports", included: true },
      { text: "Technical & Local SEO", included: true },
      { text: "Google Business Profile & Schema", included: true },
      { text: "4 Human-written articles / month", included: true },
      { text: "Advanced link building", included: true },
      { text: "Competitor gap monitoring", included: true },
    ],
  },
  {
    icon: <Zap size={28} className="text-primary" />,
    name: "ENTERPRISE",
    price: "Custom",
    tagline: "Large sites with complex SEO requirements",
    ideal: "Enterprises, multi-location, e-commerce 1000+ SKUs",
    features: [
      { text: "Full site keyword architecture", included: true },
      { text: "Unlimited pages in scope", included: true },
      { text: "200+ keywords tracked", included: true },
      { text: "GEO, AEO & International SEO", included: true },
      { text: "Weekly reporting & strategy calls", included: true },
      { text: "Advanced Technical SEO & Dev Support", included: true },
      { text: "Multi-location GBP management", included: true },
      { text: "8+ Human-written articles / month", included: true },
      { text: "Enterprise link building", included: true },
      { text: "Dedicated SEO lead", included: true },
    ],
  },
];

const faqs = [
  { q: "Are your SEO packages monthly retainers or one-time?", a: "All packages are monthly retainers - SEO is an ongoing process, not a one-time fix. There are no long-term lock-in contracts; we work on a rolling monthly basis. You can pause or cancel with 30 days' notice." },
  { q: "What currency are your prices in?", a: "Prices are in USD. AED equivalents are available on request. We accept bank transfers, cards, and have payment options in AED for UAE-based clients." },
  { q: "Can I upgrade my package?", a: "Yes, at any time. Most clients start on Startup or Business and upgrade as their site grows and they see ROI. We pro-rate any upgrade mid-month." },
  { q: "What's included in the 'human-written articles'?", a: "Each article is researched, written, and optimised by our SEO content team - not AI-generated. Articles are 800–2,000 words, fully optimised for target keywords, structured for featured snippet capture, and written in your brand voice. We handle topic research, outline, writing, and on-page optimisation." },
  { q: "How long before I see results?", a: "Most clients see measurable ranking improvements within 3–4 months and significant traffic increases by month 6. Results vary by market competitiveness, site age, and existing domain authority. We share honest projections during your free audit." },
  { q: "Is there a setup fee?", a: "No setup fees. The first month includes a comprehensive onboarding audit, keyword mapping, and technical baseline assessment - all within your monthly retainer. You pay the same rate from day one." },
];

export function SEOPackages() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("SEO Packages Dubai - SEO Pricing & Monthly Plans UAE | SEODXB")}</title>
        <meta name="description" content="Transparent SEO packages for Dubai businesses. Startup from $999/mo, Business from $2,499/mo. No lock-in contracts." />
        <link rel="canonical" href="https://seodxb.com/seo-packages" />
        <meta property="og:title" content="SEO Packages Dubai | Monthly SEO Pricing UAE | SEODXB" />
        <meta property="og:description" content="Affordable SEO packages for Dubai businesses. No setup fees, no long-term contracts. Choose from Startup, Business, or Enterprise SEO monthly retainers." />
        <meta property="og:url" content="https://seodxb.com/seo-packages" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO Packages Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Monthly SEO packages for Dubai businesses. Startup $999/mo, Business $2,499/mo, Enterprise custom pricing.",
          "offers": [
            { "@type": "Offer", "name": "Startup SEO Package", "price": "999", "priceCurrency": "USD", "billingIncrement": "Month" },
            { "@type": "Offer", "name": "Business SEO Package", "price": "2499", "priceCurrency": "USD", "billingIncrement": "Month" },
          ],
          "areaServed": ["Dubai", "UAE", "Worldwide"],
          "url": "https://seodxb.com/seo-packages"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">SEO Packages & Pricing</span>
              <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                Transparent SEO Pricing. No Surprises.
              </h1>
              <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every package includes keyword research, on-page SEO, technical fixes, local SEO, GEO & AEO, content, and reporting. No hidden fees. No long-term contracts.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                {["No setup fees", "No lock-in contracts", "Cancel any time", "Results guaranteed*"].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 border ${pkg.featured ? "bg-black text-white border-black shadow-2xl scale-105" : "bg-white border-gray-200 shadow-sm"}`}>
                <div className="mb-6">
                  {pkg.icon}
                  <p className={`text-xs font-bold tracking-widest uppercase mt-4 mb-1 ${pkg.featured ? "text-primary" : "text-primary"}`}>{pkg.name}</p>
                  <p className={`text-sm mb-5 ${pkg.featured ? "text-white/70" : "text-gray-500"}`}>{pkg.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-4xl font-black ${pkg.featured ? "text-white" : "text-black"}`}>{pkg.price}</span>
                    {pkg.price !== "Custom" && <span className={`text-sm ml-1 ${pkg.featured ? "text-white/60" : "text-gray-500"}`}>/ month</span>}
                  </div>
                  <p className={`text-xs ${pkg.featured ? "text-white/50" : "text-gray-400"}`}>Ideal for: {pkg.ideal}</p>
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      {feature.included
                        ? <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${pkg.featured ? "text-primary" : "text-primary"}`} />
                        : <XCircle size={15} className="shrink-0 mt-0.5 text-gray-300" />}
                      <span className={`text-sm ${!feature.included ? (pkg.featured ? "text-white/30" : "text-gray-300") : (pkg.featured ? "text-white/90" : "text-gray-700")}`}>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className={`w-full rounded-full font-bold ${pkg.featured ? "bg-[#C8FF00] text-black hover:bg-[#b3e600]" : "bg-primary text-white hover:bg-primary/90"}`} asChild>
                  <a href="/contact">{pkg.price === "Custom" ? "Get Custom Quote" : "Get Started"} <ArrowRight size={16} className="ml-2" /></a>
                </Button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">*Results guarantee: measurable ranking improvements within 6 months or we extend your campaign at no charge.</p>
        </section>

        {/* What's included detail */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold mb-10 text-center">Every Package Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Keyword Research & Mapping", desc: "Target keywords assigned to every page - no guessing." },
                { title: "On-Page SEO", desc: "Titles, metas, headings, content, internal links - all optimised." },
                { title: "Technical SEO Fixes", desc: "Speed, crawlability, schema, and indexation - resolved." },
                { title: "Local SEO", desc: "GBP management, citations, and Map Pack strategies." },
                { title: "GEO & AEO", desc: "AI search and featured snippet optimisation - standard." },
                { title: "Link Building", desc: "Authority backlinks from relevant, trustworthy sources." },
                { title: "Monthly Reports", desc: "Rankings, traffic, leads, and ROI - every month, clearly." },
                { title: "Dedicated Team", desc: "A real team that knows your business and is reachable." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Pricing FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Not Sure Which Package? Start with a Free Audit.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              We'll audit your site and recommend the right package for your goals and competitive landscape - at no cost.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <a href="/contact">Get Free Audit + Package Recommendation <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
