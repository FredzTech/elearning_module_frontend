import React from "react";
const CustomNav = ({ text }) => {
  return (
    <div className= " z-0 w-full text-center text-sm font-normal text-white uppercase bg-primary  px-2 py-4 rounded-t-md">
      {text}
    </div>
  );
};

export default CustomNav;
