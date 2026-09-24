import { CtaBand, PageHero } from "../components/Layout";
import { AUTHOR, LISTI_URL } from "../site";
import { delay } from "../motion";
import { Faq } from "../components/Faq";
import { CORE_FAQS } from "../core-faqs";

const PRINCIPLES = [
  { title: "Advice before invoices", body: "If a channel will not work for your business, we say so, even when it means a smaller engagement." },
  { title: "One plan, one team", body: "Strategy, search, ads, website and content are planned together so no channel works against another." },
  { title: "Numbers you can check", body: "You own your ad accounts, analytics and website. Everything we report on, you can verify yourself." },
  { title: "Local knowledge", body: "We work in the UAE market every day: its search behaviour, its platforms and how buyers here decide." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A Dubai marketing consultancy built for businesses that want <span className="text-gradient">accountable growth</span></>}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p data-reveal>
            SEODXB started as a search agency. Working with businesses across the UAE, we kept seeing the same pattern:
            good search work held back by unclear positioning, untracked ad spend and websites that did not convert.
          </p>
          <p data-reveal style={delay(1)}>
            So we became a marketing consultancy. We still do the hands-on work in search, ads, websites and content, but
            every engagement now starts with strategy: who you sell to, what makes you the better choice and which channels
            deserve your budget.
          </p>
          <p data-reveal style={delay(2)}>
            Our clients are mostly established small and mid-sized businesses in professional services, real estate,
            healthcare, hospitality and ecommerce who want a senior partner rather than another supplier.
          </p>
        </div>
        <aside className="gradient-shift relative overflow-hidden rounded-3xl p-8 text-white shadow-2xl shadow-brand/20" data-reveal="scale" style={delay(1)}>
          <div className="blob -right-16 -top-16 h-48 w-48 bg-mint-strong/30" aria-hidden="true" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mint">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
              Powered by Listi
            </p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug">SEODXB is powered by Listi</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Listi is a UAE business platform that helps companies get listed, found and contacted. SEODXB brings the
              consultancy and hands-on marketing that help those businesses grow further.
            </p>
            <a href={LISTI_URL} target="_blank" rel="noopener" className="btn-ghost-light mt-6 text-sm">
              Visit Listi
            </a>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6" id="author" aria-labelledby="author-title">
        <div className="grid items-center gap-8 rounded-3xl border border-line bg-white p-8 shadow-lg shadow-brand/5 md:grid-cols-[auto_1fr]" data-reveal>
          <span className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark font-display text-3xl font-semibold text-white" aria-hidden="true">
            {AUTHOR.name[0]}
          </span>
          <div>
            <p className="eyebrow">Who writes our guides</p>
            <h2 id="author-title" className="mt-2 font-display text-2xl font-semibold">{AUTHOR.name}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {AUTHOR.name} writes the SEODXB blog: practical guides on marketing strategy, SEO, AEO and GEO, performance
              advertising and lead tracking for businesses in the UAE. Every guide opens with a short answer, shows when it was
              published and updated, and ends with answers to common questions.
            </p>
            <a href="/blog" className="mt-4 inline-block text-sm font-semibold text-brand underline underline-offset-4">Read the guides</a>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-semibold" data-reveal>How we work with clients</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="spotlight rounded-2xl border border-line bg-white p-7" data-reveal style={delay(i + 1, 110)}>
                <span className="h-1 w-10 rounded-full bg-gradient-to-r from-brand to-mint-strong block" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={CORE_FAQS["/about"]} />

      <CtaBand />
    </>
  );
}
