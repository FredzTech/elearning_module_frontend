import React from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const CustomNav = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between  items-center w-full text-center text-sm font-normal text-white uppercase bg-primary  px-2 py-4 rounded-t-md">
      {text}
      <button onClick={() => navigate(-1)}>
        <MdCancel className="text-black text-4xl" />
      </button>
    </div>
  );
};

export default CustomNav;
