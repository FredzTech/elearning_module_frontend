import React, { useEffect, useState } from "react";
import sampleVideo from "../../assets/sample-video.mp4";
import axios from "../../axios";
const VideoComponent = ({ src, title, poster }) => {
  const [videoData, setVideoData] = useState();
  console.log(`Video Player activated ${src}`);
  // Should happen on load of this component.
  // The fallback is on to explain the concept.
  const fetchVideoData = async () => {
    try {
      const { data, status } = await axios.get(`s3Direct/${src}`);
      console.log(
        "Video data fetch has commenced successfully on load of component."
      );

      if (status == 200) {
        setVideoData(data);
      }
    } catch (error) {
      console.log(
        `Error occured while fetching video data. ${JSON.stringify(error)}`
      );
    }
  };
  useEffect(() => {
    // fetchVideoData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center pt-2 p-2">
      <h1 className="font-bold text-xl  uppercase">{title}</h1>
      <p className="text-slate-400 font-medium text-lg">
        Ausin Mwangi , Mechanical Department
      </p>

      <video
        className=" mt-2 w-[850px]  h-auto flex rounded-lg shadow-xl shadow-slate-500 "
        src={src}
        poster={poster}
        controls
      >
        This video is not supported by your browser.
      </video>
    </div>
  );
};

export default VideoComponent;
