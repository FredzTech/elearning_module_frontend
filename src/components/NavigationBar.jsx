import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBtn } from "../components";
import {UserContext , Logout} from "../context/AuthContextProvider";
import CourseNav from "./CourseNav";
import Subscription from '../assets/subscription.png' 
import Search from "./Search";
import { ModalContext } from "./modals/ModalProvider";
import LogInPage from "../pages/LogInPage";
// import openModal from 

const NavigationBar = ({content}) => {
  const openModal = useContext(ModalContext);
  // const openModal = openModal()
  
  const isAuthenticated  = useContext(UserContext);
  const logout = Logout();
  return (
    // We can utilize the gap property with flexbox.
    <nav className="flex bg-dark-grey text-plain items-center w-full p-1">
    {/* <header > */}
      <div className="brand mr-auto">
        <NavBtn name="Home" goto="/" />
      </div>
      <CourseNav />
      <div className="navigation mx-auto my-auto">
        
        <NavBtn name="Unit" goto="newCourses" />
      </div>
      <div><Search/></div>
      <div className="border rounded-lg border-none flex">
        
       
        <Link to="pricing">
          <button className="p-2 text-center flex justify-center align-center gap-2">
            <img src={Subscription} alt="subscription" className="h-8 bg-radium border radius-lg"/>
            Subscription
          </button>
        
        </Link>
        
        
      </div>
 

      <div className="CTAButtons ml-auto">

 
      
          {!isAuthenticated ? <NavBtn name="Login" border="true" goto="login" action={()=>openModal(content)}/> 
            // if authenticated show logout button
          : <NavBtn name="Logout" border="true" action={logout} />
          }
          {!isAuthenticated ? <NavBtn name="Register" border="true" goto="register" /> : ''
          }
      </div>
    </nav>
  );
};

export default NavigationBar;
