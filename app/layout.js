import "./globals.css";
import { site } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: "Local SEO Expert in Pakistan | Let's Grow Your Business",
  description:
    "Local SEO expert in Pakistan helping businesses rank higher on Google Maps and search. Let's boost your visibility and bring in more customers.",
  // No canonical or openGraph here on purpose. Anything set in the root layout
  // is inherited by every page that does not override it, which is how the
  // homepage title and the homepage FAQ ended up on /privacy and /blog.
  // Each page sets its own canonical and Open Graph block.
  icons: {
    icon: [{ url: "/img/favicon/image.png", type: "image/png" }],
    shortcut: "/img/favicon/image.png",
    apple: "/img/favicon/image.png",
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#0b5d4e" };

function schema() {
  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    telephone: site.phone,
    knowsAbout: [
      "Local SEO",
      "Google Business Profile optimisation",
      "Google Business Profile suspension recovery",
      "Local pack ranking factors",
      "Geo-grid rank tracking",
      "Generative Engine Optimization",
      "Answer Engine Optimization",
      "AI Overviews",
      "Local citation management",
      "NAP consistency",
      "Schema markup and entity SEO",
      "Multi-location SEO",
      "Review management policy compliance",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: site.country,
    },
    sameAs: site.profiles,
  };

  const business = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.brand,
    alternateName: site.name,
    url: site.url,
    description:
      "Local SEO consultancy specialising in Google Business Profile performance, map pack rankings, suspension recovery and AI search citation for single and multi-location businesses.",
    founder: { "@id": `${site.url}/#person` },
    telephone: site.phone,
    email: `mailto:${site.email}`,
    priceRange: "$270 to $750 per month",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      addressCountry: site.country,
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local SEO services",
      itemListElement: [
        "Google Business Profile management",
        "Google Business Profile suspension recovery",
        "Map pack and geo-grid ranking",
        "Local citation and NAP cleanup",
        "AI Overview and LLM citation visibility",
        "Multi-location local SEO",
        "White label local SEO for agencies",
      ].map((n) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: n },
      })),
    },
    sameAs: site.profiles,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.brand,
    publisher: { "@id": `${site.url}/#person` },
    inLanguage: "en",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, business, website],
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
        />
        {children}

        {/* Sitewide WhatsApp button. A blog post that carries its own
            offer renders .floatcta-post, which hides this one in CSS. */}
        <a
          className="floatcta floatcta-default"
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener nofollow"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 01-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 00-.7.3c-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 1.9.7 2.3.6 2.7.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z" />
          </svg>
          <span>
            <b>Chat on WhatsApp</b>
          </span>
        </a>
      </body>
    </html>
  );
}
