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

// Pages from the pre-September-2026 site that have a close equivalent today: 301 to it instead of 410.
// Shape: { "/new/path": "space-separated old paths" }. Old pages with no equivalent stay 410.
const LEGACY_GROUPS = {"/contact":"/free-seo-audit /pricing","/industries":"/locations","/industries/ac-maintenance":"/blog/hvac-content-strategy-seo /blog/seo-for-hvac-websites /seo-for-hvac-companies","/industries/accounting-firms":"/accounting-seo-agency /blog/accounting-firms-content-strategy-seo /blog/best-accounting-firm-dubai /blog/best-accounting-valuation-difc-firms-dubai /blog/seo-for-accounting-firms-websites /seo-for-accounting-firms-dubai","/industries/beauty-salons":"/blog/aeo-for-beauty-cosmetics /blog/geo-for-beauty-cosmetics /blog/local-seo-for-beauty-cosmetics /blog/seo-guide-for-beauty-cosmetics /seo-for-beauty-salons-dubai /seo-for-salons","/industries/business-setup-consultants":"/blog/best-difc-business-setup-company-dubai /seo-for-business-consultants-dubai","/industries/car-dealers":"/automotive-seo-agency /blog/aeo-for-automotive /blog/geo-for-automotive /blog/local-seo-for-automotive /blog/seo-guide-for-automotive /seo-for-automotive-dubai /seo-for-automotive-uae /seo-for-car-dealers-abu-dhabi /seo-for-car-dealers-dubai","/industries/car-rental":"/seo-for-car-rental-dubai","/industries/cleaning-companies":"/blog/cleaning-services-content-strategy-seo /blog/seo-for-cleaning-services-websites /seo-for-cleaning-companies /seo-for-cleaning-companies-dubai","/industries/construction":"/blog/aeo-for-construction /blog/geo-for-construction /blog/local-seo-for-construction /blog/seo-guide-for-construction /construction-seo-agency /seo-for-construction-abu-dhabi /seo-for-construction-boston /seo-for-construction-chicago /seo-for-construction-dallas /seo-for-construction-dubai /seo-for-construction-houston /seo-for-construction-los-angeles /seo-for-construction-mecca /seo-for-construction-medina /seo-for-construction-miami /seo-for-construction-san-francisco /seo-for-construction-uae /seo-for-contractors /website-design-for-construction","/industries/coworking-spaces":"/seo-for-coworking-spaces-dubai","/industries/dental-clinics":"/blog/aeo-for-dental-practices /blog/geo-for-dental-practices /blog/local-seo-for-dental-practices /blog/seo-for-dental-clinics-dubai /blog/seo-guide-for-dental-practices /dental-seo-agency /seo-for-dental-clinics-abu-dhabi /seo-for-dental-clinics-dubai /seo-for-dental-uae /seo-for-dentists /website-design-for-dentists","/industries/education":"/blog/aeo-for-education /blog/geo-for-education /blog/local-seo-for-education /blog/seo-guide-for-education /education-seo-agency /seo-for-education /seo-for-education-amman /seo-for-education-boston /seo-for-education-chicago /seo-for-education-dallas /seo-for-education-dubai /seo-for-education-houston /seo-for-education-los-angeles /seo-for-education-manama /seo-for-education-miami /seo-for-education-muscat /seo-for-education-san-francisco /seo-for-education-uae /seo-for-nurseries-dubai /seo-for-schools-abu-dhabi /seo-for-schools-sharjah","/industries/event-management":"/blog/answer-snippet-theft-prevention /blog/event-planning-content-strategy-seo /blog/event-schema-markup-guide /blog/seo-for-event-planning-websites /blog/seo-for-wedding-websites /blog/wedding-content-strategy-seo /seo-for-event-planners /seo-for-events-dubai /seo-for-wedding-venues-dubai","/industries/gyms-fitness":"/blog/aeo-for-fitness-gyms /blog/geo-for-fitness-gyms /blog/local-seo-for-fitness-gyms /blog/seo-guide-for-fitness-gyms /seo-for-gyms /seo-for-gyms-fitness-dubai /seo-for-personal-trainers-dubai /social-media-design-for-fitness","/industries/holiday-homes":"/seo-for-holiday-homes-dubai","/industries/home-furniture":"/seo-for-furniture-sharjah /seo-for-furniture-stores-dubai","/industries/hospitals-clinics":"/blog/aeo-for-healthcare /blog/aeo-for-hospitality /blog/eeat-for-medical-websites /blog/geo-for-healthcare /blog/geo-for-healthcare-clinics-uae /blog/geo-for-hospitality /blog/local-seo-for-healthcare /blog/local-seo-for-hospitality /blog/local-seo-for-medical-practices /blog/seo-for-hotels-hospitality-dubai /blog/seo-guide-for-healthcare /blog/seo-guide-for-hospitality /healthcare-seo-agency /hospitality-seo-agency /medical-seo-agency /seo-for-clinics-abu-dhabi /seo-for-clinics-dubai /seo-for-clinics-sharjah /seo-for-clinics-uae /seo-for-healthcare /seo-for-healthcare-abu-dhabi /seo-for-healthcare-amman /seo-for-healthcare-amsterdam /seo-for-healthcare-bangalore /seo-for-healthcare-berlin /seo-for-healthcare-boston /seo-for-healthcare-brisbane /seo-for-healthcare-chicago /seo-for-healthcare-companies /seo-for-healthcare-dallas /seo-for-healthcare-delhi /seo-for-healthcare-dubai /seo-for-healthcare-eindhoven /seo-for-healthcare-houston /seo-for-healthcare-kuala-lumpur /seo-for-healthcare-los-angeles /seo-for-healthcare-madrid /seo-for-healthcare-manama /seo-for-healthcare-mecca /seo-for-healthcare-medina /seo-for-healthcare-melbourne /seo-for-healthcare-miami /seo-for-healthcare-mumbai /seo-for-healthcare-muscat /seo-for-healthcare-paris /seo-for-healthcare-professionals-dubai /seo-for-healthcare-rotterdam /seo-for-healthcare-san-francisco /seo-for-healthcare-sydney /seo-for-healthcare-the-hague /seo-for-healthcare-toronto /seo-for-healthcare-uae /seo-for-healthcare-utrecht /seo-for-hospitality-amsterdam /seo-for-hospitality-berlin /seo-for-hospitality-eindhoven /seo-for-hospitality-madrid /seo-for-hospitality-paris /seo-for-hospitality-rotterdam /seo-for-hospitality-the-hague /seo-for-hospitality-utrecht /seo-for-hospitality-vienna /seo-for-medical-centers-dubai /seo-for-nhs-private-healthcare /social-media-design-for-healthcare /website-design-for-healthcare","/industries/hotels":"/seo-for-hotels /seo-for-hotels-abu-dhabi /seo-for-hotels-amman /seo-for-hotels-boston /seo-for-hotels-chicago /seo-for-hotels-dallas /seo-for-hotels-dubai /seo-for-hotels-houston /seo-for-hotels-los-angeles /seo-for-hotels-manama /seo-for-hotels-mecca /seo-for-hotels-medina /seo-for-hotels-miami /seo-for-hotels-muscat /seo-for-hotels-san-francisco /seo-for-hotels-uae /website-design-for-hotels","/industries/insurance-brokers":"/blog/aeo-for-insurance /blog/geo-for-insurance /blog/local-seo-for-insurance /blog/seo-guide-for-insurance /insurance-seo-agency /seo-for-insurance-companies /seo-for-insurance-dubai /seo-for-insurance-uae","/industries/interior-design":"/blog/interior-design-content-strategy-seo /blog/seo-for-interior-design-websites /seo-for-interior-designers /seo-for-interior-designers-dubai","/industries/law-firms":"/blog/aeo-for-law-firms /blog/eeat-for-legal-websites /blog/geo-for-law-firms /blog/local-seo-for-law-firms /blog/local-seo-for-law-firms-guide /blog/seo-for-law-firms-uae /blog/seo-guide-for-law-firms /law-firm-seo-agency /legal-seo-agency /seo-for-law-firms /seo-for-law-firms-abu-dhabi /seo-for-law-firms-dubai /seo-for-law-firms-mecca /seo-for-law-firms-medina /seo-for-law-firms-uae /seo-for-legal-amsterdam /seo-for-legal-berlin /seo-for-legal-boston /seo-for-legal-chicago /seo-for-legal-dallas /seo-for-legal-eindhoven /seo-for-legal-houston /seo-for-legal-los-angeles /seo-for-legal-madrid /seo-for-legal-miami /seo-for-legal-paris /seo-for-legal-rotterdam /seo-for-legal-san-francisco /seo-for-legal-the-hague /seo-for-legal-utrecht /website-design-for-law-firms","/industries/movers-packers":"/blog/moving-companies-content-strategy-seo /blog/seo-for-moving-companies-websites /seo-for-moving-companies-dubai","/industries/pest-control":"/seo-for-pest-control-dubai","/industries/physiotherapy-clinics":"/seo-for-physiotherapy-dubai","/industries/property-management":"/seo-for-property-management-dubai","/industries/real-estate":"/blog/aeo-for-real-estate /blog/geo-for-real-estate /blog/local-seo-for-real-estate /blog/seo-for-real-estate-dubai-2026 /blog/seo-guide-for-real-estate /real-estate-seo /real-estate-seo-agency /real-estate-seo-dubai /seo-for-real-estate /seo-for-real-estate-abu-dhabi /seo-for-real-estate-amman /seo-for-real-estate-amsterdam /seo-for-real-estate-bangalore /seo-for-real-estate-berlin /seo-for-real-estate-boston /seo-for-real-estate-brisbane /seo-for-real-estate-chicago /seo-for-real-estate-dallas /seo-for-real-estate-delhi /seo-for-real-estate-dubai /seo-for-real-estate-eindhoven /seo-for-real-estate-houston /seo-for-real-estate-kuala-lumpur /seo-for-real-estate-lisbon /seo-for-real-estate-los-angeles /seo-for-real-estate-madrid /seo-for-real-estate-manama /seo-for-real-estate-mecca /seo-for-real-estate-medina /seo-for-real-estate-melbourne /seo-for-real-estate-miami /seo-for-real-estate-mumbai /seo-for-real-estate-muscat /seo-for-real-estate-paris /seo-for-real-estate-rotterdam /seo-for-real-estate-san-francisco /seo-for-real-estate-sharjah /seo-for-real-estate-sydney /seo-for-real-estate-the-hague /seo-for-real-estate-toronto /seo-for-real-estate-uae /seo-for-real-estate-utrecht /seo-madrid-real-estate /social-media-design-for-real-estate /website-design-for-real-estate","/industries/recruitment-agencies":"/blog/aeo-for-recruitment-agencies /blog/geo-for-recruitment-agencies /blog/local-seo-for-recruitment-agencies /blog/seo-guide-for-recruitment-agencies /seo-for-recruitment-agencies /seo-for-recruitment-agencies-dubai","/industries/restaurants":"/blog/aeo-for-restaurants /blog/geo-for-restaurants /blog/local-seo-for-restaurants /blog/local-seo-for-restaurants-guide /blog/seo-guide-for-restaurants /seo-for-restaurants /seo-for-restaurants-abu-dhabi /seo-for-restaurants-boston /seo-for-restaurants-chicago /seo-for-restaurants-dallas /seo-for-restaurants-dubai /seo-for-restaurants-houston /seo-for-restaurants-los-angeles /seo-for-restaurants-mecca /seo-for-restaurants-medina /seo-for-restaurants-miami /seo-for-restaurants-san-francisco /seo-for-restaurants-sharjah /seo-for-restaurants-uae /social-media-design-for-restaurants /website-design-for-restaurants","/industries/spas-wellness":"/blog/spa-seo-guide /seo-for-spas-beauty-dubai /spa-seo","/industries/travel-agencies":"/blog/aeo-for-travel-tourism /blog/geo-for-travel-tourism /blog/local-seo-for-travel-tourism /blog/seo-guide-for-travel-tourism /seo-barcelona-tourism /seo-for-tourism-muscat /seo-for-travel-agencies-dubai","/industries/tuition-centres":"/seo-for-tutoring-dubai","/industries/yoga-studios":"/seo-for-yoga-studios-dubai","/services":"/digital-marketing-abu-dhabi /digital-marketing-dubai /digital-marketing-gcc /digital-marketing-sharjah","/services/answer-engine-optimization":"/aeo /aeo-agency-uae /aeo-services /blog/aeo-audit-checklist /blog/aeo-blog-post-optimization /blog/aeo-category-page-optimization /blog/aeo-faq-page-optimization /blog/aeo-for-b2b-companies /blog/aeo-for-best-of-queries /blog/aeo-for-comparison-queries /blog/aeo-for-definition-queries /blog/aeo-for-ecommerce /blog/aeo-for-ecommerce-sites /blog/aeo-for-financial-services /blog/aeo-for-how-to-questions /blog/aeo-for-local-businesses-guide /blog/aeo-for-logistics /blog/aeo-for-manufacturing /blog/aeo-for-price-queries /blog/aeo-for-professional-services /blog/aeo-for-saas /blog/aeo-for-service-businesses /blog/aeo-for-what-is-questions /blog/aeo-for-when-questions /blog/aeo-for-who-is-questions /blog/aeo-for-why-questions /blog/aeo-home-page-optimization /blog/aeo-product-page-optimization /blog/aeo-service-page-optimization /blog/aeo-vs-seo-differences-explained /blog/aeo-vs-traditional-seo /blog/answer-engine-optimization-complete-guide-2026 /blog/answer-engines-position-zero /blog/faq-content-strategy /blog/faq-content-that-wins-rich-results /blog/faq-schema-rich-results /blog/featured-snippet-maintenance-guide /blog/featured-snippet-types-guide /blog/featured-snippets-how-to-win /blog/featured-snippets-playbook /blog/measuring-aeo-success /blog/people-also-ask-complete-guide /blog/people-also-ask-content-strategy /blog/people-also-ask-seo-strategy /blog/voice-search-2026-guide /blog/voice-search-answer-optimization /blog/voice-search-optimization-2026 /blog/voice-search-optimization-guide /blog/what-is-answer-engine-optimization-aeo /blog/zero-click-search-lead-generation-2026 /blog/zero-click-search-strategy /blog/zero-click-search-strategy-2026 /featured-snippet-optimisation-dubai /featured-snippet-seo /voice-search-seo /voice-search-seo-dubai /zero-click-seo","/services/arabic-seo-services":"/arabic-seo-dubai /arabic-seo-gcc /arabic-seo-manama /arabic-seo-mena /arabic-seo-uae /blog/arabic-seo-guide /blog/hreflang-complete-guide /blog/hreflang-implementation-guide /blog/multilingual-schema-markup /blog/multilingual-seo-guide /hreflang-seo /multilingual-seo /multilingual-seo-dubai","/services/content-marketing-services":"/blog-seo-strategy /blog/architecture-firms-content-strategy-seo /blog/building-topical-authority /blog/buyer-journey-content-strategy /blog/cluster-content-strategy-guide /blog/consulting-firms-content-strategy-seo /blog/content-clusters-and-pillar-pages /blog/do-you-need-a-blog-for-seo-2026 /blog/electrical-services-content-strategy-seo /blog/it-companies-content-strategy-seo /blog/landscaping-content-strategy-seo /blog/local-content-strategy-guide /blog/long-form-content-strategy /blog/nonprofits-content-strategy-seo /blog/pet-care-content-strategy-seo /blog/photography-content-strategy-seo /blog/pillar-page-strategy-guide /blog/plumbing-content-strategy-seo /blog/printing-companies-content-strategy-seo /blog/question-cluster-content-strategy /blog/roofing-content-strategy-seo /blog/security-services-content-strategy-seo /blog/startups-content-strategy-seo /blog/topical-authority-content-clusters /blog/topical-map-building-guide /content-marketing-dubai /content-marketing-uae /pillar-content-seo /seo-content-strategy /seo-copywriting /seo-copywriting-dubai /seo-vs-content-marketing /topical-authority-dubai /topical-authority-seo","/services/conversion-rate-optimization":"/blog/ab-testing-for-seo /blog/cro-and-seo-integration-guide /blog/heatmaps-for-seo /blog/landing-page-cro-seo /blog/landing-page-seo-guide /blog/trust-signals-for-conversions /conversion-rate-seo /landing-page-design","/services/generative-engine-optimization":"/ai-overviews-strategy /ai-search-optimisation /ai-seo-agency /ai-seo-agency-dubai /ai-seo-gcc /ai-seo-uae /blog/aeo-vs-seo-vs-geo-differences-explained /blog/ai-overview-content-structure /blog/ai-overviews-optimization-strategy /blog/ai-overviews-ranking-factors-guide /blog/ai-overviews-vs-featured-snippets /blog/ai-search-optimization-uk-businesses-2026 /blog/ai-search-user-behavior-guide /blog/ai-search-visibility-in-abu-dhabi /blog/ai-search-visibility-in-amsterdam /blog/ai-search-visibility-in-bangalore /blog/ai-search-visibility-in-cairo /blog/ai-search-visibility-in-dubai /blog/ai-search-visibility-in-los-angeles /blog/ai-search-visibility-in-manama /blog/ai-search-visibility-in-melbourne /blog/ai-search-visibility-in-mumbai /blog/ai-search-visibility-in-sharjah /blog/ai-search-visibility-in-sydney /blog/ai-search-visibility-in-toronto /blog/ai-seo-tools-guide-2026 /blog/audit-brand-ai-visibility-20-minutes /blog/brand-consistency-for-geo /blog/brand-mentions-for-geo /blog/chatgpt-search-optimization /blog/combining-geo-and-aeo-strategies /blog/content-clusters-for-ai-search /blog/e-e-a-t-and-geo-connection /blog/future-of-search-generative-ai-dubai /blog/generative-ai-content-requirements /blog/geo-audit-checklist-guide /blog/geo-content-calendar /blog/geo-for-b2b-companies /blog/geo-for-ecommerce /blog/geo-for-enterprise /blog/geo-for-financial-services /blog/geo-for-logistics /blog/geo-for-manufacturing /blog/geo-for-professional-services /blog/geo-for-retail-brands /blog/geo-for-saas /blog/geo-reporting-guide /blog/geo-roi-measurement-guide /blog/geo-strategy-for-indonesia-businesses /blog/geo-strategy-for-malaysia-businesses /blog/geo-strategy-for-nigeria-businesses /blog/geo-strategy-for-pakistan-businesses /blog/geo-strategy-for-philippines-businesses /blog/geo-strategy-for-thailand-businesses /blog/geo-strategy-for-uae-businesses /blog/geo-strategy-for-uk-businesses /blog/geo-strategy-playbook-2026 /blog/geo-targeting-in-gsc /blog/geo-technical-requirements /blog/geo-vs-seo-comparison-detailed /blog/geo-vs-seo-what-changes /blog/getting-surfaced-by-google-gemini /blog/google-ai-overviews-arabic-gulf-businesses /blog/google-ai-overviews-uae-businesses-2026 /blog/how-ai-search-engines-choose-which-brands-to-cite /blog/how-perplexity-picks-its-sources /blog/how-to-get-cited-by-chatgpt /blog/how-to-get-cited-by-gemini /blog/how-to-get-cited-by-google-ai-overviews /blog/how-to-get-cited-by-perplexity /blog/how-to-get-cited-in-google-ai-overviews /blog/internal-linking-for-ai-crawlers /blog/llm-optimization-guide /blog/llms-txt-file-explained /blog/llms-txt-implementation-guide-2026 /blog/measuring-ai-search-visibility /blog/measuring-ai-search-visibility-search-console-2026 /blog/robots-txt-for-ai-crawlers-2026 /blog/schema-markup-for-ai-search /blog/track-ai-chatgpt-referral-traffic-ga4 /blog/what-chatgpt-sees-when-it-looks-for-your-dubai-business /blog/what-is-generative-engine-optimization-geo /blog/why-chatgpt-favours-wikipedia /blog/will-ai-overviews-reduce-my-website-traffic /blog/writing-for-ai-search /chatgpt-seo /dubai-seo-specialists /gemini-seo /generative-engine-optimisation-dubai /geo /geo-agency-uae /geo-services /google-ai-overview-seo /llm-seo-optimisation /perplexity-seo /search-generative-experience","/services/google-ads-management":"/blog/do-you-need-seo-if-you-run-google-ads /blog/google-ads-vs-seo-dubai-roi-2026 /blog/seo-and-paid-search-together /blog/seo-vs-ppc-which-is-right /google-ads-management-dubai /seo-vs-ppc","/services/google-business-profile-management":"/blog/google-business-profile-abu-dhabi-guide /blog/google-business-profile-optimisation-checklist-2026 /blog/google-business-profile-optimization /blog/google-business-profile-suspended-what-to-do /blog/google-maps-ranking-factors /blog/google-maps-seo /blog/uae-map-pack-local-ranking-factors /blog/why-not-showing-google-maps-fixes /google-business-profile-dubai /google-business-profile-seo /google-maps-seo-abu-dhabi /google-maps-seo-dubai","/services/linkedin-ads-management":"/blog/linkedin-articles-seo-guide /blog/linkedin-seo-strategy-guide /linkedin-design-services","/services/local-seo-services":"/blog/aeo-for-near-me-queries /blog/geo-citation-building-guide /blog/local-citation-building-guide /blog/local-seo-audit-guide /blog/local-seo-for-ecommerce /blog/local-seo-for-financial-services /blog/local-seo-for-logistics /blog/local-seo-for-manufacturing /blog/local-seo-for-professional-services /blog/local-seo-for-saas /blog/local-seo-reporting-guide /blog/local-seo-vs-national-seo-guide /blog/multi-location-local-seo /blog/near-me-seo-optimization /blog/review-generation-strategy /blog/review-schema-markup-guide /blog/topical-authority-for-ai-citations /local-citation-building /local-seo /local-seo-abu-dhabi /local-seo-amsterdam /local-seo-berlin /local-seo-chicago /local-seo-gcc /local-seo-houston /local-seo-los-angeles /local-seo-madrid /local-seo-manama /local-seo-miami /local-seo-paris /local-seo-sharjah /local-seo-uae /review-seo","/services/marketing-analytics-and-reporting":"/blog/client-seo-reporting-guide /blog/conversion-tracking-seo-guide /blog/google-analytics-4-seo-guide /blog/link-building-roi-measurement /blog/measuring-seo-success-guide /blog/rank-tracking-tools-guide /blog/revenue-attribution-seo /blog/seo-kpis-complete-guide /blog/seo-reporting-templates-guide /blog/seo-reporting-tools-guide /blog/seo-roi-measurement-guide /blog/tracking-seo-metrics-revenue /google-analytics-seo /rank-tracking /seo-analytics /seo-kpi-tracking /seo-reporting","/services/seo-aeo-geo":"/affordable-seo-dubai /affordable-seo-services /affordable-seo-uae /amazon-alexa-seo /anchor-text-seo /answer-box-seo /apple-search-seo /b2b-seo /b2b-seo-agency /banking-seo-agency /best-seo-agency /best-seo-agency-uae /best-seo-company-uae /bing-copilot-seo /competitor-seo-analysis /consulting-seo-agency /content-led-seo /contentful-seo /digital-pr-seo /e-e-a-t-seo /ecommerce-seo /ecommerce-seo-agency /ecommerce-seo-amsterdam /ecommerce-seo-berlin /ecommerce-seo-chicago /ecommerce-seo-dubai /ecommerce-seo-gcc /ecommerce-seo-houston /ecommerce-seo-los-angeles /ecommerce-seo-madrid /ecommerce-seo-miami /ecommerce-seo-paris /ecommerce-seo-uae /enterprise-seo-gcc /enterprise-seo-uae /entity-seo /faceted-navigation-seo /fintech-seo-agency /fractional-seo /freelance-seo-uae /future-of-seo /guest-posting-seo /hire-seo-expert-dubai /how-much-does-seo-cost /image-seo /internal-linking-seo /jamstack-seo /knowledge-graph-seo /link-audit-seo /local-pack-seo /log-file-analysis-seo /magento-seo /manufacturing-seo-agency /media-seo-agency /monthly-seo-packages-uae /multiregional-seo /nap-seo /nonprofit-seo-agency /on-demand-seo /pagination-seo /podcast-seo /professional-services-seo /programmatic-seo /progressive-web-app-seo /rich-results-seo /saas-seo-agency /semantic-seo-services /seo-a-b-testing /seo-abu-dhabi /seo-abu-dhabi-corniche /seo-adelaide /seo-agency-ajman /seo-agency-al-quoz /seo-agency-business-bay /seo-agency-deira /seo-agency-difc /seo-agency-dubai /seo-agency-dubai-marina /seo-agency-gcc /seo-agency-malaysia /seo-agency-philippines /seo-agency-sharjah /seo-agency-uae /seo-agency-vs-freelancer /seo-ajman /seo-al-ain /seo-al-barsha /seo-al-quoz /seo-al-reem-island /seo-amman /seo-amsterdam /seo-amsterdam-fintech /seo-asia /seo-atlanta /seo-austin /seo-automation /seo-bangalore /seo-bangkok /seo-barcelona /seo-berlin /seo-berlin-startups /seo-boston /seo-brisbane /seo-bur-dubai /seo-business-bay /seo-calgary /seo-california /seo-canberra /seo-case-studies /seo-charlotte /seo-chennai /seo-chicago /seo-colorado /seo-company-abu-dhabi /seo-company-reviews /seo-company-sharjah /seo-consultant-abu-dhabi /seo-consultant-dubai /seo-consultant-uae /seo-consulting /seo-content-audit /seo-dallas /seo-dashboard /seo-deira /seo-delhi /seo-denver /seo-difc /seo-downtown-dubai /seo-dubai /seo-dubai-internet-city /seo-dubai-marina /seo-dubai-media-city /seo-dubai-silicon-oasis /seo-dubai-south /seo-eindhoven /seo-expert-dubai /seo-florida /seo-for-accelerated-pages /seo-for-accountants /seo-for-affiliates /seo-for-agencies /seo-for-amazon-sellers /seo-for-api /seo-for-apps /seo-for-architects /seo-for-architects-dubai /seo-for-b2b-companies /seo-for-b2b-companies-dubai /seo-for-banks-uae /seo-for-beauty-brands /seo-for-catering-companies-dubai /seo-for-coaches /seo-for-coaching-businesses /seo-for-consultants /seo-for-crypto-companies-dubai /seo-for-d2c-brands /seo-for-difc-finance-firms /seo-for-doctors /seo-for-dropshipping /seo-for-ecommerce /seo-for-ecommerce-abu-dhabi /seo-for-ecommerce-amman /seo-for-ecommerce-amsterdam /seo-for-ecommerce-bangalore /seo-for-ecommerce-berlin /seo-for-ecommerce-boston /seo-for-ecommerce-brands /seo-for-ecommerce-brisbane /seo-for-ecommerce-chicago /seo-for-ecommerce-dallas /seo-for-ecommerce-delhi /seo-for-ecommerce-eindhoven /seo-for-ecommerce-houston /seo-for-ecommerce-kuala-lumpur /seo-for-ecommerce-los-angeles /seo-for-ecommerce-madrid /seo-for-ecommerce-manama /seo-for-ecommerce-mecca /seo-for-ecommerce-medina /seo-for-ecommerce-melbourne /seo-for-ecommerce-miami /seo-for-ecommerce-mumbai /seo-for-ecommerce-muscat /seo-for-ecommerce-paris /seo-for-ecommerce-rotterdam /seo-for-ecommerce-san-francisco /seo-for-ecommerce-sharjah /seo-for-ecommerce-sydney /seo-for-ecommerce-the-hague /seo-for-ecommerce-toronto /seo-for-ecommerce-utrecht /seo-for-electricians /seo-for-enterprise /seo-for-fashion-dubai /seo-for-finance-dubai /seo-for-financial-advisors /seo-for-financial-advisors-dubai /seo-for-fintech /seo-for-fintech-amman /seo-for-fintech-amsterdam /seo-for-fintech-bangalore /seo-for-fintech-berlin /seo-for-fintech-boston /seo-for-fintech-brisbane /seo-for-fintech-chicago /seo-for-fintech-dallas /seo-for-fintech-delhi /seo-for-fintech-eindhoven /seo-for-fintech-houston /seo-for-fintech-kuala-lumpur /seo-for-fintech-los-angeles /seo-for-fintech-madrid /seo-for-fintech-manama /seo-for-fintech-mecca /seo-for-fintech-medina /seo-for-fintech-melbourne /seo-for-fintech-miami /seo-for-fintech-mumbai /seo-for-fintech-muscat /seo-for-fintech-paris /seo-for-fintech-rotterdam /seo-for-fintech-san-francisco /seo-for-fintech-stockholm /seo-for-fintech-sydney /seo-for-fintech-the-hague /seo-for-fintech-toronto /seo-for-fintech-uae /seo-for-fintech-utrecht /seo-for-food-delivery-dubai /seo-for-freelancers /seo-for-government-uae /seo-for-import-export-dubai /seo-for-infinite-scroll /seo-for-influencers /seo-for-it-companies-dubai /seo-for-jewelry-stores-dubai /seo-for-large-sites /seo-for-lead-generation /seo-for-logistics /seo-for-logistics-dubai /seo-for-logistics-sharjah /seo-for-logistics-uae /seo-for-luxury-brands-dubai /seo-for-manufacturers /seo-for-manufacturing-amsterdam /seo-for-manufacturing-berlin /seo-for-manufacturing-eindhoven /seo-for-manufacturing-madrid /seo-for-manufacturing-paris /seo-for-manufacturing-rotterdam /seo-for-manufacturing-sharjah /seo-for-manufacturing-the-hague /seo-for-manufacturing-uae /seo-for-manufacturing-utrecht /seo-for-marketplace /seo-for-marketplace-sellers /seo-for-medium-business /seo-for-mortgage-brokers-dubai /seo-for-news /seo-for-nonprofits /seo-for-nonprofits-uae /seo-for-oil-gas-abu-dhabi /seo-for-online-stores-uae /seo-for-pet-services-dubai /seo-for-pharmacies-dubai /seo-for-photographers /seo-for-photographers-dubai /seo-for-platform /seo-for-plumbers /seo-for-podcasters /seo-for-printing-companies-dubai /seo-for-professional-services /seo-for-pwa /seo-for-remote-teams /seo-for-saas-amsterdam /seo-for-saas-b2b /seo-for-saas-bangalore /seo-for-saas-berlin /seo-for-saas-boston /seo-for-saas-brisbane /seo-for-saas-chicago /seo-for-saas-companies /seo-for-saas-dallas /seo-for-saas-delhi /seo-for-saas-dubai /seo-for-saas-eindhoven /seo-for-saas-houston /seo-for-saas-kuala-lumpur /seo-for-saas-los-angeles /seo-for-saas-madrid /seo-for-saas-melbourne /seo-for-saas-miami /seo-for-saas-mumbai /seo-for-saas-paris /seo-for-saas-rotterdam /seo-for-saas-san-francisco /seo-for-saas-sydney /seo-for-saas-the-hague /seo-for-saas-toronto /seo-for-saas-utrecht /seo-for-scale /seo-for-security-companies-dubai /seo-for-service-businesses /seo-for-small-business /seo-for-small-business-dubai /seo-for-smes-uae /seo-for-solar-companies-dubai /seo-for-solopreneurs /seo-for-startups /seo-for-startups-dubai /seo-for-startups-uae /seo-for-subscription-businesses /seo-for-tech-amman /seo-for-tech-startups /seo-for-technology-companies-dubai /seo-for-travel-companies /seo-for-travel-uae /seo-for-vision-2030 /seo-for-vision-2030-gcc /seo-forecasting /seo-fujairah /seo-gcc /seo-gdpr-compliant /seo-georgia /seo-gold-coast /seo-houston /seo-hyderabad /seo-illinois /seo-indonesia /seo-jakarta /seo-jlt /seo-jumeirah /seo-jumeirah-village-circle /seo-khalifa-city /seo-kuala-lumpur /seo-las-vegas /seo-lisbon /seo-lisbon-startups /seo-liverpool /seo-los-angeles /seo-madrid /seo-manama /seo-manila /seo-massachusetts /seo-mecca /seo-medina /seo-melbourne /seo-mena /seo-miami /seo-middle-east /seo-minneapolis /seo-montreal /seo-motor-city /seo-mumbai /seo-muscat /seo-mussafah /seo-nottingham /seo-ohio /seo-outsourcing /seo-packages /seo-palm-jumeirah /seo-paris /seo-paris-luxury /seo-perth /seo-philadelphia /seo-phoenix /seo-portland /seo-prague /seo-pricing /seo-pricing-dubai /seo-pricing-uae /seo-pune /seo-ras-al-khaimah /seo-reseller-program /seo-reseller-uae /seo-roi-calculator /seo-rome /seo-rotterdam /seo-saadiyat-island /seo-san-diego /seo-san-francisco /seo-seattle /seo-services /seo-services-abu-dhabi /seo-services-dubai /seo-services-gcc /seo-services-thailand /seo-sharjah /seo-sheffield /seo-sprint /seo-stockholm /seo-stockholm-saas /seo-strategy-consulting /seo-sweden /seo-switzerland /seo-sydney /seo-team-augmentation /seo-tecom /seo-texas /seo-the-hague /seo-toronto /seo-uae /seo-umm-al-quwain /seo-utrecht /seo-vancouver /seo-vienna /seo-vienna-professional-services /seo-washington-dc /seo-washington-state /seo-yas-island /seo-zurich /seo-zurich-finance /shopify-seo-agency /shopify-seo-dubai /shopify-seo-uae /small-business-seo-uae /startup-seo-agency /technology-seo-agency /thought-leadership-seo /top-seo-company /travel-seo-agency /video-seo /webflow-seo /white-label-seo-agency /white-label-seo-uae /woocommerce-seo /wordpress-seo-agency /wordpress-seo-dubai /wordpress-seo-uae","/services/social-media-management":"/affordable-social-media-design /blog/seo-vs-social-media-marketing-small-business /social-media-banner-design /social-media-branding /social-media-content-design /social-media-design-dubai /social-media-design-for-ecommerce /social-media-design-for-finance /social-media-design-for-small-business /social-media-design-package /social-media-design-services /social-media-graphics-design /social-media-marketing-design /social-media-post-design","/services/technical-seo-services":"/angular-seo /blog/angular-seo-guide /blog/article-schema-markup-guide /blog/brand-entity-schema-guide /blog/breadcrumblist-schema-markup-guide /blog/canonical-tags-complete-guide /blog/comparison-page-seo-guide /blog/core-web-vitals-2026-complete-guide /blog/core-web-vitals-matter /blog/core-web-vitals-optimization-guide /blog/crawl-budget-explained /blog/crawl-budget-optimization /blog/crawl-budget-optimization-2026 /blog/crawl-error-fixing-guide /blog/crawled-currently-not-indexed-how-to-fix /blog/diagnosing-indexing-problems /blog/duplicate-content-canonical-tags /blog/faqpage-schema-markup-guide /blog/fixing-inp-the-hardest-core-web-vital /blog/gatsby-seo-guide /blog/howto-schema-and-step-content /blog/howto-schema-markup-guide /blog/indexing-explained /blog/indexing-speed-optimization /blog/javascript-seo-guide /blog/javascript-seo-rendering-guide /blog/jobposting-schema-markup-guide /blog/local-schema-markup-guide /blog/localbusiness-schema-markup-guide /blog/mobile-first-indexing-2026 /blog/mobile-first-indexing-explained /blog/nextjs-advanced-seo-guide /blog/nextjs-seo-guide /blog/nuxtjs-seo-guide /blog/on-page-seo-explained /blog/organization-schema-markup-guide /blog/page-speed-optimization-for-seo /blog/passage-indexing-explained /blog/person-schema-markup-guide /blog/product-schema-markup-guide /blog/product-schema-rich-results /blog/react-advanced-seo-guide /blog/react-seo-guide /blog/recipe-schema-markup-guide /blog/redirects-seo-best-practices /blog/robots-txt-explained /blog/schema-markup-implementation-guide /blog/seo-during-website-migration /blog/service-schema-markup-guide /blog/structured-data-for-ai-tools /blog/structured-data-types-guide /blog/sveltekit-seo-guide /blog/technical-seo-audit-checklist /blog/technical-seo-explained /blog/technical-seo-tools-comparison /blog/videoobject-schema-markup-guide /blog/vuejs-seo-guide /blog/website-schema-markup-guide /blog/xml-sitemaps-best-practices /blog/xml-sitemaps-explained /canonical-seo /core-web-vitals-seo /crawl-budget-seo /crawl-error-fixing /headless-cms-seo /headless-seo /javascript-seo /mobile-first-indexing /mobile-seo /mobile-seo-dubai /next-js-seo /on-page-seo /on-page-seo-chicago /on-page-seo-dubai /on-page-seo-houston /on-page-seo-los-angeles /on-page-seo-miami /on-page-seo-uae /page-speed-seo /react-seo /redirect-seo /robots-txt-seo /schema-markup-dubai /schema-markup-seo /seo-audit /seo-audit-dubai /seo-audit-uae /site-migration-seo /structured-data-seo /technical-seo /technical-seo-amsterdam /technical-seo-audit-service /technical-seo-berlin /technical-seo-chicago /technical-seo-dubai /technical-seo-houston /technical-seo-los-angeles /technical-seo-madrid /technical-seo-manama /technical-seo-miami /technical-seo-paris /technical-seo-uae /vue-seo /xml-sitemap-seo","/services/tiktok-ads-management":"/blog/tiktok-seo-for-businesses","/services/website-design-and-development":"/affordable-website-design /mobile-friendly-website-design /professional-website-design /shopify-website-design /website-20-aed /website-design-and-seo /website-design-dubai /website-design-for-coaches /website-design-for-consultants /website-design-for-doctors /website-design-for-ecommerce /website-design-for-finance /website-design-for-seo /website-design-for-small-business /website-design-for-startups /website-design-package /wordpress-website-design"};
const LEGACY = new Map(Object.entries(LEGACY_GROUPS).flatMap(([to, from]) => from.split(" ").map((p) => [p, to])));

const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page removed | SEODXB</title></head><body style="font-family:system-ui,sans-serif;max-width:32rem;margin:15vh auto;padding:0 1rem;color:#0f1d2e"><h1>This page no longer exists</h1><p>SEODXB has a new website. <a href="/">Go to the homepage</a>.</p></body></html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      url.protocol = "https:";
      return new Response(null, {
        status: 301,
        headers: {
          "Location": url.toString(),
          "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        },
      });
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

    const legacy = LEGACY.get(url.pathname.toLowerCase());
    if (legacy) return Response.redirect(url.origin + legacy, 301);

    return new Response(GONE_HTML, {
      status: 410,
      headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  },
};
