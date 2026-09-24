import { CtaBand, PageHero } from "../components/Layout";
import { INDUSTRIES, industryPath } from "../industries";
import { delay } from "../motion";

export default function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" title={<>Marketing built around <span className="text-gradient">how your customers buy</span></>}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          A family choosing a school, a developer shortlisting contractors and a tenant booking a move-out clean all search
          differently. We plan SEO, AI search, ads and content around the way buyers in your industry decide.
        </p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <a
              key={ind.slug}
              href={industryPath(ind)}
              className="spotlight group flex flex-col rounded-2xl border border-line bg-white p-6"
              data-reveal
              style={delay(i, 80)}
            >
              <h2 className="font-display text-xl font-semibold transition-colors group-hover:text-brand">{ind.name}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{ind.heroTitle}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                See how we help
                <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
