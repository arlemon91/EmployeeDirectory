import React, { Component } from "react";
import API from "../../utils/API";
import PeopleList from "../../components/PeopleList ";

class PeopleCard extends Component {
  state = {
    error: "",
    person: [],
    allPeople: [],
  };

  componentDidMount() {
    this.getRandomUsers();
  }

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

  render() {
    return (
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
