import React, { useState } from "react";
import { CustomNav,Button } from "../CustomForm";
import AlertBox from "../AlertBox";
import { Modal } from "../modals";
import axios from "../../axios";
const TutorRegistrationForm = () => {
  // DECLARATION OF OUR STATES
  //==========================
  const [fName, setFName] = useState("");
  const [surname, setSurname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  // For showing or hiding the alertbox
  const [responseTracker, setResponseTracker] = useState(true);
  // For changing color of alertbox.
  const [statusTracker, setStatusTracker] = useState(false);
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
        let { data } = await axios.post("/auth/register-tutor", studentData);
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
    <Modal>
    <div className="flex flex-col justify-center ">
      <div className="flex flex-col phone:w-full phone:px-2 phone:mt-1 w-[400px] phone:w-[360px]  phone:border-none border-2 phone:mt-2 rounded-lg shadow-md shadow-primary">
        <CustomNav text="tutor registration" />
        {/* PROPOSED HEADER. */}
        {/* We are doing it the react style. How then do we handle the multipart.form data from our form to our server? */}
        <form className="flex-col  px-5 phone:px-2 w-full phone:border-2  phone:rounded-b-md">
          {/* NAMES SECTION */}
          <div className="flex flex-col justify-around  my-2">
            <label htmlFor="contact" className="mb-1">
              Names
            </label>
            <div className="flex">        
              <input
                className="w-1/2 phone:my-1 px-4   bg-white-200 appearance-none py-2 border-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
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
                className="w-1/2 phone:my-1 px-4   bg-white-200 appearance-none py-2 border-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
                id="lName"
                type="Text"
                placeholder="Last Name"
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
                required
              ></input>
            </div>
    
          </div>
          {/* CONTACT SECTION */}
          <div className="flex flex-col   my-5">
            <div className=" flex flex-col w-full  phone:my-1  phone:flex-col  ">
              <label htmlFor="contact" className="mb-1 mr-3">
                Contact
              </label>
              <div className="flex phone:w-full phone:">
                <input
                  className="px-4  w-1/4 bg-white-200 appearance-none py-2 border-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
                  type="Text"
                  required
                  value="+254"
                  readOnly
                />
                <input
                  className="px-4 w-3/4 bg-white-200 appearance-none py-2 border-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
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
            <div className=" w-full  h-full phone:my-1  my-2  flex flex-col ">
              <label
                htmlFor="email"
                className="phone:pl-0 pl-3 w-1/5 mr-2 h-full flex  py-1"
              >
                Email
              </label>
              <input
                className="phone:w-full phone:my-1 px-4  w- bg-white-200 appearance-none py-2 border-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
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

          <div className="flex flex-col  justify-start  my-2 w-full ">
            <label
              htmlFor="password"
              className="pl-3 w-24 mr-2 flex  phone:justify-start phone:pl-0 py-1 phone:w-full"
            >
              Password
            </label>
            <div className="flex">
               <input
              className=" phone:mx-0 phone:w-full phone:my-1 px-4  w-1/2 bg-white-200 appearance-none py-2 border-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
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
              className="phone:w-full phone:mx-0 phone:my-1 px-4  w-1/2 bg-white-200 appearance-none py-2 border-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple placeholder:text-sm"
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
           
          </div>
          {/* THE ALERT BOX */}
          <AlertBox responseTracker={responseTracker} statusTracker={statusTracker} response={response} />

          <div className="flex flex-col justify-center items-center w-full mt-8 ">
            <Button
              type="button"
              text="register"
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
    </Modal>
  );
};

export default TutorRegistrationForm;