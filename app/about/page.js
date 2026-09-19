import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site } from "../../lib/site";

export const metadata = {
  title: "About Waseem Abbas | WaseemRanker",
  description:
    "Who I am, how I work, which business categories I have the most experience in, and what you are actually buying when you hire a single practitioner instead of an agency.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: `${site.url}/about`,
    title: "About Waseem Abbas | WaseemRanker",
    description:
      "Five years in local search across 19 business verticals and 27+ countries. How I work, and who I am a bad fit for.",
  },
};

function schema() {
  const url = `${site.url}/about`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#page`,
        url,
        name: "About Waseem Abbas",
        mainEntity: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "About", item: url },
        ],
      },
    ],
  };
}

export default function About() {
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
            <h1>About Waseem Abbas</h1>
            <p className="lede">
              One practitioner, one discipline, five years and counting. No account
              managers, no resold work, and no rankings guaranteed — by me or by anyone
              else who is being honest with you.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ maxWidth: "820px" }}>
            <h2>What I do, and what I deliberately do not</h2>
            <p>
              I am {site.name}. I work on local search and nothing else. Not paid ads,
              not social media management, not brand design. That narrowness is a
              deliberate commercial decision rather than a limitation, because local
              search is not a subset of SEO that you can keep current with on the side.
              It has its own ranking factor weights, its own review and content policies
              that changed materially through 2026, its own verification mechanics, and
              its own long list of ways to get a profile suspended without ever being
              told which rule you broke.
            </p>
            <p>
              A generalist agency that offers eleven services is, in practice, offering
              you the eleventh-best version of each. When a profile gets suspended on a
              Friday afternoon, the thing that recovers it is having seen that specific
              suspension pattern before, not having a broader service menu.
            </p>

            <h2>Experience, stated plainly</h2>
            <p>
              Five years and more working on local search. Nineteen distinct business
              verticals: plumbing, HVAC, roofing, pest control, dentistry, general
              construction and concrete, locksmiths, commercial cleaning, car rental, and
              others alongside them. Businesses in more than 27 countries — predominantly
              the United States, Canada, the United Kingdom, Germany, the Gulf and
              Australia. Forty-seven-plus businesses worked with directly, and thirteen
              Google Business Profiles recovered from suspension.
            </p>
            <p>
              The breadth matters more than the headline number suggests. Google does not
              treat every category the same way. High-risk categories such as locksmiths
              and emergency services sit under far heavier verification and spam scrutiny
              than a dental practice or a contractor does, and the levers that move one
              barely register in the other. The only reliable way to know which is which
              is to have worked enough categories to have been wrong a few times and
              corrected course.
            </p>

            <h2>How an engagement actually runs</h2>
            <p>
              The person who audits your profile is the person who does the work and the
              person who writes the report. There is no delivery team you never meet and
              no account manager relaying your questions to them. At a larger agency, a
              meaningful share of your retainer pays for that relay layer, and it is also
              where most of the context gets lost between what you said and what got
              done.
            </p>
            <p>
              Every engagement starts with a geo-grid ranking check across your actual
              service radius and a profile audit, because a retainer proposed before
              anyone has looked at the account is a guess with an invoice attached.
              Reporting is monthly and built around calls, direction requests and
              enquiries rather than a list of keyword positions, since positions are a
              means and not the thing you are paying for.
            </p>

            <h2>Who I am a poor fit for</h2>
            <p>
              If you want guaranteed rankings, a fixed position by a fixed date, or
              review generation that involves incentives or anything else outside Google
              policy, I am the wrong person and I will say so on the first call. If you
              need results inside two weeks, local SEO is the wrong channel and paid
              search is the right one. And if the geo-grid check shows the monthly revenue
              gap does not justify a retainer, I will tell you that rather than sell you
              one.
            </p>
            <p>
              My own Google Business Profile is verified and public, and the work I
              publish is under my own name. If someone offers to manage your local
              presence without either of those, that is a reasonable first question to
              put to them.
            </p>

            <div className="btn-row">
              <a
                className="btn btn-ghost"
                href="https://share.google/OmLjd0rubKADBailS"
                target="_blank"
                rel="noopener"
              >
                My verified Google Business Profile
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.youtube.com/@WaseemAbbasseo"
                target="_blank"
                rel="noopener"
              >
                YouTube channel
              </a>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>Want to see what your own numbers look like?</h2>
            <p style={{ fontSize: "1.1rem" }}>
              Send your business name and city and I will run a geo-grid check and a
              profile audit, then tell you what is actually wrong — including if the
              answer is that you do not need to hire anyone.
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
