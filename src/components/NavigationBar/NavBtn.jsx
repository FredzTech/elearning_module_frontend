import React from "react";
import { Link } from "react-router-dom";

const NavBtn = ({ border, name, goto, background, action}) => {
  // We shall add the link later.
  return (
    <Link to={goto}>
      <button
        className={`${
          border === "true"
            ? " border-2 border-plain text-plain hover:bg-plain hover:text-primary "
            : " border-none text-plain hover:bg-plain hover:text-primary "
        } ${
          background === "white"
            ? "bg-white text-black hover:bg-primary  hover:text-primary "
            : ""
        } px-10 py-3 mx-2 my-2 capitalize `}
        onClick={action}
      >
        {name}
      </button>
    </Link>
  );
};

export default NavBtn;
