import React, { useEffect, useRef } from "react";
import "../styles/HamburgerIcon.scss";

const HamburgerIcon = ({ toggleMobileNav, isAnimating, close, setClose }) => {
  const checkbox = useRef(null);
  useEffect(() => {
    if (close) {
      checkbox.current.checked = false;
      setClose(false);
    }
  }, [close, setClose]);
  return (
    <label id="hamburger-icon" htmlFor="check">
      <input
        id="check"
        type="checkbox"
        ref={checkbox}
        onClick={(e) => {
          if (isAnimating) {
            e.preventDefault();
          }
          toggleMobileNav(e);
        }}
      />
    </label>
  );
};

export default HamburgerIcon;
