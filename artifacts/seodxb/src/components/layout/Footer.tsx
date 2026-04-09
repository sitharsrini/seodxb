import { Link } from "wouter";
import logoImg from "@assets/SEODXB_HD_1775726631117.webp";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6">
              <img
                src={logoImg}
                alt="SEODXB"
                className="brightness-0 invert"
                style={{ height: '36px', width: '180px', objectFit: 'cover', objectPosition: 'center 50%' }}
              />
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              As specialists in On-Page SEO and AI Search Engine Optimization, we solve the biggest problem most websites face: a lack of traffic.
            </p>
            <a href="mailto:hey@seodxb.com" className="text-lg font-medium hover:text-primary transition-colors">
              hey@seodxb.com
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
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><Link href="/pricing" className="hover:text-white transition-colors">On-Page SEO</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">AI Search Optimization (AEO)</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Generative Engine Optimization (GEO)</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Technical Audit</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SEODXB. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
