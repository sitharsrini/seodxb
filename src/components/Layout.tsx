import { useEffect, useState, type ReactNode } from "react";
import { CONTACT, LISTI_URL, NAV } from "../site";
import { delay, useMotionEffects } from "../motion";

function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-dark text-sm font-bold text-white shadow-md shadow-brand/30">
        S
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-mint-strong" aria-hidden="true" />
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-ink">SEODXB</span>
    </span>
  );
}

function PoweredByListi({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-mint/60 px-2.5 py-0.5 text-[11px] text-mint-dark ${className}`}>
      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
      Powered by <span className="font-semibold">Listi</span>
    </span>
  );
}

function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/80 backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "border-line shadow-lg shadow-brand/5" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-3" aria-label="SEODXB home">
          <Logo />
          <PoweredByListi />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              aria-current={path === n.href ? "page" : undefined}
              className={`group relative text-sm transition-colors ${path === n.href ? "font-semibold text-brand" : "text-ink-soft hover:text-ink"}`}
            >
              {n.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 w-full origin-left rounded bg-gradient-to-r from-brand to-mint-strong transition-transform duration-300 ${
                  path === n.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
                aria-hidden="true"
              />
            </a>
          ))}
          <a href="/contact" className="btn-primary text-sm">
            Book a consultation
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-white px-4 pb-5 pt-2 md:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="block py-3 text-base text-ink">
              {n.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary mt-4 w-full justify-center">
            Book a consultation
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white/75">
      <div className="h-1 bg-gradient-to-r from-brand via-mint-strong to-brand" aria-hidden="true" />
      <div className="blob -right-32 -top-32 h-80 w-80 bg-brand/40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-white">SEODXB</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Marketing consultancy in Dubai. Strategy, search, ads, websites and content, planned around revenue.
          </p>
          <a
            href={LISTI_URL}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-mint/30 px-3 py-1 text-xs text-mint transition hover:border-mint hover:bg-mint/10"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint-strong" aria-hidden="true" />
            Powered by <span className="font-semibold">Listi</span>
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[...NAV, { href: "/contact", label: "Contact" }].map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:pl-1 hover:text-mint">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-mint">{CONTACT.email}</a></li>
            <li><a href={CONTACT.phoneHref} className="hover:text-mint">{CONTACT.phone}</a></li>
            <li><a href={CONTACT.whatsapp} className="hover:text-mint">WhatsApp</a></li>
            <li><a href={CONTACT.linkedin} className="hover:text-mint">LinkedIn</a></li>
            <li>{CONTACT.city}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} SEODXB. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function Layout({ path, children }: { path: string; children: ReactNode }) {
  useMotionEffects();
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header path={path} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="blob -left-24 -top-24 h-72 w-72 bg-brand/15" aria-hidden="true" />
      <div className="blob -right-16 top-10 h-64 w-64 bg-mint/70" style={{ animationDelay: "-6s" }} aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <p className="eyebrow" data-reveal>{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl" data-reveal style={delay(1)}>
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="gradient-shift relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-2xl shadow-brand/20 sm:px-12" data-reveal="scale">
        <div className="blob -left-20 -top-20 h-64 w-64 bg-mint-strong/30" aria-hidden="true" />
        <div className="blob -bottom-24 -right-10 h-72 w-72 bg-white/10" style={{ animationDelay: "-9s" }} aria-hidden="true" />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Know where your next 100 enquiries <span className="text-mint">will come from</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Start with a free 30-minute consultation. We look at your market, your current marketing and your numbers, then
            tell you plainly what we would do first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/contact" className="btn-accent">Book a consultation</a>
            <a href={CONTACT.whatsapp} className="btn-ghost-light">Message on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
