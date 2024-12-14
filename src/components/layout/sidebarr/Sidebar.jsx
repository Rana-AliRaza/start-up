import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SvgWrapper from "../../../../utils/svgWrapper";
import { sideIcons } from "../../../../utils/icons";
import navLogoBig from "/images/navLogoBig.png";


const Sidebar = () => {
  const navigate = useNavigate();
  const sideItems = [
    { id: 1, icon: sideIcons.Home, label: "Home", path: "/home" },
    { id: 2, icon: sideIcons.Access, label: "Access", path: "/access" },
    { id: 3, icon: sideIcons.Account, label: "Account", path: "/account" },
    {
      id: 4,
      icon: sideIcons.Appoinment,
      label: "Appointments",
      path: "/appointments",
    },
    { id: 5, icon: sideIcons.Task, label: "Tasks", path: "/tasks" },
    {
      id: 6,
      icon: sideIcons.Inventory,
      label: "Inventory",
      path: "/inventory",
    },
    { id: 7, icon: sideIcons.Sales, label: "Sales", path: "/sales" },
    {
      id: 8,
      icon: sideIcons.Demographics,
      label: "Demographics",
      path: "/demographics",
    },
    { id: 9, icon: sideIcons.Setting, label: "Settings", path: "/settings" },
  ];
  

  return (
    <aside className="fixed h-full bg-white  text-white w-64 shadow-md shadow-gray-600 max:w-[260px] transition-all duration-300">
      <div className="flex justify-start  items-start pt-5 pl-3   border-b border-gray-700 cursor-pointer "onClick={()=>navigate('/')}>
        <img src={navLogoBig} alt="nav logo" className="w-36 h-14 " />
      </div>

      <nav className="mt-2 px-2">
        <ul className="space-y-2">
          {sideItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-gray-400 text-base  hover:bg-bgLight hover:text-primary  rounded-md transition-all duration-200 ${
                    isActive ? "bg-gray-700  text-primary" : ""
                  }`
                }
              >
                <span className="w-6 h-4 mr-3  flex items-center">
                  <SvgWrapper icon={item.icon} size={18} color="" />
                </span>
                {item.label}
              </NavLink>
            </li>
          ))}
          <div className="logout">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-base hover:bg-bgLight   text-secondary-text  rounded-md transition-all duration-200 ${
                  isActive ? "  text-primary" : ""
                }`
              }
            >
              <span className="w-6 h-6 mr-3 text-secondary-text">
                <SvgWrapper icon={sideIcons.Logout} size={20} color="" />
              </span>
              Log out
            </NavLink>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
