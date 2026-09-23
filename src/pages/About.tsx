import { CtaBand } from "../components/Layout";
import { LISTI_URL } from "../site";

const PRINCIPLES = [
  { title: "Advice before invoices", body: "If a channel will not work for your business, we say so, even when it means a smaller engagement." },
  { title: "One plan, one team", body: "Strategy, search, ads, website and content are planned together so no channel works against another." },
  { title: "Numbers you can check", body: "You own your ad accounts, analytics and website. Everything we report on, you can verify yourself." },
  { title: "Local knowledge", body: "We work in the UAE market every day: its search behaviour, its platforms and how buyers here decide." },
];

export default function About() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A Dubai marketing consultancy built for businesses that want accountable growth
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            SEODXB started as a search agency. Working with businesses across the UAE, we kept seeing the same pattern:
            good search work held back by unclear positioning, untracked ad spend and websites that did not convert.
          </p>
          <p>
            So we became a marketing consultancy. We still do the hands-on work in search, ads, websites and content, but
            every engagement now starts with strategy: who you sell to, what makes you the better choice and which channels
            deserve your budget.
          </p>
          <p>
            Our clients are mostly established small and mid-sized businesses in professional services, real estate,
            healthcare, hospitality and ecommerce who want a senior partner rather than another supplier.
          </p>
        </div>
        <aside className="rounded-2xl bg-ink p-8 text-white">
          <p className="eyebrow">Powered by Listi</p>
          <p className="mt-4 font-display text-2xl font-semibold leading-snug">SEODXB is powered by Listi</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Listi is a UAE business platform that helps companies get listed, found and contacted. SEODXB brings the
            consultancy and hands-on marketing that help those businesses grow further.
          </p>
          <a href={LISTI_URL} target="_blank" rel="noopener" className="btn-ghost-light mt-6 text-sm">
            Visit Listi
          </a>
        </aside>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">How we work with clients</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-paper p-7">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
