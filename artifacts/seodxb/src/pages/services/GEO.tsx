import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Zap, Globe2, MessageSquare, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { SiOpenai, SiGoogle, SiPerplexity } from "react-icons/si";

const geoServices = [
  { icon: <BookOpen size={22} />, title: "Citation-Ready Content", desc: "We write content in the formats that LLMs prefer to cite: authoritative, well-structured, factually dense, and clearly attributed." },
  { icon: <Globe2 size={22} />, title: "Entity Optimisation", desc: "Establishing your brand as a recognised entity in Google's Knowledge Graph and AI training data through consistent structured signals." },
  { icon: <MessageSquare size={22} />, title: "AI Training Signal Alignment", desc: "Your brand messaging, USPs, and expertise signals are embedded in ways that language models learn to associate and surface." },
  { icon: <TrendingUp size={22} />, title: "Brand Mention Strategy", desc: "Building a presence on the platforms and publications that AI models use as training data: high-authority sites, Wikipedia, Reddit, and more." },
  { icon: <Zap size={22} />, title: "Structured Data for LLMs", desc: "Schema markup and llms.txt implementation so that AI crawlers can efficiently parse and understand your site content." },
  { icon: <CheckCircle2 size={22} />, title: "GEO Performance Tracking", desc: "We test your brand's visibility across ChatGPT, Perplexity, Google AI Overviews, and Gemini — measuring citation frequency and accuracy." },
];

const aiEngines = [
  { name: "ChatGPT", desc: "180M+ users ask questions that surface brand recommendations." },
  { name: "Google AI Overviews", desc: "Shown above all organic results for millions of queries daily." },
  { name: "Perplexity AI", desc: "The AI search engine with cited sources — ideal for brand visibility." },
  { name: "Claude (Anthropic)", desc: "Enterprise and consumer queries across a wide range of topics." },
  { name: "Gemini", desc: "Google's generative AI integrated directly into Search." },
  { name: "Bing Copilot", desc: "Microsoft's AI search used by millions of business users globally." },
];

const faqs = [
  { q: "What is Generative Engine Optimisation (GEO)?", a: "Generative Engine Optimisation (GEO) is the practice of optimising a brand's digital presence so it is cited, recommended, and surfaced by AI-powered search engines like ChatGPT, Google AI Overviews, Perplexity, Gemini, and Claude. As more users turn to AI tools instead of traditional search, being mentioned (or not mentioned) by these engines has a growing impact on visibility, traffic, and leads." },
  { q: "How is GEO different from AEO?", a: "AEO (Answer Engine Optimisation) targets Google's own SERP features — featured snippets, PAA boxes, voice search. GEO targets third-party AI systems like ChatGPT and Perplexity that operate outside of Google's traditional search results. Both are important. Most AI systems reference web content, so strong traditional SEO is a prerequisite for GEO success." },
  { q: "Can you guarantee my brand will appear in ChatGPT?", a: "No agency can guarantee specific AI citations — these systems change their training data and retrieval methods frequently. What we can guarantee is implementing every known best practice: authoritative content, entity signals, structured data, third-party mentions, and llms.txt — all of which measurably increase the probability of citation." },
  { q: "How do you measure GEO results?", a: "We run structured tests across ChatGPT, Perplexity, Gemini, and others: asking relevant queries and tracking whether your brand is mentioned, how accurately it's described, and what context surrounds the citation. We report citation frequency and accuracy monthly." },
  { q: "Does GEO require a different content strategy than SEO?", a: "GEO and SEO content strategies overlap significantly — authoritative, accurate, well-structured content performs well in both. GEO adds additional requirements: being named explicitly (not just implied), having consistent entity signals across the web, and having a presence on the types of sites that LLMs prioritise in training and retrieval." },
];

export function GEO() {
  return (
    <>
      <Helmet>
        <title>Generative Engine Optimisation (GEO) — Get Cited by ChatGPT, Gemini & Perplexity | SEODXB</title>
        <meta name="description" content="GEO services: get your brand cited by ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini. Optimise for the AI search layer that's replacing traditional results." />
        <link rel="canonical" href="https://seodxb.com/geo" />
        <meta property="og:title" content="Generative Engine Optimisation (GEO) | SEODXB" />
        <meta property="og:description" content="Be recommended by AI. GEO strategies that get your brand cited in ChatGPT, Perplexity, Google AI Overviews, and every major AI search surface." />
        <meta property="og:url" content="https://seodxb.com/geo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Generative Engine Optimisation (GEO)",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "GEO: optimising brand visibility across AI-powered search engines including ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini.",
          "areaServed": "Worldwide",
          "url": "https://seodxb.com/geo"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-950 text-white py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Generative Engine Optimisation</span>
              <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
                Get Cited by AI.<br />
                <span className="text-[#C8FF00]">Dominate the New Search Layer.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                ChatGPT, Perplexity, Gemini, and Google AI Overviews are changing how people find businesses. GEO ensures your brand is named, recommended, and trusted by every major AI engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-8" asChild>
                  <Link href="/contact">Check My AI Visibility <ArrowRight size={16} className="ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Engines */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-white/50 text-sm uppercase tracking-widest mb-8">We Optimise for Visibility Across</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {aiEngines.map((e, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                  <p className="font-bold text-white mb-1">{e.name}</p>
                  <p className="text-xs text-white/50">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Our GEO Services</h2>
            <p className="text-lg text-muted-foreground">Building the signals that AI systems use to decide who to recommend.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {geoServices.map((s, i) => (
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

        {/* Why now */}
        <section className="py-24 bg-slate-950 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-heading font-bold mb-6 text-center">Why GEO Matters Right Now</h2>
            <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-12">
              Early movers in GEO are establishing brand authority that will compound for years. Brands that wait will have to fight harder and spend more to break into AI's recommended set.
            </p>
            <div className="space-y-5">
              {[
                "Google AI Overviews now appear for over 25% of all queries — that's billions of searches per day where your organic listing is pushed below the fold.",
                "ChatGPT processes over 100 million queries daily. Users ask it for product, service, and vendor recommendations.",
                "Perplexity and Claude are growing fastest among high-income, educated users — exactly the audience most B2B and premium brands want.",
                "GEO is still nascent. The window to establish brand authority before it becomes a crowded field is now.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="text-[#C8FF00] shrink-0 mt-0.5" />
                  <p className="text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">GEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Is Your Brand Showing Up in AI Search?</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              We'll test your brand across ChatGPT, Perplexity, and Google AI Overviews and show you exactly where you stand — for free.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Test My AI Visibility <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
