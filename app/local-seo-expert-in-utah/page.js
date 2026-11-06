import CityPage, { buildCityMetadata } from "../../components/CityPage";
import { city } from "../../lib/cities/utah";

export const metadata = buildCityMetadata(city);

export default function Page() {
  return <CityPage city={city} />;
}
