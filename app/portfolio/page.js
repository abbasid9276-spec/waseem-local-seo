import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site } from "../../lib/site";
import { cases } from "../../lib/portfolio";

// Intrinsic size of each cropped screenshot. Used so the figure reserves the
// right space (no layout shift) and never upscales a smaller capture.
const DIMS = {
  "case-01": [900, 498],
  "case-02": [900, 382],
  "case-03": [900, 418],
  "case-04": [900, 404],
  "case-05": [900, 454],
  "case-06": [900, 534],
  "case-07": [690, 518],
  "case-08": [900, 426],
};

export const metadata = {
  title: "Portfolio — Local SEO Results | Waseem Abbas",
  description:
    "Real client results from Google Search Console, Google Business Profile, Bing and GA4: map pack rankings, steady enquiry flow and consistent customers for local service businesses.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: `${site.url}/portfolio`,
    title: "Portfolio — Local SEO Results | Waseem Abbas",
    description:
      "Dated screenshots from client accounts. Clicks, impressions, direction requests and engagement — and what each one meant for the business.",
  },
};

function schema() {
  const url = `${site.url}/portfolio`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: "Local SEO Portfolio",
        about: { "@id": `${site.url}/#person` },
        description:
          "Client results from local SEO engagements, evidenced with dated screenshots from Google Search Console, Google Business Profile, Bing Webmaster Tools and Google Analytics 4.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: url },
        ],
      },
    ],
  };
}

export default function Portfolio() {
  const wa = `https://wa.me/${site.whatsapp}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
      />
      <Header />
      <main>

        <section className="hero">
          <div className="wrap">
            <nav className="crumb" aria-label="Breadcrumb">
              <a href="/">Local SEO Expert in Pakistan</a> <span>/</span> Portfolio
            </nav>
            <h1>Results, with the screenshots to match</h1>
            <p className="lede">
              Every figure on this page is read straight from a client account —
              Google Search Console, Google Business Profile, Bing Webmaster Tools and
              GA4. No rounded-up claims, no numbers I cannot produce the export for.
            </p>
            <p>
              Rankings are not the product. Consistent leads are. Each case below shows
              the chart, the period it covers, and what the change actually meant for
              the owner: more enquiries, arriving steadily, from people already looking
              to buy. The approach behind all of it, including published pricing, is on
              my main page for anyone comparing a{" "}
              <a href="/">local SEO expert in Pakistan</a>.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={wa} rel="nofollow">
                Get a free geo-grid check
              </a>
              <a className="btn btn-ghost" href="/#pricing">See published pricing</a>
            </div>
          </div>
        </section>

        {cases.map((c, i) => (
          <section key={c.id} className={i % 2 === 0 ? "alt" : ""}>
            <div className="wrap">
              <p className="eyebrow">
                {c.vertical} · {c.city}
              </p>
              <h2>{c.headline}</h2>
              <p style={{ color: "var(--fg-muted)", fontSize: ".9rem", marginTop: "-.4rem" }}>
                {c.source}
              </p>

              <div className="grid g4" style={{ margin: "1.4rem 0" }}>
                {c.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              <figure className="shot" style={{ maxWidth: DIMS[c.id][0] }}>
                <img
                  src={c.image}
                  alt={`${c.source} screenshot showing ${c.stats
                    .map((s) => `${s.label} ${s.value}`)
                    .join(", ")}`}
                  loading={i < 2 ? "eager" : "lazy"}
                  width={DIMS[c.id][0]}
                  height={DIMS[c.id][1]}
                />
              </figure>

              {c.body.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          </section>
        ))}

        <section>
          <div className="wrap">
            <p className="eyebrow">How to read these</p>
            <h2>What these charts do and do not prove</h2>
            <p>
              Screenshots are evidence, not proof of what will happen for you. Every
              business starts from a different position, in a different category, in a
              different city, and results vary accordingly. Anyone showing you charts
              like these alongside a guarantee is selling you something they cannot
              deliver.
            </p>
            <p>
              What these do show is a consistent pattern: correct the Google Business
              Profile, fix what is broken technically, publish content that answers the
              questions buyers actually type, and enquiries become steady rather than
              sporadic. That pattern held across every account on this page.
            </p>
            <p>
              I can produce the underlying exports for any figure here on request. If a
              provider cannot do that for their own case studies, treat the numbers as
              marketing copy.
            </p>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>Want to know what your own numbers look like?</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send me your business name and city. I will run a geo-grid check and a
              profile audit and tell you what is actually wrong — including if the
              answer is that you do not need to hire anyone. If the monthly gap does not
              justify a retainer, I will say so.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={wa} rel="nofollow">Message me on WhatsApp</a>
              <a className="btn btn-ghost" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <p style={{ marginTop: "1.2rem", fontSize: ".92rem", color: "var(--fg-muted)" }}>
              No rankings are guaranteed, here or anywhere else. See{" "}
              <a href="/">how I work and what it costs</a>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
