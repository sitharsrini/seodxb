"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // For now, simulate submission (in real prod: connect to Resend, Formspree, or CRM)
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you. We've received your request. A strategist will contact you within 4 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-5xl tracking-[-2px] font-semibold">Book Your Free SEO Audit</h1>
      <p className="mt-4 text-xl text-gray-600">Get a personalised technical + AEO + GEO audit of your website. No obligation. Usually delivered within 48 hours.</p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input required name="firstName" placeholder="First name" className="border p-4 rounded-2xl text-lg" />
          <input required name="lastName" placeholder="Last name" className="border p-4 rounded-2xl text-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input required type="email" name="email" placeholder="Work email" className="border p-4 rounded-2xl text-lg" />
          <input required type="tel" name="phone" placeholder="Phone (UAE preferred)" className="border p-4 rounded-2xl text-lg" />
        </div>
        <input name="company" placeholder="Company / Brand" className="border p-4 rounded-2xl text-lg w-full" />
        <input name="website" placeholder="Website URL" className="border p-4 rounded-2xl text-lg w-full" />
        
        <textarea name="goals" rows={5} placeholder="What are your biggest search challenges right now? (e.g. losing to competitors in AI answers, low local pack visibility, etc.)" className="border p-4 rounded-3xl text-lg w-full resize-y"></textarea>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#0A2540] hover:bg-black text-white py-5 rounded-full text-xl font-semibold disabled:opacity-70 transition"
        >
          {loading ? "Sending..." : "Request My Free Audit"}
        </button>
        <p className="text-center text-xs text-gray-500">We typically respond within 2-4 business hours. All information is confidential.</p>
      </form>

      <div className="mt-14 text-sm text-gray-500">
        Prefer to talk first? Call <a href="tel:+971521551198" className="text-[#00A896]">+971 52 155 1198</a> or email <a href="mailto:hi@listi.ae" className="text-[#00A896]">hi@listi.ae</a>
      </div>
    </div>
  );
}
