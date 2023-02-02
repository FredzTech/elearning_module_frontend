import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
import LoadingBtn from "./LoadingBtn";
import { MdCancel } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const LessonForm = () => {
  const navigate = useNavigate(-1);
  const location = useLocation();
  const chapterID = location.useState && location.useState.chapterID;
  // DECLARATION OF VARIABLES
  //=========================
  const [lessonName, setLessonName] = useState("");
  const [lessonNotes, setLessonNotes] = useState();
  const [lessonType, setLessonType] = useState("");
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState();

  //   A FUNCTION THAT CREATES OUR POST OBJECT
  //==========================================
  async function createPostObject({ lessonName, lessonNotes, lessonType }) {
    console.log("Creating post object via formData instance. ");

    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    const formData = new FormData();
    formData.append("chapterID", chapterID);
    formData.append("lessonName", lessonName);
    formData.append("lessonNotes", lessonNotes);
    formData.append("lessonType", lessonType);
    formData.append("video", file); //Jackpot. Defines our fieldname which is crawled by multer to pick out this file for upload.

    // ALTERNATIVE B : OUR GOOD OLD METHOD CAN ALSO WORK BUT WE USE WHAT IS RECOMMENDED.
    //==================================================================================
    // const formData = { fName, lName, video: file };
    console.log(formData);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {
      setSubmit(true);
      const response = await axios.post("/lesson/new-lesson", formData, config);
      console.log(JSON.stringify(response));
      return response;
    } catch (err) {
      setSubmit(false);
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
    const result = await createPostObject({
      lessonName,
      lessonNotes,
      lessonType,
    });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  return (
    <div className="modal-overlay">
      <div className="bg-white rounded-md">
        <div className="w-full flex justify-between items-center  text-sm font-normal text-white uppercase bg-primary  px-2 py-4 rounded-t-md">
          LESSON FORM
          <button onClick={() => navigate(-1)}>
            <MdCancel className="text-white text-4xl" />
          </button>
        </div>
        {/* PROPOSED HEADER. */}
        {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
        <form
          encType="multipart/form-data"
          className="form-styling"
          text="Lesson form"
        >
          {/* FILE */}
          <div className="input-wrap">
            <label htmlFor="lNumber" className="w-full ">
              Lesson Details
            </label>
            <input
              className="input-styling"
              id="lName"
              type="Text"
              placeholder="Lesson Name"
              value={lessonName}
              onChange={(e) => {
                setLessonName(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="id"
              className="w-full block my-2 text-sm font-medium text-gray-900"
            >
              File Type
            </label>
            <select
              value={lessonType}
              onChange={(e) => setLessonType(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            >
              <option selected className="text-grey">
                File type
              </option>
              <option value="pdf">PDF</option>
              <option value="pdf">AUDIO</option>
              <option value="pdf">VIDEO</option>
            </select>
          </div>

          <div className="input-wrap ">
            <label htmlFor="file" className="w-full ">
              File Details
            </label>
            <input
              type="file"
              name="file"
              onChange={fileSelected}
              className="input-styling mt-2"
            />
          </div>
          {/* CTA BUTTONS */}
          <div className="cta-wrap">
            {!submit ? (
              <Button type="button" text="Save" onClick={fileUploadHandler} />
            ) : (
              <LoadingBtn action="Uploading" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LessonForm;
