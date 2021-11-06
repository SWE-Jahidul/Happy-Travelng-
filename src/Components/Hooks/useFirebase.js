import React, { useEffect, useState } from "react";
import initilizeauthentication from "../Firebase/firebase.initialize";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
initilizeauthentication();

const auth = getAuth();

const useFirebase = () => {
  // Singin useing Google
  const [users, setUsers] = useState({});
  const [isloading, setIsloading] = useState(true);

  const signinUsingGoogle = () => {
    setIsloading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        console.log(result.user);
        const logedInuser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUsers(logedInuser);
      })
      .finally(() => setIsloading(false));
  };

  // showing data all tabs
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, []);
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {})

      .finally(() => setIsloading(false));
  };

  return {
    users,
    signinUsingGoogle,
    logOut,
  };
};

export default useFirebase;
