import { CtaBand } from "../components/Layout";

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
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Results</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            We measure success the way your finance team does
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Good marketing shows up as enquiries, sales and a lower cost to win each customer. This is how we set targets,
            report on them and decide where your budget goes next.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-semibold">Our commitments on every engagement</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {COMMITMENTS.map((c) => (
            <div key={c.title} className="rounded-xl border border-line bg-white p-7">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">What we track, by service</h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-line bg-paper">
            <table className="w-full text-left text-sm">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Service</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Primary KPIs</th>
                </tr>
              </thead>
              <tbody>
                {KPIS.map((k) => (
                  <tr key={k.channel} className="border-t border-line">
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
          <h2 className="font-display text-3xl font-semibold">Case studies</h2>
          <div className="space-y-4 leading-relaxed text-ink-soft">
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

      <CtaBand />
    </>
  );
}
