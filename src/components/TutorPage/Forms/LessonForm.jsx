import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const LessonForm = () => {
  // DECLARATION OF VARIABLES
  //=========================
  const [chapters, setChapters] = useState([]);
  const [chapterName, setChapterName] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [lessonName, setLessonName] = useState("");
  const [lessonNotes, setLessonNotes] = useState();
  const [file, setFile] = useState();
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
    lessonNumber,
    lessonName,
    lessonNotes,
  }) {
    console.log("Creating post object via formData instance. ");

    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    const formData = new FormData();
    formData.append("chapterName", chapterName);
    formData.append("lessonNumber", lessonNumber);
    formData.append("lessonName", lessonName);
    formData.append("lessonNotes", lessonNotes);
    formData.append("video", file); //Jackpot. Defines our fieldname which is crawled by multer to pick out this file for upload.

    // ALTERNATIVE B : OUR GOOD OLD METHOD CAN ALSO WORK BUT WE USE WHAT IS RECOMMENDED.
    //==================================================================================
    // const formData = { fName, lName, video: file };
    console.log(formData);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {
      const response = await axios.post("/lesson/new-lesson", formData, config);
      console.log(JSON.stringify(response));
      return response;
    } catch (err) {
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
    });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  const cancelRegistration = (e) => {
    e.preventDefault();
    console.log("Modal closed");
  };

  return (
    // <div className="flex flex-col justify-center items-center">
    <div className="form-elements-wrap">
      <CustomNav text="lesson form" />
      {/* PROPOSED HEADER. */}
      {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
      <form encType="multipart/form-data" className="form-styling">
        {/* DROPDOWN */}
        <div className="input-wrap">
          <label htmlFor="id" className="w-full">
            Select Chapter
          </label>
          <div class="select-parent">
            <select
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
              className="select-input"
            >
              {chapters.map((chapter, index) => {
                return (
                  <option key={`chapter-${index}`} value={chapter.chapterName}>
                    {chapter.chapterName}
                  </option>
                );
              })}
            </select>
            <div class="select-svg-wrapper">
              <svg
                class="fill-current h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        {/* FILE */}
        <div className="input-wrap">
          <label htmlFor="lNumber" className="w-full ">
            Lesson Details
          </label>
          <input
            className="input-styling"
            id="lNumber"
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

        <div className="input-wrap">
          <label htmlFor="id" className="w-full">
            Lecture Notes
          </label>
          <div className="mt-2 h-28">
            <ReactQuill
              readOnly={false}
              // readOnly={true}
              theme="snow"
              // theme="bubble"
              value={lessonNotes}
              onChange={setLessonNotes}
            />
          </div>
        </div>
        <h1>PREVIEW</h1>
        {/* PREVIEWING THE CONTENT. */}
        <div
          className="w-full debug"
          dangerouslySetInnerHTML={{ __html: lessonNotes }}
        ></div>
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

export default LessonForm;
