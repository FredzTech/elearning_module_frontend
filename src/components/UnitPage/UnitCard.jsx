import React from "react";
import sampleImage from "../../assets/unit-page.png";
const UnitCard = () => {
  return (
    <div className="bg-white text-black rounded-md shadow-md shadow-black w-[270px} flex flex-col h-full items-center justify-center p-1">
      <div className="image-container relative w-full p-1">
        <img className="w-full h-full" src={sampleImage} alt="Unit Image" />
        <div className="modal absolute inset-0 opacity-0 bg-black backdrop-blur-sm flex items-center justify-center hover:opacity-40">
          <div className="tags opacity-0 hover:opacity-100 flex gap-5 items-center justify-center">
            <span className="tag-1 opacity-0 hover:opacity-100 bg-white text-black">
              1
            </span>
            <span className="tag-2 opacity-0 hover:opacity-100 bg-white text-black">
              2
            </span>
          </div>
        </div>
      </div>
      <div className="relative body-container flex flex-col items-center justify-center w-full p-0.5">
        <div className="heading font-bold text-md  mb-2 capitalize">
          This is great.
        </div>
        <div className="par text-gray-700 text-sm w-full truncate">
          This is your boy alfred.
        </div>
        <div className="tag absolute top-[-25px]">Sample Tag</div>
      </div>
    </div>
  );
};

export default UnitCard;
