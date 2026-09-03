import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { clampTitle } from "@/lib/title";
import { blogIndex } from "@/data/blogIndex";
import { imageForPage } from "@/lib/pageImages";

const categoryColors: Record<string, string> = {
  "SEO Strategy": "text-blue-600 bg-blue-50",
  "Technical SEO": "text-purple-600 bg-purple-50",
  "AEO": "text-green-600 bg-green-50",
  "GEO": "text-indigo-600 bg-indigo-50",
  "Local SEO": "text-orange-600 bg-orange-50",
  "Content": "text-pink-600 bg-pink-50",
  "Analytics": "text-teal-600 bg-teal-50",
  "Link Building": "text-amber-600 bg-amber-50",
  "Ecommerce SEO": "text-rose-600 bg-rose-50",
};

export function Blog() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("SEO Blog Dubai - Insights on SEO, AEO & AI Search | SEODXB")}</title>
        <meta name="description" content="Expert SEO insights for Dubai businesses: On-Page SEO, AEO, GEO, Core Web Vitals, and local search strategies that rank." />
        <link rel="canonical" href="https://seodxb.com/blog" />
        <meta property="og:title" content="SEO Blog Dubai - Insights on SEO, AEO & AI Search | SEODXB" />
        <meta property="og:description" content="Expert SEO insights and guides for Dubai businesses covering modern search optimisation strategies." />
        <meta property="og:url" content="https://seodxb.com/blog" />
      </Helmet>
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">Insights</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-[-0.03em] mb-4">Latest Insights</h1>
          <p className="text-lg text-gray-500">Expert perspectives on SEO, AEO, GEO, and digital growth strategies for modern businesses.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogIndex.slice(0, 9).map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="block h-full group">
              <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-200">
                <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                  <img
                    src={post.image || imageForPage({ slug: post.slug, category: post.category, title: post.title }).src}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                <span className={`text-xs font-bold tracking-wider uppercase mb-4 inline-block px-3 py-1 rounded-full w-fit ${categoryColors[post.category] || "text-primary bg-primary/10"}`}>
                  {post.category}
                </span>
                <h3 className="text-xl font-black leading-snug mb-3 group-hover:text-primary transition-colors tracking-[-0.01em]">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-100 pt-5">
                  <span>{post.date}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 group-hover:text-primary transition-all text-gray-300" />
                </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {blogIndex.length > 9 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-black mb-6 tracking-tight">All articles ({blogIndex.length})</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {blogIndex.slice(9).map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="flex items-center gap-3 border border-gray-100 rounded-2xl p-3 hover:border-primary/40 hover:bg-slate-50 transition-colors group">
                  <img
                    src={post.image || imageForPage({ slug: post.slug, category: post.category, title: post.title }).src}
                    alt=""
                    className="w-16 h-12 rounded-lg object-cover shrink-0"
                    loading="lazy"
                    width={64}
                    height={48}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary shrink-0 w-16">{post.category}</span>
                  <span className="font-semibold text-gray-900 group-hover:text-primary leading-snug">{post.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 max-w-2xl mx-auto text-center bg-primary text-white rounded-3xl p-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-3 text-white/60">Stay Updated</p>
          <h2 className="text-3xl font-black mb-3 tracking-tight">Get SEO Insights for Dubai Businesses</h2>
          <p className="text-white/70 text-sm mb-6">Practical strategies, case studies, and industry analysis delivered to your inbox.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors text-sm">
            Get in Touch <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
