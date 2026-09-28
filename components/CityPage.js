import Header from "./Header";
import Footer from "./Footer";
import { site } from "../lib/site";
import { services } from "../lib/services";
import { cities, cityStats } from "../lib/cities";

// Shared renderer for every city page.
//
// Laid out with the same section system as the homepage: a hero, a stat
// band, alternating bands, card grids and numbered step rows, rather than
// one long column of prose.
//
// City pages live at the site root: /local-seo-expert-in-lahore, not
// /locations/lahore. There is no locations hub, so nothing should imply
// one in the URL.

const STEP_TITLES = [
  "Start with the map, not a proposal",
  "Then the unglamorous work",
  "Evidence, not promises",
];

function Dot() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function buildCityMetadata(c) {
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `/${c.slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/${c.slug}`,
      title: c.title,
      description: c.description,
    },
  };
}

function schema(c) {
  const url = `${site.url}/${c.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: c.h1,
        description: c.description,
        serviceType: "Local SEO",
        provider: { "@id": `${site.url}/#business` },
        areaServed: {
          "@type": "City",
          name: c.city,
          address: {
            "@type": "PostalAddress",
            addressLocality: c.city,
            addressRegion: c.region,
            addressCountry: "PK",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: c.lat,
            longitude: c.lng,
          },
        },
        url,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: c.h1,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: c.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: c.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export default function CityPage({ city: c }) {
  const others = cities.filter((x) => x.slug !== c.slug);
  const problems = c.body[0];
  const fit = c.body[1];
  const process = c.body[2];

  const gmail =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(site.email) +
    "&su=" +
    encodeURIComponent(c.h1) +
    "&body=" +
    encodeURIComponent("Business name:\nArea:\nWebsite:\nWhat you want more of:\n");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(c)) }}
      />
      <Header />
      <main>
        <section className="hero">
          <div className="wrap" style={{ maxWidth: "860px" }}>
            <p className="eyebrow">{c.city}</p>
            <h1>{c.h1}</h1>
            <p className="lede">{c.excerpt}</p>
            <div className="btn-row">
              <a
                className="btn btn-primary"
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener nofollow"
              >
                WhatsApp Me
              </a>
              <a
                className="btn btn-white"
                href={gmail}
                target="_blank"
                rel="noopener nofollow"
              >
                Email Now
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="grid g4 stat-band">
              {cityStats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.b}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <div className="split">
              <div>
                <p className="eyebrow">The market</p>
                <h2>Local SEO in {c.city} is its own problem</h2>
                <div className="rule"></div>
                {c.intro.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2>{problems.h}</h2>
            {problems.p.map((t, i) => (
              <p key={i} className="note">
                {t}
              </p>
            ))}
            <div className="grid g3">
              {(problems.items || []).map((it) => (
                <div className="card" key={it.n}>
                  <span className="ibadge">
                    <Dot />
                  </span>
                  <h3>{it.n}</h3>
                  <p>{it.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <div className="split">
              <div>
                <p className="eyebrow">Best fit</p>
                <h2>{fit.h}</h2>
                <div className="rule"></div>
                {fit.p.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2>{process.h}</h2>
            {process.p.map((t, i) => (
              <div className="steprow" key={i}>
                <div>
                  <span className="stepnum">{i + 1}</span>
                  <h3>{STEP_TITLES[i] || "Next"}</h3>
                  <div className="rule"></div>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <h2>What the work involves</h2>
            <p className="note">
              Every engagement in {c.city} is assembled from these. The audit
              decides which of them you actually need.
            </p>
            <div className="grid g3">
              {services.map((s) => (
                <a className="card" href={`/${s.slug}`} key={s.slug}>
                  <span className="ibadge">
                    <Dot />
                  </span>
                  <h3>{s.nav}</h3>
                  <p>{s.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ maxWidth: "860px" }}>
            <h2>Straight answers</h2>
            {c.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <h2>Other cities I work in</h2>
            <div className="grid g3">
              {others.map((o) => (
                <a className="card" href={`/${o.slug}`} key={o.slug}>
                  <span className="ibadge">
                    <Dot />
                  </span>
                  <h3>{o.h1}</h3>
                  <p>{o.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>Want to see where you actually rank in {c.city}?</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send your business name and the area you serve. I will run a
              geo-grid check and a profile audit and tell you what is genuinely
              wrong, including if the answer is that you do not need to hire
              anyone.
            </p>
            <div className="btn-row">
              <a
                className="btn btn-primary"
                href={gmail}
                target="_blank"
                rel="noopener nofollow"
              >
                Email Me for Free GMB Audit
              </a>
              <a className="btn btn-ghost" href="/portfolio">
                See client results
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
