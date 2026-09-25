import { PageHero } from "../components/Layout";
import { Faq } from "../components/Faq";
import { ContactForm } from "./Contact";
import { SERVICE_PAGES, servicePath, type ServicePage } from "../service-pages";
import { INDUSTRIES, industryPath } from "../industries";
import { POSTS } from "../blog/posts";
import { PostCard } from "../blog/PostCard";
import { delay } from "../motion";
import { SERVICES } from "../services";

const check = (
  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand text-white" aria-hidden="true">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg>
  </span>
);

export default function ServiceDetail({ page }: { page: ServicePage }) {
  const posts = page.posts.map((s) => POSTS.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const industries = page.industries.map((s) => INDUSTRIES.find((i) => i.slug === s)).filter((i): i is NonNullable<typeof i> => Boolean(i));
  const others = SERVICE_PAGES.filter((s) => s.slug !== page.slug);

  return (
    <>
      <PageHero eyebrow="Services · Dubai & UAE" title={page.heroTitle}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>{page.heroIntro}</p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal style={delay(3)}>
          <a href="#enquire" className="btn-primary px-6 py-3">Get a free review</a>
          <a href="/services" className="btn-ghost">All services</a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div id="short-answer" className="rounded-2xl border-l-4 border-mint-strong bg-white p-6 shadow-lg shadow-brand/5 sm:p-8" data-reveal data-reveal-now>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-mint-dark">In short</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">{page.answer}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl" data-reveal>Is this for you?</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {page.signs.map((s, i) => (
            <li key={s} className="flex gap-3 rounded-2xl border border-line bg-white p-5 text-ink" data-reveal style={delay(i, 80)}>
              {check}
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow" data-reveal>What is included</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>What you get</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.deliverables.map((d, i) => (
              <div key={d.title} className="spotlight rounded-2xl border border-line bg-white p-6" data-reveal style={delay(i, 90)}>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow" data-reveal>How we work</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>Our process</h2>
        <ol className={`mt-12 grid gap-8 ${page.process.length > 4 ? "md:grid-cols-5" : "md:grid-cols-4"}`}>
          {page.process.map((s, i) => (
            <li key={s.title} className="step-line border-t-2 border-line pt-5" data-reveal style={delay(i + 1, 130)}>
              <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 rounded-2xl border border-line bg-white p-6 sm:p-8" data-reveal>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Your first 90 days</h3>
          <dl className="mt-5 grid gap-6 md:grid-cols-3">
            {page.first90.map((f) => (
              <div key={f.period}>
                <dt className="font-semibold text-ink">{f.period}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {industries.length > 0 && (
        <section className="bg-sand">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl" data-reveal>Industries we often do this for</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <a href={industryPath(ind)} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">
                    {ind.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/industries" className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-brand underline underline-offset-4">All industries</a>
              </li>
            </ul>
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow" data-reveal>Free guides</p>
          <h2 className="mt-3 font-display text-3xl font-semibold" data-reveal style={delay(1)}>Learn more</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <Faq faqs={page.faqs} />

      <section id="enquire" className="relative scroll-mt-20 overflow-hidden bg-navy">
        <div className="blob -left-24 top-0 h-80 w-80 bg-brand/40" aria-hidden="true" />
        <div className="blob -right-20 bottom-0 h-72 w-72 bg-mint-strong/20" style={{ animationDelay: "-7s" }} aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
          <div className="text-white" data-reveal="left">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mint">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
              Free review
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Get a free review</h2>
            <p className="mt-4 text-white/80">
              Tell us about your business and goals. We will look at where you stand today and reply within one working day
              with what we would do first.
            </p>
          </div>
          <ContactForm source={`service-${page.slug}`} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold" data-reveal>Other services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o, i) => (
            <a key={o.slug} href={servicePath(o)} className="spotlight group rounded-2xl border border-line bg-white p-5" data-reveal style={delay(i, 80)}>
              <span className="font-semibold group-hover:text-brand">{SERVICES.find((s) => s.id === o.id)?.name}</span>
              <span className="mt-1 block text-sm text-ink-soft">{o.heroTitle}</span>
              <span className="mt-2 block text-sm text-brand" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
