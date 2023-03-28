import PropTypes  from 'prop-types';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { TowerEvent } from '../models/TowerEvent.js';

// NOTE What is this doing? Also do I need a model to do this or is there a way around without a model?
/** @param {{towerEvent: TowerEvent}} props */
function TowerEventCard({towerEvent}) {

  return (
    <div className="TowerEventCard card">
      <img src={towerEvent.coverImg} alt="" />
      <p>{towerEvent.name}</p>
    </div>
  )

}

// NOTE What is this doing?
TowerEventCard.propTypes = {
  towerEvent: PropTypes.instanceOf(TowerEvent)
}

export default observer(TowerEventCard)