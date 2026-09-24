import { useEffect, useState } from "react";
import { CtaBand } from "../components/Layout";
import { POSTS, formatDate, readingMinutes, type Block, type Post } from "../blog/posts";
import { Inline } from "../blog/Inline";
import { PostCard } from "../blog/PostCard";
import { delay } from "../motion";
import { AUTHOR } from "../site";

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("article");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setP(Math.min(1, Math.max(0, total > 0 ? -r.top / total : 1)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent" aria-hidden="true">
      <div className="h-full origin-left bg-gradient-to-r from-brand to-mint-strong" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}

function renderBlock(b: Block, i: number) {
  switch (b.t) {
    case "h2":
      return (
        <h2 key={i} id={b.id} className="mt-12 scroll-mt-24 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {b.text}
        </h2>
      );
    case "h3":
      return <h3 key={i} className="mt-8 text-lg font-semibold text-ink">{b.text}</h3>;
    case "p":
      return <p key={i} className="mt-4"><Inline text={b.text} /></p>;
    case "ul":
      return (
        <ul key={i} className="mt-4 space-y-2.5">
          {b.items.map((it) => (
            <li key={it} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-mint-strong" aria-hidden="true" />
              <span><Inline text={it} /></span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-4 space-y-3">
          {b.items.map((it, n) => (
            <li key={it} className="flex gap-3">
              <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-brand text-xs font-semibold text-white">{n + 1}</span>
              <span><Inline text={it} /></span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside key={i} className="mt-8 rounded-2xl border border-mint-strong/40 bg-mint/30 p-6">
          <p className="font-semibold text-mint-dark">{b.title}</p>
          <p className="mt-2 text-ink"><Inline text={b.text} /></p>
        </aside>
      );
  }
}

export default function BlogPost({ post }: { post: Post }) {
  const toc = post.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2");
  const others = POSTS.filter((p) => p.slug !== post.slug);
  const linked = new Set(
    post.body.flatMap((b) => ("text" in b ? b.text : b.t === "ul" || b.t === "ol" ? b.items.join(" ") : "").match(/\/blog\/[a-z0-9-]+/g) ?? []),
  );
  const words = (p: typeof post) => new Set(`${p.title} ${p.keywords.join(" ")}`.toLowerCase().match(/[a-z]{4,}/g) ?? []);
  const mine = words(post);
  const overlap = (p: typeof post) => [...words(p)].filter((w) => mine.has(w)).length + (p.category === post.category ? 1 : 0);
  const related = [
    ...others.filter((p) => linked.has(`/blog/${p.slug}`)),
    ...others.filter((p) => !linked.has(`/blog/${p.slug}`)).sort((a, b) => overlap(b) - overlap(a)),
  ].slice(0, 2);

  return (
    <>
      <ReadingProgress />
      <article id="article">
        <header className="relative overflow-hidden border-b border-line">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="blob -left-24 -top-24 h-72 w-72 bg-brand/15" aria-hidden="true" />
          <div className="blob -right-16 top-10 h-64 w-64 bg-mint/70" style={{ animationDelay: "-6s" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
            <nav className="text-sm text-ink-soft" aria-label="Breadcrumb" data-reveal>
              <a href="/blog" className="hover:text-brand">Blog</a>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-brand">{post.category}</span>
            </nav>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl" data-reveal style={delay(1)}>
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>{post.description}</p>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft" data-reveal style={delay(3)}>
              <span className="inline-flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-xs font-bold text-white" aria-hidden="true">
                  {AUTHOR.name[0]}
                </span>
                <a href="/about" rel="author" className="font-medium text-ink hover:text-brand">{AUTHOR.name}</a>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                Published <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.updated !== post.date && (
                  <>
                    {", updated "}
                    <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </>
                )}
              </span>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post)} min read</span>
            </p>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_16rem]">
          <div className="mx-auto w-full min-w-0 max-w-3xl text-[17px] leading-[1.8] text-ink-soft [overflow-wrap:anywhere]">
            <section id="short-answer" className="rounded-2xl border-l-4 border-mint-strong bg-white p-6 shadow-lg shadow-brand/5" aria-labelledby="short-answer-h" data-reveal>
              <h2 id="short-answer-h" className="text-sm font-semibold uppercase tracking-[0.14em] text-mint-dark">Short answer</h2>
              <p className="mt-3 text-base leading-relaxed text-ink">{post.answer}</p>
            </section>

            <section className="mt-6 rounded-2xl border border-line bg-sand p-6" aria-labelledby="takeaways" data-reveal style={delay(1)}>
              <h2 id="takeaways" className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Key takeaways</h2>
              <ul className="mt-4 space-y-2.5 text-base">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-mint text-mint-dark" aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg>
                    </span>
                    <span className="text-ink">{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {post.body.map(renderBlock)}

            <section className="mt-14" aria-labelledby="faq">
              <h2 id="faq" className="scroll-mt-24 font-display text-2xl font-semibold text-ink sm:text-3xl">Frequently asked questions</h2>
              <div className="mt-6 space-y-3">
                {post.faqs.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-line bg-white p-5 open:shadow-lg open:shadow-brand/5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                      {f.q}
                      <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-sand text-brand transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 text-base">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="hidden lg:block">
            <nav className="sticky top-24 rounded-2xl border border-line bg-white p-5" aria-label="On this page">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">On this page</p>
              <ul className="mt-3 space-y-2 text-sm">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="block text-ink-soft transition hover:translate-x-1 hover:text-brand">{h.text}</a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="block text-ink-soft transition hover:translate-x-1 hover:text-brand">FAQ</a>
                </li>
              </ul>
              <a href="/contact" className="btn-primary mt-6 w-full justify-center text-sm">Book a consultation</a>
            </nav>
          </aside>
        </div>
      </article>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl" data-reveal>Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
