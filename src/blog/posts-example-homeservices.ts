import type { Post } from "./types";

const D = "2026-11-12";

export const EXAMPLE_HOMESERVICES_POSTS: Post[] = [
  {
    slug: "worked-example-ac-maintenance-company-leads-dubai",
    title: "Worked Example: Turning Website Visits into Booked Jobs for a Dubai AC Maintenance Company",
    seoTitle: "Worked Example: AC Maintenance Leads in Dubai",
    description:
      "An illustrative model for a Dubai AC maintenance company: tracking, landing pages, reviews, seasonal ads and AMC upsell, with every number an assumption.",
    category: "Worked Examples",
    date: D,
    updated: D,
    answer:
      "This is an illustrative scenario with modelled numbers, not a client result. It shows how a Dubai AC maintenance company could turn more website visits into booked jobs. The plan tracks every WhatsApp message, call and form first, then fixes the pages that lose enquiries, builds reviews on Google Business Profile, runs Google Ads around the summer peak and offers an annual maintenance contract after each job. The arithmetic is shown at every step so you can replace our assumptions with your own figures.",
    keywords: [
      "ac maintenance company marketing dubai",
      "ac repair leads dubai",
      "ac maintenance leads",
      "annual maintenance contract marketing",
      "whatsapp lead tracking uae",
      "conversion rate optimisation home services",
    ],
    takeaways: [
      "Every figure here is an assumption in a model, so swap in your own visits, rates and job values.",
      "Track WhatsApp, calls and forms before changing anything, or you cannot tell what worked.",
      "In this model, lifting enquiry rate and booking rate does more than buying extra clicks.",
      "Summer pays the bills, but winter is when reviews, pages and AMC renewals are built.",
      "An annual maintenance contract turns a one-off repair into several years of income.",
      "Plan for low, base and high cases, because the weather and competitors will not follow your plan.",
    ],
    body: [
      {
        t: "callout",
        title: "Read this first: an illustrative scenario",
        text: "This worked example is an illustrative scenario. It is not a client result, and the company in it does not exist. We built it to show how the planning and the arithmetic work for an AC maintenance business in Dubai. Every number is an assumption that you should replace with your own data before you make a decision.",
      },
      {
        t: "p",
        text: "AC maintenance in Dubai is a business with a hard season. When the heat arrives, phones ring all day and technicians work late. When the weather cools, enquiries slow down and the same team has spare hours. Most owners feel this cycle in their bank balance, but few have written it down as a model. This worked example does exactly that. It takes one imaginary company, lists what we assume about it, and follows a twelve-month plan to turn more of its website visits into booked jobs and maintenance contracts.",
      },
      {
        t: "p",
        text: "We call the business the company. It has no name because it is not real. The point is the method. If you run an AC, plumbing, pest control or cleaning business, you can copy the structure, put your own figures into each step and see what your version of the plan might produce. Where a step links to a service we offer, such as [conversion rate optimisation](/services/conversion-rate-optimization), it is there so you can read more about how that work is done, not to suggest that these results are promised.",
      },
      { t: "h2", text: "The starting situation and our assumptions", id: "starting-situation" },
      {
        t: "p",
        text: "A model is only useful if its assumptions are visible. So before any plan, here is the picture we assume. The company has been trading in Dubai for several years. It serves villas and apartments in a handful of communities and a small number of offices and shops. It has six technicians in three vans. It offers AC repair, servicing, duct cleaning and an annual maintenance contract, which most people in the trade call an AMC.",
      },
      {
        t: "p",
        text: "The company has a website that was built some years ago. It has a Google Business Profile with a modest number of reviews. It has run Google Ads on and off, usually switching them on when work is slow and off when the team is busy. Enquiries arrive by phone, by WhatsApp and through a contact form. Nobody records where each enquiry came from. The owner believes most work comes from Google, but cannot prove it.",
      },
      { t: "h3", text: "The numbers we assume at the start" },
      {
        t: "ul",
        items: [
          "Website visits: we assume 3,000 visits a month in the five hot months from May to September, and 1,200 a month in the other seven months.",
          "Enquiry rate: we assume 2% of visits become an enquiry by WhatsApp, call or form.",
          "Booking rate: we assume 45% of enquiries become a booked job.",
          "Average job value: we assume AED 350 for a one-off repair or service visit.",
          "AMC take-up: we assume 5% of one-off customers buy an annual maintenance contract.",
          "AMC value: we assume AED 900 a year, and that an AMC customer stays for 2.5 years on average.",
        ],
      },
      {
        t: "p",
        text: "None of these figures is a market benchmark. They are round numbers chosen to make the arithmetic easy to follow. Your own enquiry rate might be half of ours or double it. Your job value depends on whether you mostly service split units in apartments or repair central systems in villas. Treat each figure as an empty box with a sample number written in pencil.",
      },
      { t: "h3", text: "The baseline arithmetic" },
      {
        t: "p",
        text: "With those assumptions, a hot month looks like this. 3,000 visits x 2% enquiry rate = 60 enquiries. 60 enquiries x 45% booking rate = 27 booked jobs. 27 jobs x AED 350 = AED 9,450 in one-off revenue from the website. A cool month looks like this. 1,200 visits x 2% = 24 enquiries. 24 x 45% = about 11 jobs. 11 x AED 350 = AED 3,850.",
      },
      {
        t: "p",
        text: "Across a year, the model gives five hot months and seven cool months. That is 5 x 27 = 135 jobs plus 7 x 11 = 77 jobs, which is 212 jobs from the website. 212 x AED 350 = AED 74,200 in one-off revenue. On top of that, 5% of 212 customers is about 11 new AMC customers. Each is worth AED 900 x 2.5 years = AED 2,250 over their lifetime in this model, so 11 x AED 2,250 = AED 24,750 in future AMC income. The website is only one source of work for the company, but it is the source this plan can change.",
      },
      {
        t: "img",
        photo: { id: "photo-1642749776312-aa42ce20c9f5", alt: "Workers on a rooftop beside rows of outdoor air conditioning units", by: "Singapore Stock Photos", user: "singaporestockphoto" },
        caption: "The scenario assumes a small team of technicians whose workload rises sharply in the hot months.",
      },
      { t: "h2", text: "Diagnosis: where the enquiries leak away", id: "diagnosis" },
      {
        t: "p",
        text: "Before changing anything, a careful marketer looks for the places where possible customers are lost. In this scenario we assume an audit finds five leaks. Each one is common in home services, which is why we chose them. Your own audit may find different ones.",
      },
      { t: "h3", text: "Leak 1: nothing is tracked" },
      {
        t: "p",
        text: "The company does not know which enquiries came from the website, which from Google Maps and which from a leaflet or a neighbour. The WhatsApp button is a plain link with no event attached. The phone number is plain text. The form sends an email and nothing more. Without tracking, every later decision is a guess. This is the first thing to fix, and we cover it in detail below.",
      },
      { t: "h3", text: "Leak 2: one page tries to do everything" },
      {
        t: "p",
        text: "All ads and most search visits land on the homepage. A person whose AC is leaking water at 9 pm sees a slideshow, a paragraph about the company's history and a long list of services. The phone number is in the footer. On a mobile screen, the WhatsApp button sits below three screens of scrolling. People in a hurry leave.",
      },
      { t: "h3", text: "Leak 3: slow replies" },
      {
        t: "p",
        text: "We assume the office replies to WhatsApp messages within a few hours on a normal day and the next morning after 6 pm. In an emergency trade, the first company to reply often wins the job. A slow reply does not show up in website statistics, but it lowers the booking rate, which is one of the four numbers in our formula.",
      },
      { t: "h3", text: "Leak 4: a thin Google Business Profile" },
      {
        t: "p",
        text: "The profile has the right name and phone number, but only a few photos, no listed services and reviews that mostly date from two years ago. Nobody replies to reviews. In the map results, nearby competitors show more recent reviews, and searchers tend to trust what looks active.",
      },
      { t: "h3", text: "Leak 5: no follow-up after the job" },
      {
        t: "p",
        text: "When a repair is finished, the technician takes payment and leaves. Nobody asks for a review. Nobody explains the AMC. Nobody sends a reminder before next summer. Each job is treated as the end of a sale when it could be the start of a longer relationship.",
      },
      {
        t: "callout",
        title: "Why diagnosis comes before spend",
        text: "If the company doubled its ad budget today, it would send twice as many people into the same leaks. In this model, fixing the leaks first means every later visit is worth more. That order matters more than any single tactic.",
      },
      { t: "h2", text: "Goals and the KPI model", id: "goals-kpi-model" },
      {
        t: "p",
        text: "A goal such as more leads is too loose to manage. The plan needs a small set of numbers that link marketing work to money. In this scenario we use one formula for one-off work and one for contracts.",
      },
      {
        t: "ul",
        items: [
          "One-off revenue = visits x enquiry rate x booking rate x average job value.",
          "AMC lifetime value = annual AMC price x average years retained.",
          "New AMC income = booked jobs x AMC take-up rate x AMC lifetime value.",
        ],
      },
      {
        t: "p",
        text: "Each part of the formula has an owner. Visits depend on search visibility, the map results and ads. Enquiry rate depends on the pages and how easy it is to make contact. Booking rate depends on the office: reply speed, clear prices and available slots. Job value depends on the service mix. AMC take-up depends on the technician and the follow-up. Splitting the formula this way shows the owner which lever belongs to marketing and which belongs to operations.",
      },
      { t: "h3", text: "The targets we set in this model" },
      {
        t: "ul",
        items: [
          "Enquiry rate: from 2% to 4% over twelve months.",
          "Booking rate: from 45% to 55%.",
          "Visits: from 3,000 to 3,600 in hot months and from 1,200 to 1,500 in cool months, through ads, map visibility and better pages.",
          "AMC take-up: from 5% to 12% of one-off customers.",
          "Average job value: unchanged at AED 350, because we do not want the model to depend on price rises.",
        ],
      },
      {
        t: "p",
        text: "These targets are assumptions about what a well-run plan might reach, not forecasts. We chose them because they are within the range a business can influence. Doubling an enquiry rate sounds bold, but it starts from a low base on a site where the contact buttons are hard to find. If your site already converts well, your realistic gain will be smaller, and you should say so in your own model.",
      },
      { t: "h2", text: "The plan, phase by phase", id: "plan-phases" },
      {
        t: "p",
        text: "The scenario starts in November, when the weather is mild and the team has spare time. That is deliberate. The cool season is when a seasonal business should build, so that the hot season can be spent answering the phone. If you are reading this in a different month, shift the phases to suit.",
      },
      { t: "h3", text: "Phase 1: November and December, measure and repair" },
      {
        t: "ul",
        items: [
          "Set up tracking for WhatsApp clicks, phone clicks and form submissions.",
          "Start a simple lead log that records source, service, area and outcome for every enquiry.",
          "Fix the mobile header so call and WhatsApp buttons are always visible.",
          "Agree a reply-time rule for the office and an evening rota.",
          "Clean up the Google Business Profile: categories, services, areas, hours and photos.",
        ],
      },
      { t: "h3", text: "Phase 2: January to March, build pages and reviews" },
      {
        t: "ul",
        items: [
          "Build separate landing pages for AC repair, AC servicing, duct cleaning and the AMC.",
          "Add area pages for the communities the company actually serves.",
          "Start the review routine after every completed job.",
          "Write the AMC offer, the price sheet and the technician's short explanation.",
          "Run a small Google Ads test on servicing to learn costs before the peak.",
        ],
      },
      { t: "h3", text: "Phase 3: April and May, prepare for the peak" },
      {
        t: "ul",
        items: [
          "Launch a pre-summer servicing campaign aimed at people who plan ahead.",
          "Send a reminder to past customers offering a service visit before the heat.",
          "Check van capacity and agree the maximum number of jobs a day.",
          "Set ad budgets and a rule for pausing ads when the diary is full.",
        ],
      },
      { t: "h3", text: "Phase 4: June to September, the summer peak" },
      {
        t: "ul",
        items: [
          "Shift ads towards emergency repair searches and extend the hours ads run.",
          "Keep reply times short with a shared WhatsApp inbox and saved replies.",
          "Offer the AMC at the end of every repair while the problem is fresh.",
          "Review search terms weekly and block the ones that waste money.",
        ],
      },
      {
        t: "img",
        photo: { id: "photo-1633526543814-9718c8922b7a", alt: "Calendar page with red push pins marking several dates", by: "Towfiqu barbhuiya", user: "towfiqu999999" },
        caption: "A seasonal business plans backwards from the hot months, so the building work is done before the phones get busy.",
      },
      { t: "h2", text: "Workstream 1: tracking WhatsApp, calls and forms", id: "tracking" },
      {
        t: "p",
        text: "Tracking is the least exciting part of the plan and the most important. In Dubai, a large share of home service enquiries arrive by WhatsApp or a phone call, not by a form. If only forms are counted, the company will think its website produces very little, and it will make poor decisions about pages and ads.",
      },
      { t: "h3", text: "What gets measured" },
      {
        t: "ul",
        items: [
          "WhatsApp clicks: every tap on a WhatsApp button is recorded as a key event in Google Analytics 4, with the page it happened on.",
          "Phone clicks: every tap on a tel: link is recorded the same way.",
          "Form submissions: recorded when the thank-you message appears, not when the button is pressed.",
          "Ad conversions: the same three events are imported into Google Ads so campaigns can be judged on enquiries.",
        ],
      },
      {
        t: "p",
        text: "A click is not a conversation. Some people tap the WhatsApp button and never send a message. So the model treats tracked clicks as an upper limit and relies on the lead log for the truth. The lead log is a shared sheet or a simple CRM, and our page on [lead tracking and attribution](/services/lead-tracking-and-attribution) explains the options, including call tracking for people who dial by hand. For each enquiry, the office records the date, the channel, the service asked for, the area, how the person found the company and what happened next. It takes under a minute per enquiry.",
      },
      { t: "h3", text: "A pre-filled WhatsApp message" },
      {
        t: "p",
        text: "One small trick helps a great deal. Each WhatsApp button opens the chat with a short message already typed, and the message differs by page. On the repair page it might read: Hi, I need an AC repair. On the AMC page: Hi, I would like details of your annual maintenance contract. When the message arrives, the office can see which page it came from without asking. This costs nothing and makes the lead log far more accurate.",
      },
      {
        t: "callout",
        title: "Privacy and consent",
        text: "Tracking tools and customer records involve personal data. Requirements in the UAE depend on your setup and the kind of data you hold, so confirm what applies to you with the relevant authority or a legal adviser. Keep only the data you need, and tell people how you use it.",
      },
      { t: "h2", text: "Workstream 2: landing pages and conversion rate optimisation", id: "landing-pages-cro" },
      {
        t: "p",
        text: "The second workstream attacks the enquiry rate. In the model it rises from 2% to 4%. That gain comes from a set of plain changes, each one small. None of them needs a new website.",
      },
      { t: "h3", text: "One page for each intent" },
      {
        t: "p",
        text: "A person with a broken AC and a person planning a yearly service are in different moods. The first wants speed. The second wants a fair price and a convenient slot. A single page cannot speak to both well. So the plan builds four focused pages: emergency repair, routine servicing, duct cleaning and the AMC. Each ad and each relevant search result points to the page that matches it. You can read how such pages are planned on our [landing page design](/services/landing-page-design) page.",
      },
      { t: "h3", text: "What each landing page contains" },
      {
        t: "ol",
        items: [
          "A headline that repeats the need in the visitor's words, such as AC repair in Dubai, same day where slots allow.",
          "Call and WhatsApp buttons at the top of the screen, and again after every section.",
          "The areas served, listed plainly, so nobody outside them wastes a message.",
          "A starting price or price range, with what is included and what costs extra.",
          "Three short reasons to trust the company: years trading, trained technicians, and recent reviews shown with their dates.",
          "A simple explanation of what happens after the message: reply time, visit window and payment methods.",
          "A short set of common questions, such as whether gas refilling is included and how long a service visit takes.",
        ],
      },
      { t: "h3", text: "The mobile screen comes first" },
      {
        t: "p",
        text: "We assume that most visits in this scenario come from phones, as is typical for urgent local services. So every page is designed on a narrow screen first. A fixed bar at the bottom holds two buttons, Call and WhatsApp. Text is large enough to read without zooming. Photos are compressed so the page loads quickly on mobile data. A form, if used at all, asks for a name, a phone number and the area, and nothing else.",
      },
      {
        t: "img",
        photo: { id: "photo-1512428559087-560fa5ceab42", alt: "Person in a white shirt tapping on a smartphone held in one hand", by: "NordWood Themes", user: "nordwood" },
        caption: "In this scenario most visitors are on a phone, so call and WhatsApp buttons stay in view on every page.",
      },
      { t: "h2", text: "Workstream 3: Google Business Profile and reviews", id: "google-business-profile-reviews" },
      {
        t: "p",
        text: "For a local trade, the map results are often the first thing a searcher sees. The company's profile is the shop window in those results. This workstream is cheap, steady work that suits the cool months. It supports the visits figure in the formula, and it also lifts the enquiry rate, because people who have read good recent reviews arrive more ready to book.",
      },
      { t: "h3", text: "Profile clean-up" },
      {
        t: "ul",
        items: [
          "Confirm the business owns and controls the profile, with more than one manager.",
          "Choose the most accurate primary category and a few relevant secondary ones.",
          "List each service with a short description in plain words.",
          "Set the service areas to match the communities the vans can reach on time.",
          "Add real photos of the team, the vans and work in progress, and replace them as the seasons change.",
          "Keep hours correct, including any extended summer hours.",
        ],
      },
      { t: "h3", text: "A review routine the team can keep up" },
      {
        t: "p",
        text: "Reviews do not arrive by luck. In this scenario the routine is simple. When a job is complete and the customer is satisfied, the technician says the company would value a review. The office then sends a WhatsApp message with a direct link within the hour. The message is short and polite and does not offer a reward. The office replies to every review, good or bad, within two working days.",
      },
      {
        t: "p",
        text: "We assume that one in six customers who are asked will leave a review. With 212 website jobs in the baseline year plus work from other sources, that is a steady flow. The model does not attach a direct revenue figure to reviews, because the link is real but hard to measure. Their effect is counted inside the rises we assume for visits and enquiry rate.",
      },
      {
        t: "callout",
        title: "Keep reviews honest",
        text: "Never buy reviews, write your own or offer payment for them. It breaks platform rules, it can lead to a profile being suspended, and it misleads customers. A smaller number of real, recent reviews is worth more than a large number that looks suspicious.",
      },
      {
        t: "p",
        text: "More detail on this kind of work is on our pages about [Google Business Profile management](/services/google-business-profile-management) and [local SEO](/services/local-seo-services).",
      },
      {
        t: "img",
        photo: { id: "photo-1633613286991-611fe299c4be", alt: "Row of five yellow stars on a pink and blue background", by: "Towfiqu barbhuiya", user: "towfiqu999999" },
        caption: "Recent, real reviews help a local trade stand out in the map results. The model counts their effect inside the visit and enquiry assumptions.",
      },
      { t: "h2", text: "Workstream 4: seasonal Google Ads", id: "seasonal-google-ads" },
      {
        t: "p",
        text: "Ads are the fastest lever in the plan and the easiest one to waste. The old habit in this scenario was to switch ads on when work was slow. That is backwards for a seasonal trade, because slow months are when fewer people are searching. The new approach matches the budget to demand and to the team's capacity.",
      },
      { t: "h3", text: "Three campaigns with three jobs" },
      {
        t: "ul",
        items: [
          "Emergency repair: searches such as AC not cooling or AC repair near me. Runs hardest from June to September, with ads shown into the evening.",
          "Routine servicing: searches for AC service and AC cleaning. Runs from March to May, when people prepare for summer.",
          "AMC: searches for annual maintenance contracts. Runs at a low, steady level all year, because the buyer is planning, not panicking.",
        ],
      },
      { t: "h3", text: "The ad arithmetic in this model" },
      {
        t: "p",
        text: "Assume a click on a repair search costs AED 8 in the peak. That figure is an assumption for the sake of the sum, since real costs change with the season and the competition. If the company buys 600 clicks in a hot month, the spend is 600 x AED 8 = AED 4,800. With the improved enquiry rate of 4%, 600 clicks give 24 enquiries. With the improved booking rate of 55%, 24 enquiries give about 13 jobs. 13 x AED 350 = AED 4,550 in one-off revenue.",
      },
      {
        t: "p",
        text: "On one-off revenue alone, that campaign almost pays for its own clicks, before the cost of doing the work. That is not good enough, and the model shows why the AMC matters. If 12% of those 13 customers buy a contract, that is about 1.6 contracts. 1.6 x AED 2,250 lifetime value = AED 3,600. Total modelled value from the campaign is AED 4,550 + AED 3,600 = AED 8,150 against AED 4,800 of spend. The contract turns a marginal campaign into a sensible one.",
      },
      {
        t: "p",
        text: "Now run the same sum with the old rates. 600 clicks x 2% = 12 enquiries. 12 x 45% = about 5 jobs. 5 x AED 350 = AED 1,750 against AED 4,800 of spend. The same ads, sent to the old pages and the old office process, lose money. This is the clearest reason in the whole model to fix the leaks before buying traffic.",
      },
      { t: "h3", text: "Rules that protect the budget" },
      {
        t: "ul",
        items: [
          "A capacity rule: if the diary is full for the next two days, repair ads are paused or limited to AMC and servicing.",
          "Area targeting: ads show only in the communities the vans can reach.",
          "Negative keywords: jobs, training, spare parts and brand names the company does not service are blocked.",
          "A weekly search terms review during the peak, and a fortnightly one in cooler months.",
          "A cost per booked job figure checked against the lead log, not against the ad platform's own count.",
        ],
      },
      {
        t: "p",
        text: "Advertising rules can apply to some claims and sectors in the UAE. If your ads mention licences, certifications or prices, check that the wording is accurate and confirm any requirements with the relevant authority. Our [Google Ads management](/services/google-ads-management) page explains how campaigns of this kind are structured.",
      },
      { t: "h2", text: "Workstream 5: the annual maintenance contract upsell", id: "amc-upsell" },
      {
        t: "p",
        text: "The AMC is where this model makes its money. A repair is a single payment. A contract is a customer who pays every year, calls the company first when something breaks, and is cheaper to serve because the units are kept in good order. In the baseline, 5% of one-off customers take a contract. The plan aims for 12%.",
      },
      { t: "h3", text: "AMC lifetime value in this model" },
      {
        t: "p",
        text: "We assume an AMC price of AED 900 a year for a typical apartment and an average of 2.5 years before the customer moves or cancels. Lifetime value = AED 900 x 2.5 = AED 2,250. That figure is revenue, not profit. To judge profit you would subtract the cost of the visits included in the contract. If each contract includes two service visits a year at a cost to the company of AED 120 each, the yearly cost is AED 240 and the yearly margin is AED 900 minus AED 240 = AED 660. Over 2.5 years that is AED 1,650 of margin per contract in this model.",
      },
      { t: "h3", text: "How the offer is made" },
      {
        t: "ol",
        items: [
          "At the end of a repair, the technician explains in two sentences what caused the fault and how regular servicing reduces the chance of it returning.",
          "The technician hands over or sends a one-page AMC sheet with the price, what is included and what is not.",
          "The office follows up by WhatsApp the next day with the same sheet and a simple way to say yes.",
          "If the customer does not reply, one polite reminder is sent a week later, and then nothing more.",
          "The cost of the repair visit is credited against the first year if the customer signs within seven days.",
        ],
      },
      {
        t: "img",
        photo: { id: "photo-1660330589827-da8ab7dd3c02", alt: "Technician in a cap working on an electrical meter box on a wall", by: "Raze Solar", user: "razesolar" },
        caption: "The technician is the person the customer trusts most, so the AMC is explained on site and followed up by the office.",
      },
      { t: "h2", text: "The modelled outcome: low, base and high cases", id: "modelled-outcome" },
      {
        t: "p",
        text: "A single forecast invites false confidence. So the model gives three cases for the second year, once all the work is in place. The base case uses the targets above. The low case assumes the plan works only partly. The high case assumes it works a little better than planned. In all three, the average job value stays at AED 350 and the AMC lifetime value stays at AED 2,250.",
      },
      { t: "h3", text: "Base case" },
      {
        t: "p",
        text: "Hot month: 3,600 visits x 4% = 144 enquiries. 144 x 55% = about 79 jobs. 79 x AED 350 = AED 27,650. Cool month: 1,500 visits x 4% = 60 enquiries. 60 x 55% = 33 jobs. 33 x AED 350 = AED 11,550. Year: 5 x 79 = 395 jobs plus 7 x 33 = 231 jobs, which is 626 jobs. 626 x AED 350 = AED 219,100 in one-off revenue. New AMC customers: 626 x 12% = about 75. 75 x AED 2,250 = AED 168,750 in modelled lifetime AMC revenue.",
      },
      { t: "h3", text: "Low case" },
      {
        t: "p",
        text: "Here we assume visits do not grow, the enquiry rate reaches 3%, the booking rate reaches 50% and AMC take-up reaches 8%. Hot month: 3,000 x 3% = 90 enquiries. 90 x 50% = 45 jobs. Cool month: 1,200 x 3% = 36 enquiries. 36 x 50% = 18 jobs. Year: 5 x 45 = 225 plus 7 x 18 = 126, which is 351 jobs. 351 x AED 350 = AED 122,850. New AMC customers: 351 x 8% = about 28. 28 x AED 2,250 = AED 63,000.",
      },
      { t: "h3", text: "High case" },
      {
        t: "p",
        text: "Here we assume visits reach 4,000 in hot months and 1,700 in cool months, the enquiry rate reaches 4.5%, the booking rate reaches 60% and AMC take-up reaches 15%. Hot month: 4,000 x 4.5% = 180 enquiries. 180 x 60% = 108 jobs. Cool month: 1,700 x 4.5% = about 77 enquiries. 77 x 60% = about 46 jobs. Year: 5 x 108 = 540 plus 7 x 46 = 322, which is 862 jobs. 862 x AED 350 = AED 301,700. New AMC customers: 862 x 15% = about 129. 129 x AED 2,250 = AED 290,250.",
      },
      { t: "h3", text: "How the cases compare with the baseline" },
      {
        t: "ul",
        items: [
          "Baseline: 212 jobs, AED 74,200 one-off revenue, about 11 new contracts worth AED 24,750 over their lifetime.",
          "Low case: 351 jobs, AED 122,850 one-off revenue, about 28 new contracts worth AED 63,000.",
          "Base case: 626 jobs, AED 219,100 one-off revenue, about 75 new contracts worth AED 168,750.",
          "High case: 862 jobs, AED 301,700 one-off revenue, about 129 new contracts worth AED 290,250.",
        ],
      },
      {
        t: "p",
        text: "Two warnings belong beside these figures. First, they are outputs of a model, so they are only as good as the assumptions. Second, the high case would need more technicians. Six people in three vans cannot complete 108 website jobs in a hot month on top of their other work. In real planning, capacity sets a ceiling, and the sensible response to a full diary is to raise prices a little, favour AMC customers or hire, not to keep buying clicks.",
      },
      {
        t: "callout",
        title: "Which lever moved the most",
        text: "Going from the baseline to the base case, visits rise by 20% to 25%, the enquiry rate doubles and the booking rate rises by about a fifth. In this model the two conversion rates do most of the work. That is typical when a site starts with hidden contact buttons and slow replies, and it is why the plan spends its first months on repairs.",
      },
      {
        t: "img",
        photo: { id: "photo-1516201580490-33550d32de5c", alt: "Open planner, pens, calculator and an orange on a wooden table", by: "Iryna Tysiak", user: "20ira17" },
        caption: "Three cases are more honest than one forecast. Run the same sums with your own figures before you commit a budget.",
      },
      { t: "h2", text: "What could go wrong", id: "risks" },
      {
        t: "p",
        text: "A plan that lists no risks is a sales pitch. These are the ways this scenario could fall short, and what the company could do about each.",
      },
      {
        t: "ul",
        items: [
          "A mild or late summer: fewer searches mean fewer visits. The response is to hold ad spend back, not to bid harder for a smaller crowd.",
          "Rising click costs: competitors also advertise in the peak. If the cost per click doubles to AED 16 in our ad sum, spend becomes AED 9,600 for the same 13 jobs, and the campaign no longer pays. The capacity rule and tight area targeting limit the damage.",
          "Tracking gaps: if the office stops filling in the lead log during busy weeks, the data fails exactly when it matters most. Keep the log to five fields so it survives the peak.",
          "Slow replies in the evening: the booking rate falls back towards 45%. An evening rota or an answering service is cheaper than the jobs lost.",
          "Technicians who dislike selling: AMC take-up stays near 5%. Give them a two-sentence explanation and let the office do the follow-up, so nobody feels like a salesperson.",
          "Poor service on contract visits: retention drops below 2.5 years and the lifetime value shrinks. Marketing cannot fix this. Only reliable work can.",
          "A profile suspension or a run of bad reviews: map visibility falls. Having more than one manager on the profile and replying calmly to criticism reduces the risk.",
          "Overreach: the company grows enquiries faster than its vans can handle, and customers wait. A waiting customer is a future bad review.",
        ],
      },
      { t: "h2", text: "Cost and time assumptions", id: "cost-time" },
      {
        t: "p",
        text: "We do not quote prices in this example, because the cost of the work depends on who does it and how much already exists. What we can do is list the kinds of cost and time the company should expect, so nothing arrives as a surprise.",
      },
      {
        t: "ul",
        items: [
          "One-off setup: tracking, the lead log, four landing pages, area pages and the profile clean-up.",
          "Monthly management: ad management, reporting, page improvements and review replies.",
          "Ad spend: paid to the ad platform directly from an account the company owns. In our sum this was AED 4,800 in a peak month, and far less in cool months.",
          "Staff time: the office filling in the lead log, the evening rota, and technicians explaining the AMC.",
          "Tools: a shared WhatsApp inbox or simple CRM, and optionally a call tracking service.",
          "Delivery cost: fuel, parts and labour for the extra jobs and for the visits included in each AMC.",
        ],
      },
      {
        t: "p",
        text: "To check whether a plan is worth its cost, compare the total yearly cost with the margin, not the revenue, in each case. If the low case still covers the cost, the plan is fairly safe. If only the high case does, the plan is a gamble and should be made smaller.",
      },
      { t: "h2", text: "How to adapt this model to your own business", id: "adapt" },
      {
        t: "p",
        text: "The value of a worked example is in reusing it. Here is how to build your own version in an afternoon.",
      },
      {
        t: "ol",
        items: [
          "Write down your real monthly visits from analytics, split into busy and quiet months.",
          "Count last month's enquiries from every channel, even if you have to scroll back through WhatsApp to do it.",
          "Divide enquiries by visits to get your enquiry rate, and booked jobs by enquiries to get your booking rate.",
          "Work out your average job value from invoices, not from memory.",
          "Work out your contract value and how long contract customers really stay.",
          "Put those five numbers into the formula and check that the result is close to your actual revenue from the website.",
          "Change one number at a time to see which lever matters most for you.",
          "Write a low, base and high case, and note what each would demand of your team.",
        ],
      },
      { t: "h3", text: "If your business is not AC" },
      {
        t: "p",
        text: "The same structure fits most home services. A pest control company has a summer peak and a contract product. A cleaning company has weekly and monthly plans in place of an AMC. A plumber has less seasonality but the same emergency intent. Swap the season, the contract and the job value, and the formula still holds. Our industry page on [marketing for AC maintenance companies](/industries/ac-maintenance) covers the trade in more detail.",
      },
      {
        t: "p",
        text: "If you would like a second pair of eyes on your own numbers, you can [contact SEODXB](/contact) for a free review. We will tell you plainly which of the levers in this model looks weakest for your business and what we would do first. Remember that the figures on this page are an illustration of the method. Your own results will depend on your market, your team and the quality of your work.",
      },
    ],
    faqs: [
      {
        q: "Is this a real case study?",
        a: "No. It is an illustrative scenario with modelled numbers, not a client result. The company is fictional and every figure is an assumption chosen to make the arithmetic easy to follow. Use the structure and replace the numbers with your own.",
      },
      {
        q: "Why does the model focus on conversion before traffic?",
        a: "Because in this scenario the same ad spend loses money at a 2% enquiry rate and a 45% booking rate, and becomes worthwhile at 4% and 55%. Fixing pages, buttons and reply times makes every later visit worth more, whether it comes from search, the map results or ads.",
      },
      {
        q: "How do you track WhatsApp enquiries from a website?",
        a: "Record each tap on a WhatsApp button as an event in Google Analytics 4, use a pre-filled message that differs by page, and keep a lead log where the office notes the source and outcome of each chat. Clicks show interest, and the log shows what really happened.",
      },
      {
        q: "When should an AC company run Google Ads in Dubai?",
        a: "In this model, servicing ads run in spring when people prepare for the heat, repair ads run hardest in the summer peak, and contract ads run at a low level all year. Budgets follow demand and the team's capacity, and repair ads are limited when the diary is full.",
      },
      {
        q: "How is AMC lifetime value calculated?",
        a: "Multiply the yearly contract price by the average number of years a customer stays. In this example that is AED 900 x 2.5 years = AED 2,250 of revenue. To see profit, subtract the yearly cost of the visits included in the contract before multiplying.",
      },
      {
        q: "Can a small AC company use this plan without a big budget?",
        a: "Yes. The first steps cost little: visible call and WhatsApp buttons, a pre-filled message, a clean Google Business Profile, a review routine and a lead log. Paid ads and call tracking can be added later, once the log shows that enquiries are being turned into bookings.",
      },
    ],
  },
];
