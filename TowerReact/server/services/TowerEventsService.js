import { dbContext } from "../db/DbContext.js"

class TowerEventsService{
  async getTowerEvents() {
    const events = await dbContext.TowerEvent.find().populate('creator', 'name picture')
    return events
  }
}


export const towerEventsService = new TowerEventsService()