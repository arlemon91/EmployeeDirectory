import React from "react";
import "./search.css";

function SearchForm(props) {
  return (
    <div className="search">
      <label htmlFor="search">Search by State:</label>
      <input
        type="text"
        value={props.search}
        onChange={props.handleInputChange}
        name="person"
        list="allPeople"
        className="form-control"
        placeholder="Type in a location"
        id="person"
      />
      {/* <datalist id="location">
        {props.location.map((location) => (
          <option value={location} key={location} />
        ))}
      </datalist> */}
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-warning"
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;
