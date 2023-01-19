import React, { useState } from "react";
import {
  TutorSideBar,
  TutorCardHome,
  ChapterModal,
  LessonModal,
} from "../components";

const TutorPage = () => {
  return (
    <main className="flex flex-row w-full h-screen">
      <article className="h-full flex  flex-col rounded-lg w-1/4 px-2 py-2 ">
        <TutorSideBar />
      </article>
      <article className="h-full overflow-y-scroll debug w-3/4 p-10 grid grid-cols-3 gap-5  ">
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />

        {/* This is already a modal */}
        <article className="flex flex-col gap-5"></article>
      </article>

      {/* Our Modals need to be on standby. */}
      {/* HOC helps us avoid all this repetition. */}
      {/* <article className="modals">
        <TestModal />
        <CourseModal />
        <ChapterModal />
        <LessonModal />
        <ResourcesModal />
        <UnitModal />
      </article> */}
    </main>
  );
};

export default TutorPage;
