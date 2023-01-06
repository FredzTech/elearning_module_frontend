import React from "react";
import LogInForm from "../components/LogInForm";
import {Welcome} from "../components/Welcome";
const LogInPage = () => {
  return (
  <div className="flex  mx-10 my-8 sm:flex sm:flex-wrap md:flex-wrap">
    {/* LogInPage */}
    <div className="laptop:w-3/6 phone:w-screen"><Welcome/></div>
    <div><LogInForm/></div>
    
  

  </div>)
};

export default LogInPage;