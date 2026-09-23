import { useState, type ReactNode } from "react";
import { CONTACT, LISTI_URL, NAV } from "../site";

function PoweredByListi({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs text-ink-soft ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      Powered by <span className="font-semibold">Listi</span>
    </span>
  );
}

function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-baseline gap-3">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">SEODXB</span>
          <PoweredByListi className="hidden sm:inline-flex" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              aria-current={path === n.href ? "page" : undefined}
              className={`text-sm ${path === n.href ? "font-semibold text-ink" : "text-ink-soft hover:text-ink"}`}
            >
              {n.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary text-sm">
            Book a consultation
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden rounded-md p-2 text-ink"
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
        <nav id="mobile-nav" className="border-t border-line bg-paper px-4 pb-5 pt-2 md:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="block py-3 text-base text-ink">
              {n.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary mt-3 w-full justify-center">
            Book a consultation
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">SEODXB</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Marketing consultancy in Dubai. Strategy, search, ads, websites and content, planned around revenue.
          </p>
          <a
            href={LISTI_URL}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Powered by <span className="font-semibold text-white">Listi</span>
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/results" className="hover:text-white">Results</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></li>
            <li><a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phone}</a></li>
            <li><a href={CONTACT.whatsapp} className="hover:text-white">WhatsApp</a></li>
            <li><a href={CONTACT.linkedin} className="hover:text-white">LinkedIn</a></li>
            <li>{CONTACT.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} SEODXB. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function Layout({ path, children }: { path: string; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header path={path} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-2xl bg-ink px-6 py-12 text-center sm:px-12">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Know where your next 100 enquiries will come from
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/75">
          Start with a free 30-minute consultation. We look at your market, your current marketing and your numbers, then
          tell you plainly what we would do first.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/contact" className="btn-accent">Book a consultation</a>
          <a href={CONTACT.whatsapp} className="btn-ghost-light">Message on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
