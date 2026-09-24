import { useEffect, useMemo, useState } from "react";

export interface SeoRow {
  kind: "page" | "blog";
  section: string;
  name: string;
  path: string;
  url: string;
  main: string | null;
  volume: number | null;
  kd: number | null;
  cpc: number | null;
  secondary: string[];
  title: string;
  description: string;
  h1: string;
  category: string;
  published: string;
}

export interface SeoReport {
  generated: string;
  metrics: { source: string; date: string };
  rows: SeoRow[];
}

type SortKey = "name" | "main" | "volume" | "kd" | "cpc";

const csvCell = (v: unknown) => {
  let s = String(v ?? "");
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return `"${s.replace(/"/g, '""')}"`;
};

const kdLabel = (kd: number | null) => {
  if (kd === null) return { text: "–", cls: "text-ink-soft" };
  if (kd < 30) return { text: `${kd} easy`, cls: "bg-mint text-mint-dark" };
  if (kd < 50) return { text: `${kd} medium`, cls: "bg-amber-100 text-amber-800" };
  return { text: `${kd} hard`, cls: "bg-red-100 text-red-800" };
};

export function useSeoReport(adminKey: string) {
  const [report, setReport] = useState<SeoReport | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!adminKey) return;
    fetch("/api/seo-report", { headers: { "x-admin-key": adminKey } })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then(setReport)
      .catch(() => setError("Could not load the keyword report."));
  }, [adminKey]);
  return { report, error };
}

export default function SeoKeywords({ report, kind }: { report: SeoReport; kind: "page" | "blog" }) {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState("");
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: "volume", dir: -1 });

  const all = useMemo(() => report.rows.filter((r) => r.kind === kind), [report, kind]);
  const groups = useMemo(() => [...new Set(all.map((r) => (kind === "blog" ? r.category || "Index" : r.section)))], [all, kind]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = all.filter(
      (r) =>
        (!section || (kind === "blog" ? r.category || "Index" : r.section) === section) &&
        (!q || [r.name, r.path, r.main, r.secondary.join(" "), r.title, r.h1].some((v) => (v || "").toLowerCase().includes(q))),
    );
    return [...rows].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (av === null && bv === null) return 0;
      if (av === null) return 1;
      if (bv === null) return -1;
      return (av < bv ? -1 : av > bv ? 1 : 0) * sort.dir;
    });
  }, [all, query, section, sort, kind]);

  const totals = useMemo(() => {
    const withKw = all.filter((r) => r.main);
    const vols = all.map((r) => r.volume ?? 0);
    return { pages: all.length, targeted: withKw.length, volume: vols.reduce((a, b) => a + b, 0), measured: all.filter((r) => r.volume).length };
  }, [all]);

  function exportCsv() {
    const head = ["Section", kind === "blog" ? "Category" : "", "Page", "URL", "Main keyword", "UAE searches/month", "Keyword difficulty", "CPC (USD)", "Secondary keywords", "Title tag", "H1", "Meta description", "Published"].filter(Boolean);
    const rows = shown.map((r) =>
      [r.section, ...(kind === "blog" ? [r.category] : []), r.name, r.url, r.main ?? "", r.volume ?? (r.main ? "<10" : ""), r.kd ?? "", r.cpc ?? "", r.secondary.join(", "), r.title, r.h1, r.description, r.published]
        .map(csvCell)
        .join(","),
    );
    const blob = new Blob(["﻿" + [head.map(csvCell).join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `seodxb-${kind === "blog" ? "blog" : "pages"}-keywords-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const th = (key: SortKey, label: string, right = false) => (
    <th scope="col" className={`whitespace-nowrap px-3 py-3 ${right ? "text-right" : "text-left"}`}>
      <button
        type="button"
        onClick={() => setSort((s) => ({ key, dir: s.key === key ? (s.dir === 1 ? -1 : 1) : key === "name" || key === "main" ? 1 : -1 }))}
        className="inline-flex items-center gap-1 font-semibold uppercase tracking-wide hover:text-brand"
        aria-label={`Sort by ${label}`}
      >
        {label}
        <span aria-hidden="true" className={sort.key === key ? "text-brand" : "text-ink-soft/40"}>{sort.key === key && sort.dir === 1 ? "▲" : "▼"}</span>
      </button>
    </th>
  );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">SEO</p>
          <h1 className="mt-2 font-display text-3xl font-semibold">{kind === "blog" ? "Blog & keywords" : "Pages & keywords"}</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Volumes and difficulty: {report.metrics.source}, snapshot {report.metrics.date}. Titles and H1s: generated from the live build.
          </p>
        </div>
        <button type="button" onClick={exportCsv} disabled={!shown.length} className="btn-primary text-sm disabled:opacity-50">
          Export CSV
        </button>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: kind === "blog" ? "Blog URLs" : "Pages", value: totals.pages },
          { label: "With a main keyword", value: totals.targeted },
          { label: "With measurable volume", value: totals.measured },
          { label: "Total monthly searches", value: totals.volume.toLocaleString("en-GB") },
        ].map((s) => (
          <div key={s.label} className="flex flex-col rounded-2xl border border-line bg-white p-4">
            <dt className="order-2 mt-1 text-xs text-ink-soft">{s.label}</dt>
            <dd className="font-display text-2xl font-semibold text-brand">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search page, URL, keyword, title or H1..."
          aria-label="Search keywords"
          className="field sm:flex-1"
        />
        <select value={section} onChange={(e) => setSection(e.target.value)} aria-label={kind === "blog" ? "Filter by category" : "Filter by section"} className="field sm:w-60">
          <option value="">{kind === "blog" ? "All categories" : "All sections"}</option>
          {groups.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>
      <p className="mt-3 text-sm text-ink-soft">Showing {shown.length} of {all.length}. Click a column heading to sort.</p>

      <div className="mt-3 overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[1100px] text-left text-sm">
          <thead className="bg-sand text-[11px] text-ink-soft">
            <tr>
              {th("name", "Page")}
              {th("main", "Main keyword")}
              {th("volume", "Searches/mo", true)}
              {th("kd", "KD", true)}
              {th("cpc", "CPC", true)}
              <th scope="col" className="px-3 py-3 font-semibold uppercase tracking-wide">Secondary keywords</th>
              <th scope="col" className="px-3 py-3 font-semibold uppercase tracking-wide">Title tag &amp; H1</th>
              {kind === "blog" && <th scope="col" className="px-3 py-3 font-semibold uppercase tracking-wide">Category</th>}
            </tr>
          </thead>
          <tbody>
            {shown.map((r) => {
              const kd = kdLabel(r.kd);
              return (
                <tr key={r.path} className="border-t border-line align-top hover:bg-sand/50">
                  <td className="max-w-[260px] px-3 py-3">
                    <p className="font-semibold text-ink">{r.name}</p>
                    <a href={r.url} target="_blank" rel="noopener" className="break-all text-xs text-brand underline underline-offset-2">
                      {r.path}
                    </a>
                    {kind === "page" && <p className="mt-1 text-[11px] text-ink-soft">{r.section}</p>}
                  </td>
                  <td className="px-3 py-3 font-semibold text-ink">{r.main ?? <span className="font-normal text-ink-soft">Support page</span>}</td>
                  <td className="whitespace-nowrap px-3 py-3 text-right">
                    {r.volume !== null ? r.volume.toLocaleString("en-GB") : r.main ? <span className="text-ink-soft">under 10</span> : "–"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-right">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${kd.cls}`}>{kd.text}</span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-right">{r.cpc ? `$${r.cpc.toFixed(2)}` : "–"}</td>
                  <td className="max-w-[220px] px-3 py-3 text-xs text-ink-soft">{r.secondary.join(", ") || "–"}</td>
                  <td className="max-w-[320px] px-3 py-3 text-xs">
                    <p><span className="text-ink-soft">Title ({r.title.length}): </span>{r.title}</p>
                    <p className="mt-1"><span className="text-ink-soft">H1: </span>{r.h1}</p>
                  </td>
                  {kind === "blog" && <td className="whitespace-nowrap px-3 py-3 text-xs">{r.category || "–"}</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink-soft">
        KD is keyword difficulty from 0 to 100. "Under 10" means no measurable UAE volume for that exact phrase in the snapshot. CPC is the average Google Ads cost per click in USD.
      </p>
    </div>
  );
}
