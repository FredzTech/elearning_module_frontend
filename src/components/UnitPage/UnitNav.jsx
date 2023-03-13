import React from "react";

const UnitNav = () => {
  return (
    <div className="navigation flex flex-row w-full justify-start gap-10 items-center px-4 bg-slate-300 text-dark py-3  rounded-lg text-sm">
      <div className="tab cursor-pointer group">
        <div className="capitalize">Lecture Notes</div>
        <div className=" line h-1 rounded-md bg-primary  w-4 group-hover:w-full transition-all  "></div>
      </div>

      <div className="tab cursor-pointer group">
        <div className="capitalize">Resources</div>
        <div className=" line h-1 rounded-md bg-primary  w-4 group-hover:w-full transition-all  "></div>
      </div>
      <div className="tab cursor-pointer group">
        <div className="capitalize">Comments</div>
        <div className=" line h-1 rounded-md bg-primary  w-4 group-hover:w-full transition-all "></div>
      </div>
    </div>
  );
};

export default UnitNav;
