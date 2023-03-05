import './CardDetails.css';
import axios from '../../helpers/axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CardDetails = ({selected, setSelected }) => {
    const navigate = useNavigate()
    const proposal = JSON.parse(localStorage.getItem('details'))

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
    if(proposal === null){
        navigate('/user')
    }
    useEffect(()=>{
    },[])

    return (
        <>
            <section className="heading-container">
                <p>{'Proposals < '}<span className='bold'>{proposal.name} Contract</span></p>
                <div>
                <Link to={'/user'} className='select-btn'>Go Back</Link>
                {selected === null ?<button className='select-btn' onClick={()=>handleClick(proposal._id)}>Select</button>
                : <button className='select-btn' disabled>Select</button>}
                </div>
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
                            <p>Start Date: <span className="bold">{proposal.from.split('T')[0]}</span> </p>
                            <p>End Date: <span className="bold">{proposal.to.split('T')[0]}</span></p>
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
                        <li>The right place for occasions, easy to accommodate all. perfect for families</li>
                        <li>The best experience of your lifetime.</li>
                        <li>Memories made pricelessly, Because every event matters.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur culpa quia pariatur eius doloremque at?</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur culpa quia pariatur eius doloremque at?</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur culpa quia pariatur eius doloremque at?</li>
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
                            <p>1408430201</p>
                        </div>
                        <div className="contact">
                            <span className="circle"></span>
                            <h4>Contact 3</h4>
                            <p>1408430204</p>
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