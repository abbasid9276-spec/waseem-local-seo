// ─────────────────────────────────────────────────────────────
// SERVICES
//
// Each service lives in its own file under lib/services/. The
// nav dropdown, the page route and the sitemap all read from
// this array, so adding a service means adding a file and one
// line here.
//
// There is deliberately no /services index page and no /services/
// URL prefix. A hub page with nothing on it but five links is a thin
// page, so the "Services" item in the header is a dropdown trigger
// rather than a link, and each service lives at the site root:
// /gmb-optimization, /gmb-audit, and so on.
// ─────────────────────────────────────────────────────────────

import { service as gmbOptimization } from "./services/gmb-optimization";
import { service as localCitationBuilding } from "./services/local-citation-building";
import { service as gmbReinstatement } from "./services/gmb-reinstatement";
import { service as localSchemaMarkup } from "./services/local-schema-markup";
import { service as gmbAudit } from "./services/gmb-audit";

export const services = [
  gmbOptimization,
  localCitationBuilding,
  gmbReinstatement,
  localSchemaMarkup,
  gmbAudit,
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
