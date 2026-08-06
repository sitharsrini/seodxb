import React from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Loader2, CheckCircle2, AlertTriangle, XCircle, Gauge } from "lucide-react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "done" | "error";
interface CheckItem { label: string; status: "pass" | "warn" | "fail"; detail: string; }
interface Result { score: number; items: CheckItem[]; }

export function SeoOptimizer() {
  const [website, setWebsite] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [result, setResult] = React.useState<Result | null>(null);
  const [error, setError] = React.useState("");
  const resultRef = React.useRef<HTMLDivElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!website.trim()) return;
    setStatus("loading");
    setResult(null);
    setError("");
    try {
      const res = await fetch("/api/seo-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: website.trim(), email: email.trim() }),
      });
      const j = await res.json();
      if (j.result) {
        setResult(j.result);
        setStatus("done");
      } else {
        setError(j.error || "Something went wrong.");
        setStatus("error");
      }
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const scoreColor = result ? (result.score >= 80 ? "text-green-600" : result.score >= 55 ? "text-amber-500" : "text-red-500") : "";
  const icon = (s: string) =>
    s === "pass" ? <CheckCircle2 className="text-green-500 shrink-0" size={20} />
    : s === "warn" ? <AlertTriangle className="text-amber-500 shrink-0" size={20} />
    : <XCircle className="text-red-500 shrink-0" size={20} />;

  return (
    <>
      <Helmet>
        <title>Free SEO Optimizer & On-Page Checker | SEODXB</title>
        <meta name="description" content="Free SEO optimizer: enter a URL for an instant on-page SEO audit with a score and fixes for title, meta, headings, schema and more." />
        <link rel="canonical" href="https://seodxb.com/seo-optimizer" />
        <meta property="og:title" content="Free SEO Optimizer & On-Page Checker | SEODXB" />
        <meta property="og:description" content="Instant on-page SEO audit with a score and actionable fixes. Free, no login." />
        <meta property="og:url" content="https://seodxb.com/seo-optimizer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
              <Gauge size={14} /> Free Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">SEO Optimizer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter any page and get an instant on-page SEO audit: a score plus specific fixes for your title, meta description, headings, canonical, schema, mobile, images, and more. Free, no login.
            </p>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 md:p-8 space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">Page URL</label>
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="yourcompany.com/page" className="bg-white py-6 pl-11 text-base" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">Email <span className="text-gray-400 font-normal">(optional, to get the full report)</span></label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@company.com" className="bg-white py-6" />
            </div>
            <Button type="submit" disabled={status === "loading"} className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-7 text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100">
              {status === "loading" ? <span className="flex items-center gap-2"><Loader2 size={20} className="animate-spin" /> Auditing…</span> : <span className="flex items-center gap-2"><Gauge size={20} /> Run Free SEO Audit</span>}
            </Button>
          </motion.form>

          <div ref={resultRef}>
            {status === "error" && (
              <div className="mt-8 text-center text-red-600">{error}</div>
            )}

            {status === "done" && result && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-6">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 text-center">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">On-Page SEO Score</p>
                  <p className={`text-6xl font-black ${scoreColor}`}>{result.score}<span className="text-2xl text-gray-400">/100</span></p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {result.items.filter((i) => i.status === "pass").length} passed · {result.items.filter((i) => i.status === "warn").length} to improve · {result.items.filter((i) => i.status === "fail").length} failing
                  </p>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200 shadow-lg divide-y divide-gray-100">
                  {result.items.map((it, i) => (
                    <div key={i} className="flex items-start gap-3 p-4">
                      {icon(it.status)}
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{it.label}</p>
                        <p className="text-sm text-muted-foreground">{it.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-primary/5 border border-primary/15 p-6 text-center">
                  <p className="font-bold text-gray-900 mb-2">Want us to fix all of this and rank you?</p>
                  <p className="text-sm text-muted-foreground mb-4">SEODXB turns these fixes into rankings, AI citations, and leads.</p>
                  <Button asChild className="rounded-full px-6 font-semibold"><a href="/contact">Get a Free Consultation →</a></Button>
                </div>
              </motion.div>
            )}
          </div>

          <p className="text-center text-xs text-gray-400 mt-10 max-w-xl mx-auto">
            Built by SEODXB, a Dubai SEO, AEO, and GEO agency. This audit covers on-page fundamentals. For a full technical, content, and off-page strategy, book a free consultation.
          </p>
        </div>
      </div>
    </>
  );
}
