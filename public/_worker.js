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

// Notify the owner about a new lead on two channels, both best-effort:
// 1. ntfy.sh push notification - free, no account or key, always on. The owner
//    subscribes to the topic in the ntfy app or at ntfy.sh to receive alerts.
// 2. Resend email - only when RESEND_API_KEY is set.
const NTFY_TOPIC = "seodxb-leads-a7k2x9";

async function notifyNewLead(env, lead) {
  // Always-on push alert (no credentials needed).
  try {
    await fetch(`https://ntfy.sh/${env.NTFY_TOPIC || NTFY_TOPIC}`, {
      method: "POST",
      headers: {
        Title: `New lead: ${(lead.name || lead.email || lead.company_url || "website").toString().slice(0, 80)}`,
        Tags: "moneybag",
        Click: "https://seodxb.com/leads-admin",
      },
      body:
        `Name: ${lead.name || "-"}\nEmail: ${lead.email || "-"}\nPhone: ${lead.phone || "-"}\n` +
        `Company: ${lead.company_url || "-"}\nSource: ${lead.source || "-"}\n\n${(lead.message || "").toString().slice(0, 500)}`,
    });
  } catch {
    /* best-effort */
  }

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

// On-page SEO audit of fetched HTML. No AI, no key: pure checks, so it is free.
function analyzeSeo(site, html) {
  const items = [];
  const add = (label, status, detail) => items.push({ label, status, detail });
  const get = (re) => {
    const m = html.match(re);
    return m ? (m[1] || "").trim() : null;
  };

  add("HTTPS", /^https:\/\//i.test(site) ? "pass" : "fail",
    /^https:\/\//i.test(site) ? "Served over HTTPS." : "Use HTTPS. It is a ranking and trust signal.");

  const title = get(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!title) add("Title tag", "fail", "No title found. Add a unique, descriptive title.");
  else {
    const n = title.length;
    add("Title tag", n >= 30 && n <= 65 ? "pass" : "warn",
      `"${title.slice(0, 70)}" (${n} chars). ${n < 30 ? "Short, aim 30-60." : n > 65 ? "Long, may truncate, aim 30-60." : "Good length."}`);
  }

  const desc = get(/<meta[^>]+name=["']description["'][^>]*content=["']([\s\S]*?)["']/i)
    || get(/<meta[^>]+content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
  if (!desc) add("Meta description", "fail", "No meta description. Add one of 120-160 characters.");
  else {
    const n = desc.length;
    add("Meta description", n >= 110 && n <= 170 ? "pass" : "warn",
      `${n} chars. ${n < 110 ? "Short, aim 120-160." : n > 170 ? "Long, may truncate, aim 120-160." : "Good length."}`);
  }

  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  add("H1 heading", h1s === 1 ? "pass" : h1s === 0 ? "fail" : "warn",
    h1s === 0 ? "No H1 found. Add one clear H1." : h1s === 1 ? "Exactly one H1." : `${h1s} H1s found. Use a single H1.`);

  const h2s = (html.match(/<h2[\s>]/gi) || []).length;
  add("Subheadings (H2)", h2s >= 1 ? "pass" : "warn",
    h2s >= 1 ? `${h2s} H2 headings, good structure.` : "No H2s. Structure content with subheadings.");

  const canonical = get(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  add("Canonical tag", canonical ? "pass" : "warn",
    canonical ? "Canonical tag set." : "No canonical tag. Add one to avoid duplicate-content issues.");

  const robots = get(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i) || "";
  add("Indexable", /noindex/i.test(robots) ? "fail" : "pass",
    /noindex/i.test(robots) ? "Page is set to NOINDEX and will not rank." : "Page is indexable.");

  add("Mobile viewport", /<meta[^>]+name=["']viewport["']/i.test(html) ? "pass" : "fail",
    /<meta[^>]+name=["']viewport["']/i.test(html) ? "Viewport meta present." : "No viewport meta. Add it for mobile.");

  const og = /<meta[^>]+property=["']og:title["']/i.test(html) && /<meta[^>]+property=["']og:image["']/i.test(html);
  add("Social (Open Graph)", og ? "pass" : "warn",
    og ? "og:title and og:image present." : "Missing Open Graph tags for rich social sharing.");

  const imgs = html.match(/<img[^>]*>/gi) || [];
  const noAlt = imgs.filter((t) => !/\salt=/i.test(t)).length;
  add("Image alt text", imgs.length === 0 ? "warn" : noAlt === 0 ? "pass" : "warn",
    imgs.length === 0 ? "No images found." : noAlt === 0 ? `All ${imgs.length} images have alt text.` : `${noAlt} of ${imgs.length} images missing alt text.`);

  add("Structured data (schema)", /<script[^>]+type=["']application\/ld\+json["']/i.test(html) ? "pass" : "warn",
    /<script[^>]+type=["']application\/ld\+json["']/i.test(html) ? "JSON-LD structured data found." : "No structured data. Add schema for rich results and AI citations.");

  const lang = get(/<html[^>]+lang=["']([^"']+)["']/i);
  add("Language attribute", lang ? "pass" : "warn",
    lang ? `lang="${lang}".` : "No lang attribute on <html>. Add it (e.g. en or ar).");

  const text = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  add("Content depth", words >= 300 ? "pass" : "warn",
    `~${words} words. ${words < 300 ? "Thin, aim for 300+ words of useful content." : "Reasonable content length."}`);

  const pass = items.filter((i) => i.status === "pass").length;
  return { score: Math.round((pass / items.length) * 100), items };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    if (host === "www.seodxb.com" || host.startsWith("www.")) {
      url.hostname = "seodxb.com";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/sitemap-index.xml" || url.pathname === "/sitemap-0.xml") {
      return Response.redirect("https://seodxb.com/sitemap.xml", 301);
    }
    if (url.pathname === "/thank-you" || url.pathname === "/thank-you/") {
      return Response.redirect("https://seodxb.com/contact", 301);
    }
    if (url.pathname === "/seo-packages" || url.pathname === "/seo-packages/") {
      return Response.redirect("https://seodxb.com/pricing", 301);
    }
    if (url.pathname === "/keyword-index.csv") {
      return new Response("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex, nofollow" } });
    }
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

    // ── SEO Optimizer: free on-page audit of any URL ────────────────────────
    if (url.pathname === "/api/seo-check" && request.method === "POST") {
      let b;
      try {
        b = await request.json();
      } catch {
        return json({ error: "Invalid request" }, 400);
      }
      const website = (b.website || "").toString().trim().slice(0, 300);
      const email = (b.email || "").toString().trim().slice(0, 200);
      if (!website) return json({ error: "Please enter a website URL." }, 400);
      const site = /^https?:\/\//i.test(website) ? website : `https://${website}`;
      let host = "";
      try {
        host = new URL(site).hostname;
      } catch {
        return json({ error: "That does not look like a valid URL." }, 400);
      }
      if (/^(localhost$|127\.|0\.0\.0\.0|10\.|192\.168\.|169\.254\.)/i.test(host)) {
        return json({ error: "Please enter a public website URL." }, 400);
      }
      const lead = { name: email || "SEO Optimizer user", email, phone: "", company_url: site, message: "SEO Optimizer audit request.", source: "seo-optimizer" };
      ctx.waitUntil(
        (async () => {
          try {
            await fetch(`${SUPABASE_URL}/rest/v1/seodxb_leads`, {
              method: "POST",
              headers: { ...sb, Prefer: "return=minimal" },
              body: JSON.stringify(lead),
            });
          } catch {
            /* best-effort */
          }
          await notifyNewLead(env, lead);
        })(),
      );
      try {
        const r = await fetch(site, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; SEODXB-SEO-Checker/1.0; +https://seodxb.com)" },
          redirect: "follow",
        });
        if (!r.ok) return json({ error: `Could not fetch the page (HTTP ${r.status}). Check the URL is correct and public.` }, 200);
        const htmlText = (await r.text()).slice(0, 800000);
        return json({ result: analyzeSeo(site, htmlText) });
      } catch {
        return json({ error: "Could not reach that URL. Check it is correct and publicly accessible." }, 200);
      }
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
