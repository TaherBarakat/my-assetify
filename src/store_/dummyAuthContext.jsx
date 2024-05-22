import React, { useState } from "react";
import { createContext } from "react";
export const DummyAuthCtx = createContext({
  isLogged: false,
  login: () => {},
  logout: () => {},
});

export default function DummyAuthCtxProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  function login() {
    setIsLogged(true);
  }
  function logout() {
    setIsLogged(false);
  }
  return (
    <DummyAuthCtx.Provider value={{ isLogged, login, logout }}>
      {children}
    </DummyAuthCtx.Provider>
  );
}
