import React, { useState } from "react";
import { CustomNav, Button } from "../../../components";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
const DirectUploadForm = () => {
  const navigate = useNavigate();
  // DECLARATION OF VARIABLES
  //=========================
  const [file, setFile] = useState();
  const [courseTitle, setCourseTitle] = useState("");
  //   This will be set after successfully receiving the data
  const [courseUrl, setCourseUrl] = useState(null);

  //   A FUNCTION THAT CREATES OUR POST OBJECT
  //==========================================
  //   async function createPostObject({ courseTitle, file }) {
  //     // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
  //     //=========================================================
  //     const formData = new FormData();
  //     formData.append("courseUrl", courseUrl);
  //     formData.append("course", file);

  //     const config = {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     };
  //     try {
  //       const response = await axios.post("/course/new-course", formData, config);
  //       console.log("After everything is said and done.");
  //       console.log(JSON.stringify(response));
  //       return response;
  //     } catch (err) {
  //       console.log(err);
  //       let { data } = err.response;
  //       console.log(JSON.stringify(data));
  //       // Display the error as you will
  //       return err;
  //     }
  //   }

  async function createPostObject({ file }) {
    // We upload file directly to s3
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    try {
      console.log(`Confirm Course Url b4 Putting : ${courseUrl}`);
      const response = await axios.put(courseUrl, file, config);
      console.log("Commencing file upload");
      console.log(JSON.stringify(response));
      console.log("File upload completed successfully.");
      return response;
    } catch (err) {
      console.log("Error occured during actual file upload");
      console.log(err);
      return err;
    }
  }

  //==========================================
  async function generatePutUrl({ file }) {
    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    // Creating a new object instance
    const formData = new FormData();
    formData.append("course-image", file);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {
      const response = await axios.get("/s3Direct/", formData, config);
      //   Space to set the courseUrl
      //   console.log(JSON.stringify(response));
      return response;
    } catch (err) {
      console.log(err);
      //   let { data } = err.response;
      //   console.log(JSON.stringify(data));
      // Display the error as you will
      return err;
    }
  }

  //   TAKES THE FILE SELECTED(OBJECT) FROM FILE INSTANCE.
  //=======================================================
  //   The function that sieves out our file object b4 save.
  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
  };

  const fileUploadHandler = async (e) => {
    e.preventDefault();

    // Create our post object.
    // const { status } = await createPostObject({ courseTitle, file });
    const response = await generatePutUrl({ file });
    console.log(`Response Received ${JSON.stringify(response)}`);
    const { data, status } = response;
    const { url } = data;
    console.log(`Our put url ${url} : status ${status}`);
    setCourseUrl(url);

    if (status === 201) {
      // We proceed to saving this data via the url provided.
      console.log(`Our update url: ${url} vs CourseUrl ${courseUrl}`);
      const response2 = await createPostObject({ file });
      console.log(
        `What we get after uploading our file ${JSON.stringify(response2)}`
      );
      //   navigate(-1);
    }

    // console.log("Tackle the first error first.");
  };

  return (
    <div className="modal-overlay">
      <div className="flex flex-col justify-center items-center debug w-2/5">
        <CustomNav text="DIRECT UPLOAD FORM" />
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
              text="Add Course"
              onClick={fileUploadHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DirectUploadForm;
