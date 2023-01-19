import React from "react";
import { NavigateBtn, CourseAdminCard } from "../../components";
const CoursesAdminPage = () => {
  // LIST OF CARDS.
  const coursesData = [
    {
      couseImage: "",
      courseTitle: "Mechatronic Engineering.",
      units: ["unit 1", "unit 2", "unit 3"],
      _id: { $oid: "634513b7b32aff941eef9f46" },
    },
  ];
  return (
    <div className="flex flex-col align-center relative shadow-md sm:rounded-lg w-full h-full pt-2 px-4">
      <div className="flex w-full items-center justify-end mb-3 pr-1">
        <NavigateBtn destination="/Form" text="New Tenant" icon="tenantIcon" />
      </div>

      {/* SHOULD DISPLAY A LIST OF CARDS. */}
      {coursesData.map((course, index) => {
        <CourseAdminCard key={`Course-${index}`} course={course} />;
      })}
    </div>
  );
};

export default CoursesAdminPage;
