import React, { createContext, useState } from "react";
import "./modal.css";
import { useNavigate } from "react-router-dom";

export const ModalContext = createContext();

// export function openModal(){
//   return useContext(ModalContext)
// }

export default function ModalProvider({ children }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setIsOpen(true);
    setModalContent(content);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);

    navigate(-1);
    // setTimeout(() => {
    //   window.location.reload(false);
    // }, 100);
  };

  if (isOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
}
