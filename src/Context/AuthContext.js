import { useState, createContext } from "react";

export const AuthContext = createContext({});

export const Authcontext = ({ children }) => {
  const [authUser, setAuthUser] = useState({});
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
