import { HEALTH_INDUSTRIES } from "./industries-health";

export interface Industry {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroTitle: string;
  heroIntro: string;
  answer: string;
  searches: string[];
  challenges: { title: string; body: string }[];
  plan: { service: string; points: string[] }[];
  measure: string[];
  faqs: { q: string; a: string }[];
  postSlug: string;
  extraPostSlugs?: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    title: "SEO & Marketing for Real Estate Companies in Dubai | SEODXB",
    description:
      "Get buyer, investor and tenant leads beyond the property portals. SEO, AI search, ads and websites for Dubai real estate brokerages and developers.",
    heroTitle: "Property leads you own, not leads you rent from the portals",
    heroIntro:
      "Most Dubai brokerages depend on Bayut, Property Finder and Dubizzle for enquiries, and pay more every year for the same visibility. SEO builds a second source of buyer, investor and tenant leads that belongs to you.",
    answer:
      "Real estate companies in Dubai need SEO because buyers, investors and tenants research areas, projects and prices on Google and AI assistants long before they contact an agent. Ranking your own community guides, project pages and area searches brings enquiries directly to your brokerage instead of through paid portal listings, lowers cost per lead over time and builds the trust that high-value property decisions depend on.",
    searches: [
      "off plan projects in Dubai Creek Harbour",
      "2 bedroom apartment for rent JVC",
      "best areas to buy villa in Dubai for families",
      "Dubai Marina property prices 2026",
      "real estate agent Arabian Ranches",
      "golden visa property investment Dubai",
    ],
    challenges: [
      {
        title: "Portal dependency",
        body: "Portal listings bring leads, but every agency sees the same enquiries, competes on the same listing page and pays more each year for premium placement.",
      },
      {
        title: "Long, research-heavy decisions",
        body: "Buyers and investors compare communities, developers, payment plans and service charges for weeks. The agency that answers those questions earns the call.",
      },
      {
        title: "Trust and compliance",
        body: "Property ads in Dubai need a Trakheesi permit from the Dubai Land Department, and buyers check that agents are RERA-registered. Marketing has to be credible and compliant.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Community and area guides that answer what buyers actually ask: prices, schools, service charges, commute.",
          "Project and developer pages built to rank for off-plan and launch searches.",
          "Google Business Profile, agent profiles and consistent details so AI assistants can recommend you.",
        ],
      },
      {
        service: "ads",
        points: [
          "Google and Meta campaigns for launches and high-intent searches, with Trakheesi-compliant creative.",
          "Separate campaigns and landing pages for buyers, investors and tenants.",
          "Lead forms and WhatsApp tracking so you know cost per qualified lead, not cost per click.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "A fast website with listing, project and area pages that convert on mobile.",
          "Market updates, video walkthroughs and investor content for social and email.",
          "Arabic and English pages where your buyers need both.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Focus on the communities and buyer types where you can win, instead of covering all of Dubai thinly.",
          "A clear split between portal spend and owned channels, reviewed monthly.",
          "Follow-up process so expensive leads are answered within minutes.",
        ],
      },
    ],
    measure: ["Qualified buyer and tenant enquiries", "Cost per lead vs portals", "Viewings and deals by source", "Rankings for community and project searches"],
    faqs: [
      {
        q: "Should a brokerage stop using property portals?",
        a: "No. Portals remain a major source of enquiries. The goal is to add owned channels so you are not fully dependent on them, and to shift budget as your own leads grow.",
      },
      {
        q: "How long does real estate SEO take in Dubai?",
        a: "Real estate is one of the most competitive search markets in Dubai. Area and project content can start earning enquiries within a few months; broad terms take longer. Ads cover the gap while SEO builds.",
      },
      {
        q: "Can you help with off-plan launch campaigns?",
        a: "Yes. Launches suit a combination of paid search, Meta ads and a dedicated landing page, with SEO pages for the project and area that keep working after the launch.",
      },
    ],
    postSlug: "seo-for-real-estate-companies-dubai",
  },
  {
    slug: "construction",
    name: "Construction",
    title: "SEO & Marketing for Construction Companies in the UAE | SEODXB",
    description:
      "Win more contracts from developers, consultants and property owners. SEO, LinkedIn, websites and credibility content for UAE contractors and fit-out firms.",
    heroTitle: "Be the contractor they have already shortlisted",
    heroIntro:
      "Developers, consultants and facility managers research contractors online before a tender is issued. SEO and credibility content put your projects, capabilities and approvals in front of them first.",
    answer:
      "Construction and fit-out companies in the UAE need SEO because clients, consultants and procurement teams search for contractors by capability and location before they send invitations to tender. A website that ranks for your specialisms and shows real projects, approvals and certifications puts you on shortlists earlier, brings direct enquiries from private owners, and makes every tender submission more credible.",
    searches: [
      "fit out contractors Dubai",
      "villa renovation company Dubai",
      "MEP contractor Abu Dhabi",
      "commercial construction company UAE",
      "swimming pool construction Dubai",
      "steel structure fabrication Sharjah",
    ],
    challenges: [
      {
        title: "Shortlists form early",
        body: "By the time a tender is issued, the invited contractors are often already chosen. Being findable and credible before that point matters.",
      },
      {
        title: "Proof is everything",
        body: "Clients want evidence: completed projects, classifications, certifications, safety record and the people who will manage the job.",
      },
      {
        title: "Two very different buyers",
        body: "Procurement teams for large projects and homeowners planning a villa renovation search differently and need different pages.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Service pages for each specialism and emirate you cover, written for how clients search.",
          "Project case pages with scope, location, value range and photos, which also rank for specific searches.",
          "Consistent company details across directories and your Google Business Profile.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "A website that works as a digital company profile: capabilities, approvals, certifications, team and projects.",
          "LinkedIn content that keeps you visible to developers, consultants and procurement managers.",
          "Downloadable company profile and pre-qualification documents.",
        ],
      },
      {
        service: "ads",
        points: [
          "Google Ads for high-intent residential and fit-out searches, where timing matters.",
          "LinkedIn campaigns aimed at decision-makers at developers and consultancies.",
          "Call and form tracking to see which campaigns bring real project enquiries.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Decide which project types, sizes and clients to pursue, and market to those deliberately.",
          "Positioning against competitors on specialism, speed or quality rather than price alone.",
          "Pipeline tracking from enquiry to tender to award.",
        ],
      },
    ],
    measure: ["Project enquiries and tender invitations", "Enquiry value by source", "Rankings for specialism and location searches", "LinkedIn reach among target companies"],
    faqs: [
      {
        q: "Do construction companies really get work from Google?",
        a: "Yes, particularly for fit-out, renovation, specialist trades and mid-sized commercial work. For large projects, search and LinkedIn mainly build credibility that supports tenders and referrals.",
      },
      {
        q: "What should a contractor website include?",
        a: "Clear specialisms, completed projects with photos and scope, licences and certifications, key people, areas served and an easy way to request a quote or send a tender invitation.",
      },
      {
        q: "Is LinkedIn worth it for contractors?",
        a: "For B2B construction it is often the most useful social channel, because developers, consultants and procurement teams are active there.",
      },
    ],
    postSlug: "seo-for-construction-companies-uae",
  },
  {
    slug: "car-dealers",
    name: "Car Dealers",
    title: "SEO & Marketing for Car Dealers in Dubai | SEODXB",
    description:
      "Sell more new and used cars when buyers start online. SEO, inventory pages, Google and Meta ads and lead tracking for Dubai car dealers and showrooms.",
    heroTitle: "Put your stock in front of buyers while they are still deciding",
    heroIntro:
      "Car buyers in the UAE compare models, prices, specs and dealers online before they visit a showroom. SEO and ads built around your inventory bring buyers to you instead of to the classifieds.",
    answer:
      "Car dealers in Dubai need SEO because buyers research models, prices, GCC specifications, finance and dealer reputation online before they visit a showroom. Ranking your inventory, model and finance pages, and keeping a strong Google Business Profile, brings buyers directly to you rather than through classified sites, and builds the trust that matters when someone is spending a large amount on a used or new car.",
    searches: [
      "used Toyota Land Cruiser GCC specs Dubai",
      "certified pre-owned cars Dubai",
      "car dealer near me Al Quoz",
      "buy car on finance UAE",
      "Nissan Patrol for sale Dubai price",
      "sell my car Dubai same day",
    ],
    challenges: [
      {
        title: "Classifieds own the buyer",
        body: "Many buyers start on classified sites, where your cars sit next to every competitor and private seller, sorted by price.",
      },
      {
        title: "Trust in used cars",
        body: "Buyers worry about accident history, mileage, specs and hidden problems. Dealers who show inspection reports and history win the visit.",
      },
      {
        title: "Inventory changes daily",
        body: "Stock sells and arrives constantly, so marketing needs to update automatically rather than relying on manual posts.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Model and inventory pages that rank for make, model, year and GCC-spec searches.",
          "Vehicle structured data so listings can appear with price and details in search.",
          "Google Business Profile with photos, reviews and opening hours for each showroom.",
        ],
      },
      {
        service: "ads",
        points: [
          "Google Search and Performance Max campaigns tied to your live inventory.",
          "Meta and TikTok video ads for new arrivals and offers.",
          "Tracking for calls, WhatsApp and test-drive bookings, not just clicks.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "A fast site where every car has photos, specs, price, inspection details and a WhatsApp button.",
          "Short walkaround videos for social and each listing page.",
          "Finance, trade-in and warranty pages that answer buyers' questions before they call.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Decide where you compete: price, certified quality, specialist brands or finance.",
          "Balance classified spend against owned channels based on cost per sale.",
          "Lead response process so enquiries are answered while the buyer is still looking.",
        ],
      },
    ],
    measure: ["Enquiries and test drives by source", "Cost per sale vs classifieds", "Inventory page views to enquiry rate", "Google Business Profile calls and directions"],
    faqs: [
      {
        q: "Should dealers still list on classified sites?",
        a: "Usually yes. Classifieds bring volume. SEO and your own website add buyers who are not comparing you side by side with every competitor, and they reduce dependency over time.",
      },
      {
        q: "Can SEO work when inventory changes every day?",
        a: "Yes, if the website generates model and vehicle pages automatically from your stock system, with model and category pages that stay permanent while individual cars come and go.",
      },
      {
        q: "Do you also help with 'sell my car' leads?",
        a: "Yes. Buying cars from private sellers is a separate funnel with its own searches, landing pages and ads, and it can be a strong source of stock.",
      },
    ],
    postSlug: "seo-for-car-dealers-dubai",
  },
  {
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    title: "SEO & Marketing for Cleaning Companies in Dubai | SEODXB",
    description:
      "Get direct bookings for deep cleaning, move-in cleaning, sofa, carpet and AC duct cleaning. Local SEO, ads and booking-focused websites for Dubai cleaning companies.",
    heroTitle: "Direct bookings, not commission to the booking apps",
    heroIntro:
      "Cleaning is searched locally and booked quickly. Companies that show up in the map results and make booking easy win the job, without giving a share to the apps every time.",
    answer:
      "Cleaning companies in Dubai need SEO because customers search for a specific service in their area, such as deep cleaning in JLT or sofa cleaning in Mirdif, and book one of the first businesses they trust. Strong Google Business Profile listings, service and area pages, reviews and fast WhatsApp booking bring direct bookings, reduce reliance on commission-based apps and build a base of repeat customers.",
    searches: [
      "deep cleaning service Dubai Marina",
      "move out cleaning JVC price",
      "sofa cleaning near me",
      "AC duct cleaning Dubai",
      "carpet shampoo cleaning Mirdif",
      "villa deep cleaning Arabian Ranches",
    ],
    challenges: [
      {
        title: "Apps take a cut",
        body: "Booking platforms bring customers but take commission and own the customer relationship, which makes repeat business harder to capture.",
      },
      {
        title: "Local and urgent",
        body: "Customers want someone in their area, often this week. Map results and reviews decide who gets the call.",
      },
      {
        title: "Price comparison",
        body: "Without clear pricing and proof of quality, customers pick the cheapest option or keep searching.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Google Business Profile optimised for each service and area you cover.",
          "Pages for each service and major community, with prices or price ranges and before-and-after photos.",
          "A steady review system after every job.",
        ],
      },
      {
        service: "ads",
        points: [
          "Google Search campaigns for urgent, high-intent searches like move-out cleaning.",
          "Meta ads for seasonal offers and repeat services.",
          "WhatsApp and call tracking so you know which campaigns fill the diary.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "A mobile site with instant quotes or booking and a visible WhatsApp button.",
          "Before-and-after reels for Instagram and TikTok.",
          "Pages that explain what is included, products used and how staff are vetted.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Focus on the most profitable services and areas rather than everything everywhere.",
          "Repeat and subscription offers so one-off customers come back.",
          "Pricing and packaging that make comparison easy in your favour.",
        ],
      },
    ],
    measure: ["Direct bookings by channel", "Cost per booking vs app commission", "Repeat customer rate", "Map Pack rankings for key services and areas"],
    faqs: [
      {
        q: "Can a small cleaning company rank against big brands?",
        a: "Yes, in local searches. Map results depend heavily on proximity, reviews and relevance, so a well-run local profile can outrank larger brands in the areas you serve.",
      },
      {
        q: "Should we show prices on our website?",
        a: "Usually yes, at least starting prices or ranges. Clear pricing reduces time-wasting enquiries and increases trust.",
      },
      {
        q: "Should we stop using booking apps?",
        a: "Not necessarily. Apps can fill gaps. The goal is to grow direct bookings so the apps become a top-up, not your main source of work.",
      },
    ],
    postSlug: "seo-for-cleaning-companies-dubai",
  },
  {
    slug: "maid-services",
    name: "Maid Services",
    title: "SEO & Marketing for Maid Service Companies in Dubai | SEODXB",
    description:
      "Get more hourly, part-time and full-time maid bookings. Local SEO, trust-building content, ads and WhatsApp booking for maid service companies in Dubai and the UAE.",
    heroTitle: "Families choose the maid service they trust. Be that one.",
    heroIntro:
      "Choosing someone to work inside your home is a trust decision. Maid service companies that are easy to find, transparent about pricing and vetting, and quick on WhatsApp get the bookings.",
    answer:
      "Maid service companies in Dubai need SEO because families search for hourly, part-time and full-time help by area and urgency, then choose the company that looks most trustworthy. Ranking in local results, showing clear prices, vetting and licensing information, collecting genuine reviews and offering instant WhatsApp booking turns those searches into regular bookings and long-term customers.",
    searches: [
      "hourly maid service Dubai",
      "part time maid JLT",
      "maid service near me with cleaning materials",
      "full time maid visa Dubai",
      "weekly cleaner Business Bay",
      "live out maid Abu Dhabi",
    ],
    challenges: [
      {
        title: "Trust comes first",
        body: "Families want to know who will enter their home: how staff are hired, trained and supervised, and whether the company is properly licensed.",
      },
      {
        title: "Many similar competitors",
        body: "Most maid service websites look alike. Clear differences in reliability, pricing and service make the choice easier.",
      },
      {
        title: "Recurring revenue is the prize",
        body: "A one-off booking is worth little; a weekly customer for a year is worth a lot. Marketing should aim for retention, not just first bookings.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Google Business Profile and area pages for the communities you serve.",
          "Pages for hourly, part-time, full-time and live-out services, each with clear pricing.",
          "Consistent licensing and contact details across the web so both Google and AI assistants trust your listing.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "Trust content: hiring and training process, supervision, insurance, what is included.",
          "Simple online and WhatsApp booking with recurring options.",
          "Genuine customer reviews and short videos showing your team and standards.",
        ],
      },
      {
        service: "ads",
        points: [
          "Google Ads for high-intent searches such as 'hourly maid near me'.",
          "Meta campaigns for new residents and busy families in your target areas.",
          "Tracking of bookings and repeat bookings by campaign.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Packages and subscriptions that turn one-off bookings into regular customers.",
          "Positioning on reliability, same-cleaner consistency or flexibility.",
          "Referral offers for existing families.",
        ],
      },
    ],
    measure: ["New bookings by source", "Share of customers on recurring plans", "Cost per recurring customer", "Review volume and rating"],
    faqs: [
      {
        q: "Is SEO worth it for a maid service company?",
        a: "Yes. Searches for maids and cleaners are frequent, local and high-intent. Even a few recurring customers from search each month add up to significant yearly revenue.",
      },
      {
        q: "What information builds the most trust?",
        a: "Clear pricing, how staff are recruited and trained, licensing, what happens if something goes wrong, and genuine reviews from local families.",
      },
      {
        q: "Should we advertise full-time maid visas?",
        a: "Only if you are licensed to provide that service. Full-time domestic worker recruitment in the UAE is regulated, so marketing must match what your licence allows.",
      },
    ],
    postSlug: "maid-service-company-marketing-dubai",
  },
  {
    slug: "painting-carpentry",
    name: "Painting & Carpentry",
    title: "SEO & Marketing for Painting and Carpentry Companies in Dubai | SEODXB",
    description:
      "Turn local searches into painting, carpentry, wardrobe and kitchen jobs. Local SEO, project galleries, reviews and ads for Dubai painting and joinery businesses.",
    heroTitle: "Turn 'painter near me' into booked jobs",
    heroIntro:
      "Homeowners and tenants search for painters and carpenters when they need them, often this week. Showing up locally with real project photos, reviews and quick quotes wins the work.",
    answer:
      "Painting and carpentry companies in Dubai need SEO because customers search locally for specific jobs, such as villa painting, move-out painting, custom wardrobes or kitchen cabinets, and choose from the first few businesses with good reviews and real work photos. Local SEO, project galleries and fast WhatsApp quotes bring a steady flow of jobs without relying only on word of mouth or marketplace apps.",
    searches: [
      "villa painting service Dubai",
      "apartment painting move out Dubai Marina",
      "painter near me",
      "custom wardrobe carpenter Dubai",
      "kitchen cabinet maker Sharjah",
      "wooden flooring installation Dubai",
    ],
    challenges: [
      {
        title: "Word of mouth has limits",
        body: "Referrals are great but unpredictable. Search brings a steady flow of new customers every week.",
      },
      {
        title: "Customers need to see the work",
        body: "Painting and joinery are visual. Without real before-and-after photos, customers cannot judge quality.",
      },
      {
        title: "Quote requests go to several companies",
        body: "The business that replies first, with a clear quote and a site visit time, usually wins.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Google Business Profile with regular project photos and service categories for painting and carpentry.",
          "Pages for each service: villa painting, move-out painting, wardrobes, kitchens, doors, flooring.",
          "Area pages for the communities where you work most.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "Project galleries with before-and-after photos, materials and timelines.",
          "Price guides and 'what's included' pages that answer questions before the site visit.",
          "Instagram and TikTok reels of work in progress.",
        ],
      },
      {
        service: "ads",
        points: [
          "Google Ads for urgent searches such as move-out painting.",
          "Meta ads showing finished projects to homeowners in target areas.",
          "Call and WhatsApp tracking by campaign.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Focus marketing on the most profitable jobs, such as custom joinery, not only small repairs.",
          "Fast quote process and follow-up.",
          "Review requests after every completed job.",
        ],
      },
    ],
    measure: ["Quote requests by source", "Quote-to-job rate", "Average job value by service", "Map Pack rankings in target areas"],
    faqs: [
      {
        q: "Should we list prices for painting?",
        a: "Starting prices by apartment or villa size help customers decide and filter out poor-fit enquiries. Final prices can still follow a site visit.",
      },
      {
        q: "Painting and carpentry: one website or two?",
        a: "One site with clearly separate service pages usually works best, unless the businesses are run and branded separately.",
      },
      {
        q: "How important are reviews?",
        a: "Very. For home services, reviews and photos are the main reasons customers choose one company over another.",
      },
    ],
    postSlug: "seo-for-painting-carpentry-companies-dubai",
  },
  {
    slug: "home-furniture",
    name: "Home Furniture",
    title: "SEO & Marketing for Furniture Stores in the UAE | SEODXB",
    description:
      "Bring more buyers to your showroom and online store. Ecommerce SEO, product schema, Google Shopping, social ads and content for UAE furniture brands and retailers.",
    heroTitle: "Get found by buyers who research furniture before they visit",
    heroIntro:
      "Furniture buyers browse for weeks, compare styles and prices online, then buy online or visit a showroom. SEO, Shopping ads and inspiring content keep your brand in front of them throughout.",
    answer:
      "Furniture stores in the UAE need SEO because buyers research styles, sizes, prices, delivery and reviews online, often for weeks, before buying in a showroom or online. Well-structured category and product pages, product schema, Google Shopping and inspiring content bring those buyers to your store instead of to marketplaces and large chains, and lift both online sales and showroom visits.",
    searches: [
      "L shaped sofa Dubai",
      "solid wood dining table UAE",
      "furniture store near me Al Barsha",
      "outdoor furniture Dubai",
      "custom made sofa Dubai",
      "kids bedroom furniture Abu Dhabi",
    ],
    challenges: [
      {
        title: "Big chains and marketplaces",
        body: "Large retailers and marketplaces dominate generic searches. Independent stores win with specific categories, custom work and service.",
      },
      {
        title: "Long, visual decisions",
        body: "Buyers save ideas, compare and return several times. Good photos, sizes and room inspiration keep them coming back.",
      },
      {
        title: "Online and showroom together",
        body: "Many buyers research online and buy in person. Marketing must drive showroom visits, not only online orders.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Category pages for sofas, beds, dining and outdoor, written for how buyers search.",
          "Product structured data with price and availability, and clean product feeds.",
          "Google Business Profile for each showroom with photos, hours and directions.",
        ],
      },
      {
        service: "ads",
        points: [
          "Google Shopping and Performance Max from your product feed.",
          "Meta and Pinterest-style visual ads with room inspiration.",
          "Tracking online sales, showroom visits and WhatsApp enquiries.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "Fast product pages with dimensions, materials, delivery times and assembly details.",
          "Room guides and style content that rank and inspire.",
          "Instagram and TikTok content showing real rooms and customer homes.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Choose the categories and customers where you can beat chains: custom, premium, fast delivery or style.",
          "Seasonal plans around Ramadan, back-to-school, summer and year-end sales.",
          "Balance marketplace sales against your own store.",
        ],
      },
    ],
    measure: ["Online revenue and return on ad spend", "Showroom visits and enquiries", "Category rankings", "Repeat purchase rate"],
    faqs: [
      {
        q: "Should a furniture store sell on marketplaces?",
        a: "Marketplaces can add volume, but margins are lower and customers belong to the marketplace. Use them selectively while building your own store.",
      },
      {
        q: "What makes furniture product pages rank?",
        a: "Unique descriptions, real dimensions and materials, good photos, product schema, reviews and category pages that group products the way buyers search.",
      },
      {
        q: "Can SEO drive showroom visits?",
        a: "Yes. Local searches such as 'furniture store near me' and your Google Business Profile send buyers to showrooms, and many online researchers visit before buying.",
      },
    ],
    postSlug: "seo-for-furniture-stores-uae",
  },
  {
    slug: "education",
    name: "Schools & Education",
    title: "Marketing & SEO for Schools and Education Providers in the UAE | SEODXB",
    description:
      "Fill seats before the enrolment peak. Admissions marketing, SEO, AI search and ads for private schools, nurseries, universities and training centres in the UAE.",
    heroTitle: "Admissions marketing that fills seats before term starts",
    heroIntro:
      "Parents compare curriculum, fees, inspection ratings and location online, often from abroad. Schools that are easy to find and easy to trust get the tours and the enrolments.",
    answer:
      "Schools and education providers in the UAE need marketing because parents and students compare many options on curriculum, fees, inspection ratings, location and reviews, mostly online and increasingly through AI assistants. Clear admissions pages, strong local search visibility, content that shows real teaching and student life, and ads timed to the enrolment calendar turn that research into tours, applications and enrolments.",
    searches: [
      "British curriculum school Dubai Hills",
      "IB schools in Dubai fees",
      "best nursery in JLT",
      "KHDA outstanding schools Dubai",
      "American school Abu Dhabi admission",
      "part time MBA UAE",
    ],
    challenges: [
      {
        title: "Parents shortlist online",
        body: "Families compare schools on curriculum, fees, inspection ratings and location before they book a single tour.",
      },
      {
        title: "Enrolment is seasonal",
        body: "Marketing has to be in place before the admissions peak and open days, not started once seats are empty.",
      },
      {
        title: "Relocating families decide from abroad",
        body: "Many parents choose a school before they arrive in the UAE, so the website and reputation are their first visit.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Rank for curriculum and location searches such as British or IB schools in your area.",
          "Clear admissions, fees and FAQ pages that Google and AI assistants can quote.",
          "Google Business Profile and consistent details on school directories.",
        ],
      },
      {
        service: "ads",
        points: [
          "Campaigns timed to the admissions calendar and open days.",
          "Targeting local families and families relocating to the UAE.",
          "Tracking enquiries, tour bookings and enrolments, not just clicks.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "An admissions-focused website with easy enquiry, tour booking and WhatsApp.",
          "Content on teachers, results, facilities and student life.",
          "Arabic and English versions where your families need both.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Define which families the school suits best and how it differs from nearby schools.",
          "An admissions plan with target enquiries per year group.",
          "A follow-up process from enquiry to tour to application.",
        ],
      },
    ],
    measure: ["Admissions enquiries and tour bookings", "Enquiry-to-enrolment rate", "Cost per enrolment", "Rankings for curriculum and area searches"],
    faqs: [
      {
        q: "When should schools start admissions marketing?",
        a: "Several months before the main enrolment period, so that search visibility, content and campaigns are working when parents start comparing schools.",
      },
      {
        q: "Does this work for nurseries, universities and training centres?",
        a: "Yes. Decision cycles differ, but the pattern is the same: be found, be trusted, make enquiring easy and track what brings enrolments.",
      },
      {
        q: "How do inspection ratings affect marketing?",
        a: "Parents look for them, so present your current rating accurately and explain what makes your school strong. Never overstate or misquote a rating.",
      },
    ],
    postSlug: "why-schools-in-dubai-need-marketing",
    extraPostSlugs: ["nursery-marketing-dubai-more-enrolments", "university-marketing-uae-student-recruitment"],
  },
];

INDUSTRIES.push(
  {
    slug: "spas-wellness",
    name: "Spas & Wellness",
    title: "SEO & Marketing for Spas and Wellness Centres in Dubai | SEODXB",
    description:
      "Fill treatment rooms with direct bookings. Local SEO, Google Maps, social content, offers and booking-focused websites for Dubai spas and wellness centres.",
    heroTitle: "Fill your treatment rooms with direct bookings",
    heroIntro:
      "Guests search for a massage, a hammam or a spa day near them, compare photos, prices and reviews, then book. Spas that look inviting online and make booking effortless get the appointments, without paying a share to deal sites.",
    answer:
      "Spas and wellness centres in Dubai need SEO because residents and tourists search for specific treatments near them, such as a Moroccan bath in JBR or a couples massage in Downtown, and book with the spa that looks most inviting and trustworthy. A complete Google Business Profile, a page for each treatment with prices and duration, beautiful real photos, strong reviews and instant online or WhatsApp booking turn those searches into direct bookings and repeat guests.",
    searches: [
      "Moroccan bath Dubai Marina",
      "couples massage Downtown Dubai",
      "best spa in JBR",
      "deep tissue massage near me",
      "spa day package Dubai",
      "hot stone massage Abu Dhabi",
    ],
    challenges: [
      {
        title: "Deal sites and discount culture",
        body: "Heavy discounting through deal platforms fills rooms but trains guests to wait for offers and erodes margins.",
      },
      {
        title: "Quiet weekday hours",
        body: "Weekends book themselves; weekday afternoons often sit empty. Marketing needs to fill the quiet hours, not just the busy ones.",
      },
      {
        title: "Residents and tourists",
        body: "Hotel and tourist spas compete for visitors, while neighbourhood spas depend on regular residents. Each needs a different approach.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Google Business Profile with treatment menu, prices, real photos and booking link.",
          "A page for each treatment and package, written for how guests search.",
          "Consistent listings on maps, travel and wellness directories so AI assistants can recommend you.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "A calm, fast website with online booking and a visible WhatsApp button.",
          "Instagram and TikTok content showing the space, rituals and team.",
          "Gift vouchers and packages that sell online.",
        ],
      },
      {
        service: "ads",
        points: [
          "Local search and Meta campaigns aimed at quiet days and new residents nearby.",
          "Seasonal campaigns for Mother's Day, Valentine's, Ramadan and summer.",
          "Tracking bookings and voucher sales by campaign.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Memberships and treatment series that turn first visits into regulars.",
          "Off-peak offers instead of blanket discounting.",
          "Positioning on experience, speciality or location rather than price alone.",
        ],
      },
    ],
    measure: ["Direct online and WhatsApp bookings", "Occupancy on off-peak days", "Repeat guest rate and memberships", "Voucher and package sales"],
    faqs: [
      {
        q: "Should spas list prices online?",
        a: "Yes. Guests compare spas quickly, and a clear treatment menu with prices and durations converts far better than asking guests to call.",
      },
      {
        q: "Are deal websites bad for spas?",
        a: "Not always, but relying on them can erode margins and attract one-time bargain hunters. Use them selectively and focus on turning those guests into direct, repeat customers.",
      },
      {
        q: "Can hotel spas benefit from SEO?",
        a: "Yes. Many residents and visitors from other hotels search for spa experiences nearby, and a strong local profile brings non-hotel guests through the door.",
      },
    ],
    postSlug: "seo-for-spas-wellness-centres-dubai",
  },
  {
    slug: "beauty-salons",
    name: "Beauty Salons",
    title: "SEO & Marketing for Beauty Salons and Parlours in Dubai | SEODXB",
    description:
      "More bookings for hair, nails, lashes, brows and bridal. Local SEO, Instagram, reviews and easy booking for beauty salons and parlours in Dubai and the UAE.",
    heroTitle: "Keep your chairs full, every day of the week",
    heroIntro:
      "Clients search for a service near them, check the photos and reviews, and book the salon that looks best and replies fastest. We help beauty salons and parlours win those bookings and keep clients coming back.",
    answer:
      "Beauty salons and parlours in Dubai need SEO because clients search for specific services nearby, such as balayage in JLT, gel nails near me or bridal makeup in Sharjah, and choose the salon with the best photos, reviews and easiest booking. A complete Google Business Profile, a page for each service with prices, a strong Instagram portfolio, steady reviews and fast WhatsApp or online booking bring new clients and help turn them into regulars.",
    searches: [
      "balayage hair salon JLT",
      "gel nails near me",
      "bridal makeup artist Dubai",
      "eyelash extensions Al Barsha",
      "ladies salon Karama",
      "keratin treatment price Dubai",
    ],
    challenges: [
      {
        title: "Visual decisions",
        body: "Clients choose from photos. Without a strong portfolio of real work, the salon down the road wins.",
      },
      {
        title: "Heavy local competition",
        body: "Most areas have several salons within walking distance. Reviews, speciality and convenience decide who gets the booking.",
      },
      {
        title: "Retention",
        body: "The real value is a client who returns every few weeks. Marketing should bring them back, not just in once.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Google Business Profile with every service, price ranges, portfolio photos and booking link.",
          "Service pages for hair, nails, lashes, brows, skin and bridal, including Arabic where your clients need it.",
          "A steady flow of genuine reviews after appointments.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "Instagram and TikTok content showing real transformations and your team.",
          "A mobile website with prices, stylist profiles and instant booking.",
          "Bridal and event pages with packages and galleries.",
        ],
      },
      {
        service: "ads",
        points: [
          "Meta ads to women nearby for new services, quiet days and seasonal occasions.",
          "Google Ads for high-intent searches such as bridal makeup and hair treatments.",
          "Tracking bookings from each campaign, including WhatsApp.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Rebooking reminders, memberships and loyalty offers.",
          "A clear speciality, such as colour, nails or bridal, that sets you apart.",
          "Referral offers so happy clients bring friends.",
        ],
      },
    ],
    measure: ["New client bookings by source", "Rebooking and retention rate", "Average spend per visit", "Review volume and rating"],
    faqs: [
      {
        q: "Is Instagram enough for a salon?",
        a: "Instagram is important for showing your work, but many clients start with Google Maps. The strongest salons use both, with Instagram content linked from their profile and website.",
      },
      {
        q: "Should we show prices?",
        a: "Showing starting prices builds trust and filters out poor-fit enquiries. Final prices can depend on hair length or consultation.",
      },
      {
        q: "Can salons advertise treatments like Botox or laser?",
        a: "Medical aesthetic treatments must be provided and advertised by appropriately licensed healthcare facilities in the UAE. Only promote services your licence covers.",
      },
    ],
    postSlug: "seo-for-beauty-salons-dubai",
  },
  {
    slug: "holistic-healing",
    name: "Healing & Holistic Therapists",
    title: "SEO & Marketing for Healing and Holistic Therapists in the UAE | SEODXB",
    description:
      "Trust-led marketing for reiki, sound healing, ayurveda, acupuncture and holistic therapists: local SEO, clear content and responsible ads.",
    heroTitle: "Reach clients who are looking for what you offer",
    heroIntro:
      "People searching for reiki, sound healing, breathwork, ayurveda or acupuncture want to understand the practice and trust the practitioner before they book. Clear, honest content and a strong local presence help the right clients find you.",
    answer:
      "Healing and holistic therapists in the UAE need SEO because clients search for specific practices and practitioners near them, then read carefully before booking. Clear pages that explain each therapy and what a session involves, practitioner credentials and licensing where required, a complete Google Business Profile, genuine reviews and responsible wording that avoids medical claims help the right clients find and trust you.",
    searches: [
      "reiki healing Dubai",
      "sound bath near me",
      "acupuncture clinic Jumeirah",
      "breathwork session Dubai",
      "ayurvedic massage Abu Dhabi",
      "energy healing practitioner UAE",
    ],
    challenges: [
      {
        title: "Explaining the practice",
        body: "Many potential clients are curious but unsure what a session involves. Clear, calm explanations turn curiosity into bookings.",
      },
      {
        title: "Trust and credibility",
        body: "Clients want to know who the practitioner is, their training and approach, and whether the practice is properly licensed.",
      },
      {
        title: "Responsible claims",
        body: "Health-related advertising is regulated, and ad platforms restrict health claims. Marketing must describe experiences honestly without promising cures.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "A page for each therapy explaining what it is, what happens in a session and who it suits.",
          "Google Business Profile and practitioner profiles with credentials and real photos.",
          "Consistent information across wellness directories so AI assistants describe you accurately.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "Educational articles and short videos that answer common questions.",
          "Practitioner bios with training, approach and licensing where applicable.",
          "Simple booking for sessions, workshops and group events.",
        ],
      },
      {
        service: "ads",
        points: [
          "Responsible campaigns that describe the experience, not medical outcomes.",
          "Promotion of workshops, retreats and group sessions to interested audiences.",
          "Booking tracking so spend follows results.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Packages and memberships for ongoing sessions.",
          "Partnerships with yoga studios, spas and wellness venues.",
          "A clear niche that sets you apart from general wellness providers.",
        ],
      },
    ],
    measure: ["Session and workshop bookings by source", "Returning client rate", "Enquiries from educational content", "Local search visibility for each therapy"],
    faqs: [
      {
        q: "Do holistic therapists need a licence in the UAE?",
        a: "Some complementary and alternative medicine practices are regulated by health authorities such as the DHA in Dubai, while others fall under different licensing. Check the requirements for your practice and emirate, and state your licensing clearly.",
      },
      {
        q: "Can we say our therapy treats conditions?",
        a: "Be very careful. Health claims are regulated and ad platforms restrict them. Describe what the session involves and how clients may feel, rather than promising medical outcomes.",
      },
      {
        q: "What content works best for holistic practices?",
        a: "Plain explanations of each practice, what to expect in a first session, practitioner stories and short calming videos tend to build the most trust.",
      },
    ],
    postSlug: "marketing-for-healing-holistic-therapists-uae",
  },
  {
    slug: "mental-health-therapists",
    name: "Mental Health Therapists",
    title: "Ethical Marketing for Therapists and Psychologists in the UAE | SEODXB",
    description:
      "Ethical, privacy-first SEO and AI search visibility for therapists, psychologists, counsellors and clinics in the UAE.",
    heroTitle: "Help the people who need you find you",
    heroIntro:
      "People looking for a therapist often search privately, late at night, unsure where to start. Clear, compassionate and ethical marketing helps them find a licensed professional who fits, and take the first step.",
    answer:
      "Mental health therapists, psychologists and counselling clinics in the UAE need SEO because most people begin looking for support privately online, searching for a therapist by concern, language, approach and location. Clear pages on the issues you work with, therapist profiles showing licensing and specialisms, practical information on fees, languages and online sessions, a complete Google Business Profile and privacy-first enquiry forms help the right clients find you, within professional ethics and advertising rules.",
    searches: [
      "therapist in Dubai for anxiety",
      "psychologist near me",
      "couples counselling Dubai",
      "online therapy UAE Arabic speaking",
      "child psychologist Abu Dhabi",
      "affordable counselling Sharjah",
    ],
    challenges: [
      {
        title: "Sensitive and private decisions",
        body: "People seeking therapy value discretion. Every touchpoint, from ads to enquiry forms, must respect their privacy.",
      },
      {
        title: "Ethics and regulation",
        body: "Therapists must be licensed by the relevant authority, such as DHA, DoH or MOHAP, and professional codes often discourage client testimonials. Marketing has to work within these limits.",
      },
      {
        title: "Finding the right fit",
        body: "Clients look for a therapist who understands their concern, speaks their language and fits their schedule and budget.",
      },
    ],
    plan: [
      {
        service: "search",
        points: [
          "Pages for each area you support, such as anxiety, depression, relationships, children and teens, written compassionately and accurately.",
          "Therapist profiles with licensing, qualifications, approaches and languages.",
          "Google Business Profile and directory listings that are complete and consistent.",
        ],
      },
      {
        service: "web-content-social",
        points: [
          "Helpful articles that answer common questions about starting therapy.",
          "Clear information on fees, insurance, online and in-person sessions and what to expect.",
          "Privacy-first contact forms that collect only what is needed.",
        ],
      },
      {
        service: "ads",
        points: [
          "Search campaigns for people actively looking for support, within platform healthcare policies.",
          "No targeting based on personal health conditions, which major platforms restrict.",
          "Conversion tracking that never sends sensitive details to ad platforms.",
        ],
      },
      {
        service: "strategy",
        points: [
          "Clear positioning on specialisms, languages and client groups.",
          "Referral relationships with doctors, schools and employers.",
          "Corporate wellbeing offers for companies.",
        ],
      },
    ],
    measure: ["Enquiries and first appointments by source", "Enquiry-to-first-session rate", "Visibility for specialism and language searches", "Referral partner enquiries"],
    faqs: [
      {
        q: "Can therapists use client testimonials?",
        a: "Many professional codes of ethics discourage or restrict testimonials from clients, because of the power imbalance and confidentiality. Focus on credentials, approach and helpful information instead, and follow your licensing body's guidance.",
      },
      {
        q: "Is it ethical for therapists to advertise?",
        a: "Yes, when advertising is accurate, respectful and helps people find appropriate care. Avoid guarantees, fear-based messaging and anything that could identify clients.",
      },
      {
        q: "How do you protect client privacy in marketing?",
        a: "We keep enquiry forms minimal, avoid sending any health information to analytics or ad platforms, and never target ads based on personal health conditions.",
      },
    ],
    postSlug: "ethical-marketing-for-therapists-uae",
  },
);

INDUSTRIES.push(...HEALTH_INDUSTRIES);

export const industryPath = (i: Industry) => `/industries/${i.slug}`;
