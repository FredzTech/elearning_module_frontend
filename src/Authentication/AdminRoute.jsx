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
    <div className="flex flex-col w-screen h-full sm:flex-col  ">
      <div className="flex border-2 border-primary m-5">
        <div className="container h-screen  w-1/5 debug sm:w-screen">
          <Sidebar />
        </div>
        <div className="container w-4/5 h-screen overflow-auto sm:w-screen">
          <Outlet />

          {/* <Footer className="flex" /> */}
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="forbidden" />
  );
};
