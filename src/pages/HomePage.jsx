import React from "react";
import { LandingSection, HomePageGrid } from "../components";
import Login from "./Login";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 w-screen">
        <LandingSection />

        {/* <HomePageGrid /> */}
      </div>
    </>
  );
};

export default HomePage;
