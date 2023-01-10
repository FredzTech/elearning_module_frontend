import React from "react";
import {
  SubTopic,
  UnitHeading,
  SubNav,
  VideoComponent,
  SideBar,
  UnitCard,
} from "../components";
import sampleVideo from "../assets/sample-video.mp4";
import posterImage from "../assets/video-player.png";
const UnitPage = () => {
  return (
    <div className="w-full h-screen">
      <main className="flex flex-row gap-5 w-full h-screen p-4">
        <article className="w-1/3 h-full flex px-2 flex-col rounded-lg ">
          {/* LIST CONTAINER. REPLACE WITH SIDE NAV. */}
          <SideBar />
          <UnitCard />
        </article>

        <article className=" border-2 border-primary mt-2 w-2/3 flex px-2 flex-col  m-2 rounded-lg pb-2">
          <div className="video-content mt-4 w-full h-72 rounded-md">
            {/* REPLACE WITH THE VIDEO COMPONENT. */}
            <VideoComponent
              poster={posterImage}
              src={sampleVideo}
              title="Default Title Mehn"
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
