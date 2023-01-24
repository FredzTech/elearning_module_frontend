import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import { postObject } from "../../../Modules/postUnitObject";
import axios from "../../../axios";
import { Modal } from "../../modals";
import LoadingBtn from "./LoadingBtn";
const UnitForm = () => {
  // LOADS COURSES DATA WHEN COMPONENT LOADS.

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

  // const [course, setCourse] = useState(`${courses[0].courseTitle}`);
  const [course, setCourse] = useState();
  const [unitCode, setUnitCode] = useState("");
  const [unitName, setUnitName] = useState("");
  const [unitDescription, setUnitDescription] = useState("");
  const [submit, setSubmit] = useState();

  // SUBMITS INFO.
  //==============
  const fileUploadHandler = async (e) => {
    e.preventDefault();
    setSubmit(true);
    // Create our post object.
    const result = await postObject({
      course,
      unitCode,
      unitName,
      unitDescription,
    });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  return (
    <Modal>
    <div className="">
      <CustomNav text="unit form" />
      {/* PROPOSED HEADER. */}
      <form encType="multipart/form-data" className="form-styling">
          {/* DROPDOWN */}
          <div className="flex flex-col">
          <label htmlFor="id" className="w-full block my-2 text-sm font-medium text-gray-900">
              Select Course
            </label>
    

          <select 
           value={course}
           onChange={(e) => setCourse(e.target.value)}
           
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
           >
            <option selected className="text-grey">Choose a course</option>
            {courses.map((course, index) => {
                  
                  return (
                    <option key={index} value={course.courseTitle}>
                      {course.courseTitle}
                    </option>
                  );
                })}
          </select>

           
            
          </div>
          {/* FILE */}
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
          {!submit?
          <Button type="button" text="Save" onClick={fileUploadHandler} />
         :<LoadingBtn action="Uploading"/> }
     
        </div>
       
      </form>
    </div>
    </Modal>
  );
};

export default UnitForm;
