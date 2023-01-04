import React from "react";
import cardImage from "../assets/course-display.png";
const HomePageCard = () => {
  return (
    <div class="w-72 rounded shadow-md debug">
      <img class="w-full" src={cardImage} alt="Course Card" />
      <div class="px-6 py-4">
        <div class="font-bold text-lg mb-2">Discrete Mathematics</div>
        <p class="text-gray-700 text-base w-full truncate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default HomePageCard;
