import { towerEventsService } from "../services/TowerEventsService.js";
import BaseController from "../utils/BaseController.js";


export class TowerEventsController extends BaseController{
  constructor(){
    super(`api/events`)
    this.router
      // routes
      .get('', this.getTowerEvents)
  }

  async getTowerEvents (req, res, next) {
  try {
    const events = await towerEventsService.getTowerEvents()
    return res.send(events)
  } catch (error) {
    next(error)
    }
  }
}