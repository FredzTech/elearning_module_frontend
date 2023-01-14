import React, { useState } from "react";
import { LessonForm } from "../Forms";
const LessonModal = ({ lessonForm, hideModal, handleClose }) => {
  if (lessonForm == false) {
    return null;
  }

  return (
    <>
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
          <LessonForm hideModal={hideModal} />
        </div>
      </div>
    </>
  );
};

export default LessonModal;
