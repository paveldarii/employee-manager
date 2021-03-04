import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <img src="./logo.png" width="20%" height="20%" alt="logo"></img>

      <ul className="navbar-nav mr-auto"></ul>
    </nav>
  );
}

export default Navbar;
