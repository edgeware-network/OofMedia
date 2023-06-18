import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { Polybase } from "@polybase/client";
import { Auth } from "@polybase/auth";
import { ethPersonalSignRecoverPublicKey } from "@polybase/eth";


const auth = typeof window !== "undefined" ? new Auth() : null;

export const OofMediaContext = createContext();

async function getPublicKey() {
  const msg = "Registration for your Oofed Account";
  const sig = await auth.ethPersonalSign(msg);
  const publicKey = ethPersonalSignRecoverPublicKey(sig, msg);
  return "0x" + publicKey.slice(4)
}

export const OofMediaProvider = ({ children }) => {

  const db = new Polybase({
    defaultNamespace: "pk/0xe2add09ba8f56a6d54649ce7b6f23552254ce003c3bf28bf6148d39d32eb3a93f22646cc39a13491567e4460baa28c6496caaf34447a9a562e5bc67055470e6e/OofedMedia",
  });

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const login = async () => {

    const res = await auth.signIn();
    // console.log("login response: ", res);
    setUserLoggedIn(!!res);

    const user = await db.collection("User").where("id", "==", res.publicKey).get();
    const userdata = await db.collection("User").record(res.publicKey).get();

    setUsername(userdata.data.username);

    // console.log("user found in database", (user.data.length === 1));

    db.signer(async (data) => {
      return {
        h: "eth-personal-sign",
        sig: await auth.ethPersonalSign(data)
      }
    })

  };

  const createAccount = async (name) => {

    const pubkey = await getPublicKey();
    // console.log("public key:", pubkey,name);

    const user = await db.collection("User").where("id", "==", pubkey).get();
    console.log("user", user);

    if(user.data.length === 0){
      try{
        db.collection("User").create([pubkey,name]);
        const userdata = await db.collection("User").record(res.publicKey).get();
        setUsername(userdata.data.username);
        setUserLoggedIn(true);
      }
      catch(e){
        await db.collection("User").create([]);
      }
    } else {
      console.log("User is already registered");
      // login();
    }
  };

  useEffect(() => {
    auth.onAuthUpdate((authState) => {
      setUserLoggedIn(!!authState);

      db.signer(async (data) => {
        return {
          h: 'eth-personal-sign',
          sig: await auth.ethPersonalSign(data),
        }
      })
    })
  });

  const logout = async () => {
    const res = await auth?.signOut();
    // console.log("logout response: ", res);
    setUserLoggedIn(!!res);

};

  return (
    <OofMediaContext.Provider
      value={{
        login,
        createAccount,
        logout,
        userLoggedIn,
        setUserLoggedIn,
        username,
        setUsername,
      }}
    >
      {children}
    </OofMediaContext.Provider>
  );
};