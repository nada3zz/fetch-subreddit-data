import React from "react";
import logo from '../imgs/reddit-logo.png';


const Navbar = ({ activeCategory, handleCategoryChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
      <div>
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="Reddit logo"
            />
        </div>
        <span className="navbar-brand">r/FlutterDev</span>
        <div className="navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li
              className={`nav-item ${activeCategory === "hot" ? "active" : ""}`}
            >
              <button
                className="nav-link btn btn-link bg-danger mx-2 px-4"
                onClick={() => handleCategoryChange("hot")}
              >
                Hot
              </button>
            </li>
            <li
              className={`nav-item ${activeCategory === "new" ? "active" : ""}`}
            >
              <button
                className="nav-link btn btn-link bg-info mx-2 px-4"
                onClick={() => handleCategoryChange("new")}
              >
                New
              </button>
            </li>
            <li
              className={`nav-item ${
                activeCategory === "rising" ? "active" : ""
              }`}
            >
              <button
                className="nav-link btn btn-link bg-success mx-2 px-4"
                onClick={() => handleCategoryChange("rising")}
              >
                Rising
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
