import type { LongFormSpec } from "./types";

// Daily batch: a Google Maps visibility troubleshooter and a Local vs National
// SEO decision guide. These pair with the new Google Maps SEO landing cluster.
// British English. No em dashes. Writer: Srinivasan R.

const img = (id: string) => `https://images.unsplash.com/${id}?w=1200&auto=format&fit=crop&q=80`;

export const batch21: LongFormSpec[] = [
  // ── 1. Google Maps visibility troubleshooter (local problem-solving) ──────
  {
    slug: "why-not-showing-google-maps-fixes",
    category: "Local SEO",
    title: "Why Isn't My Business Showing on Google Maps? Causes and Fixes",
    excerpt: "The common reasons a business does not appear on Google Maps, and the practical fixes that restore visibility.",
    heroImage: img("photo-1524661135-423995f22d0b"),
    heroAlt: "Map application on a phone representing Google Maps visibility for local businesses",
    intro: [
      "Few local SEO problems are as frustrating as knowing your business exists, being certain your service is good, and still not appearing when customers search for it on Google Maps. The causes are usually specific and fixable, but they are easy to miss because Maps visibility depends on several signals working together rather than a single setting.",
      "This guide walks through the most common reasons a business does not show on Google Maps and the practical steps to fix each one. It applies whether you operate in Dubai, Riyadh, Doha, London or anywhere else, because the underlying rules are the same, and getting them right is often the fastest source of local enquiries.",
    ],
    keyStats: [
      "Google Maps visibility depends on relevance, distance and prominence working together.",
      "An unverified or suspended Google Business Profile will not appear in Maps results.",
      "Inconsistent name, address and phone details across the web weaken local ranking.",
      "Genuine, recent reviews are a strong local prominence signal.",
    ],
    sections: [
      {
        h: "Your Profile Is Not Verified or Has Been Suspended",
        p: [
          "The most common reason a business does not appear on Maps is that its Google Business Profile is not verified, or has been suspended for a policy issue. An unverified profile cannot rank, and a suspended one is removed from results entirely until reinstated. This is the first thing to check, because no amount of other optimisation helps while the profile is not live.",
          "The fix is to complete verification through the method Google offers for your business, and, if suspended, to review Google's guidelines, correct whatever triggered the suspension, and submit a reinstatement request. Common triggers include a mismatch between your listed address and your actual presence, keyword-stuffed business names, or prohibited business types.",
        ],
        image: {
          url: img("photo-1553413077-190dd305871c"),
          alt: "Shop owner reviewing their business listing on a laptop",
          caption: "A verified, compliant Google Business Profile is the precondition for any Maps visibility.",
        },
      },
      {
        h: "Relevance, Distance and Prominence Are Off",
        p: [
          "Google ranks Maps results on three factors: relevance, how well your profile matches the search; distance, how close you are to the searcher or the searched area; and prominence, how well known and trusted your business is. If you do not appear, one or more of these is usually weak. A thin profile with no categories or services scores poorly on relevance; a business far from the search area struggles on distance; a new business with few reviews is low on prominence.",
          "The fix is to strengthen each in turn. Choose the most accurate primary category and add relevant secondary categories, complete every field, list your services and areas served, and add real photos. You cannot change your physical distance, but you can make sure your profile is complete and relevant enough to appear for searches within your genuine service area.",
        ],
        list: [
          "Set the most accurate primary category, then add relevant secondary categories",
          "Complete every field: services, hours, attributes, description and photos",
          "Make sure your address and service area reflect where you genuinely operate",
          "Build prominence with genuine reviews and credible mentions over time",
        ],
      },
      {
        h: "Your NAP Details Are Inconsistent",
        p: [
          "Name, address and phone number, often called NAP, need to match across your website, your Google Business Profile and the directories and listings that mention you. When these details conflict, for example a different phone number here or an old address there, Google becomes less confident about your business and is less likely to show it prominently on Maps.",
          "The fix is a careful audit. List every place your business appears online, correct the inconsistencies so every listing matches exactly, and keep them aligned as details change. This is unglamorous work, but it removes a common, quiet drag on local ranking that many businesses never realise is holding them back.",
        ],
      },
      {
        h: "You Have Too Few Genuine Reviews",
        p: [
          "Reviews are one of the clearest prominence signals for Maps, and a business with very few, or none, often struggles to appear against competitors with a steady flow of recent, genuine feedback. Reviews also influence whether a customer chooses you once you do appear, so they affect both visibility and conversion.",
          "The fix is a simple, consistent process for inviting satisfied customers to leave honest reviews, and for responding to every review professionally. Never buy reviews or incentivise fake ones; beyond being against Google's policies and a suspension risk, they undermine the trust that makes reviews valuable in the first place.",
        ],
      },
      {
        h: "When to Get Help",
        p: [
          "Many of these issues are straightforward to fix once identified, and a methodical business owner can resolve verification, profile completeness and NAP consistency without outside help. Reinstating a suspended profile, competing in a dense urban market, or diagnosing why a technically correct profile still underperforms is where specialist support usually pays for itself.",
          "The wider point is that Maps visibility is rarely about one setting. It is the combination of a verified, complete, compliant profile, consistent information everywhere, genuine reviews and a relevant service area. Get those working together and, for most local businesses, Maps becomes one of the most reliable and cost-effective sources of enquiries.",
        ],
      },
    ],
    takeaway: "If your business is not showing on Google Maps, the cause is almost always specific: an unverified or suspended profile, weak relevance, distance or prominence, inconsistent NAP details, or too few genuine reviews. Fixing these in order, starting with verification, restores visibility and often makes Maps your most reliable source of local enquiries. SEODXB helps local businesses across the UAE, GCC, UK and Ireland diagnose and fix exactly these issues.",
    faqs: [
      { q: "Why is my business not showing on Google Maps?", a: "The most common reasons are an unverified or suspended Google Business Profile, weak relevance from an incomplete profile, distance from the search area, inconsistent name, address and phone details across the web, or too few genuine reviews. Checking verification first is the right starting point." },
      { q: "How long does it take to appear on Google Maps after verifying?", a: "A verified profile can appear within days, but ranking well takes longer and depends on completeness, consistency and reviews building over time. Verification makes you eligible to appear; the other signals determine how prominently." },
      { q: "Does my business address affect Maps visibility?", a: "Yes. Distance from the searcher or searched area is a ranking factor, and your address must reflect where you genuinely operate. A service-area business can set the areas it serves, but listing a false address risks suspension." },
      { q: "How many reviews do I need to rank on Google Maps?", a: "There is no fixed number. What matters is a steady flow of genuine, recent reviews relative to your competitors, along with professional responses. Quality and consistency matter more than any single total." },
      { q: "Can inconsistent business details stop me appearing on Maps?", a: "Yes. When your name, address and phone number conflict across your website, profile and directories, Google becomes less confident about your business and less likely to show it prominently. Aligning every listing exactly is an important fix." },
      { q: "What should I do if my Google Business Profile is suspended?", a: "Review Google's guidelines, identify and correct whatever triggered the suspension, such as an address mismatch or a keyword-stuffed name, then submit a reinstatement request. Specialist help is often worth it for suspensions, which can be difficult to resolve alone." },
    ],
    references: [
      { title: "Google Business Profile Help: Verify your business", url: "https://support.google.com/business/answer/7107242", publisher: "Google" },
      { title: "Google Business Profile Help: Improve your local ranking", url: "https://support.google.com/business/answer/7091", publisher: "Google" },
      { title: "Google Business Profile", url: "https://www.google.com/business/", publisher: "Google" },
    ],
    related: [
      { label: "Google Maps SEO in Dubai", href: "/google-maps-seo-dubai" },
      { label: "Local SEO vs National SEO: Which Does Your Business Need?", href: "/blog/local-seo-vs-national-seo-guide" },
      { label: "UAE Map Pack Local Ranking Factors", href: "/blog/uae-map-pack-local-ranking-factors" },
    ],
  },

  // ── 2. Local vs National SEO decision guide (commercial comparison) ───────
  {
    slug: "local-seo-vs-national-seo-guide",
    category: "SEO Strategy",
    title: "Local SEO vs National SEO: Which Does Your Business Need?",
    excerpt: "A clear comparison of local and national SEO, and how to choose the right approach for your business and budget.",
    heroImage: img("photo-1454165804606-c3d57bc86b40"),
    heroAlt: "Business team planning an SEO strategy on a whiteboard",
    intro: [
      "Local SEO and national SEO are often spoken about as if they were the same discipline at different scales, but they solve different problems, target different searches, and demand different tactics. Choosing the wrong one, or trying to do both before you are ready, is one of the most common reasons SEO budgets underperform.",
      "This guide sets out plainly what each approach is, when it makes sense, and how to decide which your business actually needs. It is written for owners and marketers who want to spend their budget where it produces enquiries, not where it produces the biggest-sounding keyword.",
    ],
    keyStats: [
      "Local SEO targets searches tied to a place; national SEO targets searches across a whole country.",
      "Local SEO leans on Google Business Profile, reviews and proximity; national SEO leans on content depth and authority.",
      "Local searches typically convert faster because intent is higher and competition is narrower.",
      "The right choice depends on where your customers are, not on which sounds more ambitious.",
    ],
    sections: [
      {
        h: "What Local SEO Actually Is",
        p: [
          "Local SEO is about being found by customers in a specific place: a city, a district or a service area. It centres on the Google Business Profile, the Map Pack, local listings, reviews and location-relevant content. The searches it targets often carry words like near me or a place name, and they usually come from people ready to act soon, which is why local visibility tends to convert quickly.",
          "It suits any business whose customers are geographically bound: clinics, restaurants, contractors, professional-services firms, retailers and most service businesses. If someone has to visit you, or you travel to them, local SEO is almost always where the fastest, most cost-effective enquiries come from.",
        ],
        image: {
          url: img("photo-1556761175-5973dc0f32e7"),
          alt: "Local business owner serving a customer in store",
          caption: "Local SEO wins customers who are close by and ready to act soon.",
        },
      },
      {
        h: "What National SEO Actually Is",
        p: [
          "National SEO is about ranking for searches across an entire country, regardless of where the searcher is. It relies less on proximity and more on content depth, topical authority and credible links, because you are competing with everyone in your category rather than everyone in your area. The searches it targets are often broader and higher in volume, but also more competitive and further from the point of purchase.",
          "It suits businesses that serve customers anywhere: e-commerce stores that ship nationwide, software and online services, and brands whose product does not depend on location. For these, being confined to one city would leave most of the market unreached, so the greater effort national SEO demands is justified.",
        ],
        list: [
          "Local SEO: place-based searches, Map Pack, reviews, proximity, fast conversion",
          "National SEO: country-wide searches, content depth, authority, broader competition",
          "Local suits location-bound businesses; national suits location-independent ones",
          "Many businesses need local first, then national as they grow",
        ],
      },
      {
        h: "How to Choose",
        p: [
          "The deciding question is simple: where are your customers, and does your service depend on location? If customers must be near you, or you serve a defined area, start with local SEO because it converts faster and faces narrower competition. If your customers could be anywhere in the country and your offering does not depend on place, national SEO is the right target, accepting that it takes longer and costs more.",
          "Budget matters too. National SEO in a competitive category is a sustained investment in content and authority, so a smaller business is often better served by dominating local searches first, generating enquiries and revenue, then expanding nationally from a position of strength rather than spreading a limited budget too thin.",
        ],
      },
      {
        h: "When You Need Both",
        p: [
          "Plenty of businesses genuinely need both, but usually in sequence rather than at once. A multi-location business, for example, benefits from strong local SEO for each branch and national SEO for the brand overall. The efficient path is to establish local visibility where the fast enquiries are, then layer national content and authority on top as resources allow.",
          "The mistake to avoid is treating both as a single undifferentiated effort. Local and national SEO share foundations, a fast, crawlable site and genuinely useful content, but their priorities differ, and a plan that blurs them tends to under-serve both. Deciding which comes first, and being deliberate about it, is what makes the budget work.",
        ],
      },
      {
        h: "The Bottom Line",
        p: [
          "For most service and location-bound businesses, local SEO is the right starting point: it is faster, cheaper and closer to the sale. For e-commerce and location-independent businesses, national SEO is the target from the outset, with the patience its competition demands. Businesses that need both are usually best served by getting local right first and expanding deliberately.",
          "Whichever you choose, the fundamentals are shared: a sound technical foundation, genuinely useful content, consistent information across the web and a plan measured against enquiries rather than vanity metrics. Match the approach to where your customers are, and the budget follows the results.",
        ],
      },
    ],
    takeaway: "Local SEO and national SEO solve different problems: local wins nearby, ready-to-act customers quickly and cheaply, while national reaches a country-wide market at greater cost and over a longer horizon. Choose by asking where your customers are and whether your service depends on location, and for most businesses that means local first, national as you grow. SEODXB helps businesses across the UAE, GCC, UK and Ireland make and execute that choice.",
    faqs: [
      { q: "What is the difference between local and national SEO?", a: "Local SEO targets searches tied to a specific place and relies on Google Business Profile, reviews and proximity. National SEO targets searches across a whole country and relies on content depth, topical authority and links. They solve different problems and suit different businesses." },
      { q: "Which is better for a small business?", a: "For most small, location-bound businesses, local SEO is better first. It converts faster, faces narrower competition and costs less, letting you generate enquiries and revenue before expanding nationally if it makes sense." },
      { q: "Can I do both local and national SEO at once?", a: "You can, but it is usually more efficient to sequence them: establish local visibility where the fast enquiries are, then layer national content and authority on top. Doing both at once with a limited budget often under-serves both." },
      { q: "Does e-commerce need local or national SEO?", a: "Usually national, because e-commerce stores that ship across a country serve customers regardless of location. A store with physical outlets may also benefit from local SEO for each location, but the core target is national." },
      { q: "Is local SEO cheaper than national SEO?", a: "Generally yes. Local SEO faces narrower competition and leans on a Google Business Profile, reviews and location content, which is less resource-intensive than the sustained content and authority work national SEO in a competitive category demands." },
      { q: "How do I know which one I need?", a: "Ask where your customers are and whether your service depends on location. If they must be near you or you serve a defined area, start local. If they could be anywhere and your offering is location-independent, target national." },
    ],
    references: [
      { title: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", publisher: "Google" },
      { title: "Google Business Profile Help: Improve your local ranking", url: "https://support.google.com/business/answer/7091", publisher: "Google" },
      { title: "Google Search Central: Creating helpful, reliable content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", publisher: "Google" },
    ],
    related: [
      { label: "Why Isn't My Business Showing on Google Maps? Causes and Fixes", href: "/blog/why-not-showing-google-maps-fixes" },
      { label: "Google Maps SEO in Dubai", href: "/google-maps-seo-dubai" },
      { label: "UAE Map Pack Local Ranking Factors", href: "/blog/uae-map-pack-local-ranking-factors" },
    ],
  },
];
