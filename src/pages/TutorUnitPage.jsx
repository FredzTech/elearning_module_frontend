import React from "react";
import {
  UnitNav,
  VideoComponent,
  QuillEditorTutor,
  TutorSideNav,
} from "../components";

import "react-quill/dist/quill.snow.css";

import sampleVideo from "../assets/sample-video.mp4";
import posterImage from "../assets/video-player.png";

const TutorUnitPage = () => {
  return (
    <main className="flex flex-row w-full h-screen overflow-y-scroll">
      <article className="h-full flex  flex-col rounded-lg ">
        <TutorSideNav />
      </article>
      <article className="h-screen overflow-y-scroll border-2 border-primary mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <VideoComponent
          poster={posterImage}
          src={sampleVideo}
          title="Introduction to Discrete Mathematics"
        />
        <UnitNav />

        <QuillEditorTutor />
      </article>
    </main>
  );
};

export default TutorUnitPage;
