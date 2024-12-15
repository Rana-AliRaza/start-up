import React from "react";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";


const DropDown = () => {
  const items = [
    {
      key: "1",
      label: "Admin",
    },
    {
      key: "2",
      label: "sub Admin",
    },
    {
      key: "3",
      label: "user",
    },
  ];
  return (
    <div className="w-full ">
    {/* Dropdown Trigger */}
    <Dropdown
      menu={{ items }}
      overlayClassName=""
      placement="bottomLeft"
    >
      <Button
        className="w-full flex justify-between items-center text-left  text-gray-500 rounded-lg"
        style={{ padding: "20px 15px" }}
      >
        <span>Select Role</span>
       <span className="text-primary"><DownOutlined /></span> 
      </Button>
    </Dropdown>
  </div>
  );
};

export default DropDown;
