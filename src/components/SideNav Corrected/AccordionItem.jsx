import { useRef } from "react";

const AccordionItem = ({ faq, onToggle, active }) => {
  const contentEl = useRef(); //Used to interact with the dom accordigly.
  const { question, answer } = faq; //We are destructuring the individual items and kinda like spreading them out here.
  return (
    <li className="accordion_item">
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{active ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
