import React, { useState } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
const ResourcesForm = () => {
  // DECLARATION OF VARIABLES
  //=========================
  const [file, setFile] = useState();
  const [chapter, setChapter] = useState("");
  const [unit, setUnit] = useState();

  //   A FUNCTION THAT CREATES OUR POST OBJECT
  //==========================================
  async function createPostObject({ fName, lName, image }) {
    console.log("Creating post object via formData instance. ");

    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    const formData = new FormData();
    formData.append("fName", fName);
    formData.append("lName", lName);
    // formData.append("document", image); //Jackpot. Defines our fieldname which is crawled by multer to pick out this file for upload.
    formData.append("image", image); //Jackpot. Defines our fieldname which is crawled by multer to pick out this file for upload.

    // ALTERNATIVE B : OUR GOOD OLD METHOD CAN ALSO WORK BUT WE USE WHAT IS RECOMMENDED.
    //==================================================================================
    // const formData = { fName, lName, video: file };

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const response = await axios.post("/s3/images", formData, config);

    // const response = await axios.post("/upload", formData, config);
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
    const result = await createPostObject({ fName, lName, image: file });

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
          <div className="flex-col justify-center items-start my-5 w-full">
            {/* DROPDOWN */}
            {/* DROPDOWN */}
            <div className="flex-col items-start justify-center">
              <label htmlFor="id" className="w-full">
                Select Chapter
              </label>
              <div class=" mt-1 relative w-60 phone:m-1">
                <select
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                  className="relative w-64 appearance-none border-2 border-primary  px-4  py-2 rounded text-gray-700 leading-tight focus:outline-none focus:border-purple-500 placeholder:text-sm"
                >
                  {/* MAP DB FOR THE OPTIONS */}
                  <option value="Unit A">Chapter A</option>
                  <option value="Unit B">Chapter B</option>
                  <option value="Unit C">Chapter C</option>
                  <option value="Unit D">Chapter D</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" phone:flex-col items-center justify-around">
              <label htmlFor="id" className="w-full">
                Select Unit
              </label>
              <div class=" mt-1 relative w-60 phone:m-1">
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="relative w-64 appearance-none border-2 border-primary  px-4  py-2 rounded text-gray-700 leading-tight focus:outline-none focus:border-purple-500 placeholder:text-sm"
                >
                  {/* MAP DB FOR THE OPTIONS */}
                  <option value="Unit A">Unit A</option>
                  <option value="Unit B">Unit B</option>
                  <option value="Unit C">Unit C</option>
                  <option value="Unit D">Unit D</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col justify-center items-start my-10 ">
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
