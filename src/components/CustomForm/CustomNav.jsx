import React from "react";
const CustomNav = ({ text }) => {
  return (
    <div className="w-full text-center text-sm font-normal text-white bg-green-500 px-2 py-4 rounded-t-md">
      {text}
    </div>
  );
};

export default CustomNav;
