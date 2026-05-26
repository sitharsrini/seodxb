import Link from "next/link";

export const metadata = {
  title: "Client Results & Case Studies | SEODXB",
  description: "Real results from SEODXB clients across Dubai and the UAE. Rankings, traffic, leads, and AI citations delivered through premium SEO, AEO and GEO.",
};

export default function ResultsPage() {
  const cases = [
    { industry: "Healthcare", client: "JLT Polyclinic", metric: "+287%", desc: "New patient inquiries. 31 keywords in top 3." },
    { industry: "Real Estate", client: "Business Bay Developer", metric: "4.8x", desc: "Qualified leads. 19 AI Overview citations." },
    { industry: "Hospitality", client: "Downtown 5-Star Hotel", metric: "2.9x", desc: "Direct bookings. OTA dependency down 27pts." },
    { industry: "Ecommerce", client: "Home & Living Brand", metric: "5.1x", desc: "Organic revenue growth in 9 months." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-6xl tracking-[-2.5px] font-semibold">Real results. No vanity metrics.</h1>
      <p className="mt-4 text-2xl text-gray-600">Every number below comes from a real client campaign we ran in the last 24 months.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {cases.map((c, i) => (
          <div key={i} className="p-9 border rounded-3xl">
            <div className="text-xs text-[#00A896] tracking-widest">{c.industry.toUpperCase()}</div>
            <div className="text-6xl font-semibold tracking-[-2px] mt-4 mb-1 text-[#0A2540]">{c.metric}</div>
            <div className="font-medium text-xl">{c.client}</div>
            <p className="mt-5 text-gray-600 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link href="/contact" className="text-[#00A896] font-semibold text-lg">See if we can deliver similar results for you →</Link>
      </div>
    </div>
  );
}
