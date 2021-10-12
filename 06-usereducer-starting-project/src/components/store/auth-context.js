import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLoggOut: () => {},
});

export default AuthContext;
