// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from "react";

export const AuthContex = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContex.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContex.Provider>
  );
}

export const useAuth = ()=> useContext(AuthContex);
