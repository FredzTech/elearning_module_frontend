import React, { useState } from "react";
import { faqs } from "./data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [clicked, setClicked] = useState("0"); //WE can argue ndo inatumika kujua which item is active.

  const handleToggle = (index) => {
    //Returns a boolean true/False

    if (clicked === index) {
      // Tukiclick tena.... We set to false
      return setClicked("0");
    }
    setClicked(index); //Tukiclick kwingine..... clicked is updated with new index.
  };

  return (
    <div className="bg-primary">
      <h1>DISCRETE MATHEMATICS</h1>
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
