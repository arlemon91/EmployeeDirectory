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
        name="allPeople"
        type="location"
        placeholder="Type in a location"
        id="location"
      />
      <datalist id="location">
        {props.person.map((location) => (
          <option value={location} key={location} />
        ))}
      </datalist>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;
