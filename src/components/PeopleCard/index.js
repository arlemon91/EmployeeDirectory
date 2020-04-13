import React from "react";
import API from "../../utils/API";
import PeopleList from "../PeopleList ";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";

class PeopleCard extends React.Component {
  state = {
    search:"",
    results: [],
    error: "",
    person: [],
    allPeople: [],
  };

  componentDidMount() {
    this.getRandomUsers();
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.targer.value });
  // };

  getRandomUsers = () => {
    API.search()
      .then((res) => {
        const peopleData = res.data.results;
        let data = peopleData.map((user) => {
          let userFormat = {};
          userFormat["image"] = user.picture.medium;
          userFormat["name"] = `${user.name.first} ${user.name.last}`;
          userFormat[
            "location"
          ] = `${user.location.city}, ${user.location.state}`;
          userFormat["phone"] = user.phone;
          userFormat["email"] = user.email;
          return userFormat;
        });
        this.setState({ person: data });
        this.setState({ allPeople: data });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = event => {
    this.setState({search: event.target.value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRandomUsers(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({results: res.data.message });
      })
      .catch(err => this.setState({error: err.message }));
  };

  render() {
    return (
      <SearchForm results={this.state.results} />
      <SearchResults results={this.state.results} />

      <div className="d-flex flex-wrap justify-content-center">
        {this.state.allPeople.map((user) => (
          <PeopleList
            id={this.state.allPeople.indexOf(user)}
            key={this.state.allPeople.indexOf(user)}
            image={user.image}
            name={user.name}
            location={user.location}
            phone={user.phone}
            email={user.email}
          />
        ))}
      </div>
    );
  }
}

export default PeopleCard;
