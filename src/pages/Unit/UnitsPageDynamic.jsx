import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UnitsCard } from "../../components";
import axios from "../../axios";
const UnitsPageDynamic = () => {
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

export default UnitsPageDynamic;
