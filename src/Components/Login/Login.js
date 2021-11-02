import React from "react";

import "./login.css";

const Login = () => {



  return (
    <div className="d-flex justify-content-center ">
      <div className="sign-in shadow-lg my-5  px-5">
        <h3 className="text-center pt-5"> LOGIN TO HAPPY TRAVELLING </h3>
        <hr className="w-75 ms-auto me-auto" />
        <div className="d-flex justify-content-around">
          <button
            type="button"
            class="gmail  my-2  "
          >
            Gmail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
