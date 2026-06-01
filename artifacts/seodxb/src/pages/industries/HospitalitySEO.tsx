import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Star, MapPin, Globe, Search, BarChart2, ArrowRight } from "lucide-react";

const services = [
  { icon: <Search size={22} />, title: "Restaurant & Hotel Keywords", desc: "We target 'best [cuisine] restaurant Dubai', 'hotels near [attraction]', and high-intent booking searches that bring in ready-to-convert customers." },
  { icon: <MapPin size={22} />, title: "Google Map Pack Domination", desc: "Full Google Business Profile optimisation, photo strategy, review management, and local citations that put your venue in the top 3 Map Pack results." },
  { icon: <Star size={22} />, title: "Review Strategy & Management", desc: "Ethical review generation, professional response management, and review schema markup - reviews are Google's #1 local ranking signal." },
  { icon: <Globe size={22} />, title: "Menu & Experience Pages", desc: "SEO-optimised menu pages, event pages, and experience landing pages that rank for 'brunch Dubai', 'private dining Dubai', and niche dining searches." },
  { icon: <BarChart2 size={22} />, title: "Booking & Reservation SEO", desc: "Reservation CTAs, OpenTable/SevenRooms schema integration, and conversion-optimised pages that turn search traffic into seated guests." },
  { icon: <CheckCircle2 size={22} />, title: "Tourism & Travel SEO", desc: "Targeting UAE and international tourist searches - Google Travel, Tripadvisor integration, and content that reaches visitors before they land in Dubai." },
];

const faqs = [
  { q: "How important is local SEO for restaurants in Dubai?", a: "Critical. 78% of restaurant searches in Dubai happen on mobile, and the searcher visits within the hour. The Google Map Pack (top 3 local results) captures 70%+ of clicks for 'restaurant near me' and cuisine-specific searches. Being in the Map Pack is essentially being in the consideration set for every nearby diner." },
  { q: "How do reviews affect restaurant and hotel SEO?", a: "Reviews are one of the top 3 local ranking factors for Google's Map Pack. More reviews, higher average rating, and timely responses all improve your position. We help you build a sustainable review strategy - through post-visit follow-up, QR codes, and staff training - that generates authentic reviews at scale." },
  { q: "Can you help rank for tourist searches from outside the UAE?", a: "Yes. Pre-trip research happens months before arrival. We target high-intent tourism keywords in the UK, India, Russia, and China - ensuring your venue is in travellers' plans before they book flights. This includes Tripadvisor co-optimisation and Google Travel integration." },
  { q: "What results should I expect for a new restaurant or hotel?", a: "New venues typically see Map Pack improvements within 4–8 weeks of a full GBP optimisation. Organic content rankings take 3–6 months. Review velocity and citation building compound over time - the businesses that invest in SEO from launch consistently outperform those who start late." },
];

export function HospitalitySEO() {
  return (
    <>
      <Helmet>
        <title>SEO for Restaurants & Hotels Dubai - Hospitality SEO Agency UAE | SEODXB</title>
        <meta name="description" content="SEO for restaurants and hotels in Dubai. Map Pack rankings, review management, and booking-focused SEO that fills seats." />
        <link rel="canonical" href="https://seodxb.com/seo-for-restaurants" />
        <meta property="og:title" content="Restaurant & Hotel SEO Dubai | Hospitality SEO UAE | SEODXB" />
        <meta property="og:description" content="Fill your restaurant or hotel with organic search traffic. Map Pack rankings, review strategy, and tourist-targeting SEO for Dubai hospitality." />
        <meta property="og:url" content="https://seodxb.com/seo-for-restaurants" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO for Restaurants and Hotels Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Hospitality SEO for Dubai restaurants and hotels: Map Pack rankings, review management, tourist targeting, and booking-focused conversion optimisation.",
          "areaServed": ["Dubai", "UAE"],
          "url": "https://seodxb.com/seo-for-restaurants"
        })}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Restaurant & Hotel SEO</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  Fill Tables and Rooms from Google Search.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  Diners and guests search before they book. We put your restaurant or hotel in front of them at the exact moment they decide where to go - with Map Pack rankings, reviews, and tourist-ready content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <Link href="/contact">Get Hospitality SEO Audit <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="Google search result for best restaurants Dubai showing a Map Pack with a restaurant ranked #1 with 4.9 stars and 342 reviews, plus booking button and photos"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="340" rx="16" fill="white" />
                  <rect x="16" y="16" width="448" height="36" rx="18" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <text x="44" y="38" fontSize="18" fill="#4285F4">G</text>
                  <text x="68" y="38" fontSize="11" fill="#5F6368">best restaurants Dubai Marina 2026</text>
                  {/* Map Pack */}
                  <rect x="16" y="64" width="290" height="260" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="30" y="82" fontSize="9" fontWeight="bold" fill="#1D4ED8">📍 Restaurants · Dubai Marina</text>
                  {/* #1 listing highlighted */}
                  <rect x="24" y="90" width="274" height="78" rx="8" fill="#FFF9F0" stroke="#FED7AA" strokeWidth="1.5" />
                  <rect x="24" y="90" width="4" height="78" rx="2" fill="#EA580C" />
                  <text x="40" y="108" fontSize="10" fontWeight="bold" fill="#0F172A">Your Restaurant Name</text>
                  <rect x="238" y="92" width="52" height="14" rx="7" fill="#DCFCE7" />
                  <text x="264" y="102" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#15803D">✓ OPEN NOW</text>
                  <text x="40" y="124" fontSize="10" fill="#F59E0B">★★★★★</text>
                  <text x="92" y="124" fontSize="9" fill="#64748B">4.9 (342 reviews)</text>
                  <text x="40" y="138" fontSize="9" fill="#64748B">Italian · Dubai Marina · $$$$</text>
                  <rect x="40" y="148" width="60" height="14" rx="7" fill="#DBEAFE" />
                  <text x="70" y="158" textAnchor="middle" fontSize="8" fill="#2563EB">Reserve →</text>
                  <rect x="110" y="148" width="50" height="14" rx="7" fill="#F0FDF4" />
                  <text x="135" y="158" textAnchor="middle" fontSize="8" fill="#16A34A">Menu →</text>
                  {/* #2 listing */}
                  <rect x="24" y="176" width="274" height="58" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="40" y="194" fontSize="9" fontWeight="bold" fill="#0F172A">Competitor Restaurant</text>
                  <text x="40" y="208" fontSize="9" fill="#F59E0B">★★★★</text>
                  <text x="78" y="208" fontSize="9" fill="#64748B">4.3 (89 reviews)</text>
                  <text x="40" y="222" fontSize="9" fill="#64748B">Seafood · JBR</text>
                  {/* #3 listing */}
                  <rect x="24" y="242" width="274" height="58" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="40" y="260" fontSize="9" fontWeight="bold" fill="#0F172A">Another Venue</text>
                  <text x="40" y="274" fontSize="9" fill="#F59E0B">★★★★</text>
                  <text x="78" y="274" fontSize="9" fill="#64748B">4.1 (61 reviews)</text>
                  <text x="40" y="288" fontSize="9" fill="#64748B">Asian Fusion · Marina Walk</text>
                  {/* Map panel */}
                  <rect x="316" y="64" width="148" height="260" rx="10" fill="#E8F5E9" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="390" y="88" textAnchor="middle" fontSize="9" fill="#374151">Dubai Marina</text>
                  <circle cx="390" cy="170" r="18" fill="#EA4335" opacity="0.2" />
                  <circle cx="390" cy="170" r="10" fill="#EA4335" />
                  <text x="390" y="174" textAnchor="middle" fontSize="8" fill="white">1</text>
                  <circle cx="355" cy="210" r="7" fill="#4285F4" opacity="0.7" />
                  <text x="355" y="214" textAnchor="middle" fontSize="7" fill="white">2</text>
                  <circle cx="415" cy="200" r="7" fill="#4285F4" opacity="0.7" />
                  <text x="415" y="204" textAnchor="middle" fontSize="7" fill="white">3</text>
                  <rect x="326" y="300" width="128" height="14" rx="7" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="390" y="310" textAnchor="middle" fontSize="8" fill="#2563EB">View on Google Maps →</text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Hospitality SEO Services</h2>
            <p className="text-lg text-muted-foreground">Everything you need to fill tables, book rooms, and dominate local search.</p>
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
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Hospitality SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">More Covers. More Bookings. From Google.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Free hospitality SEO audit - we'll show you your Map Pack ranking opportunities and review strategy gaps.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Get Hospitality SEO Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
