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
import posterImage from "../../assets/video-placeholder.jpg";

// Sample resources
const samplePDF =
  "https://kapesha001-demo.s3.ap-south-1.amazonaws.com/pol-1675866174132.pdf";
const sampleVideo =
  "https://kapesha001-demo.s3.ap-south-1.amazonaws.com/45b1f269541bf014a6ebc76666f22590.mp4";

const sampleAudio =
  "https://kapesha001-demo.s3.ap-south-1.amazonaws.com/e181dfcb46528793529605a0ea0640e2.webm";
const ContentSection = () => {
  const { lessonUrl } = useParams();
  const [lessonType, setLessonType] = useState(lessonUrl.split(".")[1]);
  // These can come as step 2 you know for secondary content.We find the lesson via the lesson url
  useEffect(() => {
    setLessonType(lessonUrl.split(".")[1]);
  }, [lessonUrl]);

  if (lessonType == "mp4") {
    return (
      <div className="w-full h-full text-center text-white flex flex-col justify-start border-2 border-black text-3xl font-extrabold">
        <VideoComponent
          poster={posterImage}
          src={`http://localhost:4000/s3Direct/${lessonUrl}`}
          title={`Simple Test`}
        />
        {/* Any additional content. */}
        {/* <UnitNav /> */}
        {/* <QuillEditorStudent /> */}
      </div>
    );
  } else if (lessonType == "mpeg" || lessonType == "mp3") {
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
