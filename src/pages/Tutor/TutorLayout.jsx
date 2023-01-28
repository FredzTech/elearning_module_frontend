import React from "react";
import { Outlet } from "react-router-dom";
import { TutorSideBar } from "../../components";

const TutorLayout = () => {
  return (
    <div className="flex w-screen h-screen sm:flex-col border-2 border-red-600  ">
      <div className="container h-full mx-3 mt-2 w-1/4 sm:w-screen py-2">
        <TutorSideBar />
      </div>
      <div className="container w-3/4 h-full overflow-y-scroll sm:w-screen">
        <div className="w-full text-lg text-center text-white bg-purple m-2 py-2 rounded-lg">
          NAVBAR WITH ICONS
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default TutorLayout;
