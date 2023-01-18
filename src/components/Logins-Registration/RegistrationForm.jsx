import React,{useState} from "react";
import { Link } from "react-router-dom";
import PasswordStrengthBar from 'react-password-strength-bar' 
import Validation from "./Validation";
import { ModalContext } from "../modals/ModalProvider";
import { useContext } from "react";

const RegistrationForm = () => {
  const {closeModal }= useContext(ModalContext)

   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmpassword, setConfirmPassword] = useState('');
   const [doNotMatch, setDoNotMatch] = useState();
   const [doNotMatchResponse, setDoNotMatchResponse] = useState('');
   const [role, setRole] = useState('Student');
   const [errors , setErrors] = useState('');
   const [message, setMessage] = useState('');
   const[response,setResponse] = useState()
  
   //check the users password
   const handleChange = (event)=>{
    setPassword(event.target.value);
   }
   const handleConfirmPassword = (event)=>{
    setConfirmPassword(event.target.value);
    if(confirmpassword != password){
      setDoNotMatch(true)
      setDoNotMatchResponse('password does not match')
    }else{
      setDoNotMatch(false)
      setDoNotMatchResponse('confirmed')
    }
    
   }


   const handleSubmit=(e)=>{
    e.preventDefault();
    const user = {name,role,email,password};
    setErrors(Validation(email,password));
    try {
      
        fetch("http://localhost:5000/register",{
      method: 'POST',
      headers:{
        "Content-type":"application/json",
        Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(user)
    })
    .then((res)=> res.json())
      .then((data)=> {
        
        if (data.status === "ok") {
           console.log("Registered Successfully");
           window.localStorage.setItem("token",data.data);
           closeModal();
        }else if(data.status === 400){
          setResponse(data.error)
        }
      }).then(()=>{setMessage("Registered Successfully");});
    } catch (error) {
      console.log(error)
    }
  
   }
  return (
  <div>
  <div className="max-h-screen bg-gray-100 flex flex-col justify-center  px-6 lg:px-8 py-6">
  {/* <button className="text-center ml-96"><img src={Cancel}onClick={()=>closeModal()} alt="cancel" height={20} width={20}/></button> */}
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    
    <h2 className="lg: mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
    
  </div>
 
  <div className="mt-8  w-full sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form className="mb-0 space-y-6" action="register" method="POST" onSubmit={handleSubmit}>
       {response && <p className="text-red">weak password</p> }
          <div className="mt-1">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" placeholder="Enter your full name" type="text" autoComplete="name" required 
            className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
           
          </div>
          <div className="mt-1">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="Example: name@gmail.com" type="email" autoComplete="email" required 
            className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-600 text-xs">*{errors.email}</p> }
          </div>

          <div className="mt-1">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" placeholder="Enter password" type="password" autoComplete="new-password" className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            value={password}
            onChange={handleChange}
            />
            <PasswordStrengthBar password={password} minLength={8} />
            {errors.password ? <p className="text-red-600 text-xs">*{errors.password}</p> :<p className="text-xs">*Atleast 8 characters</p>}
            
          </div>
          <div className="mt-1">
            <label htmlFor="password">Confirm Password</label>
            <input id="password" name="password" placeholder="Confirm password" type="password" autoComplete="confirm-password" className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            value={confirmpassword}
            onChange={handleConfirmPassword}
            />
            
            {doNotMatch ? <p className="text-red-600 text-xs">*{doNotMatchResponse}</p> :<p className="text-xs text-green-100">{doNotMatchResponse}</p>}
            
          </div>
          

         <div>
         <label htmlFor="user-role" className="block text-sm font-medium text-gray-700">Role</label>
          <div className="mt-1">
            
            <select name="user-role" id="user-role" className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            value={role}
            onChange={(e)=> setRole(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
              <option value="Admin">Admin</option>
             
            </select>
          </div>
         </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
        </div>
      </form>
    </div>
    <p className=" bg-blue  border rounded ">{message}</p>
    

  </div>
  <p className="mt-2 text-center text-sm text-gray-600 max-w">
      Already registered?
      
      <Link to={"/login"} 
        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >Sign In
      </Link>
    </p>
</div>
  </div>
  )
};

export default RegistrationForm;
