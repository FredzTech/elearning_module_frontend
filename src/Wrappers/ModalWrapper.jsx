import React from "react";

const showModal = () => {
  setView(true);
};
const hideModal = () => {
  setView(false);
};

// Used to treat event bubbling.
const handleClose = (e) => {
  if (e.target.id === "container") {
    hideModal();
  }
};
const CourseModal = (Component) =>
  function HOC({ view, ...props }) {
    //Takes view from the props provided
    if (view == false) {
      return null;
    }
    return (
      <div
        id="container"
        onClick={(e) => {
          handleClose(e);
        }}
        className="flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm fixed inset-0 z-10"
      >
        <div
          onClick={() => {
            hideModal();
          }}
          className="absolute top-2 right-2 "
        >
          <span className="w-8 h-8 bg-white">X</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Component {...props} />
        </div>
      </div>
    );
  };

export default CourseModal;
