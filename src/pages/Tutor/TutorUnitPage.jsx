import React, { useEffect, useState } from "react";
import { TutorAccordion, Button } from "../../components";
import { Outlet, useParams } from "react-router-dom";
import axios from "../../axios";
const TutorUnitPage = () => {
  const { unitID } = useParams();
  const [unitData, setUnitData] = useState(null);
  useEffect(() => {
    fetchUnitData();
  }, [unitID]);
  const fetchUnitData = async () => {
    try {
      const { data, status } = await axios.get(`/unit/${unitID}`);

      if (status == 200) {
        console.log(data, status);
        setUnitData(data);
        console.log(unitData);
      }
    } catch (error) {
      console.log(`Error while trying to fetch data ${JSON.stringify(error)}`);
    }
  };

  return (
    <main className="grid phone:grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 w-full h-full">
      <article className="col-span-1 order-2 tablet:order-1  h-full flex flex-col rounded-lg laptop:overflow-y-auto px-2 ">
        <TutorAccordion unitData={unitData} fetchUnitData={fetchUnitData} />
      </article>
      <article className="phone:col-span-1 order-1 tablet:order-2 laptop:col-span-3 tablet:col-span-2 h-full laptop:overflow-y-auto flex px-2 flex-col rounded-lg pb-2">
        <div className="w-full text-lg text-center text-white my-2 py-2 bg-primary rounded-lg">
          NAVBAR WITH ICONS
        </div>
        <Outlet />
      </article>
    </main>
  );
};

export default TutorUnitPage;
