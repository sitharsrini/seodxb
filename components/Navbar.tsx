"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/locations", label: "Dubai Areas" },
    { href: "/aeo-geo", label: "AEO & GEO" },
    { href: "/results", label: "Results" },
    { href: "/blog", label: "Resources" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#0A2540] flex items-center justify-center">
              <span className="text-white font-bold text-2xl tracking-[-1.5px]">S</span>
            </div>
            <div>
              <div className="font-semibold text-2xl tracking-[-1.2px] text-[#0A2540] group-hover:text-[#00A896] transition-colors">SEODXB</div>
              <div className="text-[10px] text-gray-500 -mt-1.5 font-medium tracking-[1px]">DUBAI • GLOBAL</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0A2540] hover:text-[#00A896] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+971521551198"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0A2540] hover:bg-gray-100 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              +971 52 155 1198
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#0A2540] hover:bg-[#00A896] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-[0.985]"
            >
              <Calendar className="w-4 h-4" />
              Book Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0A2540]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-1 text-[#0A2540]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t flex flex-col gap-3">
            <a href="tel:+971521551198" className="flex items-center gap-2 py-1">
              <Phone className="w-4 h-4" /> +971 52 155 1198
            </a>
            <Link
              href="/contact"
              className="bg-[#0A2540] text-white text-center py-3 rounded-full font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Book Free SEO Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
