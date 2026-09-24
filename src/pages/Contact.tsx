import { useState, type FormEvent } from "react";
import { CONTACT } from "../site";
import { SERVICES } from "../services";
import { delay } from "../motion";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export function ContactForm({ source = "contact-page" }: { source?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="pop-in self-start rounded-3xl border border-line bg-white p-8 text-center shadow-2xl shadow-brand/10 sm:p-12" role="status">
        <svg className="check-draw mx-auto" width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
          <circle cx="36" cy="36" r="34" fill="var(--color-mint)" />
          <path d="M22 37l10 10 19-21" stroke="var(--color-mint-dark)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="mt-6 font-display text-2xl font-semibold">Thank you. We have your enquiry.</h2>
        <p className="mt-3 text-ink-soft">We will reply within one working day. For anything urgent, call or WhatsApp us.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-line bg-white/90 p-6 shadow-2xl shadow-brand/10 backdrop-blur sm:p-8"
      data-reveal="scale"
      style={delay(2)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name *
          <input name="name" required autoComplete="name" className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Work email *
          <input name="email" type="email" required autoComplete="email" className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Company website
          <input name="company_url" autoComplete="url" placeholder="example.com" className="field mt-2" />
        </label>
      </div>
      <label className="block text-sm font-medium">
        What do you need help with?
        <select name="service" className="field mt-2" defaultValue="">
          <option value="">Not sure yet</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium">
        Tell us about your goals *
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What you sell, who you sell to, and what you want marketing to achieve in the next 6 months."
          className="field mt-2"
        />
      </label>
      {status.kind === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {status.message} Please try again, or email {CONTACT.email}.
        </p>
      )}
      <button type="submit" disabled={status.kind === "sending"} className="btn-primary w-full justify-center py-3 disabled:opacity-60 sm:w-auto">
        {status.kind === "sending" ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send enquiry"
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="blob -left-24 top-10 h-80 w-80 bg-brand/15" aria-hidden="true" />
      <div className="blob -right-20 bottom-0 h-80 w-80 bg-mint/70" style={{ animationDelay: "-7s" }} aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow" data-reveal>Contact</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" data-reveal style={delay(1)}>
            Book a <span className="text-gradient">free consultation</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
            Tell us a little about your business. We reply within one working day to arrange a 30-minute call. No
            obligation, and you will leave with at least one thing you can act on.
          </p>
          <dl className="mt-10 space-y-4 text-sm">
            {[
              { label: "Email", body: <a href={`mailto:${CONTACT.email}`} className="text-ink-soft hover:text-brand">{CONTACT.email}</a> },
              {
                label: "Phone and WhatsApp",
                body: (
                  <>
                    <a href={CONTACT.phoneHref} className="text-ink-soft hover:text-brand">{CONTACT.phone}</a>
                    {" · "}
                    <a href={CONTACT.whatsapp} className="text-ink-soft underline hover:text-brand">WhatsApp</a>
                  </>
                ),
              },
              { label: "Location", body: <span className="text-ink-soft">{CONTACT.city}</span> },
            ].map((row, i) => (
              <div key={row.label} className="rounded-xl border border-line bg-white/80 px-4 py-3 backdrop-blur" data-reveal="left" style={delay(i + 3)}>
                <dt className="font-semibold">{row.label}</dt>
                <dd className="mt-1">{row.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
