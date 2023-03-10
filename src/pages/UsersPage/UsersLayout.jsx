import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/NavigationBar";
import { Footer } from "../../components";

const UsersLayout = () => {
  return (
    <div className="flex flex-col w-full h-full sm:flex-col overflow-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UsersLayout;
