import React, { useState } from "react";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import loginImg from "/images/login.png";
import { Link } from "react-router-dom";


const ChangePassword = () => {

  return (
    <div>
      <div className="flex flex-cols-2 min-h-dvh rounded-2xl  overflow-hidden">
        <div className="">
          <img
            src={loginImg}
            className="w-full h-full  object-contain"
            alt="login pic"
          />
        </div>
        <div className="flex-1  flex items-center object-contain">
          <div className="flex  flex-col gap-4 w-full max-w-[600px] mx-auto items-center">
            <h2 className="font-semibold capitalize mb-4">
              Change Password
            </h2>
            <div className="max-w-[400px] w-full flex flex-col gap-y-4 amt-8">

            <Input
              type="email"
              label={"Password"}
              labelClass={'text-sm '}
              className={"w-full  text-primary-text font-thin  rounded-3xl  mb-2"}
              placeholder={"Type here..."}
            />
            <Input
              type="email"
              label={"Confirm Password"}
              labelClass={'text-sm '}
              className={"w-full  text-primary-text font-thin  rounded-3xl  text-xs"}
              placeholder={"Type here..."}
            />

            <Button  to="/verify"  text={'Next'} className="bg-primary text-white font-medium w-full mt-8" > Next </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
