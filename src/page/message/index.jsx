import React from 'react'
import Navbar from '../../components/layout/navbar'
import Title from '../../components/Title'
import Sidebar from './messageSidebar';
import Chatting from './Chatting';
import Chat from './Chat';
import './message.scss';


const Message = () => {
  return (
    <div className='message-sec py-4 rounded-3xl'>
        <div className="message-nav px-4">
          <Navbar/>
        </div>
       <Title heading='Messages' />
       <div className="layout flex justify-between gap-x-4">
         <div className="sidebar">
           <Sidebar/>
         </div>
         <div className="content ml-[386px] w-full  ">
            <Chatting>
              <Chat/>
            </Chatting>
         </div>
       </div>
    </div>
  )
}

export default Message
