// Cloudflare Pages advanced-mode worker.
// Leads are stored in Supabase via its REST API (no Cloudflare binding needed):
// - POST /api/contact -> inserts a lead (anon key, RLS allows insert only).
// - GET  /api/leads    -> reads leads via a key-gated Postgres function.
// Everything else is served as a static asset.

const SUPABASE_URL = "https://khqjknkcrenlihjtaekf.supabase.co";
// Anonymous key: safe to embed. RLS permits INSERT only on seodxb_leads; reading
// requires the admin key via the get_seodxb_leads() function, so a leaked anon
// key cannot expose leads.
const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtocWprbmtjcmVubGloanRhZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1OTQ4ODMsImV4cCI6MjA4OTE3MDg4M30.c7GaLdHO5Sk-MXafvxfYRpAWTNHhI3bduhczDjXEgLw";
const ADMIN_KEY_FALLBACK = "1234";

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const ADMIN_KEY = env.ADMIN_KEY || ADMIN_KEY_FALLBACK;
    const sb = {
      apikey: SUPABASE_ANON,
      Authorization: `Bearer ${SUPABASE_ANON}`,
      "Content-Type": "application/json",
    };

    // ── Admin: list stored leads (protected) ────────────────────────────────
    if (url.pathname === "/api/leads" && request.method === "GET") {
      const key = url.searchParams.get("key") || request.headers.get("x-admin-key");
      if (key !== ADMIN_KEY) return json({ error: "Unauthorized" }, 401);
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_seodxb_leads`, {
          method: "POST",
          headers: sb,
          body: JSON.stringify({ p_key: key }),
        });
        if (!res.ok) {
          const detail = (await res.text()).slice(0, 300);
          return json({ error: "Read failed", detail }, 502);
        }
        const leads = await res.json();
        return json({ leads, count: Array.isArray(leads) ? leads.length : 0 });
      } catch (e) {
        return json({ error: "Read error", detail: String(e) }, 500);
      }
    }

    // ── Capture a lead ──────────────────────────────────────────────────────
    if (url.pathname === "/api/contact" && request.method === "POST") {
      let b;
      try {
        b = await request.json();
      } catch {
        return json({ error: "Invalid request" }, 400);
      }
      const name = (b.from_name || b.name || "").toString().slice(0, 200);
      const email = (b.reply_to || b.email || "").toString().slice(0, 200);
      const message = (b.message || "").toString().slice(0, 5000);
      if (!name || !email || !message) {
        return json({ error: "Missing required fields" }, 400);
      }
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/seodxb_leads`, {
          method: "POST",
          headers: { ...sb, Prefer: "return=minimal" },
          body: JSON.stringify({
            name,
            email,
            phone: (b.phone || "").toString().slice(0, 60),
            company_url: (b.company_url || "").toString().slice(0, 300),
            message,
            source: (b.source || url.hostname).toString().slice(0, 120),
          }),
        });
        if (!res.ok) {
          const detail = (await res.text()).slice(0, 300);
          return json({ error: "Failed to save", detail }, 502);
        }
        return json({ success: true });
      } catch (e) {
        return json({ error: "Save error", detail: String(e) }, 500);
      }
    }

    // ── Static assets ───────────────────────────────────────────────────────
    return env.ASSETS.fetch(request);
  },
};
