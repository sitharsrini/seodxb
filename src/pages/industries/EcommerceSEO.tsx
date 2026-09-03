import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ShoppingCart, Search, TrendingUp, Zap, BarChart2, Star, ArrowRight } from "lucide-react";
import { clampTitle } from "@/lib/title";

const services = [
  { icon: <Search size={22} />, title: "Product & Category Keywords", desc: "We identify high-commercial-intent keywords for every product and category page - including long-tail buyer queries that drive direct sales." },
  { icon: <ShoppingCart size={22} />, title: "Product Page Optimisation", desc: "Title tags, schema markup (Product, Review, Price), image alt text, and structured descriptions that rank product pages and trigger rich snippets." },
  { icon: <Zap size={22} />, title: "Technical SEO for E-commerce", desc: "Faceted navigation, pagination, duplicate content from variants, crawl budget optimisation, and Core Web Vitals - the technical foundations that make or break e-commerce SEO." },
  { icon: <TrendingUp size={22} />, title: "Shopify & WooCommerce SEO", desc: "Platform-specific optimisation for Shopify, WooCommerce, Magento, and custom storefronts. We know every platform's SEO quirks and how to fix them." },
  { icon: <Star size={22} />, title: "Review & UGC Signals", desc: "Structured review markup, star ratings in search results, and user-generated content strategies that boost both rankings and conversion rates." },
  { icon: <BarChart2 size={22} />, title: "E-commerce Link Building", desc: "Backlinks from product review sites, comparison platforms, and niche retailers that build the authority needed to rank in competitive product categories." },
];

const platforms = ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom React/Next.js", "Wix eCommerce", "Salla", "Zid"];

const faqs = [
  { q: "Why is SEO important for e-commerce in Dubai?", a: "Over 70% of UAE e-commerce journeys start with a Google search. Paid ads stop the moment you stop paying. SEO builds a sustainable channel that generates consistent revenue month after month. For high-competition categories like fashion, electronics, and beauty, ranking on page 1 can generate 10–50x the ROI of equivalent paid spend over 24 months." },
  { q: "Can you optimise thousands of product pages?", a: "Yes. We build scalable SEO frameworks for large catalogues - using templated optimisation rules, automated schema generation, and priority-based crawl management. We've worked with stores from 50 to 50,000 SKUs." },
  { q: "Do you work with Shopify stores specifically?", a: "Yes. Shopify has specific SEO limitations (duplicate content from /collections/, /products/ URL structures, paginated pages) that require platform-specific fixes. We know every Shopify SEO issue and how to resolve it within Shopify's constraints." },
  { q: "How do you measure e-commerce SEO success?", a: "We track: organic revenue (not just traffic), keyword rankings for product/category pages, organic conversion rate, organic sessions, crawl health, and rich snippet coverage. Revenue-attributed reporting is standard - every month you see exactly how much organic SEO contributed to your bottom line." },
  { q: "Can you help with Arabic-language e-commerce SEO in UAE?", a: "Yes. Arabic-language product searches are significantly less competitive in UAE e-commerce. We offer bilingual product and category optimisation in both English and Arabic, with proper RTL implementation and Arabic keyword research." },
];

export function EcommerceSEO() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("E-commerce SEO Dubai - Shopify, WooCommerce & Online Store SEO | SEODXB")}</title>
        <meta name="description" content="E-commerce SEO in Dubai. Rank products on Google and grow organic sales from Shopify, WooCommerce, and custom stores." />
        <link rel="canonical" href="https://seodxb.com/ecommerce-seo" />
        <meta property="og:title" content="E-commerce SEO Dubai | Shopify & WooCommerce SEO | SEODXB" />
        <meta property="og:description" content="Increase organic revenue from your online store. Product SEO, category rankings, Shopify SEO, and schema markup for Dubai e-commerce businesses." />
        <meta property="og:url" content="https://seodxb.com/ecommerce-seo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "E-commerce SEO Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "E-commerce SEO for Dubai online stores: product rankings, Shopify SEO, WooCommerce optimisation, schema markup, and organic revenue growth.",
          "areaServed": ["Dubai", "UAE", "Worldwide"],
          "url": "https://seodxb.com/ecommerce-seo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">E-commerce SEO</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  Turn Google Traffic into E-commerce Revenue.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  Your products need to appear when buyers are actively searching. We rank Dubai e-commerce stores on the first page of Google - with SEO that drives sales, not just clicks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <a href="/contact">Grow My Online Store <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <a href="/pricing">View Pricing</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 360" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="E-commerce SEO dashboard showing organic revenue growth chart, product listings with star ratings appearing in Google search, and conversion metrics for a Dubai online store"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="360" rx="16" fill="white" />
                  {/* Revenue chart */}
                  <rect x="20" y="20" width="260" height="150" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="36" y="42" fontSize="10" fontWeight="bold" fill="#0F172A">Organic Revenue</text>
                  <text x="36" y="56" fontSize="18" fontWeight="black" fill="#16A34A">AED 84,200</text>
                  <text x="36" y="70" fontSize="9" fill="#22C55E">↑ +218% vs last year</text>
                  {/* Bar chart */}
                  {[30, 45, 40, 60, 55, 80, 100].map((h, i) => (
                    <rect key={i} x={40 + i * 30} y={160 - h} width="20" height={h} rx="3"
                      fill={i === 6 ? "#2563EB" : "#BFDBFE"} />
                  ))}
                  <text x="148" y="172" textAnchor="middle" fontSize="8" fill="#94A3B8">Monthly Trend</text>
                  {/* Product search results */}
                  <rect x="292" y="20" width="168" height="150" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="376" y="40" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F172A">Google Shopping</text>
                  {[
                    { name: "Dubai Perfume Set", price: "AED 299", rating: "4.8" },
                    { name: "Arabic Oud Gift Box", price: "AED 450", rating: "4.9" },
                    { name: "UAE Date Collection", price: "AED 199", rating: "4.7" },
                  ].map((p, i) => (
                    <g key={i}>
                      <rect x="304" y={52 + i * 38} width="144" height="30" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                      <rect x="304" y={52 + i * 38} width="28" height="30" rx="6" fill="#DBEAFE" />
                      <text x="318" y={70 + i * 38} textAnchor="middle" fontSize="8" fill="#2563EB">img</text>
                      <text x="340" y={67 + i * 38} fontSize="8" fontWeight="bold" fill="#0F172A">{p.name}</text>
                      <text x="340" y={77 + i * 38} fontSize="8" fill="#16A34A">{p.price}</text>
                      <text x="420" y={68 + i * 38} textAnchor="end" fontSize="7" fill="#F59E0B">★ {p.rating}</text>
                    </g>
                  ))}
                  {/* Metrics row */}
                  <rect x="20" y="188" width="120" height="58" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="80" y="210" textAnchor="middle" fontSize="18" fontWeight="black" fill="#16A34A">4.8x</text>
                  <text x="80" y="228" textAnchor="middle" fontSize="9" fill="#64748B">ROAS</text>
                  <text x="80" y="240" textAnchor="middle" fontSize="8" fill="#94A3B8">Return on SEO</text>
                  <rect x="152" y="188" width="120" height="58" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <text x="212" y="210" textAnchor="middle" fontSize="18" fontWeight="black" fill="#2563EB">68%</text>
                  <text x="212" y="228" textAnchor="middle" fontSize="9" fill="#64748B">Organic Share</text>
                  <text x="212" y="240" textAnchor="middle" fontSize="8" fill="#94A3B8">of total revenue</text>
                  <rect x="284" y="188" width="176" height="58" rx="8" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1" />
                  <text x="372" y="210" textAnchor="middle" fontSize="18" fontWeight="black" fill="#EA580C">312</text>
                  <text x="372" y="228" textAnchor="middle" fontSize="9" fill="#64748B">Product Pages</text>
                  <text x="372" y="240" textAnchor="middle" fontSize="8" fill="#94A3B8">Ranking Page 1</text>
                  {/* Schema badges */}
                  <rect x="20" y="260" width="200" height="80" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="120" y="278" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F172A">Rich Snippets Active</text>
                  {["Product Schema", "Review Stars", "Price Markup", "In-Stock Badge"].map((badge, i) => (
                    <g key={i}>
                      <circle cx={34 + (i % 2) * 100} cy={295 + Math.floor(i / 2) * 22} r="4" fill="#22C55E" />
                      <text x={42 + (i % 2) * 100} cy={299 + Math.floor(i / 2) * 22} fontSize="8" fill="#374151">{badge}</text>
                    </g>
                  ))}
                  <rect x="232" y="260" width="228" height="80" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="346" y="278" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F172A">Platform Coverage</text>
                  {["Shopify", "WooCommerce", "Magento", "Custom"].map((p, i) => (
                    <g key={i}>
                      <rect x={240 + (i % 2) * 108} y={285 + Math.floor(i / 2) * 22} width="90" height="14" rx="7" fill="#DBEAFE" />
                      <text x={285 + (i % 2) * 108} y={295 + Math.floor(i / 2) * 22} textAnchor="middle" fontSize="7" fill="#1D4ED8">✓ {p}</text>
                    </g>
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Platforms We Optimise</p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map(p => (
                <span key={p} className="bg-slate-50 text-gray-700 text-sm px-4 py-2 rounded-full border border-slate-200">{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">E-commerce SEO Services</h2>
            <p className="text-lg text-muted-foreground">Built for stores that need to rank products, drive traffic, and convert buyers.</p>
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
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">E-commerce SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">More Organic Sales. Less Ad Spend.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Get a free e-commerce SEO audit. We'll identify your top-ranking product opportunities and show you the revenue potential.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <a href="/contact">Audit My Store <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
