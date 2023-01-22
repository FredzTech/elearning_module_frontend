import React, { useState, useEffect, useContext } from "react";

export const UserContext = React.createContext();
export const LogoutContext = React.createContext();
export const UserdataContext = React.createContext();

export function Logout() {
  return useContext(LogoutContext);
}

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
      });
  }, []);

  const user = window.localStorage.getItem("token");

  const logout = () => {
    window.localStorage.clear();

    window.location.pathname = "/login";
    // reload();
  };
  const reload = () => {
    window.location.reload();
  };
  useEffect(() => {
    if (user) {
      setAuthentication(true);
    } else {
      setAuthentication(false);
    }
  }, []);

  return (
    <UserContext.Provider value={isAuthenticated}>
      <LogoutContext.Provider value={logout}>
        <UserdataContext.Provider value={userData}>
          {children}
        </UserdataContext.Provider>
      </LogoutContext.Provider>
    </UserContext.Provider>
  );
};
