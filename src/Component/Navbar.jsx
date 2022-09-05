import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <h4>Online Business Startup</h4>
      </Link>
      <div className="courses-tab">
        <div className="free-course-tab">
          <Link to="/courses">
            <span>Free course</span>
          </Link>
        </div>
        <div className="bonus">
          <span>Bonus</span>
        </div>
      </div>
      <div>
        <span>Sign in</span>
        <span>Sign up</span>
      </div>
    </header>
  );
};

export default Navbar;
