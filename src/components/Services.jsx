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
              <li>
                Men's cut <span>$12*</span>
              </li>
              <li>
                Women's cut <span>$20</span>
              </li>
              <li>
                Children's cut <span>$7</span>
              </li>
            </ul>
          </div>
          <div className="service-category-list">
            <h2>STYLING</h2>
            <ul>
              <li>
                Flat iron <span>$20</span>
              </li>
              <li>
                Perm <span>$55</span>
              </li>
              <li>
                Updo <span>$65</span>
              </li>
            </ul>
          </div>
          <div className="service-category-list">
            <h2>COLORING</h2>
            <ul>
              <li>
                Root touch-up <span>$25</span>
              </li>
              <li>
                Highlights/Lowlights <span>$35</span>
              </li>
              <li>
                Full color <span>$45</span>
              </li>
              <li>
                Balayage/Ombre <span>$50</span>
              </li>
            </ul>
          </div>
          <div className="service-category-list">
            <h2>ADDITIONAL SERVICES</h2>
            <ul>
              <li>
                Beard trim <span>$8</span>
              </li>
              <li>
                Mustache trim <span>$8</span>
              </li>
              <li>
                Eyebrow wax <span>$3</span>
              </li>
              <li>
                Ear trim <span>$3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
