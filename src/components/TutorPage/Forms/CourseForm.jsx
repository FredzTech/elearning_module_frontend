import React, { useState } from "react";
import { CustomNav, Button } from "../../CustomForm";
import { Modal } from "../../modals";
import axios from "../../../axios";
const CourseForm = () => {
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
    formData.append("courseTitle", courseTitle);
    formData.append("course", file);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    try {
      const response = await axios.post("/course/new-course", formData, config);
      console.log("After everything is said and done.");
      console.log(JSON.stringify(response));
      return response;
    } catch (err) {
      console.log(err);
      let { data } = err.response;
      console.log(JSON.stringify(data));
      // Display the error as you will
      return err;
    }
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
    <>
    <Modal>

   
    
  <div className="flex flex-col justify-center items-center debug w-full">
    <div className="">
      <CustomNav text="Course form" />
      <form encType="multipart/form-data" className="form-styling">
        <div className="input-wrap">
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
        <div className="input-wrap">
          <label htmlFor="file">Course Display Image</label>
          <input
            type="file"
            name="file"
            onChange={fileSelected}
            className="input-styling mt-2"
          />
        </div>
        {/* CTA BUTTONS */}
        <div className="cta-wrap">
          <Button
            type="button"
            text="Add Resource"
            onClick={fileUploadHandler}
          />
         
        </div>
      </form>
    </div>
    </div>
     </Modal>
    </>
  );
};

export default CourseForm;
