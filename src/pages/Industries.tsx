import { CtaBand, PageHero } from "../components/Layout";
import { INDUSTRIES, industryPath } from "../industries";
import { delay } from "../motion";
import { POSTS } from "../blog/posts";

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
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow" data-reveal>Free guides</p>
          <h2 className="mt-3 font-display text-3xl font-semibold" data-reveal style={delay(1)}>Marketing guides by industry</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {INDUSTRIES.flatMap((ind) => [ind.postSlug, ...(ind.extraPostSlugs ?? [])].map((slug) => ({ ind, post: POSTS.find((p) => p.slug === slug) })))
              .filter((x): x is { ind: (typeof INDUSTRIES)[number]; post: NonNullable<typeof x.post> } => Boolean(x.post))
              .map(({ ind, post }) => (
                <li key={post.slug} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-mint-strong" aria-hidden="true" />
                  <span>
                    <a href={`/blog/${post.slug}`} className="font-medium text-ink hover:text-brand">{post.title}</a>
                    <span className="block text-xs text-ink-soft">{ind.name}</span>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
