import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from '../AppState.js';
import { towerEventsService } from '../services/TowerEventsService.js';
import { BindEditable } from '../utils/FormHandler.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

function TowerEventForm() {


  const editable = {...AppState.towerEvents}
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
          <label htmlFor="">Name</label>
          <input required type="text" className='form-control' id='name' name='name' placeholder='Event Name' defaultValue={editable.name} onChange={bindEditable} />
        </div>

        <div>
          <label htmlFor="">Cover Image</label>
          <input type="url" />
        </div>

        <div>
          <label htmlFor="">Start Date</label>
          <input type="date" name="" id="" />
        </div>

        <div>
          <label htmlFor="">Location</label>
          <input type="text" name="" id="" />
        </div>

        <div>
          <label htmlFor="">Capacity</label>
          <input type="number" />
        </div>

        <div>
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="">Concert</option>
            <option value="">Convention</option>
            <option value="">Sport</option>
            <option value="">Digital</option>
            <option value="">Misc.</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )

}
export default observer(TowerEventForm)