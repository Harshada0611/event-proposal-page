import React, { useEffect, useRef, useState } from 'react'
import "./AllProposalList.css"
import ProposalListCard from "../proposal-List-Card/ProposalListCard";
import axios from '../../helpers/axios';
import EditModal from '../EditModal/EditModal';
import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal/DeleteModal';

const AllProposalList = () => {
  const [proposal, setProposal] = useState([]);
  const [data, setData] = useState({ attribute: "name", search: "" });
  const editModal = useRef();
  const [edit, setEdit] = useState({bool: false});
  const [del, setDelete] = useState({bool: false});
  const delModal = useRef();

  const fetchProposal = async () => {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.get('/proposal', {
        headers: {
          authorization: token
        }
      })
      console.log(data);
      setProposal(data.proposals)
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleSearch = async (e)=>{
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`/proposal/?search=${data.search}&attribute=${data.attribute}`, {
        headers: {
          authorization: token
        }
      })
      setProposal(response.data.proposals)
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProposal()
  }, [edit.bool, del.bool])
  return (
    <>
    <div className='AllProposalList-wrapper'>
      <div className='top-row'>
        <div className='top-row-left'>
          <h2>Proposals</h2>
        </div>
        <form onSubmit={handleSearch} className='search-bar'>
          <div className="input-container">
          <select
              name="attribute"
              id="attribute"
              required
              value={data.attribute}
              onChange={(e) => setData({ ...data, attribute: e.target.value })}
            >
              <option value="place">Place</option>
              <option value="proposalType">Proposal Type</option>
              <option value="eventType">Event Type</option>
              <option value="name">Name</option>
            </select>
            <input
              type="text"
              placeholder="Enter what to search"
              id='search'
              name='search'
              required
              value={data.search}
              onChange={(e) => setData({ ...data, search: e.target.value })}
            />
            <button>Search</button>
            <button onClick={(e)=>{e.preventDefault();fetchProposal()}}>Discard</button>
          </div>
        </form>
        <div className='top-row-right'>
          <Link to={'/newProposal'} className='create-btn'>Create</Link>
        </div>
      </div>
      <div className='ProposalList-all-cards'>
        {
          proposal.map((proposal, index) => {
            return (<ProposalListCard proposal={proposal} key={index} setEdit={setEdit} editModal={editModal} delModal={delModal} setDelete={setDelete}/>)
          })
        }
      </div>
    </div>
    <div ref={editModal} className="edit-modal">
      {edit.bool && <EditModal proposal={edit.proposal} editModal={editModal} setEdit={setEdit} />}
    </div>
    <div ref={delModal} className="delete-modal">
      {
        del.bool && <DeleteModal delModal={delModal} id={del.id} setDelete={setDelete}/>
      }
    </div>
    </>
  )
}

export default AllProposalList
