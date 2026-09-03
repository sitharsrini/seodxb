import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { clampTitle } from "@/lib/title";
import "./CreatiieHome.css";

const ease = [0.16, 1, 0.3, 1] as const;
const WA_NUMBER = "971521551198";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi SEODXB, I want to start a project.")}`;
const HOME_TITLE = "SEODXB | Dubai SEO, AEO, ERP and Ecommerce";
const HOME_DESC =
  "Dubai studio for SEO, AEO and GEO, SME ERP websites, ecommerce storefronts and social media design. Rank on Google and get cited by ChatGPT.";
const HOME_H1 = "SEODXB Dubai: SEO, SME ERP websites, ecommerce and social media design";

const assets = {
  hero: "/creatiie/02RFtEx03DTNa37qOwrWcR7cP8.png",
  hills: "/creatiie/iheh57SbwDCbLIJPfTCJqC9yGG4.png",
  finale: "/creatiie/SH2m0pFPxiO8aVxuEubFLarw.png",
  avatar: "/creatiie/E7f79nEDRGzDCkhH5mlarA7cSg.png",
  waxy: "/creatiie/znXqFkx9LjehWSq2WfUEh4LPy5U.png",
  krem: "/creatiie/K87SX3M84vNEKo3j5V8a8wlfXc.png",
  sunoma: "/creatiie/qUPvJEOwepRQhRhXI9X3l29I8lo.png",
  wild: "/creatiie/mSI7LV77J40dqjsbbhkxwDkZTYI.png",
  miro: "/creatiie/VKPor4uuQ8BvuS83XQkWUvyrE.png",
  a1: "/creatiie/wLBoJ9BCkRs3UCkjTtmfCK1rkE0.png",
  a2: "/creatiie/oUYOOcFyMLi5tQv0nH3fsUrpzSY.png",
  a3: "/creatiie/WNqYeGrXB91V12UZQxEg25Buuw.png",
};

const projects = [
  { id: "p1", title: "Atlas ERP", meta: "SME ERP website  ·  2026", img: assets.waxy, className: "p1", href: "/b2b-seo", alt: "Atlas ERP website for SME operators in Dubai" },
  { id: "p2", title: "Souqly", meta: "Ecommerce  ·  2026", img: assets.krem, className: "p2", href: "/ecommerce-seo", alt: "Souqly ecommerce storefront designed for search and conversion" },
  { id: "p3", title: "Rankwell", meta: "Search  ·  2026", img: assets.sunoma, className: "p3", href: "/on-page-seo", alt: "Rankwell search visibility work for Google and AI answers" },
  { id: "p4", title: "Pulse", meta: "Social media  ·  2026", img: assets.wild, className: "p4", href: "/contact", alt: "Pulse social media design system" },
  { id: "p5", title: "Gulfstore", meta: "Storefront  ·  2026", img: assets.miro, className: "p5", href: "/website-20-aed", alt: "Gulfstore live ecommerce storefront" },
];

const work = [
  {
    title: "SME ERP websites",
    copy: "Operator-first sites for factories, traders and distributors. Ledgers, SKUs, and live stock in one place.",
    color: "#fbd7d3",
    icon: "#e85d5c",
    glyph: "▣",
    href: "/b2b-seo",
  },
  {
    title: "Ecommerce sites",
    copy: "Storefronts that sell. Catalog, checkout, and product pages built to convert on mobile first.",
    color: "#d7e9fb",
    icon: "#3a8ef0",
    glyph: "↗",
    href: "/ecommerce-seo",
  },
  {
    title: "Search visibility",
    copy: "Google, Maps, and AI answers. Pages that get found, cited, and clicked.",
    color: "#f3eeb4",
    icon: "#e2b400",
    glyph: "◈",
    href: "/on-page-seo",
  },
  {
    title: "Social media design",
    copy: "Feed systems, ad creatives, and brand kits that stay consistent across every channel.",
    color: "#d4f5d9",
    icon: "#3cc56f",
    glyph: "✺",
    href: "/contact",
  },
  {
    title: "Live storefronts",
    copy: "Shipped websites, not mockups. Fast pages, clean structure, ready to run.",
    color: "#e6def8",
    icon: "#7b5cff",
    glyph: "▣",
    href: "/website-20-aed",
  },
];

const faqs = [
  {
    q: "What can you design?",
    a: "SME ERP websites, ecommerce storefronts, search systems, and social media design. One studio, one visual language.",
    className: "f1",
  },
  {
    q: "Do you ship live websites?",
    a: "Yes. Design and build land together so the site you approve is the site that goes live.",
    className: "f2",
  },
  {
    q: "How fast can we start?",
    a: "Most briefs start within a week. A clear homepage and catalog can ship in 2 to 4 weeks.",
    className: "f3",
  },
  {
    q: "What do you need from me?",
    a: "Your offer, a few product photos, and who you sell to. We handle structure, copy, and motion.",
    className: "f4",
  },
  {
    q: "Do you only design visuals?",
    a: "No. Visuals, pages, search, and social systems are designed as one piece of work.",
    className: "f5",
  },
];

function Paperclip({ color = "#9aa3ad" }: { color?: string }) {
  return (
    <svg className="clip paperclip" viewBox="0 0 18 34" fill="none" aria-hidden>
      <path
        d="M6.2 11.5v12.2a3.4 3.4 0 0 0 6.8 0V8.2a5.1 5.1 0 0 0-10.2 0v14.6"
        stroke={color}
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Googly({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 70 36" aria-hidden>
      <circle cx="16.8" cy="18.3" r="16.8" fill="#fff" />
      <circle cx="53.2" cy="18.3" r="16.8" fill="#fff" />
      <ellipse cx="10.5" cy="17.4" rx="6.44" ry="1.16" fill="#111" />
      <ellipse cx="46.9" cy="17.4" rx="6.44" ry="1.16" fill="#111" />
    </svg>
  );
}

function LimeCrescents() {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" aria-hidden>
      <path d="M18 72c22-34 62-44 92-28" stroke="#c4e727" strokeWidth="8" strokeLinecap="round" />
      <path d="M10 48c24-28 60-34 92-16" stroke="#d8f25a" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function Cube({ color = "#8b7cff" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      <path d="M14 3 25 9v10L14 25 3 19V9l11-6Z" fill={color} />
      <path d="M14 3v22M3 9l11 6 11-6" stroke="#fff" strokeOpacity=".45" />
    </svg>
  );
}

function Dock() {
  const reduce = useReducedMotion();
  const [, setLocation] = useLocation();
  const items = [
    { id: "about", href: "/about", src: "/creatiie/VCIQF7ylF9U0o5QZkTgji0mxx28.png", label: "About" },
    { id: "projects", href: "#projects", src: "/creatiie/jC3NYM1gkKdVNzokU0ojtj01asg.png", label: "Projects" },
    { id: "work", href: "#work", src: "/creatiie/EVSY45U60gTa9UjvovzPTZx7Hw.png", label: "Work" },
    { id: "contact", href: "#contact", src: "/creatiie/ZAH3C8amQUigspCjEG1FJWPjI.png", label: "Contact" },
  ];
  const [hover, setHover] = useState<number | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`dock-wrap${on ? " on" : ""}`}>
      <div className="dock" onMouseLeave={() => setHover(null)}>
        {items.map((item, i) => {
          const dist = hover === null ? 99 : Math.abs(hover - i);
          const scale = reduce ? 1 : hover === null ? 1 : dist === 0 ? 1.34 : dist === 1 ? 1.14 : 1;
          return (
            <motion.button
              key={item.id}
              type="button"
              onMouseEnter={() => setHover(i)}
              onClick={() => {
                if (item.href.startsWith("/")) setLocation(item.href);
                else document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              animate={{ scale, y: scale > 1.2 ? -10 : 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              aria-label={item.label}
            >
              <img src={item.src} alt="" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function Draggable({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div className={className} style={style} drag dragMomentum={false} whileDrag={{ scale: 1.05, zIndex: 20 }}>
      {children}
    </motion.div>
  );
}

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M16.004 2C8.28 2 2 8.28 2 15.998c0 2.477.648 4.797 1.777 6.82L2 30l7.395-1.742A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.002 30 8.28 23.72 2 16.004 2zm0 25.44a11.4 11.4 0 0 1-5.818-1.594l-.416-.248-4.39 1.034 1.057-4.27-.27-.437A11.4 11.4 0 0 1 4.56 16c0-6.318 5.128-11.44 11.444-11.44 6.318 0 11.44 5.122 11.44 11.44 0 6.316-5.122 11.44-11.44 11.44zm6.28-8.57c-.344-.172-2.035-1.003-2.35-1.118-.316-.115-.547-.172-.777.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.706-1.022-.913-1.713-2.04-1.912-2.384-.2-.344-.021-.53.15-.702.154-.154.344-.402.516-.602.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.602-.086-.172-.777-1.875-1.065-2.566-.28-.674-.564-.582-.777-.593l-.662-.012c-.23 0-.602.086-.918.43-.316.344-1.205 1.177-1.205 2.87 0 1.692 1.234 3.33 1.406 3.56.172.23 2.43 3.71 5.887 5.203.823.355 1.465.567 1.967.726.826.263 1.578.226 2.172.137.662-.1 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z" />
    </svg>
  );
}

function MagneticButton({
  className,
  children,
  onClick,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const reduce = useReducedMotion();

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, ...style }}
      onClick={onClick}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

export function Home() {
  const reduce = useReducedMotion();
  const [openWork, setOpenWork] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState(false);

  const goContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const parallaxX = useTransform(mx, [0, 1], [-12, 12]);
  const parallaxY = useTransform(my, [0, 1], [-8, 8]);

  useEffect(() => {
    document.title = HOME_TITLE;
    const setMeta = (selector: string, content: string) => {
      document.querySelectorAll(selector).forEach((el) => el.setAttribute("content", content));
    };
    setMeta('meta[name="description"]', HOME_DESC);
    setMeta('meta[property="og:title"]', HOME_TITLE);
    setMeta('meta[property="og:description"]', HOME_DESC);
    setMeta('meta[name="twitter:title"]', HOME_TITLE);
    setMeta('meta[name="twitter:description"]', HOME_DESC);
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  const float = useMemo(
    () =>
      reduce
        ? {}
        : {
            y: [0, -10, 0],
            rotate: [-2, 2, -2],
            transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
          },
    [reduce]
  );

  return (
    <div className="creatiie-home page">
      <Helmet prioritizeSeoTags>
        <title>{clampTitle(HOME_TITLE)}</title>
        <meta name="description" content={HOME_DESC} />
        <link rel="canonical" href="https://seodxb.com/" />
        <meta property="og:title" content={clampTitle(HOME_TITLE)} />
        <meta property="og:description" content={HOME_DESC} />
        <meta property="og:url" content="https://seodxb.com/" />
        <meta name="twitter:title" content={clampTitle(HOME_TITLE)} />
        <meta name="twitter:description" content={HOME_DESC} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>
      <div className="noise" />

      <header className="hero" id="top">
        <motion.div className="hero-photo" style={{ x: parallaxX, y: parallaxY }} />
        <div className="hero-inner">
          <div className="brand">SEODXB®</div>

          <motion.div
            className="avail"
            initial={reduce ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <img src={assets.avatar} alt="SEODXB Dubai studio" />
            <div>
              <small>
                <i className="dot" /> Available for work
              </small>
              <strong>SEODXB - DUBAI STUDIO</strong>
            </div>
          </motion.div>

          <div className="hero-copy">
            <p className="display">
              {["Design that", "makes", "people", "look twice"].map((line, i) => (
                <span className="hero-line" key={line}>
                  <motion.span
                    style={{ display: "block" }}
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.12 + i * 0.08, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </p>
          </div>

          <motion.div className="chip chip-erp" animate={float} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}>
            <span className="chip-icon" style={{ background: "#7b5cff" }}>
              <Cube />
            </span>
            <Paperclip />
            SME ERP
          </motion.div>
          <motion.div
            className="chip chip-ecom"
            animate={{ ...float, transition: { duration: 6.2, repeat: Infinity, ease: "easeInOut" } }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <span className="chip-icon" style={{ background: "#ef6aa0" }}>
              ◈
            </span>
            <Paperclip />
            Ecommerce
          </motion.div>
          <motion.div
            className="chip chip-seo"
            animate={{ ...float, transition: { duration: 4.8, repeat: Infinity, ease: "easeInOut" } }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <span className="chip-icon" style={{ background: "#8ed12a" }}>
              ↗
            </span>
            <Paperclip />
            SEO
          </motion.div>

          <h1 className="hero-note">
            {HOME_H1}
            <br />
            <em>Not just visuals. Digital work that looks alive.</em>
          </h1>

          <motion.a className="case-peek" href="#projects" whileHover={{ y: -6, rotate: -1 }}>
            <img src={assets.waxy} alt="Atlas ERP website preview" />
            <div>
              <small>STUDIO  ·  2026</small>
              <strong>ATLAS ERP</strong>
              <small>VIEW CASE STUDY</small>
            </div>
            <span className="arrow-btn">→</span>
          </motion.a>
        </div>
      </header>

      <section className="section center" id="about">
        <Draggable className="doodle" style={{ left: 40, top: 40 }}>
          <Googly className="eyes" />
        </Draggable>
        <Draggable className="doodle scribble" style={{ right: 80, top: 90, rotate: "12deg" }}>
          asaf sdag
        </Draggable>

        <motion.div
          className="pin-chip"
          initial={reduce ? false : { rotate: -18, y: 20 }}
          whileInView={{ rotate: -8, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="ic">◎</span>
          <Paperclip color="#7aa0c2" />
          About
        </motion.div>
        <motion.h2
          initial={reduce ? false : { y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          I make designs
          <br />
          people remember
        </motion.h2>
        <p className="lede">
          I design SME ERP websites, ecommerce, SEO for Google and AI search, and social media systems that help ideas look
          sharper, feel trusted, and work with purpose.
        </p>
        <MagneticButton className="cta-pin" onClick={goContact}>
          Start a project
          <i className="red-pin" />
        </MagneticButton>

        <div className="stats">
          {[
            ["8+", "Years of Experience", "Designing websites, apps, and digital products with a clear focus on usability."],
            ["40+", "Projects Designed", "From landing pages to mobile apps, and complete website experiences."],
            ["12+", "Industries explored", "Worked across SaaS, fintech, AI, agencies, finance, and trade businesses."],
            ["100%", "Shipped live", "Responsive websites designed, built, and published."],
          ].map((stat, i) => (
            <motion.article
              className="stat"
              key={stat[0]}
              initial={reduce ? false : { y: 40, rotate: i % 2 ? 8 : -8 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 120, damping: 16 }}
              whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
            >
              <span className="fold" />
              <b>{stat[0]}</b>
              <h3>{stat[1]}</h3>
              <p>{stat[2]}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-photo" />
        <div className="projects-head">
          <motion.div className="pin-chip" whileInView={{ rotate: -8 }} initial={{ rotate: -14 }}>
            <span className="ic">▣</span>
            <Paperclip />
            Projects
          </motion.div>
          <h2>
            Projects that
            <br />
            tell stories
          </h2>
        </div>
        <div className="board">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              className={`polaroid ${p.className}`}
              drag
              dragMomentum={false}
              initial={reduce ? false : { y: 50, scale: 0.92 }}
              whileInView={{ y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 140, damping: 16 }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 8 }}
            >
              <Paperclip color={["#8ad", "#c9e24a", "#7aa0ff", "#8ad", "#7aa0ff"][i]} />
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <img src={p.img} alt={p.alt} />
              <div className="polaroid-meta">
                <strong>{p.title}</strong>
                <span>{p.meta}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="section work center" id="work">
        <Draggable className="doodle" style={{ left: 48, top: 40 }}>
          <LimeCrescents />
        </Draggable>
        <Draggable className="doodle" style={{ right: 70, top: 90 }}>
          <Googly className="eyes" />
        </Draggable>
        <Draggable className="doodle scribble" style={{ right: 120, top: 40, rotate: "-8deg" }}>
          uma naw
        </Draggable>

        <motion.div className="pin-chip">
          <span className="ic">▣</span>
          <Paperclip />
          Work
        </motion.div>
        <h2>
          where i
          <br />
          can help you
        </h2>

        <div className="rows">
          {work.map((item, i) => (
            <motion.div
              key={item.title}
              className="row"
              style={{ background: item.color }}
              onClick={() => setOpenWork(openWork === i ? null : i)}
              layout
              initial={reduce ? false : { y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, layout: { type: "spring", stiffness: 260, damping: 26 } }}
              whileHover={{ x: 8, scale: 1.01 }}
            >
              <div>
                <h3>
                  <a href={item.href} onClick={(e) => e.stopPropagation()}>
                    {item.title}
                  </a>
                </h3>
                <AnimatePresence>
                  {openWork === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {item.copy}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <span className="row-ic" style={{ background: item.icon }}>
                {item.glyph}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section center" id="reviews">
        <motion.div className="pin-chip">
          <span className="ic">★</span>
          <Paperclip />
          Reviews
        </motion.div>
        <h2>
          Clients liked
          <br />
          the pixels
        </h2>
        <div className="reviews-wrap">
          {[
            {
              img: assets.a3,
              name: "Sarah M.",
              role: "Founder",
              quote: "The website finally feels like our brand.",
              body: "She turned our idea into a polished website that felt premium, and easy to understand.",
              brand: "Fitas",
              className: "r1",
            },
            {
              img: assets.a2,
              name: "Daniel R.",
              role: "Product Lead",
              quote: "The flow became much easier to use.",
              body: "She cleaned up the user journey, and made the product feel more focused and professional.",
              brand: "Bond",
              className: "r2",
            },
            {
              img: assets.a1,
              name: "Ayesha K.",
              role: "Creative Director",
              quote: "Sharp design without overcomplicating it.",
              body: "The final design looked modern, but still felt practical. Everything was ready to hand off.",
              brand: "Arsha.",
              className: "r3",
            },
          ].map((card, i) => (
            <motion.article
              key={card.name}
              className={`review ${card.className}`}
              drag
              dragMomentum={false}
              initial={reduce ? false : { y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ rotate: 0, y: -10, zIndex: 6 }}
            >
              <i className="red-pin" style={{ left: 18, top: 10, right: "auto" }} />
              <div className="who">
                <img src={card.img} alt="" />
                <div>
                  <strong>{card.name}</strong>
                  <div style={{ color: "#888", fontSize: 13 }}>{card.role}</div>
                </div>
              </div>
              <h4>“{card.quote}”</h4>
              <div className="stars">★★★★★</div>
              <div className="brand-row">{card.brand}</div>
              <p>{card.body}</p>
              <span className="corner" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section center" id="faqs" style={{ paddingTop: 40 }}>
        <motion.div className="pin-chip">
          <span className="ic">?</span>
          <Paperclip />
          FAQs
        </motion.div>
        <h2>
          Answer before
          <br />
          we starts
        </h2>
        <div className="faq-cloud">
          {faqs.map((item, i) => (
            <motion.button
              key={item.q}
              className={`faq ${item.className}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              layout
              whileHover={{ scale: 1.04, rotate: 0 }}
            >
              <div className="faq-top">
                <span>{item.q}</span>
                <b>{openFaq === i ? "−" : "+"}</b>
              </div>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.small initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {item.a}
                  </motion.small>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </section>

      <footer className="finale" id="footer">
        <div className="finale-card">
          <div className="finale-photo" />
          <div className="marquee">
            <span>let’s build something memorable  let’s build something memorable  </span>
          </div>
          <div className="finale-copy">
            <motion.div className="chip" style={{ position: "relative", display: "inline-flex", marginBottom: 12 }} animate={float}>
              <span className="chip-icon" style={{ background: "#ef6aa0" }}>
                ↗
              </span>
              <Paperclip />
              SEO
            </motion.div>
            <h2 style={{ color: "#fff", textTransform: "uppercase" }}>
              Let’s build
              <br />
              something
              <br />
              memorable
            </h2>
            <motion.div
              className="chip"
              style={{ position: "relative", display: "inline-flex", marginTop: 18 }}
              animate={float}
            >
              <span className="chip-icon" style={{ background: "#8ed12a" }}>
                ◈
              </span>
              <Paperclip />
              Social
            </motion.div>
            <motion.div
              className="chip"
              style={{ position: "relative", display: "inline-flex", margin: "12px 0 0 18px" }}
              animate={float}
            >
              <span className="chip-icon" style={{ background: "#7b5cff" }}>
                <Cube />
              </span>
              <Paperclip />
              SME ERP
            </motion.div>
          </div>
          <MagneticButton className="chat" onClick={goContact}>
            Let's chat
          </MagneticButton>
        </div>

        <section className="contact-block" id="contact">
          <motion.div className="pin-chip">
            <span className="ic">✉</span>
            <Paperclip />
            Contact
          </motion.div>
          <h2>
            Have an idea?
            <br />
            Let’s talk
          </h2>
          <p className="lede" style={{ maxWidth: 560 }}>
            Tell us about the ERP website, store, search, or social system you want built.
          </p>

          <div className="contact-grid">
            <article className="contact-card">
              <i className="red-pin" style={{ left: 22, top: 14, right: "auto" }} />
              {sent ? (
                <div className="contact-done">
                  <h3>Got it.</h3>
                  <p>We will come back with a clear next step. You can also ping us on WhatsApp now.</p>
                  <a className="wa-inline" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={20} /> Open WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    const from_name = String(data.get("name") || "");
                    const reply_to = String(data.get("email") || "");
                    const phone = String(data.get("phone") || "");
                    const message = String(data.get("message") || "");
                    setSending(true);
                    setFormError(false);
                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          from_name,
                          reply_to,
                          phone,
                          message,
                          source: "home-creatiie",
                          page_path: "/",
                          page_url: "https://seodxb.com/",
                          page_title: "SEODXB home",
                        }),
                      });
                      if (!res.ok) throw new Error("failed");
                      setSent(true);
                      form.reset();
                    } catch {
                      setFormError(true);
                    } finally {
                      setSending(false);
                    }
                  }}
                >
                  <label>
                    Name
                    <input name="name" required autoComplete="name" placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                  </label>
                  <label>
                    Phone
                    <input name="phone" type="tel" autoComplete="tel" placeholder="+971 50 000 0000" />
                  </label>
                  <label>
                    What are we making?
                    <textarea name="message" required rows={4} placeholder="SME ERP website, ecommerce, search, social..." />
                  </label>
                  <div className="contact-actions">
                    <button type="submit" disabled={sending}>
                      {sending ? "Sending..." : "Send"}
                    </button>
                    <a className="wa-inline" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon size={20} /> WhatsApp
                    </a>
                  </div>
                  {formError && (
                    <p className="wa-note">Could not send just now. Use WhatsApp and we will pick it up immediately.</p>
                  )}
                </form>
              )}
            </article>

            <aside className="wa-panel">
              <a className="wa-card" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <span className="wa-badge">
                  <WhatsAppIcon size={32} />
                </span>
                <strong>WhatsApp</strong>
                <span>+971 52 155 1198</span>
                <em>Usually replies in minutes</em>
              </a>
              <p className="wa-note">Prefer a call? Same number. Dubai studio, available for work.</p>
            </aside>
          </div>
        </section>

        <div className="bottombar">
          <div>SEODXB®</div>
          <nav>
            <a href="/about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#projects">PROJECTS</a>
            <a href="/blog">JOURNAL</a>
            <a href="/pricing">PRICING</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </footer>

      <Dock />

      <a className="wa-fab" href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon size={30} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
