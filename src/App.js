import React from "react";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import PeopleCard from "./components/PeopleCard";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Search></Search>
      <PeopleCard></PeopleCard>
    </div>
  );
};

export default App;
