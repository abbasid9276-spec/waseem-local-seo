// City pages. Each city lives in its own file under lib/cities/. The
// footer Locations column and the sitemap both read from this array,
// so adding a city means adding a file and one line here.
//
// These sit at the site root the same way services do: there is no
// /locations hub, because a page whose only content is four links is
// a thin page.

import { city as islamabad } from "./cities/islamabad";
import { city as karachi } from "./cities/karachi";
import { city as lahore } from "./cities/lahore";
import { city as multan } from "./cities/multan";

export const cities = [islamabad, karachi, lahore, multan];

// Shown in the stat band on every city page. These are the same figures
// published on the homepage, kept in one place so they cannot drift apart.
export const cityStats = [
  { b: "47+", label: "Businesses worked with" },
  { b: "13", label: "Profiles recovered from suspension" },
  { b: "5+", label: "Years doing local SEO" },
  { b: "Free", label: "Geo-grid audit before any invoice" },
];

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}
