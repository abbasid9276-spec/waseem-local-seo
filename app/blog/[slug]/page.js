import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { site } from "../../../lib/site";
import { posts, getPost } from "../../../lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | WaseemRanker`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
    },
  };
}

function schema(post) {
  const url = `${site.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        url,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        author: { "@id": `${site.url}/#person` },
        publisher: { "@id": `${site.url}/#person` },
        isPartOf: { "@id": `${site.url}/blog#blog` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(post)) }}
      />
      <Header />
      <main>
        <section className="hero">
          <div className="wrap" style={{ maxWidth: "820px" }}>
            <p className="eyebrow">
              <a href="/blog">Blog</a> ·{" "}
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.minutes} min read
            </p>
            <h1>{post.title}</h1>
            <p className="lede">{post.excerpt}</p>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ maxWidth: "820px" }}>
            {post.body.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
                {(s.items || []).map((it) => (
                  <div key={it.n}>
                    <h3>{it.n}</h3>
                    <p>{it.p}</p>
                  </div>
                ))}
              </div>
            ))}
            <p style={{ marginTop: "2rem" }}>
              Written by {site.name}. <a href="/about">More about how I work</a>, or{" "}
              <a href="/portfolio">see client results with the screenshots</a>.
            </p>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>Want this checked on your own account?</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send your business name and city and I will run a geo-grid check and a
              profile audit, then tell you what is actually wrong.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="/contact">Get in touch</a>
              <a className="btn btn-ghost" href="/blog">Read the other posts</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
