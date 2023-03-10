import React, { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import AccordionItem from "./AccordionItem";
import { faqs } from "./AccordionData";

const Accordion = ({ unitData }) => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="w-full h-full bg-slate-200 m-1 rounded-lg list-none">
      <div className="w-full px-2 py-2 font-bold text-lg text-slate-200 bg-primary text-center flex justify-start items-center gap-4 rounded-t-lg">
        <span className="text-white text-3xl">
          <AiOutlineAppstore />
        </span>
        <h1>{unitData.unitName}</h1>
      </div>
      {unitData.unitChapters &&
        unitData.unitChapters.map((chapter, index) => (
          <AccordionItem
            key={`accordion-item-${index}`}
            chapter={chapter}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
    </div>
  );
};

export default Accordion;
