import { Auth0Provider } from "@bcwdev/auth0provider";
import { towerEventsService } from "../services/TowerEventsService.js";
import BaseController from "../utils/BaseController.js";
import { ticketsService } from "../services/TicketsService.js";
import { commentsService } from "../services/CommentsService.js";


export class TowerEventsController extends BaseController {
  constructor() {
    super(`api/events`)
    this.router
      // Routes
      // get all the events
      .get('', this.getTowerEvents)
      // get an event by its Id
      .get('/:id', this.getTowerEventById)
      // get the event comments
      .get('/:id/comments', this.getEventComments)
      // get the event tickets
      .get('/:id/tickets', this.getEventTickets)

      // NOTE Authorized Routes
      .use(Auth0Provider.getAuthorizedUserInfo)
      // create an event
      .post('', this.createTowerEvent)
      // edit an event
      .put('/:id', this.editEvent)
      // delete an event 
      .delete('/:id', this.cancelEvent)

  }

  async getTowerEvents(req, res, next) {
    try {
      const events = await towerEventsService.getTowerEvents()
      return res.send(events)
    } catch (error) {
      next(error)
    }
  }

  async createTowerEvent(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      let eventData = req.body
      const newEvent = await towerEventsService.createTowerEvent(eventData)
      return res.send(newEvent)
    } catch (error) {
      next(error)
    }
  }

  async getTowerEventById(req, res, next) {
    try {
      let eventId = req.params.id
      const event = await towerEventsService.getTowerEventById(eventId)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async editEvent(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      let eventData = req.body
      let eventId = req.params.id
      const updatedEvent = await towerEventsService.editEvent(eventId, eventData)
      return res.send(updatedEvent)
    } catch (error) {
      next(error)
    }
  }

  async cancelEvent(req, res, next) {
    try {
      let userId = req.userInfo.id
      let eventId = req.params.id
      const canceledEvent = await towerEventsService.cancelEvent(eventId, userId)
      return res.send(canceledEvent)
    } catch (error) {
      next(error)
    }
  }

  async getEventTickets(req, res, next) {
    try {
      // We need the eventId in order to grab one event
      const eventId = req.params.id
      const eventTickets = await ticketsService.getEventTickets(eventId)
      return res.send(eventTickets)
    } catch (error) {
      next(error)
    }
  }

  async getEventComments(req, res, next) {
    try {
      const eventId = req.params.id
      const eventComments = await commentsService.getEventComments(eventId)
      return res.send(eventComments)
    } catch (error) {
      next(error)
    }
  }


}