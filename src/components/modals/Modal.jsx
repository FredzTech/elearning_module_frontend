import React from "react";
import { useContext } from "react";
import { ModalContext } from "./ModalProvider";

export default function Modal({ children }) {
  const { isOpen } = useContext(ModalContext);

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content ">{children}</div>
        </div>
      )}
    </>
  );
}
