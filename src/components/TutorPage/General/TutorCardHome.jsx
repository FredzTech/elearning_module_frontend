import React from "react";

const TutorCard = () => {
  return (
    <div className="flex-col-centered w-[200px] h-[300px] rounded-md shadow-md shadow-slate-400">
      <div className="h-1/3 w-full bg-tutorCard flex-row-centered rounded-t-md">
        <h1 className="uppercase text-black font-extrabold">Thermodynamics</h1>
      </div>
      <div className="text h-2/3 flex-row-centered justify-evenly">
        <div className="group flex-col-centered">
          <div className="number font-extrabold text-lg text-black">9</div>
          <div className="sub text-sm font-light text-slate-500 capitalize">
            chapters
          </div>
        </div>
        <div className="group flex-col-centered">
          <div className="number font-extrabold text-lg text-black">58</div>
          <div className="sub text-sm font-light text-slate-500 capitalize">
            lessons
          </div>
        </div>
        <div className="group flex-col-centered">
          <div className="number font-extrabold text-lg text-black">240</div>
          <div className="sub text-sm font-light text-slate-500 capitalize">
            hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
