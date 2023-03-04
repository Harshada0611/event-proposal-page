import React from 'react'
import "./ProposalListCard.css"
import { Icon } from 'react-icons-kit'
import { pencil } from 'react-icons-kit/icomoon/pencil'
import { bin } from 'react-icons-kit/icomoon/bin'


const ProposalListCard = ({ proposal, setEdit, editModal, setDelete, delModal }) => {
  const handleEdit = ()=>{
      setEdit({bool:true, proposal});
      editModal.current.style.top = '100px';
      editModal.current.scrollIntoView()
      document.body.style.pointerEvents = 'none';
  }

  const handleDelete = ()=>{
    setDelete({bool: true, id: proposal._id});
    delModal.current.style.top = '100px';
    document.body.style.pointerEvents = 'none'
  }
  return (
    <>
      <div className='proposal-card-container'>
        <div className='top-part'>
          <div className='head'>
            <h3 className='main-header'>{proposal.name}</h3>
          </div>
          <div className='para'>
            <p className='para-main'>{proposal.description}</p>
          </div>
        </div>
        <div className='lower-part'>
          <div>
            <div><p className='l-h'>Event type</p></div>
            <div><h3 className='l-l'>{proposal.eventType}</h3></div>
          </div>
          <div>
            <div><p className='l-h'>Proposal type</p></div>
            <div><h3 className='l-l'>{proposal.proposalType}</h3></div>
          </div>
          <div>
            <div><p className='l-h'>From Date</p></div>
            <div><h3 className='l-l'>{proposal.from.split('T')[0]}</h3></div>
          </div>
          <div>
            <div><p className='l-h'>To Date</p></div>
            <div><h3 className='l-l'>{proposal.to.split('T')[0]}</h3></div>
          </div>
          <div>
            <div><p className='l-h'>Budget</p></div>
            <div><h3 className='l-l'>{proposal.budget}</h3></div>
          </div>
          <div className="icons">
            <div className='edit'>
              <Icon onClick={handleEdit} icon={pencil} size={20} />
            </div>
            <div className='bin'>
              <Icon onClick={handleDelete} icon={bin} size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProposalListCard;
