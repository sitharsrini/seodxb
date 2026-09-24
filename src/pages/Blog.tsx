import { useState } from "react";
import { CtaBand, PageHero } from "../components/Layout";
import { POSTS } from "../blog/posts";
import { PostCard } from "../blog/PostCard";
import { delay } from "../motion";

export default function Blog() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const categories = [...new Set(posts.map((p) => p.category))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHero eyebrow="Blog" title={<>Practical marketing insight for <span className="text-gradient">UAE businesses</span></>}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          Guides on strategy, search, AI visibility, ads and measurement. Written for business owners and marketing leads
          who want to make better decisions, not just read about trends.
        </p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by topic">
          {["All", ...categories].map((c) => {
            const count = c === "All" ? posts.length : posts.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === c ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {c} <span className={active === c ? "text-white/70" : "text-ink-soft"}>({count})</span>
              </button>
            );
          })}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i % 6} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
