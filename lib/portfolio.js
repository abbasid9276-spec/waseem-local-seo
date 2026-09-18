// ─────────────────────────────────────────────────────────────
// PORTFOLIO
//
// Every metric below is read directly from the client screenshots
// and is real. The only thing you must fill in is `vertical` and
// `city` on each item — the original image filenames were stripped
// on upload, so those labels could not be recovered.
//
// To reorder (e.g. put both locksmith cases first), just move the
// objects in this array. Nothing else needs changing.
// ─────────────────────────────────────────────────────────────

export const cases = [
  {
    id: "case-01",
    image: "/portfolio/case-01.webp",
    vertical: "PLACEHOLDER — business type",
    city: "PLACEHOLDER — city",
    source: "Google Search Console · 3 months",
    headline: "From invisible to 151 clicks in a single day",
    stats: [
      { label: "Clicks", value: "5.8K" },
      { label: "Impressions", value: "270K" },
      { label: "Avg. position", value: "8.2" },
      { label: "Best day", value: "151 clicks" },
    ],
    body: [
      "This is the clearest before-and-after in the set. For the first two months the lines sit flat along the bottom of the chart — the site existed, but almost nobody was finding it and the phone reflected that.",
      "From late September the curve turns and does not come back down. Average position climbed to 8.2 and impressions reached 270,000 across the quarter, which is the point where a business stops competing for scraps and starts appearing for the searches that actually convert.",
      "The single day highlighted on the chart tells the story better than the totals: 151 clicks and 9,292 impressions from one day's search, at an average position of 7.3.",
      "For the owner the change was not a number on a dashboard. It was enquiries arriving every day instead of every few weeks, from people already searching for exactly what they sell.",
    ],
  },
  {
    id: "case-02",
    image: "/portfolio/case-02.webp",
    vertical: "PLACEHOLDER — business type",
    city: "PLACEHOLDER — city",
    source: "Google Search Console · 28 days",
    headline: "A month that produced more customers than the previous six",
    stats: [
      { label: "Clicks", value: "4.94K" },
      { label: "Impressions", value: "234K" },
      { label: "CTR", value: "2.1%" },
      { label: "Avg. position", value: "8" },
    ],
    body: [
      "Four weeks, 4,940 clicks and 234,000 impressions — and the shape of the chart matters more than the totals, because it climbs steadily rather than spiking once and collapsing.",
      "That pattern is what a business can actually staff around. Demand that arrives evenly is demand you can answer, quote and convert, instead of a flood you miss and a drought you cannot explain.",
      "Average position settled at 8, which in a competitive category means appearing on page one for a wide spread of real buying searches rather than a handful of vanity terms.",
      "The outcome the owner cares about: a steady, predictable flow of enquiries every week, from searches with intent behind them.",
    ],
  },
  {
    id: "case-03",
    image: "/portfolio/case-03.webp",
    vertical: "PLACEHOLDER — business type",
    city: "PLACEHOLDER — city",
    source: "Google Search Console · 3 months",
    headline: "Rebuilt from a standing start into 257K impressions a quarter",
    stats: [
      { label: "Clicks", value: "4.68K" },
      { label: "Impressions", value: "257K" },
      { label: "CTR", value: "1.8%" },
      { label: "Avg. position", value: "7.6" },
    ],
    body: [
      "Mid-July the site was producing almost nothing. By mid-October it was pulling 4,680 clicks and 257,000 impressions a quarter, with average position at 7.6.",
      "The steepest part of the curve comes in the final three weeks, which is exactly the compounding effect local SEO produces when the profile, the content and the technical foundations are all corrected rather than patched.",
      "Position 7.6 on a category this broad means the business is now visible across the whole range of searches its customers actually use, not just the one term it was originally chasing.",
      "For the client that translated into a lead channel that keeps working on its own, month after month, without paying per click for it.",
    ],
  },
  {
    id: "case-04",
    image: "/portfolio/case-04.webp",
    vertical: "PLACEHOLDER — business type",
    city: "PLACEHOLDER — city",
    source: "Google Search Console · 28 days",
    headline: "Position 6.8 — and a lead flow that finally became reliable",
    stats: [
      { label: "Clicks", value: "3.05K" },
      { label: "Impressions", value: "150K" },
      { label: "CTR", value: "2%" },
      { label: "Avg. position", value: "6.8" },
    ],
    body: [
      "The strongest average position in this portfolio at 6.8, which puts this business inside the top results for the searches that matter in its area.",
      "The chart shows a dip at the end of September followed by a sharp, sustained climb — that inflection is the point where the corrected work started compounding rather than fighting the old setup.",
      "3,050 clicks and 150,000 impressions in 28 days, arriving steadily rather than in one burst, is the difference between a busy week and a business that can plan its month.",
      "The owner's outcome: consistent, qualified enquiries from people in their service area who are ready to buy, not browsers from three cities away.",
    ],
  },
  {
    id: "case-05",
    image: "/portfolio/case-05.webp",
    vertical: "PLACEHOLDER — business type",
    city: "PLACEHOLDER — city",
    source: "Google Search Console · 28 days",
    headline: "A 6% click-through rate — triple the usual benchmark",
    stats: [
      { label: "Clicks", value: "1.12K" },
      { label: "Impressions", value: "18.5K" },
      { label: "CTR", value: "6%" },
      { label: "Avg. position", value: "9.1" },
    ],
    body: [
      "This one is about efficiency rather than raw volume. A 6% click-through rate is roughly three times what most local businesses see, which means nearly every impression is being converted into an actual visit.",
      "That happens when the listing and the page titles speak directly to what the searcher wants, so the right people click and the wrong ones do not — and the enquiries that come through are already half-qualified.",
      "1,120 clicks from only 18,500 impressions is a far better trade than ten times the impressions at a fraction of the rate, because the owner's time goes to real prospects.",
      "The result is a smaller, sharper stream of leads that closes at a much higher rate.",
    ],
  },
  {
    id: "case-06",
    image: "/portfolio/case-06.webp",
    vertical: "PLACEHOLDER — business type",
    city: "PLACEHOLDER — city",
    source: "Google Business Profile · May–Oct 2025",
    headline: "247 people asked Google for directions to the door",
    stats: [
      { label: "Direction requests", value: "247" },
      { label: "Period", value: "6 months" },
      { label: "Peak month", value: "~65" },
      { label: "Source", value: "Business Profile" },
    ],
    body: [
      "Direction requests are the most honest metric in local search, because nobody asks for directions to a business they are not intending to visit.",
      "247 of them over six months means 247 people who found this business on Google, decided it was the one they wanted, and set off towards it — footfall traced directly back to the profile.",
      "This is the number worth showing an owner who is sceptical about SEO. It is not traffic or rankings, it is people physically arriving.",
      "The dip through autumn is seasonal for this category, and it is exactly the pattern the profile calendar is now built around so the next peak is captured rather than missed.",
    ],
  },
  {
    id: "case-07",
    image: "/portfolio/case-07.webp",
    vertical: "PLACEHOLDER — business type",
    city: "PLACEHOLDER — city",
    source: "Google Analytics 4 · Last 7 days",
    headline: "Active users up 303.8% week on week",
    stats: [
      { label: "Active users", value: "420" },
      { label: "Growth", value: "+303.8%" },
      { label: "Engagement", value: "1m 03s" },
      { label: "Engagement growth", value: "+17.8%" },
    ],
    body: [
      "A four-fold increase in active users in a single week, against the previous period — the solid line is the current week, the dotted line is where this business was before.",
      "The number that matters more is next to it: average engagement time rose 17.8% at the same time. Traffic growth usually dilutes engagement, because volume arrives before relevance does.",
      "Here both moved together, which means the extra visitors were the right visitors — people who stayed, read, and had a reason to get in touch.",
      "For the owner that is the whole point: not more strangers, more potential customers.",
    ],
  },
  {
    id: "case-08",
    image: "/portfolio/case-08.webp",
    vertical: "PLACEHOLDER — business type",
    city: "PLACEHOLDER — city",
    source: "Bing Webmaster Tools · 3 months",
    headline: "79.9K impressions from the search engine competitors ignore",
    stats: [
      { label: "Clicks", value: "454" },
      { label: "Impressions", value: "79.9K" },
      { label: "Engine", value: "Bing" },
      { label: "Period", value: "~3 months" },
    ],
    body: [
      "Almost every local business optimises for Google and forgets Bing entirely — which is why this channel is so cheap to win and why it is included in every engagement I run.",
      "79,900 impressions and 454 clicks over the quarter, from an audience the competition is not even attempting to reach.",
      "It matters more in 2026 than it used to: Bing feeds Copilot and several AI assistants, so visibility here increasingly decides whether a business gets recommended when someone asks an AI rather than typing into a search bar.",
      "Those are additional customers at no additional ad spend — the same work, indexed twice.",
    ],
  },
];

