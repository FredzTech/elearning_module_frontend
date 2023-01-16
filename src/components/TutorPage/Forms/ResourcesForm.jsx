import React, { useState } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
const ResourcesForm = () => {
  const image_1 =
    "https://freds-portfolio.s3.ap-southeast-1.amazonaws.com/Skill-1673205204114.jpeg";

  // DECLARATION OF VARIABLES
  //=========================
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [file, setFile] = useState();

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

  const cancelUpload = (e) => {
    e.preventDefault();
    console.log("Modal should be closed.");
  };

  const fileUploadHandler = async (e) => {
    e.preventDefault();

    // Create our post object.
    const result = await createPostObject({ fName, lName, image: file });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col phone:w-full phone:px-2 phone:mt-1 w-4/5 items-center justify-center phone:border-none border-2 border-primary phone mt-5 rounded-lg shadow-md shadow-primary">
        <CustomNav text="Resources Form" />
        {/* PROPOSED HEADER. */}
        {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
        <form
          encType="multipart/form-data"
          className="flex-col items-center justify-center px-5 w-full phone:border-2  phone:rounded-b-md"
        >
          <div className="flex phone:flex-col justify-around items-center my-10">
            <label htmlFor="contact" className="w-1/5 phone:w-full">
              Names
            </label>
            <input
              className="phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
              id="fName"
              type="Text"
              placeholder="First Name"
              value={fName}
              onChange={(e) => {
                setFName(e.target.value);
              }}
              required
            ></input>

            <input
              className="phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
              id="lName"
              type="Text"
              placeholder="Last Name"
              value={lName}
              onChange={(e) => {
                setLName(e.target.value);
              }}
              required
            ></input>
          </div>

          <div className="flex phone:flex-col justify-around items-center my-10">
            <input
              type="file"
              name="avatar"
              onChange={fileSelected}
              className="phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full mt-8 ">
            <Button
              type="button"
              text="upload"
              onClick={(e) => {
                fileUploadHandler(e);
              }}
            />
            <Button
              type="button"
              text="cancel"
              onClick={(e) => {
                cancelUpload(e);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResourcesForm;
