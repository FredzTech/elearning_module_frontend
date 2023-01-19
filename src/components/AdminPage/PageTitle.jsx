import React from "react";

const PageTitle = ({ text }) => {
  return (
    <div className="text-4xl text-slate-500 font-bold w-full pl-10 text-center uppercase">
      {text}
    </div>
  );
};

export default PageTitle;
