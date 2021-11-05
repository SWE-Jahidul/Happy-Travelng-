import React, { useState } from "react";

import "./login.css";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initilizeauthentication from "../Firebase/firebase.initialize";

initilizeauthentication();

const provider = new GoogleAuthProvider();

const Login = () => {
const [user , setUser] = useState({})
const handelGoogleSignIn =() =>{
  const auth = getAuth();
  signInWithPopup(auth,provider)
  .then(result => {
    const{ displayName, email, photoURL } = result.user;
    const logedUser = {
      name: displayName,
      email: email,
      photo: photoURL
    };
    setUser(logedUser)
  })

  .catch(error => {

  })
}

  return (
    <div className="d-flex justify-content-center ">
      <div className="sign-in shadow-lg my-5  px-5">
        <h3 className="text-center pt-5"> LOGIN TO HAPPY TRAVELLING </h3>
        <hr className="w-75 ms-auto me-auto" />
        <div className="d-flex justify-content-around">
          <button
            type="button"
            class="gmail  my-2  "
            onClick={handelGoogleSignIn}
          >
            Gmail
          </button>
        </div>
      </div>


      {user.name }
    </div>
  );
};

export default Login;
