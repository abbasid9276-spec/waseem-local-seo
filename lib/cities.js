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

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}
