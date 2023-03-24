import { towerEventsService } from "../services/TowerEventsService.js";
import BaseController from "../utils/BaseController.js";


export class TowerEventsController extends BaseController{
  constructor(){
    super(`api/events`)
    this.router
      // routes
      .get('', this.getTowerEvents)
      .post('', this.createTowerEvent)
  }

  async getTowerEvents (req, res, next) {
  try {
    const events = await towerEventsService.getTowerEvents()
    return res.send(events)
  } catch (error) {
    next(error)
    }
  }

  async createTowerEvent (req, res, next) {
  try {
    
    return res.send()
  } catch (error) {
    next(error)
    }
  }
}