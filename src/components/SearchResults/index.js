import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div className="list-group search-results">
      {props.results.map((result) => (
        <div key={result} className="list-group-item">
          <img alt={result} src={result} /> &nbsp;
          <strong>Name:</strong> {result} &nbsp;
          <strong>Location:</strong> {result} &nbsp;
          <strong>Email:</strong> {result} &nbsp;
          <strong>Cell:</strong> {result}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
