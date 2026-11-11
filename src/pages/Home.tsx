import { useState, type CSSProperties, type ReactNode } from "react";
import { CtaBand, Obj, type ArtName } from "../components/Layout";
import { SERVICES } from "../services";
import { CountUp, RotatingWord, delay } from "../motion";
import { POSTS } from "../blog/posts";
import { PostCard } from "../blog/PostCard";
import { INDUSTRIES, industryPath } from "../industries";
import { SERVICE_PAGES, servicePathById } from "../service-pages";
import { Faq } from "../components/Faq";
import { CORE_FAQS } from "../core-faqs";
import { PAGES_UPDATED } from "../site";
import { ArrowUpRight, FanStack, PosterArt, ScrollWords, SpinRing, type RingItem } from "../components/fx";

const industryLink = (slug: string) => {
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  return ind ? industryPath(ind) : "/industries";
};

const face = (kicker: string, title: string, sub: string, art: ReactNode) => (
  <>
    {art}
    <span className="relative text-[10px] font-bold uppercase tracking-[0.18em] opacity-75">{kicker}</span>
    <span className="relative">
      <span className="block text-[clamp(19px,2.2vw,29px)] font-bold leading-[1.03] tracking-[-0.04em]">{title}</span>
      <span className="mt-2 block text-[11px] leading-snug opacity-80">{sub}</span>
    </span>
  </>
);

const RING: RingItem[] = [
  { key: "strategy", href: servicePathById("strategy"), label: "Marketing strategy", bg: "#1d5bff", fg: "#fff", face: face("Service 01", "Marketing strategy", "Who to sell to and where to spend", <PosterArt kind="rings" color="#fff" />) },
  { key: "search", href: servicePathById("search"), label: "SEO, AEO and GEO", bg: "#151515", fg: "#fff", face: face("Service 02", "SEO, AEO & GEO", "Google, answers and AI search", <PosterArt kind="waves" color="#4f86ff" />) },
  { key: "ads", href: servicePathById("ads"), label: "Performance advertising", bg: "#dce7ff", fg: "#0c3fd0", face: face("Service 03", "Performance ads", "Judged on cost per lead", <PosterArt kind="sun" color="#1d5bff" />) },
  { key: "web", href: servicePathById("web-content-social"), label: "Websites, content and social", bg: "#f4f7ff", fg: "#151515", face: face("Service 04", "Websites & content", "Sites that turn visits into enquiries", <PosterArt kind="grid" color="#1d5bff" />) },
  { key: "real-estate", href: industryLink("real-estate"), label: "Marketing for real estate brokers", bg: "#0c3fd0", fg: "#fff", face: face("Industry", "Real estate", "Leads beyond the portals", <PosterArt kind="arch" color="#8cb0ff" />) },
  { key: "clinics", href: industryLink("hospitals-clinics"), label: "Marketing for hospitals and clinics", bg: "#ffffff", fg: "#151515", face: face("Industry", "Hospitals & clinics", "Patients who find and trust you", <PosterArt kind="rings" color="#1d5bff" />) },
  { key: "education", href: industryLink("education"), label: "Marketing for schools and education", bg: "#101b3d", fg: "#fff", face: face("Industry", "Schools & education", "From enquiry to enrolment", <PosterArt kind="stripes" color="#1d5bff" />) },
  { key: "hotels", href: industryLink("hotels"), label: "Marketing for hotels and resorts", bg: "#4f86ff", fg: "#fff", face: face("Industry", "Hotels & resorts", "More direct bookings", <PosterArt kind="sun" color="#ffffff" />) },
  { key: "review", href: "/contact", label: "Book a free marketing review", bg: "#e6eeff", fg: "#0c3fd0", face: face("Free", "Free review", "30 minutes, no obligation", <PosterArt kind="grid" color="#0c3fd0" />) },
];

const TILES: { big: string; label: string; obj: ArtName; bg: string; fg: string }[] = [
  { big: String(INDUSTRIES.length), label: "industries with their own guide", obj: "torus", bg: "#1d5bff", fg: "#fff" },
  { big: String(POSTS.length), label: "free marketing guides", obj: "cube", bg: "#151515", fg: "#fff" },
  { big: "4", label: "services under one plan", obj: "rings", bg: "#dce7ff", fg: "#0c3fd0" },
  { big: "2", label: "languages: English and Arabic", obj: "duo", bg: "#f4f7ff", fg: "#151515" },
  { big: "UAE", label: "Dubai, Abu Dhabi, Sharjah and beyond", obj: "planet", bg: "#0c3fd0", fg: "#fff" },
];

const SERVICE_OBJ: Record<string, ArtName> = { strategy: "torus", search: "knot", ads: "capsules", "web-content-social": "cube" };

const GROUPS = [
  {
    key: "property",
    title: "Property & construction",
    blurb: "Brokers, developers, contractors and property managers who need qualified enquiries, not just traffic.",
    slugs: ["real-estate", "construction", "property-management", "interior-design", "holiday-homes", "mep-contractors", "painting-carpentry", "coworking-spaces"],
  },
  {
    key: "health",
    title: "Healthcare & wellness",
    blurb: "Clinics, hospitals, therapists and studios that need patients and members to find and trust them.",
    slugs: ["hospitals-clinics", "dental-clinics", "aesthetic-clinics", "dermatology-clinics", "physiotherapy-clinics", "cardiology-heart-clinics", "gyms-fitness", "spas-wellness", "beauty-salons", "yoga-studios", "holistic-healing", "mental-health-therapists"],
  },
  {
    key: "pro",
    title: "Professional services",
    blurb: "Law, accounting, tax, insurance, recruitment and business-setup firms that win clients on trust.",
    slugs: ["law-firms", "accounting-firms", "vat-corporate-tax-consultants", "business-setup-consultants", "insurance-brokers", "recruitment-agencies"],
  },
  {
    key: "hospitality",
    title: "Hospitality & travel",
    blurb: "Hotels, restaurants, tour and charter operators and event companies that want more direct bookings.",
    slugs: ["hotels", "restaurants", "travel-agencies", "desert-safari", "yacht-charters", "event-management", "car-rental"],
  },
  {
    key: "edu",
    title: "Education & local services",
    blurb: "Schools, tutors, training providers and local service companies that grow through search and reviews.",
    slugs: ["education", "tuition-centres", "certification-training", "cleaning-companies", "maid-services", "ac-maintenance", "pest-control", "movers-packers", "car-dealers", "home-furniture"],
  },
];

const PREVIEW: { t: string; bg: string; fg: string }[] = [
  { t: "translate(-52%,-48%) rotate(-3deg)", bg: "#ffffff", fg: "#151515" },
  { t: "translate(-26%,-56%) rotate(7deg)", bg: "#4f86ff", fg: "#ffffff" },
  { t: "translate(-78%,-54%) rotate(-10deg)", bg: "#2b2d35", fg: "#ffffff" },
];

function IndustryShowcase() {
  const [active, setActive] = useState(0);
  const group = GROUPS[active];
  const names = group.slugs.map((s) => INDUSTRIES.find((i) => i.slug === s)?.name ?? s);
  return (
    <section className="ind-section">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-0 lg:py-0">
        <div className="flex items-center lg:py-24 lg:pr-16">
          <div className="w-full" data-reveal="left">
            <div className="ind-preview" aria-hidden="true">
              <div className="dots-light absolute inset-0 opacity-40" />
              {names.slice(0, 3).map((nm, i) => (
                <div key={`${group.key}-${i}`} className="mini-card" style={{ transform: PREVIEW[i].t, background: PREVIEW[i].bg, color: PREVIEW[i].fg, zIndex: 3 - i, animationDelay: `${i * 70}ms` }}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">Industry guide</span>
                  <span className="text-[clamp(17px,1.9vw,26px)] font-bold leading-[1.05] tracking-[-0.04em]">{nm}</span>
                </div>
              ))}
              <p className="absolute inset-x-0 bottom-5 text-center text-sm text-white/80">Marketing and SEO built for each one</p>
            </div>
          </div>
        </div>
        <div className="lg:py-24 lg:pl-16">
          <p className="eyebrow-dark" data-reveal>Industries we work with</p>
          <p className="mt-6 text-[clamp(20px,2.2vw,28px)] font-light leading-snug" data-reveal style={delay(1)}>
            Marketing built around
            <br />
            how your customers buy.
          </p>
          <div role="tablist" aria-label="Industry groups" className="mt-8 space-y-1" data-reveal style={delay(2)}>
            {GROUPS.map((g, i) => (
              <button key={g.key} type="button" role="tab" id={`ind-tab-${g.key}`} aria-selected={active === i} aria-controls={`ind-panel-${g.key}`} className="ind-btn" onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}>
                {g.title}
              </button>
            ))}
          </div>
          <div className="mt-8 border-t border-white/30 pt-8">
            {GROUPS.map((g, i) => (
              <div key={g.key} role="tabpanel" id={`ind-panel-${g.key}`} aria-labelledby={`ind-tab-${g.key}`} hidden={active !== i}>
                <h3 className="text-2xl font-medium tracking-tight">{g.title}</h3>
                <p className="mt-3 max-w-lg text-[17px] leading-relaxed text-white/85">{g.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.slugs.map((s) => (
                    <li key={s}>
                      <a href={industryLink(s)} className="inline-block rounded-full border border-white/35 px-3.5 py-1.5 text-sm text-white transition hover:bg-white hover:text-brand">
                        {INDUSTRIES.find((x) => x.slug === s)?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <a href="/industries" className="btn-accent mt-8 !px-6 !py-3.5">
              All {INDUSTRIES.length} industries
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const STAT_CARDS: { to: number; suffix: string; title: string; body: string; hot?: boolean }[] = [
  { to: 30, suffix: " min", title: "Free first consultation", body: "We look at your market and current marketing. You leave with at least one thing you can act on." },
  { to: 90, suffix: "-day", title: "Plan with budget and KPIs", body: "Priorities, a budget for each channel and clear targets, agreed before any money is spent.", hot: true },
  { to: 1, suffix: " day", title: "Reply time on working days", body: "Send an enquiry and you hear back within one working day, with a clear next step." },
];

const CHANNELS = ["Google Search", "Google Maps", "ChatGPT", "Gemini", "Perplexity", "Meta Ads", "Instagram", "LinkedIn", "TikTok", "YouTube", "Email", "Your website"];

const icon = { width: 36, height: 36, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
const STEP_ICONS: ReactNode[] = [
  <svg key="a" {...icon}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>,
  <svg key="b" {...icon}><path d="M4 8h10M18 8h2M4 16h2M10 16h10" /><circle cx="16" cy="8" r="2" /><circle cx="8" cy="16" r="2" /></svg>,
  <svg key="c" {...icon}><path d="M6 21V4M6 5h11l-2 4 2 4H6" /></svg>,
  <svg key="d" {...icon}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>,
];

const STEPS: { n: string; name: string; light: string; bold: string; body: string; obj: ArtName; cta: { href: string; label: string } }[] = [
  { n: "01", name: "Diagnose", light: "Diagnose first,", bold: "fix fast.", body: "We look at your market, competitors, website, tracking, and current spending. Then we show you where the gaps are and what can be improved quickly.", obj: "gem", cta: { href: "/services", label: "Our services" } },
  { n: "02", name: "Plan", light: "A plan with", bold: "clear KPIs.", body: "We build a 90-day plan with clear priorities, a budget for each channel, and the KPIs we will be measured on. You agree to it before any money is spent.", obj: "rings", cta: { href: "/contact", label: "Get a 90-day plan" } },
  { n: "03", name: "Execute", light: "One team,", bold: "one plan.", body: "One team handles your strategy, search, ads, website, and content. Everything works together so no channel pulls in a different direction.", obj: "capsules", cta: { href: "/about", label: "About SEODXB" } },
  { n: "04", name: "Measure", light: "Measured on", bold: "leads and revenue.", body: "Every month we report on leads, cost per lead, and revenue impact. What is working gets more budget. What is not working gets cut.", obj: "planet", cta: { href: "/results", label: "How we measure results" } },
];

const BAND_A = ["Strategy that pays back.", "Search people trust.", "Ads measured on leads.", "Websites that convert."];
const BAND_B = ["Tracking before spend.", "KPIs agreed up front.", "Plain-language reports.", "Budget follows results."];

const FIRST_30 = [
  { key: "audit", kicker: "Included in your first 30 days", title: "An honest audit", body: "A straight review of your current marketing and tracking, so you know what is working and what is not." },
  { key: "channels", kicker: "Included in your first 30 days", title: "Channel clarity", body: "A clear view of which channels can pay back in your market, and which are not worth your money." },
  { key: "plan", kicker: "Included in your first 30 days", title: "A 90-day plan", body: "Budget, priorities and KPIs written down, so everyone knows what happens next and how it is measured." },
  { key: "fixes", kicker: "Included in your first 30 days", title: "Quick fixes shipped", body: "Not just recommended. Where we can fix something fast, we do, so you see progress in the first month." },
];

export default function Home() {
  const loop = (items: string[]) => [...items, ...items];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-6 pt-2 md:pt-6">
        <div className="mx-auto max-w-5xl px-4 text-center" data-reveal-now>
          <h1 className="font-display text-[clamp(34px,4.7vw,66px)] leading-[1.02]">
            <span className="eyebrow font-sans" data-reveal>Marketing agency &amp; consultancy in Dubai</span>
            <span className="sr-only">: </span>
            <span className="mt-4 block" data-reveal style={delay(1)}>
              Marketing planned around <span className="text-gradient">revenue</span>, not activity.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
            SEODXB helps businesses in the UAE decide where to focus. Then we run the strategy, search, ads, website,
            and content needed to bring in a steady flow of qualified leads.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3" data-reveal style={delay(3)}>
            <a href="/contact" className="btn-primary">Book a free consultation</a>
            <a href="/services" className="btn-ghost">See our services</a>
          </div>
        </div>
        <div className="mt-2" data-reveal="scale" style={delay(3)}>
          <SpinRing items={RING} />
        </div>
        <p className="mt-5 text-center text-base text-ink" data-reveal style={delay(4)}>
          One team for your <RotatingWord words={["strategy", "SEO & AI search", "Google Ads", "website", "content", "social media"]} />
        </p>
      </section>

      {/* Facts strip */}
      <section className="marquee overflow-hidden py-10" aria-label="SEODXB at a glance">
        <div className="marquee-track flex w-max gap-5 pr-5">
          {loop(TILES.map((t) => t.big)).map((_, k) => {
            const t = TILES[k % TILES.length];
            return (
              <div key={k} aria-hidden={k >= TILES.length} className="relative flex h-[170px] w-[320px] flex-none items-end overflow-hidden rounded-[22px] p-6" style={{ background: t.bg, color: t.fg }}>
                <div>
                  <p className="text-[46px] font-medium leading-none tracking-[-0.05em]">{t.big}</p>
                  <p className="mt-2 max-w-[150px] text-sm leading-snug opacity-80">{t.label}</p>
                </div>
                <Obj name={t.obj} size={160} className="absolute -right-2 -top-2 w-[150px] drop-shadow-[0_18px_16px_rgba(0,0,0,0.25)]" />
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-14 px-4 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <p className="eyebrow" data-reveal>About SEODXB</p>
          <h2 className="mt-6 font-display text-[clamp(36px,4.6vw,62px)] leading-[1.04]" data-reveal style={delay(1)}>
            We&rsquo;re a consultancy that also does the work.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
            SEODXB started as a search agency. We kept seeing good search work held back by unclear positioning, untracked
            ad spend and websites that did not convert. So every project now starts with strategy, and we still do the
            hands-on work.
          </p>
          <a href="/about" className="btn-dark mt-8" data-reveal style={delay(3)}>
            More about SEODXB
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="relative mx-auto h-[500px] w-full max-w-[560px]" data-reveal="scale" style={delay(2)}>
          <div className="float absolute left-0 top-8 w-[58%] -rotate-6 rounded-[22px] border border-line bg-white p-6 shadow-2xl shadow-brand/15">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Your 90-day plan</p>
            <ul className="mt-4 space-y-3 text-[15px] text-ink">
              {["Audit and tracking review", "Channel plan and budget", "Priority actions launched"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-brand text-white" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute right-0 top-[150px] w-[66%] rotate-3 rounded-[22px] bg-[#f1f5ff] p-7 shadow-2xl shadow-brand/20">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">KPI framework</p>
            <ul className="mt-4 space-y-3 text-[17px] font-medium text-ink">
              <li>Cost per qualified lead</li>
              <li>Pipeline created</li>
              <li>Channel payback period</li>
            </ul>
            <Obj name="torus" size={200} className="absolute right-2 -top-14 w-[130px] drop-shadow-[0_18px_16px_rgba(29,91,255,0.3)]" />
          </div>
          <div className="absolute bottom-0 left-2 w-[210px] -rotate-3 rounded-[18px] bg-brand p-6 text-white shadow-2xl shadow-brand/40">
            <p className="text-[54px] font-medium leading-none tracking-[-0.05em]">30<sup className="text-2xl">min</sup></p>
            <p className="mt-2 text-[15px] opacity-90">Free first consultation</p>
          </div>
        </div>
      </section>

      {/* Statement that lights up on scroll */}
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-8 md:py-20">
        <ScrollWords
          text="Strategy first, then search, ads, websites and content. One team, one plan, measured against leads and revenue."
          className="text-[clamp(34px,6.2vw,92px)] font-medium leading-[1.04] tracking-[-0.045em]"
        />
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-8">
        <div className="text-center">
          <p className="eyebrow" data-reveal>Our services</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(34px,4.6vw,60px)] leading-[1.04]" data-reveal style={delay(1)}>
            Four services, one plan
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <a key={s.id} href={servicePathById(s.id)} className="svc-card group" data-reveal style={delay(i + 1, 110)}>
              <span className="svc-circle" aria-hidden="true" />
              <h3 className="relative max-w-[70%] text-[26px] font-medium leading-tight tracking-tight">{s.name}</h3>
              <p className="relative mt-3 max-w-[62%] text-[17px] leading-relaxed text-ink-soft">{s.short}</p>
              <Obj name={SERVICE_OBJ[s.id] ?? "torus"} size={360} className="svc-obj" />
              <span className="circle-btn relative mt-auto" aria-hidden="true">
                <ArrowUpRight size={20} />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-5" data-reveal>
          <a href="/services#all-services" className="btn-outline">
            See all {SERVICE_PAGES.length} services
            <ArrowUpRight size={18} />
          </a>
          <p className="text-center text-lg">
            Not sure where to start?{" "}
            <a href="/contact" className="border-b border-ink font-medium hover:text-brand hover:border-brand">Book a free review.</a>
          </p>
        </div>
      </section>

      <IndustryShowcase />

      {/* Stats */}
      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-8 md:py-28">
        <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(34px,4.6vw,60px)] leading-[1.05]" data-reveal>
          A clear plan, a fast reply and one team.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STAT_CARDS.map((s, i) => (
            <div key={s.title} className="stat-card" data-reveal style={delay(i + 1, 110)}>
              {s.hot && <span className="badge-hot">INCLUDED</span>}
              <p className="stat-num">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <h3 className="mt-6 text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[17rem] text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="marquee mt-14 overflow-hidden" aria-label="Channels we work in">
          <div className="marquee-track flex w-max items-center gap-12 text-[clamp(22px,2.6vw,34px)] font-medium tracking-tight text-ink/80">
            {loop(CHANNELS).map((c, k) => (
              <span key={k} aria-hidden={k >= CHANNELS.length} className="whitespace-nowrap">{c}<span className="ml-12 text-brand" aria-hidden="true">+</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* Process: numbered rows that stack as you scroll */}
      <section aria-label="How we work">
        {STEPS.map((s, i) => (
          <div key={s.n} className="step" style={{ "--z": i + 1 } as CSSProperties}>
            <div className="step-glow" aria-hidden="true" />
            <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
              <div className="relative flex flex-col justify-center gap-8 px-4 py-16 sm:px-8 md:py-20 lg:pr-24">
                <span className="step-num">{s.n}</span>
                <h3 className="font-display text-[clamp(36px,4.4vw,60px)] leading-[1.06]">
                  <span className="font-light">{s.light}</span> <span className="font-semibold">{s.bold}</span>
                </h3>
                <p className="max-w-md border-t border-line pt-7 text-[17px] leading-relaxed text-ink-soft">{s.body}</p>
                <div>
                  <a href={s.cta.href} className="btn-dark">{s.cta.label}</a>
                </div>
              </div>
              <div className="flex items-center justify-center px-4 pb-16 sm:px-8 md:py-20">
                <div className="relative aspect-[1/0.92] w-full max-w-[520px] rounded-[24px] bg-gradient-to-br from-[#dce7ff] to-[#f4f7ff]">
                  <Obj name={s.obj} size={520} className="absolute inset-[8%] h-[84%] w-[84%] object-contain drop-shadow-[0_34px_30px_rgba(29,91,255,0.3)]" />
                  <div className="tag-card" aria-hidden="true">
                    {STEP_ICONS[i]}
                    <span>{s.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tilted bands */}
      <section className="bands" aria-label="What we stand for">
        <div className="band band-a">
          <div className="band-track">
            {loop(BAND_A).map((t, k) => <span key={k} aria-hidden={k >= BAND_A.length}>{t}</span>)}
          </div>
        </div>
        <div className="band band-b">
          <div className="band-track">
            {loop(BAND_B).map((t, k) => <span key={k} aria-hidden={k >= BAND_B.length}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* First 30 days */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-4 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow" data-reveal>Working with us</p>
          <h2 className="mt-6 font-display text-[clamp(34px,4.4vw,58px)] leading-[1.05]" data-reveal style={delay(1)}>
            Your first
            <br />
            30 days
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
            If we work together, this is what you get in the first month.
          </p>
        </div>
        <div data-reveal="scale" style={delay(2)}>
          <FanStack items={FIRST_30} />
        </div>
      </section>

      {/* Blog */}
      <section className="bg-[#f4f7ff]">
        <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow" data-reveal>From the blog</p>
              <h2 className="mt-6 font-display text-[clamp(32px,4vw,52px)] leading-[1.05]" data-reveal style={delay(1)}>
                Practical guides, no fluff
              </h2>
            </div>
            <a href="/blog" className="btn-outline" data-reveal style={delay(2)}>
              All articles
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={CORE_FAQS["/"]} reviewed={PAGES_UPDATED} />

      <CtaBand />
    </>
  );
}
