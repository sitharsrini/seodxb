import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    { category: "SEO Strategy", title: "The Future of Search: Preparing for Generative AI in Dubai", excerpt: "Learn how generative engine optimization (GEO) is changing the landscape of search visibility for businesses in the UAE.", time: "5 min read", date: "Oct 12, 2023" },
    { category: "Technical SEO", title: "Why Core Web Vitals Matter More Than Ever", excerpt: "A deep dive into site speed, interactivity, and visual stability as crucial ranking factors for your website.", time: "8 min read", date: "Sep 28, 2023" },
    { category: "AEO", title: "Optimizing for Answer Engines: Position Zero Explained", excerpt: "How to structure your content so it gets picked up by voice assistants and featured snippets.", time: "6 min read", date: "Sep 15, 2023" },
    { category: "Local SEO", title: "Dominating Local Search in Dubai: A Practical Guide", excerpt: "Actionable steps to improve your Google Business Profile and local citations for maximum visibility.", time: "7 min read", date: "Aug 30, 2023" },
    { category: "Content", title: "Semantic SEO: Writing for Entities, Not Just Keywords", excerpt: "Move beyond keyword stuffing and learn how to build topical authority through entity-based content optimization.", time: "10 min read", date: "Aug 14, 2023" },
    { category: "Analytics", title: "Tracking What Matters: Metrics That Actually Drive Revenue", excerpt: "Stop focusing on vanity metrics. Here is how to measure SEO ROI effectively.", time: "4 min read", date: "Jul 22, 2023" },
  ];

  return (
    <div className="pt-32 pb-24 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-black mb-6">Latest Insights</h1>
        <p className="text-xl text-muted-foreground">Expert perspectives on SEO, AEO, GEO, and digital growth strategies for modern businesses.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:border-primary transition-colors cursor-pointer group rounded-3xl overflow-hidden shadow-sm">
              <CardContent className="p-8 flex flex-col h-full">
                <span className="text-xs font-bold text-primary tracking-wider uppercase mb-4 block">{post.category}</span>
                <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-6 mt-auto">
                  <span>{post.date} • {post.time}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
