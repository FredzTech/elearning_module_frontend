import React from "react";
import { NavBtn } from "../components";
const Navbar = () => {
  return (
    <div className="flex  w-full items-center justify-center bg-secondary">
      <div className="brand mr-auto">
        <p>Brand</p>
      </div>
      <div className="nav flex">
        <NavBtn text="About Us" background="true" />
        <NavBtn text="Our Courses" background="true" />
      </div>
      <div className="cta flex ml-auto ">
        <NavBtn text="Log In" border="true" background="true" />
        <NavBtn text="Register" border="true" background="true" />
      </div>
    </div>
  );
};

export default Navbar;
