import React from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    const data = Object.fromEntries(new FormData(formRef.current));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact SEODXB - Get a Free SEO Consultation | Dubai SEO Agency</title>
        <meta name="description" content="Get in touch with SEODXB, Dubai's leading SEO agency. Book a free consultation to discuss your SEO strategy, pricing, and how we can grow your organic traffic." />
        <link rel="canonical" href="https://seodxb.com/contact" />
        <meta property="og:title" content="Contact SEODXB - Free SEO Consultation Dubai" />
        <meta property="og:description" content="Book a free SEO consultation with SEODXB. Tell us about your business and we'll help you dominate search." />
        <meta property="og:url" content="https://seodxb.com/contact" />
      </Helmet>
    <div className="pt-32 pb-24 container mx-auto px-4 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-black mb-6">Let's start something great.</h1>
          <p className="text-xl text-muted-foreground mb-12">Whether you need to dominate traditional search, optimize for answer engines, or prepare for generative AI, we're here to help.</p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email Us</p>
                <p className="text-lg font-bold">hi@Listi.ae</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Call Us</p>
                <p className="text-lg font-bold">+971 52 155 1198</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Visit Us</p>
                <p className="text-lg font-bold">Dubai Design District, UAE</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-50 border rounded-[2rem] p-8 md:p-10 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-8">Send us a message</h3>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <CheckCircle size={56} className="text-green-500" />
              <p className="text-2xl font-bold">Message sent!</p>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Name</label>
                  <Input name="from_name" placeholder="John Doe" className="bg-white py-6" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Contact number</label>
                  <Input name="phone" placeholder="+971 50..." className="bg-white py-6" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Email</label>
                <Input name="reply_to" type="email" placeholder="john@company.com" className="bg-white py-6" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Company URL</label>
                <Input name="company_url" placeholder="https://example.com" className="bg-white py-6" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Message</label>
                <Textarea name="message" placeholder="How can we help you?" className="bg-white min-h-[150px] resize-none text-base p-4" required />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  <AlertCircle size={16} />
                  Something went wrong. Please email us directly at hi@Listi.ae
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-white mt-4 py-7 text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={20} className="animate-spin" /> Sending…
                  </span>
                ) : (
                  "Book A Call"
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
    </>
  );
}
