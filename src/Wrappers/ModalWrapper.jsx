import React, { useState } from "react";

const ModalWrapper = (Component) => {
  return function HOC(props) {
    const testEvent = () => {
      console.log("Hello from test event.");
    };
    const [testForm, setTestForm] = useState(false);

    // CHAPTER CONTROLS
    function showModal() {
      setTestForm(true);
    }
    function hideModal() {
      setTestForm(false);
    }
    function handleClose(e) {
      if (e.target.id == "container") {
        hideModal();
      }
    }

    if (testForm == false) {
      return (
        <button
          className="button w-48 h-16"
          onClick={() => {
            showModal();
          }}
        >
          Yoh
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
            <Component testEvent={testEvent} hideModal={hideModal} {...props} />
            {/* Passing the original props back to component after wrap */}
          </div>
        </div>
      </>
    );
  };
};

export default ModalWrapper;
