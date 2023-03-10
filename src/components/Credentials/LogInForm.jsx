import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../axios";
import { AlertBox } from "../../components";
import { useAuth } from "../../context/AuthContext";
const LogInForm = () => {
  const navigate = useNavigate();
  // Updating Context
  const { auth, setAuth } = useAuth();
  // Consuming state.
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(`Login kicked in. Will go back to ${from}`);
  // Login Credentials.
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  // Alert Box Configurations
  const [statusTracker, setStatusTracker] = useState(false);
  const [responseTracker, setResponseTracker] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = { firstName, password };
      const { data, status } = await axios.post("/auth/login", credentials);
      if (status === 200) {
        setAuth(data);
        console.log(`Auth Context set to ${auth}`);
        navigate(from, { replace: true });
      }
    } catch (err) {
      // Destructuring any errors.
      console.log(`Login Error : ${JSON.stringify(err)}`);
      const { message } = err;
      setMessage(message);
      setStatusTracker(false);
      setMessage(message);
      setResponseTracker(true);
      setTimeout(() => {
        setResponseTracker(false);
      }, 3000);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="bg-white flex flex-col justify-center px-6 lg:px-8 py-5 border rounded-sm text-2xl">
        <div className="flex w-full items-center justify-between sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="lg: mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log In
          </h2>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <MdCancel className="text-black text-4xl" />
          </button>
        </div>

        <div className="mt-8  w-full sm:mx-auto sm:w-full sm:max-w-md">
          <form className="mb-0 space-y-6">
            <div className="mt-1">
              <label className="text-2xl" htmlFor="surname">
                Email
              </label>
              <input
                id="email"
                name="surname"
                placeholder="Enter first name"
                type="text"
                // autoComplete="email"
                className="w-full border border-light-grey rounded-sm text-2xl shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:capitalize"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mt-1">
              <label className="text-2xl" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                className="w-full border border-light-grey rounded-sm text-2xl shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <AlertBox
              responseTracker={responseTracker}
              statusTracker={statusTracker}
              response={message}
            />

            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </form>
          {/* 
          <p className="bg-red-600">{message}</p> */}
        </div>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Not registered?
          <Link
            to={"/register"}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInForm;
