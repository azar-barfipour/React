import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  userId: "",
  isLoggedIn: false,
  login: (token, userId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUserId = localStorage.getItem("userId");
  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);
  const userIsLoggedIn = !!token;

  const loginHandler = (token, userId) => {
    setToken(token);
    localStorage.setItem("token", token);
    setUserId(userId);
    localStorage.setItem("userId", userId);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
