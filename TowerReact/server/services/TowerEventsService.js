import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class TowerEventsService{
  async cancelEvent(eventId, userId) {
    let event = await this.getTowerEventById(eventId)
    if(event.creatorId != userId){
      throw new Forbidden('You do not have permission to cancel this event.')
    }
    event.isCanceled = event.isCanceled ? false : true
    await event.save()
    return event
  }

  async editEvent(eventId, eventData) {
    let event = await this.getTowerEventById(eventId)
    if(event.creatorId.toString()!= eventData.creatorId){
      throw new Forbidden('You do not have permission to edit this event')
    }
    if(event.isCanceled == true){
      throw new Forbidden('This event was cancelled, you cannot make any more changes.')
    }

    event.name = eventData.name || event.name
    event.description = eventData.description || event.description
    event.coverImg = eventData.coverImg || event.coverImg
    event.location = eventData.location || event.location
    event.startDate = eventData.startDate || event.startDate
    event.type = eventData.type || event.type

    let updatedEvent = await event.save()
    return updatedEvent
  }

  async createTowerEvent(eventData) {
    const newEvent = await dbContext.TowerEvent.create(eventData)
    await newEvent.populate('creator', 'name picture')
    return newEvent
  }

  async getTowerEventById(eventId) {
    const event = await dbContext.TowerEvent.findById(eventId).populate('creator', 'name picture')
    if(!event){
      throw new BadRequest('There is no event with that Id.')
    }
    return event
  }

  async getTowerEvents() {
    const events = await dbContext.TowerEvent.find().populate('creator', 'name picture')
    return events
  }
}


export const towerEventsService = new TowerEventsService()