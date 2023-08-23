import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { towerEventsService } from '../services/TowerEventsService.js';
import { ticketsService } from '../services/TicketsService.js';

function TowerEventDetailsCard() {

  const towerEvent = AppState.towerEvent
  const account = AppState.account

  const [isCanceled, setIsCanceled] = useState(towerEvent?.isCanceled)
  useEffect(()=>{
    setIsCanceled(towerEvent?.isCanceled)
  }, [towerEvent])

  async function cancelTowerEvent(){
    try {
      const yes = await Pop.confirm('Do you want to cancel this event?')
      if(!yes){return}
      await towerEventsService.cancelTowerEvent(towerEvent?.id)
      setIsCanceled(towerEvent?.isCanceled)
      Pop.toast('Event is Canceled!')
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async function createTicket(){
    try {
      await ticketsService.createTicket(towerEvent?.id)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  function isCanceledStyle(){
    // NOTE isCanceled needs to be called in a useEffect where we are watching changes to the towerEvent
    // NOTE putting it the the useState only happens once when the page loads, to make it reactive it has to be watched
    if(isCanceled){
      return (
        <h1>This event has been canceled.</h1>
      )
    } else {
      return (
            <div className="row">
            <div className="col-md-9">
              <img src={towerEvent?.coverImg} alt={towerEvent?.name} className="img-fluid" />
              <div>
                <h4><b>Details</b></h4>
                <p>{towerEvent?.description}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className='card p-4'>
                <div className='d-flex mb-4'>
                  <i className='mdi mdi-clock'></i>
                  <p>{towerEvent?.startDate}</p>
                </div>
                <div className='d-flex'>
                  <i className='mdi mdi-map-marker'></i>
                  <p>{towerEvent?.location}</p>
                </div>
              </div>
              <div className='mt-4'>
                <button className='btn btn-warning' onClick={createTicket}>Create Ticket</button>
              </div>
            </div>
          </div>
      )
    }
  }

  return !towerEvent ? (<div>loading...</div>) : (

    <div className="TowerEventDetailsCard">
      <div className="row mb-5 justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <h1 className='mb-3'>{towerEvent.name}</h1>
            <div className='d-flex align-items-center'>
              <img className='rounded-circle me-2' src={towerEvent.creator?.picture} alt="" />
              <div>
                <p>Hosted By</p>
                <p><b>{towerEvent.creator?.name}</b></p>
              </div>
            </div>
            <div className={account?.id == towerEvent?.creatorId ? 'd-flex' : 'd-none'}>
              <button onClick={cancelTowerEvent} type="button" className="btn btn-outline-primary my-3">Cancel Event</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          {isCanceledStyle()}
          {/* <div className="row">
            <div className="col-md-9">
              <img src={towerEvent.coverImg} alt={towerEvent.name} className="img-fluid" />
              <div>
                <h4><b>Details</b></h4>
                <p>{towerEvent.description}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className='card p-4'>
                <div className='d-flex mb-4'>
                  <i className='mdi mdi-clock'></i>
                  <p>{towerEvent.startDate}</p>
                </div>
                <div className='d-flex'>
                  <i className='mdi mdi-map-marker'></i>
                  <p>{towerEvent?.location}</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )

}

// NOTE did this to prevent the appState from lagging behind when clicking on an active event
export default observer(TowerEventDetailsCard)