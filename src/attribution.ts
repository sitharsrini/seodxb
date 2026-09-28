// First-touch lead attribution: remembers where a visitor first arrived from
// (landing page, referrer, UTM tags, ad click IDs) so every enquiry can be
// traced back to its source. Stored only in the visitor's own browser.
const KEY = "seodxb_first_touch";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const CLICK_IDS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid", "li_fat_id"];

export interface FirstTouch {
  landing_page: string;
  first_referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  click_id?: string;
  ts: number;
}

const externalReferrer = () => {
  try {
    const r = document.referrer;
    return r && new URL(r).hostname !== location.hostname ? r : "";
  } catch {
    return "";
  }
};

const read = (): FirstTouch | null => {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || "null") as FirstTouch | null;
    return v && Date.now() - v.ts < MAX_AGE_MS ? v : null;
  } catch {
    return null;
  }
};

// Call once on page load. A visit with campaign tags always replaces the stored touch.
export function captureFirstTouch() {
  const params = new URLSearchParams(location.search);
  const tagged = UTM.some((k) => params.get(k)) || CLICK_IDS.some((k) => params.get(k));
  if (read() && !tagged) return;
  const clickKey = CLICK_IDS.find((k) => params.get(k));
  const touch: FirstTouch = {
    landing_page: location.href.slice(0, 500),
    first_referrer: externalReferrer().slice(0, 500),
    ts: Date.now(),
    ...(clickKey ? { click_id: `${clickKey}:${params.get(clickKey)}`.slice(0, 200) } : {}),
  };
  for (const k of UTM) {
    const v = params.get(k);
    if (v) touch[k] = v.slice(0, 200);
  }
  try {
    localStorage.setItem(KEY, JSON.stringify(touch));
  } catch {
    /* storage unavailable: attribution falls back to the current page */
  }
}

// Everything the form sends alongside the enquiry.
export function leadAttribution() {
  const first = read();
  return {
    page_url: location.href.slice(0, 500),
    page_title: document.title.slice(0, 200),
    referrer: externalReferrer().slice(0, 500),
    ...(first ?? { landing_page: location.href.slice(0, 500), first_referrer: externalReferrer().slice(0, 500) }),
  };
}
