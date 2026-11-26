import type { Post } from "./types";
import type { Source } from "../sources";

export const GUIDE_DHA_SOURCES: Source[] = [
  { name: "Dubai Health Authority (DHA)", url: "https://www.dha.gov.ae" },
  { name: "Ministry of Health and Prevention (MOHAP)", url: "https://mohap.gov.ae" },
  { name: "Department of Health, Abu Dhabi", url: "https://www.doh.gov.ae" },
  { name: "Dubai Healthcare City Authority (DHCC)", url: "https://www.dhcc.ae" },
  { name: "Gulf News: Dubai issues social media rules for doctors, health facilities and influencers", url: "https://gulfnews.com/uae/health/dubai-issues-social-media-rules-for-doctors-health-facilities-and-influencers-bans-misleading-claims-1.500659503" },
  { name: "Khaleej Times: Dubai authority lists words clinics cannot use in ads", url: "https://www.khaleejtimes.com/uae/dubai-health-authority-claims-words-cannot-be-used-in-doctor-clinic-social-media-ads" },
  { name: "Al Tamimi & Company: Healthcare advertising in the UAE", url: "https://www.tamimi.com/law-update-articles/healthcare-advertising-in-the-uae" },
];

const D = "2026-11-26";

export const GUIDE_DHA_POSTS: Post[] = [
  {
    slug: "dha-mohap-healthcare-advertising-rules-clinics",
    title: "Healthcare Advertising Rules in the UAE: What Clinics Need to Know Before They Advertise",
    seoTitle: "Healthcare Advertising Rules in the UAE for Clinics",
    description:
      "A plain guide to healthcare advertising rules in the UAE: which authority covers your clinic, what ads may not say, and a simple approval workflow.",
    category: "Industry Guides",
    date: D,
    updated: D,
    answer:
      "Healthcare advertising in the UAE is regulated, and the rules depend on where a facility is licensed: the Dubai Health Authority for Dubai, the Department of Health for Abu Dhabi, the Ministry of Health and Prevention for other emirates, and free zone regulators such as Dubai Healthcare City. Advertising generally needs approval or a licence before it runs, and content must avoid misleading, exaggerated or fear-based claims. This guide is general information, so confirm current requirements with your own authority.",
    keywords: [
      "healthcare advertising rules uae",
      "DHA advertising approval",
      "MOHAP advertising licence",
      "medical advertising Dubai",
      "clinic marketing rules UAE",
      "DHA social media advertising standards",
    ],
    takeaways: [
      "Your licensing authority decides which advertising rules apply, so start by checking who licenses your facility.",
      "Assume an advertisement needs approval or a licence before it is published, and confirm the process with your authority.",
      "Dubai's social media standards restrict absolute, exaggerated, misleading and fear-based claims.",
      "Titles in an advert must match the professional's licence, and an authority's name or logo needs written approval.",
      "A short internal workflow, with one owner and a file of approvals, prevents most problems.",
    ],
    body: [
      {
        t: "p",
        text: "A clinic can lose weeks of marketing because one advert went out without approval, or because a social post used a phrase the regulator does not allow. In the UAE, healthcare advertising is treated differently from advertising for most other businesses. Health authorities review what facilities say to the public, and they can act when a campaign runs without approval.",
      },
      {
        t: "p",
        text: "This guide explains the general picture for [hospitals and clinics](/industries/hospitals-clinics): which authority covers you, what kind of content is restricted, how the rules touch your website, ads and social media, and a workflow your team can follow. It is written for owners and marketing managers, not lawyers.",
      },
      {
        t: "callout",
        title: "General information, not legal advice",
        text: "This guide is general information and not legal advice. Rules, fees and procedures change, and they differ between authorities. Before you publish any healthcare advertisement, confirm the current requirements with the authority that licenses your facility.",
      },
      { t: "h2", text: "Which authority covers your clinic", id: "which-authority" },
      {
        t: "p",
        text: "The first question is who licenses your facility, because that decides whose advertising rules you follow. Healthcare regulation in the UAE is shared between federal and emirate bodies, and some free zones have their own regulator.",
      },
      {
        t: "ul",
        items: [
          "**Dubai:** facilities and professionals licensed by the Dubai Health Authority (DHA) follow DHA rules, including its standards for medical advertisement content on social media.",
          "**Abu Dhabi:** facilities licensed by the Department of Health (DOH) follow its health media and advertising guidelines.",
          "**Other emirates:** facilities licensed by the Ministry of Health and Prevention (MOHAP) follow the federal process, which includes a licence for healthcare advertisements.",
          "**Free zones:** some zones have their own regulator. Dubai Healthcare City, for example, publishes an advertising policy for the operators it licenses.",
        ],
      },
      {
        t: "p",
        text: "A group with branches in more than one emirate may have to deal with more than one authority. Published guidance also suggests that an emirate or free zone approval and the federal MOHAP licence can both be relevant to the same advert. Do not assume one approval covers every branch or every channel. Ask each authority what it needs.",
      },
      { t: "h2", text: "Approval usually comes before publication", id: "approval-first" },
      {
        t: "p",
        text: "The safest working assumption is that a healthcare advertisement needs approval or a licence before it goes live. MOHAP describes a licence for healthcare advertisements for licensed healthcare institutions, and says the fee depends on the category of the facility's activity and the type of advertisement. Dubai Healthcare City's published policy describes an approval process that gives each approved advert an approval number to show on the material.",
      },
      {
        t: "p",
        text: "In Abu Dhabi, the Department of Health has told facilities to complete a training programme on its health media and advertising guidelines. After that, a facility's representatives can log their advertising and communication materials on the department's systems.",
      },
      {
        t: "p",
        text: "Regulators do enforce these rules. Gulf News has reported the DHA taking action against a dental clinic that ran a marketing and promotional campaign without approval. The cost of getting it wrong is not only a paused campaign. It can also affect the facility's standing with its regulator.",
      },
      {
        t: "callout",
        title: "What this guide does not tell you",
        text: "We have left out fees, processing times and penalties on purpose. They vary by authority, by facility type and by the kind of advertisement, and published figures go out of date. Get them from your authority's current service page before you plan a campaign.",
      },
      {
        t: "img",
        photo: { id: "photo-1758691461990-03b49d969495", alt: "Doctor in a white coat writing notes on a clipboard form", by: "Vitaly Gariev", user: "silverkblack" },
        caption: "Treat advertising approval like any other clinical paperwork: one owner, one file, nothing published without sign-off.",
      },
      { t: "h2", text: "What healthcare adverts may not say", id: "restricted-content" },
      {
        t: "p",
        text: "Dubai's standards for medical advertisement content on social media are the clearest public guide to what regulators object to. They apply to DHA-licensed facilities and professionals who advertise on platforms such as Instagram, Facebook, TikTok, YouTube and LinkedIn. According to the standard and news coverage of it, the main restrictions are these.",
      },
      { t: "h3", text: "Absolute and exaggerated claims" },
      {
        t: "p",
        text: "Wording that presents a treatment or a clinic as certain, unique or risk-free is restricted. Reports of the standard list examples such as \"the best\", \"the only\", \"the safest\", \"100%\", \"no side effects\" and \"immediate results\". Promises of a certain outcome fall into the same group. If a phrase would make a careful doctor uncomfortable in a consultation, it does not belong in an advert.",
      },
      { t: "h3", text: "Misleading or fear-based messages" },
      {
        t: "p",
        text: "Adverts must not mislead, create unrealistic expectations or use fear to push people toward a treatment. Content that makes people anxious about their health in order to sell a procedure is the kind of message the standard targets. Comparing yourself to competitors in a way that claims you are superior is also restricted.",
      },
      { t: "h3", text: "Titles that do not match the licence" },
      {
        t: "p",
        text: "Doctors and facilities must use professional titles that match their licence. A marketing title that sounds more senior or more specialised than the licensed title is a problem, even when it is used as a brand line. Check every name and title on your website, profiles and adverts against the licence itself.",
      },
      { t: "h3", text: "Using an authority's name or logo" },
      {
        t: "p",
        text: "A facility may not use the name or logo of the DHA, or of another government body, without written approval. Lines that suggest a regulator endorses your service, as opposed to licensing your facility, should be avoided.",
      },
      { t: "h3", text: "Patient images and statements" },
      {
        t: "p",
        text: "Published summaries of the standard say that patient photos, videos and statements need the patient's written consent, and that extra conditions apply to patients under 18. Before-and-after images are an area of particular attention, especially for [aesthetic clinics](/industries/aesthetic-clinics). Our guide to [Botox and filler marketing rules](/blog/aesthetic-clinic-marketing-dubai-botox-fillers) covers that case in more detail. Confirm what your authority allows before you use any patient image.",
      },
      { t: "h2", text: "How the rules apply to each marketing channel", id: "by-channel" },
      {
        t: "p",
        text: "Clinics often ask whether the rules cover only paid adverts. Authorities define advertising broadly. The DHA's standard covers information about a health product, service, facility, professional, treatment or therapy. It is wise to treat every public message as covered until your authority tells you otherwise.",
      },
      { t: "h3", text: "Your website" },
      {
        t: "p",
        text: "Service pages, doctor profiles and offers on your website describe treatments to the public, so the same care applies. Keep claims factual, name the licensed professional correctly, and avoid promises about results. This also helps your search visibility, because clear and accurate medical content is what search engines and AI assistants prefer. See our guide to [medical content and E-E-A-T](/blog/medical-content-eeat-hospital-websites).",
      },
      { t: "h3", text: "Google Ads and Meta ads" },
      {
        t: "p",
        text: "Paid campaigns bring two sets of rules. The first is your health authority's approval for the advert. The second is the ad platform's own healthcare policy, which can limit certain treatments, claims and targeting. A campaign can be approved by one and rejected by the other. Plan for both when you set up [Google Ads](/services/google-ads-management) or [Meta ads](/services/meta-ads-management), and keep the landing page consistent with the approved advert.",
      },
      { t: "h3", text: "Social media posts" },
      {
        t: "p",
        text: "Dubai's standard is written for social media, so organic posts, stories, reels and captions are in scope for DHA licensees. Reports of the standard say that content which identifies a health facility should be approved by the facility's medical director before it is published, and that the facility's official account should show its advertising licence number. If an agency or freelancer runs your accounts, they need to follow the same steps.",
      },
      { t: "h3", text: "Influencers and doctors' personal accounts" },
      {
        t: "p",
        text: "The Dubai rules were announced as covering doctors, health facilities and influencers. A paid or gifted post about your clinic is still your advertising, and a doctor's personal account that promotes the clinic is not outside the rules. Influencers in the UAE may also need their own permit to advertise on social media, which is a separate requirement from the health rules. Check both before you sign anyone.",
      },
      { t: "h3", text: "Offers, discounts and packages" },
      {
        t: "p",
        text: "Price promotions for medical services attract extra scrutiny, because they can push people toward treatment they do not need. Do not assume a seasonal offer is allowed because a competitor ran one. Ask your authority whether the offer needs approval and whether any type of promotion is not permitted for your service.",
      },
      {
        t: "img",
        photo: { id: "photo-1593733925160-6f78dc0be8b6", alt: "Person in a white jumper holding a smartphone with both hands", by: "Kelli McClintock", user: "kelli_mcclintock" },
        caption: "Most patients first meet a clinic on a phone screen, so social posts and ads need the same checks as a printed advert.",
      },
      { t: "h2", text: "A simple approval workflow for your team", id: "workflow" },
      {
        t: "p",
        text: "Most compliance problems come from speed. A post goes out on a busy day, or an agency launches an advert from a draft. A short, fixed routine prevents this.",
      },
      {
        t: "ol",
        items: [
          "**Name one owner.** One person in the clinic is responsible for advertising approvals. Agencies and freelancers send everything to that person.",
          "**Draft against a checklist.** Before review, check each piece for absolute claims, fear-based wording, promises of results, correct titles, patient consent and any use of an authority's name or logo.",
          "**Get clinical sign-off.** Have the medical director, or the person your authority names, review the content for accuracy.",
          "**Apply for approval.** Submit to your authority through its current process, with the exact creative you plan to publish.",
          "**Publish only the approved version.** If you change the wording or the image after approval, check whether you need to apply again. Dubai Healthcare City's policy, for example, treats material changed after approval as non-compliant.",
          "**Show what is required.** If your authority gives a licence or approval number that must appear on the material or on your profile, add it.",
          "**Keep a file.** Store the approved creative, the approval, the dates it ran and any patient consent forms, so you can answer questions later.",
        ],
      },
      { t: "h2", text: "Build approval time into your campaign plan", id: "planning" },
      {
        t: "p",
        text: "Approval takes time, and the time varies. A campaign plan that assumes same-day publishing will fail. Work backwards from the launch date and leave room for clinical review, the authority's review and one round of changes.",
      },
      {
        t: "ul",
        items: [
          "Plan seasonal campaigns, such as back to school or Ramadan, well ahead of the date.",
          "Prepare a small library of approved, reusable adverts for your main services, so you are not starting from zero each month.",
          "Agree with your agency who submits, who pays any fees and who stores the approvals.",
          "Check when each approval expires, if your authority sets an expiry, and renew before a long-running advert lapses.",
        ],
      },
      {
        t: "p",
        text: "Channels that depend less on fresh adverts are worth building alongside. A well-kept Google Business Profile, accurate service pages and patient reviews keep bringing enquiries while a campaign waits for approval. Our pages on marketing for [dental clinics](/industries/dental-clinics) and other specialties show how that mix works.",
      },
      {
        t: "img",
        photo: { id: "photo-1758691462878-6edc3d3da1be", alt: "Doctor in glasses talking with a patient across a desk in a clinic office", by: "Vitaly Gariev", user: "silverkblack" },
        caption: "The best test for an advert: would the doctor say the same thing to a patient across the desk?",
      },
      { t: "h2", text: "Common mistakes clinics make", id: "mistakes" },
      {
        t: "ul",
        items: [
          "Treating organic social posts as outside the rules.",
          "Copying a competitor's claim or offer without checking it is allowed.",
          "Letting an agency publish from a draft that the clinic has not approved.",
          "Using a job title in marketing that is different from the licensed title.",
          "Posting patient photos or reviews without written consent on file.",
          "Editing an approved advert and publishing the new version without checking.",
          "Assuming one branch's approval covers a branch licensed by a different authority.",
        ],
      },
      { t: "h2", text: "Where marketing support fits in", id: "support" },
      {
        t: "p",
        text: "A marketing partner cannot approve your adverts. Only your authority can do that, and your medical director remains responsible for clinical accuracy. What a partner can do is write to the rules from the first draft, build approval time into the plan, keep landing pages consistent with approved adverts and track which approved campaigns bring qualified enquiries.",
      },
      {
        t: "p",
        text: "That is how we approach healthcare work at SEODXB, including [social media management](/services/social-media-management) for clinics. If you would like a second pair of eyes on your current marketing, or help planning a campaign around approval times, [get in touch](/contact).",
      },
    ],
    faqs: [
      {
        q: "Do clinics in the UAE need approval before advertising?",
        a: "In general, yes. Healthcare advertising is regulated, and authorities such as the DHA, the Department of Health in Abu Dhabi and MOHAP expect advertisements to be approved or licensed before they are published. The exact process depends on who licenses your facility, so confirm it with that authority.",
      },
      {
        q: "Which authority approves healthcare advertisements in Dubai?",
        a: "It depends on the facility's licence. Facilities licensed by the Dubai Health Authority follow DHA rules, while operators in Dubai Healthcare City follow that free zone's advertising policy. Published guidance suggests the federal MOHAP advertising licence can also be relevant. Ask your regulator which approvals your advert needs.",
      },
      {
        q: "Do the rules apply to social media posts and influencers?",
        a: "Yes for DHA licensees. Dubai's standards for medical advertisement content are written for social media and were announced as covering doctors, health facilities and influencers. Organic posts, stories and paid partnerships that promote a clinic should be treated as advertising.",
      },
      {
        q: "What words should a clinic avoid in adverts?",
        a: "Avoid absolute and exaggerated claims. Reports of Dubai's standard give examples such as \"the best\", \"the only\", \"the safest\", \"100%\", \"no side effects\" and \"immediate results\". Avoid fear-based messages, promises of results and any suggestion that a regulator endorses your service.",
      },
      {
        q: "Can a clinic use before-and-after photos?",
        a: "Only with care. Published summaries of Dubai's standard say patient images need written consent, and before-and-after content is closely watched, especially in aesthetics. Rules differ between authorities, so check what yours allows before using any patient image.",
      },
    ],
  },
];
