import React from "react";
import Navbar from "../Navbar";

import "./signin.css";

const Signin = () => {
  return (
    <nav>
      <Navbar />
      <div className="signin-container">
        <nav className="get-sign-in">
          <strong>Welcome! Let's sign you in.</strong>
          <p>
            We give you free knowledge on how you can optimize internet to boost
            your income.
          </p>
        </nav>
        <div className="signin-body">
          <form action="/login" method="POST" className="signin">
            <div>
              <input type="email" placeholder="Email address" name="email" id="" />
            </div>
            <div>
              <input type="password" placeholder="Password" name="password" id="" />
            </div>
            <div className="submit">
              <button type="submit">Sign In</button>
            </div>
            <p className="reset-password">Forgotten password?</p>
            <hr className="sign-in-hr" noshade />
          </form>
          <div className="create-new-account">
            <p type="button">Create New Account</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Signin;
