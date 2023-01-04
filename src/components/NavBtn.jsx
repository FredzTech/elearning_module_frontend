import React from "react";

const NavBtn = ({ border, background, text }) => {
  return (
    <div
      className={`px-7 py-4 mx-2 text-plain capitalize ${
        border === "true" ? "border-2 border-plain" : "border-none"
      } ${background === "true" ? "hover:bg-secondary text-black" : ""} `}
    >
      {text}
    </div>
  );
};

export default NavBtn;
