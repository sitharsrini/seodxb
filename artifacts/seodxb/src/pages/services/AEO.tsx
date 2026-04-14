import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Star, Mic, MessageSquare, BarChart2, FileQuestion, ArrowRight } from "lucide-react";

const aeoServices = [
  { icon: <Star size={22} />, title: "Featured Snippet Optimisation", desc: "We structure content to win Position Zero - the answer box that appears above all paid and organic results." },
  { icon: <FileQuestion size={22} />, title: "People Also Ask (PAA)", desc: "Targeting the question clusters that expand search results and give your brand multiple ranking opportunities per query." },
  { icon: <Mic size={22} />, title: "Voice Search Optimisation", desc: "Natural language phrasing, FAQ schema, and direct-answer formatting optimised for Alexa, Siri, and Google Assistant." },
  { icon: <MessageSquare size={22} />, title: "FAQ & How-To Schema", desc: "Structured data that tells answer engines exactly where your answers are - increasing the chance of being read aloud or displayed." },
  { icon: <BarChart2 size={22} />, title: "SERP Feature Tracking", desc: "We monitor which SERP features (snippets, PAA, knowledge panels) you hold and identify new ones within reach." },
  { icon: <CheckCircle2 size={22} />, title: "E-E-A-T Signals", desc: "Experience, Expertise, Authoritativeness, and Trustworthiness signals that tell Google your content deserves to be surfaced first." },
];

const faqs = [
  { q: "What is Answer Engine Optimisation (AEO)?", a: "Answer Engine Optimisation (AEO) is the practice of optimising web content to appear as a direct answer in search results - specifically in featured snippets, People Also Ask boxes, knowledge panels, and voice search responses. Unlike traditional SEO which focuses on 10 blue links, AEO targets 'Position Zero': the answer placed above organic results that users see first." },
  { q: "How is AEO different from traditional SEO?", a: "Traditional SEO aims to rank a page in the top 10 results. AEO specifically targets the answer box that appears above position 1. Where SEO targets keywords, AEO targets questions and direct answers. Both are complementary - a strong on-page SEO foundation makes AEO more achievable." },
  { q: "What types of content win featured snippets?", a: "Featured snippets typically show: paragraph answers (definitions, explanations), numbered lists (steps, processes), bulleted lists (features, options), and tables (comparisons, data). The content must directly and concisely answer a query. We identify which format each target question requires and write accordingly." },
  { q: "Does AEO work for voice search?", a: "Yes. Approximately 40% of voice search results come from featured snippets. By winning Position Zero, your content is highly likely to be the answer read aloud by Google Assistant, Siri, Alexa, and similar assistants. AEO and voice search optimisation are closely related." },
  { q: "How do you measure AEO success?", a: "We track: featured snippet ownership for target queries, PAA box appearances, click-through rates from rich results, and voice search citation tracking. Monthly reports show exactly which SERP features your brand owns and the traffic driven from each." },
  { q: "How long does it take to win a featured snippet?", a: "Typically 4–12 weeks after optimisation for pages already ranking on page 1. Queries where you rank on page 2 or 3 may take longer - you need to enter the top 10 before competing for Position Zero. We prioritise queries where you're closest to capturing the snippet first." },
];

export function AEO() {
  return (
    <>
      <Helmet>
        <title>Answer Engine Optimisation (AEO) - Position Zero & Featured Snippets | SEODXB</title>
        <meta name="description" content="AEO services: win featured snippets, People Also Ask boxes, and voice search results. Rank at Position Zero for queries your customers are already asking." />
        <link rel="canonical" href="https://seodxb.com/aeo" />
        <meta property="og:title" content="Answer Engine Optimisation (AEO) | SEODXB" />
        <meta property="og:description" content="Win Position Zero. Featured snippets, PAA boxes, and voice search optimisation for businesses targeting AI-powered search results." />
        <meta property="og:url" content="https://seodxb.com/aeo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Answer Engine Optimisation (AEO)",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "AEO: featured snippet optimisation, People Also Ask targeting, voice search, FAQ schema, and Position Zero strategies.",
          "areaServed": "Worldwide",
          "url": "https://seodxb.com/aeo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Answer Engine Optimisation</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  Rank at Position Zero. Be the Answer.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  Search is shifting from a list of links to a single answer. AEO ensures your brand is that answer - displayed in featured snippets, PAA boxes, and voice results before any competitor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <Link href="/contact">Start Winning Snippets <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg
                  viewBox="0 0 480 380"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  role="img"
                  aria-label="Google search results page showing a featured snippet at Position Zero for 'best SEO agency Dubai' with SEODXB listed above all organic results, demonstrating Answer Engine Optimisation success"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="480" height="380" rx="16" fill="#FFFFFF" />
                  {/* Search bar */}
                  <rect x="20" y="20" width="440" height="44" rx="22" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <text x="52" y="47" fontSize="22" fill="#4285F4">G</text>
                  <text x="80" y="46" fontSize="12" fill="#5F6368">best SEO agency Dubai</text>
                  <rect x="418" y="32" width="28" height="20" rx="10" fill="#4285F4" />
                  <text x="432" y="45" textAnchor="middle" fontSize="10" fill="white">🔍</text>
                  {/* Position Zero badge */}
                  <rect x="20" y="80" width="100" height="18" rx="9" fill="#FEF9C3" />
                  <text x="70" y="92" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400E">📌 Position Zero</text>
                  {/* Featured Snippet box */}
                  <rect x="20" y="104" width="440" height="110" rx="10" fill="white" stroke="#DADCE0" strokeWidth="1.5" />
                  <rect x="20" y="104" width="440" height="4" rx="2" fill="#4285F4" />
                  <text x="36" y="128" fontSize="10" fill="#4285F4">seodxb.com › about</text>
                  <text x="36" y="146" fontSize="13" fontWeight="bold" fill="#1558D6">SEODXB - Dubai's Top-Rated SEO Agency</text>
                  <rect x="36" y="156" width="360" height="7" rx="4" fill="#F1F5F9" />
                  <rect x="36" y="170" width="300" height="7" rx="4" fill="#F1F5F9" />
                  <rect x="36" y="184" width="340" height="7" rx="4" fill="#F1F5F9" />
                  <text x="36" y="204" fontSize="9" fill="#70757A">SEODXB specialises in On-Page SEO, AEO, and GEO for businesses worldwide...</text>
                  {/* PAA section */}
                  <text x="20" y="234" fontSize="11" fontWeight="bold" fill="#202124">People also ask</text>
                  {[
                    "What does an SEO agency do?",
                    "How much does SEO cost in Dubai?",
                    "Which is the best SEO company?",
                  ].map((q, i) => (
                    <g key={i}>
                      <rect x="20" y={244 + i * 34} width="440" height="28" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                      <text x="36" y={262 + i * 34} fontSize="11" fill="#202124">{q}</text>
                      <text x="446" y={262 + i * 34} textAnchor="end" fontSize="14" fill="#70757A">⌄</text>
                    </g>
                  ))}
                  {/* Organic result (below fold) */}
                  <text x="20" y="362" fontSize="9" fill="#A0AEC0">↓ Organic results begin here</text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stat bar */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
              {[
                { value: "8.6%", label: "Avg. CTR of featured snippets vs 2.8% for #1 organic" },
                { value: "Position 0", label: "Shown above all paid & organic results" },
                { value: "40%", label: "Voice answers sourced from featured snippets" },
                { value: "50%+", label: "Searches now end without a click - own the answer" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-black text-primary">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Our AEO Services</h2>
            <p className="text-lg text-muted-foreground">Every tactic designed to put your content at the top of the answer layer.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aeoServices.map((s, i) => (
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

        {/* How snippets are won */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">How We Win Featured Snippets</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Identify snippet-eligible queries", desc: "We use rank tracking and SERP analysis to find queries where a featured snippet exists and you rank in the top 20." },
                { step: "2", title: "Analyse the winning format", desc: "Each snippet type (paragraph, list, table) has a distinct format. We reverse-engineer what Google is currently showing." },
                { step: "3", title: "Rewrite & restructure content", desc: "Target content is rewritten to match the ideal snippet format - concise, direct, and semantically aligned with the query." },
                { step: "4", title: "Add FAQ & structured data", desc: "Schema markup and FAQ sections increase machine-readability, making it easier for Google to extract your answer." },
                { step: "5", title: "Track & iterate", desc: "Weekly snippet monitoring. When we win one, we target the next. When a competitor takes one, we recapture it." },
              ].map((s, i) => (
                <div key={i} className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center shrink-0">{s.step}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">AEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Become the Answer Your Customers Find</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Start with a free AEO opportunity analysis - we'll identify every snippet and PAA box within your reach.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Get My AEO Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
