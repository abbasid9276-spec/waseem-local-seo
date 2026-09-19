import { site } from "../lib/site";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AI crawlers explicitly allowed: citation in AI answers is a goal, not a risk.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
