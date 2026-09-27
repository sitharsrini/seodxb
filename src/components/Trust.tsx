import { AUTHOR } from "../site";
import { formatDate } from "../blog/posts";
import type { Source } from "../sources";

export function Sources({ sources, className = "" }: { sources: Source[]; className?: string }) {
  return (
    <section className={className} aria-labelledby="sources">
      <h2 id="sources" className="scroll-mt-24 font-display text-2xl font-semibold text-ink">Sources and further reading</h2>
      <p className="mt-2 text-sm text-ink-soft">
        Official guidance behind the advice on this page. Rules and requirements change, so always check the latest version with the relevant authority.
      </p>
      <ol className="mt-4 space-y-2 text-sm">
        {sources.map((s, i) => (
          <li key={s.url} className="flex gap-3">
            <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-sand text-xs font-semibold text-brand">{i + 1}</span>
            <a href={s.url} target="_blank" rel="noopener" className="text-ink underline decoration-line underline-offset-4 hover:text-brand hover:decoration-brand">
              {s.name}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AuthorBox({ reviewed, className = "" }: { reviewed: string; className?: string }) {
  return (
    <aside className={`rounded-2xl border border-line bg-white p-6 ${className}`} aria-label="About the author">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-gradient-to-br from-brand to-brand-dark font-display text-lg font-semibold text-white" aria-hidden="true">
          {AUTHOR.name[0]}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Written and reviewed by</p>
          <a href="/about#author" rel="author" className="mt-1 block font-semibold text-ink hover:text-brand">{AUTHOR.name}</a>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Marketing consultant working on SEO, AI search, advertising and lead tracking for UAE businesses, and author of the Listonics guides.
            Last reviewed <time dateTime={reviewed}>{formatDate(reviewed)}</time>. Regulatory points are stated generally and should be confirmed with the relevant authority.
          </p>
        </div>
      </div>
    </aside>
  );
}
