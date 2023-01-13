import React, { useContext } from "react";
import LogInForm from "../components/LogInForm";
import { Modal } from "../components/modals";
import { ModalContext } from "../components/modals/ModalProvider";




const LogInPage = () => {
// const {openModal, isOpen} = useContext(ModalContext);
  return (

     <>

        {/* <button onClick={()=>openModal(content)} >Login</button>         */}
      <Modal>
         <LogInForm/>
      </Modal>

      

     </>
  
  )
};

export default LogInPage;