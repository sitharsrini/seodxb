import React from "react";
import { Helmet } from "react-helmet-async";
import { clampTitle } from "@/lib/title";

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

export function LeadsAdmin() {
  const [key, setKey] = React.useState<string>(() =>
    typeof window !== "undefined" ? localStorage.getItem(KEY_STORE) || "" : ""
  );
  const [input, setInput] = React.useState("");
  const [leads, setLeads] = React.useState<Lead[] | null>(null);
  const [status, setStatus] = React.useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = React.useState("");

  const load = React.useCallback(async (k: string) => {
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`/api/leads?key=${encodeURIComponent(k)}`);
      if (res.status === 401) {
        setError("That key is not correct.");
        setStatus("idle");
        setLeads(null);
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      const j = await res.json();
      setLeads(j.leads || []);
      localStorage.setItem(KEY_STORE, k);
      setKey(k);
      setStatus("idle");
    } catch {
      setError("Could not load leads. Try again in a moment.");
      setStatus("idle");
    }
  }, []);

  React.useEffect(() => {
    if (key) load(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exportCsv = () => {
    if (!leads) return;
    const head = ["Date", "Name", "Email", "Phone", "Company", "Source", "Message"];
    const rows = leads.map((l) =>
      [l.created_at, l.name, l.email, l.phone, l.company_url, l.source, l.message]
        .map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`)
        .join(",")
    );
    const blob = new Blob([[head.join(","), ...rows].join("\n")], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "seodxb-leads.csv";
    a.click();
  };

  const authed = leads !== null;

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("Leads | SEODXB Admin")}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Leads {authed && <span className="text-gray-400 font-normal">({leads?.length})</span>}</h1>
            {authed && (
              <div className="flex gap-2">
                <button onClick={() => load(key)} className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-gray-50">
                  {status === "loading" ? "Refreshing…" : "Refresh"}
                </button>
                <button onClick={exportCsv} className="rounded-lg bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90">
                  Export CSV
                </button>
                <button
                  onClick={() => { localStorage.removeItem(KEY_STORE); setKey(""); setLeads(null); }}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-gray-50"
                >
                  Lock
                </button>
              </div>
            )}
          </div>

          {!authed ? (
            <div className="max-w-sm bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-sm text-gray-600 mb-4">Enter your admin key to view leads.</p>
              <form
                onSubmit={(e) => { e.preventDefault(); if (input.trim()) load(input.trim()); }}
                className="space-y-3"
              >
                <input
                  type="password"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Admin key"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-primary text-white py-2.5 text-sm font-semibold hover:bg-primary/90 disabled:opacity-60">
                  {status === "loading" ? "Checking…" : "View leads"}
                </button>
                {error && <p className="text-sm text-red-600">{error}</p>}
              </form>
            </div>
          ) : leads && leads.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center text-gray-500">
              No leads yet. New submissions will appear here.
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100 text-left text-gray-600">
                    <tr>
                      <th className="px-4 py-3 font-semibold whitespace-nowrap">Date</th>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">Email</th>
                      <th className="px-4 py-3 font-semibold">Phone</th>
                      <th className="px-4 py-3 font-semibold">Company</th>
                      <th className="px-4 py-3 font-semibold">Message</th>
                      <th className="px-4 py-3 font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {leads?.map((l) => (
                      <tr key={l.id} className="hover:bg-slate-50 align-top">
                        <td className="px-4 py-3 whitespace-nowrap text-gray-500">{l.created_at}</td>
                        <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{l.name}</td>
                        <td className="px-4 py-3"><a className="text-primary hover:underline" href={`mailto:${l.email}`}>{l.email}</a></td>
                        <td className="px-4 py-3 whitespace-nowrap">{l.phone ? <a className="text-primary hover:underline" href={`tel:${l.phone}`}>{l.phone}</a> : "-"}</td>
                        <td className="px-4 py-3">{l.company_url || "-"}</td>
                        <td className="px-4 py-3 max-w-md text-gray-700">{l.message}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-400">{l.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
