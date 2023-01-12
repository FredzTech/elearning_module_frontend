import React, { useState } from "react";

const ModalWrap = (Component) =>
  // These HOC adds the modal to any component wrapped inside it.

  function HOC(props) {
    let [view, setView] = useState(true);

    const hideModal = () => {
      setView(false);
    };

    const showModal = () => {
      setView(true);
    };
    // Used to treat event bubbling.
    const handleClose = (e) => {
      if (e.target.id === "container") {
        hideModal();
      }
    };

    if (view == false) {
      return null;
    }

    return (
      <div
        id="container"
        onClick={handleClose}
        className="flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0 z-10"
      >
        <div onClick={hideModal} className="absolute top-2 right-2 ">
          <span className="w-8 h-8 bg-white">X</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Component {...props} hideModal={hideModal} />
        </div>
      </div>
    );
  };

export default ModalWrap;
