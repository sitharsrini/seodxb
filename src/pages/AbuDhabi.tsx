import { CtaBand, PageHero } from "../components/Layout";
import { ContactForm } from "./Contact";
import { Faq } from "../components/Faq";
import { CORE_FAQS } from "../core-faqs";
import { PAGES_UPDATED } from "../site";
import { PUBLISHED } from "../published";
import { delay } from "../motion";
import { pillarPages, servicePath, serviceName } from "../service-pages";
import { INDUSTRIES, industryPath } from "../industries";
import { ArrowUpRight } from "../components/fx";

const DIFFERENCES = [
  { title: "Different regulators", body: "Healthcare in Abu Dhabi is licensed by the Department of Health, private schools by ADEK, and tourism businesses by the Department of Culture and Tourism. Advertising rules follow the regulator, so campaigns planned for Dubai often need changes." },
  { title: "Different search areas", body: "People search by where they live and work: Khalifa City, Al Reem Island, Yas Island, Mussafah, Al Ain. Location pages and Google Business Profiles need to match those areas, not Dubai districts." },
  { title: "Government and enterprise buyers", body: "Many Abu Dhabi contracts go through procurement and prequalification. Buyers check your company profile, licences and past work long before they call, so the website has to carry that proof." },
  { title: "English and Arabic", body: "Arabic search matters across the UAE and often more so in Abu Dhabi and Al Ain. We research Arabic keywords separately and structure bilingual pages correctly." },
];

const INDUSTRY_SLUGS = ["hospitals-clinics", "education", "business-setup-consultants", "real-estate", "construction", "hotels", "law-firms", "mep-contractors"];

export default function AbuDhabi() {
  const industries = INDUSTRY_SLUGS.map((s) => INDUSTRIES.find((i) => i.slug === s)).filter((i): i is NonNullable<typeof i> => Boolean(i));
  return (
    <>
      <PageHero lead="Marketing agency for Abu Dhabi businesses" title={<>Strategy, search and ads for Abu Dhabi, run from <span className="text-gradient">Dubai</span></>} art="planet">
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal style={delay(2)}>
          SEODXB is based in Dubai and works with businesses across the UAE, including Abu Dhabi and Al Ain. We plan
          around how Abu Dhabi buyers search and which regulator you answer to, then run the work and report on leads.
        </p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal style={delay(3)}>
          <a href="#enquire" className="btn-primary">Book a free consultation</a>
          <a href="/free-marketing-audit" className="btn-ghost">Free marketing audit</a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div id="short-answer" className="rounded-2xl border-l-4 border-brand bg-white p-6 shadow-lg shadow-brand/5 sm:p-8" data-reveal data-reveal-now>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">In short</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink">
            SEODXB is a Dubai marketing consultancy that also serves businesses in Abu Dhabi. We work with Abu Dhabi
            clients from our Dubai base, by video call and phone, and we plan every campaign around Abu Dhabi search
            areas, regulators and buyers. Services cover marketing strategy, SEO and AI search, paid advertising, websites,
            content and social media.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow" data-reveal>Why it needs its own plan</p>
        <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>What is different about marketing in Abu Dhabi</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {DIFFERENCES.map((d, i) => (
            <div key={d.title} className="svc-mini" data-reveal style={delay(i, 90)}>
              <h3 className="text-xl font-medium tracking-tight">{d.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow" data-reveal>Services</p>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl" data-reveal style={delay(1)}>What we do for Abu Dhabi clients</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillarPages().map((sp, i) => (
              <a key={sp.slug} href={servicePath(sp)} className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-white p-6 transition hover:border-brand" data-reveal style={delay(i, 90)}>
                <span>
                  <span className="block text-xl font-medium tracking-tight group-hover:text-brand">{serviceName(sp)}</span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-ink-soft">{sp.description}</span>
                </span>
                <span className="mt-1 text-brand" aria-hidden="true"><ArrowUpRight /></span>
              </a>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-ink-soft" data-reveal>
            Local visibility usually starts with{" "}
            <a href="/services/local-seo-services" className="font-medium text-brand underline underline-offset-4">local SEO</a> and{" "}
            <a href="/services/google-business-profile-management" className="font-medium text-brand underline underline-offset-4">Google Business Profile management</a>, and Arabic search with{" "}
            <a href="/services/arabic-seo-services" className="font-medium text-brand underline underline-offset-4">Arabic SEO</a>. You can also browse{" "}
            <a href="/services" className="font-medium text-brand underline underline-offset-4">all services</a>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl" data-reveal>Industries we often work with in Abu Dhabi</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <li key={ind.slug}>
              <a href={industryPath(ind)} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">
                {ind.name}
              </a>
            </li>
          ))}
          <li>
            <a href="/industries" className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-brand underline underline-offset-4">All industries</a>
          </li>
        </ul>
        <p className="mt-8 max-w-3xl leading-relaxed text-ink-soft" data-reveal>
          Setting up a company in the capital? Our guide on{" "}
          <a href="/blog/abu-dhabi-business-setup-leads" className="font-medium text-brand underline underline-offset-4">how business setup consultants win Abu Dhabi enquiries</a>{" "}
          shows how Abu Dhabi searches differ from Dubai ones. Regulatory points on this page are stated generally, so
          confirm current requirements with the relevant authority.
        </p>
      </section>

      <section id="enquire" className="relative scroll-mt-20 overflow-hidden bg-navy">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
          <div className="text-white" data-reveal="left">
            <p className="eyebrow">Abu Dhabi</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">Tell us about your Abu Dhabi business</h2>
            <p className="mt-4 text-white/80">
              We reply within one working day to set up a free 30-minute call. You will leave with at least one thing
              you can act on.
            </p>
          </div>
          <ContactForm source="abu-dhabi" />
        </div>
      </section>

      <Faq faqs={CORE_FAQS["/marketing-agency-abu-dhabi"]} reviewed={PAGES_UPDATED} published={PUBLISHED["/marketing-agency-abu-dhabi"]} />

      <CtaBand />
    </>
  );
}
