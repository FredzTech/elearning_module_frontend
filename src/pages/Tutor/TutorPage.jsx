import React, { useState } from "react";
import {
  TutorSideBar,
  TutorCardHome,
  ChapterModal,
  LessonModal,
} from "../../components";

const TutorPage = () => {
  return (
    <div className="flex-col-centered w-full">
      <div className="w-full text-lg text-center text-white bg-purple m-2 py-2 rounded-lg">
        NAVBAR WITH ICONS
      </div>
      <article className=" w-full h-full overflow-y-scroll  p-10 grid grid-cols-3 gap-5  ">
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
      </article>
    </div>
  );
};

export default TutorPage;
