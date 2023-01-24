import React from "react";
import { Outlet, Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  console.log(auth);
  const location = useLocation();

  return auth?.roles?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/tutor-login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
