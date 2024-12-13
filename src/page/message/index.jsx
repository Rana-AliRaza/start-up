import React from 'react'
import Navbar from '../../components/layout/navbar'
import Title from '../../components/Title'
import Sidebar from './messageSidebar'

const Message = () => {
  return (
    <div className='message-sec py-4'>
        <div className="message-nav px-4">
          <Navbar/>
        </div>
       <Title heading='Messages' />
       <div className="layout">
         <div className="sidebar">
           <Sidebar/>
         </div>
       </div>
    </div>
  )
}

export default Message
