import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import bell from '/images/bell.png';
import message from '/images/message.png';
import profile from '/images/profile.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='navbar-sec  flex w-full justify-end'>
      <div className="nav-content flex gap-x-4  w-2/3 justify-end ">
        <div className="searchbar flex text-blue-400 w-2/3 items-center bg-white p-2 rounded-xl  shadow-gray-600 shadow-sm " >
          <IoSearchOutline  className='text-3xl'/>
          <input type="text"  className='pl-2 text-gray-600' placeholder='Search'/>
        </div>
         <div className="bell size-12  flex items-center justify-center  bg-white  rounded-full">
          <img src={bell} size={24}  alt="bell img" />
         </div>
         <div className="message size-12  flex items-center justify-center  bg-white  rounded-full" onClick={()=>navigate('/message')}>
          <img src={message} size={24}  alt="bell img" />
         </div>
         <div className="profile size-12  flex items-center justify-center  bg-white  rounded-full " onClick={()=>navigate('/profile')}>
          <img src={profile} className='rounded-full' size={24}  alt="bell img" />
         </div>
      </div>

    </nav>
  )
}

export default Navbar