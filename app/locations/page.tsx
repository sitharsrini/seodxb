import Link from "next/link";

export const metadata = {
  title: "SEO Services by Dubai Area | Marina, Downtown, JLT, Business Bay & More",
  description: "Hyper-local SEO for every major Dubai neighbourhood. We have proven playbooks for Dubai Marina, Downtown Dubai, JLT, Business Bay, Jumeirah, DIFC and 15+ other areas.",
};

const areas = [
  "Dubai Marina", "Downtown Dubai", "JLT", "Business Bay", "DIFC", "Jumeirah", 
  "Dubai Hills", "Dubai Silicon Oasis", "Deira", "Bur Dubai", "Al Barsha", 
  "Arabian Ranches", "Palm Jumeirah", "Meydan", "Dubai South"
];

export default function LocationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl tracking-[-2px] font-semibold">Local SEO that wins every Dubai neighbourhood.</h1>
      <p className="mt-4 text-xl text-gray-600">We have delivered results in every major micro-market. Click any area to see our specialised playbook.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        {areas.map((area, i) => (
          <Link 
            key={i} 
            href={`/seo-for-restaurants-${area.toLowerCase().replace(/\s+/g, '-')}`} 
            className="p-5 border rounded-2xl hover:border-[#00A896] text-sm font-medium transition"
          >
            {area}
          </Link>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500">Don't see your exact area? We have playbooks for 30+ Dubai communities. <Link href="/contact" className="text-[#00A896]">Tell us where you operate →</Link></p>
    </div>
  );
}
