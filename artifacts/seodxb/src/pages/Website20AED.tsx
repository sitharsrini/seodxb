import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2, ArrowRight, Loader2, CheckCircle, AlertCircle,
  Globe, Smartphone, Zap, Shield, MessageCircle, Phone
} from "lucide-react";
import { track } from "@/lib/track";

type FormStatus = "idle" | "sending" | "success" | "error";

const FEATURES = [
  { icon: Globe, title: "Professional Design", desc: "Clean, modern website that represents your Dubai business with credibility." },
  { icon: Smartphone, title: "Mobile Optimised", desc: "Looks perfect on every device. Over 70% of UAE users browse on mobile." },
  { icon: Zap, title: "Fast & Secure", desc: "Lightning-fast loading speed and SSL certificate included." },
  { icon: Shield, title: "SEO-Ready Structure", desc: "Built with correct H1s, meta tags, schema markup, and canonical tags from day one." },
];

const INCLUDED = [
  "Up to 5 pages (Home, About, Services, Contact, Blog)",
  "Mobile-responsive design",
  "Contact form",
  "Google Maps embed",
  "SSL certificate",
  "Basic on-page SEO setup",
  "Social media links",
  "1 round of revision",
];

const TC = [
  "Available exclusively for Dubai-registered businesses (trade licence required).",
  "Offer applies to standard 5-page informational websites only. E-commerce, booking systems, and custom development are not included.",
  "The AED 20 price is a one-time setup contribution. Ongoing hosting is the client's responsibility.",
  "Domain registration is not included. Client must provide an existing domain or purchase one separately.",
  "Delivery timeline is 7-10 business days after all content and assets are received.",
  "Limited availability. SEODXB reserves the right to close this offer at any time without notice.",
  "One website per business entity (trade licence).",
  "Content (text, images, logos) must be supplied by the client. SEODXB does not create original copy under this offer.",
];

export function Website20AED() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(formRef.current));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject: "20 AED Website Offer Enquiry" }),
      });
      if (!res.ok) throw new Error("failed");
      track("generate_lead", { method: "website_offer_form", offer: "20aed" });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Get Your Business Website for AED 20 | Dubai Only | SEODXB</title>
        <meta name="description" content="Dubai businesses only: get a professional, SEO-ready website built for just AED 20. Mobile-optimised, fast, and includes basic SEO setup. Terms and conditions apply. Limited availability." />
        <link rel="canonical" href="https://seodxb.com/website-20-aed" />
        <meta property="og:title" content="Get Your Business Website for AED 20 | Dubai Only | SEODXB" />
        <meta property="og:description" content="Dubai businesses only: get a professional, SEO-ready website built for just AED 20. Mobile-optimised, fast, and includes basic SEO setup. Terms and conditions apply." />
        <meta property="og:url" content="https://seodxb.com/website-20-aed" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://seodxb.com/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Your Business Website for AED 20 | Dubai Only | SEODXB" />
        <meta name="twitter:description" content="Dubai businesses only: professional SEO-ready website for just AED 20. Terms apply." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          "name": "Business Website for AED 20",
          "description": "Professional, SEO-ready 5-page website for Dubai-registered businesses for a one-time contribution of AED 20.",
          "price": "20",
          "priceCurrency": "AED",
          "eligibleRegion": { "@type": "Place", "name": "Dubai, UAE" },
          "seller": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "availability": "https://schema.org/LimitedAvailability",
        })}</script>
      </Helmet>

      <div className="pt-24">

        {/* ── Hero ── */}
        <section className="bg-black text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-[#C8FF00] text-black text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                Dubai Businesses Only
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] mb-4 leading-none">
                Your Website.<br />
                <span className="text-[#C8FF00]">Just AED 20.</span>
              </h1>
              <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Get a professional, mobile-optimised, SEO-ready website built for your Dubai business for a one-time contribution of AED 20. Limited spots available.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-black px-10 py-6 text-lg"
                  asChild
                >
                  <a href="#claim">Claim Your Spot <ArrowRight size={18} className="ml-2" /></a>
                </Button>
                <a
                  href="https://wa.me/971521551198?text=Hi%20SEODXB%2C%20I%27m%20interested%20in%20the%20AED%2020%20website%20offer."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { offer: "20aed" })}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-3 transition-all"
                >
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
              <p className="mt-6 text-white/40 text-sm">* Terms and conditions apply. See below.</p>
            </motion.div>
          </div>
        </section>

        {/* ── Urgency bar ── */}
        <div className="bg-[#C8FF00] py-3 text-black text-center text-sm font-bold tracking-wide">
          Limited offer for Dubai-registered businesses only. Trade licence verification required.
        </div>

        {/* ── What you get ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-black tracking-[-0.02em]">What You Get for AED 20</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">A real, complete website. Not a template. Not a trial. Yours — built and handed over.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {FEATURES.map((f) => (
                <div key={f.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <f.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Included list */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-black text-xl mb-6">Everything included:</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Price callout ── */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-primary-foreground/70 font-bold tracking-widest uppercase text-sm mb-3">One-time contribution</p>
            <div className="flex items-end justify-center gap-2 mb-4">
              <span className="text-8xl font-black leading-none">20</span>
              <span className="text-4xl font-black mb-3">AED</span>
            </div>
            <p className="text-white/70 max-w-md mx-auto mb-8">No monthly fees from us. No hidden charges. Just a professional website to get your Dubai business online.</p>
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 font-black px-10 py-6 text-lg" asChild>
              <a href="#claim">Claim Your Spot <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </div>
        </section>

        {/* ── Who qualifies ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black tracking-[-0.02em]">Who Qualifies?</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { title: "Dubai-registered", desc: "Your business must have a valid Dubai trade licence (DED, free zone, or mainland)." },
                { title: "No current website", desc: "This offer is for businesses without an existing live website, or whose site is more than 3 years old." },
                { title: "Ready to provide content", desc: "You supply your logo, images, text, and business details. We build and launch." },
              ].map((q) => (
                <div key={q.title} className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{q.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Claim form ── */}
        <section id="claim" className="py-24 bg-black text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <p className="text-[#C8FF00] font-bold text-sm tracking-widest uppercase mb-4">Limited Spots</p>
                <h2 className="text-4xl font-black mb-4 tracking-[-0.02em]">Claim Your AED 20 Website</h2>
                <p className="text-white/70 mb-8 leading-relaxed">Fill in the form and our team will confirm your eligibility within 24 hours. No payment until we've verified your trade licence and confirmed availability.</p>
                <ul className="space-y-3 mb-8">
                  {["Dubai trade licence required", "No payment until eligibility confirmed", "Response within 24 hours", "Limited spots — first come, first served"].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                      <CheckCircle2 size={15} className="text-[#C8FF00] shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/971521551198?text=Hi%20SEODXB%2C%20I%27m%20interested%20in%20the%20AED%2020%20website%20offer."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("whatsapp_click", { offer: "20aed" })}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3.5 transition-all"
                  >
                    <MessageCircle size={18} /> WhatsApp Us
                  </a>
                  <a
                    href="tel:+971521551198"
                    onClick={() => track("call_click", { offer: "20aed" })}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3.5 transition-all"
                  >
                    <Phone size={18} /> +971 52 155 1198
                  </a>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <CheckCircle size={48} className="text-[#C8FF00]" />
                    <p className="text-2xl font-black">Request received!</p>
                    <p className="text-white/70">We will confirm your eligibility and get back to you within 24 hours.</p>
                    <Button variant="outline" className="mt-2 rounded-full border-white/30 text-white hover:bg-white/10" onClick={() => setStatus("idle")}>
                      Submit another
                    </Button>
                  </div>
                ) : (
                  <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-white/80">Your Name</label>
                        <Input name="from_name" placeholder="Ahmed Al Farsi" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 py-5" required />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-white/80">Phone</label>
                        <Input name="phone" placeholder="+971 50..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 py-5" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-white/80">Email</label>
                      <Input name="reply_to" type="email" placeholder="you@company.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 py-5" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-white/80">Business Name</label>
                      <Input name="company_url" placeholder="Your Dubai business name" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 py-5" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-white/80">Trade Licence Number</label>
                      <Input name="trade_licence" placeholder="DED / Free Zone number" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 py-5" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-white/80">What does your business do?</label>
                      <Textarea name="message" placeholder="Brief description of your business..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[90px] resize-none text-base p-4" required />
                    </div>
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/30 border border-red-500/30 rounded-lg px-4 py-3">
                        <AlertCircle size={16} /> Something went wrong. WhatsApp us instead.
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-black py-6 text-base shadow-lg transition-all hover:scale-[1.02] disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /> Sending...</span>
                      ) : (
                        <>Claim My AED 20 Website <ArrowRight size={16} className="ml-2" /></>
                      )}
                    </Button>
                    <p className="text-white/30 text-xs text-center">By submitting you agree to our terms and conditions below.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Terms & Conditions ── */}
        <section className="py-20 bg-slate-50 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-black mb-2">Terms &amp; Conditions</h2>
            <p className="text-gray-500 text-sm mb-8">Please read carefully before claiming this offer.</p>
            <ol className="space-y-4">
              {TC.map((t, i) => (
                <li key={i} className="flex gap-4 text-sm text-gray-700 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ol>
            <div className="mt-10 text-center">
              <Link href="/contact" className="text-primary text-sm font-semibold hover:underline">Questions? Contact us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
