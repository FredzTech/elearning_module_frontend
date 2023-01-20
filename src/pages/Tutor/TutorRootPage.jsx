import React, { useContext } from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  UserContext,
  UserdataContext,
} from "../../Authentication/AuthContextProvider";
import { TutorSideBar } from "../../components";
import { useEffect } from "react";
export const TutorRootPage = () => {
  const isAuthenticated = useContext(UserContext);
  const userData = useContext(UserdataContext);
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    if (userData.role === "Admin") {
      setAdmin(true);
    }
  }, []);

  return !isAdmin ? (
    <div className="flex w-screen h-screen sm:flex-col  ">
      <div className="container h-full mx-3 mt-2 w-1/4 sm:w-screen">
        <TutorSideBar />
      </div>
      <div className="container w-3/4 h-screen overflow-y-scroll sm:w-screen">
        <div className="w-full text-lg text-center text-white bg-purple m-2 py-2 rounded-lg">
          NAVBAR WITH ICONS
        </div>
        <Outlet />

        {/* <Footer className="w-full" /> */}
      </div>
    </div>
  ) : (
    <Navigate to="forbidden" />
  );
};
