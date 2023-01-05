import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import {Welcome} from "../components/Welcome";
const RegistrationPage = () => {
  return (
  <div className="md:flex sm:flex-column">
    {/* RegistrationPage */}
    <div className="md:w-3/6 sm:w-screen"><Welcome/></div>
    <div><RegistrationForm/></div>
    
  

  </div>)
};

export default RegistrationPage;