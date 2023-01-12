import { Link } from "react-router-dom";
const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  return (
    // If active is true , active class is added to the panel
    <div className={`mt-0.5 ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        {question}
        {/* Active class is use to update the sign. */}
        <span className="text-xl">{active ? "—" : "+"} </span>
      </button>
      {/* Active also used to hide or close our accordion items body. */}
      <ul
        className={`h-0 overflow-hidden flex-col-centered pl-10 pr-2  ${
          active ? "h-auto" : ""
        }`}
      >
        {answer.map((item) => {
          return (
            <li className="hover:bg-black  text-white w-full px-3 py-2 mt-0.5 capitalize">
              <Link to="./content">
                <div className="w-72 h-full">{item}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccordionItem;
