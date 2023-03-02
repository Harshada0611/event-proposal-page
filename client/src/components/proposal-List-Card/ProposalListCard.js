import React from 'react'
import "./ProposalListCard.css"


const ProposalListCard = () => {
  return (
    <>
      
      <div className='card-container'>
        <div className='top-part'>
          <div className='head'>
            <h3 className='main-header'>Event Name</h3>
          </div>
          <div className='para'>
            <p className='para-main'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
        </div>
        <div className='lower-part'>
          <div>
            <div><p className='l-h'>Event type</p></div>
            <div><h3 className='l-l'>Marriage</h3></div>
          </div>
          <div>
            <div><p className='l-h'>Proposal type</p></div>
            <div><h3 className='l-l'>Venue</h3></div>
          </div>
          <div>
            <div><p className='l-h'>From Date</p></div>
            <div><h3 className='l-l'>21-JAN-2019</h3></div>
          </div>
          <div>
            <div><p className='l-h'>To Date</p></div>
            <div><h3 className='l-l'>21-JAN-2019</h3></div>
          </div>
          <div>
            <div><p className='l-h'>Budget</p></div>
            <div><h3 className='l-l'>20000</h3></div>
          </div>
          <div className='edit'>

          </div>
          <div className='bin'>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProposalListCard;
