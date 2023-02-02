import React from "react";
import { TutorAccordion } from "../../components";
import { unitData } from "../../components/SideNav/AccordionData";
import { Outlet } from "react-router-dom";
const TutorUnitPage = () => {
  return (
    <main className="flex w-full h-full">
      <article className="h-full flex flex-col rounded-lg ">
        <TutorAccordion unitData={unitData} />
      </article>
      <article className="h-full overflow-y-scroll mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <Outlet />
      </article>
    </main>
  );
};

export default TutorUnitPage;
