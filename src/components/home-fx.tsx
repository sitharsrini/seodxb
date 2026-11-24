import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight } from "./fx";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type ArtKind = "rings" | "sun" | "arch" | "stripes" | "waves" | "grid";

// Poster art as one background image, so the ring does not add a SVG node per shape.
function artSvg(kind: ArtKind, color: string): string {
  switch (kind) {
    case "rings":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none" stroke="${color}" stroke-width="1.4" opacity="0.55">${[26, 44, 62, 80, 98].map((r) => `<circle cx="100" cy="112" r="${r}"/>`).join("")}<circle cx="100" cy="112" r="6" fill="${color}" stroke="none"/></svg>`;
    case "sun":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><defs><radialGradient id="g" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="${color}"/><stop offset="1" stop-color="${color}" stop-opacity="0.25"/></radialGradient></defs><circle cx="100" cy="118" r="62" fill="url(#g)"/><rect x="0" y="150" width="200" height="110" fill="#000" opacity="0.18"/></svg>`;
    case "arch":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none" stroke="${color}" stroke-width="22" stroke-linecap="round"><path d="M50 190V110a50 50 0 0 1 100 0v80" opacity="0.9"/><circle cx="100" cy="118" r="14" fill="${color}" stroke="none" opacity="0.9"/></svg>`;
    case "stripes":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="${color}" opacity="0.9">${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${-20 + i * 42}" y="40" width="16" height="230" transform="rotate(24 100 130)"/>`).join("")}</svg>`;
    case "waves":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none" stroke="${color}" stroke-width="2" opacity="0.7">${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M0 ${70 + i * 18} C 40 ${40 + i * 18}, 70 ${100 + i * 18}, 110 ${70 + i * 18} S 180 ${40 + i * 18}, 200 ${70 + i * 18}"/>`).join("")}</svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="${color}" opacity="0.5">${Array.from({ length: 6 }, (_, r) => Array.from({ length: 5 }, (__, c) => `<circle cx="${30 + c * 35}" cy="${50 + r * 30}" r="3.4"/>`).join("")).join("")}</svg>`;
  }
}

const artCache = new Map<string, string>();
function artBackground(kind: ArtKind, color: string) {
  const key = `${kind}|${color}`;
  let url = artCache.get(key);
  if (!url) {
    url = `url("data:image/svg+xml,${encodeURIComponent(artSvg(kind, color))}")`;
    artCache.set(key, url);
  }
  return url;
}

export interface RingItem {
  key: string;
  href: string;
  kicker: string;
  title: string;
  sub: string;
  bg: string;
  fg: string;
  art: ArtKind;
  artColor: string;
}

const SPIN_MS = 33000;

/* Drag-to-spin ring. Idle rotation is a CSS animation (compositor). Script starts
   after the ring is on screen. prefers-reduced-motion shows a static grid. */
export function SpinRing({ items }: { items: RingItem[] }) {
  const stage = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [live, setLive] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const n = items.length;
  const step = 360 / n;
  const activeRef = useRef(0);
  const api = useRef<{ nudge: (delta: number) => void } | null>(null);

  useEffect(() => {
    const el = stage.current;
    const r = ring.current;
    if (!el || !r || reduced()) return;
    setLive(true);
    let drag = false;
    let moved = 0;
    let lastX = 0;
    let angle = 0;
    let booted = false;
    let idleHandle: number | null = null;
    let idleKind: "idle" | "timeout" | null = null;

    const norm = (deg: number) => ((deg % 360) + 360) % 360;
    const frontIndex = (deg: number) => Math.round(norm(deg) / step) % n;
    const showFront = (deg: number) => {
      const idx = frontIndex(deg);
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };
    const readAngle = () => {
      const anim = r.getAnimations().find((a) => "animationName" in a && (a as { animationName?: string }).animationName === "ring-spin");
      if (anim && anim.currentTime != null && r.classList.contains("is-spinning") && r.style.animation !== "none") {
        return norm((Number(anim.currentTime) / SPIN_MS) * 360);
      }
      return angle;
    };
    const hold = (deg: number) => {
      angle = norm(deg);
      r.style.animation = "none";
      r.style.transform = `rotateX(-5deg) rotateY(${-angle}deg)`;
      showFront(angle);
    };
    const playFrom = (deg: number) => {
      angle = norm(deg);
      r.style.animation = "";
      r.style.transform = "";
      r.style.animationDelay = `${-(angle / 360) * SPIN_MS}ms`;
      r.classList.remove("is-spinning");
      void r.offsetWidth;
      r.classList.add("is-spinning");
      showFront(angle);
    };

    const boot = () => {
      if (booted) return;
      booted = true;
      setSpinning(true);
      playFrom(0);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        if (booted) r.style.animationPlayState = "paused";
        return;
      }
      if (!booted) {
        const start = () => boot();
        const ric = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number }).requestIdleCallback;
        if (ric) {
          idleKind = "idle";
          idleHandle = ric(start, { timeout: 1200 });
        } else {
          idleKind = "timeout";
          idleHandle = window.setTimeout(start, 280);
        }
      } else if (!drag) {
        r.style.animationPlayState = "running";
      }
    });
    io.observe(el);

    const down = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest("button")) return;
      drag = true;
      moved = 0;
      lastX = e.clientX;
      hold(readAngle());
      el.setPointerCapture?.(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      moved += Math.abs(dx);
      hold(angle - dx * 0.34);
    };
    const up = (e: PointerEvent) => {
      if (!drag) return;
      drag = false;
      el.releasePointerCapture?.(e.pointerId);
      if (booted) playFrom(angle);
    };
    const click = (e: MouseEvent) => {
      if (moved > 6) {
        e.preventDefault();
        e.stopPropagation();
        moved = 0;
      }
    };
    const enter = () => {
      if (!drag && booted) r.style.animationPlayState = "paused";
    };
    const leave = () => {
      if (!drag && booted) r.style.animationPlayState = "running";
    };

    api.current = {
      nudge(delta) {
        const from = readAngle();
        const to = norm(from + delta);
        hold(from);
        const anim = r.animate(
          [
            { transform: `rotateX(-5deg) rotateY(${-from}deg)` },
            { transform: `rotateX(-5deg) rotateY(${-to}deg)` },
          ],
          { duration: 650, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)", fill: "forwards" },
        );
        anim.onfinish = () => {
          anim.cancel();
          if (booted) playFrom(to);
          else hold(to);
        };
      },
    };

    const timer = window.setInterval(() => {
      if (!drag && booted && r.style.animation !== "none") showFront(readAngle());
    }, 400);

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("click", click, true);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
      if (idleHandle != null) {
        if (idleKind === "idle") (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleHandle);
        else window.clearTimeout(idleHandle);
      }
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("click", click, true);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, [n, step]);

  const style = { "--step": `${step}deg`, "--rk": (1 / (2 * Math.tan(Math.PI / n))) * 1.12 } as CSSProperties;
  return (
    <div>
      <div ref={stage} className="ring-stage" style={style}>
        <div ref={ring} className={spinning ? "ring is-spinning" : "ring"}>
          {items.map((it, i) => {
            const linked = !live || i === active;
            const faceStyle = {
              backgroundColor: it.bg,
              backgroundImage: artBackground(it.art, it.artColor),
              color: it.fg,
            } as CSSProperties;
            const text = (
              <>
                <span className="relative text-[10px] font-bold uppercase tracking-[0.18em] opacity-75">{it.kicker}</span>
                <span className="relative">
                  <span className="block text-[clamp(19px,2.2vw,29px)] font-bold leading-[1.03] tracking-[-0.04em]">{it.title}</span>
                  <span className="mt-2 block text-[11px] leading-snug opacity-80">{it.sub}</span>
                </span>
              </>
            );
            return (
              <div key={it.key} className="ring-card" style={{ "--i": i } as CSSProperties}>
                {linked ? (
                  <a href={it.href} className="ring-face" draggable={false} style={faceStyle}>
                    {text}
                  </a>
                ) : (
                  <div className="ring-face" style={faceStyle} aria-hidden="true">
                    {text}
                  </div>
                )}
                <div className="ring-face back" aria-hidden="true" style={faceStyle} />
              </div>
            );
          })}
        </div>
        <div className="ring-shadow" aria-hidden="true" />
      </div>
      <div className="ring-spin-ui mt-2 flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
        <button type="button" aria-label="Previous card" className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white/80 transition hover:border-brand hover:text-brand" onClick={() => api.current?.nudge(-step)}>
          <ArrowLeft />
        </button>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
          Drag to spin
          <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
        </span>
        <button type="button" aria-label="Next card" className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white/80 transition hover:border-brand hover:text-brand" onClick={() => api.current?.nudge(step)}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

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
