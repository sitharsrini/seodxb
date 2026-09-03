import React from "react";
import { Helmet } from "react-helmet-async";
import { clampTitle } from "@/lib/title";

export function Privacy() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{clampTitle("Privacy Policy | SEODXB")}</title>
        <meta
          name="description"
          content="How SEODXB collects, uses and stores personal information from the seodxb.com website and contact forms."
        />
        <link rel="canonical" href="https://seodxb.com/privacy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <article className="pt-28 pb-20 container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-heading font-black mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: 27 August 2026</p>
        <div className="prose prose-slate max-w-none space-y-4 text-gray-700 leading-relaxed">
          <p>
            SEODXB is a Dubai-based SEO agency. This policy explains what we collect on seodxb.com,
            why we collect it, and how to ask us to delete it. We do not sell personal data.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">Who we are</h2>
          <p>
            The site is operated by SEODXB, Dubai, United Arab Emirates. Enquiries:{" "}
            <a href="mailto:hi@Listi.ae" className="text-primary">hi@Listi.ae</a>. WhatsApp: +971 52 155 1198.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">What we collect</h2>
          <p>
            If you use a contact form, audit request, or similar tool, we collect the name, email,
            phone number, company URL, message, and the page you sent it from. That is so we can
            reply and know which service you asked about.
          </p>
          <p>
            The server also sees standard request logs (IP address, browser, time) for security and
            to keep the site running. We use Google Analytics and similar measurement only where
            configured; those tools have their own policies.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">How we use it</h2>
          <p>
            We use enquiry details to respond, to quote, and to deliver work if you become a client.
            We do not pass your details to advertisers. Email is sent through our mail provider
            (currently Brevo) from hello@seodxb.com to our inbox.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">How long we keep it</h2>
          <p>
            Lead records are kept while they are useful for the conversation, then deleted or
            archived. You can ask us to delete your enquiry at any time by emailing hi@Listi.ae.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">Your choices</h2>
          <p>
            You can request a copy of the information we hold about you, or ask us to correct or
            delete it. UAE data protection rules apply. If you are in the UK or EU and write to us,
            we will treat that request in line with those rules as well.
          </p>
          <h2 className="text-2xl font-heading font-bold pt-4">Changes</h2>
          <p>
            We may update this page. The date at the top is the latest version. Questions:{" "}
            <a href="/contact" className="text-primary">contact us</a>.
          </p>
        </div>
      </article>
    </>
  );
}
