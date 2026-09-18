import "./globals.css";
import { site, faqs } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: "Local SEO Expert in Pakistan | Map Pack & AI Search — Waseem Abbas",
  description:
    "Local SEO consultant in Pakistan working with businesses and agencies in the UK, US, Gulf and Australia. Google Business Profile, map pack rankings, suspension recovery and AI Overview visibility. Published pricing, no guarantees.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Local SEO Expert in Pakistan — Waseem Abbas",
    description:
      "Map pack rankings, Google Business Profile recovery and AI search visibility. Published pricing. Evidence, not guarantees.",
    locale: "en_US",
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
      addressLocality: site.city,
      addressRegion: site.region,
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
    priceRange: "PKR 40,000 – PKR 150,000+",
    currenciesAccepted: "PKR, USD, GBP",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
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

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: "Local SEO Expert in Pakistan",
    about: { "@id": `${site.url}/#person` },
    isPartOf: { "@id": `${site.url}/#website` },
    breadcrumb: { "@id": `${site.url}/#breadcrumb` },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.brand,
    publisher: { "@id": `${site.url}/#person` },
    inLanguage: "en",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${site.url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, business, webpage, website, breadcrumb, faqPage],
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
      </body>
    </html>
  );
}

