import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { TutorSideBar } from "../../components";
import { useAuth } from "../../context/AuthContext";
import axios from "../../axios";
const TutorLayout = () => {
  const [tutorData, setTutorData] = useState(null);
  const { auth } = useAuth();
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
        console.log(data);
        setTutorData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex w-full h-full sm:flex-col  ">
      <div className="container h-full px-2 w-1/4 sm:w-full">
        <TutorSideBar tutor={tutorData} />
      </div>
      <div className="container w-3/4 max-h-full overflow-y-scroll sm:w-screen ">
        <div className="w-full text-lg text-center text-white my-2 py-2 bg-primary rounded-lg">
          NAVBAR WITH ICONS
        </div>
        <Outlet context={tutorData} />
      </div>
    </div>
  );
};

export default TutorLayout;
