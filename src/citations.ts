import { INDUSTRIES } from "./industries";
import { GENERAL_SOURCES, INDUSTRY_SOURCES, POST_SOURCES, type Source } from "./sources";

export const industrySources = (slug: string): Source[] => INDUSTRY_SOURCES[slug] ?? GENERAL_SOURCES;

// A guide cites its own sources, or those of the industry it belongs to.
export const postSources = (slug: string): Source[] => {
  if (POST_SOURCES[slug]) return POST_SOURCES[slug];
  const owner = INDUSTRIES.find((i) => i.postSlug === slug || i.extraPostSlugs?.includes(slug));
  return owner ? industrySources(owner.slug) : GENERAL_SOURCES;
};

export const citationLd = (sources: Source[]) => sources.map((s) => ({ "@type": "CreativeWork", name: s.name, url: s.url }));
