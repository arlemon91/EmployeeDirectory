import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1> Lemony Employee Directory</h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/searchpage"
            className={
              window.location.pathname === "/searchpage"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search Directory
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
