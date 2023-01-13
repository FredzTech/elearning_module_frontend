import React from "react";
import { TutorSideBar, TutorCardHome } from "../components";

const TutorPage = () => {
  return (
    <main className="flex flex-row w-full h-screen">
      <article className="h-full flex  flex-col rounded-lg w-1/4 ">
        <TutorSideBar />
      </article>
      <article className="h-full overflow-y-scroll debug w-3/4 px-2 grid grid-cols-3 gap-5 ">
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
      </article>
    </main>
  );
};

export default TutorPage;
