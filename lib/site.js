// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE BEFORE LAUNCH.
// Everything marked PLACEHOLDER must be replaced with real data.
// Nothing here should be invented: fake proof is a penalty risk
// and it is the exact thing this site's positioning argues against.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Brand shown in the header, footer and WebSite schema.
  brand: "Waseem Ranker",
  // Legal / personal name: used for Person schema and authorship only.
  name: "Waseem Abbas",
  role: "Local SEO Consultant",
  tagline: "Local SEO Expert in Pakistan",
  url: "https://waseemranker.com",
  email: "info@waseemranker.com",
  // NAP phone. This is the number that must match the Google Business Profile
  // and every citation, character for character. Do not change it casually.
  phone: "+92 316 919 0573",
  // WhatsApp is a separate US number, deliberately. It is a contact channel,
  // not the NAP number, so it is never published as the business phone.
  whatsapp: "15416480021", // digits only, country code, no +
  bookingUrl: "", // PLACEHOLDER: Calendly / Cal.com link, or leave "" to hide the button
  country: "PK",
  countryName: "Pakistan",
  timezone: "Asia/Karachi (UTC+5)",

  // Profiles used for sameAs entity resolution. Delete any you don't have.
  // sameAs targets for entity resolution. Only verified, owned profiles here.
  // A dead or unverified URL in sameAs is worse than an empty array.
  profiles: [
    "https://www.youtube.com/@WaseemAbbasseo",
    "https://share.google/OmLjd0rubKADBailS",
  ],
};

// Overlap hours shown to overseas buyers.
export const overlap = [
  { region: "United Kingdom", hours: "8:00am to 4:00pm GMT", note: "Full working-day overlap" },
  { region: "US East Coast", hours: "8:00am to 12:00pm ET", note: "Morning overlap, daily" },
  { region: "US West Coast", hours: "8:00am to 10:00am PT", note: "Early-morning overlap" },
  { region: "UAE / Saudi", hours: "7:00am to 6:00pm GST", note: "Near-full overlap" },
  { region: "Australia (AEST)", hours: "1:00pm to 7:00pm AEST", note: "Afternoon overlap" },
];

// PLACEHOLDER: replace each entry with a real engagement.
// Rule: no case study ships without a dated screenshot you can produce on request.
// Three engagements pulled from the portfolio page, one per niche.
// Every figure is read off the dated screenshot in /public/portfolio.
// No before/after baselines are published because the exports show a
// period's performance, not a documented starting point.
export const caseStudies = [
  {
    vertical: "Locksmith",
    location: "Miami, Florida, USA",
    window: "28 days",
    source: "Google Search Console",
    problem:
      "One of the most aggressively contested local categories in one of the hardest US metros. The account shows a dip through late September before the corrected work began to hold.",
    metrics: [
      { label: "Clicks", value: "3,050" },
      { label: "Impressions", value: "150,000" },
      { label: "Average position", value: "6.8" },
    ],
    work:
      "Profile correction, service page rebuild and technical fixes, tracked on a geo-grid across the service radius. The climb from late September does not come back down.",
  },
  {
    vertical: "Pest control",
    location: "Birmingham, UK",
    window: "3 months",
    source: "Google Search Console",
    problem:
      "For the first two months the chart sits flat along the bottom. The business existed in search but was effectively invisible, and the phone reflected it.",
    metrics: [
      { label: "Clicks", value: "5,800" },
      { label: "Impressions", value: "270,000" },
      { label: "Best single day", value: "151 clicks" },
    ],
    work:
      "Rebuilt profile, content and technical foundations together. Pest control is spike-driven, so the win is being visible on the spike day: 151 clicks and 9,292 impressions from one day's search.",
  },
  {
    vertical: "Car rental",
    location: "St. Louis, Missouri, USA",
    window: "6 months",
    source: "Google Business Profile",
    problem:
      "A depot business where the transaction requires someone to physically turn up, so rankings on their own prove nothing.",
    metrics: [
      { label: "Direction requests", value: "247" },
      { label: "Peak month", value: "~65" },
      { label: "Period", value: "May to October 2025" },
    ],
    work:
      "Profile rebuilt around the travel calendar. Direction requests are the most honest metric in local search: nobody asks for directions to a business they are not intending to visit.",
  },
];

// Client testimonials. Names supplied by the client and published with
// permission. Wording tidied for readability: confirm the final text with
// each person before launch, since their name is on it.
export const testimonials = [
  {
    quote:
      "We hired Waseem to fix our Google Business Profile. Within two months our restaurant was showing up in the top 3 on Google Maps for 'near me' searches. Phone calls and walk-ins have nearly doubled.",
    author: "Abdul Azeem",
    detail: "Restaurant owner",
  },
  {
    quote:
      "We run a pest control service and were invisible on Google. After Waseem optimised our Business Profile we started ranking in the top 3 for 'pest control near me'. We now get daily calls for termite treatment and fumigation, and most of our new customers find us on Google.",
    author: "Jehanzaib Khattak",
    detail: "Pest control company owner",
  },
];

export const pricing = [
  {
    tier: "GMB Optimization",
    usd: "$270",
    cadence: "per month",
    best: "One business, one Google Business Profile, profile work only",
    includes: [
      "Google Business Profile optimisation and weekly activity",
      "Category, service and attribute tuning",
      "Geo-grid rank tracking across your service radius",
      "Compliant review generation system",
      "Photo, product and Q&A management",
      "Suspension risk audit, and appeal handling if it happens",
      "Monthly call, direction-request and conversion reporting",
    ],
    note: "This tier works on the profile, not the website. If your site is the bottleneck, this alone will not fix it. That is the next tier.",
  },
  {
    tier: "Complete Local SEO Optimization",
    usd: "$390",
    cadence: "per month, ongoing",
    best: "One business that wants the profile and the website pulling together",
    includes: [
      "Everything in GMB Optimization",
      "Location and service page rebuild",
      "Citation audit and NAP correction across the major aggregators",
      "Schema and entity markup",
      "Technical fixes: speed, indexation and internal linking",
      "AI Overview and LLM citation work",
      "Monthly call and lead reporting, not rank reports",
    ],
    note: "The most common starting point. Profile-only work plateaus once competitors with stronger sites catch up.",
  },
  {
    tier: "Multi-Location Local SEO Services",
    usd: "$750",
    cadence: "per month",
    best: "Clinics, franchises and firms running several branches",
    includes: [
      "Everything in Complete Local SEO, applied per branch",
      "Cross-location NAP governance",
      "Centralised, policy-compliant review process",
      "Cannibalisation and duplicate listing control",
      "Location landing page architecture",
      "Consolidated reporting, broken out by location",
    ],
    note: "One non-compliant review process replicated across ten branches is ten violations. Governance is the real work at this tier.",
  },
];

export const faqs = [
  {
    q: "How much does a local SEO expert in Pakistan cost?",
    a: "My published rates are $270 per month for Google Business Profile optimisation, $390 per month for complete local SEO covering both the profile and the website, and $750 per month for multi-location work. Those are the actual prices, not starting points that move on a sales call. The variables that would change a quote are the number of locations, how competitive your metro is, whether your site needs remediation before optimisation can start, and how much cleanup a previous provider left behind. For comparison, a US agency typically quotes $1,500 to $3,500 per month for the same scope.",
  },
  {
    q: "Is SEO replaced by AI in 2026?",
    a: "No, but the shape of it has changed. AI Overviews now appear on roughly 68% of local business searches, while the traditional local pack appears on about 39%. The split follows intent: purely local queries such as \"plumbers in Houston\" return a local pack 93% of the time and an AI Overview only 15% of the time, while informational and hybrid queries return an AI Overview 92% to 97% of the time. The map pack still owns the transactional query. AI owns the research phase that happens before it. You now need to win both, which is why my work covers Google Business Profile and AI citation together rather than treating them as separate services.",
  },
  {
    q: "Can I do local SEO myself?",
    a: "Yes, and for a single-location business you should do the first layer yourself before paying anyone. Verify your Google Business Profile, choose the correct primary category, fill every field, set accurate hours, upload real photos weekly, and ask every customer for a review with a neutral, open-ended request. That work is free and it moves rankings. Hiring becomes worth it when you hit the parts that need tooling and judgement: geo-grid tracking, citation cleanup, schema, competitive category testing, suspension recovery, and AI citation work. I publish a free checklist covering the DIY layer because I would rather you arrive already having done it.",
  },
  {
    q: "Why is my business not showing on Google Maps?",
    a: "There are six common causes, in rough order of frequency. Your profile is unverified or suspended. Your primary category does not match the search. You are outside the searcher's proximity radius, which caps how far your listing can reach regardless of how good your SEO is. Your business is closed at the time of the search, which became a top-five ranking factor in 2026. You have a duplicate listing splitting your signals. Or your profile has been inactive for more than 30 days, which now triggers a visibility drop on its own.",
  },
  {
    q: "How do I get my suspended Google Business Profile reinstated?",
    a: "Diagnose the cause before appealing, because a second failed appeal is much harder to recover from than the first. The usual triggers are a keyword-stuffed business name, an address that does not match your registration, a virtual office or coworking address, a service-area business displaying a street address, or a category change that looked like a business-model change. Fix the violation first, then appeal through the Business Profile support flow with documentation: registration, utility bill, signage photos, and vehicle branding for a service-area business. Expect two to six weeks. Be aware that reinstatement often does not restore your previous rankings, and rebuilding that visibility is a separate piece of work.",
  },
  {
    q: "How long does local SEO take to show results?",
    a: "Profile-level changes such as category corrections, hours and completeness can move rankings within two to four weeks. Meaningful map pack movement usually takes 60 to 90 days. Competitive metros and sites that need remediation first take four to six months. Anyone who promises page one in 30 days is either doing something that will get you suspended or counting a keyword nobody searches.",
  },
  {
    q: "Who is a reputable local SEO expert in Pakistan, and how do I check?",
    a: "Ask for four things, and be willing to walk away if you do not get them. First, dated before-and-after evidence: geo-grid screenshots and Google Business Profile Insights exports, not a rankings PDF. Second, a named reference you can actually contact. Third, a written statement that you own every asset created (profile, site, content, and accounts) at all times. Fourth, an explanation of how they generate reviews, which must not involve gating, incentives, staff quotas, or requesting reviews that name employees, all of which Google explicitly banned in April 2026. A provider who cannot answer the fourth question is a suspension risk to your business.",
  },
  {
    q: "Do you work with businesses outside Pakistan?",
    a: "Yes, and most of my work is outside Pakistan. I work with businesses and agencies in the UK, United States, Canada, the Gulf and Australia. I am on Pakistan Standard Time, UTC+5, which gives a full working-day overlap with the UK and the Gulf, a reliable morning overlap with the US East Coast, and an afternoon overlap with Australia. Overlap hours, response-time commitments and asset-ownership terms are written into the engagement rather than left to assumption.",
  },
  {
    q: "What happens to my accounts and content if we stop working together?",
    a: "You keep everything, because you owned it the whole time. Your Google Business Profile stays under your Google account with me added as a manager, not an owner. Your website, hosting, domain, analytics and Search Console stay in your accounts. Content written during the engagement is yours. Offboarding is a manager removal and a handover document. There is no lock-in, no proprietary platform holding your data, and no situation where leaving costs you your listing.",
  },
  {
    q: "Is local SEO free?",
    a: "The highest-impact parts are free. Claiming and verifying your Google Business Profile, choosing the right primary category, keeping hours accurate, posting real photos, and asking customers for reviews all cost nothing and account for a large share of what moves map pack rankings. What costs money is time, tooling and judgement: geo-grid tracking software, citation cleanup at scale, technical remediation, competitive analysis, and knowing which of the forty things you could do are the three that will actually move your specific listing.",
  },
];

export const disqualifiers = [
  "You want a guarantee of page one. Nobody can honestly give you one, and the providers who do are usually the reason businesses end up needing recovery work.",
  "You want rankings but will not collect reviews. Review signals carry roughly 20% of local pack weight. Without a review process, there is a ceiling I cannot lift you past.",
  "You want results in 30 days. Profile-level wins land faster, but real map pack movement takes 60 to 90 days and I would rather lose the sale than set that expectation wrong.",
  "You want me to build 200 templated city pages. Google's March 2026 core update treats swapped-city-name pages as thin content. I will not build a liability into your site.",
  "You want reviews bought, incentivised, gated, or written for you. This is banned under Google's April 2026 rating-manipulation policy and it puts your profile at risk.",
  "Your business has no physical address and no service area, or you want a listing at an address you do not operate from. That is the fastest route to a permanent suspension.",
];

