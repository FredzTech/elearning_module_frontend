import React, { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import TutorAccordionItem from "./TutorAccordionItem";
import { ChapterForm } from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";
const TutorAccordion = ({ unitData }) => {
  const location = useLocation();
  // USING THE CHAPTER ID WE CAN SHOW THE LESSONS.
  const { _id: unitID } = unitData;
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-full bg-slate-200 m-1 rounded-lg list-none ">
        <div className="w-full px-2 py-2 font-bold text-lg text-slate-200 bg-primary text-center flex justify-start items-center gap-4 rounded-t-lg">
          <span className="text-white text-3xl">
            <AiOutlineAppstore />
          </span>
          <h1>{unitData.unitName}</h1>
        </div>

        {unitData.unitChapters &&
          unitData.unitChapters.map((chapter, index) => (
            <TutorAccordionItem
              key={index}
              chapter={chapter}
              onToggle={() => handleToggle(index)}
              active={clicked === index}
            />
          ))}
      </div>
      <Link
        to="new-chapter"
        state={{ unitID: unitID, background: location }}
        className="button  bg-primary text-white mt-1 ml-1 rounded-md border-none"
      >
        Add Chapter
        <span className="text-xl">
          <IoMdAdd className="text-secondary text-2xl" />
        </span>
      </Link>
    </div>
  );
};

export default TutorAccordion;
