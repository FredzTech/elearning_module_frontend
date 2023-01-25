import React from "react";
import { Link } from "react-router-dom";
import { AdminNavItem } from "../../components";
const AdminSideNav = () => {
  return (
    <div className="flex-col-centered w-full h-full debug rounded-md shadow-lg shadow-slate-400">
      <div className="flex-col-centered pt-5">
        <img className="avatar rounded-full w-[250px] h-[250px] bg-slate-400"></img>
        <div className="name capitalize mt-4 font-bold text-5xl">
          John Mwangi
        </div>
        <div className="role capitalize m-4 text-center text-white bg-primary  px-5 py-1 rounded-3xl font-bold text-lg">
          Admin
        </div>
      </div>
      <div id="Navigation" className="w-full h-full flex flex-col gap-1">
        {/* <AdminAccordion /> */}
        <AdminNavItem to="dashboard" text="dashboard" />
        <AdminNavItem to="students" text="students " />
        <AdminNavItem to="tutors" text="tutors" />
        {/* <AdminNavItem to="dashboard" text="dashboard" /> */}
      </div>
    </div>
  );
};

export default AdminSideNav;
