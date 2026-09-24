import { CtaBand } from "../components/Layout";
import { SERVICES } from "../services";
import { CountUp, RotatingWord, delay } from "../motion";
import { POSTS } from "../blog/posts";
import { PostCard } from "../blog/PostCard";

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

const CHANNELS = ["Google Search", "Google Maps", "ChatGPT", "Gemini", "Perplexity", "Meta Ads", "Instagram", "LinkedIn", "TikTok", "YouTube", "Email", "Your website"];

const STATS = [
  { to: 30, suffix: " min", label: "Free first consultation" },
  { to: 90, suffix: "-day", label: "Plan with budget and KPIs" },
  { to: 1, suffix: " day", label: "Reply time on working days" },
  { to: 4, suffix: "", label: "Services under one plan" },
];

const ICONS: Record<string, string> = {
  strategy: "M4 19V5m0 14h16M8 15l3-4 3 2 5-6",
  search: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm5-2 4 4",
  ads: "M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1Zm13-2a5 5 0 0 1 0 8",
  "web-content-social": "M4 5h16v11H4zM8 20h8M12 16v4",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="blob -left-32 -top-32 h-[28rem] w-[28rem] bg-brand/20" aria-hidden="true" />
        <div className="blob right-0 top-24 h-80 w-80 bg-mint/80" style={{ animationDelay: "-5s" }} aria-hidden="true" />
        <div className="blob bottom-0 left-1/3 h-64 w-64 bg-sky-200/60" style={{ animationDelay: "-11s" }} aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-28">
          <div>
            <p className="eyebrow" data-reveal>Marketing consultancy · Dubai</p>
            <h1
              className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl"
              data-reveal
              style={delay(1)}
            >
              Marketing planned around <span className="text-gradient">revenue</span>, not activity.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
              SEODXB helps UAE businesses decide where to compete, then runs the strategy, search, ads, website and content
              needed to turn that decision into a steady flow of qualified enquiries.
            </p>
            <p className="mt-5 text-base text-ink" data-reveal style={delay(3)}>
              One team for your <RotatingWord words={["strategy", "SEO & AI search", "Google Ads", "website", "content", "social media"]} />
            </p>
            <div className="mt-9 flex flex-wrap gap-3" data-reveal style={delay(4)}>
              <a href="/contact" className="btn-primary px-6 py-3">Book a free consultation</a>
              <a href="/services" className="btn-ghost">See our services</a>
            </div>
          </div>

          <aside className="float self-end" data-reveal="scale" style={delay(3)}>
            <div className="rounded-2xl border border-white/60 bg-white/85 p-7 shadow-2xl shadow-brand/15 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Your first 30 days</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/70 px-2.5 py-1 text-[11px] font-semibold text-mint-dark">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
                  Included
                </span>
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
                {[
                  "An honest audit of your current marketing and tracking",
                  "A clear view of which channels can pay back in your market",
                  "A 90-day plan with budget, priorities and KPIs",
                  "Quick fixes shipped, not just recommended",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3" data-reveal="left" style={delay(i + 5, 120)}>
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand text-white" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5 9-10" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="marquee relative overflow-hidden border-t border-line bg-white/60 py-4 backdrop-blur">
          <div className="marquee-track flex w-max gap-10">
            {[...CHANNELS, ...CHANNELS].map((c, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap text-sm font-medium text-ink-soft" aria-hidden={i >= CHANNELS.length}>
                {c}
                <span className="h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow" data-reveal>Sound familiar?</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>
          Most businesses do not have a marketing problem. They have a <span className="text-gradient">focus</span> problem.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className="spotlight rounded-2xl border border-line bg-white p-6" data-reveal style={delay(i + 1, 120)}>
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-sand font-display text-sm font-semibold text-brand">{i + 1}</span>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand">
        <div className="blob -right-24 top-10 h-72 w-72 bg-mint/60" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow" data-reveal>What we do</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>
                Four services, one plan
              </h2>
            </div>
            <a href="/services" className="text-sm font-semibold text-brand underline underline-offset-4" data-reveal style={delay(2)}>
              All service details
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <a
                key={s.id}
                href={`/services#${s.id}`}
                className="spotlight group rounded-2xl border border-line bg-white p-7"
                data-reveal
                style={delay(i + 1, 110)}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/25 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={ICONS[s.id]} />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className="flex flex-col text-center" data-reveal style={delay(i, 100)}>
              <dt className="order-2 mt-2 text-sm text-ink-soft">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow" data-reveal>How we work</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>
          A consultancy process, not a menu of tasks
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.n} className="step-line border-t-2 border-line pt-5" data-reveal style={delay(i + 1, 150)}>
              <span className="font-display text-sm font-semibold text-brand">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <a href="/results" className="mt-10 inline-block text-sm font-semibold text-brand underline underline-offset-4" data-reveal>
          How we measure results
        </a>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow" data-reveal>From the blog</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>
                Practical guides, no fluff
              </h2>
            </div>
            <a href="/blog" className="text-sm font-semibold text-brand underline underline-offset-4" data-reveal style={delay(2)}>
              All articles
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
