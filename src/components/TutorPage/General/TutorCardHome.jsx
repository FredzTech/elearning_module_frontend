import React from "react";
import { Link } from "react-router-dom";

const TutorCard = ({ unit }) => {
  console.log(unit);
  return (
    <div className="flex-col-centered justify-start w-[300px] h-[300px] rounded-md shadow-md shadow-slate-400">
      <div className="h-1/3 w-full bg-primary flex-row-centered rounded-t-md">
        <h1 className="uppercase text-white font-extrabold">{unit.unitName}</h1>
      </div>
      <div className="text h-1/3 flex-row-centered justify-evenly w-full">
        <div className="group flex-col-centered">
          {/* <img className="w-10 h-10" src={chapter} alt="chapterIcon" /> */}
          <div className="number font-extrabold text-2xl text-black">
            {unit.unitChapters.length}
          </div>
          <div className="sub text-xs font-extraLight text-slate-500 capitalize">
            chapters
          </div>
        </div>
        <div className="group flex-col-centered">
          {/* <img className="w-10 h-10" src={LessonIcon} alt="chapterIcon" /> */}
          <div className="number font-extrabold text-2xl text-black">{50}</div>
          <div className="sub text-xs font-extraLight text-slate-500 capitalize">
            lessons
          </div>
        </div>
      </div>
      <div className="cta flex flex-row-centered">
        <Link to={`/tutor/unit/${unit._id}`}>
          <div className="button">Go to Unit</div>
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
