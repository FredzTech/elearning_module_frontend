import React, { useState } from "react";
import { CourseForm } from "../components";
import { ModalWrapper } from "../Wrappers";
import "../components/TutorPage/Accordion/accordion.css";
const DraftPage = () => {
  const [view, setView] = useState(false);

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

  return (
    <>
      <CourseForm
        showModal={showModal}
        hideModal={hideModal}
        handleClose={handleClose}
        view={view}
      />

      <div
        className="bg-primary  px-4 py-2 text-white rounded-md"
        onClick={() => {
          showModal();
        }}
      >
        Button
      </div>
    </>
  );

  // return ModalWrapper(CourseForm, view);

  // <CourseForm //Is already a modal.
  //   view={view}
  //   showModal={showModal}
  //   hideModal={hideModal}
  //   handleClose={handleClose}
  // />
};

export default DraftPage;
