import React from "react";

const NavBtn = ({ border, name, background }) => {
  // We shall add the link later.
  return (
    <button
      className={`${
        border === "true"
          ? " border-2 border-plain text-plain hover:bg-plain hover:text-black"
          : " border-none text-plain hover:bg-plain hover:text-black"
      } ${
        background === "white"
          ? "bg-white text-black hover:bg-primary hover:text-plain"
          : ""
      } px-10 py-3 mx-2 my-2 capitalize `}
    >
      {name}
    </button>
  );
};

export default NavBtn;
