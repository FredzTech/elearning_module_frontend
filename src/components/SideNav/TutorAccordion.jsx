import React, { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import TutorAccordionItem from "./TutorAccordionItem";
import { IoMdAdd } from "react-icons/io";
import { BiRefresh } from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";
const TutorAccordion = ({ unitData, fetchUnitData }) => {
  const location = useLocation();
  // USING THE CHAPTER ID WE CAN SHOW THE LESSONS.
  const unitID = unitData && unitData._id;
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
        <div className="flex items-center justify-between w-full px-2 py-2 font-bold text-lg text-slate-200 bg-primary text-center gap-4 rounded-t-lg">
          <span className="text-white text-3xl flex items-center justi">
            <AiOutlineAppstore />
          </span>
          <h1>{unitData && unitData.unitName}</h1>
          <div className="flex items-center justify-between w-16">
            <Link
              to={`/tutor/new-chapter/${unitID}`}
              state={{ background: location }}
            >
              <span
                className="text-white text-3xl rounded-lg hover:bg-slate-100 hover:text-black hover:cursor-pointer"
                onClick={() => {
                  fetchUnitData();
                }}
              >
                <IoMdAdd />
              </span>
            </Link>

            <span
              className="text-white text-3xl rounded-lg hover:bg-slate-100 hover:text-black hover:cursor-pointer"
              onClick={() => {
                fetchUnitData();
              }}
            >
              <BiRefresh />
            </span>
          </div>
        </div>

        {unitData && unitData.unitChapters
          ? unitData.unitChapters.map((chapter, index) => (
              <TutorAccordionItem
                key={`chapter-${index}`}
                chapter={chapter}
                onToggle={() => handleToggle(index)}
                active={clicked === index}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default TutorAccordion;
