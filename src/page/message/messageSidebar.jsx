import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../../components/shared/button";
import btnimg from "/images/compose-button-img.png";
import profile from "/images/profile.png";

const Sidebar = () => {
  const chat = [
    {
      id: 1,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
    {
      id: 2,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
    {
      id: 3,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
    {
      id: 4,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
    {
      id: 5,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
    {
      id: 6,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
    {
      id: 7,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
    {
      id: 8,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
    {
      id: 9,
      profile: profile,
      personName: "Tom Cruise",
      desc: " Can you explain these...",
      time: "1 min",
    },
  ];
  return (
    <div className="fixed max-w-[400px] overflow-y-auto  w-full pt-8 shadow-gray-700 h-full shadow-md" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="top flex gap-x-4 px-2 w-fit">
        <div className="message-searchbar flex justify-between px-2 text-blue-400  pl-2 items-center bg-white  rounded-lg  shadow-gray-600 shadow-sm ">
          <input
            type="text"
            className="p-2 text-gray-600 w-2/3"
            placeholder="Search"
          />
          <IoSearchOutline className="text-2xl " />
        </div>
        <Button
          text={"Compose"}
          className={
            "text-white bg-primary px-6 hover:bg-blue-600 flex  gap-x-2 py-2"
          }
          img={btnimg}
        />
      </div>
      <div className="chat mt-4">
        <ul>
          {chat.map(({ id, personName, profile, desc, time }) => (
            <li className="w-full hover:bg-blue-500 group " key={id}>
              <div className="ml-8 mr-4 flex  justify-between py-3 " style={{ borderBottom:'1px solid #e2d9d9'}}>
                <div className="flex gap-x-2 items-center">
                  <div className="profile size-11">
                    <img
                      src={profile}
                      alt="profile"
                      className="rounded-full object-contain"
                    />
                  </div>
                  <div className="typography">
                    <h5 className="font-medium text-sm  text-gray-800  group-hover:text-white">
                      {" "}
                      {personName}{" "}
                    </h5>
                    <p className="text-gray-700 font-light text-xs  group-hover:text-white "> {desc} </p>
                  </div>
                </div>
                <p className="text-gray-700 font-light  group-hover:text-slate-200 text-xs">
                  {" "}
                  {time}{" "}
                </p>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
