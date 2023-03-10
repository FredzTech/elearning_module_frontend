import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { NavigateBtn, CourseAdminCard, CourseForm } from "../../components";

const CoursesAdminPage = () => {
  const [coursesData, setCoursesData] = useState([]);
  const fetchCoursesData = async () => {
    try {
      const { data: coursesData } = await axios.get("/course/all-courses");
      console.log(coursesData);
      setCoursesData(coursesData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCoursesData();
  }, []);
  // LIST OF CARDS.
  return (
    <div className="flex flex-col align-center relative shadow-md sm:rounded-lg w-full h-full pt-2 px-4">
      <div className="flex w-full items-center justify-end mb-3 pr-1">
        <NavigateBtn
          destination="new-course"
          text="New Course"
          icon="tenantIcon"
        />

        <NavigateBtn
          destination="direct-upload"
          text="Express Course"
          icon="tenantIcon"
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {coursesData &&
          coursesData.map((course) => {
            const { _id, courseTitle, courseImage } = course;
            return (
              <CourseAdminCard
                key={_id}
                courseID={_id}
                courseTitle={courseTitle}
                courseImage={courseImage}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CoursesAdminPage;
