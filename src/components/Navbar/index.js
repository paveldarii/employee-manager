import React from "react";
import "./style.css";
function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <img src="./logo.png" width="20%" height="20%" alt="logo"></img>

      <ul className="navbar-nav mr-auto">
        <li
          className="nav-item"
          onClick={() => props.handleNavItemChange("Filter By")}
          className={
            props.currentNavItem === "Filter By"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Filter By
        </li>
        <li className="nav-item">
          <a
            onClick={() => props.handleNavItemChange("Sort By")}
            className={
              props.currentNavItem === "Sort By"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sort By
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
