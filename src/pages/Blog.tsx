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
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3 text-sm leading-relaxed text-ink-soft">
            <div>
              <p className="font-semibold text-ink">SEO and AI search</p>
              <p className="mt-2">How to rank in Google, appear in AI-generated answers, build topical authority and earn citations that bring in leads month after month.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Performance advertising</p>
              <p className="mt-2">Getting the most from Google Ads, Meta and LinkedIn: targeting, creative, bid strategy and tracking set up to show cost per lead, not just clicks.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Industry-specific playbooks</p>
              <p className="mt-2">Deep guides for real estate, schools, clinics, hotels, law firms, business setup consultants and more. Each one covers the buyer journey specific to that sector in the UAE.</p>
            </div>
          </div>
        </div>
      </section>
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
        <h2 className="sr-only">All articles</h2>
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
