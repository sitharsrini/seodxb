import { PageHero } from "../components/Layout";
import { ContactForm } from "./Contact";
import { INDUSTRIES, industryPath, type Industry as IndustryData } from "../industries";
import { SERVICES } from "../services";
import { POSTS } from "../blog/posts";
import { PostCard } from "../blog/PostCard";
import { delay } from "../motion";

const serviceName = (id: string) => SERVICES.find((s) => s.id === id)?.name ?? id;

export default function Industry({ industry }: { industry: IndustryData }) {
  const post = POSTS.find((p) => p.slug === industry.postSlug);
  const guides = [industry.postSlug, ...(industry.extraPostSlugs ?? [])]
    .map((slug) => POSTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug);

  return (
    <>
      <PageHero eyebrow={`${industry.name} marketing · UAE`} title={industry.heroTitle}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          {industry.heroIntro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal style={delay(3)}>
          <a href="#enquire" className="btn-primary px-6 py-3">Get a free marketing review</a>
          {post && <a href={`/blog/${post.slug}`} className="btn-ghost">Read the guide</a>}
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div id="short-answer" className="rounded-2xl border-l-4 border-mint-strong bg-white p-6 shadow-lg shadow-brand/5 sm:p-8" data-reveal>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-mint-dark">
            Why SEO matters for {industry.name.toLowerCase()}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">{industry.answer}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow" data-reveal>What your customers search</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>
          Your next customers are already searching
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {industry.searches.map((s, i) => (
            <li
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm text-ink shadow-sm"
              data-reveal="scale"
              style={delay(i, 70)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand" aria-hidden="true">
                <path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm5-2 4 4" />
              </svg>
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-soft" data-reveal>Examples of the searches and AI questions we target in {industry.name.toLowerCase()}.</p>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" data-reveal>The challenges we solve</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {industry.challenges.map((c, i) => (
              <div key={c.title} className="spotlight rounded-2xl border border-line bg-white p-6" data-reveal style={delay(i + 1, 110)}>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-sand font-display text-sm font-semibold text-brand">{i + 1}</span>
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow" data-reveal>How SEODXB helps</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>
          A plan built for {industry.name.toLowerCase()}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {industry.plan.map((p, i) => (
            <div key={p.service} className="spotlight rounded-2xl border border-line bg-white p-7" data-reveal style={delay(i + 1, 110)}>
              <h3 className="font-display text-xl font-semibold">
                <a href={`/services#${p.service}`} className="hover:text-brand">{serviceName(p.service)}</a>
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand text-white" aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-line bg-white p-6" data-reveal>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">What we measure</h3>
          <ul className="mt-4 grid gap-3 text-sm text-ink sm:grid-cols-2 lg:grid-cols-4">
            {industry.measure.map((m) => (
              <li key={m} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-mint-strong" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {guides.length === 1 && post && (
        <section className="bg-sand">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr]">
            <div data-reveal="left">
              <p className="eyebrow">Free guide</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Read the full guide</h2>
              <p className="mt-4 text-ink-soft">
                A step-by-step guide for {industry.name.toLowerCase()} you can use whether or not you work with us.
              </p>
            </div>
            <PostCard post={post} />
          </div>
        </section>
      )}
      {guides.length > 1 && (
        <section className="bg-sand">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="eyebrow" data-reveal>Free guides</p>
            <h2 className="mt-3 font-display text-3xl font-semibold" data-reveal style={delay(1)}>Read the full guides</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {guides.map((g, i) => (
                <PostCard key={g.slug} post={g} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold" data-reveal>Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {industry.faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-line bg-white p-5 open:shadow-lg open:shadow-brand/5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                {f.q}
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-sand text-brand transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="enquire" className="relative scroll-mt-20 overflow-hidden bg-navy">
        <div className="blob -left-24 top-0 h-80 w-80 bg-brand/40" aria-hidden="true" />
        <div className="blob -right-20 bottom-0 h-72 w-72 bg-mint-strong/20" style={{ animationDelay: "-7s" }} aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
          <div className="text-white" data-reveal="left">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mint">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
              Free review
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Get a free marketing review
            </h2>
            <p className="mt-4 text-white/80">
              Tell us about your business. We will look at your website, search visibility and current marketing, and reply
              within one working day with what we would do first.
            </p>
          </div>
          <ContactForm source={`industry-${industry.slug}`} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold" data-reveal>Other industries we work with</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <a href={industryPath(o)} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">
                {o.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
