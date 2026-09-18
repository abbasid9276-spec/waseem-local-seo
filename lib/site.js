// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE BEFORE LAUNCH.
// Everything marked PLACEHOLDER must be replaced with real data.
// Nothing here should be invented — fake proof is a penalty risk
// and it is the exact thing this site's positioning argues against.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Brand shown in the header, footer and WebSite schema.
  brand: "WaseemRanker",
  // Legal / personal name — used for Person schema and authorship only.
  name: "Waseem Abbas",
  role: "Local SEO Consultant",
  tagline: "Local SEO Expert in Pakistan",
  url: "https://waseemabbas.vercel.app", // PLACEHOLDER — swap for your custom domain
  email: "info@waseemranker.com",
  phone: "+92-000-0000000", // PLACEHOLDER
  whatsapp: "920000000000", // PLACEHOLDER — digits only, country code, no +
  bookingUrl: "", // PLACEHOLDER — Calendly / Cal.com link, or leave "" to hide the button
  city: "Lahore", // PLACEHOLDER — your city
  region: "Punjab",
  country: "PK",
  timezone: "Asia/Karachi (UTC+5)",

  // Profiles used for sameAs entity resolution. Delete any you don't have.
  profiles: [
    "https://www.linkedin.com/in/PLACEHOLDER",
    "https://clutch.co/profile/PLACEHOLDER",
    "https://www.youtube.com/@PLACEHOLDER",
  ],
};

// Overlap hours shown to overseas buyers.
export const overlap = [
  { region: "United Kingdom", hours: "8:00am – 4:00pm GMT", note: "Full working-day overlap" },
  { region: "US East Coast", hours: "8:00am – 12:00pm ET", note: "Morning overlap, daily" },
  { region: "US West Coast", hours: "8:00am – 10:00am PT", note: "Early-morning overlap" },
  { region: "UAE / Saudi", hours: "7:00am – 6:00pm GST", note: "Near-full overlap" },
  { region: "Australia (AEST)", hours: "1:00pm – 7:00pm AEST", note: "Afternoon overlap" },
];

// PLACEHOLDER — replace each entry with a real engagement.
// Rule: no case study ships without a dated screenshot you can produce on request.
export const caseStudies = [
  {
    vertical: "PLACEHOLDER — e.g. Dental practice",
    location: "PLACEHOLDER — e.g. Manchester, UK",
    problem: "PLACEHOLDER — what was broken when they arrived.",
    work: "PLACEHOLDER — what you actually did.",
    metrics: [
      { label: "Geo-grid average rank", before: "—", after: "—" },
      { label: "Calls from GBP / month", before: "—", after: "—" },
      { label: "Direction requests / month", before: "—", after: "—" },
    ],
    window: "PLACEHOLDER — e.g. 4 months",
  },
  {
    vertical: "PLACEHOLDER",
    location: "PLACEHOLDER",
    problem: "PLACEHOLDER",
    work: "PLACEHOLDER",
    metrics: [
      { label: "Geo-grid average rank", before: "—", after: "—" },
      { label: "Calls from GBP / month", before: "—", after: "—" },
      { label: "Qualified enquiries / month", before: "—", after: "—" },
    ],
    window: "PLACEHOLDER",
  },
  {
    vertical: "PLACEHOLDER",
    location: "PLACEHOLDER",
    problem: "PLACEHOLDER",
    work: "PLACEHOLDER",
    metrics: [
      { label: "AI Overview citations", before: "—", after: "—" },
      { label: "Map pack impressions", before: "—", after: "—" },
      { label: "Cost per qualified lead", before: "—", after: "—" },
    ],
    window: "PLACEHOLDER",
  },
];

// PLACEHOLDER — only real, attributable client words.
export const testimonials = [
  { quote: "PLACEHOLDER", author: "PLACEHOLDER", detail: "PLACEHOLDER — role, business type, city" },
  { quote: "PLACEHOLDER", author: "PLACEHOLDER", detail: "PLACEHOLDER" },
];

export const pricing = [
  {
    tier: "Profile Recovery",
    pkr: "PKR 40,000",
    usd: "$150",
    cadence: "one-off",
    best: "A suspended, duplicated or hijacked Google Business Profile",
    includes: [
      "Suspension diagnosis and cause report",
      "Appeal preparation and submission",
      "Video verification support",
      "Post-reinstatement visibility rebuild plan",
      "Duplicate and hijacked listing cleanup",
    ],
    note: "Reinstatement is not guaranteed by anyone, including me. You get the diagnosis and the appeal regardless of outcome.",
  },
  {
    tier: "Single Location",
    pkr: "PKR 75,000 – 120,000",
    usd: "$450 – $900",
    cadence: "per month",
    best: "One business, one city, one Google Business Profile",
    includes: [
      "Google Business Profile management and weekly activity",
      "Geo-grid rank tracking across your service radius",
      "Compliant review generation system",
      "Citation audit and NAP correction",
      "Location and service page rebuild",
      "Schema and entity markup",
      "AI Overview and LLM citation work",
      "Monthly call and lead reporting, not rank reports",
    ],
    note: "Most single-location engagements sit at the lower end. The upper end is competitive metros or damaged sites needing cleanup first.",
  },
  {
    tier: "Multi-Location",
    pkr: "PKR 150,000+",
    usd: "$1,200+",
    cadence: "per month",
    best: "Clinics, franchises and firms with 3+ locations",
    includes: [
      "Everything in Single Location, per branch",
      "Cross-location NAP governance",
      "Centralised, policy-compliant review process",
      "Cannibalisation and duplicate listing control",
      "Consolidated reporting by location",
    ],
    note: "Priced per location after the third. One non-compliant review process replicated across ten branches is ten violations — governance is the real work here.",
  },
  {
    tier: "White Label",
    pkr: "On request",
    usd: "On request",
    cadence: "retainer",
    best: "Agencies who need local SEO delivery under their own brand",
    includes: [
      "Delivery under your brand, your reporting templates",
      "Named point of contact, fixed weekly capacity",
      "No contact with your clients unless you ask for it",
      "Clear escalation path and response-time commitment",
    ],
    note: "",
  },
];

export const faqs = [
  {
    q: "How much does a local SEO expert in Pakistan cost?",
    a: "Local SEO in Pakistan typically costs PKR 30,000 to 150,000 per month, or roughly $150 to $1,200 depending on scope. A single-location business usually sits between PKR 75,000 and 120,000 per month. Multi-location work starts around PKR 150,000. One-off Google Business Profile recovery is priced separately at around PKR 40,000. The variables that move price are the number of locations, how competitive your metro is, whether your site needs remediation before optimisation can start, and how much cleanup a previous provider left behind.",
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
    a: "Ask for four things, and be willing to walk away if you do not get them. First, dated before-and-after evidence: geo-grid screenshots and Google Business Profile Insights exports, not a rankings PDF. Second, a named reference you can actually contact. Third, a written statement that you own every asset created — profile, site, content, and accounts — at all times. Fourth, an explanation of how they generate reviews, which must not involve gating, incentives, staff quotas, or requesting reviews that name employees, all of which Google explicitly banned in April 2026. A provider who cannot answer the fourth question is a suspension risk to your business.",
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

