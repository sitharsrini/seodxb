import { useEffect, useState, type CSSProperties } from "react";

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
