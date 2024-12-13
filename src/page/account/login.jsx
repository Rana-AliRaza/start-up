import React, { useState } from "react";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import Checkbox from "../../components/shared/checkbox";
import loginImg from "/images/login.png";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked); // Toggle the state
  };
  return (
    <div>
      <div className="flex  min-h-dvh  rounded-2xl  overflow-hidden">
        <div className="min-h-dvh">
          <img
            src={loginImg}
            className="w-full h-full  object-contain"
            alt="login pic"
          />
        </div>
        <div className="flex-1  flex items-center">
          <div className="flex  flex-col gap-4 w-full max-w-[400px] mx-auto items-center">
             <h2 className="font-medium">Login</h2>

            <Input
              type="text"
              label={"Username"}
              labelClass={'text-sm '}
              className={"w-full  text-primary-text font-thin  rounded-3xl"}
              placeholder={"Type here..."}
            />
            <Input
              type="password"
              label={"Passsword"}
              className={"w-full "} labelClass={''}
              placeholder={"Type here..."}
              icon={true}
              
            />
            <div className=" flex  justify-between w-full">
              <Checkbox
                id="remember-me"
                name="rememberMe"
                label="Remember Me"
                labelClass={'text-red-800'}
                checked={checked} onChange={handleCheckboxChange} />
              <p className="text-xs "> Forget Password!</p>
            </div>
            <Button text={"Login"}  className={"btn-primary w-full  mt-10"} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
