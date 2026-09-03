import React from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Search, Loader2, Target, KeyRound, CheckCircle, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { clampTitle } from "@/lib/title";

type Status = "idle" | "loading" | "done" | "error";

const WHATSAPP = "971521551198";

export function IcpFinder() {
  const [website, setWebsite] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [html, setHtml] = React.useState("");
  const [captured, setCaptured] = React.useState(false);
  const resultRef = React.useRef<HTMLDivElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!website.trim()) return;
    setStatus("loading");
    setHtml("");
    setCaptured(false);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: website.trim(), email: email.trim(), question: question.trim() }),
      });
      const j = await res.json();
      if (j.html) {
        setHtml(j.html);
        setStatus("done");
      } else if (j.captured) {
        setCaptured(true);
        setStatus("done");
      } else {
        setStatus("error");
      }
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("Free ICP Finder & Keyword Analyser | SEODXB")}</title>
        <meta name="description" content="Free ICP Finder and keyword analyser: enter a website to get an ideal customer profile and SEO keyword strategy from SEODXB." />
        <link rel="canonical" href="https://seodxb.com/icp-finder" />
        <meta property="og:title" content="Free ICP Finder & Keyword Analyser | SEODXB" />
        <meta property="og:description" content="Enter a website and get an ideal customer profile plus an SEO keyword strategy built for lead generation." />
        <meta property="og:url" content="https://seodxb.com/icp-finder" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
              <Sparkles size={14} /> Free Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
              ICP Finder & Keyword Analyser
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter any website and get an Ideal Customer Profile plus a lead-focused SEO keyword strategy: core, long-tail, and geo keywords, clusters, search intent, a priority matrix, and content opportunities.
            </p>
          </div>

          {/* Search / question bar */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 md:p-8 space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">Website URL</label>
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="yourcompany.com"
                  className="bg-white py-6 pl-11 text-base"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">Email <span className="text-gray-400 font-normal">(to receive the full report)</span></label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@company.com"
                  className="bg-white py-6"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-800">Your question <span className="text-gray-400 font-normal">(optional)</span></label>
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. Who should we target first?"
                  className="bg-white py-6"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-7 text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2"><Loader2 size={20} className="animate-spin" /> Researching…</span>
              ) : (
                <span className="flex items-center gap-2"><Target size={20} /> Analyse My Market</span>
              )}
            </Button>
          </motion.form>

          {/* Result */}
          <div ref={resultRef}>
            {status === "loading" && (
              <div className="mt-8 text-center text-muted-foreground">
                <Loader2 className="animate-spin mx-auto mb-3 text-primary" size={28} />
                Researching the business, ideal customer profile, competitors, and keyword strategy…
              </div>
            )}

            {status === "done" && html && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-10"
              >
                <div
                  className="icp-report prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h3:text-lg prose-table:text-sm prose-table:w-full prose-th:bg-slate-100 prose-th:p-2 prose-th:text-left prose-td:p-2 prose-td:border-t prose-td:border-gray-100"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <div className="mt-10 rounded-2xl bg-primary/5 border border-primary/15 p-6 text-center">
                  <p className="font-bold text-gray-900 mb-2">Want SEODXB to execute this strategy?</p>
                  <p className="text-sm text-muted-foreground mb-4">We turn this analysis into rankings, AI citations, and qualified leads.</p>
                  <Button asChild className="rounded-full px-6 font-semibold"><a href="/contact">Book a Free Consultation →</a></Button>
                </div>
              </motion.div>
            )}

            {status === "done" && !html && captured && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-white rounded-3xl border border-gray-200 shadow-lg p-8 text-center"
              >
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900 mb-2">Request received</p>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  We are preparing a full ICP and keyword strategy for <strong>{website}</strong>{email ? <> and will send it to <strong>{email}</strong></> : <>. Add your email above to get the full report</>}. Want it faster? Message us.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi SEODXB, I used the ICP Finder for " + website + " and would like the full report.")}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-5 py-3 text-sm hover:opacity-90">
                    <MessageCircle size={16} /> WhatsApp us
                  </a>
                  <a href="/contact" className="flex items-center gap-2 rounded-full bg-primary text-white font-semibold px-5 py-3 text-sm hover:opacity-90">
                    Book a call
                  </a>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <div className="mt-8 text-center text-red-600">
                Something went wrong. Please try again, or <a href="/contact" className="underline">contact us</a> for a manual analysis.
              </div>
            )}
          </div>

          {/* What you get */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <Target className="text-primary mb-3" size={24} />
              <h2 className="font-bold text-lg text-gray-900 mb-2">Ideal Customer Profile</h2>
              <p className="text-sm text-muted-foreground">Target industries, company size, geographic markets, decision-maker titles, pain points, buying triggers, use cases, competitor positioning, and how to stand out.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <KeyRound className="text-primary mb-3" size={24} />
              <h2 className="font-bold text-lg text-gray-900 mb-2">Keyword Strategy</h2>
              <p className="text-sm text-muted-foreground">Core, long-tail, and geo keywords grouped into clusters with pillar terms, search intent, a priority matrix, PPC picks, keyword mapping, and AEO and GEO opportunities.</p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-10 max-w-xl mx-auto">
            Built by SEODXB, a Dubai SEO, AEO, and GEO agency. This tool gives a strategic starting point. For a full, executed strategy, book a free consultation.
          </p>
        </div>
      </div>
    </>
  );
}
