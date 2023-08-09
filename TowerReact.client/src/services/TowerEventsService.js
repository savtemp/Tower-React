import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js";
import { TowerEvent } from "../models/TowerEvent.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"


class TowerEventsService {
  async getTowerEvents() {
    const res = await api.get('api/events')
    logger.log('[GETTING TOWEREVENTS]', res.data)
    AppState.towerEvents = res.data.map(towerEvent => new TowerEvent(towerEvent))
  }

  async getTowerEventById(eventId) {
    AppState.towerEvent = null
    const res = await api.get(`api/events/${eventId}`)
    // logger.log('[GETTING EVENT BY ID]', res.data)
    AppState.towerEvent = new TowerEvent(res.data)
    logger.log('[ACTIVE EVENT IN APPSTATE]', AppState.towerEvent)
  }

  async getCommentsByEventId(eventId) {
    const res = await api.get(`api/events/${eventId}/comments`)
    logger.log('[COMMENTS BY EVENT]', res.data)
    AppState.comments = res.data.map(c => new Comment(c))
  }


  async createTowerEvent(eventData) {
    const res = await api.post('api/events', eventData)
    logger.log('[CREATING AN EVENT]', res.data)
    AppState.towerEvents.push(new TowerEvent(res.data))
  }

  async cancelTowerEvent(eventId) {
    const res = await api.delete(`api/events/${eventId}`)
    // @ts-ignore
    AppState.activeTowerEvent.isCanceled = true
    // logger.log('[BEFORE CANCEL]', AppState.activeTowerEvent?.isCanceled)
  }
}


export const towerEventsService = new TowerEventsService()