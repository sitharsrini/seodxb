import { SERVICES } from "./services";

// Footer links only. Kept out of service-pages.ts so the shared bundle does not
// download every service-page body.
const PILLARS = [
  { id: "strategy", href: "/services/marketing-strategy" },
  { id: "search", href: "/services/seo-aeo-geo" },
  { id: "ads", href: "/services/performance-advertising" },
  { id: "web-content-social", href: "/services/websites-content-social" },
] as const;

export const pillarNav = PILLARS.map((p) => ({
  ...p,
  name: SERVICES.find((s) => s.id === p.id)?.name ?? p.id,
}));
