import React from "react";
import styled from "styled-components";
import ErrorPage from "../../images/ErrorPage.png";
import ErrorPageVertical from "../../images/ErrorPageVertical.png";
import logo from "../../images/netflix-logo.png";
import "./ErrorStyle.css";

const Logo = styled.img`
  position: absolute;
  padding: 20px;
  padding-left: 2.9rem;
  width: 100px;
  z-index: 1;

  @media screen and (max-width: 992px) {
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
    padding: 25px;
  }
`;

const Error = () => {
  return (
    <div>
      <Logo src={logo} alt="Netflix Logo" />
      <img className="error-image" src={ErrorPage} alt="Error" />
      <img
        className="error-image-vertical"
        src={ErrorPageVertical}
        alt="Error"
      />
    </div>
  );
};

export default Error;
