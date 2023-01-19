import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { IoIosAddCircleOutline, IoMdAdd } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

// I have the freedom to append props directly to icons.
const NavigateBtn = ({ text, icon, destination }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`
      capitalize flex flex-row text-secondary bg-primary  items-center justify-center rounded-md px-4 py-2 `}
    >
      <button
        onClick={() => {
          navigate(`${destination}`);
        }}
        className="flex w-full justify-center items-center capitalize"
      >
        {icon == "tenantIcon" ? (
          <span className="flex items-center justify-center mr-2">
            <IoMdAdd className="text-secondary text-2xl" />
          </span>
        ) : (
          <span className="flex items-center justify-center mr-2">
            <FiSearch className="text-secondary text-2xl" />
          </span>
        )}

        <p className="pt-1">{text}</p>
      </button>
    </div>
  );
};

export default NavigateBtn;
