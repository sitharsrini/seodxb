import { useEffect, useMemo, useState, type FormEvent } from "react";

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  company_url: string;
  message: string;
  source: string;
  created_at: string;
}

const KEY_STORE = "seodxb_admin_key";

const store = {
  get: () => {
    try {
      return localStorage.getItem(KEY_STORE) || "";
    } catch {
      return "";
    }
  },
  set: (v: string) => {
    try {
      if (v) localStorage.setItem(KEY_STORE, v);
      else localStorage.removeItem(KEY_STORE);
    } catch {
      /* storage unavailable */
    }
  },
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dubai" });

// Prefix values that spreadsheets would treat as formulas.
const csvCell = (v: unknown) => {
  let s = String(v ?? "");
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return `"${s.replace(/"/g, '""')}"`;
};

const digits = (p: string) => p.replace(/[^\d]/g, "");

export default function Admin() {
  const [key, setKey] = useState("");
  const [input, setInput] = useState("");
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("");

  async function load(k: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", { headers: { "x-admin-key": k } });
      if (res.status === 401) {
        store.set("");
        setLeads(null);
        setError("That password is not correct.");
        return;
      }
      if (!res.ok) throw new Error();
      const j = await res.json();
      const list: Lead[] = Array.isArray(j.leads) ? j.leads : [];
      list.sort((a, b) => b.created_at.localeCompare(a.created_at));
      setLeads(list);
      setKey(k);
      store.set(k);
    } catch {
      setError("Could not load leads. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const saved = store.get();
    if (saved) load(saved);
  }, []);

  const sources = useMemo(() => [...new Set((leads ?? []).map((l) => l.source || "unknown"))].sort(), [leads]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (leads ?? []).filter(
      (l) =>
        (!source || (l.source || "unknown") === source) &&
        (!q || [l.name, l.email, l.phone, l.company_url, l.message].some((v) => (v || "").toLowerCase().includes(q))),
    );
  }, [leads, query, source]);

  const stats = useMemo(() => {
    const now = Date.now();
    const day = 86400000;
    const all = leads ?? [];
    return {
      total: all.length,
      week: all.filter((l) => now - new Date(l.created_at).getTime() < 7 * day).length,
      month: all.filter((l) => now - new Date(l.created_at).getTime() < 30 * day).length,
    };
  }, [leads]);

  function exportCsv() {
    const head = ["Date (Dubai)", "Name", "Email", "Phone", "Company", "Source", "Message"];
    const rows = shown.map((l) => [fmt(l.created_at), l.name, l.email, l.phone, l.company_url, l.source, l.message].map(csvCell).join(","));
    const blob = new Blob(["﻿" + [head.map(csvCell).join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `seodxb-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function onLogin(e: FormEvent) {
    e.preventDefault();
    if (input.trim()) load(input.trim());
  }

  function lock() {
    store.set("");
    setKey("");
    setLeads(null);
    setInput("");
  }

  if (leads === null) {
    return (
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center px-4 py-20">
          <form onSubmit={onLogin} className="w-full max-w-sm rounded-3xl border border-line bg-white p-8 shadow-2xl shadow-brand/10">
            <p className="eyebrow">Admin</p>
            <h1 className="mt-3 font-display text-3xl font-semibold">Leads dashboard</h1>
            <p className="mt-2 text-sm text-ink-soft">Enter the admin password to view enquiries.</p>
            <label className="mt-6 block text-sm font-medium">
              Password
              <input
                type="password"
                autoComplete="current-password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="field mt-2"
                autoFocus
              />
            </label>
            {error && <p className="mt-3 text-sm text-red-700" role="alert">{error}</p>}
            <button type="submit" disabled={loading} className="btn-primary mt-6 w-full justify-center py-3 disabled:opacity-60">
              {loading ? "Checking..." : "View leads"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Admin</p>
          <h1 className="mt-2 font-display text-3xl font-semibold">Leads</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => load(key)} className="btn-ghost py-2 text-sm">
            {loading ? "Refreshing..." : "Refresh"}
          </button>
          <button type="button" onClick={exportCsv} disabled={!shown.length} className="btn-primary text-sm disabled:opacity-50">
            Export CSV
          </button>
          <button type="button" onClick={lock} className="btn-ghost py-2 text-sm">Lock</button>
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { label: "All leads", value: stats.total },
          { label: "Last 30 days", value: stats.month },
          { label: "Last 7 days", value: stats.week },
        ].map((s) => (
          <div key={s.label} className="flex flex-col rounded-2xl border border-line bg-white p-4 sm:p-5">
            <dt className="order-2 mt-1 text-xs text-ink-soft sm:text-sm">{s.label}</dt>
            <dd className="font-display text-3xl font-semibold text-brand">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, email, phone, message..."
          aria-label="Search leads"
          className="field sm:flex-1"
        />
        <select value={source} onChange={(e) => setSource(e.target.value)} aria-label="Filter by source" className="field sm:w-56">
          <option value="">All sources</option>
          {sources.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      {error && <p className="mt-3 text-sm text-red-700" role="alert">{error}</p>}

      <p className="mt-4 text-sm text-ink-soft">
        Showing {shown.length} of {stats.total}
      </p>

      {shown.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-line bg-white p-10 text-center text-ink-soft">
          {stats.total === 0 ? "No leads yet. New enquiries from the contact form will appear here." : "No leads match your search."}
        </div>
      ) : (
        <ul className="mt-4 space-y-3">
          {shown.map((l) => (
            <li key={l.id} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-ink">{l.name || "No name"}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">
                    {fmt(l.created_at)} · <span className="rounded-full bg-sand px-2 py-0.5 text-brand">{l.source || "unknown"}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  {l.email && (
                    <a href={`mailto:${l.email}`} className="rounded-full bg-brand px-3 py-1.5 text-white hover:bg-brand-dark">Email</a>
                  )}
                  {l.phone && digits(l.phone) && (
                    <>
                      <a href={`tel:${l.phone.replace(/[^\d+]/g, "")}`} className="rounded-full border border-line px-3 py-1.5 text-ink hover:border-brand">Call</a>
                      <a href={`https://wa.me/${digits(l.phone)}`} target="_blank" rel="noopener" className="rounded-full bg-mint px-3 py-1.5 text-mint-dark hover:bg-mint-strong">WhatsApp</a>
                    </>
                  )}
                </div>
              </div>
              <dl className="mt-3 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-3 [overflow-wrap:anywhere]">
                <div><dt className="inline text-ink-soft">Email: </dt><dd className="inline">{l.email || "-"}</dd></div>
                <div><dt className="inline text-ink-soft">Phone: </dt><dd className="inline">{l.phone || "-"}</dd></div>
                <div><dt className="inline text-ink-soft">Company: </dt><dd className="inline">{l.company_url || "-"}</dd></div>
              </dl>
              {l.message && <p className="mt-3 whitespace-pre-wrap rounded-xl bg-sand px-4 py-3 text-sm text-ink [overflow-wrap:anywhere]">{l.message}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
