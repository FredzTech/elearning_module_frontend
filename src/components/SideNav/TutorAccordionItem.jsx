import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BsChevronRight,
  BsChevronDown,
  BsMusicNoteBeamed,
  BsFileEarmarkPdf,
  BsCameraVideoFill,
} from "react-icons/bs";
import { RiSlideshowFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

// It should be having the chapter name & the lessons.
const TutorAccordionItem = ({ chapter, onToggle, active }) => {
  const location = useLocation();
  const { _id: chapterID } = chapter;

  const contentEl = useRef(); //Used to interact with the dom accordigly.
  const { chapterName, chapterLessons } = chapter; //We are destructuring the individual items and kinda like spreading them out here.
  return (
    <li className="accordion_item">
      <button
        className="button  px-2 border-t-1 border-slate-300"
        onClick={onToggle}
      >
        {chapterName}
        <div className="flex gap-3 items-center justify-between">
          <Link
            to={`/tutor/new-lesson/${chapterID}`}
            state={{ background: location }}
          >
            <span className="text-2xl">
              <IoMdAdd />
            </span>
          </Link>

          <span className="text-xl">
            {active ? <BsChevronDown /> : <BsChevronRight />}
          </span>
        </div>
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
        {chapterLessons.map((lesson, index) => {
          console.log(lesson);
          const { lessonType, _id: lessonID, lessonUrl } = lesson;

          return (
            <li
              key={index}
              className="hover:bg-slate-500 bg-slate-300 text-black w-full px-3 py-2 my-0.5 capitalize rounded-md"
            >
<<<<<<< HEAD
              <Link
                // To should be something like a number.
                to={lessonUrl}
                state={{
                  lessonType: lessonType,
                }}
              >
=======
              <Link to={lessonUrl}>
>>>>>>> polish_6
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

export default TutorAccordionItem;
