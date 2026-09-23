import { useState, type FormEvent } from "react";
import { CONTACT } from "../site";
import { SERVICES } from "../services";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

function ContactForm() {
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
        body: JSON.stringify({ ...data, source: "contact-page" }),
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
      <div className="rounded-2xl border border-line bg-white p-8" role="status">
        <h2 className="font-display text-2xl font-semibold">Thank you. We have your enquiry.</h2>
        <p className="mt-3 text-ink-soft">We will reply within one working day. For anything urgent, call or WhatsApp us.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-line bg-white p-6 sm:p-8">
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
        <p className="text-sm text-accent-dark" role="alert">
          {status.message} Please try again, or email {CONTACT.email}.
        </p>
      )}
      <button type="submit" disabled={status.kind === "sending"} className="btn-accent disabled:opacity-60">
        {status.kind === "sending" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Book a free consultation</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Tell us a little about your business. We reply within one working day to arrange a 30-minute call. No
          obligation, and you will leave with at least one thing you can act on.
        </p>
        <dl className="mt-10 space-y-5 text-sm">
          <div>
            <dt className="font-semibold">Email</dt>
            <dd className="mt-1"><a href={`mailto:${CONTACT.email}`} className="text-ink-soft hover:text-ink">{CONTACT.email}</a></dd>
          </div>
          <div>
            <dt className="font-semibold">Phone and WhatsApp</dt>
            <dd className="mt-1">
              <a href={CONTACT.phoneHref} className="text-ink-soft hover:text-ink">{CONTACT.phone}</a>
              {" · "}
              <a href={CONTACT.whatsapp} className="text-ink-soft underline hover:text-ink">WhatsApp</a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Location</dt>
            <dd className="mt-1 text-ink-soft">{CONTACT.city}</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </section>
  );
}
