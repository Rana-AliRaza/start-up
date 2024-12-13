import React, { useState } from "react";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import Checkbox from "../../components/shared/checkbox";
import loginImg from "/images/login.png";

const Login = () => {

  return (
    <div>
      <div className="flex  min-h-dvh rounded-2xl  overflow-hidden">
        <div className="">
          <img
            src={loginImg}
            className="w-full h-full  object-contain"
            alt="login pic"
          />
        </div>
        <div className="flex-1  flex items-center object-contain">
          <div className="flex  flex-col gap-4 w-full max-w-[400px] mx-auto items-center">
            <h2 className="font-semibold mb-4 lg:mb-8">OTP</h2>
            <div className="otp-box flex gap-4 justify-center mx-auto w-fit h-12 text-primary focus:border-red-800" >
             <input type="number" maxLength={1} className=" border border-primary hover:border-text-primary p-4 w-12 shadow-md boxShadow-primary-shadow rounded-2xl text-xl font-semibold"  />
             <input type="number" maxLength={1} className=" border p-4 w-12 shadow-md boxShadow-primary-shadow rounded-2xl text-xl font-semibold"  />
             <input type="number" maxLength={1} className=" border p-4 w-12 shadow-md boxShadow-primary-shadow rounded-2xl text-xl font-semibold"  />
             <input type="number" maxLength={1} className=" border p-4 w-12 shadow-md boxShadow-primary-shadow rounded-2xl text-xl font-semibold"  />

            </div>


            <Button text={"Next"}  className={"btn-primary w-full  mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
