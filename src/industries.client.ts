// Browser version of ./industries: a light index of every industry, with the full
// content of the current industry page loaded on demand (see src/route-data.ts).
// The build swaps this file in for ./industries in the client bundle (vite.config.ts).
import type { Industry } from "./industry-types";
import meta from "./generated/industries-meta.json";

export type { Industry } from "./industry-types";

export const INDUSTRIES = meta as unknown as Industry[];

export const industryPath = (i: Industry) => `/industries/${i.slug}`;

const full = import.meta.glob<Industry>("./generated/industries/*.json", { import: "default" });

export async function loadIndustryData(slug: string) {
  const target = INDUSTRIES.find((i) => i.slug === slug);
  const load = full[`./generated/industries/${slug}.json`];
  if (target && load) Object.assign(target, await load());
}
