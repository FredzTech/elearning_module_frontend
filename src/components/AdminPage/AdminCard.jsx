import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const AdminCard = () => {
  return (
    <div className="text flex justify-start items-center gap-5 w-[450px] border-2 border-red-300 h-48 rounded-md ">
      <div
        id="icon"
        className="flex-row-centered w-1/3 h-full text-8xl text-dark"
      >
        <BsFillPersonFill />
      </div>
      <div id="text" className="flex flex-col items-center">
        <div className="number text-6xl">520</div>
        <div className="text text-xl font-light">Students</div>
      </div>
    </div>
  );
};

export default AdminCard;
