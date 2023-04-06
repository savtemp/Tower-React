import PropTypes  from 'prop-types';
import React from 'react';
import TowerEventForm from './TowerEventForm.jsx';

/** @param {{modalId:String}} props */
export default function Modal({modalId}) {

  return (

    <div className="Modal">
      {/* MODAL BUTTON */}
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createEventModal">
        Launch demo modal
      </button> */}

    {/* MODAL */}
    <div className="modal fade" id={modalId} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Your Event</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            {/* NOTE bring in the forms as a ternary */}
            <TowerEventForm />
          </div>

          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div> */}
        </div>
      </div>
    </div>

    </div>
  )

}


Modal.propTypes = {
  modalId: PropTypes.string
}