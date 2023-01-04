import React from "react";
const HomePageCard = ({ heading, text, src }) => {
  return (
    <div className="w-72 rounded shadow-sm shadow-primary ">
      <img className="w-full" src={src} alt="Course Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{heading}</div>
        <p className="text-gray-700 text-base w-full truncate">{text}</p>
      </div>
    </div>
  );
};

export default HomePageCard;
