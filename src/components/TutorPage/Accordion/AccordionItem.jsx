import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  console.log(active);
  return (
    // If active is true , active class is added to the panel
    <div className={` w-full mt-0.5 ${active ? "active" : ""}`}>
      <button
        className="sidebar-button px-2 border-b-2 border-b-white"
        onClick={onToggle}
      >
        {question}
        {/* Active class is use to update the sign. */}
        <span className="text-xl">
          {active ? <BsChevronDown /> : <BsChevronRight />}
        </span>
      </button>
      {/* Active also used to hide or close our accordion items body. */}
      <ul
        className={`${
          active ? "h-auto" : "overflow-hidden h-0"
        }  flex-col-centered pl-10 pr-2 `}
      >
        {answer.map((item) => {
          return (
            <li className="border-l-4 border-l-slate-600 hover:bg-slate-500 bg-slate-300  text-black w-full px-3 py-2 mt-0.5 capitalize">
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
        <li className="sidebar-action-button">Add Lesson</li>
      </ul>
    </div>
  );
};

export default AccordionItem;
