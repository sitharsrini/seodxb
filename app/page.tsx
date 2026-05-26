import Link from "next/link";
import { ArrowRight, Check, Star, TrendingUp, Users, Award, Globe } from "lucide-react";

export default function SEODXBHomepage() {
  const trustStats = [
    { number: "150+", label: "Clients Served" },
    { number: "94%", label: "Avg. Ranking Lift" },
    { number: "3.2x", label: "Avg. Traffic Increase" },
    { number: "47", label: "AI Citations / Month" },
  ];

  const industries = [
    "Healthcare & Clinics", "Real Estate", "Restaurants & Hospitality", "Beauty & Aesthetics", 
    "Legal Firms", "Education & EdTech", "Ecommerce & Retail", "Fitness & Wellness",
    "Crypto & Web3", "Professional Services"
  ];

  const services = [
    {
      title: "On-Page SEO Mastery",
      desc: "Technical audits, content architecture, schema implementation, and page experience optimisation that Google loves.",
      href: "/seo-agency-dubai",
    },
    {
      title: "Answer Engine Optimisation (AEO)",
      desc: "We structure your content so it becomes the definitive answer in AI tools — ChatGPT, Perplexity, Google AI Overviews.",
      href: "/aeo-geo",
    },
    {
      title: "Generative Engine Optimisation (GEO)",
      desc: "Position your brand as the authoritative source that LLMs cite when users ask industry questions in the UAE.",
      href: "/aeo-geo",
    },
    {
      title: "Dubai Local & Maps SEO",
      desc: "Dominate Google Maps and local pack results across Dubai Marina, Downtown, JLT, Business Bay and 20+ areas.",
      href: "/locations",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 bg-[#0A2540] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-xs tracking-[2px] mb-6 font-medium">
            DUBAI-BASED • GLOBAL IMPACT
          </div>
          
          <h1 className="text-6xl md:text-7xl font-semibold tracking-[-3.2px] leading-[0.92] mb-6">
            We make your business<br />impossible to ignore.
          </h1>
          <p className="max-w-2xl mx-auto text-2xl md:text-3xl text-white/70 tracking-[-0.6px] font-light mb-10">
            Premium On-Page SEO, AEO &amp; GEO for ambitious brands in Dubai and the UAE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#00A896] hover:bg-[#008F7A] px-10 text-lg font-semibold transition-all active:scale-[0.985]"
            >
              Get Your Free SEO Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="#results" 
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 hover:bg-white/5 px-8 text-lg font-medium transition-all"
            >
              See Real Results
            </Link>
          </div>

          <div className="mt-8 text-sm text-white/50">Payment after visible rankings. No long-term contracts required.</div>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 py-3 text-center text-xs tracking-widest text-white/60 border-t border-white/10">
          FEATURED IN UAE BUSINESS MEDIA • 100% CLIENT RETENTION ON ACTIVE CAMPAIGNS
        </div>
      </section>

      {/* Trust Stats */}
      <section className="border-b bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustStats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-semibold tracking-tighter text-[#0A2540]">{stat.number}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why SEODXB */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="uppercase text-xs tracking-[3px] text-[#00A896] font-semibold mb-3">WHY LEADING BRANDS CHOOSE US</div>
            <h2 className="text-5xl tracking-[-2.2px] leading-none font-semibold">Not just rankings.<br />Authority that compounds.</h2>
          </div>
          <div className="md:col-span-7 text-lg text-gray-600 leading-relaxed">
            Most SEO agencies chase vanity metrics. We engineer <strong className="text-[#0A2540]">Experience, Expertise, Authoritativeness and Trust</strong> into every page — so Google and AI engines treat you as the definitive source in your category.
            <div className="mt-6 text-base">Our clients appear in Google AI Overviews, ChatGPT answers, and Perplexity citations because we build content that machines and humans both trust.</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs uppercase tracking-[3px] text-[#00A896]">OUR EXPERTISE</div>
              <h3 className="text-4xl tracking-[-1.8px] font-semibold mt-1">Services that move the needle</h3>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-sm font-medium text-[#00A896] hover:underline">
              Explore all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group block bg-white p-7 rounded-3xl border hover:border-[#00A896]/50 hover:shadow-sm transition-all h-full">
                <div className="font-semibold text-xl tracking-[-0.5px] mb-4 group-hover:text-[#00A896]">{service.title}</div>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <div className="mt-8 text-[#00A896] flex items-center gap-1 text-sm font-medium">Learn more <ArrowRight className="group-hover:translate-x-0.5 transition" size={15} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Dominate */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <div className="text-[#00A896] text-xs tracking-[3px] font-semibold">SPECIALISED VERTICAL EXPERTISE</div>
          <h3 className="mt-2 text-4xl font-semibold tracking-[-1.5px]">Industries where we deliver exceptional results</h3>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map((ind, i) => (
            <div key={i} className="px-6 py-2.5 rounded-full border text-sm text-[#0A2540] hover:bg-[#0A2540] hover:text-white transition cursor-default">
              {ind}
            </div>
          ))}
        </div>

        <div className="text-center mt-9">
          <Link href="/services" className="text-sm font-medium inline-flex items-center gap-2 text-[#00A896]">
            Browse all 40+ industry solutions <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Results / Proof */}
      <section id="results" className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="uppercase tracking-[2.5px] text-xs text-[#00A896]">REAL OUTCOMES. NO FLUFF.</div>
            <h3 className="text-5xl tracking-[-2px] font-semibold mt-3">Results from our Dubai clients in the last 18 months</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { client: "Premium Aesthetic Clinic, JLT", metric: "+312%", detail: "Organic appointments in 7 months. #1 for 18 high-intent keywords.", area: "Healthcare" },
              { client: "Leading Dubai Real Estate Developer", metric: "+4.8x", detail: "Qualified leads from organic. Now appearing in 11 AI Overview answers.", area: "Real Estate" },
              { client: "3-Michelin Star Restaurant Group", metric: "Top 3", detail: "For 47 transactional keywords. 41% of reservations now come from search.", area: "Hospitality" },
            ].map((r, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-[#00A896] text-xs tracking-widest mb-2">{r.area.toUpperCase()}</div>
                <div className="text-6xl font-semibold tracking-[-2.5px] text-white mb-2">{r.metric}</div>
                <div className="font-medium mb-4 text-lg">{r.client}</div>
                <p className="text-white/70 text-[15px] leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/results" className="inline-flex items-center text-sm font-medium text-[#00A896] hover:underline">View full case studies &amp; methodology →</Link>
          </div>
        </div>
      </section>

      {/* E-E-A-T + AI Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline px-3 py-1 text-xs font-semibold tracking-widest rounded bg-emerald-100 text-emerald-700">E-E-A-T + AI SEARCH READY</div>
          <h3 className="mt-5 text-5xl tracking-[-1.8px] font-semibold">Built for both Google and the new AI search engines.</h3>
          <p className="mt-6 text-xl text-gray-600">Every page we deliver is engineered with clear authorship, verifiable experience, first-hand data, and structured content that AI models prefer to cite.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
          {[
            { icon: <Award />, title: "Experience", text: "We document real campaign data, client interviews, and on-the-ground Dubai market insights." },
            { icon: <Users />, title: "Expertise", text: "Deep vertical playbooks written by specialists who have ranked 200+ UAE sites." },
            { icon: <Globe />, title: "Authoritativeness", text: "We earn citations from reputable UAE publications and build entity signals that last." },
          ].map((item, i) => (
            <div key={i} className="p-7 rounded-2xl bg-white border">
              <div className="text-[#00A896] mb-4">{item.icon}</div>
              <div className="font-semibold text-xl tracking-tight mb-2">{item.title}</div>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-16 border-t">
        <div className="max-w-xl mx-auto text-center px-6">
          <h3 className="text-4xl font-semibold tracking-tight">Ready to own your category in Dubai?</h3>
          <p className="mt-3 text-lg text-gray-600">Get a complimentary technical + AEO audit worth AED 4,500. No obligation.</p>
          
          <Link href="/contact" className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#0A2540] px-10 text-lg text-white font-semibold hover:bg-black transition">
            Request My Free Audit <ArrowRight />
          </Link>
          <div className="text-xs text-gray-500 mt-4">Results typically visible within 60-90 days for competitive terms.</div>
        </div>
      </section>
    </div>
  );
}
