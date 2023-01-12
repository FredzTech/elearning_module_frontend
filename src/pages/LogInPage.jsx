import React, { useContext } from "react";
import LogInForm from "../components/LogInForm";
import  { ModalContext } from "../components/modals/Modal";
import Cancel from '../assets/remove-icon.png'



const LogInPage = () => {
  //  const {setModal} = useContext(ModalContext);
  //      setModal(true)
  return (

    <>
    
      
      <div className="flex  mx-10 my-8 sm:flex sm:flex-wrap md:flex-wrap">
      
      {/* <div className="laptop:w-3/6 phone:w-screen"><Welcome/></div> */}
      <button className="text-center ml-96" ><img src={Cancel} alt="cancel" height={20} width={20}/></button>
      <div><LogInForm/></div>
    
    </div>
 
  </>
  )
};

export default LogInPage;