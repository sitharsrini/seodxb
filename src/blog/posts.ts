import type { Block, Post } from "./types";
import { MORE_POSTS } from "./posts-more";
import { INDUSTRY_POSTS } from "./posts-industries";
import { WELLNESS_POSTS } from "./posts-wellness";
import { HEALTH_POSTS } from "./posts-health";
import { HOSPITALITY_POSTS } from "./posts-hospitality";

export type { Block, Post } from "./types";

const FIRST_POSTS: Post[] = [
  {
    slug: "questions-to-ask-before-hiring-a-marketing-agency-dubai",
    title: "12 Questions to Ask Before Hiring a Marketing Agency in Dubai",
    description:
      "The questions that separate a marketing partner from a supplier: ownership, tracking, reporting, contracts and who actually does the work.",
    category: "Strategy",
    date: "2026-09-24",
    updated: "2026-09-24",
    answer:
      "Before hiring a marketing agency in Dubai, confirm that you will own every account and the website, agree how success will be measured in leads and revenue, meet the people who will do the work, and check the notice period and how ad spend is billed. An agency that answers these clearly is more likely to be a partner than a supplier.",
    keywords: ["marketing agency Dubai", "hiring a marketing agency", "agency questions", "marketing consultancy UAE"],
    takeaways: [
      "You should own every ad account, analytics property, domain and website login from day one.",
      "Ask how success will be measured in leads and revenue before you discuss deliverables.",
      "Meet the people who will do the work, not only the people who sell it.",
      "Short notice periods and clear exit terms protect you more than any promise in a proposal.",
    ],
    body: [
      {
        t: "p",
        text: "Dubai has no shortage of marketing agencies. Proposals tend to look alike: a list of services, a monthly fee and a few logos. The difference between a partner that grows your business and a supplier that sends reports only shows up months later, after the budget is spent.",
      },
      {
        t: "p",
        text: "These twelve questions are designed to surface that difference before you sign. Good agencies welcome them. If an agency avoids them, that tells you something too.",
      },
      { t: "h2", text: "Ownership and access", id: "ownership" },
      { t: "h3", text: "1. Will we own all the accounts?" },
      {
        t: "p",
        text: "Your Google Ads, Meta Business Manager, Google Analytics, Google Search Console, Google Business Profile, domain registrar and website hosting should all be registered to your company, with the agency added as a user. If an agency sets these up under its own name, you can lose years of data and campaign history the day you part ways.",
      },
      { t: "h3", text: "2. What happens to the website and content if we leave?" },
      {
        t: "p",
        text: "Ask directly whether you own the website code, design files, images and written content outright. Some agencies licence websites or keep them on their own hosting, which makes leaving expensive. Get the answer in the contract, not only in a meeting.",
      },
      { t: "h2", text: "Measurement and reporting", id: "measurement" },
      { t: "h3", text: "3. How will you measure success?" },
      {
        t: "p",
        text: "The right answer talks about **qualified leads, cost per lead and revenue**, not impressions, followers or rankings on their own. Those numbers can be useful signals, but they are not the goal. Agree on two or three primary KPIs in writing before work starts.",
      },
      { t: "h3", text: "4. How do you track leads from WhatsApp and phone calls?" },
      {
        t: "p",
        text: "In the UAE a large share of enquiries arrive by WhatsApp or phone rather than web forms. If an agency only tracks form submissions, it will under-report what works and over-report what does not. Ask them to explain their tracking setup in plain terms. Our guide to [tracking WhatsApp, call and form leads](/blog/track-whatsapp-call-form-leads-uae) covers what good looks like.",
      },
      { t: "h3", text: "5. What does a monthly report include?" },
      {
        t: "p",
        text: "Ask to see a real, anonymised report. A useful report explains what happened, what it cost, what was learned and what will change next month. A report that is mostly screenshots of platform dashboards is a warning sign.",
      },
      { t: "h2", text: "People and process", id: "people" },
      { t: "h3", text: "6. Who will actually work on our account?" },
      {
        t: "p",
        text: "Senior people often sell the work and junior people or freelancers deliver it. That can be fine, but you should know who they are, how much experience they have and how many other accounts they manage.",
      },
      { t: "h3", text: "7. What will you do in the first 90 days?" },
      {
        t: "p",
        text: "A strong agency can describe a sensible first 90 days: an audit, tracking fixes, a plan, a small number of priority actions and a first review. Vague answers such as \"we will optimise everything\" usually mean there is no plan.",
      },
      { t: "h3", text: "8. What will you not do for us?" },
      {
        t: "p",
        text: "An honest agency will tell you which channels are unlikely to work for your business, even if that means a smaller contract. If every service they offer is a perfect fit for you, be sceptical.",
      },
      { t: "h3", text: "9. How do you use AI in your work?" },
      {
        t: "p",
        text: "AI tools can speed up research and drafting, and most agencies use them. The question is how output is reviewed. Content published under your name should be checked by someone who understands your business, your market and the facts.",
      },
      { t: "h2", text: "Contracts and costs", id: "contracts" },
      { t: "h3", text: "10. What is the notice period and minimum term?" },
      {
        t: "p",
        text: "Long lock-in periods protect the agency, not you. A confident agency will usually accept a short notice period after an initial term, because it expects to keep you through results.",
      },
      { t: "h3", text: "11. Is ad spend separate from your fee?" },
      {
        t: "p",
        text: "Ideally ad spend is billed by the platform directly to your card or account, and the agency invoices only its management fee. If the agency pays the platforms and re-bills you, ask to see the platform invoices so you know exactly what was spent.",
      },
      { t: "h3", text: "12. What results can you realistically expect, and by when?" },
      {
        t: "p",
        text: "No one can guarantee rankings or a fixed number of leads, and an agency that does is overpromising. What they can give you is a realistic range, the assumptions behind it and the point at which you will both review whether the plan is working.",
      },
      {
        t: "callout",
        title: "A simple test",
        text: "Ask the agency to explain, in one paragraph, how they would decide where to spend your first AED 10,000. The quality of that answer tells you more than any case study deck.",
      },
      { t: "h2", text: "Red flags to watch for", id: "red-flags" },
      {
        t: "ul",
        items: [
          "Guaranteed first-page rankings or a fixed number of leads.",
          "Accounts or the website set up in the agency's name.",
          "Reports built around vanity metrics with no link to enquiries.",
          "Pressure to sign a long contract before an audit has been done.",
          "No clear answer on who will do the work.",
        ],
      },
      { t: "h2", text: "Choosing between a consultancy and an agency", id: "consultancy" },
      {
        t: "p",
        text: "An agency usually sells channels: SEO, ads or social. A consultancy starts with the business question of where growth should come from, then decides which channels to use. If you are unsure where your budget should go, start with strategy. You can read how we approach this on our [services page](/services).",
      },
    ],
    faqs: [
      {
        q: "How much does a marketing agency cost in Dubai?",
        a: "Fees vary widely with scope, from small monthly retainers for a single channel to much larger engagements covering strategy, ads, search and content. Compare proposals on what is included, who does the work and how results are measured rather than on price alone.",
      },
      {
        q: "Should I hire one agency or several specialists?",
        a: "Several specialists can work if someone owns the overall plan and budget. Without that, channels are optimised in isolation. Many businesses get better results from one partner accountable for the whole plan.",
      },
      {
        q: "How long before I see results from a new agency?",
        a: "Paid campaigns can produce enquiries within weeks once tracking is in place. SEO and content usually take several months to build momentum. Agree review points in advance so you can judge progress fairly.",
      },
    ],
  },
  {
    slug: "get-recommended-by-chatgpt-google-ai-overviews",
    title: "How to Get Your Business Recommended by ChatGPT and Google AI Overviews",
    description:
      "A practical guide to AI search visibility: how assistants choose which businesses to mention, and the steps that make yours easier to recommend.",
    category: "SEO & AI Search",
    date: "2026-09-24",
    updated: "2026-09-24",
    answer:
      "AI assistants such as ChatGPT search and Google AI Overviews recommend businesses they can clearly identify and verify across the web. To be recommended, allow AI crawlers in robots.txt, keep your name, address and phone number identical everywhere, complete your Google Business Profile, answer buyers' questions directly on your site, and earn genuine reviews and mentions from credible third-party sources.",
    keywords: ["AI search visibility", "ChatGPT recommendations", "Google AI Overviews", "generative engine optimization", "GEO Dubai", "AEO"],
    takeaways: [
      "AI assistants recommend businesses they can clearly identify and verify across many sources.",
      "Strong traditional SEO is still the foundation, because AI answers draw on content that search engines already trust.",
      "Consistent business details and genuine third-party mentions matter as much as your own website.",
      "Check your robots.txt so the crawlers used for AI search are not blocked by accident.",
    ],
    body: [
      {
        t: "p",
        text: "More buyers now start with a question to an AI assistant instead of a list of search results: \"Which accounting firms in Dubai work with startups?\" or \"What is a good clinic for physiotherapy in Jumeirah?\" The answer names a few businesses. If yours is not among them, you may never know you were considered.",
      },
      {
        t: "p",
        text: "There is no switch that makes an AI tool recommend you. But the signals these systems rely on are understandable, and most of them are within your control. This guide covers what matters and what to do about it.",
      },
      { t: "h2", text: "How AI assistants decide who to mention", id: "how-it-works" },
      {
        t: "p",
        text: "Tools such as ChatGPT search, Google AI Overviews, Gemini, Perplexity and Microsoft Copilot combine a language model with information retrieved from the web. When someone asks for a recommendation, the system looks for sources it considers reliable, then summarises what they say.",
      },
      {
        t: "p",
        text: "That has two consequences. First, you need to be present in the sources these tools read: your website, but also directories, review platforms, news coverage and industry sites. Second, the information about you needs to be clear and consistent, so the model can describe you accurately.",
      },
      {
        t: "callout",
        title: "The short version",
        text: "AI search rewards the same things good SEO always has: a clear, trustworthy business that answers real questions, mentioned by other trustworthy sources.",
      },
      { t: "h2", text: "Step 1: Make sure AI crawlers can read your site", id: "crawlers" },
      {
        t: "p",
        text: "Check your robots.txt file. Some sites block AI-related crawlers by accident, often through a security plugin or a copied template. The main ones to be aware of are **OAI-SearchBot** (used for ChatGPT search), **GPTBot** (OpenAI model training), **PerplexityBot** and **Googlebot**, which feeds Google AI Overviews. Google-Extended controls whether your content is used for Gemini model training, but it does not affect Google Search or AI Overviews.",
      },
      {
        t: "p",
        text: "Also check that your important pages show their content in the HTML itself. Some sites load text only through JavaScript, which not every crawler processes. If you view the page source and cannot see your main text, AI crawlers may not see it either.",
      },
      { t: "h2", text: "Step 2: Get the basics of SEO right", id: "seo-basics" },
      {
        t: "p",
        text: "Google AI Overviews draw on pages that Google already indexes and trusts, and other assistants use search indexes too. A site with technical problems, thin pages or no clear topic will struggle in AI answers for the same reasons it struggles in normal results.",
      },
      {
        t: "ul",
        items: [
          "One clear page for each core service, written for the questions buyers actually ask.",
          "Descriptive page titles and headings that say what the page is about.",
          "Fast loading on mobile, with no broken pages or redirect chains.",
          "Location information that matches where you really operate.",
        ],
      },
      { t: "h2", text: "Step 3: Make your business easy to identify", id: "entity" },
      {
        t: "p",
        text: "AI systems need to be confident that the \"Al Noor Dental Clinic\" on your website, on Google Maps and in a news article is the same business. Inconsistent names, addresses or phone numbers make that harder.",
      },
      {
        t: "ol",
        items: [
          "Use the exact same business name, address and phone number everywhere.",
          "Complete your Google Business Profile, including categories, services, hours and photos.",
          "Add structured data (schema markup) to your site describing your organisation, services and location.",
          "Write an About page that states plainly who you are, what you do, where and for whom.",
        ],
      },
      { t: "h2", text: "Step 4: Answer questions directly", id: "answers" },
      {
        t: "p",
        text: "Assistants favour content that answers a question clearly and early. If a buyer asks what a service costs, how long it takes or who it is for, the page that answers in a clear sentence near the top is easier to quote than one that buries the answer in marketing copy.",
      },
      {
        t: "p",
        text: "A practical approach is to collect the questions your sales team hears every week and answer each one properly on your site, either on the relevant service page or in a dedicated article. Include specifics that only your business can provide: your process, typical timelines, the areas you serve.",
      },
      { t: "h2", text: "Step 5: Earn mentions from other sources", id: "mentions" },
      {
        t: "p",
        text: "Your own website is only one voice. AI assistants weigh what others say about you. Useful sources include:",
      },
      {
        t: "ul",
        items: [
          "Genuine customer reviews on Google and relevant industry platforms.",
          "Listings on respected directories and business platforms in the UAE.",
          "Coverage in local or industry publications.",
          "Partner, supplier or association websites that mention you.",
        ],
      },
      {
        t: "p",
        text: "Quality matters more than volume. A handful of credible, relevant mentions is worth more than dozens of low-quality directory links.",
      },
      { t: "h2", text: "Step 6: Check what AI tools say about you", id: "monitor" },
      {
        t: "p",
        text: "Once a month, ask the main assistants the questions your customers would ask, and note whether you are mentioned, how you are described and which competitors appear. Answers vary between sessions, so look for trends over time rather than reacting to a single response. If an assistant describes you incorrectly, find where that information comes from and correct it at the source.",
      },
      { t: "h2", text: "What not to do", id: "avoid" },
      {
        t: "ul",
        items: [
          "Publishing large volumes of generic AI-written pages. They rarely earn trust and can weaken the whole site.",
          "Fake reviews or paid mentions presented as independent. They create risk and erode trust.",
          "Stuffing pages with every possible question. Answer the real ones well.",
        ],
      },
      {
        t: "p",
        text: "AI search visibility is part of our [SEO, AEO and GEO service](/services#search). If you want an outside view of where you stand today, [book a consultation](/contact).",
      },
    ],
    faqs: [
      {
        q: "Can I pay to be recommended by ChatGPT?",
        a: "Recommendations in ChatGPT's answers are not something you can buy. Visibility comes from being clearly described and trusted across the sources these tools use.",
      },
      {
        q: "Is AI search replacing Google?",
        a: "Not replacing, but changing how people search. Many buyers use both. The good news is that most of the work that helps in AI answers also helps in traditional search.",
      },
      {
        q: "How long does it take to appear in AI answers?",
        a: "It depends on how established your business is online. Fixing access and consistency issues can help relatively quickly, while earning mentions and building authority takes months.",
      },
    ],
  },
  {
    slug: "track-whatsapp-call-form-leads-uae",
    title: "Track Every WhatsApp, Call and Form Lead Before You Spend on Ads",
    description:
      "How UAE businesses can measure enquiries from WhatsApp, phone calls and web forms, so ad budgets go to the campaigns that actually bring customers.",
    category: "Performance Ads",
    date: "2026-09-24",
    updated: "2026-09-24",
    answer:
      "To track WhatsApp, call and form leads, record each as a key event in Google Analytics 4 (form submission, wa.me link click, tel: link click), import those events as conversions into Google Ads and Meta, ask every new enquiry how they found you, and log all leads with source and outcome in one place. Then compare campaigns on cost per qualified lead rather than clicks.",
    keywords: ["WhatsApp lead tracking", "call tracking UAE", "Google Analytics 4 key events", "conversion tracking Dubai", "cost per qualified lead"],
    takeaways: [
      "If you only track form submissions, you are probably missing many of your leads.",
      "Track WhatsApp clicks and phone taps as key events in Google Analytics and your ad platforms.",
      "Ask every new enquiry how they found you, and record it in one place.",
      "Measure qualified leads and sales, not only clicks and contacts.",
    ],
    body: [
      {
        t: "p",
        text: "A common story: a business runs Google and Meta ads, the dashboards show a handful of conversions, and the owner concludes the ads are not working. Meanwhile the sales team is busy answering WhatsApp messages and phone calls that nobody is connecting back to the campaigns.",
      },
      {
        t: "p",
        text: "In the UAE, many customers prefer to message or call rather than fill in a form. If your tracking ignores those channels, you will switch off campaigns that work and keep funding ones that do not. Fixing this is the first thing we do in any paid media engagement, before spending on ads.",
      },
      { t: "h2", text: "The three enquiry channels to measure", id: "channels" },
      {
        t: "ul",
        items: [
          "**Web forms**: contact forms, quote requests and booking forms on your site.",
          "**WhatsApp**: clicks on WhatsApp buttons or links, and the conversations that follow.",
          "**Phone calls**: taps on your phone number on mobile, plus calls from people who saw your number and dialled it.",
        ],
      },
      { t: "h2", text: "Step 1: Set up key events in Google Analytics", id: "ga4" },
      {
        t: "p",
        text: "In Google Analytics 4, the actions you care about most are marked as **key events** (previously called conversions). Create an event for each enquiry type: form submitted, WhatsApp click and phone click. Google Tag Manager makes this manageable without changing your website code for every tweak.",
      },
      {
        t: "ol",
        items: [
          "Form submissions: fire an event on the thank-you page or on a confirmed successful submission, not on every button click.",
          "WhatsApp: fire an event when someone clicks any link that starts with wa.me or api.whatsapp.com.",
          "Phone: fire an event when someone clicks a link that starts with tel:.",
          "Mark all three as key events, and name them clearly so reports are easy to read.",
        ],
      },
      {
        t: "callout",
        title: "Test before you trust",
        text: "Submit your own form, tap your own WhatsApp button and phone link, then check that each event appears in Google Analytics real-time reports. Broken tracking is more common than missing tracking.",
      },
      { t: "h2", text: "Step 2: Send the same events to your ad platforms", id: "ad-platforms" },
      {
        t: "p",
        text: "Google Ads and Meta optimise towards whatever you tell them is a conversion. If they only see form submissions, they will look for people who fill in forms, and ignore the people who message you. Import your key events into Google Ads, and set up the Meta Pixel and Conversions API to record the same actions.",
      },
      {
        t: "p",
        text: "For campaigns designed to start conversations, Meta also offers click-to-WhatsApp ads, which open a chat directly. These report conversations started inside Meta, which is useful, but still check how many of those conversations become real enquiries.",
      },
      { t: "h2", text: "Step 3: Capture calls people dial manually", id: "calls" },
      {
        t: "p",
        text: "Some people see your number and dial it rather than tapping. Click tracking will not catch those. Options include call tracking services that show a different number to visitors from different sources, and Google Ads call assets that report calls made from the ad itself. Choose based on how important phone leads are to your business.",
      },
      { t: "h2", text: "Step 4: Ask, and record the answer", id: "ask" },
      {
        t: "p",
        text: "No tracking setup is perfect. The simplest backup is to ask every new enquiry how they heard about you, and record it with the lead. Keep the options short: Google search, Google Maps, Instagram, a referral, and so on. Over a few months, this gives you a reality check on what the dashboards say.",
      },
      { t: "h2", text: "Step 5: Keep all leads in one place", id: "one-place" },
      {
        t: "p",
        text: "Leads spread across personal WhatsApp accounts, email inboxes and notebooks cannot be measured. Use a shared WhatsApp Business account for the team, and log every enquiry in one system, even a well-structured spreadsheet at first, with the date, source, channel and outcome.",
      },
      { t: "h2", text: "Step 6: Measure quality, not just volume", id: "quality" },
      {
        t: "p",
        text: "Fifty WhatsApp clicks that turn into three real conversations are worth less than ten form fills that turn into five sales meetings. Once leads are in one place, mark which ones were qualified and which became customers. Then compare campaigns on **cost per qualified lead** and, where possible, revenue.",
      },
      {
        t: "p",
        text: "Where your platforms support it, feed qualified-lead and sale outcomes back into Google Ads and Meta through offline conversion imports. The platforms will then optimise for the enquiries that turn into business, not just any enquiry.",
      },
      { t: "h2", text: "A quick checklist", id: "checklist" },
      {
        t: "ul",
        items: [
          "Form, WhatsApp and phone clicks tracked as key events in Google Analytics.",
          "The same actions recorded as conversions in Google Ads and Meta.",
          "A plan for calls dialled manually.",
          "Every lead asked how they found you.",
          "All leads logged in one place with source and outcome.",
          "Campaigns compared on cost per qualified lead.",
        ],
      },
      {
        t: "p",
        text: "Tracking setup is part of our [performance advertising service](/services#ads), and it is always the first step. If you are unsure whether your current tracking is telling the truth, [talk to us](/contact).",
      },
    ],
    faqs: [
      {
        q: "Can Google Analytics see what people write on WhatsApp?",
        a: "No. Analytics can record that someone clicked a WhatsApp link on your site. What happens in the conversation stays in WhatsApp, which is why logging leads and outcomes separately matters.",
      },
      {
        q: "Do I need a CRM to track leads?",
        a: "Not at the start. A shared spreadsheet with consistent columns works for smaller volumes. A CRM becomes worthwhile when several people handle leads or volumes grow.",
      },
      {
        q: "Is tracking required before running ads?",
        a: "It is not technically required, but running ads without it means you cannot tell which campaigns bring customers. Setting up tracking first usually saves money within the first month.",
      },
    ],
  },
];

export const POSTS: Post[] = [...FIRST_POSTS, ...MORE_POSTS, ...INDUSTRY_POSTS, ...WELLNESS_POSTS, ...HEALTH_POSTS, ...HOSPITALITY_POSTS];

const strip = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

// Plain-text version of a post, used for word counts, RSS and llms-full.txt.
export function postText(post: Post): string {
  const parts: string[] = [post.answer];
  for (const b of post.body) {
    if (b.t === "h2" || b.t === "h3") parts.push(`\n## ${b.text}\n`);
    else if (b.t === "p") parts.push(strip(b.text));
    else if (b.t === "callout") parts.push(`${b.title}: ${strip(b.text)}`);
    else parts.push(b.items.map((it, i) => (b.t === "ol" ? `${i + 1}. ` : "- ") + strip(it)).join("\n"));
  }
  parts.push("\n## Frequently asked questions\n");
  for (const f of post.faqs) parts.push(`Q: ${f.q}\nA: ${f.a}`);
  return parts.join("\n\n");
}

export function wordCount(post: Post): number {
  return postText(post).split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: Post): number {
  return Math.max(3, Math.round(wordCount(post) / 220));
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export const postPath = (p: Post) => `/blog/${p.slug}`;
