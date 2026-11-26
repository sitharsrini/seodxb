import { useState } from "react";
import { CtaBand, PageHero } from "../components/Layout";
import { Faq } from "../components/Faq";
import { CORE_FAQS } from "../core-faqs";
import { PAGES_UPDATED } from "../site";
import { PUBLISHED } from "../published";
import { delay } from "../motion";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

const FIELDS = [
  { key: "revenue", label: "New revenue you want marketing to add (AED)", hint: "New customers only, not renewals or referrals that would arrive anyway." },
  { key: "value", label: "Average value of a new customer (AED)", hint: "What one new customer is worth over the period. Be conservative." },
  { key: "close", label: "Close rate (%)", hint: "The share of qualified enquiries that become customers." },
  { key: "cpl", label: "Cost per qualified lead (AED)", hint: "Use your own ad data if you have it. If not, treat this as a guess to test." },
  { key: "months", label: "Period (months)", hint: "Usually 6 or 12." },
] as const;
type Key = (typeof FIELDS)[number]["key"];

const STEPS = [
  { title: "Start from revenue, not a percentage", body: "A percentage of revenue tells you what you can afford, not what you need. This calculator works backwards from the new revenue you want." },
  { title: "Turn revenue into customers", body: "Divide the revenue target by the average value of a new customer to see how many new customers you need." },
  { title: "Turn customers into leads", body: "Divide by your close rate. If one in four qualified enquiries becomes a customer, you need four leads for each customer." },
  { title: "Turn leads into budget", body: "Multiply the leads you need by a realistic cost per qualified lead for your channels. That is your media budget." },
];

export default function BudgetCalculator() {
  // Defaults match the worked example in the budget guide.
  const [v, setV] = useState<Record<Key, string>>({ revenue: "600000", value: "30000", close: "25", cpl: "1500", months: "12" });
  const n = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, Number(x)])) as Record<Key, number>;
  const valid = n.revenue > 0 && n.value > 0 && n.close > 0 && n.close <= 100 && n.cpl > 0 && n.months > 0;
  const customers = valid ? Math.ceil(n.revenue / n.value) : 0;
  const leads = valid ? Math.ceil(customers / (n.close / 100)) : 0;
  const media = leads * n.cpl;
  const monthly = valid ? media / n.months : 0;
  const share = valid ? (media / n.revenue) * 100 : 0;

  return (
    <>
      <PageHero lead="Marketing budget calculator for UAE businesses" title={<>Work out your marketing budget from the <span className="text-gradient">result you want</span></>} art="rings">
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          Enter the new revenue you want, what a customer is worth, your close rate and a cost per qualified lead. The
          calculator shows the customers, leads and media budget that target needs.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="calc-title">
        <h2 id="calc-title" className="font-display text-3xl font-semibold sm:text-4xl" data-reveal>Your numbers</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <form className="space-y-5 rounded-3xl border border-line bg-white p-6 sm:p-8" onSubmit={(e) => e.preventDefault()} data-reveal>
            {FIELDS.map((f) => (
              <label key={f.key} className="block text-sm font-medium">
                {f.label}
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  className="field mt-2"
                  value={v[f.key]}
                  onChange={(e) => setV((old) => ({ ...old, [f.key]: e.target.value }))}
                />
                <span className="mt-1.5 block text-xs font-normal text-ink-soft">{f.hint}</span>
              </label>
            ))}
          </form>

          <div className="relative overflow-hidden rounded-3xl bg-brand p-6 text-white sm:p-8" aria-live="polite" data-reveal="scale" style={delay(1)}>
            <div className="dots-light absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white/80">Your result</h3>
              {valid ? (
                <>
                  <p className="mt-5 text-[15px] text-white/80">Media budget for the period</p>
                  <p className="text-[clamp(40px,6vw,64px)] font-medium leading-none tracking-[-0.04em]">AED {fmt(media)}</p>
                  <p className="mt-2 text-lg">About AED {fmt(monthly)} a month</p>
                  <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-white/25 pt-6">
                    <div>
                      <dt className="text-sm text-white/75">New customers needed</dt>
                      <dd className="mt-1 text-3xl font-medium tracking-tight">{fmt(customers)}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-white/75">Qualified leads needed</dt>
                      <dd className="mt-1 text-3xl font-medium tracking-tight">{fmt(leads)}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-white/75">Leads per month</dt>
                      <dd className="mt-1 text-3xl font-medium tracking-tight">{fmt(leads / n.months)}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-white/75">Budget as a share of the new revenue</dt>
                      <dd className="mt-1 text-3xl font-medium tracking-tight">{share.toFixed(0)}%</dd>
                    </div>
                  </dl>
                  <p className="mt-6 text-sm leading-relaxed text-white/80">
                    This is media spend only. Add the cost of the people or agency doing the work, plus content, design
                    and tools. The result is a model built on your inputs, not a forecast.
                  </p>
                </>
              ) : (
                <p className="mt-5 text-lg">Enter all five numbers above zero. The close rate must be between 1 and 100.</p>
              )}
              <a href="/contact" className="btn-accent mt-7">Talk through your numbers</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow" data-reveal>The method</p>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>How the calculator works</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-line bg-white p-6" data-reveal style={delay(i + 1, 100)}>
                <span className="step-num">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl leading-relaxed text-ink-soft" data-reveal>
            The full reasoning, with a worked example, is in our guide{" "}
            <a href="/blog/how-much-should-a-uae-business-spend-on-marketing" className="font-medium text-brand underline underline-offset-4">
              How Much Should a UAE Business Spend on Marketing?
            </a>{" "}
            If you do not know your cost per qualified lead yet, start with{" "}
            <a href="/services/lead-tracking-and-attribution" className="font-medium text-brand underline underline-offset-4">lead tracking</a>{" "}
            and a small test campaign, or ask for a{" "}
            <a href="/free-marketing-audit" className="font-medium text-brand underline underline-offset-4">free marketing audit</a>.
          </p>
        </div>
      </section>

      <Faq faqs={CORE_FAQS["/marketing-budget-calculator"]} reviewed={PAGES_UPDATED} published={PUBLISHED["/marketing-budget-calculator"]} />

      <CtaBand />
    </>
  );
}
