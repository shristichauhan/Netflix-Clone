import React, { useEffect, useState } from "react";
import logo from "../../images/netflix-logo.png";
import { NavContainer, Logo, Icon } from "./NavStyles";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <>
      <NavContainer
        className={`navbar-container ${show && "navbar-container-black"}`}
      >
        <Logo src={logo} alt="Netflix Logo" />
        <Icon
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Smile!"
        />
      </NavContainer>
    </>
  );
};

export default Navbar;
