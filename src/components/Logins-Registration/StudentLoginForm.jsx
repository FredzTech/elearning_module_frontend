import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { Modal } from "../modals";
import { useContext } from "react";
import { ModalContext } from "../modals/ModalProvider";
import Validation from "./Validation";


const StudentLoginForm = () => {
   const {closeModal} = useContext(ModalContext)
   
  
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  //  validating credentials
  //  const [valid, setIsValid] = useState("")
   
   //initialize error message
   const [errors , setErrors] = useState('');

   //login message to check the user data.
   const [message, setMessage] = useState('');
   
  
   const handleSubmit= async (e)=>{
    e.preventDefault();
     setErrors(Validation(email,password));
    try {
      const user = {email,password};
      const{data} = await axios.post("http://localhost:5000/login",user)
      if (data.status == "ok") {
            window.localStorage.setItem("token", data.data);
            
            setMessage("Logging...")
            const timeout = setTimeout(() => {
                
              window.location.reload();
              closeModal();
            }, 3000);
      
      }else{
        setMessage(data.error)
        }}
        catch(err){
          setMessage(err);
          console.log(err);
        }

        
        
   
   }
  return (
    <Modal>
  <div>
  <div className=" bg-white w-[400px] sm:w-[320px]flex flex-col justify-center  px-6 lg:px-8 py-5 border rounded-sm"text-2xl >
  
  <div className="sm:mx-auto ">
    
    <h2 className="lg: mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>
    
  </div>

  <div className="mt-   ">
    
      <form className="mb-0 space-y-6" action="login" method="POST" onSubmit={handleSubmit}>
      
          <div className="mt-1">
            <label className="text-2xl" htmlFor="Email">Email</label>
            <input id="email" name="email" placeholder="Email" type="email" autoComplete="email"
            className="w-full border border-light-grey rounded-sm text-2xl shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
           
            />
          </div>
          {errors.email && <p className="text-red-600 text-xs">*{errors.email}</p> }

        
          <div className="mt-1">
            <label className="text-2xl" htmlFor="password">Password</label>
            <input id="password" name="password" placeholder="Password" type="password" autoComplete="new-password" className="w-full border border-light-grey rounded-sm text-2xl shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
           
            
            />
            
            
          </div>
          
          {errors.password && <p className="text-red-600 text-xs">*{errors.password}</p>}
        
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Log in</button>
        </div>
      </form>
    
  <p className="text-red-600">{message}</p> 
    

  </div>
  <p className="mt-2 text-center text-sm text-gray-600 max-w">
      Not registered?
      
      <Link to={"/register"} 
        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >Sign up
      </Link>
    </p>
</div>
  </div>
  </Modal>
  )
};

export default StudentLoginForm;