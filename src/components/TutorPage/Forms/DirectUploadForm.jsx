import React, { useState } from "react";
import { CustomNav, Button, AlertBox } from "../../../components";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
const DirectUploadForm = () => {
  const navigate = useNavigate();
  // DECLARATION OF VARIABLES
  //=========================
  const [file, setFile] = useState(null);
  const [courseTitle, setCourseTitle] = useState(null);

  const [response, setResponse] = useState(null);
  const [responseTracker, setResponseTracker] = useState(null);
  const [statusTracker, setStatusTracker] = useState(null);
  async function getSignedUrl({ file }) {
    // Generating our req body.
    const formData = new FormData();
    const { type } = file;
    formData.append("fileType", type);

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const { data, status: urlCreationStatus } = await axios.post(
        "/s3Direct/",
        formData,
        config
      );
      console.log(`Signed url ${JSON.stringify(data)}, ${urlCreationStatus}`);
      const { signedUrl: url, Key } = data;
      console.log(`Destructured data ${url}, ${Key}`);
      return { urlCreationStatus, Key, url };
    } catch (err) {
      console.log("Something went wrong when creating the signed url");
      console.log(err);
      return err;
    }
  }

  async function uploadFile({ file, url: signedUrl }) {
    // We upload file directly to s3
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    console.log(signedUrl);
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

  const savingFileToDB = async ({ urlCreationStatus, Key, url }) => {
    if (urlCreationStatus === 201) {
      // Uploading file to server.
      try {
        const uploadResponse = await uploadFile({ file: file, url: url });
        let uploadResponseStatus = uploadResponse.status;
        console.log(`File upload status ${uploadResponseStatus}`);
        if (uploadResponseStatus === 200) {
          // Saving data to the status
          console.log("All is a go. We can save coursedata to the DB");
          console.log(`file Name to be stored ${Key}`);
          let courseData = {
            courseTitle,
            courseImage: Key,
          };

          const config = {
            headers: { "Content-Type": "application/json" },
          };

          const response = await axios.post(
            "/course/new-course",
            courseData,
            config
          );

          const { status } = response;

          if (status === 201) {
            setResponse("Data saved successfully to DB.");
            setStatusTracker(true);
            setResponseTracker(true);
            setTimeout(() => {
              setResponseTracker(false);
            }, 2500);
          }
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

  //   TAKES THE FILE SELECTED(OBJECT) FROM FILE INSTANCE.
  //=======================================================
  //   The function that sieves out our file object b4 save.
  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const validateForm = () => {
    if (courseTitle !== null && file !== null) {
      return true;
    } else {
      return false;
    }
  };

  const fileUploadHandler = async (e) => {
    // Prevents default behaviour of our form
    e.preventDefault();
    // Fetches a signedUrl
    const validation = validateForm();
    if (validation == true) {
      const urlCreationStatus = await getSignedUrl({ file: file });
      savingFileToDB(urlCreationStatus);
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
      <div className="flex flex-col justify-center items-center debug w-2/5">
        <CustomNav text="DIRECT UPLOAD FORM" />
        <form encType="multipart/form-data" className="form-styling">
          <AlertBox
            responseTracker={responseTracker}
            statusTracker={statusTracker}
            response={response}
          />
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
          <div className="w-full ">
            {/* TESTING OUR VARIOUS RESOURCES. */}
            <p className="text-center uppercase">Testing out media uploaded</p>
            {/* <img
              src="https://kapesha001-demo.s3.ap-south-1.amazonaws.com/8971c58c10477574c893137f292ea2cf.jpeg"
              alt="image"
            /> */}

            {/* <img
              src="http://localhost:4000/s3Direct/8614f51246cde029ea9e432be8b9ff5d.png"
              alt="image"
            /> */}

            <video
              className=" mt-2 w-[850px]  h-auto flex rounded-lg shadow-xl shadow-slate-500 "
              src="http://localhost:4000/s3Direct/45b1f269541bf014a6ebc76666f22590.mp4"
              poster="http://localhost:4000/s3Direct/8614f51246cde029ea9e432be8b9ff5d.png"
              controls
            >
              This video is not supported by your browser.
            </video>
          </div>
          {/* CTA BUTTONS */}
          <div className="cta-wrap">
            <Button
              type="button"
              text="Add Course"
              onClick={(e) => {
                fileUploadHandler(e);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DirectUploadForm;
