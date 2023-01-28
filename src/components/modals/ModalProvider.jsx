import React, { createContext, useState, useContext } from "react";
import "./modal.css";

export const ModalContext = createContext();

// export function openModal(){
//   return useContext(ModalContext)
// }
export const useModal = () => {
  return useContext(ModalContext);
};

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
