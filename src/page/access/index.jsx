import React, { useState } from "react";
import { Button, Modal } from "antd";
import DropDown from "./DropDown";
import Input from "../../components/shared/input";
import Devider from "../../components/Devider";
import AccessTable from "./AccessTable";
import AccessPagination from "./Pagination";
import Heading from "../../components/shared/heading";

const Access = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="access-sec p-8 mt-4 ">
      <div className="top flex justify-between items-center py-2 ">
        <h4 className="text-gray-700 text-xl font-medium ">
          Manage Roles & Access
        </h4>
        <button
          className="bg-blue-600 text-slate-50  px-6 py-2 hover:to-blue-800 "
          style={{ fontWeight: "500" }}
          onClick={showModal}
        >
          Create new Role
        </button>
      </div>
      <>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          width={720}
          okText={"Change"}
          footer={[
            <div className="flex justify-center gap-x-8 pt-2 pb-4">
              <Button
                key="Close"
                onClick={handleCancel}
                style={{
                  color: "red",
                  border: "1px solid red",
                  padding: "0 3rem",
                }}
              >
                Close
              </Button>
              <Button
                key="ok"
                type="primary"
                onClick={handleOk}
                style={{ color: "#fff", padding: "0 3rem" }}
              >
                Change
              </Button>
            </div>,
          ]}
        >
          <div className="new-message rounded-lg  py-4 text-gray-700 text-sm">
            <div className="flex gap-x-2 items-center">
                <Heading heading="Create" path="/access" />
                <Devider height='1px' />
            </div>
            <div className="pl-8 py-4 grid grid-cols-2 gap-x-8 gap-y-4 w-full mt-4 text-gray-600">
              <Input label={"Name"} placeholder={"Name"} />
              <Input label={"Role"} placeholder={"Role"} />

              <Input label={"Email"} placeholder={"Email"} type="email" />
              <Input label={"Status"} type="number" placeholder={"Status"} />
            </div>
          </div>
        </Modal>
      </>
      <div className="w-full">
        <DropDown />
      </div>
      <div className="access-table">
        <AccessTable />
      </div>
      <div className="pagination ">
         <AccessPagination />
      </div>
    </section>
  );
};

export default Access;
