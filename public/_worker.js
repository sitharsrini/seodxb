// Cloudflare Pages advanced-mode worker.
// Leads go to Supabase via its REST API; the anon key only permits INSERT (RLS).
const SUPABASE_URL = "https://khqjknkcrenlihjtaekf.supabase.co";
const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtocWprbmtjcmVubGloanRhZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1OTQ4ODMsImV4cCI6MjA4OTE3MDg4M30.c7GaLdHO5Sk-MXafvxfYRpAWTNHhI3bduhczDjXEgLw";
const NTFY_TOPIC = "seodxb-leads-a7k2x9";
// Rewritten at build time from ROUTES in src/site.ts (scripts/prerender.ts).
const PAGES = new Set(["/", "/services", "/results", "/about", "/contact"]);

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
}

const clip = (v, n) => (v || "").toString().trim().slice(0, n);

async function handleContact(request, env, ctx) {
  let b;
  try {
    b = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const service = clip(b.service, 100);
  const lead = {
    name: clip(b.name, 200),
    email: clip(b.email, 200),
    phone: clip(b.phone, 60),
    company_url: clip(b.company_url, 300),
    message: (service ? `[${service}] ` : "") + clip(b.message, 5000),
    source: clip(b.source, 120) || "website",
  };
  if (!lead.name || !lead.email || !clip(b.message, 5000)) {
    return json({ error: "Please fill in your name, email and goals." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/seodxb_leads`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON,
      Authorization: `Bearer ${SUPABASE_ANON}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(lead),
  });
  if (!res.ok) return json({ error: "We could not save your enquiry." }, 502);

  ctx.waitUntil(
    fetch(`https://ntfy.sh/${env.NTFY_TOPIC || NTFY_TOPIC}`, {
      method: "POST",
      headers: { Title: `New lead: ${lead.name.slice(0, 80)}`, Tags: "moneybag" },
      body: `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone || "-"}\nCompany: ${lead.company_url || "-"}\n\n${lead.message.slice(0, 500)}`,
    }).catch(() => {}),
  );
  return json({ success: true });
}

// Admin password: set ADMIN_KEY in Cloudflare environment variables to override.
// The Supabase function get_seodxb_leads also checks the key it receives.
const ADMIN_KEY_FALLBACK = "1234";

const isAdmin = (request, env) => {
  const key = request.headers.get("x-admin-key") || "";
  return Boolean(key) && key === (env.ADMIN_KEY || ADMIN_KEY_FALLBACK);
};

async function handleSeoReport(request, env) {
  if (!isAdmin(request, env)) return json({ error: "Unauthorized" }, 401);
  const res = await env.ASSETS.fetch(new Request(new URL("/_private/seo-report.json", request.url)));
  if (!res.ok) return json({ error: "Report not found." }, 404);
  return new Response(res.body, {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}

async function handleLeads(request, env) {
  const key = request.headers.get("x-admin-key") || "";
  if (!isAdmin(request, env)) return json({ error: "Unauthorized" }, 401);
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_seodxb_leads`, {
    method: "POST",
    headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${SUPABASE_ANON}`, "Content-Type": "application/json" },
    body: JSON.stringify({ p_key: key }),
  });
  if (!res.ok) return json({ error: "Could not read leads." }, 502);
  const leads = await res.json();
  return new Response(JSON.stringify({ leads }), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}

const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page removed | SEODXB</title></head><body style="font-family:system-ui,sans-serif;max-width:32rem;margin:15vh auto;padding:0 1rem;color:#0f1d2e"><h1>This page no longer exists</h1><p>SEODXB has a new website. <a href="/">Go to the homepage</a>.</p></body></html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname.startsWith("/_private")) {
      return new Response("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex" } });
    }

    if (url.pathname === "/api/seo-report") {
      if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);
      return handleSeoReport(request, env);
    }

    if (url.pathname === "/api/leads") {
      if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);
      return handleLeads(request, env);
    }

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
      return handleContact(request, env, ctx);
    }

    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.replace(/\/+$/, "");
      return Response.redirect(url.toString(), 301);
    }

    // Send mixed-case links such as /Services to the canonical lower-case page.
    if (/[A-Z]/.test(url.pathname) && PAGES.has(url.pathname.toLowerCase())) {
      url.pathname = url.pathname.toLowerCase();
      return Response.redirect(url.toString(), 301);
    }

    const isPage = PAGES.has(url.pathname);
    const isFile = /\.\w+$/.test(url.pathname);
    if (isPage || isFile) {
      const res = await env.ASSETS.fetch(request);
      if (res.status !== 404) return res;
    }

    return new Response(GONE_HTML, {
      status: 410,
      headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  },
};
