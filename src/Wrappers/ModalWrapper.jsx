import React from "react";

const ModalWrapper = (Component) => {
  return function HOC(props) {
    //Returns improved component. Eliminates redundant code. Should wrap our form inside a modal.
    return (
      <>
        <div
          id="container"
          className="flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm fixed inset-0 z-10"
        >
          <div className="absolute top-2 right-2 ">
            <span className="w-8 h-8 bg-white">X</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Component {...props} />
            {/* Passing the original props back to component after wrap */}
          </div>
        </div>
      </>
    );
  };
};

export default ModalWrapper;
