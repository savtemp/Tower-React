import PropTypes  from 'prop-types';
import React from 'react';
import { Ticket } from '../models/Ticket.js';


/** 
@param {{ticket: Ticket}} props 
 */
export default function TicketCard({ticket}) {

  return (

    <div className="TicketCard">
      <img className='rounded-circle' src={ticket?.profile?.picture} alt="" />
      {/* {ticket?.profile?.picture} */}
    </div>
  )

}
// export default observer(TicketCard)

TicketCard.propTypes = {
  ticket: PropTypes.instanceOf(Ticket)
}