import React from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

const WHATSAPP = "971521551198"; // +971 52 155 1198
const CONTACT_EMAIL = "hi@Listi.ae";

export function Contact() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<Status>("idle");
  const [sent, setSent] = React.useState<{ from_name?: string; reply_to?: string; phone?: string; company_url?: string; message?: string }>({});
  const [waUrl, setWaUrl] = React.useState("");

  const buildWaUrl = (d: typeof sent) => {
    const text =
      `New enquiry from ${d.from_name || "website"}\n\n` +
      `Email: ${d.reply_to || "-"}\n` +
      `Phone: ${d.phone || "-"}\n` +
      `Company: ${d.company_url || "-"}\n\n` +
      `${d.message || ""}`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = Object.fromEntries(new FormData(formRef.current)) as typeof sent;
    setSent(data);
    const url = buildWaUrl(data);
    setWaUrl(url);
    // Open WhatsApp with the enquiry pre-filled. Opened synchronously inside the
    // submit gesture so popup blockers allow it. No server, key, or account
    // needed, and it reaches the business instantly, which suits the Gulf market.
    window.open(url, "_blank");
    setStatus("success");
  };

  return (
    <>
      <Helmet>
        <title>Contact SEODXB - Get a Free SEO Consultation | Dubai SEO Agency</title>
        <meta name="description" content="Contact SEODXB, a Dubai SEO agency. Book a free consultation on strategy, pricing, and growing your organic traffic." />
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
            <div className="flex flex-col items-center justify-center py-14 text-center gap-4">
              <MessageCircle size={56} className="text-[#25D366]" />
              <p className="text-2xl font-bold">Opening WhatsApp…</p>
              <p className="text-muted-foreground max-w-sm">Your enquiry is pre-filled in WhatsApp, just press send and we'll reply fast. If it did not open, tap below.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-1">
                <a href={waUrl || `https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-5 py-3 text-sm hover:opacity-90 transition-opacity">
                  <MessageCircle size={16} /> Open WhatsApp
                </a>
                <a href={`tel:+${WHATSAPP}`}
                  className="flex items-center gap-2 rounded-full bg-primary text-white font-semibold px-5 py-3 text-sm hover:opacity-90 transition-opacity">
                  <Phone size={16} /> Call
                </a>
              </div>
              <Button
                variant="outline"
                className="mt-2 rounded-full"
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

              {status === "error" && (() => {
                const summary = `Hi SEODXB, I tried the contact form but it did not go through.%0A%0AName: ${sent.from_name ?? ""}%0AEmail: ${sent.reply_to ?? ""}%0ACompany: ${sent.company_url ?? ""}%0A%0A${sent.message ?? ""}`;
                const mailBody = summary.replace(/%0A/g, "\n");
                return (
                  <div className="space-y-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-4">
                    <div className="flex items-center gap-2 text-amber-700 text-sm font-semibold">
                      <AlertCircle size={16} />
                      Message not sent. Reach us directly, it takes one tap:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <a href={`https://wa.me/${WHATSAPP}?text=${summary}`} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-white font-semibold py-3 text-sm hover:opacity-90 transition-opacity">
                        <MessageCircle size={16} /> WhatsApp
                      </a>
                      <a href={`tel:+${WHATSAPP}`}
                        className="flex items-center justify-center gap-2 rounded-lg bg-primary text-white font-semibold py-3 text-sm hover:opacity-90 transition-opacity">
                        <Phone size={16} /> Call
                      </a>
                      <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("New enquiry from " + (sent.from_name ?? "website"))}&body=${encodeURIComponent(mailBody)}`}
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 text-gray-800 font-semibold py-3 text-sm hover:bg-gray-50 transition-colors">
                        <Mail size={16} /> Email
                      </a>
                    </div>
                  </div>
                );
              })()}

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
