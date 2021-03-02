import React from "react";
import "./style.css";
import SpringModal from "../SpringModal";

function EmployeeCard(props) {
  return (
    <div>
      <div className="bg-white card rounded shadow-sm py-5 px-4">
        <img
          src={props.image}
          alt={props.name}
          width="100"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm "
        ></img>
        <div className="content">
          <h5 className="mb-0">{props.name}</h5>
          <span className="small text-uppercase ">{props.occupation}</span>
          <p>{`${props.city}, ${props.country}`}</p>

          <SpringModal
            image={props.image}
            name={props.name}
            occupation={props.occupation}
            location={props.location}
            email={props.email}
            phone={props.phone}
          ></SpringModal>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
