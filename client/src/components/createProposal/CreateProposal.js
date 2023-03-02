import React from 'react';
import { useState } from 'react';
import "./CreateProposal.css"
import axios from "axios";

const CreateProposalUrl = 'http://localhost:5000/proposal'
const CreateProposal = () => {
  const [newProposal, setNewProposal] = useState({
    eventName : "",
    eventPlace : "",
    proposalType : "",
    eventType : "",
    budget : "",
    from : "",
    to : "",
    description : "",
    // images : "",
    foodPreference : "",
    events : ""
  });
  // const [images, getImages] = useState();

  const handleInputValues = (event) => {
    const {name,value} = event.target;
      setNewProposal(prevState => ({...prevState, [name]:value}))
  }
  

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token")
      // const newCreatedProposal = { eventName, eventPlace, proposalType, eventType, budget, from, to, description, foodPreference, events}
      const response = await axios.post(CreateProposalUrl, newProposal, {
        headers: {
          authorization : token
        }
      })
      if(response.data.status) {
        console.log("success", response.data)
      } else {
        console.log("failed")
      }
      console.log(response.data);
    } catch (error) {
      console.log('error');
    }
   // console.log(newProposal);
  }

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
                name='eventName'
                placeholder='Name' value={newProposal.eventName} onChange = {handleInputValues}
                />
            </div>
            <div className="row">
              <div className="input-container">
                <label htmlFor="place">Place of Event</label>
                <select name="eventPlace" id="place" value={newProposal.eventPlace} onChange = {handleInputValues}>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="proposalType">Proposal Type</label>
                <select name="proposalType" id="proposalType" value={newProposal.proposalType} onChange = {handleInputValues}>
                  <option value="Venue">Venue</option>
                  <option value="Food">Food</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label htmlFor="eventType">Event Type</label>
                <select name="eventType" id="eventType" value={newProposal.eventType} onChange = {handleInputValues}>
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
                  value={newProposal.budget} onChange = {handleInputValues}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label htmlFor="dateFrom">From</label>
                <input
                  type="date"
                  name="from"
                  placeholder='DD-MM-YYYY'
                  id="dateFrom"
                  value={newProposal.from} onChange = {handleInputValues}
                />
              </div>
              <div className="input-container">
                <label htmlFor="dateTo">To</label>
                <input
                  type="date"
                  name="to"
                  placeholder='DD-MM-YYYY'
                  id="dateTo"
                  value={newProposal.to} onChange = {handleInputValues}
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30" rows="10"
                placeholder='Description' value={newProposal.description} onChange = {handleInputValues}
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
                <textarea name="foodPreference" id="food" cols="30" rows="7" placeholder='Preferences' 
                value={newProposal.foodPreference} onChange = {handleInputValues}></textarea>
              </div>
              <div className="input-container">
                <label htmlFor="event">Events</label>
                <textarea name="events" id="event" cols="30" rows="7" placeholder='Preferences' value={newProposal.events} onChange = {handleInputValues}></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="proposal-form-btn-container">
          <button onClick={onSubmit}>Post</button>
        </div>
      </form>
    </section>
  )
}

export default CreateProposal;