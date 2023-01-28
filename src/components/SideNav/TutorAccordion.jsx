import React, { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import TutorAccordionItem from "./TutorAccordionItem";
import { ChapterForm } from "../../components";
import { faqs } from "./AccordionData";
import { IoMdAdd } from "react-icons/io";
const TutorAccordion = () => {
  const [chapterForm, setChapterForm] = useState(false);
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const showChapterForm = () => {
    setChapterForm(true);
  };

  const hideChapterForm = () => {
    setChapterForm(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-full bg-slate-200 m-1 rounded-lg list-none ">
        <div className="w-full px-2 py-2 font-bold text-lg text-slate-200 bg-primary text-center flex justify-start items-center gap-4 rounded-t-lg">
          <span className="text-white text-3xl">
            <AiOutlineAppstore />
          </span>
          <h1>DISCRETE MATHEMATICS</h1>
        </div>

        {faqs.map((faq, index) => (
          <TutorAccordionItem
            key={index}
            faq={faq}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
      </div>
      <button
        className="button  bg-primary text-white mt-1 ml-1 rounded-md border-none "
        onClick={() => {
          // console.log("Ready to add a new chapter");
          showChapterForm();
        }}
      >
        Add Chapter
        <span className="text-xl">
          <IoMdAdd className="text-secondary text-2xl" />
        </span>
      </button>
      <ChapterForm
        chapterForm={chapterForm}
        hideChapterForm={hideChapterForm}
      />
    </div>
  );
};

export default TutorAccordion;
