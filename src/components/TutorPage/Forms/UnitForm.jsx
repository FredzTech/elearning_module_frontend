import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import { postObject } from "../../../Modules/postUnitObject";
import axios from "../../../axios";
const ChapterForm = () => {
  const [courses, setCourses] = useState([]);
  // LOAD COURSE DATA
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        console.log("use effect kicked in ");
        const { data } = await axios.get("/course/all-courses");
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourseData();
  }, []);
  // DECLARATION OF VARIABLES
  //=========================
  const [course, setCourse] = useState("");
  const [unitCode, setUnitCode] = useState("");
  const [unitName, setUnitName] = useState("");
  const [unitDescription, setUnitDescription] = useState("");

  // SUBMITS INFO.
  //==============
  const fileUploadHandler = async (e) => {
    e.preventDefault();

    // Create our post object.
    const result = await postObject({
      course,
      unitCode,
      unitName,
      unitDescription,
    });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  const cancelRegistration = (e) => {
    e.preventDefault();
    console.log("Modal should be closed");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col phone:w-full phone:px-2 phone:mt-1 w-4/5 items-center justify-center phone:border-none border-2 border-primary phone mt-5 rounded-lg shadow-md shadow-primary">
        <CustomNav text="unit form" />
        {/* PROPOSED HEADER. */}
        {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
        <form
          encType="multipart/form-data"
          className="flex-col items-center justify-center px-5 w-full phone:border-2  phone:rounded-b-md"
        >
          <div className="flex phone:flex-col justify-start items-center my-5 w-full">
            {/* DROPDOWN */}
            <div className=" phone:flex-col items-center justify-around">
              <label htmlFor="id" className="w-full">
                Select Course
              </label>
              <div class=" mt-1 relative w-60 phone:m-1">
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="relative w-64 appearance-none border-2 border-primary  px-4  py-2 rounded text-gray-700 leading-tight focus:outline-none focus:border-purple-500 placeholder:text-sm"
                >
                  {courses.map((course, index) => {
                    // HOW DO I SET DEFAULT VALUE
                    return (
                      <option
                        key={`option-${index}`}
                        value={course.courseTitle}
                      >
                        {course.courseTitle}
                      </option>
                    );
                  })}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* FILE */}
          </div>
          <div className="flex-col-centered items-start my-10 gap-2">
            <label htmlFor="unitCode" className="w-full ">
              Unit Details
            </label>
            <input
              className="input-styling"
              id="unitCode"
              type="text"
              placeholder="Unit Code"
              value={unitCode}
              onChange={(e) => {
                setUnitCode(e.target.value);
              }}
              required
            ></input>
            <input
              className="input-styling"
              id="unitName"
              type="Text"
              placeholder="Unit Name"
              value={unitName}
              onChange={(e) => {
                setUnitName(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="flex-col-centered items-start my-10 gap-2">
            <label htmlFor="description" className="w-full">
              Unit Description
            </label>
            <textarea
              className="input-styling"
              id="description"
              type="text"
              placeholder="What is the unit about?"
              value={unitDescription}
              onChange={(e) => {
                setUnitDescription(e.target.value);
              }}
              required
            ></textarea>
          </div>
          {/* CTA BUTTONS */}
          <div className="flex flex-col justify-center items-center w-full mt-8 ">
            <Button
              type="button"
              text="Complete Transaction"
              onClick={fileUploadHandler}
            />
            <Button
              type="button"
              text="Cancel"
              onClick={(e) => {
                cancelRegistration(e);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChapterForm;
