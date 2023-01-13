import React from "react";
import sampleVideo from "../../assets/sample-video.mp4";
const VideoComponent = ({ src, title, poster }) => {
  return (
    <div className="flex flex-col items-start justify-center  w-full h-full pt-2 p-2">
      <h1 className="font-bold text-xl  uppercase">{title}</h1>
      <p className="text-slate-400 font-medium text-lg">
        Ausin Mwangi , Mechanical Department
      </p>

      <video
        className=" mt-2 w-[850px]  h-auto flex rounded-lg shadow-xl shadow-slate-500 "
        // src="https://image-handle.s3.amazonaws.com/pol-1673267274311.mp4"
        src={sampleVideo}
        poster={poster}
        controls
      >
        This video is not supported by your browser.
      </video>
    </div>
  );
};

export default VideoComponent;
