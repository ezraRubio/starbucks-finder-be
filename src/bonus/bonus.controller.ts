import { Request, Response, Router } from "express";
import { BonusService } from "./bonus.service";
import { ParsedQs } from "qs";

const bonus = "/bonus";

export class BonusController {
  router = Router();
  constructor(private service: BonusService) {
    this.router.get(bonus, (req: Request, res: Response) =>
      this.isStoreInCountry(req.query)
        .then((r) => res.send(r))
        .catch((e) => {
          console.log(e);
          res.status(502);
        })
    );
  }

  isStoreInCountry(query: ParsedQs) {
    return this.service.checkIfStoreInCountry(
      [
        parseFloat(query.longitude as string),
        parseFloat(query.latitude as string),
      ],
      query.country as string
    );
  }
}
