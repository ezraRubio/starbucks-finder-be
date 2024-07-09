import axios from "axios";

export class FinderService {
  constructor() {}

  async getGeoJson(country: string) {
    try {        
        const countryData = await axios.get(
          `https://www.geoboundaries.org/api/current/gbOpen/${country}/ADM0/`
        );
        const geojson = await axios.get(countryData.data.simplifiedGeometryGeoJSON);
        return geojson.data;
    } catch (error) {
        throw new Error("error fetching geojson")
    }
  }
}
