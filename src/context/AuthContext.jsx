// By default it returns its provider ama parent. #Respect bana,
import React from "react";
import { useContext, createContext, useState } from "react";

// CREATING CONTEXT.
const AuthContext = createContext();

// EXPOSING CONTEXT(WARRIOR)
// If we want to use context we have to go through this custom hook.
export const useAuth = () => {
  return useContext(AuthContext);
};

// GIVING CONTEXT MEANING. (PARENT)
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ roles: [2000] });
  return (
    <AuthContext.Provider value={(auth, setAuth)}>
      {children}
    </AuthContext.Provider>
  );
};
