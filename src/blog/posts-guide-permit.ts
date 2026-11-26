import type { Post } from "./types";
import type { Source } from "../sources";

export const GUIDE_PERMIT_SOURCES: Source[] = [
  { name: "UAE Media Council (official website and e-services)", url: "https://uaemc.gov.ae" },
  { name: "UAE Media Council signs four MoUs to streamline Visiting Advertiser Permit process, Emirates News Agency (WAM)", url: "https://www.wam.ae/en/article/bn4kwsv-uae-media-council-signs-four-mous-streamline" },
  { name: "The official portal of the UAE Government (u.ae)", url: "https://u.ae" },
  { name: "UAE Introduces Mandatory Advertiser Permit for Content Creators, Al Tamimi & Company", url: "https://www.tamimi.com/law-update/technology-edition/articles/uae-introduces-mandatory-advertiser-permit-for-content-creators/" },
  { name: "UAE Advertiser Permit: Applicability for Sole Establishments Only (Part 2), Al Tamimi & Company", url: "https://www.tamimi.com/law-update/the-technology-issue-2026/articles/uae-advertiser-permit-applicability-for-sole-establishments-only-part-2/" },
  { name: "UAE influencer licence deadline looms, Pinsent Masons Out-Law", url: "https://www.pinsentmasons.com/out-law/news/uae-influencer-licence-deadline-looms" },
  { name: "Advertiser Permit UAE: Who needs it and how to apply online, Gulf News", url: "https://gulfnews.com/living-in-uae/telephone-internet/advertiser-permit-uae-who-needs-it-and-how-to-apply-online-1.500278441" },
];

const D = "2026-11-26";

export const GUIDE_PERMIT_POSTS: Post[] = [
  {
    slug: "uae-advertiser-permit-influencer-marketing-businesses",
    title: "UAE Advertiser Permit: What a Business Should Check Before Working With an Influencer",
    seoTitle: "UAE Advertiser Permit: What Businesses Should Check",
    description:
      "A plain guide to the UAE Advertiser Permit for businesses: who needs one, what to ask a creator for, contract checks and a pre-campaign checklist.",
    category: "Websites & Content",
    date: D,
    updated: D,
    answer:
      "The UAE Advertiser Permit is a permit from the UAE Media Council for individuals who publish advertising on social media. Before a business works with an influencer or content creator, it should ask for proof of the permit, record the permit number, confirm that the creator's accounts show it, and write the requirement into the contract. Visiting creators are reported to need a permit arranged through an agency accredited by the Council. Sector rules for healthcare and property advertising still apply on top.",
    keywords: ["uae advertiser permit", "advertiser permit uae influencers", "influencer marketing rules uae", "uae media council advertiser permit", "visiting advertiser permit uae"],
    takeaways: [
      "The Advertiser Permit is issued by the UAE Media Council to individuals who advertise on social media, and reports say it covers paid and unpaid promotion.",
      "Ask every creator for proof of the permit and its number before you agree or pay anything, and keep a copy.",
      "Write the permit number and a duty to follow the rules into the contract.",
      "Visiting creators are reported to need a permit arranged through a Council-accredited agency.",
      "Health authority approval and Trakheesi permits still apply to medical and property advertising.",
    ],
    body: [
      {
        t: "p",
        text: "If your business pays, gifts or simply invites a creator to promote it on social media in the UAE, there is now one more thing to check before the first post goes live. The UAE Media Council has introduced an Advertiser Permit for people who publish advertising content on social media. The rule is aimed at the individual who posts, but it changes what a careful business should ask for before it hires one.",
      },
      {
        t: "callout",
        title: "General information, not legal advice",
        text: "This guide is general information and is not legal advice. It is based on official announcements, news reports and law firm commentary available on the date shown, and the rules are still new. Always confirm the current requirements with the UAE Media Council, or with a lawyer, before you run a campaign.",
      },
      { t: "h2", text: "What the Advertiser Permit is", id: "what-it-is" },
      {
        t: "p",
        text: "The Advertiser Permit is a permit issued by the UAE Media Council, the federal body that regulates media in the country. It was announced at the end of July 2025 under the UAE's federal media law. In simple terms, it is the Council's way of knowing who is publishing advertising on social media, and of holding those people to a set of content standards.",
      },
      {
        t: "p",
        text: "Applications are made online through the Media Council's e-services. Reports describe the permit as one that is granted to an individual, which is linked to the specific social media accounts that person registers with the Council. That detail matters to a business, and we come back to it below.",
      },
      { t: "h2", text: "Who needs a permit, and who is reported to be exempt", id: "who-needs-it" },
      {
        t: "p",
        text: "According to law firm notes and news coverage, the permit applies to individuals who publish promotional content on social media in the UAE. That includes citizens, residents and visitors. The definition is reported to cover advertising whether the person is paid in money, paid in kind with gifts or free services, or not paid at all. So a free meal in return for a post should be treated the same way as a paid campaign.",
      },
      {
        t: "p",
        text: "News reports, including a Gulf News explainer, describe two main exemptions:",
      },
      {
        t: "ul",
        items: [
          "Individuals who promote their own products or services, or those of a company they own, through their personal accounts.",
          "People under 18 who take part in educational, sports, cultural or awareness activities, subject to the age rules in the relevant legislation.",
        ],
      },
      {
        t: "p",
        text: "Sources differ on a few details. The original announcement gave creators a grace period, and the deadline was later extended. Some sources say the permit became mandatory on 31 January 2026 and others say 1 February 2026. Reports also say the permit is free for citizens and residents for an initial period, and that resident applicants may need a suitable trade licence as well. Because these points have changed once already, check the Media Council's website for the position today.",
      },
      {
        t: "img",
        photo: { id: "photo-1616094620696-15a31bf047ed", alt: "Woman holding a smartphone in both hands at a wooden table", by: "Clay Banks", user: "claybanks" },
        caption: "The permit is tied to the person who posts and to the accounts they register, so check both.",
      },
      { t: "h2", text: "What changes for a business that hires a creator", id: "business-checks" },
      {
        t: "p",
        text: "The permit is the creator's responsibility to obtain. Even so, a campaign that runs through an unpermitted account is a risk for the brand that commissioned it, and some commentary notes that responsibility may also reach the brands and agencies involved. The sensible approach is to treat the permit like any other supplier check.",
      },
      { t: "h3", text: "Ask for the permit before you agree anything" },
      {
        t: "p",
        text: "Lawyers at Pinsent Masons advise businesses to ask for proof of the Advertiser Permit before engaging or paying any influencer. Ask for a copy of the permit and the permit number, note the date you checked, and keep the copy with the campaign file.",
      },
      { t: "h3", text: "Put it in the contract" },
      {
        t: "p",
        text: "The same commentary suggests adding a clause to influencer contracts that records the permit number and requires the creator to comply with the law. A short, clear clause is enough for most small campaigns: the creator confirms they hold a valid permit for the accounts being used, agrees to keep it valid for the length of the campaign, and agrees to tell you at once if that changes. Ask your lawyer to check the wording.",
      },
      { t: "h3", text: "Check the account, not only the person" },
      {
        t: "p",
        text: "News reports say permit holders must display the permit number clearly on their social media accounts, and may only publish advertisements through accounts that are registered with the Council and linked to the permit. Reports also say a holder must not let other people advertise through a registered account. Before you approve a campaign, look at the actual profiles your content will appear on and confirm the permit number is shown and that these are the registered accounts.",
      },
      { t: "h3", text: "Check the content" },
      {
        t: "p",
        text: "Permit holders are expected to follow content standards set by the Media Council. As the brand, you approve the message, so read every script and caption before it is posted. Remove claims you cannot prove, make sure the post is honest about being promotional, and check that prices, offers and terms are correct. If you run [social media management](/services/social-media-management) in-house or through a partner, add this review step to your normal approval process.",
      },
      { t: "h2", text: "Visiting creators and agencies", id: "visiting-creators" },
      {
        t: "p",
        text: "Many UAE campaigns use creators who fly in for a launch, a hotel stay or an event. Reports describe a separate Visiting Advertiser Permit for people who are not residents. A visiting creator does not apply alone. The application is made through an advertising or talent management agency that is accredited by the Media Council, and the Council has announced agreements with agencies to make this process easier, as reported by the Emirates News Agency.",
      },
      {
        t: "p",
        text: "The visiting permit is reported to be valid for about three months and to be renewable, although sources describe the maximum period in slightly different ways. For a business, the practical step is to ask early. If you plan to bring in a creator from abroad, ask which accredited agency is handling the permit, ask for the permit before travel is booked, and allow time for it in your campaign plan.",
      },
      {
        t: "img",
        photo: { id: "photo-1619418602850-35ad20aa1700", alt: "Wooden rubber stamp resting on an open printed legal document", by: "Markus Spiske", user: "markusspiske" },
        caption: "Record the permit number in the contract and keep a copy of the permit with the campaign file.",
      },
      { t: "h2", text: "Your own company accounts, staff and founders", id: "company-accounts" },
      {
        t: "p",
        text: "This is the area with the most open questions, so read it as a summary of commentary and not as a settled answer. News reports say an individual who promotes their own business, or a company they own, through personal accounts is exempt. That appears to help a founder who posts about their own company.",
      },
      {
        t: "p",
        text: "Lawyers at Al Tamimi & Company have written that a company cannot apply for the Advertiser Permit in its own name, and that the permit is available to individuals, including those who operate through a sole establishment or a similar single-owner structure. For companies with several shareholders or corporate shareholders, their commentary points to the company's own licensing as the practical route to lawful social media advertising, which means checking that the trade licence covers the relevant media activities.",
      },
      {
        t: "p",
        text: "What does this mean for an employee who posts about the employer's products on a personal account, or for a brand ambassador on a retainer? The commentary we have read does not give one simple answer for every case. If staff, partners or ambassadors promote your business from their own accounts, take advice on whether they need a permit and whether your licence covers what the company itself publishes.",
      },
      {
        t: "callout",
        title: "Take advice on your own structure",
        text: "The answer can depend on who owns the company, what activities are on the trade licence, and whether the person posting is an owner, an employee or an outside creator. A short call with a UAE media lawyer, or a question to the Media Council, costs far less than a campaign that has to be taken down.",
      },
      { t: "h2", text: "Sector rules still apply on top", id: "sector-rules" },
      {
        t: "p",
        text: "The Advertiser Permit does not replace the advertising rules for regulated sectors. It sits beside them. A creator with a valid permit can still publish a post that breaks a sector rule, and the business behind the campaign will be the one answering for it.",
      },
      {
        t: "ul",
        items: [
          "**Healthcare:** medical advertising in the UAE generally needs approval from the relevant health authority, and the Dubai Health Authority has published standards for medical advertising on social media. A clinic that works with a creator should check both the creator's permit and its own advertising approval. Our page on [marketing for hospitals and clinics](/industries/hospitals-clinics) covers the wider picture.",
          "**Property:** property advertising in Dubai generally needs a Trakheesi permit from the Dubai Land Department. See our guide to the [Trakheesi permit for property advertising](/blog/trakheesi-permit-property-advertising-dubai) before a creator films a listing.",
          "**Other regulated areas:** financial services, education and similar sectors have their own regulators and their own advertising rules. Ask the regulator for your sector what applies to promotions by third parties.",
        ],
      },
      { t: "h2", text: "A pre-campaign checklist", id: "checklist" },
      {
        t: "p",
        text: "Use this short list before any creator campaign.",
      },
      {
        t: "ol",
        items: [
          "Ask the creator for a copy of their Advertiser Permit and the permit number, and note the date you received it.",
          "For a visiting creator, ask which Council-accredited agency arranged the permit and ask for the visiting permit itself.",
          "Open the accounts the content will run on and check that the permit number is displayed and that these are the registered accounts.",
          "Add a contract clause that records the permit number and requires the creator to follow the law and the Council's content standards.",
          "Review every script, caption and visual before it is posted, and remove claims you cannot support.",
          "Check your sector rules, such as health authority approval or a Trakheesi permit, and get those approvals first.",
          "Check that your own trade licence covers what your company publishes, and take advice if staff or ambassadors post for you.",
          "Keep the permit copy, the contract and the approved content together in one campaign file.",
        ],
      },
      {
        t: "img",
        photo: { id: "photo-1517048676732-d65bc937f952", alt: "Colleagues reviewing documents at a meeting table", by: "Dylan Gillis", user: "mainermedia" },
        caption: "A short internal review before each campaign is easier than fixing a post after it has gone live.",
      },
      { t: "h2", text: "What to do if a creator has no permit", id: "no-permit" },
      {
        t: "p",
        text: "Do not go ahead and hope for the best. Explain that you need the permit before any content is published, and give the creator time to apply. If the launch date cannot move, choose a creator who already holds a permit, or use channels that you control. Reports say the rules carry fines for advertising without a permit. The amounts quoted differ between sources, so we have not repeated them here. Check the current penalties with the Media Council.",
      },
      { t: "h2", text: "Where your own content and paid ads fit", id: "own-channels" },
      {
        t: "p",
        text: "Creator campaigns are one way to reach people, and they work best next to channels you own. Your company's website, your own social accounts and paid campaigns run from your own ad accounts stay under your control, and you decide the message, the budget and the timing.",
      },
      {
        t: "p",
        text: "SEODXB does not act as an influencer agency and cannot issue or arrange permits. We help UAE businesses plan content, manage their own social accounts and run paid campaigns such as [Meta Ads](/services/meta-ads-management) and [TikTok Ads](/services/tiktok-ads-management). If you would like a second opinion on how creator content could fit into your wider plan, you can [book a free consultation](/contact).",
      },
    ],
    faqs: [
      {
        q: "Does a business need an Advertiser Permit to hire an influencer?",
        a: "The permit is held by the individual who publishes the advertising, so the creator needs it, not the business that hires them. The business should still ask for proof of the permit, record the number and write it into the contract. Whether your own company accounts need any separate licensing depends on your structure and trade licence, so confirm that point with the UAE Media Council or a lawyer.",
      },
      {
        q: "Does the permit apply if the creator is only given a free product?",
        a: "Reports say the permit covers advertising on social media whether the creator receives money, a gift, a free service or nothing at all. A free product in return for a post should be treated like a paid campaign. Ask for the permit in the same way, and keep the same records.",
      },
      {
        q: "What should we ask a visiting influencer for?",
        a: "Visiting creators are reported to need a Visiting Advertiser Permit, arranged through an advertising or talent management agency accredited by the UAE Media Council. Ask which agency is handling it and ask for the permit itself before travel is booked. Sources describe the validity period in slightly different ways, so check the current rule with the agency or the Council.",
      },
      {
        q: "Do founders and staff need a permit to post about their own company?",
        a: "News reports say individuals who promote their own business, or a company they own, through personal accounts are exempt. The position for employees and brand ambassadors is less clear in the commentary we have read. Law firm notes also say a company cannot hold the permit in its own name. Take advice on your own structure before staff promote the business from personal accounts.",
      },
      {
        q: "Does the Advertiser Permit replace health or property advertising approvals?",
        a: "No. Sector rules still apply on top of the permit. Medical advertising generally needs approval from the relevant health authority, and property advertising in Dubai generally needs a Trakheesi permit. A campaign with a creator needs both the creator's permit and your own sector approval. Confirm the current requirements with the regulator for your sector.",
      },
    ],
  },
];
