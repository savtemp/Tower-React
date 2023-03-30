
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { AppState } from '../AppState.js';
import TowerEventCard from '../components/TowerEventCard.jsx';
import TowerEventForm from '../components/TowerEventForm.jsx';
import { towerEventsService } from '../services/TowerEventsService.js';
import Pop from '../utils/Pop.js';

function HomePage() {

  async function getTowerEvents(){
    try {
      await towerEventsService.getTowerEvents()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  const towerEvents = (AppState.towerEvents.map(towerEvent => {
    return(
      <div key={towerEvent.id}>
        {/* TowerEvent card goes here */}
        <TowerEventCard towerEvent={towerEvent} />
      </div>
    )
  }))

  useEffect(() => {
    getTowerEvents()
  }, [])

  return (

    <div className="row HomePage">
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-6 text-dark">
            <h4>Get ahead of the scalpers.</h4>
            <h4>Reserve your seats now</h4>
            <h4>with real events for real people.</h4>
          </div>
          <div className="col-md-6">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className='col-md-10'>
        <TowerEventForm /> 
      </div>
      <div className='col-md-3'>
        {towerEvents}
      </div>
    </div>
  )


}
export default observer(HomePage)