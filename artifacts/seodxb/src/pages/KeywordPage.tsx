import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, CheckCircle, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { keywordPages, KeywordPageConfig } from "@/data/keywordPages";
import NotFound from "@/pages/not-found";

/* ─────────────── SVG Variants ─────────────── */

function SerpSVG({ keyword }: { keyword: string }) {
  return (
    <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
      aria-label={`Google search results showing SEODXB ranked #1 for ${keyword} with 5-star reviews and featured position above all competitors`}
      xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="340" rx="16" fill="white" />
      <rect x="16" y="16" width="448" height="40" rx="20" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      <text x="44" y="41" fontSize="20" fill="#4285F4">G</text>
      <text x="70" y="40" fontSize="11" fill="#5F6368" className="truncate">{keyword.slice(0, 28)}</text>
      <rect x="16" y="68" width="448" height="88" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
      <rect x="16" y="68" width="4" height="88" rx="2" fill="#16A34A" />
      <text x="32" y="86" fontSize="9" fill="#16A34A">seodxb.com</text>
      <text x="32" y="100" fontSize="13" fontWeight="bold" fill="#1D4ED8">SEODXB - {keyword.split(" ").slice(0,4).map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ")}</text>
      <rect x="32" y="108" width="300" height="6" rx="3" fill="#DCFCE7" />
      <rect x="32" y="120" width="260" height="6" rx="3" fill="#DCFCE7" />
      <text x="32" y="145" fontSize="10" fill="#F59E0B">★★★★★</text>
      <text x="92" y="145" fontSize="9" fill="#64748B">4.9 · 127 reviews · SEO Agency</text>
      <rect x="400" y="76" width="56" height="20" rx="10" fill="#DCFCE7" />
      <text x="428" y="89" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803D">#1 Rank</text>
      <rect x="16" y="166" width="448" height="58" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <text x="32" y="184" fontSize="9" fill="#64748B">competitor.ae</text>
      <text x="32" y="198" fontSize="11" fontWeight="bold" fill="#1558D6">Competitor Agency - Dubai SEO</text>
      <rect x="32" y="206" width="240" height="6" rx="3" fill="#E2E8F0" />
      <rect x="16" y="234" width="448" height="58" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <text x="32" y="252" fontSize="9" fill="#64748B">another-seo.ae</text>
      <text x="32" y="266" fontSize="11" fontWeight="bold" fill="#1558D6">Another SEO Company</text>
      <rect x="32" y="274" width="200" height="6" rx="3" fill="#E2E8F0" />
      <text x="420" y="324" textAnchor="end" fontSize="9" fill="#2563EB">↑ +312% organic traffic</text>
    </svg>
  );
}

function AnalyticsSVG({ keyword }: { keyword: string }) {
  return (
    <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
      aria-label={`SEO analytics dashboard for ${keyword} showing organic traffic growth chart trending upward 312%, keyword rankings improving month over month, and conversion metrics`}
      xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="340" rx="16" fill="#F8FAFC" />
      <rect x="20" y="20" width="440" height="140" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="36" y="44" fontSize="11" fontWeight="bold" fill="#0F172A">Organic Traffic Growth</text>
      <text x="36" y="60" fontSize="22" fontWeight="black" fill="#2563EB">+312%</text>
      <text x="36" y="76" fontSize="9" fill="#22C55E">↑ vs last 12 months</text>
      {[20, 30, 25, 45, 40, 65, 60, 80, 75, 95, 90, 120].map((h, i) => (
        <rect key={i} x={36 + i * 33} y={160 - h} width="22" height={h} rx="3"
          fill={i >= 9 ? "#2563EB" : "#BFDBFE"} />
      ))}
      {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m, i) => (
        <text key={i} x={47 + i * 33} y={172} textAnchor="middle" fontSize="7" fill="#94A3B8">{m}</text>
      ))}
      <rect x="20" y="176" width="136" height="72" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
      <text x="88" y="202" textAnchor="middle" fontSize="24" fontWeight="black" fill="#16A34A">87</text>
      <text x="88" y="218" textAnchor="middle" fontSize="9" fill="#065F46">Keywords</text>
      <text x="88" y="232" textAnchor="middle" fontSize="8" fill="#94A3B8">Page 1</text>
      <rect x="168" y="176" width="136" height="72" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
      <text x="236" y="202" textAnchor="middle" fontSize="24" fontWeight="black" fill="#2563EB">4.8x</text>
      <text x="236" y="218" textAnchor="middle" fontSize="9" fill="#1E40AF">ROI</text>
      <text x="236" y="232" textAnchor="middle" fontSize="8" fill="#94A3B8">Year 1</text>
      <rect x="316" y="176" width="144" height="72" rx="10" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1" />
      <text x="388" y="202" textAnchor="middle" fontSize="24" fontWeight="black" fill="#EA580C">214</text>
      <text x="388" y="218" textAnchor="middle" fontSize="9" fill="#92400E">Leads/mo</text>
      <text x="388" y="232" textAnchor="middle" fontSize="8" fill="#94A3B8">Organic</text>
      <rect x="20" y="262" width="440" height="60" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="36" y="282" fontSize="9" fontWeight="bold" fill="#0F172A">Top Ranking Keywords</text>
      {[
        { kw: keyword.slice(0,22), pos: "#1" },
        { kw: "best seo dubai", pos: "#2" },
        { kw: "seo company uae", pos: "#1" },
      ].map((item, i) => (
        <g key={i}>
          <text x={36 + i * 148} y={302} fontSize="8" fill="#374151">{item.kw}</text>
          <rect x={110 + i * 148} y={292} width="24" height="14" rx="7"
            fill={item.pos === "#1" ? "#DCFCE7" : "#DBEAFE"} />
          <text x={122 + i * 148} y={302} textAnchor="middle" fontSize="8" fontWeight="bold"
            fill={item.pos === "#1" ? "#15803D" : "#1D4ED8"}>{item.pos}</text>
        </g>
      ))}
    </svg>
  );
}

function AISvg({ keyword }: { keyword: string }) {
  return (
    <svg viewBox="0 0 480 360" className="w-full h-auto rounded-2xl shadow-lg" role="img"
      aria-label={`AI chat interface showing ChatGPT recommending SEODXB when asked about ${keyword}, with citations from seodxb.com and confirmation from Perplexity and Gemini`}
      xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="360" rx="16" fill="#F7F7F8" />
      <rect x="0" y="0" width="480" height="52" rx="16" fill="white" />
      <rect x="0" y="36" width="480" height="16" fill="white" />
      <circle cx="28" cy="26" r="14" fill="#10A37F" />
      <text x="28" y="31" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">✦</text>
      <text x="52" y="31" fontSize="13" fontWeight="bold" fill="#0D0D0D">ChatGPT</text>
      <rect x="130" y="64" width="330" height="48" rx="12" fill="#E9E9EB" />
      <text x="148" y="82" fontSize="10" fill="#0D0D0D">Who is the best for</text>
      <text x="148" y="98" fontSize="10" fill="#0D0D0D">{keyword.slice(0,32)}?</text>
      <rect x="20" y="128" width="420" height="170" rx="12" fill="white" />
      <circle cx="36" cy="140" r="10" fill="#10A37F" />
      <text x="36" y="144" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">✦</text>
      <rect x="56" y="134" width="360" height="8" rx="4" fill="#F1F5F9" />
      <rect x="56" y="150" width="52" height="18" rx="4" fill="#DCFCE7" />
      <text x="82" y="162" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803D">SEODXB</text>
      <rect x="114" y="154" width="280" height="8" rx="4" fill="#F1F5F9" />
      <rect x="56" y="172" width="340" height="8" rx="4" fill="#F1F5F9" />
      <rect x="56" y="188" width="300" height="8" rx="4" fill="#F1F5F9" />
      <rect x="56" y="204" width="320" height="8" rx="4" fill="#F1F5F9" />
      <rect x="56" y="220" width="220" height="8" rx="4" fill="#F1F5F9" />
      <rect x="56" y="240" width="180" height="18" rx="9" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
      <text x="80" y="252" fontSize="9" fill="#2563EB">🔗 Source: seodxb.com</text>
      <rect x="20" y="316" width="100" height="32" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="70" y="332" textAnchor="middle" fontSize="9" fill="#64748B">Perplexity AI</text>
      <text x="70" y="344" textAnchor="middle" fontSize="8" fill="#22C55E">✓ SEODXB Cited</text>
      <rect x="132" y="316" width="90" height="32" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="177" y="332" textAnchor="middle" fontSize="9" fill="#64748B">Gemini</text>
      <text x="177" y="344" textAnchor="middle" fontSize="8" fill="#22C55E">✓ Cited</text>
      <rect x="234" y="316" width="120" height="32" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="294" y="332" textAnchor="middle" fontSize="9" fill="#64748B">Google AI Overview</text>
      <text x="294" y="344" textAnchor="middle" fontSize="8" fill="#22C55E">✓ Featured</text>
    </svg>
  );
}

function LocalSVG({ keyword }: { keyword: string }) {
  return (
    <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
      aria-label={`Google Map Pack showing SEODXB ranked #1 for ${keyword} with 4.9 star rating and 127 reviews, displayed above competitor listings on a local map`}
      xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="340" rx="16" fill="white" />
      <rect x="240" y="0" width="240" height="340" rx="0" fill="#E8F5E9" />
      <rect x="456" y="0" width="24" height="340" rx="0" fill="#E8F5E9" />
      <line x1="240" y1="110" x2="480" y2="110" stroke="#FFFFFF" strokeWidth="6" />
      <line x1="240" y1="210" x2="480" y2="210" stroke="#FFFFFF" strokeWidth="6" />
      <line x1="330" y1="0" x2="330" y2="340" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="400" y1="0" x2="400" y2="340" stroke="#FFFFFF" strokeWidth="4" />
      <circle cx="355" cy="140" r="16" fill="#EA4335" />
      <text x="355" y="145" textAnchor="middle" fontSize="12" fill="white">1</text>
      <circle cx="425" cy="90" r="10" fill="#4285F4" opacity="0.7" />
      <text x="425" y="94" textAnchor="middle" fontSize="9" fill="white">2</text>
      <circle cx="375" cy="255" r="10" fill="#4285F4" opacity="0.7" />
      <text x="375" y="259" textAnchor="middle" fontSize="9" fill="white">3</text>
      <rect x="0" y="0" width="248" height="340" rx="16" fill="white" />
      <rect x="248" y="0" width="8" height="340" fill="white" />
      <rect x="12" y="12" width="224" height="34" rx="17" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <text x="30" y="33" fontSize="10" fill="#5F6368">{keyword.slice(0,22)}</text>
      <rect x="12" y="56" width="224" height="92" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
      <rect x="12" y="56" width="4" height="92" rx="2" fill="#2563EB" />
      <text x="28" y="76" fontSize="11" fontWeight="bold" fill="#1E40AF">SEODXB</text>
      <text x="200" y="76" textAnchor="end" fontSize="9" fontWeight="bold" fill="#16A34A">OPEN</text>
      <text x="28" y="92" fontSize="9" fill="#F59E0B">★★★★★</text>
      <text x="88" y="92" fontSize="9" fill="#64748B">4.9 (127)</text>
      <text x="28" y="108" fontSize="9" fill="#64748B">SEO Agency · Business Bay</text>
      <text x="28" y="122" fontSize="9" fill="#64748B">+971 52 155 1198</text>
      <rect x="28" y="132" width="52" height="10" rx="5" fill="#DBEAFE" />
      <text x="54" y="140" textAnchor="middle" fontSize="7" fill="#2563EB">Website →</text>
      <rect x="12" y="158" width="224" height="76" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <text x="28" y="176" fontSize="10" fontWeight="bold" fill="#0F172A">Competitor Agency</text>
      <text x="28" y="191" fontSize="9" fill="#F59E0B">★★★★</text>
      <text x="76" y="191" fontSize="9" fill="#64748B">4.2 (58)</text>
      <text x="28" y="206" fontSize="9" fill="#64748B">SEO Agency · DIFC</text>
      <rect x="12" y="244" width="224" height="76" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <text x="28" y="262" fontSize="10" fontWeight="bold" fill="#0F172A">Another Agency</text>
      <text x="28" y="277" fontSize="9" fill="#F59E0B">★★★★</text>
      <text x="76" y="277" fontSize="9" fill="#64748B">4.0 (31)</text>
      <text x="28" y="292" fontSize="9" fill="#64748B">Marketing Agency · JLT</text>
    </svg>
  );
}

function AuditSVG({ keyword }: { keyword: string }) {
  return (
    <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
      aria-label={`SEO audit report for ${keyword} showing a 94 out of 100 health score, Core Web Vitals all green, with prioritised action items including schema markup and page speed improvements`}
      xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="340" rx="16" fill="#F8FAFC" />
      <rect x="20" y="20" width="440" height="300" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="36" y="48" fontSize="13" fontWeight="bold" fill="#0F172A">SEO Health Report - seodxb.com</text>
      <rect x="36" y="56" width="80" height="18" rx="9" fill="#DCFCE7" />
      <text x="76" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#15803D">✓ Excellent</text>
      <circle cx="220" cy="150" r="64" fill="none" stroke="#E2E8F0" strokeWidth="10" />
      <circle cx="220" cy="150" r="64" fill="none" stroke="#22C55E" strokeWidth="10"
        strokeDasharray="362" strokeDashoffset="22" strokeLinecap="round"
        transform="rotate(-90 220 150)" />
      <text x="220" y="144" textAnchor="middle" fontSize="32" fontWeight="900" fill="#0F172A">94</text>
      <text x="220" y="164" textAnchor="middle" fontSize="11" fill="#64748B">SEO Score</text>
      <text x="36" y="242" fontSize="10" fontWeight="bold" fill="#64748B">CORE WEB VITALS</text>
      <rect x="36" y="252" width="116" height="48" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
      <text x="94" y="270" textAnchor="middle" fontSize="9" fill="#16A34A">LCP</text>
      <text x="94" y="288" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#15803D">1.8s</text>
      <rect x="164" y="252" width="116" height="48" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
      <text x="222" y="270" textAnchor="middle" fontSize="9" fill="#16A34A">CLS</text>
      <text x="222" y="288" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#15803D">0.02</text>
      <rect x="292" y="252" width="116" height="48" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
      <text x="350" y="270" textAnchor="middle" fontSize="9" fill="#16A34A">INP</text>
      <text x="350" y="288" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#15803D">95ms</text>
      <rect x="36" y="312" width="68" height="14" rx="7" fill="#DBEAFE" />
      <text x="70" y="322" textAnchor="middle" fontSize="8" fill="#2563EB">✓ Indexed</text>
      <rect x="114" y="312" width="80" height="14" rx="7" fill="#DBEAFE" />
      <text x="154" y="322" textAnchor="middle" fontSize="8" fill="#2563EB">✓ Mobile Pass</text>
      <rect x="204" y="312" width="88" height="14" rx="7" fill="#DBEAFE" />
      <text x="248" y="322" textAnchor="middle" fontSize="8" fill="#2563EB">✓ Schema Valid</text>
    </svg>
  );
}

function GrowthSVG({ keyword }: { keyword: string }) {
  return (
    <svg viewBox="0 0 480 340" className="w-full h-auto rounded-2xl shadow-lg" role="img"
      aria-label={`SEO growth funnel for ${keyword} showing 1240 monthly searches at top converting to 186 website visitors and 24 qualified leads per month, demonstrating ROI from organic search`}
      xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="340" rx="16" fill="#F8FAFC" />
      <text x="240" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0F172A">Organic Search Funnel</text>
      {[
        { label: "Monthly Searches", value: "1,240", color: "#DBEAFE", border: "#93C5FD", text: "#1D4ED8", w: 420, x: 30 },
        { label: "Click-Through (15%)", value: "186", color: "#D1FAE5", border: "#6EE7B7", text: "#065F46", w: 300, x: 90 },
        { label: "Engaged Visitors", value: "94", color: "#FEF3C7", border: "#FCD34D", text: "#92400E", w: 200, x: 140 },
        { label: "Qualified Leads/mo", value: "24", color: "#FCE7F3", border: "#F9A8D4", text: "#9D174D", w: 120, x: 180 },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={54 + i * 56} width={s.w} height={44} rx="8"
            fill={s.color} stroke={s.border} strokeWidth="1.5" />
          <text x={s.x + 16} y={80 + i * 56} fontSize="10" fill={s.text} fontWeight="bold">{s.label}</text>
          <text x={s.x + s.w - 16} y={80 + i * 56} textAnchor="end" fontSize="22" fontWeight="black" fill={s.text}>{s.value}</text>
          {i < 3 && <text x="240" y={104 + i * 56} textAnchor="middle" fontSize="14" fill="#94A3B8">↓</text>}
        </g>
      ))}
      <rect x="30" y="290" width="420" height="36" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="240" y="314" textAnchor="middle" fontSize="11" fill="#0F172A">
        <tspan fontWeight="bold">AED 240K+</tspan>
        <tspan fill="#64748B"> estimated annual revenue from organic SEO</tspan>
      </text>
    </svg>
  );
}

const svgComponents = { serp: SerpSVG, analytics: AnalyticsSVG, ai: AISvg, local: LocalSVG, audit: AuditSVG, growth: GrowthSVG };

/* ─────────────── Contact Form ─────────────── */

type FormStatus = "idle" | "sending" | "success" | "error";

function ContactForm({ ctaTitle, ctaDesc, ctaButton, keyword }: { ctaTitle: string; ctaDesc: string; ctaButton: string; keyword: string }) {
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
        body: JSON.stringify({ ...data, subject: `SEO Enquiry: ${keyword}` }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-5">{ctaTitle}</h2>
            <p className="text-xl text-white/70 mb-8">{ctaDesc}</p>
            <ul className="space-y-3">
              {["Free initial consultation", "No lock-in contracts", "Response within 24 hours", "Dubai-based SEO specialists"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={16} className="text-[#C8FF00] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle size={48} className="text-[#C8FF00]" />
                <p className="text-2xl font-bold">Message sent!</p>
                <p className="text-white/70">We'll get back to you within 24 hours.</p>
                <Button variant="outline" className="mt-2 rounded-full border-white/30 text-white hover:bg-white/10" onClick={() => setStatus("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-white/80">Name</label>
                    <Input name="from_name" placeholder="Your name" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 py-5" required />
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
                  <label className="text-sm font-semibold text-white/80">Website URL</label>
                  <Input name="company_url" placeholder="https://example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 py-5" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-white/80">Message</label>
                  <Textarea name="message" placeholder="Tell us about your SEO goals..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[110px] resize-none text-base p-4" required />
                </div>
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/30 border border-red-500/30 rounded-lg px-4 py-3">
                    <AlertCircle size={16} />
                    Something went wrong. Email us at hi@Listi.ae
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold py-6 text-base shadow-lg transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /> Sending...</span>
                  ) : (
                    <>{ctaButton} <ArrowRight size={16} className="ml-2" /></>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Main Component ─────────────── */

export function KeywordPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const config: KeywordPageConfig | undefined = keywordPages[slug];

  if (!config) return <NotFound />;

  const SvgComponent = svgComponents[config.svgVariant ?? "serp"];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": config.h1,
    "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com", "telephone": "+971521551198" },
    "description": config.metaDesc,
    "areaServed": config.areaServed ?? "Dubai, UAE",
    "url": `https://seodxb.com/${slug}`,
  };

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.metaDesc} />
        <link rel="canonical" href={`https://seodxb.com/${slug}`} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.metaDesc} />
        <meta property="og:url" content={`https://seodxb.com/${slug}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                  {config.badge}
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight text-black">
                  {config.h1}
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">{config.intro}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold px-8" asChild>
                    <Link href="/contact">{config.ctaButton ?? "Get Free Consultation"} <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                    <Link href="/seo-audit">Free SEO Audit</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                {config.imageUrl ? (
                  <img
                    src={config.imageUrl}
                    alt={config.h1}
                    className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3]"
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                ) : (
                  <SvgComponent keyword={config.keyword} />
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        {config.stats && (
          <section className="py-14 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {config.stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-primary mb-1">{s.value}</p>
                    <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">{config.featuresTitle ?? "What's Included"}</h2>
            <p className="text-lg text-muted-foreground">{config.featuresSubtitle ?? "Everything you need to rank, convert, and grow."}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {config.features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why SEODXB */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold mb-10 text-center">Why Choose SEODXB</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Proven Dubai Track Record", desc: "We've ranked 100+ Dubai businesses on Google's first page across competitive industries." },
                { title: "GEO + AEO + SEO Combined", desc: "We optimise for traditional Google rankings AND AI Overviews AND ChatGPT citations - all in one campaign." },
                { title: "No Lock-In Contracts", desc: "Monthly rolling agreements. Results keep your business, not contracts." },
                { title: "Transparent Reporting", desc: "Weekly rank updates, monthly traffic reports, and direct access to your team." },
                { title: "Human-Written Content", desc: "Every piece of content is written by SEO specialists - no AI-spun filler." },
                { title: "Free SEO Audit", desc: "We start every engagement with a comprehensive audit so you know exactly where you stand." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - AEO / LLM optimised */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold mb-3 text-center">{config.faqTitle ?? "Frequently Asked Questions"}</h2>
            <p className="text-center text-gray-500 mb-10">Straight answers about {config.keyword}.</p>
            <Accordion type="single" collapsible className="space-y-3">
              {config.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm">
                  <AccordionTrigger className="font-semibold text-left py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Form / CTA */}
        <ContactForm
          ctaTitle={config.ctaTitle}
          ctaDesc={config.ctaDesc}
          ctaButton={config.ctaButton ?? "Get Free Consultation"}
          keyword={config.keyword}
        />
      </div>
    </>
  );
}
