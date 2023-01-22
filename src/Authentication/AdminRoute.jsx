import React, { useContext } from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import { UserdataContext } from "./AuthContextProvider";
import { UserContext } from "./AuthContextProvider";
import { Sidebar } from "../components/Admin/Sidebar";
import { useEffect } from "react";
import { Footer } from "../components";
export const AdminRoute = () => {
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
        <Sidebar />
      </div>
      <div className="container w-3/4 h-screen overflow-y-scroll sm:w-screen">
        <Outlet />

        <Footer className="w-full" />
      </div>
    </div>
  ) : (
    <Navigate to="forbidden" />
  );
};
