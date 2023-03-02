import './CardDetails.css';
const CardDetails = ({ proposal }) => {

    const getRandom = ()=>{
        return Math.floor(Math.random() * 300)
    }
    return (
        <>
            <section className="heading-container">
                <p>{'Proposals < '}<span className='bold'>Jhon Contract</span></p>
                <button className='select-btn'>Select</button>
            </section>
            <section className="details-container">
                <div className="details-card-container">
                    <div className="details-img-container">
                        <img src={`https://source.unsplash.com/random/?event&sig=${getRandom()}`} alt="Random Event" />
                    </div>
                    <div className="id-container">
                        <p>ID: <span className="bold">001</span></p>
                    </div>
                    <div className="details-text-container">
                        <p>Name: <span className="bold">Vendor Name</span></p>
                        <p>Email: <span className="bold">sample@gmail.com</span></p>
                        <div className="details-date-container">
                            <p>Start Date: <span className="bold">20 Dec 2021</span> </p>
                            <p>End Date: <span className="bold">22 Dec 2021</span></p>
                        </div>
                        <div className="event-type-container">
                            <div>
                                <p>Event Type</p>
                                <span className="blue bold">Marriage</span>
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
                    <ul className='list'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                    </ul>
                </section>
                <div className="media-container">
                    <h2>My albums</h2>
                    <div className="media-album">
                        <img src={`https://source.unsplash.com/random/?event&sig=${getRandom()}`} alt="Random Event" />
                        <img src={`https://source.unsplash.com/random/?event&sig=${getRandom()}`} alt="Random Event" />
                        <img src={`https://source.unsplash.com/random/?event&sig=${getRandom()}`} alt="Random Event" />
                        <img src={`https://source.unsplash.com/random/?event&sig=${getRandom()}`} alt="Random Event" />
                        <img src={`https://source.unsplash.com/random/?event&sig=${getRandom()}`} alt="Random Event" />
                        <img src={`https://source.unsplash.com/random/?event&sig=${getRandom()}`} alt="Random Event" />
                    </div>
                </div>
                <section className="contacts-container">
                    <h2>Contacts | 12</h2>
                    <div className="contacts-album">
                        <div className="contact">
                            <span className="circle"></span>
                            <span className='bold'>Contact 1</span>
                            <p>+91 XXXXXXXXXX</p>
                        </div>
                        <div className="contact">
                            <span className="circle"></span>
                            <h4>Contact 1</h4>
                            <p>+91 XXXXXXXXXX</p>
                        </div>
                        <div className="contact">
                            <span className="circle"></span>
                            <h4>Contact 1</h4>
                            <p>+91 XXXXXXXXXX</p>
                        </div>
                    </div>
                </section>
                <section className="events-container">
                    <h2>Events</h2>
                    <ul className='list'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam!</li>
                    </ul>
                </section>
            </section>
        </>
    )
}
export default CardDetails;