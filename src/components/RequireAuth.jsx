import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  // console.log(auth);
  // We are testing to see if the allowed roles includes the current role of the user saved in the context.
  return auth?.roles?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/tutor-login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
