export const post = {
  slug: "track-google-business-profile-traffic-ga4",
  title: "Track Google Business Profile Traffic in GA4: A Setup",
  h1: "Tag Your Profile Links So GA4 Stops Guessing",
  excerpt:
    "Out of the box, GA4 files most of your profile traffic under direct or organic and you lose the ability to prove anything. Five steps fix that permanently.",
  description:
    "Track Google Business Profile traffic in GA4 with UTM tags. A step-by-step setup, the reports to build, and what the numbers cannot tell you.",
  float: "Want this measured properly?",
  date: "2026-10-29",
  updated: "2026-10-29",
  minutes: 8,
  body: [
    {
      h: "Why GA4 files your profile traffic as direct",
      p: [
        "Clicks from your Google Business Profile do not always arrive with a referrer. On mobile especially, the handoff from the Maps app to the browser drops it.",
        "With no referrer, GA4 has nothing to attribute the session to, so it lands in direct. Some of it lands in organic search, mixed in with everyone who found you through a normal search result.",
        "The result is that the channel you are working hardest on is the one you can see least clearly.",
        "Tagging the website link on your profile fixes this in about fifteen minutes, and it is the first thing I set up on any new account.",
      ],
    },
    {
      h: "Step 1: decide what you are measuring",
      p: [
        "Do not start with the tool. Start with the sentence you want to be able to say at the end of the month.",
        "For most local businesses that sentence is: this many people came from the profile, and this many of them called or submitted the form.",
        "If that is your sentence, you need one tagged link and one conversion event. You do not need a tag per button, per city, or per post.",
        "Over-tagging is the most common failure here. I have inherited accounts with eleven variants of the same link and no usable report.",
      ],
    },
    {
      h: "Step 2: build the tagged link",
      p: [
        "Take your homepage URL and add three parameters to it: a source, a medium, and a campaign name.",
        "Set the source to google, the medium to organic_profile, and the campaign to something stable like gbp. Use lowercase throughout, because GA4 treats differing cases as separate values.",
        "Do not use the medium organic on its own. That collides with normal search traffic and defeats the whole exercise.",
        "Avoid a URL shortener. Shorteners add a redirect that some mobile browsers handle badly, and you lose the tag on the hop.",
      ],
    },
    {
      h: "Step 3: put it in the three places that matter",
      p: [
        "The website field on the profile is the obvious one, and it is the one that carries most of the traffic.",
        "The appointment or booking link is the second. If you have one, it needs its own campaign value so you can separate browsing traffic from booking intent.",
        "Profile posts are the third. Each post link should carry a distinct campaign value, because that is the only honest way to see whether posts drive anything at all.",
        "Leave the phone number alone. A tagged link cannot track a call, and the attempt to make it do so is how people end up with the number mismatch problem.",
      ],
    },
    {
      h: "Step 4: confirm the tag is landing",
      p: [
        "Open your profile on a phone, tap the website button, and watch the realtime report in GA4.",
        "You are looking for a session with the source and medium you set. If it shows as direct, the tag was stripped, and the usual cause is a redirect between the tagged URL and the page that actually loads.",
        "Test from both a phone and a desktop. The two paths behave differently often enough that checking only one gives false confidence.",
        "Repeat the test a week later. Profile edits sometimes revert, especially on listings with multiple managers.",
      ],
    },
    {
      h: "Step 5: build the one report you will read",
      p: [
        "Create a single exploration with session source and medium as the dimension, and sessions plus your key conversion as the metrics.",
        "Filter it to the medium you chose. Now you have a line that means profile traffic and nothing else.",
        "Add a month-over-month comparison and stop there. A report you open once a month and understand in ten seconds beats a dashboard nobody reads.",
        "This number is also the honest input for any [GMB audit](/services/gmb-audit), because it tells you whether profile work is producing sessions or only impressions.",
      ],
    },
    {
      h: "A worked example",
      p: [
        "A clinic I set this up for had been reporting four hundred monthly sessions as direct and assuming most were returning patients.",
        "After tagging, two hundred and ten of those four hundred turned out to be profile clicks, and the form completion rate on them was more than double the site average.",
        "That one number changed where the budget went. Profile work moved from a side task to the main task, because it was now the measurable channel rather than the invisible one.",
        "Nothing about the website changed. Only the measurement did, and the measurement is what made the case.",
      ],
    },
    {
      h: "What this will never tell you",
      p: [
        "It will not tell you about calls made from the map pack. Those never reach your website, so no website analytics tool can see them.",
        "It will not tell you about people who read your profile, decided against you, and left. Only the profile insights hint at that, and vaguely.",
        "It will not tell you why a position changed. For that you need position data across a grid rather than session data, which is a different exercise covered in my [local SEO audit guide](/blog/how-to-do-a-local-seo-audit).",
        "What it does give you is a defensible number for the traffic the profile sends, and that is usually the number an owner has never had before. If you would rather have it set up and reported for you, that is part of [how I work with clients](/).",
      ],
    },
  ],
  faqs: [
    {
      q: "Will tagging my website link hurt my rankings?",
      a: "No. The parameters are read by your analytics and ignored for ranking purposes. The link still points at your own site, and the profile still passes the same signal it did before.",
    },
    {
      q: "Why does some profile traffic still show as direct after tagging?",
      a: "Usually a redirect. If the tagged URL points to a page that redirects, some browsers drop the parameters on the hop. Point the tag at the final URL, including the correct www and trailing slash.",
    },
    {
      q: "Should I tag the phone number on my profile too?",
      a: "You cannot. A tag only travels with a web link. Calls need call tracking, which has its own consistency pitfalls and should never be solved by changing the primary number on the profile.",
    },
    {
      q: "How often should I check that the tags are still in place?",
      a: "Monthly, and immediately after any profile edit or ownership change. Tagged links are one of the first things lost when a listing changes hands or a manager edits the website field.",
    },
  ],
};
