import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
const AdminNavItem = ({ to, text }) => {
  return (
    <Link to={`/admin/${to}`}>
      <div className="button debug ">
        {text}
        <span className="text-xl">
          <BsChevronRight />
        </span>
      </div>
    </Link>
  );
};

export default AdminNavItem;
