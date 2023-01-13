import React, { useState } from "react";
import { faqs } from "./data";
import TutorAccordionItem from "./TutorAccordionItem";
import { AiOutlineAppstore } from "react-icons/ai";

const TutorAccordion = () => {
  const [clicked, setClicked] = useState("0"); //WE can argue ndo inatumika kujua which item is active.

  const handleToggle = (index) => {
    //Returns a boolean true/False
    if (clicked == index) {
      // Tukiclick tena.... We set to false
      console.log("Option A running");
      return setClicked("0");
    } else {
      console.log("Option B running");
      return setClicked(index);
    }
    //Tukiclick kwingine..... clicked is updated with new index.
  };

  return (
    <div>
      <div className="bg-primary px-2 py-2 font-bold text-lg text-slate-200 text-center flex justify-start items-center gap-4">
        <span className="text-white text-3xl">
          <AiOutlineAppstore />
        </span>{" "}
        <h1>DISCRETE MATHEMATICS</h1>
      </div>
      {faqs.map((faq, index) => (
        //Map inakuja inarudia immediately the state changes... So we should see only active==true on one class.But the logic is repeated to all.
        <TutorAccordionItem
          key={index}
          faq={faq}
          onToggle={() => handleToggle(index)}
          active={clicked === index} //Returns a true/false.Used in styling.
        />
      ))}
      <div className="button">Add Chapter</div>
    </div>
  );
};

export default TutorAccordion;
