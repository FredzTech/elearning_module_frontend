import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  BsChevronRight,
  BsChevronDown,
  BsMusicNoteBeamed,
  BsFileEarmarkPdf,
  BsCameraVideoFill,
} from "react-icons/bs";

import { RiSlideshowFill } from "react-icons/ri";
const AccordionItem = ({ chapter, onToggle, active }) => {
  const contentEl = useRef(); //Used to interact with the dom accordigly.
  const { chapterName, chapterLessons } = chapter; //We are destructuring the individual items and kinda like spreading them out here.
  return (
    <li className="accordion_item">
      <button
        className="button  px-2 border-t-1 border-slate-300"
        onClick={onToggle}
      >
        {chapterName}
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
        {chapterLessons.map((lesson, index) => {
          const { lessonType, lessonUrl, lessonName } = lesson;
          return (
            <li
              key={`lesson-${index}`}
              className="hover:bg-slate-500 bg-slate-300  text-black w-full px-3 py-2 mt-0.5 capitalize"
            >
              <Link
                key={index}
                // To should be something like a number.
                to={lesson.lessonType}
                state={{
                  lessonUrl: lessonUrl,
                  lessonType: lessonType,
                  lessonName: lessonName,
                }}
              >
                <div className="w-72 h-full flex gap-5 items-center">
                  {lesson.lessonType === "video" ? (
                    <span className="text-sm">
                      <BsCameraVideoFill />
                    </span>
                  ) : lesson.lessonType === "audio" ? (
                    <span className="text-sm">
                      <BsMusicNoteBeamed />
                    </span>
                  ) : lesson.lessonType === "pdf " ? (
                    <span className="text-sm">
                      <BsFileEarmarkPdf />
                    </span>
                  ) : (
                    <span className="text-sm">
                      <RiSlideshowFill />
                    </span>
                  )}

                  {lesson.lessonName}
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
