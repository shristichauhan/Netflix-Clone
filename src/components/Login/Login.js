import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginStyles.css";
import logo from "../../images/netflix-logo.png";

const Login = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `Profile`;
    navigate(path);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <img className="logo" src={logo} alt="Netflix Logo" />
        <button onClick={routeChange} className="signin-button">
          Sign In
        </button>
        <div className="login-gradient" />
      </div>
      <div className="login-body">
        <>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="login-input">
            <form>
              <input type="email" placeholder="Email Address" required />
              <button onClick={routeChange} className="login-getStarted">
                Get Started
              </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
