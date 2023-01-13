import React from "react";
import { TutorAccordion } from "../../../components";
// IMPORTING STYLINE
import "../../../components/TutorPage/Accordion/accordion.css";
const SideNavNew = () => {
  return (
    <div className="px-2 debug h-full flex flex-col justify-start items-start">
      <TutorAccordion />
    </div>
  );
};

export default SideNavNew;
