import React, { useState } from "react";
import { faqs } from "./data";
import AccordionItem from "./AccordionItem";
import { AiOutlineAppstore } from "react-icons/ai";

const Accordion = () => {
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
    <div className="flex-col-centered justify-start debug w-full h-full bg-primary">
      <div className="w-full px-2 py-2 font-bold text-lg text-slate-200 text-center flex justify-start items-center gap-4">
        <span className="text-white text-3xl">
          <AiOutlineAppstore />
        </span>
        <h1>DISCRETE MATHEMATICS</h1>
      </div>
      {faqs.map((faq, index) => (
        //Map inakuja inarudia immediately the state changes... So we should see only active==true on one class.But the logic is repeated to all.
        <AccordionItem
          key={index}
          faq={faq}
          onToggle={() => handleToggle(index)}
          active={clicked === index} //Returns a true/false.Used in styling.
        />
      ))}
    </div>
  );
};

export default Accordion;
