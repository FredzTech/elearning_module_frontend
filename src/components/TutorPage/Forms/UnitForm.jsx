import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import { postObject } from "../../../Modules/postUnitObject";
import axios from "../../../axios";
const UnitForm = () => {
  // LOADS COURSES DATA WHEN COMPONENT LOADS.
  //==========================================
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        console.log("useEffect kicked in ");
        const { data } = await axios.get("/course/all-courses");
        console.log(data);
        setCourses(data);
        console.log(courses);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourseData();
  }, []);

  // DECLARATION OF VARIABLES
  //=========================
  // const [course, setCourse] = useState(`${courses[0].courseTitle}`);
  const [course, setCourse] = useState();
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
    // <div className="flex flex-col justify-center items-center">
    <div className="form-elements-wrap">
      <CustomNav text="unit form" />
      {/* PROPOSED HEADER. */}
      {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
      <form encType="multipart/form-data" className="form-styling">
        <div className="flex phone:flex-col justify-start items-center my-5 w-full">
          {/* DROPDOWN */}
          <div className="input-wrapper">
            <label htmlFor="id" className="w-full">
              Select Course
            </label>
            <div class="select-parent">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="select-input"
              >
                {courses.map((course, index) => {
                  // HOW DO I SET DEFAULT VALUE
                  return (
                    <option key={`option-${index}`} value={courses.courseTitle}>
                      {courses.courseTitle}
                    </option>
                  );
                })}
              </select>
              <div class="select-svg-wrapper">
                <svg
                  class="fill-current w-full h-full"
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
        <div className="input-wrap">
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
        <div className="input-wrap">
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
        <div className="cta-wrap">
          <Button type="button" text="Save" onClick={fileUploadHandler} />
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
    // </div>
  );
};

export default UnitForm;
