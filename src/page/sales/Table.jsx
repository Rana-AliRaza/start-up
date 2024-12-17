import React from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

import deleteIcon from '/images/deleteIcon.png';

const PatientTable = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      key: "patientName",
      align: "center",
    },
    {
      title: "Service/Item Sold",
      dataIndex: "serviceItem",
      key: "serviceItem",
      align: "center",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "center",
      render: (amount) => `$${amount}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => <span className="">{status}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex items-center">
          <span
            className="inline-block mr-3 text-green-600 cursor-pointer hover:text-green-700 hover:font-medium"
            onClick={() => navigate(`/sales/view/${record.key}`)}
          >
            View
          </span>
          <img src={deleteIcon} alt="delete icon" />
          
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "Oct 10, 2024",
      patientName: "Deena Cooley",
      serviceItem: "MRI Scan",
      category: "Medical Equipment",
      amount: 500,
      status: "Paid",
    },
    {
      key: "2",
      date: "Oct 10, 2024",
      patientName: "Jerry Wilcox",
      serviceItem: "Blood Test",
      category: "Lab Services",
      amount: 125,
      status: "Unpaid",
    },
    {
      key: "3",
      date: "Oct 10, 2024",
      patientName: "Eduardo Kramer",
      serviceItem: "Antibiotics (500mg)",
      category: "Medicines",
      amount: 400,
      status: "Paid",
    },
    {
      key: "4",
      date: "Oct 10, 2024",
      patientName: "Jason Compton",
      serviceItem: "X-Ray Machine Rental",
      category: "Medical Equipment",
      amount: 50,
      status: "Paid",
    },
    {
      key: "5",
      date: "Oct 10, 2024",
      patientName: "Emmitt Bryan",
      serviceItem: "Consultation Fee",
      category: "Consultation",
      amount: 780,
      status: "Unpaid",
    },
  ];

  return (
    <div className="table-section mt-4 w-full shadow-lg rounded-2xl overflow-hidden">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="w-full"
        components={{
          header: {
            wrapper: ({ children, ...restProps }) => (
              <thead {...restProps} className="bg-blue-100 ">
                {children}
              </thead>
            ),
          },
        }}
      />
    </div>
  );
};

export default PatientTable;
