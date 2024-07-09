import { Request, Response, Router } from "express";
import { FinderService } from "./finder.service";

const geojson = "/geojson";

export class FinderController {
  router = Router();
  constructor(private service: FinderService) {
    this.router.get(geojson, (req: Request, res: Response) =>
      this.retrieveCountryGeoJson(req.query.country as string)
        .then((r) => res.json(r))
        .catch((e) => {
            console.log(e);
            return res.status(502)
        })
    );
  }

  retrieveCountryGeoJson(country: string) {
    return this.service.getGeoJson(country);
  }
}
