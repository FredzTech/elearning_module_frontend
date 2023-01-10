import React from "react";

const VideoComponent = ({ src, title, poster }) => {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <video src={src} poster={poster} width="100%" height="100%" controls>
        This vide is not supported by your browser.
      </video>
      <h1 className="font-bold text-md  mb-2 capitalize">{title}</h1>
    </div>
  );
};

export default VideoComponent;
