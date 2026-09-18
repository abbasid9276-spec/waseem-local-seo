import CityPage, { citySchema } from "../../components/CityPage";
import { cities } from "../../lib/cities";
import { site } from "../../lib/site";

const data = cities.karachi;

export const metadata = {
  title: data.title,
  description: data.metaDesc,
  alternates: { canonical: `/${data.slug}` },
  openGraph: { type: "website", url: `${site.url}/${data.slug}`, title: data.title, description: data.metaDesc },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema(data, site.url)) }}
      />
      <CityPage data={data} />
    </>
  );
}

