import { site } from "../lib/site";
import { cityList } from "../lib/cities";

export default function sitemap() {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...cityList.map((c) => ({
      url: `${site.url}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    {
      url: `${site.url}/guest-posting-services-in-pakistan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
