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
      "Most marketing problems are actually strategy problems. Before you spend money on ads or content, we find your ideal customer. We check what your competitors are doing. Then we pick the channels most likely to bring you a return in your market.",
    includes: [
      "Market and competitor review for the UAE and your target regions",
      "Ideal customer profile and buying triggers",
      "Positioning and core messaging",
      "Channel plan with budget split and 90-day priorities",
      "KPI framework linking marketing activity to leads and revenue",
    ],
    bestFor: "Businesses that are just starting, entering the UAE, or spending on marketing without seeing a clear return.",
    measure: ["Cost per qualified lead", "Pipeline created", "Channel payback period"],
  },
  {
    id: "search",
    name: "SEO, AEO & GEO",
    short: "Be found on Google, in answer boxes and inside AI tools like ChatGPT and Gemini.",
    intro:
      "Your customers search in three places now. They use Google. They use answer boxes at the top of results. And they ask AI tools like ChatGPT. We build one programme that gets you found in all three. We start with the technical basics, then create pages that match what buyers are actually searching for.",
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
      "Paid ads can fill your pipeline fast. They can also waste your money fast. So we set up proper tracking first. Then we start small. We only spend more on campaigns that bring qualified leads at a cost that makes sense for your business.",
    includes: [
      "Conversion tracking and analytics setup",
      "Google Search, Performance Max and YouTube",
      "Meta, LinkedIn and TikTok campaigns",
      "Ad creative and landing page testing",
      "Weekly optimisation and monthly budget reviews",
    ],
    bestFor: "Businesses that need leads now, while their SEO and content build up over time.",
    measure: ["Cost per qualified lead", "Return on ad spend", "Lead-to-sale rate by campaign"],
  },
  {
    id: "web-content-social",
    name: "Websites, Content & Social",
    short: "Fast websites, useful content and consistent social presence that support every other channel.",
    intro:
      "Every ad and search result sends people to your website. So the website has to work. We build and improve websites that load fast and turn visitors into enquiries. We also create the content and social posts that keep your brand visible between sales.",
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
