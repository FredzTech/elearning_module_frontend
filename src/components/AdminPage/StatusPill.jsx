import React from "react";

const StatusPill = ({ status }) => {
  return (
    <div className="flex items-center justify-center rounded-2xl w-32">
      <p
        className={`w-full flex items-center justify-center rounded-2xl text-white text-lg capitalize px-3 py-0.5 ${
          status == "active" ? "bg-green-500" : "bg-rose-500"
        }`}
      >
        {status}
      </p>
    </div>
  );
};

export default StatusPill;
