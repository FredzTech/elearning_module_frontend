import React from "react";
import { SinglePage } from "../components";
// Sample resources
// import samplePDF from "../assets/Tensile_Test.pdf";
const samplePDF =
  "https://kapesha001-demo.s3.ap-south-1.amazonaws.com/pol-1675866174132.pdf";
const sampleVideo =
  "https://kapesha001-demo.s3.ap-south-1.amazonaws.com/45b1f269541bf014a6ebc76666f22590.mp4";
const sampleAudio =
  "https://kapesha001-demo.s3.ap-south-1.amazonaws.com/e181dfcb46528793529605a0ea0640e2.webm";
const lessonName =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, nostrum!";
// import sampleAudio from "../assets/Bien_Inauma.webm";
// import StriveToBe from "../assets/Good_Day.mp3";
// import sampleVideo from "../assets/sample-video.mp4";
import posterImage from "../assets/video-placeholder.jpg";
import {
  SinglePage as SinglePageViewer,
  AudioPlayer,
  UnitNav,
  VideoComponent,
  QuillEditorStudent,
  PdfViewer,
} from "../components";

const DraftPage = () => {
  return (
    <div className="">
      {/* <SinglePage pdf={samplePDF} /> */}
      {/* <PdfViewer pdf={samplePDF} /> */}
      {/* <VideoComponent
        poster={posterImage}
        src={sampleVideo}
        title="Introduction to Discrete Mathematics"
      /> */}

      <AudioPlayer url={sampleAudio} lessonName={lessonName} />
    </div>
  );
};

export default DraftPage;
