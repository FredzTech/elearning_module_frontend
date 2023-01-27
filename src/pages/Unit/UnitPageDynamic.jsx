import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UnitNav, VideoComponent, QuillEditorStudent } from "../../components";
import "react-quill/dist/quill.snow.css";
import axios from "../../axios";
import Accordion from "../../components/SideNav/Accordion";
import sampleVideo from "../../assets/sample-video.mp4";
import posterImage from "../../assets/video-player.png";

const UnitPageDynamic = () => {
  const { unitId } = useParams();

  const fetchUnitData = async (unitId) => {
    try {
      console.log(unitId);
      const { data } = await axios.get(`/unit/${unitId}`);
      console.log("Unit data for distribution inside accordion");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUnitData(unitId);
  }, []);
  return (
    <main className="flex flex-row w-full h-full overflow-y-scroll">
      {/* <article className="h-full flex  flex-col rounded-lg "> */}
      {/* <SideNavNew /> */}
      <article className="h-full w-1/4  flex  flex-col rounded-lg ">
        {/* CHAPTER & LESSON DATA NEEDS TO TRICKLE DOWN FROM HERE. */}
        <Accordion />
      </article>
      <article className="h-full overflow-y-scroll mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <VideoComponent
          poster={posterImage}
          src={sampleVideo}
          title="Introduction to Discrete Mathematics"
        />
        <UnitNav />
        <QuillEditorStudent />
      </article>
    </main>
  );
};

export default UnitPageDynamic;
