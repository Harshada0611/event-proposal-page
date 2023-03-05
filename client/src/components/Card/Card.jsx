import { useNavigate } from 'react-router-dom';
import './Card.css';
import { bin } from 'react-icons-kit/icomoon/bin';
import { Icon } from 'react-icons-kit';
import axios from '../../helpers/axios';

const Card = ({proposal, setDetails, selected, setSelected})=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        localStorage.setItem('details', JSON.stringify(proposal));
        navigate('/proposal-details')
    }
    const handleDelete = async (e)=>{
        try{
            e.stopPropagation()
            const token = localStorage.getItem('token');
            const response = await axios.put('/user/selected',{
                selected: null
            }, {
                headers: {
                    authorization: token
                }
            })
            setSelected(null)
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <section className="card-container" onClick={handleClick}>
            <div className="img-container">
                <img src={proposal.images[0]} alt="Random Event" />
            </div>
            <section className="lower-half">
            <div className="text-container">
                <h2>{proposal.name}</h2>
                <h4>{proposal.budget}/-</h4>
                <p>{proposal.place}</p>
            </div>
            {
                selected && <div className='remove-bin'>
                <Icon onClick={handleDelete} icon={bin} size={20} />
              </div>
            }
            </section>
        </section>
    )
}
export default Card;