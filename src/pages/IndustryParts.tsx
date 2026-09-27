import { ContactForm } from "./Contact";
import { INDUSTRIES, industryPath, type Industry } from "../industries";
import { industrySources } from "../citations";
import { INDUSTRY_REVIEWED } from "../sources";
import { AuthorBox, Sources } from "../components/Trust";

export function FaqList({ faqs }: { faqs: Industry["faqs"] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-xl border border-line bg-white p-5 open:shadow-lg open:shadow-brand/5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
            {f.q}
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-sand text-brand transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

// Author, review date and official sources: the page's E-E-A-T signals.
export function TrustBand({ industry }: { industry: Industry }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <div data-reveal="left">
          <AuthorBox reviewed={INDUSTRY_REVIEWED} />
        </div>
        <div data-reveal>
          <Sources sources={industrySources(industry.slug)} />
        </div>
      </div>
    </section>
  );
}

export function Enquire({ industry }: { industry: Industry }) {
  return (
    <section id="enquire" className="relative scroll-mt-20 overflow-hidden bg-navy">
      <div className="blob -left-24 top-0 h-80 w-80 bg-brand/40" aria-hidden="true" />
      <div className="blob -right-20 bottom-0 h-72 w-72 bg-mint-strong/20" style={{ animationDelay: "-7s" }} aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
        <div className="text-white" data-reveal="left">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
            Free review
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Get a free marketing review</h2>
          <p className="mt-4 text-white/80">
            Tell us about your business. We will look at your website, search visibility and current marketing, and reply
            within one working day with what we would do first.
          </p>
        </div>
        <ContactForm source={`industry-${industry.slug}`} />
      </div>
    </section>
  );
}

export function OtherIndustries({ industry }: { industry: Industry }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold" data-reveal>Other industries we work with</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {INDUSTRIES.filter((o) => o.slug !== industry.slug).map((o) => (
          <li key={o.slug}>
            <a href={industryPath(o)} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">
              {o.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
