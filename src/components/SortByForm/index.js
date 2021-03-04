import React from "react";
import "./style.css";

function SortByForm(props) {
  return (
    <ul className="navbar-nav mr-auto">
      <li
        className="nav-item"
        onClick={() => {
          props.handleSortByChange("Years of Experience");
        }}
        className={
          props.currentSortItem === "Years of Experience"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Years of Experience
      </li>
      <li
        className="nav-item"
        onClick={() => {
          props.handleSortByChange("Name");
        }}
        className={
          props.currentSortItem === "Name" ? "nav-link active" : "nav-link"
        }
      >
        Age
      </li>
    </ul>
  );
}

export default SortByForm;
