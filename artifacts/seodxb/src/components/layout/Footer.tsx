import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="col-span-1 md:col-span-2" style={{gridColumn: "span 2"}}>
            <Link href="/" className="inline-flex items-center mb-6">
              <span className="text-2xl font-black tracking-tight text-primary">SEODXB</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              A global SEO agency based in Dubai. We help businesses worldwide dominate traditional search, AI answer engines, and generative results.
            </p>
            <a href="mailto:hi@Listi.ae" className="text-lg font-medium hover:text-primary transition-colors">
              hi@Listi.ae
            </a>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Plans & Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5 text-gray-400 text-sm">
              <li><Link href="/on-page-seo" className="hover:text-white transition-colors">On-Page SEO</Link></li>
              <li><Link href="/technical-seo" className="hover:text-white transition-colors">Technical SEO</Link></li>
              <li><Link href="/aeo" className="hover:text-white transition-colors">AEO - Answer Engines</Link></li>
              <li><Link href="/geo" className="hover:text-white transition-colors">GEO - Generative AI</Link></li>
              <li><Link href="/local-seo" className="hover:text-white transition-colors">Local SEO</Link></li>
              <li><Link href="/international-seo" className="hover:text-white transition-colors">International SEO</Link></li>
              <li><Link href="/seo-audit" className="hover:text-white transition-colors">Free SEO Audit</Link></li>
              <li><Link href="/seo-packages" className="hover:text-white transition-colors">SEO Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Locations</h4>
            <ul className="flex flex-col gap-2.5 text-gray-400 text-sm">
              <li><Link href="/seo-dubai" className="hover:text-white transition-colors">SEO Dubai</Link></li>
              <li><Link href="/seo-abu-dhabi" className="hover:text-white transition-colors">SEO Abu Dhabi</Link></li>
              <li><Link href="/seo-uae" className="hover:text-white transition-colors">SEO UAE</Link></li>
            </ul>
            <h4 className="font-heading font-bold text-lg mt-6 mb-4">Industries</h4>
            <ul className="flex flex-col gap-2.5 text-gray-400 text-sm">
              <li><Link href="/ecommerce-seo" className="hover:text-white transition-colors">E-commerce SEO</Link></li>
              <li><Link href="/real-estate-seo" className="hover:text-white transition-colors">Real Estate SEO</Link></li>
              <li><Link href="/b2b-seo" className="hover:text-white transition-colors">B2B & Startup SEO</Link></li>
              <li><Link href="/seo-for-restaurants" className="hover:text-white transition-colors">Restaurant & Hotel SEO</Link></li>
              <li><Link href="/seo-for-healthcare" className="hover:text-white transition-colors">Healthcare SEO</Link></li>
              <li><Link href="/seo-for-law-firms" className="hover:text-white transition-colors">Legal SEO</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SEODXB. All rights reserved. Based in Dubai, UAE.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
