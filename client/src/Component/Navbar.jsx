import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log("backend data", data);
      });
  });

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
      <div className="make-post">
        <Link to="/post">Post</Link>
      </div>
      <div className="registration">
        <Link to="/login" className="sign-in">
          <span>Sign in</span>
        </Link>
        <Link to="/register" className="sign-up">
          <span>Sign up</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
