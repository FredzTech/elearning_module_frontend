import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { UnitsCard, NavigateBtn } from "../../components";
import axios from "../../axios";

const UnitsPageDynamicAdmin = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState({});
  const getCourseData = async () => {
    try {
      const { data } = await axios.get(`/course/${courseId}`);
      // console.log(data);
      setCourseData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <div className="w-full relative h-full flex flex-col ">
      <header className="bg-slate-400 h-[300px] relative flex items-center justify-center">
        <h1 className="text-white font-bold text-center text-4xl uppercase">
          {JSON.stringify(courseData) !== "{}" && courseData.courseTitle}
        </h1>
      </header>
      <div className="flex w-full items-center justify-end mb-3 mt-2 px-5 z-10">
        <div className="z-10">
          <NavigateBtn
            destination="new-unit"
            text="New Unit"
            icon="tenantIcon"
          />
        </div>
      </div>
      <section className="relative w-full h-full bg-secondary">
        {/* When this is absolute the parent collapses. */}
        <div className="relative top-[-70px] w-full h-full px-20 ">
          <main className="relative main-content grid grid-cols-2 gap-10">
            {JSON.stringify(courseData) !== "{}" &&
              courseData.units.map((unit, index) => {
                const { unitName, unitDescription, _id } = unit;
                return (
                  <UnitsCard
                    unitId={_id}
                    key={index}
                    number={`${index + 1}`}
                    heading={unitName}
                    summary={unitDescription}
                  />
                );
              })}
          </main>
        </div>
      </section>
    </div>
  );
};

export default UnitsPageDynamicAdmin;
