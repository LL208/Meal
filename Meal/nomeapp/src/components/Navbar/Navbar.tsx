import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../Search";
import { Link } from "react-router-dom";



const Navbar = function () {
  return (
    <div className="container-fluid bg-secondary fixed-top">
      <nav className="container navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">
          Navbar
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ps-3 pe-3 active" >
              <Link style={{color:"white", textDecoration:"none"}} to="/" >Home</Link>
            </li>
            <li className="nav-item ps-3 pe-3">
            <Link style={{color:"white", textDecoration:"none"}}  to="/menu">Menu</Link>
            </li>
            <li className="nav-item ps-3 pe-3 ">
            <Link style={{color:"white", textDecoration:"none"}} to="/about">About Us</Link>

            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
