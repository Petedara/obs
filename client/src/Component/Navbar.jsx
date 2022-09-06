import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="link logo">
        <strong>Online Business Startup</strong>
      </Link>
      <div className="courses-tab">
        <div className="free-course-tab">
          <Link to="/courses" className="link course-link">
            <span>Free course</span>
          </Link>
        </div>
        <div className="bonus">
          <Link to="/bonus" className="link course-link">
            <span>Bonus</span>
          </Link>
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
