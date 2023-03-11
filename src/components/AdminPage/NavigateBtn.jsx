import React from "react";
import { IoIosAddCircleOutline, IoMdAdd } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
// I have the freedom to append props directly to icons.
const NavigateBtn = ({ text, icon, destination, action }) => {
  const location = useLocation();
  return (
    <Link to={destination} state={{ background: location }}>
      <div
        className={`
      capitalize flex text-secondary bg-primary w-32 mx-2  items-center justify-between rounded-md px-1 py-2 `}
        onClick={() => {
          console.log(
            "I am the navigate button component and I have been clicked."
          );
        }}
      >
        <p className=" ml-2">{text}</p>

        {icon == "tenantIcon" ? (
          <span className="flex items-center justify-center mr-2">
            <IoMdAdd className="text-secondary text-xl" />
          </span>
        ) : (
          <span className="flex items-center justify-center mr-2">
            <FiSearch className="text-secondary text-xl" />
          </span>
        )}
      </div>
    </Link>
  );
};

export default NavigateBtn;
