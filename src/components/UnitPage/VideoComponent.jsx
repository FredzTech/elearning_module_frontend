import React from "react";

const VideoComponent = ({ src, title, poster }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full h-full">
      <video className="w-full h-full" src={src} poster={poster} controls>
        This vide0 is not supported by your browser.
      </video>
      <h1 className="font-bold text-lg  mb-2 uppercase">{title}</h1>
    </div>
  );
};

export default VideoComponent;
