import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Zap,
  Search,
  Globe,
  BarChart2,
  AlertTriangle,
  ArrowRight,
  Mail,
  MessageSquare,
  Linkedin,
  Copy,
  CheckCircle,
  Loader2,
  AlertCircle,
  Phone,
} from "lucide-react";

type AuditStatus = "idle" | "sending" | "success" | "error";

const auditItems = [
  { icon: <Zap size={20} />, label: "Core Web Vitals score" },
  { icon: <Search size={20} />, label: "Crawlability and indexation status" },
  { icon: <Globe size={20} />, label: "On-page SEO for top 5 pages" },
  { icon: <BarChart2 size={20} />, label: "Keyword ranking snapshot" },
  { icon: <AlertTriangle size={20} />, label: "Top 3 technical blockers" },
  { icon: <CheckCircle2 size={20} />, label: "Competitor gap summary (2 rivals)" },
  { icon: <Mail size={20} />, label: "AI visibility check (ChatGPT, Gemini)" },
  { icon: <ArrowRight size={20} />, label: "Priority action list (top 10 fixes)" },
];

const outreachTemplates = [
  {
    id: "real-estate",
    label: "Real Estate",
    icon: <Globe size={16} />,
    subject: "Quick note about [Company] online visibility",
    body: `Hi [First Name],

I was researching top real estate agencies in Dubai and came across [Company].

I ran a quick check on your site and noticed a few things that are likely costing you organic leads each month - specifically around Core Web Vitals and some keyword gaps your competitors are already capturing.

I put together a free, no-strings audit report for you here:
https://seodxb.com/free-seo-audit

Happy to walk you through the findings on a 15-minute call if useful.

Best,
[Your Name]
SEODXB | hi@Listi.ae | +971 52 155 1198`,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: <Search size={16} />,
    subject: "[Clinic name] is missing patients searching online",
    body: `Hi [First Name],

I was researching healthcare providers in [Area] and noticed [Clinic] isn't appearing for several searches your patients are actively using.

We specialise in SEO for healthcare in the UAE and I ran a quick technical check on your website. There are a few quick wins that could meaningfully increase new patient enquiries from Google.

I've prepared a free audit report - no catch, just useful data:
https://seodxb.com/free-seo-audit

If you'd like to see what your competitors are doing differently, I'm happy to share a 5-minute Loom video with the specific gaps.

Best,
[Your Name]
SEODXB | hi@Listi.ae`,
  },
  {
    id: "restaurant",
    label: "Restaurant / Hotel",
    icon: <MessageSquare size={16} />,
    subject: "More reservations from Google - [Restaurant name]",
    body: `Hi [First Name],

I was checking the top restaurants in [Area] on Google Maps and noticed [Restaurant] doesn't appear in the top results for "[cuisine type] restaurant Dubai" - a search that gets thousands of queries per month.

A few small changes to your Google Business Profile and website could move you significantly up the rankings before the next tourist season.

I put together a free audit showing exactly what's needed:
https://seodxb.com/free-seo-audit

Takes 2 minutes to submit. I'll send back a personalised report within 48 hours.

Best,
[Your Name]
SEODXB`,
  },
  {
    id: "linkedin",
    label: "LinkedIn DM",
    icon: <Linkedin size={16} />,
    subject: "",
    body: `Hi [First Name],

Came across [Company] while researching [industry] businesses in Dubai.

Quick question - are you happy with the organic traffic your website is generating? I ask because I ran a surface-level check and spotted a couple of things that jumped out.

We offer a completely free SEO audit (no pitch attached). Would it be useful to send it across?

https://seodxb.com/free-seo-audit`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: <Phone size={16} />,
    subject: "",
    body: `Hi [First Name], this is [Your Name] from SEODXB.

I was looking at [Company]'s website and noticed a few things that might be affecting your Google rankings.

We do free SEO audits for Dubai businesses - no charge, no obligation. Would it be okay to send you a quick report?

Takes about 2 minutes to request here: https://seodxb.com/free-seo-audit`,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
    >
      {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function FreeSEOAudit() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<AuditStatus>("idle");
  const [activeTemplate, setActiveTemplate] = React.useState("real-estate");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(formRef.current));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, message: `FREE AUDIT REQUEST\nWebsite: ${data.website}\nBusiness: ${data.business}\n\n${data.message || ""}` }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const currentTemplate = outreachTemplates.find((t) => t.id === activeTemplate)!;

  return (
    <>
      <Helmet>
        <title>Free SEO Audit Dubai - Request Your Report in 2 Minutes | SEODXB</title>
        <meta name="description" content="Get a free SEO audit for your Dubai website: technical health, keyword gaps, competitor analysis, and a priority action plan." />
        <link rel="canonical" href="https://seodxb.com/free-seo-audit" />
        <meta property="og:title" content="Free SEO Audit for Dubai Businesses | SEODXB" />
        <meta property="og:description" content="Free SEO audit: Core Web Vitals, keyword gaps, competitor analysis, AI visibility check, and a top-10 priority fix list." />
        <meta property="og:url" content="https://seodxb.com/free-seo-audit" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Free SEO Audit Dubai",
          "provider": { "@type": "ProfessionalService", "name": "SEODXB", "url": "https://seodxb.com" },
          "description": "Free SEO audit for Dubai and UAE businesses: technical health, on-page analysis, competitor gaps, AI visibility check, and priority action plan - delivered in 48 hours.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "AED" },
          "areaServed": ["Dubai", "UAE"],
          "url": "https://seodxb.com/free-seo-audit"
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/90 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/30 border border-primary/40 text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              No Cost. No Pitch. Just Data.
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
              Your Free SEO Audit<br />
              <span className="text-primary">Delivered in 48 Hours</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
              We analyse your website, find exactly what is holding back your rankings, and send you a clear priority action list - completely free.
            </p>
            <p className="text-slate-400 text-sm">
              Trusted by 80+ Dubai businesses. Includes AI visibility check for ChatGPT and Gemini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included + Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: what you get */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold mb-2">What your audit covers</h2>
              <p className="text-muted-foreground mb-8">8 areas analysed and reported back within 48 business hours.</p>
              <ul className="space-y-4">
                {auditItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 bg-slate-50 border rounded-2xl p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Why free?
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We believe in earning your trust before asking for your budget. The audit is genuine analysis - not a
                  teaser with no substance. Most clients find enough in the free audit to improve rankings
                  on their own. Some choose to hire us to implement. Either way you win.
                </p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-2">Request your free audit</h3>
                <p className="text-slate-400 text-sm mb-8">Fill in the form below. We'll run the analysis and email your report within 48 business hours.</p>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <CheckCircle size={52} className="text-green-400" />
                    <p className="text-2xl font-bold">Audit request received!</p>
                    <p className="text-slate-400">We'll have your report ready within 48 business hours.</p>
                    <Button variant="outline" className="mt-4 rounded-full border-slate-600 text-white hover:bg-slate-800" onClick={() => setStatus("idle")}>
                      Submit another
                    </Button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-300">Your name</label>
                        <Input name="from_name" placeholder="Ahmed Al Farsi" required className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 py-5" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-300">Phone</label>
                        <Input name="phone" placeholder="+971 50..." className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 py-5" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-300">Work email</label>
                      <Input name="reply_to" type="email" placeholder="you@company.com" required className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 py-5" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-300">Website URL</label>
                      <Input name="website" type="url" placeholder="https://yourcompany.com" required className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 py-5" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-300">Business name</label>
                      <Input name="business" placeholder="Your company name" required className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 py-5" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-300">Anything specific to focus on? (optional)</label>
                      <Input name="message" placeholder="E.g. competitors outranking us, slow site, local rankings..." className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 py-5" />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/30 border border-red-800 rounded-lg px-4 py-3">
                        <AlertCircle size={16} />
                        Something went wrong. Email us at hi@Listi.ae
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-7 text-lg font-bold shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {status === "sending" ? (
                        <span className="flex items-center gap-2">
                          <Loader2 size={20} className="animate-spin" /> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Get My Free Audit <ArrowRight size={20} />
                        </span>
                      )}
                    </Button>
                    <p className="text-xs text-slate-500 text-center">
                      No spam. No sales calls unless you want one. Your data is never shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outreach Kit */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Outreach Kit
            </span>
            <h2 className="text-4xl font-heading font-black mb-4">Ready-to-use cold outreach templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Send these to prospects. Link to this page as your credibility asset. Personalise the bracketed fields and hit send.
              The best results come from 20 to 30 personalised emails per week, not mass blasts.
            </p>
          </div>

          {/* Template selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {outreachTemplates.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTemplate(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  activeTemplate === t.id
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-white border-slate-200 text-foreground hover:border-primary/40"
                }`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>

          {/* Template display */}
          <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b bg-slate-50">
              {currentTemplate.subject ? (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Subject line</p>
                  <p className="font-semibold text-sm">{currentTemplate.subject}</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground font-medium">{currentTemplate.label} message</p>
              )}
              <CopyButton text={currentTemplate.subject ? `Subject: ${currentTemplate.subject}\n\n${currentTemplate.body}` : currentTemplate.body} />
            </div>
            <pre className="p-6 text-sm leading-relaxed whitespace-pre-wrap font-sans text-foreground bg-white">
              {currentTemplate.body}
            </pre>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-bold mb-2 flex items-center gap-2"><Mail size={18} className="text-primary" /> Email lists</h3>
              <p className="text-sm text-muted-foreground">
                Apollo.io free tier gives 50 verified emails per month. Hunter.io free plan gives 25. Start there -
                target Dubai business owners in one vertical at a time.
              </p>
            </div>
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-bold mb-2 flex items-center gap-2"><Linkedin size={18} className="text-primary" /> LinkedIn</h3>
              <p className="text-sm text-muted-foreground">
                Search "CEO Dubai real estate" on LinkedIn. Free account allows 5 to 8 connection requests per day.
                Personalize the request note with the company name and you'll get 25 to 35% acceptance rates.
              </p>
            </div>
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-bold mb-2 flex items-center gap-2"><Phone size={18} className="text-primary" /> WhatsApp</h3>
              <p className="text-sm text-muted-foreground">
                For UAE outreach, WhatsApp works better than email for small businesses. Find numbers from Google
                Business listings. Keep it short, friendly, and reference something specific about their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: "1", title: "Submit your details", desc: "Fill in the form above. We only need your website URL, name, and email." },
              { step: "2", title: "We run the analysis", desc: "Our team runs 80+ checks using professional SEO tools across 8 areas of your site." },
              { step: "3", title: "Receive your report", desc: "Within 48 business hours you'll receive a clear PDF report with a priority action list." },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-xl font-black mx-auto mb-5">
                  {s.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to see what's holding you back?</h2>
          <p className="text-primary-foreground/80 mb-8">
            Request your free audit above. No cost, no commitment, no catch.
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 text-lg font-bold shadow-xl"
          >
            Get My Free Audit
          </Button>
        </div>
      </section>
    </>
  );
}
