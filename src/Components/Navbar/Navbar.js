import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Happy Traveling{" "}
      </a>
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

          <li className="nav-item">
            <Link to="/login" className="nav-link menu-link">
              Login  
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
