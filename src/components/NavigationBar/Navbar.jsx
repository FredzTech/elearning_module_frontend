import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const navigationLinks = [
  { name: "Home", destination: "/", current: false },
  { name: "EM-202", destination: "EM-202", current: false },
  { name: "Admin", destination: "admin", current: false },
  { name: "Subscription", destination: "pricing", current: false },
];
const Navbar = () => {
  const auth = useAuth();
  const location = useLocation();
  console.log("Navbar intercept");
  return (
    <nav className="w-full h-20 flex items-center justify-between bg-primary text-white px-2">
      <div id="section-1">E-LEARNING</div>
      <div id="section-2" className=" h-full flex">
        <Link to="/">
          <div className="navbar-link">Home</div>
        </Link>
        <Link to="/tutor">
          <div className="navbar-link">Tutor</div>
        </Link>
        <Link to="/admin">
          <div className="navbar-link">admin</div>
        </Link>
      </div>
      {auth ? (
        <div id="section-3" className="flex">
          <Link to="/log-in" state={{ background: location }}>
            <div className="navbar-link">Log In</div>
          </Link>
          <Link to="/new-student" state={{ background: location }}>
            <div className="navbar-link">Register</div>
          </Link>
        </div>
      ) : (
        <div id="section-3" className="flex">
          <Link to="/log-out" state={{ background: location }}>
            <div className="navbar-link">Log Out</div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
