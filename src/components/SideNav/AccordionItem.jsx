import { useRef } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
const AccordionItem = ({ faq, onToggle, active }) => {
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
        className=" h-0 overflow-hidden transition-all ease-in-out duration-500"
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
              className="hover:bg-slate-500 bg-slate-300  text-black w-full px-3 py-2 mt-0.5 capitalize"
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
      </ul>
    </li>
  );
};

export default AccordionItem;
