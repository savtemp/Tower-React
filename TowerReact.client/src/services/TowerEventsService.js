import { AppState } from "../AppState.js"
import { TowerEvent } from "../models/TowerEvent.js";
import { api } from "./AxiosService.js"


class TowerEventsService{
  async createEvent(towerEventData) {
    const res = await api.post('api/events', towerEventData)
    console.log('[CREATING AN EVENT]', res.data);
    let newEvent = new TowerEvent(res.data)
    // FIXME this throws an mobx error but it will work
    AppState.towerEvents.push(newEvent)
    return newEvent
  }

  async getTowerEvents() {
    AppState.towerEvents = []
    const res = await api.get(`api/events`)
    console.log('[GETTING TOWER EVENTS]', res.data);
    AppState.towerEvents = res.data.map(towerEvent => new TowerEvent(towerEvent))
  }
}


export const towerEventsService = new TowerEventsService()