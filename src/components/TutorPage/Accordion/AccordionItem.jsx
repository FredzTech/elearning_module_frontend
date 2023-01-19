import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  console.log(active);
  return (
    // If active is true , active class is added to the panel
    <div className={` w-full my-1 ${active ? "active" : ""}`}>
      <button className="button border-none px-2" onClick={onToggle}>
        {question}
        {/* Active class is use to update the sign. */}
        <span className="text-xl">
          {active ? <BsChevronDown /> : <BsChevronRight />}
        </span>
      </button>
      {/* Active also used to hide or close our accordion items body. */}
      <div
        className={`${
          active ? "h-auto" : "overflow-hidden h-0"
        }  flex-col-centered pl-3  list-none `}
      >
        {answer.map((item) => {
          return (
            <li className="hover:bg-slate-500 bg-slate-300  text-black w-full px-3 py-2 mt-0.5 capitalize">
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
        <li className="button">Add Lesson</li>
      </div>
    </div>
  );
};

export default AccordionItem;
