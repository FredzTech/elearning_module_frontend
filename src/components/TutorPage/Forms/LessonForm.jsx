import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal } from "../../modals";
import LoadingBtn from "./LoadingBtn";
import { MdCancel } from "react-icons/md";

const LessonForm = ({ lessonForm, hideLessonForm }) => {
  // DECLARATION OF VARIABLES
  //=========================
  const [chapters, setChapters] = useState([]);
  const [chapterName, setChapterName] = useState("");
  const [lessonName, setLessonName] = useState("");
  const [lessonNotes, setLessonNotes] = useState();
  const [lessonType, setLessonType] = useState("");
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState();
  // const [value, setValue] = useState("");
  useEffect(() => {
    const fetchChapterData = async () => {
      try {
        console.log("use effect kicked in ");
        const { data } = await axios.get("/chapter/all-chapters");
        console.log(data);
        setChapters(data);
        setChapterName(`${data[0].chapterName}`);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChapterData();
  }, []);
  //   A FUNCTION THAT CREATES OUR POST OBJECT
  //==========================================
  async function createPostObject({
    chapterName,
    lessonName,
    lessonNotes,
    lessonType,
  }) {
    console.log("Creating post object via formData instance. ");

    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    const formData = new FormData();
    formData.append("chapterName", chapterName);
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
      chapterName,
      lessonNumber,
      lessonName,
      lessonNotes,
      lessonType,
    });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  return (
    <>
      {lessonForm && (
        <div className="modal-overlay">
          <div className="bg-white rounded-md">
            <div className="w-full flex justify-between items-center  text-sm font-normal text-white uppercase bg-primary  px-2 py-4 rounded-t-md">
              LESSON FORM
              <button onClick={() => hideLessonForm()}>
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
              {/* DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="id"
                  className="w-full block my-2 text-sm font-medium text-gray-900"
                >
                  Select Chapter
                </label>
                <select
                  value={chapterName}
                  onChange={(e) => setChapterName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                >
                  <option selected className="text-grey">
                    Choose the Chapter
                  </option>
                  {chapters.map((chapter, index) => {
                    return (
                      <option key={index} value={chapter.chapterName}>
                        {chapter.chapterName}
                      </option>
                    );
                  })}
                </select>
              </div>

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
                  <Button
                    type="button"
                    text="Save"
                    onClick={fileUploadHandler}
                  />
                ) : (
                  <LoadingBtn action="Uploading" />
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LessonForm;
