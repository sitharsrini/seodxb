import type { Post } from "./types";
import type { Source } from "../sources";

const D = "2026-11-26";

export const GUIDE_WEBCOST_SOURCES: Source[] = [
  { name: "RedSpider: How Much Does a Website Cost in Dubai?", url: "https://www.redspider.ae/blog/how-much-does-a-website-cost-in-dubai/" },
  { name: "Element8: Website Cost in the UAE", url: "https://www.element8.ae/blogs/website-cost-uae" },
  { name: "Cubix: How Much Does Web Development Cost in Dubai? (2026 Guide)", url: "https://www.cubix.co/ae/blog/web-development-cost-in-dubai/" },
  { name: "Element8: Website Maintenance Cost in Dubai", url: "https://www.element8.ae/blogs/website-maintenance-cost-dubai" },
  { name: "Core Web Vitals, Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
];

export const GUIDE_WEBCOST_POSTS: Post[] = [
  {
    slug: "website-cost-dubai",
    title: "How Much Does a Website Cost in Dubai? Prices, Scope and Hidden Costs",
    seoTitle: "Website Cost in Dubai: Prices and Hidden Costs",
    description:
      "Published price ranges for business websites in Dubai, what drives the cost, the yearly running costs and what a good quote should list.",
    category: "Websites & Content",
    date: D,
    updated: D,
    answer:
      "Agency price guides published in 2025 and 2026 put a basic business website in Dubai at roughly AED 3,500 to 18,000, a fuller business site at about AED 15,000 to 30,000, and an online store from around AED 15,000 upwards. These are published estimates, not SEODXB prices. The real cost depends on the number of pages, custom design, content writing, Arabic, ecommerce, integrations and how carefully the old site is migrated.",
    keywords: ["website cost dubai", "website design cost dubai", "website development cost uae", "how much does a website cost in dubai", "website maintenance cost uae"],
    takeaways: [
      "Published guides put a basic business site at roughly AED 3,500 to 18,000, but scope explains most of the gap between quotes.",
      "Content, Arabic, ecommerce, integrations and migration add more cost than the design itself.",
      "Budget for yearly running costs: domain, hosting, maintenance and content updates.",
      "You should own the domain, the hosting account, the code and the content.",
      "Judge a website by the enquiries it produces, not by how it looks on launch day.",
    ],
    body: [
      {
        t: "p",
        text: "Ask five agencies in Dubai for a website quote and you may get five numbers that differ by a factor of ten. That does not always mean someone is overcharging. More often, each agency has pictured a different website: a different number of pages, a different amount of writing, one language or two, tracking set up or left out.",
      },
      {
        t: "p",
        text: "This guide explains what published price guides say, what actually moves the cost up or down, what you will pay every year after launch, and how to compare quotes so you are comparing the same thing.",
      },
      {
        t: "callout",
        title: "About the numbers in this guide",
        text: "The ranges below are published estimates taken from agency and hosting company price guides released in 2025 and 2026. Most come from businesses that sell websites, and none are audited. They are not SEODXB prices. We quote after a free consultation, once we know what the site has to do.",
      },
      { t: "h2", text: "Published price ranges by type of website", id: "ranges" },
      {
        t: "p",
        text: "The guides we reviewed do not agree exactly, which is itself useful to know. Treat each range as a rough band, not a price list.",
      },
      {
        t: "ul",
        items: [
          "**Single landing page:** roughly AED 2,000 to 8,000, depending on design and copywriting.",
          "**Basic business or brochure site (up to about ten pages):** roughly AED 3,500 to 18,000. One Dubai agency's table puts a basic site at AED 5,000 to 15,000.",
          "**Fuller business website with custom design:** about AED 15,000 to 30,000 in the same table, and other guides give AED 8,000 to 25,000 for a standard five to ten page site.",
          "**Online store on Shopify or WooCommerce:** guides commonly start at around AED 15,000 and run to AED 40,000 or 60,000. Large stores with custom features are quoted above AED 80,000.",
          "**Custom platforms and enterprise builds:** published figures run from about AED 50,000 to AED 275,000 or more. These are web applications, not typical company websites.",
        ],
      },
      {
        t: "p",
        text: "If a quote falls far outside these bands, ask why before you judge it. A very low price usually means a template with your logo on it and no writing, tracking or migration. A very high one may include work you do not need yet.",
      },
      { t: "img", photo: { id: "photo-1616587656879-8a8a7cce9d6c", alt: "Man and woman talking at a large table covered with design samples", by: "LinkedIn Sales Solutions", user: "linkedinsalesnavigator" }, caption: "Most of the gap between two website quotes comes from scope, so agree the scope before you compare prices." },
      { t: "h2", text: "What actually drives the cost", id: "drivers" },
      {
        t: "p",
        text: "Design is the part people look at, but it is rarely the biggest cost. These are the items that move a quote the most.",
      },
      { t: "h3", text: "Number and type of pages" },
      {
        t: "p",
        text: "Ten pages that share one layout cost far less than ten pages that each need their own design. Count the page types, not only the pages: home, service, location, about, contact, blog post and so on. Each new type needs design and build time.",
      },
      { t: "h3", text: "Custom design versus a template" },
      {
        t: "p",
        text: "A good template, adjusted to your brand, is a sensible choice for many small businesses. Custom design costs more because someone plans each page around your buyers and your messages. Pay for custom work where it affects enquiries, such as service pages and [landing pages for campaigns](/services/landing-page-design), and accept a simpler layout elsewhere.",
      },
      { t: "h3", text: "Content writing and photography" },
      {
        t: "p",
        text: "Many quotes assume you will supply all the text and images. Most businesses then find they have no time to write, and the launch slips for months. Ask whether writing is included, who writes it, and whether someone who knows your subject reviews it.",
      },
      { t: "h3", text: "English and Arabic" },
      {
        t: "p",
        text: "A bilingual site is more than translated text. Arabic pages need a right-to-left layout, their own keyword research and a clear URL structure so search engines can tell the two versions apart. Our guide to [Arabic and English websites in the UAE](/blog/arabic-english-bilingual-website-seo-uae) explains what is involved. Expect it to add real cost, and expect a poor result if it is treated as an afterthought.",
      },
      { t: "h3", text: "Ecommerce and integrations" },
      {
        t: "p",
        text: "Payment gateways, delivery rules, stock systems, booking tools, CRM connections and WhatsApp chat all take time to set up and test. Each integration is a small project. List every system the site must talk to before you ask for a price.",
      },
      { t: "h3", text: "Tracking set-up" },
      {
        t: "p",
        text: "A site that cannot tell you where enquiries come from is hard to improve. Form submissions, phone clicks and WhatsApp clicks should be measured from the first day. Check that this is in the quote, because it is often missing.",
      },
      { t: "h3", text: "Moving from the old site" },
      {
        t: "p",
        text: "If your current site already ranks on Google, the rebuild has to protect that. Every old address needs to point to its new equivalent, and titles and content should carry over where they work. Skipping this step is the most common reason traffic falls after a redesign, and fixing it later costs more than doing it properly at launch.",
      },
      {
        t: "callout",
        title: "A quick test for any quote",
        text: "Ask the agency to say, in one paragraph, what is not included. Writing, Arabic, tracking, redirects from the old site and training are the items most often left out. A clear answer here tells you more than the headline price.",
      },
      { t: "h2", text: "What you pay every year after launch", id: "running-costs" },
      {
        t: "p",
        text: "The build is a one-time cost. Running the site is not. Published figures for the UAE vary by provider, so use these as planning estimates and check current prices before you commit.",
      },
      {
        t: "ul",
        items: [
          "**Domain:** the smallest cost, usually well under AED 200 a year for a .ae or .com name. Check current prices with a registrar.",
          "**Hosting:** published estimates for business hosting run from roughly AED 600 to 2,400 a year, and more for busy stores or custom platforms.",
          "**Maintenance:** software updates, security patches, backups and small fixes. Guides put standard yearly cover for a small business site at roughly AED 1,500 to 5,000, and some agencies charge 10 to 15 percent of the build cost each year.",
          "**Content updates:** new pages, prices, photos and articles. This is either your team's time or a monthly fee.",
          "**Paid tools:** premium plugins, booking systems, email tools and ecommerce platform fees.",
        ],
      },
      {
        t: "p",
        text: "Add these up for three years, not one. A cheap build on an expensive platform can cost more over time than a dearer build with low running costs.",
      },
      { t: "img", photo: { id: "photo-1555949963-ff9fe0c870eb", alt: "Shallow focus view of colourful code on a dark computer screen", by: "Shahadat Rahman", user: "hishahadat" }, caption: "Updates, backups and security patches are a yearly cost, so include them when you compare quotes." },
      { t: "h2", text: "What a good quote should list", id: "quote" },
      {
        t: "p",
        text: "You cannot compare two quotes unless they describe the same work. Ask every agency to set out the following in writing.",
      },
      {
        t: "ol",
        items: [
          "The page types and the number of pages included.",
          "Whether design is custom or based on a template, and how many rounds of changes you get.",
          "Who writes the content, in which languages, and who checks it.",
          "The platform the site is built on and why it suits you.",
          "Every integration: payments, booking, CRM, WhatsApp, maps and email.",
          "Tracking: which enquiry types are measured and where you will see them.",
          "Migration: redirects from old addresses and a check after launch.",
          "Speed and mobile targets, ideally with reference to Google's Core Web Vitals.",
          "Training for your team and any handover documents.",
          "Yearly costs after launch and what happens if you leave.",
        ],
      },
      { t: "h2", text: "Who owns the domain, hosting and code", id: "ownership" },
      {
        t: "p",
        text: "This matters more than most owners realise until something goes wrong. The domain should be registered in your company's name, with your own login. The hosting account should be yours too, or you should have full access and the right to move the site. You should receive the code, the design files and the content.",
      },
      {
        t: "p",
        text: "Be careful with arrangements where the agency holds the domain or builds on a closed system that only it can host. They are not always a bad deal, but you should know the cost of leaving before you sign. Ask one direct question: if we stop working together, what do I keep and what does it cost to move?",
      },
      { t: "h2", text: "Improve the current site or rebuild it", id: "improve-or-rebuild" },
      {
        t: "p",
        text: "A rebuild is not always the answer. If your site loads reasonably fast, works on mobile and is easy to update, the problem is often the message and the enquiry options, not the platform. Clearer service pages, proof such as reviews and case studies, a visible WhatsApp button and shorter forms can lift enquiries for a fraction of the cost of a new site. Our [conversion checklist for sites with traffic but no enquiries](/blog/website-traffic-but-no-enquiries-conversion-checklist) is a good place to start.",
      },
      {
        t: "p",
        text: "Rebuild when the structure or platform holds you back: the site is slow and cannot be fixed, it breaks on mobile, your team cannot update it, or it cannot support Arabic, ecommerce or the integrations you now need.",
      },
      { t: "h2", text: "Judge value by enquiries, not looks", id: "value" },
      {
        t: "p",
        text: "A website is a sales tool. The useful question is not what it costs but what it needs to bring in. Work it through with your own numbers. If a new customer is worth AED 10,000 to you and you close one enquiry in four, each qualified enquiry is worth about AED 2,500. A site that produces a handful of extra enquiries a month pays for a sensible build quickly. A beautiful site that produces none is expensive at any price.",
      },
      {
        t: "p",
        text: "So ask agencies how they will make the site produce enquiries, not only how it will look. Look for answers about page structure, search intent, proof, speed and tracking. This is how we approach [website design and development](/services/website-design-and-development): the design supports the plan, and the plan is built around enquiries.",
      },
      { t: "img", photo: { id: "photo-1460925895917-afdab827c52f", alt: "Laptop showing a website analytics dashboard", by: "Carlos Muza", user: "kmuza" }, caption: "Tracking shows which pages and channels bring enquiries, which is the only fair way to judge what a site is worth." },
      { t: "h2", text: "Questions to ask before you sign", id: "questions" },
      {
        t: "ul",
        items: [
          "Can I see two sites you built for businesses like mine, and speak to the owners?",
          "Who will actually do the work, and who is my contact?",
          "What do you need from me, and by when, to keep the project on schedule?",
          "How will the site be found on Google and in AI search tools after launch?",
          "How do you protect our current rankings during the move?",
          "What will I be able to change myself without calling you?",
          "What does it cost each year, and what happens if we part ways?",
        ],
      },
      { t: "h2", text: "Red flags in a website proposal", id: "red-flags" },
      {
        t: "ul",
        items: [
          "A fixed price given before anyone has asked what the site needs to do.",
          "No mention of content, tracking or redirects from the old site.",
          "The agency registers the domain in its own name.",
          "Promises of first-page rankings as part of the build.",
          "A platform only the agency can host or edit, with no exit terms.",
          "A launch date with no list of what you must supply to meet it.",
          "No plan for what happens in the months after launch.",
        ],
      },
      {
        t: "p",
        text: "None of these proves a bad supplier. Each one is a reason to ask another question before you pay a deposit.",
      },
      { t: "h2", text: "How to set your own budget", id: "your-budget" },
      {
        t: "p",
        text: "Start from the job, not the price. Write down what the site must do in the next twelve months: the services it must sell, the areas it must cover, the languages, and the number of enquiries you want from it. Then list the page types, the integrations and the content you need. Share that one-page brief with every agency so the quotes describe the same work.",
      },
      {
        t: "p",
        text: "If you would like a second opinion on a quote, or a view on whether to improve or rebuild, [book a free consultation](/contact). We will look at your current site and your goals and tell you plainly what we would do first.",
      },
    ],
    faqs: [
      {
        q: "How much does a basic business website cost in Dubai?",
        a: "Agency price guides published in 2025 and 2026 put a basic business or brochure site at roughly AED 3,500 to 18,000, with one Dubai agency listing AED 5,000 to 15,000. These are published estimates from companies that sell websites, so treat them as a rough band. Your price depends on pages, content, languages and integrations.",
      },
      {
        q: "Why do website quotes in Dubai vary so much?",
        a: "Because each agency has usually priced a different scope. One quote may include writing, Arabic, tracking and redirects from your old site, and another may include none of them. Give every agency the same written brief and ask each one to list what is not included.",
      },
      {
        q: "What does a website cost to run each year in the UAE?",
        a: "Plan for a domain, hosting, maintenance and content updates. A domain usually costs well under AED 200 a year. Published estimates put business hosting at roughly AED 600 to 2,400 a year and standard maintenance for a small site at roughly AED 1,500 to 5,000 a year. Check current prices with providers.",
      },
      {
        q: "Should I rebuild my website or improve the one I have?",
        a: "Improve it if it is reasonably fast, works on mobile and is easy to update. Clearer messaging, proof and better enquiry options often lift results. Rebuild when the platform or structure is the problem, for example when the site is slow, hard to edit or cannot support Arabic or ecommerce.",
      },
      {
        q: "Who should own the website and the domain?",
        a: "You should. The domain should be registered in your company's name with your own login, and you should have full access to hosting, code, design files and content. Before signing, ask what you keep and what it costs to move if you stop working with the agency.",
      },
    ],
  },
];
