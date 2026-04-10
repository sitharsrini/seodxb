import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, Search, FileText, Infinity, Star, BarChart2, Wrench, Globe, PenSquare, Plane, Globe2, Camera, Heart, Plus } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import logoImg from "@assets/SEODXB_HD_1775726631117.svg";

const testimonials = [
  { text: "SEO DXB helped us rank higher and attract better quality enquiries.", author: "Yuok Yong", company: "Property Management Client" },
  { text: "Their team delivered a remarkable and awesome website with professionalism and creativity.", author: "Ava Moreno", company: "NovaTech Solutions" },
  { text: "SEODXB's creative team delivered a remarkable website that surpassed expectations.", author: "Ethan Sawyer", company: "Listi" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function PricingCard() {
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
    { icon: <Globe2 size={15} className="text-orange-500" />, text: "Website development", color: "text-orange-500" },
    { icon: <Camera size={15} className="text-blue-400" />, text: "Social media", color: "text-blue-500" },
    { icon: <Heart size={15} className="text-orange-400" />, text: "Branding", color: "text-orange-400" },
    { icon: <Camera size={15} className="text-gray-600" />, text: "Photography / Videography", color: "text-gray-600" },
    { icon: <Plus size={15} className="text-gray-400" />, text: "And More...", color: "text-gray-400" },
  ];

  return (
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
            <button
              type="button"
              aria-label="Add website build to Startup plan"
              className="text-xs font-bold text-primary border border-primary rounded-full px-3 py-1 hover:bg-primary hover:text-white transition-colors"
            >
              + Add
            </button>
          </div>
          <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold text-base" asChild>
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
        <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold text-base" asChild>
          <Link href="/contact">Get Started Today <ArrowRight size={16} className="ml-2" /></Link>
        </Button>
      </motion.div>

      {/* CUSTOM */}
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7 flex flex-col mt-7"
        data-testid="card-plan-custom"
      >
        <div className="mb-5">
          <Globe2 size={28} className="text-primary mb-4" />
          <p className="text-xs font-bold text-primary tracking-widest uppercase mb-3">CUSTOM</p>
          <p className="text-xl font-black text-black leading-snug">
            We Offer Extensive Digital Solutions{" "}
            <span className="font-normal text-gray-400">to take your business to the skies in Dubai!</span>
          </p>
        </div>
        <ul className="space-y-3 mb-8 flex-1 mt-4">
          {customServices.map((s, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              {s.icon}
              <span className={s.color}>{s.text}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold text-base" asChild>
          <Link href="/contact">Get a Quote <ArrowRight size={16} className="ml-2" /></Link>
        </Button>
      </motion.div>
    </div>
  );
}

export function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    url: "",
    message: "",
  });

  const updateField = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `New enquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Company URL: ${form.url}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:hi@Listi.ae?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-start gap-5"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
              <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
              SEODXB - Your trusted SEO Agency
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.4rem,5vw,3.6rem)] font-black leading-[1.05] tracking-[-0.03em] text-black"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              We Help The Right People Find Your Website.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-base text-gray-500 leading-relaxed max-w-lg">
              As specialists in On-Page SEO and AI Search Engine Optimization, we solve the biggest problem most websites face: a lack of traffic. We help the right people find you, trust you, and come to you organically.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="rounded-full font-semibold px-8 py-6 text-base bg-primary hover:bg-primary/90"
                asChild
                data-testid="button-see-plans"
              >
                <Link href="/pricing">See Plans &amp; Pricing <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-4 w-full">
              <p className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">Trusted by Leading Brands:</p>
              <div className="flex flex-wrap items-center gap-6 opacity-40 grayscale">
                {["N", "◎", "LOGO", "✦", "|||"].map((brand, i) => (
                  <div key={i} className="h-7 flex items-center justify-center font-black text-lg text-gray-800 w-12">{brand}</div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side: Logo + Testimonial carousel (matches original) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden relative z-10">
              {/* Big logo area */}
              <div className="flex items-center justify-center py-10 px-8 border-b border-gray-100 bg-gray-50/50">
                <img
                  src={logoImg}
                  alt="SEODXB"
                  style={{ height: '44px', width: '220px', objectFit: 'cover', objectPosition: 'center 50%' }}
                />
              </div>
              {/* Navigation arrows */}
              <div className="flex items-center gap-4 px-6 py-3 border-b border-gray-100">
                <button onClick={scrollPrev} className="p-1 hover:text-primary transition-colors" data-testid="button-prev-testimonial">
                  <ArrowLeft size={18} className="text-gray-400" />
                </button>
                <button onClick={scrollNext} className="p-1 hover:text-primary transition-colors" data-testid="button-next-testimonial">
                  <ArrowRight size={18} className="text-gray-400" />
                </button>
              </div>
              {/* Testimonials */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((t, i) => (
                    <div key={i} className="flex-[0_0_100%] min-w-0 p-6">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        <span className="font-bold text-black">SEO DXB</span>{" "}
                        {t.text.replace("SEO DXB ", "")}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-200 shrink-0 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-black">{t.author}</p>
                          <p className="text-xs text-gray-400">{t.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Dots indicator */}
              <div className="flex justify-center gap-1.5 pb-4">
                {testimonials.map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[350px] max-h-[350px] bg-blue-400/10 blur-[80px] rounded-full z-0 pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. Marquee / Ticker Band */}
      <div className="bg-[#C8FF00] overflow-hidden whitespace-nowrap py-4 border-y border-black/5">
        <div className="inline-block animate-marquee font-heading font-black text-xl md:text-2xl tracking-widest text-black uppercase">
          STUDIO + STRATEGY + BRANDING + DIGITAL AGENCY + TYPOGRAPHY + DESIGN + INTERACTION + DIGITAL STUDIO + SOLUTION + DEVELOPMENT + STUDIO + STRATEGY + BRANDING + DIGITAL AGENCY + TYPOGRAPHY + DESIGN + INTERACTION + DIGITAL STUDIO + SOLUTION + DEVELOPMENT +&nbsp;
        </div>
      </div>

      {/* 3. Services Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header row */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold text-primary tracking-widest uppercase mb-3 flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary"><rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" opacity="0.4"/><rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor"/><rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.4"/></svg>
                Services
                <span className="flex-1 border-t border-gray-200"></span>
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.02em]">
                The New Trilogy of <br />
                <em className="not-italic font-black italic text-gray-800">Search Dominance</em>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
              className="text-gray-500 text-sm leading-relaxed pt-2"
            >
              Search is no longer just blue links. Your customers are asking AI assistants, getting instant answers, and expecting your brand to appear across every search surface from Google's AI Overviews to ChatGPT. SEODXB masters all three layers of modern search visibility, customized to your niche.
            </motion.p>
          </div>

          {/* Cards grid */}
          <div className="grid lg:grid-cols-2 gap-5">
            {/* Left: SEO card with animated globe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1" fill="#1D64FF" opacity="0.5"/><rect x="9" y="1" width="6" height="6" rx="1" fill="#1D64FF"/><rect x="1" y="9" width="6" height="6" rx="1" fill="#1D64FF"/><rect x="9" y="9" width="6" height="6" rx="1" fill="#1D64FF" opacity="0.5"/></svg>
                  </div>
                  <span className="text-base font-black text-primary">SEO</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">3-6 Weeks Delivery</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Niche-focused keyword strategy, technical excellence, and content authority that places your Dubai business at the top of Google Search, where high-intent buyers are actively looking.
              </p>

              {/* Animated Globe */}
              <div className="relative flex flex-col items-center justify-center py-6">
                <div className="relative w-48 h-48">
                  {/* Globe base */}
                  <div className="globe-spin absolute inset-0 rounded-full border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-25">
                      <ellipse cx="50" cy="50" rx="48" ry="48" fill="none" stroke="#9ca3af" strokeWidth="0.8"/>
                      <ellipse cx="50" cy="50" rx="30" ry="48" fill="none" stroke="#9ca3af" strokeWidth="0.8"/>
                      <ellipse cx="50" cy="50" rx="48" ry="20" fill="none" stroke="#9ca3af" strokeWidth="0.8"/>
                      <line x1="2" y1="50" x2="98" y2="50" stroke="#9ca3af" strokeWidth="0.8"/>
                      <line x1="50" y1="2" x2="50" y2="98" stroke="#9ca3af" strokeWidth="0.8"/>
                    </svg>
                  </div>

                  {/* Orbiting icons via CSS - negative animationDelay is valid in CSS */}
                  <div className="orbit-icon" style={{ backgroundColor: "#ec4899", animationDelay: "0s" }}>♥</div>
                  <div className="orbit-icon" style={{ backgroundColor: "#22c55e", animationDelay: "-2.25s" }}>⚡</div>
                  <div className="orbit-icon" style={{ backgroundColor: "#f59e0b", animationDelay: "-4.5s" }}>✉</div>
                  <div className="orbit-icon" style={{ backgroundColor: "#3b82f6", animationDelay: "-6.75s" }}>⟳</div>

                  {/* Center pulse dot */}
                  <div className="pulse-glow absolute top-1/2 left-1/2 w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold"
                    style={{ marginLeft: -14, marginTop: -14 }}>
                    ≡
                  </div>
                </div>

                <p className="mt-6 font-black text-base text-black">SEO Optimization</p>
                <p className="text-xs text-gray-400 mt-1">Boosting your website's search engine visibility.</p>
              </div>
            </motion.div>

            {/* Right column: AEO + GEO + Preview */}
            <div className="flex flex-col gap-5">
              {/* AEO Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2L14 8L8 14" stroke="#1D64FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 8H14" stroke="#1D64FF" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                    <span className="text-base font-black text-primary">AEO</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">1 Week Delivery</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Optimize your content to be the answer in voice search, featured snippets, Google's People Also Ask, and AI-generated responses. Become the authority your niche turns to.
                </p>
              </motion.div>

              {/* GEO Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="#1D64FF" strokeWidth="1.5"/>
                        <path d="M8 2C8 2 6 5 6 8C6 11 8 14 8 14" stroke="#1D64FF" strokeWidth="1.5"/>
                        <path d="M8 2C8 2 10 5 10 8C10 11 8 14 8 14" stroke="#1D64FF" strokeWidth="1.5"/>
                        <path d="M2 8H14" stroke="#1D64FF" strokeWidth="1.5"/>
                      </svg>
                    </motion.div>
                    <span className="text-base font-black text-primary">GEO</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">2-4 Weeks Delivery</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The frontier of search. Ensure your brand is cited, recommended, and surfaced by AI tools like ChatGPT, Google Gemini, Perplexity, and Claude when users ask about your industry in Dubai.
                </p>
              </motion.div>

              {/* Preview card: Google AI Overviews */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow overflow-hidden relative"
              >
                <div className="relative z-10">
                  <p className="text-xl font-black leading-snug mb-4">
                    Will <span className="text-primary">Google's AI</span>{" "}
                    <span className="text-primary">Overviews</span> impact your business?
                  </p>
                  <p className="text-sm text-gray-400 mb-4">We help you stay visible in every AI-generated search result.</p>
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                      GEO Strategy Included
                    </motion.span>
                  </div>
                </div>
                {/* Decorative animated dots */}
                <div className="absolute bottom-0 right-0 flex gap-2 p-5 opacity-20">
                  {[0,1,2].map(i => (
                    <motion.div
                      key={i}
                      className="w-16 h-24 bg-gray-300 rounded-xl"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">PROCESS</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em]">Built for <em className="font-normal not-italic text-gray-400">Your Niche,</em> Not Generic Markets</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { num: "Step 1", title: "Niche Discovery", desc: "Deep-dive into your industry, competitors, and search landscape to map every opportunity in your Dubai niche." },
              { num: "Step 2", title: "Strategy Blueprint", desc: "Custom SEO, AEO and GEO roadmap aligned to your business goals, audience intent, and budget." },
              { num: "Step 3", title: "We Start Development.", desc: "Our skilled developers bring your designs to life, crafting a robust and scalable solution." },
              { num: "Step 4", title: "And We Deliver.", desc: "Track & Scale Monthly reporting across Google rankings, AI citations, featured snippets, and organic revenue growth." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-7 bg-slate-50 rounded-3xl border border-transparent hover:border-gray-200 transition-colors"
              >
                <div className="shrink-0">
                  <p className="text-xs font-bold text-primary mb-1">{step.num}</p>
                  <div className="w-8 h-px bg-primary/30 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Comparison Section */}
      <section className="py-24 bg-black text-white px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#C8FF00] tracking-widest uppercase mb-4 block">Future-Proof Approach</span>
            <h2 className="text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl mx-auto text-white/80">
              "While others optimize for yesterday's Google, we prepare your brand for AI search, voice, and generative results. These are the surfaces defining tomorrow's traffic."
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-lg font-bold mb-6 text-white/90 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#C8FF00]" /> With SEO DXB
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "The Full Search Trilogy", sub: "SEO, AEO, and GEO under one roof. Every visibility surface covered from Google to ChatGPT." },
                  { title: "Answer Engine Ready", sub: "Optimized for featured snippets, voice search, People Also Ask, and AI-generated answer boxes." },
                  { title: "Deep Technical Mastery", sub: "Full crawl audit, Core Web Vitals, schema markup, site architecture, and indexing health covered." },
                  { title: "Ongoing Competitive Intelligence", sub: "Monthly gap analysis tracking competitor keyword gains, content moves, and backlink acquisitions." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={16} className="text-[#C8FF00] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 opacity-60">
              <h3 className="text-lg font-bold mb-6 text-white/90 flex items-center gap-2">
                <XCircle size={20} className="text-red-500" /> Without SEO DXB
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "SEO Only", sub: "SEO only, sometimes PPC bolted on. AI search surfaces completely ignored." },
                  { title: "AEO?", sub: "Most agencies don't offer AEO. Many don't even know what it stands for." },
                  { title: "Surface-Level Fixes", sub: "Basic on-page tweaks: title tags, meta descriptions, and very little else." },
                  { title: "One-Time Audit", sub: "A competitor overview done at onboarding and never revisited, even as the landscape shifts." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <XCircle size={16} className="text-red-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xs text-white/40 italic max-w-2xl mx-auto">No agency can guarantee first page rankings on search engines. Real Search Engine Optimisation is built on strategy, technical precision and authority. We focus on high intent keywords, structured content and powerful ranking signals. Visibility is earned through execution and consistency, not empty promises.</p>
            <Button className="mt-8 rounded-full px-8 py-6 bg-white text-black hover:bg-white/90 font-semibold" asChild>
              <Link href="/pricing">See Plans &amp; Pricing →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Pricing Preview */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">Plans &amp; Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] mb-3">Transparent Pricing,<br />No Surprises Guaranteed!</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">No contracts or meetings. Pause or cancel anytime. Choose the plan that best suits your needs.</p>
        </div>
        <PricingCard />
        <div className="text-center mt-12 space-y-3">
          <p className="text-lg font-bold">Still Can't Decide? Let Us Help you Make the Right Decision.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="outline" className="rounded-full px-6" asChild><a href="mailto:hi@Listi.ae">Send Us an Email</a></Button>
            <Button className="rounded-full px-6 bg-primary" asChild><Link href="/contact">Schedule a Call</Link></Button>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">FAQS</p>
            <h2 className="text-4xl font-black tracking-[-0.02em]">Frequently Asked Questions!</h2>
            <p className="text-gray-400 text-sm mt-3">Can't Find Your Answer Here? We Can Help Out!</p>
          </div>
          <Accordion type="single" collapsible className="w-full bg-white rounded-3xl border border-gray-200 shadow-sm divide-y divide-gray-100">
            {[
              { q: "How long does SEO take to show results in Dubai?", a: "Most businesses see measurable ranking improvements within 60 to 90 days. Strong competitive growth typically becomes visible between months 4 and 6." },
              { q: "Do you specialise in specific industries in Dubai?", a: "Yes, we tailor every strategy to your industry's unique search behaviour, competitor landscape, and customer intent rather than using generic templates." },
              { q: "What does a free SEO audit include?", a: "A comprehensive technical review, on-page analysis, keyword gap assessment, competitor benchmarking, and actionable recommendations." },
              { q: "Why choose your SEODXB agency in Dubai?", a: "We are one of the few agencies offering the full SEO, AEO, and GEO trilogy, future-proofing your visibility across traditional and AI-powered search surfaces." },
              { q: "How competitive is SEO in Dubai?", a: "Highly competitive. Dubai's market demands precision, niche targeting, and consistent quality content to achieve and maintain top rankings." },
              { q: "What is the difference between SEO, AEO, and GEO?", a: "SEO targets traditional search engines. AEO optimizes for answer engines (voice, featured snippets, PAA). GEO ensures your brand is cited by generative AI models like ChatGPT and Gemini." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none px-6">
                <AccordionTrigger className="text-base font-bold hover:no-underline hover:text-primary py-5 text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 10. CTA + Contact Form */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Only 2 Spots Left
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] mt-4 mb-2">Partner with Us and Elevate<br />Your Business to New Heights!</h2>
          <Button size="lg" className="rounded-full font-semibold px-8 mt-4 bg-primary" asChild>
            <Link href="/pricing">See Plans &amp; Pricing →</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="bg-primary text-white rounded-[2rem] p-8 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="grid lg:grid-cols-2 gap-14 relative z-10">
            <div>
              <p className="text-[#C8FF00] font-bold text-sm tracking-widest uppercase mb-3">LET'S CHAT</p>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-[-0.02em]">Book A Call with Us.<br />And Let's Work Together.</h2>
              <p className="text-white/70 text-base mb-10 max-w-sm">Ready to discuss your project? Book a call with our experts to explore how we can help you achieve your vision.</p>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="flex text-[#C8FF00] mb-3 text-sm">★★★★★</div>
                <p className="italic mb-3 text-sm leading-relaxed text-white/80">"SEO DXB helped us rank higher and attract better quality enquiries."</p>
                <p className="font-bold text-sm">Yuok Yong, Property Management Client</p>
              </div>
            </div>
            <div className="bg-white text-black rounded-2xl p-7 shadow-xl">
              <h3 className="text-xl font-black mb-5">Send us a message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="home-name" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Name</label>
                    <Input
                      id="home-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={updateField("name")}
                      placeholder="John Doe"
                      className="bg-gray-50 rounded-xl border-gray-200"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="home-phone" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Contact number</label>
                    <Input
                      id="home-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      value={form.phone}
                      onChange={updateField("phone")}
                      placeholder="+971 50..."
                      className="bg-gray-50 rounded-xl border-gray-200"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="home-email" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email</label>
                  <Input
                    id="home-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={updateField("email")}
                    placeholder="john@company.com"
                    className="bg-gray-50 rounded-xl border-gray-200"
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="home-url" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Company URL</label>
                  <Input
                    id="home-url"
                    name="url"
                    type="url"
                    autoComplete="url"
                    value={form.url}
                    onChange={updateField("url")}
                    placeholder="https://example.com"
                    className="bg-gray-50 rounded-xl border-gray-200"
                    data-testid="input-url"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="home-message" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Message</label>
                  <Textarea
                    id="home-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={updateField("message")}
                    placeholder="How can we help you?"
                    className="bg-gray-50 rounded-xl border-gray-200 min-h-[90px]"
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-black hover:bg-black/90 text-white py-6 text-base font-bold"
                  data-testid="button-submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
