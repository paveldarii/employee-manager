import React from "react";
import "./style.css";

function FilterForm(props) {
  return (
    <div className="input-group">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search Name"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button type="button" className="btn btn-outline-info">
        search
      </button>
    </div>
  );
}

export default FilterForm;
