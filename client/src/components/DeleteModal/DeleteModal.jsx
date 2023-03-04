import axios from "../../helpers/axios";
import toast from 'react-hot-toast';

const DeleteModal = ({delModal, setDelete, id})=>{
    const handleDiscard = ()=>{
        setDelete({bool: false});
        document.body.style.pointerEvents = 'auto';
        delModal.current.style.top = '-500px';
    }

    const handleDelete = async () =>{
        toast.loading('Deleting proposal')
        try {
            const token = localStorage.getItem('token')
            const response = await axios.delete(`/proposal/${id}`,{
                headers:{
                    authorization: token
                }
            })
            console.log(response);
            toast.dismiss()
            toast.success('Proposal deleted successfully')
            delModal.current.style.top = '-300%';
            document.body.style.pointerEvents = 'auto';
            setDelete({bool: false});
            
        } catch (error) {
            console.log(error);
            toast.dismiss()
            toast.error('Something went wrong')
        }
    }
    return(
        <div className="delete-modal-container">
            <h2>Do you want to delete this proposal permanently?</h2>
            <div className="delete-btns">
                <button onClick={handleDelete}>Ok</button>
                <button onClick={handleDiscard}>Discard</button>
            </div>
        </div>
    )
}

export default DeleteModal;