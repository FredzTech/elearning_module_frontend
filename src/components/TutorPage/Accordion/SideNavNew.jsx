import React from "react";
import { Accordion } from "../../../components";
// IMPORTING STYLINE
import "../../../components/TutorPage/Accordion/accordion.css";
const SideNavNew = () => {
  return (
    <div className="py-2 h-full flex flex-col justify-start items-start">
      <Accordion />
    </div>
  );
};

export default SideNavNew;
