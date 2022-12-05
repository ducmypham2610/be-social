import React, { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const isAuthen = localStorage.getItem("AuthToken");

  const [authContext, setAuthContext] = useState({
    isAuthen,
  });

  const contextDataAuth = { authContext };

  return (
    <AuthContext.Provider value={contextDataAuth}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
