import React from "react";
import { Link } from "react-router-dom";

import useAuth from "../Hooks/useAuth";
const Navbar = () => {
  const { users, logOut } = useAuth();
  console.log("my new user", users);
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
      <h1>
        <a className="navbar-brand" href="#">
          Happy Traveling{" "}
        </a>
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto  ">
          <li className="nav-item active">
            <Link to="/home" className="nav-link menu-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link menu-link">
              Events
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/blogs" className="nav-link menu-link">
              Blogs
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/manageorder" className="nav-link menu-link">
              Manage Order
            </Link>
          </li>


          <li className="nav-item ">
            <Link to="/myorder" className="nav-link menu-link">
              My Order
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link menu-link">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link menu-link">
              Contact
            </Link>
          </li>
          <div className="d-flex flex-row-reverse align-items-center">
            <div className="ms-3">
              {users.email || users.uid ? (
                <img
                  src={users?.photoURL}
                  alt={users.name}
                  width="35"
                  height="35"
                  style={{
                    borderRadius: "50px",
                  }}
                />
              ) : (
                <div></div>
              )}
            </div>

            <div>
              {users.uid || users.email ? (
                <Link to="" className="signin" onClick={logOut}>
                  Log Out
                </Link>
              ) : (
                <Link to="/login" className=" signin ">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
