import { dbContext } from "../db/DbContext.js"

class TowerEventsService{
  async createTowerEvent(eventData) {
    throw new Error("Method not implemented.")
  }
  async getTowerEventById(eventId) {
    throw new Error("Method not implemented.")
  }
  async getTowerEvents() {
    const events = await dbContext.TowerEvent.find().populate('creator', 'name picture')
    return events
  }
}


export const towerEventsService = new TowerEventsService()