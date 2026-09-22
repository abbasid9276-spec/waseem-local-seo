import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site, overlap } from "../../lib/site";

export const metadata = {
  title: "Contact | Waseem Ranker",
  description:
    "Email, WhatsApp and working-hours overlap for the UK, US, Gulf and Australia. What to send on the first message, what happens next, and what the free audit does and does not cover.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${site.url}/contact`,
    title: "Contact | Waseem Ranker",
    description:
      "How to reach me, what to include in your first message, and what happens in the first week of an engagement.",
  },
};

function schema() {
  const url = `${site.url}/contact`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${url}#page`,
        url,
        name: "Contact",
        about: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Contact", item: url },
        ],
      },
    ],
  };
}

export default function Contact() {
  const gmail =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(site.email) +
    "&su=" +
    encodeURIComponent("Free GMB Audit") +
    "&body=" +
    encodeURIComponent(
      "Business name:\nCity:\nWebsite:\nWhat you want more of:\n"
    );

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
            <h1>Contact</h1>
            <p className="lede">
              Email is the fastest way to reach me. Send four lines and you will get a
              real answer about your account rather than a templated pitch deck.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={gmail} target="_blank" rel="noopener nofollow">
                Email Me for Free GMB Audit
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ maxWidth: "820px" }}>
            <h2>How to reach me</h2>
            <ul>
              <li>
                Email: <a href={`mailto:${site.email}`}>{site.email}</a>, the best
                channel for anything involving account access, audits or proposals.
              </li>
              <li>
                WhatsApp: <a href={`https://wa.me/${site.whatsapp}`} rel="nofollow">
                  message me
                </a>. Best for quick questions and for clients already on a retainer.
              </li>
              <li>Working timezone: {site.timezone}.</li>
            </ul>

            <h2>What to put in the first message</h2>
            <p>
              Four things, and nothing more than that. Your business name exactly as it
              appears on your Google Business Profile. The city or service radius you
              actually want customers from. Your website URL if you have one. And one
              line on what you want more of: emergency call-outs, booked appointments,
              commercial contracts, walk-ins.
            </p>
            <p>
              That is enough for me to run a geo-grid ranking check across your service
              area and look at the profile before replying. It means my first response
              contains an observation about your account rather than a request for a
              discovery call, which is the part most people find useful and most agencies
              skip.
            </p>

            <h2>What the free audit covers</h2>
            <p>
              A geo-grid check showing where you rank across your service radius rather
              than at one central point, which is the number that misleads most owners. A
              review of your Google Business Profile for category selection, service and
              attribute configuration, and anything that raises suspension risk. A quick
              technical read of the website where one exists. And an honest estimate of
              the monthly revenue gap between where you are and where the category
              realistically allows you to be.
            </p>
            <p>
              It does not cover a full technical site audit, a competitor backlink
              analysis, or a content plan. Those are paid work, and quoting them as free
              would only mean pricing them into the retainer somewhere less visible.
            </p>

            <h2>Access I will ask for, and access I never will</h2>
            <p>
              If we work together, I will ask to be added as a manager on your Google
              Business Profile and as a user on Google Search Console and Google
              Analytics. Those are delegated invitations sent to my email from inside your
              own account, which means you can see the exact permission level granted and
              remove it yourself at any moment without asking me.
            </p>
            <p>
              I will never ask you to send a password, a two-factor code or an account
              recovery code, by email, by message or on a call. If a message claiming to
              be from me asks for any of those, it is not from me. Handing over
              credentials is how business owners lose control of profiles they have spent
              years building, and no legitimate provider needs them.
            </p>

            <h2>Overlap hours if you are overseas</h2>
            <p>
              Most clients are outside Pakistan, so the working day is arranged around
              overlap rather than local convenience:
            </p>
            <ul>
              {overlap.map((o) => (
                <li key={o.region}>
                  <strong>{o.region}</strong>: {o.hours}. {o.note}.
                </li>
              ))}
            </ul>

            <h2>What happens after you get in touch</h2>
            <p>
              I reply within one working day, normally with the geo-grid result attached.
              If it looks like there is a case for working together, the next step is a
              short call to confirm what you want more of and whether the category and
              radius support it. If there is no case, I will say so in the same message
              and you will not hear from me again unless you ask.
            </p>
            <p>
              Engagements run month to month. There is no minimum contract term, because
              a twelve-month lock-in mostly protects the provider from the consequences of
              underperforming. Rankings are never guaranteed, here or anywhere else, and
              anyone offering you a guaranteed map pack position is describing something
              Google does not sell.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
