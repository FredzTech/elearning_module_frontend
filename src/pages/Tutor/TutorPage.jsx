import React from "react";
import { TutorCardHome } from "../../components";

// useEffect should kick in to fetch the units that this particular tutor is handling and give him/her the required rights to update content.
// The tutor should be getting the list of units that he / she commands.
const TutorPage = () => {
  return (
    <div className="flex-col-centered w-full h-full overflow-y-scroll">
      <article className=" w-full h-full  p-10 grid grid-cols-3 gap-5  ">
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
