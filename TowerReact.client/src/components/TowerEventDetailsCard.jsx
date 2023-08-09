import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { towerEventsService } from '../services/TowerEventsService.js';

function TowerEventDetailsCard() {

  const towerEvent = AppState.towerEvent
  const account = AppState.account

  const [isCanceled, setIsCanceled] = useState(towerEvent?.isCanceled)

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

  function isCanceledStyle(){
    if(isCanceled){
      return (
        <h1>This event has been canceled.</h1>
      )
    } else {
      return (
        <div className="col-9 text-center ms-2">
          <h3>{towerEvent?.name}</h3>
          <div className="d-flex flex-row justify-content-between">
            <h5 className="">{towerEvent?.location}</h5>
            <h5 className="">{towerEvent?.startDate}</h5>
          </div>
          <div>
            {towerEvent?.description}
          </div>
          <div className={account?.id == towerEvent?.creatorId ? 'd-flex' : 'd-none'}>
            <button onClick={cancelTowerEvent} type="button" className="btn btn-outline-primary my-3">Cancel Event</button>
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
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row">
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
          </div>
        </div>
      </div>

        {/* <div className="d-flex flex-row ps-0"> */}
          {/* <div className="col-3">
            <img src={towerEvent.coverImg} alt={towerEvent.name} className="img-fluid rounded-start" />
          </div> */}
          {/* <div className="col-9">{isCanceledStyle()}</div> */}
          {/* STUB this is happening in the above if statement ---> CONDITIONAL RENDER */}
          {/* <div className="col-9 text-center ms-2">
            <h3>{activeTowerEvent.name}</h3>
            <div className="d-flex flex-row justify-content-between">
              <h5 className="">{activeTowerEvent.location}</h5>
              <h5 className="">{new Date(activeTowerEvent.startDate).toLocaleDateString()}</h5>
            </div>
            <div>
              {activeTowerEvent.description}
            </div>
            <div className={account?.id == activeTowerEvent.creatorId ? 'd-flex' : 'd-none'}>
              <button onClick={cancelTowerEvent} type="button" className="btn btn-outline-primary my-3">Cancel Event</button>
            </div>
          </div> */}
        {/* </div> */}
    </div>
  )

}

// NOTE did this to prevent the appState from lagging behind when clicking on an active event
export default observer(TowerEventDetailsCard)