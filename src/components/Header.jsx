import React, { useState } from "react";
import logo from "../images/Logo-SVG-02.svg";
import "../styles/Header.scss";
import HamburgerIcon from "./HamburgerIcon";
import MobileNav from "./MobileNav";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [startExitAnim, setStartExitAnim] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [closeBurger, setCloseBurger] = useState(false);

  const toggleMobileNav = (e) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (e.currentTarget.checked) {
      setShowMobileNav(true);
    } else {
      setStartExitAnim(true);
    }
  };

  const removeNav = () => {
    setShowMobileNav(false);

    // Reset State
    setStartExitAnim(false);
  };

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
          <HamburgerIcon
            toggleMobileNav={toggleMobileNav}
            isAnimating={isAnimating}
            close={closeBurger}
            setClose={setCloseBurger}
          />
          {showMobileNav ? (
            <MobileNav
              startExit={startExitAnim}
              removeNav={removeNav}
              setIsAnimating={setIsAnimating}
              toggleMobileNav={toggleMobileNav}
              setCloseBurger={setCloseBurger}
            />
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
