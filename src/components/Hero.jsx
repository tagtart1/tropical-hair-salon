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
        <button>Book Now</button>
      </div>
    </section>
  );
};

export default Hero;
