import React from "react";
import { Link } from "react-router-dom";
const TutorCard = () => {
  return (
    <div className="flex-col-centered justify-start w-[300px] h-[300px] rounded-md shadow-md shadow-slate-400 debug">
      <div className="h-1/3 w-full bg-tutorCard flex-row-centered rounded-t-md">
        <h1 className="uppercase text-white font-extrabold">Thermodynamics</h1>
      </div>
      <div className="text h-1/3 flex-row-centered justify-evenly w-full">
        <div className="group flex-col-centered">
          <div className="sub text-sm font-light text-slate-500 capitalize">
            chapters
          </div>
          <div className="number font-extrabold text-2xl text-black">9</div>
        </div>
        <div className="group flex-col-centered">
          <div className="sub text-sm font-light text-slate-500 capitalize">
            lessons
          </div>
          <div className="number font-extrabold text-2xl text-black">58</div>
        </div>
        <div className="group flex-col-centered">
          <div className="sub text-sm font-light text-slate-500 capitalize">
            hours
          </div>
          <div className="number font-extrabold text-2xl text-black">240</div>
        </div>
      </div>
      <div className="cta flex flex-row-centered">
        <Link to="/unit">
          <div className="button">Go to Unit</div>
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
