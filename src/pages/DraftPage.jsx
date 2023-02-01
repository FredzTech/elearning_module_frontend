import React from "react";
import { useNavigate, Outlet, useLocation, Link } from "react-router-dom";
const DraftPage = () => {
  const location = useLocation();
  return (
    <div className="w-full h-full bg-green-500">
      {/* Appends an object to the global state which is readable by the parent app component which manages our route. */}
      <Link to="modal" state={{ background: location }}>
        Open Modal
      </Link>
      <Outlet />
    </div>
  );
};

export default DraftPage;
