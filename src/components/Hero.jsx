import React from "react";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="content">
        <div className="hero-text">
          <p className="big">relaxation</p>
          <p className="small">Starts Here</p>
        </div>
        <a href="#booking">
          <button className="cta-btn">BOOK NOW</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
