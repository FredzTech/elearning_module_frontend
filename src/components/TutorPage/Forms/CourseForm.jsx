import React, { useState } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
const ResourcesForm = () => {
  // DECLARATION OF VARIABLES
  //=========================
  const [file, setFile] = useState();
  const [courseTitle, setCourseTitle] = useState("");

  //   A FUNCTION THAT CREATES OUR POST OBJECT
  //==========================================
  async function createPostObject({ courseTitle, file }) {
    // console.log("Creating post object via formData instance. ");

    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    const formData = new FormData();
    formData.append("Course Title", courseTitle);
    formData.append("Course", file);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const response = await axios.post(
      "/course/upload-courses",
      formData,
      config
    );
    console.log(JSON.stringify(response));
    return response;
  }

  //   TAKES THE FILE SELECTED(OBJECT) FROM FILE INSTANCE.
  //=======================================================
  const fileSelected = (e) => {
    // console.log(e.target); //Will just display the attribute that causes the event to occur.
    // console.log(e.target.files); // Returns a file list which is an object
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
  };

  const fileUploadHandler = async (e) => {
    e.preventDefault();

    // Create our post object.
    const result = await createPostObject({ courseTitle, file });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  const cancelRegistration = (e) => {
    e.preventDefault();
    console.log("Modal closed");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col phone:w-full phone:px-2 phone:mt-1 w-4/5 items-center justify-center phone:border-none border-2 border-primary phone mt-5 rounded-lg shadow-md shadow-primary">
        <CustomNav text="resources form" />
        {/* PROPOSED HEADER. */}
        {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
        <form
          encType="multipart/form-data"
          className="flex-col items-center justify-center px-5 w-full phone:border-2  phone:rounded-b-md"
        >
          <div className="flex-col-centered items-start my-10 gap-2">
            <label htmlFor="course" className="w-full ">
              Course Details
            </label>
            <input
              className="input-styling"
              id="course"
              type="text"
              placeholder="Course Title"
              value={courseTitle}
              onChange={(e) => {
                setCourseTitle(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="flex-col justify-center items-start my-10 ">
            <label htmlFor="file" className="w-full">
              Course Display Image
            </label>
            <input
              type="file"
              name="file"
              onChange={fileSelected}
              className="input-styling mt-2"
            />
          </div>
          {/* CTA BUTTONS */}
          <div className="flex flex-col justify-center items-center w-full mt-8 ">
            <Button
              type="button"
              text="Add Resource"
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

export default ResourcesForm;
