import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import sampleVideo from "../../assets/sample-video.mp4";
import posterImage from "../../assets/video-player.png";
import {
  SinglePage as SinglePageViewer,
  AudioPlayer,
  UnitNav,
  VideoComponent,
  QuillEditorStudent,
} from "../../components";
import samplePDF from "../../assets/Tensile_Test.pdf";
import sampleAudio from "../../assets/Bien_Inauma.webm";
import StriveToBe from "../../assets/Good_Day.mp3";

import "./SinglePage.css"

// CONSUMING A PDF FROM AN EXTERNAL URL
//======================================
const url =
  "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";

const ContentSection = ({ contentData }) => {
  // I want this section to come prefilled with the data.
  let { lessonId } = useParams();
  // THe content data should be bearing the content type and the url to access the resource.
  // The if statement will handle the return for us automatically. Thought it feels natural to use the switch statement.
  console.log(contentData);
  // VIDEO COMPONENT

  switch (lessonId) {
    case "video":
      return (
        <div className="w-full h-full bg-black text-center text-white flex-row-centered text-3xl font-extrabold">
          <VideoComponent
            poster={posterImage}
            src={sampleVideo}
            title="Introduction to Discrete Mathematics"
          />
          <UnitNav />
          <QuillEditorStudent />
        </div>
      );
      break;
    case "audio":
      return (
        <div className="w-full h-full text-center text-dark flex-row-centered text-3xl font-extrabold">
          <AudioPlayer url={sampleAudio} />
        </div>
      );
      break;
    case "pdf":
      return (
        <div className=" flex flex-col w-full bg-black h-full text-white flex-row-centered text-3xl font-extrabold">
          <SinglePageViewer pdf={samplePDF} />
        </div>
      );
      break;
    default:
      return (
        <div className="w-full h-full bg-rose-600 text-white flex-row-centered text-3xl font-extrabold">
          THis page has nothing to show
        </div>
      );
  }
};

export default ContentSection;
