import { formatDate, postPath, readingMinutes, type Post } from "./posts";
import { delay } from "../motion";
import { hostedSources, POST_PHOTOS, photoSrcSet, photoUrl } from "../images";

const TINTS: Record<string, string> = {
  Strategy: "from-brand to-brand-dark",
  "SEO & AI Search": "from-brand-dark to-brand",
  "Performance Ads": "from-sky-500 to-brand",
  "Local SEO": "from-sky-500 to-brand-dark",
  "Websites & Content": "from-brand to-sky-400",
  "Industry Guides": "from-navy to-brand",
  Partners: "from-navy to-brand-dark",
  "Agency Spotlights": "from-brand-dark to-navy",
  "Worked Examples": "from-brand to-navy",
};

const CARD_SIZES = "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw";

function CardPhoto({ photo }: { photo: NonNullable<(typeof POST_PHOTOS)[string]> }) {
  const hosted = hostedSources(photo);
  const className = "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105";
  if (hosted) {
    return (
      <picture>
        <source type="image/avif" srcSet={hosted.avif} sizes={CARD_SIZES} />
        <source type="image/webp" srcSet={hosted.webp} sizes={CARD_SIZES} />
        <img src={hosted.src} srcSet={hosted.webp} sizes={CARD_SIZES} alt={photo.alt} width={hosted.width} height={hosted.height} loading="lazy" decoding="async" className={className} />
      </picture>
    );
  }
  return (
    <img
      src={photoUrl(photo, 640, 288)}
      srcSet={photoSrcSet(photo, [320, 480, 640, 800], 640 / 288)}
      sizes={CARD_SIZES}
      alt={photo.alt}
      width={640}
      height={288}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

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
        {POST_PHOTOS[post.slug] && <CardPhoto photo={POST_PHOTOS[post.slug]} />}
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
