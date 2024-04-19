import React from "react";
import logo from "../images/Logo-SVG-02.svg";
import "../styles/Header.scss";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="desktop-nav">
          <img className="logo" src={logo} alt="logo" />
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#booking">Book Now</a>
          </li>
        </ul>
        <ul className="mobile-nav-closed-setup">
          <img className="logo" src={logo} alt="logo" />
          <HamburgerIcon />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
