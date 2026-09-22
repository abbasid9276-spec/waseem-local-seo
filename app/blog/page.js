import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site } from "../../lib/site";
import { posts } from "../../lib/blog";

export const metadata = {
  title: "Local SEO Blog | Citations, Map Pack and AI Search",
  description:
    "Practical local SEO notes: citation lists by country, Google Business Profile changes, map pack tactics and what is working in AI search now.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${site.url}/blog`,
    title: "Local SEO Blog | Citations, Map Pack and AI Search",
    description:
      "Practical local SEO notes: citation lists by country, Google Business Profile changes, map pack tactics and what is working in AI search now.",
  },
};

function schema() {
  const url = `${site.url}/blog`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        url,
        name: "Waseem Ranker Blog",
        author: { "@id": `${site.url}/#person` },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          "@id": `${site.url}/blog/${p.slug}#post`,
          headline: p.title,
          url: `${site.url}/blog/${p.slug}`,
          datePublished: p.date,
          dateModified: p.updated || p.date,
          author: { "@id": `${site.url}/#person` },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: url },
        ],
      },
    ],
  };
}

export default function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
      />
      <Header />
      <main>
        <section className="hero hero-center">
          <div className="wrap">
            <h1>Notes from the work</h1>
            <p className="lede">
              Short, practical pieces on Google Business Profile suspensions, geo-grid
              ranking, map pack visibility and AI search, written from client accounts
              rather than rewritten from someone else&rsquo;s blog.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ maxWidth: "820px" }}>
            {posts.map((p) => (
              <article key={p.slug} style={{ marginBottom: "2.4rem" }}>
                <p className="eyebrow">
                  {new Date(p.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {p.minutes} min read
                </p>
                <h2 style={{ marginTop: ".2rem" }}>
                  <a href={`/blog/${p.slug}`}>{p.title}</a>
                </h2>
                <p>{p.excerpt}</p>
                <p>
                  <a href={`/blog/${p.slug}`}>Read the post</a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>Rather have the answer for your own account?</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send your business name and city and I will run a geo-grid check and a
              profile audit before replying.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="/contact">Get in touch</a>
              <a className="btn btn-ghost" href="/portfolio">See client results</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
