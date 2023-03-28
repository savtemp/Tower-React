import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { AppState } from '../AppState.js';
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
      </div>
    )
  }))

  useEffect(() => {
    getTowerEvents()
  }, [])

  return (

    <div className="HomePage">

    </div>
  )


}
export default observer(HomePage)