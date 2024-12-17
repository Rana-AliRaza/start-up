import React, { useState } from "react";
import profile from "/images/profile.png";
import attach from "/images/attach-file.png";
import { Divider } from "antd";
import smile from "/images/smile.png";
import sendbtn from "/images/send-btn.png";
import { Modal } from "antd";
import Input from "../../components/shared/input";
import { Button, message, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import Heading from "../../components/shared/heading";

const Chatting = ({ children }) => {
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

  const uploadButtonProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <section className="chatting">
      {/* Header */}
      <header className="fixed top-22 w-full bg-white shadow-md">
        <div className="flex gap-x-2 items-center p-4">
          {/* Profile Section */}
          <div className="profile w-14 h-14">
            <img
              src={profile}
              alt="User profile picture of Tom Cruise"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          <div>
            <h5 className="text-sm font-semibold text-gray-800">Tom Cruise</h5>
            <p className="text-xs font-light text-gray-600">Active 1 min ago</p>
          </div>
        </div>

        <div className="h-px bg-blue-300"></div>
      </header>

      <div className="pt-24 pb-20">{children}</div>
      <>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
        >
          <div className="new-message rounded-lg ">
            <Heading heading="new Message" />
            <div className="mt-4">
              <Input label={"To"} placeholder={"Type here.."}></Input>
              <label
                for="message "
                className=" mt-4 text-gray-600 inline-block"
              >
                Message:
              </label>
              <textarea
                placeholder="Type here..."
                className="w-full text-gray-600 outline-none bg-blue-100 rounded-2xl p-4 mt-2"
                rows="6"
              />
            </div>
            <div className="w-fit mx-auto mt-4">
            <Upload {...uploadButtonProps}>
              <Button type='dashed' icon={<UploadOutlined />}  style={{width:'400px'}} > Upload Document</Button>
            </Upload>

            </div>
          </div>
        </Modal>
      </>

      <section
        className="fixed bottom-4 w-full "
        style={{ border: "1px solid #cce2fc", borderLeft: "none" }}
      >
        <div className="flex gap-x-80 items-center w-full">
          <div className="flex items-center ">
            <div
              className="p-2 border-r border-blue-300 hover:bg-blue-300 mr-2"
              onClick={showModal}
            >
              <>
                <img
                  src={attach}
                  alt="Attach file icon"
                  className="w-10 h-10 object-contain"
                />
              </>
            </div>

            <div className="">
              <img
                src={smile}
                alt="Smile icon"
                className="w-8 h-8 object-contain"
              />
            </div>
            <Divider type="vertical" />
            <div className="write-message ">
              <input
                type="text"
                placeholder="Text here"
                className="outlined-none pl-4 text-sm text-gray-600 "
              />
            </div>
          </div>
          <div className="send-btn size-10 rounded-full ml-80   flex items-center justify-center bg-blue-200 mr-80">
            <img
              src={sendbtn}
              className="object-contain rounded-full "
              sizes="26px"
              alt="send-btn"
            />
          </div>
        </div>
        {/* <div className="flex-1 h-px  bg-red-900" /> */}
      </section>
    </section>
  );
};

export default Chatting;
