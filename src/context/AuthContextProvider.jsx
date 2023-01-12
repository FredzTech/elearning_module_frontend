import React,{useState , useEffect , useContext} from 'react'

export const UserContext = React.createContext();
const LogoutContext = React.createContext();


export function Logout(){
   return useContext(LogoutContext)
}

export const AuthContextProvider = ({children}) => {
  const [isAuthenticated , setAuthentication] = useState(false)
 
  const user = window.localStorage.getItem("token");
  
 
  const logout =()=>{
    window.localStorage.clear();
    
     window.location.href = "./login"
  }
  useEffect(()=>{
		if(user ){
      
      setAuthentication(true)
    };
	}, [])
  
 
 

  return (
    <UserContext.Provider value={isAuthenticated}>
      <LogoutContext.Provider value={ logout }>
        {children}
      </LogoutContext.Provider>
    </UserContext.Provider>
  )
}
