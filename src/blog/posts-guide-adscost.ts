import type { Post } from "./types";
import type { Source } from "../sources";

const D = "2026-11-26";

export const GUIDE_ADSCOST_SOURCES: Source[] = [
  { name: "How costs are calculated in Google Ads, Google Ads Help", url: "https://support.google.com/google-ads/answer/1704424" },
  { name: "About Quality Score, Google Ads Help", url: "https://support.google.com/google-ads/answer/6167118" },
  { name: "About Keyword Planner, Google Ads Help", url: "https://support.google.com/google-ads/answer/7337243" },
  { name: "About conversion measurement, Google Ads Help", url: "https://support.google.com/google-ads/answer/1722022" },
  { name: "Enrich Labs: average CPC by industry in Google Ads, 2026 (published estimates)", url: "https://www.enrichlabs.ai/blog/average-cpc-by-industry-google-ads-2026" },
  { name: "Clozer: Google Ads cost in Dubai (published estimates)", url: "https://clozer.pages.dev/blog/google-ads-cost-dubai.html" },
  { name: "Digital Gravity: how much a digital marketing agency costs in Dubai (published estimates)", url: "https://www.digitalgravity.ae/blog/how-much-does-a-digital-marketing-agency-cost-in-dubai/" },
];

export const GUIDE_ADSCOST_POSTS: Post[] = [
  {
    slug: "google-ads-cost-dubai",
    title: "How Much Do Google Ads Cost in Dubai? Clicks, Budgets and Cost per Lead",
    seoTitle: "Google Ads Cost in Dubai: Clicks, Budgets, Leads",
    description:
      "What Google Ads cost in Dubai: published click-cost estimates in AED, how the auction sets your price, and how to work out your own cost per lead.",
    category: "Performance Ads",
    date: D,
    updated: D,
    answer:
      "Google publishes no price list for Dubai. You pay per click, and the price is set by an auction for each search. Published estimates from agency guides put many UAE clicks between about AED 8 and AED 65, with legal, real estate and business setup at the top. The number that matters is your cost per qualified lead, which you find by checking Keyword Planner, tracking every enquiry and running a small test.",
    keywords: ["google ads cost dubai", "google ads cost per click uae", "ppc cost dubai", "google ads budget dubai", "cost per lead google ads uae"],
    takeaways: [
      "There is no official Google Ads price list by industry. Every figure you see online is an estimate.",
      "What you pay per click depends on your bid, your ad quality and how many competitors want the same search.",
      "Cost per click is only the first step. Judge campaigns on cost per qualified lead and cost per sale.",
      "Set up tracking for calls, forms and WhatsApp before you spend, then run a small test to find your real numbers.",
      "Management fees are a separate cost from the money you pay Google.",
    ],
    body: [
      {
        t: "p",
        text: "Business owners in Dubai ask us one question about Google Ads more than any other: what will it cost? The honest answer is that nobody can tell you from a table. Google does not publish prices by industry, and two companies in the same sector can pay very different amounts for the same search. What you can do is understand how the price is set, check the likely range for your own keywords, and run a small test that shows your real cost per lead.",
      },
      { t: "h2", text: "What published estimates say about click costs in the UAE", id: "published-estimates" },
      {
        t: "p",
        text: "Search for Google Ads prices in Dubai and you will find plenty of numbers. Almost all of them come from agency blogs and tool vendors, not from Google. They are useful as a rough guide and nothing more.",
      },
      {
        t: "ul",
        items: [
          "**Real estate:** agency guides published in 2025 and 2026 quote roughly AED 8 to AED 55 per click, depending on the guide and the keyword.",
          "**Legal services:** the same kind of guide quotes roughly AED 15 to AED 65 per click.",
          "**The most contested searches:** one Dubai guide says the most expensive keywords in legal, real estate and business setup regularly go above AED 50 per click, and gives an overall range of about AED 12 to AED 95 across industries.",
        ],
      },
      {
        t: "callout",
        title: "How to read these numbers",
        text: "These figures are published estimates, not SEODXB prices and not Google data. They are unaudited, the guides disagree with each other, and each one mixes different keywords, match types and time periods. Click costs also move with the season, with new competitors and with the quality of your own ads. Use the ranges to check that a plan is realistic, then replace them with your own data as soon as you have some.",
      },
      { t: "h2", text: "How the auction decides what you pay", id: "auction" },
      {
        t: "p",
        text: "Every time someone searches, Google runs an auction among the advertisers whose keywords match. You do not simply pay your bid. Google calculates an **Ad Rank** for each advertiser, and that rank decides whether your ad shows and where.",
      },
      { t: "h3", text: "What goes into Ad Rank" },
      {
        t: "ul",
        items: [
          "Your bid, which is the most you are willing to pay for a click.",
          "The quality of your ad and landing page for that search.",
          "The context of the search, such as the device, location and time of day.",
          "The expected effect of extras such as sitelinks, call buttons and other ad assets.",
        ],
      },
      { t: "h3", text: "Quality Score and why it changes your price" },
      {
        t: "p",
        text: "Quality Score is the 1 to 10 rating you see beside each keyword in your account. It is a diagnostic tool, not a direct input to the auction, but it shows you how Google judges three things: how likely people are to click your ad, how closely the ad matches the search, and how useful your landing page is. When those are strong, you can win a good position with a lower bid. When they are weak, you pay more for the same position or do not show at all.",
      },
      {
        t: "p",
        text: "You normally pay less than your maximum bid. In simple terms, Google charges the smallest amount needed to hold your position over the advertiser below you. This is why a well-built account can pay less per click than a careless one in the same industry.",
      },
      { t: "h2", text: "How to check prices for your own keywords", id: "keyword-planner" },
      {
        t: "p",
        text: "Keyword Planner is the free research tool inside Google Ads. It will not tell you exactly what you will pay, but it gives a far better range than any blog post because it uses your keywords and your location.",
      },
      {
        t: "ol",
        items: [
          "Open Keyword Planner in your Google Ads account and choose to discover new keywords or get search volumes.",
          "Set the location to the United Arab Emirates, or to Dubai or another emirate if you only serve one area.",
          "Add both English and Arabic as languages if your customers search in both.",
          "Enter the phrases buyers actually use, such as the service plus the area, not broad single words.",
          "Read the two bid columns: top of page bid (low range) and top of page bid (high range). Your likely click cost for a visible position sits somewhere between them.",
          "Note the monthly search volume too. A cheap click is no use if only a handful of people search for it.",
        ],
      },
      {
        t: "p",
        text: "Treat the result as a planning range. It reflects what advertisers have paid in the past, and your own cost will depend on your Quality Score and account structure.",
      },
      { t: "img", photo: { id: "photo-1712904311048-dd345c13a7c2", alt: "Laptop on a desk showing an analytics dashboard with a world map and charts", by: "Walls.io", user: "walls_io" }, caption: "Your own account data is a better guide to cost than any published industry average." },
      { t: "h2", text: "From cost per click to cost per sale", id: "arithmetic" },
      {
        t: "p",
        text: "A click is not an enquiry, and an enquiry is not a customer. The useful question is what a qualified lead and a sale cost you, and that takes four numbers: your cost per click, the share of visitors who enquire, the share of enquiries that are real prospects, and the share of those that buy.",
      },
      {
        t: "callout",
        title: "A made-up example to show the arithmetic",
        text: "These numbers are invented for illustration. Suppose clicks cost AED 20 and 5 in every 100 visitors enquire. Each enquiry costs AED 400. If half of those enquiries are a good fit, a qualified lead costs AED 800. If your team closes one in four qualified leads, each new customer costs AED 3,200 in ad spend. Whether that is good depends on what a customer is worth to you. For a service worth AED 30,000 it is healthy. For a AED 500 job it is a loss.",
      },
      {
        t: "p",
        text: "Double the landing page conversion rate and the cost per lead halves without touching your bids. Our guide on [how much a UAE business should spend on marketing](/blog/how-much-should-a-uae-business-spend-on-marketing) uses the same backwards method to build a full budget from a revenue target.",
      },
      { t: "img", photo: { id: "photo-1516201580490-33550d32de5c", alt: "Open planner, pens, calculator and an orange on a wooden table", by: "Iryna Tysiak", user: "20ira17" }, caption: "Work the numbers from click to sale before you decide what a click is worth." },
      { t: "h2", text: "Why tracking has to come before spending", id: "tracking-first" },
      {
        t: "p",
        text: "None of that arithmetic works unless every enquiry is counted. In the UAE a large share of enquiries arrive by phone and WhatsApp, not through forms. If you only track form submissions, your reports will show a cost per lead that is far too high, and Google's bidding will learn from a fraction of your real results.",
      },
      {
        t: "ul",
        items: [
          "Record form submissions, phone clicks and WhatsApp clicks as conversions before the first campaign goes live.",
          "Test each one yourself and check it appears in Google Ads and Google Analytics 4.",
          "Ask your sales team to mark which enquiries were qualified, so you can report cost per qualified lead and not just cost per lead.",
          "Where possible, send those outcomes back to Google Ads so bidding favours the searches that bring real customers.",
        ],
      },
      {
        t: "p",
        text: "Our step-by-step guide to [tracking WhatsApp, call and form leads](/blog/track-whatsapp-call-form-leads-uae) covers the setup, and it is the first thing we do in our [lead tracking and attribution](/services/lead-tracking-and-attribution) work.",
      },
      { t: "h2", text: "How to size a test budget", id: "test-budget" },
      {
        t: "p",
        text: "A first campaign has one job: to replace guesses with your own data. The budget needs to be large enough to produce a meaningful number of clicks and enquiries, and small enough that you are comfortable treating it as the price of learning.",
      },
      {
        t: "ol",
        items: [
          "Take the middle of your Keyword Planner bid range as a working cost per click.",
          "Decide how many clicks you need to judge a campaign. A few hundred clicks on a focused set of keywords is a sensible minimum for most services, because conversion rates on small samples swing wildly.",
          "Multiply the two. Using the invented figures above, 300 clicks at AED 20 is AED 6,000.",
          "Spread it over four to six weeks, so the campaign has time to settle and you see weekday and weekend patterns.",
          "Start with your highest-intent searches only. A narrow test gives clearer answers than a thin budget spread across everything.",
        ],
      },
      {
        t: "p",
        text: "Google can spend up to twice your average daily budget on a busy day, but it evens out over the month. Set the daily figure from the monthly amount you are prepared to spend.",
      },
      { t: "img", photo: { id: "photo-1523348837708-15d4a09cfac2", alt: "Young green seedlings growing in rows of small black plastic pots", by: "Markus Spiske", user: "markusspiske" }, caption: "Begin with a narrow test on your best searches and grow only what proves itself." },
      { t: "h2", text: "Management fees are a separate cost", id: "management-fees" },
      {
        t: "p",
        text: "The money you pay Google for clicks is called media spend. If someone runs the account for you, their fee is on top. Published pricing guides for Dubai describe three common models, and the figures in them are again estimates that vary by source.",
      },
      {
        t: "ul",
        items: [
          "**A percentage of ad spend:** guides commonly quote somewhere around 10 to 20 percent. The fee rises as you spend more.",
          "**A flat monthly fee:** guides quote a few thousand dirhams a month for small and mid-sized accounts. The fee stays the same whatever you spend.",
          "**A hybrid:** a base fee plus a smaller percentage above a certain spend.",
          "**A one-off setup fee:** some agencies charge this for account structure, tracking and landing page work.",
        ],
      },
      {
        t: "p",
        text: "Whichever model you are offered, ask two questions. Who owns the ad account, and is the media spend billed by Google directly to you? You should own the account and see every dirham Google charges. If you are deciding whether paid search is the right first step at all, our comparison of [SEO and Google Ads in Dubai](/blog/seo-vs-google-ads-dubai-which-first) may help.",
      },
      { t: "h2", text: "What pushes your costs up", id: "cost-drivers" },
      {
        t: "ul",
        items: [
          "**Competition:** more advertisers on the same search means higher bids. High-value sectors attract the most.",
          "**Broad keywords:** loose match types show your ads for searches you never intended, and you pay for each click.",
          "**Weak ads and pages:** low Quality Score means paying more for the same position.",
          "**Seasonal peaks:** costs rise when every competitor advertises at once, such as before summer for AC services or around major property launches.",
          "**Regulated sectors:** medical advertising generally needs approval from the relevant health authority, and property advertising in Dubai generally needs a Trakheesi permit. Approvals add time and sometimes fees, so confirm the current rules with the authority before you launch. Our [Trakheesi permit guide](/blog/trakheesi-permit-property-advertising-dubai) explains the general idea for property.",
        ],
      },
      { t: "h2", text: "Six ways to lower your cost per lead", id: "lower-cost-per-lead" },
      {
        t: "ol",
        items: [
          "**Read the search terms report every week.** It shows the real searches that triggered your ads. Many will surprise you.",
          "**Add negative keywords.** Block job seekers, students, free-tool searches and areas you do not serve.",
          "**Tighten match types.** Start with phrase and exact match on your best keywords, and widen only when the data supports it.",
          "**Write ads that match the search.** Use the service and the area in the headline, and say what happens next.",
          "**Fix the landing page.** One page per service, a clear offer, a short form and visible call and WhatsApp buttons. This is often the cheapest improvement of all, and it is the focus of our [landing page design](/services/landing-page-design) work.",
          "**Move budget to what works.** Pause keywords that spend without producing qualified leads, and give the money to those that do.",
        ],
      },
      {
        t: "p",
        text: "None of these steps needs a larger budget, which is why our [Google Ads management](/services/google-ads-management) service judges campaigns on cost per qualified lead and not on clicks.",
      },
      { t: "h2", text: "What to do next", id: "next-steps" },
      {
        t: "p",
        text: "If you are planning a first campaign, look up your ten most important searches in Keyword Planner, write down your own four numbers, and check that calls, forms and WhatsApp clicks are tracked. With those in hand you can set a test budget you understand.",
      },
      {
        t: "p",
        text: "If you would like a second opinion on the numbers, or want someone to check an existing account, you can [book a free consultation](/contact). We will look at your keywords and tracking and tell you plainly what we see.",
      },
    ],
    faqs: [
      {
        q: "How much does a click cost on Google Ads in Dubai?",
        a: "There is no fixed price. Published estimates from agency guides put many UAE clicks between about AED 8 and AED 65, with the most contested legal, real estate and business setup searches going higher. These are unaudited estimates. Check Keyword Planner with the location set to the UAE for a range based on your own keywords.",
      },
      {
        q: "What is a sensible monthly budget for Google Ads in the UAE?",
        a: "Work backwards from the result you want. Multiply the number of qualified leads you need by a realistic cost per qualified lead. For a first test, plan enough for a few hundred clicks on your highest-intent keywords over four to six weeks, so you have real data before committing to more.",
      },
      {
        q: "Why do my clicks cost more than my competitor's?",
        a: "Usually because of quality, not just bids. Google rewards ads that match the search and lead to a useful landing page. A competitor with a better Quality Score can hold the same position for less. Broad keywords, weak ad copy and slow or unclear landing pages all push your price up.",
      },
      {
        q: "Are agency management fees included in the Google Ads cost?",
        a: "No. What you pay Google for clicks and what you pay someone to manage the account are separate. Ask for the two costs to be shown separately, and make sure Google bills your media spend directly to you.",
      },
      {
        q: "Can I lower my cost per lead without spending more?",
        a: "Yes. Review the search terms report weekly, add negative keywords, tighten match types, write ads that match each search and improve the landing page. Raising the share of visitors who enquire often cuts cost per lead more than any change to bids.",
      },
    ],
  },
];
