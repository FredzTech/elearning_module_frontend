import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  console.log(`Role in context is ${JSON.stringify(auth)}`);
  // It can globally read our location b4 redirect.
  const location = useLocation();
  const from = location.pathname;
  const background = "/";

  console.log(`Require Auth location ${JSON.stringify(location)}`);

  // We are testing to see if the allowed roles includes the current role of the user saved in the context.
  return auth?.roles?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.roles ? (
    <Navigate
      to="/log-in"
      state={{ background: background, from: from }}
      replace
    />
  ) : (
    // This is the culprit that is causing everything to re-render... Its logic is really messing with some shit.
    <Navigate to="/forbidden" replace />
  );
};

export default RequireAuth;
