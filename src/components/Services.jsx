import React from "react";
import "../styles/Services.scss";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="content">
        <h1>Our Services.</h1>
        <p className="special-info">
          *Men's cuts only $7 on Monday and Thursday!
        </p>
        <div className="services-grid">
          <div className="service-category-list">
            <h2>CUTS</h2>
            <ul>
              <li>Mens's cut | $12*</li>
              <li>Women's cut | $20</li>
              <li>Children's cut | $7</li>
              <li>Trim + style | $15</li>
            </ul>
          </div>
          <div className="service-category-list">
            <h2>STYLING</h2>
            <ul>
              <li>Flat iron | $20</li>
              <li>Perm | $55</li>
              <li>Updo | $65</li>
            </ul>
          </div>
          <div className="service-category-list">
            <h2>COLORING</h2>
            <ul>
              <li>Root touch-up | $25</li>
              <li>Highlights/Lowlights | $35</li>
              <li>Full color | $45</li>
              <li>Balayage/Ombre | $50</li>
            </ul>
          </div>
          <div className="service-category-list">
            <h2>ADDITIONAL SERVICES</h2>
            <ul>
              <li>Beard trim | $8</li>
              <li>Mustache trim | $8</li>
              <li>Eyebrow wax | $3</li>
              <li>Ear trim | $3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
