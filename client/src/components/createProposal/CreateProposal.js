import React from 'react';
import "./CreateProposal.css"


const CreateProposal = () => {
  return (
    <section className="proposal-form-container">
      <h1 className="proposal-form-heading">Create Proposal</h1>
      <form >
        <div className="proposal-form-input-container">
          <div className="proposal-form-column">
            <div className="input-container">
              <label htmlFor="name">Event Name</label>
              <input
                type="text"
                id='name'
                placeholder='Name'
              />
            </div>
            <div className="row">
              <div className="input-container">
                <label htmlFor="place">Place of Event</label>
                <select name="place" id="place">
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="proposalType">Proposal Type</label>
                <select name="proposalType" id="proposalType">
                  <option value="Venue">Venue</option>
                  <option value="Food">Food</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label htmlFor="eventType">Event Type</label>
                <select name="enevtType" id="eventType">
                  <option value="Birthday">Birthday</option>
                  <option value="Marriage">Marriage</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="budget">Budget</label>
                <input
                  type="number"
                  name="budget"
                  placeholder='0000'
                  id="budget"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label htmlFor="dateFrom">From</label>
                <input
                  type="date"
                  name="dateFrom"
                  placeholder='DD-MM-YYYY'
                  id="dateFrom"
                />
              </div>
              <div className="input-container">
                <label htmlFor="dateTo">To</label>
                <input
                  type="date"
                  name="dateTo"
                  placeholder='DD-MM-YYYY'
                  id="dateTo"
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30" rows="10"
                placeholder='Description'
              ></textarea>
            </div>
          </div>
          <div className="proposal-form-column">
            <div className="proposal-form-img-container">
              <div className="input-container">
                <label htmlFor="image">Images<span className='add-btn'>Add</span></label>
                <input type="file" name="image" id="image" />
                <div className="images-preview">
                </div>
              </div>
              <div className="input-container">
                <label htmlFor="food">Food Preferences</label>
                <textarea name="food" id="food" cols="30" rows="7" placeholder='Preferences'></textarea>
              </div>
              <div className="input-container">
                <label htmlFor="event">Events</label>
                <textarea name="event" id="event" cols="30" rows="7" placeholder='Preferences'></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="proposal-form-btn-container">
          <button>Post</button>
        </div>
      </form>
    </section>
  )
}

export default CreateProposal;