import type { Block, Post } from "./types";

const D = "2026-11-12";
const p = (text: string): Block => ({ t: "p", text });
const h2 = (text: string, id: string): Block => ({ t: "h2", text, id });
const h3 = (text: string): Block => ({ t: "h3", text });
const ul = (...items: string[]): Block => ({ t: "ul", items });
const ol = (...items: string[]): Block => ({ t: "ol", items });
const note = (title: string, text: string): Block => ({ t: "callout", title, text });

export const EXAMPLE_AIVIS_POSTS: Post[] = [
  {
    slug: "worked-example-ai-search-visibility-business-setup-consultant-dubai",
    title: "Worked Example: Getting a Dubai Business Setup Consultancy Cited in AI Search",
    seoTitle: "Worked Example: AI Search for Business Setup",
    description:
      "An illustrative 12-month plan for a Dubai business setup consultancy to be found and cited by ChatGPT, Gemini and Perplexity, with modelled numbers.",
    category: "Worked Examples",
    date: D,
    updated: D,
    answer:
      "This is an illustrative scenario with modelled numbers, not a client result. It shows how a Dubai business setup consultancy that AI assistants never mention could plan 12 months of generative engine optimisation: open the site to AI crawlers, fix entity consistency, publish answers to real founder questions, earn third-party mentions, and run the same 40 test prompts every month. In the base case of the model, the consultancy moves from being mentioned in 1 of 40 answers to about 11 of 40. Nobody can control what AI assistants say, so treat every figure as an assumption to replace with your own.",
    keywords: [
      "ai search visibility for business setup consultants",
      "generative engine optimisation dubai",
      "get cited by chatgpt",
      "answer engine optimisation uae",
      "business setup consultant marketing dubai",
      "llms.txt",
    ],
    takeaways: [
      "Everything here is a model. Swap in your own prompts, enquiry numbers, close rate and fee.",
      "AI assistants mention businesses they can read, identify and find confirmed on other websites.",
      "A fixed list of test prompts, run every month, is the only honest way to measure progress.",
      "Third-party mentions and consistent business details matter as much as your own content.",
      "Results are uncertain. The model shows a low, base and high case, and the low case is close to no change.",
    ],
    body: [
      note(
        "Read this first: an illustrative scenario",
        "This worked example is an illustrative scenario with modelled numbers. It is not a client result, and the consultancy in it does not exist. We built it to show how the planning and the arithmetic work, so that you can replace each assumption with your own figures. Where we give a number, read it as \"if this were true\". AI assistants change often and nobody can control what they say, so real outcomes can be better or worse than any case shown here.",
      ),
      p(
        "Founders who want to open a company in Dubai used to start with a Google search and a dozen open tabs. Many now start by asking an AI assistant a plain question, such as which type of licence suits a small consulting business, or which consultancies can help a foreign founder set up. The assistant writes a short answer and often names a few firms. If your consultancy is not one of them, you are not in the conversation at all.",
      ),
      p(
        "This example follows one imaginary firm, which we simply call the consultancy, through a 12-month plan to change that. It covers [generative engine optimisation](/services/generative-engine-optimization), [answer engine optimisation](/services/answer-engine-optimization) and the [technical SEO](/services/technical-seo-services) that both depend on. It also shows the measurement, because a plan without a test is only a hope.",
      ),

      h2("The starting situation and our assumptions", "starting-situation"),
      p(
        "Picture a business setup consultancy with a small office in Dubai. It helps founders choose between mainland and free zone options, prepares documents and guides them through the steps. It has been trading for several years and gets most of its work from referrals and paid search. The website looks fine to a human visitor. To an AI assistant it barely exists.",
      ),
      p("To build a model we need starting figures. These are the assumptions we use for the rest of the example. None of them is a benchmark for the industry."),
      ul(
        "**Enquiries today:** we assume 60 enquiries a month from all sources, and that none of them can be traced to an AI assistant.",
        "**Close rate:** we assume 1 in 5 enquiries becomes a paying client, which is 20%.",
        "**Average fee:** we assume an average service fee of AED 9,000 per client, before any government or free zone charges, which are passed through and are not the consultancy's income.",
        "**Website:** about 25 pages. Most are short service pages with similar wording. There is a blog with a few posts that have no dates and no named author.",
        "**Business details:** the trading name is written three different ways across the website, the map listing and old directory entries. Two old phone numbers are still visible online.",
        "**Other websites:** the consultancy appears on a handful of directories and is not mentioned in any article, guide or comparison that a founder might read.",
      ),
      p(
        "You will notice there is no brand name, no founder name and no quote. That is on purpose. An invented name would make the example feel more real than it is. What matters is the method, and the method works the same way whatever the firm is called.",
      ),
      { t: "img", photo: { id: "photo-1521791136064-7986c2920216", alt: "Two business people shaking hands over a new agreement", by: "Cytonn Photography", user: "cytonn_photography" }, caption: "The consultancy in this example wins most work through referrals. AI assistants are a new way for founders to build a shortlist." },

      h2("How AI assistants choose which businesses to mention", "how-ai-chooses"),
      p(
        "It helps to understand, in simple terms, what happens when someone asks an AI assistant for a recommendation. The details differ between products and change over time, so this is a working picture and not a technical specification.",
      ),
      h3("Two sources of knowledge"),
      p(
        "An assistant draws on two things. The first is what the underlying model learned during training, which is a huge amount of text collected up to some date in the past. The second is live retrieval: many assistants now search the web when a question needs current facts, read a few pages and write an answer from what they find. Recommendations for local services usually lean on the second path, because the model knows that businesses open, close and change.",
      ),
      h3("What makes a business easy to mention"),
      p("When an assistant searches and reads, it prefers sources that make its job easy and safe. In practice that means four things."),
      ol(
        "**It can reach the page.** If a site blocks AI crawlers, loads its text only through JavaScript, or is very slow, the assistant may never see the content.",
        "**It can tell who the business is.** A clear name, address, phone number, description and structured data let the assistant connect a page to one specific company.",
        "**The page answers the question directly.** A short, plain answer near the top of a page is far easier to quote than a paragraph of sales language.",
        "**Other websites agree.** If directories, review platforms, news articles and guides describe the same business in the same way, the assistant has more reason to trust it and more places to find it.",
      ),
      p(
        "None of this is new. It is the same clarity and consistency that search engines have rewarded for years. The difference is that an assistant gives the reader three or four names, not ten blue links, so being almost good enough earns nothing.",
      ),
      note(
        "What nobody can do",
        "There is no way to pay for a place in an AI answer, and no setting that makes an assistant recommend you. Anyone who promises a fixed position in ChatGPT or Gemini is promising something outside their control. What you can do is remove the reasons an assistant might skip you, and then measure honestly whether it helped.",
      ),

      h2("The diagnosis: a baseline test with 40 prompts", "baseline-test"),
      p(
        "Before changing anything, the consultancy needs to know where it stands. The tool for this is simple: a fixed list of questions that real founders might ask, run through the main assistants, with the answers recorded. The list never changes during the project, because a moving list cannot show progress.",
      ),
      h3("Building the prompt list"),
      p("In this model the list has 10 prompts, each run on four assistants: ChatGPT, Gemini, Perplexity and Google AI Overviews. That gives 40 answers a month. The prompts are grouped by how close the founder is to hiring someone."),
      ul(
        "**Three recommendation prompts,** such as \"Which business setup consultants in Dubai help foreign founders?\" and \"Who can help me set up a free zone company in Dubai?\"",
        "**Three comparison prompts,** such as \"Should a small consulting business choose mainland or a free zone in Dubai?\"",
        "**Three how-to prompts,** such as \"What documents do I need to open a company in Dubai as a non-resident?\"",
        "**One brand prompt,** which asks directly what the assistant knows about the consultancy by name.",
      ),
      p(
        "The wording comes from real conversations: the questions founders ask on first calls, the phrases typed into the website's enquiry form, and the searches that already bring visitors. A list written from the inside, in the firm's own vocabulary, measures the wrong thing.",
      ),
      h3("Recording the answers"),
      p("For each of the 40 answers, the consultancy records the same five facts in a spreadsheet."),
      ol(
        "Was the consultancy mentioned by name? Yes or no.",
        "Was its website cited or linked as a source? Yes or no.",
        "Was the description accurate? Correct, partly wrong, or wrong.",
        "Which competitors were named?",
        "Which websites did the assistant cite?",
      ),
      p(
        "The fifth column is the most useful one in the first month. It shows which sources the assistants already trust for this topic. Those are the places where a mention would count.",
      ),
      h3("The modelled baseline"),
      p(
        "In our scenario the baseline is poor, as it would be for most small firms. We assume the consultancy is mentioned in 1 of the 40 answers, which is 2.5%, and only because one assistant found its name when asked the brand prompt. On the other three assistants the brand prompt returns either nothing or a description of a different company with a similar name. Its website is cited as a source in none of the 40 answers.",
      ),
      p(
        "The baseline also shows why. We assume the technical check finds that the site's robots.txt file blocks several AI crawlers, a setting added by a security plugin that nobody chose on purpose. The main service text loads through JavaScript, so a simple crawler sees an almost empty page. There is no structured data. And the three versions of the trading name mean that an assistant cannot be sure the map listing, the directory entries and the website describe one company.",
      ),
      { t: "img", photo: { id: "photo-1759752393975-7ca7b302fcc6", alt: "Hands typing on a laptop showing a spreadsheet on a round white table", by: "Bluestonex", user: "bluestonex_apphaus" }, caption: "The baseline lives in a plain spreadsheet: 40 answers, five facts each, repeated every month with the same prompts." },

      h2("Goals and the KPI model", "kpi-model"),
      p(
        "A goal such as \"be visible in AI\" cannot be checked. The model needs numbers that connect the test to the business. We use three levels, each feeding the next.",
      ),
      h3("Level one: mention rate"),
      p(
        "Mention rate is the share of the 40 test answers that name the consultancy. It starts at 1 of 40. The base case target after 12 months is 11 of 40, which is 27.5%. We also track citation rate, the share of answers that link to the consultancy's own pages, with a base case target of 6 of 40.",
      ),
      h3("Level two: enquiries that come from AI assistants"),
      p(
        "Mention rate is only a test score. What matters is enquiries. These are harder to count, because a founder who reads a name in an AI answer may search for it later or type the address directly. The model uses two signals together: visits that analytics tools label as coming from an AI assistant, and a required question on the enquiry form that asks how the person first heard of the firm, with \"AI assistant such as ChatGPT\" as one option.",
      ),
      p(
        "In the base case we assume that by month 12 the consultancy receives 8 enquiries a month that it can connect to AI assistants. That is an assumption, not a conversion formula. There is no reliable way to turn a mention rate into an enquiry count in advance, which is exactly why the form question matters.",
      ),
      h3("Level three: revenue"),
      p("The last step is plain arithmetic, using the starting assumptions."),
      ul(
        "8 enquiries a month x 20% close rate = 1.6 new clients a month.",
        "1.6 clients x AED 9,000 average fee = AED 14,400 in fee income a month.",
        "Over a full year at that rate: AED 14,400 x 12 = AED 172,800.",
      ),
      p(
        "That yearly figure describes a year at the month 12 run rate. It is not the income for the project's first year, when enquiries are building from zero. We return to this in the section on outcomes, because it is the most common way such models mislead.",
      ),
      note(
        "Swap in your own numbers",
        "The structure is: AI-attributed enquiries x close rate x average fee. If your close rate is 10% and your fee is AED 15,000, the same 8 enquiries are worth 0.8 x 15,000 = AED 12,000 a month. Change one input at a time and see which one moves the result most. For most service firms it is the close rate.",
      ),

      h2("The 12-month plan at a glance", "plan-overview"),
      p("The plan has four phases. The order matters: content that crawlers cannot read is wasted, and mentions that point to a confused identity are diluted."),
      ol(
        "**Months 1 and 2: foundations.** Open the site to crawlers, make the text readable without JavaScript, add structured data, and settle on one version of the business details.",
        "**Months 3 to 5: answers.** Rebuild the core service pages and publish content built around real founder questions, each with a direct answer at the top.",
        "**Months 4 to 9: mentions.** Clean up directory listings, build a review routine, and earn mentions on the websites that assistants already cite.",
        "**Months 6 to 12: measure and adjust.** Keep running the monthly test, refresh pages that are not being picked up, and extend what works.",
      ),
      p("The phases overlap. The monthly test runs from the first month to the last. The next four sections go through each workstream in practical detail."),

      h2("Workstream one: technical access for AI crawlers", "technical-access"),
      p(
        "This is the least glamorous work and the first to do. In our scenario it takes most of the first two months, mainly because changes to an existing website need care.",
      ),
      h3("Crawler access"),
      p(
        "The robots.txt file tells automated visitors which parts of a site they may read. The consultancy's file blocks several AI crawlers by accident. The fix is to decide deliberately. For a firm that wants to be recommended, the sensible choice is to allow the crawlers that power search and answers in the main assistants, while still blocking private areas such as client portals. The decision is written down, so that a future plugin update does not quietly reverse it.",
      ),
      p(
        "It is also worth checking the firewall and any bot protection service. Some block unfamiliar crawlers before they ever reach robots.txt. The server logs show which crawlers arrive and what response they get.",
      ),
      h3("Text that exists without JavaScript"),
      p(
        "Many AI crawlers do not run JavaScript. If the main text of a page appears only after scripts load, those crawlers see a shell. The test is simple: view the page source and search for a sentence from the page. If it is not there, the page needs server-side rendering or prerendering so that the full text is in the first response.",
      ),
      h3("Structured data"),
      p(
        "Structured data is a block of code that states facts about a page in a standard vocabulary. For the consultancy the useful types are an organisation or professional service entry with name, address, phone, opening hours and links to its official profiles, service entries for each main service, FAQ markup where a page has real questions and answers, and article markup with author and dates on guides. It must match what the visible page says. Marking up claims that are not on the page helps nobody.",
      ),
      h3("An llms.txt file"),
      p(
        "An llms.txt file is a plain text summary of a site, placed at the root of the domain, that lists the most important pages with a line about each. It is an emerging convention and not a standard. Not every assistant reads it, and there is no proof that it changes answers. It takes an hour to write and does no harm, so the plan includes it, with low expectations.",
      ),
      ul(
        "Allow the chosen AI crawlers in robots.txt and confirm in server logs that they receive normal responses.",
        "Make sure every important page delivers its full text in the HTML.",
        "Add organisation, service, FAQ and article structured data, and validate it.",
        "Publish an XML sitemap with accurate last-modified dates.",
        "Add an llms.txt file that lists the main service pages and guides.",
        "Fix slow pages and broken links found in the crawl.",
      ),
      { t: "img", photo: { id: "photo-1625297673326-14790108da55", alt: "Person typing on a laptop at a wooden desk beside a monitor", by: "Justin Morgan", user: "justin_morgan" }, caption: "Technical access comes first. Content that crawlers cannot reach cannot be quoted." },

      h2("Workstream two: one consistent business identity", "entity-consistency"),
      p(
        "Search engines and AI assistants think in entities: specific things in the world, such as a company, a person or a place. An entity is easier to trust when every source describes it the same way. The consultancy currently looks like three half-known companies.",
      ),
      h3("Choose the canonical details"),
      p("The first task is a decision, not a technical job. The consultancy writes down one official version of each of these."),
      ul(
        "The trading name, written exactly one way, with the legal name noted separately where it differs.",
        "One address, in one format, matching the trade licence.",
        "One main phone number and one enquiry email on the firm's own domain.",
        "A two-sentence description of what the firm does and who it helps.",
        "A short list of services, in the words founders use.",
      ),
      h3("Apply them everywhere"),
      p(
        "Those details then go on the website's contact and about pages, into the structured data, onto the Google Business Profile, and onto every directory and social profile the firm controls. Old listings with the retired phone numbers are corrected or removed. This is slow, dull work. In the model it runs across months 1 to 4, a few listings each week.",
      ),
      h3("A real about page"),
      p(
        "The about page does more than most firms expect. It should state when the firm was founded, where it is licensed, who leads it, and what experience they have, with links to their professional profiles. Assistants and human readers both look for signs that real, accountable people stand behind the advice. A firm that gives company formation advice should be especially clear here, because the reader is about to trust it with important decisions.",
      ),
      note(
        "Keep regulated claims general",
        "Company formation rules, fees and timelines differ between the mainland and each free zone, and they change. Content should explain the options in general terms, state the date it was last reviewed, and tell readers to confirm current requirements with the relevant authority. A page that quotes an out-of-date fee is worse than a page that quotes none, for readers and for trust.",
      ),

      h2("Workstream three: content built around founder questions", "founder-questions"),
      p(
        "With access and identity fixed, the consultancy has something worth reading to offer. This is where [answer engine optimisation](/services/answer-engine-optimization) and [content marketing](/services/content-marketing-services) meet.",
      ),
      h3("Start from the questions"),
      p(
        "The team collects questions for two weeks: every question asked on a sales call, in a WhatsApp message or by email. They add the questions from the test prompts and from the \"people also ask\" boxes in search results. In our scenario this produces about 120 questions, which group into roughly 30 topics. The plan covers 24 of them: two pieces of content a month for a year.",
      ),
      p("The topics fall into a few families."),
      ul(
        "**Choosing a structure:** mainland or free zone, which free zone suits which activity, what a sole establishment is.",
        "**Process:** the steps to open a company, documents needed, what can be done from abroad.",
        "**After setup:** bank account opening, visas, office requirements, renewals.",
        "**Costs:** what drives the total cost and why quotes differ, explained without fixed prices.",
        "**Choosing an adviser:** what a consultant does, what to ask before hiring one, and warning signs.",
      ),
      h3("The shape of each page"),
      p("Every guide follows the same pattern, because the pattern is what makes a page easy to quote."),
      ol(
        "A title that is the question itself, or very close to it.",
        "A direct answer of two to four sentences, placed first. If a reader stopped there, they would still have a correct answer.",
        "Sections with question-style headings that go deeper, each starting with its own short answer.",
        "Lists and simple tables where steps or options are compared.",
        "A named author with relevant experience, a publish date and a last-reviewed date.",
        "Links to official sources for anything a reader should verify.",
        "A short set of related questions at the end, with brief answers.",
      ),
      h3("Service pages get the same treatment"),
      p(
        "The existing service pages are rebuilt first, in months 3 and 4, because they are what an assistant should cite when someone asks who can help. Each page says plainly what the service is, who it is for, what is included, how the process works, and how fees are structured in general terms. Each has its own questions and answers. The duplicated wording between pages goes.",
      ),
      h3("Honesty as a content rule"),
      p(
        "A consultancy that only publishes reasons to hire it gives an assistant nothing to quote on a neutral question. The guides should say when a founder does not need a consultant, when a free zone is the wrong choice, and what the firm does not do. That kind of content is more useful, and more useful content is more likely to be cited.",
      ),
      { t: "img", photo: { id: "photo-1517048676732-d65bc937f952", alt: "Colleagues reviewing documents at a meeting table", by: "Dylan Gillis", user: "mainermedia" }, caption: "The best source of content topics is the questions founders already ask on calls and in messages." },

      h2("Workstream four: mentions on other websites", "third-party-mentions"),
      p(
        "The baseline test showed which websites the assistants cite when they answer business setup questions. In our scenario we assume they fall into four groups: business directories and review platforms, official government and free zone websites, news and business publications, and long guides written by other firms. The consultancy cannot appear on official sites and should not try to appear on a competitor's. That leaves two groups to work on.",
      ),
      h3("Directories and reviews"),
      p("This is the part fully within the firm's control."),
      ul(
        "Claim and complete the Google Business Profile, with the canonical details, accurate categories, services and photos.",
        "Complete profiles on the main UAE business directories and the general review platforms that appeared in the test citations.",
        "Start a simple review routine: after each completed setup, ask the client for an honest review, with a direct link. Never offer anything in return and never write reviews on a client's behalf.",
        "Reply to every review, including critical ones, calmly and specifically.",
      ),
      p("Our [local SEO service](/services/local-seo-services) covers the same ground. For a firm that serves founders arriving from abroad, reviews that mention the client's situation are especially valuable, because future founders look for someone like themselves."),
      h3("Earned mentions"),
      p("Mentions in articles and guides are slower and less certain. The plan uses three honest routes."),
      ol(
        "**Useful data or explanation.** Publish one clear, well-sourced explainer a quarter that journalists and bloggers can reference, such as a plain-language comparison of setup routes with links to the official sources.",
        "**Expert comment.** Offer the firm's lead adviser as a named source to business publications that cover the UAE, with short, factual comments on changes that affect founders.",
        "**Partnerships.** Banks, accountants, law firms and co-working spaces serve the same founders. A short, accurate entry on a partner's resources page is a real mention from a relevant site.",
      ),
      p(
        "What the plan excludes is just as important: paid links, bulk guest posts on unrelated sites, and invented reviews. They carry real risk and are easy for both people and machines to spot.",
      ),
      p(
        "In the model we assume this work produces 12 new, accurate third-party mentions over the year in the base case: about one a month from month 4, with some months producing none. That is a modest figure, chosen on purpose.",
      ),

      h2("The monthly AI answer test", "monthly-test"),
      p(
        "Every month, on roughly the same day, someone runs the same 10 prompts on the same four assistants and fills in the same five columns. It takes about two hours. A few rules keep the test honest.",
      ),
      ul(
        "Use a fresh session with no history, signed out where possible, so earlier chats do not shape the answer.",
        "Use the exact prompt wording every time.",
        "Record the answer as given. Do not re-run a prompt until it produces a better result.",
        "Note the date and the assistant version if it is shown, because products change.",
        "Keep the raw answers, not only the scores, so that odd results can be checked later.",
      ),
      p(
        "AI answers vary from one run to the next. With only 40 answers, a change of one or two mentions in a month means nothing. The trend over three or more months is what counts. This is the reason the plan runs for a year and not a quarter.",
      ),
      h3("What the test is for"),
      p(
        "The test does two jobs. It shows progress, and it directs the work. If the consultancy is mentioned for how-to prompts and never for recommendation prompts, the content is being read while the identity and third-party evidence are still weak. If one assistant describes the firm wrongly, the task is to find where that wrong information lives and correct it at the source.",
      ),
      { t: "img", photo: { id: "photo-1675352161828-c07170f1b114", alt: "Phone showing Google search in front of the Google logo", by: "Shutter Speed", user: "shutter_speed_" }, caption: "The same prompts, on the same assistants, on the same day each month. Consistency is what makes the test worth trusting." },

      h2("The modelled outcome: low, base and high cases", "modelled-outcome"),
      p(
        "Here is where a made-up example can do the most damage, so we will be careful. The three cases below are assumptions about what might happen. They are not forecasts and they are not averages from real projects. They exist to show how wide the range is and how the arithmetic responds.",
      ),
      h3("Low case"),
      p(
        "In the low case the foundations are fixed and the content is published, yet the assistants barely respond within the year. We assume the mention rate reaches 4 of 40, citations reach 1 of 40, and AI-attributed enquiries reach 2 a month by month 12. The arithmetic: 2 x 20% = 0.4 clients a month, and 0.4 x AED 9,000 = AED 3,600 a month. On AI visibility alone, this case does not pay for the work.",
      ),
      h3("Base case"),
      p(
        "In the base case the mention rate reaches 11 of 40, citations reach 6 of 40, and AI-attributed enquiries reach 8 a month by month 12. As shown earlier: 8 x 20% = 1.6 clients, and 1.6 x AED 9,000 = AED 14,400 a month at the month 12 run rate.",
      ),
      h3("High case"),
      p(
        "In the high case several strong mentions land early and one assistant begins citing the consultancy's guides regularly. We assume the mention rate reaches 18 of 40, citations reach 12 of 40, and AI-attributed enquiries reach 15 a month. The arithmetic: 15 x 20% = 3 clients, and 3 x AED 9,000 = AED 27,000 a month.",
      ),
      h3("The first year is not the run rate"),
      p(
        "Enquiries do not arrive at the month 12 level from the start. A simple and cautious way to model the first year is to assume nothing for the first four months and a straight-line rise from month 5 to month 12. In the base case that gives 1, 2, 3, 4, 5, 6, 7 and 8 enquiries across those eight months, a total of 36 for the year.",
      ),
      ul(
        "36 enquiries x 20% close rate = 7.2 clients in the first year.",
        "7.2 clients x AED 9,000 = AED 64,800 in first-year fee income from this channel.",
        "Compare that with the AED 172,800 a year implied by the month 12 run rate. The gap is the cost of the build-up period.",
      ),
      p(
        "The same method gives 9 enquiries and AED 16,200 for the low case, and about 68 enquiries and AED 122,400 for the high case. Anyone presenting only the run-rate figure for a first year is showing you the most flattering number available.",
      ),
      note(
        "The side effects are real, and harder to count",
        "Most of this work also helps ordinary search. Readable pages, direct answers, consistent details and reviews tend to improve organic and map visibility too. The model leaves that out, because it would mix two channels and make the AI figures look better than the evidence supports. In a real project you would track organic enquiries separately and report both.",
      ),

      h2("What could go wrong", "risks"),
      p("A plan that lists no risks has not been thought through. These are the ones that matter most here."),
      ul(
        "**The assistants change.** A product update can alter which sources are used overnight. A gain can vanish for reasons that have nothing to do with your work.",
        "**Measurement is noisy.** Forty answers a month is a small sample, and visitors from AI assistants are often recorded as direct traffic. The form question helps, but people forget where they first saw a name.",
        "**Competitors do the same work.** If three other consultancies fix their sites and publish better guides, the bar rises for everyone.",
        "**Wrong information spreads.** An assistant may describe the firm inaccurately or attach it to a service it does not offer. Correcting this means finding and fixing the source, which is not always possible.",
        "**Content goes stale.** A guide that was right in January may be wrong by June. Stale advice in this field can cost a founder money, and it damages the trust the whole plan is built on.",
        "**Enquiry quality may differ.** People who arrive through AI answers may be earlier in their decision. The 20% close rate is an assumption and may be lower for this group.",
        "**The team cannot keep up.** Two reviewed guides a month needs time from someone who knows the subject. If that person is the busiest adviser in the firm, the schedule will slip.",
      ),
      p(
        "The sensible response is to decide in advance what would count as failure. In this model the checkpoint is month 6. If the mention rate is still at 1 or 2 of 40 and the technical and identity work is confirmed complete, the firm should scale back the mention-building effort and keep only the parts that also help ordinary search.",
      ),

      h2("Cost and time assumptions", "cost-and-time"),
      p(
        "We do not quote prices here. A fair price depends on the state of the website, how much content exists, and how much the firm's own team can do. What we can show is the effort, in hours, so that you can cost it at your own rates whether you use staff, freelancers or an agency.",
      ),
      ul(
        "**Technical foundations:** we assume about 40 hours across months 1 and 2, most of it developer time.",
        "**Business identity and listings:** about 25 hours across months 1 to 4.",
        "**Rebuilding service pages:** about 30 hours in months 3 and 4.",
        "**Guides:** 24 guides at about 6 hours each for research, writing and editing, which is 144 hours, plus about 1 hour each of expert review, which is 24 hours of an adviser's time.",
        "**Mentions and reviews:** about 6 hours a month from month 4 to month 12, which is 54 hours.",
        "**Monthly test and reporting:** about 3 hours a month for 12 months, which is 36 hours.",
      ),
      p(
        "The total is 40 + 25 + 30 + 144 + 24 + 54 + 36 = 353 hours over the year, or about 29 hours a month on average, heavier at the start. Multiply by your own hourly cost to get a budget. Then set that budget against the three first-year outcomes above. In the low case the work will not pay back within the year from AI enquiries alone. That is an honest thing to know before starting.",
      ),
      p(
        "On timing, we assume nothing visible happens in the monthly test for the first three months. Crawlers need to revisit the site, new pages need to be found, and mentions take time to appear. A firm that expects movement in six weeks will stop too early.",
      ),
      { t: "img", photo: { id: "photo-1707157284454-553ef0a4ed0d", alt: "Financial charts, notebook and phone on an office desk", by: "Jakub Żerdzicki", user: "jakubzerdzicki" }, caption: "Cost the plan in hours at your own rates, then compare it with the low case as well as the base case." },

      h2("How to adapt this example to your own business", "adapt-it"),
      p("The scenario is a business setup consultancy, yet the method fits most advice-led service firms in the UAE. To make it yours, work through these steps."),
      ol(
        "**Write your own 10 prompts.** Use your clients' words. Include recommendation, comparison and how-to questions, plus one brand prompt.",
        "**Run the baseline.** Record mentions, citations, accuracy, competitors and cited sources for each assistant.",
        "**Replace our assumptions.** Put in your real monthly enquiries, close rate and average fee.",
        "**Check the foundations.** Can crawlers reach your pages? Is the text in the HTML? Are your business details identical everywhere?",
        "**List your founders' questions.** Or your patients', buyers' or tenants' questions. Group them into topics and plan what you can truly keep up.",
        "**Find where a mention would count.** Use the cited sources from your baseline.",
        "**Set three cases and a checkpoint.** Decide now what result at month 6 would make you change course.",
      ),
      p(
        "If you want help with any part, our [generative engine optimisation service](/services/generative-engine-optimization) covers the full plan, and our page on [marketing for business setup consultants](/industries/business-setup-consultants) explains how it fits with search and advertising in this sector. You can also [book a free consultation](/contact) to talk through how a baseline test like this would work for your business.",
      ),
      p(
        "One last reminder. The figures in this example were chosen to make the arithmetic easy to follow. They describe a firm that does not exist. Use the method, and bring your own numbers.",
      ),
    ],
    faqs: [
      {
        q: "Is this a real case study?",
        a: "No. It is an illustrative scenario with modelled numbers, built to show how to plan and measure AI search visibility. The consultancy does not exist and the figures are assumptions. It is not a client result.",
      },
      {
        q: "Can anyone make ChatGPT or Gemini recommend my business?",
        a: "No. Nobody controls what AI assistants say. You can make your site readable, your business details consistent, your content directly useful and your business visible on trusted third-party websites. Those steps remove reasons to be skipped. Whether an assistant then mentions you is uncertain.",
      },
      {
        q: "How long does generative engine optimisation take to show results?",
        a: "In this model we assume no visible change in the monthly test for the first three months and a gradual rise afterwards. Real timing varies widely. Because AI answers change from run to run, judge the trend over at least three months and not a single test.",
      },
      {
        q: "Do I need an llms.txt file?",
        a: "It is optional. An llms.txt file is an emerging convention, not a standard, and not every assistant reads it. It is quick to create and harmless, so it is reasonable to add one, but crawler access, readable text and consistent business details matter far more.",
      },
      {
        q: "How do I know if an enquiry came from an AI assistant?",
        a: "Use two signals together. Check analytics for visits referred by AI assistants, and add a required question to your enquiry form asking how the person first heard of you, with an AI assistant option. Neither is complete alone, since many such visits are recorded as direct traffic.",
      },
      {
        q: "Is GEO different from SEO?",
        a: "They share the same foundations: accessible pages, clear answers, accurate structured data and a trustworthy reputation. GEO adds a focus on how AI assistants read, identify and cite a business, and on testing what they say. Most GEO work also helps ordinary search results.",
      },
    ],
  },
];
