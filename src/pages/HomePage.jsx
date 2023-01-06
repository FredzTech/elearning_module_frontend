import React from "react";
import { NavigationBar, HomePageGrid } from "../components";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <HomePageGrid />
    </div>
  );
};

export default HomePage;
