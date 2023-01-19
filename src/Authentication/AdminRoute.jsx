import React, { useContext } from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import { UserdataContext } from "./AuthContextProvider";
import { UserContext } from "./AuthContextProvider";
import { Sidebar } from "../components/Admin/Sidebar";
import { useEffect } from "react";
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
    <div className="flex w-screen sm:flex-col">
      <div className="container w-1/5 debug sm:w-screen">
        <Sidebar />
      </div>
      <div className="container w-4/5 sm:w-screen">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="forbidden" />
  );
};
