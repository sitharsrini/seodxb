export interface Service {
  id: string;
  name: string;
  short: string;
  intro: string;
  includes: string[];
  bestFor: string;
  measure: string[];
}

export const SERVICES: Service[] = [
  {
    id: "strategy",
    name: "Marketing Strategy",
    short: "A clear plan for who you sell to, what you say and which channels earn their budget.",
    intro:
      "Most marketing problems are strategy problems in disguise. Before spending on ads or content, we define your ideal customer, your position against competitors and the few channels most likely to pay back in your market.",
    includes: [
      "Market and competitor review for the UAE and your target regions",
      "Ideal customer profile and buying triggers",
      "Positioning and core messaging",
      "Channel plan with budget split and 90-day priorities",
      "KPI framework linking marketing activity to leads and revenue",
    ],
    bestFor: "Businesses launching, entering the UAE, or spending on marketing without a clear return.",
    measure: ["Cost per qualified lead", "Pipeline created", "Channel payback period"],
  },
  {
    id: "search",
    name: "SEO, AEO & GEO",
    short: "Be found on Google, in answer boxes and inside AI tools like ChatGPT and Gemini.",
    intro:
      "Buyers now research in three places: Google results, direct answers and AI assistants. We build one search programme that covers all three, starting with the technical basics and the pages that match real buying intent.",
    includes: [
      "Technical SEO audit and fixes",
      "Keyword and intent research mapped to your services",
      "Service and location pages written to convert",
      "Google Business Profile and local citations",
      "Structured data and entity consistency for AI search visibility",
    ],
    bestFor: "Service businesses where customers search before they call.",
    measure: ["Organic enquiries", "Rankings for buying-intent terms", "Brand mentions in AI answers"],
  },
  {
    id: "ads",
    name: "Performance Advertising",
    short: "Google, Meta, LinkedIn and TikTok campaigns managed against cost per lead, not clicks.",
    intro:
      "Paid media is the fastest way to test demand and fill a pipeline, and the fastest way to waste money. We set up tracking first, launch small, and scale only what produces qualified enquiries at a cost you can afford.",
    includes: [
      "Conversion tracking and analytics setup",
      "Google Search, Performance Max and YouTube",
      "Meta, LinkedIn and TikTok campaigns",
      "Ad creative and landing page testing",
      "Weekly optimisation and monthly budget reviews",
    ],
    bestFor: "Businesses that need enquiries this quarter while longer-term channels build up.",
    measure: ["Cost per qualified lead", "Return on ad spend", "Lead-to-sale rate by campaign"],
  },
  {
    id: "web-content-social",
    name: "Websites, Content & Social",
    short: "Fast websites, useful content and consistent social presence that support every other channel.",
    intro:
      "Every channel sends people somewhere. We build and improve websites that load fast and turn visitors into enquiries, then produce the content and social posts that keep your brand credible between sales conversations.",
    includes: [
      "Website design and development, or conversion fixes to your current site",
      "Landing pages for campaigns",
      "Articles, guides and case studies written by people who know the subject",
      "Social media calendar, design and community management",
      "Brand and design templates your team can reuse",
    ],
    bestFor: "Businesses whose website or social presence is holding back their ads and search results.",
    measure: ["Website conversion rate", "Engaged visitors", "Enquiries from content and social"],
  },
];
