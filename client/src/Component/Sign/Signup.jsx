import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
                                                                                                       
import Navbar from "../Navbar";
import "./signup.css";

function useQuerry (){
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function QuerryCondition({message}){
  const [error, setError] = useState("")

  useEffect(() => {
    if(message === "passwords_not_match"){
      setError("Passwords does not match")
    }
    if(message === "exists"){
      setError("Email already taken!")
    }
  }, [message])
  
  return(
    <div>
          <div className="sign-up-error">
            <p>{error}</p>
          </div>
    </div>
  )
}



const Signup = () => {
  
  let querry = useQuerry();

  return (
    <nav>
      <Navbar />
      <div className="signup-container">
        <div className="signup-body">
          <nav className="get-sign-up">
            <strong>Welcome! Let's sign you up.</strong>
            <p>
              We give you free knowledge on how you can optimize internet to
              boost your income.
            </p>
          </nav>
          <form action="/api/register" method="POST" className="signup">
            <QuerryCondition message = {querry.get("message")} />
            <div>
              <input type="text" placeholder="First name" name="fName" id="" />
            </div>
            <div>
              <input type="text" placeholder="Last name" name="lName" id="" />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                name="email"
                id=""
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Retype password"
                name="rPassword"
                id="rPassword"
              />
            </div>
            <div className="submit">
              <button type="submit">
                <strong>Submit</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Signup;
