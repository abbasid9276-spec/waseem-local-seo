import ServicePage, { buildMetadata } from "../../components/ServicePage";
import { service } from "../../lib/services/gmb-optimization";

export const metadata = buildMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
