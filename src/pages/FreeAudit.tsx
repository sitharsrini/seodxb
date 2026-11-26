import { CtaBand, PageHero } from "../components/Layout";
import { ContactForm } from "./Contact";
import { Faq } from "../components/Faq";
import { CORE_FAQS } from "../core-faqs";
import { PAGES_UPDATED } from "../site";
import { PUBLISHED } from "../published";
import { delay } from "../motion";

const CHECKS = [
  { title: "Website and enquiries", body: "How fast the site loads on a phone, how clear the offer is, and how easy it is to call, message on WhatsApp or send a form." },
  { title: "Tracking", body: "Whether forms, calls and WhatsApp clicks are measured, so you can tell which channel brought each enquiry." },
  { title: "Google search", body: "Whether your main pages are indexed, what they are found for, and the technical problems that hold them back." },
  { title: "AI search", body: "What ChatGPT, Gemini and Google AI Overviews say when asked about your service, and whether they mention you." },
  { title: "Google Business Profile", body: "Categories, services, photos, reviews and whether the details match your website and other listings." },
  { title: "Paid ads", body: "If you run Google or Meta ads, where the budget goes and whether the campaigns are judged on qualified leads." },
];

const STEPS = [
  { title: "Send the form", body: "Tell us your website, what you sell and what you want marketing to achieve. It takes about two minutes." },
  { title: "We review", body: "We look at the six areas above from the outside, using what is publicly visible. We do not need any logins for this first review." },
  { title: "We reply within one working day", body: "You get a time for a free 30-minute call, where we walk through what we found and what we would do first." },
];

export default function FreeAudit() {
  return (
    <>
      <PageHero lead="Free marketing audit in Dubai" title={<>Find out what is holding your marketing back, <span className="text-gradient">free</span></>} art="gem">
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          Send us your website and your goals. We review your site, tracking, search visibility and ads, then tell you
          plainly what we would fix first. There is no cost and no obligation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal style={delay(3)}>
          <a href="#request" className="btn-primary">Request your free audit</a>
          <a href="/services" className="btn-ghost">See our services</a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow" data-reveal>What we check</p>
        <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>Six areas, reviewed by a person</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHECKS.map((c, i) => (
            <div key={c.title} className="svc-mini" data-reveal style={delay(i, 80)}>
              <span className="step-num">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-medium tracking-tight">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow" data-reveal>How it works</p>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>Three steps, one working day</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-line bg-white p-6" data-reveal style={delay(i + 1, 110)}>
                <span className="font-display text-3xl font-semibold text-brand">{i + 1}</span>
                <h3 className="mt-3 text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 max-w-3xl rounded-2xl border-l-4 border-brand bg-white p-6" data-reveal>
            <h3 className="font-semibold">What this audit is, and what it is not</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              This is a short first review, based on what anyone can see from outside your accounts. It is enough to show
              the biggest gaps and what to fix first. A full audit, with access to your analytics, ad accounts and
              Search Console, is part of the first 30 days when we work together.
            </p>
          </div>
        </div>
      </section>

      <section id="request" className="relative scroll-mt-20 overflow-hidden bg-navy">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
          <div className="text-white" data-reveal="left">
            <p className="eyebrow">Free audit</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">Request your free marketing audit</h2>
            <p className="mt-4 text-white/80">
              Add your website in the form and tell us what you want marketing to achieve in the next six months. We
              reply within one working day.
            </p>
            <p className="mt-6 text-sm text-white/70">
              Want to plan the numbers first? Try the{" "}
              <a href="/marketing-budget-calculator" className="font-medium text-white underline underline-offset-4">marketing budget calculator</a>.
            </p>
          </div>
          <ContactForm source="free-marketing-audit" />
        </div>
      </section>

      <Faq faqs={CORE_FAQS["/free-marketing-audit"]} reviewed={PAGES_UPDATED} published={PUBLISHED["/free-marketing-audit"]} />

      <CtaBand />
    </>
  );
}
