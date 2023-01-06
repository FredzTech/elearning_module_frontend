import React,{useState} from "react";
import { Link } from "react-router-dom";



const LogInForm = () => {
  
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [role, setRole] = useState('Student');
   const [message, setMessage] = useState('');
 

   const handleSubmit=(e)=>{
    e.preventDefault();
    // const user = {name,role,email,password};
    fetch('http://localhost:5000/register',{
      method: 'POST',
      headers:{
        "Content-type":"/application/json",
        Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        role,
        email,
        password,

      })
    })
    .then((res)=> res.json())
      .then((data)=> {
        ()=>setMessage("Registered Successfully");
        if (data.status === "ok") {
           
          window.localStorage.setItem("token",data.data);
         history.push(-1)
        }
      });
   }
  return (
  <div>
  <div className="min-h-screen bg-gray-100 flex flex-col justify-center  px-6 lg:px-8 py-12">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    
    <h2 className="lg: mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>
    
  </div>

  <div className="mt-8  w-full sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form className="mb-0 space-y-6" action="register" method="POST" onSubmit={handleSubmit}>
      
          
          <div className="mt-1">
            <input id="email" name="email" placeholder="Email" type="email" autoComplete="email" required 
            className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
        

        
          <div className="mt-1">
            <input id="password" name="password" placeholder="Password" type="password" autoComplete="new-password" className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
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
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Log in</button>
        </div>
      </form>
    </div>
    <p>{message}</p>
    

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
  )
};

export default LogInForm;
