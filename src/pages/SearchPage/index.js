import React, { Component } from "react";
import API from "../../utils/API";
import SearchResults from "../../components/SearchResults";
import SearchForm from "../../components/SearchForm";

class SearchPage extends Component {
  state = {
    search: "",
    location: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getRandomUsers()
      .then((res) => this.setState({ location: res.data.message }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          location={this.state.location}
        />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default SearchPage;
