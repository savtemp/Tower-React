import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"


class TowerEventsService{
  async getTowerEvents(url = 'api/events') {
    AppState.towerEvents = []
    const res = await api.get(url)
    console.log('[GETTING TOWER EVENTS]', res.data);
  }
}


export const towerEventsService = new TowerEventsService()