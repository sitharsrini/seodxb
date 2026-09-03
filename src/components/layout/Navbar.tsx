import React from "react";
import { useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { name: "On-Page SEO", path: "/on-page-seo" },
  { name: "Technical SEO", path: "/technical-seo" },
  { name: "AEO - Answer Engines", path: "/aeo" },
  { name: "GEO - Generative AI", path: "/geo" },
  { name: "Local SEO", path: "/local-seo" },
  { name: "International SEO", path: "/international-seo" },
  { name: "SEO Audit (Free)", path: "/seo-audit" },
  { name: "SEO Packages", path: "/pricing" },
];

const locationLinks = [
  { name: "SEO Dubai", path: "/seo-dubai" },
  { name: "SEO Abu Dhabi", path: "/seo-abu-dhabi" },
  { name: "SEO UAE", path: "/seo-uae" },
];

const industryLinks = [
  { name: "E-commerce SEO", path: "/ecommerce-seo" },
  { name: "Real Estate SEO", path: "/real-estate-seo" },
  { name: "B2B & Startup SEO", path: "/b2b-seo" },
  { name: "Restaurant & Hotel SEO", path: "/seo-for-restaurants" },
  { name: "Healthcare SEO", path: "/seo-for-healthcare" },
  { name: "Legal SEO", path: "/seo-for-law-firms" },
];

const toolsLinks = [
  { name: "SEO Optimizer (Free)", path: "/seo-optimizer" },
  { name: "ICP Finder & Keywords", path: "/icp-finder" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [toolsOpen, setToolsOpen] = React.useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const toolsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allServicePaths = [...serviceLinks, ...locationLinks, ...industryLinks];
  const isServiceActive = allServicePaths.some((l) => location === l.path);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];
  const isToolActive = toolsLinks.some((l) => location === l.path);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center" data-testid="link-logo">
          <span className="text-2xl font-black tracking-tight text-primary">SEODXB</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                isServiceActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                <p className="px-4 pt-1 pb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">Services</p>
                {serviceLinks.map((link) => (
                  <a key={link.path} href={link.path}
                    className={`block px-4 py-2 text-sm hover:bg-slate-50 hover:text-primary transition-colors ${location === link.path ? "text-primary font-semibold" : "text-foreground"}`}
                    onClick={() => setServicesOpen(false)}>{link.name}</a>
                ))}
                <div className="border-t border-gray-100 my-1" />
                <p className="px-4 pt-1 pb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">By Location</p>
                {locationLinks.map((link) => (
                  <a key={link.path} href={link.path}
                    className={`block px-4 py-2 text-sm hover:bg-slate-50 hover:text-primary transition-colors ${location === link.path ? "text-primary font-semibold" : "text-foreground"}`}
                    onClick={() => setServicesOpen(false)}>{link.name}</a>
                ))}
                <div className="border-t border-gray-100 my-1" />
                <p className="px-4 pt-1 pb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">By Industry</p>
                {industryLinks.map((link) => (
                  <a key={link.path} href={link.path}
                    className={`block px-4 py-2 text-sm hover:bg-slate-50 hover:text-primary transition-colors ${location === link.path ? "text-primary font-semibold" : "text-foreground"}`}
                    onClick={() => setServicesOpen(false)}>{link.name}</a>
                ))}
              </div>
            )}
          </div>

          {/* Free Tools dropdown */}
          <div ref={toolsRef} className="relative">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${isToolActive ? "text-primary" : "text-muted-foreground"}`}
            >
              Free Tools
              <ChevronDown size={14} className={`transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
            </button>
            {toolsOpen && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                {toolsLinks.map((link) => (
                  <a key={link.path} href={link.path}
                    className={`block px-4 py-2 text-sm hover:bg-slate-50 hover:text-primary transition-colors ${location === link.path ? "text-primary font-semibold" : "text-foreground"}`}
                    onClick={() => setToolsOpen(false)}>{link.name}</a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="outline" className="rounded-full px-5 font-semibold border-primary text-primary hover:bg-primary/5">
            <a href="/free-seo-audit">Free Audit</a>
          </Button>
          <Button asChild className="rounded-full px-6 font-semibold" data-testid="button-get-in-touch">
            <a href="/contact">Get In Touch →</a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-1 md:hidden">
          <a
            href="/"
            className={`text-base font-medium px-2 py-2.5 rounded-md ${location === "/" ? "bg-primary/10 text-primary" : "text-foreground"}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <div className="px-2 pt-2 pb-1">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Services</p>
            {serviceLinks.map((link) => (
              <a key={link.path} href={link.path}
                className={`block py-2 pl-3 text-sm rounded-md ${location === link.path ? "text-primary font-semibold" : "text-foreground"}`}
                onClick={() => setIsOpen(false)}>{link.name}</a>
            ))}
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-3 mb-1">By Location</p>
            {locationLinks.map((link) => (
              <a key={link.path} href={link.path}
                className={`block py-2 pl-3 text-sm rounded-md ${location === link.path ? "text-primary font-semibold" : "text-foreground"}`}
                onClick={() => setIsOpen(false)}>{link.name}</a>
            ))}
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-3 mb-1">By Industry</p>
            {industryLinks.map((link) => (
              <a key={link.path} href={link.path}
                className={`block py-2 pl-3 text-sm rounded-md ${location === link.path ? "text-primary font-semibold" : "text-foreground"}`}
                onClick={() => setIsOpen(false)}>{link.name}</a>
            ))}
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-3 mb-1">Free Tools</p>
            {toolsLinks.map((link) => (
              <a key={link.path} href={link.path}
                className={`block py-2 pl-3 text-sm rounded-md ${location === link.path ? "text-primary font-semibold" : "text-foreground"}`}
                onClick={() => setIsOpen(false)}>{link.name}</a>
            ))}
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`text-base font-medium px-2 py-2.5 rounded-md ${
                location === link.path ? "bg-primary/10 text-primary" : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="rounded-full w-full mt-2 font-semibold">
            <a href="/contact" onClick={() => setIsOpen(false)}>Get In Touch →</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
