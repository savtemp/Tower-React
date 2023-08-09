import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Modal from './components/Modal.jsx'
import TowerEventForm from './components/TowerEventForm.jsx'


export function App() {

  return (
    <div className="App" id="app">
      <header>
        <Navbar />
      </header>

      <main className='container-fluid'>
        <Outlet />
      </main>

      <footer className="container-fluid bg-dark text-light p-3 ">
        <div className='row border-bottom p-3'>
          {/* <div className='col-md-3'>
            <h5 className='m-0 mt-1'>Create your own event.</h5>
          </div> */}
          {/* <div className="col-md-3">
            <button className='btn btn-outline-light' data-bs-toggle="modal" data-bs-target="#createEventModal">Create Event</button>
          </div> */}
        </div>

        <div className="row p-3">
          <div className="col-md-4">
            <h6>Your Account</h6>
          </div>
          <div className="col-md-4">
            <h6>Discover</h6>

          </div>
          <div className="col-md-4">
            <h6>Events</h6>

          </div>

        </div>

        <div className="row">
          <div className="col-md-12">
          <p>Follow Us</p>
          <div className='d-flex'>
            <i className='mdi mdi-square'></i>
            <i className='mdi mdi-square'></i>
            <i className='mdi mdi-square'></i>
            <i className='mdi mdi-square'></i>
          </div>
          </div>
        </div>
      </footer>

      {/* <Modal /> */}

      <Modal modalId='createEventModal' />

      {/* NOTE bring in the same modal component with a different ID if I were to have another modal */}
      {/* <Modal modalId='' /> */}

    </div>
  )
}
