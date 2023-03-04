import React, { useState } from 'react';
import "./CreateProposal.css"
import axios from "../../helpers/axios";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const CreateProposal = () => {
  const navigate = useNavigate();
  const [newProposal, setNewProposal] = useState({
    name: "",
    place: "",
    proposalType: "",
    eventType: "",
    budget: "",
    from: "",
    to: "",
    description: "",
    foodPreference: "",
    events: ""
  });
  const [images, setImages] = useState([]);

  const handleInputValues = (event) => {
    const { name, value } = event.target;
    setNewProposal(prevState => ({ ...prevState, [name]: value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Creating new proposal')
    try {
      const formdata = new FormData();
      for (let key of Object.keys(newProposal)) {
        formdata.append(key, newProposal[key]);
      }
      for (let image of images) {
        formdata.append('images', image)
      }
      const token = localStorage.getItem("token")
      const { data } = await axios.post('/proposal', formdata, {
        headers: {
          authorization: token
        }
      })
      console.log(data)
      if (data.status) {
        toast.dismiss()
        toast.success('Proposal created successfully')
        console.log("success", data);
        navigate('/vendor')
      }
    } catch (err) {
      toast.dismiss()
      const { response } = err;
      console.log(err);
      if (Array.isArray(response.data.message)) {
        toast.error(response.data.message[0].msg)
      } else {
        toast.error(response.data.message)
      }
    }
    // console.log(newProposal);
  }

  return (
    <section className="bg-proposal-form-container">
      <section className="proposal-form-container">
        <section className="proposal-form-heading">
          <Link to={'/vendor'} className="go-back-btn">Go Back</Link>
          <h1 >Create Proposal</h1>
        </section>
        <form onSubmit={handleSubmit}>
          <div className="proposal-form-input-container">
            <div className="proposal-form-column">
              <div className="input-container">
                <label htmlFor="name">Event Name</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  placeholder='Name' value={newProposal.name} onChange={handleInputValues}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="row">
                <div className="input-container">
                  <label htmlFor="place">Place of Event</label>
                  <select name="place" id="place" required value={newProposal.place} onChange={handleInputValues}>
                    <option value="Select">Select</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Pune">Pune</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>
                <div className="input-container">
                  <label htmlFor="proposalType">Proposal Type</label>
                  <select name="proposalType" id="proposalType" required value={newProposal.proposalType} onChange={handleInputValues}>
                    <option value="Select">Select</option>
                    <option value="Venue">Venue</option>
                    <option value="Food">Food</option>
                    <option value="Events">Events</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-container">
                  <label htmlFor="eventType">Event Type</label>
                  <select name="eventType" id="eventType" required value={newProposal.eventType} onChange={handleInputValues}>
                    <option value="Select">Select</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Casual">Casual</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Awareness Campaigns">Awareness Campaigns</option>
                    <option value="Other">other</option>
                  </select>
                </div>
                <div className="input-container">
                  <label htmlFor="budget">Budget</label>
                  <input
                    type="number"
                    name="budget"
                    placeholder='0000'
                    id="budget"
                    autoComplete="off"
                    required
                    value={newProposal.budget} onChange={handleInputValues}
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
                    autoComplete="off"
                    required
                    value={newProposal.from} onChange={handleInputValues}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="dateTo">To</label>
                  <input
                    type="date"
                    name="to"
                    placeholder='DD-MM-YYYY'
                    id="dateTo"
                    autoComplete="off"
                    required
                    value={newProposal.to} onChange={handleInputValues}
                  />
                </div>
              </div>
              <div className="input-container">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  cols="30" rows="10"
                  placeholder='Description' value={newProposal.description} onChange={handleInputValues}
                ></textarea>
              </div>
            </div>
            <div className="proposal-form-column">
              <div className="proposal-form-img-container">
                <div className="input-container">
                  <label htmlFor="image">Images<span className='add-btn'>Add</span></label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    autoComplete="off"
                    onChange={(e) => setImages([...images, ...e.target.files])}
                    multiple="multiple"
                    required
                  />
                  <div className="images-preview">
                    {
                      images.map((image, index) => {
                        return (
                          <img src={URL.createObjectURL(image)} alt="" key={index} />
                        )
                      })
                    }
                  </div>
                </div>
                <div className="input-container">
                  <label htmlFor="food">Food Preferences</label>
                  <textarea name="foodPreference" id="food" cols="30" rows="7" placeholder='Preferences'
                    value={newProposal.foodPreference} onChange={handleInputValues}></textarea>
                </div>
                <div className="input-container">
                  <label htmlFor="event">Events</label>
                  <textarea name="events" id="event" cols="30" rows="7" placeholder='Preferences' value={newProposal.events} onChange={handleInputValues}></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="proposal-form-btn-container">
            <button>Post</button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default CreateProposal;