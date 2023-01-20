import React from "react";
import { NavigateBtn, CourseAdminCard } from "../../components";

const CoursesAdminPage = () => {
  // LIST OF CARDS.
  const coursesData = [
    {
      _id: { $oid: "63c6986fba70a7293a3fadbf" },
      courseImage:
        "https://image-handle.s3.amazonaws.com/warm-1673959532411.png",
      courseTitle: "ANALYTICAL ENGINEERING",
      units: [],
      __v: 0,
    },
    {
      _id: { $oid: "63c69910ba70a7293a3fadc5" },
      courseImage:
        "https://image-handle.s3.amazonaws.com/warm-1673959658905.jpeg",
      courseTitle: "HOME SCIENCE",
      units: [{ $oid: "63c699d8ba70a7293a3fadca" }],
      __v: 0,
    },
    {
      _id: { $oid: "63c8074abb14342b71afaf94" },
      courseImage:
        "https://image-handle.s3.amazonaws.com/warm-1674053449936.jpeg",
      courseTitle: "LAWRENCE ENGINEERING",
      units: [],
      __v: 0,
    },
  ];
  return (
    <div className="flex flex-col align-center relative shadow-md sm:rounded-lg w-full h-full pt-2 px-4">
      <div className="flex w-full items-center justify-end mb-3 pr-1">
        <NavigateBtn destination="/Form" text="New Course" icon="tenantIcon" />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {coursesData.map((course, index) => {
          return (
            <div key={`course-${index}`}>
              <CourseAdminCard
                courseTitle={course.courseTitle}
                courseImage={course.courseImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesAdminPage;
