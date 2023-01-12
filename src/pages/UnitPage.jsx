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
    <main className="flex flex-row w-full h-full">
      <article className="w-1/4 h-full flex  flex-col rounded-lg ">
        {/* LIST CONTAINER. REPLACE WITH SIDE NAV. */}
        <SideBar />
        <UnitCard />
      </article>
      <article className="h-full border-2 border-primary mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <div className="video-content mt-4 w-full h-[550px] rounded-md border-red-700 border-2">
          {/* REPLACE WITH THE VIDEO COMPONENT. */}
          <VideoComponent
            poster={posterImage}
            src={sampleVideo}
            title="Default Title Mehn"
          />
        </div>
        <div>
          <SubNav />
        </div>

        <div className="unit-content bg-gray-300 w-full h-96 rounded-md"></div>
      </article>
    </main>
  );
};

export default UnitPage;
