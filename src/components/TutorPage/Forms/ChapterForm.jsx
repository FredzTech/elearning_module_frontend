import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
import { Modal } from "../../modals";
const ChapterForm = () => {
  // DECLARATION OF VARIABLES
  //==========================
  const [units, setUnits] = useState([]);
  const [unitName, setUnitName] = useState("");
  const [chapterNumber, setChapterNumber] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [chapterDescription, setChapterDescription] = useState("");
  //FETCHES ALL UNITS WHEN COMPONENT MOUNTS
  //========================================
  useEffect(() => {
    const fetchUnitData = async () => {
      try {
        console.log("use effect kicked in ");
        const { data } = await axios.get("/unit/all-units");
        console.log(data);
        setUnits(data);
        setUnitName(`${data[0].unitName}`);
        console.log(units);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUnitData();
  }, []);

  //   A FUNCTION THAT CREATES OUR POST OBJECT
  //==========================================
  async function createPostObject({
    unitName,
    chapterNumber,
    chapterName,
    chapterDescription,
  }) {
    console.log("Creating post object via formData instance. ");

    // ALTERNATIVE A : FANCY WAY OF CREATING OUR NORMAL OBJECT
    //=========================================================
    const formData = new FormData();
    formData.append("unitName", unitName);
    formData.append("chapterNumber", chapterNumber);
    formData.append("chapterName", chapterName);
    formData.append("chapterDescription", chapterDescription);
    console.log(formData);
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await axios.post(
        "/chapter/new-chapter",
        formData,
        config
      );
      console.log(JSON.stringify(response));
      return response;
    } catch (err) {
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
      unitName,
      chapterNumber,
      chapterName,
      chapterDescription,
    });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

  const cancelRegistration = (e) => {
    e.preventDefault();
    console.log("Modal closed");
  };

  return (
   <Modal>
    <div className="">
      <CustomNav text="chapter form" />
      {/* PROPOSED HEADER. */}
      {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
      <form className="form-styling">
        {/* DROPDOWN */}
        <div className="input-wrap">
          <label htmlFor="id" className="w-full">
            Select Unit
          </label>
          {/* THE PARENT SELECT DIV */}
          <div className="select-parent">
            <select
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
              className="select-input"
            >
              {/* MAP DB FOR THE OPTIONS */}
              {units.map((unit, index) => {
                return (
                  <option key={`unit-${index}`} value={unit.unitName}>
                    {unit.unitName}
                  </option>
                );
              })}
            </select>
            <div className="select-svg-wrapper">
              <svg
                className="fill-current w-full h-full"
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
          <Button type="button" text="Save" onClick={fileUploadHandler} />
         
        </div>
      </form>
    </div>
   </Modal>
  );
};

export default ChapterForm;
