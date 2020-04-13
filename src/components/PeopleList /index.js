import React from "react";
import "./PeopleList.css";

function PeopleList(props) {
  return (
    <div className="container">
      <div className="card">
        <ul>
          <img alt={props.name} src={props.image} /> &nbsp;
          <strong>Name:</strong> {props.name} &nbsp;
          <strong>Location:</strong> {props.location} &nbsp;
          <strong>Email:</strong> {props.email} &nbsp;
          <strong>Cell:</strong> {props.phone}
        </ul>
      </div>
    </div>
  );
}

export default PeopleList;
