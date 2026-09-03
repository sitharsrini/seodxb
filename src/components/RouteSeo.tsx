import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { clampTitle } from "@/lib/title";
import { ROUTE_SEO } from "@/data/routeSeo";

function pageUrl(path: string): string {
  const clean = path.replace(/\/+$/, "") || "/";
  return clean === "/" ? "https://seodxb.com/" : `https://seodxb.com${clean}`;
}

function stripStaleSeoTags() {
  if (typeof document === "undefined") return;
  for (const sel of [
    'link[rel="canonical"]:not([data-rh])',
    'meta[name="description"]:not([data-rh])',
    'meta[property="og:url"]:not([data-rh])',
    'meta[property="og:title"]:not([data-rh])',
    'meta[property="og:description"]:not([data-rh])',
    'meta[name="twitter:title"]:not([data-rh])',
    'meta[name="twitter:description"]:not([data-rh])',
  ]) {
    document.querySelectorAll(sel).forEach((n) => {
      try {
        n.parentNode?.removeChild(n);
      } catch {
        /* ignore tags already moved by Helmet */
      }
    });
  }
}

/**
 * Always writes a self-referencing canonical for the current path.
 * Stops homepage meta (from index.html) surviving client-side navigation.
 */
export function RouteSeo() {
  const [path] = useLocation();
  const url = pageUrl(path);
  const slug = (path.replace(/\/+$/, "") || "/").replace(/^\//, "");
  const known = ROUTE_SEO[slug] || (slug === "" ? ROUTE_SEO.home : undefined);
  const injected = typeof window !== "undefined" ? window.__KW_DATA__ : undefined;
  const title = known?.title || (injected?.slug === slug ? injected.title : undefined);
  const desc = known?.desc || (injected?.slug === slug ? injected.metaDesc : undefined);
  const t = title ? clampTitle(title) : undefined;
  const d = desc ? desc.replace(/\s+/g, " ").trim().slice(0, 160) : undefined;

  useEffect(() => {
    stripStaleSeoTags();
  }, [path]);

  return (
    <Helmet prioritizeSeoTags>
      {t ? <title>{t}</title> : null}
      {d ? <meta name="description" content={d} /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      {t ? <meta property="og:title" content={t} /> : null}
      {d ? <meta property="og:description" content={d} /> : null}
      {t ? <meta name="twitter:title" content={t} /> : null}
      {d ? <meta name="twitter:description" content={d} /> : null}
    </Helmet>
  );
}
