import React from "react";
const VideoComponent = ({ src, title, poster }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full h-full pt-2">
      {/* <ReactPlayer url="https://image-handle.s3.amazonaws.com/pol-1673267274311.mp4" /> */}
      <h1 className="font-bold text-lg  uppercase">{title}</h1>

      <video
        className="w-[500px] h-auto flex rounded-lg shadow-xl shadow-slate-500 "
        src="https://image-handle.s3.amazonaws.com/pol-1673267274311.mp4"
        poster={poster}
        controls
      >
        This video is not supported by your browser.
      </video>
    </div>
  );
};

export default VideoComponent;
