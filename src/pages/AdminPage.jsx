import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSideNav } from "../components";
import { AdminDashboard } from "../pages";
const AdminPage = () => {
  return (
    <div className="flex w-screen  h-screen">
      <div id="sidebar" className="w-1/4 h-full">
        <AdminSideNav />
      </div>
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
