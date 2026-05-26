import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-white/90 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-x-8 gap-y-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="font-bold text-xl tracking-[-1px]">S</span>
            </div>
            <span className="font-semibold text-xl tracking-[-0.5px] text-white">SEODXB</span>
          </div>
          <p className="text-white/60 leading-relaxed">
            Global SEO agency headquartered in Dubai. We deliver measurable rankings on Google and visibility in AI search engines through world-class On-Page SEO, AEO, and GEO.
          </p>
          <div className="mt-6 text-xs text-white/50">
            Office 1204, Bay Square, Business Bay<br />
            Dubai, United Arab Emirates
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-4 tracking-wide">SERVICES</div>
          <div className="space-y-2.5 text-white/70">
            <div><Link href="/seo-agency-dubai" className="hover:text-white">SEO Agency Dubai</Link></div>
            <div><Link href="/aeo-geo" className="hover:text-white">Answer Engine Optimisation</Link></div>
            <div><Link href="/aeo-geo" className="hover:text-white">Generative Engine Optimisation</Link></div>
            <div><Link href="/services" className="hover:text-white">Technical SEO</Link></div>
            <div><Link href="/services" className="hover:text-white">Local SEO &amp; Maps</Link></div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-4 tracking-wide">LOCATIONS</div>
          <div className="space-y-2.5 text-white/70">
            <div><Link href="/seo-for-restaurants-dubai-marina" className="hover:text-white">Dubai Marina</Link></div>
            <div><Link href="/seo-for-clinics-jlt-dubai" className="hover:text-white">JLT</Link></div>
            <div><Link href="/seo-for-real-estate-business-bay" className="hover:text-white">Business Bay</Link></div>
            <div><Link href="/seo-for-hotels-downtown-dubai" className="hover:text-white">Downtown Dubai</Link></div>
            <div><Link href="/locations" className="hover:text-white">All Dubai Areas →</Link></div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-4 tracking-wide">COMPANY</div>
          <div className="space-y-2.5 text-white/70">
            <div><Link href="/about" className="hover:text-white">About SEODXB</Link></div>
            <div><Link href="/results" className="hover:text-white">Client Results</Link></div>
            <div><Link href="/blog" className="hover:text-white">SEO Resources</Link></div>
            <div><Link href="/contact" className="hover:text-white">Contact</Link></div>
            <div><a href="https://www.linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a></div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50 leading-relaxed">
            © {currentYear} SEODXB FZE. All rights reserved.<br />
            Trusted by 150+ ambitious brands across the UAE &amp; MENA.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 pt-8 border-t border-white/10 text-[11px] text-white/50 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div>Rank higher. Get discovered by AI. Grow faster.</div>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-white/70">Privacy</Link>
          <Link href="/terms" className="hover:text-white/70">Terms</Link>
          <a href="mailto:hi@listi.ae" className="hover:text-white/70">hi@listi.ae</a>
        </div>
      </div>
    </footer>
  );
}
