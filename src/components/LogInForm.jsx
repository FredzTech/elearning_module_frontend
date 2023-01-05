import React from "react";

const LogInForm = () => {
  



  return (
  <div>
  <div className="min-h-screen bg-gray-100 flex flex-col justify-center  px-6 lg:px-8 py-12">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    
    <h2 className="lg: mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>
    
  </div>

  <div className="mt-8  w-full sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form className="mb-0 space-y-6" action="#" method="POST">
      
          <div className="mt-1">
            <input id="email" name="email" placeholder="Email" type="email" autocomplete="email" required className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 "  />
          </div>
        

        
          <div className="mt-1">
            <input id="password" name="password" placeholder="Password" type="password" autocomplete="new-password" className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
          </div>
          
         <div>
         <label for="user-role" className="block text-sm font-medium text-gray-700">Role</label>
          <div className="mt-1">
            <select name="user-role" id="user-role" className="w-full border border-light-grey rounded-lg shadow-sm px-3 py-0.5 
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              <option value="">Student</option>
              <option value="small">Tutor</option>
              <option value="medium">Admin</option>
              {/* <option value="large">50+ employees</option> */}
            </select>
          </div>
         </div>
          
       

       

        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
        </div>
      </form>
    </div>
  </div>
  <p className="mt-2 text-center text-sm text-gray-600 max-w">
      Not yet registered?
      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Register</a>
    </p>
</div>
  </div>
  )
};

export default LogInForm;
