import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import {
  SinglePage as SinglePageViewer,
  AudioPlayer,
  UnitNav,
  VideoComponent,
  QuillEditorStudent,
} from "../../components";
import "./SinglePage.css";
const ContentSection = () => {
  const { lessonUrl } = useParams();
  const [lessonType, setLessonType] = useState(lessonUrl.split(".")[1]);
  useEffect(() => {
    setLessonType(lessonUrl.split(".")[1]);
  }, [lessonUrl]);

  if (lessonType == "mp4") {
    return (
      <div className="w-full h-full text-center text-white flex flex-col justify-start text-3xl font-extrabold">
        <VideoComponent
          src={`http://localhost:4000/s3Direct/${lessonUrl}`}
          title={`Simple Test`}
        />
        {/* Any additional content. */}
        <UnitNav />
        <QuillEditorStudent />
      </div>
    );
  } else if (
    lessonType == "mpeg" ||
    lessonType == "mp3" ||
    lessonType == "webm"
  ) {
    return (
      <div className="w-full h-full text-center text-dark flex-row-centered text-3xl font-extrabold">
        <AudioPlayer
          url={`http://localhost:4000/s3Direct/${lessonUrl}`}
          lessonName={"Simple Audio Test."}
        />
      </div>
    );
  } else if (lessonType == "pdf") {
    return (
      <div className=" flex flex-col w-full  h-full text-dark">
        <SinglePageViewer pdf={`http://localhost:4000/s3Direct/${lessonUrl}`} />
      </div>
    );
  }
};

export default ContentSection;
