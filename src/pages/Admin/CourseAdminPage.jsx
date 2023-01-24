import axios from "../../axios";
import React, { useEffect, useState, useContext } from "react";
import { NavigateBtn, CourseAdminCard, CourseForm } from "../../components";
import { ModalContext } from "../../components/modals/ModalProvider";

const CoursesAdminPage = () => {
  const { openModal, isOpen } = useContext(ModalContext);

  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const { data: coursesData } = await axios.get("/course/all-courses");
        console.log(coursesData);
        setCoursesData(coursesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoursesData();
  }, []);
  // LIST OF CARDS.
  return (
    <div className="flex flex-col align-center relative shadow-md sm:rounded-lg w-full h-full pt-2 px-4">
      <div className="flex w-full items-center justify-end mb-3 pr-1">
        <NavigateBtn
          // destination="/admin/course-form"
          action={openModal}
          text="New Course"
          icon="tenantIcon"
        />
        {isOpen && <CourseForm />}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {coursesData.map((course, index) => {
          return (
            <div key={`course-${index}`}>
              <CourseAdminCard
                _id={course._id}
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
