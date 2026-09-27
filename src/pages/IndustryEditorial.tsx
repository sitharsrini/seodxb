import { type Industry } from "../industries";
import { SERVICES } from "../services";
import { POSTS } from "../blog/posts";
import { PostCard } from "../blog/PostCard";
import { delay } from "../motion";
import { Enquire, FaqList, OtherIndustries, TrustBand } from "./IndustryParts";

const serviceName = (id: string) => SERVICES.find((s) => s.id === id)?.name ?? id;

// Alternative landing page layout: split hero with a search panel, numbered
// editorial rows, a step timeline and a two-column FAQ.
export default function IndustryEditorial({ industry }: { industry: Industry }) {
  const guides = [industry.postSlug, ...(industry.extraPostSlugs ?? [])]
    .map((slug) => POSTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-white">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="blob -right-24 -top-24 h-80 w-80 bg-mint/70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.15fr_1fr]" data-reveal-now>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand" data-reveal>
              <span className="h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
              {industry.name} marketing · UAE
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl" data-reveal style={delay(1)}>
              {industry.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
              {industry.heroIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-reveal style={delay(3)}>
              <a href="#enquire" className="btn-primary px-6 py-3">Get a free marketing review</a>
              <a href="#guides" className="btn-ghost">Read the guides</a>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-5 shadow-2xl shadow-brand/10" data-reveal="scale" style={delay(2)}>
            <div className="flex items-center gap-3 rounded-full border border-line bg-sand px-4 py-3 text-sm text-ink-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand" aria-hidden="true">
                <path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm5-2 4 4" />
              </svg>
              What your clients search
            </div>
            <ul className="mt-3 divide-y divide-line">
              {industry.searches.map((s, i) => (
                <li key={s} className="flex items-center justify-between gap-3 px-2 py-3 text-sm text-ink" data-reveal style={delay(i + 3, 70)}>
                  <span>{s}</span>
                  <span className="rounded-full bg-mint px-2 py-0.5 text-[11px] font-semibold text-mint-dark">target</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div id="short-answer" className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6" data-reveal>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            Why SEO matters for {industry.name.toLowerCase()}
          </h2>
          <p className="mt-5 font-display text-xl leading-relaxed text-white sm:text-2xl">{industry.answer}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="eyebrow" data-reveal>The challenges</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>What makes this market hard</h2>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {industry.challenges.map((c, i) => (
            <li key={c.title} className="grid gap-4 py-8 sm:grid-cols-[6rem_1fr]" data-reveal style={delay(i + 1, 100)}>
              <span className="font-display text-5xl font-semibold text-brand/25">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <p className="eyebrow" data-reveal>How SEODXB helps</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>
            A four-part plan for {industry.name.toLowerCase()}
          </h2>
          <ol className="relative mt-12 space-y-8 border-l-2 border-brand/20 pl-8">
            {industry.plan.map((p, i) => (
              <li key={p.service} className="relative" data-reveal style={delay(i + 1, 110)}>
                <span className="absolute -left-[2.85rem] grid h-9 w-9 place-items-center rounded-full bg-brand font-display text-sm font-semibold text-white shadow-lg shadow-brand/30">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-line bg-white p-6">
                  <h3 className="font-display text-xl font-semibold">
                    <a href={`/services#${p.service}`} className="hover:text-brand">{serviceName(p.service)}</a>
                  </h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-ink-soft md:grid-cols-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="rounded-xl bg-sand/60 p-4">{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industry.measure.map((m, i) => (
              <div key={m} className="rounded-2xl border border-mint-strong/30 bg-white p-5" data-reveal="scale" style={delay(i, 80)}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-dark">We measure</p>
                <p className="mt-2 font-semibold text-ink">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <p className="eyebrow" data-reveal>Free guides</p>
        <h2 className="mt-3 font-display text-3xl font-semibold" data-reveal style={delay(1)}>Read the full guides</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <PostCard key={g.slug} post={g} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
          <div data-reveal="left">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Frequently asked questions</h2>
            <p className="mt-4 text-ink-soft">
              Straight answers to the questions {industry.name.toLowerCase()} ask us most. Still unsure?{" "}
              <a href="#enquire" className="font-medium text-brand hover:underline">Ask us directly</a>.
            </p>
          </div>
          <FaqList faqs={industry.faqs} />
        </div>
      </section>

      <TrustBand industry={industry} />
      <Enquire industry={industry} />
      <OtherIndustries industry={industry} />
    </>
  );
}
