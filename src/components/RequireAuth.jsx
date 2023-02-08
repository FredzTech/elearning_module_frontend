import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(
    `Require Auth kicked for destination ${JSON.stringify(
      location.pathname
    )}  State ${JSON.stringify(location.state)}`
  );

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/forbidden" state={{ from: location }} replace />
  ) : (
    <Navigate
      to="/log-in"
      state={{ from: location, background: "/" }}
      replace
    />
  );
};

export default RequireAuth;
