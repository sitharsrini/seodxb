import { formatDate, postPath, readingMinutes, type Post } from "./posts";
import { delay } from "../motion";

const TINTS: Record<string, string> = {
  Strategy: "from-brand to-brand-dark",
  "SEO & AI Search": "from-brand-dark to-emerald-600",
  "Performance Ads": "from-sky-500 to-brand",
  "Local SEO": "from-emerald-600 to-brand",
  "Websites & Content": "from-brand to-sky-400",
  "Industry Guides": "from-navy to-brand",
};

export function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <a
      href={postPath(post)}
      className="spotlight group flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
      data-reveal
      style={delay(index + 1, 110)}
    >
      <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${TINTS[post.category] ?? "from-brand to-brand-dark"}`} aria-hidden="true">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(rgb(255 255 255 / 0.7) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
        />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-mint/40 blur-2xl transition-transform duration-700 group-hover:scale-125" />
        <span className="absolute bottom-4 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-dark backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-brand">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{post.description}</p>
        <p className="mt-5 flex items-center justify-between text-xs text-ink-soft">
          <span>
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingMinutes(post)} min read
          </span>
          <span className="font-semibold text-brand transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </p>
      </div>
    </a>
  );
}
