import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"


class TowerEventsService{
  createEvent(editable) {
    throw new Error('Method not implemented.');
  }
  async getTowerEvents() {
    AppState.towerEvents = []
    const res = await api.get(`api/events`)
    console.log('[GETTING TOWER EVENTS]', res.data);
  }
}


export const towerEventsService = new TowerEventsService()