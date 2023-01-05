import React from "react";
import LogInForm from "../components/LogInForm";
import {Welcome} from "../components/Welcome";
const LogInPage = () => {
  return (
  <div className="md:flex sm:flex-column">
    {/* LogInPage */}
    <div className="md:w-3/6 sm:w-screen"><Welcome/></div>
    <div><LogInForm/></div>
    
  

  </div>)
};

export default LogInPage;