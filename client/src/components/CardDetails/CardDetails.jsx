import './CardDetails.css';
import axios from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';

const CardDetails = ({ proposal, selected, setSelected }) => {
    const navigate = useNavigate()

    const handleClick = async (id)=>{
        try{
            const token = localStorage.getItem('token');
            const response = await axios.put('/user/selected',{
                selected: id
            }, {
                headers: {
                    authorization: token
                }
            })
            if(id !== null)setSelected(proposal);
            else{
                setSelected(null)
            }
            navigate('/user')
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <>
            <section className="heading-container">
                <p>{'Proposals < '}<span className='bold'>{proposal.name} Contract</span></p>
                {selected === null ?<button className='select-btn' onClick={()=>handleClick(proposal._id)}>Select</button>
                : selected._id === proposal._id ? <button className='deselct-btn' onClick={()=>handleClick(null)}>Remove</button>:
                <button className='select-btn' disabled>Select</button>}
            </section>
            <section className="details-container">
                <div className="details-card-container">
                    <div className="details-img-container">
                        <img src={proposal.images[0]} alt="Random Event" />
                    </div>
                    <div className="id-container">
                        <p>ID: <span className="bold">{proposal._id}</span></p>
                    </div>
                    <div className="details-text-container">
                        <p>Name: <span className="bold">{proposal.vendor.name}</span></p>
                        <p>Email: <span className="bold">{proposal.vendor.email}</span></p>
                        <div className="details-date-container">
                            <p>Start Date: <span className="bold">20 Dec 2021</span> </p>
                            <p>End Date: <span className="bold">22 Dec 2021</span></p>
                        </div>
                        <div className="event-type-container">
                            <div>
                                <p>Event Type</p>
                                <span className="blue bold">{proposal.eventType}</span>
                            </div>
                            <div>
                                <p>Event Class</p>
                                <span className='bold'>Class A</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="venue-container">
                    <h2>Venue and Arrangements</h2>
                    <ul className='list'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                    </ul>
                </section>
                <section className="food-container">
                    <h2>Food Preferences</h2>
                    <div>
                        <p>{proposal.foodPreference}</p>
                    </div>
                </section>
                <div className="media-container">
                    <h2>My albums</h2>
                    <div className="media-album">
                        {
                            proposal.images.map((url)=>{
                                return(
                                    <img src={url} key={url}/>
                                )
                            })
                        }
                    </div>
                </div>
                <section className="contacts-container">
                    <h2>Contacts | 12</h2>
                    <div className="contacts-album">
                        <div className="contact">
                            <span className="circle"></span>
                            <span className='bold'>Contact 1</span>
                            <p>{proposal.vendor.contact}</p>
                        </div>
                        <div className="contact">
                            <span className="circle"></span>
                            <h4>Contact 2</h4>
                            <p>+91 XXXXXXXXXX</p>
                        </div>
                    </div>
                </section>
                <section className="events-container">
                    <h2>Events</h2>
                    <div>
                        <p>{proposal.events}</p>
                    </div>
                </section>
            </section>
        </>
    )
}
export default CardDetails;