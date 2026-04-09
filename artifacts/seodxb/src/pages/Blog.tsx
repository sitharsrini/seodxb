import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "future-of-search-generative-ai-dubai",
    category: "SEO Strategy",
    title: "The Future of Search: Preparing for Generative AI in Dubai",
    excerpt: "Learn how generative engine optimization (GEO) is changing the landscape of search visibility for businesses in the UAE.",
    time: "5 min read",
    date: "Oct 12, 2023"
  },
  {
    slug: "core-web-vitals-matter",
    category: "Technical SEO",
    title: "Why Core Web Vitals Matter More Than Ever",
    excerpt: "A deep dive into site speed, interactivity, and visual stability as crucial ranking factors for your website.",
    time: "8 min read",
    date: "Sep 28, 2023"
  },
  {
    slug: "answer-engines-position-zero",
    category: "AEO",
    title: "Optimizing for Answer Engines: Position Zero Explained",
    excerpt: "How to structure your content so it gets picked up by voice assistants and featured snippets.",
    time: "6 min read",
    date: "Sep 15, 2023"
  },
  {
    slug: "local-search-dubai",
    category: "Local SEO",
    title: "Dominating Local Search in Dubai: A Practical Guide",
    excerpt: "Actionable steps to improve your Google Business Profile and local citations for maximum visibility.",
    time: "7 min read",
    date: "Aug 30, 2023"
  },
  {
    slug: "semantic-seo-entities-keywords",
    category: "Content",
    title: "Semantic SEO: Writing for Entities, Not Just Keywords",
    excerpt: "Move beyond keyword stuffing and learn how to build topical authority through entity-based content optimization.",
    time: "10 min read",
    date: "Aug 14, 2023"
  },
  {
    slug: "tracking-seo-metrics-revenue",
    category: "Analytics",
    title: "Tracking What Matters: Metrics That Actually Drive Revenue",
    excerpt: "Stop focusing on vanity metrics. Here is how to measure SEO ROI effectively.",
    time: "4 min read",
    date: "Jul 22, 2023"
  },
];

const categoryColors: Record<string, string> = {
  "SEO Strategy": "text-blue-600 bg-blue-50",
  "Technical SEO": "text-purple-600 bg-purple-50",
  "AEO": "text-green-600 bg-green-50",
  "Local SEO": "text-orange-600 bg-orange-50",
  "Content": "text-pink-600 bg-pink-50",
  "Analytics": "text-teal-600 bg-teal-50",
};

export function Blog() {
  return (
    <>
      <Helmet>
        <title>SEO Blog Dubai — Insights on SEO, AEO & AI Search | SEODXB</title>
        <meta name="description" content="Expert SEO insights for Dubai businesses. Learn about On-Page SEO, Answer Engine Optimisation, Generative Engine Optimisation, Core Web Vitals, and local SEO strategies." />
        <link rel="canonical" href="https://seodxb.com/blog" />
        <meta property="og:title" content="SEO Blog Dubai — Insights on SEO, AEO & AI Search | SEODXB" />
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
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <div className="bg-white border border-gray-200 rounded-3xl p-7 h-full flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-200">
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
                    <span>{post.date} &bull; {post.time}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1.5 group-hover:text-primary transition-all text-gray-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center bg-primary text-white rounded-3xl p-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-3 text-white/60">Stay Updated</p>
          <h2 className="text-3xl font-black mb-3 tracking-tight">Get SEO Insights for Dubai Businesses</h2>
          <p className="text-white/70 text-sm mb-6">Practical strategies, case studies, and industry analysis delivered to your inbox.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors text-sm">
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
