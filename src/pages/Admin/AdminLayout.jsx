import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex w-screen h-screen sm:flex-col  ">
      <div className="container h-full mx-3 mt-2 w-1/4 sm:w-screen">
        <Sidebar />
      </div>
      <div className="container w-3/4 h-screen overflow-y-scroll sm:w-screen">
        <div className="w-full text-lg text-center text-white bg-purple m-2 py-2 rounded-lg">
          NAVBAR WITH ICONS
        </div>
        <Outlet />

        {/* <Footer className="w-full" /> */}
      </div>
    </div>
  );
};

export default AdminLayout;
