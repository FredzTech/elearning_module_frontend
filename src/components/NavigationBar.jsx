import React, { useContext } from "react";
import { NavBtn } from "../components";
import {UserContext , Logout} from "../context/AuthContextProvider";
import Subscription from '../assets/subscription.png' 
import Search from "./Search";

const NavigationBar = () => {
  const isAuthenticated  = useContext(UserContext);
  const logout = Logout();
  return (
    // We can utilize the gap property with flexbox.
    <header className="flex bg-dark-grey text-plain items-center w-full p-1">
      <div className="brand mr-auto">
        <NavBtn name="Home" goto="/" />
      </div>
      <div className="navigation mx-auto my-auto">
        <NavBtn name="Courses" goto="courses" />
        <NavBtn name="Units" goto="units" />
      </div>
      <div><Search/></div>
      <div className="border rounded-lg border-none">
        <img src={Subscription} alt="subscription" className="h-16 bg-radium"/>
        <p>Get Subscription</p>
      </div>
      

      <div className="CTAButtons ml-auto">


      {!isAuthenticated ? <NavBtn name="Login" border="true" goto="login" />
        // if authenticated show logout button
      : <NavBtn name="Logout" border="true" action={logout} />
      }
      {!isAuthenticated ? <NavBtn name="Register" border="true" goto="register" /> : ''
      }
      </div>
    </header>
  );
};

export default NavigationBar;
