import React from "react";
import "./style.css";
import logo from "./logo.png";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img
          id="logo"
          src={logo}
          alt="logo"
          onClick={() => {
            props.resetTheScreen();
          }}
        />

        <div className=" justify-content-end" id="navbarNav">
          <button
            class="btn btn-sm btn-outline-secondary"
            type="button"
            onClick={() => {
              props.handleNavStatus("sort");
            }}
          >
            Sort
          </button>
          <button
            class="btn btn-sm btn-outline-secondary"
            onClick={() => {
              props.handleNavStatus("filter");
            }}
            type="button"
          >
            Filter
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
