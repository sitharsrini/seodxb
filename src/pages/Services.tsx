import { useState } from "react";
import { CtaBand, PageHero } from "../components/Layout";
import { SERVICES } from "../services";
import { SERVICE_PAGES, childPages, pillarPages, servicePath, serviceName } from "../service-pages";
import { delay } from "../motion";
import { Faq } from "../components/Faq";
import { CORE_FAQS } from "../core-faqs";
import { PAGES_UPDATED } from "../site";
import { ArrowUpRight } from "../components/fx";

function Bullet({ strong = false }: { strong?: boolean }) {
  return (
    <span
      className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${strong ? "bg-brand text-white" : "bg-mint text-mint-dark"}`}
      aria-hidden="true"
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 12l5 5 9-10" />
      </svg>
    </span>
  );
}

const pillarName = (id: string) => SERVICES.find((s) => s.id === id)?.name ?? id;

function ServiceDirectory() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const ordered = pillarPages().flatMap((p) => [p, ...childPages(p.id)]);
  const needle = query.trim().toLowerCase();
  const matches = (sp: (typeof ordered)[number]) =>
    (cat === "all" || (sp.parent ?? sp.id) === cat) && (!needle || `${serviceName(sp)} ${sp.description}`.toLowerCase().includes(needle));
  const shown = ordered.filter(matches).length;

  return (
    <section id="all-services" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 py-16 sm:px-8 md:py-24">
      <div className="text-center">
        <p className="eyebrow" data-reveal>All services</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(32px,4.4vw,56px)] leading-[1.05]" data-reveal style={delay(1)}>
          Find the service you need
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          Pick a service to see what is included, how we work and what to expect in the first 90 days.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-xl" data-reveal style={delay(3)}>
        <label htmlFor="svc-search" className="sr-only">Search services</label>
        <input id="svc-search" type="search" className="field" placeholder="Search services, for example Google Ads or Local SEO" value={query} onChange={(e) => setQuery(e.target.value)} autoComplete="off" />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by service area" data-reveal style={delay(4)}>
        <button type="button" className="tab-pill" aria-pressed={cat === "all"} onClick={() => setCat("all")}>All</button>
        {pillarPages().map((p) => (
          <button key={p.id} type="button" className="tab-pill" aria-pressed={cat === p.id} onClick={() => setCat(p.id)}>
            {serviceName(p)}
          </button>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-ink-soft" aria-live="polite">
        {shown} {shown === 1 ? "service" : "services"} {cat === "all" && !needle ? "available" : "shown"}
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((sp) => (
          <a key={sp.slug} href={servicePath(sp)} className="svc-mini group" hidden={!matches(sp)}>
            <span className="eyebrow-soft self-start">{pillarName(sp.parent ?? sp.id)}</span>
            <h3 className="mt-4 text-xl font-medium tracking-tight">{serviceName(sp)}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{sp.description}</p>
            <span className="circle-btn mt-auto" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </a>
        ))}
      </div>
      {shown === 0 && (
        <p className="mt-10 text-center text-ink-soft">
          Nothing matches that search. <a href="/contact" className="font-medium text-brand underline underline-offset-4">Tell us what you need</a> and we will point you to the right place.
        </p>
      )}
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageHero lead="Digital marketing services in Dubai" title={<>Strategy first, then the channels that <span className="text-gradient">earn their budget</span></>}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          You can hire us for just one service. But most clients get better results when one team handles both the plan
          and the work. Every project starts with the same question: what will bring qualified leads at a cost that makes
          sense for your business?
        </p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal style={delay(3)}>
          <a href="#all-services" className="btn-primary">Browse all {SERVICE_PAGES.length} services</a>
          <a href="/contact" className="btn-ghost">Book a free review</a>
        </div>
      </PageHero>

      <ServiceDirectory />

      {SERVICES.map((s, i) => {
        const page = SERVICE_PAGES.find((sp) => sp.id === s.id && !sp.parent);
        const specialist = childPages(s.id);
        return (
          <section key={s.id} id={s.id} className={`scroll-mt-20 ${i % 2 ? "bg-sand" : "bg-white"}`}>
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.1fr]">
              <div data-reveal="left">
                <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
                <h2 className="mt-2 font-display text-3xl font-semibold">{s.name}</h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{s.intro}</p>
                <p className="mt-6 rounded-xl border-l-4 border-mint-strong bg-white/70 px-4 py-3 text-sm">
                  <span className="font-semibold">Best for: </span>
                  <span className="text-ink-soft">{s.bestFor}</span>
                </p>
                {page && (
                  <a href={servicePath(page)} className="btn-primary mt-6 text-sm">
                    {s.name}: full details
                  </a>
                )}
                {specialist.length > 0 && (
                  <div className="mt-7">
                    <p className="text-sm font-semibold">Specialist services</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {specialist.map((c) => (
                        <li key={c.slug}>
                          <a href={servicePath(c)} className="inline-block rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink transition hover:border-brand hover:text-brand">
                            {serviceName(c)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                <div className="spotlight rounded-2xl border border-line bg-white p-6" data-reveal style={delay(1, 120)}>
                  <h3 className="text-sm font-semibold">What is included</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                    {s.includes.map((x) => (
                      <li key={x} className="flex gap-3">
                        <Bullet strong />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="spotlight rounded-2xl border border-line bg-white p-6" data-reveal style={delay(2, 120)}>
                  <h3 className="text-sm font-semibold">How we measure it</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                    {s.measure.map((x) => (
                      <li key={x} className="flex gap-3">
                        <Bullet />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Faq faqs={CORE_FAQS["/services"]} reviewed={PAGES_UPDATED} />

      <CtaBand />
    </>
  );
}
