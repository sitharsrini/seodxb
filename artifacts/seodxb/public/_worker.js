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

// Combined Phase 1 (market research / ICP) + Phase 2 (SEO keyword strategy) prompt
// for the ICP Finder & Keyword Analyser tool. Output is HTML for direct rendering.
function buildAnalysisPrompt(website, question) {
  return `You are a senior Market Research Analyst, Growth Strategist, and SEO Consultant. Analyze the company at this website: ${website}
${question ? "The user specifically asked: " + question + "\n" : ""}
Produce ONE comprehensive report in TWO parts.

PART 1 - Market Research and ICP:
1. Business Overview: what they do, products and services, industry and business model, value proposition and USPs.
2. Ideal Customer Profile: target industries, company size, geographic markets, decision-maker job titles, pain points, buying triggers, primary goals.
3. Use Cases: why customers buy, business problems solved, typical scenarios.
4. Competitor Analysis: top direct and indirect competitors, how each positions itself, key differentiators, gaps and opportunities.
5. Positioning Recommendations: what makes this company unique, messaging themes for the ICP, ways to stand out.

PART 2 - SEO Keyword Strategy:
1. Core Keywords. 2. Long-Tail Keywords. 3. Geo-Targeted Keywords. 4. Keyword Clusters with a pillar keyword each. 5. Search Intent (Informational, Commercial, Transactional, Navigational). 6. Content Opportunities (pillar pages, blog topics, service pages, comparison pages, case studies, FAQs, industry guides). 7. Priority Matrix (Quick Wins, High Volume, High Commercial Intent, Long-Term). 8. PPC Opportunities. 9. Keyword Mapping (homepage, service pages, landing pages, blog, FAQ). 10. SEO, AEO, and GEO recommendations.

Use HTML tables wherever appropriate. Prioritize business intent and lead-generation potential over raw volume. Where possible include estimated monthly search volume, keyword difficulty, and CPC, clearly labelled as estimates.

OUTPUT FORMAT: return clean semantic HTML only, using <h2>, <h3>, <p>, <ul>, <li>, <table>, <thead>, <tbody>, <tr>, <th>, <td>, and <strong>. Do NOT include <script>, <style>, <html>, <head>, or <body> tags, and do NOT wrap the output in markdown code fences. Start directly with an <h2>.`;
}

function esc(s) {
  return (s || "").toString().replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// Email a notification for a new lead. Uses Resend; sending from
// onboarding@resend.dev to the owner's own address needs no domain verification.
// No-op unless RESEND_API_KEY is set, so it never blocks lead capture.
async function notifyNewLead(env, lead) {
  if (!env.RESEND_API_KEY) return;
  const to = env.NOTIFY_EMAIL || "rsrinivasan163@gmail.com";
  const from = env.NOTIFY_FROM || "SEODXB Leads <onboarding@resend.dev>";
  const body = {
    from,
    to: [to],
    subject: `New lead: ${(lead.name || lead.email || lead.company_url || "website").toString().slice(0, 80)}`,
    html:
      `<h2>New lead from seodxb.com</h2>` +
      `<p><strong>Name:</strong> ${esc(lead.name)}</p>` +
      `<p><strong>Email:</strong> ${esc(lead.email)}</p>` +
      `<p><strong>Phone:</strong> ${esc(lead.phone)}</p>` +
      `<p><strong>Company / URL:</strong> ${esc(lead.company_url)}</p>` +
      `<p><strong>Source:</strong> ${esc(lead.source)}</p>` +
      `<p><strong>Message:</strong><br>${esc(lead.message)}</p>` +
      `<p><a href="https://seodxb.com/leads-admin">Open your leads panel</a></p>`,
  };
  if (lead.email) body.reply_to = lead.email;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    /* notification is best-effort */
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const ADMIN_KEY = env.ADMIN_KEY || ADMIN_KEY_FALLBACK;
    const sb = {
      apikey: SUPABASE_ANON,
      Authorization: `Bearer ${SUPABASE_ANON}`,
      "Content-Type": "application/json",
    };

    // ── ICP Finder & Keyword Analyser tool ──────────────────────────────────
    if (url.pathname === "/api/analyze" && request.method === "POST") {
      let b;
      try {
        b = await request.json();
      } catch {
        return json({ error: "Invalid request" }, 400);
      }
      const website = (b.website || "").toString().trim().slice(0, 300);
      const email = (b.email || "").toString().trim().slice(0, 200);
      const question = (b.question || "").toString().trim().slice(0, 1000);
      if (!website) return json({ error: "Please enter a website URL." }, 400);
      const site = /^https?:\/\//i.test(website) ? website : `https://${website}`;

      // Always capture the request as a lead (best-effort).
      try {
        await fetch(`${SUPABASE_URL}/rest/v1/seodxb_leads`, {
          method: "POST",
          headers: { ...sb, Prefer: "return=minimal" },
          body: JSON.stringify({
            name: email || "ICP Finder user",
            email,
            phone: "",
            company_url: site,
            message: `ICP Finder & Keyword Analyser request.${question ? " Question: " + question : ""}`,
            source: "icp-finder",
          }),
        });
      } catch {
        /* capture is best-effort; do not block the tool */
      }
      ctx.waitUntil(
        notifyNewLead(env, {
          name: email || "ICP Finder user",
          email,
          phone: "",
          company_url: site,
          message: `ICP Finder & Keyword Analyser request.${question ? " Question: " + question : ""}`,
          source: "icp-finder",
        }),
      );

      // Generate a live report if any AI provider is available. All optional.
      // Preference order puts the FREE options first: Cloudflare Workers AI
      // (free tier, native to this host) and Google Gemini (free API key), then
      // paid Anthropic. If none is configured, the request is captured as a lead.
      const clean = (t) => (t || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/```html|```/g, "").trim();
      const prompt = buildAnalysisPrompt(site, question);
      try {
        // 1) Cloudflare Workers AI - free tier, no external key (needs an AI binding).
        if (env.AI) {
          const r = await env.AI.run(env.AI_MODEL || "@cf/meta/llama-3.1-8b-instruct", {
            messages: [{ role: "user", content: prompt }],
            max_tokens: 4000,
          });
          const html = clean(r && (r.response || r.result || ""));
          if (html) return json({ captured: true, html, engine: "cloudflare" });
        }
        // 2) Google Gemini - free tier (free key from aistudio.google.com, no billing).
        if (env.GEMINI_API_KEY) {
          const model = env.GEMINI_MODEL || "gemini-2.0-flash";
          const r = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`,
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
            },
          );
          if (r.ok) {
            const data = await r.json();
            const html = clean(
              data?.candidates?.[0]?.content?.parts?.[0]?.text,
            );
            if (html) return json({ captured: true, html, engine: "gemini" });
          }
        }
        // 3) Anthropic - paid.
        if (env.ANTHROPIC_API_KEY) {
          const r = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
              "x-api-key": env.ANTHROPIC_API_KEY,
              "anthropic-version": "2023-06-01",
              "content-type": "application/json",
            },
            body: JSON.stringify({
              model: env.ANTHROPIC_MODEL || "claude-3-5-sonnet-latest",
              max_tokens: 4000,
              messages: [{ role: "user", content: prompt }],
            }),
          });
          if (r.ok) {
            const data = await r.json();
            const html = clean(data?.content?.[0]?.text);
            if (html) return json({ captured: true, html, engine: "anthropic" });
          }
        }
      } catch (e) {
        return json({ captured: true, error: "AI error", detail: String(e) }, 200);
      }

      return json({ captured: true });
    }

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
      // Record which page the lead came from: explicit source, else the page
      // that submitted the form (Referer path), else the hostname.
      let refPath = "";
      try {
        refPath = new URL(request.headers.get("Referer") || "").pathname;
      } catch {
        refPath = "";
      }
      const source = (b.source || refPath || url.hostname).toString().slice(0, 120);
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
            source,
          }),
        });
        if (!res.ok) {
          const detail = (await res.text()).slice(0, 300);
          return json({ error: "Failed to save", detail }, 502);
        }
        ctx.waitUntil(
          notifyNewLead(env, {
            name,
            email,
            phone: (b.phone || "").toString().slice(0, 60),
            company_url: (b.company_url || "").toString().slice(0, 300),
            message,
            source,
          }),
        );
        return json({ success: true });
      } catch (e) {
        return json({ error: "Save error", detail: String(e) }, 500);
      }
    }

    // ── Static assets ───────────────────────────────────────────────────────
    return env.ASSETS.fetch(request);
  },
};
