import React from "react";
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

import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { Pricing } from "@/pages/Pricing";
import { Contact } from "@/pages/Contact";
import { OnPageSEO } from "@/pages/services/OnPageSEO";
import { TechnicalSEO } from "@/pages/services/TechnicalSEO";
import { AEO } from "@/pages/services/AEO";
import { GEO } from "@/pages/services/GEO";
import { LocalSEO } from "@/pages/services/LocalSEO";
import { InternationalSEO } from "@/pages/services/InternationalSEO";

const queryClient = new QueryClient();

function Router() {
  return (
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
      <Route component={NotFound} />
    </Switch>
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
