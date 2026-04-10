import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Heart, Search, MapPin, Shield, BarChart2, Star, ArrowRight } from "lucide-react";

const services = [
  { icon: <Search size={22} />, title: "Medical Keyword Research", desc: "We target condition-specific, treatment-specific, and doctor-search queries — 'best cardiologist Dubai', 'IVF clinic UAE' — with the intent and sensitivity healthcare searches demand." },
  { icon: <MapPin size={22} />, title: "Local Medical SEO", desc: "Google Business Profile for clinics and hospitals, medical directory citations (Doctify, Vezeeta, Bayut Health), and Map Pack rankings for 'clinic near me' searches." },
  { icon: <Shield size={22} />, title: "E-E-A-T & Medical Authority", desc: "Google applies stricter quality standards to healthcare content (YMYL). We build the Experience, Expertise, Authoritativeness, and Trust signals that protect and improve healthcare rankings." },
  { icon: <Heart size={22} />, title: "Doctor & Specialist Profiles", desc: "Optimised doctor profile pages that rank for name searches and specialty queries — 'Dr [Name] Dubai', 'best [specialty] specialist UAE'." },
  { icon: <Star size={22} />, title: "Patient Review Strategy", desc: "HIPAA-compliant review generation strategy across Google, Doctify, and Healthgrades — more positive reviews, better Map Pack position, more patient bookings." },
  { icon: <BarChart2 size={22} />, title: "Appointment Booking SEO", desc: "Conversion-optimised landing pages with appointment CTAs, schema markup, and tracking that measures SEO's direct contribution to new patient acquisition." },
];

const faqs = [
  { q: "Is SEO safe for healthcare websites — won't Google penalise medical content?", a: "SEO done correctly is not just safe for healthcare — it's essential. Google applies higher scrutiny to 'Your Money or Your Life' (YMYL) content, which means you need stronger E-E-A-T signals than other industries. We build those signals: doctor credentials on content, clinical review processes, authoritative medical references, and trust-building structured data." },
  { q: "What are the most important SEO opportunities for Dubai clinics?", a: "Three areas: (1) Map Pack rankings for 'clinic near me' and specialty searches — this is where most patient acquisition happens. (2) Doctor profile pages for name searches — patients often search for a specific doctor. (3) Condition and treatment pages that answer the questions patients ask before they book." },
  { q: "Can you help with multilingual medical SEO in the UAE?", a: "Yes. UAE patients search in English, Arabic, Hindi, Tagalog, and Russian. We offer multilingual medical content in English and Arabic as standard, with additional language support available. Multilingual medical SEO significantly expands the addressable patient base." },
  { q: "How do you handle sensitive medical topics in content?", a: "All medical content is written by qualified health writers, reviewed for clinical accuracy, and authored or co-authored by your medical professionals. We comply with UAE health authority guidelines and Dubai Health Authority (DHA) digital marketing rules for licensed healthcare providers." },
];

export function HealthcareSEO() {
  return (
    <>
      <Helmet>
        <title>Healthcare SEO Dubai — SEO for Clinics, Hospitals & Doctors UAE | SEODXB</title>
        <meta name="description" content="Medical SEO services in Dubai. SEO for clinics, hospitals, and doctors — Map Pack rankings, E-E-A-T content, and patient acquisition from organic search." />
        <link rel="canonical" href="https://seodxb.com/seo-for-healthcare" />
        <meta property="og:title" content="Healthcare SEO Dubai | Medical SEO for Clinics & Hospitals | SEODXB" />
        <meta property="og:description" content="Attract more patients from Google. Map Pack rankings, doctor profile SEO, and YMYL-compliant content for Dubai healthcare providers." />
        <meta property="og:url" content="https://seodxb.com/seo-for-healthcare" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Healthcare SEO Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Healthcare SEO for Dubai clinics, hospitals, and doctors: patient-acquisition focused SEO with E-E-A-T compliance and medical content expertise.",
          "areaServed": ["Dubai", "UAE"],
          "url": "https://seodxb.com/seo-for-healthcare"
        })}</script>
      </Helmet>

      <div className="pt-24">
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Healthcare SEO</span>
                <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight text-black">
                  More Patients Find You. More Book You.
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                  76% of patients search online before choosing a healthcare provider. We make sure your clinic, hospital, or practice appears when they do — with medically compliant content that ranks and converts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <Link href="/contact">Get Healthcare SEO Audit <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
                  aria-label="Healthcare SEO dashboard showing a clinic ranked #1 in Google Map Pack for best cardiologist Dubai with 4.9 stars and a featured snippet for heart specialist UAE"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="480" height="340" rx="16" fill="white" />
                  <rect x="16" y="16" width="448" height="36" rx="18" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <text x="44" y="37" fontSize="18" fill="#4285F4">G</text>
                  <text x="68" y="37" fontSize="11" fill="#5F6368">best cardiologist Dubai</text>
                  {/* Featured snippet */}
                  <rect x="16" y="64" width="448" height="90" rx="10" fill="#FFF9F0" stroke="#FED7AA" strokeWidth="1.5" />
                  <rect x="16" y="64" width="448" height="4" rx="2" fill="#EA580C" />
                  <text x="32" y="82" fontSize="8" fill="#EA580C">seodxb-client.com › cardiology</text>
                  <text x="32" y="96" fontSize="11" fontWeight="bold" fill="#1D4ED8">Dubai Cardiac Centre — Top-Rated Cardiology Specialists</text>
                  <text x="32" y="112" fontSize="9" fill="#374151">Board-certified cardiologists with 20+ years experience. Same-day appointments available.</text>
                  <text x="32" y="128" fontSize="9" fill="#F59E0B">★★★★★</text>
                  <text x="90" y="128" fontSize="9" fill="#64748B">4.9 · 218 reviews · Cardiology Clinic</text>
                  <rect x="32" y="140" width="70" height="8" rx="4" fill="#DBEAFE" />
                  <text x="67" y="147" textAnchor="middle" fontSize="7" fill="#2563EB">Book Appointment →</text>
                  {/* Map pack */}
                  <rect x="16" y="166" width="290" height="158" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="30" y="183" fontSize="8" fontWeight="bold" fill="#1D4ED8">📍 Cardiologists Near You</text>
                  {[
                    { name: "Dubai Cardiac Centre", rating: "4.9", reviews: "218", tag: "Verified DHA" },
                    { name: "Heart & Vascular Clinic", rating: "4.6", reviews: "94", tag: "" },
                    { name: "Emirates Cardiology", rating: "4.4", reviews: "67", tag: "" },
                  ].map((clinic, i) => (
                    <g key={i}>
                      <rect x="24" y={192 + i * 42} width="274" height="34" rx="6" fill={i === 0 ? "#FFF9F0" : "#F8FAFC"} stroke={i === 0 ? "#FED7AA" : "#E2E8F0"} strokeWidth="1" />
                      <text x="40" y={209 + i * 42} fontSize="9" fontWeight={i === 0 ? "bold" : "normal"} fill="#0F172A">{clinic.name}</text>
                      {clinic.tag && <rect x="170" y={196 + i * 42} width="70" height="12" rx="6" fill="#DCFCE7" />}
                      {clinic.tag && <text x="205" y={205 + i * 42} textAnchor="middle" fontSize="7" fill="#15803D">{clinic.tag}</text>}
                      <text x="40" y={219 + i * 42} fontSize="8" fill="#F59E0B">{"★".repeat(Math.floor(parseFloat(clinic.rating)))}</text>
                      <text x={40 + Math.floor(parseFloat(clinic.rating)) * 9} y={219 + i * 42} fontSize="8" fill="#64748B"> {clinic.rating} ({clinic.reviews})</text>
                    </g>
                  ))}
                  {/* Metrics */}
                  <rect x="316" y="166" width="148" height="76" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="390" y="190" textAnchor="middle" fontSize="22" fontWeight="black" fill="#16A34A">+94%</text>
                  <text x="390" y="207" textAnchor="middle" fontSize="9" fill="#064E3B">New Patient</text>
                  <text x="390" y="220" textAnchor="middle" fontSize="9" fill="#064E3B">Enquiries (YoY)</text>
                  <rect x="316" y="252" width="148" height="72" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <text x="390" y="277" textAnchor="middle" fontSize="22" fontWeight="black" fill="#2563EB">2.1x</text>
                  <text x="390" y="293" textAnchor="middle" fontSize="9" fill="#1E40AF">More Bookings</text>
                  <text x="390" y="306" textAnchor="middle" fontSize="8" fill="#64748B">vs paid ads</text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Healthcare SEO Services</h2>
            <p className="text-lg text-muted-foreground">YMYL-compliant SEO built for clinics, hospitals, and medical professionals in Dubai.</p>
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
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">Healthcare SEO FAQ</h2>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Grow Your Practice with Organic Patient Acquisition</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
              Free healthcare SEO audit — we'll identify your top patient-acquisition keyword opportunities and ranking gaps.
            </p>
            <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-10 py-6 text-lg" asChild>
              <Link href="/contact">Get Healthcare SEO Audit <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
