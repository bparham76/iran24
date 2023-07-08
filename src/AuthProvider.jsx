import { useContext, createContext } from "react";

import Login from "./Pages/Login";

const AuthContext = createContext();

const AUTH_STATE = true;

const AuthProvider = ({children}) => {
  return <AuthContext.Provider value={null}>{AUTH_STATE ? children : <Login />}</AuthContext.Provider>
}

export default AuthProvider

export const ValidateSession = () => AUTH_STATE;