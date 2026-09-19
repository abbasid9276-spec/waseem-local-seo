import Header from "./Header";
import Footer from "./Footer";
import { site } from "../lib/site";
import { services } from "../lib/services";

// Shared renderer for every service page.
//
// Service pages live at the root — /gmb-optimization, not
// /services/gmb-optimization — because there is no services section to
// nest them under. "Services" in the header is a dropdown trigger, not a
// link, so no hub page exists and none should be implied by the URL.

export function buildMetadata(s) {
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/${s.slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/${s.slug}`,
      title: s.title,
      description: s.description,
    },
  };
}

function schema(s) {
  const url = `${site.url}/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.h1,
        description: s.description,
        serviceType: s.h1,
        provider: { "@id": `${site.url}/#business` },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        url,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: s.h1,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: s.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export default function ServicePage({ service: s }) {
  const others = services.filter((x) => x.slug !== s.slug);
  const gmail =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(site.email) +
    "&su=" +
    encodeURIComponent(s.h1) +
    "&body=" +
    encodeURIComponent("Business name:\nCity:\nWebsite:\nWhat you want more of:\n");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(s)) }}
      />
      <Header />
      <main>
        <section className="hero">
          <div className="wrap" style={{ maxWidth: "820px" }}>
            <p className="eyebrow">Services</p>
            <h1>{s.h1}</h1>
            <p className="lede">{s.excerpt}</p>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ maxWidth: "820px" }}>
            {s.intro.map((t, i) => (
              <p key={i}>{t}</p>
            ))}

            {s.body.map((sec) => (
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
            {s.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}

            <h2>Other services</h2>
            <ul>
              {others.map((o) => (
                <li key={o.slug}>
                  <a href={`/${o.slug}`}>{o.nav}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>Want to know what your own numbers look like?</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send your business name and city. I will run a geo-grid check and a profile
              audit and tell you what is actually wrong — including if the answer is that
              you do not need to hire anyone.
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
