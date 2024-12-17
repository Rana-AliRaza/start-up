import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Heading = ({ heading, path = "/", backArrow=false }) => {
  const navigate = useNavigate();
  return (
    <div className="title flex items-center gap-x-2 ">
      <div
        className="flex items-center gap-x-2 font-semibold cursor-pointer pl-4"
        onClick={() => navigate(path)}
      >
        {backArrow && (
          <span>
            {" "}
            <BiArrowBack className="text-xl font-bold" />
          </span>
        )}
        <h4 className="text-gray-600 text-xl font-medium main-heading ">
          {" "}
          {heading}{" "}
        </h4>
      </div>
    </div>
  );
};

export default Heading;
