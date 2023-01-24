import React, { useState, useEffect } from "react";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
import { Modal } from "../../modals";
import LoadingBtn from "./LoadingBtn";

const ChapterForm = () => {
  // DECLARATION OF VARIABLES
 
  const [units, setUnits] = useState([]);
  const [unitName, setUnitName] = useState("select unit");
  const [chapterNumber, setChapterNumber] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [chapterDescription, setChapterDescription] = useState("");
  const [submit, setSubmit] = useState();

  //FETCHES ALL UNITS WHEN COMPONENT MOUNTS
 
  useEffect(() => {
    const fetchUnitData = async () => {
      try {
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
      unitName,
      chapterNumber,
      chapterName,
      chapterDescription,
    });

    console.log(result); //Returns to as the response from backend manifested under the data object.
  };

 

  return (
   <Modal>
    <div className="">
      <CustomNav text="chapter form" />
      {/* PROPOSED HEADER. */}
      {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
      <form className="form-styling">
        {/* DROPDOWN */}
        <div className="flex flex-col">
          <label htmlFor="id" className="w-full block my-2 text-sm font-medium text-gray-900">
            Select Unit
          </label>
          <select 
           name={unitName}
           onChange={(e) => setUnitName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          >
            {/* <option selected className="text-grey">Choose the unit</option> */}
            {units.map((unit, index) => {
                return (
                  <option className="text-black" key={index} value={unit.unitName}>
                    {unit.unitName}
                  </option>
                );
              })}
          </select>
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
        {!submit?
          <Button type="button" text="Save" onClick={fileUploadHandler} />
         :<LoadingBtn action="Uploading"/> }
         
        </div>
      </form>
    </div>
   </Modal>
  );
};

export default ChapterForm;
