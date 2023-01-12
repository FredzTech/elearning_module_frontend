import React, { useState } from "react";
import {
  SubTopic,
  UnitHeading,
  SubNav,
  VideoComponent,
  SideNavNew,
  UnitCard,
} from "../components";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import sampleVideo from "../assets/sample-video.mp4";
import posterImage from "../assets/video-player.png";

const UnitPage = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <main className="flex flex-row w-full h-screen overflow-scroll">
      <article className="h-full flex  flex-col rounded-lg ">
        {/* LIST CONTAINER. REPLACE WITH SIDE NAV. */}
        <SideNavNew />
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

        <div className="unit-content  w-full h-full rounded-md">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </article>
    </main>
  );
};

export default UnitPage;
