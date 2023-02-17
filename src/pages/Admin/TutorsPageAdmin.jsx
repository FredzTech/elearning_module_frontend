import React from "react";
import { TutorsAdminTable } from "../../components";

const TutorsPageAdmin = () => {
  // I do not have to trigger a rerender. I just have to configure useEffect correctly & I am done.
  return (
    <div>
      <div>
        <TutorsAdminTable />
      </div>
    </div>
  );
};

export default TutorsPageAdmin;
