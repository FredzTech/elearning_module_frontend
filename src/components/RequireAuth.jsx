import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  // It can globally read our location b4 redirect.
  const location = useLocation();
  const background = "/";

  // console.log(`Middleware state ${JSON.stringify(location)}`);
  // const from = location.state?.background;
  // console.log(auth);
  // We are testing to see if the allowed roles includes the current role of the user saved in the context.
  return auth?.roles?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    // <Navigate to="/login" state={{ from: location }} replace />
    <Navigate
      to="/log-in"
      state={{ background: background, from: location }}
      replace
    />
  ) : (
    // <Navigate to="/login" state={{ from: location }} replace />
    <Navigate
      to="/log-in"
      state={{ background: background, from: location }}
      replace
    />
  );
};

export default RequireAuth;
