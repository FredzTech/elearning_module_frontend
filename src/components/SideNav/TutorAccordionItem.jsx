import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { LessonForm } from "../../components";
// It should be having the chapter name & the lessons.
const TutorAccordionItem = ({ faq, onToggle, active }) => {
  // const { openModal } = useModal();
  const [lessonForm, setLessonForm] = useState(false);

  const showLessonForm = () => {
    setLessonForm(true);
  };

  const hideLessonForm = () => {
    setLessonForm(false);
  };

  const contentEl = useRef(); //Used to interact with the dom accordigly.
  const { question, answer } = faq; //We are destructuring the individual items and kinda like spreading them out here.
  return (
    <li className="accordion_item">
      <button
        className="button  px-2 border-t-1 border-slate-300"
        onClick={onToggle}
      >
        {question}
        <span className="text-xl">
          {active ? <BsChevronDown /> : <BsChevronRight />}
        </span>
      </button>
      <ul
        ref={contentEl}
        className=" h-0 overflow-hidden transition-all ease-in-out duration-500 flex flex-col  px-2 "
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        {answer.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:bg-slate-500 bg-slate-300 text-black w-full px-3 py-2 my-0.5 capitalize rounded-md"
            >
              <Link to="./content">
                <div className="w-72 h-full flex gap-5 items-center">
                  <span className="text-sm">
                    <FaPlay />
                  </span>
                  {item}
                </div>
              </Link>
            </li>
          );
        })}
        <li className="hover:bg-slate-500 text-white px-3 py-2 capitalize bg-primary rounded-lg w-48 ml-auto  mt-2">
          <button
            onClick={() => {
              showLessonForm();
              console.log(lessonForm);
            }}
            className="w-full h-full flex justify-between gap-5 items-center"
          >
            Add Lesson
            <span className="text-sm">
              <IoMdAdd className="text-secondary text-2xl " />
            </span>
          </button>
        </li>
        <LessonForm hideLessonForm={hideLessonForm} lessonForm={lessonForm} />
      </ul>
    </li>
  );
};

export default TutorAccordionItem;
