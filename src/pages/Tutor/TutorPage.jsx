import React from "react";
// We should send the access token to get the tutor data.
import { TutorCardHome } from "../../components";
import { useOutletContext } from "react-router-dom";
// We send the tutor credentials to server for processing and giving us feedback.
// useEffect should kick in to fetch the units that this particular tutor is handling and give him/her the required rights to update content.
// The tutor should be getting the list of units that he / she commands.
const TutorPage = () => {
  const tutorData = useOutletContext();
  return (
    <div className="flex flex-col items-start justify-start w-full h-full ">
      <article className="w-full max-h-full overflow-y-auto  py-3 px-4 grid grid-cols-3 gap-4  ">
        {tutorData &&
          tutorData.units.map((unit, index) => {
            return (
              <>
                <TutorCardHome key={index} unit={unit} />
              </>
            );
          })}
      </article>
    </div>
  );
};

export default TutorPage;
