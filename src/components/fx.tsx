import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Icons ---------- */
const svg = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
export const ArrowUpRight = ({ size = 20 }: { size?: number }) => (
  <svg {...svg} width={size} height={size}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const MailIcon = () => (
  <svg {...svg}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 8 8 6 8-6" /></svg>
);
export const MenuIcon = ({ open }: { open: boolean }) => (
  <svg {...svg}>{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
);
export const ArrowLeft = () => (
  <svg {...svg}><path d="M19 12H5m6-6-6 6 6 6" /></svg>
);
export const ArrowRight = () => (
  <svg {...svg}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
);

/* ---------- Poster art for the ring cards (original, pure SVG) ---------- */
export function PosterArt({ kind, color }: { kind: "rings" | "sun" | "arch" | "stripes" | "waves" | "grid"; color: string }) {
  const common = { className: "absolute inset-0 h-full w-full", viewBox: "0 0 200 260", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true } as const;
  switch (kind) {
    case "rings":
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth="1.4" opacity="0.55">
          {[26, 44, 62, 80, 98].map((r) => <circle key={r} cx="100" cy="112" r={r} />)}
          <circle cx="100" cy="112" r="6" fill={color} stroke="none" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="pa-sun" cx="50%" cy="40%" r="60%"><stop offset="0" stopColor={color} stopOpacity="1" /><stop offset="1" stopColor={color} stopOpacity="0.25" /></radialGradient>
          </defs>
          <circle cx="100" cy="118" r="62" fill="url(#pa-sun)" />
          <rect x="0" y="150" width="200" height="110" fill="#000" opacity="0.18" />
        </svg>
      );
    case "arch":
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth="22" strokeLinecap="round">
          <path d="M50 190V110a50 50 0 0 1 100 0v80" opacity="0.9" />
          <circle cx="100" cy="118" r="14" fill={color} stroke="none" opacity="0.9" />
        </svg>
      );
    case "stripes":
      return (
        <svg {...common} fill={color} opacity="0.9">
          {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={-20 + i * 42} y="40" width="16" height="230" transform="rotate(24 100 130)" />)}
        </svg>
      );
    case "waves":
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth="2" opacity="0.7">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M0 ${70 + i * 18} C 40 ${40 + i * 18}, 70 ${100 + i * 18}, 110 ${70 + i * 18} S 180 ${40 + i * 18}, 200 ${70 + i * 18}`} />)}
        </svg>
      );
    default:
      return (
        <svg {...common} fill={color} opacity="0.5">
          {Array.from({ length: 6 }).flatMap((_, r) => Array.from({ length: 5 }).map((__, c) => <circle key={`${r}-${c}`} cx={30 + c * 35} cy={50 + r * 30} r="3.4" />))}
        </svg>
      );
  }
}

/* ---------- Drag-to-spin 3D ring ---------- */
export interface RingItem {
  key: string;
  href: string;
  label: string;
  bg: string;
  fg: string;
  face: ReactNode;
}

export function SpinRing({ items }: { items: RingItem[] }) {
  const stage = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const tweenTo = useRef<((deg: number) => void) | null>(null);
  const n = items.length;
  const step = 360 / n;

  useEffect(() => {
    const el = stage.current;
    const r = ring.current;
    if (!el || !r) return;
    let ry = 0;
    let vel = 0;
    let drag = false;
    let hover = false;
    let moved = 0;
    let lastX = 0;
    let lastT = 0;
    let raf = 0;
    let visible = true;
    let tween: { from: number; to: number; start: number } | null = null;
    const auto = reduced() ? 0 : -0.011;

    const apply = () => r.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    const tick = (t: number) => {
      const dt = Math.min(50, t - (lastT || t));
      lastT = t;
      if (tween) {
        const p = Math.min(1, (t - tween.start) / 650);
        ry = tween.from + (tween.to - tween.from) * (1 - Math.pow(1 - p, 3));
        if (p >= 1) tween = null;
      } else if (!drag) {
        vel += ((hover ? 0 : auto) - vel) * 0.045;
        ry += vel * dt;
      }
      apply();
      raf = visible ? requestAnimationFrame(tick) : 0;
    };
    const start = () => {
      if (!raf && visible) {
        lastT = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    const down = (e: PointerEvent) => {
      drag = true;
      tween = null;
      moved = 0;
      lastX = e.clientX;
      el.setPointerCapture?.(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      moved += Math.abs(dx);
      ry += dx * 0.34;
      vel = dx * 0.34 / 16;
    };
    const up = (e: PointerEvent) => {
      drag = false;
      el.releasePointerCapture?.(e.pointerId);
    };
    const click = (e: MouseEvent) => {
      if (moved > 6) {
        e.preventDefault();
        e.stopPropagation();
        moved = 0;
      }
    };
    const enter = () => (hover = true);
    const leave = () => (hover = false);
    const focusIn = (e: FocusEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>("[data-i]");
      if (!card) return;
      const i = Number(card.dataset.i);
      const want = -i * step;
      const base = Math.round((ry - want) / 360) * 360;
      tween = { from: ry, to: want + base, start: performance.now() };
      start();
    };
    tweenTo.current = (deg: number) => {
      tween = { from: ry, to: ry + deg, start: performance.now() };
      start();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(el);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("click", click, true);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    el.addEventListener("focusin", focusIn);
    start();
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("click", click, true);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      el.removeEventListener("focusin", focusIn);
    };
  }, [step]);

  const style = { "--step": `${step}deg`, "--rk": (1 / (2 * Math.tan(Math.PI / n))) * 1.12 } as CSSProperties;
  return (
    <div>
      <div ref={stage} className="ring-stage" style={style}>
        <div ref={ring} className="ring">
          {items.map((it, i) => (
            <div key={it.key} className="ring-card" data-i={i} style={{ "--i": i } as CSSProperties}>
              <a href={it.href} aria-label={it.label} className="ring-face" draggable={false} style={{ background: it.bg, color: it.fg }}>
                {it.face}
              </a>
              <div className="ring-face back" aria-hidden="true" style={{ background: it.bg, color: it.fg }}>
                {it.face}
              </div>
            </div>
          ))}
        </div>
        <div className="ring-shadow" aria-hidden="true" />
      </div>
      <div className="mt-2 flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
        <button type="button" aria-label="Previous card" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white/80 transition hover:border-brand hover:text-brand" onClick={() => tweenTo.current?.(step)}>
          <ArrowLeft />
        </button>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
          Drag to spin
          <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
        </span>
        <button type="button" aria-label="Next card" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white/80 transition hover:border-brand hover:text-brand" onClick={() => tweenTo.current?.(-step)}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

/* ---------- Statement that lights up word by word as you scroll ---------- */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>(".sw-word"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.88 - rect.top) / (rect.height + vh * 0.38)));
      const lit = p * spans.length * 1.12;
      spans.forEach((s, i) => s.classList.toggle("lit", i < lit));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="sw-word">
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

/* ---------- Fanned stack of cards with next / previous ---------- */
export interface FanItem {
  key: string;
  kicker: string;
  title: string;
  body: string;
}
export function FanStack({ items }: { items: FanItem[] }) {
  const [active, setActive] = useState(0);
  const n = items.length;
  return (
    <div>
      <div className="fan" aria-live="polite">
        {items.map((it, i) => {
          const k = (i - active + n) % n;
          return (
            <article key={it.key} className="fan-card" data-k={k} style={{ "--k": k } as CSSProperties} aria-hidden={k !== 0}>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-70">{it.kicker}</p>
                <h3 className="mt-4 text-[26px] font-medium leading-tight tracking-tight">{it.title}</h3>
              </div>
              <p className="text-[17px] leading-relaxed opacity-90">{it.body}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-2 flex items-center gap-3">
        <button type="button" aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white transition hover:border-brand hover:text-brand" onClick={() => setActive((a) => (a - 1 + n) % n)}>
          <ArrowLeft />
        </button>
        <button type="button" aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white transition hover:bg-brand-dark" onClick={() => setActive((a) => (a + 1) % n)}>
          <ArrowRight />
        </button>
        <span className="ml-2 text-sm text-ink-soft">{active + 1} / {n}</span>
      </div>
    </div>
  );
}

/* ---------- Footer ribbon: tilted cards riding a wavy blue band (client only, decorative) ---------- */
const RW = 1440;
const ribbonPath = (() => {
  const pts: string[] = [];
  for (let k = 0; k <= 64; k++) {
    const x = -40 + (k * (RW + 80)) / 64;
    const y = 150 + 62 * Math.sin(x / 205 + 0.4) + 20 * Math.sin(x / 90);
    pts.push(`${k === 0 ? "M" : "L"}${Math.round(x)} ${Math.round(y)}`);
  }
  return pts.join(" ");
})();
const RIBBON_CARDS: { word: string; bg: string; fg: string }[] = [
  { word: "SEO", bg: "#ffffff", fg: "#1d5bff" },
  { word: "Ads", bg: "#1d5bff", fg: "#ffffff" },
  { word: "GEO", bg: "#0c3fd0", fg: "#ffffff" },
  { word: "Web", bg: "#dce7ff", fg: "#0c3fd0" },
  { word: "Leads", bg: "#ffffff", fg: "#151515" },
  { word: "AEO", bg: "#4f86ff", fg: "#ffffff" },
  { word: "Maps", bg: "#1b1c22", fg: "#ffffff" },
  { word: "Plan", bg: "#ffffff", fg: "#1d5bff" },
  { word: "KPIs", bg: "#1d5bff", fg: "#ffffff" },
];
export function Ribbon() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="ribbon" aria-hidden="true">
      {mounted && (
        <div className="ribbon-inner" style={{ "--rp": `path('${ribbonPath}')` } as CSSProperties}>
          <svg width={RW} height="280" viewBox={`0 0 ${RW} 280`} className="absolute inset-0" fill="none">
            <path d={ribbonPath} stroke="#1d5bff" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" />
            <path d={ribbonPath} stroke="#4f86ff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" transform="translate(0 -9)" />
          </svg>
          {RIBBON_CARDS.map((c, i) => (
            <div
              key={c.word}
              className="ribbon-card grid place-items-center text-[19px] font-bold tracking-tight"
              style={{ "--i": i, offsetPath: "var(--rp)", background: c.bg, color: c.fg } as CSSProperties}
            >
              {c.word}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
