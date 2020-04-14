import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PeopleCard from "./pages/PeopleCard";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <div>
          <Route exact path="/" component={PeopleCard} />
          <Route exact path="/searchpage" component={SearchPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
