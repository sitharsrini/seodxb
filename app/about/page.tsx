import Link from "next/link";

export const metadata = {
  title: "About SEODXB | Dubai's Specialist SEO Agency",
  description: "Learn about SEODXB, the Dubai-based global SEO agency specialising in On-Page SEO, AEO and GEO. Founded by Kowmiya Annamalai. 150+ clients. Proven results.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <div className="uppercase text-xs tracking-[3px] text-[#00A896]">EST. 2019 • DUBAI</div>
        <h1 className="mt-4 text-6xl tracking-[-2.5px] font-semibold">We build search authority that lasts.</h1>
        <p className="mt-6 text-2xl text-gray-600 tracking-[-0.3px]">SEODXB was founded with a single obsession: making ambitious brands impossible to ignore in both traditional search and the new AI-powered discovery layer.</p>
      </div>

      <div className="mt-16 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="sticky top-24">
            <div className="font-semibold text-lg">Kowmiya Annamalai</div>
            <div className="text-[#00A896]">Co-Founder &amp; Principal Strategist</div>
            <p className="mt-4 text-gray-600">7+ years specialising in UAE and MENA SEO. Previously led growth at two of the region's fastest scaling consumer brands. Passionate about E-E-A-T, technical excellence, and the future of AI search.</p>
            <div className="mt-6 text-sm">LinkedIn: /in/kowmiya-annamalai</div>
          </div>
        </div>
        <div className="md:col-span-3 text-lg text-gray-700 leading-relaxed space-y-6">
          <p>We are a small, elite team. Every client gets direct access to senior strategists. No account managers who have never done the work.</p>
          <p>Our methodology combines rigorous technical SEO, deep vertical research, and the emerging science of Generative Engine Optimisation (GEO). We publish our frameworks publicly because we believe the best work comes from transparency and constant improvement.</p>
          <p className="font-medium">150+ clients. 94% see measurable ranking lifts within 120 days. Many now appear regularly in Google AI Overviews and ChatGPT answers for their categories.</p>
        </div>
      </div>

      <div className="mt-20 border-t pt-12">
        <Link href="/contact" className="text-lg font-semibold text-[#00A896] hover:underline">Work with us →</Link>
      </div>
    </div>
  );
}
