import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"


class TowerEventsService{
  async getTowerEvents() {
    AppState.towerEvents = []
    const res = await api.get(`api/events`)
    console.log('[GETTING TOWER EVENTS]', res.data);
  }
}


export const towerEventsService = new TowerEventsService()