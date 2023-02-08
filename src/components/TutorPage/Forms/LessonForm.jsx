import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../../components";
import axios from "../../../axios";
import LoadingBtn from "./LoadingBtn";
import { MdCancel } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";

const LessonForm = () => {
  const navigate = useNavigate();
  const { chapterID } = useParams();
  console.log(chapterID);
  // DECLARATION OF VARIABLES
  //=========================
  const [lessonName, setLessonName] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [lessonNotes, setLessonNotes] = useState();
  const [lessonType, setLessonType] = useState("");
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);

  //   A FUNCTION THAT CREATES OUR POST OBJECT
  //==========================================
  async function createPostObject({
    lessonNumber,
    lessonName,
    lessonNotes,
    lessonType,
  }) {
    console.log("Creating post object via formData instance. ");

    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    const formData = new FormData();
    formData.append("chapterID", chapterID);
    formData.append("lessonNumber", `${chapterID}-${lessonNumber}`);
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
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
  };

  const fileUploadHandler = async (e) => {
    e.preventDefault();

    // Create our post object.
    const result = await createPostObject({
      lessonNumber,
      lessonName,
      lessonNotes,
      lessonType,
    });
    const { status } = result;
    if (status == 201) {
      setSubmit(true);
      navigate(-1);
    }
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
              id="cNumber"
              type="number"
              placeholder="Lesson Number"
              value={lessonNumber}
              onChange={(e) => {
                setLessonNumber(e.target.value);
              }}
              required
            ></input>
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
              type="select"
              onChange={(e) => setLessonType(e.target.value)}
              // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            >
              <option className="text-grey">--File type--</option>
              <option value="pdf">PDF</option>
              <option value="audio">AUDIO</option>
              <option value="video">VIDEO</option>
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
