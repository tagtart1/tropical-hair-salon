import React from "react";
import "../styles/About.scss";
import Bottles from "../images/Bottles.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="content">
        <h1>Experience true luxury and relaxation.</h1>
        <p>
          Nestled in the heart of Arnold, Tropical Hair Salon is an acclaimed
          beauty destination known for its holistic approach to enhancing
          natural beauty. The salon boasts a serene and inviting ambiance,
          making it the perfect spot for a relaxing beauty experience. With a
          dedication to excellence, the salon promises to provide only the best
          treatments and customer service to ensure each client leaves feeling
          like a VIP.
        </p>
        <p>
          The salon's profressional staff are comitted to making you feel
          pampered from the moment you enter, with an extensive range of beauty
          services to choose from such as waxing, massages, facials, and more.
        </p>
        <p>
          It is not just a salon but a place of serenity and self-care, where
          individuals can spend time alone or in company. The salon places a
          high priority on customer satisfaction and encourages feedback for
          continuous improvement and exceptional experiences for each visit.
        </p>
        <img src={Bottles} alt="hair salon shampoo bottles" />
      </div>
    </section>
  );
};

export default About;
