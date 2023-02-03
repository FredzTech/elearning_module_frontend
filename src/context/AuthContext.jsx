import React from "react";
import { useContext, createContext, useState } from "react";

// CREATING CONTEXT.
const AuthContext = createContext();

// EXPOSING CONTEXT(WARRIOR)
export const useAuth = () => {
  return useContext(AuthContext);
};

// GIVING CONTEXT MEANING. (PARENT)
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ roles: [2002, 2000, 2001] });
  // const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
