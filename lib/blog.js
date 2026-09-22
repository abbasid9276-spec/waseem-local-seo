// ─────────────────────────────────────────────────────────────
// BLOG
//
// Add a post by appending an object to this array. The index page
// and the individual post pages both read from here, and the
// sitemap picks new slugs up automatically.
//
// body: array of { h, p }: h is the H2, p is an array of paragraphs.
// ─────────────────────────────────────────────────────────────

import { post as citationsUsa } from "./posts/citations-usa";
import { post as citationsUk } from "./posts/citations-uk";
import { post as citationsCanada } from "./posts/citations-canada";
import { post as citationsAustralia } from "./posts/citations-australia";
import { post as nandlaBacklinks } from "./posts/nandla-backlinks-list";

export const posts = [
  nandlaBacklinks,
  citationsUsa,
  citationsUk,
  citationsCanada,
  citationsAustralia,
  {
    slug: "google-business-profile-suspension",
    title: "Why Google Business Profiles get suspended, and what actually gets them back",
    excerpt:
      "Thirteen recovered profiles later, the pattern is clear: almost every suspension traces back to one of five things, and the appeal that works is the boring one.",
    description:
      "Google Business Profile suspensions explained: why they really happen, what to fix before appealing, and how to get a listing reinstated fast.",
    date: "2026-09-10",
    updated: "2026-09-10",
    minutes: 7,
    body: [
      {
        h: "A suspension is not a punishment, it is a verification failure",
        p: [
          "The first thing to understand is that Google almost never suspends a profile because it decided you are a bad business. It suspends because something in the listing stopped matching what its systems can verify about a real operating business at a real address, and the automated check that noticed it has no way to ask you a clarifying question.",
          "That framing matters because it changes the appeal. Owners instinctively write appeals that argue about fairness. The appeals that get reinstated argue about evidence: here is the lease, here is the utility bill, here is the signage, here is the business registration, all matching the exact name and address on the listing.",
        ],
      },
      {
        h: "The five causes behind almost every suspension",
        p: [
          "Keyword stuffing in the business name is the single most common. Adding a service or a city to a name that does not appear on your signage or your legal registration is a direct policy violation, and it is the easiest one for Google to detect automatically at scale.",
          "Address problems come second: a virtual office, a coworking desk, a registered agent address, or a residential address publicly displayed for a service-area business. Third is category and service-area mismatch, where the radius claimed is far larger than the business can plausibly serve. Fourth is editing too much at once, changing name, address, category and website in a single session frequently triggers a re-verification. Fifth is review manipulation, whether you bought reviews or an over-enthusiastic contractor did it on your behalf.",
          "High-risk categories are held to a stricter version of all five. Locksmiths, garage door services, emergency plumbing, towing and addiction treatment sit under heavier scrutiny than a dental practice will ever experience, and things that pass unnoticed in a low-risk category will get a locksmith suspended within days.",
        ],
      },
      {
        h: "What to do in the first twenty-four hours",
        p: [
          "Do not submit an appeal immediately. The reinstatement request is effectively one good shot, and a rushed submission with thin evidence makes the second attempt harder rather than easier.",
          "Instead, fix the underlying violation first. Strip the keywords out of the business name so it matches your registration and your signage exactly. Correct the address or switch correctly to a service-area configuration with the address hidden. Narrow an implausible radius. Then gather the evidence pack: business registration, a utility bill or lease in the business name at that address, photos of exterior signage and the premises, vehicle branding, and anything else that proves physical operation.",
          "Only then submit the appeal, and keep it short and factual. No arguments about how long you have been a customer, no references to how much you spend on Google Ads. Describe what was wrong, state that it has been corrected, and attach the evidence.",
        ],
      },
      {
        h: "What recovery realistically looks like",
        p: [
          "Reinstatement typically takes between three days and three weeks. A hard suspension (where the listing is removed entirely) is harder than a soft suspension, where the listing remains but loses its owner controls.",
          "Rankings usually do not return to the previous position immediately on reinstatement. Expect a recovery curve over two to six weeks rather than a switch flipping back, and resist the urge to make further edits during that window, because a second round of changes on a recently reinstated profile is a reliable way to get suspended again.",
          "The genuinely uncomfortable truth is that some profiles do not come back. If the appeal is rejected twice on the same evidence, the answer is usually not a third appeal but a correctly built new listing, done properly from the start.",
        ],
      },
    ],
  },
  {
    slug: "geo-grid-ranking-vs-single-point",
    title: "Your map pack ranking is not one number, and checking it from one point is why you keep getting bad advice",
    excerpt:
      "A business can sit at position one from its own office and position twelve two miles away. Single-point rank checks hide the entire problem.",
    description:
      "Geo-grid ranking shows where your map pack visibility actually stops. Why a single-point rank check keeps giving you bad advice about your SEO.",
    date: "2026-08-22",
    updated: "2026-08-22",
    minutes: 6,
    body: [
      {
        h: "Local rankings are a map, not a position",
        p: [
          "When you search your own service from your own premises and see yourself at the top, you are measuring the one location where you are guaranteed to perform best. Proximity is one of the heaviest factors in map pack ranking, so a searcher standing next to your front door is the least representative user you could possibly test with.",
          "A geo-grid check queries the same keyword from dozens of simulated points spread across your service radius and plots the result. What comes back is almost never uniform. The common shape is a bright core of strong positions within a mile or two, falling away sharply at the edges, which is exactly where the customers you are not currently winning happen to be.",
        ],
      },
      {
        h: "What the grid tells you that a rank tracker cannot",
        p: [
          "The size of the strong area is the real measure of a profile's strength. Two businesses can both report position three on a conventional rank tracker while one holds that position across a twelve-mile radius and the other holds it across two streets. Those are not comparable businesses, and they do not need the same work.",
          "The shape tells you something too. A grid that is strong to the north and weak to the south usually means a competitor is dominating that side, not that your profile is broken. A grid that is weak everywhere except a single point means the profile itself is underpowered and is ranking on proximity alone.",
          "Direction of travel matters more than any single snapshot. Running the same grid monthly turns local SEO from an argument about whether anything is working into a picture that either expands or does not.",
        ],
      },
      {
        h: "How this changes what you should spend money on",
        p: [
          "If your grid is strong in the core and collapses at the edge, the work is about strengthening the entity: category and service configuration, review velocity and distribution, location and service pages that genuinely cover the outer areas, and citations that reinforce the service radius.",
          "If your grid is weak even in the core, nothing at the perimeter matters yet. Fix the profile fundamentals first, because expanding a footprint you do not have is spending money on reach before you have relevance.",
          "It also tells you when to stop. If the grid already covers the entire area you can profitably serve, further local SEO spend is buying you visibility to people you would have to drive too far to serve. That is the point at which I tell clients to put the budget somewhere else.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-ai-overviews",
    title: "AI Overviews changed how local businesses get found: here is what actually influences them",
    excerpt:
      "Assistants do not read your website the way a searcher does. What gets a business cited is not what gets it ranked, and the gap is widening.",
    description:
      "AI Overviews changed how local businesses get found. What actually influences whether an assistant names you, and what is wasted effort now.",
    date: "2026-07-30",
    updated: "2026-07-30",
    minutes: 6,
    body: [
      {
        h: "The question changed shape",
        p: [
          "People used to type two or three words and choose from a list. Increasingly they describe a situation in a full sentence (locked out of the car with a spare key at home, boiler making a noise since Tuesday) and receive a synthesised answer with a small number of businesses named inside it.",
          "That is a structurally different competition. A list of ten gives you ten chances to be chosen. An assistant's answer names two or three businesses, and being the fourth-best match is worth roughly the same as being the fortieth.",
        ],
      },
      {
        h: "What these systems appear to reward",
        p: [
          "Consistency of the underlying entity is first. When a business name, address, phone number, hours and service list agree with each other everywhere the model can see them, the business is easier to state confidently. Where sources disagree, a model hedges, and hedging means not naming you.",
          "Content that answers the situation rather than the keyword is second. A page titled with a service term and 800 words of generic copy has nothing to extract. A page that plainly answers what it costs, how long it takes, whether you cover that suburb, and what happens out of hours gives an assistant something quotable.",
          "Third, and most overlooked: Bing. It feeds Copilot and several other assistants, and almost every local competitor ignores it entirely, which makes it the cheapest visibility available in the whole channel right now.",
        ],
      },
      {
        h: "What has not changed",
        p: [
          "The Google Business Profile is still the foundation. Assistants lean heavily on the same structured local data the map pack uses, so a misconfigured or suspended profile damages AI visibility just as much as it damages conventional ranking.",
          "Reviews still matter, and they matter in a slightly different way: models read the text, not only the star average. Twenty reviews that describe specific jobs in specific areas are more useful to a system trying to match a situation than two hundred reviews that say nothing beyond 'great service'.",
          "And nobody can guarantee inclusion in an AI answer, any more than anyone can guarantee a map pack position. Anyone selling guaranteed AI Overview placement is selling something that does not exist.",
        ],
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
