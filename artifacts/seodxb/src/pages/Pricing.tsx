import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Search, FileText, Infinity, Star, BarChart2, Wrench, Globe, PenSquare, Plane, Globe2, Camera, Heart, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const startupFeatures = [
  { icon: <Search size={15} />, text: "Keyword Research & Brand Analysis", highlight: true },
  { icon: <FileText size={15} />, text: "Upto 10 - 15 pages", highlight: true },
  { icon: <Infinity size={15} />, text: "Upto 20 Keywords Tracked" },
  { icon: <Star size={15} />, text: "GEO & AEO Optimisation" },
  { icon: <BarChart2 size={15} />, text: "Monthly reports" },
  { icon: <Wrench size={15} />, text: "Technical & Local SEO" },
  { icon: <Globe size={15} />, text: "Google Business profile & Schema Markup" },
  { icon: <PenSquare size={15} />, text: "Human written articles / blogs" },
];

const businessFeatures = [
  { icon: <Search size={15} />, text: "Keyword Research & Brand Analysis", highlight: true },
  { icon: <FileText size={15} />, text: "Upto 50 pages", highlight: true },
  { icon: <Infinity size={15} />, text: "Upto 75 Keywords Tracked" },
  { icon: <Star size={15} />, text: "GEO & AEO Optimisation" },
  { icon: <BarChart2 size={15} />, text: "Monthly reports" },
  { icon: <Wrench size={15} />, text: "Technical & Local SEO" },
  { icon: <Globe size={15} />, text: "Google Business profile & Schema Markup" },
  { icon: <PenSquare size={15} />, text: "Human written articles / blogs" },
];

const customServices = [
  { icon: <Globe2 size={15} />, text: "Website development", color: "text-orange-500" },
  { icon: <Camera size={15} />, text: "Social media", color: "text-blue-500" },
  { icon: <Heart size={15} />, text: "Branding", color: "text-orange-400" },
  { icon: <Camera size={15} />, text: "Photography / Videography", color: "text-gray-600" },
  { icon: <Plus size={15} />, text: "And More...", color: "text-gray-400" },
];

export function Pricing() {
  return (
    <>
      <Helmet>
        <title>SEO Pricing Dubai - Transparent Plans for On-Page SEO & AEO | SEODXB</title>
        <meta name="description" content="Clear, transparent SEO pricing for Dubai businesses. No contracts, no hidden fees. Choose from Starter, Growth, or Authority plans. Pause or cancel anytime." />
        <link rel="canonical" href="https://seodxb.com/pricing" />
        <meta property="og:title" content="SEO Pricing Dubai - Transparent Plans | SEODXB" />
        <meta property="og:description" content="No contracts. No surprises. Transparent SEO pricing for Dubai businesses starting from $999/month." />
        <meta property="og:url" content="https://seodxb.com/pricing" />
      </Helmet>
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">Plans &amp; Pricing</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-[-0.03em] mb-4">
            Transparent Pricing,<br />No Surprises Guaranteed!
          </h1>
          <p className="text-gray-400 text-base">No contracts or meetings. Pause or cancel anytime. Choose the plan that best suits your needs. If you require assistance with a custom project, we're here to help.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {/* STARTUP */}
          <div className="relative">
            <div className="flex items-center gap-2 justify-end mb-3 pr-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <span className="text-sm text-gray-600 font-medium">2 Spots Left</span>
            </div>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7 flex flex-col"
              data-testid="card-plan-startup"
            >
              <div className="mb-5">
                <Plane size={28} className="text-primary mb-4" />
                <p className="text-xs font-bold text-primary tracking-widest uppercase mb-1">STARTUP</p>
                <p className="text-sm text-gray-500 mb-4">New businesses &amp; startups entering Dubai search</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-black">$999</span>
                  <span className="text-gray-400 line-through text-sm ml-2">$3,748</span>
                  <span className="text-gray-500 text-sm ml-1">/ month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {startupFeatures.map((f, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm ${f.highlight ? "text-primary font-semibold" : "text-gray-700"}`}>
                    <span className={f.highlight ? "text-primary" : "text-gray-400"}>{f.icon}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between bg-blue-50 rounded-2xl px-4 py-3 mb-4 border border-blue-100">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Plane size={14} />
                  <span>Looking for new website +$799</span>
                </div>
                <button className="text-xs font-bold text-primary border border-primary rounded-full px-3 py-1 hover:bg-primary hover:text-white transition-colors">+ Add</button>
              </div>
              <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold text-base" asChild data-testid="button-startup-cta">
                <Link href="/contact">Get Started Today <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </motion.div>
          </div>

          {/* BUSINESS */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-7 flex flex-col mt-7"
            data-testid="card-plan-business"
          >
            <div className="mb-5">
              <Plane size={28} className="text-primary mb-4" />
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">BUSINESS</p>
                <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Popular</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Established businesses ready to scale visibility</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-black">$2,999</span>
                <span className="text-gray-500 text-sm ml-1">/ month</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6 flex-1">
              {businessFeatures.map((f, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm ${f.highlight ? "text-primary font-semibold" : "text-gray-700"}`}>
                  <span className={f.highlight ? "text-primary" : "text-gray-400"}>{f.icon}</span>
                  {f.text}
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold text-base" asChild data-testid="button-business-cta">
              <Link href="/contact">Get Started Today <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </motion.div>

          {/* CUSTOM */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7 flex flex-col mt-7"
            data-testid="card-plan-custom"
          >
            <div className="mb-2">
              <Globe2 size={28} className="text-primary mb-4" />
              <p className="text-xs font-bold text-primary tracking-widest uppercase mb-3">CUSTOM</p>
              <p className="text-xl font-black text-black leading-snug">
                We Offer Extensive Digital Solutions{" "}
                <span className="font-normal text-gray-400">to take your business to the skies in Dubai!</span>
              </p>
            </div>
            <ul className="space-y-4 mb-8 flex-1 mt-6">
              {customServices.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className={s.color}>{s.icon}</span>
                  <span className={s.color}>{s.text}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold text-base" asChild data-testid="button-custom-cta">
              <Link href="/contact">Get a Quote <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </motion.div>
        </div>

        {/* Decide CTA */}
        <div className="text-center mt-16 space-y-3">
          <p className="text-xl font-black">Still Can't Decide? Let Us Help you Make the Right Decision.</p>
          <div className="flex gap-4 justify-center flex-wrap mt-4">
            <Button variant="outline" className="rounded-full px-7 py-5 font-semibold" asChild>
              <a href="mailto:hi@Listi.ae">Send Us an Email</a>
            </Button>
            <Button className="rounded-full px-7 py-5 bg-primary font-semibold" asChild>
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">FAQS</p>
            <h2 className="text-4xl font-black tracking-[-0.02em]">Frequently Asked Questions!</h2>
            <p className="text-gray-400 text-sm mt-2">Can't Find Your Answer Here? We Can Help Out!</p>
          </div>
          <Accordion type="single" collapsible className="w-full bg-white rounded-3xl border border-gray-200 shadow-sm divide-y divide-gray-100">
            {[
              { q: "How long does SEO take to show results in Dubai?", a: "Most businesses see measurable ranking improvements within 60 to 90 days. Strong competitive growth typically becomes visible between months 4 and 6." },
              { q: "Do you specialise in specific industries in Dubai?", a: "Yes, we tailor every strategy to your industry's unique search behaviour, competitor landscape, and customer intent rather than using generic templates." },
              { q: "What does a free SEO audit include?", a: "A comprehensive technical review, on-page analysis, keyword gap assessment, competitor benchmarking, and actionable recommendations." },
              { q: "Why choose your SEODXB agency in Dubai?", a: "We are one of the few agencies offering the full SEO, AEO, and GEO trilogy, future-proofing your visibility across traditional and AI-powered search surfaces." },
              { q: "How competitive is SEO in Dubai?", a: "Highly competitive. Dubai's market demands precision, niche targeting, and consistent quality content to achieve and maintain top rankings." },
              { q: "What is the difference between SEO, AEO, and GEO?", a: "SEO targets traditional search engines. AEO optimizes for answer engines (voice, featured snippets, PAA). GEO ensures your brand is cited by generative AI models like ChatGPT and Gemini." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none px-6">
                <AccordionTrigger className="text-base font-bold hover:no-underline hover:text-primary py-5 text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Only 2 Spots Left
          </span>
          <h2 className="text-4xl font-black tracking-[-0.02em] mt-4 mb-6 max-w-xl mx-auto leading-tight">Partner with Us and Elevate Your Business to New Heights!</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Suited for businesses seeking strategic design &amp; ideas, paired with the expertise of a senior designer.</p>
          <Button size="lg" className="rounded-full font-semibold px-8 bg-primary" asChild>
            <Link href="/contact">See Plans &amp; Pricing →</Link>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}
