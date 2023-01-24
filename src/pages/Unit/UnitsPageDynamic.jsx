import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UnitsCard } from "../../components";
import axios from "../../axios";
const UnitsPageDynamic = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState([
    {
      _id: "63c69910ba70a7293a3fadc5",
      courseImage:
        "https://image-handle.s3.amazonaws.com/warm-1673959658905.jpeg",
      courseTitle: "HOME SCIENCE",
      units: [
        {
          unitType: "paid",
          tutor: [],
          _id: "63c699d8ba70a7293a3fadca",
          unitCode: "FDE 3173",
          unitName: "INTRODUCTION TO HOME SCIENCE",
          unitDescription: "Get to know what home science is about.",
          unitChapters: [],
          __v: 0,
        },
      ],
    },
  ]);

  useEffect(() => {
    console.log("Use Effect running.");

    const getCourseData = async () => {
      try {
        const { data } = await axios.get(`/course/${courseId}`);
        const array = [data];
        setCourseData(array);
      } catch (error) {
        console.error(error);
      }
    };
    getCourseData();
    console.log("Already running");
  }, []);

  return (
    <div className="w-full relative h-full flex flex-col ">
      <header className="bg-slate-400 h-[300px] relative flex items-center justify-center">
        <h1 className="text-white font-bold text-center text-4xl uppercase">
          {courseData.courseTitle}
        </h1>
      </header>
      <section className="relative w-full h-full bg-secondary">
        {/* When this is absolute the parent collapses. */}
        <div className="relative top-[-70px] w-full h-full px-20 ">
          <main className="relative main-content grid grid-cols-2 gap-10">
            {/* {courseData.units.map((unit, index) => {
              const { unitName, unitDescription } = unit;
              return (
                <UnitsCard
                  number={`${index + 1}`}
                  heading={unitName}
                  summary={unitDescription}
                />
              );
            })} */}
            {/* <UnitsCard
              number={"02"}
              heading={"Solid Mechanics"}
              summary={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugi"
              }
            />
            <UnitsCard
              number={"03"}
              heading={"Engineering Materials"}
              summary={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugi"
              }
            />
            <UnitsCard
              number={"04"}
              heading={"Calculus 2"}
              summary={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem nam ipsum doloribus nihil pariatur fugi"
              }
            /> */}
          </main>
        </div>
      </section>
    </div>
  );
};

export default UnitsPageDynamic;
