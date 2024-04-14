import React from "react";
import logo from "../images/Logo-SVG-02.svg";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <img className="logo" src={logo} alt="logo" />
          <li>About Us</li>
          <li>Services</li>
          <li>Location</li>
          <li>Book Now</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
