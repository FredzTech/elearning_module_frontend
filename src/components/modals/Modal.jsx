import React from "react";
import { useContext } from "react";
import { ModalContext } from "./ModalProvider";
import { MdCancel } from "react-icons/md";

export default function Modal({ children }) {
  const { isOpen, closeModal } = useContext(ModalContext);

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content ">
            {/* <button
              className="close-modal float-right z-50 "
              onClick={() => closeModal()}
            >
              <MdCancel className="text-black text-4xl" />
            </button> */}

            {children}
          </div>
        </div>
      )}
    </>
  );
}
