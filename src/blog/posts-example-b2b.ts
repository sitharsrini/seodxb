import type { Block, Post } from "./types";

const D = "2026-11-12";
const p = (text: string): Block => ({ t: "p", text });
const h2 = (text: string, id: string): Block => ({ t: "h2", text, id });
const h3 = (text: string): Block => ({ t: "h3", text });
const ul = (...items: string[]): Block => ({ t: "ul", items });
const ol = (...items: string[]): Block => ({ t: "ol", items });
const note = (title: string, text: string): Block => ({ t: "callout", title, text });

export const EXAMPLE_B2B_POSTS: Post[] = [
  {
    slug: "worked-example-accounting-firm-b2b-marketing-plan-uae",
    title: "Worked Example: A B2B Marketing Plan for a UAE Accounting and Tax Firm",
    seoTitle: "Worked Example: UAE Accounting Firm Marketing Plan",
    description:
      "An illustrative 12-month B2B marketing plan for a Dubai accounting and tax firm that relies on referrals, with modelled numbers you can replace.",
    category: "Worked Examples",
    date: D,
    updated: D,
    answer:
      "This is an illustrative scenario with modelled numbers, not a client result. It shows how a Dubai accounting, VAT and corporate tax firm that grows only by referrals could plan 12 months of marketing: research and positioning first, then service pages, content built on buyer questions, LinkedIn Ads to named account lists, and a KPI framework. In the base case of the model, 100 enquiries a year become 12 new retainer clients, and each client pays back its acquisition cost in about eight months.",
    keywords: [
      "accounting firm marketing plan uae",
      "b2b marketing plan example",
      "accounting firm marketing dubai",
      "linkedin ads for accounting firms",
      "tax consultant marketing uae",
      "marketing kpis for professional services",
    ],
    takeaways: [
      "This is a model, not a result. Every number is an assumption you should replace with your own.",
      "Referral-only firms usually have a positioning problem before they have a channel problem.",
      "The core arithmetic is enquiries x qualification rate x close rate x annual retainer value.",
      "Service pages and buyer-question content come before paid ads, because ads need somewhere credible to land.",
      "LinkedIn Ads work best for this kind of firm when they target a named list of companies, not a broad audience.",
      "Judge the plan on cost per qualified lead and payback period, with low, base and high cases agreed in advance.",
    ],
    body: [
      note(
        "Read this first: an illustrative scenario",
        "This worked example is an illustrative scenario with modelled numbers. It is not a client result, and the firm described does not exist. We built it to show how the planning and the arithmetic fit together. Every figure is an assumption, so replace each one with your own numbers before you rely on any conclusion.",
      ),
      p(
        "Most accounting and tax firms in the UAE grow the same way. A client is happy, mentions the firm to another business owner, and a new enquiry arrives. Referrals are a good source of work. They close easily and they cost very little. But they also arrive when they choose to, in the numbers they choose, from whoever happens to be talking about you.",
      ),
      p(
        "This worked example imagines one such firm and walks through a full 12-month marketing plan for it. We show the thinking at each step, the numbers we assume, and the arithmetic that connects marketing activity to new retainer clients. The aim is not to impress you with a result. The aim is to give you a structure you can copy and fill in with your own figures.",
      ),
      p(
        "If you run a firm like this, read it with a spreadsheet open. Wherever we write \"we assume\", write your own number next to ours. By the end you will have a rough model of your own, and you will know which of your numbers you are least sure about. Those are the ones worth measuring first.",
      ),

      h2("The starting situation and what we assume", "starting-situation"),
      p(
        "Our fictional firm is based in Dubai. It offers bookkeeping, VAT compliance, corporate tax advice and annual audit support to small and mid-sized companies. We will simply call it the firm. It has been trading for several years, has a stable team, and has a base of clients who stay for a long time.",
      ),
      p("For the model, we assume the following starting position. None of these figures comes from a real business."),
      ul(
        "The firm receives about four new enquiries a month, and almost all of them are referrals from existing clients.",
        "Roughly half of those enquiries are a good fit. The rest are too small, want a one-off job, or are shopping only on price.",
        "About half of the good-fit enquiries become clients, because a referral arrives with trust already in place.",
        "A typical client pays a monthly retainer. In this model we assume AED 5,000 a month, which is AED 60,000 a year.",
        "After the cost of the people who do the work, we assume half of that retainer is contribution margin, so AED 2,500 a month.",
        "The firm has a website with a home page, one page listing every service, and a contact form. It has no analytics set up beyond a basic visitor count.",
        "It has a LinkedIn company page that is updated a few times a year.",
      ),
      p(
        "So the baseline is simple. Four enquiries a month, times a 50 percent fit rate, times a 50 percent close rate, gives one new client a month. Twelve new clients a year from referrals alone is healthy. The owners are not in trouble. Their concern is different: they cannot make that number go up when they want to, and they cannot choose the kind of client that arrives.",
      ),
      { t: "img", photo: { id: "photo-1707902665498-a202981fb5ac", alt: "Accountant taking notes beside a laptop and calculator", by: "Jakub Żerdzicki", user: "jakubzerdzicki" }, caption: "The model starts with a few plain assumptions about enquiries, fit, close rate and retainer value. Replace each with your own." },
      note(
        "Why we write the assumptions down first",
        "A plan without written assumptions cannot be checked. If the model says 12 new clients and you get five, you need to know which input was wrong: the number of enquiries, the share that were qualified, the close rate or the retainer value. Each one points to a different fix.",
      ),

      h2("Diagnosis: why referrals alone hold the firm back", "diagnosis"),
      p(
        "Before choosing any channel, we look at what is really limiting growth. In a scenario like this one, the diagnosis usually finds four connected problems.",
      ),
      h3("The firm is invisible to buyers who do not know a client"),
      p(
        "A finance manager who needs corporate tax advice and has no personal recommendation will search Google, ask an AI assistant, or look on LinkedIn. In our scenario, the firm appears in none of those places. Its single services page mentions corporate tax in one line. There is nothing for a search engine or an AI tool to quote, and nothing for a careful buyer to read.",
      ),
      h3("The firm describes itself the way every competitor does"),
      p(
        "The website says the firm offers accounting, VAT, tax and audit services to businesses of all sizes. That sentence is true of hundreds of firms. A buyer comparing three websites cannot tell them apart, so the decision falls back on price or on who replied first.",
      ),
      h3("Referrals bring a random mix of clients"),
      p(
        "Because the firm takes whoever is referred, its client list is a mix of trading companies, restaurants, a few free zone start-ups and some property businesses. The team has no deep pattern to reuse. Each new client is a fresh learning exercise, which makes the work slower and the margin thinner than it could be.",
      ),
      h3("Nothing is measured"),
      p(
        "The firm does not record where enquiries come from, how many were a good fit, or why lost deals were lost. Without those numbers, the owners cannot say what a new client costs to win, so they cannot decide how much it is sensible to spend on winning one.",
      ),
      p(
        "The diagnosis matters because it changes the order of work. A firm with these four problems should not start with advertising. Ads would send strangers to a website that gives them no reason to choose the firm. The order has to be: understand the market, decide who the firm is for, build pages that say so, then bring traffic.",
      ),

      h2("Market and competitor research before any spend", "research"),
      p(
        "The first month goes on research. In this scenario it has three parts, and the output of each is a short written document, not a slide deck. This is the work described on our [market research and competitor analysis](/services/market-research-and-competitor-analysis) page.",
      ),
      h3("Talk to existing clients"),
      p(
        "We would interview a modest number of current clients, chosen across sectors and sizes. The questions are simple. What was happening in your business when you started looking for an accountant? Who else did you consider? What nearly stopped you from choosing this firm? What would you tell another owner about working with them?",
      ),
      p(
        "The value of these conversations is the wording. Clients rarely say they wanted \"compliance services\". They say they were worried about a penalty, or that their last accountant never answered the phone, or that their investor asked for management accounts they could not produce. Those phrases become page headings and ad copy later.",
      ),
      h3("Study the firm's own client list"),
      p(
        "Next we sort the client list by sector, size, services used, monthly fee and how long each client has stayed. In our scenario, we assume this shows a clear pattern: clients in one group stay longest, buy the most services and cause the fewest problems. For the model, we assume that group is owner-managed trading and distribution companies with 20 to 100 staff, which import goods and sell across the Gulf.",
      ),
      p(
        "That finding is an assumption for this example. In a real firm the best group might be healthcare clinics, contractors or technology companies. The method is what matters: let the firm's own data show where it already does its best work.",
      ),
      h3("Read the competitors as a buyer would"),
      p(
        "We compare the firm's closest competitors on what a buyer can see: their home page message, their service pages, the sectors they name, their proof, their content, their LinkedIn activity and what appears when you search for the services they sell. We also ask the main AI assistants the questions a buyer would ask and note which firms they mention.",
      ),
      p(
        "In this scenario, we assume the research finds that most competitors make the same general claims, that very few publish anything specific to trading companies, and that nobody explains in plain language how VAT and corporate tax affect a business that imports and re-exports. That gap is the opening.",
      ),
      { t: "img", photo: { id: "photo-1517048676732-d65bc937f952", alt: "Colleagues reviewing documents at a meeting table", by: "Dylan Gillis", user: "mainermedia" }, caption: "Research starts with the firm's own clients and its own numbers, before anyone looks at channels." },

      h2("Positioning and the ideal customer", "positioning"),
      p(
        "Positioning is a decision about who the firm is for and why that buyer should choose it. It is not a slogan. In the model, the research leads to a clear choice, set out as part of a wider [marketing strategy](/services/marketing-strategy).",
      ),
      h3("The ideal customer profile"),
      ul(
        "**Company type:** owner-managed trading and distribution companies based in Dubai and the northern emirates.",
        "**Size:** 20 to 100 employees, with an in-house bookkeeper or a small finance team but no tax specialist.",
        "**Buyer:** the owner or managing director makes the decision. The finance manager does the research and makes the shortlist.",
        "**Triggers:** a tax or VAT question the current accountant could not answer, a bank or investor asking for better accounts, fast growth, or a change of finance manager.",
        "**Worries:** penalties, surprises at year end, and not understanding what they are paying for.",
      ),
      h3("The positioning statement"),
      p(
        "For the firm in this example, the positioning could read: for owner-managed trading companies in the UAE, the firm is the accounting and tax partner that understands import, re-export and multi-entity structures, explains every figure in plain language, and gives one named contact who answers within a working day.",
      ),
      p(
        "Notice what this does. It names a buyer. It names a specific kind of knowledge. It makes two promises the firm can actually keep, because the client interviews showed that slow replies and unclear advice were the main reasons people left their last accountant.",
      ),
      note(
        "Narrow positioning does not mean turning work away",
        "Owners often worry that naming a sector will lose them other clients. In practice, referrals from other sectors still arrive and can still be accepted. Positioning only decides what the marketing says and who it is aimed at. A clear message to one group is more persuasive than a vague message to everyone.",
      ),
      h3("Core messages"),
      ol(
        "We know how trading companies work, including customs, free zones and group structures.",
        "You will understand your numbers, because we explain them without jargon.",
        "You will have one named contact and a reply within a working day.",
        "Tax and VAT rules change, so we tell you what a change means for your business before it becomes a problem.",
      ),
      p(
        "Every page, post and advert in the plan repeats these four messages. Repetition is the point. A buyer who sees the firm three times should hear the same thing each time.",
      ),

      h2("Goals and the KPI model", "kpi-model"),
      p(
        "Now we turn the positioning into numbers. A KPI framework has to connect marketing activity to revenue in a way the owners can check. For a retainer business, the chain has four links.",
      ),
      ol(
        "**Enquiries:** how many people contact the firm through marketing, not referrals.",
        "**Qualification rate:** the share of those enquiries that match the ideal customer profile and have a real need.",
        "**Close rate:** the share of qualified enquiries that sign.",
        "**Annual retainer value:** what a new client pays in the first 12 months.",
      ),
      p("The formula is: new annual contract value = enquiries x qualification rate x close rate x annual retainer value."),
      h3("The base case, step by step"),
      p("In the base case of this model, we assume the following for the first 12 months of marketing."),
      ul(
        "Marketing enquiries across the year: 100. They start near zero and build, so most arrive in the second half.",
        "Qualification rate: 40 percent. This is lower than the referral rate, because strangers are a looser fit than referred contacts.",
        "Close rate: 30 percent. Again lower than referrals, because trust has to be built from nothing.",
        "Annual retainer value: AED 60,000.",
      ),
      p(
        "The arithmetic: 100 enquiries x 40 percent = 40 qualified leads. 40 qualified leads x 30 percent = 12 new clients. 12 clients x AED 60,000 = AED 720,000 in first-year contract value. These clients come on top of the 12 a year the firm already wins through referrals, so in the model the firm doubles its new-client rate.",
      ),
      h3("Cost per client and payback"),
      p(
        "A plan needs a budget assumption. For this model, we assume the firm sets aside AED 20,000 a month for everything: research, website work, content, advertising spend and reporting. That is AED 240,000 for the year. This figure is a planning assumption for the example. It is not a price for any SEODXB service, and a real budget depends on the firm and the scope.",
      ),
      ul(
        "Cost per enquiry: AED 240,000 / 100 = AED 2,400.",
        "Cost per qualified lead: AED 240,000 / 40 = AED 6,000.",
        "Cost per new client: AED 240,000 / 12 = AED 20,000.",
        "Monthly contribution per client: AED 2,500, from the margin assumption earlier.",
        "Payback period: AED 20,000 / AED 2,500 = 8 months.",
      ),
      p(
        "Payback period is the most useful single number for a retainer business. It answers a plain question: how many months must a new client stay before the firm has earned back what it spent to win them? In this model the answer is eight. If the firm's clients typically stay for several years, an eight-month payback is comfortable. If clients tended to leave after a year, it would be far too slow.",
      ),
      { t: "img", photo: { id: "photo-1707157284454-553ef0a4ed0d", alt: "Financial charts, notebook and phone on an office desk", by: "Jakub Żerdzicki", user: "jakubzerdzicki" }, caption: "Four inputs drive the model: enquiries, qualification rate, close rate and annual retainer value." },
      h3("The KPIs the firm would report each month"),
      ul(
        "Marketing enquiries, split by source: organic search, LinkedIn Ads, LinkedIn organic, AI assistants and direct.",
        "Qualified leads, judged against the written ideal customer profile.",
        "Proposals sent and clients won.",
        "Cost per qualified lead and cost per new client, on a rolling three-month basis.",
        "Pipeline value: the annual retainer value of all open proposals.",
        "Leading indicators: visits to service pages, rankings for a short list of buying-intent searches, and engagement from the named account list.",
      ),
      p(
        "Rankings, impressions and followers appear in the report as leading indicators only. They show whether the plan is on track before enquiries arrive. They are never the goal.",
      ),

      h2("The plan, quarter by quarter", "quarterly-plan"),
      p(
        "With the positioning and the model agreed, the 12 months divide into four quarters. Each has one main job. The order follows the diagnosis: foundations first, then content, then paid reach, then scaling what the numbers support.",
      ),
      h3("Quarter 1: research, positioning and foundations"),
      ul(
        "Month 1: client interviews, client list analysis, competitor review and the written positioning.",
        "Month 2: tracking set up, the KPI framework agreed, and the new site structure planned.",
        "Month 3: core service pages rewritten and published, plus the sector page for trading companies.",
      ),
      p(
        "In the model, we assume Quarter 1 produces almost no marketing enquiries. That is normal and it should be said out loud at the start. The quarter builds the things every later quarter depends on.",
      ),
      h3("Quarter 2: content built on buyer questions"),
      ul(
        "Two in-depth guides a month, each answering one question that came up in the client interviews.",
        "The partners begin posting on LinkedIn once a week, using the guides as source material.",
        "A named account list is built for the LinkedIn campaigns that start in Quarter 3.",
        "The first small LinkedIn test runs in the final month, to check tracking and messages.",
      ),
      p("We assume enquiries begin to appear in this quarter at a low level: around 10 across the three months."),
      h3("Quarter 3: LinkedIn Ads to named accounts"),
      ul(
        "Campaigns go live to the named account list, promoting the strongest guides and a tax review offer.",
        "Content continues at the same pace, with one guide a month updated using new questions from sales calls.",
        "Every lead is followed up within a working day, and outcomes are recorded.",
      ),
      p("We assume about 35 enquiries in this quarter, as organic visibility and paid reach start to overlap."),
      h3("Quarter 4: review, scale and prune"),
      ul(
        "Budget moves towards the campaigns and topics that produced qualified leads.",
        "Weak campaigns are paused, even where they produced many clicks.",
        "Two anonymised worked examples are written from real engagements, with client permission.",
        "The model is rebuilt with actual numbers, and next year's targets are set from it.",
      ),
      p("We assume about 55 enquiries in the final quarter. Added up, 0 + 10 + 35 + 55 gives the 100 used in the base case."),
      note(
        "The shape matters more than the total",
        "Marketing for a professional services firm builds slowly and then compounds. If an owner expects enquiries to arrive evenly from month one, the plan will look like a failure in month four even when it is exactly on track. Agree the expected curve in advance and judge each quarter against its own target.",
      ),

      h2("Workstream detail: service pages that earn trust", "service-pages"),
      p(
        "The firm's single services page becomes a set of focused pages. Each one targets a search a buyer actually makes and answers the questions a finance manager would ask before a first call. This is ordinary [content marketing](/services/content-marketing-services) work, done with care.",
      ),
      h3("The page set in this scenario"),
      ul(
        "Corporate tax advisory for trading companies.",
        "VAT compliance and VAT health checks.",
        "Outsourced accounting and monthly management accounts.",
        "Audit support and year-end preparation.",
        "A sector page: accounting and tax for trading and distribution companies.",
        "An about page that introduces the partners, their qualifications and how the firm works.",
      ),
      h3("What each service page contains"),
      ol(
        "A short answer at the top: what the service is, who it is for and what the client receives.",
        "The situations that usually lead a business to need it, in the words clients used in interviews.",
        "What is included, as a plain list, and what is not.",
        "How the work runs month by month, and who the client will deal with.",
        "How fees are structured. Not a price list, but an honest explanation of what drives the fee.",
        "Questions and answers, written from real sales conversations.",
        "A clear next step: a call, a WhatsApp message or a short form.",
      ),
      p(
        "Tax content needs special care. Rules change, and a firm's website must not give advice that turns out to be out of date. In this plan, each page states general principles, shows the date it was last reviewed, and tells readers to confirm current rules with the Federal Tax Authority or a qualified adviser. A partner reviews every page before it is published and again on a fixed schedule.",
      ),
      { t: "img", photo: { id: "photo-1554224154-26032ffc0d07", alt: "Tax documents, phone and pen on a folder", by: "Kelly Sikkema", user: "kellysikkema" }, caption: "Tax pages state general principles, show a review date and point readers to the Federal Tax Authority for current rules." },

      h2("Workstream detail: content around buyer questions", "buyer-questions"),
      p(
        "The guides in Quarter 2 are not general articles about accounting. Each one answers a specific question that a specific buyer asked. The client interviews and the partners' own inboxes supply the list.",
      ),
      h3("Example topics for this firm"),
      ul(
        "How does corporate tax apply to a trading company with a mainland entity and a free zone entity?",
        "What records should an importer keep to support its VAT returns?",
        "When does a growing company need monthly management accounts, and what should they include?",
        "What should a finance manager check before the year-end audit starts?",
        "How do you change accountants in the middle of a financial year without losing data?",
        "What questions should an owner ask an accounting firm before signing a retainer?",
      ),
      p(
        "Each guide starts with a direct answer of a few sentences, then explains the detail, then finishes with common questions. That structure serves three readers at once: the busy owner who wants the answer, the finance manager who wants the reasoning, and the search engines and AI assistants that look for clear, quotable passages.",
      ),
      h3("How one guide is reused"),
      ol(
        "The guide is published on the website and linked from the relevant service page.",
        "A partner writes a short LinkedIn post on the main point, in their own voice.",
        "Two or three follow-up posts each cover one sub-question from the guide.",
        "The guide becomes the content offer in a LinkedIn campaign to the named account list.",
        "The sales team sends it to prospects who ask that question on a call.",
      ),
      p(
        "One piece of real thinking therefore does five jobs. This is how a small firm keeps a steady presence without asking the partners to write every day.",
      ),
      p(
        "A note on tools. AI can help with outlines and first drafts, but a tax guide must be checked line by line by someone qualified. In this plan, nothing is published until a partner has reviewed the facts. Readers of financial content judge a firm by its accuracy, and one wrong statement costs more trust than ten good guides build.",
      ),

      h2("Workstream detail: LinkedIn Ads with a named account list", "linkedin-ads"),
      p(
        "LinkedIn is the natural paid channel for this firm, because the buyers are identifiable by company and by job title. It is also an expensive channel per click, so the plan uses it narrowly. The approach is covered in more depth on our [LinkedIn Ads management](/services/linkedin-ads-management) page.",
      ),
      h3("Building the list"),
      p(
        "Instead of targeting every finance professional in the UAE, the firm builds a list of named companies that match the ideal customer profile. In this scenario, we assume a list of around 600 trading and distribution companies, gathered from trade directories, chamber listings, the partners' own knowledge and existing client introductions.",
      ),
      p(
        "The list is uploaded to LinkedIn as a company audience. Campaigns then show only to people at those companies who hold relevant roles: owners, managing directors, finance managers and financial controllers.",
      ),
      h3("What the ads offer"),
      ul(
        "**Awareness layer:** short posts from the partners and the strongest guides, shown to the whole list so the firm becomes a familiar name.",
        "**Consideration layer:** a practical checklist or guide in exchange for contact details, shown to people who engaged with the first layer.",
        "**Conversion layer:** a tax and VAT review call for trading companies, shown to people who downloaded a guide or visited a service page.",
      ),
      p(
        "The offers are deliberately modest. A stranger will not book a sales meeting with an accounting firm from a first advert. They will read a useful guide. The sequence lets trust build before the firm asks for a conversation.",
      ),
      h3("Assumptions for the paid part of the model"),
      p(
        "In the base case, we assume LinkedIn Ads produce 40 of the 100 enquiries, with the rest coming from organic search, LinkedIn organic activity, AI assistants and direct visits. We also assume a meaningful share of the paid leads are guide downloads from people who are not ready to buy. That is why the qualification rate for the whole model sits at 40 percent, not higher.",
      ),
      p(
        "Lead forms inside LinkedIn usually produce more leads at a lower cost each. Landing pages on the firm's own site usually produce fewer leads that are more serious. The plan tests both and compares them on cost per qualified lead, never on cost per lead alone.",
      ),
      { t: "img", photo: { id: "photo-1532622785990-d2c36a76f5a6", alt: "Two people planning a strategy on a whiteboard", by: "Kaleidico", user: "kaleidico" }, caption: "A named account list keeps LinkedIn spend on the companies that fit the ideal customer profile." },
      note(
        "Follow-up decides the result",
        "A LinkedIn lead that waits three days for a reply is usually lost. In this plan, a named person contacts every new lead within one working day, with a short, useful message and no pressure. If the firm cannot commit to that, it should fix the follow-up process before spending on ads.",
      ),

      h2("Workstream detail: analytics and reporting", "analytics-reporting"),
      p(
        "The KPI framework only works if the data behind it is trustworthy. Setting that up is a job for Quarter 1, before any traffic arrives. Our [marketing analytics and reporting](/services/marketing-analytics-and-reporting) page describes the general approach.",
      ),
      h3("What gets measured"),
      ul(
        "Form submissions, phone link clicks and WhatsApp link clicks are recorded as key events in Google Analytics 4.",
        "LinkedIn conversions are set up for guide downloads and review call requests.",
        "Every enquiry is logged in one place with its source, the date, whether it was qualified and what happened next.",
        "Every new contact is asked how they heard about the firm, because tracking tools miss a lot in B2B.",
        "Lost proposals are given a reason: price, timing, chose a competitor, or no decision.",
      ),
      p(
        "That last column is easy to skip and very valuable. If most lost deals say \"price\", the firm may be attracting the wrong size of company. If they say \"no decision\", the proposals may not be making the cost of doing nothing clear.",
      ),
      h3("The monthly report"),
      p(
        "The report is one page. It shows the KPIs listed earlier, compares each with the target for that quarter, and ends with three short sections: what happened, what we learned, and what will change next month. It is discussed in one call. Anything that does not help a decision is left out.",
      ),
      h3("The definition of a qualified lead"),
      p(
        "The whole model depends on the qualification rate, so the definition must be written down and applied the same way each month. For this firm, a qualified lead is a company that matches the ideal customer profile on sector and size, has a current need for at least one core service, and has a decision-maker involved in the conversation. Anything else is logged as an enquiry but not as a qualified lead.",
      ),

      h2("The modelled outcome: low, base and high cases", "modelled-outcome"),
      p(
        "A single forecast invites false confidence. A sensible plan shows a range. Below are three cases for the first 12 months. The budget assumption stays at AED 240,000 in all three, so the difference comes only from how well the marketing performs. All three are modelled. None is a result.",
      ),
      h3("Low case"),
      ul(
        "Enquiries: 60. Qualification rate: 35 percent. Close rate: 25 percent.",
        "60 x 35 percent = 21 qualified leads. 21 x 25 percent = 5.25, so about five new clients.",
        "First-year contract value: 5.25 x AED 60,000 = AED 315,000.",
        "Cost per new client: AED 240,000 / 5.25 = about AED 45,700.",
        "Payback period: AED 45,700 / AED 2,500 = about 18 months.",
      ),
      h3("Base case"),
      ul(
        "Enquiries: 100. Qualification rate: 40 percent. Close rate: 30 percent.",
        "100 x 40 percent = 40 qualified leads. 40 x 30 percent = 12 new clients.",
        "First-year contract value: 12 x AED 60,000 = AED 720,000.",
        "Cost per new client: AED 240,000 / 12 = AED 20,000.",
        "Payback period: AED 20,000 / AED 2,500 = 8 months.",
      ),
      h3("High case"),
      ul(
        "Enquiries: 140. Qualification rate: 45 percent. Close rate: 35 percent.",
        "140 x 45 percent = 63 qualified leads. 63 x 35 percent = 22.05, so about 22 new clients.",
        "First-year contract value: 22.05 x AED 60,000 = AED 1,323,000.",
        "Cost per new client: AED 240,000 / 22.05 = about AED 10,900.",
        "Payback period: AED 10,900 / AED 2,500 = about 4.4 months.",
      ),
      p(
        "Look at how wide the range is. The high case wins four times as many clients as the low case from the same budget. Small changes in each rate multiply together. That is the most important lesson in the model: improving the qualification rate and the close rate is worth as much as generating more enquiries, and it usually costs less.",
      ),
      h3("How to read the low case"),
      p(
        "The low case is not a disaster, but it needs an honest look. An 18-month payback only makes sense if clients stay well beyond 18 months. For a firm whose clients stay for many years, it may still be acceptable in year one, because the pages, guides and audience built in the first year keep working in the second without being paid for again. For a firm with high client turnover, the low case would be a signal to stop and rethink.",
      ),
      h3("What the model leaves out"),
      ul(
        "Clients who buy extra services later, which raises their value above AED 60,000.",
        "Clients who leave in the first year, which lowers it.",
        "Referrals that the new clients themselves generate.",
        "The partners' time spent on interviews, reviews and LinkedIn posts, which is a real cost even if no invoice is raised.",
        "Capacity. Twelve or more extra clients need people to serve them, and hiring takes time.",
      ),
      p("A fuller model would include these. We left them out to keep the arithmetic easy to follow. Add them when you build your own."),
      { t: "img", photo: { id: "photo-1460925895917-afdab827c52f", alt: "Laptop showing a website analytics dashboard", by: "Carlos Muza", user: "kmuza" }, caption: "Low, base and high cases are agreed in advance, then replaced with actual figures as the year goes on." },

      h2("What could go wrong", "risks"),
      p("Every plan has risks. Naming them early makes them easier to spot and cheaper to fix. These are the ones most likely to affect a firm like the one in this scenario."),
      h3("The partners do not have time"),
      p(
        "The plan needs partner input for interviews, content review and LinkedIn posts. In busy season that time disappears. The fix is to schedule the heavy input outside peak periods and to batch it: one hour a fortnight to answer questions that a writer then turns into drafts.",
      ),
      h3("The positioning is too timid"),
      p(
        "Under pressure, firms water the message back down to \"we serve all businesses\". When that happens, the content loses its edge and the ads lose their relevance. Hold the positioning for at least a full year before judging it.",
      ),
      h3("Leads arrive but nobody follows up"),
      p(
        "This is the most common cause of a low close rate. If a qualified lead does not hear back within a day, the close rate assumption in the model will not hold. Assign one named owner for follow-up and report response time alongside the other KPIs.",
      ),
      h3("The named account list is poor"),
      p(
        "If the list contains the wrong companies, LinkedIn will faithfully show adverts to the wrong people. Check the list against the ideal customer profile before launch and refresh it each quarter.",
      ),
      h3("Tax content goes out of date"),
      p(
        "Rules and guidance change. A page that was right when it was written can become misleading. The plan includes a review date on every tax page and a fixed schedule for partner review. Readers are always told to confirm current requirements with the Federal Tax Authority.",
      ),
      h3("The firm judges the plan too early"),
      p(
        "In the model, Quarter 1 produces nothing and Quarter 2 produces very little. An owner who compares month four against the annual target will want to stop. Quarterly targets, agreed at the start, prevent that.",
      ),
      h3("Growth outruns delivery"),
      p(
        "Winning clients faster than the team can serve them damages the reply times the positioning promised. If the high case starts to appear, the firm should slow the ads and hire before it sells more.",
      ),

      h2("Cost and time assumptions", "cost-time"),
      p(
        "We used a single budget figure in the model to keep the arithmetic clean. In practice a budget has several parts, and the split changes through the year. We are not quoting prices here. Fees depend on scope, and any real proposal would be built from the firm's own situation.",
      ),
      h3("Where the money goes, in broad terms"),
      ul(
        "**Early months:** mostly research, strategy, tracking and website work. Little or no advertising spend.",
        "**Middle months:** content production takes the largest share, with a small test budget for LinkedIn.",
        "**Later months:** advertising spend becomes the largest single item, with content and reporting continuing.",
      ),
      h3("Where the time goes"),
      ul(
        "Partners: a few hours a month for interviews, content review and LinkedIn activity, with more in the first quarter.",
        "A named follow-up owner: time each day to respond to leads and record outcomes.",
        "The finance manager or office manager: help with the client list analysis and the lead log.",
      ),
      h3("How to set your own budget"),
      p(
        "Work backwards from the model. Decide how many new clients you want from marketing. Divide by your close rate to get qualified leads, then by your qualification rate to get enquiries. Decide the longest payback period you are comfortable with, multiply it by your monthly contribution per client, and you have the most you should pay to win one client. Multiply that by your client target and you have a ceiling for the annual budget.",
      ),
      p(
        "For the firm in this scenario: 12 clients, a 10-month maximum payback and AED 2,500 monthly contribution gives a ceiling of AED 25,000 per client and AED 300,000 a year. The AED 240,000 assumed in the model sits below that ceiling, which leaves room for error.",
      ),
      note(
        "Start with a test, not a commitment",
        "A firm that has never marketed itself does not know its own rates yet. A sensible first step is one quarter of foundations plus a small, measured test. That produces real numbers to replace the assumptions, and the full-year plan can then be built on evidence.",
      ),

      h2("How to adapt this plan to your firm", "adapt"),
      p("The scenario is fictional, but the method transfers. Here is how to use it."),
      ol(
        "**Write down your baseline.** Enquiries a month, the share that fit, the share that close, and your average annual fee.",
        "**Find your best clients.** Sort your client list by fee, length of relationship and ease of service. Look for the pattern.",
        "**Interview a handful of them.** Ask why they chose you and what nearly stopped them. Keep their exact words.",
        "**Decide who you are for.** Write a positioning statement that names a buyer and makes promises you can keep.",
        "**Build the pages first.** One focused page for each core service and one for your main sector.",
        "**Answer real questions.** Publish guides that start with a direct answer and are reviewed by a qualified person.",
        "**Add paid reach narrowly.** A named account list on LinkedIn, with modest offers and fast follow-up.",
        "**Measure the four links.** Enquiries, qualification rate, close rate and retainer value, reported monthly.",
        "**Plan in three cases.** Agree low, base and high before you start, and replace them with real figures as they arrive.",
      ),
      p(
        "If your firm serves a different market, change the details and keep the order. A firm focused on clinics or contractors would choose different topics and a different account list. A firm whose buyers search more than they browse LinkedIn would put more weight on search and less on paid social. Our page on [marketing for accounting firms](/industries/accounting-firms) covers the search side in more detail.",
      ),
      p(
        "If you would like help building the model with your own numbers, [book a consultation](/contact). We will look at your baseline, tell you which assumptions look weakest, and say plainly whether a plan like this one is likely to pay back for a firm of your size.",
      ),
    ],
    faqs: [
      {
        q: "Is this a real case study?",
        a: "No. It is an illustrative scenario built to show how a marketing plan and its numbers fit together. The firm is fictional and every figure is an assumption. Use it as a template, and replace each number with your own before drawing conclusions.",
      },
      {
        q: "How do I calculate the payback period for a new retainer client?",
        a: "Divide what you spent to win the client by the monthly contribution that client brings in. In the base case of this model, AED 20,000 per client divided by AED 2,500 monthly contribution gives eight months. Compare the answer with how long your clients normally stay.",
      },
      {
        q: "Why does the plan start with research and not advertising?",
        a: "Adverts send people to your website. If the website does not explain who you are for and why a buyer should choose you, that traffic is wasted. Research and positioning give the pages and the ads something specific to say, which improves both the qualification rate and the close rate.",
      },
      {
        q: "Are LinkedIn Ads worth it for a small accounting firm?",
        a: "They can be, when they are aimed at a named list of companies that match your ideal customer and when leads are followed up within a day. LinkedIn costs more per click than most channels, so broad targeting usually wastes money. Judge it on cost per qualified lead, not on clicks or downloads.",
      },
      {
        q: "How long before a plan like this produces enquiries?",
        a: "In this model, the first quarter produces almost none, because it is spent on research, tracking and service pages. Enquiries begin in the second quarter and build through the year. Real timing depends on your starting point, your market and how consistently the work is done.",
      },
      {
        q: "Can an accounting firm publish tax content safely?",
        a: "Yes, with care. State general principles, avoid figures that change, show the date each page was last reviewed, and have a qualified person check every piece. Always tell readers to confirm current rules with the Federal Tax Authority or their own adviser before acting.",
      },
    ],
  },
];
