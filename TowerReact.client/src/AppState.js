import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "./utils/isValidProp.js"


class ObservableAppState {

  user = null
  /** @type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {import('./models/TowerEvent.js').TowerEvent[]} */
  towerEvents = []

  /** @type {import('./models/TowerEvent.js').TowerEvent|null} */
  towerEvent = null

  /** @type {import('./models/Comment.js').Comment[]} */
  comments = []

  /** @type {import('./models/Ticket.js').Ticket[]} */
  tickets = []

  /** @type {import('./models/Ticket.js').Ticket|null} */
  ticket = null

  constructor() {
    makeAutoObservable(this)
  }

}

// eslint-disable-next-line no-undef
export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    action(() => {
      target[prop] = value
    })()
    return true
  }
})