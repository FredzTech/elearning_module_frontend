import React from "react";
import { ModalWrapper } from "../../../Wrappers";
const TestForm = ({ Height, testEvent, hideModal }) => {
  return (
    <div className="text-white">
      {Height}
      <button className="button" onClick={() => hideModal()}>
        {" "}
        Toggle Modal
      </button>
    </div>
  );
};

export default ModalWrapper(TestForm);

// If I import this, I should be getting a modal
