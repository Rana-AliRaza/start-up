import React, { useState } from "react";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import loginImg from "/images/login.png";
import { Link } from "react-router-dom";


const Register = () => {

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
          <div className="flex  flex-col gap-4 w-full max-w-[400px] mx-auto items-center">
            <h2 className="font-semibold">
              Register
            </h2>

            <Input
              type="email"
              label={"Email"}
              labelClass={'text-sm '}
              className={"w-full  text-primary-text font-thin  rounded-3xl"}
              placeholder={"Type here..."}
            />

            <Link  to="/verify" className="bg-primary w-full " > Next </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
