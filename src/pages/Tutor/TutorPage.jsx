import React, { useEffect, useState } from "react";
// We should send the access token to get the tutor data.
import { useAuth } from "../../context/AuthContext";
import { TutorCardHome } from "../../components";
import axios from "../../axios";
// We send the tutor credentials to server for processing and giving us feedback.

// useEffect should kick in to fetch the units that this particular tutor is handling and give him/her the required rights to update content.
// The tutor should be getting the list of units that he / she commands.
const TutorPage = () => {
  const [tutorUnits, setTutorUnits] = useState("");
  const { auth } = useAuth();
  // console.log(auth);
  useEffect(() => {
    fetchTutorDetails();
  }, []);
  const fetchTutorDetails = async () => {
    try {
      const { data, status } = await axios.get("/auth/tutor", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });

      if (status === 200) {
        setTutorUnits(data);
        console.log(tutorUnits);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex-col-centered w-full h-full overflow-y-scroll">
      <article className=" w-full h-full  p-10 grid grid-cols-3 gap-5  ">
        {tutorUnits &&
          tutorUnits.units.map((unit, index) => {
            <TutorCardHome key={index} unit={unit} />;
          })}
        {/* <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome />
        <TutorCardHome /> */}
      </article>
    </div>
  );
};

export default TutorPage;
