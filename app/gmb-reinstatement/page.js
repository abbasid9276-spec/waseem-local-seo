import ServicePage, { buildMetadata } from "../../components/ServicePage";
import { service } from "../../lib/services/gmb-reinstatement";

export const metadata = buildMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
