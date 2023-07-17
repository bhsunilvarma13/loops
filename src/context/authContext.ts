import { createContext } from "react";

const authContext = createContext<{
  authStatus: boolean;
  setAuthStatus: () => void;
}>({
  authStatus: false,
  setAuthStatus: () => {},
});

const authProvider = authContext.Provider;

export { authContext, authProvider };
