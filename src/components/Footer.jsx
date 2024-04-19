import React from "react";
import "../styles/Footer.scss";
import logo from "../images/Logo-SVG-Pink.svg";

const Footer = () => {
  return (
    <footer id="location">
      <div className="footer-content">
        <img src={logo} alt="logo" className="footer-logo" />
        <div className="misc-info">
          <div className="address-contact">
            <p>1349 Jeffco Blvd.</p>
            <p>Arnold, MO 63010</p>
            <p>314-401-3902</p>
          </div>
          <div className="hours">
            <p>M-F: 10 AM - 7 PM</p>
            <p>Sat: 10 AM - 3 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
