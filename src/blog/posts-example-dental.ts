import type { Post } from "./types";

const D = "2026-11-12";

export const EXAMPLE_DENTAL_POSTS: Post[] = [
  {
    slug: "worked-example-dental-clinic-local-seo-dubai",
    title: "Worked Example: A 90-Day Local SEO Plan for a Two-Branch Dental Clinic in Dubai",
    seoTitle: "Worked Example: Dental Clinic Local SEO in Dubai",
    description:
      "An illustrative 90-day local SEO plan for a two-branch Dubai dental clinic, with modelled numbers you can replace with your own.",
    category: "Worked Examples",
    date: D,
    updated: D,
    answer:
      "This worked example is an illustrative scenario, not a client result. It shows how a two-branch dental clinic in Dubai could plan 90 days of local SEO: fix both Google Business Profiles, build service and location pages, set up a steady review routine, track calls and WhatsApp enquiries, and run a small Google Ads test. Every figure is an assumption inside a simple model (enquiries x booking rate x average treatment value), so you can swap in your own numbers and see what the plan could be worth to your clinic.",
    keywords: [
      "dental clinic local seo dubai",
      "local seo for dentists dubai",
      "dental clinic google business profile",
      "dental marketing plan dubai",
      "dentist seo worked example",
    ],
    takeaways: [
      "This is a model with assumed numbers, built so you can replace each figure with your own.",
      "Tracking calls and WhatsApp comes first, because you cannot judge the plan without it.",
      "Each branch needs its own Google Business Profile and its own location page.",
      "Service pages should match the treatments patients search for, one treatment per page.",
      "A review routine run by the front desk matters more than any one-off review push.",
      "Judge the plan on booked appointments and their value, not on rankings alone.",
    ],
    body: [
      {
        t: "callout",
        title: "Read this first: an illustrative scenario",
        text: "This article is an illustrative scenario. It is not a client result, and the clinic in it does not exist. Every number is an assumption we chose to make the arithmetic easy to follow. The point is the method: how to diagnose, plan, measure and model local SEO for a dental clinic. Replace our assumptions with your own figures before you draw any conclusion about your business.",
      },
      {
        t: "p",
        text: "Most articles about dental marketing give you a list of tips. A list is useful, but it does not show how the pieces fit together, what order to do them in, or how to tell whether the work is paying back. A worked example does. In this guide we take one imaginary clinic and walk through a full 90-day plan, from the first audit to a simple model of what the plan could return.",
      },
      {
        t: "p",
        text: "We call the business our example clinic. It has two branches in Dubai, a general dentistry team, and a few higher-value treatments such as clear aligners, implants and whitening. It is a composite of situations that are common among clinics in the UAE. If you run a clinic with one branch or five, the same method applies. You only change the numbers.",
      },
      {
        t: "p",
        text: "The plan covers six workstreams: tracking, Google Business Profile, service pages, location pages, reviews and a small Google Ads test. If you want the shorter version of the principles behind it, our guide to [dental clinic SEO in Dubai](/blog/dental-clinic-seo-dubai) and our page on [marketing for dental clinics](/industries/dental-clinics) cover them. This article goes further and shows the working.",
      },
      { t: "h2", text: "The starting situation and our assumptions", id: "starting-situation" },
      {
        t: "p",
        text: "A model is only as honest as its assumptions, so we state them at the start. You may disagree with some of them. That is fine. The model is built so that you can change any line and follow the effect through to the end.",
      },
      { t: "h3", text: "The clinic" },
      {
        t: "ul",
        items: [
          "Two branches in Dubai. We assume one sits in an established residential community and the other in a newer area with many young families.",
          "A team of general dentists, an orthodontist who visits both branches, and a hygienist at each site.",
          "A website that is a few years old, with one page listing all treatments and one contact page showing both addresses.",
          "Two Google Business Profiles. One was set up carefully. The other was created quickly when the second branch opened and has had little attention since.",
          "A front desk that answers calls and WhatsApp messages, but does not record where each enquiry came from.",
        ],
      },
      { t: "h3", text: "The numbers we assume at the start" },
      {
        t: "p",
        text: "We assume the clinic receives 120 new-patient enquiries a month from all online sources combined. In this model, 70 arrive as phone calls, 35 as WhatsApp messages and 15 through the website form. We assume the front desk turns 40 percent of new-patient enquiries into booked first appointments. That gives 120 x 0.40 = 48 new patient bookings a month.",
      },
      {
        t: "p",
        text: "We also need a value per new patient. Dental clinics see a wide range, from a single check-up to a full course of aligners. For this model we assume an average first-year treatment value of AED 1,500 per new patient. That is a blended figure across check-ups, fillings, cleaning and the occasional larger treatment. Your own figure may be higher or lower. The model works the same way with any value.",
      },
      {
        t: "p",
        text: "With those assumptions, the starting position is 48 new patients x AED 1,500 = AED 72,000 of first-year treatment value from each month of online enquiries. We are not saying this is typical. We are saying that if these were your numbers, this is how the arithmetic would run.",
      },
      {
        t: "callout",
        title: "Why first-year value and not lifetime value",
        text: "Lifetime value is the more complete measure, because a family that stays for ten years is worth far more than its first visit. It is also much harder to estimate honestly. First-year value is a cautious choice. If the plan looks worthwhile on first-year value alone, it will look better once returning patients are counted.",
      },
      {
        t: "img",
        photo: { id: "photo-1667133295315-820bb6481730", alt: "Dentist examining a smiling patient in a dental chair", by: "Filip Rankovic Grobgaard", user: "filipgrobgaard" },
        caption: "The example clinic is fictional, but the situation is common: good dentistry, and marketing that nobody has measured.",
      },
      { t: "h2", text: "Diagnosis: what an audit of this clinic would find", id: "diagnosis" },
      {
        t: "p",
        text: "Before any plan, we would audit four things: how patients search, how the clinic appears when they do, what the website offers when they arrive, and whether anything is measured. Here is what an audit of our example clinic would be likely to show, given the starting situation we assumed.",
      },
      { t: "h3", text: "How patients search for a dentist" },
      {
        t: "p",
        text: "People looking for a dentist tend to search in three ways. The first is by place: dentist near me, or dentist plus the name of their community. The second is by treatment: teeth whitening, braces, dental implants, emergency dentist. The third is by name, once someone has recommended a clinic. Place and treatment searches are where new patients come from. Name searches mostly confirm a decision that has already been made.",
      },
      {
        t: "p",
        text: "For place searches, Google usually shows a map with three businesses above the normal results. Those three places take a large share of the attention. A clinic that does not appear there for its own neighbourhood is invisible to many nearby patients, even if its website is good.",
      },
      { t: "h3", text: "The two Google Business Profiles" },
      {
        t: "p",
        text: "In our scenario, the first branch has a complete profile with a fair number of reviews. The second branch has a profile with the wrong primary category, old opening hours, a handful of photos and very few reviews. Both profiles link to the website home page, not to a page about that branch. Neither lists individual treatments as services.",
      },
      { t: "h3", text: "The website" },
      {
        t: "ul",
        items: [
          "One treatments page tries to cover everything, so no page is a strong match for a search such as dental implants in Dubai.",
          "There is no page for either branch. Someone searching for a dentist in the second community lands on a general home page.",
          "The phone number is an image in the header on mobile, so it cannot be tapped to call.",
          "The WhatsApp link is in the footer only.",
          "Dentist profiles show names and photos but not qualifications, licences or areas of focus.",
        ],
      },
      { t: "h3", text: "Measurement" },
      {
        t: "p",
        text: "This is the most important finding. The clinic has Google Analytics installed, but no events are recorded for calls, WhatsApp clicks or form submissions. The front desk does not ask new patients how they found the clinic. So when the owner asks which marketing is working, nobody can answer. The 120 enquiries in our model are an estimate the clinic would have to make from memory and phone records.",
      },
      {
        t: "callout",
        title: "The pattern behind the findings",
        text: "None of these problems is unusual, and none is about the quality of the dentistry. They are gaps between how patients search and how the clinic presents itself. Local SEO for a clinic is largely the work of closing those gaps, one branch and one treatment at a time.",
      },
      { t: "h2", text: "Goals and the KPI model", id: "goals-kpi-model" },
      {
        t: "p",
        text: "A plan needs a small number of goals that connect to money. Rankings and traffic are useful signals, but they are not the goal. For a clinic, the goal is booked appointments from new patients at a cost that makes sense.",
      },
      { t: "h3", text: "The chain we measure" },
      {
        t: "ol",
        items: [
          "**Visibility:** how often each branch appears in map results and normal results for place and treatment searches.",
          "**Actions:** calls, WhatsApp clicks, direction requests and form submissions that follow.",
          "**Enquiries:** actions that turn out to be real new-patient enquiries, not suppliers, existing patients or wrong numbers.",
          "**Bookings:** enquiries that become a booked first appointment.",
          "**Value:** the treatment value those new patients bring in their first year.",
        ],
      },
      {
        t: "p",
        text: "Each step loses some people. The model simply multiplies through the chain. In our starting position: 120 enquiries x 40 percent booking rate x AED 1,500 = AED 72,000. There are only three ways to improve that figure. You can raise the number of enquiries, raise the booking rate, or raise the average value. Local SEO mainly works on the first. Better enquiry handling works on the second. Stronger service pages for higher-value treatments can help the third.",
      },
      { t: "h3", text: "The targets in this model" },
      {
        t: "p",
        text: "For the 90 days, we set three targets for our example clinic. First, every enquiry type is tracked by the end of week two. Second, new-patient enquiries from organic search and maps grow by the end of month three, with a base case of 25 percent growth on the starting figure. Third, the booking rate rises from 40 to 44 percent through faster replies and a simple script. These are targets inside a model, chosen to be plausible, and they are not a forecast for any real clinic.",
      },
      {
        t: "p",
        text: "We deliberately did not set a ranking target such as first place for dentist in Dubai. A clinic cannot control exactly where it appears, and map results change with the searcher's location. A clinic ranks well for someone two streets away and poorly for someone across the city. That is normal and it is how local search is meant to work.",
      },
      { t: "h2", text: "The 90-day plan at a glance", id: "plan-at-a-glance" },
      {
        t: "p",
        text: "The order matters. Tracking comes first, because every later decision depends on it. Profile fixes come next, because they are quick and affect the map results directly. Pages follow, because they take longer to write and longer to be picked up by search engines. The review routine starts early and never stops. The ads test waits until tracking is proven.",
      },
      { t: "h3", text: "Month 1: foundations" },
      {
        t: "ul",
        items: [
          "Weeks 1 to 2: set up and test tracking for calls, WhatsApp and forms. Start the front desk log.",
          "Weeks 1 to 2: correct both Google Business Profiles, including categories, hours, services and links.",
          "Weeks 2 to 4: fix the mobile basics on the website, such as tap-to-call and a visible WhatsApp button.",
          "Weeks 3 to 4: publish a location page for each branch and launch the review routine.",
        ],
      },
      { t: "h3", text: "Month 2: pages and proof" },
      {
        t: "ul",
        items: [
          "Publish service pages for the priority treatments, one treatment per page.",
          "Add dentist profiles with qualifications and areas of focus.",
          "Add structured data for the clinic, each branch and the FAQs.",
          "Clean up directory listings so the name, address and phone number match everywhere.",
        ],
      },
      { t: "h3", text: "Month 3: test and review" },
      {
        t: "ul",
        items: [
          "Run a small Google Ads test on two treatments, with approved wording.",
          "Add the next group of service pages based on what the first month of data shows.",
          "Review the numbers against the model and decide what to continue, change or stop.",
        ],
      },
      {
        t: "img",
        photo: { id: "photo-1633526543814-9718c8922b7a", alt: "Calendar page with red push pins marking several dates", by: "Towfiqu barbhuiya", user: "towfiqu999999" },
        caption: "Ninety days is long enough to fix the foundations and see early movement, but not long enough to judge competitive searches.",
      },
      { t: "h2", text: "Workstream 1: tracking calls, WhatsApp and forms", id: "tracking" },
      {
        t: "p",
        text: "If you do only one thing from this article, do this one. Without tracking, a clinic cannot tell a good month from a lucky one. In the UAE, a large share of enquiries arrive by phone and WhatsApp, and a website that counts only form submissions will miss most of them.",
      },
      { t: "h3", text: "What to record" },
      {
        t: "ul",
        items: [
          "A tap on the phone number on the website, recorded as a key event in Google Analytics 4.",
          "A tap on the WhatsApp button, recorded the same way.",
          "A successful form submission.",
          "Calls, messages and direction requests from each Google Business Profile, which the profile reports itself.",
        ],
      },
      {
        t: "p",
        text: "Links from each Google Business Profile to the website should carry a tracking tag, so visits from the map can be told apart from visits from normal results. This is a small detail that makes the later analysis much clearer, because it shows which branch profile sent each visitor.",
      },
      { t: "h3", text: "The front desk log" },
      {
        t: "p",
        text: "Website tracking shows that someone tapped to call. It does not show whether they booked. For that, the front desk keeps a simple log of every new-patient enquiry: date, branch, how they contacted the clinic, how they say they found it, the treatment they asked about, and whether they booked. A shared spreadsheet is enough. If the clinic's practice software can hold a source field, use that.",
      },
      {
        t: "p",
        text: "The question to ask is simple and friendly: may I ask how you found us? The answers are not perfect, because people forget or say Google for everything. Combined with the tracking data, though, they give a clear enough picture to make decisions. Patient details should be handled under the clinic's usual privacy rules, and the log needs only the source and outcome, not clinical information.",
      },
      {
        t: "callout",
        title: "A two-week baseline is worth the wait",
        text: "Once tracking is live, resist changing everything at once. Two weeks of clean numbers before the larger changes gives you a baseline to compare against. In this model the baseline confirms, or corrects, the assumed 120 enquiries a month. If your true figure turns out to be 80 or 200, update the model before going further.",
      },
      {
        t: "p",
        text: "For more detail on the method, see our guide on how to [track WhatsApp, call and form leads](/blog/track-whatsapp-call-form-leads-uae), and our service page on [lead tracking and attribution](/services/lead-tracking-and-attribution).",
      },
      {
        t: "img",
        photo: { id: "photo-1623685463648-1fa0d86f6b73", alt: "Man in glasses talking on the phone while working on a laptop at home", by: "May Gauthier", user: "maygauthier" },
        caption: "Most dental enquiries arrive by phone or WhatsApp. If those are not counted, the clinic is judging its marketing on a small part of the picture.",
      },
      { t: "h2", text: "Workstream 2: Google Business Profile for both branches", id: "google-business-profile" },
      {
        t: "p",
        text: "The profile is what patients see in the map results, often before they see the website. Each branch needs its own profile, and each profile needs to be complete, accurate and active. For our example clinic, the second branch has the most to gain, because its profile starts in the weakest position.",
      },
      { t: "h3", text: "Ownership and accuracy" },
      {
        t: "p",
        text: "The first job is to confirm that the clinic controls both profiles through an account it owns, not through a former employee or a past supplier. Then every field is checked against reality: the exact name on the sign, the address as it appears on the building, the phone number for that branch, and opening hours including Fridays, Ramadan hours and public holidays.",
      },
      { t: "h3", text: "Categories and services" },
      {
        t: "p",
        text: "The primary category has a strong effect on which searches a profile can appear for. A general clinic would normally choose the dentist or dental clinic category as primary, and add secondary categories only for services it really provides, such as orthodontist or cosmetic dentist. In our scenario the second branch was listed under a broad medical category, which would hold it back for dental searches.",
      },
      {
        t: "p",
        text: "Next, each treatment is added as a service with a short plain description. This helps the profile match treatment searches, and it tells patients at a glance what the branch offers. The list should match the service pages on the website, using the same names.",
      },
      { t: "h3", text: "Photos, posts and questions" },
      {
        t: "ul",
        items: [
          "Real photos of the entrance, reception, treatment rooms and team at each branch, so patients recognise the place when they arrive.",
          "A short post every week or two: a new dentist, extended hours, a seasonal reminder about check-ups.",
          "Answers to common questions, such as parking, insurance accepted and whether children are seen.",
          "A link from each profile to that branch's own location page, not the home page.",
        ],
      },
      {
        t: "p",
        text: "Patient photos need care. Any image of a patient, including before and after pictures, needs the patient's consent, and healthcare advertising in the UAE is regulated. Check the current rules with the relevant health authority before publishing clinical images or claims. Our page on [Google Business Profile management](/services/google-business-profile-management) explains the ongoing work, and our [setup checklist for Dubai](/blog/google-business-profile-setup-checklist-dubai) lists every field.",
      },
      {
        t: "img",
        photo: { id: "photo-1509576931792-214960705f8a", alt: "Two hands zooming in on a street map on a smartphone screen", by: "Sebastian Hietsch", user: "s_hietsch" },
        caption: "Place searches are answered on a map. Each branch competes for the patients closest to it.",
      },
      { t: "h2", text: "Workstream 3: service pages that match how patients search", id: "service-pages" },
      {
        t: "p",
        text: "A single page that lists twenty treatments cannot answer a specific search well. A patient who searches for dental implants wants a page about implants: who they suit, how the treatment works, how long it takes, what affects the cost and who will carry it out. Search engines want the same thing, because their job is to send people to the most useful page.",
      },
      { t: "h3", text: "Choosing which pages to write first" },
      {
        t: "p",
        text: "Our example clinic cannot write every page in one month, so we rank the treatments. We score each one on three questions. Do patients search for it by name? Is it valuable to the clinic? Does the clinic have real strength in it? Treatments that score well on all three go first.",
      },
      {
        t: "p",
        text: "In this scenario the first group is general check-up and cleaning, teeth whitening, clear aligners and braces, dental implants, emergency dental care and children's dentistry. The second group, written in month three, covers root canal treatment, veneers, crowns and gum treatment.",
      },
      { t: "h3", text: "What each service page contains" },
      {
        t: "ul",
        items: [
          "A short, direct answer at the top: what the treatment is and who it is for.",
          "How the treatment works at this clinic, step by step, in plain language.",
          "How long it takes and how many visits to expect.",
          "What affects the cost, with a starting price or range if the clinic is comfortable publishing one.",
          "Which dentists provide it, with their qualifications.",
          "Which branch or branches offer it.",
          "Questions patients often ask, answered honestly, including risks and aftercare.",
          "A clear way to book: call, WhatsApp or form.",
        ],
      },
      {
        t: "p",
        text: "Medical content is held to a higher standard than most content, by readers and by search engines. Each page should be reviewed by a dentist, should name that dentist, and should avoid promises about results. Words such as painless or permanent invite trouble. Plain, accurate description builds more trust than big claims, and it stays within advertising rules more easily.",
      },
      { t: "h3", text: "English and Arabic" },
      {
        t: "p",
        text: "Many patients in Dubai search in English, and many search in Arabic. If the clinic serves Arabic-speaking patients, Arabic versions of the main pages are worth planning, written by a native speaker and built with the correct technical setup. In a 90-day plan we would start with English and add Arabic for the two location pages and the top treatments. Our [Arabic SEO](/services/arabic-seo-services) page covers how the two languages should be structured.",
      },
      { t: "h2", text: "Workstream 4: a location page for each branch", id: "location-pages" },
      {
        t: "p",
        text: "The location page is the website's partner to the Google Business Profile. It tells search engines, in detail, that this branch exists at this address and serves this area. It also answers the practical questions a nearby patient has before a first visit.",
      },
      {
        t: "ul",
        items: [
          "The branch name, full address, phone number and WhatsApp link, matching the profile exactly.",
          "Opening hours, including evenings and weekends.",
          "A map, directions from main roads, the nearest Metro station where relevant, and parking details.",
          "The dentists who work at that branch and the treatments available there.",
          "Photos of that branch, inside and out.",
          "The communities it serves, described naturally in a sentence or two.",
          "Reviews or ratings shown in line with platform rules.",
          "Insurance plans accepted, if the clinic wants to publish them.",
        ],
      },
      {
        t: "p",
        text: "The two location pages must not be copies of each other with the address changed. Each should describe its own branch. A patient reading the page for the newer branch should learn something specific, such as the play corner for children or the late opening on weekdays.",
      },
      {
        t: "p",
        text: "Behind the page, structured data describes the branch to search engines in a format they read directly: the type of business, address, phone, hours and location. This does not replace good content, but it removes doubt about the facts. The broader method is described on our [local SEO](/services/local-seo-services) page.",
      },
      { t: "h3", text: "Consistent details across the web" },
      {
        t: "p",
        text: "Clinics are listed in many places: health directories, insurance provider lists, map apps and business directories. When the name, address or phone number differs between them, search engines have less confidence in which details are correct. In month two, we would list every place the clinic appears, correct the details, and remove or merge duplicates. It is unglamorous work, and it matters most for the branch that opened later.",
      },
      { t: "h2", text: "Workstream 5: a review routine the front desk can keep up", id: "reviews" },
      {
        t: "p",
        text: "Reviews influence both where a clinic appears in map results and whether a patient chooses it. Patients read them closely, because choosing a dentist involves trust. The aim is a steady flow of honest reviews at both branches, not a sudden burst.",
      },
      { t: "h3", text: "The routine" },
      {
        t: "ol",
        items: [
          "At the end of a visit that went well, the dentist or receptionist asks in person whether the patient would be willing to leave a review.",
          "If the patient agrees, the front desk sends a short WhatsApp message the same day with a direct link to that branch's review form.",
          "Every review receives a reply within a few working days, positive or negative.",
          "Once a month, the practice manager reads the reviews for both branches and notes any pattern, good or bad.",
        ],
      },
      {
        t: "p",
        text: "A few rules keep this safe. Never offer discounts or gifts for reviews, never ask staff or friends to write them, and never ask only the patients you expect to be positive while blocking the rest. These practices break platform rules and can lead to reviews being removed. Replies must never reveal anything about a patient's treatment, even when the patient mentioned it first. A polite general reply and an offer to talk by phone is the right response to a complaint.",
      },
      { t: "h3", text: "Modelling the review routine" },
      {
        t: "p",
        text: "Here too we can show the arithmetic. Assume each branch sees 300 patient visits a month, the team asks one patient in three, and one in five of those asked leaves a review. That is 300 x 1/3 x 1/5 = 20 new reviews per branch each month. Over three months the weaker branch would gain about 60 reviews. If your team asks fewer patients, or fewer follow through, the figure falls in proportion. The lesson of the model is that asking consistently is the lever the clinic controls.",
      },
      {
        t: "img",
        photo: { id: "photo-1633613286991-611fe299c4be", alt: "Row of five yellow stars on a pink and blue background", by: "Towfiqu barbhuiya", user: "towfiqu999999" },
        caption: "A steady flow of honest reviews at each branch does more than a one-off campaign.",
      },
      { t: "h2", text: "Workstream 6: a small Google Ads test", id: "google-ads-test" },
      {
        t: "p",
        text: "SEO takes time to show its full effect. A small ads test in month three serves a different purpose. It tells the clinic, within weeks, which treatments and messages bring enquiries, and what an enquiry costs when it is bought directly. Those lessons then guide which service pages to strengthen.",
      },
      { t: "h3", text: "How the test is set up" },
      {
        t: "ul",
        items: [
          "Two treatments only, chosen from the first group of service pages. In this scenario: clear aligners and emergency dental care.",
          "Search campaigns limited to the areas around each branch.",
          "Ads that send people to the matching service page, not the home page.",
          "Calls, WhatsApp clicks and forms all counted as conversions, using the tracking from workstream 1.",
          "A fixed test budget agreed in advance, with a review after four weeks.",
        ],
      },
      {
        t: "p",
        text: "Healthcare advertising in the UAE generally needs approval from the relevant health authority before it runs, and the approved wording must be used. Build this into the timeline. It is one reason the ads test sits in month three and not in week one. Confirm the current process with the authority that licenses your clinic.",
      },
      { t: "h3", text: "The arithmetic of the test" },
      {
        t: "p",
        text: "Assume a test budget of AED 6,000 for the month and an average cost per click of AED 12. That buys 6,000 / 12 = 500 clicks. Assume 8 percent of visitors make an enquiry, which gives 500 x 0.08 = 40 enquiries, at a cost of 6,000 / 40 = AED 150 each. Assume 35 percent of those book, slightly below the organic rate because ad enquiries tend to be less committed. That is 40 x 0.35 = 14 new patients, at a cost of 6,000 / 14, or about AED 429 per new patient.",
      },
      {
        t: "p",
        text: "Is AED 429 a good price for a new patient? It depends on the treatment. Against a blended first-year value of AED 1,500, it leaves room. For an aligner patient it would be a small share of the treatment value. For a single emergency visit it might not pay back unless the patient returns. Click costs and conversion rates vary a great deal, so treat every figure here as a placeholder. The reason to run a test is to replace assumptions like these with your own data. Our [Google Ads management](/services/google-ads-management) page explains how a test like this is structured.",
      },
      { t: "h2", text: "The modelled outcome: low, base and high cases", id: "modelled-outcome" },
      {
        t: "p",
        text: "Now we bring the workstreams together. Because nobody can know in advance how search engines and patients will respond, we model three cases. The low case assumes slow progress. The base case assumes the plan works roughly as intended. The high case assumes the weaker branch responds strongly. None of these is a promise. They are a way to think about the range.",
      },
      { t: "h3", text: "Starting position" },
      {
        t: "p",
        text: "120 enquiries a month x 40 percent booking rate = 48 new patients. 48 x AED 1,500 = AED 72,000 of first-year treatment value per month of enquiries.",
      },
      { t: "h3", text: "Low case" },
      {
        t: "p",
        text: "We assume organic and map enquiries grow by 10 percent by month three, and the booking rate rises by one point to 41 percent. Enquiries: 120 x 1.10 = 132. New patients: 132 x 0.41 = about 54. Value: 54 x 1,500 = AED 81,000. The gain over the starting position is about AED 9,000 a month. In this case the clinic has mainly fixed its foundations, and the larger effect of the new pages has not yet arrived.",
      },
      { t: "h3", text: "Base case" },
      {
        t: "p",
        text: "We assume enquiries grow by 25 percent and the booking rate rises to 44 percent. Enquiries: 120 x 1.25 = 150. New patients: 150 x 0.44 = 66. Value: 66 x 1,500 = AED 99,000. The gain is AED 27,000 a month, or 18 more new patients than at the start.",
      },
      { t: "h3", text: "High case" },
      {
        t: "p",
        text: "We assume enquiries grow by 45 percent, mostly from the second branch catching up, and the booking rate reaches 46 percent. Enquiries: 120 x 1.45 = 174. New patients: 174 x 0.46 = about 80. Value: 80 x 1,500 = AED 120,000. The gain is AED 48,000 a month.",
      },
      { t: "h3", text: "Reading the three cases" },
      {
        t: "p",
        text: "Two points stand out. First, the booking rate matters as much as the enquiries. In the base case, if the booking rate had stayed at 40 percent, the result would be 150 x 0.40 = 60 new patients, not 66. Six extra patients a month come purely from answering faster and following up, with no marketing spend at all.",
      },
      {
        t: "p",
        text: "Second, the ads test sits on top of these figures and is not included in them. In our arithmetic it added 14 new patients in its test month at about AED 429 each. Whether to continue it is a separate decision, made on its own numbers.",
      },
      {
        t: "callout",
        title: "What the model cannot tell you",
        text: "A model shows what follows from its assumptions. It cannot tell you which case will happen. Local competition, the age of your website, how many reviews nearby clinics have, and how well your team answers the phone all affect the result. Use the model to decide whether the plan is worth doing and what to measure, and then let your own tracking tell you which case you are in.",
      },
      { t: "h2", text: "Cost and time assumptions", id: "cost-and-time" },
      {
        t: "p",
        text: "A plan has to be weighed against what it costs. We do not quote prices here, because the cost depends on the size of the website, how much content is needed and who does the work. We can describe the types of cost and the time the clinic itself should expect to give.",
      },
      { t: "h3", text: "Types of cost" },
      {
        t: "ul",
        items: [
          "**Set-up work:** tracking, profile corrections, website fixes, location pages and the first service pages. This is mostly a one-time effort in months one and two.",
          "**Ongoing work:** new pages, profile posts, review replies, directory upkeep and monthly reporting.",
          "**Ad spend:** paid directly to Google, separate from any management fee. In this model the test budget was AED 6,000.",
          "**Tools:** call tracking, if the clinic chooses a service that uses tracking numbers, and any review or booking software.",
          "**Approvals:** any fees and time for advertising approval from the health authority.",
        ],
      },
      { t: "h3", text: "Time from the clinic" },
      {
        t: "ul",
        items: [
          "A dentist's time to review each service page for accuracy. Assume 20 to 30 minutes a page.",
          "The practice manager's time for a short weekly check-in and a monthly review.",
          "The front desk's time to keep the enquiry log and send review links. A few minutes per patient, built into the normal routine.",
          "An hour or two for photos at each branch.",
        ],
      },
      { t: "h3", text: "A simple payback check" },
      {
        t: "p",
        text: "To judge the plan, compare the monthly gain in each case with the monthly cost of the work. Suppose, purely for the arithmetic, that the total monthly cost of the work were AED 10,000. In the low case the gain of AED 9,000 would not quite cover it in month three, although the gain should continue to build after the 90 days. In the base case the gain of AED 27,000 would cover it nearly three times. Put your own quoted cost and your own treatment value into the same sum. If the plan only pays back in the high case, it is too expensive or the clinic's value per patient is too low for this approach, and it is better to know that before starting.",
      },
      {
        t: "p",
        text: "Remember that treatment value is revenue, not profit. A stricter version of the check uses the margin on that revenue. If your margin on new-patient treatment is 50 percent, halve the gains before comparing them with the cost.",
      },
      { t: "h2", text: "What could go wrong, and how to reduce the risk", id: "risks" },
      {
        t: "p",
        text: "Plans on paper are tidy. Real projects are not. These are the problems most likely to affect a plan like this, and what we would do about each.",
      },
      { t: "h3", text: "The tracking is incomplete or ignored" },
      {
        t: "p",
        text: "If the front desk stops filling in the log after two weeks, the clinic is back to guessing. Reduce the risk by keeping the log very short, explaining to the team why it matters, and reviewing it together every week for the first month.",
      },
      { t: "h3", text: "A profile is suspended or edited by someone else" },
      {
        t: "p",
        text: "Profiles can be suspended if details look inconsistent, and members of the public can suggest edits. Keep evidence of the business address ready, change details carefully and not all at once, and check both profiles weekly for unexpected edits.",
      },
      { t: "h3", text: "Content stalls waiting for review" },
      {
        t: "p",
        text: "Dentists are busy, and page reviews slip. Agree a fixed slot each week for reviews, send pages in small batches, and keep the review focused on accuracy, not style.",
      },
      { t: "h3", text: "More enquiries, same number of bookings" },
      {
        t: "p",
        text: "If the phone is not answered at lunchtime or WhatsApp messages wait until the next morning, extra enquiries are wasted. The enquiry log will show this quickly. Agree a reply time, cover the busy periods, and call back every missed call the same day.",
      },
      { t: "h3", text: "Results arrive later than the model" },
      {
        t: "p",
        text: "New pages can take weeks to be found and longer to rank, especially for competitive treatments. The low case exists for this reason. Judge the first 90 days mainly on whether the foundations are in place and the early signals are moving in the right direction: profile views, direction requests and calls from each branch.",
      },
      { t: "h3", text: "Advertising rules" },
      {
        t: "p",
        text: "Running an ad without the required approval, or using wording that differs from what was approved, can lead to penalties. Never treat this as a detail to sort out later. Confirm requirements with the relevant authority before any paid campaign.",
      },
      {
        t: "img",
        photo: { id: "photo-1631217873436-b0fa88e71f0a", alt: "Doctor showing a tablet to an older couple during a consultation", by: "National Cancer Institute", user: "nci" },
        caption: "Marketing can bring the enquiry. How the clinic answers, explains and follows up decides whether it becomes a patient.",
      },
      { t: "h2", text: "How to adapt this example to your own clinic", id: "adapt-to-your-clinic" },
      {
        t: "p",
        text: "The value of a worked example is that you can rerun it. Here is how to make the model yours in an afternoon.",
      },
      {
        t: "ol",
        items: [
          "**Count your enquiries.** Use phone records, WhatsApp chats and form emails for the last full month. Count only new patients.",
          "**Find your booking rate.** Of those enquiries, how many booked a first appointment? If you do not know, that tells you tracking is your first job.",
          "**Estimate your first-year value.** Take new patients from a month about a year ago and add up what they spent in the following twelve months. Divide by the number of patients.",
          "**Multiply.** Enquiries x booking rate x value gives your starting position.",
          "**Run three cases.** Choose a cautious, a middle and an optimistic growth figure for enquiries and booking rate, as we did.",
          "**Compare with cost.** Set the monthly gain in each case against the monthly cost of the work, using margin if you can.",
        ],
      },
      { t: "h3", text: "If you have one branch" },
      {
        t: "p",
        text: "The plan is simpler. You have one profile and one location page, and more of the effort can go into service pages and reviews. The model is unchanged.",
      },
      { t: "h3", text: "If you have several branches" },
      {
        t: "p",
        text: "Treat each branch as its own small project with its own profile, page, review routine and numbers. Compare the branches with each other. The weakest one often has the most to gain, as in our example.",
      },
      { t: "h3", text: "If you focus on one specialty" },
      {
        t: "p",
        text: "An orthodontic or implant clinic has fewer treatments and a higher value per patient. Fewer, deeper pages make sense, with more detail on the treatment journey, and a higher cost per new patient may still pay back. Patients for these treatments often travel further, so the area you target can be wider.",
      },
      { t: "h2", text: "What happens after day 90", id: "after-day-90" },
      {
        t: "p",
        text: "Ninety days builds the base. The work that follows is steadier and more selective, guided by the data the clinic now has.",
      },
      {
        t: "ul",
        items: [
          "Add service pages for the remaining treatments, starting with those the enquiry log shows patients ask about.",
          "Improve the pages that receive visits but few enquiries.",
          "Keep the review routine running at both branches.",
          "Add Arabic versions of the pages that perform best in English.",
          "Publish helpful articles that answer patient questions, such as how to choose between aligners and braces.",
          "Check how AI assistants describe the clinic, since more patients now ask them for recommendations.",
          "Decide each quarter whether to continue, expand or stop the ads, based on cost per new patient.",
        ],
      },
      {
        t: "p",
        text: "The monthly review should always return to the same chain: visibility, actions, enquiries, bookings, value. If one step weakens, that is where the next month's effort goes. A plan like this is never finished, but it does become routine.",
      },
      {
        t: "p",
        text: "If you would like to run this model with your own figures and see what a first 90 days could look like for your clinic, you can [book a free consultation](/contact). Bring your enquiry numbers if you have them. If you do not, that is the first thing we would help you fix.",
      },
    ],
    faqs: [
      {
        q: "Is this a real case study?",
        a: "No. It is an illustrative scenario with modelled numbers, and the clinic does not exist. We wrote it to show the method and the arithmetic clearly. Use it as a template and replace every assumption with your own figures.",
      },
      {
        q: "How long does local SEO take to work for a dental clinic?",
        a: "Corrections to a Google Business Profile and mobile fixes on the website can show an effect within weeks. New service and location pages usually take longer, often several months for competitive treatments. That is why the model includes a low case, and why the first 90 days should be judged mainly on foundations and early signals.",
      },
      {
        q: "Does each branch need its own Google Business Profile?",
        a: "Yes. Each physical branch that sees patients should have its own profile with its own address, phone number, hours and photos, linked to its own location page on the website. Patients search by area, and each branch competes for the people nearest to it.",
      },
      {
        q: "Should a clinic run Google Ads or focus on SEO?",
        a: "They do different jobs. SEO builds visibility that lasts but takes time. Ads bring enquiries quickly and stop when the budget stops. A small ads test alongside SEO is a sensible way to learn which treatments and messages bring enquiries. In the UAE, check advertising approval requirements with your health authority before running any ads.",
      },
      {
        q: "How should a clinic ask patients for reviews?",
        a: "Ask in person after a visit that went well, then send a direct link by WhatsApp the same day. Ask consistently, do not offer rewards, and reply to every review without mentioning any treatment details. A steady routine at each branch is more effective and safer than a one-off campaign.",
      },
      {
        q: "What if my numbers are very different from the example?",
        a: "That is expected. The model is three numbers multiplied together: enquiries, booking rate and average value. Put in your own figures, run a cautious, a middle and an optimistic case, and compare the gain with the cost of the work. If the plan only pays back in the optimistic case, it needs to be changed before you start.",
      },
    ],
  },
];
