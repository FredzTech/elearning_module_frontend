import React from "react";
const TutorSideBar = () => {
  return (
    <div className="h-full rounded-lg w-full bg-slate-200">
      <div className="flex-col-centered pt-5">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          className="avatar rounded-full w-[170px] h-[170px]"
        ></img>
        <div className="name capitalize mt-4 font-bold text-3xl">
          Amos Einstein
        </div>
        <div className="capitalize flex-col-centered  text-white bg-primary px-6 py-0.5 rounded-3xl font-bold text-lg">
          tutor
        </div>
      </div>
      <div className="flex-col-centered w-full mt-10 gap-5">
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
        <div className="group flex-col-centered w-full">
          <div className="text-sm font-light text-slate-500 capitalize">
            Account Status
          </div>
          <div className="number font-extrabold text-2xl text-black">
            Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSideBar;
