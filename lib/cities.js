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
import { city as toronto } from "./cities/toronto";
import { city as ottawa } from "./cities/ottawa";
import { city as dubai } from "./cities/dubai";
import { city as houston } from "./cities/houston";
import { city as michigan } from "./cities/michigan";
import { city as orlando } from "./cities/orlando";
import { city as connecticut } from "./cities/connecticut";
import { city as utah } from "./cities/utah";
import { city as dubuque } from "./cities/dubuque";

export const cities = [
  islamabad,
  karachi,
  lahore,
  multan,
  toronto,
  ottawa,
  dubai,
  houston,
  michigan,
  orlando,
  connecticut,
  utah,
  dubuque,
];

// The footer Locations column shows a short list only. Every city above
// still has its own page and still appears in the sitemap; this is purely
// about not turning the footer into a wall of links.
export const footerCities = [islamabad, karachi, lahore, multan, dubai];

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
