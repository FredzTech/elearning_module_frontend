import React from "react";
import { NavBtn } from "../components";

const NavigationBar = () => {
  return (
    // We can utilize the gap property with flexbox.
    <header className="flex bg-primary text-plain items-center w-full p-1">
      <div className="brand mr-auto">
        <NavBtn name="Home" goto="/" />
      </div>
      <div className="navigation mx-auto my-auto">
        <NavBtn name="Courses" goto="courses" />
        <NavBtn name="Units" goto="units" />
      </div>
      <div className="CTAButtons ml-auto">
        <NavBtn name="Login" border="true" goto="login" />
        <NavBtn name="Register" border="true" goto="register" />
      </div>
    </header>
  );
};

export default NavigationBar;
