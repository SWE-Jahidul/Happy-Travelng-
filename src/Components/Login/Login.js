import React, { useState } from "react";

import "./login.css";



import initilizeauthentication from "../Firebase/firebase.initialize";
import { getAuth } from "@firebase/auth";
import useAuth from "../Hooks/useAuth";
initilizeauthentication();


const Login = () => {
  const auth = getAuth();

  const { signinUsingGoogle } = useAuth();
console.log(signinUsingGoogle);
  return (
    <div className="d-flex justify-content-center ">
      <div className="sign-in shadow-lg my-5  px-5">
        <h3 className="text-center pt-5"> LOGIN TO HAPPY TRAVELLING </h3>
        <hr className="w-75 ms-auto me-auto" />
        <div className="d-flex justify-content-around">
          <button
            type="button"
            class="gmail  my-2  "
            onClick={signinUsingGoogle}
          >
            Gmail
          </button>
        </div>
      </div>


      {/* {user.name } */}
    </div>
  );
};

export default Login;
