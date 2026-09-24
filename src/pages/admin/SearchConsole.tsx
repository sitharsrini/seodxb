const STEPS = [
  "In Google Cloud, create a project and enable the Google Search Console API and the Google Analytics Data API.",
  "Create a service account in that project and download its JSON key.",
  "In Google Search Console, add the service account's email address as a user (Restricted is enough) for seodxb.com.",
  "In Google Analytics 4, add the same email as a Viewer on the SEODXB property, and note the numeric property ID.",
  "In Cloudflare Pages, add the JSON key and the GA4 property ID as encrypted environment variables. They never need to be shared in chat or email.",
];

export default function SearchConsole() {
  return (
    <div>
      <p className="eyebrow">Performance</p>
      <h1 className="mt-2 font-display text-3xl font-semibold">Search Console &amp; Analytics</h1>
      <div className="mt-6 rounded-2xl border border-line border-l-4 border-l-amber-400 bg-white p-6">
        <p className="font-semibold text-ink">Not connected yet</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Once connected, this section will show real performance next to your target keywords: clicks, impressions, CTR and average
          Google position for every page and search query from Search Console, plus sessions, engaged sessions and enquiries per page from
          Google Analytics 4.
        </p>
      </div>
      <div className="mt-6 rounded-2xl border border-line bg-white p-6">
        <h2 className="font-semibold text-ink">How to connect (about 15 minutes)</h2>
        <ol className="mt-4 space-y-3 text-sm text-ink-soft">
          {STEPS.map((s, i) => (
            <li key={s} className="flex gap-3">
              <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-brand text-xs font-semibold text-white">{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-ink-soft">
          Access is read-only. The service account can view reports but cannot change your Search Console or Analytics settings.
        </p>
      </div>
    </div>
  );
}
