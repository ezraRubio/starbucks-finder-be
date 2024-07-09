import { Router } from "express";
import { BonusController } from "./bonus/bonus.controller";
import { BonusService } from "./bonus/bonus.service";
import { FinderController } from "./finder/finder.controller";
import { FinderService } from "./finder/finder.service";

interface Controller {
  router: Router;
}

const finderService = new FinderService();
const finderController = new FinderController(finderService);

const bonusService = new BonusService(finderService);
const bonusController = new BonusController(bonusService);

export const controllers = [finderController, bonusController].map(
  (c: Controller) => c.router
);
