import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  site,
  overlap,
  caseStudies,
  testimonials,
  pricing,
  faqs,
  disqualifiers,
} from "../lib/site";

export default function Home() {
  const wa = `https://wa.me/${site.whatsapp}`;

  return (
    <>
      <Header />
      <main>

        {/* 1 ── HERO ─────────────────────────────────────────── */}
        <section className="hero">
          <div className="wrap">
            <span className="pill">Working with businesses in the UK, US, Gulf &amp; Australia</span>
            <h1>Local SEO Expert in Pakistan</h1>
            <p className="lede">
              I get businesses into the Google map pack — and into the AI answers that
              now sit above it. Published pricing, evidence you can check, and no
              promise of a number one ranking, because nobody can honestly make one.
            </p>
            <p>
              I am {site.name}, a local SEO consultant based in {site.countryName}.
              Most of my clients are outside Pakistan: service businesses, clinics and
              law firms in the UK, United States, Canada and the Gulf, plus agencies who
              need local SEO delivered under their own brand. The work is narrow on
              purpose — Google Business Profile performance, map pack rankings, profile
              recovery, and visibility inside AI Overviews and assistants like ChatGPT,
              Gemini and Perplexity.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={wa} rel="nofollow">Message me on WhatsApp</a>
              <a className="btn btn-ghost" href="#pricing">See what it costs</a>
            </div>
          </div>
        </section>

        {/* 2 ── PROOF BAR (placeholder) ──────────────────────── */}
        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">By the numbers</p>
            <div className="grid g4" style={{ marginBottom: "0" }}>
              <div className="stat"><b>47+</b><span>Businesses worked with</span></div>
              <div className="stat"><b>13</b><span>Profiles recovered from suspension</span></div>
              <div className="stat"><b>5+</b><span>Years doing local SEO</span></div>
              <div className="stat"><b>27</b><span>Countries served</span></div>
            </div>
          </div>
        </section>

        {/* 3 ── THE PROBLEM ──────────────────────────────────── */}
        <section id="problem">
          <div className="wrap">
            <p className="eyebrow">Start here</p>
            <h2>Most people reading this have already paid someone once</h2>
            <p>
              If you have hired for local SEO before and it did not work, you are in the
              majority, and the pattern is consistent enough to describe. You were sold a
              ranking. You received a monthly report full of domain authority scores,
              keyword counts and backlink totals. Some of those numbers went up. Your
              phone did not ring any more than it had before. When you asked why, you got
              an explanation about Google updates and the need for patience.
            </p>
            <p>
              The failure is usually not laziness. It is that the engagement measured the
              wrong thing from day one. A keyword ranking is not a lead. A backlink count
              is not a customer. In local search specifically, you can be ranked first for
              a term and still be invisible to most of the people who need you, because
              proximity caps how far a listing travels regardless of how strong the rest
              of your signals are. Nobody explains that at the sales stage, because it
              sounds like an excuse before the work starts and like a reason to leave
              after it.
            </p>
            <p>
              So here is the version I give before you pay anything. Local SEO can put
              you in front of people searching in your service area who are ready to
              call. It cannot make you rank everywhere in a city. It cannot fix a business
              with no reviews and no intention of collecting any. It takes 60 to 90 days
              to show meaningful map pack movement, longer in a competitive metro. And it
              is now only half the job, because a majority of local searches return an AI
              answer before they return a map.
            </p>
          </div>
        </section>

        {/* 4 ── DIAGNOSTIC ───────────────────────────────────── */}
        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">Self-check</p>
            <h2>Signs your local presence is failing</h2>
            <p>
              Each of these is a specific, checkable failure. If three or more apply, the
              problem is diagnosable rather than mysterious.
            </p>
            <ul className="signs">
              <li>
                <strong>Your Google Business Profile has not been touched in 30 days.</strong>{" "}
                Google now demotes profiles that go inactive for a month or more. Owner
                activity is counted separately from review signals.
              </li>
              <li>
                <strong>You rank when you search from your own premises and vanish two kilometres away.</strong>{" "}
                That is a proximity problem, and it is measurable with geo-grid tracking
                rather than a single rank check.
              </li>
              <li>
                <strong>A competitor with fewer reviews outranks you.</strong>{" "}
                Usually a primary category mismatch, a business-title difference, or the
                fact that they are open at the time of the search and you are not.
              </li>
              <li>
                <strong>You get direction requests but almost no calls.</strong>{" "}
                A conversion problem inside the profile — hours, photos, description or
                the wrong primary action button — not a ranking problem.
              </li>
              <li>
                <strong>Your hours are wrong during Ramadan, Eid or public holidays.</strong>{" "}
                &quot;Business is open at the time of search&quot; became a top-five local pack
                ranking factor in 2026. Wrong hours cost you rankings, not just walk-ins.
              </li>
              <li>
                <strong>Your name, address or phone number is written differently across Google, Facebook and your website.</strong>{" "}
                Inconsistent NAP erodes entity confidence for both Google and the AI
                assistants that now recommend local businesses.
              </li>
              <li>
                <strong>You are invisible when someone asks ChatGPT or Gemini for the best provider in your city.</strong>{" "}
                A separate discovery channel from Google, with a separate set of inputs.
              </li>
              <li>
                <strong>Your website has twenty city pages that are the same page with the city name swapped.</strong>{" "}
                Google&apos;s March 2026 core update treats templated geo pages as thin content.
                This is now a liability rather than a strategy.
              </li>
              <li>
                <strong>Your profile was suspended, reinstated, and never recovered its old position.</strong>{" "}
                Extremely common, badly documented, and a separate piece of work from the
                appeal itself.
              </li>
            </ul>
          </div>
        </section>

        {/* 5 ── WHAT IT COSTS YOU ────────────────────────────── */}
        <section>
          <div className="wrap">
            <p className="eyebrow">The arithmetic</p>
            <h2>What invisibility actually costs</h2>
            <p>
              Local SEO is easier to judge as arithmetic than as adjectives. The table
              below uses a plumbing business as the worked example, but the structure
              applies to any service business with a known average job value.
            </p>
            <div className="table-scroll">
              <table>
                <caption className="ph-tag" style={{ captionSide: "bottom", textAlign: "left", paddingTop: "10px", color: "var(--fg-muted)", letterSpacing: 0, textTransform: "none", fontWeight: 400, fontSize: ".84rem" }}>
                  Illustrative model. Replace with your own average job value and search volume — the point is the method, not these figures.
                </caption>
                <tbody>
                  <tr><th>Map pack searches per month in your area</th><td>600</td></tr>
                  <tr><th>Share of clicks going to position 1–3</th><td>roughly 70%</td></tr>
                  <tr><th>Your current position</th><td>6th — outside the pack</td></tr>
                  <tr><th>Calls you currently receive</th><td>12 per month</td></tr>
                  <tr><th>Calls at position 2</th><td>40–55 per month</td></tr>
                  <tr><th>Your close rate</th><td>30%</td></tr>
                  <tr><th>Average job value</th><td>$180</td></tr>
                  <tr><th><strong>Monthly gap</strong></th><td><strong>roughly 9–13 jobs — $1,600–2,300</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Two things follow from this. First, the cost of being invisible compounds
              every month, which is why the question is rarely whether local SEO is worth
              it and usually whether your specific numbers justify it. Second, if that
              monthly gap is smaller than a retainer, you should not hire anyone,
              including me. I would rather tell you that in the first conversation.
            </p>
          </div>
        </section>

        {/* 6 ── SERVICES ─────────────────────────────────────── */}
        <section className="alt" id="services">
          <div className="wrap">
            <p className="eyebrow">What I do</p>
            <h2>Seven things, done properly</h2>
            <p>
              I do not offer general digital marketing, paid ads, or social media
              management. Local search is a narrow discipline with its own ranking
              system, its own policy regime and its own failure modes, and it rewards
              depth over breadth.
            </p>
            <div className="grid g3">
              <div className="card">
                <h3>Google Business Profile management</h3>
                <p>
                  Category testing, business description, services, products, weekly
                  photo and update cadence, accurate and seasonal hours, and the
                  conversion elements inside the profile itself. Your profile is the
                  single highest-weighted asset in local search and the first source AI
                  assistants read.
                </p>
              </div>
              <div className="card">
                <h3>Suspension &amp; recovery</h3>
                <p>
                  Diagnosis before appeal, because a failed second appeal is far harder to
                  recover from. Covers keyword-stuffed names, address mismatches, virtual
                  offices, service-area misconfiguration, duplicate and hijacked listings,
                  and the visibility rebuild that reinstatement alone does not give you.
                </p>
              </div>
              <div className="card">
                <h3>Map pack &amp; geo-grid ranking</h3>
                <p>
                  Ranking measured as a grid across your actual service radius, not a
                  single position from one point. You see where you win, where you fade,
                  and how far your listing genuinely travels — which is the honest answer
                  to &quot;are we ranking?&quot;
                </p>
              </div>
              <div className="card">
                <h3>Reviews, within policy</h3>
                <p>
                  A compliant system: neutral, open-ended requests sent to every customer
                  through your own channels. No gating, no incentives, no staff quotas, no
                  requests naming employees — all explicitly banned under Google&apos;s April
                  2026 rating-manipulation policy, and all common in this industry.
                </p>
              </div>
              <div className="card">
                <h3>Citations, NAP &amp; entity</h3>
                <p>
                  Consistent name, address and phone across Google, Apple Business
                  Connect, Bing Places and the directories that matter in your market,
                  plus schema and <code>sameAs</code> linking so that search engines and
                  language models resolve you as one confident entity.
                </p>
              </div>
              <div className="card">
                <h3>AI search visibility</h3>
                <p>
                  Content and off-site work engineered for citation inside AI Overviews
                  and assistant answers. Fact-dense pages, extractable structure, pricing
                  and comparison tables, and presence on the third-party sources these
                  systems actually quote.
                </p>
              </div>
              <div className="card">
                <h3>Multi-location &amp; white label</h3>
                <p>
                  For groups: cross-location NAP governance, duplicate control, and
                  centralised review processes — because one non-compliant process copied
                  across ten branches is ten violations. For agencies: delivery under your
                  brand, fixed capacity, named contact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 ── AI SEARCH ────────────────────────────────────── */}
        <section id="ai-search">
          <div className="wrap">
            <p className="eyebrow">2026</p>
            <h2>Ranking on Google is no longer the whole job</h2>
            <p>
              AI Overviews now appear on roughly 68% of local business searches, while the
              traditional local pack appears on about 39%. That gap is where a large share
              of your potential customers are now finding their answer, and it behaves
              very differently depending on what someone types.
            </p>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr><th>Query type</th><th>Example</th><th>Local pack</th><th>AI Overview</th></tr>
                </thead>
                <tbody>
                  <tr><td>Pure local intent</td><td>&quot;plumbers in Houston&quot;</td><td>93%</td><td>15%</td></tr>
                  <tr><td>Informational</td><td>&quot;how much do lawyers charge&quot;</td><td>6%</td><td>92%</td></tr>
                  <tr><td>Hybrid</td><td>&quot;emergency dentist cost near me&quot;</td><td>17%</td><td>97%</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The map pack still owns the transactional query — the one where somebody is
              about to call. AI owns everything upstream of it: the research, the price
              check, the comparison. If you are only competing for the map pack, you are
              invisible for the entire stretch of the journey where the decision actually
              gets made.
            </p>
            <h3 style={{ marginTop: "2rem" }}>How businesses get cited in AI answers</h3>
            <p>
              Only about 23% of citations in local AI Overviews point at the business&apos;s own
              website. The rest come from third-party sources — Reddit accounts for
              roughly 21% and YouTube for close to 19%. This is the part most providers
              have not adjusted to: you cannot win AI visibility with on-site content
              alone, no matter how much of it you publish.
            </p>
            <p>
              When an assistant is asked to recommend a local business, it leans on a
              fairly consistent hierarchy: the Google Business Profile first, then reviews
              weighted by both rating and recency, then website content, then directory
              consistency, then local press, then social. The practical implication is
              blunt. These systems do not reward the best marketing. They reward the
              business that is easiest to verify. That is why entity consistency, review
              recency and structured data do more for AI visibility than any amount of
              keyword work.
            </p>
            <p>
              My work here covers four things: making your site fast and server-rendered
              so AI crawlers can actually read it, structuring content so individual
              passages survive being extracted on their own, publishing the fact-dense
              pricing and comparison pages these systems prefer to quote, and building
              genuine presence on the third-party sources they cite.
            </p>
          </div>
        </section>

        {/* 8 ── PROCESS ──────────────────────────────────────── */}
        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">How it runs</p>
            <h2>The first 90 days</h2>
            <ol className="steps">
              <li>
                <h3>Week 1 — Audit and baseline</h3>
                <p>
                  Geo-grid baseline across your service radius, full profile audit,
                  category analysis against the businesses currently beating you, citation
                  and NAP scan, technical and rendering check on the site, and a review of
                  whatever the previous provider left behind. You get the findings whether
                  or not we continue.
                </p>
              </li>
              <li>
                <h3>Week 2 — Fix what is broken</h3>
                <p>
                  Category corrections, hours including seasonal and holiday schedules,
                  complete profile fields, services and products, duplicate listing
                  removal, and any suspension or verification issue resolved before
                  anything else is attempted.
                </p>
              </li>
              <li>
                <h3>Weeks 3–4 — Foundations</h3>
                <p>
                  Schema and entity markup, citation corrections, review system set up
                  inside your own CRM or messaging, conversion tracking so that calls and
                  messages are actually measured rather than estimated.
                </p>
              </li>
              <li>
                <h3>Weeks 5–8 — Content and AI layer</h3>
                <p>
                  Location and service pages rebuilt as genuine, specific documents rather
                  than templates. Pricing and comparison content written for extraction.
                  Off-site work begins on the sources AI systems cite.
                </p>
              </li>
              <li>
                <h3>Weeks 9–12 — Compound and measure</h3>
                <p>
                  Weekly profile activity, review velocity, ongoing citation work, and the
                  first meaningful geo-grid comparison against the week-one baseline. This
                  is where map pack movement typically becomes visible.
                </p>
              </li>
              <li>
                <h3>Monthly, throughout</h3>
                <p>
                  One report. Geo-grid before and after, calls, messages, direction
                  requests, qualified enquiries, and cost per lead. No domain authority
                  scores, no backlink totals, no vanity keyword lists.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* 9 ── PRICING ──────────────────────────────────────── */}
        <section id="pricing">
          <div className="wrap">
            <p className="eyebrow">Pricing</p>
            <h2>What it costs, published</h2>
            <p>
              Three plans, in US dollars, billed monthly. Most single-location
              businesses start at $390. I publish these because the most common question
              I get is cost, and because a provider who will not name a price before a
              sales call is usually pricing you rather than the work.
            </p>
            <div className="grid g3">
              {pricing.map((p) => (
                <div className="card price-card" key={p.tier}>
                  <h3>{p.tier}</h3>
                  <div className="amt">
                    {p.usd}
                    <small>{p.cadence}</small>
                  </div>
                  <ul>
                    {p.includes.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                  <div className="best"><strong>Best for:</strong> {p.best}</div>
                  {p.note && <div className="note">{p.note}</div>}
                </div>
              ))}
            </div>
            <h3 style={{ marginTop: "2.2rem" }}>Why this is cheaper than a Western agency, and what that does not mean</h3>
            <p>
              A plumbing business in the United States is routinely quoted $3,500 a month
              for local SEO. A large part of that figure is agency overhead: account
              managers, sales commission, office costs and a delivery team that is often
              offshore anyway. Working with me removes those layers — you deal directly
              with the person doing the work.
            </p>
            <p>
              What the lower price does not mean is less work, junior staff, or corners
              cut on policy compliance. The methods are the same ones a good Western
              agency uses, because Google&apos;s ranking system and policy regime do not vary
              by the location of whoever is doing the optimising.
            </p>
          </div>
        </section>

        {/* 10 ── CASE STUDIES (placeholder) ──────────────────── */}
        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">Evidence</p>
            <h2>Results, with the screenshots to match</h2>
            <p>
              Three engagements, three different trades. Every figure below is read off
              a dated screenshot from the client&apos;s own Search Console or Business Profile
              account, and I can produce the export on request. If a provider cannot do
              that, treat their case studies as marketing copy.
            </p>
            <div className="grid g3">
              {caseStudies.map((c, i) => (
                <div className="card" key={i}>
                  <h3>{c.vertical}</h3>
                  <p style={{ marginBottom: ".8rem" }}><strong>{c.location}</strong> · {c.window} · {c.source}</p>
                  <p style={{ marginBottom: ".8rem" }}>{c.problem}</p>
                  <div className="table-scroll" style={{ margin: ".6rem 0" }}>
                    <table style={{ minWidth: "auto", fontSize: ".85rem" }}>
                      <thead><tr><th>Metric</th><th>Result</th></tr></thead>
                      <tbody>
                        {c.metrics.map((m) => (
                          <tr key={m.label}><td>{m.label}</td><td><strong>{m.value}</strong></td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>{c.work}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.4rem" }}>
              <a href="/portfolio">See all eight engagements, with the screenshots</a>
            </p>
          </div>
        </section>

        {/* 11 ── FOR OVERSEAS BUYERS ─────────────────────────── */}
        <section>
          <div className="wrap">
            <p className="eyebrow">Hiring from abroad</p>
            <h2>If you are hiring from outside Pakistan</h2>
            <p>
              You have probably read the threads about offshore providers going quiet
              mid-project. That concern is reasonable and I would rather answer it up
              front than have you wonder about it after a proposal. Here is how the
              engagement is structured so that the risk sits with me rather than you.
            </p>
            <div className="table-scroll">
              <table>
                <thead><tr><th>Your region</th><th>Live overlap with my working day</th><th></th></tr></thead>
                <tbody>
                  {overlap.map((o) => (
                    <tr key={o.region}><td><strong>{o.region}</strong></td><td>{o.hours}</td><td>{o.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid g2" style={{ marginTop: "1.4rem" }}>
              <div className="card">
                <h3>You own everything, the whole time</h3>
                <p>
                  Your Google Business Profile stays under your Google account with me
                  added as a manager, never an owner. Website, domain, hosting, Analytics
                  and Search Console stay in your accounts. Content produced is yours.
                  Offboarding is a manager removal and a handover document — leaving never
                  costs you your listing.
                </p>
              </div>
              <div className="card">
                <h3>Response times in writing</h3>
                <p>
                  A stated response window during overlap hours, a named escalation path,
                  and a monthly call at a time that works in your timezone rather than
                  mine. If I am unreachable beyond the agreed window, that is a breach of
                  the engagement, not an inconvenience.
                </p>
              </div>
              <div className="card">
                <h3>Month to month</h3>
                <p>
                  No twelve-month lock-in. Local SEO takes 60 to 90 days to show
                  meaningful movement and I will tell you that before you sign, but you
                  should not have to buy a year to find out whether we work well together.
                </p>
              </div>
              <div className="card">
                <h3>Policy compliance is not optional</h3>
                <p>
                  I will not build review flows that gate, incentivise or script customer
                  feedback, and I will not keyword-stuff your business name. Both are
                  common in this market, both are banned, and both put your profile at
                  risk of a suspension that costs more to fix than the rankings were worth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 ── WHO I DON'T WORK WITH ───────────────────────── */}
        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">Fit</p>
            <h2>Who I am not the right person for</h2>
            <p>
              Six situations where I will tell you no. Saying this costs me enquiries and
              saves us both a bad engagement.
            </p>
            <ul className="signs">
              {disqualifiers.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        </section>

        {/* 13 ── TESTIMONIALS (placeholder) ──────────────────── */}
        <section>
          <div className="wrap">
            <p className="eyebrow">In their words</p>
            <h2>What clients say</h2>
            <div className="grid g2">
              {testimonials.map((t, i) => (
                <div className="card" key={i}>
                  <p style={{ fontSize: "1.02rem", color: "var(--fg)" }}>&ldquo;{t.quote}&rdquo;</p>
                  <p style={{ marginTop: ".8rem" }}><strong>{t.author}</strong> — {t.detail}</p>
                </div>
              ))}
            </div>
            <div className="ph" style={{ marginTop: "20px" }}>
              <span className="ph-tag">Fill this in before launch</span>
              <p>
                Only real, attributable client words. Ask permission before publishing a
                name. Where a client will not be named, use role plus business type plus
                city rather than inventing one. Never write a testimonial on a client&apos;s
                behalf, and never ask a client to include keywords in their review — that
                is banned under Google&apos;s April 2026 policy and it is visible to anyone
                reading the profile.
              </p>
            </div>
          </div>
        </section>

        {/* 14 ── ABOUT ───────────────────────────────────────── */}
        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">About</p>
            <h2>Who is doing the work</h2>
            <p>
              I am {site.name}, based in {site.countryName}. I work on local search only. That
              narrowness is the point: local ranking has its own factor weights, its own
              policy regime that changed materially in 2026, and its own set of ways to
              get a business suspended, and it is not something you keep current with as a
              side service alongside paid ads and social media.
            </p>
            <p>
              When you hire me, the person who audits your profile is the person who does
              the work and the person who sends the report. There is no account manager
              relaying questions to a delivery team you never meet, which is most of what
              you are paying for at a large agency and most of where the meaning gets lost.
            </p>
            <div className="ph">
              <span className="ph-tag">Fill this in before launch</span>
              <p>
                Add: years working in local SEO, a real photo of yourself, the verticals
                you have the most experience in, any certifications, and — most valuable
                for credibility here — the local assets you own and rank yourself. A
                consultant who ranks their own properties can say something no competitor
                on this search result can. Also add your own verified Google Business
                Profile link; a local SEO expert without one is the easiest credibility
                attack there is.
              </p>
            </div>
          </div>
        </section>

        {/* 15 ── FAQ ─────────────────────────────────────────── */}
        <section id="faq">
          <div className="wrap">
            <p className="eyebrow">Questions</p>
            <h2>Straight answers</h2>
            <div style={{ maxWidth: "820px" }}>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="answer"><p>{f.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 16 ── CTA ─────────────────────────────────────────── */}
        <section className="cta-band">
          <div className="wrap">
            <h2>Start with the audit, not the contract</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send me your business name and city. I will run a geo-grid check and a
              profile audit and tell you what is actually wrong — including if the answer
              is that you do not need to hire anyone. If the monthly gap does not justify
              a retainer, I will say so.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={wa} rel="nofollow">Message me on WhatsApp</a>
              <a className="btn btn-ghost" href={`mailto:${site.email}`}>{site.email}</a>
              {site.bookingUrl && (
                <a className="btn btn-ghost" href={site.bookingUrl} rel="nofollow">Book a call</a>
              )}
            </div>
            <p style={{ marginTop: "1.2rem", fontSize: ".92rem", color: "var(--fg-muted)" }}>
              {site.timezone} · Overlap hours for the UK, US, Gulf and Australia are listed above.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

