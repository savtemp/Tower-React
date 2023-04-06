import PropTypes  from 'prop-types';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { TowerEvent } from '../models/TowerEvent.js';
import "./TowerEventCard.scss"


// NOTE What is this doing? Also do I need a model to do this or is there a way around without a model?
/** @param {{towerEvent:TowerEvent}} props */
function TowerEventCard({towerEvent}) {

  return (
    <div className="TowerEventCard">
      <img className='event-img rounded' src={towerEvent.coverImg} alt="" />
      <p className='date'>{towerEvent.startDate}</p>
      <p><b>{towerEvent.name}</b></p>
      <p>{towerEvent.type}</p>
      <p>Capacity: <span>{towerEvent.capacity}</span></p>
      <i className='mdi mdi-upload'></i>
    </div>
  )

}

// NOTE What is this doing?
TowerEventCard.propTypes = {
  // NOTE if I put instanceOf(TowerEvent) I get a prop validation error, if I change it to Object there is no error. How do I fix this?
  towerEvent: PropTypes.instanceOf(TowerEvent)
}

export default observer(TowerEventCard)