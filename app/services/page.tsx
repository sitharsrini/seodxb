import Link from "next/link";

export const metadata = {
  title: "SEO Services Dubai | On-Page SEO, AEO, GEO & Technical",
  description: "Full suite of premium SEO services in Dubai: On-Page SEO, Technical SEO, Local SEO, Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO).",
};

export default function ServicesPage() {
  const services = [
    { title: "On-Page SEO", href: "/seo-agency-dubai", desc: "Technical excellence + content architecture that ranks and converts." },
    { title: "AEO & GEO", href: "/aeo-geo", desc: "Become the answer in ChatGPT, Perplexity, Gemini and Google AI Overviews." },
    { title: "Technical SEO", href: "/technical-seo-dubai", desc: "Audits, Core Web Vitals, crawl budget, schema, and international SEO." },
    { title: "Local SEO & Maps", href: "/local-seo-dubai", desc: "Own the map pack across every Dubai neighbourhood." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-6xl tracking-[-2.5px] font-semibold">Services designed for Dubai's most ambitious brands.</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {services.map((s, i) => (
          <Link key={i} href={s.href} className="group p-9 border rounded-3xl hover:border-[#00A896] transition flex flex-col">
            <div className="font-semibold text-3xl tracking-tight group-hover:text-[#00A896]">{s.title}</div>
            <p className="mt-auto pt-8 text-gray-600">{s.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-sm text-gray-500">All services include monthly strategy calls, transparent reporting, and direct access to the strategists doing the work.</div>
    </div>
  );
}
