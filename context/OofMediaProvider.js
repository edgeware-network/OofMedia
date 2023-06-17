import React, { useContext } from "react";
import { createContext } from "react";
import { Polybase } from "@polybase/client";
import { Auth } from "@polybase/auth";
import { ethPersonalSignRecoverPublicKey } from "@polybase/eth";


const auth = typeof window !== "undefined" ? new Auth() : null;

export const OofMediaContext = createContext()


export const OofMediaProvider = ({ children }) => {

  const db = new Polybase({
    defaultNamespace: "pk/0xe2add09ba8f56a6d54649ce7b6f23552254ce003c3bf28bf6148d39d32eb3a93f22646cc39a13491567e4460baa28c6496caaf34447a9a562e5bc67055470e6e/OofedMedia",
  });

  const logIn = async () => {
  };

  const createUser = async () => {

  };

  const logout = async () => {

  };

  return (
    <OofMediaContext.Provider
      value={{
        logIn,
        createUser,
        logout,
      }}
    >
      {children}
    </OofMediaContext.Provider>
  );
};