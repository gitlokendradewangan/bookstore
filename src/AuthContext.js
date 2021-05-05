import React, { createContext, useState } from "react";

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useProvideAuth() {
  const [user, setUser] = useState(false);

  const signin = (user) => {
    return setUser(user);
  };

  const signout = () => {
    return setUser(false);
  };

  return {
    user,
    signin,
    signout,
  };
}

export { authContext };
export default ProvideAuth;
