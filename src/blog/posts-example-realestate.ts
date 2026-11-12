import type { Post } from "./types";

const D = "2026-11-12";

export const EXAMPLE_REALESTATE_POSTS: Post[] = [
  {
    slug: "worked-example-real-estate-google-ads-lead-tracking-dubai",
    title: "Worked Example: Google Ads and Lead Tracking for a Dubai Real Estate Brokerage",
    seoTitle: "Worked Example: Google Ads for a Dubai Brokerage",
    description:
      "An illustrative model of Google Ads, landing pages and lead tracking for a Dubai brokerage, with the full arithmetic so you can swap in your own numbers.",
    category: "Worked Examples",
    date: D,
    updated: D,
    answer:
      "This is an illustrative scenario with modelled numbers, not a client result. It shows how a mid-sized Dubai brokerage that depends on property portals could plan Google Ads search campaigns, landing pages, and call, form and WhatsApp tracking. In the base case we assume AED 30,000 of monthly ad spend, 2,500 clicks, 100 leads, 30 qualified leads and 1.5 deals a month. Every figure is an assumption, and the arithmetic is shown so you can replace each one with your own.",
    keywords: [
      "google ads for real estate dubai",
      "real estate lead tracking dubai",
      "real estate google ads example",
      "cost per qualified lead real estate",
      "offline conversion import real estate",
      "real estate landing pages dubai",
    ],
    takeaways: [
      "Everything here is a model built on stated assumptions. Replace each number with your own before you rely on it.",
      "Judge campaigns on cost per qualified lead and cost per deal, not on clicks or raw lead counts.",
      "Track calls, forms and WhatsApp before spending, and record what the sales team says about each lead.",
      "Sending qualified-lead and deal outcomes back to Google Ads lets bidding learn from real buyers.",
      "Community pages build a second lead source over months while ads produce enquiries in weeks.",
      "Run a low, base and high case so one good or bad month does not drive the decision.",
    ],
    body: [
      {
        t: "callout",
        title: "Read this first: an illustrative scenario",
        text: "This worked example is an illustrative scenario. It is not a client result, and the brokerage in it does not exist. Every number is an assumption chosen to show how the planning and the arithmetic work. Your click costs, conversion rates and commissions will be different, so treat the figures as placeholders and put your own in their place.",
      },
      {
        t: "p",
        text: "Many brokerages in Dubai get most of their enquiries from property portals. Portals work, but the leads are shared with competitors, the cost of visibility tends to rise, and the brokerage learns very little about which listing or which agent turned an enquiry into a deal. This worked example walks through how a brokerage in that position could add a second lead source that it owns: Google Ads search campaigns pointing at its own landing pages, with every call, form and WhatsApp click tracked through to a signed deal.",
      },
      {
        t: "p",
        text: "We have written it as a planning exercise. You will see the starting assumptions, the diagnosis, a KPI model with the arithmetic laid out, a phase by phase plan, and three modelled outcomes. Nothing in it is a promise. It is a way of thinking that you can copy, with our numbers taken out and yours put in.",
      },
      { t: "h2", text: "The starting situation and our assumptions", id: "starting-situation" },
      {
        t: "p",
        text: "Picture a mid-sized brokerage in Dubai. We will call it the brokerage. In this model it has around 25 agents, sells and rents apartments and villas in a handful of well-known communities, and holds a few off-plan allocations from developers. It has a website that looks fine but was built as a brochure. Almost all of its enquiries arrive through portal listings and from agents' own networks.",
      },
      { t: "h3", text: "What we assume about the business" },
      {
        t: "ul",
        items: [
          "**Deal mix:** we assume the paid search programme focuses on sales, because the commission on a sale can carry the cost of advertising more easily than the commission on a rental.",
          "**Average sale price:** we assume AED 2,000,000 for the properties the campaigns will promote.",
          "**Commission:** we assume the brokerage earns 2% of the sale price, which is AED 40,000 per deal in this model. Your commission terms may differ, and part of it is usually shared with the agent.",
          "**Portal spend:** we assume the brokerage already spends a meaningful amount on portals each month and does not plan to stop. Paid search is added alongside, not in place of, the portals.",
          "**Tracking today:** we assume website forms are counted, but calls and WhatsApp clicks are not, and nobody records which enquiries became viewings or deals.",
        ],
      },
      { t: "h3", text: "What we assume about the market" },
      {
        t: "p",
        text: "Property keywords in Dubai are competitive. Developers, portals and other brokerages all bid on them. For the model we assume an average cost per click of AED 12 on carefully chosen searches. That is an assumption for illustration only. Real click costs change with the community, the property type, the season and how many competitors are bidding that week. The right way to find your own number is to run a small test, which is exactly what the first phase of the plan does.",
      },
      {
        t: "img",
        photo: { id: "photo-1617449512807-7401d38e5c29", alt: "Waterfront apartment towers and promenade in Dubai Marina", by: "Noah Bikoro", user: "noahnkb" },
        caption: "The model assumes campaigns built around a few named communities, because buyers search by area.",
      },
      { t: "h2", text: "Diagnosis: where the leaks are", id: "diagnosis" },
      {
        t: "p",
        text: "Before planning any spend, it helps to write down what is actually wrong. In this scenario there are four problems, and they are common ones.",
      },
      { t: "h3", text: "1. The brokerage rents its leads" },
      {
        t: "p",
        text: "A portal enquiry belongs to the portal's audience. The same buyer often contacts three or four brokerages about similar listings, so the first agent to call back has the advantage and everyone else has paid for a lead they never speak to. The brokerage has no direct relationship with the buyer until the phone is answered.",
      },
      { t: "h3", text: "2. Nobody knows which enquiries become deals" },
      {
        t: "p",
        text: "Agents know their own deals. Management knows total commission. But there is no single list that shows, for each enquiry, where it came from, whether it was a serious buyer, and what happened next. Without that list, every marketing decision is made on lead volume, and volume is a poor guide. One hundred enquiries from people browsing are worth less than ten from buyers with finance in place.",
      },
      { t: "h3", text: "3. Calls and WhatsApp are invisible" },
      {
        t: "p",
        text: "In the UAE, many property buyers prefer to call or send a WhatsApp message instead of filling in a form. If the website only counts forms, most of the real enquiries are missing from the data. Any advertising platform fed with that data will learn from a small and unrepresentative sample.",
      },
      { t: "h3", text: "4. The website was not built to convert" },
      {
        t: "p",
        text: "A brochure site sends every visitor to the homepage or a long listings page. A buyer who searched for a two-bedroom apartment in a specific community has to hunt for it. Each extra step loses people. The fix is not a new website. It is a small set of focused landing pages, one per campaign theme.",
      },
      {
        t: "callout",
        title: "The diagnosis decides the order of work",
        text: "Notice that three of the four problems are about measurement and the website, not about advertising. That is why the plan starts with tracking and landing pages and only then turns on spend. Buying clicks before you can see what they produce is the most expensive way to learn.",
      },
      { t: "h2", text: "Goals and the KPI model", id: "kpi-model" },
      {
        t: "p",
        text: "A goal such as more leads is too loose to manage. The model below turns the goal into a chain of numbers. Each link in the chain is an assumption you can test and replace.",
      },
      { t: "h3", text: "The chain from spend to commission" },
      {
        t: "ol",
        items: [
          "**Monthly ad spend:** we assume AED 30,000.",
          "**Clicks:** at an assumed AED 12 per click, 30,000 / 12 = 2,500 clicks.",
          "**Leads:** if 4% of landing page visitors enquire by form, call or WhatsApp, 2,500 x 0.04 = 100 leads.",
          "**Qualified leads:** if the sales team marks 30% of leads as qualified, 100 x 0.30 = 30 qualified leads.",
          "**Deals:** if 5% of qualified leads buy through the brokerage, 30 x 0.05 = 1.5 deals a month on average.",
          "**Commission:** at an assumed AED 40,000 per deal, 1.5 x 40,000 = AED 60,000 of gross commission.",
        ],
      },
      {
        t: "p",
        text: "From the same chain you can read the unit costs. Cost per lead is 30,000 / 100 = AED 300. Cost per qualified lead is 30,000 / 30 = AED 1,000. Cost per deal is 30,000 / 1.5 = AED 20,000. In this base case, gross commission is twice the ad spend. That is before the agent's share, the cost of managing the campaigns, landing page work and the time of the people who answer the enquiries, so it is not profit.",
      },
      { t: "h3", text: "What counts as a qualified lead" },
      {
        t: "p",
        text: "The whole model rests on the word qualified, so it has to be defined in writing before the first campaign goes live. In this scenario we assume the brokerage and its marketing team agree on four tests. A lead is qualified if the person is reachable, is looking in a community the brokerage covers, has a budget that matches available stock, and intends to buy within a stated period such as six months. Agents mark each lead as qualified or not within two working days of first contact.",
      },
      {
        t: "p",
        text: "The definition will not be perfect. It only needs to be applied the same way by everyone, every week. A consistent rough measure is far more useful than a precise one that changes with each agent's mood.",
      },
      { t: "h3", text: "The break-even check" },
      {
        t: "p",
        text: "It is worth working out the point at which the programme stops paying for itself. If one deal brings AED 40,000 of gross commission and the monthly spend is AED 30,000, the campaigns need 30,000 / 40,000 = 0.75 deals a month to cover the media cost alone. With 30 qualified leads, that is a close rate of 0.75 / 30 = 2.5%. If the brokerage believes it can close more than 2.5% of qualified search leads, the model works on media cost. If it cannot, the plan needs a cheaper click, a better landing page or a better follow-up process before it needs more budget.",
      },
      {
        t: "img",
        photo: { id: "photo-1707157284454-553ef0a4ed0d", alt: "Financial charts, notebook and phone on an office desk", by: "Jakub Żerdzicki", user: "jakubzerdzicki" },
        caption: "Write the chain from spend to commission down before launch, then replace each assumption with real data.",
      },
      { t: "h2", text: "The plan, phase by phase", id: "plan-phases" },
      {
        t: "p",
        text: "The plan in this scenario runs over roughly six months and has four phases. The timings are assumptions. A brokerage with a developer on hand and a decisive owner could move faster. One that needs several approvals for each page could take longer.",
      },
      { t: "h3", text: "Phase 1: measurement and foundations (weeks 1 to 3)" },
      {
        t: "ul",
        items: [
          "Agree the definition of a qualified lead and who marks it.",
          "Set up tracking for forms, phone calls and WhatsApp clicks, and test each one.",
          "Create one shared lead log, or configure the CRM, with fields for source, campaign, community, qualified status and outcome.",
          "Check that every advert and landing page that needs one carries a valid advertising permit number.",
          "Build the first three landing pages.",
        ],
      },
      { t: "h3", text: "Phase 2: a small, focused launch (weeks 4 to 8)" },
      {
        t: "p",
        text: "Launch a small number of search campaigns on the highest-intent searches, with a test budget below the full AED 30,000. The purpose of this phase is to replace assumptions with data. By the end of it the brokerage should know its real cost per click, its real landing page conversion rate and a first reading of lead quality.",
      },
      { t: "h3", text: "Phase 3: optimise on lead quality (weeks 9 to 16)" },
      {
        t: "p",
        text: "With a few hundred leads logged and marked, the search term reports and the lead log can be read together. Searches that produce unqualified leads are blocked. Budget moves towards the communities and property types that produce viewings. Qualified-lead outcomes start flowing back into Google Ads through offline conversion import.",
      },
      { t: "h3", text: "Phase 4: scale and add organic search (months 5 to 6 and beyond)" },
      {
        t: "p",
        text: "Once cost per qualified lead is stable, spend rises towards the full monthly budget. In parallel, the brokerage publishes community pages designed to rank in organic search. Those pages take months to earn traffic, which is why they start here and not at the very beginning, when all attention is needed on tracking and the launch.",
      },
      { t: "h2", text: "Workstream 1: Google Ads search campaigns", id: "search-campaigns" },
      {
        t: "p",
        text: "Search advertising suits property because the buyer tells you what they want in the search itself. The work is in choosing which searches to pay for and which to refuse. This is the core of [Google Ads management](/services/google-ads-management) for any lead-driven business.",
      },
      { t: "h3", text: "Campaign structure" },
      {
        t: "p",
        text: "In this model the account is organised by intent first and community second. A simple structure might look like this:",
      },
      {
        t: "ul",
        items: [
          "**Community buy campaigns:** one campaign per priority community, with ad groups for apartments and villas, and for bedroom counts where search volume justifies it.",
          "**Off-plan campaign:** ad groups for each project the brokerage is authorised to market, kept separate because the buyer, the message and the sales cycle are different.",
          "**Brand campaign:** a small budget on the brokerage's own name, so that people who already know it find the website and not a competitor's ad.",
        ],
      },
      {
        t: "p",
        text: "Keeping communities in separate campaigns means each one has its own budget. If one community produces qualified leads at AED 700 and another at AED 1,800, the budget can follow the result without rebuilding the account.",
      },
      { t: "h3", text: "Keywords and match types" },
      {
        t: "p",
        text: "We assume the launch uses phrase and exact match keywords built around buying intent: phrases that include words such as buy, for sale, price and the community name. Broad match can find extra demand later, but in a new account with no conversion history it tends to spend on loosely related searches. It is safer to add it once the account has enough qualified-lead data to steer it.",
      },
      { t: "h3", text: "Negative keywords" },
      {
        t: "p",
        text: "Negative keywords are where much of the saving comes from. Property searches are full of people who are not buyers. In this scenario the launch list would block searches that include rent or rental in the sales campaigns, job and career terms, agent licence and training searches, and competitor portal names. The search term report is then reviewed every week, and anything irrelevant is added to the list.",
      },
      { t: "h3", text: "Ad copy and permits" },
      {
        t: "p",
        text: "Each ad group gets copy that repeats the searcher's own words: the community, the property type and a specific reason to click, such as available units, a payment plan or a starting price. Vague claims of being the best do nothing for a buyer comparing options.",
      },
      {
        t: "p",
        text: "Property advertising in Dubai is regulated. Advertisements generally need a Trakheesi permit, and brokers and listings have to meet the regulator's requirements. Our guide to the [Trakheesi permit for property advertising](/blog/trakheesi-permit-property-advertising-dubai) explains the general idea. Rules change, so confirm the current requirements with the Dubai Land Department and the Real Estate Regulatory Agency before any campaign goes live.",
      },
      {
        t: "callout",
        title: "Start narrow on purpose",
        text: "A common mistake is to launch ten campaigns across every community the brokerage has ever sold in. Spend gets spread so thinly that no single campaign gathers enough data to judge. In this model the launch covers three communities and one off-plan project. More are added only when the first ones have a stable cost per qualified lead.",
      },
      {
        t: "img",
        photo: { id: "photo-1594663653925-365bcbf7ef86", alt: "Smartphone open on the Google search page", by: "Solen Feyissa", user: "solenfeyissa" },
        caption: "Property buyers tell you what they want in the search. The work is choosing which searches to pay for.",
      },
      { t: "h2", text: "Workstream 2: landing pages that match the search", id: "landing-pages" },
      {
        t: "p",
        text: "The landing page conversion rate is one of the most powerful numbers in the model. If it moves from 4% to 5%, the same AED 30,000 produces 125 leads instead of 100, and every cost further down the chain falls by a fifth. That is why [landing page design](/services/landing-page-design) sits beside the campaigns and not after them.",
      },
      { t: "h3", text: "One page per campaign theme" },
      {
        t: "p",
        text: "Each community campaign points to its own page. A person who searched for apartments for sale in a community lands on a page about apartments for sale in that community. The headline repeats the search. The page does not make them choose from a menu.",
      },
      { t: "h3", text: "What the page contains" },
      {
        t: "ul",
        items: [
          "A headline that matches the ad and the search.",
          "A short summary of the community: location, property types, typical price range and who it suits.",
          "A small number of current, real listings with prices, sizes and good photos.",
          "Clear proof that the brokerage is licensed, with the details the regulator requires.",
          "Three ways to enquire, visible without scrolling on a phone: a short form, a call button and a WhatsApp button.",
          "A plain statement of what happens next, such as a call back within one working hour during office times.",
        ],
      },
      { t: "h3", text: "Forms, calls and WhatsApp" },
      {
        t: "p",
        text: "The form asks only for what an agent needs to make a useful first call: name, phone number, and whether the person is buying to live in or to invest. Every extra field lowers the conversion rate. The WhatsApp button opens a chat with a message already written that names the community, so the agent knows the context before replying.",
      },
      { t: "h3", text: "Speed on mobile" },
      {
        t: "p",
        text: "We assume most clicks come from phones. A page that takes several seconds to show its first content loses people before they see anything. Compressed images, a simple layout and no heavy scripts matter more here than visual effects.",
      },
      { t: "h2", text: "Workstream 3: tracking calls, forms and WhatsApp", id: "tracking" },
      {
        t: "p",
        text: "This is the workstream that makes the rest of the model honest. It is covered in depth in our guide on how to [track WhatsApp, call and form leads](/blog/track-whatsapp-call-form-leads-uae), and it is the heart of our [lead tracking and attribution](/services/lead-tracking-and-attribution) service. The summary for this scenario is below.",
      },
      { t: "h3", text: "The three enquiry types" },
      {
        t: "ul",
        items: [
          "**Forms:** each successful submission is recorded as a key event in Google Analytics 4 and as a conversion in Google Ads. The event fires on the confirmed submission, not on a button click, so failed attempts are not counted.",
          "**Calls:** taps on the phone number are recorded as an event. For people who dial by hand, a call tracking service or Google's own call reporting can show which campaign led to the call. The brokerage chooses based on how many of its enquiries arrive by phone.",
          "**WhatsApp:** each click on the WhatsApp button is recorded as an event. A click is not a conversation, so the agent also logs the chat in the lead log when the person actually sends a message.",
        ],
      },
      { t: "h3", text: "Testing before launch" },
      {
        t: "p",
        text: "Every conversion is tested by hand before any budget is spent. Someone submits each form, taps each phone link and each WhatsApp button, and confirms that the event appears in analytics and in the ads account. It sounds basic. It is also the step most often skipped, and a broken conversion can go unnoticed for weeks while the platform optimises towards nothing.",
      },
      { t: "h3", text: "The lead log" },
      {
        t: "p",
        text: "All enquiries, whatever the channel, go into one place. For a brokerage of this size that could be the CRM it already owns, or a shared spreadsheet at the start. Each row carries the date, the source, the campaign and keyword where known, the community, the agent, the qualified flag, and the outcome: no contact, not qualified, viewing booked, offer made, deal closed. The Google click identifier is stored with each lead that came from an ad, because it is needed later.",
      },
      {
        t: "p",
        text: "Handle this data with care. The brokerage is collecting names and phone numbers, so it should tell people how their details will be used and keep access limited. Data protection rules apply in the UAE, and a legal adviser can confirm what they mean for your business.",
      },
      {
        t: "img",
        photo: { id: "photo-1592890288564-76628a30a657", alt: "Person reading a message on a smartphone", by: "Jonas Leupe", user: "jonasleupe" },
        caption: "Many UAE buyers prefer a call or a WhatsApp message to a form, so all three need tracking.",
      },
      { t: "h2", text: "Workstream 4: qualifying leads with the sales team", id: "qualification" },
      {
        t: "p",
        text: "Marketing can bring an enquiry to the door. Only the sales team can say whether it was worth having. In this model the two sides work to a simple routine.",
      },
      { t: "h3", text: "Speed of first response" },
      {
        t: "p",
        text: "A buyer who enquires on a search ad has usually enquired elsewhere too. We assume the brokerage sets a target of a first call or WhatsApp reply within a short, agreed window during working hours, and a clear rota for evenings and weekends. If the response target is missed, the close rate in the model will not hold, and no amount of campaign tuning will fix it.",
      },
      { t: "h3", text: "Marking every lead" },
      {
        t: "p",
        text: "Within two working days, the agent sets the qualified flag and adds a short reason when the answer is no: wrong budget, wrong area, renting not buying, could not be reached, or an agent or supplier and not a buyer. Those reasons are valuable. If a third of unqualified leads are renters, the sales campaigns need tighter negative keywords. If many have budgets below available stock, the landing page should show prices more clearly so those people do not enquire.",
      },
      { t: "h3", text: "The weekly review" },
      {
        t: "p",
        text: "Once a week, someone from marketing and a sales manager spend half an hour with the lead log and the search term report side by side. The questions are always the same. Which campaigns produced qualified leads? Which produced none? What did agents hear on the calls that the ads or pages should reflect? This meeting is where most of the improvement in the model comes from.",
      },
      {
        t: "callout",
        title: "Lead quality is a shared number",
        text: "If marketing is judged on lead volume and sales on deals, each side will blame the other. In this scenario both are judged on the same figure: cost per qualified lead. Marketing cannot improve it without sales feedback, and sales cannot improve it without answering quickly and marking leads properly.",
      },
      { t: "h2", text: "Workstream 5: offline conversion import", id: "offline-conversions" },
      {
        t: "p",
        text: "By default, Google Ads learns from whatever you tell it is a conversion. If that is every form and call, the bidding system will find more people who fill in forms and call, including the ones who never buy. Offline conversion import corrects this by telling Google which enquiries later became qualified leads or deals.",
      },
      { t: "h3", text: "How it works in outline" },
      {
        t: "ol",
        items: [
          "When someone clicks an ad, Google attaches a click identifier to the landing page address.",
          "The landing page stores that identifier with the enquiry, in the form's hidden field and in the lead log.",
          "When an agent marks the lead as qualified, or when a deal closes, that outcome is exported with the identifier and the date.",
          "The export is uploaded to Google Ads on a regular schedule, or sent automatically from the CRM.",
          "Google matches the outcome to the original click, so the campaign, ad group and keyword get the credit.",
        ],
      },
      { t: "h3", text: "Which outcome to send" },
      {
        t: "p",
        text: "Deals are the truest signal but there are few of them. At 1.5 a month in the base case, the bidding system would have almost nothing to learn from. Qualified leads are a better working signal: there are 30 a month in the model, and they are a reasonable guide to buying intent. Many accounts send both, with the qualified lead as the main optimisation target and the deal recorded for reporting.",
      },
      { t: "h3", text: "Calls and WhatsApp" },
      {
        t: "p",
        text: "Leads that arrive by phone or WhatsApp are harder to match to a click, because the identifier does not travel with a phone call. Call tracking services can close part of the gap. Where a match is not possible, the lead is still logged with its source as stated by the buyer, so the weekly review sees the full picture even if the platform does not.",
      },
      { t: "h2", text: "Workstream 6: community pages for organic search", id: "community-pages" },
      {
        t: "p",
        text: "Paid search stops the moment the budget stops. Community pages are the slower, longer-lasting half of the plan. A community page is a permanent, detailed page about one area: what it is like to live there, property types, price ranges, service charges in general terms, schools and transport, and current listings. Our guide to [community pages for real estate SEO](/blog/dubai-community-pages-real-estate-seo) covers the approach in detail.",
      },
      { t: "h3", text: "How they differ from landing pages" },
      {
        t: "p",
        text: "A landing page is short and built to convert a visitor who has already searched with buying intent. A community page is longer and built to answer the questions people ask earlier, when they are still comparing areas. The two support each other. The community page earns organic visits and trust. The landing page turns paid visits into enquiries. Both link to the same listings.",
      },
      { t: "h3", text: "What we assume about results" },
      {
        t: "p",
        text: "We make no numeric assumption about organic leads in the first six months, and the modelled outcomes below exclude them. Organic rankings for property terms in Dubai are hard won, because portals hold many of the top positions. Less competitive, more specific searches are a realistic place to begin. Any organic enquiries that do arrive in the period are a bonus on top of the model, not part of it. This side of the work is part of [local SEO](/services/local-seo-services) and wider search work for [real estate brokers](/industries/real-estate).",
      },
      {
        t: "img",
        photo: { id: "photo-1682410601760-6372fd33ad2b", alt: "Aerial view of Dubai's coastline, residential communities and Palm Jumeirah", by: "Jhonwayne Pumaras", user: "spiraleyebrows" },
        caption: "Community pages answer the questions buyers ask while they are still comparing areas.",
      },
      { t: "h2", text: "The modelled outcome: low, base and high cases", id: "modelled-outcome" },
      {
        t: "p",
        text: "A single forecast invites false confidence. The model below runs three cases with the same AED 30,000 monthly spend and the same assumed commission of AED 40,000 per deal. Only four inputs change: cost per click, landing page conversion rate, qualified rate and close rate. All of them are assumptions.",
      },
      { t: "h3", text: "Low case" },
      {
        t: "ul",
        items: [
          "Cost per click of AED 15: 30,000 / 15 = 2,000 clicks.",
          "Conversion rate of 3%: 2,000 x 0.03 = 60 leads, at 30,000 / 60 = AED 500 per lead.",
          "Qualified rate of 25%: 60 x 0.25 = 15 qualified leads, at 30,000 / 15 = AED 2,000 each.",
          "Close rate of 4%: 15 x 0.04 = 0.6 deals a month.",
          "Gross commission: 0.6 x 40,000 = AED 24,000, which is below the ad spend.",
        ],
      },
      { t: "h3", text: "Base case" },
      {
        t: "ul",
        items: [
          "Cost per click of AED 12: 30,000 / 12 = 2,500 clicks.",
          "Conversion rate of 4%: 2,500 x 0.04 = 100 leads, at AED 300 per lead.",
          "Qualified rate of 30%: 100 x 0.30 = 30 qualified leads, at AED 1,000 each.",
          "Close rate of 5%: 30 x 0.05 = 1.5 deals a month.",
          "Gross commission: 1.5 x 40,000 = AED 60,000, which is twice the ad spend.",
        ],
      },
      { t: "h3", text: "High case" },
      {
        t: "ul",
        items: [
          "Cost per click of AED 10: 30,000 / 10 = 3,000 clicks.",
          "Conversion rate of 5%: 3,000 x 0.05 = 150 leads, at AED 200 per lead.",
          "Qualified rate of 35%: 150 x 0.35 = 52.5 qualified leads, at about AED 571 each.",
          "Close rate of 6%: 52.5 x 0.06 = 3.15 deals a month.",
          "Gross commission: 3.15 x 40,000 = AED 126,000, a little over four times the ad spend.",
        ],
      },
      { t: "h3", text: "How to read the three cases" },
      {
        t: "p",
        text: "The gap between the low and high cases is large: AED 24,000 against AED 126,000 from the same spend. That gap is the point of the exercise. Small changes in four rates multiply together. In the low case each rate is only a little worse than the base, yet the result falls below break-even. In the high case each is only a little better, and the result more than doubles.",
      },
      {
        t: "p",
        text: "It also shows where effort pays. The brokerage cannot control the market price of a click very much. It can control the landing page, the speed and quality of follow-up, and the discipline of blocking poor searches. Three of the four rates are in its own hands.",
      },
      {
        t: "p",
        text: "Remember that deals in property are lumpy. An average of 1.5 a month can mean three in one month and none in the next two. Property sales also take time to complete, so commission from a lead generated in one month may arrive several months later. Judge the programme over a quarter or longer, never on a single month.",
      },
      {
        t: "callout",
        title: "These are models, not forecasts",
        text: "None of the three cases predicts what will happen to any real brokerage. They show how the result changes when the inputs change. Use the first weeks of a small test to measure your own cost per click and conversion rate, then rebuild the three cases with those figures.",
      },
      { t: "h2", text: "What could go wrong", id: "risks" },
      {
        t: "p",
        text: "A plan is more useful when it names its own weak points. These are the risks we would watch in this scenario.",
      },
      {
        t: "ul",
        items: [
          "**Slow follow-up.** If leads wait hours for a reply, the close rate drops and the model fails at its last step. This is the most common cause of poor results from property search campaigns.",
          "**Agents do not mark leads.** Without the qualified flag there is no cost per qualified lead and nothing to import. The routine needs a manager who checks it every week.",
          "**Click costs rise.** A new launch by a developer or a busy season can push costs above the assumption. The response is to narrow to the best-performing communities, not to chase volume.",
          "**Stock does not match demand.** If the campaigns attract buyers for property types the brokerage cannot offer, qualified rates fall. Campaigns should follow real, available inventory.",
          "**Tracking breaks silently.** A website update can remove an event. A monthly test of every conversion catches this early.",
          "**Compliance gaps.** An advert without the required permit can be taken down and may lead to a penalty. Check permits before launch and whenever listings change.",
          "**Too little data.** With only a handful of deals each quarter, it is easy to read meaning into noise. Decisions should rest on qualified leads and viewings, where the numbers are larger.",
          "**Channel conflict.** Portal leads and search leads may be the same people. Recording the first source the buyer mentions helps avoid counting one deal twice.",
        ],
      },
      { t: "h2", text: "Cost and time assumptions", id: "cost-and-time" },
      {
        t: "p",
        text: "The model above counts media spend only. A real plan has other costs, and they should be on the page even when the amounts are specific to each business. We do not quote fees here, because they depend on scope.",
      },
      { t: "h3", text: "Costs to budget for" },
      {
        t: "ul",
        items: [
          "**Ad spend:** paid directly to Google, from an account in the brokerage's own name.",
          "**Campaign management:** whether in-house or through an agency, someone has to build, monitor and improve the campaigns every week.",
          "**Landing pages:** a one-off build for the first set, then smaller changes as tests suggest improvements.",
          "**Tracking and CRM set-up:** mostly a one-off cost, plus any subscription for call tracking or a CRM.",
          "**Content for community pages:** writing, photography and local knowledge, spread over several months.",
          "**Staff time:** agents' time to respond and mark leads, and a manager's time for the weekly review. This is easy to overlook and it is essential.",
        ],
      },
      { t: "h3", text: "A realistic timeline" },
      {
        t: "p",
        text: "In this scenario the first enquiries arrive within days of launch, in the second month. A dependable reading of cost per qualified lead needs several weeks of data after that. A first reading of cost per deal needs longer still, because sales take time to close. We assume the brokerage commits to at least two full quarters before deciding whether the channel has earned a permanent place in its budget. Stopping after six weeks because no deal has completed would tell it nothing.",
      },
      { t: "h3", text: "Including every cost in the check" },
      {
        t: "p",
        text: "To move from gross commission to a fairer picture, subtract the agent's commission share and add the non-media costs to the spend. As a worked illustration only: if the brokerage keeps half of each commission, the base case brings in 60,000 x 0.5 = AED 30,000 to the company. That is equal to the media spend before any management or page costs. On those assumptions the base case does not yet pay for itself, and the brokerage would need the rates of the high case, a higher average sale price or repeat and referral business from the same buyers to justify the budget. This is exactly the kind of answer the model is for. It is better to find it on paper than after six months of spending.",
      },
      {
        t: "img",
        photo: { id: "photo-1542744173-8e7e53415bb0", alt: "Consultant presenting to a team around a meeting table", by: "Campaign Creators", user: "campaign_creators" },
        caption: "A weekly review between marketing and sales is where most of the improvement in the model comes from.",
      },
      { t: "h2", text: "How to adapt this to your brokerage", id: "adapt" },
      {
        t: "p",
        text: "The structure of the model stays the same for any brokerage. The inputs change. Work through these steps with your own figures.",
      },
      {
        t: "ol",
        items: [
          "**Write down your average commission per deal** for the property types you want to promote, and how much of it the company keeps.",
          "**Work out your break-even close rate.** Divide the monthly spend you are considering by the commission the company keeps per deal. That is the number of deals you need. Divide it by the qualified leads you expect.",
          "**Define a qualified lead** in four or five plain tests, and agree who marks it and by when.",
          "**Fix tracking first.** Forms, calls and WhatsApp, tested by hand.",
          "**Run a small test** for four to six weeks on two or three communities to measure your real cost per click and conversion rate.",
          "**Rebuild the low, base and high cases** with measured figures in place of our assumptions.",
          "**Decide in advance** what result would make you scale, hold or stop, and review it at the end of each quarter.",
        ],
      },
      { t: "h3", text: "If you focus on rentals" },
      {
        t: "p",
        text: "Rental commissions are smaller, so the same chain needs a much lower cost per qualified lead to work. Rental search campaigns can still make sense for a brokerage with high volumes, strong repeat business from landlords or a property management arm, but the arithmetic should be run separately and not mixed with sales.",
      },
      { t: "h3", text: "If you sell mostly off-plan" },
      {
        t: "p",
        text: "Off-plan buyers are often investors, some of them overseas. The sales cycle, the questions and the campaign targeting are different. Commission terms set by developers also differ from the resale assumption used here. Our guide to [off-plan property marketing](/blog/off-plan-property-marketing-dubai-brokers) looks at that case.",
      },
      { t: "h3", text: "If your budget is smaller" },
      {
        t: "p",
        text: "The chain scales down, but data arrives more slowly. With a third of the budget you would expect about a third of the leads in each case, so it takes three times as long to learn the same amount. A smaller budget is best spent on one community and one property type, where the brokerage has the strongest stock and the fastest agents.",
      },
      { t: "h2", text: "A checklist before you spend the first dirham", id: "checklist" },
      {
        t: "ul",
        items: [
          "The Google Ads account, analytics property and website belong to the brokerage, with agencies added as users.",
          "A written definition of a qualified lead exists and the sales team has agreed to it.",
          "Forms, phone taps and WhatsApp clicks are tracked and have been tested by hand.",
          "One lead log holds every enquiry with its source, qualified flag and outcome.",
          "The click identifier is captured with each ad lead, ready for offline conversion import.",
          "Each campaign has its own landing page with a form, a call button and a WhatsApp button.",
          "Required advertising permits are in place and shown where the rules require.",
          "A response-time target and an out-of-hours rota are agreed.",
          "A weekly review between marketing and sales is in the calendar.",
          "Low, base and high cases are written down, with the result that would trigger scaling or stopping.",
        ],
      },
      {
        t: "p",
        text: "If you would like to run this exercise with your own numbers, [get in touch](/contact). We will go through the chain with you and say plainly whether the arithmetic supports paid search for your brokerage, or whether another channel deserves the budget first.",
      },
    ],
    faqs: [
      {
        q: "Are the numbers in this worked example real results?",
        a: "No. This is an illustrative scenario and not a client result. The brokerage is fictional and every figure is an assumption chosen to show how the planning and arithmetic work. Use a small test campaign to measure your own cost per click, conversion rate and lead quality, then rebuild the model with those numbers.",
      },
      {
        q: "How much should a Dubai brokerage spend on Google Ads?",
        a: "There is no single right figure. Work backwards from your own numbers: the commission the company keeps per deal, the share of qualified leads you can close, and how many deals you need for the spend to pay back. Start with a test budget large enough to produce a few hundred clicks per campaign, and scale only when cost per qualified lead is stable.",
      },
      {
        q: "Why measure cost per qualified lead and not cost per lead?",
        a: "Because cheap leads are often poor leads. A campaign can lower its cost per lead by attracting renters, browsers and people outside your areas. Cost per qualified lead counts only the enquiries your sales team says are serious, so it rewards campaigns that bring real buyers.",
      },
      {
        q: "What is offline conversion import and does a brokerage need it?",
        a: "It is a way of telling Google Ads which enquiries later became qualified leads or deals, by matching the outcome to the original ad click. It helps the bidding system learn from real buyers. A brokerage does not need it on day one, but it becomes valuable once leads are being logged and marked consistently.",
      },
      {
        q: "Should we stop using property portals if search ads work?",
        a: "Not in this model. Portals remain a major source of enquiries in Dubai. The aim is to add a lead source the brokerage owns and can measure, so it depends less on any single channel. Compare each channel on cost per qualified lead and cost per deal, and let the budget follow the evidence.",
      },
      {
        q: "Do property ads on Google need a permit in Dubai?",
        a: "Property advertising in Dubai is regulated, and advertisements generally require a Trakheesi permit. Requirements can change and may differ by type of advert, so confirm the current rules with the Dubai Land Department and the Real Estate Regulatory Agency before launching.",
      },
    ],
  },
];
