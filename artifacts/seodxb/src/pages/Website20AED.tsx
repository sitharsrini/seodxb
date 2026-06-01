import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, X, ArrowRight, Globe, Shield, Mail, Zap,
  MessageCircle, Phone, AlertTriangle, Info, ChevronRight,
  FileText, RefreshCw, Star, Settings, Lock
} from "lucide-react";
import { track } from "@/lib/track";

/* ─────────────── Data ─────────────── */

const PLANS = [
  {
    name: "Free Plan",
    price: "20",
    pages: "1 Page",
    pageDesc: "Single-page service landing",
    tag: "",
    features: [
      "Responsive design",
      "Secure HTTPS hosting",
      "Email lead capture",
      "Contact form with notifications",
    ],
    extras: [],
    color: "border-slate-200",
    badge: "",
  },
  {
    name: "Flexi Plan",
    price: "5",
    pages: "3 Pages",
    pageDesc: "Home, About, Contact",
    tag: "249 AED plan",
    features: [
      "Responsive design",
      "Secure HTTPS hosting",
      "Email lead capture",
      "Contact form with notifications",
    ],
    extras: [],
    color: "border-primary",
    badge: "Most Popular",
  },
  {
    name: "Growth Plan",
    price: "5",
    pages: "5 Pages",
    pageDesc: "Home, About, Services, Contact, Portfolio",
    tag: "999 AED plan",
    features: [
      "Responsive design",
      "Secure HTTPS hosting",
      "Email lead capture",
      "Contact form with notifications",
      "Blog section included",
      "Admin panel access",
    ],
    extras: ["Blog", "Admin Access"],
    color: "border-slate-200",
    badge: "Best Value",
  },
];

const HOW_IT_WORKS = [
  { n: "1", title: "Submit Your Listing on Listi", desc: "Sign up as a business and complete your listing profile on Listi.ae." },
  { n: "2", title: "Pay from Dashboard", desc: "A one-time fee (5 AED for paid plans, 20 AED for free plan) to unlock the website brief form." },
  { n: "3", title: "Fill the Website Brief Form", desc: "Submit your content, images, brand preferences, and domain name. One-time submission only." },
  { n: "4", title: "We Build & Deliver", desc: "Your site goes live within 5-7 business days, subject to admin approval. Login credentials shared on completion." },
];

const CAN_CLAIM = [
  "Business accounts with a submitted and approved listing on Listi.ae",
  "Businesses on any active plan (Free, Flexi, or Growth)",
  "One claim per business — first-time only",
];

const CANNOT_CLAIM = [
  "Referrer accounts or individual users",
  "Businesses with listings in draft status (must be submitted first)",
  "Suspended or deactivated accounts",
  "Businesses found in violation of Listi's policies",
  "Businesses that have already claimed and received a website under this offer",
];

const WHAT_WE_BUILD = [
  "Static service landing pages",
  "Responsive mobile-ready design",
  "Secure HTTPS hosting",
  "Contact form with email notifications",
  "Social media links",
  "Google Maps embed",
  "Header, Hero, About, Services, Footer",
];

const WHAT_WE_DONT_BUILD = [
  "E-commerce stores or online shops",
  "Web-based applications or SaaS platforms",
  "Booking / reservation systems",
  "Membership or login-based portals",
  "Payment gateway integrations",
  "Custom databases or backend systems",
  "CMS-based blogs (except 999 plan)",
  "Multi-language websites",
];

const PAYMENT_TABLE = [
  { item: "Website claim (Free plan)", fee: "20 AED", refund: "Yes — if rejected by Listi" },
  { item: "Website claim (Flexi plan)", fee: "5 AED", refund: "Yes — if rejected by Listi" },
  { item: "Website claim (Growth plan)", fee: "5 AED", refund: "Yes — if rejected by Listi" },
  { item: "Additional section or page", fee: "49 AED", refund: "No" },
  { item: "Change request (post-delivery)", fee: "49 AED / section", refund: "No (after implementation)" },
  { item: "Full redesign", fee: "999 AED", refund: "No" },
  { item: "Maintenance — first 2 days", fee: "Free", refund: "N/A" },
  { item: "Maintenance — after 2 days", fee: "99 AED / 30-day window", refund: "No" },
  { item: "Domain purchase (if needed)", fee: "Varies", refund: "No (paid by business user)" },
  { item: "Email configuration", fee: "99 AED one-time setup", refund: "No" },
  { item: "Email hosting", fee: "As per Google / Microsoft pricing", refund: "N/A" },
  { item: "Annual renewal", fee: "999 AED / year (after 1st year)", refund: "No" },
  { item: "Ownership transfer", fee: "499 AED one-time", refund: "No" },
  { item: "Basic on-page SEO (optional)", fee: "99 AED one-time", refund: "No" },
  { item: "Monthly SEO package (optional)", fee: "1,200 AED / month", refund: "No (cancel with 30 days notice)" },
  { item: "Content creation assistance (optional)", fee: "99 AED one-time", refund: "No" },
];

const QUICK_REF = [
  ["Claim fee", "5 AED or 20 AED depending on plan (one-time)"],
  ["What we build", "Static service pages only"],
  ["What we don't build", "E-commerce, web apps, booking systems"],
  ["Domain", "Provide your own or request purchase (additional cost)"],
  ["Hosting", "Secure hosting + HTTPS, managed by Listi"],
  ["Lead capture", "Email notifications (750-1,000/month) + stored leads"],
  ["999 plan extras", "Blog + Admin panel access"],
  ["Eligibility", "Business accounts with approved listing only"],
  ["Rejection", "Listi may reject — full refund of claim fee issued"],
  ["Changes after delivery", "49 AED per section"],
  ["Full redesign", "999 AED (via support)"],
  ["Free maintenance", "2 days (48 hours) from go-live"],
  ["Paid maintenance", "99 AED for 30 days (bugs/errors only)"],
  ["Annual renewal", "999 AED / year (after 1st year)"],
  ["Ownership transfer", "499 AED (full code + backend)"],
  ["Basic on-page SEO (optional)", "99 AED one-time setup"],
  ["Monthly SEO (optional)", "1,200 AED / month"],
  ["Images allowed", "Up to 10 images, max 5 MB each, JPG/PNG/WebP"],
  ["Form submission", "One-time only, within 30 days"],
  ["Delivery", "5-7 business days (subject to admin approval)"],
  ["Change turnaround", "2-3 business days"],
];

/* ─────────────── Sub-components ─────────────── */

function SectionHeader({ tag, title, sub }: { tag?: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-14">
      {tag && <span className="inline-block text-xs font-black tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">{tag}</span>}
      <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-black">{title}</h2>
      {sub && <p className="text-gray-500 mt-3 max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-700">
      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
      {text}
    </li>
  );
}

function Cross({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-500">
      <X size={16} className="text-red-400 shrink-0 mt-0.5" />
      {text}
    </li>
  );
}

/* ─────────────── Main page ─────────────── */

export function Website20AED() {
  return (
    <>
      <Helmet>
        <title>Professional Website from 5 AED | Listi.ae Business Offer | SEODXB</title>
        <meta name="description" content="Listi.ae business users get a professional, SEO-ready website from just 5 AED. Free plan: 20 AED (1 page). Flexi/Growth plans: 5 AED (3-5 pages). Secure hosting, HTTPS, and email lead capture included." />
        <link rel="canonical" href="https://seodxb.com/website-20-aed" />
        <meta property="og:title" content="Professional Website from 5 AED | Listi.ae Business Offer" />
        <meta property="og:description" content="Listi.ae business users: professional website from just 5 AED. Paid plans 5 AED, Free plan 20 AED. Secure hosting, HTTPS, lead capture included." />
        <meta property="og:url" content="https://seodxb.com/website-20-aed" />
        <meta property="og:image" content="https://seodxb.com/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="pt-24">

        {/* ── Hero ── */}
        <section className="bg-black text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
          <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block bg-[#C8FF00] text-black text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                Limited-Time Promotion — Listi.ae Business Users Only
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] mb-5 leading-none">
                Professional Website<br />
                <span className="text-[#C8FF00]">From Just 5 AED.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
                Get a professionally designed service website with secure hosting, HTTPS, and email lead capture — all included. Paid plan users (Flexi/Growth) pay 5 AED. Free plan users pay 20 AED.
              </p>
              <p className="text-white/40 text-sm mb-10">Additional sections available at 49 AED each. Terms and conditions apply.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-black px-10 py-6 text-base" asChild>
                  <a href="#pricing">See Plans <ArrowRight size={17} className="ml-2" /></a>
                </Button>
                <a
                  href="https://wa.me/971521551198?text=Hi%2C%20I%27m%20interested%20in%20the%20Listi%20website%20offer."
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { offer: "listi_website" })}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-3 transition-all"
                >
                  <MessageCircle size={17} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Included badges ── */}
        <div className="bg-[#C8FF00] py-4 px-4">
          <div className="container mx-auto max-w-4xl flex flex-wrap justify-center gap-6 text-black text-sm font-bold">
            {[
              { icon: Shield, label: "Secure Hosting" },
              { icon: Lock, label: "HTTPS Included" },
              { icon: Mail, label: "Email Lead Capture" },
              { icon: Globe, label: "Your Own Domain" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeader tag="What You Get by Plan" title="Choose Your Plan" sub="All plans include secure hosting, HTTPS, email lead capture, and a contact form. The difference is the number of pages." />
            <div className="grid md:grid-cols-3 gap-6">
              {PLANS.map((plan) => (
                <div key={plan.name} className={`relative border-2 ${plan.color} rounded-3xl p-8 flex flex-col`}>
                  {plan.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-4 py-1 rounded-full tracking-wide">
                      {plan.badge}
                    </span>
                  )}
                  {plan.tag && <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{plan.tag}</p>}
                  <h3 className="text-xl font-black text-black mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-6xl font-black text-primary leading-none">{plan.price}</span>
                    <span className="text-xl font-bold text-gray-400 mb-2">AED</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-5">One-time claim fee</p>
                  <div className="bg-slate-50 rounded-xl px-4 py-3 mb-6 text-center">
                    <p className="font-black text-lg text-primary">{plan.pages}</p>
                    <p className="text-xs text-gray-500">{plan.pageDesc}</p>
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f) => <Check key={f} text={f} />)}
                  </ul>
                  {plan.extras.length > 0 && (
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {plan.extras.map((e) => (
                        <span key={e} className="bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full">{e}</span>
                      ))}
                    </div>
                  )}
                  <a
                    href="https://listi.ae"
                    target="_blank" rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-6 py-3 transition-all text-sm"
                  >
                    Claim on Listi.ae <ArrowRight size={15} />
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">All plans include secure hosting with HTTPS encryption. Additional sections available at <strong className="text-gray-600">49 AED per section</strong> after delivery.</p>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader tag="Process" title="How It Works" sub="Four simple steps from signup to live website." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map((step) => (
                <div key={step.n} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-black text-xl flex items-center justify-center mx-auto mb-4">
                    {step.n}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm leading-snug">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Eligibility ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader tag="Eligibility" title="Who Can Claim?" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
                <h3 className="font-black text-lg text-green-800 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" /> Who Can Claim
                </h3>
                <ul className="space-y-3">
                  {CAN_CLAIM.map((t) => <Check key={t} text={t} />)}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                <h3 className="font-black text-lg text-red-800 mb-5 flex items-center gap-2">
                  <X size={20} className="text-red-500" /> Who Cannot Claim
                </h3>
                <ul className="space-y-3">
                  {CANNOT_CLAIM.map((t) => <Cross key={t} text={t} />)}
                </ul>
              </div>
            </div>

            {/* Duplicate accounts warning */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
              <AlertTriangle size={22} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-800 mb-1">Duplicate and Fake Accounts — Permanent Ban</p>
                <p className="text-sm text-amber-700 leading-relaxed">Creating duplicate, fake, or secondary accounts under the same business name, domain, or owner identity to claim this offer more than once is strictly prohibited. Any such attempt results in an immediate and permanent ban from the Listi platform, including suspension of all associated accounts and listings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Scope ── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader tag="Scope of Work" title="What We Build" sub="Listi builds professional static service pages only — clean, responsive websites designed to showcase your business." />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="font-black text-lg mb-5 flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> What We Build</h3>
                <ul className="space-y-3">
                  {WHAT_WE_BUILD.map((t) => <Check key={t} text={t} />)}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="font-black text-lg mb-5 flex items-center gap-2"><X size={18} className="text-red-400" /> What We Do NOT Build</h3>
                <ul className="space-y-3">
                  {WHAT_WE_DONT_BUILD.map((t) => <Cross key={t} text={t} />)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we need from you ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader tag="Requirements" title="What We Need From You" sub="Once you pay and unlock the Website Brief Form, have these ready." />
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Mail, title: "A New Gmail Account", desc: "Create a fresh Gmail account and share credentials. We use it to set up hosting, analytics, and integrations. You retain full ownership." },
                { icon: FileText, title: "Website Brief Form", desc: "Business name, tagline, about, services, contact details, brand colors. This is a one-time form — ensure all content is accurate before submitting." },
                { icon: Globe, title: "Your Domain Name", desc: "Provide your own domain, or request Listi to help with domain purchase (additional cost). We handle DNS pointing and configuration." },
                { icon: MessageCircle, title: "WhatsApp Number", desc: "Your active WhatsApp for communication during the build and for your website's contact section." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Zap size={16} className="text-primary" /> Image Upload Requirements</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>Upload up to 10 images (hero banners, gallery, team photos)</li>
                <li>Maximum file size: 5 MB per image</li>
                <li>Accepted formats: JPG, PNG, WebP</li>
                <li>Use high-resolution images for best results</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Add-ons strip ── */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { label: "Additional Section", price: "49 AED", desc: "Per section, after delivery" },
                { label: "Maintenance Window", price: "99 AED", desc: "30-day window, bugs/errors only" },
                { label: "Annual Renewal", price: "999 AED", desc: "Per year, after first 12 months" },
                { label: "Ownership Transfer", price: "499 AED", desc: "Full code + backend, one-time" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <p className="text-3xl font-black mb-1">{item.price}</p>
                  <p className="font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-white/60 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/50 text-xs mt-6">First 2 days of maintenance after go-live is free (bugs and errors only).</p>
          </div>
        </section>

        {/* ── Full T&Cs ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <SectionHeader tag="Terms and Conditions" title="Full Terms" sub="Please read before claiming this offer." />

            <Accordion type="single" collapsible className="space-y-3">

              {/* Eligibility */}
              <AccordionItem value="eligibility" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Eligibility</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-3 leading-relaxed">
                  <p>This offer is exclusively available to registered business users on Listi.ae who have an active business listing. Individual or personal accounts, referrers, and unverified businesses are not eligible.</p>
                  <p><strong>Who Can Claim:</strong> Business accounts with a submitted and approved listing on Listi.ae. Businesses on any active plan (Free, Flexi, or Growth). One claim per business — first-time only.</p>
                  <p><strong>Who Cannot Claim:</strong> Referrer accounts or individual users. Businesses with listings in draft status (must be submitted first). Suspended or deactivated accounts. Businesses found in violation of Listi's policies. Businesses that have already claimed and received a website under this offer (even if plan was discontinued and re-purchased).</p>
                </AccordionContent>
              </AccordionItem>

              {/* Duplicate accounts */}
              <AccordionItem value="duplicate" className="border border-amber-200 rounded-2xl px-6 shadow-sm bg-amber-50/30">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline text-amber-800">Duplicate and Fake Accounts — Permanent Ban</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 leading-relaxed">
                  Creating duplicate, fake, or secondary accounts under the same business name, domain name, or owner identity to claim this offer more than once is strictly prohibited. Any such attempt will result in an immediate and permanent ban from the Listi platform, including suspension of all associated accounts and listings. Listi reserves the right to reject any application and withhold refunds if fraudulent or duplicate account activity is detected.
                </AccordionContent>
              </AccordionItem>

              {/* Application review */}
              <AccordionItem value="rejection" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Application Review and Rejection</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-3 leading-relaxed">
                  <p>All website claims are subject to review by the Listi team. Listi reserves the sole right to reject any application at its discretion, before or after payment, if the business or its content does not meet our eligibility criteria or quality standards.</p>
                  <p><strong>Reasons for Rejection (non-exhaustive):</strong></p>
                  <ul className="space-y-1.5 pl-4 list-disc">
                    <li>Business category is not suitable for a static service website (e.g. e-commerce, SaaS, booking platforms)</li>
                    <li>Content submitted is incomplete, misleading, or of insufficient quality</li>
                    <li>Business operates in a restricted or prohibited industry under UAE law</li>
                    <li>Account is flagged for policy violations, spam, or fraudulent activity</li>
                    <li>Business does not have a valid, approved listing on Listi.ae</li>
                    <li>Domain provided is invalid, unavailable, or associated with prohibited content</li>
                    <li>Brief form contains content that violates intellectual property rights</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Refund policy */}
              <AccordionItem value="refund" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Refund Policy</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-3 leading-relaxed">
                  <p>If Listi rejects your application and determines your business is not eligible, a full refund of the claim fee (5 AED or 20 AED, depending on your plan) will be issued to the original payment method within 5-10 business days.</p>
                  <p><strong>When Refunds Apply:</strong> Application rejected by Listi — full refund issued automatically. Technical error preventing delivery — full refund if Listi is unable to fulfil the claim.</p>
                  <p><strong>When Refunds Do NOT Apply:</strong> User voluntarily cancels after payment. Brief form not submitted within 30 days (claim expires, no refund). Website already delivered and marked Live. Change request fees (49 AED per section) after implementation. Dissatisfaction with design style — the build follows the brief as submitted.</p>
                </AccordionContent>
              </AccordionItem>

              {/* One-time claim */}
              <AccordionItem value="onetime" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">One-Time Claim Policy</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 leading-relaxed">
                  This offer is available once per business, at the time of first signup and listing submission. Renewing your plan or upgrading later does not re-qualify you. If your plan is discontinued and later re-purchased, you cannot re-claim the offer if already claimed previously. If the brief form is not submitted within 30 days of payment, the claim expires with no refund. If Listi rejects your application, a full refund of the claim fee is issued.
                </AccordionContent>
              </AccordionItem>

              {/* Delivery */}
              <AccordionItem value="delivery" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Delivery</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-2 leading-relaxed">
                  <p>Websites are delivered within 5-7 business days from form submission, subject to admin approval. Admin may request additional time based on workload.</p>
                  <p>Dashboard status tracking: Submitted → In Progress → Review → Live.</p>
                  <p>Once live, login credentials and access details are shared via email and dashboard. The 999 AED plan includes an admin panel for managing blog posts.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Domain */}
              <AccordionItem value="domain" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Domain</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 leading-relaxed">
                  A domain name is required for your website. In the brief form, indicate whether you already own a domain or need to purchase one. If you already have a domain, provide it in the form and Listi will handle DNS pointing. If you need a domain, Listi will contact you with pricing and availability — additional cost applies. Domain purchase cost is entirely borne by the business user. Listi acts only as a facilitator and does not guarantee specific domain availability or pricing.
                </AccordionContent>
              </AccordionItem>

              {/* Hosting */}
              <AccordionItem value="hosting" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Hosting and Infrastructure</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-2 leading-relaxed">
                  <p>Hosted and secured by external apps, managed by Listi. HTTPS enabled by default.</p>
                  <p>Website loading speed and performance are subject to network conditions, server availability, and external factors beyond Listi's control. Listi does not guarantee specific load times or uptime percentages.</p>
                  <p>Listi may display a small "Built by Listi" footer badge. See Ownership Transfer section for details on transferring full control (499 AED).</p>
                </AccordionContent>
              </AccordionItem>

              {/* Lead capture */}
              <AccordionItem value="leadcapture" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Contact Form and Email Notifications</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-2 leading-relaxed">
                  <p>Every lead submitted through your website's contact form is captured and stored, accessible to you at any time.</p>
                  <p>Contact form email notifications are limited to 750-1,000 emails per month. If your website exceeds this limit, additional notifications may not be delivered until the next billing cycle. Lead data is still stored regardless.</p>
                  <p>This notification service is intended for genuine business enquiries. Listi reserves the right to restrict or suspend notifications if the contact form is used for spam, automated submissions, or abuse.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Changes */}
              <AccordionItem value="changes" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Additional Changes — 49 AED Per Section</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-3 leading-relaxed">
                  <p>After delivery, modifications can be requested at 49 AED per section. Each change request covers one section of your website.</p>
                  <p><strong>What counts as one change (49 AED):</strong> Update text/images/content in a single section. Replace logo or hero banner. Update contact info. Change colours or font styles. Add/modify social links. Add a new static section (FAQ, testimonials, gallery). Add a new static page. Domain change or DNS reconfiguration.</p>
                  <p><strong>What we will NOT do (even as a paid change):</strong> E-commerce, shopping carts, checkout flows, web apps, dashboards, login portals, payment gateways, booking/scheduling systems, custom forms with database storage, or any dynamic/backend-driven features.</p>
                  <p><strong>Change Request Process:</strong> Business submits request from dashboard. Admin reviews feasibility. Admin sends a payment link (49 AED) — business sees a Pay 49 AED button on dashboard. Payment confirmed via Stripe. Change implemented in 2-3 business days.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Maintenance */}
              <AccordionItem value="maintenance" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Maintenance</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-2 leading-relaxed">
                  <p>Once your website is marked Live, you have a 2-day (48-hour) free maintenance window to report any bugs or errors. During this period, Listi will fix reported issues at no additional cost.</p>
                  <p>After the 2-day window expires, all bug fixes and error resolution require a paid maintenance window (99 AED for 30 days).</p>
                  <p>Minor technical issues may arise after go-live due to browser updates, third-party service changes, or other factors beyond our control. These are covered under the Maintenance service (99 AED) after the free period.</p>
                  <p>This is a one-time build promotion. Once delivered and marked Live, the design and content are considered final. Listi is not responsible for content errors if incorrect information was provided.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Annual renewal */}
              <AccordionItem value="renewal" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Annual Renewal</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-2 leading-relaxed">
                  <p>Hosting and website support are free for the first 12 months from go-live. After the first year, the annual renewal fee is 999 AED per year, covering hosting, security, and continued support.</p>
                  <p>Renewal reminders will be sent 30 days before expiry. If not renewed, the website may be taken offline after a 15-day grace period. All renewal charges are the sole liability of the business user.</p>
                  <p>Businesses can cancel at any time by contacting Listi support. Upon cancellation, the website will be taken offline. No refund will be issued for unused portions of the annual renewal fee.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Ownership transfer */}
              <AccordionItem value="ownership" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Ownership Transfer — 499 AED</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-2 leading-relaxed">
                  <p>Businesses can request full ownership transfer — including source code, backend, hosting accounts, and all associated assets — for a one-time fee of 499 AED.</p>
                  <p><strong>Included:</strong> Complete website source code and files. Backend and hosting account credentials. All media assets. DNS and domain configuration details. Lead/contact form submission data.</p>
                  <p><strong>After transfer:</strong> Listi will no longer provide hosting, maintenance, bug fixes, or website support. No further change requests or maintenance windows available through Listi. Annual renewal fee no longer applies. Your Listi business listing and other Listi services remain active and unaffected.</p>
                </AccordionContent>
              </AccordionItem>

              {/* SEO services */}
              <AccordionItem value="seo" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">SEO Services (Optional)</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-2 leading-relaxed">
                  <p><strong>Basic On-Page SEO Setup — 99 AED (one-time):</strong> Includes meta titles, meta descriptions, heading structure, image alt tags, and basic schema markup. Results are not guaranteed.</p>
                  <p><strong>Monthly SEO Package — 1,200 AED / month:</strong> Optional ongoing SEO. Billed monthly, can be cancelled at any time with 30 days notice. Contact Listi support to subscribe.</p>
                  <p>Both SEO services are optional upsells — not required for the website claim. SEO pricing is subject to change. Results are not guaranteed — SEO outcomes depend on competition, industry, and search engine algorithms.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Business email */}
              <AccordionItem value="email" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Business Email Configuration — 99 AED</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 leading-relaxed">
                  If you require a professional business email (e.g. info@yourdomain.com), Listi can configure it for a one-time service charge of 99 AED. Email hosting costs are separate and paid entirely by the business user directly to the email provider — Google Workspace or Microsoft 365. Listi only handles the technical setup and DNS configuration. All ongoing email hosting subscription fees are the sole responsibility of the business user.
                </AccordionContent>
              </AccordionItem>

              {/* IP / Prohibited content / Liability */}
              <AccordionItem value="legal" className="border border-slate-200 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="font-bold text-left py-5 hover:no-underline">Intellectual Property, Prohibited Content and Liability</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-5 space-y-3 leading-relaxed">
                  <p><strong>Intellectual Property:</strong> Content submitted by the business (text, images, logos) remains the business's property. Website design template and code structure remain Listi's property. Businesses may not extract, copy, or redistribute the template or code outside Listi-managed hosting.</p>
                  <p><strong>Prohibited Content:</strong> Illegal, fraudulent, or misleading content. Hate speech or discriminatory material. Content violating UAE federal laws or regulations. Unauthorized copyrighted material. Adult, gambling, or prohibited substance content.</p>
                  <p><strong>Right to Stop Production:</strong> Listi reserves the right to stop website production at any stage at its sole discretion. If significant work has already been completed, a partial or no refund may apply.</p>
                  <p><strong>Termination:</strong> Account suspension may result in the website being taken offline. Listi may terminate this promotion at any time without prior notice. Businesses will be given 30 days' notice before any active website is taken offline due to policy changes.</p>
                  <p><strong>Liability:</strong> Service provided "as is" — no warranties on uptime, performance, or SEO ranking. Maximum liability limited to total amount paid.</p>
                  <p><strong>Governing Law:</strong> These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved through the appropriate courts in Dubai, UAE.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </section>

        {/* ── Payment table ── */}
        <section className="py-20 bg-slate-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader tag="Payment Terms" title="Complete Fee Schedule" />
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="text-left px-5 py-4 font-bold">Item</th>
                    <th className="text-left px-5 py-4 font-bold">Fee</th>
                    <th className="text-left px-5 py-4 font-bold">Refundable?</th>
                  </tr>
                </thead>
                <tbody>
                  {PAYMENT_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-5 py-3.5 text-gray-700 font-medium">{row.item}</td>
                      <td className="px-5 py-3.5 text-primary font-bold whitespace-nowrap">{row.fee}</td>
                      <td className="px-5 py-3.5 text-gray-500">{row.refund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-xs mt-4 text-center">All payments are processed via secure payment links sent by Listi admin. Listi does not store credit card information. Listi reserves the right to update pricing at any time.</p>
          </div>
        </section>

        {/* ── Quick reference ── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader tag="Summary" title="Quick Reference" />
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <tbody>
                  {QUICK_REF.map(([item, detail], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-5 py-3.5 font-bold text-gray-800 w-1/3">{item}</td>
                      <td className="px-5 py-3.5 text-gray-600">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-[#C8FF00] font-bold text-sm tracking-widest uppercase mb-4">Ready to Get Online?</p>
            <h2 className="text-4xl font-black tracking-[-0.02em] mb-4">Claim Your Website on Listi.ae</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Log into your Listi.ae dashboard or sign up as a business to claim this offer. Questions? WhatsApp us directly.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-black px-10 py-6 text-base" asChild>
                <a href="https://listi.ae" target="_blank" rel="noopener noreferrer">Go to Listi.ae <ArrowRight size={17} className="ml-2" /></a>
              </Button>
              <a
                href="https://wa.me/971521551198?text=Hi%2C%20I%27m%20interested%20in%20the%20Listi%20website%20offer."
                target="_blank" rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { offer: "listi_website" })}
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-3 transition-all"
              >
                <MessageCircle size={17} /> WhatsApp Us
              </a>
              <a
                href="tel:+971521551198"
                onClick={() => track("call_click", { offer: "listi_website" })}
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 transition-all"
              >
                <Phone size={17} /> +971 52 155 1198
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
