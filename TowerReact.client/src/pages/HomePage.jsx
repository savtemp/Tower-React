
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { AppState } from '../AppState.js';
import TowerEventCard from '../components/TowerEventCard.jsx';
import { towerEventsService } from '../services/TowerEventsService.js';
import Pop from '../utils/Pop.js';
// @ts-ignore
import video from '../assets/party.mp4';

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
      <div className='col-md-4 mb-4' key={towerEvent.id}>
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
          <div className="col-md-12">
            <div className="row p-0 position-relative align-items-center">
              <video autoPlay muted loop className='p-0' src={video}></video>
              <div className="col-md-6 text-white position-absolute ms-3">
                <h1><b>Get ahead of the scalpers-</b></h1>
                <h1><b>Reserve your seats now</b></h1>
                <h1><b> with real events for real people.</b></h1>
                <p>Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Tower. Events are happening every day—log in to join the fun.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-around mb-5 mt-4">
            <div className="col-md-10">
              <h2 className='pb-4'><b>How Tower works</b></h2>
              <div className="row justify-content-around">
                <div className="col-md-5 selectable bg-secondary rounded p-3" data-bs-toggle="modal" data-bs-target="#createEventModal">
                  <div className="row">
                    <div className="col-md-2">
                      <h1 className='text-primary'><i className='mdi mdi-plus'></i></h1>
                    </div>
                    <div className="col-md-10">
                      <h4 className='pb-2'>Start an event to invite your friends</h4>
                      <p>Create your own Tower event, and draw from a community of millions</p>
                      <p className='pt-2 text-primary'><b>Create an event</b></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 selectable bg-secondary rounded p-3">
                  <div className="row">
                    <div className="col-md-2">
                      <h1 className='text-primary'><i className='mdi mdi-magnify'></i></h1>
                    </div>
                    <div className="col-md-10">
                      <h4 className='pb-2'>Discover events you are interested in</h4>
                      <p>See who is hosting local and non-local events for all the things you love</p>
                      <p className='pt-2 text-primary'><b>Search events</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-md-10">
              <h2 className='pb-4'><b>Explore top categories</b></h2> 
              <div className="row justify-content-around text-center">
                <div className="col-md-2 selectable rounded bg-secondary p-3">
                  <i className='text-success mdi mdi-fruit-watermelon'></i>
                  <h5>Miscellaneous Events</h5>
                </div>
                <div className="col-md-2 selectable rounded bg-secondary p-3">
                  <i className='text-warning mdi mdi-soccer'></i>
                  <h5>Sports and Fitness</h5>
                </div>
                <div className="col-md-2 selectable rounded bg-secondary p-3">
                  <i className='text-info mdi mdi-music'></i>
                  <h5>Music and Art</h5>
                </div>
                <div className="col-md-2 selectable rounded bg-secondary p-3">
                  <i className='text-success mdi mdi-laptop'></i>
                  <h5>Digital and Technology</h5>
                </div>
                <div className="col-md-2 selectable rounded bg-secondary p-3">
                  <i className='text-warning mdi mdi-account-group-outline'></i>
                  <h5>Convention and Hobbies</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className='col-md-10'>
              <h2 className='pb-3'><b>Upcoming events</b></h2> 
              <div className="row">
                  {towerEvents}
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  )


}
export default observer(HomePage)