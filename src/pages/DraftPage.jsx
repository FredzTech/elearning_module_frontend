import React from "react";
import { useNavigate, Outlet, useLocation, Link } from "react-router-dom";
const DraftPage = () => {
  const location = useLocation();
  return (
    <div className="w-full h-full bg-green-500 flex ">
      <div id="nav">
        <Link to="modal" state={{ background: location }}>
          <div className="button">Open Modal</div>
        </Link>
        <Link to="homepage" state={{ background: location }}>
          <div className="button">Home Page</div>
        </Link>
        <Link to="newpage" state={{ background: location }}>
          <div className="button">New Page</div>
        </Link>
      </div>
      <div id="nav"></div>
      {/* Appends an object to the global state which is readable by the parent app component which manages our route. */}
      <Link to="modal" state={{ background: location }}>
        Open Modal
      </Link>
      <Outlet />
    </div>
  );
};

export default DraftPage;
