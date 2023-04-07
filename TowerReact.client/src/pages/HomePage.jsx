
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { AppState } from '../AppState.js';
import TowerEventCard from '../components/TowerEventCard.jsx';
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
      <div className="col-md-12">

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row p-5">
              <div className="col-md-7 text-dark">
                <h1><b>Get ahead of the scalpers-</b></h1>
                <h1><b>Reserve your seats now</b></h1>
                <h1><b> with real events for real people.</b></h1>
                <p>Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Tower. Events are happening every day—log in to join the fun.</p>
              </div>
              <div className="col-md-5">
                <img src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080" alt="" />
              </div>
            </div>
          </div>

          <div className="row justify-content-center p-4">
            <div className="col-md-10">
              <div className="d-flex justify-content-evenly">
                {/* <div className="col-md-2"> */}
                  <button className='btn bg-primary rounded-pill p-2'>All Events Near You</button> 
                  <button className='btn bg-primary rounded-pill p-2'>Misc</button>
                  <button className='btn bg-primary rounded-pill p-2'>Concerts</button>
                  <button className='btn bg-primary rounded-pill p-2'>Hone Your Craft</button>
                  <button className='btn bg-primary rounded-pill p-2'>Sports</button>
                  <button className='btn bg-primary rounded-pill p-2'>Online Events</button>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className='col-md-10'>
              <h2 className='pb-3'><b>Upcoming Events</b></h2> 
              <div className="row mb-5">
                <div className='col-md-3'>
                  {towerEvents}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  )


}
export default observer(HomePage)