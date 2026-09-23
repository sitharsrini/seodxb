import { CtaBand, PageHero } from "../components/Layout";
import { SERVICES } from "../services";
import { delay } from "../motion";

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

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Strategy first, then the channels that <span className="text-gradient">earn their budget</span></>}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          You can hire us for a single service, but most clients get the best results when one team owns the plan and the
          execution. Every engagement starts with the same question: what will bring qualified enquiries at a cost that
          makes sense?
        </p>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Services on this page" data-reveal style={delay(3)}>
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-line bg-white/80 px-4 py-2 text-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              {s.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {SERVICES.map((s, i) => (
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
      ))}

      <CtaBand />
    </>
  );
}
