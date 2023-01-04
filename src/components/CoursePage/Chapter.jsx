import React from "react";

const Chapter = () => {
  return (
    <div className="chapter w-full debug flex flex-row items-start justify-between">
      <div className="w-40 h-24 bg-gray-700"></div>
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
