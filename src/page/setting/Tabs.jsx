import { useState } from "react";
import General from "./General";
import Notification from "./Notification";


const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="w-full ">
       {/* Tab Buttons  */}
    <div className="tab-btns w-fit bg-white p-1 flex border-b rounded-xl  gap-x-2 ">
        <button
          className={`w-1/2 py-2 text-center font-medium transition-colors px-8 ${
            activeTab === "general"
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>
        <button
          className={`w-1/2 py-2 text-center font-medium transition-colors px-8 ${
            activeTab === "notification"
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("notification")}
        >
          Notification
        </button>
    </div>

      {/* Tab Content  */}
    <div className="tab-content mt-8  blackShadow rounded-xl bg-white p-2 ">
      <div className="p-4 bg-gray-50 border border-gray-200">
        {activeTab === "general" ? (
          <div className="general-setting">
            <General/>
          </div>
        ) : (
          <div className="notification-setting">
            <Notification/>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default SettingsTabs;
