import React, {  createContext,useState } from "react";
import "./modal.css";





export const ModalContext = createContext();

// export function openModal(){
//   return useContext(ModalContext)
// }


export default function ModalProvider ({children}){
  
 
  const [isOpen , setIsOpen] = useState(false);
  const [modalContent , setModalContent] = useState(null);

  const openModal =(content)=>{
    setIsOpen(true);
    setModalContent(content);
  };
  const closeModal =()=>{
    setIsOpen(false);
    setModalContent(null);
    window.history.back()
  };
 

  

  if(isOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


    return (
  
        <ModalContext.Provider value={{isOpen, openModal,closeModal,modalContent }}>
          {/* {isOpen?
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
            
              
              {children}
            </div>
          </div>
          : <div>{children}</div> 
          } */}
        {children}
        </ModalContext.Provider>
      
    
  
  )
 
}
