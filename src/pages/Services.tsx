import { CtaBand } from "../components/Layout";
import { SERVICES } from "../services";

export default function Services() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Strategy first, then the channels that earn their budget
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            You can hire us for a single service, but most clients get the best results when one team owns the plan and the
            execution. Every engagement starts with the same question: what will bring qualified enquiries at a cost that
            makes sense?
          </p>
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Services on this page">
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm hover:border-ink/40">
                {s.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-20 ${i % 2 ? "bg-sand" : ""}`}>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold">{s.name}</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{s.intro}</p>
              <p className="mt-6 text-sm">
                <span className="font-semibold">Best for: </span>
                <span className="text-ink-soft">{s.bestFor}</span>
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div className="rounded-xl border border-line bg-white p-6">
                <h3 className="text-sm font-semibold">What is included</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                  {s.includes.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-line bg-white p-6">
                <h3 className="text-sm font-semibold">How we measure it</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                  {s.measure.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink" aria-hidden="true" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
