import CityPage, { buildCityMetadata } from "../../components/CityPage";
import { city } from "../../lib/cities/multan";

export const metadata = buildCityMetadata(city);

export default function Page() {
  return <CityPage city={city} />;
}
