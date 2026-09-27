import { photographerUrl, photoSrcSet, photoUrl, UNSPLASH_URL, type Photo } from "../images";

// A stock photo with the photographer credit Unsplash asks for.
export function PhotoFigure({
  photo,
  ratio = 16 / 9,
  sizes = "(min-width: 1024px) 1024px, 100vw",
  priority = false,
  className = "",
}: {
  photo: Photo;
  ratio?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const w = 1200;
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-3xl bg-sand shadow-xl shadow-brand/10">
        <img
          src={photoUrl(photo, w, Math.round(w / ratio))}
          srcSet={photoSrcSet(photo, [480, 800, 1200, 1600], ratio)}
          sizes={sizes}
          width={w}
          height={Math.round(w / ratio)}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="h-auto w-full object-cover"
        />
      </div>
      <figcaption className="mt-2 text-right text-xs text-ink-soft">
        Photo by{" "}
        <a href={photographerUrl(photo)} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-brand">
          {photo.by}
        </a>{" "}
        on{" "}
        <a href={UNSPLASH_URL} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-brand">
          Unsplash
        </a>
      </figcaption>
    </figure>
  );
}
