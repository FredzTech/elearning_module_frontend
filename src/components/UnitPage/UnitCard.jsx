import React from "react";
import sampleImage from "../../assets/unit-page.png";
const UnitCard = () => {
  return (
    <div className="border-2 border-red-500 bg-white text-black rounded-md shadow-md shadow-black w-64 flex flex-col h-full items-center justify-center p-1">
      <div className="image-container relative w-full p-1">
        <img className="w-full h-full" src={sampleImage} alt="Unit Image" />
        <div className="modal absolute inset-0 opacity-0 bg-black backdrop-blur-sm flex items-center justify-center group hover:opacity-40 z-10">
          <div className="tags opacity-0 group-hover:opacity-100 flex gap-5 items-center justify-center">
            <div className="bg-primary text-white z-20">Go to Unit</div>
          </div>
        </div>
      </div>
      <div className="relative body-container flex flex-col items-center justify-center w-full p-0.5">
        <div className="heading font-bold text-md pt-5  mb-2 capitalize">
          This is great.
        </div>
        <div className="par text-gray-700 text-sm w-full truncate">
          This is your boy alfred.
        </div>
        <div className="tag absolute top-[-19px] bg-white px-5 rounded-xl">
          Sample Tag
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
