import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Pop from "../utils/Pop.js";
import { useParams } from "react-router-dom";
import { towerEventsService } from '../services/TowerEventsService.js';
import { AppState } from '../AppState.js';
import CommentCard from '../components/CommentCard.jsx';
import CommentForm from '../components/CommentForm.jsx';
import TowerEventDetailsCard from '../components/TowerEventDetailsCard.jsx';


function TowerEventDetails() {

  const {id} = useParams()

  async function getTowerEventById(){
    try {
      await towerEventsService.getTowerEventById(id)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async function getCommentsByEventId(){
    try {
      await towerEventsService.getCommentsByEventId(id)
    } catch (error) {
      Pop.error(error)
    }
  }

  const comments = AppState.comments.map(c => {
    return (
      <div className="col-10" key={c.id}>
        <CommentCard comment={c} />
      </div>
    )
  })

  useEffect(() => {
    getTowerEventById(),
    getCommentsByEventId()
  }, [])

  return (

    <div className="TowerEventDetailsPage">
      <div className="container-fluid">
        <section className="row justify-content-center mb-3">
          <div className="col-12">
            <TowerEventDetailsCard />
          </div>
        </section>

        <section className='row justify-content-center mb-3'>
          <div className="col-md-10">
            <h4><b>Attendees</b></h4>
          </div>
        </section>

        <section className="row justify-content-center mb-3">
          <div className="col-md-10">
            <h4><b>Comments</b></h4>
            <CommentForm />
          </div>
        </section>

        <section className="row justify-content-center mb-3">
          <div className="col-md-10 card justify-content-center">
            {comments}
          </div>
        </section>
      </div>
    </div>
  )

}
export default observer(TowerEventDetails)