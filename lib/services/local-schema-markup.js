export const service = {
  slug: "local-schema-markup",
  nav: "Local Schema Markup",
  h1: "Local Schema Markup",
  title: "Local Schema Markup Services | Waseem Ranker",
  description:
    "Structured data built as a connected entity graph rather than scattered snippets: LocalBusiness, Service, FAQ, breadcrumb and sameAs markup that search engines and AI assistants can actually resolve.",
  excerpt:
    "Most schema markup on local websites is a plugin default: a LocalBusiness block with a name and an address, disconnected from everything else on the page. That validates cleanly and communicates almost nothing.",
  intro: [
    "Local schema markup is structured data added to your website that states, in a machine-readable format, what your business is, what it offers, where it operates and how it relates to everything else representing it online. It is the difference between a search engine inferring your business from paragraphs of prose and being told directly.",
    "Its importance has grown sharply, and not because of rich snippets. AI assistants and AI Overviews synthesise answers from sources they can parse confidently. Ambiguity makes a model hedge, and a hedging model names a competitor instead. Structured data is the cheapest way to remove that ambiguity.",
  ],
  body: [
    {
      h: "Why plugin-default schema underperforms",
      p: [
        "Almost every WordPress site has schema output from some plugin. It usually produces a LocalBusiness object carrying a name, an address and a phone number, sitting in isolation on the page.",
        "The problem is not that it is wrong. It is that it is disconnected. Schema derives its power from relationships: this organisation is operated by this person, who is the author of this article, which is part of this website, which describes these services, offered in these areas. A lone LocalBusiness block asserts an existence and nothing more.",
        "The second problem is a mismatch between the markup and the page. Schema claiming services the page never mentions, or an address inconsistent with the footer, is worse than no markup: it introduces exactly the contradiction that makes a search engine distrust the source.",
      ],
    },
    {
      h: "What a properly built local entity graph contains",
      p: [
        "The approach is a single connected @graph rather than several disconnected script blocks, with each node carrying a stable @id so the others can reference it.",
      ],
      items: [
        {
          n: "LocalBusiness or ProfessionalService",
          p: "The core node: legal name, any alternate trading name, address, geographic coordinates, opening hours, price range, currencies accepted and area served. The subtype matters: using the most specific type Schema.org offers for your category conveys more than the generic LocalBusiness.",
        },
        {
          n: "Person and sameAs",
          p: "For an owner-operated business, the person is an entity in their own right and should be modelled as one, linked to the business as founder or employee. The sameAs array points at verified profiles you genuinely control. A dead or unverified URL here is worse than an empty array, because it asserts a relationship that cannot be confirmed.",
        },
        {
          n: "Service and OfferCatalog",
          p: "Each service you sell modelled as its own node, linked to the business that provides it and the area it is provided in. This is what allows a search engine to answer 'does this business do X in Y' without inferring it from marketing copy.",
        },
        {
          n: "WebSite, WebPage and BreadcrumbList",
          p: "The structural layer. Every page declares what it is, what it is part of, and where it sits in the hierarchy. Breadcrumb markup is also the most reliably displayed structured data in ordinary search results.",
        },
        {
          n: "FAQPage, where genuinely warranted",
          p: "Applied only to pages that actually contain those questions and answers. Emitting an FAQ block sitewide (a genuinely common plugin failure) attaches questions to a privacy policy and a contact page, which is both wrong and a signal of carelessness.",
        },
        {
          n: "Review and AggregateRating, with care",
          p: "Self-serving review markup is against Google's guidelines and can trigger a manual action. Where ratings are marked up, they must reflect genuine, verifiable reviews and follow the current rules, which have tightened considerably.",
        },
      ],
    },
    {
      h: "Multi-location schema",
      p: [
        "Multi-location businesses are where schema either compounds or collapses. Each location needs its own LocalBusiness node with its own @id, its own address and its own coordinates, connected to a parent organisation, not five copies of the same block with the address swapped.",
        "The common failure is location pages that share identical markup, which tells a search engine that five distinct places are the same entity and undermines every one of them. The second failure is location pages whose markup contradicts the corresponding Google Business Profile, producing exactly the inconsistency the profile work is trying to eliminate.",
        "Done correctly, the location page markup and the profile reinforce each other, and the parent organisation ties the group together without the branches cannibalising one another.",
      ],
    },
    {
      h: "Schema and AI search",
      p: [
        "When someone describes a situation to an assistant rather than typing keywords, the assistant has to decide which businesses it can confidently name. Confidence comes from agreement across sources.",
        "Structured data is the most direct way to supply that agreement. A model reading explicit statements (this business, this address, these services, this area, these hours) has something to state plainly. A model reading only prose has to infer, and inference under uncertainty produces hedging.",
        "This is also why the markup must match the profile and the citations exactly. Three sources agreeing is a fact. Three sources disagreeing is a reason to name someone else.",
      ],
    },
    {
      h: "How the work is delivered",
      p: [
        "It begins with an audit of what is currently output, page by page, including any plugin markup you may not know is there. Duplicate and conflicting blocks are removed first: two competing LocalBusiness objects on one page is a surprisingly common finding.",
        "The graph is then built to match the site's real structure and validated against both Schema.org and Google's Rich Results testing. Validation is a floor, not a goal: markup can validate perfectly and still describe the business badly.",
        "Finally, everything is cross-checked against the Google Business Profile and the citation set, because structured data that contradicts those is actively harmful rather than merely unhelpful.",
        "Schema and entity markup is included in the Complete Local SEO tier at $390 per month and, applied per location, in the Multi-Location tier at $750 per month.",
      ],
    },
  ],
  faqs: [
    {
      q: "Will schema markup improve my rankings directly?",
      a: "Not as a direct ranking factor. It improves how reliably search engines and AI systems understand and represent your business, which affects rich result eligibility, entity resolution and whether an assistant names you. Treat it as comprehension infrastructure, not a ranking lever.",
    },
    {
      q: "My SEO plugin already adds schema. Is that enough?",
      a: "Usually not. Plugin defaults produce isolated blocks with no relationships between them, and frequently emit markup that contradicts the page or duplicates another block. The audit almost always finds something to remove before anything is added.",
    },
    {
      q: "Can I mark up my Google reviews on my website?",
      a: "Self-serving review markup (your own reviews, marked up on your own site) is against Google's guidelines and risks a manual action. Reviews on your Google Business Profile already work where they need to.",
    },
    {
      q: "Does schema help with AI Overviews and assistants?",
      a: "It helps them state facts about you confidently, which is the precondition for being named at all. It guarantees nothing (nobody can guarantee inclusion in an AI answer), but ambiguity reliably produces omission.",
    },
  ],
};
