import React, { useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { useModal } from "./ModalProvider";
export default function Modal({ children }) {
  const { isOpen, closeModal, openModal } = useModal();
  useEffect(() => {
    openModal();
  }, []);
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content ">
            <button
              className="close-modal float-right   z-50 "
              onClick={() => closeModal()}
            >
              <MdCancel className="text-black text-4xl" />
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
}
