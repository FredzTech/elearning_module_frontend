import React from "react";
import sampleVideo from "../../assets/sample-video.mp4";
const VideoComponent = ({ src, title, poster }) => {
  console.log(src);
  return (
    <div className="flex flex-col items-center justify-center pt-2 p-2">
      <h1 className="font-bold text-xl  uppercase">{title}</h1>
      <p className="text-slate-400 font-medium text-lg">
        Ausin Mwangi , Mechanical Department
      </p>

      <video
        className=" mt-2 w-[850px]  h-auto flex rounded-lg shadow-xl shadow-slate-500 "
        src={`http://localhost:4000/s3Direct/${src}`}
        poster={poster}
        controls
      >
        This video is not supported by your browser.
      </video>
    </div>
  );
};

export default VideoComponent;
