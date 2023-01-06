import React from "react";
import { SubTopic, UnitHeading, SubNav } from "../components";
import videoPlayer from "../assets/video-player.png";
const UnitPage = () => {
  return (
    <div className="w-full h-screen">
      <main className="flex flex-row gap-5 w-full h-screen border-2 border-red-700 p-4">
        <article className="w-1/3 h-full flex px-2 flex-col rounded-lg ">
          {/* LIST CONTAINER. */}
          <div className="chaptersList h-full w-full flex flex-col gap-3 mt-2 p-4 shadow-lg shadow-primary  overflow-y-auto rounded-md">
            <UnitHeading />
            <SubTopic />
            <SubTopic />
            <SubTopic />
            <SubTopic />
            <SubTopic />
            <SubTopic />
            <SubTopic />
            <SubTopic />
            <SubTopic />
          </div>
        </article>

        <article className=" border-2 border-primary mt-2 w-2/3 flex px-2 flex-col  m-2 rounded-lg pb-2">
          <div className="video-content mt-4 w-full h-72 rounded-md">
            <img
              src={videoPlayer}
              className="w-full"
              alt="video player image"
            />
          </div>
          <SubNav />
          <div className="unit-content bg-gray-300 w-full h-1/2 rounded-md"></div>
        </article>
      </main>
      ;
    </div>
  );
};

export default UnitPage;
