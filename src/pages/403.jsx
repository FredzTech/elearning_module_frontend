import React from "react";
import Forbid from "../assets/403-Forbidden.gif";

function Forbidden() {
  return (
    <div>
      <img src={Forbid} alt="Forbidden image" className="w-screen h-full" />
    </div>
  );
}

export default Forbidden;
