import React from "react";
import {
  UnitNav,
  VideoComponent,
  QuillEditorTutor,
  TutorAccordion,
  ChapterForm,
  LessonForm,
} from "../../components";
import "react-quill/dist/quill.snow.css";
import sampleVideo from "../../assets/sample-video.mp4";
import posterImage from "../../assets/video-player.png";

const TutorUnitPage = () => {
  return (
    <main className="flex w-full h-full">
      <article className="h-full flex flex-col rounded-lg ">
        {/* TO TAKE THE CHAPTERS, */}
        <TutorAccordion />
      </article>
      <article className="h-full overflow-y-scroll mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <VideoComponent
          poster={posterImage}
          src={sampleVideo}
          title="Introduction to Discrete Mathematics"
        />
        <UnitNav />
        <div className="mb-10">
          <QuillEditorTutor />
          {/* By default it should have the read only theme alafu ukipress edit ikuletee this theme with the editing tools */}
        </div>
        <div className="controls flex gap-5 text-white mx-auto">
          <button
            onClick={() => {}}
            className="py-3 w-36 bg-rose-600 border-none rounded-3xl"
          >
            Edit Notes
          </button>
          <button
            onClick={() => {}}
            className="py-3 w-36 bg-green-600  border-none rounded-3xl"
          >
            Save
          </button>
        </div>
      </article>
    </main>
  );
};

export default TutorUnitPage;
