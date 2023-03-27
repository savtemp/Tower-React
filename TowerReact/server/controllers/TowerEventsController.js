import { Auth0Provider } from "@bcwdev/auth0provider";
import { towerEventsService } from "../services/TowerEventsService.js";
import BaseController from "../utils/BaseController.js";


export class TowerEventsController extends BaseController{
  constructor(){
    super(`api/events`)
    this.router
      // Routes
      // get all the events
      .get('', this.getTowerEvents)
      // get an event by its Id
      .get('/:id', this.getTowerEventById)
      // get the event comments
      // .get('/:id/comments', this.getTowerEventComments)
      // get the event tickets
      // .get('/:id/tickets', this.getTowerEventTickets)

      // NOTE Authorized Routes
      .use(Auth0Provider.getAuthorizedUserInfo)
      // create an event
      .post('', this.createTowerEvent)
      // edit an event
      .put('/:id', this.editEvent)
      // delete an event 
      .delete('/:id', this.cancelEvent)

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
    req.body.creatorId = req.userInfo.id
    let eventData = req.body
    const newEvent = await towerEventsService.createTowerEvent(eventData)
    return res.send(newEvent)
  } catch (error) {
    next(error)
    }
  }

  async getTowerEventById (req, res, next) {
  try {
    let eventId = req.params.id
    const event = await towerEventsService.getTowerEventById(eventId)
    return res.send(event)
  } catch (error) {
    next(error)
    }
  }

  async editEvent (req, res, next) {
  try {
  
    return res.send()
  } catch (error) {
    next(error)
    }
  }

  async cancelEvent (req, res, next) {
  try {
  
    return res.send()
  } catch (error) {
    next(error)
    }
  }

}