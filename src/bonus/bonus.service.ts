import * as turf from "@turf/turf";
import { FinderService } from "../finder/finder.service";

export class BonusService {
  constructor(private finderService: FinderService) {}

  async checkIfStoreInCountry(coordinates: number[], alpha3Country: string) {
    const countryGeoJson = await this.finderService.getGeoJson(alpha3Country);

    const point = turf.point(coordinates);
    const isWithin = turf.booleanWithin(
      point,
      countryGeoJson.features[0].geometry
    );
    
    return isWithin;
  }
}
