import React from "react";
import propositionalLogic from "../../assets/propositional-logic.png";

const Chapter = () => {
  return (
    <div className="chapter w-full border-2 shadow-sm shadow-gray-600 flex flex-row items-start justify-between bg-secondary">
      <div className="w-40 h-24 p-0.5">
        <img src={propositionalLogic} className="w-full" alt=" Chapter Image" />
      </div>
      <div>
        <h1 className="font-bold text-lg mb-2 capitalize">Chapter 1</h1>
        <p className="text-gray-700 text-base w-full truncate">
          Propositional Logic
        </p>
      </div>
      <div className="bg-gray-700 w-16 h-10"></div>
    </div>
  );
};

export default Chapter;
