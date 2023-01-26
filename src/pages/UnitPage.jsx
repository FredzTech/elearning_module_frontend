import React from "react";
import {
  UnitNav,
  VideoComponent,
  QuillEditorStudent,
  // SideNavNew,
} from "../components";
// import { Accordion } from "../components";
import "react-quill/dist/quill.snow.css";
import Accordion from "../components/SideNav Corrected/Accordion";
import sampleVideo from "../assets/sample-video.mp4";
import posterImage from "../assets/video-player.png";

const UnitPage = () => {
  return (
    <main className="flex flex-row w-full h-full overflow-y-scroll">
      {/* <article className="h-full flex  flex-col rounded-lg "> */}
      {/* <SideNavNew /> */}
      <article className="h-full w-1/4  flex  flex-col rounded-lg ">
        <Accordion />
      </article>
      <article className="h-full overflow-y-scroll mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <VideoComponent
          poster={posterImage}
          src={sampleVideo}
          title="Introduction to Discrete Mathematics"
        />
        <UnitNav />
        <QuillEditorStudent />
      </article>
    </main>
  );
};

export default UnitPage;
