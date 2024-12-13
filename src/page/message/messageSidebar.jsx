import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../../components/shared/button";
import btnimg from '/images/compose-button-img.png';

const Sidebar = () => {
  return (
    <div className="fixed max-w-[350px] w-full pt-8 blackShadow shadow-md">
      <div className="top flex gap-x-4 px-2">
       <div className="message-searchbar flex gap-x-2 text-blue-400  px-2 items-center bg-white  rounded-lg  shadow-gray-600 shadow-sm ">
        <IoSearchOutline className="text-2xl " />
        <input type="text" className="p-2 text-gray-600" placeholder="Search" />
       </div>
       <Button text={'Compose'} className={'text-white bg-primary px-6 hover:bg-blue-600 flex  gap-x-2 py-2'} img={btnimg} />

      </div>
    </div>
  );
};

export default Sidebar;
