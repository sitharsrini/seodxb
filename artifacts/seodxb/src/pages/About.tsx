import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-black mb-6"
          >
            We Are SEODXB
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            A premier SEO agency based in Dubai, dedicated to transforming online visibility through cutting-edge On-Page SEO, AI Search Optimization (AEO), and Generative Engine Optimization (GEO).
          </motion.p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe that exceptional products and services deserve to be found. Our mission is to bridge the gap between great businesses and the people actively searching for them, using the most advanced search optimization strategies available.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just chase algorithms; we anticipate where search is heading. By integrating AEO and GEO into our core offerings, we ensure our clients remain visible not just on Google, but across the entire spectrum of emerging AI discovery platforms.
            </p>
          </div>
          <div className="bg-primary/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="text-2xl font-bold mb-8">Our Core Values</h3>
            <ul className="space-y-6">
              {[
                { title: "Transparency", desc: "Clear reporting, honest expectations, and open communication." },
                { title: "Innovation", desc: "Staying ahead of the curve with AI and generative search trends." },
                { title: "Excellence", desc: "Delivering pixel-perfect, highly optimized technical solutions." }
              ].map((v, i) => (
                <li key={i}>
                  <h4 className="font-bold text-lg">{v.title}</h4>
                  <p className="text-muted-foreground">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-8">Ready to Dominate Search?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Partner with the agency that understands the future of search in Dubai and beyond.
          </p>
          <Button size="lg" className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-8" asChild>
            <Link href="/contact">Let's Talk Strategy</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
