import React from "react";

const TutorSideBar = () => {
  return (
    <div className="flex-col-centered w-full h-[400px] debug rounded-md shadow-lg shadow-slate-400">
      <div className="flex-col-centered pt-5">
        <img className="avatar rounded-full w-[130px] h-[130px] bg-slate-400"></img>
        <div className="name capitalize mt-2 font-bold text-xl">
          John Mwangi
        </div>
        <div className="role capitalize mb-4 text-slate-500 font-bold text-lg">
          tutor
        </div>
      </div>
      <div className="additionalInfo flex-col-centered w-full">
        <div className="flex-row-centered justify-evenly w-full">
          <div className="group flex-col-centered">
            <div className="sub text-sm font-light text-slate-500 capitalize">
              Total Units
            </div>
            <div className="number font-extrabold text-2xl text-black">9</div>
          </div>
          <div className="group flex-col-centered">
            <div className="sub text-sm font-light text-slate-500 capitalize">
              Total Lessons
            </div>
            <div className="number font-extrabold text-2xl text-black">65</div>
          </div>
        </div>
        <div className="flex-row-centered justify-center w-full">
          <div className="group flex-col-centered">
            <div className="sub text-sm font-light text-slate-500 capitalize">
              Total Video Time
            </div>
            <div className="number font-extrabold text-2xl text-black">45</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSideBar;
