import Header from "./Header";
import Footer from "./Footer";
import { site } from "../lib/site";
import { services } from "../lib/services";
import { cities } from "../lib/cities";

// Shared renderer for every city page.
//
// City pages live at the site root: /local-seo-expert-in-lahore, not
// /locations/lahore. There is no locations hub, so nothing should imply
// one in the URL.

export function buildCityMetadata(c) {
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `/${D}{c.slug}` },
    openGraph: {
      type: "website",
      url: `${D}{site.url}/${D}{c.slug}`,
      title: c.title,
      description: c.description,
    },
  };
}

function schema(c) {
  const url = `${D}{site.url}/${D}{c.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${D}{url}#service`,
        name: c.h1,
        description: c.description,
        serviceType: "Local SEO",
        provider: { "@id": `${D}{site.url}/#business` },
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
        "@id": `${D}{url}#page`,
        url,
        name: c.h1,
        isPartOf: { "@id": `${D}{site.url}/#website` },
        about: { "@id": `${D}{url}#service` },
        breadcrumb: { "@id": `${D}{url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${D}{url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: c.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${D}{url}#faq`,
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
          <div className="wrap" style={{ maxWidth: "820px" }}>
            <p className="eyebrow">{c.city}</p>
            <h1>{c.h1}</h1>
            <p className="lede">{c.excerpt}</p>
            <div className="btn-row">
              <a
                className="btn btn-primary"
                href={`https://wa.me/${D}{site.whatsapp}`}
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
          <div className="wrap" style={{ maxWidth: "820px" }}>
            {c.intro.map((t, i) => (
              <p key={i}>{t}</p>
            ))}

            {c.body.map((sec) => (
              <div key={sec.h}>
                <h2>{sec.h}</h2>
                {sec.p.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
                {(sec.items || []).map((it) => (
                  <div key={it.n}>
                    <h3>{it.n}</h3>
                    <p>{it.p}</p>
                  </div>
                ))}
              </div>
            ))}

            <h2>Common questions</h2>
            {c.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}

            <h2>What the work involves</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <a href={`/${D}{s.slug}`}>{s.nav}</a>
                </li>
              ))}
            </ul>

            <h2>Other cities</h2>
            <ul>
              {others.map((o) => (
                <li key={o.slug}>
                  <a href={`/${D}{o.slug}`}>{o.h1}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>Want to see where you actually rank in {c.city}?</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send your business name and the area you serve. I will run a geo-grid
              check and a profile audit and tell you what is genuinely wrong,
              including if the answer is that you do not need to hire anyone.
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
