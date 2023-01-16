import React, { useState } from "react";
import { useModal } from "../context/ModalContext";
const ModalWrapper = (Component, UnitName) => {
  return function HOC(props) {
    console.log(useModal());
    const { modal, setModal } = useModal();
    // We are inside the new component we want to create.
    const [openForm, setOpenForm] = useState(false); // We use one state for all the components.
    // Qustion remains how I will extenalize this state and the externalization also means I externalize the methods.
    // CHAPTER CONTROLS
    function showModal() {
      // setOpenForm(true);
      setModal(true);
    }
    function hideModal() {
      // setOpenForm(false);
      setModal(false);
    }
    function handleClose(e) {
      if (e.target.id == "container") {
        hideModal();
      }
    }

    if (modal == false) {
      return (
        <button
          className="button w-48 h-16"
          onClick={() => {
            showModal();
          }}
        >
          {`Add ${UnitName}`}
        </button>
      );
    }
    //Takes in the props that belonged to the component as we are creating a new component.
    //Returns improved component. Eliminates redundant code. Should wrap our form inside a modal.
    return (
      <>
        <div
          onClick={(e) => handleClose(e)}
          id="container"
          className="flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm fixed inset-0 z-10"
        >
          <div onClick={hideModal} className="absolute top-2 right-2 ">
            <span className="w-12 h-12 bg-white">X</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Component hideModal={hideModal} {...props} />
            {/* Passing the original props back to component after wrap */}
          </div>
        </div>
      </>
    );
  };
};

export default ModalWrapper;
