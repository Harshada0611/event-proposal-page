import { useNavigate } from 'react-router-dom';
import './Card.css';
const Card = ({proposal, setDetails})=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        setDetails(proposal);
        navigate('/proposal-details')
    }
    return(
        <section className="card-container" onClick={handleClick}>
            <div className="img-container">
                <img src={proposal.images[0]} alt="Random Event" />
            </div>
            <div className="text-container">
                <h2>{proposal.name}</h2>
                <h4>{proposal.budget}/-</h4>
                <p>{proposal.place}</p>
            </div>
        </section>
    )
}
export default Card;