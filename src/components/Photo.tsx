import { hostedSources, photographerUrl, photoSrcSet, photoUrl, UNSPLASH_URL, type Photo } from "../images";

// A stock photo with the photographer credit Unsplash asks for.
export function PhotoFigure({
  photo,
  ratio = 16 / 9,
  sizes = "(min-width: 1024px) 1024px, 100vw",
  priority = false,
  className = "",
  caption,
}: {
  photo: Photo;
  ratio?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  caption?: string;
}) {
  const w = 1200;
  const hosted = hostedSources(photo);
  const img = {
    alt: photo.alt,
    width: hosted ? hosted.width : w,
    height: hosted ? hosted.height : Math.round(w / ratio),
    loading: priority ? ("eager" as const) : ("lazy" as const),
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    decoding: "async" as const,
    className: "h-auto w-full object-cover",
  };
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-3xl bg-sand shadow-xl shadow-brand/10">
        {hosted ? (
          <picture>
            <source type="image/avif" srcSet={hosted.avif} sizes={sizes} />
            <source type="image/webp" srcSet={hosted.webp} sizes={sizes} />
            <img src={hosted.src} srcSet={hosted.webp} sizes={sizes} {...img} />
          </picture>
        ) : (
          <img
            src={photoUrl(photo, w, Math.round(w / ratio))}
            srcSet={photoSrcSet(photo, [480, 800, 1200, 1600], ratio)}
            sizes={sizes}
            {...img}
          />
        )}
      </div>
      <figcaption className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-xs text-ink-soft">
        {caption ? <span className="text-sm text-ink">{caption}</span> : <span />}
        <span>
        Photo by{" "}
        <a href={photographerUrl(photo)} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-brand">
          {photo.by}
        </a>{" "}
        on{" "}
        <a href={UNSPLASH_URL} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-brand">
          Unsplash
        </a>
        </span>
      </figcaption>
    </figure>
  );
}
