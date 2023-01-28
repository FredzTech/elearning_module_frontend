import React from "react";
import { TutorCardHome } from "../../components";

const TutorPage = () => {
  return (
    <div className="flex-col-centered w-full">
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
