import { CtaBand, PageHero } from "../components/Layout";
import { delay } from "../motion";
import { Faq } from "../components/Faq";
import { CORE_FAQS } from "../core-faqs";

const KPIS = [
  { channel: "Strategy", kpis: "Cost per qualified lead, pipeline value, payback period per channel" },
  { channel: "SEO, AEO & GEO", kpis: "Organic enquiries, rankings for buying-intent terms, mentions in AI answers" },
  { channel: "Performance ads", kpis: "Cost per qualified lead, return on ad spend, lead-to-sale rate" },
  { channel: "Website & content", kpis: "Conversion rate, engaged visitors, enquiries from content and social" },
];

const COMMITMENTS = [
  {
    title: "Tracking before spend",
    body: "We confirm that forms, calls and WhatsApp enquiries are tracked before a single dirham goes into ads. If we cannot measure it, we tell you.",
  },
  {
    title: "KPIs agreed up front",
    body: "Each engagement starts with written targets tied to leads and revenue. Traffic and impressions are reported, but they are not the goal.",
  },
  {
    title: "Monthly reporting in plain language",
    body: "One report, one call. What happened, what it cost, what we learned and what we will change next month.",
  },
  {
    title: "Budget follows results",
    body: "Channels that produce qualified enquiries get more budget. Channels that do not are paused, even if they were our idea.",
  },
];

export default function Results() {
  return (
    <>
      <PageHero eyebrow="Results" title={<>We measure success the way your <span className="text-gradient">finance team</span> does</>}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          Good marketing shows up as enquiries, sales and a lower cost to win each customer. This is how we set targets,
          report on them and decide where your budget goes next.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-semibold" data-reveal>Our commitments on every engagement</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {COMMITMENTS.map((c, i) => (
            <div key={c.title} className="spotlight rounded-2xl border border-line bg-white p-7" data-reveal style={delay(i + 1, 110)}>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-dark font-display text-sm font-semibold text-white shadow-lg shadow-brand/25">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-semibold" data-reveal>What we track, by service</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-brand/5" data-reveal="scale" style={delay(1)}>
            <table className="w-full text-left text-sm">
              <thead className="bg-gradient-to-r from-brand to-brand-dark text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Service</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Primary KPIs</th>
                </tr>
              </thead>
              <tbody>
                {KPIS.map((k) => (
                  <tr key={k.channel} className="border-t border-line transition-colors hover:bg-mint/30">
                    <th scope="row" className="px-5 py-4 align-top font-medium">{k.channel}</th>
                    <td className="px-5 py-4 text-ink-soft">{k.kpis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <h2 className="font-display text-3xl font-semibold" data-reveal="left">Case studies</h2>
          <div className="space-y-4 leading-relaxed text-ink-soft" data-reveal style={delay(1)}>
            <p>
              Many of our clients prefer not to publish their numbers. We share relevant, anonymised case studies during
              your consultation, matched to your industry and goals.
            </p>
            <p>
              Ask us for examples in your sector and we will walk you through what we did, what it cost and what changed.
            </p>
            <a href="/contact" className="btn-primary mt-2">Request case studies</a>
          </div>
        </div>
      </section>

      <Faq faqs={CORE_FAQS["/results"]} />

      <CtaBand />
    </>
  );
}
