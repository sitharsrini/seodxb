interface Env {
  BREVO_API_KEY: string;
  BREVO_FROM_EMAIL?: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function clip(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}

function safeSiteUrl(raw: string): string {
  const value = raw.trim();
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return "";
    if (url.hostname !== "seodxb.com" && url.hostname !== "www.seodxb.com") return "";
    return `https://seodxb.com${url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "")}`;
  } catch {
    return "";
  }
}

function pageLabel(path: string): string {
  const labels: Record<string, string> = {
    "/": "Home",
    "/contact": "Contact",
    "/seo-audit": "SEO audit",
    "/pricing": "Pricing",
    "/about": "About",
    "/aeo": "AEO",
    "/geo": "GEO",
    "/on-page-seo": "On-page SEO",
    "/technical-seo": "Technical SEO",
    "/local-seo": "Local SEO",
    "/international-seo": "International SEO",
    "/seo-agency-dubai": "SEO agency Dubai",
    "/seo-abu-dhabi": "SEO Abu Dhabi",
    "/seo-uae": "SEO UAE",
    "/real-estate-seo": "Real estate SEO",
    "/seo-for-healthcare": "Healthcare SEO",
    "/seo-for-restaurants": "Restaurant SEO",
    "/ecommerce-seo": "Ecommerce SEO",
    "/seo-for-law-firms": "Law firm SEO",
    "/blog": "Journal",
  };
  if (labels[path]) return labels[path];
  if (path.startsWith("/blog/")) return `Journal: ${path.slice(6)}`;
  return path || "Unknown page";
}

function row(label: string, valueHtml: string): string {
  return `<tr><td style="padding:8px 0;color:#666;width:160px;vertical-align:top">${label}</td><td style="padding:8px 0;font-weight:600">${valueHtml}</td></tr>`;
}

const jsonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "https://seodxb.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const FROM_EMAIL = "hello@seodxb.com";
const TO_EMAIL = "hi@Listi.ae";

export const onRequestOptions: PagesFunction<Env> = async () =>
  new Response(null, { status: 204, headers: jsonHeaders });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const headers = jsonHeaders;

  try {
    const body = await request.json<{
      from_name?: string;
      reply_to?: string;
      phone?: string;
      company_url?: string;
      message?: string;
      page_url?: string;
      page_path?: string;
      page_title?: string;
      referrer?: string;
      utm_source?: string;
      utm_medium?: string;
      utm_campaign?: string;
    }>();

    const from_name = (body.from_name || "").trim();
    const reply_to = (body.reply_to || "").trim();
    const phone = (body.phone || "").trim();
    const company_url = (body.company_url || "").trim();
    const message = (body.message || "").trim();
    const page_url = safeSiteUrl(body.page_url || "");
    const page_path = clip((body.page_path || "").trim() || (page_url ? new URL(page_url).pathname : ""), 200);
    const page_title = clip((body.page_title || "").trim(), 200);
    const referrer = clip((body.referrer || "").trim(), 500);
    const utm_source = clip((body.utm_source || "").trim(), 80);
    const utm_medium = clip((body.utm_medium || "").trim(), 80);
    const utm_campaign = clip((body.utm_campaign || "").trim(), 80);

    if (!from_name || !reply_to || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers,
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reply_to)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers,
      });
    }

    if (
      from_name.length > 200 ||
      message.length > 8000 ||
      reply_to.length > 200 ||
      phone.length > 40 ||
      company_url.length > 500
    ) {
      return new Response(JSON.stringify({ error: "Field too long" }), {
        status: 400,
        headers,
      });
    }

    if (!env.BREVO_API_KEY) {
      return new Response(JSON.stringify({ error: "Mail is not configured" }), {
        status: 503,
        headers,
      });
    }

    const senderEmail = (env.BREVO_FROM_EMAIL || FROM_EMAIL).trim();
    const label = pageLabel(page_path || "/");
    const when = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
    const wa = phone
      ? `https://wa.me/${phone.replace(/[^\d]/g, "")}`
      : "";
    const siteLink = company_url ? escapeHtml(company_url) : "";

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "SEODXB Contact", email: senderEmail },
        to: [{ email: TO_EMAIL, name: "SEODXB" }],
        replyTo: { email: reply_to, name: from_name },
        subject: `Lead · ${label} · ${from_name}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:640px">
            <p style="margin:0 0 8px;color:#666;font-size:13px;text-transform:uppercase;letter-spacing:.04em">New lead</p>
            <h2 style="margin:0 0 20px">${escapeHtml(from_name)} from ${escapeHtml(label)}</h2>
            <table style="width:100%;border-collapse:collapse">
              ${row("Page", page_url ? `<a href="${escapeHtml(page_url)}">${escapeHtml(label)} (${escapeHtml(page_path || "/")})</a>` : escapeHtml(label))}
              ${row("Page title", escapeHtml(page_title || "not given"))}
              ${row("Name", escapeHtml(from_name))}
              ${row("Email", `<a href="mailto:${escapeHtml(reply_to)}">${escapeHtml(reply_to)}</a>`)}
              ${row("Phone", phone ? `${escapeHtml(phone)}${wa ? ` · <a href="${escapeHtml(wa)}">WhatsApp</a>` : ""}` : "not given")}
              ${row("Company URL", siteLink ? `<a href="${siteLink}">${siteLink}</a>` : "not given")}
              ${row("Referrer", escapeHtml(referrer || "direct / unknown"))}
              ${row("UTM", [utm_source, utm_medium, utm_campaign].filter(Boolean).join(" / ") || "none")}
              ${row("Received", when)}
            </table>
            <hr style="margin:24px 0;border:none;border-top:1px solid #eee"/>
            <p style="color:#666;margin:0 0 8px">Message</p>
            <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Brevo error:", err.slice(0, 500));
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 502,
        headers,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
};
