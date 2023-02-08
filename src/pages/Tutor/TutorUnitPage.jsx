import React, { useEffect, useState } from "react";
import { TutorAccordion } from "../../components";
import { Outlet, useParams } from "react-router-dom";
import axios from "../../axios";
const TutorUnitPage = () => {
  const { unitID } = useParams();
  const [unitData, setUnitData] = useState(null);
  console.log(unitID);
  useEffect(() => {
    fetchUnitData();
  }, []);
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
    <main className="flex w-full h-full">
      <article className="h-full flex w-1/4 flex-col rounded-lg ">
        <TutorAccordion unitData={unitData} />
      </article>
      <article className="h-full overflow-y-scroll mt-2 w-3/4 flex px-2 flex-col gap-5  m-2 rounded-lg pb-2">
        <div className="w-full text-lg text-center text-white my-2 py-2 bg-primary rounded-lg">
          NAVBAR WITH ICONS
        </div>
        <Outlet />
      </article>
    </main>
  );
};

export default TutorUnitPage;
