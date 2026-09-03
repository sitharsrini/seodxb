import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Scale, Search, MapPin, Shield, BarChart2, Globe, ArrowRight } from "lucide-react";
import { clampTitle } from "@/lib/title";

const services = [
  { icon: <Search size={22} />, title: "Legal Keyword Research", desc: "We target high-value legal searches: 'divorce lawyer Dubai', 'UAE corporate law firm', 'criminal defence attorney Dubai' - the queries that bring high-value client enquiries." },
  { icon: <Scale size={22} />, title: "Practice Area Pages", desc: "Authoritative, SEO-optimised pages for each practice area - corporate law, family law, criminal defence, IP, real estate law - each targeting the specific searches your clients use." },
  { icon: <Globe size={22} />, title: "International Client Targeting", desc: "Dubai attracts international legal matters. We target expat clients, foreign investors, and international corporations searching for UAE-qualified legal counsel." },
  { icon: <Shield size={22} />, title: "Legal E-E-A-T Signals", desc: "Lawyer bios with credentials, bar admissions, publications, and case results build the authority signals Google requires for legal content to rank well." },
  { icon: <MapPin size={22} />, title: "Local Legal SEO", desc: "Google Business Profile for your firm, legal directory citations (Lawyers.ae, LegalAdviceDubai), and Map Pack rankings for '[practice area] lawyer near me' searches." },
  { icon: <BarChart2 size={22} />, title: "Client Acquisition Tracking", desc: "We track organic consultation requests, phone calls, and form submissions - mapping every lead back to the keyword, page, and content piece that generated it." },
];

const faqs = [
  { q: "Can law firms advertise on Google in the UAE?", a: "Yes, though UAE bar regulations restrict certain claims in legal advertising. SEO has no such restrictions - you can rank for any query without paid advertising rules applying. This makes SEO the primary long-term channel for most UAE law firms, with none of the compliance restrictions that affect paid ads." },
  { q: "What legal keywords have the highest value in Dubai?", a: "The highest-value legal queries (by client potential) include: corporate law and M&A, real estate legal disputes, criminal defence, family law/divorce, employment law, and IP/trademark. These typically have lower search volumes but extremely high per-client value. Ranking #1 for 'M&A lawyer Dubai' is worth significantly more than most commercial keywords." },
  { q: "How do you build authority for a law firm's SEO?", a: "Legal authority is built through: lawyer credential pages (qualifications, admissions, publications), case study content (where ethically permissible), legal guide content that demonstrates expertise, citations from legal directories and bar association pages, and media mentions in UAE legal publications." },
  { q: "How quickly can a Dubai law firm rank on Google?", a: "Law firm SEO is competitive for the biggest practice areas but offers fast opportunities in niches. Most firms see meaningful movement in 4–6 months. Niche practice areas (specific offshore jurisdictions, specialist disputes) can rank in 2–3 months. Longtail queries like 'labour dispute lawyer Business Bay' can show results in 4–8 weeks." },
];

export function LegalSEO() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("SEO for Law Firms Dubai - Legal SEO Agency UAE | SEODXB")}</title>
        <meta name="description" content="Legal SEO for Dubai law firms. Rank for high-value client queries and generate consultations with E-E-A-T content." />
        <link rel="canonical" href="https://seodxb.com/seo-for-law-firms" />
        <meta property="og:title" content="SEO for Law Firms Dubai | Legal SEO Agency UAE | SEODXB" />
        <meta property="og:description" content="Attract high-value legal clients from Google. Practice area pages, lawyer profile SEO, and local rankings for Dubai law firms and solicitors." />
        <meta property="og:url" content="https://seodxb.com/seo-for-law-firms" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO for Law Firms Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Legal SEO for Dubai law firms: practice area rankings, E-E-A-T authority building, local SEO, and client-acquisition content.",
          "areaServed": ["Dubai", "UAE"],
          "url": "https://seodxb.com/seo-for-law-firms"
        })}</script>
      </Helmet>

      <div className="pt-24">
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Legal SEO</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  High-Value Clients Find Your Firm First.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  When someone needs a Dubai lawyer, they search Google first. We make sure your firm ranks at the top for the practice area searches that bring your highest-value clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <a href="/contact">Get Legal SEO Audit <ArrowRight size={16} className="ml-2" /></a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <a href="/pricing">View Pricing</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="Legal SEO results showing a Dubai law firm ranked at position 1 in Google for corporate lawyer Dubai with featured snippet, practice area rankings, and client acquisition metrics"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="340" rx="16" fill="white" />
                  <rect x="16" y="16" width="448" height="36" rx="18" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <text x="44" y="37" fontSize="18" fill="#4285F4">G</text>
                  <text x="68" y="37" fontSize="11" fill="#5F6368">corporate lawyer Dubai DIFC</text>
                  {/* Featured snippet */}
                  <rect x="16" y="64" width="448" height="80" rx="10" fill="#F8FAFC" stroke="#DADCE0" strokeWidth="1.5" />
                  <rect x="16" y="64" width="448" height="4" rx="2" fill="#4285F4" />
                  <text x="32" y="80" fontSize="8" fill="#4285F4">lawfirm-dubai.com › corporate-law</text>
                  <text x="32" y="94" fontSize="11" fontWeight="bold" fill="#1D4ED8">Al Rafid & Associates - DIFC Corporate Law Specialists</text>
                  <rect x="32" y="102" width="340" height="6" rx="3" fill="#E2E8F0" />
                  <rect x="32" y="114" width="300" height="6" rx="3" fill="#E2E8F0" />
                  <rect x="380" y="78" width="72" height="38" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="416" y="95" textAnchor="middle" fontSize="7" fill="#64748B">Licensed</text>
                  <text x="416" y="107" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0F172A">DIFC/ADGM</text>
                  {/* Practice area rankings */}
                  <rect x="16" y="156" width="290" height="170" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="30" y="174" fontSize="9" fontWeight="bold" fill="#0F172A">Practice Area Rankings</text>
                  {[
                    { area: "Corporate Law Dubai", rank: "#1" },
                    { area: "M&A Lawyer UAE", rank: "#2" },
                    { area: "DIFC Law Firm", rank: "#1" },
                    { area: "Contract Law Dubai", rank: "#3" },
                    { area: "Employment Lawyer UAE", rank: "#2" },
                  ].map((item, i) => (
                    <g key={i}>
                      <rect x="24" y={182 + i * 28} width="274" height="20" rx="5" fill={i % 2 === 0 ? "#F8FAFC" : "white"} />
                      <text x="36" y={196 + i * 28} fontSize="9" fill="#374151">{item.area}</text>
                      <rect x="266" y={184 + i * 28} width="24" height="16" rx="8" fill={item.rank === "#1" ? "#DCFCE7" : item.rank === "#2" ? "#DBEAFE" : "#FEF9C3"} />
                      <text x="278" y={196 + i * 28} textAnchor="middle" fontSize="8" fontWeight="bold" fill={item.rank === "#1" ? "#15803D" : item.rank === "#2" ? "#1D4ED8" : "#92400E"}>{item.rank}</text>
                    </g>
                  ))}
                  {/* Metrics */}
                  <rect x="316" y="156" width="148" height="80" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="390" y="180" textAnchor="middle" fontSize="24" fontWeight="black" fill="#16A34A">34</text>
                  <text x="390" y="196" textAnchor="middle" fontSize="9" fill="#065F46">Consultation</text>
                  <text x="390" y="210" textAnchor="middle" fontSize="9" fill="#065F46">Requests / month</text>
                  <text x="390" y="224" textAnchor="middle" fontSize="8" fill="#94A3B8">from organic search</text>
                  <rect x="316" y="246" width="148" height="80" rx="10" fill="#FFF9F0" stroke="#FED7AA" strokeWidth="1" />
                  <text x="390" y="270" textAnchor="middle" fontSize="24" fontWeight="black" fill="#EA580C">AED 18K</text>
                  <text x="390" y="286" textAnchor="middle" fontSize="9" fill="#92400E">Avg. Retainer</text>
                  <text x="390" y="300" textAnchor="middle" fontSize="9" fill="#92400E">from SEO leads</text>
                  <text x="390" y="314" textAnchor="middle" fontSize="8" fill="#94A3B8">per new client</text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Legal SEO Services</h2>
            <p className="text-lg text-muted-foreground">Built for Dubai law firms that need to rank for high-value client queries.</p>
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

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Legal SEO FAQ</h2>
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

        <section className="py-24 bg-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading font-bold mb-6">Rank for the Clients Worth Winning</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Free legal SEO audit - we'll show you the high-value client queries your firm is missing and how to capture them.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <a href="/contact">Get Legal SEO Audit <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
