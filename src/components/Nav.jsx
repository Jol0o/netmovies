import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h2>NetMovies</h2>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className="click">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/Tv">TvSeries</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
