import React, { Component, createContext,useState } from "react";
import "./modal.css";

import { Routes, useLocation, Route  } from "react-router";

import { LogInPage,RegistrationPage } from "../../pages";


export const ModalContext = React.createContext();


export default function Modal (props){
  
  const [modal, setModal] = useState(false);
 

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


    return (
    <>
        <ModalContext.Provider value={{setModal }}>
          {modal?
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
            
              
              {props.children}
            </div>
          </div>
          : <div>{props.children}</div> 
          }

        </ModalContext.Provider>
      
      
      {/* <Routes>
        <Route path={location.pathname}>
          <Route  path="login" element={<LogInPage/>}></Route>
          <Route path="register" element={<RegistrationPage />}></Route> 
        </Route>
      </Routes> */}
      
      
    </>
  
  )
 
}
