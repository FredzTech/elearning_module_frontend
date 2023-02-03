import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
import LoadingBtn from "./LoadingBtn";
import { MdCancel } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
const ChapterForm = () => {
  // Reading state to get the chapter ID
  const navigate = useNavigate();
  const location = useLocation();
  const unitID = location.state && location.state.unitID;
  // Appending the chapterID on the accordion link.... Just like the background.
  // DECLARATION OF VARIABLES
  // const [units, setUnits] = useState([]);
  // const [unitName, setUnitName] = useState("select unit");
  const [chapterNumber, setChapterNumber] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [chapterDescription, setChapterDescription] = useState("");
  const [submit, setSubmit] = useState();

  //   A FUNCTION THAT CREATES OUR POST OBJECT
  async function createPostObject({
    chapterNumber,
    chapterName,
    chapterDescription,
  }) {
    console.log("Creating post object via formData instance. ");

    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    const formData = new FormData();
    formData.append("unitID", unitID);
    formData.append("chapterNumber", `${unitID}-${chapterNumber}`);
    formData.append("chapterName", chapterName);
    formData.append("chapterDescription", chapterDescription);
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      setSubmit(true);
      const response = await axios.post(
        "/chapter/new-chapter",
        formData,
        config
      );
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

  const fileUploadHandler = async (e) => {
    e.preventDefault();

    // Create our post object.
    const result = await createPostObject({
      chapterNumber,
      chapterName,
      chapterDescription,
    });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  return (
    <div className="modal-overlay">
      <div className="bg-white rounded-md">
        <div className="w-full flex justify-between items-center  text-sm font-normal text-white uppercase bg-primary  px-2 py-4 rounded-t-md">
          CHAPTER FORM
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <MdCancel className="text-white text-4xl" />
          </button>
        </div>
        {/* PROPOSED HEADER. */}
        {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
        <form className="form-styling">
          {/* FILE */}
          <div className="input-wrap">
            <label htmlFor="cNumber" className="w-full ">
              Chapter Details
            </label>
            <input
              className="input-styling"
              id="cNumber"
              type="number"
              placeholder="Chapter Number"
              value={chapterNumber}
              onChange={(e) => {
                setChapterNumber(e.target.value);
              }}
              required
            ></input>
            <input
              className="input-styling"
              id="fName"
              type="Text"
              placeholder="Chapter Name"
              value={chapterName}
              onChange={(e) => {
                setChapterName(e.target.value);
              }}
              required
            ></input>

            <input
              className="input-styling"
              id="lName"
              type="Text"
              placeholder="Description"
              value={chapterDescription}
              onChange={(e) => {
                setChapterDescription(e.target.value);
              }}
              required
            ></input>
          </div>
          {/* CTA BUTTONS */}
          <div className="cta-wrap ">
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

export default ChapterForm;
