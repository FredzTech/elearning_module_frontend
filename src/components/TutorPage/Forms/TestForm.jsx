import React from "react";
import { ModalWrapper } from "../../../Wrappers";
const TestForm = () => {
  return <div className="text-white">TestForm</div>;
};

export default ModalWrapper(TestForm);

// If I import this, I should be getting a modal
