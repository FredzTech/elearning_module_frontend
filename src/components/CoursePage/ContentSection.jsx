import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import axios from "../../axios";
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
const lessonName =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, nostrum!";
const ContentSection = () => {
  // const location = useLocation();
  // const { lessonId } = useParams();
  // THe lesson url is enough to give me details about the lesson type.
  const { lessonUrl } = useParams();
  console.log(`lesson Url Present in the content section ${lessonUrl}`);

  const initialType = lessonUrl.split(".")[1];
  console.log(
    `lesson Type first detected in the content section ${initialType}`
  );

  const [lessonType, setLessonType] = useState(initialType);

  console.log(`The official lesson type ${lessonType}`);

  // const fetchLesson = async () => {
  //   console.log(`New Commands received ${lessonId}`);
  //   const { data, status } = await axios.get(`/lesson/${lessonId}`);
  //   try {
  //     if (status == 200) {
  //       let fileType = lessonData.lessonUrl.split(".")[1];
  //       console.log(fileType);
  //       setLessonData(data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // Every time a rerender occurs.
  useEffect(() => {
    console.log("The lesson has changed.");
    let newType = lessonUrl.split(".")[1];
    setLessonType(newType);
    // fetchLesson();
  }, [lessonUrl]);
  // Reading our state.
  // console.log(`Current Lesson data ${JSON.stringify(lessonData)}`);
  // const lessonUrl = (location.state && location.state.lessonUrl) || null;
  // const lessonType = (location.state && location.state.lessonType) || null;
  switch (lessonType) {
    case "mp4":
      return (
        <div className="w-full h-full text-center text-white flex flex-col justify-start border-2 border-black text-3xl font-extrabold">
          {/* version 1 */}
          {/* <VideoComponent
            poster={posterImage}
            src={lessonData.lessonUrl}
            title={lessonData && lessonData.lessonName}
          /> */}
          {/* Version 2 */}
          <VideoComponent
            poster={posterImage}
            src={`http://localhost:4000/s3Direct/${lessonUrl}`}
            title={`Simple Test`}
          />
          {/* <UnitNav /> */}
          {/* <QuillEditorStudent /> */}
        </div>
      );
      break;
    case "mpeg":
      return (
        <div className="w-full h-full text-center text-dark flex-row-centered text-3xl font-extrabold">
          {/* Version 1 */}
          {/* <AudioPlayer
            url={lessonData && lessonData.lessonUrl}
            lessonName={lessonData && lessonData.lessonName}
          /> */}
          {/* Version 2 */}
          <AudioPlayer
            url={`http://localhost:4000/s3Direct/${lessonUrl}`}
            lessonName={"Simple Audio Test."}
          />
        </div>
      );
      break;
    case "pdf":
      return (
        <div className=" flex flex-col w-full  h-full text-dark">
          {/* Version 1 */}
          {/* <SinglePageViewer
            pdf={
              lessonData &&
              `http://localhost:4000/s3Direct/${lessonData.lessonUrl}`
            }
          /> */}

          {/* Version 2 */}
          <SinglePageViewer
            pdf={`http://localhost:4000/s3Direct/${lessonUrl}`}
          />
        </div>
      );
      break;
    default:
      return (
        <div className="w-full h-full bg-rose-600 text-white flex-row-centered text-3xl font-extrabold">
          This page has nothing to show
        </div>
      );
  }
};

export default ContentSection;
