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
    <main className="flex flex-row w-full h-full">
      <article className="h-full flex flex-col rounded-lg ">
        <TutorSideNav />
      </article>
      <article className="h-screen overflow-y-scroll mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <VideoComponent
          poster={posterImage}
          src={sampleVideo}
          title="Introduction to Discrete Mathematics"
        />
        <UnitNav />
        <div className="mb-10">
          <QuillEditorTutor />
        </div>
        <div className="controls flex gap-5 text-white ml-2">
          <button className="py-3 w-36 bg-rose-600 border-none">
            Edit Notes
          </button>
          <button className="py-3 w-36 bg-green-600  border-none ">Save</button>
        </div>
      </article>
    </main>
  );
};

export default TutorUnitPage;
