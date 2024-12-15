import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaRegEdit } from "react-icons/fa";
import Title from "../../components/Title";
import Input from "../../components/shared/input";
import Devider from "../../components/Devider";


const ChangePassword = () => {
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
    <div className="">
      <div
        className="gap-x-2  text-xs    flex h-8 w-fit px-2 items-center rounded-xl mt-8 hover:bg-slate-100 cursor-pointer"
        style={{ border: "1px solid #494646" }} 
        onClick={showModal}
      >
        Change password
        <FaRegEdit />
      </div>
      <>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          width={720}
          okText={'Change'}

          footer={[
            <div className="flex justify-center gap-x-8 pt-2 pb-4">
            <Button
              key="Close"
              onClick={handleCancel}
              style={{  color: "red",  border:'1px solid red', padding:'0 3rem' }}
            >
              Cancel
            </Button>
            <Button
              key="ok"
              type="primary"
              onClick={handleOk}
              style={{  color: "#fff", padding:'0 3rem' }}
            >
              Change
            </Button>
            </div>
          ]}
          
        >
          <div className="new-message rounded-lg  py-4 text-gray-700 text-sm">
            <div className="flex gap-x-2 items-center">
              <Title heading="Change Password" path="/profile" />
              <Devider height={'2px'} />

            </div>
            <div className="mt-8">
              <Input label={"Current Password"} placeholder={"Type here.."}/>
              <div className="flex justify-between mt-8">
              <Input label={"Current Password"} placeholder={"Type here.."} className={'w-2/5'}/>
              <Input label={"Confirm Password"} placeholder={"Type here.."} className={'w-2/5'}/>
              </div>
            </div>

          </div>
        </Modal>
      </>
    </div>
  );
};

export default ChangePassword;
