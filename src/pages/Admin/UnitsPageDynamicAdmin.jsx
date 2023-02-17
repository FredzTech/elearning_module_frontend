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
    <div className="w-full h-full flex flex-col ">
      <header className="bg-slate-400 h-[250px] relative flex items-center justify-center">
        <h1 className="text-white font-bold text-center text-4xl uppercase">
          {JSON.stringify(courseData) !== "{}" && courseData.courseTitle}
        </h1>
      </header>
      <div className="relative flex flex-col">
        <div className="flex w-full items-center justify-end mb-3 mt-2 px-5">
          <NavigateBtn
            destination="new-unit"
            text="New Unit"
            icon="tenantIcon"
          />
          <NavigateBtn
            destination="assign-unit"
            text="Assign Unit"
            icon="tenantIcon"
          />
        </div>
        <section className="absolute px-10 ">
          <main className=" grid grid-cols-2 gap-10">
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
        </section>
      </div>

      {/* When this is absolute the parent collapses. */}
    </div>
  );
};

export default UnitsPageDynamicAdmin;
