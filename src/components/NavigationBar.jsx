import React from "react";
import { NavBtn } from "../components";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    // We can utilize the gap property with flexbox.
    <nav className="flex justify-between bg-primary text-plain items-center w-full p-1">
      <div className="border-2 border-white ml-4">
        <Link to="/">
          <p className="uppercase text-2xl font-extrabold px-5 py-4">
            {" "}
            e-module
          </p>
        </Link>
      </div>
      <div className="navigation ml-16">
        <NavBtn name="Courses" goto="courses" />
        <NavBtn name="Units" goto="units" />
        <NavBtn name="Courses(N)" goto="newCourses" />
      </div>
      <div className="CTAButtons">
        <NavBtn name="Login" border="true" goto="login" />
        <NavBtn name="Register" border="true" goto="register" />
      </div>
    </nav>
  );
};

export default NavigationBar;
