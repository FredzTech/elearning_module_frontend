import React from "react";
import Modal from "../components/modals/Modal";
import RegistrationForm from "../components/RegistrationForm";
// import {Welcome} from "../components/Welcome";
const RegistrationPage = () => {
  return (
    // <Modal>
      <div className="flex  mx-10 my-8 sm:flex sm:flex-wrap md:flex-wrap">
 
    {/* <div className="laptop:w-3/6 phone:w-screen"><Welcome/></div> */}
    <div><RegistrationForm/></div>
    
  

  </div>
    // </Modal>
  )
};

export default RegistrationPage;