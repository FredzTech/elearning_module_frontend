import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(`Location verification ${JSON.stringify(location)}`);

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/forbidden" state={{ from: location }} replace />
  ) : (
    <Navigate to="/log-in" state={{ background: location }} replace />
  );
};

export default RequireAuth;
