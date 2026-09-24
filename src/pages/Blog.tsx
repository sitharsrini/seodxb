import { CtaBand, PageHero } from "../components/Layout";
import { POSTS } from "../blog/posts";
import { PostCard } from "../blog/PostCard";
import { delay } from "../motion";

export default function Blog() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero eyebrow="Blog" title={<>Practical marketing insight for <span className="text-gradient">UAE businesses</span></>}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          Guides on strategy, search, AI visibility, ads and measurement. Written for business owners and marketing leads
          who want to make better decisions, not just read about trends.
        </p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
