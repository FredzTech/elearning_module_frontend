import { Chevron } from "../Icons";
import { sidebarData } from "../../constants";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const Sidebar = () => {
  const appendAccordionItem = (item, index) => {
    //Its our first point of contact to any object with the type attribute.
    // By default it return a nav item be it the title , link or a accordion children themselves depending on the case presented.
    const AccordionChildTemplate = (
      //Only runs when the item type is "group item."
      data,
      content,
      open,
      isFirst = false
    ) => {
      return (
        <div className="accordion-child ">
          {/* Playos out inside the accordion. */}
          <AccordionHeader className="w-full flex item-center justify-between px-4 py-3 text-white/70 hover:text-white transition-all duration-400">
            <div className="flex items-center space-x-3">
              {content}
              <span>{data.text}</span>
            </div>

            <Chevron
              className={`h-6 w-6 transition duration-300 ${
                open ? "rotate-90" : ""
              }`}
            />
          </AccordionHeader>

          <AccordionBody className={` ${!isFirst ? "" : "pl-8"}`}>
            {data.menu.map(appendAccordionItem)}
          </AccordionBody>
        </div>
      );
    };
    // ALWAYS RUNS IRREGARDLESS OF THE TYPE.
    // All the switch cases work on individual items depending on the "case" presented....If you do not get the joke forget about it mehn!
    switch (item.type) {
      case "unit":
        return (
          <li
            key={index}
            className="py-3 px-4 text-md text-start font-semibold text-white/30 uppercase list-none"
          >
            {item.text}
          </li>
        );
      case "lesson":
        return (
          <li className="list-none" key={index}>
            <a
              href={item.link}
              className="flex item-center space-x-3 text-sm text-white/70 px-4 py-3 hover:text-white transition-all duration-400"
            >
              <svg
                className="w-5 h-5 p-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{item.text}</span>
            </a>
          </li>
        );

      case "chapter":
        return (
          // This is where the real accordion is born.
          <AccordionItem key={index}>
            {/* A Callback Function to usher in the templating function. */}
            {({ open }) => (
              <>{AccordionChildTemplate(item, item.icon, open, true)}</>
            )}
          </AccordionItem>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-primary text-white w-full shadow-lg">
      <div className="mt-3 font-light h-screen">
        {/* JACKPOT */}
        <Accordion className="h- overflow-y-scroll h-full ">
          {sidebarData.map(appendAccordionItem)}
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
