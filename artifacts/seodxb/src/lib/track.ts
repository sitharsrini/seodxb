// Lightweight, privacy-safe conversion-event tracking.
//
// Pushes events to window.dataLayer so they are picked up automatically by
// Google Tag Manager / GA4 once a container or measurement ID is connected
// (see index.html). If no analytics is connected the calls are harmless no-ops.

type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: TrackParams = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  // Forward to GA4 directly too, if gtag is present.
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
