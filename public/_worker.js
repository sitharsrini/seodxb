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

const hostOf = (u) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

// Where the lead came from, in plain words, based on first-touch data.
function channelOf(t) {
  const medium = (t.utm_medium || "").toLowerCase();
  const click = (t.click_id || "").split(":")[0];
  if (click === "gclid" || click === "gbraid" || click === "wbraid") return "Google Ads";
  if (click === "msclkid") return "Microsoft Ads";
  if (click === "ttclid") return "TikTok Ads";
  if (click === "li_fat_id") return "LinkedIn Ads";
  if (/^(cpc|ppc|paid|paidsearch|paid_search)$/.test(medium)) return `Paid search (${t.utm_source || "unknown"})`;
  if (/paid.?social/.test(medium)) return `Paid social (${t.utm_source || "unknown"})`;
  if (medium === "email") return `Email (${t.utm_source || "campaign"})`;
  if (t.utm_source) return `Campaign (${t.utm_source}${medium ? ` / ${medium}` : ""})`;
  const host = hostOf(t.first_referrer || t.referrer);
  if (!host) return click === "fbclid" ? "Facebook / Instagram" : "Direct";
  if (/(^|\.)(chatgpt\.com|openai\.com|perplexity\.ai|claude\.ai|copilot\.microsoft\.com|gemini\.google\.com|you\.com|phind\.com)$/.test(host))
    return `AI assistant (${host})`;
  if (/(^|\.)(google\.[a-z.]+|bing\.com|yahoo\.com|duckduckgo\.com|yandex\.[a-z]+|ecosia\.org|baidu\.com)$/.test(host))
    return `Organic search (${host})`;
  if (/(^|\.)(facebook\.com|instagram\.com|linkedin\.com|lnkd\.in|t\.co|x\.com|twitter\.com|tiktok\.com|youtube\.com|reddit\.com|pinterest\.com)$/.test(host))
    return `Social (${host})`;
  if (/(^|\.)(whatsapp\.com|wa\.me)$/.test(host)) return "WhatsApp";
  return `Referral (${host})`;
}

const deviceOf = (ua) => (/iPad|Tablet/i.test(ua) ? "tablet" : /Mobi|Android|iPhone/i.test(ua) ? "mobile" : "desktop");

const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// Lead emails are currently sent by the Supabase trigger seodxb_leads_email (key in
// Supabase Vault). Only set RESEND_API_KEY and LEAD_EMAIL_TO in Cloudflare if that
// trigger is removed, otherwise every lead is emailed twice.
async function emailLead(env, lead) {
  if (!env.RESEND_API_KEY || !env.LEAD_EMAIL_TO) return;
  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Website", lead.company_url],
    ["Channel", lead.channel],
    ["Page", lead.page_title ? `${lead.page_title} (${lead.page_url})` : lead.page_url],
    ["Referrer", lead.referrer || "none"],
    ["First landing page", lead.landing_page],
    ["First referrer", lead.first_referrer || "none"],
    ["Campaign", [lead.utm_source, lead.utm_medium, lead.utm_campaign, lead.utm_term, lead.utm_content].filter(Boolean).join(" / ")],
    ["Ad click ID", lead.click_id],
    ["Country / device", [lead.country, lead.device].filter(Boolean).join(" / ")],
    ["Form", lead.source],
  ].filter(([, v]) => v);
  const html =
    `<h2 style="font-family:sans-serif">New SEODXB lead: ${esc(lead.name)}</h2>` +
    `<p style="font-family:sans-serif;white-space:pre-wrap;border-left:3px solid #1d5bff;padding-left:12px">${esc(lead.message)}</p>` +
    `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555;vertical-align:top">${k}</td><td style="padding:4px 0">${esc(v)}</td></tr>`)
      .join("")}</table>`;
  const text = `${lead.message}\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.LEAD_EMAIL_FROM || "SEODXB Leads <onboarding@resend.dev>",
      to: env.LEAD_EMAIL_TO.split(",").map((s) => s.trim()),
      reply_to: lead.email,
      subject: `New lead: ${lead.name} (${lead.channel})`.slice(0, 150),
      html,
      text,
    }),
  });
}

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
    page_url: clip(b.page_url, 500) || clip(request.headers.get("Referer"), 500),
    page_title: clip(b.page_title, 200),
    referrer: clip(b.referrer, 500),
    landing_page: clip(b.landing_page, 500),
    first_referrer: clip(b.first_referrer, 500),
    utm_source: clip(b.utm_source, 200),
    utm_medium: clip(b.utm_medium, 200),
    utm_campaign: clip(b.utm_campaign, 200),
    utm_term: clip(b.utm_term, 200),
    utm_content: clip(b.utm_content, 200),
    click_id: clip(b.click_id, 200),
    country: clip(request.headers.get("CF-IPCountry") || request.cf?.country, 10),
    device: deviceOf(request.headers.get("User-Agent") || ""),
  };
  lead.channel = channelOf(lead);
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
      body: `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone || "-"}\nCompany: ${lead.company_url || "-"}\nChannel: ${lead.channel}\nPage: ${lead.page_url || "-"}\nReferrer: ${lead.referrer || lead.first_referrer || "-"}\n\n${lead.message.slice(0, 500)}`,
    }).catch(() => {}),
  );
  ctx.waitUntil(emailLead(env, lead).catch(() => {}));
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

    // Old WordPress query URLs (/?p=123, /?page_id=5, /?cat=2 ...) are gone for good.
    // Tracking parameters such as utm_* and gclid are not affected.
    const WP_PARAMS = ["p", "page_id", "cat", "tag", "s", "attachment_id", "m", "author", "feed", "replytocom", "preview", "post_type", "paged"];
    if (url.pathname === "/" && WP_PARAMS.some((k) => url.searchParams.has(k))) {
      return new Response(GONE_HTML, {
        status: 410,
        headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex" },
      });
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
