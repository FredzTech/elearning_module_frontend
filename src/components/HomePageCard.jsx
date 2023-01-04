import React from "react";
import cardImage from "../assets/course-display.png";
const HomePageCard = ({ heading, paragraph, image }) => {
  return (
    <div class="w-72 rounded shadow-md debug">
      <img class="w-full" src={image} alt="Course Card" />
      <div class="px-6 py-4">
        <div class="font-bold text-lg mb-2">{Heading}</div>
        <p class="text-gray-700 text-base w-full truncate">{paragraph}</p>
      </div>
    </div>
  );
};

export default HomePageCard;
