import React from "react";
import "./style.css";

function SortForm(props) {
  return (
    <div>
      <h4>Chose sorting criteria!</h4>
      <div id="sorting-buttons">
        <button
          type="button"
          className="nav-item btn btn-info"
          onClick={() => {
            props.renderSortedEmployee("experience");
          }}
        >
          Experience
        </button>
        <button
          type="button"
          className="nav-item btn btn-info"
          onClick={() => {
            props.renderSortedEmployee("age");
          }}
        >
          Age
        </button>
        <button
          type="button"
          className="nav-item btn btn-info"
          onClick={() => {
            props.renderSortedEmployee("name");
          }}
        >
          Name
        </button>
      </div>
    </div>
  );
}

export default SortForm;
