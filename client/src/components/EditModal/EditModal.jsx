import React, { useState } from 'react';
import axios from "../../helpers/axios";
import toast from 'react-hot-toast';

const EditModal = ({proposal, setEdit, editModal}) => {
    const [newProposal, setNewProposal] = useState({
        name: proposal.name,
        place: proposal.place,
        proposalType: proposal.proposalType,
        eventType: proposal.eventType,
        budget: proposal.budget,
        from: proposal.from.split('T')[0],
        to: proposal.to.split('T')[0],
        description: proposal.description,
        foodPreference: proposal.foodPreference,
        events: proposal.events
    });

    const handleInputValues = (event) => {
        const { name, value } = event.target;
        setNewProposal(prevState => ({ ...prevState, [name]: value }))
    }

    const handleDiscard = (e)=>{
        editModal.current.style.top = '-300%'
        setEdit({bool: false});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        toast.loading('Updating proposal')
        try {
            const token = localStorage.getItem('token')
            const response = await axios.put(`/proposal/${proposal._id}`,newProposal,{
                headers:{
                    authorization: token
                }
            })
            console.log(response)
            toast.dismiss()
            toast.success('Proposal updated successfully')
            editModal.current.style.top = '-300%'
            setEdit({bool: false});
        } catch (error) {
            console.log(error);
            toast.dismiss()
            toast.error('Something went wrong')
        }
    }
    return (
        <section className="edit-form-container">
            <h1 className="proposal-form-heading">Edit Proposal</h1>
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
                <div className="proposal-form-btn-container">
                    <button>Update</button>
                    <button onClick={handleDiscard}>Discard</button>
                </div>
            </form>
        </section>
    )
}

export default EditModal;