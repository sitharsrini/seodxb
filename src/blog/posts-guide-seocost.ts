import type { Post } from "./types";
import type { Source } from "../sources";

export const GUIDE_SEOCOST_SOURCES: Source[] = [
  { name: "Do you need an SEO?, Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
  { name: "SEO Starter Guide, Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  { name: "How Much Does SEO Cost (SEO Packages) in Dubai 2026, Global Media Insight", url: "https://www.globalmediainsight.com/blog/seo-cost-dubai/" },
  { name: "SEO Services Cost in Dubai 2026, Prism Digital", url: "https://www.prism-me.com/blog/seo-services-cost-in-dubai-2026" },
  { name: "How Much Do Digital Marketing Agencies Charge in the UAE?, GoodFirms", url: "https://www.goodfirms.co/blog/digital-marketing-agency-pricing-uae" },
  { name: "How Much Does a Digital Marketing Agency Cost in Dubai, Digital Gravity", url: "https://www.digitalgravity.ae/blog/how-much-does-a-digital-marketing-agency-cost-in-dubai/" },
];

const D = "2026-11-26";

export const GUIDE_SEOCOST_POSTS: Post[] = [
  {
    slug: "seo-cost-dubai",
    title: "How Much Does SEO Cost in Dubai? A Plain Guide to Prices and What You Get",
    seoTitle: "SEO Cost in Dubai: Prices and What You Get",
    description:
      "Published estimates for SEO prices in Dubai, what drives the cost, the main pricing models, and how to judge a quote by cost per qualified lead.",
    category: "SEO & AI Search",
    date: D,
    updated: D,
    answer:
      "Published 2026 pricing guides put SEO in Dubai at roughly AED 1,500 to 5,000 a month for basic local work and AED 3,000 to 15,000 a month for broader programmes, with competitive or bilingual projects costing more. These are estimates from agency guides, not audited data and not SEODXB prices. The right price depends on your competition, your site and the work included, so judge any quote by what it delivers and by cost per qualified lead.",
    keywords: ["seo cost dubai", "seo packages dubai", "seo pricing dubai", "seo services cost uae", "how much does seo cost in dubai", "seo retainer dubai"],
    takeaways: [
      "Published guides put most Dubai SEO retainers between about AED 1,500 and AED 15,000 a month, and the sources do not agree with each other.",
      "Competition, site size, English and Arabic content and the technical state of your site drive the price more than the agency's label for the package.",
      "A fair scope lists the work month by month and leaves you owning your website, analytics and Search Console.",
      "Very cheap packages usually leave out content, technical fixes and reporting on enquiries.",
      "Judge SEO by cost per qualified lead over six to twelve months, not by the monthly fee alone.",
    ],
    body: [
      {
        t: "p",
        text: "Ask five agencies in Dubai what SEO costs and you will hear five different numbers. One quotes AED 1,500 a month, another AED 12,000, and both call it an SEO package. The gap is not always about quality. Often the two quotes cover very different work, for very different markets.",
      },
      {
        t: "p",
        text: "This guide explains what published sources say about SEO prices in Dubai, what makes the price go up or down, and how to tell whether a quote is fair for your business. It is written for owners and marketing leads who have to approve the spend and want to understand what they are buying.",
      },
      {
        t: "callout",
        title: "About the numbers in this guide",
        text: "Every figure here is a published estimate, taken from pricing guides that Dubai agencies and review sites released in 2026. Most of those guides are written by agencies, none is an audited survey, and they do not agree with each other. They are not SEODXB prices. Use them to check whether a quote is in a normal range, then compare the actual scope.",
      },
      { t: "h2", text: "What published guides say SEO costs in Dubai", id: "published-ranges" },
      {
        t: "p",
        text: "We read several current pricing guides so you do not have to. The ranges below are grouped by the kind of work. Where sources disagree, we show the spread.",
      },
      {
        t: "ul",
        items: [
          "**Basic local SEO for a small business:** most guides sit between about AED 1,500 and AED 5,000 a month. One puts local work as low as AED 1,500 to 3,500.",
          "**Broader or growth-stage SEO:** roughly AED 3,000 to AED 15,000 a month. Some guides start this tier at AED 3,000 to 10,000, and others at AED 8,000 to 15,000.",
          "**Competitive or enterprise work:** some guides quote AED 25,000 a month or more. Treat the top of the range with care, because a high number in an agency's own guide also helps the agency.",
          "**One-off SEO audit:** one Dubai guide lists AED 2,500 to AED 15,000 or more depending on site size, and a GoodFirms review of UAE pricing gives AED 3,000 to 8,000.",
          "**Hourly consulting:** one guide gives AED 100 to 400 an hour and another AED 200 to 800.",
        ],
      },
      {
        t: "p",
        text: "The useful lesson is the size of the spread. A range that runs from AED 1,500 to AED 25,000 a month tells you that the word SEO covers many different jobs. So the first question is never the price. It is what work the price pays for.",
      },
      { t: "img", photo: { id: "photo-1707157284454-553ef0a4ed0d", alt: "Financial charts, notebook and phone on an office desk", by: "Jakub Żerdzicki", user: "jakubzerdzicki" }, caption: "Published SEO prices vary widely, so compare the scope behind each number before you compare the numbers." },
      { t: "h2", text: "What drives the price up or down", id: "price-drivers" },
      { t: "h3", text: "Competition in your market" },
      {
        t: "p",
        text: "Ranking a dental clinic in one Dubai community is a smaller job than ranking a real estate brokerage across the city. The stronger the sites you have to beat, the more content, technical work and authority building you need, and the longer it takes.",
      },
      { t: "h3", text: "Pages, services and locations" },
      {
        t: "p",
        text: "A site with five services in one location needs fewer pages than a group with thirty services and four branches. Each service and each area you want to rank for usually needs its own page, written properly. More pages mean more research, writing and upkeep.",
      },
      { t: "h3", text: "English and Arabic" },
      {
        t: "p",
        text: "Arabic SEO is not a translation of the English work. Arabic keywords need their own research, and the content should be written or edited by a native speaker. A bilingual programme costs more than a single-language one, and our guide to [Arabic and English website SEO](/blog/arabic-english-bilingual-website-seo-uae) explains why it is often worth it in the UAE.",
      },
      { t: "h3", text: "The technical state of your site" },
      {
        t: "p",
        text: "A fast, well-structured site can go straight to content and authority. A slow site with indexing problems, broken redirects or content that only loads through JavaScript needs fixing first. That early [technical SEO](/services/technical-seo-services) work is often the largest cost in the first two months.",
      },
      { t: "h3", text: "Content, local SEO and AI search" },
      {
        t: "p",
        text: "Someone has to write the pages, guides and FAQs. Quotes differ a lot on how much content is included and who writes it. Local SEO adds Google Business Profile management, reviews and directory listings. Many programmes now also include answer engine optimisation (AEO) and generative engine optimisation (GEO), so that your business appears in direct answers and in AI assistants. Each of these adds hours.",
      },
      { t: "h2", text: "The three pricing models", id: "pricing-models" },
      {
        t: "ul",
        items: [
          "**Monthly retainer.** The most common model. You pay a fixed fee for an agreed amount of work each month. Published guides note that many Dubai agencies ask for a three to six month commitment, which is reasonable because SEO needs time to show results.",
          "**Project.** A fixed price for a defined job, such as an audit, a site migration or a set of new service pages. Good when you have a team that can carry on the work afterwards.",
          "**Hourly.** Used for advice, training or problem solving. Useful for a second opinion, but hard to budget for ongoing work.",
        ],
      },
      {
        t: "p",
        text: "No model is better in itself. A retainer suits a business that wants someone to own the result. A project suits a business with one clear problem. If you are unsure which you need, start with an audit, because it tells you how much work there really is.",
      },
      { t: "h2", text: "What a fair SEO scope includes", id: "fair-scope" },
      {
        t: "p",
        text: "Whatever the price, a serious quote should say what will be done, not only what will be achieved. Look for these items in writing.",
      },
      {
        t: "ol",
        items: [
          "A technical and content audit at the start, with a prioritised list of fixes.",
          "Keyword and intent research for your services and areas, in each language you need.",
          "A set number of new or improved pages each month, and who writes them.",
          "Technical fixes, or clear instructions for your developer if the agency does not make them.",
          "Google Business Profile and local listings work, if local customers matter to you.",
          "Structured data and answer-ready content for AEO and GEO.",
          "Tracking of forms, calls and WhatsApp enquiries, so results are measured in leads.",
          "A monthly report in plain language, and a call to discuss it.",
        ],
      },
      {
        t: "p",
        text: "Check ownership too. Your website, domain, Google Analytics, Search Console and Google Business Profile should be in your name, with the agency added as a user. If you stop working together, you keep everything. Our [SEO, AEO and GEO service](/services/seo-aeo-geo) page shows how we set out a scope like this.",
      },
      { t: "img", photo: { id: "photo-1454165804606-c3d57bc86b40", alt: "Reviewing documents beside a laptop", by: "Scott Graham", user: "amstram" }, caption: "A fair proposal lists the work month by month, so you can see what the fee pays for." },
      { t: "h2", text: "What very cheap packages usually leave out", id: "cheap-packages" },
      {
        t: "p",
        text: "A low price is not a problem in itself. A small local business in a quiet market may only need a modest programme. The problem is a low price that promises the same result as a much larger one. When a package costs far less than the published ranges, something has usually been removed.",
      },
      {
        t: "ul",
        items: [
          "**Content.** The package covers a list of keywords and a report, but nobody writes the pages that would rank for them.",
          "**Technical fixes.** Problems are listed in an audit and never fixed.",
          "**Senior time.** The work is done from a checklist, with nobody thinking about your market.",
          "**Lead tracking.** Reports show rankings and traffic, but not enquiries.",
          "**Safe link practices.** Links are bought in bulk from unrelated sites, which breaks Google's spam policies and can harm your site.",
        ],
      },
      {
        t: "callout",
        title: "The cheapest SEO is often the most expensive",
        text: "Paying AED 1,500 a month for a year with no new enquiries costs AED 18,000 and a year of lost time. Paying more for work that brings qualified leads can cost far less per customer. Compare what you get back, not only what you pay.",
      },
      { t: "h2", text: "How long before you see results", id: "timeline" },
      {
        t: "p",
        text: "Google's own guidance says that SEO work typically needs from four months to a year before you see the benefit. That matches what we see in the UAE. Technical fixes and local profile improvements can show within weeks. Ranking for competitive commercial searches usually takes several months of steady work, and longer for a new domain.",
      },
      {
        t: "p",
        text: "This is why the budget matters as much as the monthly fee. If you can only fund three months, SEO may not be the right first channel. Paid search can bring enquiries sooner while SEO builds, and our guide on [SEO versus Google Ads](/blog/seo-vs-google-ads-dubai-which-first) explains how to choose between them.",
      },
      { t: "h2", text: "Judge the price by cost per qualified lead", id: "cost-per-lead" },
      {
        t: "p",
        text: "The monthly fee tells you what SEO costs. It does not tell you whether it is worth it. To answer that, connect the spend to enquiries.",
      },
      {
        t: "ol",
        items: [
          "Add up everything you will spend over twelve months: fees, content and any development work.",
          "Estimate the qualified enquiries organic search could bring in that time. Be conservative, and expect most of them in the second half of the year.",
          "Divide the spend by the enquiries to get a cost per qualified lead.",
          "Compare that with what a qualified lead costs you from ads, portals or referrals today.",
        ],
      },
      {
        t: "p",
        text: "Here is a worked example with assumed numbers. Suppose you spend AED 6,000 a month, or AED 72,000 in a year, and organic search brings 90 qualified enquiries in that year. Your cost per qualified lead is AED 800. If one in five becomes a customer, each new customer costs AED 4,000 to win. Whether that is good depends on what a customer is worth to you. Our guide to [how much a UAE business should spend on marketing](/blog/how-much-should-a-uae-business-spend-on-marketing) walks through this calculation in more detail.",
      },
      { t: "img", photo: { id: "photo-1542744173-8e7e53415bb0", alt: "Consultant presenting to a team around a meeting table", by: "Campaign Creators", user: "campaign_creators" }, caption: "Ask the agency to explain its plan in person before you sign, and how it will report on enquiries." },
      { t: "h2", text: "Questions to ask before you sign", id: "questions" },
      {
        t: "ul",
        items: [
          "What exactly will you do in the first 90 days?",
          "How many pages will you write or improve each month, and who writes them?",
          "Who fixes technical problems, you or our developer?",
          "Will we own the website, analytics, Search Console and Google Business Profile?",
          "How will you measure enquiries, not only rankings?",
          "What is the minimum term, and how do we end the contract?",
          "Is Arabic included, and who writes it?",
          "What do you need from our team each month?",
        ],
      },
      {
        t: "p",
        text: "Our list of [questions to ask before hiring a marketing agency](/blog/questions-to-ask-before-hiring-a-marketing-agency-dubai) covers the wider conversation, including reporting and contracts.",
      },
      { t: "h2", text: "Red flags in an SEO quote", id: "red-flags" },
      {
        t: "ul",
        items: [
          "**A promise of first-page rankings.** Google states that no one can promise a number one ranking. An honest agency commits to the work and to clear reporting.",
          "**Bought links.** Packages that sell a fixed number of backlinks a month usually mean paid links, which break Google's spam policies.",
          "**No access to your own accounts.** If the agency holds your analytics or your Google Business Profile in its own name, you are locked in.",
          "**Reports without leads.** Rankings and traffic are useful, but a report that never mentions enquiries is hiding the result that matters.",
          "**A price with no scope.** A package name and a monthly fee are not a proposal.",
        ],
      },
      { t: "h2", text: "How to get a price that fits your business", id: "get-a-price" },
      {
        t: "p",
        text: "The published ranges are a starting point, not an answer. To get a real number, an agency has to look at your site, your competitors and your goals. Ask for an audit or a short review first, then a written scope with a monthly plan. Compare two or three proposals on the work included, the reporting and the ownership terms, and only then on price.",
      },
      {
        t: "p",
        text: "At SEODXB we do not publish fixed packages, because the right scope differs so much between businesses. We quote after a free 30-minute consultation, once we understand your market and what you want search to achieve. If you would like a straight view of what SEO should cost for your business, [book a consultation](/contact) and we will tell you what we would do first.",
      },
    ],
    faqs: [
      {
        q: "How much does SEO cost per month in Dubai?",
        a: "Published 2026 guides put basic local SEO at roughly AED 1,500 to 5,000 a month and broader programmes at about AED 3,000 to 15,000 a month, with competitive or bilingual work costing more. These are estimates from agency guides and are not SEODXB prices. Your real cost depends on competition, site size and the work included.",
      },
      {
        q: "Why do SEO quotes in Dubai vary so much?",
        a: "Because the quotes cover different work. One may include an audit, monthly content, technical fixes, local SEO and lead tracking in English and Arabic. Another may include only keyword reports. Competition in your market and the state of your website also change the amount of work needed.",
      },
      {
        q: "Is cheap SEO worth it?",
        a: "Sometimes, for a small business in a quiet local market. But very cheap packages often leave out content, technical fixes and reporting on enquiries, and some rely on bought links that can harm your site. Compare the scope and the expected cost per qualified lead, not only the fee.",
      },
      {
        q: "How long does SEO take to pay back?",
        a: "Google's guidance says SEO typically needs four months to a year to show its benefit. Technical and local improvements can show within weeks, while competitive commercial searches usually take several months. Plan your budget for at least six to twelve months before judging the return.",
      },
      {
        q: "Does SEODXB publish fixed SEO packages?",
        a: "No. The right scope differs too much between businesses for a fixed package to be fair. We quote after a free 30-minute consultation, once we have looked at your market, your website and your goals, and we set out the work month by month.",
      },
    ],
  },
];
