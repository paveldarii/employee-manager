import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img
          id="logo"
          src="./logo.png"
          alt="logo"
          onClick={() => {
            props.resetTheScreen();
          }}
        ></img>

        <div className=" justify-content-end" id="navbarNav">
          <form class="form-inline">
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
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
