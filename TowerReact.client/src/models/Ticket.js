import { makeAutoObservable } from "mobx"


export class Ticket {
  constructor(data) {
    this.id = data.id
    this.eventId = data.eventId
    this.accountId = data.accountId
    this.event = data.event
    this.profile = data.profile

    makeAutoObservable(this)
  }
}