import React from "react";
import unitPage from "../../assets/unit-page.png";

const SubTopic = () => {
  // NUMBERING IS THE BEST OPTION.
  return (
    <div className="w-full flex flex-row items-start justify-between ">
      <div className="w-[120px] h-16 bg-gray-700">
        <img src={unitPage} className="w-full" alt="Sub Topic" />
      </div>
      <div className="flex flex-col justify-center items-start w-1/2">
        <h1 className="font-bold text-md  capitalize">SubTopic 1</h1>
        <p className="text-gray-700 text-sm w-full truncate">
          Propositional Logic Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Error maxime voluptatum rem fugiat quas nisi
          architecto corporis in similique porro, eos beatae, fugit sed vero
          veritatis, atque ullam exercitationem iure.
        </p>
      </div>
    </div>
  );
};

export default SubTopic;
