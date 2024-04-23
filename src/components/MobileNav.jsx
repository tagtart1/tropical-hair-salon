import React, { useEffect, useRef } from "react";
import "../styles/MobileNav.scss";

const MobileNav = ({
  startExit,
  removeNav,
  setIsAnimating,
  toggleMobileNav,
  setCloseBurger,
}) => {
  const nav = useRef(null);

  useEffect(() => {
    if (startExit) {
      nav.current.classList.remove("slide-in-left");
      nav.current.classList.add("slide-out-right");
    }
  }, [startExit]);

  const removeSelfAfterExitAnim = () => {
    setIsAnimating(false);
    if (startExit) {
      removeNav();
    }
  };

  const navigateLink = async (e) => {
    // Delay so animation can finish
    e.preventDefault();

    toggleMobileNav(e);
    setCloseBurger(true);

    // Delay so animation can finish
    setTimeout(function () {
      window.location.href = e.target.href;
    }, 500);
  };

  return (
    <div
      className="mobile-nav-container slide-in-left"
      ref={nav}
      onAnimationEnd={removeSelfAfterExitAnim}
    >
      <ul>
        <li>
          <a href="#about" onClick={navigateLink}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={navigateLink}>
            Services
          </a>
        </li>
        <li>
          <a href="#location" onClick={navigateLink}>
            Location
          </a>
        </li>
        <li>
          <a href="#booking" onClick={navigateLink}>
            Booking
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
