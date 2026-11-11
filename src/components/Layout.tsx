import { useEffect, useState, type ReactNode } from "react";
import { CONTACT, LISTI_URL, NAV } from "../site";
import { delay, useMotionEffects } from "../motion";
import { pillarPages, servicePath, serviceName } from "../service-pages";
import { ArrowUpRight, MailIcon, MenuIcon, Ribbon } from "./fx";

const HEADER_NAV = [{ href: "/", label: "Home" }, ...NAV];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-word ${className}`}>
      SEO<b>DXB</b>
    </span>
  );
}

function Header({ path: current }: { path: string }) {
  const path = current.startsWith("/blog/") ? "/blog" : current.startsWith("/industries/") ? "/industries" : current.startsWith("/services/") ? "/services" : current;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-8">
        <a href="/" aria-label="SEODXB home" tabIndex={scrolled ? -1 : undefined} className={`shrink-0 transition duration-300 ${scrolled ? "pointer-events-none -translate-x-3 opacity-0" : ""}`}>
          <Wordmark />
        </a>
        <nav className="nav-pill hidden lg:flex" aria-label="Main">
          {HEADER_NAV.map((n) => (
            <a key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/contact" className="btn-outline !px-5 !py-3.5">
            <MailIcon />
            <span className="hidden sm:inline">Book a consultation</span>
            <span className="sm:hidden">Contact</span>
          </a>
          <button
            type="button"
            className="grid h-[50px] w-[50px] place-items-center rounded-full border border-line bg-white/85 backdrop-blur lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mx-4 mt-3 rounded-3xl border border-line bg-white p-3 shadow-2xl shadow-brand/10 lg:hidden" aria-label="Mobile">
          {HEADER_NAV.map((n) => (
            <a key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className="nav-link block !rounded-2xl !py-3.5 !text-base">
              {n.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary mt-2 w-full">
            Book a consultation
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const social = [
    { label: "LinkedIn", href: CONTACT.linkedin },
    { label: "WhatsApp", href: CONTACT.whatsapp },
    { label: "Email", href: `mailto:${CONTACT.email}` },
    { label: "Call", href: CONTACT.phoneHref },
  ];
  return (
    <footer className="foot">
      <div className="foot-social grid grid-cols-2 divide-x divide-y divide-line border-t border-line bg-white md:grid-cols-4 md:divide-y-0">
        {social.map((s) => (
          <a key={s.label} href={s.href} {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
            {s.label}
            <span className="text-brand"><ArrowUpRight size={16} /></span>
          </a>
        ))}
      </div>

      <Ribbon />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <p className="foot-wordmark" aria-label={`Copyright ${new Date().getFullYear()} SEODXB`}>
          <span className="text-brand">©</span> {new Date().getFullYear()} SEO<span className="text-brand">DXB</span>
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/10 py-14 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="max-w-xs text-sm leading-relaxed">
              Marketing consultancy in Dubai. Strategy, search, ads, websites and content, planned around revenue.
            </p>
            <a
              href={LISTI_URL}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-xs text-white/80 transition hover:border-white hover:text-white"
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
              Powered by <span className="font-semibold">Listi</span>
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {pillarPages().map((sp) => (
                <li key={sp.id}>
                  <a href={servicePath(sp)} className="transition hover:pl-1 hover:text-white">{serviceName(sp)}</a>
                </li>
              ))}
              <li>
                <a href="/services" className="transition hover:pl-1 hover:text-white">All services</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Pages</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[...NAV, { href: "/contact", label: "Contact" }].map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition hover:pl-1 hover:text-white">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phone}</a></li>
              <li><a href={CONTACT.whatsapp} className="hover:text-white">WhatsApp</a></li>
              <li>{CONTACT.city}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} SEODXB. All rights reserved.</p>
          <p>Marketing consultancy and SEO agency in Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ path, children }: { path: string; children: ReactNode }) {
  useMotionEffects();
  return (
    <div className="page-dots flex min-h-screen flex-col text-ink">
      <Header path={path} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

// The page's keyword-led heading (its <title> without the brand suffix), shown as the small line above a hero headline.
export const pageHeading = (title: string) => title.replace(/\s*\|\s*SEODXB.*$/, "");

const ART = ["torus", "knot", "capsules", "planet", "cube", "gem", "rings", "duo"] as const;
export type ArtName = (typeof ART)[number];

// Purely decorative 3D render, drawn as a background so it is not an image element that needs alt text.
export function Obj({ name, className = "" }: { name: ArtName; className?: string; size?: number }) {
  return <span aria-hidden="true" className={`block aspect-square bg-contain bg-center bg-no-repeat ${className}`} style={{ backgroundImage: `url(/3d/${name}.webp)` }} />;
}

// With `lead`, the small line above the headline is part of the H1, so the H1 carries the page's keyword
// as well as the headline. A hidden ": " keeps the two readable as one heading.
export function PageHero({ eyebrow, title, lead, children, art }: { eyebrow?: string; title: ReactNode; lead?: string; children?: ReactNode; art?: ArtName }) {
  const pick = art ?? ART[((lead ?? eyebrow ?? "").length * 7) % ART.length];
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28" data-reveal-now>
        <div className="relative z-10 max-w-3xl">
          {lead ? (
            <h1 className="font-display text-[clamp(38px,5.4vw,70px)] leading-[1.04]">
              <span className="eyebrow-soft font-sans" data-reveal>{lead}</span>
              <span className="sr-only">: </span>
              <span className="mt-6 block" data-reveal style={delay(1)}>{title}</span>
            </h1>
          ) : (
            <>
              <p className="eyebrow" data-reveal>{eyebrow}</p>
              <h1 className="mt-6 font-display text-[clamp(38px,5.4vw,70px)] leading-[1.04]" data-reveal style={delay(1)}>
                {title}
              </h1>
            </>
          )}
          {children}
        </div>
        <Obj name={pick} size={420} className="float pointer-events-none absolute -right-6 top-1/2 hidden w-[360px] -translate-y-1/2 drop-shadow-[0_40px_36px_rgba(29,91,255,0.28)] xl:block" />
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-[36px] bg-brand px-6 py-20 text-center text-white sm:px-14" data-reveal="scale">
        <div className="dots-light absolute inset-0 opacity-80" aria-hidden="true" />
        <Obj name="planet" size={360} className="float pointer-events-none absolute -left-10 bottom-[-40px] hidden w-[230px] opacity-95 md:block" />
        <Obj name="torus" size={360} className="float pointer-events-none absolute -right-8 top-[-30px] hidden w-[220px] opacity-95 md:block" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(32px,4.6vw,58px)] leading-[1.05]">
            Know where your next 100 enquiries will come from
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Start with a free 30-minute consultation. We look at your market, your current marketing and your numbers, then
            tell you plainly what we would do first.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="/contact" className="btn-accent">Book a consultation</a>
            <a href={CONTACT.whatsapp} className="btn-ghost-light">Message on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
