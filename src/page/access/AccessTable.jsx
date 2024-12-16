import React from 'react';
import { Table, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';


const AccessTable = ({viewNavigate, view = false,}) => {
  const navigate = useNavigate();
    const columns = [
        {
          title: "User",
          dataIndex: "user",
          key: "user",
          align: "left",
        },
        {
          title: "Create",
          dataIndex: "create",
          key: "create",
          render: () => <Checkbox />,
          align: "center",
        },
        {
          title: "View",
          dataIndex: "view",
          key: "view",
          render: () => <Checkbox />,
          align: "center",
        },
        {
          title: "Edit",
          dataIndex: "edit",
          key: "edit",
          render: () => <Checkbox />,
          align: "center",
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "action",
          render: () => (
            <>
            {
             view && <span className='inline-block mr-3 text-green-600 cursor-pointer hover:text-green-700 hover:font-medium' onClick={navigate({viewNavigate})} > 
               View
             </span>

            }
             <DeleteOutlined className="text-red-500 cursor-pointer hover:text-red-700" />
            </>
            
          ),
          align: "center",
        },
      ];
    
      // Define rows
      const data = [
        { key: "1", user: "Appointment" },
        { key: "2", user: "Payments" },
        { key: "3", user: "Inventory" },
        { key: "4", user: "Message" },
        { key: "5", user: "Patient Data" },
      ];
    
  return (
    <div className='table-section rounded-2xl  bg-white mt-4 shadow '>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        className="w-full rounded-3xl"
      />
    </div>
  )
}

export default AccessTable
