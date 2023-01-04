import React from "react";
import { NavBtn } from "../components";
const NavigationBar = () => {
  return (
    // We can utilize the gap property with flexbox.
    <div className="flex bg-primary text-plain items-center w-full p-1">
      <div className="brand mr-auto">
        <NavBtn name="brand" />
      </div>
      <div className="navigation mx-auto my-auto">
        <NavBtn name="About Us" />
        <NavBtn name="Courses" />
      </div>
      <div className="CTAButtons ml-auto">
        <NavBtn name="Login" border="true" background="white" />
        <NavBtn name="Register" border="true" />
      </div>
    </div>
  );
};

export default NavigationBar;
