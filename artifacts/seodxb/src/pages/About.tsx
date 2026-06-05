import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Users, FileSearch, Globe } from "lucide-react";

const faqs = [
  {
    q: "Who is SEODXB and who runs it?",
    a: "SEODXB is a Dubai-based SEO agency founded and run by Srinivasan R, an SEO strategist with hands-on experience in technical SEO, Answer Engine Optimisation (AEO), and Generative Engine Optimisation (GEO). Every strategy, audit, and deliverable goes through Srinivasan directly - there is no account manager layer between you and the work.",
  },
  {
    q: "What makes SEODXB different from other Dubai SEO agencies?",
    a: "Three things stand out: we specialise in AEO and GEO alongside traditional SEO, which most local agencies do not offer; our pricing is published openly on the website with no hidden fees; and we do not lock clients into long contracts. You stay because results are happening, not because a contract forces you to.",
  },
  {
    q: "What is AEO and GEO, and why does it matter?",
    a: "Answer Engine Optimisation (AEO) targets the featured snippets, People Also Ask boxes, and voice search answers that appear above the standard 10 blue links. Generative Engine Optimisation (GEO) prepares your content to be cited by AI tools like ChatGPT, Perplexity, and Google AI Overviews. Together, they extend your visibility into the parts of search that traditional SEO cannot reach.",
  },
  {
    q: "Does SEODXB work with businesses outside Dubai?",
    a: "Yes. While most clients are based in Dubai and the UAE, we work with businesses across the GCC and internationally. The technical and content work we do is location-agnostic, though we have particular depth in UAE market dynamics, Arabic-language search behaviour, and the competitive landscape across Dubai verticals.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. Retainers run month to month. We believe the work should earn your renewal, not a signed agreement. If you ever want to pause or stop, you give 30 days notice and that is it.",
  },
  {
    q: "How do you report on progress?",
    a: "You receive a monthly report covering keyword rank movements, AEO snippet and PAA ownership, organic traffic trends, and a plain-language summary of what was done and what is planned next. There is no jargon for the sake of it - if a number moved, we explain why.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Srinivasan R",
  jobTitle: "SEO Strategist and Founder",
  url: "https://www.linkedin.com/in/srinivasanram163/",
  sameAs: ["https://www.linkedin.com/in/srinivasanram163/"],
  worksFor: {
    "@type": "Organization",
    name: "SEODXB",
    url: "https://seodxb.com",
  },
  knowsAbout: [
    "Search Engine Optimisation",
    "Answer Engine Optimisation",
    "Generative Engine Optimisation",
    "Technical SEO",
    "AI Search",
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SEODXB",
  url: "https://seodxb.com",
  logo: "https://seodxb.com/logo.png",
  description:
    "Dubai SEO agency specialising in AEO, GEO, and technical SEO for UAE businesses.",
  founder: {
    "@type": "Person",
    name: "Srinivasan R",
  },
  areaServed: ["Dubai", "UAE", "GCC"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://seodxb.com/contact",
  },
};

const differentiators = [
  {
    icon: <Globe size={22} className="text-primary" />,
    title: "AEO + GEO + Traditional SEO",
    desc: "Most agencies are still focused on the 10 blue links. We cover those too, but we also build for featured snippets, People Also Ask, voice search, and AI citation - the surfaces that are growing fastest.",
  },
  {
    icon: <FileSearch size={22} className="text-primary" />,
    title: "Transparent pricing, no surprises",
    desc: "Every package and add-on is priced and published on the website. You know what you are paying before the first conversation, and there are no hidden fees added after the contract is signed.",
  },
  {
    icon: <Users size={22} className="text-primary" />,
    title: "No lock-in contracts",
    desc: "Retainers run month to month. We think long-term relationships are built on results, not paperwork. If the work is not producing, you should be free to stop.",
  },
];

const stats = [
  { figure: "600+", label: "Blog articles published for clients" },
  { figure: "1,200+", label: "Pages prerendered for AI crawlers" },
  { figure: "3-in-1", label: "AEO + GEO + Traditional SEO in one retainer" },
];

export function About() {
  return (
    <>
      <Helmet>
        <title>About SEODXB - Dubai SEO Agency | AEO, GEO & Technical SEO</title>
        <meta
          name="description"
          content="SEODXB is a Dubai SEO agency founded by Srinivasan R, specialising in AEO, GEO, and technical SEO for UAE businesses."
        />
        <link rel="canonical" href="https://seodxb.com/about" />
        <meta property="og:title" content="About SEODXB - Dubai SEO Agency" />
        <meta
          property="og:description"
          content="SEODXB is a Dubai SEO agency founded by Srinivasan R, specialising in AEO, GEO, and technical SEO for UAE businesses."
        />
        <meta property="og:url" content="https://seodxb.com/about" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="pt-24 pb-20">

        {/* Hero */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            >
              About SEODXB
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight"
            >
              A Dubai SEO Agency Built for How Search Works Now
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Search has changed. Featured snippets, AI Overviews, and generative tools now answer queries before users click a link. SEODXB was built to cover all of it: traditional ranking, AEO, and GEO - under one retainer, with transparent pricing and no long-term contracts.
            </motion.p>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24 container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                Founder
              </span>
              <h2 className="text-3xl font-heading font-bold mb-4">Srinivasan R</h2>
              <p className="text-base text-primary font-semibold mb-6">SEO Strategist and Founder</p>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Srinivasan R started SEODXB to address a gap he kept seeing: agencies offering SEO packages that had not evolved past 2019, while search results were filling up with featured snippets, PAA boxes, and AI-generated answers.
              </p>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                He specialises in the intersection of technical SEO, AEO, and GEO - structuring content and markup so it performs across both traditional search rankings and the AI surfaces that are increasingly where users actually look. His work has included prerendering pages for AI crawler access, building schema at scale, and developing answer-focused content strategies for UAE businesses across real estate, legal, healthcare, and B2B sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                He handles strategy and execution directly. Clients talk to the person doing the work.
              </p>
              <a
                href="https://www.linkedin.com/in/srinivasanram163/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Connect on LinkedIn
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary/5 border border-primary/10 rounded-3xl p-10"
            >
              <h3 className="text-xl font-bold mb-6">Areas of Expertise</h3>
              <ul className="space-y-4">
                {[
                  "Technical SEO audits and implementation",
                  "Answer Engine Optimisation (AEO)",
                  "Generative Engine Optimisation (GEO)",
                  "Schema markup and structured data",
                  "AI crawler access and prerendering",
                  "Content strategy for UAE markets",
                  "On-page optimisation at scale",
                  "Keyword research and search intent mapping",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Stats / Proof */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-heading font-bold text-center mb-12"
            >
              Work done across client projects
            </motion.h2>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200"
                >
                  <p className="text-4xl font-heading font-black text-primary mb-3">{s.figure}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What makes us different */}
        <section className="py-24 container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              What Makes Us Different
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Three things worth knowing before you compare agencies
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
              >
                <div className="mb-4">{d.icon}</div>
                <h3 className="text-lg font-bold mb-3">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Research first. Technical depth. AI-era focus.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Research first",
                  desc: "Every engagement starts with a technical audit and keyword gap analysis specific to your industry and UAE market positioning. We do not reuse templates. The research shapes the strategy.",
                },
                {
                  step: "02",
                  title: "Technical depth",
                  desc: "Core Web Vitals, crawlability, schema markup, internal linking, prerendering for JavaScript-heavy sites - these are not afterthoughts. Technical health is the foundation everything else rests on.",
                },
                {
                  step: "03",
                  title: "AI-era focus",
                  desc: "We structure content so it can be cited by AI tools, wins SERP features, and remains visible as search continues shifting toward generated answers. This is where search is going - we make sure your site is ready.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-5xl font-heading font-black text-primary/20 mb-4">{step.step}</p>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-heading font-bold">Questions we get asked often</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-slate-200 rounded-xl px-6 bg-white"
              >
                <AccordionTrigger className="text-left font-semibold text-base py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold mb-6"
            >
              Ready to talk about your SEO?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 mb-10 leading-relaxed"
            >
              Tell us where you are, what you are trying to rank for, and what has not worked so far. We will give you a straight answer on whether and how we can help.
            </motion.p>
            <Button
              size="lg"
              className="rounded-full bg-[#C8FF00] text-black hover:bg-[#b3e600] font-bold px-8"
              asChild
            >
              <Link href="/contact">
                Get in Touch <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </>
  );
}
