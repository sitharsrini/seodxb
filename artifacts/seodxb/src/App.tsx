import React, { Suspense, lazy } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";

function WhatsAppButton() {
  const phone = "971521551198";
  const message = encodeURIComponent("Hi! I'm interested in your SEO services.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="button-whatsapp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 2C8.28 2 2 8.28 2 15.998c0 2.477.648 4.797 1.777 6.82L2 30l7.395-1.742A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.002 30 8.28 23.72 2 16.004 2zm0 25.44a11.4 11.4 0 0 1-5.818-1.594l-.416-.248-4.39 1.034 1.057-4.27-.27-.437A11.4 11.4 0 0 1 4.56 16c0-6.318 5.128-11.44 11.444-11.44 6.318 0 11.44 5.122 11.44 11.44 0 6.316-5.122 11.44-11.44 11.44zm6.28-8.57c-.344-.172-2.035-1.003-2.35-1.118-.316-.115-.547-.172-.777.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.706-1.022-.913-1.713-2.04-1.912-2.384-.2-.344-.021-.53.15-.702.154-.154.344-.402.516-.602.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.602-.086-.172-.777-1.875-1.065-2.566-.28-.674-.564-.582-.777-.593l-.662-.012c-.23 0-.602.086-.918.43-.316.344-1.205 1.177-1.205 2.87 0 1.692 1.234 3.33 1.406 3.56.172.23 2.43 3.71 5.887 5.203.823.355 1.465.567 1.967.726.826.263 1.578.226 2.172.137.662-.1 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z"/>
      </svg>
    </a>
  );
}

// Route components are lazy-loaded so each page ships its own JS chunk. This
// keeps the heavy data (keyword configs, blog content) out of the initial
// bundle: a visitor only downloads the data for the page they actually open.
const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("@/pages/About").then((m) => ({ default: m.About })));
const Blog = lazy(() => import("@/pages/Blog").then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import("@/pages/BlogPost").then((m) => ({ default: m.BlogPost })));
const Pricing = lazy(() => import("@/pages/Pricing").then((m) => ({ default: m.Pricing })));
const Contact = lazy(() => import("@/pages/Contact").then((m) => ({ default: m.Contact })));
const OnPageSEO = lazy(() => import("@/pages/services/OnPageSEO").then((m) => ({ default: m.OnPageSEO })));
const TechnicalSEO = lazy(() => import("@/pages/services/TechnicalSEO").then((m) => ({ default: m.TechnicalSEO })));
const AEO = lazy(() => import("@/pages/services/AEO").then((m) => ({ default: m.AEO })));
const GEO = lazy(() => import("@/pages/services/GEO").then((m) => ({ default: m.GEO })));
const LocalSEO = lazy(() => import("@/pages/services/LocalSEO").then((m) => ({ default: m.LocalSEO })));
const InternationalSEO = lazy(() => import("@/pages/services/InternationalSEO").then((m) => ({ default: m.InternationalSEO })));
const SEOAudit = lazy(() => import("@/pages/services/SEOAudit").then((m) => ({ default: m.SEOAudit })));
const SEOPackages = lazy(() => import("@/pages/services/SEOPackages").then((m) => ({ default: m.SEOPackages })));
const SEODubai = lazy(() => import("@/pages/locations/SEODubai").then((m) => ({ default: m.SEODubai })));
const SEOAbuDhabi = lazy(() => import("@/pages/locations/SEOAbuDhabi").then((m) => ({ default: m.SEOAbuDhabi })));
const SEOUAE = lazy(() => import("@/pages/locations/SEOUAE").then((m) => ({ default: m.SEOUAE })));
const EcommerceSEO = lazy(() => import("@/pages/industries/EcommerceSEO").then((m) => ({ default: m.EcommerceSEO })));
const RealEstateSEO = lazy(() => import("@/pages/industries/RealEstateSEO").then((m) => ({ default: m.RealEstateSEO })));
const B2BSEO = lazy(() => import("@/pages/industries/B2BSEO").then((m) => ({ default: m.B2BSEO })));
const HospitalitySEO = lazy(() => import("@/pages/industries/HospitalitySEO").then((m) => ({ default: m.HospitalitySEO })));
const HealthcareSEO = lazy(() => import("@/pages/industries/HealthcareSEO").then((m) => ({ default: m.HealthcareSEO })));
const LegalSEO = lazy(() => import("@/pages/industries/LegalSEO").then((m) => ({ default: m.LegalSEO })));
const KeywordPage = lazy(() => import("@/pages/KeywordPage").then((m) => ({ default: m.KeywordPage })));
const ServicesDirectory = lazy(() => import("@/pages/ServicesDirectory").then((m) => ({ default: m.ServicesDirectory })));
const Admin = lazy(() => import("@/pages/Admin").then((m) => ({ default: m.Admin })));
const LeadsAdmin = lazy(() => import("@/pages/LeadsAdmin").then((m) => ({ default: m.LeadsAdmin })));
const IcpFinder = lazy(() => import("@/pages/IcpFinder").then((m) => ({ default: m.IcpFinder })));
const SeoOptimizer = lazy(() => import("@/pages/SeoOptimizer").then((m) => ({ default: m.SeoOptimizer })));
const Website20AED = lazy(() => import("@/pages/Website20AED").then((m) => ({ default: m.Website20AED })));
const FreeSEOAudit = lazy(() => import("@/pages/FreeSEOAudit").then((m) => ({ default: m.FreeSEOAudit })));

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/on-page-seo" component={OnPageSEO} />
      <Route path="/technical-seo" component={TechnicalSEO} />
      <Route path="/aeo" component={AEO} />
      <Route path="/geo" component={GEO} />
      <Route path="/local-seo" component={LocalSEO} />
      <Route path="/international-seo" component={InternationalSEO} />
      <Route path="/seo-audit" component={SEOAudit} />
      <Route path="/seo-packages" component={SEOPackages} />
      <Route path="/seo-dubai" component={SEODubai} />
      <Route path="/seo-abu-dhabi" component={SEOAbuDhabi} />
      <Route path="/seo-uae" component={SEOUAE} />
      <Route path="/ecommerce-seo" component={EcommerceSEO} />
      <Route path="/real-estate-seo" component={RealEstateSEO} />
      <Route path="/b2b-seo" component={B2BSEO} />
      <Route path="/seo-for-restaurants" component={HospitalitySEO} />
      <Route path="/seo-for-healthcare" component={HealthcareSEO} />
      <Route path="/seo-for-law-firms" component={LegalSEO} />
      <Route path="/free-seo-audit" component={FreeSEOAudit} />
      <Route path="/seo-services" component={ServicesDirectory} />
      <Route path="/admin" component={Admin} />
      <Route path="/leads-admin" component={LeadsAdmin} />
      <Route path="/icp-finder" component={IcpFinder} />
      <Route path="/seo-optimizer" component={SeoOptimizer} />
      <Route path="/website-20-aed" component={Website20AED} />
      <Route path="/:slug" component={KeywordPage} />
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
