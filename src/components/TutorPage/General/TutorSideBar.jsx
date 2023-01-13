import React from "react";

const TutorSideBar = () => {
  return (
    <div className="flex-col-centered w-[500px]">
      <div className="flex-col-centered pt-5">
        <img className="avatar rounded-full w-[130px] h-[130px] bg-slate-400"></img>
        <div className="name capitalize mt-2 font-bold text-xl">
          John Mwangi
        </div>
        <div className="role capitalize mb-4 text-slate-500 font-bold text-lg">
          tutor
        </div>
      </div>
      <div className="additionalInfo flex-col-centered w-full border-t-2 border-t-black">
        <div className="flex-row-centered justify-evenly w-full">
          <div className="group flex-col-centered">
            <div className="sub text-sm font-light text-slate-500 capitalize">
              Total Units
            </div>
            <div className="number font-extrabold text-lg text-black">9</div>
          </div>
          <div className="group flex-col-centered">
            <div className="sub text-sm font-light text-slate-500 capitalize">
              Total Lessons
            </div>
            <div className="number font-extrabold text-lg text-black">9</div>
          </div>
        </div>
        <div className="flex-row-centered justify-center w-full">
          <div className="group flex-col-centered">
            <div className="sub text-sm font-light text-slate-500 capitalize">
              Total Video Time
            </div>
            <div className="number font-extrabold text-lg text-black">9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSideBar;
