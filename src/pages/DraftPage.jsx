import React, { useState } from "react";
import { Accordion, CourseModal } from "../components";
const DraftPage = () => {
  let [view, setView] = useState(false);
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
    <div className="flex w-full h-screen gap-10 debug">
      <div
        id="accordion"
        className="w-1/4 flex flex-col  items-center justify-start h-full border-2 border-primary "
      >
        <div id="accordion-element" className="relative w-full h-full group">
          <div
            id="label"
            className="w-full h-10 bg-red-600 text-white uppercase px-2"
          >
            Chapter 1 : Introduction
          </div>
          <div
            id="content"
            className="hidden transition-all duration-500  group-hover:block bg-dark text-dark"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur odit tenetur expedita praesentium perspiciatis?
              Possimus unde voluptatum repudiandae modi accusamus eos eligendi?
              Neque sit omnis officiis assumenda animi recusandae esse?
            </p>
          </div>
        </div>
        <div id="accordion-element" className="relative w-full h-full group">
          <div
            id="label"
            className="w-full h-10 bg-primary text-white uppercase px-2"
          >
            Chapter 1 : LIST
          </div>
          <div
            id="content"
            className="hidden transition-all duration-500  group-hover:block bg-dark text-dark"
          >
            <ul>
              <li className="hover:bg-black hover:text-white my-1 h-10 w-full">
                <p>Item</p>
              </li>
              <li className="hover:bg-black hover:text-white my-1 h-10 w-full">
                <p>Item</p>
              </li>
              <li className="hover:bg-black hover:text-white my-1 h-10 w-full">
                <p>Item</p>
              </li>
              <li className="hover:bg-black hover:text-white my-1 h-10 w-full">
                <p>Item</p>
              </li>
              <li className="hover:bg-black hover:text-white my-1 h-10 w-full">
                <p>Item</p>
              </li>
              <li className="hover:bg-black hover:text-white my-1 h-10 w-full">
                <p>Item</p>
              </li>
              <li className="hover:bg-black hover:text-white my-1 h-10 w-full">
                <p>Item</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="modals w-2/3 flex items-start justify-center pt-10">
        <div
          className="bg-primary px-4 py-2 text-white rounded-md"
          onClick={() => {
            showModal();
          }}
        >
          Button
        </div>
        <div>
          <CourseModal
            hideModal={hideModal}
            view={view}
            handleClose={handleClose}
            showModal={showModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DraftPage;
