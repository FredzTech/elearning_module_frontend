import React, { useState, useEffect } from "react";
import { CustomNav, Button, AlertBox } from "../../../components";
import axios from "../../../axios";
import LoadingBtn from "./LoadingBtn";
import { MdCancel } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";

const LessonForm = () => {
  const navigate = useNavigate();
  const { chapterID } = useParams();
  // DECLARATION OF VARIABLES
  //=========================
  const [lessonName, setLessonName] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [lessonNotes, setLessonNotes] = useState();
  // const [lessonType, setLessonType] = useState("");
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);

  // Alert Box Config
  const [response, setResponse] = useState(null);
  const [responseTracker, setResponseTracker] = useState(null);
  const [statusTracker, setStatusTracker] = useState(null);

  //Config functions.
  //   A FUNCTION THAT CREATES OUR POST OBJECT
  //==========================================
  async function createPostObject({
    lessonNumber,
    lessonName,
    lessonNotes,
    lessonType,
    Key,
  }) {
    const formData = new FormData();
    formData.append("chapterID", chapterID);
    formData.append("lessonNumber", `${chapterID}-${lessonNumber}`);
    formData.append("lessonName", lessonName);
    formData.append("lessonNotes", lessonNotes);
    formData.append("lessonType", lessonType);
    formData.append("lessonUrl", Key); //Jackpot. Defines our fieldname which is crawled by multer to pick out this file for upload.

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      setSubmit(true);
      const response = await axios.post("/lesson/new-lesson", formData, config);
      const { status } = response;

      if (status === 201) {
        setResponse("Data saved successfully to DB.");
        setStatusTracker(true);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
          navigate(-1);
        }, 1200);
      }
    } catch (err) {
      if (err.message === "Request failed with status code 409") {
        setResponse("This record already exists.");
        setSubmit(true);
        setStatusTracker(false);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 2500);
      } else {
        console.log(err);
      }
    }
  }

  //   TAKES THE FILE SELECTED(OBJECT) FROM FILE INSTANCE.
  //=======================================================
  const fileSelected = (e) => {
    const fileUpload = e.target.files[0];
    setFile(fileUpload);
    console.log(file);
  };

  const contentType = (fileType) => {
    if (fileType === "image/jpeg" || fileType === "image/png") {
      return "image/jpeg";
    } else if (fileType === "video/mp4") {
      return "video/mp4";
    } else if (fileType === "video/webm") {
      return "video/webm";
    } else if (fileType === "video/ogg") {
      return "video/ogg";
    } else if (fileType === "video/avi") {
      return "video/avi";
    } else if (fileType === "application/pdf") {
      return "application/pdf";
    } else if (fileType === "audio/mpeg") {
      return "audio/mpeg";
    } else if (fileType === "audio/mp3") {
      return "audio/mp3";
    } else if (fileType === "audio/ogg") {
      return "audio/ogg";
    } else if (fileType === "audio/wav") {
      return "audio/wav";
    } else {
      return "undefined";
    }
  };

  const lessonType = (fileType) => {
    if (fileType === "image/jpeg" || fileType === "image/png") {
      return "image";
    } else if (
      fileType === "video/mp4" ||
      fileType === "video/webm" ||
      fileType === "video/ogg" ||
      fileType === "video/avi"
    ) {
      return "video";
    } else if (fileType === "application/pdf") {
      return "pdf";
    } else if (
      fileType === "audio/mpeg" ||
      fileType === "audio/mp3" ||
      fileType === "audio/ogg" ||
      fileType === "audio/wav"
    ) {
      return "audio";
    } else {
      return "undefined";
    }
  };

  //FILE UPLOAD FUNCTIONS.
  //======================
  // Step 1 : Get signed Url
  async function getSignedUrl() {
    // Generating our req body.
    const formData = new FormData();
    formData.append("fileType", file.type);

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const { data, status: urlCreationStatus } = await axios.post(
        "/s3Direct/",
        formData,
        config
      );
      console.log(
        `Signed url ${JSON.stringify(data)},Status: ${urlCreationStatus}`
      );
      const { signedUrl: url, Key } = data;
      console.log(`Destructured data ${url}, ${Key}`);
      return { urlCreationStatus, Key, url };
    } catch (err) {
      console.log("Something went wrong when creating the signed url");
      console.log(err);
      return err;
    }
  }

  // Step 2 : Uploading file & Saving all info to DB
  const savingFileToDB = async () => {
    const { urlCreationStatus, Key, url } = await getSignedUrl();
    if (urlCreationStatus === 201) {
      try {
        const { status: uploadResponseStatus } = await uploadFile({ url: url });
        console.log(`File upload status ${uploadResponseStatus}`);
        if (uploadResponseStatus === 200) {
          // Saving data to the status
          createPostObject({
            lessonNumber,
            lessonName,
            lessonNotes,
            lessonType: lessonType(file.type),
            Key,
          });
        }
      } catch (err) {
        if (err.message === "Request failed with status code 409") {
          setResponse("This record already exists.");
          setStatusTracker(false);
          setResponseTracker(true);
          setTimeout(() => {
            setResponseTracker(false);
          }, 2500);
        } else {
          console.log(err);
        }
      }
    }
  };

  // Step 2 : Actual file upload to s3 bucket
  async function uploadFile({ url: signedUrl }) {
    // We upload file directly to s3
    const config = {
      headers: { "Content-Type": contentType(file.type) },
    };
    try {
      console.log("Commencing file upload");
      const success = await axios.put(signedUrl, file, config);
      console.log(success);
      return success;
    } catch (err) {
      console.log(
        `Error occured during actual file upload ${JSON.stringify(err)}`
      );
      const { message } = err;

      if (message === "Request failed with status code 403") {
        console.log("We can try uploading one more time.");
        return err;
      }
      return "This error is beyond the scope of uploading file.";
    }
  }

  const validateForm = () => {
    if (lessonName !== null && lessonNumber !== null && file !== null) {
      return true;
    } else {
      return false;
    }
  };

  const fileUploadHandler = async (e) => {
    e.preventDefault();
    const validation = validateForm();

    if (validation == true) {
      setSubmit(false);
      // const urlCreationData = await getSignedUrl({ file: file });
      savingFileToDB();
    } else {
      console.log("Error!Error during validation");
      setResponse("Kindly fill all details correctly.");
      setStatusTracker(false);
      setResponseTracker(true);
      setTimeout(() => {
        setResponseTracker(false);
      }, 2500);
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
          <AlertBox
            responseTracker={responseTracker}
            statusTracker={statusTracker}
            response={response}
          />
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
          {/* <div className="flex flex-col">
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
          </div> */}

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
