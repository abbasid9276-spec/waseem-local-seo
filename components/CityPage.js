import Header from "./Header";
import Footer from "./Footer";
import { site } from "../lib/site";
import { cityList } from "../lib/cities";

export default function CityPage({ data }) {
  const wa = `https://wa.me/${site.whatsapp}`;
  const others = cityList.filter((c) => c.city !== data.city);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="wrap">
            <nav className="crumb" aria-label="Breadcrumb">
              <a href="/">Local SEO Expert in Pakistan</a> <span>/</span> {data.city}
            </nav>
            <h1>{data.h1}</h1>
            <p className="lede">{data.lede}</p>
            {data.intro.map((p, i) => <p key={i}>{p}</p>)}
            <p>
              I am {site.name}, a local SEO consultant working with businesses in{" "}
              {data.city} and across Pakistan, as well as with clients and agencies in
              the UK, United States, Canada, the Gulf and Australia. The broader
              approach, the published pricing and the evidence behind it are set out on
              my main page for anyone looking for a{" "}
              <a href="/">local SEO expert in Pakistan</a>; this page covers what is
              specific to {data.city}.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={wa} rel="nofollow">
                Get a free {data.city} geo-grid check
              </a>
              <a className="btn btn-ghost" href="/#pricing">See published pricing</a>
            </div>
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">The market</p>
            <h2>{data.marketHeading}</h2>
            {data.market.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <section>
          <div className="wrap">
            <p className="eyebrow">Coverage</p>
            <h2>{data.areasHeading}</h2>
            {data.areas.map((p, i) => <p key={i}>{p}</p>)}
            <p>
              Measuring this honestly is the part most providers skip. A single rank
              check run from your own premises will always look flattering. A geo-grid
              run across your genuine service radius shows where you win, where you
              fade, and how far your listing really travels — which is the same
              reporting standard I describe in{" "}
              <a href="/#pricing">what every engagement includes</a>.
            </p>
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">Fit</p>
            <h2>{data.verticalsHeading}</h2>
            <ul className="signs">
              {data.verticals.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
          </div>
        </section>

        <section>
          <div className="wrap">
            <p className="eyebrow">Timing</p>
            <h2>{data.seasonHeading}</h2>
            {data.season.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">2026</p>
            <h2>Why the map pack is only half the job in {data.city}</h2>
            <p>
              AI Overviews now appear on roughly 68% of local business searches, against
              about 39% for the traditional local pack. The split follows intent. A
              transactional search — the one where somebody is about to call — still
              returns a map pack over 90% of the time. But the informational and
              comparison searches that come before it, the ones about cost, options and
              whether the thing is worth doing at all, return an AI answer between 92%
              and 97% of the time.
            </p>
            <p>
              For a {data.city} business that means competing only for the map pack
              leaves you invisible across the entire research stage, which is where the
              decision usually gets made. It also means the work is different: only
              about 23% of citations in local AI answers point at the business&apos;s own
              website, with the rest coming from third-party sources. You cannot win
              that with on-site content alone, however much of it you publish. The full
              explanation of{" "}
              <a href="/#ai-search">how businesses get cited in AI answers</a> sits on
              the main page.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <p className="eyebrow">Questions</p>
            <h2>Local SEO in {data.city}: straight answers</h2>
            <div style={{ maxWidth: "820px" }}>
              {data.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="answer"><p>{f.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <p className="eyebrow">Also</p>
            <h2>Other cities</h2>
            <p>
              Each of these is written separately, because the markets genuinely differ
              and a page that only swaps the city name is treated as thin content since
              Google&apos;s March 2026 core update.
            </p>
            <ul className="signs">
              {others.map((c) => (
                <li key={c.slug}>
                  <a href={`/${c.slug}`}>Local SEO services in {c.city}</a>
                </li>
              ))}
              <li>
                <a href="/guest-posting-services-in-pakistan">
                  Guest posting and editorial placement in Pakistan
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>Start with a {data.city} geo-grid, not a contract</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send me your business name and the area of {data.city} you operate in. I
              will run a geo-grid check and a profile audit and tell you what is actually
              wrong — including if the answer is that you do not need to hire anyone. If
              the monthly gap does not justify a retainer, I will say so.
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

export function citySchema(data, siteUrl) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/${data.slug}#service`,
        name: `Local SEO services in ${data.city}`,
        serviceType: "Local SEO",
        provider: { "@id": `${siteUrl}/#person` },
        areaServed: { "@type": "City", name: data.city, address: { "@type": "PostalAddress", addressCountry: "PK" } },
        description: data.lede,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/${data.slug}#faq`,
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/${data.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: `Local SEO services in ${data.city}`, item: `${siteUrl}/${data.slug}` },
        ],
      },
    ],
  };
}
