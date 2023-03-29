
import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from '../AppState.js';
import { TowerEvent } from '../models/TowerEvent.js';
import { towerEventsService } from '../services/TowerEventsService.js';
import { BindEditable } from '../utils/FormHandler.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

function TowerEventForm() {


  const editable = {...AppState.towerEvent || new TowerEvent({})}
  const bindEditable = BindEditable(editable)

  async function handleSubmit(){
    try {
      window.event?.preventDefault()
      logger.log({editable})
      await towerEventsService.createEvent(editable)
    } catch (error) {
      Pop.error(error)
    }
  }

  return (

    <div className="TowerEventForm card">
      <form action="" className='card-body' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input required type="text" className='form-control' id='name' name='name' placeholder='Event Name' defaultValue={editable.name} onChange={bindEditable} />
        </div>

        <div>
          <label htmlFor="coverImg">Cover Image</label>
          <input required type="url" className='form-control' id='coverImg' name='coverImg' placeholder='Add an Event Image' defaultValue={editable.coverImg} onChange={bindEditable} />
        </div>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <input required type="date" name="startDate" id="startDate" className='form-control' defaultValue={editable.startDate} onChange={bindEditable} />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input required type="text" className='form-control' name="location" id="location" placeholder='Event Location' defaultValue={editable.location} onChange={bindEditable} />
        </div>

        <div>
          <label htmlFor="capacity">Capacity</label>
          <input required type="number" className='form-control' name='capacity' id='capacity' defaultValue={editable.capacity} onChange={bindEditable} />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select required className='form-control' name="" id="" defaultValue={editable.type} onChange={bindEditable}>
            <option value="concert">Concert</option>
            <option value="convention">Convention</option>
            <option value="sport">Sport</option>
            <option value="digital">Digital</option>
            <option value="misc">Misc.</option>
          </select>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea className='form-control' name="description" id="description" placeholder='Tell us about the event...' defaultValue={editable.description} onChange={bindEditable}></textarea>
        </div>

        <div>
          <button type='button' className='btn btn-success' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  )

}
export default observer(TowerEventForm)