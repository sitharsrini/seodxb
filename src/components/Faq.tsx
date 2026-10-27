import { delay } from "../motion";
import { ReviewedLine } from "./Trust";

export function Faq({ faqs, title = "Frequently asked questions", reviewed }: { faqs: { q: string; a: string }[]; title?: string; reviewed?: string }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6" aria-labelledby="faq-title">
      <h2 id="faq-title" className="font-display text-3xl font-semibold" data-reveal>
        {title}
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            className="group rounded-xl border border-line bg-white p-5 open:shadow-lg open:shadow-brand/5"
            data-reveal
            style={delay(i, 60)}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
              <h3>{f.q}</h3>
              <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-sand text-brand transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-3 text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
      {reviewed && <ReviewedLine reviewed={reviewed} className="mt-8" />}
    </section>
  );
}
