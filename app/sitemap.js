import { site } from "../lib/site";
import { posts } from "../lib/blog";

export default function sitemap() {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.updated || p.date),
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
