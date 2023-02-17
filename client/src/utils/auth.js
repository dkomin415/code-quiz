import React, {createContext} from "react";
import Header from "../components/Header";
import Home from '../pages/Home';

export const AuthContext = createContext();

const Auth = ({ loggedIn }) => {
  console.log(loggedIn);
  return (
    <>
      <AuthContext.Provider value={loggedIn}>
        <Header />
        <Home />
      </AuthContext.Provider>
    </>
  )
}

export default Auth;