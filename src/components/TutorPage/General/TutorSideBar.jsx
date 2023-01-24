import React from "react";
import { AdminNavItem } from "../../../components";
const TutorSideBar = () => {
  const lists = [{ name: "Dashboard", link: "/tutor/dashboard" }];
  return (
    <div className="h-full rounded-lg  p-3 space-y-2 w-full bg-slate-200 sm:w-full sm:text-center">
      <div className="flex-col-centered pt-5">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          className="avatar rounded-full w-[170px] h-[170px]"
        ></img>
        <div className="name capitalize mt-4 font-bold text-3xl">
          Amos Einstein
        </div>
        <div className="role capitalize m-4 text-center text-white bg-primary px-7 py-0.5 rounded-3xl font-bold text-lg">
          tutor
        </div>
      </div>
      <div className="additionalInfo flex-col-centered w-full mt-10 gap-5">
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
      <div id="Navigation" className="w-full h-full flex flex-col gap-1 mt-10">
        {/* <AdminAccordion /> */}
        {lists.map((list, index) => {
          <AdminNavItem to={list.link} text={list.name} />;
        })}
      </div>
    </div>
  );
};

export default TutorSideBar;
