import React, { useState } from "react";
import { AlertBox } from "../../../components";
import { CustomNav, Button } from "../../CustomForm";
import axios from "../../../axios";
const TutorForm = () => {
  // DECLARATION OF OUR STATES
  //==========================
  const [fName, setFName] = useState("");
  const [surname, setSurname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [responseTracker, setResponseTracker] = useState(false);
  const [statusTracker, setStatusTracker] = useState(true);
  const [response, setResponse] = useState("");

  const cancelRegistation = (e) => {
    e.preventDefault();
    console.log("Modal should be closed.");
  };

  const registerStudent = async (e) => {
    e.preventDefault();

    if (password != cPassword) {
      setStatusTracker(false);
      setResponse(`Passwords Entered do not match.`);
      setResponseTracker(true);
      setTimeout(() => {
        setResponseTracker(false);
      }, 4500);
    } else {
      let studentData = {
        firstName: fName,
        surname,
        password,
        contact: `254${contact}`,
        email,
      };

      try {
        let { data } = await axios.post("/auth/register-student", studentData);
        // Clearing out the inputs
        console.log(JSON.stringify(data));
        setResponse("Student Registered Successfully");
        setStatusTracker(true);
        setResponseTracker(true);
        setFName("");
        setSurname("");
        setEmail("");
        setContact("");
        setPassword("");
        setCPassword("");

        setTimeout(() => {
          setResponseTracker(false);
        }, 4500);
      } catch (error) {
        setStatusTracker(false);
        console.log(error.response.data.message.message);
        setResponse(
          `[${error.response.data.message.name}] ${error.response.data.message.message}`
        );
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 4500);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col phone:w-full phone:px-2 phone:mt-1 w-4/5 items-center justify-center phone:border-none border-2 border-primary phone mt-5 rounded-lg shadow-md shadow-primary">
        <CustomNav text="student registration form" />
        {/* PROPOSED HEADER. */}
        {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
        <form className="flex-col items-center justify-center px-5 w-full phone:border-2  phone:rounded-b-md">
          {/* NAMES SECTION */}
          <div className="flex phone:flex-col justify-around items-center my-10">
            <label htmlFor="contact" className="w-1/5 phone:w-full">
              Names
            </label>
            <input
              className="phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
              id="fName"
              type="text"
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
              type="text"
              placeholder="Enter surname"
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              required
            ></input>
          </div>
          {/* CONTACT SECTION */}
          <div className="flex phone:flex-col  items-center justify-center my-5">
            <div className="w-3/5 flex phone:w-full  phone:my-1  phone:flex-col items-center justify-center ">
              <label htmlFor="contact" className="w-1/5 phone:w-full mr-3">
                Contact
              </label>
              <div className=" phone:flex phone:w-full phone:items-center">
                <input
                  className="px-4 mr-4 w-1/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
                  type="text"
                  required
                  value="+254"
                  readOnly
                />
                <input
                  className="px-4 mr-4 w-3/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
                  id="contact"
                  type="Number"
                  placeholder="Safaricom No."
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="w-2/5 phone:w-full  h-full phone:my-1  phone:items-center  flex items-center">
              <label
                htmlFor="email"
                className="phone:pl-0 pl-3 w-1/5 mr-2 h-full flex items-center justify-center py-1"
              >
                Email
              </label>
              <input
                className="phone:w-full phone:my-1 px-4 mr-4 w-4/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
                id="email"
                type="email"
                placeholder="E-mail Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
          </div>

          {/* PASSWORD SECTION */}

          <div className="flex phone:flex-col  justify-start items-center my-10 w-full ">
            <label
              htmlFor="password"
              className="pl-3 w-24 mr-2 flex items-center justify-center phone:justify-start phone:pl-0 py-1 phone:w-full"
            >
              Password
            </label>
            <input
              className=" phone:mx-0 phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            ></input>

            <input
              className="phone:w-full phone:mx-0 phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-primary rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
              id="CPassword"
              type="password"
              placeholder="Confirm Password"
              value={cPassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
              required
            ></input>
          </div>
          {/* THE ALERT BOX */}
          <AlertBox responseTracker statusTracker response />
          <div className="flex flex-col justify-center items-center w-full mt-8 ">
            <Button
              type="button"
              text="upload"
              onClick={(e) => {
                registerStudent(e);
              }}
            />
            <Button
              type="button"
              text="cancel"
              onClick={(e) => {
                cancelRegistation(e);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TutorForm;
