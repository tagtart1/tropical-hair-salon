import React from "react";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="content">
        <div className="hero-text">
          <p className="big">Relaxation</p>
          <p className="small">Starts Here</p>
        </div>
        <a href="#booking">
          <button className="cta-btn">Book Now</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
