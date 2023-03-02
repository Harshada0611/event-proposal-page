import './Card.css';
const Card = ({proposal})=>{

    const getRandom = ()=>{
        return Math.floor(Math.random() * 300)
    }
    return(
        <section className="card-container">
            <div className="img-container">
                <img src={`https://source.unsplash.com/random/?event&sig=${getRandom()}`} alt="Random Event" />
            </div>
            <div className="text-container">
                <h2>{proposal.name}</h2>
                <h4>{proposal.budget}/-</h4>
                <p>{proposal.city}</p>
            </div>
        </section>
    )
}
export default Card;