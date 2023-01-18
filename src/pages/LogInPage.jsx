import React, { useContext } from "react";
import { Modal } from "../components/modals";
import LogInForm from "../components/Logins-Registration/LogInForm";

const LogInPage = () => {
  return (
     <>
      <Modal>
         <LogInForm/>
      </Modal>
     </>
  )
};

export default LogInPage;