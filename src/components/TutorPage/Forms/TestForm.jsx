import React from "react";
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
export default TestForm;

// If I import this, I should be getting a modal
