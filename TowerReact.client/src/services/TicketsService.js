import { AppState } from "../AppState.js"
import { Ticket } from "../models/Ticket.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class TicketsService {
  async getTickets(eventId) {
    const res = await api.get(`api/events/${eventId}/tickets`)
    logger.log('[GETTING TICKETS]', res.data)
    AppState.tickets = res.data.map(t => new Ticket(t))
  }

  async createTicket(eventId) {
    logger.log("creating a ticket for this event", eventId);
    // NOTE this works because you are creating a body to send to the server and attaching the eventId to the body which is what the server is looking for
    // let body = {}
    // body.eventId = eventId
    // NOTE the server is expecting an object, the object is the eventId
    const res = await api.post(`api/tickets`, { eventId })
    logger.log('[CREATING A TICKET]', res.data)
    // AppState.ticket = new Ticket(res.data)
    AppState.tickets.push(new Ticket(res.data))
  }
}



export const ticketsService = new TicketsService()