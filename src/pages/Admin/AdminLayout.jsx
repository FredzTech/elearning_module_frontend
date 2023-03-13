import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex w-full h-full sm:flex-col  ">
      <div className="h-full mx-3 mt-2 w-1/4 sm:w-screen">
        <Sidebar />
      </div>
      <div className="container w-3/4 h-full overflow-y-auto sm:w-screen">
        <div className="w-full text-lg text-center text-white bg-purple m-2 py-2 rounded-lg">
          NAVBAR WITH ICONS
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
