import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppInvite from "../components/WhatsAppInvite";
import {
  site,
  caseStudies,
  testimonials,
  pricing,
  faqs,
  disqualifiers,
} from "../lib/site";
import { services } from "../lib/services";

export const metadata = {
  title: "Local SEO Expert in Pakistan | Map Pack & AI Search by Waseem Ranker",
  description:
    "Local SEO consultant in Pakistan working with businesses and agencies in the UK, US, Gulf and Australia. Google Business Profile, map pack rankings, suspension recovery and AI Overview visibility. Published pricing, no guarantees.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Local SEO Expert in Pakistan | Waseem Ranker",
    description:
      "Map pack rankings, Google Business Profile recovery and AI search visibility. Published pricing. Evidence, not guarantees.",
    locale: "en_US",
  },
};

// Homepage-only schema. Lives here rather than in the root layout so the
// FAQ and the homepage WebPage node are not emitted on every page.
function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: "Local SEO Expert in Pakistan",
        about: { "@id": `${site.url}/#person` },
        isPartOf: { "@id": `${site.url}/#website` },
        breadcrumb: { "@id": `${site.url}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/* Inline stroke icons. Replace any of these with your own artwork by
   swapping the <svg> for an <img src="/icons/name.svg" alt="" />. */
const I = {
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <circle cx="17.5" cy="17.5" r="3.5" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.4-3 8.3-7 10-4-1.7-7-5.6-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5S20 17 20 21" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.5.5l2-2a5 5 0 00-7-7l-1 1" />
      <path d="M14 11a5 5 0 00-7.5-.5l-2 2a5 5 0 007 7l1-1" />
    </svg>
  ),
};

const SERVICE_ICON = {
  "gmb-optimization": I.pin,
  "local-citation-building": I.link,
  "gmb-reinstatement": I.shield,
  "local-schema-markup": I.doc,
  "gmb-audit": I.chart,
};

const STEPS = [
  {
    n: 1,
    h: "Geo-grid baseline",
    p: "Your keywords queried from dozens of points across your real service radius and plotted as a map, not a single rank check from your own office. You see where your visibility actually stops before anyone touches anything.",
    icon: I.grid,
  },
  {
    n: 2,
    h: "Fix what is broken",
    p: "Categories, services, attributes and service-area configuration corrected in a staged sequence. Suspension risks are removed first, because aggressive work on a fragile profile is how listings disappear.",
    icon: I.shield,
  },
  {
    n: 3,
    h: "Build the foundation",
    p: "Citations and NAP corrected at aggregator level, schema rebuilt as a connected entity graph, and the location and service pages that let the profile rank for more than your business name.",
    icon: I.link,
  },
  {
    n: 4,
    h: "Compound and report",
    p: "Weekly profile activity, a compliant review process, and the same geo-grid re-run every month. Reporting covers calls, direction requests and enquiries rather than a list of keyword positions.",
    icon: I.chart,
  },
];

export default function Home() {
  const wa = `https://wa.me/${site.whatsapp}`;
  const gmail =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(site.email) +
    "&su=" +
    encodeURIComponent("Free Google Business Profile Audit") +
    "&body=" +
    encodeURIComponent("Business name:\nCity:\nWebsite:\nWhat you want more of:\n");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
      />

      <div className="topbar">
        Free GMB audit: a geo-grid check across your real service radius, back in one working day.
        <a href="/gmb-audit">See what it covers</a>
      </div>

      <Header />

      <main>
        {/* 1 ── HERO ─────────────────────────────────────────── */}
        <section className="hero hero-shot">
          <div className="wrap">
            <div className="hero-grid">
            <div className="hero-copy">
              <span className="pill">
                47+ businesses &nbsp;·&nbsp; 13 profiles recovered &nbsp;·&nbsp; 27 countries
              </span>
              <p className="eyebrow">Local SEO</p>
              <h1>Local SEO Expert in Pakistan</h1>
              <p className="lede">
                I am a Pakistani local SEO expert who gets businesses into the Google map
                pack, and into the AI answers that now sit above it. Published pricing,
                evidence you can check, and no promise of a number one ranking, because
                nobody can honestly make one.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href={gmail} target="_blank" rel="noopener nofollow">
                  Email Me for a Free Profile Audit
                </a>
                <a className="btn btn-white" href="/portfolio">See the proof</a>
              </div>
            </div>
            <figure className="hero-figure">
              <img src="/img/waseem-abbas/image.webp" width="1080" height="700" fetchPriority="high"
                alt="Waseem Abbas, local SEO consultant" />
              <figcaption>
                <b>Waseem Abbas</b>
                <span>Local SEO consultant. You deal with me, not an account manager.</span>
              </figcaption>
            </figure>
            </div>
          </div>
        </section>

        {/* 2 ── STAT BAND ────────────────────────────────────── */}
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="grid g4 stat-band">
              <div className="stat"><b>47+</b><span>Businesses worked with</span></div>
              <div className="stat"><b>13</b><span>Profiles recovered from suspension</span></div>
              <div className="stat"><b>5+</b><span>Years doing local SEO</span></div>
              <div className="stat"><b>27</b><span>Countries served</span></div>
            </div>
          </div>
        </section>

        {/* 3 ── THREE PILLARS ────────────────────────────────── */}
        <section className="alt">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "2.6rem" }}>
              <p className="eyebrow">What you are buying</p>
              <h2>Three things most providers cannot show you</h2>
              <p style={{ maxWidth: "62ch", margin: "0 auto" }}>
                Anyone can call themselves a Local SEO Expert in Pakistan. These are the
                three things I can put in front of you before you pay anything.
              </p>
            </div>
            <div className="grid g3">
              <div className="card card-center">
                <span className="ibadge">{I.chart}</span>
                <h3>The evidence</h3>
                <p>
                  Every figure on this site is read from a client account and I can produce the
                  export for any of it. Screenshots are dated. Nothing is rounded up.
                </p>
              </div>
              <div className="card card-center">
                <span className="ibadge">{I.person}</span>
                <h3>The person</h3>
                <p>
                  The person who audits your profile is the person who does the work and writes
                  the report. No account manager, no delivery team you never meet.
                </p>
              </div>
              <div className="card card-center">
                <span className="ibadge">{I.spark}</span>
                <h3>The method</h3>
                <p>
                  Geo-grid measurement across your whole service radius, staged profile fixes,
                  and a compliant review process. All of it checkable in your own account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 ── TRUST STRIP ──────────────────────────────────── */}
        <section className="alt">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "2.6rem" }}>
              <p className="eyebrow">Read from live client accounts</p>
              <h2>What the dashboards actually show</h2>
            </div>
            <div className="grid g2 proofgrid">
              <figure className="proof">
                <img src="/img/search-console-growth/image.webp" width="588" height="236" loading="lazy"
                  alt="Google Search Console showing 15.5K total clicks and 4.03M total impressions on a client account." />
                <figcaption>
                  <b>15.5K clicks, 4.03M impressions</b>
                  Search Console on a client property. The climb in the last third of the chart is
                  when the profile and citation work landed.
                </figcaption>
              </figure>
              <figure className="proof">
                <img src="/img/ai-citations-growth/image.webp" width="623" height="241" loading="lazy"
                  alt="AI citation tracking showing 29.3K total citations and 8 average cited pages over three months." />
                <figcaption>
                  <b>29.3K AI citations, 8 cited pages</b>
                  Being named inside AI answers is now its own channel. This is three months of
                  citation growth on one client.
                </figcaption>
              </figure>
              <figure className="proof">
                <img src="/img/active-users-by-country/image.webp" width="327" height="222" loading="lazy"
                  alt="Analytics map of active users by country, with increases across Mexico, Argentina, Spain, the United States, Colombia, Chile and Peru." />
                <figcaption>
                  <b>Growth across every market</b>
                  Active users by country on a multi-market client. Every row in the panel is up
                  on the prior period.
                </figcaption>
              </figure>
              <figure className="proof">
                <img src="/img/gsc-clicks-impressions/image.webp" width="221" height="95" loading="lazy"
                  alt="Google Business Profile panel showing 125 clicks up 317 percent and 1.96K impressions up 270 percent in the last 7 days." />
                <figcaption>
                  <b>Clicks up 317%, impressions up 270%</b>
                  A seven day window on a Google Business Profile after the map pack work. Small
                  numbers, real calls.
                </figcaption>
              </figure>
            </div>
            <p className="note" style={{ textAlign: "center", marginTop: "1.6rem" }}>
              Client names are withheld. I can screen share the live account for any figure
              here, which is the test worth applying to any Local SEO Expert in Pakistan you
              are considering.
            </p>
          </div>
        </section>

        {/* 5 ── FOCUS SPLIT ──────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="split">
              <div>
                <p className="eyebrow">Differentiation</p>
                <h2>What a Local SEO Expert in Pakistan actually changes</h2>
                <div className="rule" />
                <p>
                  Rankings are a means. What a business owner actually needs is the phone
                  ringing with people inside the service area who are ready to buy. That is
                  what gets measured, and it is what the monthly report is built around.
                </p>
                <p>
                  Most people searching for an SEO expert in Pakistan actually need local
                  search work rather than blog volume: the profile, the map pack and the
                  citations are what move enquiries. The advantage of hiring a
                  local SEO specialist Pakistan side is the rate, not a compromise on the work.
                </p>
                <p>
                  If the geo-grid shows the revenue gap does not justify a retainer, I will
                  tell you that instead of selling you one.
                </p>
                <div className="btn-row">
                  <a className="btn btn-ghost" href="/about">How I work</a>
                </div>
              </div>
              <div className="grid" style={{ gap: "18px" }}>
                <div className="card rowcard">
                  <span className="ibadge">{I.grid}</span>
                  <div>
                    <h3>Measured across your whole radius</h3>
                    <p>
                      A single-point rank check is the least representative number available.
                      The geo-grid shows where your visibility actually falls away.
                    </p>
                  </div>
                </div>
                <div className="card rowcard">
                  <span className="ibadge">{I.shield}</span>
                  <div>
                    <h3>Suspension risk handled, not sold</h3>
                    <p>
                      Every tier includes risk auditing and appeal handling. A provider who
                      profits from suspensions has a quiet incentive not to prevent them.
                    </p>
                  </div>
                </div>
                <div className="card rowcard">
                  <span className="ibadge">{I.doc}</span>
                  <div>
                    <h3>Published pricing</h3>
                    <p>
                      Three tiers, listed in full further down this page. No discovery call
                      required before you find out what it costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 ── SERVICES ─────────────────────────────────────── */}
        <section className="alt" id="services">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "2.6rem" }}>
              <p className="eyebrow">Services</p>
              <h2>What I actually do</h2>
            </div>
            <div className="grid g3">
              {services.map((s) => (
                <a
                  key={s.slug}
                  className="card"
                  href={`/${s.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <span className="ibadge">{SERVICE_ICON[s.slug]}</span>
                  <h3>{s.nav}</h3>
                  <p>{s.excerpt}</p>
                  <span style={{ color: "var(--accent)", fontWeight: 650, fontSize: ".92rem" }}>
                    Read more
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 7 ── PROCESS ──────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="eyebrow">The method</p>
              <h2>How an engagement runs</h2>
            </div>
            {STEPS.map((s, i) => (
              <div className={`steprow${i % 2 === 1 ? " flip" : ""}`} key={s.n}>
                <div>
                  <span className="stepnum">{s.n}</span>
                  <h3 style={{ fontSize: "1.5rem" }}>{s.h}</h3>
                  <div className="rule" />
                  <p>{s.p}</p>
                </div>
                <div className="steprow-media">{s.icon}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 8 ── CASE STUDIES ─────────────────────────────────── */}
        <section className="alt">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "2.6rem" }}>
              <p className="eyebrow">Results</p>
              <h2>Three engagements, three niches</h2>
            </div>
            <div className="grid g3">
              {caseStudies.map((c) => (
                <div className="card" key={c.vertical}>
                  <p className="eyebrow" style={{ marginBottom: ".5rem" }}>{c.vertical}</p>
                  <h3>{c.location}</h3>
                  <p style={{ fontSize: ".88rem" }}>
                    {c.window} · {c.source}
                  </p>
                  <div className="table-scroll" style={{ margin: "1rem 0" }}>
                    <table>
                      <thead><tr><th>Metric</th><th>Result</th></tr></thead>
                      <tbody>
                        {c.metrics.map((m) => (
                          <tr key={m.label}>
                            <td>{m.label}</td>
                            <td><strong>{m.value}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: ".94rem", marginBottom: 0 }}>{c.work}</p>
                </div>
              ))}
            </div>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a className="btn btn-ghost" href="/portfolio">
                See all eight engagements, with the screenshots
              </a>
            </div>
          </div>
        </section>

        {/* 9 ── TESTIMONIALS ─────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "2.6rem" }}>
              <p className="eyebrow">In their words</p>
              <h2>What clients say</h2>
            </div>
            <div className="grid g2">
              {testimonials.map((t) => (
                <div className="card" key={t.author}>
                  <span className="ibadge">{I.spark}</span>
                  <p style={{ fontSize: "1.04rem", color: "var(--fg)" }}>&ldquo;{t.quote}&rdquo;</p>
                  <p style={{ marginBottom: 0, fontWeight: 650, color: "var(--brand-700)" }}>
                    {t.author}, {t.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 ── PRICING ─────────────────────────────────────── */}
        <section className="alt" id="pricing">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "2.6rem" }}>
              <p className="eyebrow">Pricing</p>
              <h2>Published, so you can decide before you call</h2>
            </div>
            <div className="grid g3">
              {pricing.map((p, i) => (
                <div className={`price-card${i === 1 ? " featured" : ""}`} key={p.tier}>
                  <h3>{p.tier}</h3>
                  <div className="price">
                    {p.usd}
                    <small>{p.cadence}</small>
                  </div>
                  <p style={{ fontSize: ".92rem", marginTop: ".8rem" }}>{p.best}</p>
                  <ul>
                    {p.includes.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                  <p style={{ fontSize: ".88rem", marginTop: "auto", marginBottom: "1.2rem" }}>
                    {p.note}
                  </p>
                  <a className="btn btn-primary" href={gmail} target="_blank" rel="noopener nofollow">
                    Get a free audit
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11 ── WHO THIS IS NOT FOR ─────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="split">
              <div>
                <p className="eyebrow">Straight talk</p>
                <h2>When you should not hire me</h2>
                <div className="rule" />
                <p>
                  Every one of these costs me work, and every one of them is on this page on
                  purpose. A provider who says yes to all six is telling you something.
                </p>
              </div>
              <div className="signs">
                <ul style={{ margin: 0 }}>
                  {disqualifiers.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 12 ── FAQ ─────────────────────────────────────────── */}
        <section className="alt" id="faq">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "2.6rem" }}>
              <p className="eyebrow">Questions</p>
              <h2>Straight answers</h2>
            </div>
            <div style={{ maxWidth: "820px", margin: "0 auto" }}>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="answer"><p>{f.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 13 ── CTA ─────────────────────────────────────────── */}
        <section className="cta-band">
          <div className="wrap">
            <h2>Want to know what your own numbers look like?</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send your business name and city. I will run a geo-grid check and a profile audit
              and tell you what is actually wrong, including if the answer is that you do not
              need to hire a Local SEO Expert in Pakistan at all.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={gmail} target="_blank" rel="noopener nofollow">
                Email Me for a Free Profile Audit
              </a>
              <a className="btn btn-ghost" href={wa} rel="nofollow">Message me on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppInvite />
    </>
  );
}
