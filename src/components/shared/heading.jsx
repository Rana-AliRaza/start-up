import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="heading py-2 ">
      <h4 className="text-gray-600 text-xl font-medium main-heading">
        {title}
      </h4>
    </div>
  );
};

export default Heading;
