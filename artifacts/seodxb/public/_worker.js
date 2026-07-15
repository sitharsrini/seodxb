// Cloudflare Pages advanced-mode worker.
// - POST /api/contact  -> stores a lead in the D1 database (env.DB). No email.
// - GET  /api/leads    -> returns stored leads as JSON, gated by ADMIN_KEY.
// Everything else is served as a static asset.

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ── Admin: list stored leads (protected) ────────────────────────────────
    if (url.pathname === "/api/leads" && request.method === "GET") {
      const key = url.searchParams.get("key") || request.headers.get("x-admin-key");
      if (!env.ADMIN_KEY || key !== env.ADMIN_KEY) {
        return json({ error: "Unauthorized" }, 401);
      }
      if (!env.DB) return json({ error: "Database not bound" }, 500);
      try {
        const { results } = await env.DB.prepare(
          "SELECT id, name, email, phone, company_url, message, source, created_at FROM leads ORDER BY id DESC LIMIT 1000"
        ).all();
        return json({ leads: results, count: results.length });
      } catch (e) {
        return json({ error: "Database error", detail: String(e) }, 500);
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
      if (!env.DB) return json({ error: "Database not bound" }, 500);
      try {
        await env.DB.prepare(
          "INSERT INTO leads (name, email, phone, company_url, message, source) VALUES (?, ?, ?, ?, ?, ?)"
        )
          .bind(
            name,
            email,
            (b.phone || "").toString().slice(0, 60),
            (b.company_url || "").toString().slice(0, 300),
            message,
            (b.source || url.hostname).toString().slice(0, 120)
          )
          .run();
        return json({ success: true });
      } catch (e) {
        return json({ error: "Failed to save", detail: String(e) }, 500);
      }
    }

    // ── Static assets ───────────────────────────────────────────────────────
    return env.ASSETS.fetch(request);
  },
};
