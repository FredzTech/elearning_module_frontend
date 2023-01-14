import React from "react";
import { ModalWrapper } from "../../../Wrappers";
const TestForm = ({ Height }) => {
  return <div className="text-white">{Height}</div>;
};

export default ModalWrapper(TestForm);

// If I import this, I should be getting a modal
