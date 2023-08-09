import PropTypes  from 'prop-types';
import React from 'react';
import { TowerEvent } from '../models/TowerEvent.js';
import "./TowerEventCard.scss"
import { Link } from 'react-router-dom';


// NOTE What is this doing? Also do I need a model to do this or is there a way around without a model?
/** @param {{towerEvent:TowerEvent}} props */
export default function TowerEventCard({towerEvent}) {

  return (
    <div className="TowerEventCard">
      <Link to={"/events/" + towerEvent.id}>
        <img className='event-img rounded' src={towerEvent.coverImg} alt="" />
      </Link>
      <h4><b>{towerEvent.name}</b></h4>
      <p className='host'>Hosted by: <span>{towerEvent.creator?.name}</span></p>
      <p> <i className='mdi mdi-calendar'></i>  {towerEvent.startDate}</p>
      <div className='d-flex'>
        <div className='me-2'>
          <p> <i className='mdi mdi-check-circle-outline'></i><span> {towerEvent.capacity} going</span></p>
        </div>
        <div>
          <p> <i className='mdi mdi-ticket'></i> <span>{towerEvent.type}</span></p>
        </div>
      </div>
    </div>
  )

}

// NOTE What is this doing?
TowerEventCard.propTypes = {
  // NOTE if I put instanceOf(TowerEvent) I get a prop validation error, if I change it to Object there is no error. How do I fix this?
  towerEvent: PropTypes.instanceOf(TowerEvent)
}
