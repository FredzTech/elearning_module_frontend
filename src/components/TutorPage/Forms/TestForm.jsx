import React from "react";
import { ModalWrapper } from "../../../Wrappers";
const TestForm = ({ Height, hideModal }) => {
  return (
    <div className="text-white">
      {Height}
      <button
        className="button w-28  rounded-lg text-xs "
        onClick={() => hideModal()}
      >
        Close Modal
      </button>
    </div>
  );
};

// The first Parameter is the component itself in its totality.
export default ModalWrapper(TestForm, "Test");

// If I import this, I should be getting a modal
