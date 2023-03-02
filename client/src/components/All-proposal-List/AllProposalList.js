import React from 'react'
import "./AllProposalList.css"
import ProposalListCard from "../proposal-List-Card/ProposalListCard";


const AllProposalList = () => {
  return (
    <div className='AllProposalList-wrapper'>
      <div className='top-row'>
        <div className='top-row-left'>
          <h2>Proposals</h2>
          <div className='search-bar'>
          <input type="text" placeholder="Search Projects" id='search-box'/>
        </div>
        </div>
        <div className='top-row-right'>
          <button className='create-btn'>Create</button>
        </div>
      </div>


      <div className='ProposalList-all-cards'>
          <ProposalListCard/>
          <ProposalListCard/>
          <ProposalListCard/>
      </div>
    </div>
  )
}

export default AllProposalList
