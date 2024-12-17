import React from 'react'
import Navbar from '../../components/layout/navbar'
import Sidebar from './messageSidebar';
import Chatting from './Chatting';
import Chat from './Chat';
import './message.scss';
import Devider from '../../components/Devider';
import Heading from '../../components/shared/heading';


const Message = () => {
  return (
    <div className='message-sec py-4 rounded-3xl'>
        <div className="message-nav px-4">
          <Navbar/>
        </div>
        <div className="devide flex items-center gap-x-2">
         <Heading heading='Messages' />
         <Devider height={2}/>
        </div>
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
