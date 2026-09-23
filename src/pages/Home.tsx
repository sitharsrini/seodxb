import { CtaBand } from "../components/Layout";
import { SERVICES } from "../services";

const PROBLEMS = [
  {
    title: "Spending without knowing what works",
    body: "Ads, an agency retainer, a freelancer for social. Money goes out every month, but nobody can say which channel brought the last ten customers.",
  },
  {
    title: "Invisible where buyers search",
    body: "Competitors show up on Google, in the map results and in ChatGPT answers. You only show up when someone already knows your name.",
  },
  {
    title: "Too many suppliers, no plan",
    body: "Separate people for the website, ads and content, each optimising their own piece. The result is activity, not growth.",
  },
];

const STEPS = [
  { n: "01", title: "Diagnose", body: "We review your market, competitors, website, tracking and current spend, then show you where the gaps and quick wins are." },
  { n: "02", title: "Plan", body: "A 90-day plan with priorities, budget per channel and the KPIs we will be judged on. Agreed before any spend." },
  { n: "03", title: "Execute", body: "One team runs strategy, search, ads, website and content together, so every channel supports the others." },
  { n: "04", title: "Measure", body: "Monthly reporting on leads, cost per lead and revenue impact. What works gets more budget. What does not gets cut." },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-28">
          <div>
            <p className="eyebrow">Marketing consultancy · Dubai</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Marketing that is planned around revenue, not activity.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              SEODXB helps UAE businesses decide where to compete, then runs the strategy, search, ads, website and content
              needed to turn that decision into a steady flow of qualified enquiries.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/contact" className="btn-accent">Book a free consultation</a>
              <a href="/services" className="btn-ghost">See our services</a>
            </div>
          </div>
          <aside className="self-end rounded-2xl border border-line bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold">What you get in the first 30 days</p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
              {[
                "An honest audit of your current marketing and tracking",
                "A clear view of which channels can pay back in your market",
                "A 90-day plan with budget, priorities and KPIs",
                "Quick fixes shipped, not just recommended",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">Sound familiar?</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Most businesses do not have a marketing problem. They have a focus problem.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Four services, one plan</h2>
            </div>
            <a href="/services" className="text-sm font-semibold underline underline-offset-4">All service details</a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`/services#${s.id}`}
                className="group rounded-xl border border-line bg-paper p-7 transition hover:border-ink/40"
              >
                <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.short}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-accent group-hover:underline">Learn more</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">How we work</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          A consultancy process, not a menu of tasks
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="border-t-2 border-ink pt-5">
              <span className="font-display text-sm text-accent">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <a href="/results" className="mt-10 inline-block text-sm font-semibold underline underline-offset-4">
          How we measure results
        </a>
      </section>

      <CtaBand />
    </>
  );
}
