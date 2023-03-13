import React from "react";
const VideoComponent = ({ src, title, poster }) => {
  console.log(`Video Player activated ${src}`);
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <h1 className="font-bold text-black uppercase">{title}</h1>
      <p className="text-slate-400 font-medium text-lg">
        Ausin Mwangi , Mechanical Department
      </p>
      <video
        className="w-full aspect-video rounded-lg shadow-xl shadow-slate-500 "
        src={src}
        controls
      >
        This video is not supported by your browser.
      </video>
    </div>
  );
};

export default VideoComponent;
