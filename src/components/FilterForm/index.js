import React from "react";
import "./style.css";

function FilterForm(props) {
  return (
    <div className="input-group">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search Name, Job, City, Country"
        aria-label="Search"
        name="search"
        aria-describedby="search-addon"
        onChange={props.handleInputChange}
      />
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={props.handleFormSubmit}
      >
        search
      </button>
    </div>
  );
}

export default FilterForm;
