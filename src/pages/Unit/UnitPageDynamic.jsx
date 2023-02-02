import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { Accordion } from "../../components";
import axios from "../../axios";
const UnitPageDynamic = () => {
  const { unitId } = useParams();
  const [unitData, setUnitData] = useState({});
  const fetchUnitData = async (unitId) => {
    try {
      const { data } = await axios.get(`/unit/${unitId}`);
      console.log("Unit data for distribution inside accordion");
      console.log(data);
      setUnitData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUnitData(unitId);
  }, []);
  return (
    <main className="flex flex-row w-full h-full overflow-y-scroll">
      {/* <article className="h-full flex  flex-col rounded-lg "> */}
      {/* <SideNavNew /> */}
      <article className="h-full w-1/4  flex  flex-col rounded-lg ">
        {/* CHAPTER & LESSON DATA NEEDS TO TRICKLE DOWN FROM HERE. */}
        {/* <Accordion chapters={unitData.chapters} /> */}
        {unitData && <Accordion unitData={unitData} />}
      </article>

      <article className="h-full overflow-y-scroll mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <Outlet />
      </article>
    </main>
  );
};

export default UnitPageDynamic;
