import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map((result) => (
        <div key={result} className="list-group-item">
          <img alt={result} src={result} /> &nbsp
          <strong>Name:</strong> {result} &nbsp
          <strong>Location:</strong> {result} &nbsp
          <strong>Email:</strong> {result} &nbsp
          <strong>Cell:</strong> {result}
        </div>
      ))}
    </ul>
  );
}

export default SearchResults;
