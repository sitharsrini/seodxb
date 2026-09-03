import React from "react";
import { Helmet } from "react-helmet-async";
import { clampTitle } from "@/lib/title";

export function Terms() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("Terms of Service | SEODXB")}</title>
        <meta
          name="description"
          content="Terms for using seodxb.com and for SEO, AEO and GEO work with SEODXB in Dubai."
        />
        <link rel="canonical" href="https://seodxb.com/terms" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <article className="pt-28 pb-20 container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-heading font-black mb-6">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: 27 August 2026</p>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            These terms cover the seodxb.com website and any SEO, AEO or GEO work you buy from
            SEODXB, a Dubai-based agency. Using the site or paying an invoice means you accept them.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">The website</h2>
          <p>
            Content on this site is general information, not a ranking guarantee. Examples, stats
            and case-style copy describe how we work. Results depend on your site, your market and
            what Google and AI engines do. We can change pages at any time.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">Work we sell</h2>
          <p>
            Paid work is month-to-month unless a proposal says otherwise. Scope is what the proposal
            or email confirms. Rankings, traffic and AI citations are objectives we work towards,
            not promises. You supply access, approvals and honest business facts. We supply the
            strategy and the delivery.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">Fees</h2>
          <p>
            Fees are due as invoiced. Work can pause if an invoice is overdue. Either side can stop
            a rolling retainer with 30 days&apos; written notice. Work already delivered stays
            delivered. We do not refund time already spent.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">Your content and ours</h2>
          <p>
            You keep ownership of your brand, site and data. We keep ownership of our processes,
            templates and unused drafts. Published work on your site is yours to keep after the
            engagement ends.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">Liability</h2>
          <p>
            Search engines and AI products change without notice. We are not liable for ranking
            drops, algorithm updates, or third-party outages. Our liability for any claim is
            limited to the fees you paid us in the previous three months for that work.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">Law</h2>
          <p>
            These terms are governed by the laws of the United Arab Emirates. Disputes are handled
            in the courts of Dubai. Contact:{" "}
            <a href="mailto:hi@Listi.ae" className="text-primary">hi@Listi.ae</a>. See also our{" "}
            <a href="/privacy" className="text-primary">privacy policy</a>.
          </p>
        </div>
      </article>
    </>
  );
}
